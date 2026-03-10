# Row Block

**Type:** Block  
**Slug:** `core/row`  
**Category:** Design  
**Introduced:** WordPress 6.0  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Row block is a container that arranges its child blocks horizontally in a single row. It is ideal for creating horizontal groups of content such as navigation links, social icons or horizontally aligned calls to action.

---

## Component Structure (React)

```tsx
<Row gap="var(--wp--preset--spacing--sm)" justify="center" align="center">
  <Button variant="primary">Sign up</Button>
  <Button variant="secondary">Learn more</Button>
</Row>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gap` | `string` | theme spacing token | Horizontal spacing between child elements. |
| `justify` | `string` | `flex-start` | Horizontal justification (`center`, `space-between`). |
| `align` | `string` | `center` | Vertical alignment (`flex-start`, `center`, `flex-end`). |
| `wrap` | `boolean` | `false` | Whether items should wrap on small screens. |
| `className` | `string` | - | Additional CSS classes. |

---

## Design System Requirements

- **Layout:** Use `gap` with spacing tokens. Use `justify-content` and `align-items` for alignment.
- **Responsive:** Consider enabling wrap or switching to Stack on narrow screens.
- **Spacing:** Use margin and padding tokens. Maintain equal spacing between items.

---

## Accessibility

- Focus order must follow visual order.
- Interactive elements require clear labels.
- When used for navigation, wrap in `<nav>` with `aria-label`.

---

## Related Components

- **Columns block:** For multi-column layouts.
- **Stack block:** For vertical stacking.
- **Grid block:** For complex grid layouts.

---

## Changelog

### v2.0 - 2026-02-22
- Migrated from lowercase `row.md`, standardised naming convention
