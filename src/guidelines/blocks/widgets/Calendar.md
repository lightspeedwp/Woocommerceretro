# Calendar Block

**Type:** Block  
**Category:** Widgets  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Calendar block displays a calendar of the current month with links to daily archives for days that have posts.

---

## 🎯 Purpose

Use the Calendar block to:
- Allow users to browse posts by specific dates.
- Visual representation of posting frequency.

---

## 📐 Structure

```
Calendar (table)
├── Caption (caption) - Optional
├── Header (thead)
│   └── Day Names (th)
└── Body (tbody)
    └── Days (td)
        └── Link (a) - If posts exist
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | `string` | No | `''` | Additional CSS classes |
| `month` | `number` | No | Current | Month to display (0-11) |
| `year` | `number` | No | Current | Year to display |

### **Code Example**

```tsx
import { Calendar } from '@/components/blocks/widgets/Calendar';

<Calendar />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-calendar {
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-calendar table {
  width: 100%;
  border-collapse: collapse;
}

.wp-block-calendar th,
.wp-block-calendar td {
  border: 1px solid var(--wp--preset--color--border);
  padding: var(--wp--preset--spacing--10);
  text-align: center;
}

.wp-block-calendar th {
  background-color: var(--wp--preset--color--surface);
  font-weight: var(--wp--preset--font-weight--bold);
}

.wp-block-calendar td a {
  text-decoration: underline;
}

.wp-block-calendar caption {
  caption-side: top;
  margin-bottom: var(--wp--preset--spacing--10);
  font-weight: var(--wp--preset--font-weight--bold);
  text-align: right;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`
- `--wp--preset--spacing--40`
- `--wp--preset--color--border`
- `--wp--preset--color--surface`

---

## ♿ Accessibility

- **Table Structure:** Uses standard `table`, `caption`, `thead`, `tbody` for screen readers.
- **Navigation:** Links must be accessible.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Table width adjusts to container. |

---

## 🌓 Dark Mode

- **Backgrounds:** Calendar cells adapt to dark mode surfaces.
- **Borders:** Border colors adapt.
- **Text:** Text colors adapt.

---

## 🔗 WordPress Mapping

**Maps to:** `core/calendar`

---

## ✅ Best Practices

- ✅ **DO** use in sidebars or footers.

---

## ❌ Common Mistakes

- ❌ **DON'T** use for scheduling events (it's for post archives).

---

## 📚 Related Documentation

- [Archives Block](./Archives.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
