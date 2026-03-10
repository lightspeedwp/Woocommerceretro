# SinglePost Template

**Category**: Templates  
**Route**: `/blog/:slug`  
**WordPress**: `single.php`  
**Version**: 2.0 (BEM Refactor)

---

## 1. Purpose

Displays a single blog post with full content, metadata, navigation, and comments.

---

## 2. Structure

```
Layout (Part)
  └─ Article (wp-single-post)
      └─ Container (wp-single-post__container)
          ├─ Header (wp-single-post__header)
          │   ├─ Categories
          │   ├─ Title (H1)
          │   └─ PostMeta (Pattern)
          ├─ Featured Image (wp-single-post__featured-image)
          ├─ Content (wp-single-post__content)
          ├─ Tags (wp-single-post__tags)
          ├─ Navigation (PostNavigation Pattern)
          └─ Comments (wp-single-post__comments)
```

---

## 3. CSS Architecture

Uses BEM-style classes defined in `/src/styles/globals.css`.

| Element | Class Name | Description |
|---------|------------|-------------|
| **Article** | `.wp-single-post` | Main article wrapper |
| **Header** | `.wp-single-post__header` | Title and meta area |
| **Content** | `.wp-single-post__content` | Prose/Text area |
| **Comments** | `.wp-single-post__comments` | Comment section |

---

## 4. Patterns

- **PostMeta**: Author, date, comment count.
- **PostNavigation**: Previous/Next post links.

---

## 5. Responsive Behavior

- **Content**: Max-width constrained for readability (approx 65ch or 800px).
- **Images**: Full width within container.
