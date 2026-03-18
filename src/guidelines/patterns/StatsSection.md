# StatsSection Pattern

**Version:** 1.0
**Type:** Pattern (Social Proof)
**WordPress Mapping:** Stats Counter Block Pattern
**File:** `/src/app/components/patterns/StatsSection.tsx`
**CSS:** included in about section CSS
**BEM:** `.wp-stats-section__*`

---

## Overview

Displays 3-4 large statistics (e.g. "10,000+ Products", "50+ Countries") with optional count-up animation. Used on about and sustainability pages for social proof.

---

## Component structure

```
StatsSection (Pattern)
├── Section heading
├── Stats grid (3-4 items)
│   └── Stat item
│       ├── Number (large, prominent)
│       ├── Label
│       └── Optional icon
```

---

## BEM class map

| Element | Class | Purpose |
|---------|-------|---------|
| Root | `.wp-stats-section` | Section wrapper |
| Heading | `.wp-stats-section__heading` | Section title |
| Grid | `.wp-stats-section__grid` | Stats container |
| Item | `.wp-stats-section__item` | Individual stat |
| Number | `.wp-stats-section__number` | Large stat value |
| Label | `.wp-stats-section__label` | Stat description |
| Icon | `.wp-stats-section__icon` | Optional icon |

---

## Retro / funky spec

- Gradient text on stat numbers (pink to cyan for large numbers)
- Glass stat cards with subtle border
- Spring animation on number reveal (count-up with bounce, triggered by intersection observer)
- Subtle glow on hover
- Pixel-font variant for numbers (optional)
- Respect `prefers-reduced-motion`: show final number immediately, no count-up

---

## Responsive behaviour

| Breakpoint | Columns |
|------------|---------|
| Mobile | 2 (2x2 grid) |
| Tablet | 3-4 |
| Desktop | 3-4 |

---

## Accessibility

- `<section aria-label="Company statistics">` wrapper
- Stat numbers include unit context in `aria-label` (e.g. "Over 10,000 products")
- Count-up animation does not affect screen reader output (final value in DOM)

---

## Data source

- `/src/app/data/company.ts` (social proof stats)

---

## Used in

- `PageAbout`
- `PageSustainability`

---

**Version:** 1.0 (March 2026)
