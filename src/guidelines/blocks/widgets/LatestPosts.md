# Latest Posts Block

**Type:** Block  
**Category:** Widgets  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Latest Posts block displays a list of your most recent posts. It supports various display options including grid view, excerpts, post dates, and author names.

---

## 🎯 Purpose

Use the Latest Posts block to:
- Showcase fresh content.
- Drive traffic to new articles from other pages.

---

## 📐 Structure

```
Latest Posts (ul)
└── Post Item (li)
    ├── Featured Image (figure) - Optional
    ├── Title (a)
    ├── Post Meta (div) - Date, Author
    └── Excerpt (div) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `postsToShow` | `number` | No | `5` | Number of posts |
| `displayPostContent` | `boolean` | No | `false` | Show excerpt/content |
| `displayPostDate` | `boolean` | No | `false` | Show date |
| `displayAuthor` | `boolean` | No | `false` | Show author |
| `displayFeaturedImage` | `boolean` | No | `false` | Show image |
| `layout` | `'list' \| 'grid'` | No | `'list'` | Display layout |
| `columns` | `number` | No | `3` | Columns (grid only) |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { LatestPosts } from '@/components/blocks/widgets/LatestPosts';

<LatestPosts 
  postsToShow={3} 
  layout="grid" 
  displayFeaturedImage={true} 
/>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-latest-posts {
  padding-left: 0;
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-latest-posts__list {
  list-style: none;
}

/* Grid Layout */
.wp-block-latest-posts.is-grid {
  display: grid;
  gap: var(--wp--preset--spacing--30);
  grid-template-columns: repeat(var(--grid-columns, 3), 1fr);
}

.wp-block-latest-posts__post-title {
  font-weight: var(--wp--preset--font-weight--bold);
  font-size: var(--wp--preset--font-size--medium);
  margin-bottom: var(--wp--preset--spacing--10);
  display: block;
}

.wp-block-latest-posts__post-excerpt {
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-secondary);
}

.wp-block-latest-posts__post-date {
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-muted);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--30`
- `--wp--preset--spacing--40`
- `--wp--preset--font-size--medium`
- `--wp--preset--color--text-secondary`

---

## ♿ Accessibility

- **Lists:** Uses `ul` and `li`.
- **Images:** Featured images must have alt text.
- **Headings:** Post titles usually act as links, not headings, inside this block to avoid hierarchy issues, but sometimes wrapped in `h3` tags if configured.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile | Grid collapses to 1 column. |
| Tablet | Grid adapts to 2 columns usually. |

---

## 🌓 Dark Mode

- **Text:** All text colors adapt.
- **Backgrounds:** Card backgrounds (if used) adapt.

---

## 🔗 WordPress Mapping

**Maps to:** `core/latest-posts`

---

## ✅ Best Practices

- ✅ **DO** use grid layout for visual impact on homepages.
- ✅ **DO** include excerpts for better engagement.

---

## ❌ Common Mistakes

- ❌ **DON'T** load too many posts (performance).
- ❌ **DON'T** use large featured images in a sidebar list.

---

## 📚 Related Documentation

- [Latest Comments Block](./LatestComments.md)
- [Query Loop Block](../theme/QueryLoop.md) (For more advanced customization)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
