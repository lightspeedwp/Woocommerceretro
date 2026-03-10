# Custom HTML Block

**Type:** Block  
**Category:** Widgets  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Custom HTML block allows you to insert arbitrary HTML code into the layout. It is useful for embedding scripts, third-party widgets, or custom markup that isn't covered by other blocks.

---

## 🎯 Purpose

Use the Custom HTML block to:
- Add external embed codes (e.g., forms, trackers).
- Write custom HTML/CSS for specific small sections.

---

## 📐 Structure

```
Custom HTML (div)
└── Raw HTML Content
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | `string` | Yes | - | Raw HTML string |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { CustomHTML } from '@/components/blocks/widgets/CustomHTML';

<CustomHTML content="<div class='my-widget'>Hello</div>" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-html {
  margin-bottom: var(--wp--preset--spacing--40);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Caution:** You are responsible for the accessibility of the inserted HTML.
- **Validation:** Ensure valid HTML is used.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Depends entirely on the custom HTML content. |

---

## 🌓 Dark Mode

- **Caution:** Custom HTML does not automatically adapt unless it uses theme variables or classes.

---

## 🔗 WordPress Mapping

**Maps to:** `core/html`

---

## ✅ Best Practices

- ✅ **DO** sanitize input if accepting user content.
- ✅ **DO** use dedicated blocks instead if available (e.g., Image, Video).

---

## ❌ Common Mistakes

- ❌ **DON'T** use for standard text content (use Paragraph).
- ❌ **DON'T** include `<html>` or `<body>` tags.

---

## 📚 Related Documentation

- [Shortcode Block](./Shortcode.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
