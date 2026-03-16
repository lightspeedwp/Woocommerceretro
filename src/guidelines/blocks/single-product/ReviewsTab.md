# ReviewsTab Component

**Type:** Block  
**Category:** Single Product  
**Location:** `/src/app/components/blocks/single-product/ReviewsTab.tsx`  
**Status:** Complete

---

## Overview

**Purpose:** Displays customer product reviews with star ratings and provides a review submission form. Used within the ProductTabs component as the "Reviews" tab panel.

**Use Cases:**
- Display customer reviews on single product pages
- Allow authenticated customers to submit new reviews
- Show star ratings with verified purchase badges

**WordPress Alignment:** Maps to WooCommerce `woocommerce/product-reviews` block. Equivalent to the Reviews tab in WooCommerce single product template.

---

## Visual Reference

**States:**
- Default — Review list with single sample review + review form below
- Hover — Star buttons highlight on hover in rating selector
- Active — Selected stars filled with amber color
- Focus — Star buttons and form inputs receive focus ring

---

## Implementation

### File Location

```
/src/app/components/blocks/single-product/ReviewsTab.tsx
```

### Dependencies

```tsx
import { Star } from '@/utils/phosphor-compat';
import { Button } from '../design/Buttons';
import { Typography } from '../../common/Typography';
```

**Required:**
- `@/utils/phosphor-compat` — Star icon for ratings
- `../design/Buttons` — Submit button
- `../../common/Typography` — Heading and body text

---

## Props / API

### TypeScript Interface

```tsx
// No props — self-contained component with internal state
export const ReviewsTab = () => { ... }
```

The component currently accepts no props. It renders a hardcoded sample review and a review submission form with internal rating state.

**Future Enhancement:** Accept `reviews` array prop and `productId` for dynamic data.

---

## Usage Examples

### Basic Usage

```tsx
import { ReviewsTab } from '@/components/blocks/single-product/ReviewsTab';

function ProductPage() {
  return (
    <div className="wc-product-tabs__panel">
      <ReviewsTab />
    </div>
  );
}
```

### Within ProductTabs

```tsx
// ProductTabs renders ReviewsTab as the third tab panel
<ProductTabs product={product} />
// Internally: tab "Reviews" → <ReviewsTab />
```

---

## Styling

### CSS Classes (BEM)

**Root:**
```css
.wc-reviews { }
```

**Review List:**
```css
.wc-reviews__list { }
.wc-reviews__item { }
.wc-reviews__header { }
.wc-reviews__stars { }
.wc-reviews__title { }
.wc-reviews__body { }
.wc-reviews__meta { }
.wc-reviews__meta-author { }
```

**Review Form:**
```css
.wc-reviews__form { }
.wc-reviews__form-heading { }
.wc-reviews__form-notice { }
.wc-reviews__form-inner { }
.wc-reviews__form-group { }
.wc-reviews__form-label { }
.wc-reviews__form-stars { }
.wc-reviews__star-btn { }
.wc-reviews__form-textarea { }
.wc-reviews__form-input { }
.wc-reviews__form-grid { }
```

### WordPress CSS Variables Used

- `--wp--preset--color--foreground` — Text color
- `--wp--preset--color--background` — Form field backgrounds
- `--wp--preset--color--border` — Form field borders
- `--wp--preset--color--luminous-vivid-amber` — Filled star color
- `--wp--preset--color--neutral-300` / `--neutral-500` — Empty star color
- `--wp--preset--spacing--30` / `--spacing--40` — Section spacing

### CSS File Location

```
/src/styles/blocks/product/single-product-blocks.css
```

Shares styles with other single-product block components.

---

## Dark Mode Support

### Light Mode

- Review cards: paper background, ink text
- Stars: amber filled, gray-300 empty
- Form inputs: white background, gray border
- Meta text: muted foreground

### Dark Mode

- Review cards: dark panel, light text
- Stars: amber filled, neutral-500 empty (lighter gray)
- Form inputs: dark surface, subtle border
- Meta text: soft light text
- Star buttons: neon amber glow on hover

**Dark Mode Checklist:**
- [x] All backgrounds have dark variants (via CSS variables)
- [x] All text colors have dark variants
- [x] Star colors adapt (empty stars lighter in dark mode)
- [x] Form inputs adapt via global form styles
- [ ] Star button hover needs explicit dark mode glow effect

---

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast:**
- [x] Review text contrast ratio >= 4.5:1
- [x] Star amber color meets 3:1 against background
- [ ] Meta text "muted" color needs verification in dark mode

**Keyboard Navigation:**
- [x] Star rating buttons are focusable (`<button>` elements)
- [x] Form inputs are focusable
- [x] Submit button is focusable
- [ ] Star buttons lack `aria-label` attributes (improvement needed)

**ARIA Improvements Needed:**
```tsx
// Current: no aria-label
<button onClick={() => setRating(i)}>
  <Star />
</button>

// Recommended:
<button
  onClick={() => setRating(i)}
  aria-label={`Rate ${i} out of 5 stars`}
  aria-pressed={i <= rating}
>
  <Star />
</button>
```

**Screen Reader Support:**
- [ ] Star rating group needs `role="radiogroup"` with `aria-label="Rating"`
- [ ] Individual star buttons need `role="radio"` with `aria-checked`
- [ ] Form fields need explicit `htmlFor`/`id` label associations
- [ ] Verified badge should be `<span aria-label="Verified purchase">`

---

## Responsive Design

### Mobile (< 640px)

- Full-width review cards
- Stacked form fields (name/email vertical)
- Star buttons sized for 44x44px touch targets

### Tablet (640px - 1024px)

- Same as mobile but with more horizontal space

### Desktop (1024px+)

- Side-by-side name/email fields (`.wc-reviews__form-grid` 2-column)
- Review list with comfortable reading width

---

## State Management

### Internal State

```tsx
const [rating, setRating] = useState(0);
```

- `rating`: Current selected star count (0-5), 0 = none selected
- Reset on form submission (not currently implemented)

---

## Related Components

**Used By:**
- `ProductTabs` — Renders ReviewsTab as the "Reviews" tab panel

**Uses:**
- `Star` (from phosphor-compat) — Star icon rendering
- `Button` — Submit review button
- `Typography` — Heading and body text

---

## Best Practices

### Do's

- Use semantic form labels linked to inputs via `htmlFor`/`id`
- Provide keyboard-accessible star rating selection
- Show verified purchase badge for authenticated reviewers
- Validate form fields before submission

### Don'ts

- Don't hardcode review data — accept as props or fetch from context
- Don't skip form validation on the review textarea
- Don't use plain `<h3>` — use Typography component (already correct)
- Don't allow unrated submissions — require star selection

---

## Enhancement Roadmap

1. **Props Interface** — Accept `reviews[]` array and `productId` for dynamic data
2. **Pagination** — Add "Load more reviews" for products with many reviews
3. **Sorting** — Sort by newest, highest rated, most helpful
4. **Helpful Votes** — "Was this review helpful? Yes/No" interaction
5. **Photo Reviews** — Allow image uploads with reviews
6. **Review Summary** — Rating distribution chart (5-star histogram)
7. **Form Validation** — Required field validation with error messages
8. **Success State** — Confirmation message after submission

---

## Related Documentation

- **Main Guidelines:** `/guidelines/Guidelines.md`
- **Product Tabs:** `/guidelines/blocks/single-product/ProductTabs.md`
- **Product Rating:** `/guidelines/blocks/single-product/ProductRating.md`
- **Forms:** `/guidelines/blocks/forms/Input.md`
- **Feedback:** `/guidelines/blocks/feedback/Toast.md`

---

**Last Updated:** 2026-03-15  
**Status:** Complete  
**Lines:** ~220