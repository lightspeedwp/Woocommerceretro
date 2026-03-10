# Image Block

**Type:** Block  
**Category:** Media  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Image block is the primary way to insert photos, graphics, and other visual assets. It supports captions, linking, different aspect ratios, and styles (like rounded).

---

## 🎯 Purpose

Use the Image block to:
- Illustrate articles.
- Show product details.
- Add visual appeal to layouts.

---

## 📐 Structure

```
Image (figure)
├── Image Tag (img)
└── Caption (figcaption)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `src` | `string` | Yes | - | Image source URL |
| `alt` | `string` | Yes | - | Alt text description |
| `caption` | `string` | No | - | Optional caption |
| `width` | `number \| string` | No | - | Explicit width |
| `height` | `number \| string` | No | - | Explicit height |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Image } from '@/components/blocks/media/Image';

<Image 
  src="/assets/product-shot.jpg" 
  alt="Close up of the fabric texture" 
  caption="100% Cotton Texture"
  className="is-style-rounded"
/>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-image {
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-image img {
  height: auto;
  max-width: 100%;
  vertical-align: bottom;
  border-radius: var(--wp--preset--border-radius--md); /* Default radius */
}

.wp-block-image figcaption {
  font-size: var(--wp--preset--font-size--small);
  text-align: center;
  color: var(--wp--preset--color--text-secondary);
  margin-top: var(--wp--preset--spacing--20);
}

/* Rounded Style */
.is-style-rounded img {
  border-radius: 9999px;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`
- `--wp--preset--border-radius--md`
- `--wp--preset--color--text-secondary`

---

## ♿ Accessibility

- **Alt Text:** **MANDATORY.** Must describe the image content or function. If decorative, leave empty (`""`).
- **Captions:** Use captions for context that is visible to all users.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Images are responsive by default (`max-width: 100%`). |

---

## 🌓 Dark Mode

- **Brightness:** Consider reducing brightness of bright images slightly in dark mode (`filter: brightness(0.9)`), though this is optional.
- **Caption:** Text color adapts.

---

## 🔗 WordPress Mapping

**Maps to:** `core/image`

**theme.json settings:**
```json
{
  "settings": {
    "blocks": {
      "core/image": {
        "lightbox": {
          "allowEditing": true
        }
      }
    }
  }
}
```

---

## ✅ Best Practices

- ✅ **DO** optimize images (WebP/JPG) before uploading.
- ✅ **DO** use aspect-ratio utilities if layout stability is critical (CLS prevention).

---

## ❌ Common Mistakes

- ❌ **DON'T** embed text inside images (use Media & Text block instead).
- ❌ **DON'T** forget alt text.

---

## 📚 Related Documentation

- [Gallery Block](./Gallery.md)
- [Cover Block](./Cover.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Updated to standard guideline format
