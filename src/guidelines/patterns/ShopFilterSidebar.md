# ShopFilterSidebar Pattern

**Version:** 1.0
**Type:** Pattern (Shop Filter)
**WordPress Mapping:** WooCommerce Product Filters Block
**File:** `/src/app/components/patterns/ShopFilterSidebar.tsx`
**CSS:** `/src/styles/sections/shop-filter.css`
**BEM:** `.wc-shop-filter__*`

---

## Overview

Sidebar panel for filtering shop products by category, price range, attributes, and availability. Supports both persistent sidebar (desktop) and slide-out drawer (mobile).

---

## Component structure

```
ShopFilterSidebar (Pattern)
├── Filter header ("Filters" + active count + clear all)
├── Accordion sections
│   ├── Category filter (checkboxes)
│   ├── Price range filter (slider)
│   ├── Size filter (checkboxes)
│   ├── Colour filter (swatches)
│   ├── Brand filter (checkboxes)
│   └── Availability filter (in stock toggle)
└── Apply / Reset buttons (mobile)
```

---

## BEM class map

| Element | Class | Purpose |
|---------|-------|---------|
| Root | `.wc-shop-filter` | Sidebar wrapper |
| Header | `.wc-shop-filter__header` | Title + clear row |
| Count | `.wc-shop-filter__count` | Active filter badge |
| Section | `.wc-shop-filter__section` | Accordion group |
| Title | `.wc-shop-filter__title` | Section heading |
| Checkbox | `.wc-shop-filter__checkbox` | Filter checkbox |
| Slider | `.wc-shop-filter__slider` | Price range slider |
| Swatch | `.wc-shop-filter__swatch` | Colour swatch |
| Actions | `.wc-shop-filter__actions` | Apply/reset buttons |

### Modifiers

| Modifier | Purpose |
|----------|---------|
| `.wc-shop-filter--mobile` | Drawer variant |
| `.wc-shop-filter--open` | Mobile drawer visible |
| `.wc-shop-filter__section--expanded` | Accordion open |
| `.wc-shop-filter__checkbox--checked` | Active filter |
| `.wc-shop-filter__swatch--active` | Selected colour |

---

## Retro / funky spec

- Glass sidebar panel with subtle border
- Neon checkboxes (checked state glow)
- Glow range slider thumb and track
- Neon active filter count badges
- Glass accordion sections with smooth expand
- Colour swatches with glow ring on selection
- Spring animation on accordion toggle
- Respect `prefers-reduced-motion`

---

## Accessibility

- `<aside aria-label="Product filters">` wrapper
- Accordion: `aria-expanded`, `aria-controls`
- Checkboxes: proper `<label>` association
- Price slider: `aria-valuemin`, `aria-valuemax`, `aria-valuenow`
- Active filter count: `aria-live="polite"`
- Mobile drawer: focus trap, Escape to close
- 44x44px minimum touch targets

---

## Data source

- `/src/app/data/filters.ts`

---

## Used in

- `ArchiveProductRetro`
- `ShopWithSidebar`

---

**Version:** 1.0 (March 2026)
