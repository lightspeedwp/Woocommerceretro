# Stack Block

**Type:** Block  
**Slug:** `core/stack`  
**Category:** Design  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Stack block arranges its child blocks vertically with consistent spacing. It is the vertical counterpart to the Row block. Use it for vertically stacking content like cards, form fields, or text blocks.

---

## Component Structure (React)

```tsx
<Stack gap="md" align="stretch">
  <Heading level={2}>Title</Heading>
  <Paragraph>Description text.</Paragraph>
  <Button variant="primary">Call to Action</Button>
</Stack>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gap` | `string` | theme spacing token | Vertical spacing between child elements. |
| `align` | `string` | `stretch` | Horizontal alignment (`stretch`, `center`, `flex-start`, `flex-end`). |
| `className` | `string` | - | Additional CSS classes. |

---

## Design System Requirements

- Use `gap` with spacing tokens for consistent vertical rhythm.
- Apply `align` to control horizontal alignment of children.
- Useful for form layouts, card content, sidebar widgets.

---

## Accessibility

- Focus order follows DOM order (top to bottom).
- Ensure proper heading hierarchy within stacked content.

---

## Related Components

- **Row block:** For horizontal layout.
- **Group block:** For grouped styling.
- **Columns block:** For multi-column layouts.

---

## Changelog

### v2.0 - 2026-02-22
- Migrated from lowercase `stack.md`, standardised naming convention
