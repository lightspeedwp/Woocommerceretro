# Columns Block

**Type:** Block  
**Slug:** `core/columns`  
**Category:** Design  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Columns block creates multi-column layouts. Each column is an individual Column block that can contain any other blocks. Columns stack vertically on mobile by default.

---

## Component Structure (React)

```tsx
<Columns count={3} gap="md">
  <Column>
    <Heading level={3}>Feature 1</Heading>
    <Paragraph>Description text.</Paragraph>
  </Column>
  <Column>
    <Heading level={3}>Feature 2</Heading>
    <Paragraph>Description text.</Paragraph>
  </Column>
  <Column>
    <Heading level={3}>Feature 3</Heading>
    <Paragraph>Description text.</Paragraph>
  </Column>
</Columns>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `2` | Number of columns. |
| `gap` | `string` | theme spacing | Gap between columns. |
| `isStackedOnMobile` | `boolean` | `true` | Stack columns vertically on mobile. |
| `verticalAlignment` | `string` | `top` | Vertical alignment (`top`, `center`, `bottom`). |
| `className` | `string` | - | Additional CSS classes. |

---

## Design System Requirements

- Use CSS Grid or Flexbox for layout. Columns use `grid-template-columns`.
- Responsive: Stack on mobile (`< 768px`), side-by-side on tablet+.
- Gap uses spacing tokens. Maintain consistent spacing.

---

## Accessibility

- Reading order should match visual order (left to right, top to bottom).
- Avoid hiding important content in specific columns on mobile.

---

## Related Components

- **Row block:** Single horizontal row.
- **Group block:** Container for shared styling.
- **Grid block:** For explicit grid layouts.

---

## Changelog

### v2.0 - 2026-02-22
- Migrated from lowercase `columns.md`, standardised naming convention
