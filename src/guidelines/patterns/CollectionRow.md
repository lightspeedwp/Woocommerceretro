# CollectionRow Pattern

**Version:** 2.0
**Type:** Pattern (Horizontal Product Display)
**WordPress Mapping:** Product Carousel Block
**File:** `/src/app/components/patterns/CollectionRow.tsx`
**CSS:** `/src/styles/sections/collection-row.css`
**BEM:** `.wc-collection-row__*`

---

## Overview

Displays products in a horizontal scrolling row for curated collections, related products, or category previews. Supports touch swipe, keyboard navigation, and optional auto-scroll.

---

## Component structure

```
CollectionRow (Pattern)
├── Section heading (title)
├── Section description (optional)
├── "View all" link (optional)
├── Scroll container
│   └── ProductCard x N (horizontal)
└── Navigation arrows (prev / next)
```

---

## BEM class map

| Element | Class | Purpose |
|---------|-------|---------|
| Root | `.wc-collection-row` | Section wrapper |
| Header | `.wc-collection-row__header` | Title + view all row |
| Title | `.wc-collection-row__title` | Section heading |
| Link | `.wc-collection-row__view-all` | View all link |
| Scroll | `.wc-collection-row__scroll` | Overflow scroll container |
| Item | `.wc-collection-row__item` | Individual scroll item |
| Nav | `.wc-collection-row__nav` | Arrow button container |
| Arrow | `.wc-collection-row__arrow` | Prev/next button |

### Modifiers

| Modifier | Purpose |
|----------|---------|
| `.wc-collection-row__arrow--prev` | Previous arrow |
| `.wc-collection-row__arrow--next` | Next arrow |
| `.wc-collection-row__arrow--disabled` | No more items |

---

## Retro / funky spec

- Gradient section heading text
- Glow product cards (delegates to ProductCard retro)
- Subtle gradient divider above section
- Alternating section backgrounds
- Optional floating orb behind grid
- Neon arrow navigation buttons with glow on hover

---

## Responsive behaviour

| Breakpoint | Visible items | Navigation |
|------------|---------------|------------|
| Mobile | 1-2 | Touch swipe, no arrows |
| Tablet | 2-3 | Optional arrows |
| Desktop | 4-5 | Arrow navigation + drag |

---

## Accessibility

- `<section aria-label="...">` wrapper
- `role="region"` on scroll container
- Arrow buttons: `aria-label="Previous products"` / `"Next products"`
- Keyboard arrow key navigation
- `scroll-snap-type: x mandatory` for consistent snap
- Respect `prefers-reduced-motion` (disable auto-scroll)

---

## Used in

- `FrontPageRetro` (featured products, best sellers)
- `SingleProductRetro` (related products)

---

## Related

- [ProductGrid](/guidelines/patterns/ProductGrid.md) -- vertical grid layout
- [RelatedProductsSection](/guidelines/patterns/RelatedProductsSection.md)

---

**Version:** 2.0 (March 2026) -- Migrated from `/guidelines/components/`, updated BEM, retro spec added.
