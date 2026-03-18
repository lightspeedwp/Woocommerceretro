# PostNavigation Pattern

**Version:** 1.0
**Type:** Pattern (Blog Navigation)
**WordPress Mapping:** Post Navigation Block
**File:** `/src/app/components/patterns/PostNavigation.tsx`
**BEM:** `.wp-post-navigation__*`

---

## Overview

Previous/next post navigation links displayed at the bottom of single post pages. Shows post title and optional thumbnail for each direction.

---

## Component structure

```
PostNavigation (Pattern)
├── Previous post link
│   ├── Arrow indicator
│   ├── Post title
│   └── Thumbnail (optional)
└── Next post link
    ├── Post title
    ├── Arrow indicator
    └── Thumbnail (optional)
```

---

## BEM class map

| Element | Class |
|---------|-------|
| Root | `.wp-post-navigation` |
| Link | `.wp-post-navigation__link` |
| Label | `.wp-post-navigation__label` |
| Title | `.wp-post-navigation__title` |
| Arrow | `.wp-post-navigation__arrow` |

### Modifiers

| Modifier | Purpose |
|----------|---------|
| `__link--prev` | Previous post |
| `__link--next` | Next post |

---

## Retro / funky spec

- Glow cards on hover
- Gradient arrow indicators
- Glass card background

---

## Accessibility

- `<nav aria-label="Post navigation">` wrapper
- Links include post title context
- `aria-label="Previous post: [title]"` / `"Next post: [title]"`

---

**Version:** 1.0 (March 2026)
