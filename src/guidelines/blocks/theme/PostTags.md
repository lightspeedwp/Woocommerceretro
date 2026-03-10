# Post Tags Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Post Tags block displays the tags assigned to the current post. It is a variation of the Post Terms block.

---

## 🎯 Purpose

Use the Post Tags block to:
- Show specific keywords for the content.
- Enhance cross-navigation via shared topics.

---

## 📐 Structure

```
Post Tags (div/ul)
└── Term Link (a)
    └── Separator (span) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `term` | `string` | No | `'post_tag'` | Term name |
| `separator` | `string` | No | `', '` | Separator between items |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { PostTerms } from '@/components/blocks/theme/PostTerms';

<PostTerms term="post_tag" prefix="Tags: " />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-post-terms {
  font-size: var(--wp--preset--font-size--small);
  margin-bottom: var(--wp--preset--spacing--10);
  color: var(--wp--preset--color--text-secondary);
}

.wp-block-post-terms a {
  background-color: var(--wp--preset--color--surface);
  padding: 2px 6px;
  border-radius: 4px;
  color: inherit;
  margin-right: 4px;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`
- `--wp--preset--font-size--small`
- `--wp--preset--color--text-secondary`
- `--wp--preset--color--surface`

---

## ♿ Accessibility

- **Context:** Prefix with "Tags:" for clarity.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard text wrapping. |

---

## 🌓 Dark Mode

- **Backgrounds:** Tag pill backgrounds adapt.

---

## 🔗 WordPress Mapping

**Maps to:** `core/post-terms` (taxonomy: post_tag)

---

## ✅ Best Practices

- ✅ **DO** use at the bottom of posts.

---

## ❌ Common Mistakes

- ❌ **DON'T** display if no tags are assigned.

---

## 📚 Related Documentation

- [Post Categories Block](./PostCategories.md)
- [Tag Cloud Block](../widgets/TagCloud.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
