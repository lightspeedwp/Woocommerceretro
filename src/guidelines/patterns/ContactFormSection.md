# ContactFormSection Pattern

**Version:** 2.0
**Type:** Pattern (Contact Form)
**WordPress Mapping:** Contact Form 7 / WPForms Block
**File:** `/src/app/components/patterns/ContactFormSection.tsx`
**CSS:** `/src/styles/sections/contact-form.css`
**BEM:** `.wc-contact-form__*`

---

## Overview

Comprehensive contact form with validation, spam protection, and success/error handling. Used on the contact page and support sections.

---

## Component structure

```
ContactFormSection (Pattern)
├── Form header (title, description)
├── Form fields
│   ├── Name input
│   ├── Email input
│   ├── Subject select
│   ├── Message textarea
│   └── Phone input (optional)
├── Privacy checkbox
├── Submit button
└── Status message (success / error)
```

---

## BEM class map

| Element | Class | Purpose |
|---------|-------|---------|
| Root | `.wc-contact-form` | Form section wrapper |
| Header | `.wc-contact-form__header` | Title + description |
| Field | `.wc-contact-form__field` | Input group |
| Label | `.wc-contact-form__label` | Field label |
| Input | `.wc-contact-form__input` | Text / email input |
| Select | `.wc-contact-form__select` | Subject dropdown |
| Textarea | `.wc-contact-form__textarea` | Message area |
| Error | `.wc-contact-form__error` | Validation message |
| Submit | `.wc-contact-form__submit` | Submit button |
| Status | `.wc-contact-form__status` | Success/error banner |

### Modifiers

| Modifier | Purpose |
|----------|---------|
| `.wc-contact-form__field--error` | Field with validation error |
| `.wc-contact-form__status--success` | Green success state |
| `.wc-contact-form__status--error` | Red error state |

---

## Retro / funky spec

- Glass form container with `backdrop-filter: blur(12px)`
- Neon focus ring on inputs (`box-shadow: 0 0 8px var(--color-signal)`)
- Glow submit button
- Pixel-font success message
- Spring animation on status message appearance
- BEM prefix: `.wc-contact-form__*`

---

## Accessibility

- `aria-label="Contact form"` on `<form>`
- `aria-required="true"` on required fields
- `aria-describedby` linking inputs to error messages
- Error messages use `role="alert"`
- Submit button shows loading state with `aria-busy="true"`
- 44x44px minimum touch targets

---

## Data source

- `/src/app/data/contact.ts`

---

## Used in

- `PageContact`
- Support sections (optional)

---

## Related

- [NewsletterSignup](/guidelines/patterns/NewsletterSignup.md) -- email subscription variant
- [FAQSection](/guidelines/patterns/FAQSection.md) -- often paired on contact page

---

**Version:** 2.0 (March 2026) -- Migrated from `/guidelines/components/`, updated BEM, retro spec added.
