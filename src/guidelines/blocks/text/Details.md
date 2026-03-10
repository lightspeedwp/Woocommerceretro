# Details Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Details block (often called an accordion or toggle) allows you to hide content initially and let the user expand it to view more. It uses standard HTML5 semantic elements.

---

## 🎯 Purpose

Use the Details block to:
- Hide complex details that aren't necessary for every reader.
- Create FAQ sections (though dedicated Accordion blocks may offer more style options).
- Reduce visual clutter on long pages.

---

## 📐 Structure

```
Details (details)
├── Summary (summary)
└── Content (div/flow content)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `summary` | `string` | Yes | - | The clickable summary text |
| `children` | `ReactNode` | Yes | - | The hidden content |
| `open` | `boolean` | No | `false` | Initial state |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Details } from '@/components/blocks/text/Details';

<Details summary="More Information">
  <p>Here are the additional details that were hidden.</p>
</Details>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-details {
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--sm);
  padding: var(--wp--preset--spacing--20);
  margin-bottom: var(--wp--preset--spacing--30);
}

.wp-block-details summary {
  cursor: pointer;
  font-weight: var(--wp--preset--font-weight--semibold);
  list-style-position: inside; /* Standard arrow placement */
}

.wp-block-details[open] {
  /* Style when open */
  background-color: var(--wp--preset--color--surface);
}
```

### **CSS Variables Used**

- `--wp--preset--color--border`
- `--wp--preset--color--surface`
- `--wp--preset--spacing--20`

---

## ♿ Accessibility

- **Keyboard:** `<summary>` is natively focusable. Enter/Space toggles visibility.
- **Screen Readers:** Announce "Details" or "Summary" and the expanded/collapsed state automatically.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard behavior. Content reflows when expanded. |

---

## 🌓 Dark Mode

- **Border:** Adapts via `--wp--preset--color--border`.
- **Text:** Adapts via `--wp--preset--color--text-primary`.

---

## 🔗 WordPress Mapping

**Maps to:** `core/details`

---

## ✅ Best Practices

- ✅ **DO** ensure the summary text clearly indicates what is hidden.
- ✅ **DO** keep the summary short.

---

## ❌ Common Mistakes

- ❌ **DON'T** hide critical information that every user must see.
- ❌ **DON'T** put entire pages inside a details block.

---

## 📚 Related Documentation

- [Accordion Block](../design/Accordion.md) (If available)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
