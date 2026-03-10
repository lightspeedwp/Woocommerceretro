# Site Tagline Block

**Type:** Block  
**Slug:** `core/site-tagline`  
**Category:** Theme  
**Introduced:** WordPress 5.9  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Site Tagline block displays a short description or slogan associated with your website. It pulls the tagline from WordPress settings and updates it globally when edited.

---

## Component Structure (React)

```tsx
<SiteTagline tag="p" linkHref="/" linkLabel="Home">
  Fast, scalable WordPress solutions
</SiteTagline>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tag` | `string` | `p` | HTML tag used (`p`, `span`). |
| `children` | `string` | - | Tagline text. |
| `linkHref` | `string` | `/` | URL to link the tagline to (optional). |
| `linkLabel` | `string` | `Home` | ARIA label if linked. |
| `className` | `string` | - | Additional CSS classes. |

---

## Design System Requirements

- **Typography:** Use a smaller type style than the site title. Tokens: `--wp--preset--font-size--sm` or `--wp--preset--font-size--md`.
- **Colour:** Complementary to the site title. Use neutral or secondary palette tokens.
- **Spacing:** Adequate spacing between tagline and other header elements.

---

## Accessibility

- Provide sufficient colour contrast between the tagline and background.
- Use semantic tags (`<p>` or `<span>`).
- If linking, include accessible label describing the destination.

---

## Related Components

- **Site Title block:** Displays the site name.
- **Site Logo block:** Shows the graphical logo.
- **Navigation block:** For primary menus.

---

## Changelog

### v2.0 - 2026-02-22
- Migrated from lowercase `site-tagline.md`, standardised naming convention
