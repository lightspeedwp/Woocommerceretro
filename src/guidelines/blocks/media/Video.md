# Video Block

**Type:** Block  
**Category:** Media  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Video block allows you to embed a video file directly into your content. Unlike the Embed block (used for YouTube/Vimeo), this block is for self-hosted videos using the HTML5 video player.

---

## 🎯 Purpose

Use the Video block to:
- Host short product demos.
- Display background videos (though Cover block is better for backgrounds).
- Share private video content without third-party tracking.

---

## 📐 Structure

```
Video (figure)
├── Video Player (video)
└── Caption (figcaption)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `src` | `string` | Yes | - | Video file URL |
| `poster` | `string` | No | - | Placeholder image URL |
| `controls` | `boolean` | No | `true` | Show player controls |
| `autoplay` | `boolean` | No | `false` | Autoplay video |
| `loop` | `boolean` | No | `false` | Loop video |
| `muted` | `boolean` | No | `false` | Mute audio (required for autoplay) |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Video } from '@/components/blocks/media/Video';

<Video 
  src="/assets/demo.mp4" 
  poster="/assets/demo-poster.jpg"
  caption="Product Walkthrough"
/>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-video {
  margin-bottom: var(--wp--preset--spacing--50);
}

.wp-block-video video {
  width: 100%;
  height: auto;
  border-radius: var(--wp--preset--border-radius--md);
}

.wp-block-video figcaption {
  font-size: var(--wp--preset--font-size--small);
  text-align: center;
  margin-top: var(--wp--preset--spacing--20);
  color: var(--wp--preset--color--text-secondary);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20`
- `--wp--preset--spacing--50`
- `--wp--preset--border-radius--md`

---

## ♿ Accessibility

- **Captions:** **CRITICAL:** You must provide WebVTT captions (`<track>`) for accessibility compliance.
- **Controls:** Ensure standard controls are available.
- **Autoplay:** Avoid autoplay. If used, it MUST be muted.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Video width scales to container (100%). |

---

## 🌓 Dark Mode

- **Captions:** Text color adapts.
- **Player:** Browser controls usually adapt.

---

## 🔗 WordPress Mapping

**Maps to:** `core/video`

---

## ✅ Best Practices

- ✅ **DO** provide a poster image for before the video loads.
- ✅ **DO** compress videos heavily (WebM/MP4) for performance.

---

## ❌ Common Mistakes

- ❌ **DON'T** host long, high-res videos (100MB+) directly if bandwidth is a concern; use YouTube/Vimeo (Embed block) instead.

---

## 📚 Related Documentation

- [Embed Block](../embed/Embed.md) (If available)
- [Cover Block](./Cover.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
