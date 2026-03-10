# PageContact Template

**Category**: Templates  
**Route**: `/contact`  
**WordPress**: `page-contact.html`  
**Version**: 2.6 (Funky Redesign)

---

## Purpose

Contact page with a message form and business details. Enables customers to reach support via email, phone, or the contact form. Uses the shared `info-*` BEM pattern.

---

## Structure

```
Layout (Part)
  |-- Hero Section (info-hero--purple)
  |     |-- Background image (Unsplash)
  |     |-- Purple-tinted overlay
  |     |-- Glass badge ("Support" + Headphones icon)
  |     |-- Title (h1): "Contact Us"
  |     |-- Subtitle (p)
  |     |-- 2x floating orbs (funky-orb)
  |-- Gradient Divider
  |-- Contact Form + Info Section (info-contact)
  |     |-- 2-column layout:
  |     |     |-- Left: Contact Form (info-contact__form)
  |     |     |     |-- Name input
  |     |     |     |-- Email input
  |     |     |     |-- Subject input
  |     |     |     |-- Message textarea
  |     |     |     |-- Submit button
  |     |     |-- Right: Detail Cards (info-contact__details)
  |     |           |-- Email card (Mail icon)
  |     |           |-- Phone card (Phone icon)
  |     |           |-- Address card (MapPin icon)
  |     |           |-- Hours card (Clock icon)
  |-- Gradient Divider
  |-- CTA Section (info-cta)
        |-- Heading: "Need Immediate Help?"
        |-- Description text
        |-- Primary CTA: "Browse FAQ" -> /faq
        |-- Secondary CTA: "Live Chat" -> /chat
        |-- 2x floating orbs
```

---

## Data Sources

| Data | Import | File |
|------|--------|------|
| Contact info | `contactInfo` | `@/data/contact` |
| Contact FAQs | `contactFAQs` | `@/data/contact` |

---

## Funky Treatments

| Element | Treatment | CSS Class |
|---------|-----------|-----------|
| Hero | Purple-tinted overlay, glass badge, floating orbs | `.info-hero--purple`, `.funky-glass-panel` |
| Form inputs | Neon cyan focus ring with glow shadow | `.info-contact__input:focus` |
| Submit button | Gradient background (pink-to-cyan) | `.info-contact__submit` |
| Detail cards | Glass panel with glow border, neon icon circles | `.info-contact__detail-card` |
| CTA section | Floating orbs, dual CTA buttons | `.info-cta__btn--primary`, `--secondary` |

**CSS File:** `/src/styles/sections/info-pages-funky.css`

---

## Form Behavior

- Form uses `onSubmit={e => e.preventDefault()}` (prototype — no backend)
- All inputs use BEM classes: `.info-contact__input`, `.info-contact__textarea`
- Labels wrap their inputs for implicit association
- Submit button styled as gradient neon CTA

---

## Accessibility

- All form inputs have associated labels (wrapped)
- Proper heading hierarchy: h1 -> h2 -> h3 (detail card titles)
- Phone and email links use proper `href` (`tel:`, `mailto:`)
- Focus-visible states with neon outline on all interactive elements
- 44x44px minimum touch targets on all inputs and buttons
- Decorative orbs hidden from assistive technology

---

## Dark Mode

Handled via CSS variables:
- Purple overlay shifts to deeper tones
- Form inputs use surface background with lighter border
- Detail cards maintain glass effect with adjusted opacity
- All text meets WCAG AA contrast ratios

---

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (<768px) | Single column, form stacks above detail cards |
| Tablet (768-1024px) | 2-column layout begins |
| Desktop (>1024px) | Side-by-side form + detail cards |

---

## Related Templates

- `PageFAQ` — Frequently asked questions (linked from CTA)
- `PageChat` — Live chat support (linked from CTA)
- `PageHelpCenter` — Help documentation hub
