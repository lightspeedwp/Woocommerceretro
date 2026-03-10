# CheckoutFooter Component

**Type**: Part (Checkout Region)  
**Location**: `/src/app/components/parts/CheckoutFooter.tsx`  
**Category**: Commerce / Checkout  
**Version**: 2.6 (Funky Redesign — Phase 5)

---

## Purpose

Minimal, distraction-free footer for the checkout flow. Reduces cognitive load by showing only essential legal links and payment trust badges. Conversion-optimized — no navigation, no newsletter, no social links.

**Used on:** `/checkout`, `/order-confirmation` (via Footer smart switcher)

---

## Component Structure

```
<footer .wp-checkout-footer>
  |-- Container (variant="site")
        |-- Inner wrapper
              |-- Copyright text
              |-- Legal links (3)
              |     |-- Privacy Policy → /legal/privacy
              |     |-- Terms & Conditions → /legal/terms
              |     |-- Returns Policy → /shipping-returns
              |-- Payment badges (3)
                    |-- Visa
                    |-- Mastercard
                    |-- Secure SSL
```

---

## BEM Classes

| Element | Class |
|---------|-------|
| Footer | `.wp-checkout-footer` |
| Inner | `.wp-checkout-footer__inner` |
| Copyright | `.wp-checkout-footer__copyright` |
| Links container | `.wp-checkout-footer__links` |
| Link | `.wp-checkout-footer__link` |
| Badges container | `.wp-checkout-footer__badges` |
| Badge | `.wp-checkout-footer__badge` |

---

## Funky Treatments

**MINIMAL** — checkout pages prioritise conversion over decoration.

| Element | Treatment | CSS |
|---------|-----------|-----|
| Payment badges | Subtle `funky-card-glow` on each badge | shared funky utility |

No floating orbs, no gradient dividers, no neon animations.

---

## Accessibility

- Semantic `<footer>` element
- All links use React Router `<Link>` for internal navigation
- Focus-visible states on all links
- Payment badges are decorative text labels
- Sufficient contrast in both light and dark modes

---

## Dark Mode

Handled via CSS variables:
- Background adapts to surface color
- Text and links adapt to light foreground
- Badge borders adjust for dark backgrounds

---

## Related Components

- `Footer` — Smart switcher parent (renders CheckoutFooter on checkout routes)
- `MainFooter` — Full footer (rendered on all other routes)
- `CheckoutHeader` — Companion minimal header for checkout
- `CheckoutLayout` — Checkout page wrapper
