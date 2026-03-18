# Accessibility Task List

**Domain:** Accessibility (WCAG AA 2.2)  
**Status:** ✅ Complete  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-17  
**Source:** A11y trigger + audit a11y report

---

## P0: Critical Accessibility

- [x] **A11Y1** — Audit all icon-only buttons for `aria-label` attributes — Added `aria-label` to SearchAutocomplete clear button and recent search remove buttons
- [x] **A11Y2** — Verified 44x44px touch targets — header buttons, footer links, mobile menu items, pagination, WooCommerce buttons all have `min-height: 44px` / `min-width: 44px`. Fixed product card action buttons from 2rem (32px) → 2.75rem with `min-width: 44px; min-height: 44px` in both `product-card.css` and `legacy-product-card.css`. ✅ **COMPLETE** (March 17)
- [x] **A11Y3** — Audited colour contrast ratios — light mode muted text `#5A6878` on `#F2EEE6` = 4.5:1 (AA), dark mode muted text `#9FAAAF` on `#151A1E` = 5.8:1 (AA), primary text 12:1+ both modes (AAA), state tokens (success/warning/error) AA-verified in `retro-theme.css` with annotated contrast values. ✅ **COMPLETE** (March 17)

### P1: ARIA & Semantic HTML

- [x] **A11Y4** — Audit `ProductRating.tsx` — Added `role="img"` and `aria-label` on star display, `aria-hidden="true"` on star icons
- [x] **A11Y5** — Audit `ProductMeta.tsx` — Converted to semantic `<dl>`, `<dt>`, `<dd>` structure
- [x] **A11Y6** — Focus trapping in modals/drawers — Created `useFocusTrap` hook, integrated into Dialog, Sheet, and AlertDialog with `role="dialog"`, `aria-modal="true"`, auto-focus, Tab cycling, and focus restoration on close
- [x] **A11Y7** — Audited form error messages — Checkout forms (`CheckoutContact`, `CheckoutInput`), `Form.tsx`, and `NewsletterCTA` all have `aria-describedby` linked to error IDs. Contact/comment forms use native `required` validation (browser-accessible). No custom error states to link.
- [x] **A11Y8** — Verified `prefers-reduced-motion` is respected — 20+ CSS files with `@media (prefers-reduced-motion: reduce)`, 3D components check `prefersReducedMotion()`, `usePrefersReducedMotion` hook available
- [x] **A11Y15** — OrderDetails uses `<h4>` directly — Replaced with `<Heading level={4}>` component
  - File: `/src/app/components/blocks/order/OrderDetails.tsx`

### P2: Keyboard Navigation

- [x] **A11Y9** — Verified mega menu keyboard navigation — `MegaMenuWrapper` handles Enter/Space toggle, Escape close + focus restore, ArrowDown open + focus first link, `aria-expanded`/`aria-haspopup`, focusin/focusout with delay-based close. Fully compliant.
- [x] **A11Y10** — Verified skip navigation — Added `SkipNavigation` to `SiteLayout`, added `id="search"` to HeaderRetroPattern search button, added `id="footer"` to FooterRetroPattern, verified `id="main-content"` on all template `<main>` elements including FrontPageRetro
- [x] **A11Y11** — Verified product card keyboard interaction — all action buttons (`<button>` elements) are natively keyboard accessible with Enter/Space. Wishlist, quick view, and add-to-cart buttons have `aria-label` attributes. `stopPropagation` isolates keyboard events from parent Link.
- [x] **A11Y16** — Sitemap section icons — Added `aria-hidden="true"` on all 16 decorative section icons
  - File: `/src/app/components/pages/Sitemap.tsx`

### P3: Screen Reader

- [x] **A11Y12** — Added `aria-live="polite"` region in CartProvider — announces add/remove/quantity/clear events to screen readers
- [x] **A11Y13** — Fixed 20 empty `alt=""` attributes across 17 files — blog posts use post title, product thumbnails use product name, avatars use person name, related posts use rendered title
- [x] **A11Y14** — Audited heading hierarchy — Fixed h3→h2 in SingleProductRetro tab panels, h3→p in SinglePostRetro author card, h3→h2 in ArchiveProductRetro sidebar, h4→h3 in PageCheckoutRetro cart items. All templates now have valid heading hierarchy with no skipped levels.

---

**Total:** 16 tasks | 16 complete | 0 open  
**Progress:** 100%

---

## New findings — March 17, 2026 audit

*Source: `/reports/audits/2026-03-17_full-audit-9-domains.md`*  
*Tracked in: `/tasks/2026-03-17-audit-task-list.md`*

| ID | Description | Priority | Cross-ref |
|----|-------------|----------|-----------|
| A11Y-H1 | 16 bare headings in `PageFormShowcase.tsx` — use `Heading`/`Typography` | P1 | 2026-03-17 audit |
| A11Y-RM1 | Add `prefers-reduced-motion` blocks to section CSS files with transitions | P2 | 2026-03-17 audit |
| A11Y-H2 | 5 bare headings in blog template error states | P3 | 2026-03-17 audit |