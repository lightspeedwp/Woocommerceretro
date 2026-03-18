# BlogSidebar Pattern

**Version:** 1.0
**Type:** Pattern (Blog Widget Area)
**WordPress Mapping:** Sidebar Template Part
**File:** `/src/app/components/patterns/BlogSidebar.tsx`
**BEM:** `.wp-blog-sidebar__*`

---

## Overview

Sidebar widget area for blog pages. Contains category list, recent posts, tag cloud, and optional search. Used in `SinglePostWithSidebar` template.

---

## Component structure

```
BlogSidebar (Pattern)
├── Search widget (optional)
├── Categories widget
│   └── Category link x N
├── Recent posts widget
│   └── Post card x N (compact)
├── Tags widget
│   └── Tag badge x N
└── Newsletter widget (optional)
```

---

## BEM class map

| Element | Class |
|---------|-------|
| Root | `.wp-blog-sidebar` |
| Widget | `.wp-blog-sidebar__widget` |
| Widget title | `.wp-blog-sidebar__widget-title` |
| Category link | `.wp-blog-sidebar__category` |
| Post card | `.wp-blog-sidebar__post` |
| Tag badge | `.wp-blog-sidebar__tag` |

---

## Retro / funky spec

- Glass sidebar panel
- Neon active category highlight
- Glow recent post cards on hover
- Gradient dividers between widget sections

---

## Data source

- `/src/app/data/categories.ts`, `/src/app/data/tags.ts`, `/src/app/data/posts.ts`

---

**Version:** 1.0 (March 2026)
