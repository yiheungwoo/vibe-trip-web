# 배포 가이드 (Cloudflare Workers)

사이트는 **정적 파일**(`next build` → `out/`)을 **Cloudflare Workers Static Assets**로 서빙합니다.
서버 로직은 `/` 접속 시 언어(`/ko`, `/en`)로 보내는 작은 Worker(`worker/index.ts`) 하나뿐입니다.

```
git push (main)
   └─ GitHub Actions ── verify ──► deploy ──► 운영 스모크 테스트 ──(실패 시)──► 자동 롤백
                          │
                          └─ lint · Worker 타입체크 · 빌드 · 로컬 Workers 런타임 스모크 테스트(40개 검사)
```

| 파일 | 역할 |
|---|---|
| `wrangler.jsonc` | Worker 이름, 정적 자산 폴더(`out/`), 404·트레일링 슬래시 처리, `/`만 Worker 실행 |
| `worker/index.ts` | `/` → `/ko` 또는 `/en` 리디렉션 (쿠키 > Accept-Language > 기본 ko) |
| `public/_headers` | 보안 헤더(CSP, HSTS 등)와 캐시 규칙 |
| `scripts/smoke-test.sh` | 로컬·CI·운영에서 동일하게 쓰는 스모크 테스트 |
| `.github/workflows/ci-cd.yml` | verify → deploy → (실패 시 롤백), 브랜치 프리뷰 |
| `.github/workflows/rollback.yml` | GitHub 화면에서 클릭 한 번으로 수동 롤백 |
| `.github/dependabot.yml` | 주간 의존성·액션 업데이트 |

## 1. 최초 1회 설정

Worker `vibe-trip-web`은 이미 Cloudflare에 있고 `www.vibetrip.co.kr`이 연결돼 있습니다.
첫 배포는 **기존 정적 파일을 새 사이트로 교체**합니다. Cloudflare 계정과 토큰이 필요한 작업은 **직접 진행**해야 합니다.

### 1-0. 기존 Worker 상태 (확인 완료)

| 항목 | 상태 | 결과 |
|---|---|---|
| 이전에 배포한 HTML | 유지할 페이지 없음 | 새 사이트로 통째로 교체됩니다. 옛 주소는 404가 되며, 별도 보존·리디렉션 작업은 필요 없습니다. |
| Git 연결 (Settings → Builds) | 해제됨 | GitHub Actions만 배포합니다(이중 배포 없음). **다시 연결하지 마세요.** |
| 대시보드 변수·바인딩 | 없음 | 덮어써질 설정이 없어 `keep_vars`가 필요 없습니다. |
| 커스텀 도메인 | `www.vibetrip.co.kr` | `wrangler.jsonc`의 `routes`에 선언해 설정 파일을 기준으로 관리합니다(1-4). |
| workers.dev 주소 | 켜 둠(`"workers_dev": true`) | 브랜치 프리뷰와 CI의 스모크 테스트 대체 주소가 workers.dev를 씁니다. 끄려면 `wrangler.jsonc`에서 `workers_dev`를 `false`로 바꾸세요. 프리뷰(`preview_urls`)도 workers.dev 주소를 쓰므로 함께 `false`로 바꾸는 것이 확실합니다. |

> **배포 전에 한 가지만 직접 기록하세요.** 현재 운영 중인 버전 ID(`npx wrangler deployments list` 또는 대시보드 Deployments 탭)입니다.
> 새 버전에 문제가 있을 때 이 버전으로 되돌리는 기준점입니다. 기존 버전은 최근 100개 안에 남아 있어 복구할 수 있습니다.

### 1-1. Cloudflare API 토큰과 계정 ID

1. Cloudflare 대시보드 → **My Profile → API Tokens → Create Token**
2. 템플릿 **"Edit Cloudflare Workers"** 를 선택합니다.
   - **Account Resources:** 사용하는 계정 하나로 제한
   - **Zone Resources:** `vibetrip.co.kr` 존으로 제한. `wrangler.jsonc`가 `www.vibetrip.co.kr` 도메인을 선언하므로 필요합니다.
     배포가 도메인 관련 권한 오류를 내면 **Zone → DNS: Edit** 권한을 추가하세요.
3. 생성된 토큰과 **Account ID**(대시보드 우측 사이드바 또는 Workers 개요 화면)를 복사합니다.

### 1-2. GitHub 시크릿 등록

토큰은 채팅이나 코드에 붙여 넣지 말고 터미널에서 직접 등록하세요. (입력 내용은 화면에 표시되지 않습니다.)

```bash
gh secret set CLOUDFLARE_API_TOKEN    # 프롬프트에 토큰 붙여넣기
gh secret set CLOUDFLARE_ACCOUNT_ID   # 프롬프트에 Account ID 붙여넣기
```

> 시크릿이 없으면 `deploy` 잡은 **실패하지 않고 "Deploy skipped" 경고와 함께 건너뜁니다.**
> (검증은 계속 수행됩니다.) 배포가 안 되고 있다면 Actions 실행 요약을 확인하세요.

### 1-3. 프리뷰로 먼저 확인한 뒤 배포

Worker가 이미 있으므로 **운영에 영향 없이** 새 사이트를 먼저 확인할 수 있습니다.
`versions upload`는 새 버전만 만들고 배포하지 않아, 기존 사이트는 계속 서비스됩니다.

```bash
npx wrangler login                         # 브라우저로 Cloudflare 로그인
npx wrangler deployments list              # 현재 운영 버전 ID 기록 (롤백 기준)
npm run build
npx wrangler versions upload --preview-alias first-check
# 출력된 프리뷰 주소(https://first-check-vibe-trip-web.<계정>.workers.dev)로 확인:
./scripts/smoke-test.sh https://first-check-vibe-trip-web.<계정>.workers.dev
```

이상이 없으면 `main`에 푸시해 파이프라인으로 배포합니다. (수동 배포는 `npm run deploy`)
프리뷰는 커스텀 도메인 설정을 적용하지 않고, 도메인 선언(`routes`)은 실제 배포 때 적용됩니다.

### 1-4. 커스텀 도메인 (`www.vibetrip.co.kr`)

이미 이 Worker에 연결돼 있고, `wrangler.jsonc`의 `routes`에도 같은 도메인을 선언해 두었습니다.
**설정 파일을 기준으로 관리**하세요. 배포 시 `routes`를 생략하면 대시보드에서 붙인 라우트가 덮어써질 수 있고, Cloudflare도 wrangler를 쓰면 대시보드 수정을 피하라고 권합니다.

> **루트 도메인(`vibetrip.co.kr`)** 은 코드로 처리하지 않습니다. canonical은 `www`이므로,
> 필요하면 Cloudflare 대시보드 → Rules → **Redirect Rules**에서 `vibetrip.co.kr` → `https://www.vibetrip.co.kr`(301)을 추가하세요.

### 1-5. `SITE_URL` 변수 설정 (권장)

canonical / `hreflang` / Open Graph 주소와 배포 후 스모크 테스트가 이 값을 씁니다.

```bash
gh variable set SITE_URL --body "https://www.vibetrip.co.kr"
```

미설정이면 canonical은 코드의 기본값(같은 주소)을, 스모크 테스트는 배포 출력의 `workers.dev` 주소를 사용합니다.
운영 도메인으로 검사하려면 변수를 설정하세요.

## 2. 일상 사용

| 하고 싶은 일 | 방법 |
|---|---|
| 로컬에서 운영과 동일하게 확인 | `npm run preview` (빌드 후 로컬 Cloudflare 런타임, http://localhost:8787) |
| 로컬 서버에 스모크 테스트 | 다른 터미널에서 `npm run smoke` |
| 운영 반영 | `main`에 푸시 (pre-push 훅 → CI verify → deploy → 스모크 테스트) |
| 브랜치 미리보기 | `main`이 아닌 브랜치에 푸시하면 프리뷰 버전 업로드. URL은 Actions 실행 요약에 표시 |
| 수동 배포 | `npm run deploy` (로컬 `wrangler login` 필요) |

> `npm run dev`(Next 개발 서버)에서는 `/` 언어 분기가 Worker가 아니라 `app/page.tsx`의 고정 리디렉션(`/ko`)으로 동작합니다.
> 배포와 동일한 동작은 `npm run preview`로 확인하세요. (개발 서버에서 `/fr` 같은 미지원 언어 경로는 404가 아니라 오류 화면이 나옵니다. 배포본은 정상적으로 404입니다.)

## 3. 안전장치

배포가 잘못될 수 있는 지점마다 한 겹씩 막습니다.

| 단계 | 장치 | 막아 주는 것 |
|---|---|---|
| 푸시 전 (로컬) | `.githooks/pre-push`: lint + Worker 타입체크 + 빌드 | 깨진 코드가 `main`에 올라가는 것 |
| 푸시 후 | GitHub Actions `verify`: 같은 검사 + **로컬 Workers 런타임에서 스모크 테스트 40개** | 훅을 우회(`--no-verify`)했거나 환경 차이로 통과한 경우 |
| 배포 | `deploy`는 `verify` 통과 후에만 실행, **검증된 빌드 산출물(artifact)을 그대로 배포** | 테스트한 것과 다른 것이 나가는 것 |
| 배포 | 배포 잡은 겹치지 않고(`concurrency`), 진행 중에 취소되지 않음 | 동시 배포·중간 취소로 인한 불완전 배포 |
| 배포 후 | 운영 URL 스모크 테스트 | 로컬에선 됐지만 Cloudflare에서 깨진 경우 |
| 배포 후 실패 | **자동 롤백**(`wrangler rollback`) | 문제가 있는 버전이 계속 노출되는 것 |
| 항상 | 브랜치 보호: `main` force push·삭제 금지 | 히스토리 손상 |
| 항상 | 액션은 커밋 SHA로 고정, `persist-credentials: false`, 시크릿은 deploy/preview 잡에만 노출 | 공급망·토큰 유출 위험 |
| 응답 | 보안 헤더(CSP, HSTS, `X-Frame-Options` 등) | 클릭재킹, MIME 스니핑 등 |
| 주기적 | Dependabot 주간 업데이트, CI의 `npm audit`(경고) | 취약한 의존성 방치 |

### 스모크 테스트가 확인하는 것

언어 리디렉션(쿠키·Accept-Language·쿼리 유지), `/ko`·`/en` 내용과 `hreflang`, 404 처리, 보안 헤더, 정적 파일 캐시,
그리고 사이트 원칙(특허 "등록" 표현 없음, 출원번호 표시)입니다. 새 기능을 추가하면 `scripts/smoke-test.sh`에 검사도 추가하세요.

### CSP 참고

`script-src`와 `style-src`에 `'unsafe-inline'`이 들어 있습니다. 정적 내보내기가 Next.js 하이드레이션 스크립트를 HTML에 인라인으로 넣고,
Framer Motion이 인라인 스타일을 쓰기 때문입니다. 다만 외부 도메인 스크립트 로드, 플러그인(`object-src`), 프레임 삽입(`frame-ancestors`),
폼 전송 대상은 제한합니다. Pretendard 폰트 때문에 `https://cdn.jsdelivr.net`만 스타일·폰트로 허용합니다.
새 외부 리소스(분석 스크립트, 폰트 등)를 추가하면 `public/_headers`의 CSP도 함께 수정해야 합니다.

## 4. 롤백

Worker는 최근 **100개 버전**을 보관하므로 빠르게 되돌릴 수 있습니다. 어느 방법이든 서비스에는 수 초 안에 반영됩니다.

1. **GitHub 화면 (권장):** Actions → **Rollback production** → Run workflow. 버전 ID를 비우면 직전 버전으로 돌아가고, 롤백 후 스모크 테스트를 실행합니다.
2. **CLI:** `npx wrangler deployments list`로 버전 확인 → `npx wrangler rollback [version-id] -m "사유"`
3. **대시보드:** Workers & Pages → `vibe-trip-web` → Deployments → 이전 버전의 **Rollback**

> 롤백은 **운영 서비스만** 되돌립니다. 원인이 된 커밋은 `git revert <커밋>`으로 `main`에서도 되돌리세요.
> (그렇지 않으면 다음 푸시에서 같은 문제가 다시 배포됩니다.)

## 5. 문제 해결

| 증상 | 확인 |
|---|---|
| 푸시해도 배포가 안 됨 | Actions 실행 요약에 "Deploy skipped"가 있는지 확인 → 시크릿 미설정 |
| `deploy` 잡이 인증 오류로 실패 | 토큰 권한(Edit Cloudflare Workers)과 Account ID 확인, 토큰 만료 여부 |
| 배포가 `Authentication error`나 도메인(route) 관련 권한 오류로 실패 | 토큰의 **Zone Resources**에 `vibetrip.co.kr`이 포함됐는지, Workers Routes(필요하면 DNS) 편집 권한이 있는지 확인 |
| 프리뷰 URL이 안 나옴 | Worker가 한 번도 배포되지 않은 경우(1-3 참고). 프리뷰 실패는 브랜치를 실패로 만들지 않습니다 |
| 스모크 테스트가 `Site did not return 200` | 배포 직후 전파 지연일 수 있어 최대 60초 재시도합니다. 계속 실패하면 자동 롤백됩니다 |
| `/ko` 대신 `/`에서 404 | `wrangler.jsonc`의 `run_worker_first: ["/"]`와 `worker/index.ts`가 배포됐는지 확인 |
| 폰트가 안 나옴 | CSP가 `https://cdn.jsdelivr.net`을 막고 있지 않은지(`public/_headers`) 확인 |
