# Search Results Title Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Search Results Title block displays the title for search results pages, typically in the format: "Search results for: [Term]".

---

## 🎯 Purpose

Use the Search Results Title block to:
- Confirm to the user what they searched for.
- Head the search results page.

---

## 📐 Structure

```
Search Results Title (h1)
└── "Search results for: " + Term
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | `string` | No | `''` | Additional CSS classes |
| `level` | `1-6` | No | `1` | Heading level |

### **Code Example**

```tsx
import { SearchResultsTitle } from '@/components/blocks/theme/SearchResultsTitle';

<SearchResultsTitle level={1} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-query-title {
  margin-bottom: var(--wp--preset--spacing--30);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--30`

---

## ♿ Accessibility

- **Context:** Clearly announces the search context.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard heading behavior. |

---

## 🌓 Dark Mode

- **Text:** Adapts to theme colors.

---

## 🔗 WordPress Mapping

**Maps to:** `core/query-title` (type: search)

---

## ✅ Best Practices

- ✅ **DO** use as the main H1 on search pages.

---

## ❌ Common Mistakes

- ❌ **DON'T** forget to handle the "no results" state (usually handled by Query Loop > No Results).

---

## 📚 Related Documentation

- [Archive Title Block](./ArchiveTitle.md)
- [Query Loop Block](./QueryLoop.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
