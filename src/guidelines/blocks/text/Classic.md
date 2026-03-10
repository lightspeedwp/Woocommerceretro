# Classic Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Classic block (Classic Editor) is a legacy block that contains freeform content, usually created with the TinyMCE editor. In the frontend application, it renders arbitrary HTML content.

---

## 🎯 Purpose

Use the Classic block to:
- Render legacy content migrated from older WordPress versions.
- Handle complex HTML structures that don't map cleanly to blocks (though Custom HTML block is preferred for this).

---

## 📐 Structure

```
Classic (div)
└── Arbitrary HTML content
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | `string` | Yes | - | The raw HTML string |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Classic } from '@/components/blocks/text/Classic';

<Classic content="<p>Legacy content with <strong>formatting</strong>.</p>" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-freeform {
  /* Inherits standard typography */
}

.wp-block-freeform p {
  margin-bottom: var(--wp--preset--spacing--30);
}

/* Ensure images within classic block are responsive */
.wp-block-freeform img {
  max-width: 100%;
  height: auto;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--30`

---

## ♿ Accessibility

- **Validation:** Since content is arbitrary, accessibility depends on the authoring.
- **Headers:** Ensure headings inside the classic block follow the page hierarchy.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Images should have `max-width: 100%`. Tables might need scroll wrappers. |

---

## 🌓 Dark Mode

Standard text color adaptation.

---

## 🔗 WordPress Mapping

**Maps to:** `core/freeform`

---

## ✅ Best Practices

- ✅ **DO** convert Classic blocks to individual blocks whenever possible.
- ✅ **DO** sanitize the content before rendering.

---

## ❌ Common Mistakes

- ❌ **DON'T** use for new content (use specific blocks: Paragraph, Heading, Image, etc.).

---

## 📚 Related Documentation

- [Paragraph Block](./Paragraph.md)
- [Heading Block](./Heading.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
