# CSS Cleanup & Optimization Guidelines

**Version:** 1.0  
**Date:** 2026-03-05  
**Scope:** All LightSpeed GitHub repositories (WooCommerce, LSX Design, ASH Makeup, etc.)  
**Purpose:** Unified CSS architecture for WordPress/WooCommerce alignment, accessibility, and memory optimization

---

## Executive Summary

These guidelines provide a unified approach for cleaning up and optimizing CSS across all LightSpeed repositories. They ensure every project uses a consistent, token-driven architecture that supports light/dark mode, meets WCAG 2.1 AA/AAA accessibility requirements, and aligns with WordPress's theme.json philosophy. They also replace Tailwind utility classes with semantically named BEM styles and minimize direct margin usage.

**Key Benefits:**
- ✅ Reduced CSS file sizes (10-50% smaller bundles)
- ✅ Improved Figma Make compatibility (no memory leaks from redundant CSS)
- ✅ Consistent theming (light/dark mode via CSS variables)
- ✅ Better maintainability (BEM naming, modular files)
- ✅ WCAG 2.1 AA/AAA compliance by design

---

## Key Principles

### 1. Token-First Architecture

Define a small set of raw design tokens (color palette, spacing scale, typography scale, radii, shadows, borders, and z-index) in a dedicated `tokens/` directory. WordPress's theme.json demonstrates how presets for colors and font sizes are converted into CSS custom properties[[1]](https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/#:~:text=Instead%20of%20the%20proliferation%20of,These%20settings%20includes%20things%20like), so follow a similar pattern:

- Publish all tokens as CSS variables (e.g., `--space-sm`, `--radius-md`, `--color-surface-1`)
- Build semantic tokens on top of these raw tokens (e.g., `--color-text-primary`, `--surface-card`)

**Example:**
```css
/* tokens/core.css - Raw tokens */
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  
  --color-gray-50: #f9fafb;
  --color-gray-900: #111827;
  --color-purple-600: #7c3aed;
}

/* tokens/semantic.css - Semantic tokens */
:root {
  --color-text-primary: var(--color-gray-900);
  --color-surface-1: var(--color-gray-50);
  --surface-card: var(--color-gray-50);
}
```

### 2. Accessibility by Design

Every color combination used for text and interface elements must satisfy WCAG 2.1 contrast ratios:

- **Level AA:** At least **4.5:1** for normal text, **3:1** for large text
- **Level AAA:** At least **7:1** for normal text, **4.5:1** for large text[[2]](https://www.w3.org/TR/WCAG21/#:~:text=The%20visual%20presentation%20of%20text,5%3A1%2C%20except%20for%20the%20following)

**Requirements:**
- Provide focus indicators via visible outlines
- Honor the user's reduced-motion preference
- Never rely on color alone to convey state
- Ensure all interactive elements have sufficient touch target size (44x44px minimum)

### 3. Light/Dark Mode Support

Define theme variables for both light and dark modes. Use a single theming mechanism (e.g., `[data-theme="dark"]` on `<html>` or the system `prefers-color-scheme` media query) and define overrides for the semantic tokens.

**Example:**
```css
/* tokens/themes.css - Light mode (default) */
:root {
  --color-bg: #ffffff;
  --color-text-primary: #1a1a1a;
  --color-border: #e5e7eb;
}

/* Dark mode overrides */
[data-theme="dark"] {
  --color-bg: #0f0f0f;
  --color-text-primary: #f9fafb;
  --color-border: #374151;
}
```

**Critical:** Avoid hard-coded colors; always reference semantic tokens which resolve to different values under different themes.

### 4. No Tailwind Utility Classes in Markup

Tailwind may remain as a build tool or a wrapper for importing other files, but all utility classes such as `bg-gray-100`, `p-4`, or `grid-cols-2` must be removed from markup. Replace them with BEM-styled class names and token-driven CSS declarations.

**If Tailwind is retained**, use its `@layer` directive to inject custom base and component styles into the correct layers[[3]](https://css-tricks.com/using-css-cascade-layers-to-manage-custom-styles-in-a-tailwind-project/#:~:text=For%20example%2C%20to%20append%20your,you%20would%20do%20the%20following).

**Migration example:**
```tsx
// ❌ BEFORE (Tailwind utilities)
<div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    Title
  </h3>
</div>

// ✅ AFTER (BEM + tokens)
<div className="c-card">
  <h3 className="c-card__title">Title</h3>
</div>
```

```css
/* components/c-card.css */
.c-card {
  background: var(--color-surface-1);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.c-card__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
}
```

### 5. Adopt BEM Naming

Use the Block-Element-Modifier (BEM) methodology for all component and section styles:

- **Blocks** represent self-contained components (e.g., `.c-card`)
- **Elements** describe parts of the block (e.g., `.c-card__header`)
- **Modifiers** represent variations (e.g., `.c-card--featured`)

**Recommended prefixes:**
- `c-` for components
- `l-` for layout utilities
- `u-` for simple one-off utility classes
- `is-` / `has-` for state classes

**Example:**
```css
/* Block */
.c-product-card { }

/* Elements */
.c-product-card__image { }
.c-product-card__title { }
.c-product-card__price { }

/* Modifiers */
.c-product-card--featured { }
.c-product-card--on-sale { }

/* State */
.c-product-card.is-loading { }
```

**Critical:** Avoid deeply nested selectors; prefer single class selectors for predictability.

### 6. Minimal Margin Usage

Use spacing tokens via `gap`, `padding`, and layout utilities (flex or grid) instead of margins. Only apply margins to separate large sections or when absolutely necessary.

**Why:** Margins can collapse, conflict, and make spacing unpredictable. Using `gap` and `padding` with layout utilities provides consistent, predictable spacing.

**Example:**
```css
/* ❌ AVOID: Margin-based spacing */
.card {
  margin-bottom: 16px;
}

/* ✅ PREFER: Gap-based spacing */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-lg);
}
```

Provide a consistent spacing scale, for example multiples of 4px or 8px, exposed as tokens like `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, etc.

### 7. Per-Block CSS Files

Break large CSS files into logical pieces. Store each block or section's styles in its own file under `components/` or `sections/` and import them via a single `index.css`.

This approach mirrors WordPress's pattern of per-block styles and simplifies reuse across projects.

**Example structure:**
```
/src/styles/
├── index.css                    # Manifest (imports all modules)
├── tokens/
│   ├── core.css                # Raw tokens
│   ├── semantic.css            # Semantic tokens
│   └── themes.css              # Light/dark overrides
├── components/
│   ├── c-button.css
│   ├── c-card.css
│   ├── c-navigation.css
│   └── c-product-card.css
└── sections/
    ├── s-hero.css
    ├── s-features.css
    └── s-testimonials.css
```

### 8. Remove Hard-Coded Values

Do not hard-code colors, font sizes, line heights, radii, shadows, or z-index values. All such values must come from tokens.

When existing code uses hard-coded hex values or font names, map them to the closest token or create a new token in the design system.

**Example migration:**
```css
/* ❌ BEFORE: Hard-coded values */
.button {
  background: #7c3aed;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
}

/* ✅ AFTER: Token-driven */
.button {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
}
```

### 9. Design Tokens Documentation

Each repository must maintain a `/src/guidelines/design-tokens/` folder documenting the available tokens and their intended usage. The audit process should ensure that every token used in code is documented and that the documentation accurately reflects the implementation.

**Required documentation files:**
- `colors.md` - Color palette and semantic color tokens
- `typography.md` - Typography scale and font families
- `spacing.md` - Spacing scale and layout guidelines
- `dark-mode.md` - Dark mode implementation standards

### 10. Import Order & Cascade Layers

When retaining Tailwind or custom resets, use the `@layer` directive to inject custom styles into the base, components, and utilities layers[[3]](https://css-tricks.com/using-css-cascade-layers-to-manage-custom-styles-in-a-tailwind-project/#:~:text=For%20example%2C%20to%20append%20your,you%20would%20do%20the%20following).

Create an `index.css` manifest that imports base styles (tokens, resets, typography), then components, utilities, and section styles in a stable order. Avoid duplicate imports and cyclic dependencies.

**Example:**
```css
/* index.css - Import manifest */
/* 1. Tokens (define variables first) */
@import './tokens/core.css';
@import './tokens/semantic.css';
@import './tokens/themes.css';
@import './tokens/motion.css';

/* 2. Base styles */
@layer base {
  @import './base/reset.css';
  @import './base/typography.css';
  @import './base/forms.css';
  @import './base/accessibility.css';
}

/* 3. Components */
@layer components {
  @import './components/c-button.css';
  @import './components/c-card.css';
  /* ... more components */
}

/* 4. Utilities */
@layer utilities {
  @import './utilities/layout.css';
  @import './utilities/spacing.css';
  @import './utilities/typography.css';
}

/* 5. Sections */
@import './sections/s-hero.css';
@import './sections/s-features.css';
```

---

## Recommended File Structure

```
src/styles/
├── index.css                    # Manifest importing all other CSS modules in order
├── tokens/
│   ├── core.css                # Raw palette, spacing, typography, radii, shadow, border, z-index values
│   ├── semantic.css            # Semantic tokens like --color-text-primary, --surface-card, --border-default
│   ├── themes.css              # Light mode values under :root, dark mode overrides under [data-theme="dark"]
│   └── motion.css              # Motion durations, easing and reduced-motion hooks
├── base/
│   ├── reset.css               # Reset or preflight styles (avoid duplicates with Tailwind preflight)
│   ├── typography.css          # Default typography styles (body, headings, links)
│   ├── forms.css               # Styles for form elements and controls
│   └── accessibility.css       # Focus outlines, skip links, visually hidden helpers
├── utilities/
│   ├── layout.css              # Flex and grid helpers using gap tokens
│   ├── spacing.css             # Helper classes that apply padding or gap based on spacing tokens
│   ├── typography.css          # Font weight and text alignment helpers
│   ├── color.css               # Color helpers mapping semantic tokens to classes
│   └── states.css              # is-/has- state helpers for common interactive states
├── components/
│   └── c-component-name.css    # BEM blocks for reusable components
├── sections/
│   └── s-section-name.css      # Styles scoped to specific templates or page sections
└── wordpress/
    └── globals.css             # WordPress-aligned global classes (e.g., .alignwide, .has-text-color)
```

This structure enforces separation of concerns, ensures low selector specificity, and encourages reuse.

---

## Light/Dark Mode Implementation

Use CSS custom properties to implement theming. Define the default values in the `:root` selector for light mode. Provide overrides in a `[data-theme="dark"]` selector (or an equivalent mechanism) for dark mode.

All semantic tokens (e.g., `--color-text-primary`, `--surface-card`) should have definitions in both light and dark blocks. When used in components or utilities, the variables will automatically switch values based on the theme.

**Complete example:**
```css
/* tokens/themes.css */

/* Light mode (default) */
:root {
  /* Surface colors */
  --color-bg: #ffffff;
  --color-surface-1: #f9f9f9;
  --color-surface-2: #f3f4f6;
  
  /* Text colors */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #4b5563;
  --color-text-muted: #6b7280;
  
  /* Border colors */
  --color-border-light: #f3f4f6;
  --color-border-default: #e5e7eb;
  --color-border-strong: #d1d5db;
  
  /* Interactive colors */
  --color-primary: #7c3aed;
  --color-primary-foreground: #ffffff;
  --color-primary-hover: #6d28d9;
}

/* Dark mode overrides */
[data-theme="dark"] {
  /* Surface colors */
  --color-bg: #0f0f0f;
  --color-surface-1: #1a1a1a;
  --color-surface-2: #1f1f1f;
  
  /* Text colors */
  --color-text-primary: #f9fafb;
  --color-text-secondary: #d1d5db;
  --color-text-muted: #9ca3af;
  
  /* Border colors */
  --color-border-light: #374151;
  --color-border-default: #4b5563;
  --color-border-strong: #6b7280;
  
  /* Interactive colors */
  --color-primary: #a78bfa;
  --color-primary-foreground: #111827;
  --color-primary-hover: #c4b5fd;
}
```

---

## Accessibility Checklist

### Contrast

Verify that all combinations of text and background colors meet the WCAG 2.1 requirements:

- **Level AA:** At least 4.5:1 for normal text (3:1 for large text)
- **Level AAA:** At least 7:1 for normal text (4.5:1 for large text)[[2]](https://www.w3.org/TR/WCAG21/#:~:text=The%20visual%20presentation%20of%20text,5%3A1%2C%20except%20for%20the%20following)

Adjust tokens if necessary. Use online contrast checkers:
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Accessible Colors: https://accessible-colors.com/

### Focus Visibility

Every interactive element (links, buttons, form controls) must have a visible focus style. Use a token for focus outline color and thickness. The outline should meet contrast requirements.

**Example:**
```css
/* tokens/semantic.css */
:root {
  --focus-ring-width: 2px;
  --focus-ring-offset: 2px;
  --focus-ring-color: var(--color-primary);
}

/* base/accessibility.css */
:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}
```

### Reduced Motion

Provide a `[data-reduce-motion]` or `prefers-reduced-motion: reduce` mechanism. Use the motion token scale and reduce durations or disable non-essential animations when reduction is enabled.

**Example:**
```css
/* tokens/motion.css */
:root {
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reduce motion override */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-base: 0ms;
    --duration-slow: 0ms;
  }
  
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Independence

Do not rely solely on color to convey state (e.g., error vs. success). Use icons, text, or patterns in addition to color.

**Example:**
```tsx
// ❌ WRONG: Color only
<div className="error-message">Error!</div>

// ✅ CORRECT: Color + icon + text
<div className="error-message">
  <AlertCircle className="error-icon" />
  <span className="error-text">Error: Please check your input</span>
</div>
```

---

## Best Practices

### Plan Token Updates Centrally

Introduce new tokens (e.g., spacing sizes, radii sizes, shadows, z-indices) through the design token documentation, not ad-hoc in code. This ensures all projects share the same semantic values and maintain consistency.

**Workflow:**
1. Propose new token in `/src/guidelines/design-tokens/` documentation
2. Add to `tokens/core.css` or `tokens/semantic.css`
3. Document usage examples
4. Use in components

### Flatten Complex Selectors

Avoid deep descendant chains. Use a single class name for components and scope nested elements within the block. This improves maintainability and keeps specificity low.

**Example:**
```css
/* ❌ AVOID: Deep nesting */
.page .container .sidebar .widget .title {
  font-size: 18px;
}

/* ✅ PREFER: BEM single class */
.c-widget__title {
  font-size: var(--font-size-lg);
}
```

### Avoid !important

Instead of raising specificity with `!important`, organize imports using layers and keep selectors simple. In Tailwind, the `@layer` directive can be used to append styles to the base and component layers, ensuring your custom CSS sits in the correct place[[3]](https://css-tricks.com/using-css-cascade-layers-to-manage-custom-styles-in-a-tailwind-project/#:~:text=For%20example%2C%20to%20append%20your,you%20would%20do%20the%20following).

**Acceptable use of !important:**
- Utility classes that must override component styles (rare)
- Accessibility overrides (e.g., `.sr-only`)
- Third-party library overrides (as last resort)

### Audit and Remove Unused CSS

Use static analysis or the provided audits to identify unused selectors and orphaned CSS files. Remove them to reduce bundle size.

**Tools:**
- PurgeCSS: https://purgecss.com/
- UnCSS: https://github.com/uncss/uncss
- Chrome DevTools Coverage tab

### Per-Repository Documentation

Each repository must keep its own documentation up to date in `/src/guidelines/design-tokens/`. The audit process will flag mismatches so they can be corrected.

**Required files:**
- `colors.md` - Complete color palette with contrast ratios
- `typography.md` - Font families, sizes, weights, line heights
- `spacing.md` - Spacing scale with usage examples
- `dark-mode.md` - Dark mode implementation details

---

## Memory Optimization Connection

CSS optimization directly impacts Figma Make memory usage:

1. **Smaller CSS bundles** = Less memory for Figma to parse
2. **Modular files** = Easier for Figma to load incrementally
3. **Token-driven design** = Fewer duplicate styles
4. **BEM naming** = Reduces selector complexity

**Impact on Figma:**
- Reduced CSS file sizes mean faster Figma Make builds
- Fewer CSS files mean less memory overhead
- Simpler selectors mean faster rendering
- Token system aligns with Figma styles/variables

**Recommended workflow:**
1. Run memory optimization audit FIRST
2. Identify large CSS files (> 500 lines)
3. Apply these CSS optimization guidelines
4. Measure before/after bundle sizes
5. Document reduction in audit report

---

## Migration Strategy

### Phase 1: Audit (Week 1)

1. Run CSS architecture audit (10 sub-audits A-J)
2. Document current state in audit report
3. Identify high-impact issues
4. Create prioritized task list

### Phase 2: Foundation (Week 2-3)

1. Create token system (`tokens/core.css`, `tokens/semantic.css`)
2. Implement light/dark mode (`tokens/themes.css`)
3. Add accessibility tokens (focus ring, reduced motion)
4. Document tokens in `/src/guidelines/design-tokens/`

### Phase 3: Migration (Week 4-8)

1. Migrate components to BEM naming (dual-class during transition)
2. Replace hard-coded values with tokens
3. Split large CSS files into modular structure
4. Remove Tailwind utility classes from markup
5. Implement `@layer` directive for cascade control

### Phase 4: Cleanup (Week 9-10)

1. Remove unused selectors and orphaned files
2. Remove old non-BEM classes
3. Verify light/dark mode coverage
4. Run accessibility audit
5. Measure bundle size reduction

### Phase 5: Documentation (Week 11-12)

1. Update all token documentation
2. Create migration guide for future projects
3. Document lessons learned
4. Create reusable patterns library

---

## Validation Checklist

Before considering CSS optimization complete, verify:

### Structure
- [ ] All CSS files use token-driven values (no hard-coded colors/sizes)
- [ ] BEM naming used consistently across components
- [ ] Files organized in modular structure (`tokens/`, `base/`, `components/`, etc.)
- [ ] Single CSS entrypoint (`index.css`)
- [ ] No duplicate or cyclic imports

### Theming
- [ ] Light mode defined in `:root`
- [ ] Dark mode defined in `[data-theme="dark"]`
- [ ] All semantic tokens have light + dark values
- [ ] Theme switching works without visual glitches

### Accessibility
- [ ] All text/background pairs meet WCAG AA contrast (4.5:1 minimum)
- [ ] Focus-visible styles present on all interactive elements
- [ ] Reduced-motion supported via media query
- [ ] Color not used alone to convey state

### Performance
- [ ] CSS bundle size reduced from baseline
- [ ] No unused selectors remaining
- [ ] No orphaned CSS files
- [ ] Build time improved

### Documentation
- [ ] All tokens documented in `/src/guidelines/design-tokens/`
- [ ] Migration notes documented
- [ ] Before/after metrics recorded

---

## Related Guidelines

- **WordPress CSS Architecture:** `/guidelines/Guidelines.md` Section 4
- **Design Tokens:** `/guidelines/design-tokens/` (all files)
- **Dark Mode Standards:** `/guidelines/design-tokens/dark-mode.md`
- **Accessibility Standards:** `/guidelines/Guidelines.md` Section 9
- **Reduced Motion:** `/guidelines/REDUCED_MOTION_GUIDELINES.md`
- **Memory Optimization:** `/reports/audits/YYYY-MM-DD_woocommercedemo_memory.md`

---

## References

[[1]](https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/#:~:text=Instead%20of%20the%20proliferation%20of,These%20settings%20includes%20things%20like) Global Settings & Styles (theme.json) – Block Editor Handbook | Developer.WordPress.org  
https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/

[[2]](https://www.w3.org/TR/WCAG21/#:~:text=The%20visual%20presentation%20of%20text,5%3A1%2C%20except%20for%20the%20following) Web Content Accessibility Guidelines (WCAG) 2.1  
https://www.w3.org/TR/WCAG21/

[[3]](https://css-tricks.com/using-css-cascade-layers-to-manage-custom-styles-in-a-tailwind-project/#:~:text=For%20example%2C%20to%20append%20your,you%20would%20do%20the%20following) Using CSS Cascade Layers to Manage Custom Styles in a Tailwind Project | CSS-Tricks  
https://css-tricks.com/using-css-cascade-layers-to-manage-custom-styles-in-a-tailwind-project/

---

**Last Updated:** 2026-03-05  
**Maintainer:** LightSpeed Development Team  
**Status:** ✅ Active - Apply to all new projects
