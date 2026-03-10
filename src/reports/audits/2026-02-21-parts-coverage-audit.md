# A6: Parts Coverage Audit

**Date:** 2026-02-21  
**Auditor:** Orchestrator Prompt v1.0  
**Scope:** Cross-reference part components in `/src/app/components/parts/` with guidelines in `/guidelines/parts/`.

---

## Summary

- **Total part component files:** 21
- **Total part guideline files:** 5 (Header, Footer, CheckoutHeader, CheckoutLayout, menus/MobileMenu)
- **Coverage:** 24%
- **Parts with matching guidelines:** 5
- **Parts WITHOUT guidelines:** 16
- **Dead guidelines (no matching component):** 0

---

## Coverage Matrix

| Component | Has Guideline? | Guideline Path | Priority |
|---|---|---|---|
| `AboutMegaMenu.tsx` | No | — | P2 |
| `BlogMegaMenu.tsx` | No | — | P2 |
| `Breadcrumbs.tsx` | No | — | P1 |
| `BreadcrumbsBar.tsx` | No | — | P1 (duplicate of above?) |
| `CheckoutFooter.tsx` | No | — | P1 |
| `CheckoutHeader.tsx` | Yes | `parts/CheckoutHeader.md` | COVERED |
| `CheckoutLayout.tsx` | Yes | `parts/CheckoutLayout.md` | COVERED |
| `ContactMegaMenu.tsx` | No | — | P2 |
| `Footer.tsx` | Yes | `parts/Footer.md` | COVERED |
| `Header.tsx` | Yes | `parts/Header.md` | COVERED |
| `Layout.tsx` | No | (components/Layout.md exists) | MISPLACED |
| `MainFooter.tsx` | No | — | P0 (duplicate of Footer?) |
| `MainHeader.tsx` | No | — | P0 (duplicate of Header?) |
| `MiniCart.tsx` | No | — | P0 |
| `MobileMenu.tsx` | Yes | `parts/menus/MobileMenu.md` | COVERED |
| `PromotionsMegaMenu.tsx` | No | — | P2 |
| `SearchOverlay.tsx` | No | — | P1 |
| `ShopInfoFooter.tsx` | No | — | P2 |
| `ShopMegaMenu.tsx` | No | — | P2 |
| `ShopSidebar.tsx` | No | — | P1 |
| `StoreNotices.tsx` | No | — | P2 |

---

## Critical Issues

### 1. Header/Footer Duplication

- `Header.tsx` AND `MainHeader.tsx` — likely the same component or one wraps the other
- `Footer.tsx` AND `MainFooter.tsx` — same issue
- Guidelines reference `Header.md` and `Footer.md` — unclear which file they document

**Action:** Audit both pairs; determine which is active, merge or delete the other.

### 2. Breadcrumbs Duplication

- `Breadcrumbs.tsx` AND `BreadcrumbsBar.tsx` — likely related
- No guidelines for either

**Action:** Investigate, merge if duplicates.

### 3. MiniCart — No Guideline

MiniCart is one of the most critical interactive components (slide-out cart drawer). It needs a comprehensive guideline covering:
- Drawer animation
- Cart item management
- Totals calculation
- Accessibility (focus trap, aria-live)

### 4. Misplaced Guideline

`/guidelines/components/Layout.md` documents the `Layout.tsx` part. Should be moved to `/guidelines/parts/Layout.md`.

---

## Missing Guidelines — Priority Order

### P0: Critical Global Parts

1. `MiniCart.tsx` — Cart drawer, critical commerce element
2. `MainHeader.tsx` — Primary header (or merge with Header guideline)
3. `MainFooter.tsx` — Primary footer (or merge with Footer guideline)

### P1: Important Navigation/Layout Parts

4. `Breadcrumbs.tsx` / `BreadcrumbsBar.tsx` — Navigation breadcrumbs
5. `CheckoutFooter.tsx` — Checkout-specific footer
6. `SearchOverlay.tsx` — Full-screen search
7. `ShopSidebar.tsx` — Shop filter sidebar
8. `Layout.tsx` — Move existing guideline from components/

### P2: Mega Menus & Utility Parts

9. `ShopMegaMenu.tsx` — Shop navigation
10. `BlogMegaMenu.tsx` — Blog navigation
11. `AboutMegaMenu.tsx` — About navigation
12. `ContactMegaMenu.tsx` — Contact navigation
13. `PromotionsMegaMenu.tsx` — Promotions navigation
14. `ShopInfoFooter.tsx` — Secondary footer
15. `StoreNotices.tsx` — Store-wide notices

---

## Recommendations

1. **Resolve Header/Footer/Breadcrumbs duplications** — Determine canonical components
2. **Write MiniCart guideline immediately** — Critical for funky redesign Phase 2
3. **Move Layout.md** from `/guidelines/components/` to `/guidelines/parts/`
4. **Create mega menu parent guideline** — All 5 mega menus can share common patterns
5. **Consider menus/ subdirectory** — Move all MegaMenu + MobileMenu guidelines to `parts/menus/`
