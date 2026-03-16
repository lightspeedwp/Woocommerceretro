---
title: "Combined audit: theme, CSS, tokens, styles, data"
date: "2026-03-16"
scope: "theme-variables, retro-theme, dark-mode, CSS sections, design tokens, data files"
severity: "mixed (critical / moderate / low)"
---

# Combined audit report — 2026-03-16

## 1. Theme audit

### 1.1 Token drift between theme-light-mode.css and theme-variables.css (Critical)

`theme-light-mode.css` still defines tokens that were removed from the canonical `theme-variables.css` during the CSS7 audit:

| Removed token | File | Line |
|---|---|---|
| `--wp--preset--shadow--lift` | theme-light-mode.css | 122 |
| `--funky-interactive-bg-hover` | theme-light-mode.css | 140 |
| `--wp--preset--color--accent-100` | theme-light-mode.css | 35 |
| `--wp--preset--color--accent-500` | theme-light-mode.css | 36 |
| `--wp--preset--color--accent-900` | theme-light-mode.css | 37 |

### 1.2 Triple-defined funky tokens (Moderate)

Funky glass/input variables are defined in **three** files:

- `/src/styles/theme-funky.css` (lines 10-18 light, 21-30 dark)
- `/src/styles/theme-light-mode.css` (lines 144-150)
- `/src/styles/theme-dark-mode.css` (lines 53-61)

Should be consolidated to a single source of truth (theme-funky.css).

### 1.3 Orphaned retro dark token (Low)

`--retro-accent-olive` is mapped in `theme-dark-mode.css:50` but was removed from `theme-variables.css` as zero-usage.

### 1.4 Missing light-mode --wp--preset--color--primary in theme-variables.css (Moderate)

`theme-variables.css` only defines `--primary` in the `.dark` block. Light mode inherits from `theme-light-mode.css` (#111111). The canonical source should define both modes.

### 1.5 Missing token: --wp--preset--color--info (light mode) (Moderate)

Only defined in dark mode in `theme-variables.css:326`. Light mode has no definition in the canonical file.

### 1.6 Missing token: --wp--preset--color--error-muted (Moderate)

Referenced in 3 CSS files (woocommerce-core.css, sweep-ui-components.css, sweep-account-badges.css) but never defined. Two references have fallbacks, one does not (woocommerce-core.css:902).

### 1.7 Extra token in theme-light-mode.css (Low)

`--wp--preset--font-size--xs` (line 99) does not exist in theme-variables.css.

---

## 2. CSS audit

### 2.1 Hardcoded colors in section CSS (Critical)

| File | Lines | Values |
|---|---|---|
| `sections/archive-cta.css` | 32,36,55,56,63 | #e9d5ff, #f3e8ff, #ffffff, #111827, #f9fafb |
| `sections/flash-sale.css` | 24-58 | 15+ hardcoded hex values for gradient modifiers |

### 2.2 Hardcoded font-size values (Moderate)

| File | Count | Examples |
|---|---|---|
| `sections/hero.css` | 1 | 2.5rem |
| `sections/flash-sale.css` | 8 | 2.25rem, 3rem, 1.875rem, 1.125rem, 1.25rem |
| `sections/instagram-feed.css` | 1 | 0.65rem |
| `sections/front-page-funky.css` | 9 | 1.5rem, 0.875rem, 0.625rem, etc. |
| `sections/comparison-table.css` | 1 | 0.75rem |

Should use `--wp--preset--font-size--*` tokens.

### 2.3 Hardcoded spacing values (Moderate)

| File | Examples |
|---|---|
| `sections/collection-row.css` | gap: 48px, gap: 16px |
| `sections/faq.css` | gap: 40px |
| `sections/instagram-feed.css` | gap: 48px, gap: 16px |
| `sections/shop-info-footer.css` | padding: 24px 16px, padding: 20px 12px |
| `sections/blog-archive.css` | padding: 8px 16px, padding: 48px 0, padding: 6px 12px |

Should use `--wp--preset--spacing--*` tokens.

### 2.4 Tailwind migration remnants (Low)

Comments like `/* gap-12 */`, `/* gap-4 */` in CSS files indicate incomplete migration from Tailwind.

---

## 3. Tokens audit

### 3.1 Duplicate token definitions (Critical)

70+ tokens defined in both `theme-variables.css` AND `theme-light-mode.css`. See 1.2 above for funky tokens triple-definition.

### 3.2 Orphaned tokens

- `--retro-accent-olive` mapped in dark mode (theme-dark-mode.css:50) but removed from canonical source
- `--funky-interactive-bg-hover` in theme-light-mode.css but removed from theme-variables.css

### 3.3 Undefined tokens referenced

- `--wp--preset--color--error-muted`: used in 3 files, never defined
- `--wp--preset--color--info`: used in 6+ files, not defined for light mode
- `--wp--preset--focus-ring--width`, `--wp--preset--focus-ring--color`, `--wp--preset--focus-ring--offset`: referenced in theme-light-mode.css base styles but never defined
- `--wp--preset--z-index--modal`: referenced but not defined in theme-variables.css

---

## 4. Styles audit (BEM compliance)

### 4.1 Non-BEM utility classes in components (Critical)

| Class | Files | Issue |
|---|---|---|
| `wp-text-bold` | OrderDetails, AdditionalFields, AdditionalInformation, AddressDetails, DownloadsSection | Utility, not BEM |
| `wp-text-italic` | AdditionalInformation | Utility, not BEM |
| `wp-text-medium` | DownloadsSection | Utility, not BEM |
| `wp-text-right` | OrderDetails, DownloadsSection | Utility, not BEM |
| `wp-flex` | OrderDetails, DownloadsSection | Utility, not BEM |
| `wp-justify-end` | DownloadsSection | Utility, not BEM |
| `wp-items-center` | OrderDetails | Utility, not BEM |
| `wp-color-text-inverse` | FilterSidebar | Utility, not BEM |
| `funky-bold-text` | PickupLocationSelect | Non-BEM utility |
| `funky-price-text` | PickupLocationSelect | Non-BEM utility |

### 4.2 Sentence case violations in headings (Moderate)

| File | Current | Correct |
|---|---|---|
| HowItWorksSection.tsx:29 | "How It Works" | "How it works" |
| Sitemap.tsx:63 | "New Arrivals" | "New arrivals" |
| Sitemap.tsx:64 | "Best Sellers" | "Best sellers" |
| Sitemap.tsx:144 | "Our Story" | "Our story" |
| ShopMegaMenu.tsx:20 | "New Arrivals" | "New arrivals" |
| ShopMegaMenu.tsx:21 | "Best Sellers" | "Best sellers" |
| MobileMenu.tsx:93-94 | "New Arrivals", "Best Sellers" | "New arrivals", "Best sellers" |
| MobileMenu.tsx:155 | "Our Story" | "Our story" |
| AboutMegaMenu.tsx:12,28 | "Our Story" | "Our story" |
| SiteBreadcrumb.tsx:29 | "New Arrivals" | "New arrivals" |

Note: "Shop Now" labels are ALL-CAPS display exempt per guidelines.

---

## 5. Data audit

### 5.1 File count

70+ data files in `/src/app/data/`. This is a large number for mock data; some consolidation may be warranted.

### 5.2 Products subdirectory

`/src/app/data/products/` is a separate directory, suggesting product data is already split.

### 5.3 No critical issues

Data files appear appropriately organized by domain. No oversized files detected in initial scan.

---

## Summary

| Category | Critical | Moderate | Low |
|---|---|---|---|
| Theme | 1 | 3 | 2 |
| CSS | 1 | 2 | 1 |
| Tokens | 1 | 0 | 0 |
| Styles/BEM | 1 | 1 | 0 |
| Data | 0 | 0 | 0 |
| **Total** | **4** | **6** | **3** |
