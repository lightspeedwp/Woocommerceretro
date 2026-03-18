# QuickEntryTilesGrid Pattern

**Version:** 1.0
**Type:** Pattern (Feature Tiles)
**WordPress Mapping:** Features Band Block Pattern
**File:** `/src/app/components/patterns/QuickEntryTilesGrid.tsx`
**BEM:** `.wp-entry-tiles__*`

---

## Overview

Responsive grid of feature/entry tiles with icon, title, and optional description. Used for features bands, quick navigation, or value propositions.

---

## Component structure

```
QuickEntryTilesGrid (Pattern)
├── Grid container (responsive: 2/3/4 columns)
│   └── Tile item x N
│       ├── Icon (gradient circle)
│       ├── Title
│       └── Description (optional)
```

---

## BEM class map

| Element | Class |
|---------|-------|
| Root | `.wp-entry-tiles` |
| Grid | `.wp-entry-tiles__grid` |
| Item | `.wp-entry-tiles__item` |
| Icon | `.wp-entry-tiles__icon` |
| Title | `.wp-entry-tiles__title` |
| Description | `.wp-entry-tiles__description` |

---

## Retro / funky spec

- Glow card borders on hover
- Icon gradient circles (icon inside gradient-bordered circle)
- Spring hover lift (`translateY(-4px)`)
- Glass card inner panels
- Respect `prefers-reduced-motion`

---

## Responsive behaviour

| Breakpoint | Columns |
|------------|---------|
| Mobile | 2 |
| Tablet | 3 |
| Desktop | 4 |

---

**Version:** 1.0 (March 2026)
