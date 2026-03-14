# Modern React & TypeScript Coding Standards

**Category:** Development / Coding Standards
**Version:** 2.0
**Last Updated:** March 12, 2026
**Related:** [/guidelines/Guidelines.md], [/guidelines/development/margin-removal-guidelines.md], [/guidelines/development/css-optimization-guidelines.md], [/guidelines/TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md]

---

## Overview

This document defines the **authoritative coding standards** for the PlayPocket / WooCommerce Prototype codebase. It covers the two major architectural migrations that shaped the current codebase:

1. **ES5-to-Modern-React Migration** (Batches 1-19+, ~450+ JS/TS conversions) -- Replaced all legacy `var`, `function` declarations, and ES5 callbacks with modern `const`/`let`, arrow functions, and arrow callbacks.
2. **Tailwind CSS Elimination** (Batches T6.1-T6.6, 18+ component files + 200+ class instances) -- Replaced all Tailwind utility classes with WordPress/WooCommerce semantic BEM classes backed by CSS custom properties.

Together these migrations establish a codebase that is **modern TypeScript throughout** and **WordPress-theme aligned in styling**, with zero Tailwind dependencies and zero ES5 legacy patterns (except protected system files).

**Scope:** All `.ts` and `.tsx` files under `/src/app/`, `/routes.ts`, `/components/ui/`, and any new files created in the project.

**Protected exceptions:** `/src/app/components/figma/ImageWithFallback.tsx` and `/components/figma/ImageWithFallback.tsx` are Figma Make system files. They use legacy ES5 patterns (`var`, `function`) and MUST NOT be modified.

---

## 1. ESLint Rules (Regression Prevention)

The following ESLint rules are **mandatory** for this project. They exist to prevent reintroduction of legacy ES5 patterns that were eliminated during the migration.

### 1.1 `no-var` (Error)

**Rule:** Never use `var`. Use `const` or `let` exclusively.

```jsonc
// .eslintrc.json (or equivalent config)
{
  "rules": {
    "no-var": "error"
  }
}
```

**Rationale:**
- `var` has function-scoped hoisting, which causes subtle bugs in loops, closures, and conditionals.
- `const` and `let` are block-scoped, making data flow predictable.
- The entire codebase was migrated away from `var` across 450+ declarations.

**When to use `const` vs `let`:**

| Scenario | Keyword | Example |
|----------|---------|---------|
| Value never reassigned | `const` | `const items = [];` |
| Loop counter | `let` | `for (let i = 0; i < n; i++)` |
| Accumulator that is reassigned | `let` | `let total = 0; total += x;` |
| Object/array that is mutated (not reassigned) | `const` | `const arr = []; arr.push(x);` |
| React state | `const` | `const [val, setVal] = useState(0);` |

### 1.2 `prefer-const` (Error)

**Rule:** If a `let` variable is never reassigned, it must be `const`.

```jsonc
{
  "rules": {
    "prefer-const": "error"
  }
}
```

**Rationale:**
- `const` communicates intent: "this binding will not change."
- Prevents accidental reassignment of data constants, component references, and configuration objects.

**Before (violation):**
```ts
let shippingMethods = [
  { id: 'standard', name: 'Standard', cost: 4.99 },
  { id: 'express', name: 'Express', cost: 14.99 },
];
// shippingMethods is never reassigned -- should be const
```

**After (correct):**
```ts
const shippingMethods = [
  { id: 'standard', name: 'Standard', cost: 4.99 },
  { id: 'express', name: 'Express', cost: 14.99 },
];
```

### 1.3 `prefer-arrow-callback` (Error)

**Rule:** Anonymous function expressions passed as callbacks must be arrow functions.

```jsonc
{
  "rules": {
    "prefer-arrow-callback": "error"
  }
}
```

**Rationale:**
- Arrow callbacks are shorter and lexically bind `this`, eliminating a class of `this`-context bugs.
- The entire codebase was migrated from `function()` callbacks to arrow functions across 25+ call sites.

**Before (violation):**
```ts
const sorted = items.sort(function(a, b) {
  return a.price - b.price;
});

const filtered = items.filter(function(item) {
  return item.inStock;
});

const total = items.reduce(function(sum, item) {
  return sum + item.price;
}, 0);
```

**After (correct):**
```ts
const sorted = items.sort((a, b) => a.price - b.price);

const filtered = items.filter((item) => item.inStock);

const total = items.reduce((sum, item) => sum + item.price, 0);
```

### 1.4 Recommended Additional Rules

These rules are recommended but not yet enforced at error level:

```jsonc
{
  "rules": {
    // Prevent function declarations in favor of arrow const
    "func-style": ["warn", "expression"],

    // Enforce consistent return in arrow functions
    "arrow-body-style": ["warn", "as-needed"],

    // No console.log in production code
    "no-console": ["warn", { "allow": ["error", "warn"] }]
  }
}
```

### 1.5 ESLint Override for Protected Files

```jsonc
{
  "overrides": [
    {
      "files": [
        "src/app/components/figma/ImageWithFallback.tsx",
        "components/figma/ImageWithFallback.tsx"
      ],
      "rules": {
        "no-var": "off",
        "prefer-const": "off",
        "prefer-arrow-callback": "off",
        "func-style": "off"
      }
    }
  ]
}
```

---

## 2. Current Coding Standards (Post-Migration)

### 2.1 Component Declarations

**Standard:** All React components MUST use `export const` with arrow function syntax.

```tsx
// CURRENT STANDARD - Arrow function component
export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="wc-block-product-card">
      <h3 className="wc-block-product-card__title">{product.name}</h3>
    </div>
  );
};
```

**`forwardRef` components** use `React.forwardRef` with an arrow function render and MUST set `displayName`:

```tsx
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'default',
  children,
  ...props
}, ref) => {
  return (
    <button ref={ref} className={`wp-element-button wp-element-button--${variant}`} {...props}>
      {children}
    </button>
  );
});
Button.displayName = 'Button';
```

### 2.2 Context Providers and Custom Hooks

```tsx
// Context creation
const CartContext = createContext<CartContextValue | undefined>(undefined);

// Custom hook -- arrow function, export const
export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Provider -- arrow function, export const
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  // ...
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
```

### 2.3 Data Files and Helper Functions

**Exported data constants** use `export const`:

```ts
export const PRODUCTS = [
  { id: 'prod-001', name: 'Classic T-Shirt', price: 24.99 },
  { id: 'prod-002', name: 'Premium Hoodie', price: 49.99 },
];
```

**Exported helper/utility functions** use `export const` with arrow syntax:

```ts
export const getProductById = (id: string) => {
  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) return PRODUCTS[i];
  }
  return undefined;
};

export const getBestSellers = (limit?: number) => {
  const limitVal = limit || 4;
  const sorted = PRODUCTS.slice().sort((a, b) => {
    return (b.totalSales || 0) - (a.totalSales || 0);
  });
  return sorted.slice(0, limitVal);
};
```

**Immediately-invoked function expressions (IIFE)** for computed data use arrow syntax:

```ts
// Derived data computed at module load
export const brandCategories = (() => {
  const cats: string[] = [];
  for (let i = 0; i < BRAND_DATA.length; i++) {
    const cat = BRAND_DATA[i].category;
    if (cats.indexOf(cat) === -1) cats.push(cat);
  }
  return cats;
})();
```

### 2.4 Internal (Non-Exported) Functions

Module-internal functions also use `const` arrow syntax:

```ts
// Internal redirect components in routes.ts
const RedirectDashboard = () => {
  return React.createElement(Navigate, { to: '/account/dashboard', replace: true });
};

// Internal helpers
const mapVariant = (v: string) => {
  if (v === 'default') return 'primary';
  return v;
};
```

### 2.5 Legacy UI Compatibility Shims

Re-export shims in `/components/ui/` use `const` for aliasing:

```tsx
import { Alert as NewAlert } from '../../src/app/components/blocks/feedback/Alert';

/**
 * @deprecated Import from @/src/app/components/blocks/feedback/Alert instead.
 */
const Alert = NewAlert;

export { Alert };
```

---

## 3. Before/After Migration Reference

This section documents every ES5 pattern that existed in the codebase before migration and its modern replacement. Use this as a lookup when encountering legacy patterns in documentation, JSDoc examples, or external references.

### 3.1 `var` to `const`/`let`

| Context | Before (ES5) | After (Modern) |
|---------|-------------|----------------|
| Data constant | `export var PRODUCTS = [...]` | `export const PRODUCTS = [...]` |
| Local constant | `var method = getById(id)` | `const method = getById(id)` |
| Loop variable | `for (var i = 0; ...)` | `for (let i = 0; ...)` |
| Accumulator | `var result = []` | `const result = []` (if only mutated, not reassigned) |
| Reassigned var | `var total = 0; total += x` | `let total = 0; total += x` |
| Destructured | `var src = props.src` | `const { src } = props` or `const src = props.src` |

### 3.2 `function` Declarations to Arrow `const`

| Context | Before (ES5) | After (Modern) |
|---------|-------------|----------------|
| Exported component | `export function ProductCard(props) { ... }` | `export const ProductCard = (props: Props) => { ... };` |
| Exported utility | `export function getById(id) { ... }` | `export const getById = (id: string) => { ... };` |
| Default export function | `export default function App() { ... }` | `const App = () => { ... }; export default App;` |
| Internal helper | `function mapVariant(v) { ... }` | `const mapVariant = (v: string) => { ... };` |
| forwardRef render | `React.forwardRef(function(props, ref) { ... })` | `React.forwardRef<El, Props>((props, ref) => { ... })` |

### 3.3 `function()` Callbacks to Arrow Callbacks

| Method | Before (ES5) | After (Modern) |
|--------|-------------|----------------|
| `.filter()` | `.filter(function(item) { return item.active; })` | `.filter((item) => item.active)` |
| `.map()` | `.map(function(item) { return item.name; })` | `.map((item) => item.name)` |
| `.reduce()` | `.reduce(function(sum, item) { return sum + item.price; }, 0)` | `.reduce((sum, item) => sum + item.price, 0)` |
| `.sort()` | `.sort(function(a, b) { return a.price - b.price; })` | `.sort((a, b) => a.price - b.price)` |
| `.find()` | `.find(function(item) { return item.id === id; })` | `.find((item) => item.id === id)` |
| `.forEach()` | `.forEach(function(item) { process(item); })` | `.forEach((item) => { process(item); })` |

### 3.4 IIFE Patterns

**Before:**
```ts
export var extendedFeatures = (function() {
  var result = [];
  for (var i = 0; i < features.length; i++) {
    result.push(features[i]);
  }
  result.push({ id: 'extra', title: 'Extra Feature' });
  return result;
})();
```

**After:**
```ts
export const extendedFeatures = (() => {
  const result = [];
  for (let i = 0; i < features.length; i++) {
    result.push(features[i]);
  }
  result.push({ id: 'extra', title: 'Extra Feature' });
  return result;
})();
```

---

## 4. Anti-Patterns to Avoid

### 4.1 Figma Make Parser Constraints

The Figma Make runtime parser has known limitations. The following JavaScript features MUST be avoided in data files and components rendered during initial parse:

#### 4.1.1 No Optional Chaining (`?.`)

**Status:** FORBIDDEN in data files and component render paths

```ts
// WRONG - Parser may fail
const name = product?.name;
const city = user?.address?.city;
const result = callback?.();

// CORRECT - Explicit null checks
const name = product && product.name;
const city = user && user.address && user.address.city;
const result = callback ? callback() : undefined;

// CORRECT - Default parameter values
const getProduct = (id: string, fallback = 'Unknown') => {
  const product = getProductById(id);
  return product ? product.name : fallback;
};
```

#### 4.1.2 No Nullish Coalescing (`??`)

**Status:** FORBIDDEN in data files and component render paths

```ts
// WRONG - Parser may fail
const value = input ?? 'default';
const count = data.count ?? 0;

// CORRECT - Logical OR (sufficient when 0 and '' are not valid values)
const value = input || 'default';

// CORRECT - Explicit ternary (when 0 or '' are valid values)
const count = data.count !== null && data.count !== undefined ? data.count : 0;
```

#### 4.1.3 No Spread Operators in Data Files

**Status:** FORBIDDEN in data file top-level expressions

```ts
// WRONG - Parser may fail on spread in data files
export const ALL_PRODUCTS = [...APPAREL, ...ACCESSORIES, ...GAMES];
export const config = { ...defaults, ...overrides };

// CORRECT - Use .concat() for arrays
export const ALL_PRODUCTS = [].concat(APPAREL, ACCESSORIES, GAMES);

// CORRECT - Use Object.assign() for objects
export const config = Object.assign({}, defaults, overrides);
```

**Note:** Spread operators ARE safe inside React component function bodies (JSX props, state updates). The constraint applies to **module-level** data expressions parsed at import time.

#### 4.1.4 No Template Literals in Data File Constants

**Status:** AVOID in data file top-level expressions

```ts
// AVOID in data files
export const greeting = `Hello, ${name}!`;

// CORRECT - String concatenation
export const greeting = 'Hello, ' + name + '!';
```

**Note:** Template literals ARE safe inside component function bodies and JSX.

### 4.2 General Anti-Patterns

#### 4.2.1 No Deep Import Chains

**Status:** FORBIDDEN

```ts
// WRONG - Deep relative path chains
import { useCart } from '../../../../contexts/CartContext';
import { products } from '../../../data/products';

// CORRECT - Use path aliases
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';

// CORRECT - Fallback to short relative imports when alias fails
import { useCart } from '../contexts/CartContext';
```

#### 4.2.2 No `export default function`

**Status:** DISCOURAGED (use named `export const` instead)

```ts
// DISCOURAGED
export default function ProductCard(props) {
  return <div />;
}

// PREFERRED - Named export with arrow function
export const ProductCard = (props: ProductCardProps) => {
  return <div />;
};

// ACCEPTABLE - Default export as separate statement (when required by framework)
const App = () => { return <div />; };
export default App;
```

**Rationale:** Named exports enable better tree-shaking, IDE auto-import, and refactoring support. Default exports make renamed imports invisible to search tools.

#### 4.2.3 No `console.log` in Production Code

**Status:** FORBIDDEN

```ts
// WRONG
console.log('cart items:', items);
console.log('debug:', value);

// CORRECT - Remove entirely, or use error-level logging in catch blocks
try {
  await submitOrder(order);
} catch (error) {
  console.error('Order submission failed:', error); // Acceptable
}
```

#### 4.2.4 No Inline Styles

**Status:** FORBIDDEN (see main Guidelines.md Section 4.1)

```tsx
// WRONG
<div style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>Content</div>

// CORRECT - WordPress semantic classes
<div className="wc-block-product-card">Content</div>
```

#### 4.2.5 No Tailwind Utility Classes

**Status:** FORBIDDEN (Tailwind CSS was fully removed in v2.5)

```tsx
// WRONG
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">

// CORRECT - WordPress BEM classes
<div className="wc-block-product-card">
```

#### 4.2.6 No Mutating Sort/Reverse

**Status:** AVOID (use `.slice()` before sort)

```ts
// WRONG - Mutates the original array
const sorted = PRODUCTS.sort((a, b) => a.price - b.price);

// CORRECT - Creates a copy first
const sorted = PRODUCTS.slice().sort((a, b) => a.price - b.price);
```

#### 4.2.7 No Implicit Type Coercion in Comparisons

**Status:** AVOID

```ts
// WRONG - Loose equality
if (value == null) { ... }
if (count == 0) { ... }

// CORRECT - Strict equality
if (value === null || value === undefined) { ... }
if (count === 0) { ... }
```

#### 4.2.8 No `dangerouslySetInnerHTML` Without Sanitization

**Status:** FORBIDDEN unless explicitly sanitized

```tsx
// WRONG - XSS vulnerability
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// CORRECT - Only with trusted, sanitized content
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(trustedContent) }} />
```

---

## 5. Iteration Patterns

### 5.1 Array Iteration (Current Standard)

The codebase uses **explicit `for` loops with index access** in data/utility files for Figma Make parser compatibility. This is intentional and correct.

```ts
// CURRENT STANDARD for data files - Explicit for loop
export const getProductsByCategory = (categorySlug: string) => {
  const result = [];
  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].categorySlug === categorySlug) result.push(PRODUCTS[i]);
  }
  return result;
};
```

**In component files**, higher-order array methods with arrow callbacks are preferred:

```tsx
// CURRENT STANDARD for component files
export const ProductGrid = ({ products }: ProductGridProps) => {
  const filtered = products.filter((p) => p.inStock);
  const sorted = filtered.slice().sort((a, b) => a.price - b.price);

  return (
    <div className="wc-block-product-grid">
      {sorted.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

### 5.2 When to Use Which Pattern

| Context | Pattern | Reason |
|---------|---------|--------|
| Data file utility function | `for` loop with index | Figma Make parser compatibility |
| Component render logic | `.map()`, `.filter()`, `.sort()` | Readability, React JSX integration |
| Performance-critical loop | `for` loop with index | Avoids callback overhead |
| Accumulating results | `for` loop OR `.reduce()` | Either acceptable based on clarity |
| Simple transformation | `.map()` with arrow | Concise, readable |

---

## 6. File and Export Patterns

### 6.1 Component Files (`.tsx`)

```tsx
/**
 * ComponentName
 *
 * Brief description of what the component does.
 * WordPress/WooCommerce block alignment notes.
 */

import React, { useState } from 'react';

// Types
interface ComponentNameProps {
  title: string;
  items: Item[];
  onAction?: () => void;
}

// Component
export const ComponentName = ({ title, items, onAction }: ComponentNameProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className="wc-block-component-name">
      <h2 className="wc-block-component-name__title">{title}</h2>
      {/* content */}
    </div>
  );
};
```

### 6.2 Data Files (`.ts`)

```ts
/**
 * DataModule - Brief description
 *
 * Optimized for Figma Make parser:
 * 1. No optional chaining
 * 2. No spread operators at module level
 * 3. ASCII characters only
 */

// Types (inline or imported)
interface DataItem {
  id: string;
  name: string;
  value: number;
}

// Constants
export const DATA_ITEMS: DataItem[] = [
  { id: 'item-001', name: 'First Item', value: 10 },
  { id: 'item-002', name: 'Second Item', value: 20 },
];

// Helper functions
export const getItemById = (id: string): DataItem | undefined => {
  for (let i = 0; i < DATA_ITEMS.length; i++) {
    if (DATA_ITEMS[i].id === id) return DATA_ITEMS[i];
  }
  return undefined;
};

// Default export (object of all exports for legacy compatibility)
export default {
  DATA_ITEMS,
  getItemById,
};
```

### 6.3 Context Files (`.tsx`)

```tsx
/**
 * ContextName.tsx
 *
 * Brief description of what the context manages.
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
interface ContextValue {
  state: StateType;
  action: (param: ParamType) => void;
}

// Context
const MyContext = createContext<ContextValue | undefined>(undefined);

// Hook
export const useMyContext = (): ContextValue => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

// Provider
export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<StateType>(initialValue);

  const action = (param: ParamType) => {
    // implementation
  };

  return (
    <MyContext.Provider value={{ state, action }}>
      {children}
    </MyContext.Provider>
  );
};
```

---

## 7. JSDoc Standards

All exported functions and components must have JSDoc documentation:

```ts
/**
 * Get products filtered by category slug.
 *
 * @param {string} categorySlug - The category slug to filter by
 * @returns {Product[]} Array of matching products
 *
 * @example
 * const apparel = getProductsByCategory('apparel');
 */
export const getProductsByCategory = (categorySlug: string): Product[] => {
  // ...
};
```

For components:

```tsx
/**
 * ProductCard
 *
 * Displays a single product with image, title, price, and add-to-cart action.
 * Maps to WooCommerce `wc/product-card` block.
 *
 * @param {ProductCardProps} props - Component props
 * @returns {JSX.Element}
 *
 * @example
 * <ProductCard product={product} onAddToCart={handleAdd} />
 */
export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  // ...
};
```

---

## 8. Migration Status Summary

| Pattern | Files Converted | Status |
|---------|----------------|--------|
| `export function` to `export const` arrow | ~240 components, templates, parts, patterns, blocks | COMPLETE |
| `function` declaration (internal) to `const` arrow | ~65 data/utility, 22 helpers, 36 Figma components | COMPLETE |
| `forwardRef` render functions to arrow | 15 UI primitives (Select, RadioGroup, Toggle, etc.) | COMPLETE |
| `var` to `const`/`let` (export declarations) | ~55 data file exports across 15 files | COMPLETE |
| `var` to `const`/`let` (internal variables) | ~40 local variables across data/utility files | COMPLETE |
| `function()` callbacks to arrow callbacks | ~25 `.filter()`, `.map()`, `.reduce()`, `.sort()`, `.find()` | COMPLETE |
| IIFE `(function() {})()` to `(() => {})()` | 3 computed data expressions | COMPLETE |
| Legacy UI shim `var` to `const` | 13 re-export aliases across 6 UI shim files | COMPLETE |

**Total conversions:** ~450+ across the full project.

**Only protected exceptions remain:** 15 `var` declarations and 4 `function` keywords in `ImageWithFallback.tsx` (Figma Make system file, MUST NOT be modified).

---

## 9. Tailwind CSS Replacement Standards

This section documents the complete Tailwind CSS elimination and the WordPress/WooCommerce semantic class system that replaced it. Tailwind was fully removed from `package.json` in v2.5 (January 13, 2026) and all remaining utility class instances were refactored across Batches T6.1-T6.6.

**Cross-reference:** [/guidelines/TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md] for a complete lookup table of every Tailwind class and its WordPress equivalent.

### 9.1 Core Principle: Semantic BEM Classes, Not Utility Classes

Every visual property is expressed through a **semantic BEM class** defined in `/styles/globals.css` (or an `@import`-ed file in `/src/styles/`). The class name describes the component's *purpose*, not its *appearance*.

```tsx
// BEFORE (Tailwind) -- describes appearance
<div className="flex items-center justify-between gap-4 p-6 bg-white dark:bg-gray-900
  border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg
  transition-shadow">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
    Product Name
  </h3>
  <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
    $24.99
  </span>
</div>

// AFTER (WordPress BEM) -- describes purpose
<div className="wc-block-product-card">
  <h3 className="wc-block-product-card__title">Product Name</h3>
  <span className="wc-block-product-card__price">$24.99</span>
</div>
```

### 9.2 BEM Class Naming Convention

All class names follow **Block Element Modifier** with a WordPress/WooCommerce prefix:

```
.[prefix]-[block]__[element]--[modifier]
```

| Component Type | Prefix | Example |
|----------------|--------|---------|
| WooCommerce blocks | `wc-block-` | `wc-block-product-card__title` |
| WordPress core blocks | `wp-block-` | `wp-block-navigation__item` |
| WordPress elements | `wp-element-` | `wp-element-button--primary` |
| WordPress sections | `wp-section-` | `wp-section-hero-gradient` |
| WordPress utilities | `wp-` | `wp-flex-between`, `wp-grid-3` |
| Funky theme overrides | `funky-` | `funky-product-card` |
| Prototype-specific | `prototype-` | `prototype-block-hero` |

### 9.3 Where Styles Are Defined

**ALL styling lives in CSS files, NEVER in JSX:**

| File | Purpose |
|------|---------|
| `/styles/globals.css` | Entry point (auto-loaded). Contains inlined critical CSS and `@import` statements |
| `/src/styles/theme-variables.css` | 70+ WordPress CSS custom properties (`--wp--preset--*`) |
| `/src/styles/blocks/**/*.css` | 130+ block component CSS files (23 subdirectories) |
| `/src/styles/sections/*.css` | 42 section CSS files |
| `/src/styles/wordpress-core.css` | WordPress core block styles |
| `/src/styles/woocommerce-core.css` | WooCommerce block styles |

**To add styles for a new component:**
1. Create CSS in the appropriate `/src/styles/blocks/[category]/` file (or create a new one)
2. Add an `@import` statement in `/styles/globals.css`
3. Use WordPress CSS custom properties for all values

### 9.4 CSS Custom Properties (Design Tokens)

Every value uses a WordPress `--wp--preset--*` or `--wp--custom--*` token. Hardcoded values are forbidden.

**Colors:**
```css
/* WRONG */
.component { color: #1a1a1a; background: #ffffff; border-color: #e5e7eb; }

/* CORRECT */
.component {
  color: var(--wp--preset--color--foreground);
  background: var(--wp--preset--color--surface);
  border-color: var(--wp--preset--color--border);
}
```

**Spacing:**
```css
/* WRONG */
.component { padding: 16px; gap: 32px; margin-bottom: 24px; }

/* CORRECT */
.component {
  padding: var(--wp--preset--spacing--40);       /* 16px */
  gap: var(--wp--preset--spacing--60);           /* 32px */
  margin-bottom: var(--wp--preset--spacing--50); /* 24px */
}
```

**Typography:**
```css
/* WRONG */
.component { font-size: 18px; font-weight: 600; line-height: 1.2; }

/* CORRECT */
.component {
  font-size: var(--wp--preset--font-size--large);         /* 18px-22px fluid */
  font-weight: var(--wp--preset--font-weight--semibold);  /* 600 */
  line-height: var(--wp--preset--line-height--snug);      /* 1.2 */
}
```

### 9.5 Dark Mode: Automatic via CSS Variables

Dark mode is handled **entirely in CSS** by redefining custom properties under the `.dark` selector. Components require zero JavaScript changes to support dark mode.

```css
/* Light mode (default) */
:root {
  --wp--preset--color--surface: #f9f9f9;
  --wp--preset--color--foreground: #1a1a1a;
  --wp--preset--color--border: #e5e7eb;
}

/* Dark mode */
.dark {
  --wp--preset--color--surface: #1a1a1a;
  --wp--preset--color--foreground: #f9fafb;
  --wp--preset--color--border: #374151;
}

/* Component automatically adapts -- no dark: classes needed */
.wc-block-product-card {
  background: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--foreground);
  border: 1px solid var(--wp--preset--color--border);
}
```

**CRITICAL:** Never use Tailwind `dark:` prefixed classes:

```tsx
// WRONG
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50">

// CORRECT -- dark mode handled by CSS variables
<div className="wc-block-product-card">
```

### 9.6 Responsive Design: Media Queries in CSS

Responsive behavior is defined with `@media` queries in CSS, not Tailwind responsive prefixes:

```tsx
// WRONG (Tailwind responsive prefixes)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

// CORRECT (single semantic class)
<div className="wc-block-product-grid">
```

```css
/* In /src/styles/blocks/product/product-grid.css */
.wc-block-product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--40);
}

@media (min-width: 768px) {
  .wc-block-product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--wp--preset--spacing--60);
  }
}

@media (min-width: 1024px) {
  .wc-block-product-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--wp--preset--spacing--80);
  }
}
```

### 9.7 Tailwind Elimination: Before/After Reference

| Category | Tailwind (Old) | WordPress (Current) |
|----------|---------------|-------------------|
| **Layout** | `flex items-center justify-between` | `.wp-flex-between` |
| **Grid** | `grid grid-cols-3 gap-6` | `.wp-grid-3 .wp-grid-gap-lg` |
| **Spacing** | `p-6 mb-4 gap-4` | CSS with `var(--wp--preset--spacing--*)` |
| **Typography** | `text-xl font-semibold` | CSS with `var(--wp--preset--font-size--*)` |
| **Colors** | `bg-white dark:bg-gray-900` | CSS with `var(--wp--preset--color--surface)` |
| **Borders** | `border border-gray-200 rounded-lg` | CSS with `var(--wp--preset--border-radius--*)` |
| **States** | `hover:bg-gray-100 focus:ring-2` | CSS `:hover` / `:focus-visible` rules |
| **Responsive** | `md:grid-cols-2 lg:grid-cols-4` | CSS `@media` queries |
| **Visibility** | `hidden md:block` | `.wp-hidden-mobile` |
| **Shadow** | `shadow-md hover:shadow-lg` | CSS `box-shadow` with transitions |

### 9.8 Tailwind Elimination: Migration Batches

| Batch | Files | Components | Status |
|-------|-------|-----------|--------|
| T6.1 | 3 | ProductCard, AddToCartButton, QuantitySelector | COMPLETE |
| T6.2 | 3 | PriceDisplay, ProductBreadcrumbs, Badge | COMPLETE |
| T6.3 | 3 | Card, Separator, Skeleton, Input | COMPLETE |
| T6.4 | 4 | Textarea, Select, Checkbox, RadioGroup | COMPLETE |
| T6.5 | 3 | Label, Switch, Dialog | COMPLETE |
| T6.6 | 2 | Margin removal + gap migration across all batches | COMPLETE |

**Total:** 18 component files refactored, 200+ Tailwind class instances removed.

### 9.9 Adding New Components (Styling Workflow)

When creating a new component:

1. **Name the BEM class** based on WordPress/WooCommerce convention
2. **Create or find** the appropriate CSS file in `/src/styles/blocks/[category]/`
3. **Write CSS** using only `--wp--preset--*` custom properties
4. **Add `@import`** to `/styles/globals.css` if creating a new CSS file
5. **Use the class** in JSX -- no inline styles, no utility classes
6. **Verify** dark mode works automatically via CSS variable fallthrough
7. **Test** responsive behavior with `@media` queries

```tsx
// Step 1: Component JSX
export const NewFeatureCard = ({ title, description }: Props) => {
  return (
    <div className="wc-block-feature-card">
      <h3 className="wc-block-feature-card__title">{title}</h3>
      <p className="wc-block-feature-card__description">{description}</p>
    </div>
  );
};
```

```css
/* Step 2-3: CSS in /src/styles/blocks/product/feature-card.css */
.wc-block-feature-card {
  background: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--lg);
  padding: var(--wp--preset--spacing--60);
  transition: box-shadow var(--wp--preset--transition--base) ease;
}

.wc-block-feature-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.wc-block-feature-card__title {
  font-size: var(--wp--preset--font-size--x-large);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
  margin-bottom: var(--wp--preset--spacing--30);
}

.wc-block-feature-card__description {
  color: var(--wp--preset--color--muted-foreground);
  line-height: var(--wp--preset--line-height--relaxed);
}
```

---

## 10. Combined Migration Timeline

This timeline records all major modernization milestones in chronological order:

| Date | Milestone | Scope |
|------|-----------|-------|
| Jan 13, 2026 | Tailwind CSS removed from `package.json` | Build config |
| Jan 13, 2026 | Batches 1-3: 17/25 components refactored to WordPress CSS | Styling |
| Jan 27, 2026 | Post formats and advanced WooCommerce data structures | Data layer |
| Feb-Mar 2026 | Phase A: 400+ files migrated from ES5 to modern React | JS/TS |
| Mar 2026 | Batches 1-19: ~240 `export function` to `export const` arrow | Components |
| Mar 2026 | Batches T6.1-T6.6: 18 component files, 200+ Tailwind instances | Styling |
| Mar 11, 2026 | Margin-to-gap migration guidelines created | CSS architecture |
| Mar 12, 2026 | Supplementary ES5 pass: 36 Figma helpers, 15 forwardRef, 22 internal helpers | JS/TS |
| Mar 12, 2026 | Final `var`/`function()` sweep: 50 `var` + 15 ES5 callbacks across 8 data files | JS/TS |
| Mar 12, 2026 | ESLint regression rules + coding standards guidelines created (this document) | Documentation |

**Current state (March 12, 2026):**
- ES5 modernization: **100% COMPLETE** (protected files excepted)
- Tailwind CSS elimination: **100% COMPLETE** (zero Tailwind dependencies remain)
- WordPress CSS alignment: **100% of new and refactored components**
- ESLint regression prevention: **Rules documented, ready for enforcement**

---

## 11. Quick Reference Card

### Always Do

- `export const ComponentName = (props: Props) => { ... };`
- `const value = computeValue();`
- `for (let i = 0; i < arr.length; i++)`
- `.filter((item) => item.active)`
- `.sort((a, b) => a.price - b.price)`
- `PRODUCTS.slice().sort(...)` (copy before mutating sort)
- `[].concat(arr1, arr2)` in data files
- `Object.assign({}, defaults, overrides)` in data files
- `Button.displayName = 'Button'` after `forwardRef`
- WordPress semantic class names in JSX

### Never Do

- `var anything = ...`
- `export function ComponentName() { ... }`
- `function(param) { return ... }` as callback
- `product?.name` in data files
- `value ?? fallback` in data files
- `[...arr1, ...arr2]` at module level in data files
- `` `template ${literal}` `` at module level in data files
- `import from '../../../../deep/path'`
- `console.log()` in production
- `style={{ inline: 'styles' }}`
- Tailwind utility classes

---

## 12. Verification Commands

To verify compliance, run the following checks:

```bash
# Find any remaining var declarations (excluding protected files)
grep -rn "^var \|^export var \| var " src/app/ --include="*.ts" --include="*.tsx" \
  | grep -v "ImageWithFallback" | grep -v "// var" | grep -v "* var"

# Find any remaining function() callbacks
grep -rn "\.filter(function\|\.map(function\|\.reduce(function\|\.sort(function\|\.find(function\|\.forEach(function" \
  src/app/ --include="*.ts" --include="*.tsx"

# Find any remaining export function declarations
grep -rn "^export function " src/app/ --include="*.ts" --include="*.tsx"

# Find optional chaining in data files
grep -rn "\?\." src/app/data/ --include="*.ts"

# Find nullish coalescing in data files
grep -rn "??" src/app/data/ --include="*.ts"

# Find spread operators in data file exports
grep -rn "^\(export\|const\).*\[\.\.\.\\|{\.\.\.}" src/app/data/ --include="*.ts"
```

All commands should return zero results (excluding protected files and JSDoc comment examples).

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 12, 2026 | Initial release documenting post-migration standards, ESLint rules, anti-patterns, and before/after reference |
| 2.0 | March 12, 2026 | Added Tailwind CSS elimination details and updated related guidelines link |