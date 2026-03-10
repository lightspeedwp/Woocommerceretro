# Term Description Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Term Description block displays the description of the current category, tag, or custom taxonomy term. It is used on Archive templates.

---

## 🎯 Purpose

Use the Term Description block to:
- Provide context for the archive page.
- Display SEO-friendly descriptions for categories.

---

## 📐 Structure

```
Term Description (div/p)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { TermDescription } from '@/components/blocks/theme/TermDescription';

<TermDescription />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-term-description {
  margin-bottom: var(--wp--preset--spacing--30);
  color: var(--wp--preset--color--text-secondary);
  font-size: var(--wp--preset--font-size--medium);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--30`
- `--wp--preset--color--text-secondary`
- `--wp--preset--font-size--medium`

---

## ♿ Accessibility

- **Semantics:** Usually a paragraph or div; ensure it is structurally sound.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard text wrapping. |

---

## 🌓 Dark Mode

- **Text:** Adapts to dark mode secondary text.

---

## 🔗 WordPress Mapping

**Maps to:** `core/term-description`

---

## ✅ Best Practices

- ✅ **DO** place under the Archive Title.

---

## ❌ Common Mistakes

- ❌ **DON'T** use on non-archive pages (it won't display anything).

---

## 📚 Related Documentation

- [Archive Title Block](./ArchiveTitle.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
