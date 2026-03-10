# Search Block

**Type:** Block  
**Slug:** `core/search`  
**Category:** Theme  
**Introduced:** WordPress 5.6  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Search block adds a search form to your site, enabling visitors to search posts, pages or other content. It consists of an input field and a submit button. It is typically placed in headers, sidebars or footers.

---

## WordPress Context

The Search block appears in the **Theme** category. When inserted, it displays a text input and a submit button. The toolbar provides controls to change alignment and button position (button inside the input or outside). In the sidebar, you can set the placeholder text, choose whether the search button displays an icon or text label, adjust typography and colour, and configure spacing and border styles.

---

## Design System Requirements

- **Form layout:** Decide whether the button should be inside the input (icon button) or outside as a separate button. For compact spaces (e.g., header), an icon inside the field may be preferable.
- **Typography:** Use body text style for the input placeholder and button text. Use tokens like `--wp--preset--font-size--md` for the input and `--wp--preset--font-size--sm` for the button.
- **Colours:** Use neutral colours for the input background and text. Ensure focus states are clearly visible (e.g., outline or shadow when the field is focused).
- **Spacing & sizing:** Provide adequate padding inside the input field and button. Set the height to align with other form controls.
- **Border & radius:** Use consistent border styles and radius from the design system.

---

## Component Structure (React)

```tsx
<Search 
  placeholder="Search articles..." 
  buttonLabel="Search" 
  showIcon={true} 
  align="left" 
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `"Search..."` | Placeholder text in the input field. |
| `buttonLabel` | `string` | `"Search"` | Text label for the button. |
| `showIcon` | `boolean` | `true` | Whether to display a search icon. |
| `buttonPosition` | `string` | `outside` | Position of the button: `inside` or `outside`. |
| `align` | `string` | `left` | Alignment of the search form. |
| `className` | `string` | - | Additional CSS classes. |

---

## Accessibility

- Provide a visible or visually hidden label for the search input.
- Ensure focus styles are visible on both the input and the button.
- Use semantic form elements (`<form>`, `<input type="search">`, `<button type="submit">`).
- Users should be able to submit the form by pressing Enter.

---

## Related Components

- **Navigation block:** Search is often placed near navigation in headers.
- **Query Loop block:** Use to display search results.

---

## Changelog

### v2.0 - 2026-02-22
- Merged with lowercase `search.md`, standardised naming convention

### v1.0 - Initial
- Basic search block specification
