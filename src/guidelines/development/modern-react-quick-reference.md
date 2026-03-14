# Modern React Coding Standards - Quick Reference

**Category:** Development / Quick Reference
**Version:** 2.0
**Last Updated:** March 12, 2026
**Full Guide:** [/guidelines/development/modern-react-coding-standards.md]
**Tailwind Lookup:** [/guidelines/TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md]

---

## ESLint Rules (MANDATORY)

| Rule | Level | Purpose |
|------|-------|---------|
| `no-var` | error | Prevents `var` declarations |
| `prefer-const` | error | Forces `const` when variable is never reassigned |
| `prefer-arrow-callback` | error | Forces arrow functions in `.map()`, `.filter()`, etc. |
| `func-style` | warn | Discourages `function` declarations (use `const` arrow) |

---

## Declaration Cheat Sheet

```ts
// Components
export const MyComponent = (props: Props) => { ... };

// forwardRef
export const MyInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => { ... });
MyInput.displayName = 'MyInput';

// Hooks
export const useMyHook = () => { ... };

// Context Providers
export const MyProvider = ({ children }: { children: ReactNode }) => { ... };

// Data constants
export const ITEMS: Item[] = [ ... ];

// Helper functions
export const getItemById = (id: string) => { ... };

// IIFE for computed data
export const derivedData = (() => { ... })();
```

---

## Callback Patterns

```ts
// ALWAYS arrow callbacks
items.filter((item) => item.active)
items.map((item) => item.name)
items.sort((a, b) => a.price - b.price)
items.reduce((sum, item) => sum + item.price, 0)
items.find((item) => item.id === id)
items.forEach((item) => { process(item); })
```

---

## Figma Make Parser Constraints (Data Files Only)

| Pattern | Status | Alternative |
|---------|--------|-------------|
| `product?.name` | FORBIDDEN | `product && product.name` |
| `value ?? fallback` | FORBIDDEN | `value \|\| fallback` or ternary |
| `[...arr1, ...arr2]` | FORBIDDEN (module level) | `[].concat(arr1, arr2)` |
| `` `Hello ${name}` `` | AVOID (module level) | `'Hello ' + name` |
| `.filter(function(x) {...})` | FORBIDDEN | `.filter((x) => ...)` |

**Note:** These constraints apply to **data files** and **module-level expressions** only. Inside component function bodies, optional chaining and spread are safe.

---

## Quick Validation

| Check | What to Search | Expected Result |
|-------|---------------|-----------------|
| No `var` | `grep "^var \|^export var " src/app/` | 0 matches |
| No `export function` | `grep "^export function " src/app/` | 0 matches |
| No ES5 callbacks | `grep "\.filter(function\|\.map(function" src/app/` | 0 matches |
| No optional chaining (data) | `grep "\?\." src/app/data/` | 0 matches |

---

## Protected Files (DO NOT MODIFY)

- `/src/app/components/figma/ImageWithFallback.tsx`
- `/components/figma/ImageWithFallback.tsx`

These files use legacy patterns (`var`, `function`) by design. ESLint overrides must exclude them.

---

## Styling Quick Reference (Tailwind Replacement)

### Class Naming: WordPress BEM

```
.[prefix]-[block]__[element]--[modifier]

wc-block-product-card                   (WooCommerce block)
wc-block-product-card__title            (element)
wc-block-product-card--featured         (modifier)
wp-block-navigation__item               (WordPress block)
wp-element-button--primary              (WordPress element)
wp-section-hero-gradient                (section preset)
```

### Where Styles Go

| What | Where |
|------|-------|
| New block CSS | `/src/styles/blocks/[category]/[name].css` + `@import` in `/styles/globals.css` |
| New section CSS | `/src/styles/sections/[name].css` + `@import` in `/styles/globals.css` |
| Quick additions | Directly in `/styles/globals.css` |
| Design tokens | `/src/styles/theme-variables.css` (read-only reference) |

### CSS Values: Always Use Tokens

```css
/* Colors */     var(--wp--preset--color--surface)
/* Spacing */    var(--wp--preset--spacing--40)        /* 16px */
/* Font size */  var(--wp--preset--font-size--large)   /* 18-22px fluid */
/* Radius */     var(--wp--preset--border-radius--lg)  /* 8px */
/* Transition */ var(--wp--preset--transition--base)   /* 200ms */
```

### Dark Mode: Automatic

```tsx
// WRONG -- Tailwind dark: classes
<div className="bg-white dark:bg-gray-900">

// CORRECT -- CSS variables handle dark mode automatically
<div className="wc-block-product-card">
```

### Never Use

- Tailwind utility classes (`flex`, `p-4`, `text-center`, `bg-white`, `dark:*`)
- Inline `style={{}}` attributes
- Hardcoded color/spacing values in CSS
- Responsive prefixes (`md:`, `lg:`) -- use CSS `@media` queries instead