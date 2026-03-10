# Page List Block

**Type:** Block  
**Category:** Widgets  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Page List block displays a list of all pages on your site. It is useful for creating sitemaps or simple navigation lists, and often populates the Navigation block automatically.

---

## 🎯 Purpose

Use the Page List block to:
- Automatically generate a list of pages.
- Create a sitemap.
- Fallback content for menus.

---

## 📐 Structure

```
Page List (ul)
└── Page Item (li)
    ├── Link (a)
    └── Children (ul) - If nested
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parentPageID` | `number` | No | `0` | Show children of specific page |
| `className` | `string` | No | `''` | Additional CSS classes |
| `isNested` | `boolean` | No | `false` | Used internally for recursion |

### **Code Example**

```tsx
import { PageList } from '@/components/blocks/widgets/PageList';

<PageList />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-page-list {
  padding-left: 0;
  margin-bottom: var(--wp--preset--spacing--40);
  list-style: none;
}

.wp-block-page-list li {
  margin-bottom: var(--wp--preset--spacing--10);
}

/* Nested lists */
.wp-block-page-list .wp-block-pages-list__item__submenu {
  margin-left: var(--wp--preset--spacing--20);
  list-style: none;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20`
- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Hierarchy:** Nested lists properly convey structure.
- **Links:** Standard link accessibility.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard list behavior. |

---

## 🌓 Dark Mode

- **Links:** Adapt to dark mode link colors.

---

## 🔗 WordPress Mapping

**Maps to:** `core/page-list`

---

## ✅ Best Practices

- ✅ **DO** use as a fallback for the Navigation block.
- ✅ **DO** use for automatic sitemaps.

---

## ❌ Common Mistakes

- ❌ **DON'T** use for main navigation if you need custom ordering (use Navigation block).

---

## 📚 Related Documentation

- [Navigation Block](../theme/Navigation.md)
- [Categories List Block](./CategoriesList.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
