# Post Author Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Post Author block displays details about the author of the post. It can include the author's name, avatar, bio, and a link to their archive.

---

## 🎯 Purpose

Use the Post Author block to:
- Credit the content creator.
- Provide context about the author's expertise.

---

## 📐 Structure

```
Post Author (div)
├── Avatar (div) - Optional
└── Details (div)
    ├── Name (h3/p/a)
    └── Bio (p) - Optional
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `showAvatar` | `boolean` | No | `true` | Show avatar |
| `showBio` | `boolean` | No | `false` | Show biography |
| `isLink` | `boolean` | No | `false` | Link name to archive |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { PostAuthor } from '@/components/blocks/theme/PostAuthor';

<PostAuthor showAvatar={true} showBio={true} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-post-author {
  display: flex;
  gap: var(--wp--preset--spacing--20);
  margin-bottom: var(--wp--preset--spacing--20);
  align-items: center;
}

.wp-block-post-author__name {
  font-weight: var(--wp--preset--font-weight--bold);
  font-size: var(--wp--preset--font-size--medium);
}

.wp-block-post-author__bio {
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-secondary);
  margin-top: var(--wp--preset--spacing--05);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--05`
- `--wp--preset--spacing--20`
- `--wp--preset--font-size--medium`
- `--wp--preset--font-size--small`
- `--wp--preset--color--text-secondary`

---

## ♿ Accessibility

- **Links:** Author link should be clearly labeled.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile | Can stack avatar and text if width is constrained. |

---

## 🌓 Dark Mode

- **Text:** Name and bio colors adapt.

---

## 🔗 WordPress Mapping

**Maps to:** `core/post-author`

---

## ✅ Best Practices

- ✅ **DO** use in the "Byline" area or at the end of posts.

---

## ❌ Common Mistakes

- ❌ **DON'T** clutter the byline with too much info (save bio for the footer).

---

## 📚 Related Documentation

- [Avatar Block](./Avatar.md)
- [Post Date Block](./PostDate.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
