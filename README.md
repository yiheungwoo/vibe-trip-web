# Vibe Trip (바이브트립) — Landing Page

AI 여행 플래너 **바이브트립**의 반응형 단일 랜딩페이지입니다.
개발 규칙과 제품 사실관계(Fact Sheet)는 [`CLAUDE.md`](./CLAUDE.md)를 따릅니다.

## Tech Stack

- Next.js 14 (App Router) · React 18 · TypeScript
- Tailwind CSS 3 · Framer Motion · Lucide React
- 폰트: Pretendard Variable (CDN dynamic subset, `src/app/layout.tsx`)

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드 (타입 · 린트 검증 포함)
npm run start   # 빌드 결과 실행
npm run lint
```

Node 20 이상을 권장합니다.

## Page Structure

`src/app/page.tsx`가 아래 순서로 섹션을 조립합니다. 섹션 컴포넌트는 `src/components/landing/`에 있습니다.

| 순서 | 컴포넌트 | 앵커 | 설명 |
|---|---|---|---|
| — | `Header` | — | 스티키 헤더, 앵커 내비, 모바일 햄버거 메뉴, 스크롤 스파이, [앱 다운로드] CTA |
| 1 | `HeroSection` + `PhoneMockup` | `#top`, `#download` | 가치 제안, 특허 출원 배지, 스토어 버튼, 타임라인 목업 |
| 2 | `PainSolutionSection` | — | Before(복잡한 준비) vs After(3분 완성) 비교 카드 |
| 3 | `UspBentoSection` | `#features`, `#vibe-pick` | 4대 강점 Bento Grid (AI 동선 · 바우처 OCR · 현지 실시간 케어 · 바이브 픽) |
| 4 | `HowItWorksSection` | `#how-it-works` | Pre-Trip → On-Trip → Post-Trip 인터랙티브 스텝 (탭) |
| 5 | `PassOffsetSection` | `#pass` | 1회 여정 패스 + 제휴 예약 시 100% 환급 |
| 6 | `FaqSection` + `FaqAccordion` | `#faq` | FAQ 아코디언, 신뢰 카드, FAQPage JSON-LD |
| — | `Footer` | — | 사업자 정보, 특허 출원 번호, 약관 링크 |

공통 컴포넌트: `Reveal`(스크롤 진입 fade-in-up), `MotionProvider`(reduced-motion 대응), `Container`, `SectionHeading`, `StoreButtons`.

### 서버/클라이언트 경계

섹션은 기본적으로 서버 컴포넌트이며, 인터랙션이 필요한 파일만 `"use client"`입니다
(`Header`, `HowItWorksSection`, `FaqAccordion`, `Reveal`, `MotionProvider`).
스크롤 애니메이션은 `Reveal`로 감싸서 적용합니다.

```tsx
<Reveal delay={0.1}>...</Reveal>
```

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
| 사업자 정보 (법인명 · 대표자 · 사업자등록번호 · 통신판매업 번호 · 주소 · 고객센터) | `src/lib/site.ts` → `COMPANY` | `[법인명 입력]`, `000-00-00000` 등 |
| App Store / Google Play URL | `src/lib/site.ts` → `STORE_LINKS` | `#download` |
| 이용약관 · 개인정보처리방침 URL | `src/lib/site.ts` → `LEGAL_LINKS` | `#` |
| FAQ 환불 규정 · 환급 조건 답변 | `src/components/landing/faq-data.ts` | 일반 문구 (확정 정책으로 교체 필요) |

## 콘텐츠 작성 원칙

[`CLAUDE.md`](./CLAUDE.md)의 Fact Sheet 범위 안에서만 기능과 정책을 서술합니다.

- **특허는 "출원 중"입니다.** 출원번호 `제10-2026-0139069호`. "특허 등록/획득" 표현을 쓰지 않습니다.
- 바우처 파싱 지원 유형은 항공 · 호텔 · 교통입니다.
- 모빌리티 딥링크는 한국/글로벌은 Uber, 동남아 6개국(VN·TH·SG·MY·PH·ID)은 Grab입니다.
- 패스 가격 등 확정되지 않은 수치는 넣지 않습니다.

## Git Workflow

상세 규칙은 [`CLAUDE.md`](./CLAUDE.md)의 Git & GitHub Guidelines를 따릅니다.

- `main`에는 새 커밋을 직접 만들지 않고, 검증된 `dev`만 머지합니다. 모든 브랜치는 최신 `origin/dev`에서 분기합니다.
- 브랜치 이름: `feat/<이슈번호>-<설명>`, `fix/<이슈번호>-<설명>`, `refactor/<설명>`, `docs/<설명>`, `chore/<설명>`
- 커밋: Conventional Commits(`<type>(<scope>): <subject>`), 메시지는 한국어, 논리 단위별 atomic commit
- 머지: PR은 선택입니다. PR 없이 `git merge` 후 푸시해도 되며, 어느 쪽이든 머지 전에 `npm run build`와 `npm run lint`(테스트가 있다면 함께)가 통과해야 합니다.
- 코드 리뷰와 리뷰어 승인도 필수가 아닙니다. 다른 의견이 필요한 변경일 때만 요청합니다.
- PR을 올린다면 한국어로 Summary / Key Changes / Test Plan을 작성합니다.
- `git push --force` 금지

## Assets

- 로고: `public/assets/vibetrip-logo-white.png` (다크 배경용 흰색 로고, 1998×698 PNG)
- 아이콘: 모두 `lucide-react`. 모바일 목업은 이미지 없이 코드로 구성했습니다.
