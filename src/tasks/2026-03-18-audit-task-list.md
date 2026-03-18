---
title: "March 18 Audit Remediation"
created: "2026-03-18"
source_report: "/reports/audits/2026-03-18_full-audit.md"
priority: "P2"
estimated_effort: "1.5 hours"
status: "Complete"
---

# March 18 audit remediation task list

**Source:** Full Codebase Audit (March 18, 2026)  
**Priority:** P2 - Low  
**Scope:** 4 minor issues across a11y, styles, tokens, and guidelines  

---

## Tasks

### Phase 1: Sentence case heading fixes (15 min)

#### Task 1.1: Fix title case violations

- [x] NotFound.tsx:45 — Change `"Page Not Found"` to `"Page not found"`
- [x] NotFound.tsx:78 — Change `"You Might Be Interested In"` to `"You might be interested in"`
- [x] CategoryFilter.tsx:67 — Change `"Filter by Category"` to `"Filter by category"`
- [x] EnquiryModal.tsx:122 — Change `"Message Sent!"` to `"Message sent!"`
- [x] CheckoutContact.tsx:75 — Change `"Contact Information"` to `"Contact information"`

**Guideline:** Section 2.6 — Sentence case headings  
**Status:** Complete

---

### Phase 2: Replace raw heading tags (30 min)

#### Task 2.1: NotFound.tsx — Replace raw h-tags with Heading component

- [x] Line 45: Replace `<h1 className="wp-404-title">` with `<Heading level={1} className="wp-404-title">`
- [x] Line 78: Replace `<h2 className="wp-404-suggestions-title">` with `<Heading level={2} className="wp-404-suggestions-title">`
- [x] Add `import { Heading } from '../common/Heading'` (or correct path)

**Guideline:** Section 2.3 — Typography components  
**Status:** Complete

#### Task 2.2: Sitemap.tsx — Replace raw h-tags with Heading component

- [x] Line 357: Replace `<h1>` with `<Heading level={1}>`
- [x] Line 424: Replace `<h2>` with `<Heading level={2}>`
- [x] Lines 432, 441, 450, 459, 468, 477: Replace `<h3>` with `<Heading level={3}>`
- [x] Add `import { Heading } from '../common/Heading'` (or correct path)

**Guideline:** Section 2.3 — Typography components  
**Status:** Complete

---

### Phase 3: Remove static inline styles (15 min)

#### Task 3.1: AccountDashboardWidgets.tsx — Move static width to CSS

- [x] Line 164: Remove `style={{ width: '83%' }}`
- [x] Add `width: 83%` to `.wp-account-dashboard__progress-fill` in CSS

**Guideline:** Section 2.1 — No inline styles  
**Status:** Complete

#### Task 3.2: PageCartRetro.tsx — Move transform to CSS

- [x] Line 117: Remove `style={{ transform: 'rotate(180deg)' }}`
- [x] Add BEM class `.retro-cart__continue-arrow` with `transform: rotate(180deg)` in CSS

**Guideline:** Section 2.1 — No inline styles  
**Status:** Complete

#### Task 3.3: RetroDemoLandingPage.tsx — Move marginBottom to CSS

- [x] Line 412: Remove `marginBottom: '0.75rem'` from inline style
- [x] Add `.retro-demo-newsletter__box > svg:first-child { margin-bottom: 0.75rem }` in CSS
- [x] Kept `color: '#ff00ff'` inline (dynamic/thematic)

**Guideline:** Section 2.1 — No inline styles  
**Status:** Complete

---

### Phase 4: Extract hardcoded hex colors (30 min, optional)

#### Task 4.1: RetroDemoLandingPage.tsx — Extract neon colors to constants

- [x] Create neon color constants (`NEON` object) and CSS custom properties (`--retro-neon-*`) for:
  - `#00fff9` (cyan)
  - `#ff00ff` (magenta)
  - `#FFD700` (gold)
  - `#39ff14` (green)
  - `#ff4444` (red)
- [x] Replace all ~20 hardcoded hex values with `NEON.*` references
- [x] CSS custom properties added to `retro-demo-landing.css`

**Guideline:** Section 2.5 — WordPress CSS variables  
**Priority:** Complete  
**Status:** Complete

---

## Summary

| Phase | Tasks | Estimated time | Priority |
|-------|-------|----------------|----------|
| Phase 1: Sentence case | 1 | 15 min | ~~P2~~ Complete |
| Phase 2: Heading component | 2 | 30 min | ~~P2~~ Complete |
| Phase 3: Static inline styles | 3 | 15 min | ~~P2~~ Complete |
| Phase 4: Hex color extraction | 1 | 30 min | ~~P2~~ Complete |
| **Total** | **7** | **~1.5 hours** | **7/7 Complete** |

---

## Success criteria

- [x] Zero title case heading violations
- [x] NotFound.tsx and Sitemap.tsx use `<Heading>` component
- [x] Zero static inline styles in AccountDashboardWidgets, PageCartRetro, RetroDemoLandingPage
- [x] All changes tested in light/dark mode
- [x] No visual regressions

---

**Completed:** March 18, 2026 (Session #17)  
**Source report:** `/reports/audits/2026-03-18_full-audit.md`  
**Remaining:** Phase 4 (optional hex color extraction) deferred