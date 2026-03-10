# Site Title Block

**Type:** Block  
**Slug:** `core/site-title`  
**Category:** Theme  
**Introduced:** WordPress 5.9  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Site Title block displays the name of your website. It retrieves the site title from WordPress settings and renders it wherever the block is placed. Editing the text within the block updates the site's name globally.

---

## Component Structure (React)

```tsx
<SiteTitle tag="h1" linkHref="/" linkLabel="Home">
  WooShop
</SiteTitle>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tag` | `string` | `h1` | HTML tag used to render the title (`h1`-`h6` or `p`). |
| `children` | `string` | - | The site title text. |
| `linkHref` | `string` | `/` | URL to link the title to. |
| `linkLabel` | `string` | `Home` | ARIA label for the link. |
| `className` | `string` | - | Additional CSS classes. |

---

## Design System Requirements

- **Typography:** Use Title or Display style. Tokens: `--wp--preset--font-size--xl` or `--wp--preset--font-size--lg`.
- **Colour:** Contrast against header background. Use `--wp--preset--color--primary` or `--wp--preset--color--contrast`.
- **Heading hierarchy:** Render as H1 on homepage, demote to H2/H3 on subpages.
- **Link behaviour:** Link to home page with accessible `aria-label`.

---

## Accessibility

- Ensure sufficient colour contrast against background.
- Provide meaningful `aria-label` for the link.
- Use semantic heading levels reflecting document structure.

---

## Related Components

- **Site Logo block:** For graphical brand representation.
- **Navigation block:** For menus adjacent to the site title.
- **Site Tagline block:** Displays the site's tagline or slogan.

---

## Changelog

### v2.0 - 2026-02-22
- Migrated from lowercase `site-title.md`, standardised naming convention
