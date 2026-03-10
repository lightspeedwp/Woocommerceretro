# Spacer Block

**Type:** Block  
**Slug:** `core/spacer`  
**Category:** Design  
**Status:** Complete  
**Last Updated:** 2026-02-22

---

## Purpose

The Spacer block adds empty vertical space between blocks. Use it to create visual breathing room in layouts where block gap alone is insufficient.

---

## WordPress Context

```html
<!-- wp:spacer {"height":"100px"} -->
<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->
```

---

## CSS

```css
.wp-block-spacer {
  clear: both;
}
```

---

## Usage Guidelines

1. **Prefer block gap over Spacer.** Use `--wp--style--block-gap` or spacing tokens before adding a Spacer.
2. **Use sparingly.** Too many Spacers indicate the layout needs restructuring.
3. **Responsive height.** Use `clamp()` for responsive spacing: `clamp(2rem, 5vw, 6rem)`.
4. **Accessibility.** Always include `aria-hidden="true"` as the spacer is decorative.

---

## Related Components

- **Separator block:** For visual dividers (horizontal rules).
- **Group block:** For sections with padding.

---

## Changelog

### v2.0 - 2026-02-22
- Migrated from lowercase `spacer.md`, standardised naming convention
- Added usage guidelines and responsive height recommendation
