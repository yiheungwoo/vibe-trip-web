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

- **Branch Naming**: follow `feat/*`, `fix/*`, `refactor/*`
- **Commit Style**: Conventional Commits (feat, fix, docs, refactor, test, chore)
- **Language**: write commit messages (subject/body) and PR title/description (Summary/Key Changes/Test Plan, etc.) in Korean — except the `<type>(<scope>):` prefix and attribution footers a tool/service appends automatically (e.g. `Co-Authored-By`, `Claude-Session`).
- **Safe Operations**: no `git push --force`, no direct commits to `main` (merging a validated branch into `main` is allowed — see "Merge & PR Workflow" below)
- **PR Rules**: a PR is optional — merging without a PR is allowed. Code review is also optional (no reviewer approval required). When a PR is opened, a Summary and a Test Plan are required

# Code Comments & Documentation Language

Write new code comments in English. Existing code across all four services is heavily commented in Korean — leave those as-is except where you're already touching that file for other reasons, in which case translating its comments to English along the way is welcome. There's no dedicated translation sweep planned (large volume, and Korean-language comments frequently quote real UI strings verbatim — mistranslating one of those would make the comment and the code it documents diverge).

The same applies to this repo's own `CLAUDE.md`/`AGENTS.md` files: write new/updated content in English. A quoted Korean feature or screen name (e.g. "AI 가이드", "마이페이지") stays in Korean since it's the literal on-screen text — only the surrounding explanation needs to be English.

This is unrelated to product-facing text: this is a Korean-only consumer app with no i18n layer, so every UI label/error/toast string stays in Korean regardless — never "translate" one of those. Commit messages and PR text also stay Korean per the Git guidelines above.

# Language & Output Rules
- Write all explanations, plans, and conversational responses in Korean.
- Ensure system logs, error messages, and build/test CLI outputs are in English.

# Repository Collaboration & Workflow Guidelines

## 1. Branch Strategy
- **Base Branch**: every new branch/worktree must fork only from the latest `dev` (i.e. `origin/dev`). `main` only ever merges in a validated `dev` — never branch directly from `main`. If a new worktree was created off `main` (e.g. by a tool's default), re-branch with `git checkout -b <branch> origin/dev` or rebase onto `origin/dev` before committing.
- **Direct Commits**: never author new commits directly on `main`. Bringing a validated `dev` into `main` via a merge (with or without a PR) is allowed.
- **Naming Conventions**:
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
- **PR is optional**: a branch may be merged (feature → `dev`, validated `dev` → `main`) either through a PR or directly with `git merge` + `git push`, without a PR. Force pushes stay prohibited in both cases.
- **Review is optional**: code review and reviewer approval are not required to merge, whether or not a PR is used. Request one only when a change warrants a second opinion.
- **Prerequisites**: before merging (with or without a PR), all of the following must pass:
  1. Local build succeeds (`npm run build` / `gradle build` etc.)
  2. Lint/format checks pass (`npm run lint` etc.)
  3. The full test suite passes (`npm test` etc.)
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
