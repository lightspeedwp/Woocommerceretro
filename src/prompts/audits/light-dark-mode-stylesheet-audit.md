# Light & Dark Mode Stylesheet Architecture Audit

**Version:** 1.0
**Created:** March 3, 2026
**Category:** CSS Architecture / Theme System
**Priority:** P0 (Critical)
**Estimated Effort:** 4-6 hours

---

## Objective

Perform a comprehensive audit of all light and dark mode styles across the entire codebase, identify all inconsistencies, duplications, and architectural violations, then produce a migration plan to restructure into a clean, dedicated stylesheet architecture:

| Target File | Purpose |
|-------------|---------|
| `/src/styles/theme-variables.css` | Shared design tokens (typography, spacing, borders, shadows, layout, animation). NO colors. |
| `/src/styles/theme-base.css` | Theme-agnostic base element styles (html, body, h1-h6, p, a, input, button). Uses variables only. |
| `/src/styles/theme-light.css` | Light mode color variables (`:root` scope). WCAG AA/AAA contrast-documented. |
| `/src/styles/theme-dark.css` | Dark mode color variables (`.dark` scope). WCAG AA/AAA contrast-documented. |
| `/src/styles/theme-funky.css` | Funky redesign tokens, animations, glassmorphism, neon utilities. Light + dark variants. |
| `/src/styles/globals.css` | Imports only. Orchestrates load order. Zero raw declarations. |

---

## Scope

Audit ALL CSS files in the project:

```
/styles/globals.css                     (root-level duplicate)
/src/styles/globals.css                 (current utility/component dump)
/src/styles/theme-variables.css         (canonical tokens)
/src/styles/theme-light-mode.css        (current light mode)
/src/styles/theme-dark-mode.css         (current dark mode)
/src/styles/theme-funky.css             (funky theme)
/src/styles/critical.css                (critical CSS)
/src/styles/wordpress-core.css          (WP core blocks)
/src/styles/woocommerce-core.css        (WC blocks)
/src/styles/utilities.css               (utility classes)
/src/styles/layout-grid.css             (grid/flex utilities)
/src/styles/blocks/**/*.css             (24+ subdirectories)
/src/styles/sections/**/*.css           (42+ section files)
```

---

## Phase 1: Discovery & Inventory

### 1.1 `:root` Variable Duplication Audit

**Known duplicates (from initial scan):**

| File | `:root` block? | Variables defined |
|------|---------------|-------------------|
| `/src/styles/theme-variables.css` | YES | 70+ canonical tokens (colors, spacing, typography, layout, shadows, borders) |
| `/src/styles/critical.css` | YES | ~15 essential variables (colors, typography, spacing) — duplicates theme-variables |
| `/src/styles/theme-funky.css` | YES | ~10 funky-specific variables (glass, neon) |
| `/src/styles/blocks/theme/header.css` | YES | 2 header height variables |
| `/styles/globals.css` (ROOT) | YES | ~5 core variables — duplicates theme-variables |
| `/src/styles/theme-light-mode.css` | YES (inside `@media`) | 2 high-contrast overrides |

**Audit tasks:**

- [ ] List EVERY `:root` block across all CSS files
- [ ] Identify conflicting values for the same variable name
- [ ] Determine which file "wins" based on CSS cascade/load order
- [ ] Flag any variable defined in `:root` that should be in `.dark` or vice versa
- [ ] Document which variables are color-related (must move to theme-light/theme-dark) vs. theme-agnostic (stay in theme-variables)

### 1.2 Dark Mode Selector Inconsistency Audit

**Critical finding: The codebase uses TWO different dark mode selectors:**

| Selector | Used in | Count |
|----------|---------|-------|
| `.dark` | `theme-dark-mode.css`, `theme-funky.css`, `/styles/globals.css` | ~36 rules |
| `[data-theme="dark"]` | `globals.css` (funky), `utilities.css`, `blocks/**/*.css` | ~31 rules |

**Audit tasks:**

- [ ] List EVERY file that uses `.dark` selector
- [ ] List EVERY file that uses `[data-theme="dark"]` selector
- [ ] Determine which selector is canonical (pick ONE)
- [ ] Check if both selectors are toggled simultaneously in JS (ThemeContext)
- [ ] Flag any file using both selectors
- [ ] Create migration plan to unify on single selector

### 1.3 Hardcoded Color Audit

**Scan for raw hex/rgb/hsl values that should be CSS variables:**

```
Patterns to search:
  - #[0-9a-fA-F]{3,8} (hex colors)
  - rgb\(|rgba\( (rgb colors)
  - hsl\(|hsla\( (hsl colors)
```

**Exclude from flagging:**
- Values inside `:root` / `.dark` variable definitions (those ARE the source of truth)
- Gradient decorative endpoints documented as "decorative only" (neon glows)
- `transparent`, `currentColor`, `inherit`

**Audit tasks:**

- [ ] Count total hardcoded colors across all CSS files
- [ ] Group by file and severity:
  - **P0:** Text colors not using variables (WCAG risk)
  - **P1:** Background colors not using variables (dark mode breakage)
  - **P2:** Border colors not using variables
  - **P3:** Shadow colors (lower risk, decorative)
- [ ] For each hardcoded color, identify which CSS variable it should map to

### 1.4 Scattered Theme Rules Audit

**Dark mode rules are scattered across 12+ files instead of centralized.**

**Audit tasks:**

- [ ] List every `.dark` or `[data-theme="dark"]` rule outside of the dedicated dark mode file
- [ ] For each scattered rule, determine:
  - Can it use CSS variables instead? (preferred — no dark selector needed)
  - Must it remain as a dark-mode-specific override? (move to theme-dark.css)
- [ ] List every light-mode-specific rule outside of the dedicated light mode file
- [ ] Inventory all files in `/src/styles/blocks/` that contain dark mode overrides
- [ ] Inventory all files in `/src/styles/sections/` that contain dark mode overrides

---

## Phase 2: Architecture Analysis

### 2.1 Current File Responsibilities (As-Is)

Document what each file currently contains and what it SHOULD contain:

| File | Currently Contains | Should Contain |
|------|-------------------|----------------|
| `theme-variables.css` | Colors + spacing + typography + layout + shadows + borders + funky spacing | ONLY non-color tokens (typography, spacing, layout, shadows, borders, animation) |
| `theme-light-mode.css` | Light element styles + surface classes + interactive states + borders + a11y + print | ONLY light-mode color variable definitions (`:root { ... }`) |
| `theme-dark-mode.css` | Dark color variables + dark element styles + dark component overrides + a11y | ONLY dark-mode color variable definitions (`.dark { ... }`) |
| `theme-funky.css` | Funky variables + animations + utility classes + orbs + badges + dividers + focus rings | Funky-specific tokens + animations + utility classes (both light/dark) |
| `globals.css` (/src) | Funky checkout/cart styles + WC block overrides + error boundary + dev tools + animations | ONLY `@import` statements (orchestrator) |
| `globals.css` (root) | Duplicate variables + duplicate dark mode + duplicate utilities + header styles | DELETE or reduce to Figma Make entrypoint only |
| `critical.css` | Duplicate variables + essential above-fold styles | Essential above-fold styles ONLY (reference variables, don't redefine) |

### 2.2 CSS Variable Categorization

Categorize every CSS variable into the correct target file:

**theme-variables.css (theme-agnostic, shared):**
```
Typography:     --wp--preset--font-family--*
                --wp--preset--font-size--*
                --wp--preset--font-weight--*
                --wp--preset--line-height--*
                --wp--preset--letter-spacing--*

Spacing:        --wp--preset--spacing--*
                --wp--style--block-gap
                --wp--custom--spacing--*

Layout:         --wp--preset--layout--*

Borders:        --wp--preset--border-radius--*
                --wp--custom--border-width--*

Transitions:    --wp--preset--transition--*

Shadows:        (base shadow definitions - may need light/dark variants)
```

**theme-light.css (light mode colors only):**
```
:root {
  --wp--preset--color--primary: ...;
  --wp--preset--color--background: ...;
  --wp--preset--color--foreground: ...;
  --wp--preset--color--surface: ...;
  --wp--preset--color--border: ...;
  --wp--preset--color--accent: ...;
  --wp--preset--color--muted: ...;
  --wp--preset--color--muted-foreground: ...;
  --wp--preset--color--success: ...;
  --wp--preset--color--warning: ...;
  --wp--preset--color--error: ...;
  --wp--preset--color--neutral-*: ...;
  --wp--preset--color--cta: ...;
  --wp--preset--color--ring: ...;
  --wp--preset--color--popover: ...;
  --wp--preset--shadow--sm: ...;     /* shadows have opacity, need per-theme values */
  --wp--preset--shadow--md: ...;
  --wp--preset--shadow--lg: ...;
  --wp--preset--shadow--xl: ...;
  --wp--preset--focus-ring--color: ...;
  --funky-interactive-color: ...;    /* AA-safe interactive tokens */
  --funky-interactive-color-hover: ...;
}
```

**theme-dark.css (dark mode colors only):**
```
.dark {
  /* Same variable names, dark values */
  --wp--preset--color--primary: ...;
  --wp--preset--color--background: ...;
  ... (all color overrides)
  --wp--preset--shadow--sm: ...;     /* dark-adapted shadows */
  --wp--preset--focus-ring--color: ...;
  --funky-interactive-color: ...;
}
```

**theme-funky.css (funky aesthetic layer):**
```
:root {
  --wp--preset--color--neon-cyan: ...;
  --wp--preset--color--neon-pink: ...;
  --wp--preset--color--neon-lime: ...;
  --funky-glass-bg: ...;
  --funky-glass-border: ...;
  --funky-glass-shadow: ...;
  --funky-gap-*: ...;
}
.dark {
  --funky-glass-bg: ...;
  --funky-glass-border: ...;
  ...
}
/* + animations, utility classes, orbs, badges, focus rings */
```

### 2.3 Shadow Variable Decision

Shadows use `rgba()` with different opacities for light vs dark:

- Light: `rgba(0, 0, 0, 0.05)` — black shadow on light bg
- Dark: `rgba(255, 255, 255, 0.05)` — white shadow on dark bg

**Decision:** Shadow variables MUST be defined in both `theme-light.css` and `theme-dark.css`, NOT in `theme-variables.css`.

### 2.4 Load Order

```css
/* /src/styles/globals.css — ORCHESTRATOR ONLY */

/* 1. Shared tokens (no colors) */
@import './theme-variables.css';

/* 2. Light mode colors (default) */
@import './theme-light.css';

/* 3. Dark mode color overrides */
@import './theme-dark.css';

/* 4. Funky aesthetic layer */
@import './theme-funky.css';

/* 5. Base element styles (uses variables) */
@import './theme-base.css';

/* 6. WordPress core blocks */
@import './wordpress-core.css';

/* 7. WooCommerce core blocks */
@import './woocommerce-core.css';

/* 8. Layout utilities */
@import './layout-grid.css';

/* 9. General utilities */
@import './utilities.css';

/* 10. Block-level styles (auto-import or manual) */
/* @import './blocks/...'; */

/* 11. Section-level styles */
/* @import './sections/...'; */
```

---

## Phase 3: Component-Level Dark Mode Audit

### 3.1 Block CSS Files Audit

For each file in `/src/styles/blocks/**/`:

- [ ] Does it contain dark mode overrides (`.dark` or `[data-theme="dark"]`)?
- [ ] Can those overrides be eliminated by using CSS variables?
- [ ] If not eliminable, should they move to `theme-dark.css` or stay co-located?
- [ ] Are there hardcoded light-mode colors that break in dark mode?

**Check these directories:**
```
/src/styles/blocks/archive/
/src/styles/blocks/blog/
/src/styles/blocks/cart/
/src/styles/blocks/checkout/
/src/styles/blocks/design/
/src/styles/blocks/display/
/src/styles/blocks/embed/
/src/styles/blocks/feedback/
/src/styles/blocks/forms/
/src/styles/blocks/forms-advanced/
/src/styles/blocks/interactive/
/src/styles/blocks/layout/
/src/styles/blocks/media/
/src/styles/blocks/navigation/
/src/styles/blocks/overlay/
/src/styles/blocks/product/
/src/styles/blocks/search/
/src/styles/blocks/sections/
/src/styles/blocks/text/
/src/styles/blocks/theme/
/src/styles/blocks/ui/
/src/styles/blocks/widgets/
/src/styles/blocks/woocommerce/
```

### 3.2 Section CSS Files Audit

For each file in `/src/styles/sections/` (42 files):

- [ ] Does it contain dark mode overrides?
- [ ] Are there hardcoded colors?
- [ ] Does it use `[data-theme="dark"]` or `.dark`?

### 3.3 React Component Inline Style Audit

Search for dark mode handling in React components:

```
Patterns to search in *.tsx files:
  - className.*dark:          (Tailwind dark: prefix — should not exist)
  - [data-theme]              (inline data attributes)
  - style={{                  (inline styles — check for color values)
  - isDark|isDarkMode|darkMode (JS-level theme detection)
```

---

## Phase 4: WCAG Contrast Verification

### 4.1 Light Mode Contrast Ratios

For every text-color + background-color pairing in light mode:

| Element | Foreground | Background | Ratio | Target | Status |
|---------|-----------|------------|-------|--------|--------|
| Body text | `--foreground` (#1f2937) | `--background` (#ffffff) | ? | 4.5:1 AA | ? |
| Muted text | `--muted-foreground` (#4b5563) | `--background` (#ffffff) | ? | 4.5:1 AA | ? |
| Links | #2563eb | `--background` (#ffffff) | ? | 4.5:1 AA | ? |
| Error text | `--error` (#991b1b) | `--background` (#ffffff) | ? | 4.5:1 AA | ? |
| Success text | `--success` (#065f46) | `--background` (#ffffff) | ? | 4.5:1 AA | ? |
| Warning text | `--warning` (#92400e) | `--background` (#ffffff) | ? | 4.5:1 AA | ? |
| Surface text | `--foreground` | `--surface` (#ffffff) | ? | 4.5:1 AA | ? |
| Surface muted | `--muted-foreground` | `--surface` | ? | 4.5:1 AA | ? |
| Button (primary) | `--primary-fg` (#ffffff) | `--primary` (#030213) | ? | 4.5:1 AA | ? |
| Button (secondary) | `--secondary-fg` (#030213) | `--secondary` (#f5f5f7) | ? | 4.5:1 AA | ? |

### 4.2 Dark Mode Contrast Ratios

Same matrix but with dark mode values:

| Element | Foreground | Background | Ratio | Target | Status |
|---------|-----------|------------|-------|--------|--------|
| Body text | `--foreground` (#fafafa) | `--background` (#0f0f0f) | ? | 4.5:1 AA | ? |
| Muted text | `--muted-foreground` (#a3a3a3) | `--background` (#0f0f0f) | ? | 4.5:1 AA | ? |
| Links | #60a5fa | `--background` (#0f0f0f) | ? | 4.5:1 AA | ? |
| Error text | `--error` (#f87171) | `--background` (#0f0f0f) | ? | 4.5:1 AA | ? |
| Surface text | `--foreground` (#fafafa) | `--surface` (#1a1a1a) | ? | 4.5:1 AA | ? |
| Surface muted | `--muted-foreground` (#a3a3a3) | `--surface` (#1a1a1a) | ? | 4.5:1 AA | ? |
| Border visibility | `--border` (#404040) | `--background` (#0f0f0f) | ? | 3:1 (non-text) | ? |

### 4.3 Funky Theme Contrast Ratios

| Element | Light Mode | Dark Mode | Ratio (L) | Ratio (D) | Status |
|---------|-----------|-----------|-----------|-----------|--------|
| `.text-neon-pink` | #be185d on #fff | #f472b6 on #0f0f0f | ? | ? | ? |
| `.text-neon-cyan` | #0e7490 on #fff | #22d3ee on #0f0f0f | ? | ? | ? |
| `.text-neon-lime` | #15803d on #fff | #4ade80 on #0f0f0f | ? | ? | ? |
| `.text-neon-yellow` | #a16207 on #fff | #facc15 on #0f0f0f | ? | ? | ? |
| Interactive color | #0e7490 on #fff | #22d3ee on #0f0f0f | ? | ? | ? |

---

## Phase 5: Migration Plan

### 5.1 New File Creation

Create these new files:

1. **`/src/styles/theme-base.css`** (NEW)
   - Move all base HTML element styles from `theme-light-mode.css` (body, a, input, textarea, select, button)
   - Move base element styles from `wordpress-core.css` entry-content if applicable
   - All styles MUST use CSS variables only — no hardcoded colors
   - Covers: `html`, `body`, `h1`-`h6`, `p`, `a`, `strong`, `small`, `input`, `textarea`, `select`, `button`, `img`
   - Include `:focus-visible` global rule
   - Include `::placeholder` styling
   - Include print styles

2. **`/src/styles/theme-light.css`** (RENAME from `theme-light-mode.css`)
   - ONLY `:root { }` block with color variables
   - ONLY `@media (prefers-contrast: high)` overrides
   - NO element styles, NO component overrides, NO surface classes

3. **`/src/styles/theme-dark.css`** (RENAME from `theme-dark-mode.css`)
   - ONLY `.dark { }` block with color variable overrides
   - Absorb scattered `[data-theme="dark"]` rules that are variable-only
   - NO element styles, NO component overrides

4. **`/src/styles/theme-variables.css`** (REFACTOR existing)
   - REMOVE all color variables (move to theme-light/theme-dark)
   - KEEP typography, spacing, layout, border-radius, border-width, transitions
   - KEEP neon color definitions (they're the same in both modes — decorative)

5. **`/src/styles/theme-funky.css`** (REFACTOR existing)
   - KEEP funky-specific variables, animations, utility classes
   - Absorb funky styles from `globals.css` (checkout, cart, submit button styles)
   - KEEP both `:root` and `.dark` blocks for funky-specific overrides

6. **`/src/styles/globals.css`** (REFACTOR to orchestrator)
   - ONLY `@import` statements
   - Zero raw CSS declarations
   - Defined load order (see Phase 2.4)

### 5.2 File Deletions / Consolidations

| Action | File | Reason |
|--------|------|--------|
| DELETE | `/styles/globals.css` (root) | Duplicate of `/src/styles/` files. Figma Make entrypoint handled separately. |
| MERGE INTO theme-dark.css | Scattered `.dark` / `[data-theme="dark"]` rules from blocks/*.css | Centralize dark mode |
| MERGE INTO theme-funky.css | Funky checkout/cart styles from `globals.css` | Correct file location |
| REFACTOR | `/src/styles/critical.css` | Remove duplicate `:root` variables; reference theme-variables instead |

### 5.3 Dark Mode Selector Unification

**Decision needed:** `.dark` vs `[data-theme="dark"]`

| Option | Pros | Cons |
|--------|------|------|
| `.dark` on `<html>` | Simpler, shorter, WordPress convention | Less semantic |
| `[data-theme="dark"]` on `<html>` | More semantic, data-attribute pattern | Longer, higher specificity |

**Recommendation:** Use `.dark` as canonical. It matches the existing `theme-dark-mode.css` pattern and WordPress FSE conventions. Migrate all `[data-theme="dark"]` selectors to `.dark`.

### 5.4 Block/Section CSS Dark Mode Strategy

For dark mode rules in block and section CSS files, determine per-rule:

1. **Variable-based (PREFERRED):** If the rule just sets colors, replace hardcoded values with CSS variables. The variables automatically switch in dark mode. DELETE the dark override rule.

2. **Centralized override:** If the rule requires structural changes in dark mode (e.g., different opacity, different layout), move to `theme-dark.css`.

3. **Co-located override (EXCEPTION):** If the rule is highly component-specific and would be hard to maintain in a central file, keep it co-located but ensure it uses `.dark` selector (not `[data-theme="dark"]`).

---

## Phase 6: Verification Checklist

### 6.1 Post-Migration Verification

- [ ] All `:root` color variables are ONLY in `theme-light.css`
- [ ] All `.dark` color variables are ONLY in `theme-dark.css`
- [ ] `theme-variables.css` has ZERO color definitions
- [ ] `theme-base.css` has ZERO hardcoded colors
- [ ] `globals.css` has ZERO raw CSS declarations (imports only)
- [ ] No `[data-theme="dark"]` selectors remain anywhere
- [ ] All funky styles are in `theme-funky.css`
- [ ] `/styles/globals.css` (root) is cleaned up or deleted
- [ ] `critical.css` references variables, doesn't redefine them
- [ ] Dark mode toggle works (all components switch correctly)
- [ ] Light mode is default (no flash of dark mode)
- [ ] All WCAG AA contrast ratios pass in light mode
- [ ] All WCAG AA contrast ratios pass in dark mode
- [ ] `prefers-color-scheme: dark` media query works (if supported)
- [ ] `prefers-reduced-motion: reduce` still works for animations
- [ ] No CSS cascade conflicts between files

### 6.2 Visual Regression Testing

Test these pages in BOTH light and dark mode:

- [ ] Front Page (hero, product grid, features, CTA)
- [ ] Shop Archive (product cards, filters, pagination)
- [ ] Single Product (gallery, tabs, reviews, add to cart)
- [ ] Cart Page (cart items, totals, checkout button)
- [ ] Checkout Page (form fields, payment, order summary)
- [ ] Blog Archive (post cards, categories, pagination)
- [ ] Single Blog Post (content, comments, related posts)
- [ ] Contact Page (form, map, info cards)
- [ ] Account Pages (login, register, dashboard)
- [ ] 404 Page
- [ ] Search Results

### 6.3 Component Spot-Check List

Verify these specific components render correctly in both modes:

- [ ] Header (navigation, search, cart icon, logo)
- [ ] Footer (links, newsletter, social icons)
- [ ] MiniCart (drawer, items, totals)
- [ ] ProductCard (image, title, price, badge, button)
- [ ] FilterSidebar (checkboxes, range slider, size buttons)
- [ ] FAQ Accordion (open/closed states)
- [ ] Toast notifications (success, error, info)
- [ ] Modal/Dialog overlays
- [ ] Form inputs (text, select, textarea, checkbox, radio)
- [ ] Buttons (primary, secondary, ghost, outline, disabled)
- [ ] Badges (sale, new, out of stock)
- [ ] Breadcrumbs
- [ ] Pagination
- [ ] Skeleton loaders
- [ ] Error boundaries

---

## Expected Output

### Report Location
`/reports/audits/YYYY-MM-DD_light-dark-mode-stylesheet-audit.md`

### Report Structure

1. **Executive Summary** — Key findings count, severity distribution
2. **`:root` Duplication Matrix** — Every `:root` block, every conflicting variable
3. **Dark Mode Selector Inventory** — Complete list of `.dark` and `[data-theme="dark"]` usage
4. **Hardcoded Color Inventory** — Every hardcoded color, grouped by file and severity
5. **Scattered Theme Rules Inventory** — Every dark/light rule outside dedicated files
6. **WCAG Contrast Audit Results** — Pass/fail for every color pairing
7. **Migration Task List** — Ordered, estimated, with dependencies
8. **Risk Assessment** — What could break during migration

### Task List Location
`/tasks/stylesheet-architecture-migration-tasks.md`

---

## References

- **Current CSS architecture:** `/src/styles/` directory
- **Design tokens docs:** `/guidelines/design-tokens/colors.md`, `dark-mode.md`
- **WordPress CSS alignment:** `/guidelines/Guidelines.md` Section 4
- **Contrast audit:** `/guidelines/design-tokens/CONTRAST_AUDIT_REPORT.md`
- **Attached reference:** `/imports/theme-variables.css` (target file headers for LSX Design System)

---

## Notes

- The attached `/imports/theme-variables.css` contains header comments describing the desired target architecture (theme-base.css, theme-light.css, theme-dark.css, theme-variables.css). Use this as the canonical reference for file naming and purpose.
- The `critical.css` file currently redefines variables that conflict with `theme-variables.css`. After migration, `critical.css` should ONLY contain above-fold layout rules and reference the canonical variables.
- Some block CSS files (e.g., `text/table.css`, `feedback/toast.css`, `display/countdown.css`) have `[data-theme="dark"]` overrides that could be eliminated entirely by using CSS variables.
- The funky checkout/cart styles in `globals.css` (~170 lines) should migrate to `theme-funky.css` to keep the orchestrator file clean.
