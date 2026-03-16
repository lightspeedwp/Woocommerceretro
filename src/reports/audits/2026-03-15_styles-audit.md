# Hardcoded Styles Audit Report

**Date:** 2026-03-15  
**Trigger:** audit styles  
**Status:** Processed  
**Processed:** 2026-03-15  
**Task List:** `/tasks/css-task-list.md`
**Guidelines Referenced:** `/guidelines/Guidelines.md` Section 2.1, `/guidelines/development/modern-react-coding-standards.md` Section 9

## Summary

- Files scanned: 30 component files sampled
- Violations found: 6
- P0 Critical: 0
- P1 High: 1
- P2 Medium: 4
- P3 Low: 1

## Findings

### P1: High

- [ ] **STY1** — `text-neon-*` utility classes across 8 order block components (25+ occurrences)
  - Files: `AccountCreation.tsx`, `AdditionalFields.tsx`, `AdditionalInformation.tsx`, `AddressDetails.tsx`, `DownloadsSection.tsx`, `OrderDetails.tsx`, `OrderStatus.tsx`, `OrderStatusHeader.tsx`
  - Classes: `text-neon-cyan`, `text-neon-pink`, `text-neon-lime`
  - Rule: No utility classes in className — all styling via BEM
  - Action: Create BEM modifier classes (`.wp-order__text--accent`, `.wp-order__text--highlight`) in CSS

### P2: Medium

- [ ] **STY2** — CartTotals uses inline style for spacing
  - File: `/src/app/components/blocks/cart/CartTotals.tsx` line 66
  - Issue: `style={{ marginBottom: 'var(--wp--preset--spacing--60)' }}`
  - Action: Add BEM class with `margin-bottom` in CSS

- [ ] **STY3** — MainFooter uses inline style for display
  - File: `/src/app/components/parts/MainFooter.tsx` line 60
  - Issue: `style={{ display: 'inline-block' }}`
  - Action: Add this to the `.wp-site-footer__logo-link` CSS class

- [ ] **STY4** — DropdownMenu uses inline style for positioning
  - File: `/src/app/components/blocks/overlay/DropdownMenu.tsx` line 93
  - Issue: `style={{ top: position.top, left: position.left, position: "absolute" }}`
  - Note: Dynamic positioning may be acceptable, but `position: "absolute"` should be in CSS
  - Action: Move `position: absolute` to CSS class; keep `top`/`left` as dynamic inline

- [ ] **STY5** — Sidebar uses inline CSS variable override
  - File: `/src/app/components/blocks/layout/Sidebar.tsx` line 92
  - Issue: `style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}` with `as any` cast
  - Action: Set via CSS class or `data-` attribute with CSS selector

### P3: Low

- [ ] **STY6** — 3D components (SpinningCoin3D, SubscriptionBox3D) use extensive inline styles
  - Files: `SpinningCoin3D.tsx` (10+ inline styles), `SubscriptionBox3D.tsx` (15+ inline styles)
  - Note: These are 3D animation/transform components where dynamic `style` is often necessary
  - Action: Extract static transforms to CSS where possible; document exception in guidelines

## Clean Findings

- Parts components use BEM classes consistently ✅
- Pattern components use BEM naming ✅
- No raw Tailwind utility classes (flex, p-4, etc.) found in non-order components ✅
- Chart.tsx uses inline styles only for CSS custom property injection (acceptable) ✅