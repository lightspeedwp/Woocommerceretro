# Media & Text Block

**Type:** Block  
**Category:** Media  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Media & Text block places a media file (image or video) side-by-side with content. It is a versatile layout block often used for feature highlights or "about" sections.

---

## 🎯 Purpose

Use the Media & Text block to:
- Showcase a feature with a screenshot and description.
- Introduce a team member with a photo and bio.
- Break up text-heavy pages with visual layouts.

---

## 📐 Structure

```
MediaText (div)
├── Media (figure)
│   └── Image/Video
└── Content (div)
    ├── Heading
    ├── Paragraph
    └── Buttons
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `media` | `ReactNode` | Yes | - | Image or Video component |
| `children` | `ReactNode` | Yes | - | Content (text, buttons) |
| `mediaPosition` | `'left' \| 'right'` | No | `'left'` | Media placement |
| `isStackedOnMobile` | `boolean` | No | `true` | Stack vertically on mobile |
| `verticalAlignment` | `'top' \| 'center' \| 'bottom'` | No | `'center'` | Vertical alignment |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { MediaText } from '@/components/blocks/media/MediaText';

<MediaText 
  media={<img src="/feature.jpg" alt="Feature" />}
  mediaPosition="right"
  verticalAlignment="center"
>
  <h3>Seamless Integration</h3>
  <p>Our platform integrates with all your favorite tools.</p>
</MediaText>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-media-text {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center; /* or start/end based on verticalAlignment */
  gap: var(--wp--style--block-gap);
  margin-bottom: var(--wp--preset--spacing--60);
}

.wp-block-media-text.has-media-on-the-right {
  grid-template-columns: 50% 50%; /* Content first, then media */
  direction: rtl; /* Trick for ordering, or just flex-direction/grid-areas */
}

/* Better implementation using Flexbox or Grid areas usually */
.wp-block-media-text.is-stacked-on-mobile {
  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }
}
```

### **CSS Variables Used**

- `--wp--style--block-gap`
- `--wp--preset--spacing--60`

---

## ♿ Accessibility

- **Alt Text:** Ensure the media has alt text.
- **Reading Order:** Ensure the logical reading order makes sense (usually media then text, or text then media depending on context).

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<600px) | If `isStackedOnMobile` is true (default), items stack vertically. |
| Desktop (>600px) | Side-by-side layout. |

---

## 🌓 Dark Mode

Standard content color adaptation.

---

## 🔗 WordPress Mapping

**Maps to:** `core/media-text`

---

## ✅ Best Practices

- ✅ **DO** use for high-level summaries.
- ✅ **DO** enable stacking on mobile for better readability.

---

## ❌ Common Mistakes

- ❌ **DON'T** put too much text in the content side (it may look unbalanced).
- ❌ **DON'T** use for complex multi-column layouts (use Columns block).

---

## 📚 Related Documentation

- [Cover Block](./Cover.md)
- [Columns Block](../design/Columns.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
