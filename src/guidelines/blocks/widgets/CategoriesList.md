# Categories List Block

**Type:** Block  
**Category:** Widgets  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Categories List block displays a list of all post categories. It can be displayed as a list or a dropdown, and can optionally show hierarchy and post counts.

---

## 🎯 Purpose

Use the Categories List block to:
- Help users navigate content topics.
- Show the breadth of content available.

---

## 📐 Structure

```
Categories (ul/select)
└── Category Item (li/option)
    ├── Link (a)
    └── Count (span) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `displayAsDropdown` | `boolean` | No | `false` | Show as select dropdown |
| `showPostCounts` | `boolean` | No | `false` | Show count of posts |
| `showHierarchy` | `boolean` | No | `false` | Show parent/child relationship |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { CategoriesList } from '@/components/blocks/widgets/CategoriesList';

<CategoriesList showPostCounts={true} showHierarchy={true} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-categories {
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-categories-list {
  list-style: none;
  padding-left: 0;
}

.wp-block-categories-list li {
  margin-bottom: var(--wp--preset--spacing--10);
}

/* Hierarchy styling */
.wp-block-categories-list .children {
  margin-left: var(--wp--preset--spacing--20);
  list-style: none;
}

/* Dropdown styling */
.wp-block-categories-dropdown select {
  width: 100%;
  padding: var(--wp--preset--spacing--20);
  border: 1px solid var(--wp--preset--color--border);
  background-color: var(--wp--preset--color--background);
  color: var(--wp--preset--color--foreground);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20`
- `--wp--preset--spacing--40`
- `--wp--preset--color--border`

---

## ♿ Accessibility

- **Dropdown:** Ensure `select` has a label.
- **Hierarchy:** Nested lists should be properly structured for screen readers.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Adapts to container width. |

---

## 🌓 Dark Mode

- **Dropdown:** Backgrounds and text adapt.
- **Links:** Standard link colors.

---

## 🔗 WordPress Mapping

**Maps to:** `core/categories`

---

## ✅ Best Practices

- ✅ **DO** show hierarchy if you have nested categories.
- ✅ **DO** consider a dropdown for very long lists.

---

## ❌ Common Mistakes

- ❌ **DON'T** confuse with `core/post-terms` (which shows categories for a *specific* post).

---

## 📚 Related Documentation

- [Tag Cloud Block](./TagCloud.md)
- [Archives Block](./Archives.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
