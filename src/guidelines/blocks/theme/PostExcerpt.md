# Post Excerpt Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Post Excerpt block displays a short summary of the post. It uses the manually entered excerpt if available, or auto-generates one from the content.

---

## 🎯 Purpose

Use the Post Excerpt block to:
- Provide a preview of the content in archives/lists.
- Encourage users to read more.

---

## 📐 Structure

```
Post Excerpt (div/p)
└── Content
    └── Read More Link (a) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `showMoreOnNewLine` | `boolean` | No | `true` | Show "Read More" on new line |
| `moreText` | `string` | No | `'Read more'` | Text for the link |
| `excerptLength` | `number` | No | `55` | Max number of words |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { PostExcerpt } from '@/components/blocks/theme/PostExcerpt';

<PostExcerpt showMoreOnNewLine={false} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-post-excerpt {
  margin-bottom: var(--wp--preset--spacing--20);
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-secondary);
}

.wp-block-post-excerpt__more-link {
  display: inline-block;
  margin-top: var(--wp--preset--spacing--10);
  color: var(--wp--preset--color--primary);
  text-decoration: underline;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`
- `--wp--preset--spacing--20`
- `--wp--preset--font-size--small`
- `--wp--preset--color--text-secondary`
- `--wp--preset--color--primary`

---

## ♿ Accessibility

- **Read More:** The link text should ideally be descriptive (e.g., "Read more about [Post Title]") to avoid ambiguous "Read more" links for screen readers.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard text wrapping. |

---

## 🌓 Dark Mode

- **Text:** Adapts to dark mode secondary text color.

---

## 🔗 WordPress Mapping

**Maps to:** `core/post-excerpt`

---

## ✅ Best Practices

- ✅ **DO** keep excerpts concise (30-50 words).

---

## ❌ Common Mistakes

- ❌ **DON'T** duplicate the exact content of the title.

---

## 📚 Related Documentation

- [Post Title Block](./PostTitle.md)
- [Read More Block](./ReadMore.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
