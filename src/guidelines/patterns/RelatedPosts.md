# RelatedPosts Pattern

**Version:** 1.0
**Type:** Pattern (Blog Cross-reference)
**WordPress Mapping:** Related Posts Block
**File:** `/src/app/components/patterns/RelatedPosts.tsx`
**BEM:** `.wp-related-posts__*`

---

## Overview

Displays 3-4 related blog posts at the bottom of single post pages, based on shared categories or tags.

---

## Component structure

```
RelatedPosts (Pattern)
├── Section heading ("Related posts")
└── Post grid (3 columns)
    └── PostCard x 3-4
```

---

## BEM class map

| Element | Class |
|---------|-------|
| Root | `.wp-related-posts` |
| Heading | `.wp-related-posts__heading` |
| Grid | `.wp-related-posts__grid` |

---

## Retro / funky spec

- Glow post cards (delegates to PostCard retro styles)
- Gradient section heading

---

## Accessibility

- `<section aria-label="Related posts">` wrapper

---

**Version:** 1.0 (March 2026)
