# Post Featured Image Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Post Featured Image block displays the primary image associated with a post. It is a key visual element in both single post templates and archive lists.

---

## 🎯 Purpose

Use the Post Featured Image block to:
- Add visual appeal to posts.
- Represent the content visually in grids.

---

## 📐 Structure

```
Post Featured Image (figure)
├── Image Link (a) - Optional
│   └── Image (img)
└── Caption (figcaption) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isLink` | `boolean` | No | `false` | Link to the post |
| `aspectRatio` | `string` | No | `'auto'` | Aspect ratio (e.g., '16/9') |
| `scale` | `'cover' \| 'contain'` | No | `'cover'` | Object fit style |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { PostFeaturedImage } from '@/components/blocks/theme/PostFeaturedImage';

<PostFeaturedImage isLink={true} aspectRatio="16/9" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-post-featured-image {
  margin-bottom: var(--wp--preset--spacing--20);
}

.wp-block-post-featured-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--wp--preset--border-radius--md);
}

/* Aspect Ratio Support */
.has-aspect-ratio img {
  object-fit: cover;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20`
- `--wp--preset--border-radius--md`

---

## ♿ Accessibility

- **Alt Text:** Automatically pulls from the media library alt text. Ensure editors populate this.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Fluid width (100% of container). |

---

## 🌓 Dark Mode

- **Brightness:** Consider slightly reducing brightness of very bright images in dark mode (optional advanced technique).

---

## 🔗 WordPress Mapping

**Maps to:** `core/post-featured-image`

---

## ✅ Best Practices

- ✅ **DO** use consistent aspect ratios in grids (`16/9` or `4/3`).
- ✅ **DO** enable linking to post in archives.

---

## ❌ Common Mistakes

- ❌ **DON'T** load massive original images; use appropriate sizes (thumbnail/medium/large).

---

## 📚 Related Documentation

- [Post Title Block](./PostTitle.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
