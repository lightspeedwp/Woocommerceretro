# A4: Blocks Coverage Audit

**Date:** 2026-02-21  
**Auditor:** Orchestrator Prompt v1.0  
**Scope:** Cross-reference block components in `/src/app/components/blocks/` with guidelines in `/guidelines/blocks/`.

---

## Summary

- **Total block component files:** 115 (across 21 subdirectories, excluding index.ts files)
- **Total block guideline files:** 92 (across 7 subdirectories + root)
- **Coverage (guidelines for existing components):** ~35%
- **Components with matching guidelines:** ~40
- **Components WITHOUT guidelines:** ~75
- **Dead guidelines (no matching component):** ~52

---

## Critical Finding: Guideline/Component Mismatch

The guidelines in `/guidelines/blocks/` are organized by **WordPress block category** (text, media, embed, widgets, theme, design, woocommerce), while the actual components in `/src/app/components/blocks/` are organized by **functional domain** (archive, blog, cart, checkout, forms, overlay, etc.).

This creates a fundamental structure mismatch — many guidelines document WordPress blocks that don't have direct React component equivalents, and many React components don't have guidelines at all.

---

## Coverage Matrix

| Component Subdirectory | Components | Guidelines Exist | Gap | Priority |
|---|---|---|---|---|
| `archive/` | 6 | 2 (FilterSidebar, Pagination) | 4 missing | HIGH |
| `blog/` | 1 | 0 | 1 missing | LOW |
| `cart/` | 2 | 2 (CartItem via woocommerce/, CartTotals via woocommerce/) | 0 | DONE |
| `checkout/` | 11 + ui/ | 1 (CheckoutFormSection via woocommerce/) | 10 missing | HIGH |
| `design/` | 9 | 9 (Accordion, Buttons, Card, Columns, Grid, Group, Row, Separator, Stack) | 0 | DONE |
| `display/` | 6 | 0 | 6 missing | MEDIUM |
| `feedback/` | 5 | 1 (feedback.md at root) | 4 missing | MEDIUM |
| `forms/` | 11 | 1 (forms.md at root) | 10 missing | HIGH |
| `forms-advanced/` | 3 | 0 | 3 missing | LOW |
| `interactive/` | 5 | 0 | 5 missing | LOW |
| `layout/` | 4 | 1 (layout.md at root) | 3 missing | MEDIUM |
| `media/` | 1 | 0 direct match | 1 missing | LOW |
| `navigation/` | 5 | 2 (Breadcrumb, Pagination via theme/) | 3 missing | MEDIUM |
| `order/` | 9 | 1 (OrderConfirmation via woocommerce/) | 8 missing | HIGH |
| `overlay/` | 8 | 1 (EnquiryModal at root) | 7 missing | MEDIUM |
| `product/` | 5 | 2 (ProductCard via woocommerce/) | 3 missing | HIGH |
| `search/` | 2 | 1 (Search via theme/) | 1 missing | LOW |
| `single-product/` | 13 | 3 (ProductGallery, QuantitySelector via woocommerce/) | 10 missing | HIGH |
| `theme/` | 7 | 7 (all covered in theme/) | 0 | DONE |
| `ui/` | 3 | 0 | 3 missing | LOW |

---

## WordPress Block Guidelines Without Components (Dead Docs)

These guidelines document WordPress core blocks that don't have direct React component equivalents:

### `/guidelines/blocks/text/` — 15 files
| Guideline | Has Component? | Action |
|---|---|---|
| `Classic.md` | No | Keep as reference |
| `Code.md` | No | Keep as reference |
| `Details.md` | No | Keep as reference |
| `Heading.md` + `heading.md` | No (uses common/Heading.tsx) | Merge, reference common/ |
| `List.md` + `list.md` | No | Keep as reference |
| `Math.md` | No | Keep as reference |
| `Paragraph.md` + `paragraph.md` | No | Keep as reference |
| `Preformatted.md` | No | Keep as reference |
| `Pullquote.md` | No | Keep as reference |
| `Quote.md` | No | Keep as reference |
| `Table.md` | No (display/Table.tsx) | Link to display/ component |
| `Verse.md` | No | Keep as reference |

### `/guidelines/blocks/embed/` — 8 files
All document WordPress embed blocks — none have direct React components. Keep as WordPress reference.

### `/guidelines/blocks/widgets/` — 12 files
All document WordPress widget blocks — none have direct React components. Keep as WordPress reference.

### `/guidelines/blocks/media/` — 6 files
Document WordPress media blocks. No direct React equivalents (media/VideoTestimonial.tsx is custom).

### `/guidelines/blocks/theme/` — 24 files
Most have matching components in `blocks/theme/`. Extras like `ArchiveTitle.md`, `Avatar.md`, `Comments.md`, `LoginOut.md`, `PostAuthor.md`, etc. are WordPress reference docs.

---

## Missing Guidelines — Priority Order

### P0: Critical (Cart/Checkout/Product flow)

1. `checkout/CheckoutStep.tsx` — No guideline
2. `checkout/PaymentMethods.tsx` — No guideline
3. `checkout/ShippingAddressForm.tsx` — No guideline
4. `checkout/BillingAddressForm.tsx` — No guideline
5. `checkout/OrderSummary.tsx` — No guideline
6. `checkout/CouponInput.tsx` — No guideline
7. `checkout/ContactInfo.tsx` — No guideline
8. `checkout/DeliveryMethodSelector.tsx` — No guideline
9. `single-product/ProductAddToCart.tsx` — No guideline
10. `single-product/ProductInfo.tsx` — No guideline
11. `single-product/ProductTabs.tsx` — No guideline
12. `single-product/ProductPrice.tsx` — No guideline

### P1: High (Archive/Order/Product)

13. `archive/ActiveFilters.tsx` — No guideline
14. `archive/EmptyResults.tsx` — No guideline
15. `archive/MobileFilterDrawer.tsx` — No guideline
16. `order/OrderDetails.tsx` — No guideline
17. `order/OrderStatus.tsx` — No guideline
18. `order/OrderStatusHeader.tsx` — No guideline
19. `product/CompareButton.tsx` — No guideline
20. `product/VariantSelector.tsx` — No guideline
21. `product/ComparisonBar.tsx` — No guideline

### P2: Medium (Forms/Display/Overlay)

22-31. All `forms/` components except root forms.md
32-37. All `display/` components (AspectRatio, Avatar, Badge, Chart, Countdown, Table)
38-44. All `overlay/` components except EnquiryModal

### P3: Low (Interactive/Advanced/Blog)

45-49. All `interactive/` components
50-52. All `forms-advanced/` components
53. `blog/CategoryFilter.tsx`
54-56. All `ui/` components

---

## Recommendations

1. **Reorganize guidelines to match component structure** — Create guideline subdirectories that mirror `/src/app/components/blocks/` (archive/, checkout/, forms/, etc.)
2. **Keep WordPress reference docs** — The text/, embed/, widgets/ guidelines are valuable WP references even without React components
3. **Delete duplicate files** — Merge Heading.md+heading.md, List.md+list.md, etc.
4. **Write P0 guidelines first** — Checkout and single-product guidelines are critical for the funky redesign
5. **Create batch guideline template** — Use the orchestrator's section template to rapidly generate guidelines for P1-P3 components
