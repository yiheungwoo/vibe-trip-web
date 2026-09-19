# Vibe Trip Landing Page Development Guide

## 1. Project Overview & Tech Stack
- Single-page responsive marketing/landing website for "Vibe Trip".
- Framework: Next.js 14+ (App Router), TypeScript, Tailwind CSS, Lucide React, Framer Motion.

## 2. Design System & Tokens
- Primary Purple: #6C5CE7 (Vibe Purple), #4834D4 (Deep Purple)
- Accent Cyan: #00CEC9 (Electric Cyan)
- Background: Neutral Dark/Modern Gradient (Linear-style subtle glow)
- Font: Pretendard or Inter (Sans-serif)

## 3. Product Grounding & Fact Sheet (Strict Constraints)
- Current Real Features:
  * Hybrid Voucher Parsing via Gemini Vision OCR (Flight, Hotel, Transit).
  * Real-time Proactive Location/Time-based Care & Docent Push.
  * Vertical Itinerary Timeline with automatic transit/route recomputation.
  * C2C Marketplace ("Vibe Pick") with creator rebate wallet.
  * Country-gated mobility deep link (Uber for KR/Global, Grab for Southeast Asia 6 countries: VN/TH/SG/MY/PH/ID).
- In-progress / Legal status:
  * Patent Pending (특허 출원 중: 실시간 컨텍스트 엔진 및 이종 데이터 파싱). Do NOT claim "Patent Granted".
  * Pricing: Single-trip Pass (Pay-Per-Trip) & Free Trial with B2B Offset.

---

# Git & GitHub Guidelines

- **Branching Model**: trunk-based — `main` is production; there is no `dev` branch (solo repo, no staging environment). Use short-lived `feat/*`, `fix/*`, `refactor/*` branches only for large or risky changes
- **Commit Style**: Conventional Commits (feat, fix, docs, refactor, test, chore)
- **Language**: write commit messages (subject/body) and PR title/description (Summary/Key Changes/Test Plan, etc.) in Korean — except the `<type>(<scope>):` prefix and attribution footers a tool/service appends automatically (e.g. `Co-Authored-By`, `Claude-Session`).
- **Safe Operations**: no `git push --force` (also blocked by GitHub branch protection on `main`), never delete `main`. Committing directly to `main` is allowed once the pre-push checks pass — see "Merge & PR Workflow" below
- **PR Rules**: a PR is optional — merging without a PR is allowed. Code review is also optional (no reviewer approval required). When a PR is opened, a Summary and a Test Plan are required

# Code Comments & Documentation Language

Write new code comments in English. Existing code across all four services is heavily commented in Korean — leave those as-is except where you're already touching that file for other reasons, in which case translating its comments to English along the way is welcome. There's no dedicated translation sweep planned (large volume, and Korean-language comments frequently quote real UI strings verbatim — mistranslating one of those would make the comment and the code it documents diverge).

The same applies to this repo's own `CLAUDE.md`/`AGENTS.md` files: write new/updated content in English. A quoted Korean feature or screen name (e.g. "AI 가이드", "마이페이지") stays in Korean since it's the literal on-screen text — only the surrounding explanation needs to be English.

Product-facing text is a separate matter: the site is bilingual (Korean default at `/ko`, English at `/en`) and all user-visible strings live in the i18n dictionaries, not in components.
- `src/i18n/dictionaries/ko.ts` is the source of truth and defines the `Dictionary` type; `en.ts` must satisfy the same type, so a missing translation fails the build.
- Every new or changed UI string (labels, aria-labels, metadata, FAQ answers, error text) must be added to **both** dictionaries in the same change. Never hard-code visible text in a component, and never leave a language untranslated.
- English copy must obey the Fact Sheet like the Korean copy: patent is "pending"/"application", never "granted"; use the established terms (Single-Trip Pass, Vibe Pick, Voucher OCR, Rebate Wallet).
- Commit messages and PR text stay Korean per the Git guidelines above.

# Language & Output Rules
- Write all explanations, plans, and conversational responses in Korean.
- Ensure system logs, error messages, and build/test CLI outputs are in English.

# Repository Collaboration & Workflow Guidelines

## 1. Branch Strategy
- **Trunk**: `main` is production and must always be deployable. There is no `dev` branch: the site is tested locally against a production build and released straight from `main`.
- **Small changes** (copy, promo swaps, styling, docs): commit directly to `main` after local verification.
- **Large or risky changes** (structural refactors, i18n-style rewrites, dependency upgrades): work on a short-lived branch forked from the latest `origin/main`, verify it locally, merge it into `main` (fast-forward or merge commit), then delete the branch. Keep such branches short — days, not weeks.
- **When to revisit**: if a second collaborator joins, or a staging/preview environment (e.g. per-branch preview deployments) is introduced, reconsider a PR-based flow.
- **Naming Conventions** (short-lived branches):
  - `feat/<issue-number>-<short-description>`: new feature
  - `fix/<issue-number>-<short-description>`: bug fix
  - `refactor/<short-description>`: code structure improvement/refactor
  - `docs/<short-description>`: docs added/updated
  - `chore/<short-description>`: build config, dependency updates, etc.

---

## 2. Commit Standards
- **Format**: strictly follow Conventional Commits.
  - Format: `<type>(<scope>): <subject>`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Body & Footer**:
  - State the reason/impact when it isn't obvious from the subject alone.
  - Reference related issues in the footer (e.g. `Closes #42`).
- **Granularity**: one logical change per commit (atomic commits) — don't bundle unrelated changes into a single commit.

---

## 3. Merge & PR Workflow
- **PR is optional**: a branch may be merged into `main` either through a PR or directly with `git merge` + `git push`, without a PR. Force pushes stay prohibited in both cases.
- **Review is optional**: code review and reviewer approval are not required to merge, whether or not a PR is used. Request one only when a change warrants a second opinion.
- **Test against the production runtime**: verify with `npm run preview` (static build served by the local Cloudflare Workers runtime, http://localhost:8787) and `npm run smoke`, not only `npm run dev`. The `/` locale redirect, security headers and 404 handling only exist in the Worker/asset layer, not in `next dev`.
- **Prerequisites**: before pushing to `main` (or merging into it), all of the following must pass:
  1. Lint passes (`npm run lint`)
  2. Worker type-check (`npm run typecheck`) and production build (`npm run build`) succeed
  3. The test suite passes (`npm test`), once tests exist
- **Pre-push hook**: `.githooks/pre-push` runs the lint + Worker type-check + build checks automatically on pushes to `main` (docs-only pushes are skipped). It is enabled by `npm install` (the `prepare` script sets `core.hooksPath`). Bypass with `git push --no-verify` only in an emergency.
- **Release & rollback**: tag each release as `vMAJOR.MINOR.PATCH` (e.g. `v0.2.0`). For an incident, run the "Rollback production" GitHub workflow first (instant), then `git revert` the offending commit on `main` (never a force push).

## 4. Deployment (Cloudflare)
- **Architecture**: `next build` (`output: "export"`) writes a static site to `out/`, served by Cloudflare Workers Static Assets (`wrangler.jsonc`). The only server code is `worker/index.ts`, which handles `/` (locale redirect); every other path is served straight from the asset store so `public/_headers` (security headers, cache rules) applies. Details: `docs/DEPLOYMENT.md`.
- **Pipeline** (`.github/workflows/ci-cd.yml`): every push runs `verify` (lint, type-check, build, smoke test against the local Workers runtime). A push to `main` deploys only after `verify` passes, deploys the exact verified artifact, smoke-tests production, and rolls back automatically if that fails. Other branches get a Cloudflare preview version.
- **Never bypass the gates**: do not deploy from a laptop with `wrangler deploy` except for the very first deploy or an emergency, and do not weaken `scripts/smoke-test.sh` to make a run pass.
- **Adding external resources** (analytics, fonts, embeds): update the CSP in `public/_headers` in the same change, and add a check to `scripts/smoke-test.sh` if the behavior is critical.
- **Secrets**: only `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` (GitHub secrets). Never commit tokens, `.dev.vars` or `.env*` files; the repo is public.
- **PR Description Template** (only when a PR is opened; written in Korean, per Language above):
  ```markdown
  ## 📌 Summary
  <!-- What changed -->

  ## 🔍 Key Changes
  <!-- Key changes and the reasoning behind them -->
  - Change 1
  - Change 2

  ## 🧪 Test Plan
  <!-- How and where this was verified (local/staging) -->

  ## 🔗 Related Issues
  - Closes #
