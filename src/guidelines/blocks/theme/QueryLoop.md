# Query Loop Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Query Loop block is an advanced block that allows you to display a list of posts based on specific criteria (query). It is the foundation for creating archives, recent posts sections, and custom post grids.

---

## 🎯 Purpose

Use the Query Loop block to:
- Display dynamic lists of posts or pages.
- Create custom archive layouts.
- Filter content by category, tag, author, or keyword.

---

## 📐 Structure

```
Query Loop (div)
└── Post Template (ul/div)
    └── Post Item (li/div)
        ├── Post Title
        ├── Post Excerpt
        └── ...
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `query` | `object` | No | `{}` | Query parameters (postType, order, etc.) |
| `displayLayout` | `object` | No | `{ type: 'list' }` | Layout settings (list/flex/grid) |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { QueryLoop } from '@/components/blocks/theme/QueryLoop';
import { PostTemplate } from '@/components/blocks/theme/PostTemplate';

<QueryLoop>
  <PostTemplate />
</QueryLoop>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-query {
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-query ul {
  padding-left: 0;
  list-style: none;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Structure:** Uses semantic list elements (usually `ul` > `li`) for the list of posts.
- **Navigation:** If pagination is used, ensure it is accessible.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile | Grid layouts typically collapse to single column. |

---

## 🌓 Dark Mode

- **Content:** Inner blocks (Title, Excerpt) handle their own dark mode adaptation.

---

## 🔗 WordPress Mapping

**Maps to:** `core/query`

---

## ✅ Best Practices

- ✅ **DO** use patterns to quickly setup common layouts (Grid, List).
- ✅ **DO** use `inherit: true` for Archive templates to automatically use the global query.

---

## ❌ Common Mistakes

- ❌ **DON'T** nest Query Loops too deeply (performance).

---

## 📚 Related Documentation

- [Post Template Block](./PostTemplate.md)
- [Pagination Block](./Pagination.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
