# Post Navigation Link Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Post Navigation Link block displays links to the next or previous post. It helps users continue their reading journey.

---

## 🎯 Purpose

Use the Post Navigation Link block to:
- Reduce bounce rate by keeping users on the site.
- Create linear reading experiences.

---

## 📐 Structure

```
Post Navigation Link (div)
└── Link (a)
    ├── Prefix/Label (span)
    └── Post Title (span)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type` | `'next' \| 'previous'` | Yes | - | Direction |
| `showTitle` | `boolean` | No | `false` | Show post title in link |
| `label` | `string` | No | - | Custom label |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { PostNavigationLink } from '@/components/blocks/theme/PostNavigationLink';

<PostNavigationLink type="next" showTitle={true} label="Next: " />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-post-navigation-link {
  margin-bottom: var(--wp--preset--spacing--20);
}

.wp-block-post-navigation-link a {
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--primary);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20`
- `--wp--preset--font-weight--bold`
- `--wp--preset--color--primary`

---

## ♿ Accessibility

- **Clarity:** Ensure the link explicitly says "Next Post" or similar, not just an arrow.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard link behavior. |

---

## 🌓 Dark Mode

- **Links:** Link colors adapt.

---

## 🔗 WordPress Mapping

**Maps to:** `core/post-navigation-link`, `core/next-post`, `core/previous-post`

---

## ✅ Best Practices

- ✅ **DO** place at the very end of the post content.

---

## ❌ Common Mistakes

- ❌ **DON'T** use if you are in a loop (Query Loop); this is for Single Post templates.

---

## 📚 Related Documentation

- [Post Title Block](./PostTitle.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
