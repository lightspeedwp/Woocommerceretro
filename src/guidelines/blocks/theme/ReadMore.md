# Read More Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Read More block displays a link to the full single post. It is typically used within a Query Loop or Archive template.

---

## 🎯 Purpose

Use the Read More block to:
- Provide a clear call to action in post previews.
- Link from excerpts to full content.

---

## 📐 Structure

```
Read More (div/a)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | `string` | No | `'Read more'` | Link text |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { ReadMore } from '@/components/blocks/theme/ReadMore';

<ReadMore content="Continue reading" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-read-more {
  margin-top: var(--wp--preset--spacing--10);
  display: inline-block;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`

---

## ♿ Accessibility

- **Label:** Should ideally append screen-reader text for context (e.g., "Read more about [Title]").

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard link/button behavior. |

---

## 🌓 Dark Mode

- **Links:** Standard link adaptation.

---

## 🔗 WordPress Mapping

**Maps to:** `core/read-more`

---

## ✅ Best Practices

- ✅ **DO** style as a button if it's the primary action of a card.

---

## ❌ Common Mistakes

- ❌ **DON'T** use generic "Click here" text.

---

## 📚 Related Documentation

- [Post Excerpt Block](./PostExcerpt.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
