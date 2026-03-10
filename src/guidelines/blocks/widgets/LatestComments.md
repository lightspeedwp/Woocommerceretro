# Latest Comments Block

**Type:** Block  
**Category:** Widgets  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Latest Comments block displays a list of the most recent comments posted on your site.

---

## 🎯 Purpose

Use the Latest Comments block to:
- Highlight community activity.
- Encourage further discussion.

---

## 📐 Structure

```
Latest Comments (ul)
└── Comment Item (li)
    ├── Author Name (strong/a)
    ├── Meta/Date (time)
    └── Excerpt (div) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `displayAvatar` | `boolean` | No | `true` | Show author avatar |
| `displayDate` | `boolean` | No | `true` | Show comment date |
| `displayExcerpt` | `boolean` | No | `true` | Show comment excerpt |
| `commentsToShow` | `number` | No | `5` | Number of comments |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { LatestComments } from '@/components/blocks/widgets/LatestComments';

<LatestComments commentsToShow={3} displayAvatar={true} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-latest-comments {
  padding-left: 0;
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-latest-comments__comment {
  margin-bottom: var(--wp--preset--spacing--20);
  list-style: none;
}

.wp-block-latest-comments__comment-meta {
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-secondary);
}

.wp-block-latest-comments__comment-excerpt {
  margin-top: var(--wp--preset--spacing--10);
  font-size: var(--wp--preset--font-size--small);
}

.wp-block-latest-comments__comment-avatar {
  margin-right: var(--wp--preset--spacing--10);
  border-radius: 50%;
  vertical-align: middle;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`
- `--wp--preset--spacing--20`
- `--wp--preset--spacing--40`
- `--wp--preset--color--text-secondary`
- `--wp--preset--font-size--small`

---

## ♿ Accessibility

- **Links:** Ensure links to comments are descriptive.
- **Images:** Avatars should have appropriate alt text (often empty if decorative next to name).

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard list behavior. Avatars may scale or hide on very small screens if configured. |

---

## 🌓 Dark Mode

- **Text:** Primary and secondary text colors adapt.
- **Avatars:** Should look good on dark backgrounds.

---

## 🔗 WordPress Mapping

**Maps to:** `core/latest-comments`

---

## ✅ Best Practices

- ✅ **DO** show excerpts to give context.
- ✅ **DO** limit the number to 3-5 to avoid clutter.

---

## ❌ Common Mistakes

- ❌ **DON'T** show full comment content; stick to excerpts.

---

## 📚 Related Documentation

- [Latest Posts Block](./LatestPosts.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
