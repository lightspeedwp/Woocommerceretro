# Avatar Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Avatar block displays the profile picture (avatar) of a user. It can be used to show the post author's avatar or a specific user's avatar.

---

## 🎯 Purpose

Use the Avatar block to:
- Visually identify the author of a post.
- Add personal touch to author bios or comments.

---

## 📐 Structure

```
Avatar (div/figure)
└── Image (img)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `number` | No | `96` | Size in pixels |
| `isLink` | `boolean` | No | `false` | Link to author archive |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { Avatar } from '@/components/blocks/theme/Avatar';

<Avatar size={48} isLink={true} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-avatar {
  margin-bottom: var(--wp--preset--spacing--10);
}

.wp-block-avatar img {
  border-radius: 50%; /* Circular by default usually */
  object-fit: cover;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`

---

## ♿ Accessibility

- **Alt Text:** Automatically uses the user's name (e.g., "Avatar of [Name]").

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Fixed size usually, but can be made fluid with CSS. |

---

## 🌓 Dark Mode

- **Borders:** If borders are used, they adapt.

---

## 🔗 WordPress Mapping

**Maps to:** `core/avatar`

---

## ✅ Best Practices

- ✅ **DO** pair with Post Author Name.

---

## ❌ Common Mistakes

- ❌ **DON'T** use excessively large sizes in lists.

---

## 📚 Related Documentation

- [Post Author Block](./PostAuthor.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
