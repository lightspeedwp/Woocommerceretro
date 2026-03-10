# Vimeo Block

**Type:** Block  
**Category:** Embed  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Vimeo block allows you to embed videos from Vimeo.

---

## 🎯 Purpose

Use the Vimeo block to:
- Embed high-quality video content from Vimeo.

---

## 📐 Structure

```
Vimeo Embed (figure)
├── Player (iframe)
└── Caption (figcaption) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | `string` | Yes | - | Vimeo URL |
| `caption` | `string` | No | - | Caption text |

### **Code Example**

```tsx
import { Vimeo } from '@/components/blocks/embed/Vimeo';

<Vimeo url="https://vimeo.com/12345" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-embed-vimeo {
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-embed-vimeo .wp-block-embed__wrapper {
  aspect-ratio: 16/9;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Controls:** Player is keyboard accessible.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Scales fluidly, maintaining aspect ratio. |

---

## 🌓 Dark Mode

- **Player:** Controls usually adapt or are neutral.

---

## 🔗 WordPress Mapping

**Maps to:** `core/embed` (provider: vimeo)

---

## ✅ Best Practices

- ✅ **DO** use for artistic or professional video content.

---

## ❌ Common Mistakes

- ❌ **DON'T** autoplay.

---

## 📚 Related Documentation

- [YouTube Block](./YouTube.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
