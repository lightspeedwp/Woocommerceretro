# Audio Block

**Type:** Block  
**Category:** Media  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Audio block allows you to embed a simple audio player for a music track, podcast, or other sound file. It uses the native browser audio player.

---

## 🎯 Purpose

Use the Audio block to:
- Share podcast episodes.
- Provide audio versions of articles.
- Showcase music tracks.

---

## 📐 Structure

```
Audio (figure)
├── Audio Player (audio)
└── Caption (figcaption)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `src` | `string` | Yes | - | Audio file URL |
| `caption` | `string` | No | - | Optional caption |
| `autoplay` | `boolean` | No | `false` | Autoplay (avoid if possible) |
| `loop` | `boolean` | No | `false` | Loop playback |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Audio } from '@/components/blocks/media/Audio';

<Audio 
  src="/assets/podcast-episode-1.mp3" 
  caption="Episode 1: The Beginning"
/>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-audio {
  margin-bottom: var(--wp--preset--spacing--50);
}

.wp-block-audio audio {
  width: 100%;
  min-height: 40px;
}

.wp-block-audio figcaption {
  font-size: var(--wp--preset--font-size--small);
  text-align: center;
  margin-top: var(--wp--preset--spacing--20);
  color: var(--wp--preset--color--text-secondary);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20`
- `--wp--preset--spacing--50`
- `--wp--preset--color--text-secondary`

---

## ♿ Accessibility

- **Captions/Transcripts:** Always provide a text transcript for audio content (typically in a separate block below).
- **Controls:** Ensure standard controls (Play, Pause, Volume) are accessible via keyboard.
- **Autoplay:** Avoid `autoplay`. It can be disorienting and interferes with screen reader users.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Player width scales to container width (usually 100%). |

---

## 🌓 Dark Mode

- **Browser Player:** Most browsers render the `<audio>` element with system styles, which usually adapt to dark mode.
- **Caption:** Adapts via `--wp--preset--color--text-secondary`.

---

## 🔗 WordPress Mapping

**Maps to:** `core/audio`

---

## ✅ Best Practices

- ✅ **DO** provide a transcript.
- ✅ **DO** compress audio files for web streaming.

---

## ❌ Common Mistakes

- ❌ **DON'T** use autoplay.

---

## 📚 Related Documentation

- [File Block](./File.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
