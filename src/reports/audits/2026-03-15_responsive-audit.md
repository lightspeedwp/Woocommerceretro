# Responsive Patterns Audit Report

**Date:** 2026-03-15  
**Trigger:** audit responsive  
**Status:** Processed  
**Processed:** 2026-03-15  
**Task List:** `/tasks/responsive-task-list.md`
**Guidelines Referenced:** `/guidelines/responsive/breakpoints.md`, `/guidelines/mobile/` guidelines

## Summary

- Files scanned: 10 template samples, 8 pattern samples, 5 block samples
- Violations found: 3
- P0 Critical: 0
- P1 High: 0
- P2 Medium: 2
- P3 Low: 1

## Findings

### P2: Medium

- [ ] **RESP1** — Tailwind-style breakpoint prefix in component className
  - File: `/src/app/components/blocks/order/OrderSummary.tsx` line 29
  - Issue: Uses `md:wp-grid-cols-5` — a Tailwind-style responsive prefix
  - File: `/src/app/components/blocks/order/AccountCreation.tsx` line 23
  - Issue: Uses `md:wp-grid-cols-2` — same pattern
  - Action: Move responsive layout to CSS with proper `@media` queries

- [ ] **RESP2** — ShopHero uses viewport-relative classes without mobile consideration
  - File: `/src/app/components/patterns/shop/ShopHero.tsx` line 18
  - Issue: `wp-min-h-full-page wp-min-h-80vh` — forces 80vh minimum height on all screens
  - Action: Verify this works on mobile; consider `clamp()` or mobile-specific override

### P3: Low

- [ ] **RESP3** — globals.css mobile menu has fixed max-width
  - File: `/styles/globals.css` line 372
  - Issue: `max-width: 380px` is a hardcoded pixel value
  - Action: Consider using `min(85%, 380px)` or CSS variable

## Clean Findings

- Mobile menu uses `transform: translateX()` for smooth slide animation ✅
- CSS architecture supports mobile-first approach via media queries ✅
- Navigation components have mobile collapse patterns ✅
- HeaderRetroPattern has both desktop and mobile menu modes ✅