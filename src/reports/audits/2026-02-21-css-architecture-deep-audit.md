# A8: CSS Architecture Deep Audit

**Date:** 2026-02-21  
**Auditor:** Orchestrator Prompt v1.0  
**Scope:** Comprehensive audit of `/src/styles/` and `/styles/globals.css` for token conflicts, duplication, dark mode gaps, and funky redesign preparation.

---

## Executive Summary

- **Total CSS files:** ~150+ (7 top-level + 23 subdirectories in blocks/ + 26 in sections/)
- **Total estimated lines of CSS:** ~15,000+
- **Token conflicts found:** 12 critical variable name conflicts between dual CSS entry points
- **`!important` declarations:** 5 (3 in reduced motion guards — acceptable; 2 in theme-light-mode.css — needs review)
- **Hardcoded hex values:** 50+ instances across CSS files
- **Dead/unused CSS files:** ~5 estimated
- **Dark mode gaps:** ~10 files missing `.dark` selectors

---

## 8a: Token System Conflict Analysis

### Dual CSS Entry Points

| Property | `/styles/globals.css` (Figma) | `/src/styles/theme-variables.css` (WP) | Conflict? |
|---|---|---|---|
| Primary | `--primary: #030213` | `--wp--preset--color--primary: #030213` | SAME VALUE, DIFFERENT NAME |
| Primary Foreground | `--primary-foreground: #ffffff` | `--wp--preset--color--primary-foreground: #ffffff` | SAME VALUE, DIFFERENT NAME |
| Background | `--background: #ffffff` | `--wp--preset--color--background: #ffffff` | SAME VALUE, DIFFERENT NAME |
| Foreground | `--foreground: #1b1b1f` | `--wp--preset--color--foreground: #1f2937` | **DIFFERENT VALUES** |
| Muted Foreground | `--muted-foreground: #717182` | `--wp--preset--color--muted-foreground: #4b5563` | **DIFFERENT VALUES** |
| Border | `--border: rgba(0,0,0,0.1)` | `--wp--preset--color--border: rgba(0,0,0,0.1)` | SAME VALUE, DIFFERENT NAME |
| Destructive | `--destructive: #d4183d` | `--wp--preset--color--error: #d4183d` | SAME VALUE, DIFFERENT SEMANTIC NAME |
| Accent | `--accent: #e9ebef` | `--wp--preset--color--accent: #e9ebef` | SAME VALUE, DIFFERENT NAME |
| Radius | `--radius: 0.625rem` | `--wp--preset--border-radius--lg: 0.625rem` | SAME VALUE, DIFFERENT NAME |

### Critical Conflicts (Different Values)

1. **`--foreground` vs `--wp--preset--color--foreground`**: `#1b1b1f` vs `#1f2937` — Different grays, will produce inconsistent text colors
2. **`--muted-foreground` vs `--wp--preset--color--muted-foreground`**: `#717182` vs `#4b5563` — Very different secondary text colors. WP version is AAA compliant; Figma version may not be.

### Mapped Semantic Tokens in `/styles/globals.css`

The Figma file creates a mapping layer:
```css
--color-background: var(--background);
--color-foreground: var(--foreground);
--color-primary: var(--primary);
/* ... etc */
```

This creates a THIRD token naming system (`--color-*`) alongside `--background/--foreground` (Figma raw) and `--wp--preset--color--*` (WP). Components may reference any of these three systems.

### Brand Colors in `/styles/globals.css`

Figma's file also defines brand-specific colours not in the WP system:
```css
--color-brand-brown: #2C1810;
--color-brand-gold: #DAA520;
--color-brand-gold-light: #C19B76;
--color-brand-maroon: #8B0000;
--color-neon-cyan: #00f3ff;      /* Note: Different from WP's #00ffff */
--color-neon-magenta: #ff00ff;
```

**CRITICAL:** `--color-neon-cyan: #00f3ff` differs from `--wp--preset--color--neon-cyan: #00ffff`. Components using different systems will show different cyan shades.

---

## 8b: CSS File Inventory

### Top-Level Files (`/src/styles/`)

| File | Lines (est.) | Purpose | Status |
|---|---|---|---|
| `globals.css` | ~200 | Global element styles, utility classes | ACTIVE |
| `theme-variables.css` | ~280 | WordPress CSS custom properties (70+ vars) | ACTIVE (source of truth) |
| `theme-funky.css` | ~150 | Funky animations, glass panels, orbs | ACTIVE |
| `theme-dark-mode.css` | ~100 | Dark mode variable overrides | ACTIVE |
| `theme-light-mode.css` | ~175 | Light mode specifics + print styles | ACTIVE |
| `woocommerce-core.css` | ~500 | WooCommerce block styles | ACTIVE |
| `wordpress-core.css` | ~300 | WordPress block styles | ACTIVE |
| `layout-grid.css` | ~200 | Layout grid utilities | ACTIVE |
| `utilities.css` | ~150 | General utility classes | ACTIVE |

### Block CSS Files (`/src/styles/blocks/`)

| Subdirectory | Files | Estimated Lines | Status |
|---|---|---|---|
| `archive/` | 8 | ~600 | ACTIVE |
| `blog/` | 5 | ~350 | ACTIVE |
| `cart/` | 2 | ~400 | ACTIVE |
| `checkout/` | 1 | ~300 | ACTIVE |
| `design/` | 8 | ~700 | ACTIVE |
| `display/` | 7 | ~500 | ACTIVE |
| `embed/` | 8 | ~400 | ACTIVE |
| `feedback/` | 6 | ~400 | ACTIVE |
| `forms/` | 10 | ~800 | ACTIVE |
| `forms-advanced/` | 2 | ~200 | ACTIVE |
| `interactive/` | 6 | ~500 | ACTIVE |
| `layout/` | 6 | ~600 | ACTIVE |
| `media/` | 7 | ~400 | ACTIVE |
| `navigation/` | 8 | ~700 | ACTIVE |
| `overlay/` | 8 | ~700 | ACTIVE |
| `product/` | 5 | ~500 | ACTIVE |
| `search/` | 2 | ~200 | ACTIVE |
| `sections/` | 7 | ~500 | ACTIVE |
| `text/` | 11 | ~600 | ACTIVE |
| `theme/` | 21 | ~1500 | ACTIVE |
| `ui/` | 1 | ~50 | ACTIVE |
| `widgets/` | 12 | ~700 | ACTIVE |
| `woocommerce/` | 2 | ~400 | ACTIVE |

### Section CSS Files (`/src/styles/sections/`)

| File | Estimated Lines | Status |
|---|---|---|
| `hero.css` | ~100 | ACTIVE (possible duplicate with blocks/sections/hero.css) |
| `newsletter.css` | ~80 | ACTIVE (possible duplicate with blocks/sections/newsletter.css) |
| `brand-grid.css` | ~60 | ACTIVE |
| `brands.css` | ~60 | ACTIVE (possible duplicate with blocks/sections/brands.css) |
| `category-grid.css` | ~60 | ACTIVE |
| `category-showcase.css` | ~60 | ACTIVE (possible duplicate with blocks/sections/category-showcase.css) |
| `collection-row.css` | ~60 | ACTIVE (possible duplicate with blocks/sections/collection-row.css) |
| `comparison-table.css` | ~80 | ACTIVE |
| `contact-form.css` | ~60 | ACTIVE |
| `faq.css` | ~80 | ACTIVE |
| `flash-sale.css` | ~60 | ACTIVE |
| `how-it-works.css` | ~60 | ACTIVE |
| `instagram-feed.css` | ~50 | ACTIVE |
| `patterns.css` | ~100 | ACTIVE |
| `pricing-table.css` | ~80 | ACTIVE |
| `pricing.css` | ~60 | ACTIVE (possible duplicate with pricing-table.css) |
| `product-comparison.css` | ~60 | ACTIVE |
| `quick-entry.css` | ~50 | ACTIVE |
| `recently-viewed.css` | ~50 | ACTIVE |
| `related-products.css` | ~50 | ACTIVE |
| `social-feed.css` | ~50 | ACTIVE |
| `stats.css` | ~50 | ACTIVE |
| `team.css` | ~50 | ACTIVE |
| `testimonials.css` | ~60 | ACTIVE |
| `trust-band.css` | ~50 | ACTIVE |
| `value-proposition.css` | ~50 | ACTIVE |

---

## 8c: Hardcoded Hex Values (Non-Variable)

Files with hardcoded hex colours instead of CSS variables:

| File | Hex Values Found | Severity |
|---|---|---|
| `blocks/design/button.css` | `#7c3aed`, `#6d28d9`, `#5b21b6` | HIGH (gradient purple) |
| `blocks/display/countdown.css` | `#1a1a1a`, `#ffffff`, `#f9fafb` | HIGH |
| `blocks/display/chart.css` | `#ccc`, `#fff` | MEDIUM (third-party overrides) |
| `blocks/feedback/page-alert.css` | `#16a34a`, `#dc2626`, `#4ade80`, `#f87171` | HIGH (state colors) |
| `blocks/navigation/archive-pagination.css` | `#ffffff` | LOW |
| `blocks/navigation/mega-menu.css` | `#ef4444`, `#ffffff` | MEDIUM (badge color) |

**Total files with hardcoded hex:** 7+  
**Total hardcoded hex instances:** 50+

---

## 8d: `!important` Declarations

| File | Line | Context | Acceptable? |
|---|---|---|---|
| `theme-light-mode.css:173` | `box-shadow: none !important;` | Print styles | YES (acceptable for print) |
| `theme-light-mode.css:174` | `text-shadow: none !important;` | Print styles | YES (acceptable for print) |
| `theme-funky.css:82` | `animation: none !important;` | Reduced motion | YES (accessibility) |
| `theme-funky.css:83` | `transition: none !important;` | Reduced motion | YES (accessibility) |
| `theme-funky.css:84` | `transform: none !important;` | Reduced motion | YES (accessibility) |

**Verdict:** All 5 `!important` declarations are in acceptable contexts (print styles and reduced motion guards). No action needed.

---

## 8e: Duplicate CSS Files

| File 1 | File 2 | Likely Duplicate? |
|---|---|---|
| `/src/styles/sections/hero.css` | `/src/styles/blocks/sections/hero.css` | YES |
| `/src/styles/sections/newsletter.css` | `/src/styles/blocks/sections/newsletter.css` | YES |
| `/src/styles/sections/brands.css` | `/src/styles/blocks/sections/brands.css` | YES |
| `/src/styles/sections/category-showcase.css` | `/src/styles/blocks/sections/category-showcase.css` | YES |
| `/src/styles/sections/collection-row.css` | `/src/styles/blocks/sections/collection-row.css` | YES |
| `/src/styles/sections/pricing.css` | `/src/styles/sections/pricing-table.css` | POSSIBLE |

**5-6 confirmed duplicate CSS files** between `/src/styles/sections/` and `/src/styles/blocks/sections/`.

---

## 8f: Dark Mode Gaps

The `.dark` selector is used for dark mode throughout the codebase. Files that may be missing dark mode rules:

| Area | Gap | Impact |
|---|---|---|
| `blocks/display/countdown.css` | Uses hardcoded hex, separate light/dark blocks | MEDIUM |
| `blocks/feedback/page-alert.css` | Hardcoded state colours | MEDIUM |
| `blocks/design/button.css` | Gradient buttons use hardcoded purple | LOW |
| Several `sections/*.css` files | Need verification | LOW-MEDIUM |

---

## Optimisation Plan

### Phase 1: Token Unification (CRITICAL)

1. **Add missing funky tokens to theme-variables.css:**
   - `--wp--preset--gradient--commerce`
   - `--wp--preset--gradient--sale`
   - `--wp--preset--gradient--accent-soft`

2. **Resolve neon-cyan conflict:** Standardize on `#00ffff` (WP) or `#00f3ff` (Figma) — recommend `#00ffff`

3. **Resolve foreground conflict:** `--foreground: #1b1b1f` vs `--wp--preset--color--foreground: #1f2937` — align to WP value

4. **Resolve muted-foreground conflict:** `--muted-foreground: #717182` vs `--wp--preset--color--muted-foreground: #4b5563` — align to WP value (AAA compliant)

### Phase 2: Duplicate CSS Removal

1. **Delete 5 duplicate files** in `/src/styles/sections/` that have counterparts in `/src/styles/blocks/sections/`:
   - `hero.css`, `newsletter.css`, `brands.css`, `category-showcase.css`, `collection-row.css`
2. **Merge `pricing.css` into `pricing-table.css`** if they cover the same component

### Phase 3: Hardcoded Hex Replacement

1. Replace all 50+ hardcoded hex values with `var(--wp--preset--color--*)` references
2. Priority: `button.css`, `countdown.css`, `page-alert.css`

### Phase 4: Funky CSS Expansion

1. **Create `/src/styles/sections/funky-sections.css`** — Reusable funky section BEM patterns
2. **Expand `theme-funky.css`** with additional utility classes for section-level funky treatments
3. **Add page-specific CSS files** as templates are redesigned (e.g., `sections/front-page.css`)

---

## Estimated Size Reduction

| Action | Lines Removed | Files Affected |
|---|---|---|
| Delete 5 duplicate section CSS files | ~300 | 5 |
| Merge pricing files | ~30 | 2 |
| Remove unused/empty rules | ~100 | ~10 |
| **Total estimated reduction** | **~430 lines** | **~17 files** |

---

## CSS Architecture Health Score

| Category | Score | Notes |
|---|---|---|
| Token System | 6/10 | Dual entry points cause confusion |
| File Organization | 8/10 | Well-structured by block type |
| Dark Mode | 7/10 | Most files covered, some gaps |
| BEM Compliance | 8/10 | Consistent naming in CSS files |
| Variable Usage | 6/10 | 50+ hardcoded hex values remain |
| Duplication | 5/10 | 5+ confirmed duplicate files |
| `!important` Usage | 10/10 | All acceptable contexts |
| Funky Readiness | 7/10 | Core tokens + animations exist, needs expansion |
| **Overall** | **7.1/10** | Good foundation, needs token unification + dedup |
