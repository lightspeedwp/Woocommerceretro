# Group Block

**Type:** Block  
**Slug:** `core/group`  
**Category:** Design  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Group block wraps one or more blocks together, allowing shared styling (background, padding, border) and layout control. It acts as a container for creating sections with consistent visual treatment.

---

## Component Structure (React)

```tsx
<Group background="surface" padding="lg" borderRadius="md">
  <Heading level={2}>Section Title</Heading>
  <Paragraph>Section content goes here.</Paragraph>
</Group>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `background` | `string` | - | Background colour token. |
| `padding` | `string` | - | Padding using spacing tokens. |
| `borderRadius` | `string` | - | Border radius preset. |
| `align` | `string` | - | Alignment (`wide`, `full`). |
| `className` | `string` | - | Additional CSS classes. |

---

## Design System Requirements

- Use for grouping blocks that share a visual context (same background, padding).
- Apply background colours from the palette. Ensure contrast with inner text.
- Use spacing tokens for padding and margin.

---

## Accessibility

- Use semantic HTML where appropriate (`<section>`, `<div>`).
- Apply `aria-label` if the group represents a landmark region.

---

## Related Components

- **Row block:** Horizontal layout. Group with `layout: flex`.
- **Stack block:** Vertical layout.
- **Columns block:** Multi-column layout.

---

## Changelog

### v2.0 - 2026-02-22
- Migrated from lowercase `group.md`, standardised naming convention
