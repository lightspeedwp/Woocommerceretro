# SoundCloud Block

**Type:** Block  
**Category:** Embed  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The SoundCloud block allows you to embed audio tracks or playlists from SoundCloud.

---

## 🎯 Purpose

Use the SoundCloud block to:
- Share music or podcasts hosted on SoundCloud.

---

## 📐 Structure

```
SoundCloud Embed (figure)
├── Audio Player (iframe)
└── Caption (figcaption) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | `string` | Yes | - | SoundCloud URL |
| `caption` | `string` | No | - | Caption text |

### **Code Example**

```tsx
import { SoundCloud } from '@/components/blocks/embed/SoundCloud';

<SoundCloud url="https://soundcloud.com/user/track" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-embed-soundcloud {
  margin-bottom: var(--wp--preset--spacing--40);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Controls:** Player is keyboard accessible (provided by SoundCloud).

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Player adjusts width. Height varies by visual mode (visual vs classic). |

---

## 🌓 Dark Mode

- **Player:** SoundCloud player often has its own dark/light themes or orange branding.

---

## 🔗 WordPress Mapping

**Maps to:** `core/embed` (provider: soundcloud)

---

## ✅ Best Practices

- ✅ **DO** use for podcast episodes.

---

## ❌ Common Mistakes

- ❌ **DON'T** set to autoplay.

---

## 📚 Related Documentation

- [Spotify Block](./Spotify.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
