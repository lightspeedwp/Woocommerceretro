# Code Block

**Type:** Block  
**Category:** Text  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Code block allows you to display code snippets that respect whitespace and formatting. It uses a monospace font and is typically styled with a distinct background to separate it from regular text.

---

## 🎯 Purpose

Use the Code block to:
- Share code examples (HTML, CSS, JS, etc.).
- Display preformatted text where spacing matters.
- Show configuration settings or terminal commands.

---

## 📐 Structure

```
Code (pre)
└── Code Content (code)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `string` | Yes | - | The raw code content |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Code } from '@/components/blocks/text/Code';

<Code>
  {`const greeting = "Hello World";
console.log(greeting);`}
</Code>
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-code {
  font-family: var(--wp--preset--font-family--mono);
  font-size: var(--wp--preset--font-size--small);
  background-color: var(--wp--preset--color--surface-secondary);
  padding: var(--wp--preset--spacing--30);
  border-radius: var(--wp--preset--border-radius--sm);
  border: 1px solid var(--wp--preset--color--border);
  overflow-x: auto;
}

.wp-block-code code {
  font-family: inherit; /* Inherit monospace */
  color: var(--wp--preset--color--text-primary);
}
```

### **CSS Variables Used**

- `--wp--preset--font-family--mono`
- `--wp--preset--color--surface-secondary`
- `--wp--preset--color--border`
- `--wp--preset--spacing--30`

---

## ♿ Accessibility

- **Keyboard:** Ensure the scrollable area (if code is long) is keyboard accessible (tabindex="0").
- **Contrast:** Ensure code text contrasts sufficiently with the background block color.
- **Screen Readers:** Screen readers will typically read the code character by character or line by line depending on user settings.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Horizontal scrollbar appears if lines are too long (overflow-x: auto). |
| Desktop (>1024px) | Standard display. |

---

## 🌓 Dark Mode

- **Background:** `--wp--preset--color--surface-secondary` switches to a dark gray/black.
- **Text:** `--wp--preset--color--text-primary` switches to light gray/white.
- **Border:** Darker border color.

---

## 🔗 WordPress Mapping

**Maps to:** `core/code`

---

## ✅ Best Practices

- ✅ **DO** escape HTML entities if writing raw HTML inside (though React handles this automatically with children text).
- ✅ **DO** use for short snippets. For long files, consider a dedicated Gist or syntax highlighter plugin styling.

---

## ❌ Common Mistakes

- ❌ **DON'T** use for single inline code words (use standard inline `<code>` formatting within a Paragraph block).
- ❌ **DON'T** mix rich text (bold/italic) inside the Code block, as it is intended for plain text code.

---

## 📚 Related Documentation

- [Preformatted Block](./Preformatted.md)
- [Typography Tokens](../../design-tokens/typography.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
