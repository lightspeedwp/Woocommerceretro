# Table Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Table block displays structured data in rows and columns. It supports optional headers, footers, and different visual styles like striping.

---

## 🎯 Purpose

Use the Table block to:
- Compare items or features.
- Display pricing matrices.
- Show schedules or timetables.
- List data points.

---

## 📐 Structure

```
Table (table)
├── Caption (caption)
├── Header (thead)
├── Body (tbody)
│   └── Rows (tr)
│       └── Cells (td)
└── Footer (tfoot)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `head` | `Array<string>` | No | - | Header cell contents |
| `body` | `Array<Array<string>>` | Yes | - | Body rows and cells |
| `foot` | `Array<string>` | No | - | Footer cell contents |
| `caption` | `string` | No | - | Table caption |
| `fixedLayout` | `boolean` | No | `false` | Use fixed table layout |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Table } from '@/components/blocks/text/Table';

<Table 
  head={['Feature', 'Basic', 'Pro']}
  body={[
    ['Users', '1', 'Unlimited'],
    ['Storage', '10GB', '1TB'],
    ['Support', 'Email', '24/7 Priority']
  ]}
  caption="Plan Comparison"
  className="is-style-stripes"
/>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-table {
  margin-bottom: var(--wp--preset--spacing--50);
  overflow-x: auto;
}

.wp-block-table table {
  width: 100%;
  border-collapse: collapse;
}

.wp-block-table td, 
.wp-block-table th {
  padding: var(--wp--preset--spacing--20);
  border: 1px solid var(--wp--preset--color--border);
}

.wp-block-table th {
  font-weight: var(--wp--preset--font-weight--bold);
  background-color: var(--wp--preset--color--surface-secondary);
}

/* Stripes Style */
.is-style-stripes tbody tr:nth-child(odd) {
  background-color: var(--wp--preset--color--surface-secondary);
}
```

### **CSS Variables Used**

- `--wp--preset--color--border`
- `--wp--preset--color--surface-secondary`
- `--wp--preset--spacing--20`
- `--wp--preset--spacing--50`

---

## ♿ Accessibility

- **Captions:** Always use a `<caption>` if the table content isn't immediately obvious from context.
- **Headers:** `<th>` elements must have `scope="col"` or `scope="row"` attributes for proper screen reader navigation.
- **Complexity:** Avoid complex nested tables or merged cells if possible, as they are hard to navigate.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Container should have `overflow-x: auto` to allow horizontal scrolling without breaking the page layout. |

---

## 🌓 Dark Mode

- **Borders:** Visible via `--wp--preset--color--border`.
- **Backgrounds:** Header/Stripe backgrounds adapt via `--wp--preset--color--surface-secondary`.

---

## 🔗 WordPress Mapping

**Maps to:** `core/table`

**theme.json settings:**
```json
{
  "settings": {
    "blocks": {
      "core/table": {
        "styles": [
          { "name": "regular", "label": "Regular" },
          { "name": "stripes", "label": "Stripes" }
        ]
      }
    }
  }
}
```

---

## ✅ Best Practices

- ✅ **DO** use for tabular data.
- ✅ **DO** keep cell content concise.
- ✅ **DO** use fixed layout (`table-layout: fixed`) if columns should have equal width.

---

## ❌ Common Mistakes

- ❌ **DON'T** use for page layout (use Columns or Grid blocks).
- ❌ **DON'T** paste images into cells (tables are for text/data).

---

## 📚 Related Documentation

- [Typography Tokens](../../design-tokens/typography.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
