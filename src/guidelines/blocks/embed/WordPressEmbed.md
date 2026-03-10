# WordPress Embed Block

**Type:** Block  
**Category:** Embed  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The WordPress Embed block allows you to embed posts or pages from other WordPress sites. It typically displays a "card" summary of the linked content.

---

## 🎯 Purpose

Use the WordPress Embed block to:
- Reference content from other WordPress blogs.
- Show previews of external WordPress pages.

---

## 📐 Structure

```
WordPress Embed (figure)
├── WP Embed Card (blockquote/iframe)
└── Caption (figcaption) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | `string` | Yes | - | WordPress Post/Page URL |
| `caption` | `string` | No | - | Caption text |

### **Code Example**

```tsx
import { WordPressEmbed } from '@/components/blocks/embed/WordPressEmbed';

<WordPressEmbed url="https://wordpress.org/news/2026/01/update/" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-embed-wordpress {
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-embedded-content {
  /* Default WP embed iframe styles */
  max-width: 100%;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Title:** Iframe has title attribute.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Scales to container width. |

---

## 🌓 Dark Mode

- **Card:** The embedded card's style depends on the *source* site, but usually has a neutral design.

---

## 🔗 WordPress Mapping

**Maps to:** `core/embed` (provider: wordpress)

---

## ✅ Best Practices

- ✅ **DO** use for cross-linking in a network.

---

## ❌ Common Mistakes

- ❌ **DON'T** embed your own site's posts this way (use Query Loop or Latest Posts).

---

## 📚 Related Documentation

- [Embed Block](./Embed.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
