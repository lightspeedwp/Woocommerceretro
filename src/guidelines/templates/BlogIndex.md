# BlogIndex Template

**Category**: Templates  
**Route**: `/blog`  
**WordPress**: `index.php` / `home.php`  
**Version**: 2.6 (Funky Redesign — Phase 6)

---

## 1. Purpose

The main blog landing page displaying a grid of latest posts, category filtering, and pagination.

---

## 2. Structure

```
Layout (Part)
  └─ Container (wp-blog-index)
      ├─ ArchiveHeader (Pattern)
      ├─ CategoryFilter (Block)
      ├─ ResultsCount (Pattern)
      ├─ Post Grid (wp-blog-index__grid)
      │   └─ PostCard (Pattern)
      └─ ArchivePagination (Pattern)
```

---

## 3. CSS Architecture

Uses BEM-style classes defined in `/src/styles/globals.css`.

| Element | Class Name | Description |
|---------|------------|-------------|
| **Container** | `.wp-blog-index` | Main wrapper |
| **Grid** | `.wp-blog-index__grid` | Grid layout for posts |
| **Empty State** | `.wp-blog-index__empty` | No results message |
| **Filter Section** | `.wp-blog-index__filter-section` | Filter container |

---

## 4. Components

- **CategoryFilter**: Handles desktop and mobile category selection.
- **PostCard**: Individual post preview card.
- **ArchivePagination**: Numeric pagination control.

---

## 5. Responsive Behavior

- **Mobile**: Single column grid. Filters use a slide-over drawer (or simple dropdown).
- **Tablet**: 2-column grid.
- **Desktop**: 3-column grid.

---

## 6. Funky Redesign

> **Funky CSS:** `/src/styles/sections/blog-funky.css`  
> **Treatments:** Gradient hero section, glassmorphism featured post card, glow blog post cards, gradient category pills, neon pagination, floating orbs.