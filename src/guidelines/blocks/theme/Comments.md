# Comments Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Comments block displays the entire comments section for a post, including the comment list, pagination, and the comment form.

---

## 🎯 Purpose

Use the Comments block to:
- Enable user interaction and discussion.
- Show social proof.

---

## 📐 Structure

```
Comments (div)
├── Title (h3)
├── Comment List (ul/ol)
├── Pagination (div)
└── Comment Respond (div - Form)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `showAvatar` | `boolean` | No | `true` | Show avatars |
| `showDate` | `boolean` | No | `true` | Show dates |
| `showReply` | `boolean` | No | `true` | Enable replies |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Comments } from '@/components/blocks/theme/Comments';

<Comments showAvatar={true} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-comments {
  margin-top: var(--wp--preset--spacing--50);
  padding-top: var(--wp--preset--spacing--40);
  border-top: 1px solid var(--wp--preset--color--border);
}

.wp-block-comments h3 {
  margin-bottom: var(--wp--preset--spacing--30);
}

.comment-list {
  list-style: none;
  padding-left: 0;
}

.comment-body {
  margin-bottom: var(--wp--preset--spacing--30);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--30`
- `--wp--preset--spacing--40`
- `--wp--preset--spacing--50`
- `--wp--preset--color--border`

---

## ♿ Accessibility

- **Form:** Ensure all form fields have labels.
- **Hierarchy:** Comment nesting should be semantically structured.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Form and list adapt to container width. |

---

## 🌓 Dark Mode

- **Form:** Inputs and backgrounds adapt.
- **Borders:** Separators adapt.

---

## 🔗 WordPress Mapping

**Maps to:** `core/comments`

---

## ✅ Best Practices

- ✅ **DO** include at the bottom of single posts/pages.

---

## ❌ Common Mistakes

- ❌ **DON'T** enable on pages where discussion isn't relevant (e.g., Contact, Checkout).

---

## 📚 Related Documentation

- [Latest Comments Block](../widgets/LatestComments.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
