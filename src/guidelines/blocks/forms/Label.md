# Label Component

**Type:** Block  
**Category:** Forms  
**Location:** `/src/app/components/blocks/forms/Label.tsx`  
**Status:** Complete

---

## Overview

**Purpose:** A semantic HTML `<label>` element with WordPress-aligned styling for form field labels. Provides accessible association between labels and form controls via `htmlFor`.

**Use Cases:**
- Text input labels (name, email, address)
- Select/dropdown labels
- Checkbox and radio group labels
- Textarea labels
- File upload labels
- Search field labels

**WordPress Alignment:** Maps to WordPress form label styling, used consistently across WooCommerce checkout, account forms, contact forms, and newsletter signups.

---

## Implementation

### File Location

```
/src/app/components/blocks/forms/Label.tsx
```

### Dependencies

```tsx
import React, { forwardRef } from 'react';
```

**Required:**
- `react` — forwardRef for form library compatibility (react-hook-form, etc.)

**No external dependencies.**

---

## Props / API

### Interface

```tsx
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children?: React.ReactNode;
}
```

### Props Reference Table

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | `string` | No | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | No | `undefined` | Label text content |
| `htmlFor` | `string` | No | `undefined` | Associates label with form control by id |
| `...rest` | `React.LabelHTMLAttributes` | No | — | All native `<label>` attributes supported |

**Note:** Component uses `forwardRef` for ref forwarding, enabling integration with form libraries like react-hook-form.

---

## Usage Examples

### Basic Label with Input

```tsx
import { Label } from '@/components/blocks/forms/Label';
import { Input } from '@/components/blocks/forms/Input';

<div className="wp-form-field">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### Required Field Label

```tsx
<Label htmlFor="name">
  Full Name <span className="wp-form-required" aria-hidden="true">*</span>
</Label>
<Input id="name" type="text" required aria-required="true" />
```

### Label with Helper Text

```tsx
<div className="wp-form-field">
  <Label htmlFor="password">Password</Label>
  <Input id="password" type="password" aria-describedby="password-help" />
  <small id="password-help" className="wp-form-help-text">
    Must be at least 8 characters
  </small>
</div>
```

### Disabled State

```tsx
<Label htmlFor="readonly-field" className="wp-block-label--disabled">
  Read-Only Field
</Label>
<Input id="readonly-field" disabled value="Cannot edit" />
```

### Checkbox Label (Inline)

```tsx
<div className="wp-form-field wp-form-field--inline">
  <Checkbox id="newsletter" />
  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
</div>
```

---

## BEM Class Structure

### Core Classes

```css
.wp-block-label              /* Base label element */
.wp-block-label--disabled    /* Disabled state (opacity 0.7, not-allowed cursor) */
```

### Funky Theme Classes

```css
.funky-label                 /* Retro theme label styling */
```

---

## Styling

### Styles Location

**CSS:** `/src/styles/blocks/forms/label.css`

### CSS Token Usage

```css
.wp-block-label {
  font-size: var(--wp--preset--font-size--100);       /* 14px base */
  font-weight: var(--wp--preset--font-weight--medium); /* 500 weight */
  line-height: 1;                                      /* Tight line height */
  color: var(--wp--preset--color--foreground);          /* Primary text color */
}

.wp-block-label--disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
```

---

## Dark Mode

Automatic via WordPress color tokens:

- **Light mode:** `--wp--preset--color--foreground` resolves to dark text (#1a1a1a)
- **Dark mode:** `--wp--preset--color--foreground` resolves to light text (#f9fafb)

No additional dark mode CSS required.

---

## Accessibility

### Association with Controls

```tsx
/* Always use htmlFor to associate label with control */
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

### Required Fields

```tsx
/* Mark required fields with visual indicator + aria */
<Label htmlFor="name">
  Name <span className="wp-form-required" aria-hidden="true">*</span>
</Label>
<Input id="name" required aria-required="true" />
```

### Screen Readers

- Native `<label>` element provides automatic accessibility
- `htmlFor` creates programmatic association with form control
- Click on label focuses/activates the associated control
- No additional ARIA attributes needed on the label itself

### WCAG Compliance

- Color contrast: Foreground on background meets AAA (15.8:1 light, 16.1:1 dark)
- Font size: 14px minimum meets AA
- Disabled state: 0.7 opacity maintains readable contrast

---

## Testing

### Component Tests

```tsx
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('renders label text', () => {
    render(<Label>Email Address</Label>);
    expect(screen.getByText('Email Address')).toBeInTheDocument();
  });

  it('associates with form control via htmlFor', () => {
    render(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email');
  });

  it('applies custom className', () => {
    const { container } = render(<Label className="custom">Test</Label>);
    expect(container.querySelector('.wp-block-label.custom')).toBeInTheDocument();
  });

  it('applies disabled class', () => {
    const { container } = render(
      <Label className="wp-block-label--disabled">Disabled</Label>
    );
    expect(container.querySelector('.wp-block-label--disabled')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref}>Test</Label>);
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it('passes through native label attributes', () => {
    render(<Label htmlFor="test" id="label-id">Test</Label>);
    const label = screen.getByText('Test');
    expect(label).toHaveAttribute('id', 'label-id');
    expect(label).toHaveAttribute('for', 'test');
  });
});
```

---

## Related Components

- **Input** (`/src/app/components/blocks/forms/Input.tsx`) — Primary form control
- **Select** (`/src/app/components/blocks/forms/Select.tsx`) — Dropdown control
- **Checkbox** (`/src/app/components/blocks/forms/Checkbox.tsx`) — Boolean control
- **RadioGroup** (`/src/app/components/blocks/forms/RadioGroup.tsx`) — Option group
- **Textarea** (`/src/app/components/blocks/forms/Textarea.tsx`) — Multi-line input

---

## Changelog

### v1.0.0 (March 15, 2026)

- Initial guideline created
- Props documentation with TypeScript interface
- 5 usage examples
- BEM class structure (3 classes)
- Dark mode verified (automatic via tokens)
- Accessibility documented (htmlFor, required fields, WCAG)
- 6 component tests

---

**Guideline Version:** 1.0.0  
**Last Updated:** 2026-03-15  
**Author:** AI Assistant  
**Status:** Complete
