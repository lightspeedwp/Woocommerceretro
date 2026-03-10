# Pullquote Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Pullquote block is used to highlight a short excerpt from your content, displaying it graphically to break up long text and draw attention to key points. It is distinct from the Quote block, which is generally used for external citations.

---

## 🎯 Purpose

Use the Pullquote block to:
- emphasize a key sentence or phrase from the surrounding text.
- add visual interest to long articles.
- break up dense paragraphs.

---

## 📐 Structure

```
Pullquote (figure)
└── Blockquote (blockquote)
    ├── Paragraph (p)
    └── Citation (cite)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactNode` | Yes | - | The pullquote text |
| `citation` | `string` | No | - | Optional attribution |
| `align` | `'left' \| 'center' \| 'right' \| 'wide' \| 'full'` | No | `'center'` | Alignment/width |
| `style` | `'default' \| 'solid'` | No | `'default'` | Visual style variant |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Pullquote } from '@/components/blocks/text/Pullquote';

// Standard centered pullquote
<Pullquote citation="Article Excerpt">
  The future of commerce is seamless and instant.
</Pullquote>

// Solid background style
<Pullquote 
  citation="Jane Doe" 
  style="solid"
  align="wide"
>
  We are redefining the shopping experience.
</Pullquote>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-pullquote {
  margin-block: var(--wp--preset--spacing--60);
  border-top: 4px solid var(--wp--preset--color--border);
  border-bottom: 4px solid var(--wp--preset--color--border);
  padding-block: var(--wp--preset--spacing--40);
  text-align: center;
}

.wp-block-pullquote p {
  font-size: var(--wp--preset--font-size--x-large);
  font-weight: var(--wp--preset--font-weight--bold);
  line-height: var(--wp--preset--line-height--tight);
  margin-bottom: var(--wp--preset--spacing--20);
}

.wp-block-pullquote cite {
  font-size: var(--wp--preset--font-size--small);
  text-transform: uppercase;
  letter-spacing: var(--wp--preset--letter-spacing--wide);
}

/* Solid Style Variant */
.wp-block-pullquote.is-style-solid-color {
  background-color: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--primary-text);
  border: none;
  padding: var(--wp--preset--spacing--50);
}
```

### **CSS Variables Used**

- `--wp--preset--color--border`
- `--wp--preset--color--primary`
- `--wp--preset--font-size--x-large`
- `--wp--preset--spacing--60`

---

## ♿ Accessibility

- **Semantic HTML:** Uses `<figure>` containing a `<blockquote>` and `<cite>`.
- **Contrast:** Ensure the text color meets WCAG AA (4.5:1) requirements, especially for the "Solid" style variant.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Full width, smaller font size (`large` instead of `x-large`). |
| Desktop (>1024px) | Supports `wide` and `full` alignments. |

---

## 🌓 Dark Mode

- **Default Style:** Text color adapts to `--wp--preset--color--text-primary`. Borders adapt to `--wp--preset--color--border`.
- **Solid Style:** Background color usually remains the same (primary color), so text must ensure contrast. If primary color is dark, text should be light.

---

## 🔗 WordPress Mapping

**Maps to:** `core/pullquote`

**theme.json settings:**
```json
{
  "settings": {
    "blocks": {
      "core/pullquote": {
        "styles": [
          { "name": "default", "label": "Default" },
          { "name": "solid", "label": "Solid Color" }
        ]
      }
    }
  }
}
```

---

## ✅ Best Practices

- ✅ **DO** keep pullquotes short and impactful.
- ✅ **DO** use the `citation` field if attributing to a person.
- ✅ **DO** ensure high contrast for the "Solid" style.

---

## ❌ Common Mistakes

- ❌ **DON'T** use for standard blockquotes (use the Quote block instead).
- ❌ **DON'T** use excessive formatting (bold, italic) inside the pullquote, as the block itself is already emphasized.

---

## 📚 Related Documentation

- [Quote Block](./Quote.md)
- [Typography Tokens](../../design-tokens/typography.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
