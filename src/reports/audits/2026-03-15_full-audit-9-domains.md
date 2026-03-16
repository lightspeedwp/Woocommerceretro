---
title: "Full 9-Domain Audit Report"
date: "2026-03-15"
type: "audit-report"
domains: ["routes", "sitemap", "tokens", "css", "a11y", "data", "responsive", "styles", "guidelines"]
severity_scale: "P0 (critical) > P1 (high) > P2 (medium) > P3 (low)"
---

# Full 9-Domain Audit Report

**Date:** 2026-03-15
**Triggered by:** `audit && process reports`
**Active router:** `routes.minimal.ts` (App.tsx imports this)
**Full router:** `routes.ts` (not in use, maintained for production)

---

## 1. Routes Audit

| # | Severity | Finding |
|---|----------|---------|
| R1 | P1 | `routes.minimal.ts` uses `element: el(Component)` pattern; `routes.ts` uses `Component: Component`. Inconsistent API usage. |
| R2 | P1 | Param name mismatch: `routes.minimal.ts` uses `/product/:productId` but `routes.ts` uses `/product/:slug`. Components may break when switching routers. |
| R3 | P1 | Path mismatch: `routes.minimal.ts` has `/shop/category/:categorySlug` but `routes.ts` has `/category/:slug`. Category links from components use `/category/:slug`, so minimal routes will 404 on category navigation. |
| R4 | P2 | `routes.minimal.ts` missing many routes linked from mega menus and footer: `/gift-cards`, `/wishlist`, `/shipping-returns`, `/privacy-policy`, `/terms-and-conditions`, etc. These will 404 in preview. |
| R5 | P3 | `routes.ts` has 7 legal redirect routes that could be consolidated. |

## 2. Sitemap Audit

| # | Severity | Finding |
|---|----------|---------|
| S1 | P1 | `ShopMegaMenu.tsx` links to legacy category slugs (`/category/clothing`, `/category/computers`, `/category/bundles`, `/category/home-living`) that don't match retro product data categories (`apparel`, `accessories`, `games`, `posters`, `collectibles`). |
| S2 | P1 | `navigation.ts` MAIN_MENU uses legacy slugs (`/category/electronics`, `/category/clothing`, `/category/home-living`, `/category/sports-fitness`) that don't exist in product data. |
| S3 | P2 | `Sitemap.tsx` correctly lists retro categories (`apparel`, `accessories`, `games`, `posters`, `collectibles`) but ShopMegaMenu and navigation.ts contradict it. |
| S4 | P3 | `BlogMegaMenu.tsx` links to `/blog/category/development`, `/blog/category/design`, `/blog/category/news` -- these resolve to `ArchiveBlogRetro` via routes.ts `blog/category/:slug` but aren't in minimal routes. |

## 3. Tokens Audit

| # | Severity | Finding |
|---|----------|---------|
| T1 | P3 | `playpocket-home.css` uses CSS variable fallbacks with hardcoded hex values (`#FFC533`, `#1E2630`, `#F2EEE6`). This is correct practice -- fallbacks are appropriate. |
| T2 | P3 | Dark mode overrides in playpocket-home.css only cover `.retro-hero-stage`. Other components rely on inherited CSS variable switching, which is correct. |
| T3 | PASS | Token usage is consistent across retro theme components. WordPress `--wp--preset--*` variables used throughout. |

## 4. CSS Audit

| # | Severity | Finding |
|---|----------|---------|
| C1 | P1 | `globals.css` contains ~110 lines of inline styles (lines 364-470+) for funky checkout, mobile menu, mini cart, breadcrumbs, store notices, and product card states. These should be extracted to `/src/styles/` files. |
| C2 | P1 | `playpocket-home.css` is ~900 lines. Guideline limit is 200 lines per CSS file. Should be split into separate files per BEM block (logo, hero, categories, products, power-up, bestsellers, footer). |
| C3 | P2 | Duplicate accordion CSS imports: `blocks/design/accordion.css` AND `blocks/display/accordion.css`. Potential selector conflicts. |
| C4 | P2 | `globals.css` funky checkout section (lines 364-369) uses hardcoded colors (`#000`, `#fff`, `#0f0`, `#0ff`, `#111`, `#222`) with `!important` flags. Violates token-only styling rule. |
| C5 | P3 | Total @imports in globals.css: 280+. Performance impact is mitigated by bundler, but cognitive overhead is high. |

## 5. Accessibility Audit

| # | Severity | Finding |
|---|----------|---------|
| A1 | PASS | `HeaderRetroPattern.tsx` has comprehensive aria-labels on all icon buttons, aria-expanded on toggle. |
| A2 | PASS | `FeaturedProductsRetro.tsx` has aria-labels on heart and add-to-cart buttons with product names. |
| A3 | P2 | `CategoryRowRetro.tsx` uses index-based keys (`key={i}`). If categories reorder, React may produce stale DOM. Use `cat.slug` instead. |
| A4 | P2 | `playpocket-home.css` has `prefers-reduced-motion: reduce` for logo keycap but not for product card hover transforms (`.pp-product-card:hover { transform }`) or image zoom (`.pp-product-card:hover .pp-product-card__img { transform }`). |
| A5 | P3 | `CategoryRowRetro.tsx` arrow button has good `aria-label="View all categories"`. PASS. |
| A6 | PASS | Semantic HTML used throughout: `<nav>`, `<article>`, `<section>`, `<main>`, `<footer>`. |

## 6. Data Audit

| # | Severity | Finding |
|---|----------|---------|
| D1 | P2 | `navigation.ts` uses JSDoc `@typedef` instead of TypeScript interfaces. Should be converted to proper TS types per coding standards. |
| D2 | P3 | Product data split across 5 category files (`accessories.ts`, `apparel.ts`, `collectibles.ts`, `games.ts`, `posters.ts`) plus main `products.ts`. Good architecture. |
| D3 | PASS | Data directory has 40+ data files covering all template needs. No missing data sources detected. |

## 7. Responsive Audit

| # | Severity | Finding |
|---|----------|---------|
| RES1 | P2 | `.pp-featured__grid` jumps from 2 columns (default) to 4 columns at 640px. Missing 3-column breakpoint for tablets (768px). Products may appear too small on 640-767px screens. |
| RES2 | P3 | `.pp-main` has comprehensive breakpoint coverage (320, 480, 640, 768, 1024, 1280, 1440px). PASS. |
| RES3 | P3 | Category row uses `overflow-x: auto` for horizontal scroll on mobile. Good pattern. |

## 8. Styles (Hardcoded) Audit

| # | Severity | Finding |
|---|----------|---------|
| ST1 | P1 | `SpinningCoin3D.tsx` has 10+ inline `style={{}}` attributes with hardcoded values. Should use CSS classes per guidelines (exception: dynamic/computed values are acceptable). |
| ST2 | P1 | `SubscriptionBox3D.tsx` has similar inline style issues. |
| ST3 | P2 | `CartTotals.tsx` line 66: `style={{ marginBottom: 'var(--wp--preset--spacing--60)' }}`. Should be a CSS class. |
| ST4 | P2 | `globals.css` funky checkout uses `!important` on 4 declarations. Should be refactored to use specificity instead. |

## 9. Guidelines Audit

| # | Severity | Finding |
|---|----------|---------|
| G1 | P2 | Duplicate attribution files at root: `ATTRIBUTIONS.md` and `Attributions.md`. Only one should exist per guidelines. |
| G2 | P2 | `FeaturedProductsRetro.tsx` uses `any[]` for products type. Should use proper TypeScript interfaces per coding standards. |
| G3 | P2 | `CategoryRowRetro.tsx` uses `React.ComponentType<any>` for icon type. Should use specific Lucide icon type. |
| G4 | P3 | `FeaturedProductsRetro.tsx` catch block at line 41 silently swallows errors. Should log to console in development. |
| G5 | PASS | All retro components have `displayName` set. Good practice. |
| G6 | PASS | BEM naming conventions followed consistently in CSS. |

---

## Summary

| Domain | P0 | P1 | P2 | P3 | PASS |
|--------|----|----|----|----|------|
| Routes | 0 | 3 | 1 | 1 | 0 |
| Sitemap | 0 | 2 | 1 | 1 | 0 |
| Tokens | 0 | 0 | 0 | 2 | 1 |
| CSS | 0 | 2 | 2 | 1 | 0 |
| A11y | 0 | 0 | 2 | 1 | 3 |
| Data | 0 | 0 | 1 | 1 | 1 |
| Responsive | 0 | 0 | 1 | 2 | 0 |
| Styles | 0 | 2 | 2 | 0 | 0 |
| Guidelines | 0 | 0 | 3 | 1 | 2 |
| **Total** | **0** | **9** | **13** | **10** | **7** |

**Overall health:** Good. No P0 critical issues. 9 P1 items need attention, primarily around route/navigation data mismatches and CSS architecture. The retro theme components are well-structured with good accessibility practices.
