# Post Categories Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Post Categories block displays the categories assigned to the current post. It is a variation of the Post Terms block.

---

## 🎯 Purpose

Use the Post Categories block to:
- Show how the content is categorized.
- Allow users to explore similar content (when linked).

---

## 📐 Structure

```
Post Categories (div/ul)
└── Term Link (a)
    └── Separator (span) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `term` | `string` | No | `'category'` | Term name |
| `separator` | `string` | No | `', '` | Separator between items |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { PostTerms } from '@/components/blocks/theme/PostTerms';

<PostTerms term="category" separator=" | " />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-post-terms {
  font-size: var(--wp--preset--font-size--small);
  margin-bottom: var(--wp--preset--spacing--10);
}

.wp-block-post-terms a {
  color: var(--wp--preset--color--primary);
  text-decoration: none;
}

.wp-block-post-terms a:hover {
  text-decoration: underline;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`
- `--wp--preset--font-size--small`
- `--wp--preset--color--primary`

---

## ♿ Accessibility

- **Context:** Should identify what these links are (e.g., "Posted in [Category]").

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard text wrapping. |

---

## 🌓 Dark Mode

- **Links:** Adapts to dark mode primary color.

---

## 🔗 WordPress Mapping

**Maps to:** `core/post-terms` (taxonomy: category)

---

## ✅ Best Practices

- ✅ **DO** place in the byline or footer of the post.

---

## ❌ Common Mistakes

- ❌ **DON'T** confuse with the "Categories List" widget (which shows ALL categories).

---

## 📚 Related Documentation

- [Post Tags Block](./PostTags.md)
- [Categories List Block](../widgets/CategoriesList.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
