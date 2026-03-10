# X (Twitter) Block

**Type:** Block  
**Category:** Embed  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The X (formerly Twitter) block allows you to embed tweets/posts.

---

## 🎯 Purpose

Use the X block to:
- Quote social media posts.
- Show conversation threads.

---

## 📐 Structure

```
X Embed (figure)
├── Tweet (blockquote/iframe)
└── Caption (figcaption) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | `string` | Yes | - | Tweet URL |
| `caption` | `string` | No | - | Caption text |

### **Code Example**

```tsx
import { XEmbed } from '@/components/blocks/embed/XEmbed';

<XEmbed url="https://x.com/user/status/12345" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-embed-twitter {
  margin-bottom: var(--wp--preset--spacing--40);
  /* Twitter widget handles its own styling */
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Content:** Embed usually includes text fallback.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Widget adapts to width. |

---

## 🌓 Dark Mode

- **Theme:** Can potentially request dark theme from provider API if supported.

---

## 🔗 WordPress Mapping

**Maps to:** `core/embed` (provider: twitter)

---

## ✅ Best Practices

- ✅ **DO** verify the tweet is public.

---

## ❌ Common Mistakes

- ❌ **DON'T** rely on it for critical information (users can delete tweets).

---

## 📚 Related Documentation

- [Embed Block](./Embed.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
