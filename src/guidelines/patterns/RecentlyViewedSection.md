# RecentlyViewed / RecentlyViewedSection patterns

**Version:** 1.0
**Type:** Pattern (User History)
**Files:**
- `/src/app/components/patterns/RecentlyViewed.tsx` (data wrapper)
- `/src/app/components/patterns/RecentlyViewedSection.tsx` (presentational)
**BEM:** `.wc-recently-viewed__*`

---

## Overview

Two-layer pattern: `RecentlyViewed` connects to `useRecentlyViewed` hook for data, then renders `RecentlyViewedSection` which displays a horizontal product row of previously viewed items.

---

## Component structure

```
RecentlyViewed (data wrapper)
└── RecentlyViewedSection (presentational)
    ├── Section heading ("Recently viewed")
    └── Product row (horizontal scroll)
        └── ProductCard x N
```

---

## Retro / funky spec

- Glow product cards (delegates to ProductCard retro styles)
- Glass section background
- Gradient section heading

---

## Data source

- `useRecentlyViewed` hook (localStorage-backed)

---

**Version:** 1.0 (March 2026)
