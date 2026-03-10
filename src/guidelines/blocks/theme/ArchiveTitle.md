# Archive Title Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Archive Title block displays the title of the archive page (e.g., "Category: News", "Author: John Doe", "Month: January 2026").

---

## 🎯 Purpose

Use the Archive Title block to:
- Head the content on archive pages.
- Dynamically identify the current context.

---

## 📐 Structure

```
Archive Title (h1)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `showPrefix` | `boolean` | No | `true` | Show "Category:", "Tag:", etc. |
| `className` | `string` | No | `''` | Additional CSS classes |
| `level` | `1-6` | No | `1` | Heading level |

### **Code Example**

```tsx
import { ArchiveTitle } from '@/components/blocks/theme/ArchiveTitle';

<ArchiveTitle level={1} showPrefix={false} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-query-title {
  margin-bottom: var(--wp--preset--spacing--30);
  /* Inherits heading styles */
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--30`

---

## ♿ Accessibility

- **Heading Level:** Typically H1 for the main archive page title.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard heading responsiveness. |

---

## 🌓 Dark Mode

- **Text:** Adapts to theme colors.

---

## 🔗 WordPress Mapping

**Maps to:** `core/query-title` (type: archive)

---

## ✅ Best Practices

- ✅ **DO** allow hiding prefixes for cleaner design if context is obvious.

---

## ❌ Common Mistakes

- ❌ **DON'T** hardcode "Blog" – use the dynamic block.

---

## 📚 Related Documentation

- [Term Description Block](./TermDescription.md)
- [Search Results Title Block](./SearchResultsTitle.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
