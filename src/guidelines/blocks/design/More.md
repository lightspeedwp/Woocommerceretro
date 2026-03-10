# More Block

**Type:** Block  
**Category:** Design  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The More block allows you to mark the cut-off point for excerpts on archive pages. Content before this block is shown in the excerpt, and a "Read More" link is generated.

---

## 🎯 Purpose

Use the More block to:
- Control exactly how much content appears on blog index pages.
- Create a teaser for your post.

---

## 📐 Structure

```
More (comment/span)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `customText` | `string` | No | - | Custom "Read More" link text |
| `noTeaser` | `boolean` | No | `false` | Hide content before more tag in single view |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { More } from '@/components/blocks/design/More';

<More customText="Continue Reading..." />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-more {
  text-align: center;
  margin-block: var(--wp--preset--spacing--40);
  border-top: 1px dashed var(--wp--preset--color--border);
  position: relative;
}

/* In visual editor it looks like a dashed line. On frontend it's often invisible or a link. */
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`
- `--wp--preset--color--border`

---

## ♿ Accessibility

- **Link Text:** The "Read More" link should ideally include the post title visually hidden (e.g., "Read More about Post Title") for screen reader context.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard link behavior. |

---

## 🌓 Dark Mode

- **Link:** Adapts via `--wp--preset--color--primary` or link color.

---

## 🔗 WordPress Mapping

**Maps to:** `core/more`

---

## ✅ Best Practices

- ✅ **DO** place after the introductory paragraph.
- ✅ **DO** customize the text if "Read More" is too generic.

---

## ❌ Common Mistakes

- ❌ **DON'T** use multiple More blocks.

---

## 📚 Related Documentation

- [Excerpt Block](../theme/Excerpt.md) (If available)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
