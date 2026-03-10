# Post Date Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Post Date block displays the publication date (and optionally the last modified date) of the post.

---

## 🎯 Purpose

Use the Post Date block to:
- Show content freshness.
- Provide timeline context.

---

## 📐 Structure

```
Post Date (div/time)
└── Link (a) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | `string` | No | Default Format | Date format string |
| `isLink` | `boolean` | No | `false` | Link to date archive |
| `displayType` | `'date' \| 'modified'` | No | `'date'` | Publish or Modified date |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { PostDate } from '@/components/blocks/theme/PostDate';

<PostDate />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-post-date {
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-muted);
  margin-bottom: var(--wp--preset--spacing--10);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`
- `--wp--preset--font-size--small`
- `--wp--preset--color--text-muted`

---

## ♿ Accessibility

- **Semantics:** Uses `<time>` element with `datetime` attribute for machine readability.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Inline or block text. |

---

## 🌓 Dark Mode

- **Text:** Adapts to dark mode muted text color.

---

## 🔗 WordPress Mapping

**Maps to:** `core/post-date`

---

## ✅ Best Practices

- ✅ **DO** show "Last Updated" if your content is evergreen.

---

## ❌ Common Mistakes

- ❌ **DON'T** omit the date on news or time-sensitive content.

---

## 📚 Related Documentation

- [Post Author Block](./PostAuthor.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
