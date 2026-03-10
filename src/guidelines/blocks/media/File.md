# File Block

**Type:** Block  
**Category:** Media  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The File block provides a link to download a file, such as a PDF, ZIP, or document. It often includes a "Download" button alongside the filename link.

---

## 🎯 Purpose

Use the File block to:
- Offer downloadable resources (whitepapers, brochures).
- Share software binaries or installers.
- Provide offline versions of content.

---

## 📐 Structure

```
File (div)
├── Link (a)
└── Button (a.wp-block-file__button)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `href` | `string` | Yes | - | File URL |
| `fileName` | `string` | No | - | Display name (defaults to filename) |
| `showButton` | `boolean` | No | `true` | Show download button |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { FileBlock } from '@/components/blocks/media/FileBlock';

<FileBlock 
  href="/documents/annual-report.pdf" 
  fileName="2025 Annual Report"
  showButton={true}
/>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-file {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--wp--preset--spacing--40);
  padding: var(--wp--preset--spacing--30);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--md);
}

.wp-block-file__button {
  background-color: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--primary-text);
  padding: 0.5em 1em;
  border-radius: 2em;
  text-decoration: none;
  font-size: var(--wp--preset--font-size--small);
}
```

### **CSS Variables Used**

- `--wp--preset--color--primary`
- `--wp--preset--color--border`
- `--wp--preset--spacing--30`

---

## ♿ Accessibility

- **Link Text:** Ensure the link text describes the file content.
- **File Type:** It is helpful to indicate the file type and size (e.g., "PDF, 2MB") in the text or aria-label.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | May stack the filename and button vertically if space is tight. |

---

## 🌓 Dark Mode

- **Border:** Adapts via `--wp--preset--color--border`.
- **Button:** Adapts standard button colors.

---

## 🔗 WordPress Mapping

**Maps to:** `core/file`

---

## ✅ Best Practices

- ✅ **DO** indicate file size if possible.
- ✅ **DO** open PDF links in a new tab if appropriate (though user preference varies).

---

## ❌ Common Mistakes

- ❌ **DON'T** link to huge files without warning.

---

## 📚 Related Documentation

- [Buttons Block](../design/Buttons.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
