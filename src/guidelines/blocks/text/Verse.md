# Verse Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Verse block is designed specifically for poetry, song lyrics, and other literary content where line breaks and spacing are significant to the meaning and rhythm of the text.

---

## 🎯 Purpose

Use the Verse block to:
- Publish poems.
- Display song lyrics.
- Quote speeches where phrasing matters.

---

## 📐 Structure

```
Verse (pre)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `string` | Yes | - | The verse content |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Verse } from '@/components/blocks/text/Verse';

<Verse>
  Two roads diverged in a yellow wood,
  And sorry I could not travel both
  And be one traveler, long I stood...
</Verse>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-verse {
  font-family: var(--wp--preset--font-family--serif); /* Often serif for literary feel */
  white-space: pre-wrap; /* Preserves breaks but wraps long lines */
  margin-left: var(--wp--preset--spacing--40); /* Visual indentation */
  margin-bottom: var(--wp--preset--spacing--40);
  color: var(--wp--preset--color--text-primary);
}
```

### **CSS Variables Used**

- `--wp--preset--font-family--serif`
- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Semantics:** Uses `<pre>` which tells screen readers to respect line breaks/pauses.
- **Reading:** Ensures proper cadence when read aloud.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Lines wrap automatically to fit the screen (`white-space: pre-wrap`). |

---

## 🌓 Dark Mode

Adapts text color via `--wp--preset--color--text-primary`.

---

## 🔗 WordPress Mapping

**Maps to:** `core/verse`

---

## ✅ Best Practices

- ✅ **DO** use for content where line breaks are semantic.
- ✅ **DO** allow lines to wrap on small screens (unlike Code or Preformatted which might scroll).

---

## ❌ Common Mistakes

- ❌ **DON'T** use for simple lists (use List block).
- ❌ **DON'T** use for standard quotes (use Quote block).

---

## 📚 Related Documentation

- [Preformatted Block](./Preformatted.md)
- [Quote Block](./Quote.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
