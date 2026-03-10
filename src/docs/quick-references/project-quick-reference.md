# Project Quick Reference

**Last Updated:** 2026-03-06  
**Status:** Production-ready WooCommerce FSE prototype with Funky Redesign

---

## Critical Constraints

### 1. Legacy Syntax Only (Parser Compatibility)

All `.ts`/`.tsx` files MUST use legacy syntax for Figma Make parser compatibility.

| Modern (FORBIDDEN) | Legacy (REQUIRED) |
|---|---|
| `const x = 1` | `var x = 1` |
| `let y = 2` | `var y = 2` |
| `(x) => x + 1` | `function(x) { return x + 1; }` |
| `` `Hello ${name}` `` | `"Hello " + name` |
| `async/await` | `.then()` chains |
| `const { a, b } = obj` | `var a = obj.a; var b = obj.b;` |
| `const [x, y] = arr` | `var x = arr[0]; var y = arr[1];` |
| `{ ...obj }` | `Object.assign({}, obj)` |
| `[...arr]` | `Array.prototype.slice.call(arr)` |
| `for (var x of arr)` | `for (var i = 0; i < arr.length; i++)` |
| `function({ prop })` | `function(props) { var prop = props.prop; }` |

### 2. No Tailwind CSS

- NO utility classes (`flex`, `p-4`, `text-center`)
- NO inline `style={{}}` attributes
- ALL styling via WordPress/WooCommerce semantic CSS classes
- ALL new styles added to `/src/styles/globals.css`

### 3. WordPress CSS Variables

Use `--wp--preset--*` variables for all styling:

```css
var(--wp--preset--font-size--normal)     /* Typography */
var(--wp--preset--spacing--50)           /* Spacing */
var(--wp--preset--color--primary)        /* Colors */
var(--wp--preset--layout--wide-size)     /* Layout */
```

---

## File Structure

```
/src/
  App.tsx                          # Main app (React Router)
  main.tsx                         # Entry point
  app/
    components/
      blocks/                     # WordPress blocks (100+)
        ui/ design/ theme/ cart/ checkout/ forms/ ...
      patterns/                   # Reusable sections (40+)
        account/ sections/ shop/
      parts/                      # Global parts (21)
      common/                     # Utilities (18)
    templates/                    # Page templates (28)
    contexts/                     # React contexts (5)
    hooks/                        # Custom hooks (4)
    data/                         # Mock data (14)
    types/                        # TypeScript types
    utils/                        # Utilities (7)
    services/                     # API services (3)
  styles/
    globals.css                   # Main stylesheet (ADD NEW STYLES HERE)
    theme-variables.css           # 70+ WordPress CSS variables
    wordpress-core.css            # WP block styles
    woocommerce-core.css          # WC block styles
    theme-light-mode.css          # Light mode
    theme-dark-mode.css           # Dark mode
```

---

## Import Aliases

```tsx
// Fully migrated (in /src/app/)
import X from '@/templates/TemplateName';
import X from '@/contexts/ContextName';
import X from '@/data/dataFile';
import X from '@/utils/utilName';
import X from '@/hooks/hookName';
import X from '@/types/typeName';
import X from '@/services/serviceName';
import X from '@/styles/globals.css';

// Partially migrated (still at root)
import X from '@/components/blocks/BlockName';
import X from '@/components/parts/PartName';
import X from '@/components/patterns/PatternName';
```

---

## Component Architecture

| Type | Purpose | Location |
|------|---------|----------|
| **Templates** | Full page layouts | `/src/app/templates/` |
| **Parts** | Global regions (Header, Footer) | `.../components/parts/` |
| **Patterns** | Reusable sections (Hero, Grid) | `.../components/patterns/` |
| **Blocks** | Functional units (ProductCard) | `.../components/blocks/` |
| **Common** | Shared utilities (Container) | `.../components/common/` |

**Composition rule:** Templates > Parts + Patterns > Blocks + Common

---

## CSS Class Naming (BEM)

```css
/* Block */
.wc-block-product-card { }

/* Element */
.wc-block-product-card__title { }
.wc-block-product-card__image { }

/* Modifier */
.wc-block-product-card--featured { }
.wc-block-product-card--on-sale { }
```

| Prefix | Use for |
|--------|---------|
| `wc-block-` | WooCommerce blocks |
| `wp-block-` | WordPress blocks |
| `wp-element-` | WordPress elements |

---

## Dark Mode

Handled via CSS variables, NOT inline classes:

```css
:root { --color-bg: #ffffff; }
.dark { --color-bg: #0f0f0f; }

.component { background: var(--color-bg); }
```

Every component MUST support both modes. Toggle via `.dark` class on `<html>`.

---

## Key Files

| File | Purpose |
|------|---------|
| `/guidelines/Guidelines.md` | Master architecture reference |
| `/tasks/task-list.md` | Master task list |
| `/src/styles/globals.css` | Add ALL new styles here |
| `/src/styles/theme-variables.css` | CSS variable definitions |
| `/routes.ts` | React Router configuration |

---

## WCAG 2.1 AA Checklist

- All text: 4.5:1 contrast minimum
- Touch targets: 44x44px minimum
- All interactive elements: visible focus states
- All images: alt text
- All icon buttons: aria-label
- Respect `prefers-reduced-motion`
