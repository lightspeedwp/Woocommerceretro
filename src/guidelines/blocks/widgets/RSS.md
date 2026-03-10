# RSS Block

**Type:** Block  
**Category:** Widgets  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The RSS block displays entries from any RSS or Atom feed. It is useful for displaying content from external sites or other sections of your network.

---

## 🎯 Purpose

Use the RSS block to:
- Show news from related websites.
- Aggregate content from multiple sources.

---

## 📐 Structure

```
RSS (ul)
└── RSS Item (li)
    ├── Title (a)
    ├── Meta (div) - Date, Author
    └── Excerpt (div)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `feedURL` | `string` | Yes | - | URL of the RSS feed |
| `itemsToShow` | `number` | No | `5` | Number of items |
| `displayAuthor` | `boolean` | No | `false` | Show author |
| `displayDate` | `boolean` | No | `false` | Show date |
| `displayExcerpt` | `boolean` | No | `false` | Show excerpt |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { RSS } from '@/components/blocks/widgets/RSS';

<RSS feedURL="https://wordpress.org/news/feed/" itemsToShow={3} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-rss {
  padding-left: 0;
  margin-bottom: var(--wp--preset--spacing--40);
  list-style: none;
}

.wp-block-rss__item {
  margin-bottom: var(--wp--preset--spacing--20);
}

.wp-block-rss__item-title {
  font-weight: var(--wp--preset--font-weight--bold);
  display: block;
  margin-bottom: var(--wp--preset--spacing--05);
}

.wp-block-rss__item-meta {
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-muted);
  margin-bottom: var(--wp--preset--spacing--10);
}

.wp-block-rss__item-excerpt {
  color: var(--wp--preset--color--text-secondary);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20`
- `--wp--preset--color--text-muted`

---

## ♿ Accessibility

- **Links:** Ensure links open predictably.
- **Lists:** Standard list structure.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard list behavior. |

---

## 🌓 Dark Mode

- **Text:** Adapts to dark mode.
- **Links:** Adapts to dark mode.

---

## 🔗 WordPress Mapping

**Maps to:** `core/rss`

---

## ✅ Best Practices

- ✅ **DO** cache feed results to avoid performance issues (backend concern).
- ✅ **DO** ensure the feed URL is valid.

---

## ❌ Common Mistakes

- ❌ **DON'T** use for internal content (use Latest Posts).

---

## 📚 Related Documentation

- [Latest Posts Block](./LatestPosts.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
