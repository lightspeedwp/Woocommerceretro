# TrustBand Pattern

**Version:** 1.0
**Type:** Pattern (Trust Signals)
**WordPress Mapping:** Features Band Block Pattern
**File:** `/src/app/components/patterns/TrustBand.tsx`
**CSS:** `/src/styles/sections/trust-band.css`
**BEM:** `.wc-trust-band__*`

---

## Overview

Displays 3-4 trust badges (free shipping, secure checkout, easy returns, etc.) in a horizontal band. Used below product pages, on checkout, and optionally on the homepage.

---

## Component structure

```
TrustBand (Pattern)
├── Trust badges grid (3-4 items)
│   └── Badge item
│       ├── Icon (Phosphor)
│       ├── Title ("Free shipping")
│       └── Description (optional)
```

---

## BEM class map

| Element | Class | Purpose |
|---------|-------|---------|
| Root | `.wc-trust-band` | Section wrapper |
| Grid | `.wc-trust-band__grid` | Badges container |
| Item | `.wc-trust-band__item` | Individual badge |
| Icon | `.wc-trust-band__icon` | Badge icon |
| Title | `.wc-trust-band__title` | Badge heading |
| Description | `.wc-trust-band__description` | Supporting text |

---

## Retro / funky spec

- Glass badge cards with subtle border
- Subtle glow on trust icons (neon cyan: `var(--color-signal)`)
- Gradient divider above and below band
- Icon gradient circles variant (icon inside gradient-bordered circle)
- Hover: gentle lift + increased glow
- Respect `prefers-reduced-motion`

---

## Responsive behaviour

| Breakpoint | Layout |
|------------|--------|
| Mobile | 2x2 grid or stacked |
| Tablet | 4 columns |
| Desktop | 4 columns, wider spacing |

---

## Accessibility

- `<section aria-label="Trust and shipping information">` wrapper
- Icons are decorative: `aria-hidden="true"`
- Text provides all meaning (no icon-only communication)

---

## Data source

- `/src/app/data/trustFeatures.ts`

---

## Used in

- `PageCheckoutRetro`
- `PageCart`
- `FrontPageRetro` (optional)

---

**Version:** 1.0 (March 2026)
