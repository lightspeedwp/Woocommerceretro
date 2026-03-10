# Product Category Title

**WooCommerce Block:** `woocommerce/category-title`
**Category:** `woocommerce`
**React Component:** `ArchiveHeader` pattern

---

## Block Definition

- **Name:** `woocommerce/category-title`
- **Description:** Displays the current category title and lets permitted users edit it.
- **Supports:** `color` (background, text), `spacing` (margin, padding), `typography`, `align`, `html`
- **Attributes:** `isLink`, `level`, `linkTarget`, `rel`, `textAlign`

---

## WordPress CSS Classes

```css
.wc-block-category-title { }
```

---

## Related: Category Description

- **Name:** `woocommerce/category-description`
- **Description:** Displays the current category description.
- **Supports:** `color` (background, text), `spacing`, `typography`, `align`, `html`
- **Attributes:** `textAlign`
- **CSS:** `.wc-block-category-description`

---

## React Component Mapping

Both blocks are combined in the `ArchiveHeader` pattern:

```tsx
<ArchiveHeader
  title={category.name}
  description={category.description}
  productCount={category.count}
/>
```
