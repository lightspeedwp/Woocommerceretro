# Audit Prompt A8: CSS Architecture Deep Audit

**Version:** 1.0  
**Created:** February 21, 2026  
**Orchestrator:** `/prompts/funky-redesign-orchestrator.md`  
**Report Output:** `/reports/audits/2026-02-21-css-architecture-deep-audit.md`  
**Task Output:** `/tasks/css-architecture-remediation.md`  
**Supersedes:** `/tasks/css-architecture-data-integrity-remediation.md` (Phase 1, 3, 4 items)

---

## Objective

Comprehensive audit of the ENTIRE CSS architecture. This is the MOST CRITICAL audit and MUST complete before any funky redesign implementation. It identifies the dual token system conflict, dead CSS, duplication, `!important` abuse, dark mode gaps, and optimisation opportunities.

## Pre-Read (Required)

```
/styles/globals.css                    — Figma's flat CSS file (secondary token system)
/src/styles/globals.css                — Project's structured WordPress file
/src/styles/theme-variables.css        — WordPress CSS variables (primary tokens)
/src/styles/theme-funky.css            — Funky design tokens and animations
/src/styles/theme-dark-mode.css        — Dark mode variable overrides
/src/styles/theme-light-mode.css       — Light mode specifics
/src/styles/wordpress-core.css         — WordPress block styles
/src/styles/woocommerce-core.css       — WooCommerce block styles
/src/styles/utilities.css              — Utility classes
/src/styles/layout-grid.css            — Layout grid system
/guidelines/Guidelines.md             — Section 4 (Styling System)
/tasks/css-architecture-data-integrity-remediation.md — Previous audit tasks
/reports/audits/2026-02-19_AUDIT_REPORT_V6_css-architecture-data-integrity.md — Previous audit
```

## Procedure

### Part A: Token System Conflict Analysis

This is the highest-priority finding. Two competing token systems exist:

#### A.1: Flat File Tokens (`/styles/globals.css`)
Scan for all CSS custom properties defined in `:root`:
- `--background`, `--foreground`, `--primary`, `--primary-foreground`
- `--secondary`, `--muted`, `--accent`, `--destructive`
- `--border`, `--input`, `--ring`
- `--text-*`, `--space-*`
- `--color-*` mapped aliases

#### A.2: WordPress Tokens (`/src/styles/theme-variables.css`)
Document all `--wp--preset--*` variables:
- `--wp--preset--color--*` (colours)
- `--wp--preset--spacing--*` (spacing)
- `--wp--preset--font-size--*` (typography)
- `--wp--preset--font-family--*` (fonts)
- `--wp--preset--font-weight--*` (weights)
- `--wp--preset--border-radius--*` (radius)
- `--wp--preset--shadow--*` (shadows)
- `--wp--preset--transition--*` (transitions)

#### A.3: Conflict Matrix
Create a matrix showing:

| Semantic Purpose | Flat File Variable | WP Variable | Same Value? | Components Using Flat | Components Using WP |
|---|---|---|---|---|---|

#### A.4: Component Token Usage
For EACH `.tsx` file in `/src/app/components/`, search `className` strings and CSS files for:
- References to flat file tokens (via CSS classes that use `var(--background)`, etc.)
- References to WP tokens (via CSS classes that use `var(--wp--preset--color--background)`, etc.)
- Direct usage of either in inline styles

Count: X components use flat tokens, Y components use WP tokens, Z use both.

### Part B: CSS File Inventory

#### B.1: Top-Level Files
List and measure all files directly in `/src/styles/`:
```
globals.css, theme-variables.css, theme-funky.css,
theme-dark-mode.css, theme-light-mode.css,
wordpress-core.css, woocommerce-core.css,
utilities.css, layout-grid.css
```

For each: line count, selector count, variable definition count.

#### B.2: Block CSS Files
List ALL files in `/src/styles/blocks/` recursively (22 subdirectories):
```
archive/, blog/, cart/, checkout/, design/, display/,
embed/, feedback/, forms/, forms-advanced/, interactive/,
layout/, media/, navigation/, overlay/, product/,
search/, sections/, text/, theme/, ui/, widgets/, woocommerce/
```

For each file: line count, `!important` count, hardcoded hex count.

#### B.3: Section CSS Files
List ALL files in `/src/styles/sections/` (26 files):
```
brand-grid.css, brands.css, category-grid.css, category-showcase.css,
collection-row.css, comparison-table.css, contact-form.css, faq.css,
flash-sale.css, hero.css, how-it-works.css, instagram-feed.css,
newsletter.css, patterns.css, pricing-table.css, pricing.css,
product-comparison.css, quick-entry.css, recently-viewed.css,
related-products.css, social-feed.css, stats.css, team.css,
testimonials.css, trust-band.css, value-proposition.css
```

### Part C: Issue Detection

#### C.1: `!important` Declarations
Scan ALL CSS files for `!important`. Document:
- File path
- Selector
- Property
- Whether it's in a `prefers-reduced-motion` guard (acceptable) or not

Previous audit found 24+ `!important` declarations. Verify current count.

#### C.2: Hardcoded Hex Values
Scan ALL CSS files for hex colour values (`#[0-9a-fA-F]{3,8}`) that are NOT inside CSS custom property definitions.
Acceptable: `#fff` or `#000` in opacity contexts, hex in `:root` definitions.
Not acceptable: `color: #333;` in a component rule.

#### C.3: Tailwind-Style Utilities
Scan CSS files for class names that look like Tailwind utilities used as selectors:
- `.flex`, `.grid`, `.block`, `.hidden`
- `.p-*`, `.m-*`, `.gap-*`
- `.text-*` (size utilities, NOT BEM classes)
- `.bg-*` (colour utilities)
- `.rounded-*`, `.shadow-*`

#### C.4: Empty/Near-Empty Files
Flag CSS files with fewer than 10 lines of actual rules (excluding comments).

#### C.5: Duplicate Selectors
Find CSS selectors defined in multiple files. Key suspects:
- `.wp-block-button` (likely in `wordpress-core.css` AND `blocks/design/`)
- `.wp-block-navigation` (likely in `wordpress-core.css` AND `blocks/navigation/`)
- Base element styles (`h1`, `h2`, `p`, `a`) in multiple files

### Part D: Dark Mode Completeness

For EACH CSS file that defines colour-dependent rules:
- Does it have corresponding `.dark` selectors?
- Are dark mode colours using CSS variables?
- Are there any hardcoded dark mode colours?

Create a dark mode coverage score for the CSS layer.

### Part E: Optimisation Opportunities

Based on findings from Parts B-D:

1. **Merge Candidates** — CSS files that could be combined without issues
2. **Dead CSS** — Files/selectors not used by any component
3. **Redundant Rules** — Rules that duplicate what theme-variables.css already provides
4. **Specificity Issues** — Rules needing `!important` due to cascade problems
5. **Size Reduction** — Estimated total CSS reduction possible

### Step 6: Generate Outputs

Save comprehensive report to `/reports/audits/2026-02-21-css-architecture-deep-audit.md`.

Save task list to `/tasks/css-architecture-remediation.md` with phases:
1. Token unification (P0 — blocking everything)
2. `!important` removal (P1)
3. Dead CSS deletion (P1)
4. Duplicate selector resolution (P2)
5. Dark mode gap closure (P2)
6. Hardcoded hex replacement (P3)
7. File consolidation (P3)

## Success Criteria

- Every CSS file catalogued with metrics
- Token conflict matrix complete
- Every `!important` documented
- Every hardcoded hex documented
- Dark mode coverage calculated
- Clear, phased remediation plan
- Task list feeds directly into Phase 1 of the funky redesign
