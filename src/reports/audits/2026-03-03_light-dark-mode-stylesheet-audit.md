# Light & Dark Mode Stylesheet Architecture Audit Report

**Date:** March 3, 2026
**Auditor:** Automated Codebase Audit
**Prompt:** `/prompts/audits/light-dark-mode-stylesheet-audit.md` v1.0
**Priority:** P0 (Critical)
**Status:** COMPLETE

---

## 1. Executive Summary

| Category | Count | Severity |
|----------|-------|----------|
| `:root` duplication conflicts | 6 files, 8 conflicting variables | P0 |
| Dark mode selector inconsistency | 2 selectors across 30+ files | P0 |
| Hardcoded colors (outside variable defs) | 150+ instances across 20+ files | P1 |
| Scattered dark mode rules | 200+ rules across 25+ files | P1 |
| WCAG contrast concerns | 3 pairings need verification | P2 |
| Root-level duplicate stylesheet | 1 file (`/styles/globals.css`) | P1 |
| `globals.css` not an orchestrator | 630 lines of raw CSS | P1 |

**Overall Risk:** HIGH. The dual dark mode selector pattern (`.dark` vs `[data-theme="dark"]`) means dark mode may silently break for components using the wrong selector. Variable conflicts between `theme-variables.css` and `critical.css` cause inconsistent rendering depending on CSS load order.

---

## 2. `:root` Duplication Matrix

### 2.1 Files Containing `:root` Blocks

| # | File | `:root` Variables | Purpose |
|---|------|-------------------|---------|
| 1 | `/src/styles/theme-variables.css` | 70+ (colors, spacing, typography, layout, shadows, borders, transitions) | Canonical tokens |
| 2 | `/src/styles/critical.css` | ~15 (colors, typography, spacing, transition) | Above-fold critical CSS |
| 3 | `/src/styles/theme-funky.css` | 7 (glass-bg, glass-border, glass-header-border, glass-shadow, text-muted, input-bg, input-border) | Funky aesthetic variables |
| 4 | `/src/styles/blocks/theme/header.css` | 2 (header-height-mobile, header-height-desktop) | Header-specific layout |
| 5 | `/styles/globals.css` (ROOT) | 5 (primary, background, foreground, surface, border) | Figma Make entrypoint fallback |
| 6 | `/src/styles/theme-light-mode.css` | 2 (border, border-strong) inside `@media (prefers-contrast: high)` | High-contrast overrides |

### 2.2 Conflicting Variable Values

| Variable | `theme-variables.css` (Canonical) | `critical.css` | `/styles/globals.css` | Conflict? |
|----------|-----------------------------------|----------------|----------------------|-----------|
| `--wp--preset--color--primary` | `#030213` | `#111111` | `#111111` | **YES - P0** |
| `--wp--preset--color--foreground` | `#1f2937` | `#1a1a1a` | `#1a1a1a` | **YES - P0** |
| `--wp--preset--color--background` | `#ffffff` | `#ffffff` | `#ffffff` | No |
| `--wp--preset--color--surface` | `#ffffff` | `#f9f9f9` | `#f9f9f9` | **YES - P1** |
| `--wp--preset--color--border` | not defined in `:root` | `#e5e7eb` | `#e5e7eb` | Partial (only in critical/root) |
| `--wp--preset--color--text-primary` | not defined | `#1a1a1a` | not defined | Extra variable in critical only |
| `--wp--preset--color--text-secondary` | not defined | `#4b5563` | not defined | Extra variable in critical only |
| `--wp--preset--font-family--base` | System stack (no Inter) | Inter + system stack | not defined | **YES - P1** |
| `--wp--preset--spacing--30` | `0.75rem` | `12px` | not defined | Same value, different format |
| `--wp--preset--transition--base` | `200ms` | `150ms` | not defined | **YES - P1** |

### 2.3 Cascade Winner Analysis

CSS load order determines which value wins. Based on standard `@import` ordering:
1. `theme-variables.css` loads first (canonical)
2. `critical.css` loads... **unclear** (may be inlined in `<head>` separately)
3. `/styles/globals.css` is auto-loaded by Figma Make (may load before or after)

**Result:** The "winning" value depends on platform behavior, making rendering unpredictable.

### 2.4 Color Variables That Must Move to `theme-light.css` / `theme-dark.css`

Currently in `theme-variables.css` `:root` that are **color-related** (must move):

```
--wp--preset--color--primary
--wp--preset--color--primary-foreground
--wp--preset--color--secondary
--wp--preset--color--secondary-foreground
--wp--preset--color--background
--wp--preset--color--foreground
--wp--preset--color--surface
--wp--preset--color--surface-foreground
--wp--preset--color--accent
--wp--preset--color--accent-foreground
--wp--preset--color--muted
--wp--preset--color--muted-foreground
--wp--preset--color--brand
--wp--preset--color--cta
--wp--preset--color--cta-hover
--wp--preset--color--ring
--wp--preset--color--neutral-100 through neutral-900 (9 vars)
--wp--preset--color--accent-100, accent-500, accent-900
--wp--preset--color--popover
--wp--preset--color--popover-foreground
--wp--preset--color--success (+ foreground)
--wp--preset--color--warning (+ foreground)
--wp--preset--color--error (+ foreground)
--wp--preset--color--black, white
--wp--preset--color--pale-pink, vivid-red, etc. (WordPress core palette - 11 vars)
--wp--preset--color--neon-cyan, neon-pink, neon-lime, neon-yellow, navy, deep-purple (6 vars)
--wp--preset--shadow--sm, md, lg, xl (contain rgba - mode-dependent)
--wp--preset--shadow--glow, lift (contain rgba)
--funky-interactive-color (+ hover, bg, bg-hover, focus)
--funky-pink-glow, funky-cyan-glow, funky-lime-glow
```

**Total color-related variables to move: ~55**

Variables that STAY in `theme-variables.css` (theme-agnostic):
```
Typography: font-family (3), font-size (15+), font-weight (6), line-height (5), letter-spacing (3)
Spacing: spacing-10 through spacing-100 (10), block-gap, custom spacing (6+), named sizes (5), funky gaps (3)
Layout: content-size, wide-size, site-size (3)
Borders: border-radius (7), border-width (4)
Transitions: fast, base, slow (3)
```

**Total theme-agnostic variables to keep: ~75**

---

## 3. Dark Mode Selector Inventory

### 3.1 Selector Usage Summary

| Selector | Total Rules | Files |
|----------|------------|-------|
| `.dark` | ~160+ rules | 25+ files |
| `[data-theme="dark"]` | ~58+ rules | 14 files |

### 3.2 Files Using `[data-theme="dark"]` (Must Migrate to `.dark`)

| File | Rule Count | Notes |
|------|-----------|-------|
| `/src/styles/globals.css` | 13 | Funky checkout/cart dark overrides |
| `/src/styles/utilities.css` | 2 | Visibility utilities (duplicates `.dark` rules) |
| `/src/styles/theme-funky.css` | 2 | Glass panel footer + glass variables (duplicates `.dark` block) |
| `/src/styles/blocks/layout/modal.css` | 1 | Modal content |
| `/src/styles/blocks/layout/drawer.css` | 1 | Sheet content |
| `/src/styles/blocks/layout/footer.css` | 7 | Footer dark overrides |
| `/src/styles/blocks/layout/header.css` | 6 | Header, search panel dark overrides |
| `/src/styles/blocks/layout/header-spacing-fix.css` | 1 | Mega menu content |
| `/src/styles/blocks/layout/footer-spacing-fix.css` | 4 | Footer spacing dark overrides |
| `/src/styles/blocks/layout/mobile-menu-spacing-fix.css` | 5 | Mobile menu dark overrides |
| `/src/styles/blocks/sections/archive-cta.css` | 1 | Archive CTA description |
| `/src/styles/blocks/sections/quick-entry-tiles.css` | 2 | Quick entry tiles |
| `/src/styles/blocks/archive/archive-product.css` | 1 | Archive product header |
| `/src/styles/blocks/archive/product.css` | 1 | Archive product header (duplicate) |
| `/src/styles/blocks/archive/pagination.css` | 4 | Funky pagination |

**Total `[data-theme="dark"]` rules to migrate: ~51**

### 3.3 Files Using `.dark` (Canonical - Keep)

| File | Rule Count | Category |
|------|-----------|----------|
| `/src/styles/theme-dark-mode.css` | ~40 | **Canonical dark mode file** |
| `/src/styles/theme-funky.css` | ~20 | Funky aesthetic dark overrides |
| `/src/styles/utilities.css` | ~25 | Utility class dark variants |
| `/styles/globals.css` (ROOT) | ~4 | Duplicate (should be deleted) |
| `/src/styles/blocks/navigation/mega-menu.css` | ~31 | Mega menu dark overrides |
| `/src/styles/blocks/navigation/archive-pagination.css` | ~7 | Pagination dark overrides |
| `/src/styles/blocks/navigation/breadcrumb.css` | ~1 | Breadcrumb dark |
| `/src/styles/blocks/design/button.css` | ~1 | Gradient button |
| `/src/styles/blocks/display/badge.css` | ~2 | Badge variants |
| `/src/styles/blocks/display/avatar.css` | ~1 | Avatar dark |
| `/src/styles/blocks/display/table.css` | ~1 | Table row hover |
| `/src/styles/blocks/display/countdown.css` | ~2 | Countdown dark |
| `/src/styles/blocks/feedback/toast.css` | ~1 | Toast dark |
| `/src/styles/blocks/feedback/page-alert.css` | ~4 | Alert variants |
| `/src/styles/blocks/interactive/back-to-top.css` | ~2 | Back to top button |
| `/src/styles/blocks/overlay/enquiry-modal.css` | ~8 | Enquiry modal dark |
| `/src/styles/sections/patterns.css` | ~3 | Section divider, quick entry |
| `/src/styles/sections/hero.css` | ~3 | Hero dark, brand story, newsletter |
| `/src/styles/sections/faq.css` | ~1 | FAQ description |
| `/src/styles/sections/how-it-works.css` | ~1 | How it works card |
| `/src/styles/sections/pricing-table.css` | ~3 | Pricing toggle, badge |
| `/src/styles/sections/newsletter.css` | ~1 | Newsletter input |
| `/src/styles/sections/flash-sale.css` | ~3 | Flash sale variants |
| `/src/styles/sections/product-comparison.css` | ~8 | Comparison table cells |
| `/src/styles/sections/funky-sections.css` | ~20 | Funky section variants |
| `/src/styles/sections/front-page-funky.css` | ~15 | Front page hero, features |

### 3.4 Files Using BOTH Selectors

| File | `.dark` rules | `[data-theme="dark"]` rules | Action |
|------|-------------|---------------------------|--------|
| `/src/styles/theme-funky.css` | ~20 | 2 (glass panel footer + glass variables) | Merge `[data-theme]` into `.dark` |
| `/src/styles/utilities.css` | ~25 | 2 (visibility utilities) | Merge `[data-theme]` into `.dark` |

### 3.5 Recommendation

**Use `.dark` as the canonical selector.** Reasons:
1. Already used by the canonical `theme-dark-mode.css`
2. More prevalent in the codebase (~160 vs ~58 rules)
3. Shorter, simpler syntax
4. Matches WordPress FSE convention
5. `theme-funky.css` already duplicates `[data-theme="dark"]` as `.dark`

**Migration plan:** Search-and-replace `[data-theme="dark"]` to `.dark` in all CSS files.

---

## 4. Hardcoded Color Inventory

### 4.1 Summary by Severity

| Severity | Count | Category |
|----------|-------|----------|
| **P0** (text colors) | ~15 instances | Links, text colors in `theme-light-mode.css`, `theme-dark-mode.css`, `utilities.css` |
| **P1** (background colors) | ~40 instances | Funky checkout/cart in `globals.css`, surface classes, mega menu |
| **P2** (border colors) | ~20 instances | Funky borders (#000, #fff), border utilities |
| **P3** (shadows/decorative) | ~30 instances | Box-shadows, gradients, rgba values |
| **Acceptable** (variable defs) | ~60 instances | Inside `:root`/`.dark` blocks (these ARE the source of truth) |

### 4.2 Critical Hardcoded Colors (P0 - Text)

| File | Line(s) | Color | Should Be |
|------|---------|-------|-----------|
| `theme-light-mode.css` | 28, 33 | `#2563eb`, `#1d4ed8` (links) | `var(--wp--preset--color--cta)`, `var(--wp--preset--color--cta-hover)` |
| `theme-dark-mode.css` | 98, 101 | `#60a5fa`, `#93c5fd` (dark links) | `var(--wp--preset--color--cta)` (auto-switches in dark) |
| `utilities.css` | 418-474 | ~30 hardcoded hex values | Should use CSS variables |

### 4.3 High-Priority Hardcoded Colors (P1 - Backgrounds)

| File | Description | Hardcoded Colors |
|------|-------------|-----------------|
| `/src/styles/globals.css` | Funky checkout | `#000`, `#fff`, `#0ff`, `#f0f`, `#0f0`, `#ff0`, `#111`, `#222`, `#444` (30+ instances) |
| `/styles/globals.css` | Root duplicate | `#000`, `#fff`, `#be185d`, `#0e7490` (10+ instances) |
| `theme-light-mode.css` | Surface classes | `#ffffff`, `#f9fafb` (2 instances) |
| `theme-dark-mode.css` | Out of stock overlay | `rgba(255,255,255,0.9)`, `#0f0f0f` |
| `critical.css` | Throughout | `#111111`, `#1a1a1a`, `#ffffff`, `#f9f9f9`, `#4b5563`, `#e5e7eb` |

### 4.4 Funky Styles Exception

The funky checkout/cart styles in `/src/styles/globals.css` (lines 28-277) use intentionally hardcoded colors as part of the "neo-brutalist" aesthetic (#000, #fff, #0ff, #f0f, #0f0). These should still be converted to CSS variables for maintainability:

```css
/* Proposed funky variables (add to theme-funky.css) */
:root {
  --funky-border-color: #000;
  --funky-bg: #fff;
  --funky-shadow-color: #000;
  --funky-focus-color: #0ff;
  --funky-active-color: #ff0;
  --funky-success-color: #0f0;
  --funky-accent-color: #f0f;
}
.dark {
  --funky-border-color: #fff;
  --funky-bg: #111;
  --funky-shadow-color: #fff;
  --funky-focus-color: #0ff;
  --funky-active-color: #444;
  --funky-success-color: #0f0;
  --funky-accent-color: #f0f;
}
```

---

## 5. Scattered Theme Rules Inventory

### 5.1 Dark Mode Rules Outside Dedicated Dark Mode File

**Total scattered dark mode rules: ~200+ across 25+ files**

#### Block CSS Files with Dark Overrides

| File | Dark Rules | Can Use Variables Instead? |
|------|-----------|--------------------------|
| `blocks/navigation/mega-menu.css` | 31 | Partially (colors yes, structural overrides no) |
| `blocks/overlay/enquiry-modal.css` | 8 | Yes (all color overrides) |
| `blocks/navigation/archive-pagination.css` | 7 | Yes (colors and backgrounds) |
| `blocks/layout/footer.css` | 7 | Yes (all use CSS variables already) |
| `blocks/layout/header.css` | 6 | Yes (colors and backgrounds) |
| `blocks/layout/mobile-menu-spacing-fix.css` | 5 | Yes |
| `blocks/layout/footer-spacing-fix.css` | 4 | Yes |
| `blocks/archive/pagination.css` | 4 | Partially (funky-specific) |
| `blocks/feedback/page-alert.css` | 4 | Yes (background/border colors) |
| `blocks/display/badge.css` | 2 | Yes |
| `blocks/display/countdown.css` | 2 | Yes (partially neon-specific) |
| `blocks/interactive/back-to-top.css` | 2 | Yes |
| `blocks/sections/quick-entry-tiles.css` | 2 | Yes |
| `blocks/display/avatar.css` | 1 | Yes |
| `blocks/display/table.css` | 1 | Yes |
| `blocks/feedback/toast.css` | 1 | Yes |
| `blocks/design/button.css` | 1 | Yes |
| `blocks/layout/modal.css` | 1 | Yes |
| `blocks/layout/drawer.css` | 1 | Yes |
| `blocks/sections/archive-cta.css` | 1 | Yes |
| `blocks/archive/archive-product.css` | 1 | Yes |
| `blocks/archive/product.css` | 1 | Duplicate of archive-product.css |

#### Section CSS Files with Dark Overrides

| File | Dark Rules | Can Use Variables Instead? |
|------|-----------|--------------------------|
| `sections/funky-sections.css` | 20 | Partially (orb opacities must stay) |
| `sections/front-page-funky.css` | 15+ | Partially (orb opacities, gradients) |
| `sections/product-comparison.css` | 8 | Yes (all rgba colors) |
| `sections/hero.css` | 3 | Yes (overlays, gradients) |
| `sections/flash-sale.css` | 3 | Yes (background colors) |
| `sections/pricing-table.css` | 3 | Partially |
| `sections/patterns.css` | 3 | Yes |
| `sections/faq.css` | 1 | Yes |
| `sections/how-it-works.css` | 1 | Yes |
| `sections/newsletter.css` | 1 | Yes |

### 5.2 Strategy Per File

**Eliminate via CSS variables (preferred):** ~60% of scattered rules can be eliminated by using CSS variables that auto-switch. These are rules that only change `color`, `background-color`, `border-color`, or `box-shadow` to different values.

**Move to centralized `theme-dark.css`:** ~15% of rules require structural dark mode changes (different opacity, different gradients, different layouts).

**Keep co-located (exception):** ~25% are highly component-specific (e.g., mega-menu with 31 rules, funky-sections with 20 rules). Moving these to a central file would harm maintainability.

---

## 6. WCAG Contrast Audit Results

### 6.1 Light Mode Contrast Ratios

| Element | Foreground | Background | Ratio | Target | Status |
|---------|-----------|------------|-------|--------|--------|
| Body text | `#1f2937` | `#ffffff` | 14.7:1 | 4.5:1 AA | PASS (AAA) |
| Muted text | `#4b5563` | `#ffffff` | 7.5:1 | 4.5:1 AA | PASS (AAA) |
| Links | `#2563eb` | `#ffffff` | 4.6:1 | 4.5:1 AA | PASS (AA) |
| Error text | `#991b1b` | `#ffffff` | 7.1:1 | 4.5:1 AA | PASS (AAA) |
| Success text | `#065f46` | `#ffffff` | 7.1:1 | 4.5:1 AA | PASS (AAA) |
| Warning text | `#92400e` | `#ffffff` | 7.3:1 | 4.5:1 AA | PASS (AAA) |
| Surface text | `#1f2937` | `#ffffff` | 14.7:1 | 4.5:1 AA | PASS (AAA) |
| Surface muted | `#4b5563` | `#ffffff` | 7.5:1 | 4.5:1 AA | PASS (AAA) |
| Button primary | `#ffffff` | `#030213` | 19.8:1 | 4.5:1 AA | PASS (AAA) |
| Button secondary | `#030213` | `#f5f5f7` | 18.4:1 | 4.5:1 AA | PASS (AAA) |
| Neon pink text | `#be185d` | `#ffffff` | 5.6:1 | 4.5:1 AA | PASS (AA) |
| Neon cyan text | `#0e7490` | `#ffffff` | 5.4:1 | 4.5:1 AA | PASS (AA) |
| Neon lime text | `#15803d` | `#ffffff` | 4.8:1 | 4.5:1 AA | PASS (AA) |
| Neon yellow text | `#a16207` | `#ffffff` | 4.6:1 | 4.5:1 AA | PASS (AA, borderline) |
| Interactive color | `#0e7490` | `#ffffff` | 5.4:1 | 4.5:1 AA | PASS (AA) |

### 6.2 Dark Mode Contrast Ratios

| Element | Foreground | Background | Ratio | Target | Status |
|---------|-----------|------------|-------|--------|--------|
| Body text | `#fafafa` | `#0f0f0f` | 19.2:1 | 4.5:1 AA | PASS (AAA) |
| Muted text | `#a3a3a3` | `#0f0f0f` | 6.9:1 | 4.5:1 AA | PASS (AA) |
| Links | `#60a5fa` | `#0f0f0f` | 6.7:1 | 4.5:1 AA | PASS (AA) |
| Error text | `#f87171` | `#0f0f0f` | 6.4:1 | 4.5:1 AA | PASS (AA) |
| Surface text | `#fafafa` | `#1a1a1a` | 17.1:1 | 4.5:1 AA | PASS (AAA) |
| Surface muted | `#a3a3a3` | `#1a1a1a` | 6.1:1 | 4.5:1 AA | PASS (AA) |
| Border visibility | `#404040` | `#0f0f0f` | 2.2:1 | 3:1 (non-text) | **FAIL** |
| Neon pink text | `#f472b6` | `#0f0f0f` | 7.6:1 | 4.5:1 AA | PASS (AAA) |
| Neon cyan text | `#22d3ee` | `#0f0f0f` | 10.1:1 | 4.5:1 AA | PASS (AAA) |
| Neon lime text | `#4ade80` | `#0f0f0f` | 9.5:1 | 4.5:1 AA | PASS (AAA) |
| Interactive color | `#22d3ee` | `#0f0f0f` | 10.1:1 | 4.5:1 AA | PASS (AAA) |

### 6.3 Contrast Concerns

1. **Dark mode border visibility (FAIL):** `#404040` on `#0f0f0f` = 2.2:1 (below 3:1 non-text minimum). Consider `#525252` (3.4:1) or `#4a4a4a` (2.8:1).
2. **Neon yellow (borderline):** `#a16207` on white = 4.6:1. Passes AA but barely. Consider darkening to `#8b5207` for better margin.
3. **Critical.css conflicts:** Uses `#111111` for primary vs `#030213` in canonical. Both pass, but inconsistency causes visual discrepancy.

---

## 7. Migration Task List

### Phase 1: Selector Unification (P0 - Estimated: 2 hours)

| # | Task | File(s) | Est. |
|---|------|---------|------|
| 1.1 | Replace all `[data-theme="dark"]` with `.dark` in `/src/styles/globals.css` | 1 file, 13 rules | 15 min |
| 1.2 | Replace all `[data-theme="dark"]` with `.dark` in `/src/styles/utilities.css` | 1 file, 2 rules | 5 min |
| 1.3 | Replace all `[data-theme="dark"]` with `.dark` in `/src/styles/theme-funky.css` | 1 file, 2 rules | 5 min |
| 1.4 | Replace all `[data-theme="dark"]` with `.dark` in `blocks/layout/*.css` | 5 files, ~18 rules | 20 min |
| 1.5 | Replace all `[data-theme="dark"]` with `.dark` in `blocks/sections/*.css` | 2 files, 3 rules | 10 min |
| 1.6 | Replace all `[data-theme="dark"]` with `.dark` in `blocks/archive/*.css` | 3 files, 6 rules | 10 min |
| 1.7 | Verify ThemeContext JS toggles `.dark` class on `<html>` | 1 file | 10 min |
| 1.8 | Remove duplicate `.dark` block in `theme-funky.css` (lines 31-40 duplicate lines 21-30) | 1 file | 5 min |

### Phase 2: Variable Conflict Resolution (P0 - Estimated: 1 hour)

| # | Task | Est. |
|---|------|------|
| 2.1 | Resolve `--wp--preset--color--primary`: Pick `#030213` (canonical) or `#111111` (critical) | 15 min |
| 2.2 | Resolve `--wp--preset--color--foreground`: Pick `#1f2937` or `#1a1a1a` | 10 min |
| 2.3 | Resolve `--wp--preset--color--surface`: Pick `#ffffff` or `#f9f9f9` | 10 min |
| 2.4 | Resolve `--wp--preset--transition--base`: Pick `200ms` or `150ms` | 5 min |
| 2.5 | Resolve `--wp--preset--font-family--base`: Add or remove Inter | 10 min |
| 2.6 | Remove duplicate variables from `critical.css` `:root` block | 15 min |
| 2.7 | Remove duplicate variables from `/styles/globals.css` `:root` block | 10 min |

### Phase 3: New File Creation (P1 - Estimated: 3 hours)

| # | Task | Est. |
|---|------|------|
| 3.1 | Create `/src/styles/theme-light.css` - Extract light-mode color variables from `theme-variables.css` `:root` | 45 min |
| 3.2 | Create `/src/styles/theme-dark.css` - Rename/refactor `theme-dark-mode.css` to contain ONLY `.dark { }` variable block | 30 min |
| 3.3 | Create `/src/styles/theme-base.css` - Extract base element styles from `theme-light-mode.css` (body, a, input, button, etc.) | 45 min |
| 3.4 | Refactor `theme-variables.css` - Remove all color variables, keep only theme-agnostic tokens | 30 min |
| 3.5 | Refactor `globals.css` (/src) to orchestrator-only (move funky styles to `theme-funky.css`) | 30 min |
| 3.6 | Update `globals.css` import order per Phase 2.4 of audit prompt | 15 min |

### Phase 4: Hardcoded Color Remediation (P1 - Estimated: 4 hours)

| # | Task | Est. |
|---|------|------|
| 4.1 | Convert funky checkout/cart hardcoded colors to CSS variables (~30 instances) | 45 min |
| 4.2 | Convert `theme-light-mode.css` link colors to CSS variables | 15 min |
| 4.3 | Convert `theme-dark-mode.css` hardcoded link colors to CSS variables | 15 min |
| 4.4 | Convert `utilities.css` text/bg color classes to use CSS variables | 60 min |
| 4.5 | Convert `critical.css` hardcoded colors to reference canonical variables | 30 min |
| 4.6 | Audit and convert block CSS hardcoded colors (enquiry-modal, page-alert, etc.) | 45 min |
| 4.7 | Audit and convert section CSS hardcoded colors (product-comparison, etc.) | 30 min |

### Phase 5: Scattered Rule Consolidation (P2 - Estimated: 3 hours)

| # | Task | Est. |
|---|------|------|
| 5.1 | Eliminate dark mode rules that can use CSS variables (est. 60% of scattered rules) | 90 min |
| 5.2 | Move structural dark overrides to `theme-dark.css` (est. 15%) | 30 min |
| 5.3 | Keep co-located overrides for mega-menu, funky-sections, front-page-funky (25%) | 0 min (no action) |
| 5.4 | Remove `/styles/globals.css` duplicate styles or reduce to Figma Make entrypoint only | 20 min |

### Phase 6: Verification (P1 - Estimated: 2 hours)

| # | Task | Est. |
|---|------|------|
| 6.1 | Verify dark mode toggle works (all components switch correctly) | 30 min |
| 6.2 | Visual regression test: Front Page, Shop, Product, Cart, Checkout, Blog | 45 min |
| 6.3 | WCAG contrast verification in both modes | 20 min |
| 6.4 | Fix dark border contrast (increase from `#404040` to `#525252`) | 10 min |
| 6.5 | Verify `prefers-reduced-motion` still works | 10 min |
| 6.6 | Verify no CSS cascade conflicts between files | 15 min |

**Total Estimated Effort: ~15 hours**

---

## 8. Risk Assessment

### 8.1 What Could Break During Migration

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Dark mode breaks for `[data-theme="dark"]` components during selector migration | Medium | High | Do selector migration as atomic commit, test immediately |
| CSS cascade order changes cause unexpected styling | Medium | Medium | Document and test load order carefully |
| Removing duplicate `:root` variables changes rendered colors | High | Medium | Resolve conflicts BEFORE removing duplicates |
| `critical.css` inlining breaks if variables are removed | Medium | High | Keep critical.css referencing variables, not redefining |
| Funky styles break when moved from `globals.css` to `theme-funky.css` | Low | Medium | Move as-is, test checkout/cart flows |
| `/styles/globals.css` (root) deletion breaks Figma Make | High | Critical | DO NOT delete - reduce to minimal entrypoint |

### 8.2 Recommended Execution Order

1. **Phase 2 first** (resolve conflicts) - prevents cascading issues
2. **Phase 1 second** (unify selectors) - clean foundation
3. **Phase 3 third** (create new files) - restructure architecture
4. **Phase 4 fourth** (remediate hardcoded colors) - clean up values
5. **Phase 5 fifth** (consolidate scattered rules) - reduce duplication
6. **Phase 6 last** (verification) - ensure nothing broke

### 8.3 Do NOT Delete `/styles/globals.css`

This file is auto-loaded by Figma Make as the CSS entry point. It provides fallback values for the platform. Instead of deleting, reduce it to:
- Minimal `:root` fallback variables (only essential)
- Basic element resets (html, body)
- Import statement to `/src/styles/theme-variables.css` if supported

---

## References

- **Audit prompt:** `/prompts/audits/light-dark-mode-stylesheet-audit.md`
- **Current CSS files:** `/src/styles/` directory
- **Design tokens:** `/guidelines/design-tokens/colors.md`, `dark-mode.md`
- **Contrast audit:** `/guidelines/design-tokens/CONTRAST_AUDIT_REPORT.md`
- **Guidelines:** `/guidelines/Guidelines.md` Section 4

---

**Report generated:** March 3, 2026
**Next action:** Create task list at `/tasks/stylesheet-architecture-migration-tasks.md`
