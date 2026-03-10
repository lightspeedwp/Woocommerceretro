# Tag Cloud Block

**Type:** Block  
**Category:** Widgets  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Tag Cloud block displays a list of tags (or other taxonomies) in a visual "cloud" where the font size corresponds to the number of posts assigned to each tag.

---

## 🎯 Purpose

Use the Tag Cloud block to:
- Visualizing content topics by popularity.
- Helping users find content by keywords.

---

## 📐 Structure

```
Tag Cloud (div/ul)
└── Tag Item (a)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `taxonomy` | `'post_tag' \| 'category'` | No | `'post_tag'` | Taxonomy to display |
| `showPostCounts` | `boolean` | No | `false` | Show number of posts |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { TagCloud } from '@/components/blocks/widgets/TagCloud';

<TagCloud taxonomy="post_tag" showPostCounts={true} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wp--preset--spacing--10);
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-block-tag-cloud a {
  text-decoration: none;
  /* Font size is usually inline, but base styles apply */
  color: var(--wp--preset--color--primary);
}

.wp-block-tag-cloud a:hover {
  text-decoration: underline;
}

.tag-cloud-link {
  /* WordPress adds this class too */
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`
- `--wp--preset--spacing--40`
- `--wp--preset--color--primary`

---

## ♿ Accessibility

- **Font Size:** Ensure the smallest tags are still legible (min 12px or 0.875rem recommended).
- **Structure:** Usually rendered as a list or nav element for better screen reader navigation.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Tags wrap automatically to fit container width. |

---

## 🌓 Dark Mode

- **Colors:** Tag links adapt to dark mode primary colors.

---

## 🔗 WordPress Mapping

**Maps to:** `core/tag-cloud`

---

## ✅ Best Practices

- ✅ **DO** limit the max font size to avoid layout breakage.
- ✅ **DO** use for "discovery" navigation.

---

## ❌ Common Mistakes

- ❌ **DON'T** use if you have hundreds of tags (performance/clutter).

---

## 📚 Related Documentation

- [Categories List Block](./CategoriesList.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
