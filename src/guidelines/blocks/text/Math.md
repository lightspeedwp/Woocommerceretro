# Math Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Math block renders mathematical equations and formulas using LaTeX or MathML notation. It ensures that mathematical expressions are displayed correctly and accessibly.

---

## 🎯 Purpose

Use the Math block to:
- Display complex scientific or mathematical formulas.
- Show algebraic equations.
- Render calculus notation.

---

## 📐 Structure

```
Math (div)
└── MathML or Rendered SVG/HTML
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | `string` | Yes | - | The LaTeX/MathML expression |
| `displayMode` | `boolean` | No | `true` | Inline (`false`) or Block (`true`) |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { MathBlock } from '@/components/blocks/text/Math';

// Block display (centered)
<MathBlock expression="E = mc^2" />

// Inline display
<p>
  The formula <MathBlock expression="\pi r^2" displayMode={false} /> calculates area.
</p>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-math {
  font-family: "Latin Modern Math", serif;
  font-size: var(--wp--preset--font-size--large);
  text-align: center;
  margin-block: var(--wp--preset--spacing--40);
  overflow-x: auto;
}
```

### **CSS Variables Used**

- `--wp--preset--font-size--large`
- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **MathML:** Modern browsers support MathML for accessibility.
- **ARIA:** `aria-label` or `aria-details` should contain the spoken version of the equation (e.g., "E equals m c squared").
- **Contrast:** Ensure symbols are high contrast.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Horizontal scroll if the equation is wide. |

---

## 🌓 Dark Mode

- **Color:** Text color adapts to `--wp--preset--color--text-primary`.

---

## 🔗 WordPress Mapping

**Maps to:** `core/math` (or equivalent plugin block)

---

## ✅ Best Practices

- ✅ **DO** use proper LaTeX syntax.
- ✅ **DO** provide a text description if the math is complex.

---

## ❌ Common Mistakes

- ❌ **DON'T** use images of equations (not accessible, doesn't scale).

---

## 📚 Related Documentation

- [Typography Tokens](../../design-tokens/typography.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
