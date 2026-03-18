---
title: "Full 9-Domain Audit Report"
date: "2026-03-17"
type: "audit-report"
scope: "All 9 audit domains"
---

# Full 9-domain audit report

**Date:** 2026-03-17
**Phase:** Phase 3 — Site-Wide Component Audit (Week 3)

---

## Summary scorecard

| # | Domain | Score | Issues | Priority |
|---|--------|-------|--------|----------|
| 1 | Routes | 95% | 0 critical | Low |
| 2 | Sitemap | 93% | Minor sync gaps | Low |
| 3 | Tokens | 82% | 15 hardcoded colors in TSX/CSS | Medium |
| 4 | CSS | 78% | 48+ `!important`, inline styles | High |
| 5 | A11Y | 85% | 28 bare headings, touch target gaps | Medium |
| 6 | Data | 92% | File count healthy, no oversized files | Low |
| 7 | Responsive | 88% | 21 `max-width` queries (should be `min-width`) | Medium |
| 8 | Styles | 76% | 68+ inline `style={{}}` in 21 files | High |
| 9 | Guidelines | 84% | Heading components, sentence case gaps | Medium |

**Overall health: 86%** (up from 83% on 2026-03-15)

---

## 1. Routes audit (95%)

**Status:** Healthy

- 100+ routes defined, all lazy-loaded via `React.lazy()`
- All template files verified present on disk
- Zero `react-router-dom` imports (correct: all use `react-router`)
- Redirect aliases properly configured (6 convenience redirects)
- Catch-all `*` route renders `PageNotFoundRetro`

**Issues:** None critical.

---

## 2. Sitemap audit (93%)

**Status:** Good

- `/src/app/components/pages/Sitemap.tsx` exists with comprehensive route listing
- Navigation data in `/src/app/data/navigation.ts` covers all major sections
- Gaming/community routes (achievements, leaderboard, events) added since last audit

**Issues:**
- S1: Verify newer routes (bundle-builder, lookbook, referral) appear in Sitemap component

---

## 3. Tokens audit (82%)

**Status:** Needs work

### Hardcoded colors in TSX (inline styles)
| File | Values | Fix |
|------|--------|-----|
| `SpinningCoin3D.tsx` | `#1a1a1a` (x2) | Use `var(--color-ink)` |
| `RetroDemoLandingPage.tsx` | `#ff00ff`, `#39ff14` (x4) | Use retro accent tokens |
| `RetroDemoIndex.tsx` | `#00fff9`, `#ff00ff`, `#FFD700`, `#39ff14`, `#ff6b6b`, `#4ecdc4` (x6) | Use CSS variables |

### Hardcoded colors in CSS (!important)
| File | Values | Count |
|------|--------|-------|
| `filter-sidebar.css` | `#000`, `#fff`, `#f0f`, `#0ff` | ~20 |
| `pagination.css` | `#f0f`, `#fff` | 4 |
| `page-utilities.css` | Retro accent vars with !important | 3 |

**Total hardcoded color violations:** ~39

---

## 4. CSS audit (78%)

**Status:** Needs significant work

### `!important` usage (48+ instances across 5 files)
| File | Count | Severity |
|------|-------|----------|
| `filter-sidebar.css` | ~25 | Critical — entire file uses !important overrides |
| `pagination.css` | 4 | High |
| `page-utilities.css` | 3 | Medium |
| `funky-utilities.css` | 3 | Low (reduced-motion, acceptable) |
| `pp-3d-components.css` | 1 | Low (reduced-motion, acceptable) |

### Missing CSS imports in globals.css
- `pp-3d-components.css` — not imported (display/pp-3d-components.css exists on disk)
- `latest-content-blocks.css` — verify import chain
- `funky-cart.css`, `funky-checkout.css` — verify if used by retro theme

### CSS architecture
- 280+ @imports in globals.css (healthy, well-organized)
- BEM naming consistent across retro components
- Dark mode via `.dark` class selector — consistent

---

## 5. A11Y audit (85%)

**Status:** Good, known remaining items

### Bare headings (28 instances across 10 files)
Files using plain `<h1>`-`<h6>` without `className` or `Heading`/`Typography` components:

| File | Count | Severity |
|------|-------|----------|
| `PageFormShowcase.tsx` | 16 | High — all section headings are bare |
| `PageComponentAPI.tsx` | 1 | Medium |
| `PageIconLibrary.tsx` | 1 | Medium |
| `NotFound.tsx` | 1 | Medium |
| `SinglePostFullWidth.tsx` | 1 | Low (error state) |
| `SinglePostWithSidebar.tsx` | 1 | Low (error state) |
| `TemplateSingleAudio.tsx` | 1 | Medium |
| `TemplateSingleGallery.tsx` | 1 | Medium |
| `TemplateSingleStandard.tsx` | 1 | Medium |

### Touch targets (44px)
- 24+ CSS rules enforce `min-height: 44px` / `min-width: 44px`
- Header, footer, mobile menu, pagination all compliant
- Inline components in product cards verified (pp-products.css: `min-width: 44px; min-height: 44px`)

### Reduced motion
- 6 TSX files reference `prefers-reduced-motion`
- CSS coverage: `pp-products.css`, `pp-3d-components.css`, `funky-utilities.css` have `@media (prefers-reduced-motion: reduce)` blocks
- Gap: Many section CSS files with transitions/animations lack reduced-motion overrides

### Known remaining A11Y tasks
- A11Y2: Touch targets (partial)
- A11Y3: Contrast audit (pending)
- A11Y9: Mega menu keyboard nav
- A11Y11: Product card keyboard nav

---

## 6. Data audit (92%)

**Status:** Healthy

- 67 data files in `/src/app/data/`
- Products split into 5 category files (good modularity)
- 100 total products (20 per category)
- No obvious oversized data files
- Type definitions in `/src/app/types/` (3 files: variants, woocommerce, wordpress)

**Issues:** None critical.

---

## 7. Responsive audit (88%)

**Status:** Good with minor issues

### Media query approach
- 64+ `min-width` queries (mobile-first, correct)
- 21 `max-width` queries across 9 files (should be converted to `min-width`)

### `max-width` offenders
| File | Count | Notes |
|------|-------|-------|
| `mega-menu.css` | 5 | Desktop-first hide patterns |
| `dev-tools-layout.css` | 6 | Desktop-first breakpoint cascade |
| `hero.css` | 2 | Mobile override patterns |
| `product-gallery.css` | 2 | Mobile thumbnail layout |
| `others` | 6 | Various scattered |

### Breakpoint consistency
- Standard breakpoints: 640px, 768px, 1024px (consistent)
- Non-standard: 480px, 375px in dev-tools-layout.css (acceptable for dev tools)
- Non-standard: 639px, 767px, 1023px (off-by-one for max-width, correct usage)

---

## 8. Styles audit (76%)

**Status:** Needs significant work

### Inline style violations (68+ instances across 21 files)

**Critical (should be migrated to CSS):**
| File | Count | Type |
|------|-------|------|
| `PageLivePreview.tsx` | 15+ | Layout, colors, spacing — all should be BEM CSS |
| `RetroDemoLandingPage.tsx` | 5+ | Hardcoded colors and sizing |
| `RetroDemoIndex.tsx` | 3+ | Icon color data |

**Acceptable (dynamic/animation values):**
| File | Count | Type |
|------|-------|------|
| `SpinningCoin3D.tsx` | 10 | 3D transform animations (acceptable) |
| `SubscriptionBox3D.tsx` | 15 | 3D transform animations (acceptable) |
| `FloatingInvaders.tsx` | 1 | Position animation (acceptable) |
| Overlay components (5) | 8 | Dynamic positioning (acceptable) |
| `Progress.tsx`, `Slider.tsx` | 3 | Dynamic width/position (acceptable) |

### Zero Tailwind utilities in components
- Confirmed: No Tailwind utility classes detected in className attributes (previously fixed `text-[#000000]` on FeaturedProductsRetro.tsx)

### Zero Lucide imports
- Confirmed: 0 matches for `from 'lucide-react'` — Phosphor migration complete

---

## 9. Guidelines audit (84%)

**Status:** Good with gaps

### Heading component compliance
- 28 bare `<h1>`-`<h6>` tags found (should use `<Heading>` or `<Typography>`)
- Worst offender: `PageFormShowcase.tsx` (16 bare headings)

### Sentence case compliance
- Navigation labels use title case: "Gift Cards", "Track Order", "Track Orders" — these are navigation labels / proper product names, borderline acceptable
- Component comments reference "Featured Items", "Power Up" — exempt (ALL-CAPS display labels)

### No-Tailwind compliance
- Clean: Zero Tailwind utility classes in TSX components
- All styling via BEM classes and CSS variables

### Dark mode compliance
- All retro components use `.dark` class CSS variable overrides
- Theme toggle functional via `ThemeContext`

### File size compliance (§6.2)
- Need to spot-check: `mega-menu.css` likely exceeds 200 lines
- `filter-sidebar.css` — should be audited for split opportunity

---

## Top 10 action items

| # | Task | Domain | Priority | Effort |
|---|------|--------|----------|--------|
| 1 | Rewrite `filter-sidebar.css` — remove all `!important`, use proper specificity | CSS | P0 | 30 min |
| 2 | Migrate `PageLivePreview.tsx` inline styles to BEM CSS | Styles | P1 | 20 min |
| 3 | Add `className` and `Heading` components to `PageFormShowcase.tsx` bare headings | A11Y | P1 | 15 min |
| 4 | Replace hardcoded colors in `RetroDemoIndex.tsx` / `RetroDemoLandingPage.tsx` with CSS vars | Tokens | P1 | 15 min |
| 5 | Replace hardcoded `#1a1a1a` in `SpinningCoin3D.tsx` with `var(--color-ink)` | Tokens | P2 | 5 min |
| 6 | Convert `max-width` queries in `dev-tools-layout.css` to `min-width` mobile-first | Responsive | P2 | 20 min |
| 7 | Remove `!important` from `pagination.css` | CSS | P2 | 10 min |
| 8 | Add `prefers-reduced-motion` to section CSS files with transitions | A11Y | P2 | 20 min |
| 9 | Add missing `pp-3d-components.css` @import to globals.css | CSS | P2 | 2 min |
| 10 | Fix bare headings in blog template error states | A11Y | P3 | 10 min |

---

**Report generated:** 2026-03-17
**Next audit:** After completing P0/P1 items above
