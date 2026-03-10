# Prompt: Systematic Codebase Audit — CSS Architecture & Data Integrity

**Version:** 1.0  
**Created:** February 19, 2026  
**Project:** WooCommerce FSE Prototype (Figma Make)  
**Environment:** Figma Make (React + standard CSS, NO Tailwind)

---

## Context

This project is a WordPress FSE block theme prototype built in Figma Make. It has been refactored to:

1. Move all content from hardcoded templates into dedicated data files (`/src/app/data/`)
2. Adopt an Atomic CSS architecture (one CSS file per component/section) under `/src/styles/blocks/` and `/src/styles/sections/`
3. Completely remove Tailwind CSS — all styling uses standard CSS with WordPress/WooCommerce BEM class names and `--wp--preset--*` / `--wp--custom--*` CSS custom properties

### Critical Environment Constraints

- **Figma Make auto-loads `/styles/globals.css`** as the CSS entry point (root-level file)
- **CSS `@import` chains may not resolve** in the Figma Make environment (confirmed by comment in `/src/app/App.tsx:4-5`)
- **Figma's CSS parser breaks** on escaped brackets, forward slashes, and Tailwind JIT-generated selectors
- The project has TWO potential CSS entry points: `/styles/globals.css` (Figma's, flat) and `/src/styles/globals.css` (project's, 142 `@import` statements)
- The project has TWO potential router entry points: `/App.tsx` (Figma's) and `/src/app/App.tsx` + `/src/app/routes.tsx` (project's)

### Current Known Problems

1. CSS loading order issues (styles cascading incorrectly)
2. Potential build-breaking data import errors
3. Legacy Tailwind utility classes remaining in `.tsx` files
4. Templates with hardcoded content that should use data files

---

## Your Task

Perform a deep-scan audit of the `/src/` directory. **Do not attempt to fix style preferences (like colors) yet.** Focus strictly on architecture, build stability, and loading order.

---

## Phase 1: CSS Import & Cascade Analysis

### 1.1 Analyze CSS Entry Points

1. **Read both CSS entry points:**
   - `/styles/globals.css` (Figma's auto-loaded flat file)
   - `/src/styles/globals.css` (project's @import chain file)
2. **Check for token conflicts:** Both files may define CSS custom properties. Identify overlapping variable names with different values.
3. **Check for duplicate base element styles:** Both files may define `body`, `html`, `h1`-`h6`, `p`, `a` styles.
4. **Determine which tokens components actually reference:** Scan `.tsx` files for `var(--wp--preset--*)` vs `var(--background)` patterns.

### 1.2 Verify @import Chain Resolution

1. **Read `/src/main.tsx`** — Does it import `/src/styles/globals.css`?
2. **Read `/src/app/App.tsx`** — Does it have comments about @import limitations?
3. **Count total files in @import chain** — How many CSS files depend on this chain?
4. **Assess impact if chain fails** — Which styles are lost?

### 1.3 Component-to-CSS Mapping

1. **Scan all `.tsx` files** in `/src/app/components/patterns/` and `/src/app/components/blocks/`
2. **Check for CSS imports** — Does any component explicitly import its own CSS file?
3. **Flag missing imports** — Components relying on global scope instead of explicit imports
4. **Flag orphan CSS** — CSS files in `/src/styles/blocks/` and `/src/styles/sections/` that are never imported anywhere

### 1.4 Specificity Conflicts

1. **Search for `!important`** in all CSS files — Count and categorize (cascade fix vs. intentional)
2. **Search for duplicate selectors** — Same class name defined in multiple CSS files (e.g., `.wp-block-button` in `wordpress-core.css` AND `blocks/design/button.css`)
3. **Identify generic class names** (e.g., `.card`, `.container`) that might conflict across files

---

## Phase 2: Data Layer Verification

### 2.1 Import/Export Mismatches

1. **Scan all files importing from `/src/app/data/`**
2. **For each import, verify the export exists:**
   - Named exports: `import { PRODUCTS } from '../../data/products'` — does `products.ts` export `PRODUCTS`?
   - Type imports: `import { Product } from '../../data/products'` — does `products.ts` export `Product`?
   - Default exports: `import data from '../../data/products'` — does `products.ts` have a default export?
3. **Check for naming inconsistencies:** `products` vs `PRODUCTS` vs `Product` (lowercase data, UPPERCASE constant, PascalCase type)

### 2.2 Path Resolution

1. **Verify all relative import paths** (e.g., `../../data/`) resolve to actual files
2. **Check for alias usage consistency** — Some files use `@/data/`, some use `../../data/`
3. **Flag any `../../../../` deep imports** — These are fragile and should use aliases

### 2.3 Type Safety

1. **Check if components import TypeScript interfaces** from data files or use `any`
2. **Identify duplicate type definitions** — Same interface defined in multiple places
3. **Check for dual blog data systems** — `posts.ts` (WPPost) vs `blogData.ts` (BlogPost)

### 2.4 Orphan Data Files

1. **List all files in `/src/app/data/`**
2. **For each data file, search the entire codebase for imports**
3. **Flag files with zero imports** — These are orphan data files
4. **For orphan files, identify the template that SHOULD import them**

---

## Phase 3: Dead Code & Zombie Imports

### 3.1 Unused Imports

1. **Components that import CSS or data but never use the imported values**
2. **Components that import functions but only use types (should use `import type`)**

### 3.2 Legacy Tailwind Artifacts

1. **Search all `.tsx` files for Tailwind utility classes** in `className` props
2. **Pattern to search for:** `className="[^"]*\b(flex|grid|items-center|justify-between|gap-\d|p-\d|m-\d|text-sm|text-lg|bg-white|bg-gray|border-gray|rounded-lg|shadow-md|hover:bg|dark:bg|w-full|h-full)\b`
3. **Categorize severity:**
   - Heavy (50+ Tailwind classes): Full component refactor needed
   - Moderate (10-30 classes): Partial refactor
   - Light (1-10 classes): Quick fix

### 3.3 Architecture Violations

1. **Blocks importing Parts** — Blocks should only compose Common and UI, not Parts
2. **Patterns importing Templates** — Patterns should not import Templates
3. **UI importing Blocks** — Circular dependency risk
4. **Components importing from outside `/src/app/`** — Check for root-level imports

---

## Output Format

Present findings in a Markdown report titled `AUDIT_REPORT_V6.md` with these sections:

```markdown
# AUDIT_REPORT_V6: CSS Architecture & Data Integrity

## 1. Critical Errors (Build Blockers)
- Broken imports, missing files, syntax errors
- Dual entry point conflicts
- @import chain failures

## 2. Loading Order Risks
- Duplicate CSS imports
- Specific cascade warnings
- Duplicate selectors across files
- !important abuse locations

## 3. Architecture Violations
- Components missing their atomic CSS file
- Component hierarchy violations
- Templates with hardcoded data
- Orphan data files
- Legacy Tailwind classes

## 4. Dead Code
- Orphan CSS files
- Unused imports
- Zombie data files

## 5. Remediation Plan
Step-by-step list of exactly which files to edit, in priority order:
- P0: Build blockers (CSS entry point, router)
- P1: Cascade fixes (duplicates, selectors)
- P2: Architecture (data wiring, Tailwind removal)
- P3: Tech debt (dead code cleanup)
```

---

## Scan Commands Reference

Use these scan patterns when searching the codebase:

```bash
# Find CSS imports in components
grep -r "import.*\.css" src/app/components/ --include="*.tsx"

# Find data imports
grep -r "from.*data/" src/app/components/ --include="*.tsx"

# Find !important usage
grep -r "!important" src/styles/ --include="*.css"

# Find Tailwind classes in components
grep -rP "className=\"[^\"]*\b(flex|grid|items-|justify-|gap-\d|p-\d|m-\d|text-sm|bg-white|dark:bg|rounded-lg)\b" src/app/components/ --include="*.tsx"

# Find duplicate selectors
grep -rh "^\.[a-z]" src/styles/ --include="*.css" | sort | uniq -d

# Find orphan data files (files not imported anywhere)
for f in src/app/data/*.ts; do
  name=$(basename "$f" .ts)
  count=$(grep -rl "data/$name" src/app/components/ --include="*.tsx" | wc -l)
  [ "$count" -eq 0 ] && echo "ORPHAN: $f"
done
```

---

## Key Files to Read First

1. `/styles/globals.css` — Figma's CSS entry point (understand what loads automatically)
2. `/src/styles/globals.css` — Project's @import chain (understand intended architecture)
3. `/src/main.tsx` — Application entry (where CSS is imported)
4. `/src/app/App.tsx` — Contains critical comment about @import limitation
5. `/App.tsx` — Figma's router entry point
6. `/src/app/routes.tsx` — Project's router configuration
7. `/src/app/data/` — All data files (list and cross-reference with templates)

---

## Environment Notes

- **React version:** 18+
- **Router:** react-router v7 (Data mode with `createHashRouter`)
- **CSS:** Standard CSS only (NO Tailwind, NO CSS-in-JS)
- **Class naming:** WordPress BEM (`wp-block-*`, `wc-block-*`, `woocommerce-*`)
- **CSS variables:** WordPress theme.json aligned (`--wp--preset--*`, `--wp--custom--*`)
- **Dark mode:** CSS variables + `.dark` class on `<html>` OR `[data-theme="dark"]`
- **Build:** Vite (with path aliases configured in `vitest.config.ts`)
