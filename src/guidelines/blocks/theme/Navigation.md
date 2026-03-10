# Navigation Block

**Type:** Block  
**Slug:** `core/navigation`  
**Category:** Theme  
**Introduced:** WordPress 5.9 (for block themes)  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Navigation block displays a menu that helps visitors move around your website. It can contain links to pages, posts, categories, or custom URLs and is typically placed in header or footer templates. WordPress documentation notes that the navigation block displays the site's menu and is often added to header or footer templates; if no custom menu exists, a Page List block will automatically populate the menu.

---

## WordPress Context

The Navigation block resides in the **Theme** category. When inserted, it may automatically display a menu structure based on existing navigation menus or pages. The block toolbar provides controls to transform the block, align it (left, center, right), open the menu in responsive (mobile) view, adjust orientation (horizontal or vertical) and set the menu's justification (space-between, center, etc.). The sidebar offers controls for selecting an existing menu, creating a new menu or using a Page List; adjusting the layout (horizontal/vertical), spacing between items, typography, colours, border settings and responsive behaviour.

Child blocks include **Custom Link**, **Home Link**, **Submenu** and **Social Icons**.

---

## Design System Requirements

- **Layout & orientation:** Use horizontal orientation for desktop navigation and vertical (stacked or collapsed) orientation for mobile. Use a Row or Stack block to wrap the Navigation block and align it with the logo and site title in the header.
- **Spacing:** Define consistent spacing between menu items using spacing tokens (e.g., `--wp--preset--spacing--sm`). Provide adequate padding around the navigation area.
- **Typography:** Use a clear, legible font for navigation items. Apply appropriate letter spacing and case. Use tokens like `--wp--preset--font-size--sm` or `--wp--preset--font-size--md` for menu text.
- **Colours & states:** Define colours for normal, hover, active and focus states. Provide a high contrast ratio for accessibility.
- **Responsive behaviour:** Implement a mobile menu (hamburger icon) that toggles visibility. Provide clear affordances and accessible labels (e.g., `aria-label="Toggle navigation"`).
- **Link hierarchy:** Use submenus to group related links. Limit depth of nested submenus. Provide visual indicators (e.g., arrows) for expandable items.

---

## Component Structure (React)

```tsx
<Navigation 
  menu={primaryMenu} 
  orientation="horizontal" 
  spacing="lg"
  align="center"
  showMobileToggle={false}
  enableMegaMenus={true}
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menu` | `MenuItem[]` | - | Array of menu items with `id`, `title`, `url` and optional `megaMenu`. |
| `orientation` | `string` | `horizontal` | Layout orientation (`horizontal` or `vertical`). |
| `spacing` | `string` | theme spacing token | Space between menu items. |
| `align` | `string` | `flex-start` | Alignment of the menu (`center`, `space-between`). |
| `showMobileToggle` | `boolean` | `true` | Whether to show the hamburger menu toggle. |
| `enableMegaMenus` | `boolean` | `false` | Whether to enable mega menu dropdowns. |
| `className` | `string` | - | Additional CSS classes. |

---

## Accessibility

- Provide meaningful link text for each menu item. Avoid using icons alone without labels.
- Implement keyboard navigation: arrow keys should move focus among menu items, Enter/Space should expand submenus.
- Use appropriate ARIA roles and states (`aria-haspopup`, `aria-expanded`).
- Ensure adequate colour contrast for text and focus indicators.
- Follow WAI-ARIA Authoring Practices for menu design.

---

## Related Components

- **Site Logo block:** Often placed next to navigation in headers.
- **Site Title block:** Typically adjacent to navigation.
- **Page List block:** Automatically populates navigation when no custom menu is defined.
- **MobileMenu:** Full-screen mobile navigation overlay.

---

## Changelog

### v2.0 - 2026-02-22
- Merged with lowercase `navigation.md`, standardised naming convention
- Added mega menu support documentation

### v1.0 - Initial
- Basic navigation block specification
