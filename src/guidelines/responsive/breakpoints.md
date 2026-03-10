# Breakpoint System Guidelines

**Component Type:** Responsive Pattern
**Scope:** Cross-Device Layout System
**Related:** [/guidelines/responsive/layouts.md], [/guidelines/mobile/spacing.md]

---

## Overview

This document defines the breakpoint system for the WooCommerce prototype. The system uses a **mobile-first approach** where base styles target small screens, and media queries progressively enhance layouts for larger viewports.

**Philosophy:** Design for the smallest screen first, then enhance for larger screens. This ensures a solid foundation on mobile devices while leveraging desktop capabilities when available.

---

## Breakpoint Values

### Standard Breakpoints

These breakpoints align with standard device widths and standard WordPress practices.

| Breakpoint | Min Width | Target Devices | CSS Variable |
|------------|-----------|----------------|--------------|
| **Mobile** | 0px | Phones (Portrait) | *Default (no query)* |
| **sm** | 640px | Phones (Landscape) | `--wp--custom--breakpoints--sm` |
| **md** | 768px | Tablets (Portrait) | `--wp--custom--breakpoints--md` |
| **lg** | 1024px | Tablets (Landscape), Laptops | `--wp--custom--breakpoints--lg` |
| **xl** | 1280px | Desktops | `--wp--custom--breakpoints--xl` |
| **2xl** | 1536px | Large Screens | `--wp--custom--breakpoints--2xl` |

### CSS Media Query Format

Use standard CSS media queries. Avoid `max-width` queries to strictly enforce mobile-first design.

```css
/* Mobile-first (default styles) */
.container {
  padding: 1rem;
}

/* Small screens and up (640px+) */
@media (min-width: 640px) {
  .container {
    padding: 1.5rem;
  }
}

/* Medium screens and up (768px+) */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Large screens and up (1024px+) */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

---

## Mobile-First Strategy

### Implementation Pattern

```css
/* ❌ WRONG - Desktop-first */
.navigation {
  display: flex;
  gap: 2rem;
}

@media (max-width: 1023px) {
  .navigation {
    display: none; /* Hiding on mobile is inefficient */
  }
}

/* ✅ CORRECT - Mobile-first */
.navigation {
  display: none; /* Hidden by default (mobile) */
}

@media (min-width: 1024px) {
  .navigation {
    display: flex; /* Show on desktop */
    gap: 2rem;
  }
}
```

---

## Breakpoint Usage Patterns

### 1. Layout Grid

**Pattern:** Single column on mobile, multi-column on larger screens.

```css
.wp-block-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 column on mobile */
  gap: var(--wp--preset--spacing--40);
}

@media (min-width: 640px) {
  .wp-block-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
  }
}

@media (min-width: 1024px) {
  .wp-block-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on desktop */
  }
}
```

### 2. Container Widths

**Pattern:** Full width on mobile, constrained on desktop.

```css
.container {
  width: 100%;
  padding-inline: var(--wp--preset--spacing--20);
}

@media (min-width: 1024px) {
  .container {
    max-width: var(--wp--preset--layout--wide-size); /* 1200px */
    margin-inline: auto;
    padding-inline: var(--wp--preset--spacing--40);
  }
}
```

---

## WordPress theme.json Integration

Define breakpoints in `theme.json` to generate CSS variables.

```json
{
  "settings": {
    "custom": {
      "breakpoints": {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      }
    }
  }
}
```

### Access in CSS

You can use these variables in your media queries (via PostCSS or native CSS nesting if supported, though standard `@media` usually requires raw values or preprocessor variables. For now, we stick to standard values in our CSS to ensure compatibility).

*Note: CSS variables cannot be used directly in media query definitions (e.g. `@media (min-width: var(--...))`) in standard CSS. We use the raw pixel values 640px, 768px, etc. in our stylesheets to match the design tokens.*

---

## Testing Breakpoints

### Responsive Testing Checklist

Test at these exact widths:

- [ ] 320px (Smallest phone)
- [ ] 375px (iPhone SE)
- [ ] 768px (Tablet Portrait)
- [ ] 1024px (Tablet Landscape / Laptop)
- [ ] 1440px (Desktop)

---

**Version:** 2.0 (WordPress Aligned)
**Last Updated:** February 3, 2026
