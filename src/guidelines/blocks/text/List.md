# List Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The List block organizes items into bulleted (unordered) or numbered (ordered) lists. It supports nested lists and is essential for readability of itemized content.

---

## 🎯 Purpose

Use the List block to:
- Present steps in a process (Ordered).
- List features or items (Unordered).
- Create nested hierarchies of items.

---

## 📐 Structure

```
List (ul/ol)
└── ListItem (li)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type` | `'ordered' \| 'unordered'` | No | `'unordered'` | List type |
| `start` | `number` | No | - | Start value (ordered only) |
| `children` | `ReactNode` | Yes | - | List items (`<li>`) |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { List } from '@/components/blocks/text/List';

// Unordered
<List>
  <li>Apples</li>
  <li>Oranges</li>
</List>

// Ordered
<List type="ordered" start={1}>
  <li>First step</li>
  <li>Second step</li>
</List>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
ul, ol {
  margin-left: var(--wp--preset--spacing--40);
  margin-bottom: var(--wp--preset--spacing--40);
  padding-left: var(--wp--preset--spacing--30);
}

ul {
  list-style-type: disc;
}

ol {
  list-style-type: decimal;
}

li {
  margin-bottom: var(--wp--preset--spacing--10);
  font-size: var(--wp--preset--font-size--normal);
  line-height: var(--wp--preset--line-height--relaxed);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`
- `--wp--preset--spacing--30`
- `--wp--preset--spacing--40`

---

## ♿ Accessibility

- **Semantics:** Uses `<ul>` or `<ol>` so screen readers announce "List, X items".
- **Nesting:** Properly nested lists are navigable.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Indentation remains but ensures content doesn't get pushed off screen. |

---

## 🌓 Dark Mode

- **Color:** Bullets/Numbers and Text adapt via `--wp--preset--color--text-primary` or `secondary`.

---

## 🔗 WordPress Mapping

**Maps to:** `core/list`

---

## ✅ Best Practices

- ✅ **DO** use for groups of related items.
- ✅ **DO** use ordered lists for sequential steps.

---

## ❌ Common Mistakes

- ❌ **DON'T** use manual bullet characters in paragraphs (use the List block).
- ❌ **DON'T** use for navigation menus (use the Navigation block).

---

## 📚 Related Documentation

- [Paragraph Block](./Paragraph.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Updated to standard guideline format
