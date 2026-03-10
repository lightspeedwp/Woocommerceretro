# Archives Block

**Type:** Block  
**Category:** Widgets  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Archives block displays a list of links to post archives, organized by date (usually month and year). It helps users explore content history.

---

## 🎯 Purpose

Use the Archives block to:
- Allow users to browse past content.
- Provide a chronological index of the blog.

---

## 📐 Structure

```
Archives (ul/select)
└── Archive Item (li/option)
    └── Link (a)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `displayAsDropdown` | `boolean` | No | `false` | Show as select dropdown |
| `showPostCounts` | `boolean` | No | `false` | Show count of posts |
| `type` | `'monthly' \| 'yearly' \| 'weekly' \| 'daily'` | No | `'monthly'` | Grouping type |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Archives } from '@/components/blocks/widgets/Archives';

<Archives showPostCounts={true} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-archives {
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-archives-list {
  list-style: none;
  padding-left: 0;
}

.wp-block-archives-list li {
  margin-bottom: var(--wp--preset--spacing--10);
}

/* Dropdown style */
.wp-block-archives-dropdown select {
  width: 100%;
  padding: var(--wp--preset--spacing--20);
  border: 1px solid var(--wp--preset--color--border);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`
- `--wp--preset--color--border`

---

## ♿ Accessibility

- **Dropdown:** Ensure the `select` element has an associated `label`.
- **Lists:** Standard list accessibility applies.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard list or dropdown behavior. |

---

## 🌓 Dark Mode

- **Links:** Adapt via standard link styles.
- **Dropdown:** Background and text colors adapt.

---

## 🔗 WordPress Mapping

**Maps to:** `core/archives`

---

## ✅ Best Practices

- ✅ **DO** place in sidebars or footers.
- ✅ **DO** use dropdowns to save space if the archive history is very long.

---

## ❌ Common Mistakes

- ❌ **DON'T** put in the main content area (usually).

---

## 📚 Related Documentation

- [Categories Block](./Categories.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
