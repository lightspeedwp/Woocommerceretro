# Embed Block

**Type:** Block  
**Category:** Embed  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Embed block allows you to embed content from external services (like YouTube, Twitter/X, Spotify, etc.) by simply pasting the URL.

---

## 🎯 Purpose

Use the Embed block to:
- Integrate rich media from third-party sources.
- Display social media posts, videos, or audio tracks.

---

## 📐 Structure

```
Embed (figure)
├── Media (div/iframe)
└── Caption (figcaption) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | `string` | Yes | - | URL to embed |
| `caption` | `string` | No | - | Caption text |
| `className` | `string` | No | `''` | Additional CSS classes |
| `align` | `'left' \| 'center' \| 'right' \| 'wide' \| 'full'` | No | `'center'` | Alignment |

### **Code Example**

```tsx
import { Embed } from '@/components/blocks/embed/Embed';

<Embed url="https://example.com/content" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-embed {
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-embed__wrapper {
  position: relative;
}

/* Responsive Aspect Ratio */
.wp-block-embed.is-type-video .wp-block-embed__wrapper {
  aspect-ratio: 16/9;
}

.wp-block-embed iframe {
  width: 100%;
  height: 100%;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Title:** Ensure iframes have title attributes (handled by oEmbed/WordPress usually).
- **Captions:** Provide captions for context.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Embeds typically scale to container width. Videos maintain aspect ratio. |

---

## 🌓 Dark Mode

- **Content:** External content (iframe) style is controlled by the provider, not the site theme.

---

## 🔗 WordPress Mapping

**Maps to:** `core/embed`

---

## ✅ Best Practices

- ✅ **DO** use specific embed blocks (like YouTube) if available for better control, otherwise use this generic one.
- ✅ **DO** center embeds for better layout balance.

---

## ❌ Common Mistakes

- ❌ **DON'T** embed heavy content above the fold (performance).

---

## 📚 Related Documentation

- [YouTube Block](./YouTube.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
