# YouTube Block

**Type:** Block  
**Category:** Embed  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The YouTube block allows you to embed YouTube videos. It is a specific variation of the Embed block optimized for YouTube.

---

## 🎯 Purpose

Use the YouTube block to:
- Embed video content from YouTube.

---

## 📐 Structure

```
YouTube Embed (figure)
├── Video (iframe)
└── Caption (figcaption) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | `string` | Yes | - | YouTube Video URL |
| `caption` | `string` | No | - | Caption text |

### **Code Example**

```tsx
import { YouTube } from '@/components/blocks/embed/YouTube';

<YouTube url="https://youtube.com/watch?v=12345" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-embed-youtube {
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-embed-youtube .wp-block-embed__wrapper {
  aspect-ratio: 16/9;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Captions:** YouTube player provides closed captions if enabled on the video.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Scales fluidly while maintaining 16:9 aspect ratio. |

---

## 🌓 Dark Mode

- **Content:** Player is dark by default usually.

---

## 🔗 WordPress Mapping

**Maps to:** `core/embed` (provider: youtube)

---

## ✅ Best Practices

- ✅ **DO** use high-quality video thumbnails on YouTube (as they show before play).

---

## ❌ Common Mistakes

- ❌ **DON'T** autoplay videos (accessibility/UX violation).

---

## 📚 Related Documentation

- [Embed Block](./Embed.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
