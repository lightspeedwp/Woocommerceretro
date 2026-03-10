# Separator Block

**Type:** Block  
**Category:** Design  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Separator block creates a horizontal line break between content sections. It provides a visual pause in the flow of text.

---

## 🎯 Purpose

Use the Separator block to:
- Divide thematic sections within a post.
- Create visual breathing room.
- Mark a transition in the narrative.

---

## 📐 Structure

```
Separator (hr)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Separator } from '@/components/blocks/design/Separator';

<Separator className="is-style-wide" />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-separator {
  border: none;
  border-bottom: 2px solid var(--wp--preset--color--border);
  margin-block: var(--wp--preset--spacing--50);
  max-width: 100px; /* Default is short */
  margin-left: auto;
  margin-right: auto;
}

.wp-block-separator.is-style-wide {
  max-width: 100%;
}

.wp-block-separator.is-style-dots {
  background: none;
  border: none;
  text-align: center;
  height: auto;
  line-height: 1;
}

.wp-block-separator.is-style-dots::before {
  content: "···";
  font-size: var(--wp--preset--font-size--x-large);
  letter-spacing: var(--wp--preset--spacing--30);
  color: var(--wp--preset--color--text-secondary);
}
```

### **CSS Variables Used**

- `--wp--preset--color--border`
- `--wp--preset--spacing--50`
- `--wp--preset--font-size--x-large`

---

## ♿ Accessibility

- **Role:** `<hr>` has an implicit role of `separator`.
- **Ignored:** Screen readers typically pause but don't announce "horizontal rule" explicitly unless configured.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Scales to container width. |

---

## 🌓 Dark Mode

- **Color:** Adapts via `--wp--preset--color--border` or text color for dots.

---

## 🔗 WordPress Mapping

**Maps to:** `core/separator`

**theme.json settings:**
```json
{
  "settings": {
    "blocks": {
      "core/separator": {
        "styles": [
          { "name": "default", "label": "Default" },
          { "name": "wide", "label": "Wide Line" },
          { "name": "dots", "label": "Dots" }
        ]
      }
    }
  }
}
```

---

## ✅ Best Practices

- ✅ **DO** use to separate distinct topics.
- ✅ **DO** use the "Dots" style for a more literary feel.

---

## ❌ Common Mistakes

- ❌ **DON'T** use multiple separators in a row.
- ❌ **DON'T** use strictly for spacing (use the Spacer block for invisible space).

---

## 📚 Related Documentation

- [Spacer Block](./Spacer.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
