# BrandLogoGrid Pattern

**Version:** 2.0
**Type:** Pattern (Reusable Section)
**WordPress Mapping:** Logo Grid Block Pattern
**File:** `/src/app/components/patterns/BrandLogoGrid.tsx`
**CSS:** `/src/styles/sections/brand-logo-grid.css`
**BEM:** `.wc-brand-grid__*`

---

## Overview

Displays a responsive grid of brand logos for partner showcases, trust signals, or brand discovery. Supports grayscale-to-colour hover, optional linking, and dark mode logo variants.

---

## Component structure

```
BrandLogoGrid (Pattern)
├── Section heading (optional)
├── Section description (optional)
└── Grid container
    └── Brand logo item x N
        ├── Image (with fallback)
        ├── Brand name (alt text)
        └── Optional link to brand page
```

---

## BEM class map

| Element | Class | Purpose |
|---------|-------|---------|
| Root | `.wc-brand-grid` | Section wrapper |
| Heading | `.wc-brand-grid__heading` | Section title |
| Description | `.wc-brand-grid__description` | Subtitle text |
| Grid | `.wc-brand-grid__grid` | CSS grid container |
| Item | `.wc-brand-grid__item` | Individual logo cell |
| Image | `.wc-brand-grid__image` | Logo image |
| Link | `.wc-brand-grid__link` | Optional brand page link |

### Modifiers

| Modifier | Purpose |
|----------|---------|
| `.wc-brand-grid--grayscale` | Desaturated logos, colour on hover |
| `.wc-brand-grid--compact` | Reduced padding for footer use |
| `.wc-brand-grid__item--highlighted` | Featured brand emphasis |

---

## Retro / funky spec

- Glass card backgrounds on logo items
- Subtle glow on hover (`box-shadow: 0 0 12px var(--color-glow)`)
- Grayscale-to-colour transition: `filter: grayscale(100%)` to `grayscale(0%)`
- Spring hover lift (`translateY(-2px)`)
- Respect `prefers-reduced-motion`

---

## Responsive behaviour

| Breakpoint | Columns | Logo size |
|------------|---------|-----------|
| Mobile (< 640px) | 2 | Small |
| Tablet (640-1024px) | 3-4 | Medium |
| Desktop (1024-1280px) | 4-6 | Full |
| Wide (> 1280px) | 6-8 | Full |

---

## Accessibility

- `<section aria-label="...">` wrapper
- `role="list"` on grid, `role="listitem"` on items
- Descriptive `alt` text from brand name
- Focus indicators on linked logos (44x44px minimum)
- Keyboard Tab navigation

---

## Data source

- `/src/app/data/brands.ts` (primary)
- `shopBrands.ts` is orphaned (0 consumers) -- do not use

---

## Used in

- `FrontPageRetro` (via sub-patterns)
- `PageAbout` (partner logos)

---

## Related

- [TrustBand](/guidelines/patterns/TrustBand.md) -- trust signal variant
- [ProductGrid](/guidelines/patterns/ProductGrid.md) -- similar grid structure

---

**Version:** 2.0 (March 2026) -- Migrated from `/guidelines/components/`, updated BEM, retro spec added.
