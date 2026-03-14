# Orchestrator Prompt: Modern React Migration & CSS Optimization

**Version:** 1.0
**Created:** March 11, 2026
**Scope:** Full codebase audit and migration from legacy ES5 React patterns to modern React development standards, followed by CSS globals.css modularization.
**Priority:** P0 (Blocking further development velocity)

---

## 1. Mission Statement

This orchestrator drives a two-phase initiative:

1. **Phase A (Primary):** Audit and migrate the entire codebase from legacy ES5/parser-compatible React syntax to modern React development standards (JSX, `const`/`let`, arrow functions, destructured imports, spread operators).
2. **Phase B (Secondary):** Resume CSS optimization by extracting the remaining ~70 sections from `/styles/globals.css` into modular files under `/src/styles/`.

**Phase A must be completed before Phase B resumes.**

---

## 2. Background & Problem Statement

### Why Legacy Syntax Exists

The codebase was previously constrained by a "Figma Make parser" that could not handle modern JavaScript/React syntax. All files were written in an ES5-compatible style:

- `React.createElement()` instead of JSX
- `var` instead of `const`/`let`
- `import * as XModule from '...'` + `var X = XModule.X` instead of destructured `import { X } from '...'`
- `function()` declarations instead of arrow functions `() =>`
- No spread operators (`...`)
- No destructured parameters
- Manual `for` loops instead of `.map()`, `.filter()`, `.reduce()`
- Manual array concatenation instead of spread syntax

### Why Migrate Now

These parser constraints are **no longer in effect**. The legacy syntax:

- **Reduces readability** - 3 lines of code where 1 would suffice
- **Increases file size** - ~30-50% code bloat from verbose patterns
- **Hinders maintainability** - Unfamiliar patterns for React developers
- **Blocks IDE features** - No JSX syntax highlighting, autocomplete, or error checking
- **Creates merge conflicts** - Verbose code = more lines = more conflict surface

### Scale of the Problem

| Category | Estimated Files | Legacy Pattern Severity |
|----------|----------------|------------------------|
| `/App.tsx` | 1 | Critical (entry point) |
| `/routes.ts` | 1 | Critical (router config) |
| `/src/app/RootLayout.tsx` | 1 | Critical (root layout) |
| `/src/app/contexts/*.tsx` | 5 | High (shared state) |
| `/src/app/components/parts/*.tsx` | ~30 | High (global parts) |
| `/src/app/components/blocks/**/*.tsx` | ~120 | High (all blocks) |
| `/src/app/components/patterns/**/*.tsx` | ~60 | High (all patterns) |
| `/src/app/components/templates/**/*.tsx` | ~80 | High (all templates) |
| `/src/app/components/common/*.tsx` | ~18 | Medium (shared utils) |
| `/src/app/components/blog/*.tsx` | ~6 | Medium |
| `/src/app/components/pages/*.tsx` | ~4 | Medium |
| `/src/app/components/dev-tools/*.tsx` | ~3 | Low (dev only) |
| `/src/app/components/developer/*.tsx` | ~2 | Low (dev only) |
| `/src/app/hooks/*.ts` | ~7 | Medium |
| `/src/app/services/*.ts` | ~3 | Medium |
| `/src/app/data/*.ts` | ~50+ | Low-Medium |
| `/src/app/utils/*.ts` | ~3 | Low |
| **Total** | **~400+** | |

---

## 3. Phase A: Legacy Syntax Migration

### 3.1 Transformation Rules (CANONICAL REFERENCE)

Every file MUST be transformed according to ALL of the following rules:

#### Rule 1: Destructured Named Imports (Replace `import * as`)

```tsx
// BEFORE (Legacy)
import * as ReactRouterModule from 'react-router';
import * as HeaderModule from './Header';
var useLocation = ReactRouterModule.useLocation;
var Link = ReactRouterModule.Link;
var Header = HeaderModule.Header;

// AFTER (Modern)
import { useLocation, Link } from 'react-router';
import { Header } from './Header';
```

**Exception:** `import React from 'react'` stays as-is (default import).

#### Rule 2: `const` / `let` (Replace ALL `var`)

```tsx
// BEFORE
var items = useState([]);
var count = 0;

// AFTER
const [items, setItems] = useState<CartItem[]>([]);
let count = 0;  // Only use `let` if the variable is reassigned
```

**Decision rule:**
- Use `const` for everything that is never reassigned (95%+ of cases)
- Use `let` ONLY for variables that are reassigned (loop counters, accumulators)
- NEVER use `var`

#### Rule 3: JSX (Replace ALL `React.createElement`)

```tsx
// BEFORE
React.createElement('div', { className: 'wp-block-group' },
  React.createElement('h2', { className: 'wp-block-heading' }, title),
  React.createElement('p', null, description)
);

// AFTER
<div className="wp-block-group">
  <h2 className="wp-block-heading">{title}</h2>
  <p>{description}</p>
</div>
```

**Special cases:**
- `React.createElement(Component, { key: 'x', ...props }, children)` becomes `<Component key="x" {...props}>{children}</Component>`
- `React.createElement(React.Fragment, null, [...])` becomes `<>{...}</>`
- Conditional rendering: use ternaries `{condition ? <A /> : <B />}` or logical AND `{condition && <A />}`

#### Rule 4: Arrow Functions (Replace `function()`)

```tsx
// BEFORE
var handleClick = function(e) {
  e.preventDefault();
};

useEffect(function() {
  document.title = 'Page';
  return function() {
    document.title = '';
  };
}, []);

// AFTER
const handleClick = (e: React.MouseEvent) => {
  e.preventDefault();
};

useEffect(() => {
  document.title = 'Page';
  return () => {
    document.title = '';
  };
}, []);
```

**Exception:** Exported component functions MAY remain as named function declarations for better stack traces and React DevTools display:

```tsx
// ACCEPTABLE (named export)
export function ProductCard({ product }: ProductCardProps) { ... }

// ALSO ACCEPTABLE (arrow with displayName)
export const ProductCard = ({ product }: ProductCardProps) => { ... };
```

#### Rule 5: Destructured Parameters

```tsx
// BEFORE
export function Header(props) {
  var className = props.className || '';
  var children = props.children;

// AFTER
export function Header({ className = '', children }: HeaderProps) {
```

#### Rule 6: Spread Operators

```tsx
// BEFORE
var allChildren = [];
function addRoutes(routes) {
  for (var i = 0; i < routes.length; i++) {
    allChildren.push(routes[i]);
  }
}
addRoutes(shopRoutes);
addRoutes(blogRoutes);

// AFTER
const allChildren = [
  ...shopRoutes,
  ...blogRoutes,
];
```

#### Rule 7: Array Methods (`.map`, `.filter`, `.reduce`)

```tsx
// BEFORE
var chips = [];
for (var i = 0; i < categories.length; i++) {
  chips.push(React.createElement('span', { key: categories[i] }, categories[i]));
}

// AFTER
const chips = categories.map((cat) => (
  <span key={cat}>{cat}</span>
));
```

#### Rule 8: Template Literals

```tsx
// BEFORE
var cls = 'wp-block-product-card' + (featured ? ' wp-block-product-card--featured' : '');

// AFTER
const cls = `wp-block-product-card${featured ? ' wp-block-product-card--featured' : ''}`;
```

#### Rule 9: TypeScript Typing (Add Where Missing)

```tsx
// BEFORE
export function CartProvider(props) {
  var children = props.children;

// AFTER
interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
```

- Add interface definitions for all component props
- Add return type annotations where non-obvious
- Use generic types for hooks (`useState<CartItem[]>([])`)

#### Rule 10: React Hook Destructuring

```tsx
// BEFORE
var _state = useState('');
var value = _state[0];
var setValue = _state[1];

// AFTER
const [value, setValue] = useState('');
```

---

### 3.2 Audit Sub-Prompt: Legacy Pattern Scanner

**Purpose:** Scan every `.tsx` and `.ts` file in the codebase and produce a categorized inventory of files containing legacy patterns.

**Execution:**

1. Scan all `.tsx` and `.ts` files under:
   - `/App.tsx`
   - `/routes.ts`
   - `/src/app/**/*.tsx`
   - `/src/app/**/*.ts`
   - `/src/main.tsx`

2. For each file, detect and count occurrences of:
   - `React.createElement` calls
   - `import * as` statements (excluding `import * as React`)
   - `var ` declarations (at any indent level)
   - `function(` anonymous function expressions (not named exports)
   - Manual `for (var i` loops where `.map`/`.filter` would work
   - `props.` access without destructuring
   - Array index destructuring (`_state[0]`, `_state[1]`)

3. Classify each file by severity:
   - **Critical:** Entry points (`App.tsx`, `routes.ts`, `RootLayout.tsx`)
   - **High:** Contexts, Parts, and frequently-imported blocks
   - **Medium:** Templates, patterns, common components
   - **Low:** Data files, utilities, dev tools

4. Output format:
   ```
   ## Legacy Pattern Audit Results
   
   ### Critical Files (Migrate First)
   | File | createElement | import* | var | function() | Total |
   |------|-------------|---------|-----|------------|-------|
   | /App.tsx | 6 | 7 | 7 | 0 | 20 |
   
   ### High Priority Files
   ...
   
   ### Summary
   - Total files scanned: X
   - Files with legacy patterns: Y
   - Total legacy pattern instances: Z
   - Estimated migration effort: X hours
   ```

5. Save audit report to: `/reports/audits/YYYY-MM-DD_modern-react-migration-audit.md`

---

### 3.3 Migration Batching Strategy

Files are migrated in dependency order to avoid breaking imports. Each batch should be completable in a single session.

#### Batch 0: Critical Infrastructure (FIRST)
**Files:** 3
**Dependency:** Everything depends on these
```
/App.tsx
/routes.ts
/src/app/RootLayout.tsx
```

**Special handling for `/routes.ts`:**
- The `resolveComp()` helper function can be eliminated
- Use direct named imports: `import { FrontPageRetro } from '...'`
- Use `createBrowserRouter` with clean JSX-free route config (route objects don't need JSX)
- Replace `var allChildren = []; addRoutes(...)` with spread: `const allChildren = [...shopRoutes, ...blogRoutes, ...]`

#### Batch 1: Contexts (HIGH - Shared State)
**Files:** 5
**Dependency:** Many components import these
```
/src/app/contexts/CartContext.tsx
/src/app/contexts/ThemeContext.tsx
/src/app/contexts/WishlistContext.tsx
/src/app/contexts/ComparisonContext.tsx
/src/app/contexts/QuickViewContext.tsx
```

#### Batch 2: Hooks & Utils
**Files:** ~10
**Dependency:** Used by many components
```
/src/app/hooks/*.ts
/src/app/utils/*.ts
/src/main.tsx
```

#### Batch 3: Common Components
**Files:** ~18
**Dependency:** Used across all component types
```
/src/app/components/common/*.tsx
```

#### Batch 4: UI & Design Blocks
**Files:** ~30
**Dependency:** Used by patterns and templates
```
/src/app/components/blocks/ui/*.tsx
/src/app/components/blocks/design/*.tsx
/src/app/components/blocks/forms/*.tsx
/src/app/components/blocks/forms-advanced/*.tsx
/src/app/components/blocks/feedback/*.tsx
/src/app/components/blocks/display/*.tsx
```

#### Batch 5: Functional Blocks
**Files:** ~50
**Dependency:** Used by patterns and templates
```
/src/app/components/blocks/archive/*.tsx
/src/app/components/blocks/cart/*.tsx
/src/app/components/blocks/checkout/**/*.tsx
/src/app/components/blocks/navigation/*.tsx
/src/app/components/blocks/overlay/*.tsx
/src/app/components/blocks/product/*.tsx
/src/app/components/blocks/search/*.tsx
/src/app/components/blocks/single-product/*.tsx
/src/app/components/blocks/theme/*.tsx
/src/app/components/blocks/interactive/*.tsx
/src/app/components/blocks/layout/*.tsx
/src/app/components/blocks/media/*.tsx
/src/app/components/blocks/order/*.tsx
/src/app/components/blocks/blog/*.tsx
```

#### Batch 6: Parts (Global Regions)
**Files:** ~30
**Dependency:** Used by templates
```
/src/app/components/parts/*.tsx
```

#### Batch 7: Patterns
**Files:** ~60
**Dependency:** Used by templates
```
/src/app/components/patterns/*.tsx
/src/app/components/patterns/account/*.tsx
/src/app/components/patterns/sections/*.tsx
/src/app/components/patterns/shop/*.tsx
```

#### Batch 8: Templates
**Files:** ~80
**Dependency:** Leaf nodes (depend on everything above)
```
/src/app/components/templates/*.tsx
/src/app/components/templates/blog/*.tsx
```

#### Batch 9: Pages, Blog, Dev Tools & Data
**Files:** ~60
**Dependency:** Minimal
```
/src/app/components/pages/*.tsx
/src/app/components/blog/*.tsx
/src/app/components/dev-tools/*.tsx
/src/app/components/developer/*.tsx
/src/app/components/debug/*.tsx
/src/app/data/*.ts
/src/app/services/*.ts
/src/app/constants/*.ts
/src/app/types/*.ts
```

#### Batch 10: Index Files & Barrel Exports
**Files:** ~20
```
/src/app/components/blocks/*/index.ts
/src/app/components/patterns/*/index.ts
```

---

### 3.4 Per-File Migration Checklist

For EACH file being migrated, verify:

- [ ] All `import * as XModule` replaced with `import { X }` destructured imports
- [ ] All `var X = XModule.X` lines removed (replaced by destructured import above)
- [ ] All `var` replaced with `const` or `let`
- [ ] All `React.createElement` replaced with JSX
- [ ] All `function()` callbacks replaced with arrow functions `() =>`
- [ ] All `props.X` access replaced with destructured parameters
- [ ] All `_state[0]`/`_state[1]` replaced with `const [val, setVal] = useState()`
- [ ] All manual `for` loops replaced with `.map()`, `.filter()`, `.reduce()` where appropriate
- [ ] All string concatenation replaced with template literals where cleaner
- [ ] TypeScript interfaces added for component props
- [ ] File compiles without errors
- [ ] No `var` keyword remains in the file
- [ ] No `React.createElement` remains in the file
- [ ] No `import * as` remains in the file (except `import React from 'react'`)
- [ ] Exports unchanged (named exports stay named, default exports stay default)
- [ ] Component behavior unchanged (no functional changes)

---

### 3.5 Migration Verification Sub-Prompt

After each batch is complete, run this verification:

1. **Pattern scan:** Search for remaining legacy patterns in migrated files
   ```
   # Should return 0 results for migrated files:
   grep -r "React\.createElement" /path/to/migrated/files
   grep -r "^var " /path/to/migrated/files
   grep -r "import \* as" /path/to/migrated/files
   ```

2. **Compile check:** Ensure all files compile without TypeScript errors

3. **Export check:** Verify all exports match the original (no accidentally changed export names)

4. **Render check:** Verify the app renders correctly (smoke test critical routes)

---

### 3.6 Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Breaking imports between files | Migrate in dependency order (Batch 0 first, Batch 8 last) |
| Changing export signatures | Keep ALL existing named exports unchanged |
| Accidental behavior changes | Only change syntax, NEVER change logic |
| Large file count overwhelms session | Max 15-20 files per session, verify between batches |
| Barrel export (`index.ts`) breaks | Migrate index files last (Batch 10) |
| Components that re-export from blocks/ui | Verify `components/ui/*.tsx` shadcn files are untouched |

---

### 3.7 Files to SKIP (Do Not Migrate)

These files should NOT be modified:

- `/src/app/components/figma/ImageWithFallback.tsx` (PROTECTED)
- `/components/ui/*.tsx` (shadcn/ui primitives - external library code)
- `/components/ui/utils.ts` (utility, may have its own patterns)
- Any file in `/node_modules/`
- Any `.css` file (CSS-only, no React)
- Any `.md` file (documentation)
- Any `.json` file (configuration)

---

## 4. Phase B: CSS Optimization (After Phase A)

Once Phase A is complete, resume the CSS modularization work:

### 4.1 Current CSS State

- **Entry point:** `/styles/globals.css` (3,000+ lines, 79 distinct sections)
- **Already extracted:** 9 sections into `/src/styles/sections/legacy-*.css`
- **Remaining:** ~70 sections still inline in `globals.css`

### 4.2 CSS Extraction Approach

For each remaining section in `globals.css`:

1. **Identify** the section boundaries (comment headers)
2. **Extract** the CSS into a new file: `/src/styles/sections/[section-name].css` or `/src/styles/blocks/[category]/[block-name].css`
3. **Replace** the inline CSS in `globals.css` with an `@import` statement
4. **Verify** styles still apply correctly
5. **NEVER delete** any existing files in `/src/styles/` (PROTECTED)

### 4.3 Naming Convention for Extracted Files

| Section Type | Target Path | Example |
|-------------|------------|---------|
| Page sections | `/src/styles/sections/` | `hero.css`, `faq.css` |
| Block styles | `/src/styles/blocks/[category]/` | `blocks/product/product-card.css` |
| Theme styles | `/src/styles/` root | `theme-variables.css` |

### 4.4 CSS Extraction Batching

Extract in groups of 5-10 sections per session:
- Batch B1: Front page sections (hero, features, CTA, trust band)
- Batch B2: Product sections (single product, gallery, tabs, reviews)
- Batch B3: Cart & checkout sections
- Batch B4: Blog sections
- Batch B5: Account sections
- Batch B6: Legal & info page sections
- Batch B7: Utility & layout sections
- Batch B8: Remaining misc sections

---

## 5. Workflow & Reporting

### 5.1 Per-Session Workflow

1. **Announce** which batch you're working on
2. **Audit** files in the batch (count legacy patterns)
3. **Migrate** each file following the transformation rules
4. **Verify** using the per-file checklist
5. **Report** progress (files completed, patterns eliminated)

### 5.2 Progress Tracking

Update `/tasks/task-list.md` with:

```markdown
## Modern React Migration

### Phase A: Legacy Syntax Migration
- [x] Batch 0: Critical Infrastructure (3 files) - App.tsx, routes.ts, RootLayout.tsx
- [x] Batch 1: Contexts (5 files)
- [x] Batch 2: Hooks & Utils (~10 files)
- [x] Batch 3: Common Components (~18 files)
- [x] Batch 4: UI & Design Blocks (~30 files)
- [x] Batch 5: Functional Blocks (~50 files)
- [x] Batch 6: Parts (~30 files)
- [x] Batch 7: Patterns (~60 files)
- [x] Batch 8: Templates (~80 files)
- [x] Batch 9: Pages, Blog, Dev Tools & Data (~60 files)
- [x] Batch 10: Index Files (~20 files) — Completed March 11, 2026. Migrated blocks/index.ts from `import * as` to `export * as` re-exports; updated sections/index.ts JSDoc. All 20 subdirectory barrel files already used modern syntax.

### Phase B: CSS Modularization (After Phase A)
- [x] Batch B0: First 9 sections extracted (legacy-*.css)
- [x] Batch B1: Front page sections — Completed March 11, 2026. Extracted 6 inline sections (~200 lines) into 2 new files (`front-page.css`, `layout-container.css`), updated 2 existing files (`category-showcase.css`, `newsletter.css`), removed duplicate quick entry/category/newsletter inline CSS.
- [ ] Batch B2: Product sections
- [ ] Batch B3: Cart & checkout sections
- [ ] Batch B4: Blog sections
- [ ] Batch B5: Account sections
- [ ] Batch B6: Legal & info page sections
- [ ] Batch B7: Utility & layout sections
- [ ] Batch B8: Remaining sections
```

### 5.3 Report Output

After each session, save a report to:
```
/reports/migration/YYYY-MM-DD_modern-react-migration-batch-X.md
```

Report template:
```markdown
# Modern React Migration - Batch X Report

**Date:** YYYY-MM-DD
**Batch:** X - [Description]
**Files migrated:** Y/Z

## Files Completed
| File | Patterns Removed | Status |
|------|-----------------|--------|
| /path/to/file.tsx | 15 | Done |

## Patterns Eliminated
- `React.createElement`: X instances removed
- `import * as`: X instances removed
- `var`: X instances removed
- `function()`: X instances removed

## Verification
- [ ] All files compile
- [ ] No legacy patterns remain in batch files
- [ ] Exports unchanged
- [ ] App renders correctly

## Next Session
- Batch X+1: [Description] (~Y files)
```

---

## 6. Success Criteria

### Phase A Complete When:
- Zero `React.createElement` calls in any `.tsx` file (except protected files)
- Zero `var` declarations in any `.tsx`/`.ts` file (except protected files and shadcn/ui)
- Zero `import * as XModule` patterns (except `import React`)
- All component props have TypeScript interfaces
- All files use JSX for rendering
- App compiles and renders identically to pre-migration state

### Phase B Complete When:
- `/styles/globals.css` contains only `@import` statements and critical above-the-fold CSS
- All 79 sections extracted to modular files in `/src/styles/`
- All `@import` statements resolve correctly
- No styling regressions in light or dark mode

---

## 7. Quick Start Command

To begin the migration, use this prompt:

> "Start the Modern React Migration. Begin with Phase A, Batch 0 (Critical Infrastructure). Migrate `/App.tsx`, `/routes.ts`, and `/src/app/RootLayout.tsx` from legacy ES5 syntax to modern React standards following the transformation rules in `/prompts/refactoring/orchestrator_modern-react-migration.md`. After completing each file, verify using the per-file checklist."

---

## 8. Related Documents

- **Guidelines:** `/guidelines/Guidelines.md` (main project guidelines)
- **CSS Optimization:** `/guidelines/development/css-optimization-guidelines.md`
- **Task List:** `/tasks/task-list.md`
- **Previous Legacy Fixes:** `/reports/migration/2026-03-04_legacy-syntax-complete-summary.md`
- **CSS Extraction Script:** `/scripts/split_globals.py`