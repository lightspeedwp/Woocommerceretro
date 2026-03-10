# Template Part Block

**Type:** Block  
**Slug:** `core/template-part`  
**Category:** Theme  
**Introduced:** WordPress 5.9  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Template Part block enables developers to define reusable structural parts of a theme, such as headers, footers, or other layout sections. It loads a template part file stored in the theme and allows it to be edited in the Site Editor. Template parts represent site structure rather than content. Changes to a template part apply across all templates that reference it.

---

## WordPress Context

Template parts are registered in the theme's `theme.json` and `block-templates` directories. In the block editor, the Template Part block allows you to insert an existing template part (e.g., `header`, `footer`, `sidebar`) or create a new one. Template parts cannot be nested within patterns as they represent structure rather than content.

---

## Design System Requirements

- **Structural purpose:** Use for elements that are repeated across pages (headers, footers, sidebars).
- **Consistent layouts:** Follow the same grid, spacing and alignment guidelines as other blocks.
- **Naming conventions:** Name template parts descriptively (e.g., `header-main`, `footer-primary`, `sidebar-blog`). Use slug casing (lowercase, hyphenated).
- **Editable regions:** Provide clearly defined regions where content (navigation, logo, search) can be inserted.
- **Variations:** Consider variations for different templates (e.g., header with hero vs. simple header).

---

## Component Structure (React)

```tsx
// Header template part composed of blocks
<header className="wp-site-header">
  <Container variant="site">
    <Row justify="space-between" align="center">
      <SiteLogo src="/assets/logo.svg" width="150px" />
      <Navigation menu={primaryMenu} orientation="horizontal" />
      <div className="wp-header-desktop__actions">
        <ThemeToggle />
        <MiniCart />
      </div>
    </Row>
  </Container>
</header>
```

---

## Template Part Registry

| Part Slug | Area | Component | Description |
|-----------|------|-----------|-------------|
| `header-main` | header | `MainHeader` | Full navigation header |
| `header-checkout` | header | `CheckoutHeader` | Minimal checkout header |
| `footer-main` | footer | `MainFooter` | Full site footer |
| `footer-checkout` | footer | `CheckoutFooter` | Minimal checkout footer |
| `sidebar-shop` | uncategorized | `ShopSidebar` | Shop filter sidebar |

---

## Accessibility

- Use semantic HTML elements (`<header>`, `<footer>`, `<nav>`).
- Assign appropriate ARIA roles and labels (e.g., `<nav aria-label="Main navigation">`).
- Include skip links to allow users to bypass repeated content.
- Ensure keyboard navigation and screen reader accessibility.

---

## Related Components

- **Navigation block:** For menus within headers and footers.
- **Site Logo block:** Displays logo.
- **Site Title and Tagline blocks:** Show site name and tagline.

---

## Changelog

### v2.0 - 2026-02-22
- Merged with lowercase `template-part.md`, standardised naming convention
- Added template part registry table

### v1.0 - Initial
- Basic template part block specification
