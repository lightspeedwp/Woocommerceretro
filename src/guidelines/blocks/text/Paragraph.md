# Paragraph Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Paragraph block is the default container for text content. It supports rich text formatting like bold, italic, and links inline.

---

## 🎯 Purpose

Use the Paragraph block to:
- Write the main body content.
- Display descriptions.
- Add text that doesn't require semantic structure like lists or tables.

---

## 📐 Structure

```
Paragraph (p)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactNode` | Yes | - | The text content |
| `align` | `'left' \| 'center' \| 'right'` | No | `'left'` | Text alignment |
| `dropCap` | `boolean` | No | `false` | Enable drop cap |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Paragraph } from '@/components/blocks/text/Paragraph';

<Paragraph>
  This is a standard paragraph block.
</Paragraph>

<Paragraph align="center" dropCap>
  Once upon a time...
</Paragraph>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
p {
  font-size: var(--wp--preset--font-size--normal);
  line-height: var(--wp--preset--line-height--relaxed);
  margin-bottom: var(--wp--preset--spacing--40);
  color: var(--wp--preset--color--text-secondary);
}

.has-drop-cap:first-letter {
  font-size: 5em;
  float: left;
  margin-right: 0.1em;
  line-height: 0.8;
}
```

### **CSS Variables Used**

- `--wp--preset--font-size--normal`
- `--wp--preset--line-height--relaxed`
- `--wp--preset--color--text-secondary`
- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Contrast:** Ensure text contrast meets WCAG AA.
- **Length:** Keep paragraphs reasonable in length for readability.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Fluid typography ensures readability. Line length limited to `65ch` max-width typically. |

---

## 🌓 Dark Mode

- **Color:** Adapts via `--wp--preset--color--text-secondary` (gray-300 in dark mode usually).

---

## 🔗 WordPress Mapping

**Maps to:** `core/paragraph`

---

## ✅ Best Practices

- ✅ **DO** use for body text.
- ✅ **DO** align left for best readability (usually).

---

## ❌ Common Mistakes

- ❌ **DON'T** use for headings (use Heading block).
- ❌ **DON'T** use `<br>` tags excessively for spacing (use Spacer block or margins).

---

## 📚 Related Documentation

- [Heading Block](./Heading.md)
- [List Block](./List.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Updated to standard guideline format
