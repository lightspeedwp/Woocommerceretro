# Spotify Block

**Type:** Block  
**Category:** Embed  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Spotify block allows you to embed tracks, albums, or playlists from Spotify.

---

## 🎯 Purpose

Use the Spotify block to:
- Share music or podcasts from Spotify.

---

## 📐 Structure

```
Spotify Embed (figure)
├── Player (iframe)
└── Caption (figcaption) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | `string` | Yes | - | Spotify URL |
| `caption` | `string` | No | - | Caption text |

### **Code Example**

```tsx
import { Spotify } from '@/components/blocks/embed/Spotify';

<Spotify url="https://open.spotify.com/track/12345" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-embed-spotify {
  margin-bottom: var(--wp--preset--spacing--40);
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
| All | Player adapts to width. |

---

## 🌓 Dark Mode

- **Player:** Spotify player is natively dark.

---

## 🔗 WordPress Mapping

**Maps to:** `core/embed` (provider: spotify)

---

## ✅ Best Practices

- ✅ **DO** embed playlists for longer listening sessions.

---

## ❌ Common Mistakes

- ❌ **DON'T** rely on it for content critical to non-Spotify users (previews are limited).

---

## 📚 Related Documentation

- [SoundCloud Block](./SoundCloud.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
