# Gallery Block

**Type:** Block  
**Category:** Media  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Gallery block displays multiple images in an organized grid or masonry layout. It supports cropping, linking, and column configuration.

---

## 🎯 Purpose

Use the Gallery block to:
- Display a collection of photos (e.g., event photos, product angles).
- Create visual interest with a grid of images.
- Group related visual assets.

---

## 📐 Structure

```
Gallery (figure/div)
└── Gallery Items (ul/div)
    └── Item (figure)
        ├── Image (img)
        └── Caption (figcaption)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `images` | `Array<{ src: string, alt: string, caption?: string }>` | Yes | - | Array of image objects |
| `columns` | `number` | No | `3` | Number of columns |
| `cropImages` | `boolean` | No | `true` | Crop images to fit grid |
| `linkTo` | `'none' \| 'media' \| 'attachment'` | No | `'none'` | Click behavior |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Gallery } from '@/components/blocks/media/Gallery';

<Gallery 
  columns={3}
  cropImages={true}
  images={[
    { src: '/img1.jpg', alt: 'View 1' },
    { src: '/img2.jpg', alt: 'View 2' },
    { src: '/img3.jpg', alt: 'View 3' },
  ]}
/>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wp--style--block-gap);
  margin-bottom: var(--wp--preset--spacing--50);
}

.wp-block-gallery.columns-3 > * {
  width: calc((100% - 2 * var(--wp--style--block-gap)) / 3);
}

.wp-block-gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* If cropImages is true */
  display: block;
}
```

### **CSS Variables Used**

- `--wp--style--block-gap`
- `--wp--preset--spacing--50`

---

## ♿ Accessibility

- **Alt Text:** Every image in the gallery MUST have meaningful `alt` text.
- **Captions:** Optional, but helpful for context.
- **Keyboard:** If images link to media, they must be focusable.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Often collapses to 1 or 2 columns (`columns-default` usually becomes 1 on mobile). |
| Tablet (640-1024px) | 2 or 3 columns. |

---

## 🌓 Dark Mode

- **Captions:** Text color adapts to `--wp--preset--color--text-primary`.
- **Borders:** If styled with borders, adapts to dark mode.

---

## 🔗 WordPress Mapping

**Maps to:** `core/gallery`

---

## ✅ Best Practices

- ✅ **DO** use consistent aspect ratios if `cropImages` is false.
- ✅ **DO** limit the number of columns on mobile.

---

## ❌ Common Mistakes

- ❌ **DON'T** use massive file sizes for gallery thumbnails (use optimized images).
- ❌ **DON'T** omit alt text.

---

## 📚 Related Documentation

- [Image Block](./Image.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
