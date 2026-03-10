# Quote Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Quote block displays text with visual emphasis, typically used for highlighting a statement or excerpt. It supports an optional citation field for attribution.

---

## 🎯 Purpose

Use the Quote block to:
- Highlight important statements from the content.
- Attribute text to a specific author or source.
- Break up long passages of text with visual interest.

---

## 📐 Structure

```
Quote (blockquote)
├── Paragraph (p)
└── Citation (cite)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactNode` | Yes | - | The quote text content |
| `citation` | `string` | No | - | Optional source attribution |
| `align` | `'left' \| 'center' \| 'right'` | No | `'left'` | Text alignment |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Quote } from '@/components/blocks/text/Quote';

// Basic usage
<Quote>
  Design is intelligence made visible.
</Quote>

// With citation and alignment
<Quote 
  citation="Alina Wheeler" 
  align="center"
  className="my-8"
>
  Design is intelligence made visible.
</Quote>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-quote {
  border-left: 4px solid var(--wp--preset--color--primary);
  padding-left: var(--wp--preset--spacing--40);
  margin-block: var(--wp--preset--spacing--50);
}

.wp-block-quote p {
  font-size: var(--wp--preset--font-size--large);
  font-style: italic;
  margin-bottom: var(--wp--preset--spacing--20);
}

.wp-block-quote cite {
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-secondary);
  font-style: normal;
}

/* Dark Mode - handled via variables */
```

### **CSS Variables Used**

- `--wp--preset--color--primary`
- `--wp--preset--color--text-secondary`
- `--wp--preset--spacing--20`
- `--wp--preset--spacing--40`
- `--wp--preset--spacing--50`
- `--wp--preset--font-size--large`
- `--wp--preset--font-size--small`

---

## ♿ Accessibility

- **Semantic HTML:** Uses `<blockquote>` for the quote body and `<cite>` for the attribution.
- **Screen Readers:** Screen readers generally announce "blockquote" before reading the content.
- **Contrast:** Text colors must meet WCAG AA standards (4.5:1) against the background.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Reduced margin and padding. Font size scales down slightly. |
| Desktop (>1024px) | Standard margin and padding. Large font size. |

---

## 🌓 Dark Mode

The Quote block supports dark mode automatically through CSS variables:
- **Text:** Adapts via `--wp--preset--color--text-primary` (or inherited color).
- **Citation:** Adapts via `--wp--preset--color--text-secondary`.
- **Border:** The border color (`--wp--preset--color--primary`) should maintain visibility and contrast in dark mode.

---

## 🔗 WordPress Mapping

**Maps to:** `core/quote`

**theme.json settings:**
```json
{
  "settings": {
    "blocks": {
      "core/quote": {
        "typography": {
          "fontSizes": [],
          "fontFamilies": []
        },
        "color": {
          "palette": []
        }
      }
    }
  }
}
```

---

## ✅ Best Practices

- ✅ **DO** use for actual quotes or excerpts, not just for indentation.
- ✅ **DO** include a citation when the source is known.
- ✅ **DO** use standard typography tokens for consistent sizing.

---

## ❌ Common Mistakes

- ❌ **DON'T** use for general layout indentation (use Group block with padding instead).
- ❌ **DON'T** put block-level elements inside the `<cite>` tag.
- ❌ **DON'T** manually set inline font sizes (use presets).

---

## 📚 Related Documentation

- [Pullquote Block](./Pullquote.md)
- [Typography Tokens](../../design-tokens/typography.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
