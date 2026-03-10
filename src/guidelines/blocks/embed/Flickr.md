# Flickr Block

**Type:** Block  
**Category:** Embed  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Flickr block allows you to embed photos or albums from Flickr.

---

## 🎯 Purpose

Use the Flickr block to:
- Showcase high-quality photography hosted on Flickr.

---

## 📐 Structure

```
Flickr Embed (figure)
├── Image/Player (img/iframe)
└── Caption (figcaption) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | `string` | Yes | - | Flickr URL |
| `caption` | `string` | No | - | Caption text |

### **Code Example**

```tsx
import { Flickr } from '@/components/blocks/embed/Flickr';

<Flickr url="https://flickr.com/photos/user/12345" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-embed-flickr {
  margin-bottom: var(--wp--preset--spacing--40);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Alt Text:** Provided by Flickr embed usually.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Image scales to fit. |

---

## 🌓 Dark Mode

- **Content:** Images are neutral.

---

## 🔗 WordPress Mapping

**Maps to:** `core/embed` (provider: flickr)

---

## ✅ Best Practices

- ✅ **DO** use for professional photo portfolios.

---

## ❌ Common Mistakes

- ❌ **DON'T** use for simple images (use Image block).

---

## 📚 Related Documentation

- [Embed Block](./Embed.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
