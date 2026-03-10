# SearchOverlay Component

**Category**: Parts  
**Location**: `/src/app/components/parts/SearchOverlay.tsx`  
**WordPress Mapping**: Full-screen search overlay (mobile)  
**Version**: 2.6  
**Status**: Orphan — intentionally skipped from funky redesign (not routed)

---

## Purpose

Full-screen search overlay for mobile devices. Covers the viewport when the search icon is tapped, providing a focused search experience with autocomplete. Currently an orphan component — not connected to any active route or header trigger.

---

## Props

```tsx
interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}
```

---

## Structure

```
SearchOverlay (fixed overlay)
├── Backdrop (click to close)
├── Close button (X icon, top-right)
└── SearchAutocomplete (block/search)
```

---

## Features

- Full-screen overlay covering viewport
- Auto-focus on input when opened
- SearchAutocomplete with full autocomplete functionality
- Close via X button, Escape key, or backdrop click
- Body scroll lock when open
- Dark mode support

---

## Funky Treatments

**None** — This component was intentionally skipped from the funky redesign as it is currently unrouted dead code. If reconnected in future, apply:
- Glass overlay with `backdrop-filter: blur(20px)`
- Neon cyan focus ring on search input
- Glow pill badges for popular searches

---

## Composed Components

| Component | Type | Import |
|-----------|------|--------|
| `SearchAutocomplete` | Block | `../blocks/search/SearchAutocomplete` |

---

## Note

This file is an orphan — it exists in the codebase but is not imported by any active component or route. It was intentionally skipped during the funky redesign. If it is reconnected to the MainHeader in future, it should receive funky treatments and a CSS file at `/src/styles/blocks/search/search-overlay.css`.
