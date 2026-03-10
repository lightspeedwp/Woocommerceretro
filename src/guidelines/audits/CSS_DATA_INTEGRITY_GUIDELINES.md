# CSS Architecture & Data Integrity Guidelines

**Version:** 1.0  
**Created:** February 19, 2026  
**Source:** AUDIT_REPORT_V6 findings  
**Scope:** CSS loading order, data file imports, dead code prevention  
**Status:** ACTIVE

---

## 1. CSS Entry Point Architecture

### 1.1 Single Entry Point Rule

**The project MUST have exactly ONE authoritative CSS entry point.**

In the Figma Make environment:
- Figma auto-loads `/styles/globals.css` (root-level)
- The project's internal entry is `/src/styles/globals.css` (with `@import` chain)
- CSS `@import` chains **may not resolve** in Figma Make

**Current resolution:** `/styles/globals.css` is the effective entry point.

**Rules:**
1. All styles that must appear in production MUST be reachable from `/styles/globals.css`
2. Do NOT add critical styles only to files in the `@import` chain without verifying they load
3. If adding new atomic CSS files, also verify they are included in the flat CSS entry point
4. Never define the same CSS custom property in both entry points with different values

### 1.2 Token System Unity

**All components MUST use the same CSS variable naming convention.**

| Convention | Example | Origin |
|-----------|---------|--------|
| WordPress preset | `--wp--preset--color--background` | `/src/styles/presets/colors.css` |
| Flat tokens | `--background`, `--foreground` | `/styles/globals.css` |

**Rule:** Pick ONE. If `/styles/globals.css` is authoritative, use flat tokens. If the `@import` chain works, use `--wp--preset--*` tokens. Never mix within a single component.

**Mapping (if both systems must coexist temporarily):**
```css
:root {
  /* Flat tokens point to WordPress tokens */
  --background: var(--wp--preset--color--background, #ffffff);
  --foreground: var(--wp--preset--color--foreground, #1b1b1f);
}
```

### 1.3 No Duplicate Base Element Styles

**Base HTML element styles (`body`, `html`, `h1`-`h6`, `p`, `a`, `button`) MUST be defined in exactly ONE CSS file.**

| Element | Authoritative File | Token Used |
|---------|-------------------|------------|
| `body` | `/styles/globals.css` | `--color-background`, `--color-foreground` |
| `h1`-`h6` | `/styles/globals.css` | `--text-5xl` through `--text-base` |
| `p` | `/styles/globals.css` | `--text-base` |
| `a` | `/styles/globals.css` | None (uses `--color-primary` via `--primary`) |
| `*` box-sizing | `/styles/globals.css` | N/A |

If the `@import` chain also defines these (in `/src/styles/globals.css`), they create competing rules. **Remove duplicates from the non-authoritative file.**

---

## 2. CSS File Organization

### 2.1 No Duplicate CSS Files

**Every CSS class MUST be defined in exactly ONE file.**

Before creating a new CSS file, search for existing definitions:
```bash
grep -r "\.my-new-class" src/styles/ --include="*.css"
```

**Known violations to fix:**
- `/src/styles/blocks/blog/blog-sidebar.css` and `/src/styles/blocks/blog/sidebar.css` are duplicates. Keep `blog-sidebar.css` (uses CSS variables). Delete `sidebar.css`.

### 2.2 No Duplicate Selectors Across Files

**A CSS selector (e.g., `.wp-block-button`) MUST NOT appear as a base rule in more than one file.**

Acceptable exceptions:
- **Theme files** may override selectors (e.g., `.dark .wp-block-button` in `theme-dark-mode.css`)
- **Media queries** may re-declare selectors for responsive behavior
- **State modifiers** (e.g., `.wp-block-button:hover`) can appear in the component's own file

Unacceptable:
- `.wp-block-button { display: ... }` in BOTH `wordpress-core.css` AND `blocks/design/button.css`

**Resolution:** Component-specific styles go in the block file. Core/WordPress base styles go in `wordpress-core.css`. If there's overlap, the block file wins and the core file should not define the same property.

### 2.3 No `!important` (Except Print/Motion)

**`!important` is PROHIBITED** in component/section CSS.

Acceptable uses:
- Print stylesheets: `@media print { * { box-shadow: none !important; } }`
- Reduced motion: `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; } }`

If you find yourself needing `!important`, the problem is **CSS loading order**, not specificity. Fix the order instead.

**Common fixes:**
1. Move the overriding styles later in the `@import` chain
2. Increase selector specificity: `.parent .child` instead of `.child`
3. Use a more specific selector: `.wp-flash-sale .wp-flash-sale__button` instead of `.wp-flash-sale__button`

---

## 3. Data File Architecture

### 3.1 Every Template MUST Import From Data Files

**Templates MUST NOT contain hardcoded content data.** All mock data, content strings, feature lists, and configuration objects MUST live in `/src/app/data/`.

**Pattern:**
```tsx
// CORRECT
import { careersData } from '../../data/careers';
export function PageCareers() {
  return <Layout>{careersData.positions.map(p => ...)}</Layout>;
}

// INCORRECT
export function PageCareers() {
  const positions = [
    { title: 'Frontend Developer', ... },  // Hardcoded!
    { title: 'Designer', ... },
  ];
  return <Layout>{positions.map(p => ...)}</Layout>;
}
```

### 3.2 One Data Source Per Entity

**Each data entity type MUST have exactly ONE canonical data file.**

| Entity | Canonical File | Exports |
|--------|---------------|---------|
| Products | `products.ts` | `PRODUCTS`, `Product`, `getProductById()`, etc. |
| Blog Posts | `posts.ts` | `posts`, `Post`, `getPostBySlug()`, `getMediaSource()` |
| Categories | `categories.ts` | `postCategories`, `productCategories` |
| Users | `users.ts` | `USERS` |
| Reviews | `reviews.ts` | `REVIEWS` |

**Known violation:** `blogData.ts` defines `BLOG_POSTS: BlogPost[]` which duplicates `posts.ts` (`posts: WPPost[]`). These MUST be consolidated into `posts.ts`.

### 3.3 No Orphan Data Files

**Every data file in `/src/app/data/` MUST be imported by at least one component.**

To verify:
```bash
for f in src/app/data/*.ts; do
  name=$(basename "$f" .ts)
  count=$(grep -rl "data/$name" src/ --include="*.tsx" --include="*.ts" | wc -l)
  echo "$count imports: $name.ts"
done
```

Files with 0 imports are orphans and indicate that:
1. The corresponding template still has hardcoded data (fix: wire up the import)
2. The data file is obsolete (fix: delete it)

### 3.4 Export Naming Conventions

| Export Type | Convention | Example |
|-------------|-----------|---------|
| Array of records | `UPPER_SNAKE_CASE` | `export const PRODUCTS: Product[] = [...]` |
| Singleton object | `camelCase` | `export const heroContent: HeroContent = {...}` |
| TypeScript interface | `PascalCase` | `export interface Product {...}` |
| Helper function | `camelCase` | `export function getProductById(id: string)` |
| Type alias | `PascalCase` | `export type Post = WPPost` |

### 3.5 Import Path Conventions

**Prefer relative imports from data files.** The `@/data/` alias points to `/src/app/data/` and works in most contexts.

```tsx
// From a template (2 levels up)
import { products } from '../../data/products';

// From a pattern (2 levels up)
import { posts } from '../../data/posts';

// From a block (3 levels up)
import { PRODUCTS } from '../../../data/products';

// Using alias (when it resolves correctly)
import { products } from '@/data/products';
```

**Known issue:** Some contexts may fail with `@/` aliases. Always have relative imports as fallback.

---

## 4. Component Architecture Rules

### 4.1 Component Hierarchy (Enforced)

```
Templates
  -> Parts (Header, Footer, Layout)
  -> Patterns (Hero, ProductGrid, FAQ)
    -> Blocks (ProductCard, SearchInput)
      -> Common (Container, Typography)
      -> UI (Badge, Avatar, Skeleton)
```

**Rules:**
1. Templates may import Parts, Patterns, Common, UI
2. Parts may import Blocks, Common, UI
3. Patterns may import Blocks, Common, UI
4. Blocks may import Common and UI ONLY
5. UI components NEVER import Blocks, Patterns, Parts, or Templates

**Known violation:** `blocks/theme/Navigation.tsx` imports `parts/ShopMegaMenu`, `parts/BlogMegaMenu`, etc. This inverts the hierarchy. MegaMenu components should be reclassified as Patterns or the Navigation component should be reclassified as a Part.

### 4.2 No Component-Level CSS Imports (Current Architecture)

In the current architecture, components do NOT import their own CSS files. All CSS is loaded globally via the entry point.

**If migrating to component-level imports:**
```tsx
// Component file
import './styles/product-card.css';  // Import own styles
export function ProductCard() { ... }
```

**Current approach (global):**
```tsx
// Component file — no CSS import
// Styles loaded via /styles/globals.css or /src/styles/globals.css @import chain
export function ProductCard() { ... }
```

Both approaches are valid. The project currently uses global. Do not mix approaches.

---

## 5. Legacy Tailwind Prevention

### 5.1 Zero Tailwind Classes Rule

**No Tailwind utility classes are permitted in `className` props.**

Prohibited patterns:
```tsx
// ALL of these are WRONG
className="flex items-center gap-4"
className="p-6 bg-white dark:bg-gray-800 rounded-lg"
className="text-sm text-gray-500 dark:text-gray-400"
className="w-full h-full"
className="hover:bg-gray-50 transition-colors"
```

Correct patterns:
```tsx
// Use WordPress BEM classes
className="wc-block-product-card"
className="wc-block-product-card__title"
className="wp-block-button is-style-fill"
className="wp-section-hero"
```

### 5.2 Scanning for Tailwind

Run this search periodically to catch regressions:

```bash
grep -rP "className=\"[^\"]*\b(flex |grid |items-|justify-|gap-\d|p-\d|m-\d|text-sm|text-lg|text-xl|bg-white|bg-gray|border-gray|rounded-lg|shadow-md|hover:|dark:)\b" src/app/components/ --include="*.tsx" -l
```

Any files returned need refactoring.

### 5.3 WordPress BEM Alternatives

| Tailwind Class | WordPress BEM Alternative |
|---------------|--------------------------|
| `flex items-center gap-4` | `.wp-flex-row` or custom BEM class |
| `p-6` | `.wp-spacing-60` or `padding: var(--wp--preset--spacing--60)` |
| `bg-white dark:bg-gray-800` | `.wp-section-bg` (auto dark mode via CSS vars) |
| `text-sm text-gray-500` | `.has-small-font-size` + CSS variable color |
| `rounded-lg` | `border-radius: var(--wp--preset--border-radius--lg)` in CSS |
| `shadow-md` | `.wp-shadow-md` or `box-shadow: var(--wp--preset--shadow--md)` |

---

## 6. Audit Schedule

### Periodic Checks

| Check | Frequency | Tool |
|-------|-----------|------|
| Orphan data files | Every sprint | `grep` scan of data/ imports |
| Tailwind class regression | Every PR | CI grep check |
| Duplicate CSS selectors | Monthly | Cross-file selector comparison |
| `!important` count | Monthly | `grep -c "!important"` |
| CSS entry point sync | After any CSS change | Manual verification |

### Automated Checks (Recommended)

```bash
# Add to CI/CD pipeline or pre-commit hook

# Check 1: No Tailwind classes
if grep -rP "className=\"[^\"]*\b(flex |grid |items-|justify-|gap-\d|p-\d|m-\d)\b" src/app/components/ --include="*.tsx" -q; then
  echo "ERROR: Tailwind utility classes found in components"
  exit 1
fi

# Check 2: No !important (outside allowed files)
ALLOWED="theme-light-mode.css|theme-funky.css"
if grep -r "!important" src/styles/ --include="*.css" -l | grep -vE "$ALLOWED" | grep -q .; then
  echo "WARNING: !important found outside allowed files"
fi

# Check 3: No orphan data files
for f in src/app/data/*.ts; do
  name=$(basename "$f" .ts)
  if ! grep -rl "data/$name" src/app/ --include="*.tsx" --include="*.ts" -q 2>/dev/null; then
    echo "WARNING: Orphan data file: $f"
  fi
done
```

---

## 7. Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-02-19 | Audit V6 identifies dual CSS entry points | Build stability risk |
| 2026-01-13 | Tailwind CSS completely removed from dependencies | WordPress FSE alignment |
| 2026-01-12 | Styles migrated from `/styles/` to `/src/styles/` | Consolidation |
| 2026-01-09 | All files migrated to `/src/app/` structure | Clean architecture |

---

## References

- Audit Report: `/reports/audits/2026-02-19_AUDIT_REPORT_V6_css-architecture-data-integrity.md`
- Task File: `/tasks/css-architecture-data-integrity-remediation.md`
- Audit Prompt: `/prompts/audits/css-architecture-data-integrity-audit.md`
- Main Guidelines: `/guidelines/Guidelines.md`
- Previous CSS Audit: `/guidelines/audits/STYLESHEET_AUDIT_2026-01-13.md`
- Tailwind Removal Audit: `/guidelines/audits/TAILWIND_REMOVAL_GUIDELINES_AUDIT.md`
