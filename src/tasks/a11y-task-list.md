# Accessibility Task List

**Domain:** Accessibility (WCAG AA 2.2)  
**Status:** ⏳ Active  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-15  
**Source:** A11y trigger + audit a11y report

---

## P0: Critical Accessibility

- [ ] **A11Y1** — Audit all icon-only buttons for `aria-label` attributes — Sitemap toolbar buttons have labels but verify across all components
- [ ] **A11Y2** — Verify 44x44px minimum touch target on all interactive elements across mobile breakpoints
- [ ] **A11Y3** — Audit color contrast ratios — ensure 4.5:1 minimum (AA) across both light and dark modes for all retro theme colors

### P1: ARIA & Semantic HTML

- [ ] **A11Y4** — Audit `ProductRating.tsx` — missing ARIA `role="img"` and `aria-label` on star display (flagged in T6.4 guideline)
- [ ] **A11Y5** — Audit `ProductMeta.tsx` — should use semantic `<dl>`, `<dt>`, `<dd>` instead of div-based layout (flagged in T6.6 guideline)
- [ ] **A11Y6** — Verify all modals/drawers have proper focus trapping (Dialog, Drawer, Sheet, MobileFilterDrawer)
- [ ] **A11Y7** — Audit form error messages — ensure they are linked to inputs via `aria-describedby`
- [ ] **A11Y8** — Verify `prefers-reduced-motion` is respected by all animations (neon glows, spring effects, carousel transitions)
- [ ] **A11Y15** — OrderDetails uses `<h4>` directly with `text-neon-lime` instead of `<Heading level={4}>`
  - File: `/src/app/components/blocks/order/OrderDetails.tsx` line 57
  - Violates Guidelines Section 2.3 — all headings via Heading component
  - Source: `/reports/audits/2026-03-15_a11y-audit.md`

### P2: Keyboard Navigation

- [ ] **A11Y9** — Audit mega menu keyboard navigation — verify arrow keys, Escape, Tab behavior
- [ ] **A11Y10** — Verify skip navigation link (`SkipNavigation.tsx`) works on all page templates
- [ ] **A11Y11** — Audit product card keyboard interaction — Enter/Space for add-to-cart, compare, wishlist buttons
- [ ] **A11Y16** — Sitemap section icons lack `aria-hidden="true"` on decorative icons
  - File: `/src/app/components/pages/Sitemap.tsx` lines 43-264
  - Source: `/reports/audits/2026-03-15_a11y-audit.md`

### P3: Screen Reader

- [ ] **A11Y12** — Add live region announcements for cart updates (add/remove/quantity change)
- [ ] **A11Y13** — Verify all image components have meaningful alt text (not empty strings)
- [ ] **A11Y14** — Audit heading hierarchy — ensure no skipped levels on any template page

---

**Total:** 16 tasks | 0 complete | 16 open  
**Progress:** 0%
