# Vibe Trip (바이브트립) — Landing Page

AI 여행 플래너 **바이브트립**의 반응형 단일 랜딩페이지입니다.
개발 규칙과 제품 사실관계(Fact Sheet)는 [`CLAUDE.md`](./CLAUDE.md)를 따릅니다.

## Tech Stack

- Next.js 14 (App Router) · React 18 · TypeScript
- Tailwind CSS 3 · Framer Motion · Lucide React
- 배포: 정적 내보내기(`output: "export"`) → Cloudflare Workers Static Assets ([배포 가이드](./docs/DEPLOYMENT.md))
- 다국어: 한국어(`/ko`) · 영어(`/en`), 라이브러리 없이 자체 사전 방식 (`src/i18n/`)
- 폰트: Pretendard Variable (CDN dynamic subset, `src/app/[locale]/layout.tsx`)

## Getting Started

```bash
npm install
npm run dev         # Next 개발 서버 http://localhost:3000 (/ → /ko 고정 이동)
npm run preview     # 빌드 후 배포와 동일한 로컬 Cloudflare 런타임 http://localhost:8787
npm run smoke       # 실행 중인 서버(기본 :8787)에 스모크 테스트 40개
npm run build       # 정적 빌드 → out/ (타입 · 린트 검증 포함)
npm run lint
npm run typecheck   # Worker 타입체크
npm run deploy      # 빌드 후 Cloudflare에 수동 배포 (wrangler login 필요)
```

**Node 22 이상**이 필요합니다(Wrangler 요구 사항, `.nvmrc` 참고). 언어 분기(`/`)를 포함한 배포 동작은 `npm run dev`가 아니라 `npm run preview`로 확인하세요.

## Page Structure

`src/app/[locale]/page.tsx`가 아래 순서로 섹션을 조립합니다. 섹션 컴포넌트는 `src/components/landing/`에 있으며, 모든 문구는 `dict` prop으로 받습니다.

| 순서 | 컴포넌트 | 앵커 | 설명 |
|---|---|---|---|
| — | `Header` + `LanguageSwitcher` | — | 스티키 헤더, 앵커 내비, 모바일 햄버거 메뉴, 스크롤 스파이, [앱 다운로드] CTA, KO/EN 언어 토글 |
| 1 | `HeroSection` + `PhoneMockup` | `#top`, `#download` | 가치 제안, 특허 출원 배지, 스토어 버튼, 타임라인 목업 |
| 2 | `PainSolutionSection` | — | Before(복잡한 준비) vs After(3분 완성) 비교 카드 |
| 3 | `UspBentoSection` | `#features`, `#vibe-pick` | 4대 강점 Bento Grid (AI 동선 · 바우처 OCR · 현지 실시간 케어 · 바이브 픽) |
| 4 | `HowItWorksSection` | `#how-it-works` | Pre-Trip → On-Trip → Post-Trip 인터랙티브 스텝 (탭) |
| 5 | `PassOffsetSection` | `#pass` | 1회 여정 패스 + 일정 공유 후 공유받은 사람이 회원가입하면 공유한 사람에게 여정 패스권 무료 지급 (제휴 예약 100% 환급 프로모션은 주석 처리 — 재개 시 `PassOffsetSection.tsx`와 `src/i18n/dictionaries/{ko,en}.ts`의 `PROMO (paused)` 블록 복원) |
| 6 | `FaqSection` + `FaqAccordion` | `#faq` | FAQ 아코디언, 신뢰 카드, FAQPage JSON-LD |
| — | `Footer` | — | 사업자 정보, 특허 출원 번호, 약관 링크 |

공통 컴포넌트: `Reveal`(스크롤 진입 fade-in-up), `MotionProvider`(reduced-motion 대응), `Container`, `SectionHeading`, `Lines`(제목 줄바꿈), `StoreButtons`.

### 서버/클라이언트 경계

섹션은 기본적으로 서버 컴포넌트이며, 인터랙션이 필요한 파일만 `"use client"`입니다
(`Header`, `LanguageSwitcher`, `HowItWorksSection`, `FaqAccordion`, `Reveal`, `MotionProvider`).
스크롤 애니메이션은 `Reveal`로 감싸서 적용합니다.

```tsx
<Reveal delay={0.1}>...</Reveal>
```

## 다국어 (i18n)

경로 기반(`/ko`, `/en`)이라 언어별로 정적 페이지가 생성되고 SEO(`hreflang`, canonical)에 유리합니다.

| 파일 | 역할 |
|---|---|
| `src/i18n/config.ts` | 지원 언어, 기본 언어(`ko`), 쿠키 이름, Accept-Language 판별 |
| `src/i18n/dictionaries/ko.ts` | **모든 문구의 원본이자 타입 정의** (`Dictionary`) |
| `src/i18n/dictionaries/en.ts` | 영어 번역. `Dictionary` 타입을 따르므로 누락되면 빌드가 실패합니다 |
| `worker/index.ts` | 배포 환경(Cloudflare Worker)에서 `/` 접속 시 `/ko` 또는 `/en`으로 이동 |
| `src/app/[locale]/` | 언어별 레이아웃(`<html lang>`, 메타데이터)과 페이지 |

- **언어 결정 순서:** 사용자가 토글로 고른 언어(쿠키 `NEXT_LOCALE`) → 브라우저 `Accept-Language` → 기본 `ko`.
  한국어·영어 외 언어(예: 일본어, 프랑스어)는 기본값인 한국어로 이동합니다.
- **문구 수정:** 컴포넌트에 문구를 직접 쓰지 말고 `ko.ts`에 추가한 뒤 `en.ts`에도 같은 키를 채웁니다.
- **새 언어 추가:** `LOCALES`에 코드를 추가하고 `dictionaries/<code>.ts`를 만들어 `src/i18n/index.ts`에 등록합니다.
- **환경 변수:** `NEXT_PUBLIC_SITE_URL`(운영: `https://www.vibetrip.co.kr`) — canonical / `hreflang` / OG URL의 기준 주소입니다. 미설정 시 `https://www.vibetrip.co.kr`를 씁니다. CI에서는 GitHub 변수 `SITE_URL`이 전달됩니다.
- **영어 표기 원칙:** 1회 여정 패스 → Single-Trip Pass, 바이브 픽 → Vibe Pick, 특허 출원 → Patent pending/Patent application no. ("granted" 표현 금지).

## Design Tokens

`tailwind.config.ts`의 `vibe` 컬러 팔레트로 관리합니다.

| 토큰 | 값 | 용도 |
|---|---|---|
| `vibe-purple` | `#6C5CE7` | Primary (Vibe Purple) |
| `vibe-deep` | `#4834D4` | Deep Purple |
| `vibe-cyan` | `#00CEC9` | Accent (Electric Cyan) |
| `vibe-bg` | `#07070C` | 페이지 배경 |
| `vibe-light` / `vibe-tint` / `vibe-badge` | `#8B7CFF` / `#A79BFF` / `#C9C1FF` | 보조 퍼플 |
| `vibe-card` / `vibe-card2` | `#12121B` / `#14141F` | 카드 표면 |

다크 전용 디자인이며, 반응형 브레이크포인트는 Tailwind 기본값(`sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280)을 사용합니다.

## 출시 전 채워야 할 값 (TODO)

확정되지 않은 정보는 임의로 작성하지 않고 자리표시자로 두었습니다.

| 항목 | 위치 | 현재 값 |
|---|---|---|
| 사업자 정보 (대표자 · 통신판매업 번호 · 주소) — 언어별 값 | `src/i18n/dictionaries/{ko,en}.ts` → `footer.company` | `[대표자명 입력]`, `[Enter CEO name]` 등 (상호는 입력 완료) |
| 사업자등록번호 (공통) | `src/lib/site.ts` → `COMPANY.businessNo` | `000-00-00000` (고객센터 이메일은 입력 완료) |
| 사이트 도메인 | GitHub 변수 `SITE_URL` (빌드 시 `NEXT_PUBLIC_SITE_URL`로 전달) | 미설정 시 `https://www.vibetrip.co.kr` (운영 도메인, 확정) |
| Cloudflare 시크릿 · 커스텀 도메인 | GitHub 시크릿 `CLOUDFLARE_API_TOKEN` · `CLOUDFLARE_ACCOUNT_ID`, `wrangler.jsonc` `routes` | 미설정 ([docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) 참고) |
| App Store / Google Play URL | `src/lib/site.ts` → `STORE_LINKS` | `#download` |
| 이용약관 · 개인정보처리방침 URL | `src/lib/site.ts` → `LEGAL_LINKS` | `#` |
| FAQ 환불 규정 · 패스권 지급 조건 답변 | `src/i18n/dictionaries/{ko,en}.ts` → `faq.items` | 일반 문구 (확정 정책으로 교체 필요) |
| 패스권 지급 세부 조건 (지급 시점, 수량, 횟수 제한 등) | `src/i18n/dictionaries/{ko,en}.ts` → `pass.rewardCard.note` | "세부 조건은 앱 내 안내" 문구 |

## 콘텐츠 작성 원칙

[`CLAUDE.md`](./CLAUDE.md)의 Fact Sheet 범위 안에서만 기능과 정책을 서술합니다.

- **특허는 "출원 중"입니다.** 출원번호 `제10-2026-0139069호`(영문 `10-2026-0139069`). "특허 등록/획득"(granted) 표현을 쓰지 않습니다.
- 바우처 파싱 지원 유형은 항공 · 호텔 · 교통입니다.
- 모빌리티 딥링크는 한국/글로벌은 Uber, 동남아 6개국(VN·TH·SG·MY·PH·ID)은 Grab입니다.
- 패스 가격 등 확정되지 않은 수치는 넣지 않습니다.

## Git Workflow

`main` 중심의 trunk-based 방식입니다. 상세 규칙은 [`CLAUDE.md`](./CLAUDE.md)의 Git & GitHub Guidelines를 따릅니다.

- **`main` = 운영.** 항상 배포 가능한 상태로 유지합니다. `dev` 브랜치는 없습니다(1인 저장소, 스테이징 환경 없음).
- **작은 변경**(문구, 프로모션 교체, 스타일, 문서)은 로컬 검증 후 `main`에 바로 커밋·푸시합니다.
- **큰/위험한 변경**(구조 변경, 의존성 업그레이드 등)은 최신 `main`에서 짧은 `feat/*`·`fix/*`·`refactor/*`·`docs/*`·`chore/*` 브랜치를 만들어 작업하고, 검증 후 `main`에 머지한 뒤 브랜치를 삭제합니다.
- **PR과 코드 리뷰는 선택**입니다. PR 없이 `git merge` 후 푸시해도 됩니다.
- **커밋:** Conventional Commits(`<type>(<scope>): <subject>`), 메시지는 한국어, 논리 단위별 atomic commit.
- **`git push --force` 금지.** GitHub 브랜치 보호로 `main`의 force push와 삭제도 막아 두었습니다.

### 배포 전 검증

개발 서버(`npm run dev`)가 아니라 **배포와 동일한 로컬 런타임**으로 확인합니다. 언어 분기·헤더·404 처리는 dev와 동작이 다릅니다.

```bash
npm run preview                  # 빌드 + 로컬 Cloudflare 런타임 (http://localhost:8787)
npm run smoke                    # 다른 터미널에서: 스모크 테스트 40개
```

`git push`로 `main`에 올릴 때 **pre-push 훅**(`.githooks/pre-push`)이 `lint` + Worker 타입체크 + `build`를 자동 실행하고, 실패하면 푸시를 막습니다.

- `npm install` 시 `prepare` 스크립트가 `core.hooksPath`를 `.githooks`로 설정합니다. 수동 설정: `npm run prepare`
- `main` 이외 브랜치와 태그 푸시, 문서만 바뀐 푸시(`*.md`, `.gitignore`)는 건너뜁니다.
- 훅은 **작업 트리 기준**으로 검사하므로, 푸시할 내용은 모두 커밋한 뒤 푸시하세요.
- 긴급할 때만 `git push --no-verify`로 우회합니다.

### 배포 파이프라인

`main`에 푸시하면 GitHub Actions가 **verify → deploy → 운영 스모크 테스트 → (실패 시) 자동 롤백** 순으로 진행합니다.
`main`이 아닌 브랜치에 푸시하면 Cloudflare **프리뷰 버전**이 업로드됩니다(운영에는 영향 없음).
최초 설정(API 토큰, GitHub 시크릿, 첫 배포, 도메인)과 안전장치, 롤백 방법은 **[docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)** 를 따르세요.

> Cloudflare 시크릿(`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`)을 등록하기 전에는 `deploy` 잡이 "Deploy skipped" 경고와 함께 건너뜁니다.

### 릴리스와 롤백

- 배포할 때마다 `vMAJOR.MINOR.PATCH` 태그를 붙입니다. (`git tag v0.2.0 && git push origin v0.2.0`)
- **즉시 롤백:** GitHub Actions → *Rollback production* 실행(클릭 한 번). 이후 `git revert <커밋>`으로 `main`도 되돌립니다.
- force push로 히스토리를 고치지 않습니다.
- 팀원이 합류하면 PR 기반 흐름을 다시 검토합니다. 브랜치 프리뷰는 이미 자동으로 만들어집니다.

## Assets

- 로고: `public/assets/vibetrip-logo-white-480.png` (실제 사용, 480×167, 23KB). 원본 `vibetrip-logo-white.png`(1998×698)는 보관용입니다.
  정적 내보내기에서는 Next 이미지 최적화가 없으므로 이미지는 표시 크기에 맞게 미리 줄여서 `public/`에 둡니다.
- 아이콘: 모두 `lucide-react`. 모바일 목업은 이미지 없이 코드로 구성했습니다.
