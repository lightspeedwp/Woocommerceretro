# CSS Task List

**Domain:** CSS Architecture & Optimization  
**Status:** ⏳ Active  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-15  
**Source:** CSS trigger — CSS architecture audit

---

## P1: Critical CSS Issues

- [x] **CSS1** — Verified all 288 CSS @imports in `/styles/globals.css` resolve correctly — zero 404s. Found 8 PlayPocket section CSS files (`pp-home-layout`, `pp-hero`, `pp-logo`, `pp-pixel-btn`, `pp-categories`, `pp-products`, `pp-bottom-sections`, `pp-footer-home`) that existed but were NOT imported. Added all 8 @imports. ✅ **COMPLETE**
- [x] **CSS2** — Audited all component files for remaining Tailwind utility classes. Found only 3 `flex-1` instances in `CookieConsent.tsx` — replaced with BEM class `.wp-cookie-settings__section-content` with `flex: 1` in `cookie-consent.css`. Zero other Tailwind classes found. ✅ **COMPLETE**
- [x] **CSS3** — Added missing `.wc-related-products__grid` styles to `/src/styles/sections/related-products.css` — responsive grid (2 col → 3 col at 640px → 4 col at 1024px) with proper gap spacing. ✅ **COMPLETE**

### P2: CSS Optimization

- [x] **CSS4** — Reviewed `/src/styles/blocks/sweep-cleanup.css` — file IS needed (1000+ lines of actively-used BEM classes for charts, sidebars, context menus, popovers, related posts, social feeds, category tiles, service features, contact sections, brand grids, account dashboard). Cannot be removed. Flagged for splitting in CSS5. ✅ **COMPLETE**
- [x] **CSS5** — Split `sweep-cleanup.css` (1980 lines) into 10 domain-aligned files under 200 lines each. Created 3 block files (`sweep-ui-components.css`, `sweep-ui-misc.css`, `sweep-product-reviews.css`) and 7 section files (`sweep-blog-social.css`, `sweep-shop-sections.css`, `sweep-brand-grid.css`, `sweep-account.css`, `sweep-account-badges.css`, `sweep-shop-pages.css`, `sweep-shop-misc.css`). Added 10 @imports to globals.css, deleted original. Remaining oversized root files noted: `utilities.css` (~935 lines), `woocommerce-core.css` (~1105 lines), `wordpress-core.css` (~530 lines), `theme-variables.css` (~388 lines), `retro-theme.css` (~388 lines). ✅ **COMPLETE**
- [x] **CSS6** — Reviewed all 9 legacy section CSS files. All are actively used and under 200 lines each — no consolidation or removal needed. `legacy-text-utilities.css` has 6 lines of dead `text-neon-*` classes (replaced by BEM in CSS13), but `funky-text-neon` is still used by 5 components (BlogSidebar, HowItWorksSection, TrustBand, ValuePropositionSection, ValuesGridSection). ✅ **COMPLETE**
- [ ] **CSS7** — Audit unused CSS variables — run scan similar to `/reports/fixes/2026-03-10_p2-1-unused-css-variables-removal.md`

### P3: CSS Architecture

- [ ] **CSS8** — Ensure BEM naming consistency across all block CSS files (`.wp-block-*` vs `.wc-*` vs `.retro-*`)
- [ ] **CSS9** — Document CSS architecture overview in `/guidelines/development/css-optimization-guidelines.md` — update with current file count and structure
- [ ] **CSS10** — Review dark mode CSS — verify all `.dark` overrides use CSS variables, not inline `!important` overrides
- [ ] **CSS11** — Create CSS file index documenting what each file in `/src/styles/blocks/` covers

---

## Audit Findings — March 15, 2026

*Source: `audit css` + `audit styles` reports*

### P1: Critical

- [x] **CSS12** — Missing @import: `loyalty-retro.css` not imported in globals.css ✅ **COMPLETE**
  - Fixed during cleanup session 2026-03-15
  - File: `/src/styles/sections/loyalty-retro.css` exists but has no @import entry
  - Loyalty retro page styles are NOT loading
  - Source: `/reports/audits/2026-03-15_css-audit.md`

- [x] **CSS13** — `text-neon-*` utility classes across 8 order block components (25+ occurrences) ✅ **COMPLETE**
  - Replaced 30 occurrences across 9 files with BEM modifiers: `wp-order-text--coral`, `wp-order-text--sky`, `wp-order-text--success`
  - Added BEM modifier CSS to `/src/styles/blocks/woocommerce/order-confirmation.css` with dark mode support
  - Files updated: AccountCreation, AdditionalFields, AdditionalInformation, AddressDetails, DownloadsSection, OrderDetails, OrderStatus, OrderStatusHeader, OrderSummary
  - Fixed: 2026-03-15
  - Source: `/reports/audits/2026-03-15_styles-audit.md`

### P2: Architecture

- [x] **CSS14** — Extracted funky checkout from `globals.css` into `/src/styles/blocks/checkout/funky-checkout.css`. Replaced hardcoded colors with CSS variables and removed all `!important` declarations. ✅ **COMPLETE** (done in C1+C4+ST4 batch)
  - File: `/styles/globals.css` lines 361-365
  - Refactor specificity instead
  - Source: `/reports/audits/2026-03-15_css-audit.md`

- [x] **CSS15** — Removed duplicate `design/accordion.css` (identical to `display/accordion.css`), removed duplicate import. ✅ **COMPLETE** (done in C3 batch)
  - Both imported in globals.css — consolidate if overlapping
  - Source: `/reports/audits/2026-03-15_css-audit.md`

- [x] **CSS16** — Replaced inline `style={{ marginBottom }}` in `CartTotals.tsx` with `.woocommerce-cart-totals__newsletter-wrap` CSS class. ✅ **COMPLETE** (done in ST3 batch)
  - File: `/src/app/components/blocks/cart/CartTotals.tsx` line 66
  - Source: `/reports/audits/2026-03-15_styles-audit.md`

- [x] **CSS17** — Removed inline `style={{ display: 'inline-block' }}` from `MainFooter.tsx` logo link. Added `display: inline-block` to `.wp-site-footer__logo-link` in `footer.css`. ✅ **COMPLETE**
  - File: `/src/app/components/parts/MainFooter.tsx` line 60
  - Source: `/reports/audits/2026-03-15_styles-audit.md`

- [x] **CSS18** — Removed `md:wp-grid-cols-*` Tailwind-style breakpoint prefixes from `OrderSummary.tsx` and `AccountCreation.tsx`. CSS already handles responsive layout via flex + `@media` queries in `order-confirmation.css`. ✅ **COMPLETE**
  - Files: `OrderSummary.tsx` line 29, `AccountCreation.tsx` line 23
  - Move responsive layout to CSS with proper `@media` queries
  - Source: `/reports/audits/2026-03-15_responsive-audit.md`

---

**Total:** 18 tasks | 13 complete | 5 open  
**Progress:** 72.2%