# Site Logo Block

**Type:** Block  
**Slug:** `core/site-logo`  
**Category:** Theme  
**Introduced:** WordPress 5.9 (for block themes)  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Site Logo block displays a graphical representation of your site's identity -- typically your company logo. It is part of the theme block library and ensures that the logo is managed centrally; updating it in one place updates it across the entire site.

---

## WordPress Context

The Site Logo block appears under the **Theme** category and is intended for use in templates such as headers or footers. In the block toolbar, you can upload a logo, replace it, and adjust alignment (left, center, right). The sidebar settings allow you to set the width, apply cropping and toggle the option to link the logo to the home page. The block supports duotone filters and can inherit colours from the theme palette.

---

## Design System Requirements

- **Logo source:** Use a high-resolution SVG or PNG file. Prefer SVG for scalability.
- **Sizing:** Set a fixed width for the logo (e.g., 120-200 px). Provide responsive rules to scale down on small screens.
- **Padding & margins:** Use spacing tokens to define appropriate padding within header or footer layouts.
- **Colours & filters:** Define alternate logo versions for light/dark themes. Ensure contrast with the background.
- **Link behaviour:** Typically links to the home page. Use accessible `aria-label` such as `Home` for the link.

---

## Component Structure (React)

```tsx
<SiteLogo 
  src="/assets/logo.svg" 
  alt="Woo Shop Logo" 
  width="150px" 
  linkHref="/" 
  linkLabel="Home" 
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL. |
| `alt` | `string` | - | Alternative text describing the logo. |
| `width` | `string` | `auto` | Width of the logo. |
| `linkHref` | `string` | `/` | URL to link the logo to. |
| `linkLabel` | `string` | `Home` | ARIA label for the link. |
| `className` | `string` | - | Additional CSS classes. |

---

## Accessibility

- Provide meaningful alternative text describing the logo.
- Ensure the link has an appropriate accessible name (`aria-label="Home"`).
- Consider adding visually hidden text for screen readers if the logo does not contain text.

---

## Dark Mode

Provide alternate logo variants for light and dark themes. The `ShopLogo` component accepts a `variant` prop:
- `variant="current"` - Uses the current theme mode logo automatically

---

## Related Components

- **Site Title block:** Displays the site name text.
- **Navigation block:** For menus placed alongside the logo in headers.
- **Site Tagline block:** Displays a brief description or slogan.

---

## Changelog

### v2.0 - 2026-02-22
- Merged with lowercase `site-logo.md`, standardised naming convention
- Added dark mode variant documentation

### v1.0 - Initial
- Basic site logo block specification
