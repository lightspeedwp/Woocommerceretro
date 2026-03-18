# QuickView Pattern

**Version:** 1.0
**Type:** Pattern (Product Modal)
**WordPress Mapping:** Quick View Modal Pattern
**File:** `/src/app/components/patterns/QuickView.tsx`
**CSS:** `/src/styles/blocks/overlay/quick-view.css`
**BEM:** `.wc-quick-view__*`

---

## Overview

Modal dialog for previewing product details without navigating away. Triggered from ProductCard hover/click. Displays image, title, price, variant selector, quantity, and add-to-cart action.

---

## Component structure

```
QuickView (Modal/Dialog)
├── Backdrop (click to close)
├── Glass modal panel
│   ├── Close button
│   ├── Product image (large)
│   ├── Product info
│   │   ├── Title
│   │   ├── Price
│   │   ├── Short description
│   │   ├── Variant selector (if variable)
│   │   ├── Quantity selector
│   │   └── "Add to cart" button
│   └── "View full details" link
└── Focus trap
```

---

## BEM class map

| Element | Class | Purpose |
|---------|-------|---------|
| Root | `.wc-quick-view` | Modal wrapper |
| Backdrop | `.wc-quick-view__backdrop` | Overlay background |
| Panel | `.wc-quick-view__panel` | Glass content panel |
| Close | `.wc-quick-view__close` | Close button |
| Image | `.wc-quick-view__image` | Product image |
| Info | `.wc-quick-view__info` | Text content area |
| Title | `.wc-quick-view__title` | Product name |
| Price | `.wc-quick-view__price` | Price display |
| Variants | `.wc-quick-view__variants` | Variant selector |
| Swatch | `.wc-quick-view__swatch` | Individual variant option |
| Quantity | `.wc-quick-view__quantity` | Quantity input |
| Add | `.wc-quick-view__add` | Add to cart button |
| Link | `.wc-quick-view__link` | View full details |

### Modifiers

| Modifier | Purpose |
|----------|---------|
| `.wc-quick-view--open` | Visible state |
| `.wc-quick-view__swatch--active` | Selected variant |
| `.wc-quick-view__swatch--unavailable` | Out of stock variant |

---

## Retro / funky spec

- Glass modal panel: `backdrop-filter: blur(16px)`
- Subtle glow frame on product image
- Neon variant selector swatches (active glow ring)
- Glow "Add to cart" button
- Spring animation on modal open (scale 0.95 to 1.0)
- Backdrop: semi-transparent dark with subtle blur
- Respect `prefers-reduced-motion`: instant open, no spring

---

## Accessibility

- `role="dialog"` with `aria-modal="true"`
- `aria-label="Quick view: [product name]"`
- Focus trap (Tab cycles within modal)
- Escape key closes modal
- Focus returns to trigger element on close
- Close button: `aria-label="Close quick view"`
- 44x44px minimum touch targets on all interactive elements

---

## Used in

- Triggered from `ProductCard` (any grid/row context)

---

## Related

- [ProductCard](/guidelines/blocks/woocommerce/ProductCard.md) -- trigger source
- [RelatedProductsSection](/guidelines/patterns/RelatedProductsSection.md)

---

**Version:** 1.0 (March 2026)
