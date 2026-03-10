# Grid Block

**Type:** Block  
**Slug:** `core/grid`  
**Category:** Design  
**Introduced:** WordPress 6.3  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Grid block is a flexible container for organising blocks into rows and columns. It extends the functionality of Columns and Row blocks by supporting automatic column generation and manual column counts, enabling complex responsive layouts.

---

## Component Structure (React)

```tsx
<Grid columns={3} minWidth="250px" rowGap="md" columnGap="md">
  {products.map(product => (
    <Card key={product.id} title={product.name} image={product.image} price={product.price} />
  ))}
</Grid>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `number` | - | Fixed number of columns. If undefined, auto-fills based on `minWidth`. |
| `minWidth` | `string` | `200px` | Minimum width for each grid item (auto-fill mode). |
| `rowGap` | `string` | theme spacing token | Vertical spacing between rows. |
| `columnGap` | `string` | theme spacing token | Horizontal spacing between columns. |
| `sticky` | `boolean` | `false` | Whether the grid is sticky. |
| `className` | `string` | - | Additional CSS classes. |

---

## Design System Requirements

- **Layout:** Use CSS Grid with `grid-template-columns: repeat(auto-fill, minmax(minWidth, 1fr))`.
- **Responsive:** Configure auto-adjustment of column count. Use `fr` and percentages, not fixed widths.
- **Spacing:** Use spacing tokens for row and column gaps. Avoid individual margins on grid items.

---

## Usage Guidelines

1. Use Grid for collections (products, blog posts, image galleries).
2. Use `minWidth` for auto-filling columns based on available width.
3. Test on small screens to ensure items do not become too narrow.
4. For simple layouts, prefer Columns or Row blocks.

---

## Accessibility

- Reading order must match visual order. Avoid CSS `order` reordering without DOM updates.
- Provide descriptive alt text for images and clear labels for interactive elements.
- Use semantic containers (`<section>`, `<ul>` with `<li>`) where appropriate.

---

## Related Components

- **Columns block:** For simple column layouts.
- **Row block:** For horizontal alignment.
- **Stack block:** For vertical stacking.

---

## Changelog

### v2.0 - 2026-02-22
- Migrated from lowercase `grid.md`, standardised naming convention
