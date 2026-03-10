# Accordion Block

<!-- Metadata -->
- **Slug:** `core/details`
- **Category:** Design
- **Introduced:** WordPress 6.1
- **React Path:** `/src/app/components/blocks/design/Accordion.tsx`
- **CSS Classes:** `.wp-block-details`, `.wp-block-accordion`

## Purpose

The Accordion block (also known as the Details block in WordPress) creates collapsible content panels that expand and collapse when clicked. It helps organize content into scannable sections, reducing information overload and allowing users to access only the content they need.

WordPress uses the native HTML `<details>` and `<summary>` elements for semantic structure and built-in browser accessibility.

## Design system requirements

### Typography
- **Summary/Trigger:** Use clear, descriptive text (16px-18px, medium weight)
- **Content:** Standard body text (14px-16px, normal weight)
- Apply WordPress typography tokens:
  - `--wp--preset--font-size--normal` for trigger text
  - `--wp--preset--font-size--small` for content text
  - `--wp--preset--font-weight--medium` for triggers
  - `--wp--preset--font-weight--normal` for content

### Colors
- **Trigger:** Use high-contrast foreground color (`--wp--preset--color--foreground`)
- **Content:** Use secondary text color (`--wp--preset--color--muted`)
- **Background:** Default surface color (`--wp--preset--color--surface`)
- **Border:** Subtle border (`--wp--preset--color--border`)
- **Hover/Active:** Accent color for interactive states (`--wp--preset--color--accent`)
- Ensure WCAG AA contrast ratios (4.5:1 minimum)

### Spacing
- **Trigger padding:** `--wp--preset--spacing--50` (24px) vertical, `--wp--preset--spacing--40` (16px) horizontal
- **Content padding:** `--wp--preset--spacing--40` horizontal, `--wp--preset--spacing--30` (12px) bottom
- **Item gap:** `--wp--preset--spacing--30` (12px) between accordion items
- **Minimum touch target:** 44px height for mobile accessibility

---

## Component structure (React)

```tsx
// Single AccordionItem
<AccordionItem 
  id="faq-1"
  summary="What is your return policy?"
  defaultOpen={false}
>
  <p>We offer 30-day returns on all items in original condition.</p>
</AccordionItem>

// Multiple AccordionItems
<Accordion type="single" collapsible>
  <AccordionItem 
    id="faq-1" 
    summary="What is your return policy?"
  >
    <p>We offer 30-day returns on all items.</p>
  </AccordionItem>
</Accordion>
```

---

## Usage guidelines

### Best practices

1. **Clear summary text:** Use descriptive, action-oriented summary text that explains what's inside
2. **Logical order:** Organize items by priority or logical sequence
3. **Default state:** Keep first item open if it contains important context
4. **Consistent behavior:** Use same expand/collapse icon across all items
5. **Keyboard support:** Ensure Enter and Space keys toggle expansion
6. **One vs. Multiple:** Use `type="single"` for FAQ-style content, `type="multiple"` for filters or settings

---

## Version history

- **v1.0** (January 2026) - Initial WordPress-aligned Accordion block
  - Single/multiple expansion modes
  - Full ARIA support
  - Dark mode support
  - CSS variable-based styling
  - Smooth animations
  - Keyboard navigation
  - WCAG 2.1 AA compliant
