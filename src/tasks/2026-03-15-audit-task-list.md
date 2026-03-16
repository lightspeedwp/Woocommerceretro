---
title: "Audit Task List - 2026-03-15"
date: "2026-03-15"
source: "/reports/audits/2026-03-15_full-audit-9-domains.md"
status: "active"
total_tasks: 22
---

# Audit Task List - 2026-03-15

Source report: `/reports/audits/2026-03-15_full-audit-9-domains.md`

---

## P1 Tasks (9 items)

### Routes

- [x] **R1:** ~~Align `routes.minimal.ts` API pattern~~ — Deferred (el() pattern works, not a breaking issue)
- [x] **R2:** Fix param name mismatch -- changed `routes.minimal.ts` from `/product/:productId` to `/product/:slug`. **DONE**
- [x] **R3:** Fix category path -- changed `routes.minimal.ts` from `/shop/category/:categorySlug` to `/category/:slug`. **DONE**

### Sitemap / Navigation Data

- [x] **S1:** Updated `ShopMegaMenu.tsx` category links to retro slugs (`apparel`, `accessories`, `games`, `posters`, `collectibles`). **DONE**
- [x] **S2:** Updated `navigation.ts` MAIN_MENU shop children to retro slugs + converted JSDoc to TypeScript interfaces. **DONE**

### CSS Architecture

- [x] **C1:** Extracted funky checkout inline styles from `globals.css` into `/src/styles/blocks/checkout/funky-checkout.css`. Replaced hardcoded `#000`/`#fff`/`#0f0`/`#0ff` with CSS variables and removed `!important` declarations. **DONE** (merged with C4+ST4)
- [x] **C2:** Split `playpocket-home.css` (~900 lines → 8 files, each under 200 lines). Import hub pattern at `playpocket-home.css`. **DONE**

### Hardcoded Styles

- [x] **ST1:** Extracted `SpinningCoin3D.tsx` keyframes + static styles to `/src/styles/blocks/display/pp-3d-components.css`. Remaining inline styles are dynamic (size/color props) — accepted per §2.1. **DONE**
- [x] **ST2:** Extracted `SubscriptionBox3D.tsx` inline `<style>` keyframes to CSS file. Remaining inline styles are dynamic — accepted per §2.1. **DONE**

---

## P2 Tasks (13 items)

### Routes

- [x] **R4:** Added 5 missing mega menu routes: `promotions/:slug`, `gift-cards`, `rewards`, `blog/format/:format`, `blog/category/:category`. Total 24 child routes (under 25 limit). **DONE**

### Sitemap

- [x] **S3:** Verified Sitemap categories sync with product data (5/5 product categories match). Found and fixed missing "News" blog category: added to `categories.ts` (id: 7) and `Sitemap.tsx`. Now in sync with `navigation.ts` and `megaMenuData.ts`. **DONE**

### CSS

- [x] **C3:** Removed duplicate `design/accordion.css` (identical to `display/accordion.css`), removed duplicate import, and removed inline accordion styles from `globals.css`. **DONE**
- [x] **C4:** Replaced hardcoded colors in funky checkout section with CSS variables. **DONE** (merged with C1)

### Accessibility

- [x] **A3:** Changed `CategoryRowRetro.tsx` key from index to `key={cat.slug}`. **DONE**
- [x] **A4:** Added `prefers-reduced-motion: reduce` for product card hover transform and image zoom. **DONE**

### Data

- [x] **D1:** Converted `navigation.ts` JSDoc to TypeScript interfaces. **DONE** (merged with S2)

### Responsive

- [x] **RES1:** Added 3-column grid breakpoint at 640px and 4-column at 1024px for `.pp-featured__grid`. **DONE**

### Styles

- [x] **ST3:** Replaced `style={{ marginBottom: 'var(--wp--preset--spacing--60)' }}` in `CartTotals.tsx` with `.woocommerce-cart-totals__newsletter-wrap` CSS class. **DONE**
- [x] **ST4:** Refactored `globals.css` funky checkout to remove all `!important` declarations. **DONE** (merged with C1)

### Guidelines

- [ ] **G1:** Remove duplicate `Attributions.md` file — BLOCKED (system-protected file).
- [x] **G2:** ~~Replace `any[]` type in `FeaturedProductsRetro.tsx`~~ — Deferred (interface depends on product data shape).
- [x] **G3:** Replaced `React.ComponentType<any>` in `CategoryRowRetro.tsx` with `LucideIcon` type. **DONE**

### Pending from user request

- [x] **EXTRA:** Reduced product card title font size via `font-size: var(--wp--preset--font-size--small)` on `.pp-product-card__name`. **DONE**