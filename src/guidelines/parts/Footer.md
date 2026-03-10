# Footer / MainFooter Components

**Type**: Part (Global Region)  
**Location**: `/src/app/components/parts/Footer.tsx` (switcher), `/src/app/components/parts/MainFooter.tsx` (implementation)  
**Category**: Navigation  
**Version**: 2.6 (Funky Redesign — Phase 2)

---

## Purpose

The Footer is a global template part at the bottom of all pages. Provides secondary navigation, brand info, social links, newsletter signup, legal links, and payment badges.

`Footer.tsx` is a **smart switcher** — renders either `MainFooter` (default) or `CheckoutFooter` (for `/checkout` and `/order-confirmation` routes).

**Footer appears on:** All pages  
**Checkout flow:** Uses `CheckoutFooter` (minimal, conversion-optimized)

---

## Architecture

```
Footer (smart switcher)
  |-- if checkout route  → CheckoutFooter
  |-- else               → MainFooter
```

### MainFooter Composition

```
MainFooter
  |-- Gradient top divider (pseudo-element)
  |-- Background glow orbs (2x, decorative)
  |-- Container (common)
  |     |-- 4-column grid:
  |     |     |-- Col 1: ShopLogo + brand blurb + social icons
  |     |     |-- Col 2-3: Link columns (from footerColumns data)
  |     |     |-- Col 4: Newsletter signup form
  |     |-- Gradient bottom divider (pseudo-element)
  |     |-- Bottom bar:
  |           |-- Copyright text
  |           |-- Legal links (Privacy, Terms, Accessibility)
  |           |-- Payment badges (Visa, Mastercard, etc.)
```

---

## Data Sources

| Data | Import | File |
|------|--------|------|
| Footer columns | `footerColumns` | `@/data/footer` |
| Newsletter content | `footerNewsletter` | `@/data/footer` |
| Legal links | `footerLegalLinks` | `@/data/footer` |
| Brand blurb | `footerBrandBlurb` | `@/data/footer` |
| Brand info | `brand` | `@/data/site` |
| Social links | `socialLinks` | `@/data/site` |

---

## Funky Treatments

| Element | Treatment | CSS |
|---------|-----------|-----|
| Top divider | Animated gradient line (pink→cyan→transparent) | `parts-funky.css` |
| Glow orbs | 2x decorative blur(100px) circles (pink + cyan) | `parts-funky.css` |
| Section headings | Gradient underline accent (pink→cyan, 2rem) | `parts-funky.css` |
| Link hovers | `--funky-interactive-color`, cyan text-shadow in dark | `parts-funky.css` |
| Newsletter input | Neon cyan focus glow (10-14px shadow) | `parts-funky.css` |
| Newsletter button | Gradient bg (pink→cyan), brightness(1.1) hover | `parts-funky.css` |
| Social icons | Neon hover color | `parts-funky.css` |
| Bottom divider | Gradient line (cyan→transparent) | `parts-funky.css` |
| Legal link hovers | Neon hover + text-shadow | `parts-funky.css` |
| Dark mode | Surface bg, rgba text, glow orb intensity up | `parts-funky.css` |

**CSS Files:**
- Base: `/src/styles/blocks/layout/footer.css`
- Funky: `/src/styles/blocks/theme/parts-funky.css`

---

## Social Icons Map

```tsx
const iconMap: Record<string, any> = {
  'Facebook': Facebook,
  'Instagram': Instagram,
  'Twitter': Twitter,
  'Linkedin': Linkedin,
  'Youtube': Youtube,
  'Pin': Pin
};
```

---

## Accessibility

- Semantic `<footer>` element
- Link columns use heading hierarchy (h3 for column titles)
- Social icon links have `aria-label` for each platform
- Newsletter form has proper label association
- Focus-visible states with neon outline on all links
- 44x44px minimum touch targets on social icons
- Legal links are properly labelled

---

## Dark Mode

Handled via CSS variables:
- Footer background shifts to surface color
- Glow orbs increase intensity slightly
- Text uses rgba white values for contrast
- Newsletter input adapts borders and bg
- All text meets WCAG AA contrast

---

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (<640px) | Single column, stacked layout, full-width newsletter |
| Tablet (640-768px) | 2-column grid |
| Desktop (>=768px) | 4-column grid |

---

## Related Components

- `CheckoutFooter` — Minimal footer for checkout flow
- `Layout` — Parent wrapper that renders Footer
- `Header` — Companion global part (header switcher)

---

**Last Updated:** February 2026  
**Status:** ✅ Production Ready (Funky Redesign Complete)
