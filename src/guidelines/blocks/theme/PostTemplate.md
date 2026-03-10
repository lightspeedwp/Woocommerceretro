# Post Template Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Post Template block contains the block elements used to render each post within a Query Loop. It acts as the "repeater" layout.

---

## 🎯 Purpose

Use the Post Template block to:
- Define the layout for a single post card/item in a list.
- Organize inner blocks like Post Title, Featured Image, etc.

---

## 📐 Structure

```
Post Template (ul/grid)
└── Post Item (li)
    ├── [Inner Blocks]
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `layout` | `object` | No | - | Layout configuration (grid/flex) |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { PostTemplate } from '@/components/blocks/theme/PostTemplate';

<PostTemplate>
  {/* Inner Blocks */}
</PostTemplate>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-post-template {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

/* Grid Layout */
.wp-block-post-template.is-layout-grid {
  display: grid;
  gap: var(--wp--preset--spacing--30);
  grid-template-columns: repeat(var(--grid-columns, 3), 1fr);
}

.wp-block-post-template li {
  margin-bottom: var(--wp--preset--spacing--20);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20`
- `--wp--preset--spacing--30`

---

## ♿ Accessibility

- **Lists:** Renders as `ul` by default, preserving list semantics.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile | Grids collapse to single column. |

---

## 🌓 Dark Mode

- **Backgrounds:** No specific background, transparent by default.

---

## 🔗 WordPress Mapping

**Maps to:** `core/post-template`

---

## ✅ Best Practices

- ✅ **DO** keep the inner layout simple.

---

## ❌ Common Mistakes

- ❌ **DON'T** place outside of a Query Loop.

---

## 📚 Related Documentation

- [Query Loop Block](./QueryLoop.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
