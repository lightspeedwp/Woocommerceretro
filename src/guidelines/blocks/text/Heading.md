# Heading Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Heading block introduces new sections and organizes content hierarchy. It supports levels H1 through H6 and is essential for document structure and accessibility.

---

## 🎯 Purpose

Use the Heading block to:
- Structure the page content.
- Help search engines understand the page topic.
- Allow screen readers to navigate via headings.

---

## 📐 Structure

```
Heading (h1-h6)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Yes | `2` | The heading rank |
| `children` | `ReactNode` | Yes | - | The heading text |
| `align` | `'left' \| 'center' \| 'right'` | No | `'left'` | Text alignment |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Heading } from '@/components/blocks/text/Heading';

// Section Title
<Heading level={2}>Introduction</Heading>

// Centered H3
<Heading level={3} align="center">Features</Heading>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
h1, .wp-block-heading h1 {
  font-size: var(--wp--preset--font-size--gigantic);
  line-height: var(--wp--preset--line-height--tight);
}

h2, .wp-block-heading h2 {
  font-size: var(--wp--preset--font-size--huge);
  line-height: var(--wp--preset--line-height--snug);
}

.has-text-align-center {
  text-align: center;
}
```

### **CSS Variables Used**

- `--wp--preset--font-size--*` (gigantic, huge, etc.)
- `--wp--preset--font-weight--bold`
- `--wp--preset--line-height--*`
- `--wp--preset--color--text-primary`

---

## ♿ Accessibility

- **Hierarchy:** Do not skip heading levels (e.g., don't jump from H2 to H4).
- **Structure:** Use H1 for the main page title (only one per page).
- **Navigation:** Screen reader users often navigate by headings.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Uses Fluid Typography (`clamp()`) to scale smoothly between viewports. |

---

## 🌓 Dark Mode

- **Color:** Adapts via `--wp--preset--color--text-primary`.

---

## 🔗 WordPress Mapping

**Maps to:** `core/heading`

**theme.json settings:**
```json
{
  "settings": {
    "blocks": {
      "core/heading": {
        "typography": {
          "fontSizes": true
        }
      }
    }
  }
}
```

---

## ✅ Best Practices

- ✅ **DO** use H2 for major sections.
- ✅ **DO** keep headings concise.

---

## ❌ Common Mistakes

- ❌ **DON'T** use headings just to make text bold/large (use styles instead).
- ❌ **DON'T** use H1 multiple times (usually).

---

## 📚 Related Documentation

- [Typography Tokens](../../design-tokens/typography.md)
- [Paragraph Block](./Paragraph.md)

---

## WordPress Block Markup

```html
<!-- wp:heading {"level":2} -->
<h2>Heading Title</h2>
<!-- /wp:heading -->
```

### Base CSS (from theme.json)

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--wp--preset--font-family--heading);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
  margin-bottom: var(--wp--preset--spacing--30);
}
```

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Updated to standard guideline format