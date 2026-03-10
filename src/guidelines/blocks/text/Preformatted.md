# Preformatted Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Preformatted block displays text exactly as it is typed, preserving all whitespace and line breaks. Unlike the Code block, it can be styled with different font families and doesn't necessarily imply "code".

---

## 🎯 Purpose

Use the Preformatted block to:
- Display text art (ASCII art).
- Show logs or data outputs where column alignment via spaces is important.
- Display structured text that shouldn't be wrapped automatically.

---

## 📐 Structure

```
Preformatted (pre)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `string` | Yes | - | The text content |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Preformatted } from '@/components/blocks/text/Preformatted';

<Preformatted>
  Name      Age     Occupation
  ----------------------------
  Alice     28      Engineer
  Bob       34      Designer
</Preformatted>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-preformatted {
  font-family: var(--wp--preset--font-family--mono); /* Default, but can be changed */
  white-space: pre-wrap; /* or pre */
  overflow-x: auto;
  margin-bottom: var(--wp--preset--spacing--40);
}
```

### **CSS Variables Used**

- `--wp--preset--font-family--mono`
- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Keyboard:** Ensure `tabindex="0"` if content overflows and requires scrolling.
- **Screen Readers:** Will read the text with pauses for line breaks.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Horizontal scroll if content is too wide. |

---

## 🌓 Dark Mode

Standard text and background color adaptation via CSS variables.

---

## 🔗 WordPress Mapping

**Maps to:** `core/preformatted`

---

## ✅ Best Practices

- ✅ **DO** use for tabular data represented in text format if a Table block is overkill.
- ✅ **DO** use for output logs.

---

## ❌ Common Mistakes

- ❌ **DON'T** use for code snippets (use the Code block for semantic correctness).
- ❌ **DON'T** use for poetry (use the Verse block).

---

## 📚 Related Documentation

- [Code Block](./Code.md)
- [Verse Block](./Verse.md)
- [Table Block](./Table.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
