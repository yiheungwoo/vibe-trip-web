# Handoff: Vibe Trip — Hero Section

## Overview
Hero section for Vibe Trip, an AI travel-planning platform. Left column carries the value proposition and app-download CTAs; right column shows a phone mockup of "루티(Routi)", the AI chat assistant, generating a day-by-day itinerary timeline. Dark, Linear.app-inspired tech aesthetic with purple/cyan glow accents.

## About the Design Files
The files in this bundle are **design references built in HTML** (Tailwind CSS classes + inline styles, Lucide icons), not production code to copy as-is. `hero.html` is the working prototype; `HeroSection.tsx` is a direct 1:1 React/TSX transcription of the same markup using `lucide-react`, provided as a starting point. The task is to **recreate this design in the target codebase's existing stack** (its component library, design tokens, routing, image pipeline, etc.) — use the TSX only as a structural reference, not a drop-in file, unless the codebase's stack genuinely matches (React + Tailwind + lucide-react).

## Fidelity
**High-fidelity.** Colors, type sizes, spacing, radii, and copy are final as shown. Treat pixel values, hex codes, and text verbatim.

## Screens / Views
Single section: **Hero**.

### Layout
- Full-bleed `<section>`, background `#07070C`, `overflow: hidden`.
- Two ambient radial blur glows (purple top-left, cyan bottom-right) + a faint grid overlay masked to a soft ellipse behind the content — purely decorative, `pointer-events: none`.
- Header (GNB): flex row, `max-width: 1240px` centered, `justify-content: space-between`, `padding: 24px 24px`.
  - Left: Vibe Trip logo (white version), height 48px, auto width.
  - Right: nav links (기능 / 루티 AI / 요금제 / 고객사례), hidden below `md`, `gap: 32px`, `14px` text, `white/60` → `white` on hover.
- Content grid: `max-width: 1240px` centered, 1 column on mobile, `1.05fr / 0.95fr` two columns from `lg` up, `gap: 64px` (`40px` at `lg`), vertically centered, `padding: 48px 24px 112px` (`80px` top at `lg`).

### Left column — copy & CTAs
1. **Trust badge**: pill, border `#6C5CE7` at 35% opacity, fill `#6C5CE7` at 10%, `13px` medium text `#C9C1FF`, small circular icon chip (shield-check) in front. Text: "특허 출원 기술 (Patent Pending)".
2. **Headline** (`<h1>`): `40px` → `52px` (`sm`) → `58px` (`lg`), weight 700, line-height 1.18, letter-spacing `-0.03em`, white, `text-wrap: balance`.
   - Line 1: "대화 한 번으로 일정 완성,"
   - Line 2: "현지에서는 " + gradient span "내 손안의 AI 밀착 가이드" (gradient `#8B7CFF → #6C5CE7 → #00CEC9`, `background-clip: text`).
3. **Subcopy** (`<p>`): max-width 560px, `16.5px`, line-height 1.75, `white/55`, `text-wrap: pretty`.
   - "수십 개의 탭을 오가던 여행 준비는 이제 그만. AI 플래닝부터 바우처 자동 정리, 실시간 위치 기반 현지 케어까지 바이브트립 하나로 끝내세요."
4. **CTA row**: stacked on mobile, row on `sm`+, `gap: 12px`. Both buttons share the same outline style (unified per latest revision):
   - Border `white/14`, fill `white/[0.03]`, `15px` semibold text `white/90`, radius `12px` (`rounded-xl`), padding `15px 24px`, backdrop-blur. Hover: lift `-2px`, border → `#00CEC9` at 45%, fill → `white/[0.07]`.
   - Button 1: Apple icon (cyan) + "App Store에서 다운로드"
   - Button 2: Play icon (cyan) + "Google Play에서 다운로드"
5. **Trust row**: wrapping flex, `gap: 28px/12px`, `13.5px` text `white/40`, each item = check icon (cyan) + label:
   - 여행 일정 자동 생성
   - 여정 실시간 케어
   - 바우처 자동 정리
   - 내 일정 상품화(C2C)

### Right column — phone mockup
- Two floating trust chips (desktop `xl`+ only), absolutely positioned outside the phone, each a rounded card (`#12121B` at 85%, border `white/10`, blurred, shadowed) with an icon chip + two-line label. They float via a slow vertical bob animation (unsynced delays).
  - Top-left: ticket icon → "바우처 4건 자동 정리" / "메일함에서 불러옴"
  - Bottom-right: map-pin icon → "현재 위치 기반 추천" / "도보 4분 · 지금 영업 중"
- **Phone frame**: 332px wide, radius 42px, gradient border shell (`#1B1B27 → #0C0C14`), inner screen radius 33px, background `#0B0B12`, pill notch at top.
  - Status bar: "9:41" left, signal/wifi/battery icons right.
  - Chat header: gradient avatar (purple→cyan) with sparkles icon + green online dot, "루티 (Routi)" title, cyan subtitle "오사카 일정 생성 완료", overflow-dots icon.
  - Chat body:
    - User bubble (right-aligned, `#6C5CE7` fill): "10월 오사카 3박 4일, 맛집 위주로 짜줘!"
    - Routi bubble (left-aligned, `white/[0.05]` fill, bordered): "좋아요. 도착 첫날 동선을 난바 중심으로 묶었어요 👇"
    - **Timeline card**: bordered/gradient panel, header row "DAY 1 · 10월 17일" + "자동 생성" pill (cyan). Vertical connector line (purple→cyan gradient) with 3 dotted stops:
      1. Purple dot — plane-landing icon — "간사이 공항 도착" — 10:20 — "하루카 특급 · 난바역 45분"
      2. Light-purple dot — bed icon — "호텔 체크인" — 13:00 — "난바 오리엔탈 호텔" + "바우처 확인" chip
      3. Cyan dot, highlighted card (cyan-tinted border/fill) — utensils icon — "현지 맛집 · 쿠시카츠 다루마" — 18:30 — star + "4.7 · 도보 6분 · 웨이팅 15분"
      - Footer button: "전체 일정 보기" + chevron-right, full width, subtle fill.
    - Typing indicator row: 3 pulsing cyan dots (staggered) + "루티가 DAY 2를 짜는 중".
  - Input bar: pill, `white/[0.04]` fill, placeholder "루티에게 무엇이든 물어보세요", circular purple send button with up-arrow icon.

## Interactions & Behavior
- All CTA/nav elements are visual-only in the prototype (no real navigation wired).
- On mount, both columns fade/slide up (`translateY(14px) → 0`, opacity 0 → 1) over 0.7s (left) / 0.9s with 0.15s delay (right) — a one-time entrance, not scroll-triggered.
- Floating chips: continuous vertical bob, 6s and 7s loops respectively, offset delays so they don't sync.
- Typing-indicator dots: continuous opacity pulse (0.5 ↔ 0.9), 1.4s loop, staggered 0.2s/0.4s per dot.
- No responsive breakpoint collapses the phone mockup below `lg` other than reflowing to a single column (mockup stays same fixed 332px width); floating chips only appear at `xl`+ to avoid overlap on narrower viewports.
- No dark/light mode toggle — design is dark-only.

## State Management
Purely presentational — no dynamic state, forms, or data fetching in this prototype. In production this section would likely need:
- App-store/Play-store deep links or redirect logic behind the two download buttons.
- Real download counts / store badges if swapped for official badge assets.

## Design Tokens

**Colors**
- Background: `#07070C`
- Primary (Vibe Purple): `#6C5CE7`, lighter variant `#8B7CFF`, chip-tint `#A79BFF`, badge-text `#C9C1FF`
- Accent (Electric Cyan): `#00CEC9`
- Phone shell: `#1B1B27` → `#0C0C14` gradient, screen `#0B0B12`, card fill `#12121B` / `#14141F`
- Text: white at full, 90%, 80%, 55%, 45%, 40%, 35% opacity for the type hierarchy (no separate gray palette — all white-alpha)

**Typography**
- Font: Pretendard Variable (KR-friendly), system-ui fallback
- Scale used: 58/52/40 (h1), 16.5 (body), 15 (buttons), 14 (nav), 13.5 (trust row), 13 (badge), 12.5 (chat/timeline titles), 11–12 (metadata/timestamps), 10.5 (pills)
- Weights: 700 (h1), 600 (semibold — buttons, titles), 500 (medium — badge, pills), 400 (body)

**Radii**
- Pills/badges/buttons: full or 12px
- Cards (floating chips, timeline items): 13–20px
- Phone shell: 42px outer / 33px inner screen

**Shadows**
- Floating chips: `0 20px 60px -20px rgba(0,0,0,0.9)`
- Phone frame: `0 40px 120px -30px rgba(108,92,231,0.55)`
- Primary button (if solid variant reintroduced): `0 10px 40px -10px rgba(108,92,231,0.9)`

**Spacing**: base unit ~4px via Tailwind scale; section max-width `1240px`, side padding `24px`.

## Assets
- **Logo**: user-provided PNG (`vibetrip_gnb_logo.png`, compass + plane mark + "VIBE TRIP" wordmark, purple gradient on white). A background-removed, white-recolored version (`vibetrip-logo-white.png`) is used in the dark header. Both are bundled in `assets/`. Production should request/produce a proper SVG logo (icon + wordmark, plus a monochrome-white variant) rather than a rasterized recolor.
- **Icons**: all from `lucide-react` (or the `lucide` CDN build in the prototype) — no custom SVGs. Icon names used: `shield-check`, `apple`, `play` (as `PlayCircle`), `check`, `ticket`, `map-pin`, `sparkles`, `more-horizontal`, `signal`, `wifi`, `battery-full`, `plane-landing`, `bed-double`, `utensils`, `star`, `chevron-right`, `arrow-up`.
- No photography/product screenshots — the phone "screenshot" is fully coded UI, not an image.

## Files
- `hero.html` — the working HTML/Tailwind prototype (source of truth for exact markup/classes).
- `HeroSection.tsx` — React/TSX transcription with `lucide-react` icons, same structure and classes.
- `assets/vibetrip-logo-white.png`, `assets/vibetrip-logo.png` — processed logo variants.
- `assets/vibetrip_gnb_logo_original.png` — original user-supplied logo file.
