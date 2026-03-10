# Post Title Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Post Title block displays the title of the current post, page, or custom post type. It dynamically retrieves the title from the database.

---

## 🎯 Purpose

Use the Post Title block to:
- Display the main heading of a single post template.
- Display the title of posts within a query loop card.

---

## 📐 Structure

```
Post Title (h1-h6)
└── Link (a) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | No | `2` | Heading level |
| `isLink` | `boolean` | No | `false` | Link to the post |
| `className` | `string` | No | `''` | Additional CSS classes |
| `textAlign` | `'left' \| 'center' \| 'right'` | No | - | Text alignment |

### **Code Example**

```tsx
import { PostTitle } from '@/components/blocks/theme/PostTitle';

<PostTitle level={1} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-post-title {
  margin-bottom: var(--wp--preset--spacing--20);
  word-break: break-word;
}

.wp-block-post-title a {
  text-decoration: none;
  color: inherit;
}

.wp-block-post-title a:hover {
  text-decoration: underline;
  color: var(--wp--preset--color--primary);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20`
- `--wp--preset--color--primary`

---

## ♿ Accessibility

- **Hierarchy:** Ensure the heading level fits the page structure (e.g., H1 for single post, H2 for list items).
- **Links:** If linked, it serves as a primary navigation aid.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Font size typically fluid or responsive via global settings. |

---

## 🌓 Dark Mode

- **Colors:** Text color adapts to theme foreground.

---

## 🔗 WordPress Mapping

**Maps to:** `core/post-title`

---

## ✅ Best Practices

- ✅ **DO** use H1 for the main title on a Single Post template.
- ✅ **DO** use H2 or H3 for titles inside a Query Loop.

---

## ❌ Common Mistakes

- ❌ **DON'T** manually type the title; let it populate dynamically.

---

## 📚 Related Documentation

- [Site Title Block](./site-title.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
