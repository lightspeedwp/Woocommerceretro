# CSS Performance & Unused CSS Audit Prompt

**Version:** 1.0  
**Created:** March 10, 2026  
**Purpose:** Identify unused CSS rules, duplicate selectors, optimization opportunities, and calculate bundle size reduction potential across the entire `/src/styles/` directory.  
**Context:** Post-funky redesign optimization pass to reduce memory footprint for Figma Make parser.

---

## Audit Scope

This audit covers ALL CSS files in the project:

1. **Root CSS Files (9 files):**
   - `/src/styles/theme-variables.css` (CSS custom properties)
   - `/src/styles/critical.css` (Above-the-fold critical CSS)
   - `/src/styles/layout-grid.css` (Layout utilities)
   - `/src/styles/utilities.css` (Utility classes)
   - `/src/styles/wordpress-core.css` (WordPress block styles)
   - `/src/styles/woocommerce-core.css` (WooCommerce block styles)
   - `/src/styles/theme-dark-mode.css` (Dark mode overrides)
   - `/src/styles/theme-light-mode.css` (Light mode specifics)
   - `/src/styles/theme-funky.css` (Funky animations and utilities)

2. **Block CSS Files (130+ files):**
   - `/src/styles/blocks/` (23 subdirectories: archive, blog, cart, checkout, design, display, embed, feedback, forms, interactive, layout, media, navigation, overlay, product, search, sections, text, theme, ui, widgets, woocommerce)

3. **Section CSS Files (42 files):**
   - `/src/styles/sections/` (hero, FAQ, testimonials, pricing, funky themes, etc.)

4. **Globals Entry Point:**
   - `/styles/globals.css` (Figma Make auto-loaded file with @import chain)

**Total Expected:** ~180 CSS files

---

## Audit Phases

### Phase 1: CSS File Inventory

**Task:** List ALL CSS files recursively, calculate total lines and file sizes.

**Output:**
```markdown
## Phase 1: CSS File Inventory

**Total CSS files:** X
**Total lines of CSS:** X,XXX
**Total file size:** XXX KB

### File Size Distribution
| Size Category | Count | Total Size |
|---------------|-------|------------|
| < 50 lines    | X     | XX KB      |
| 50-200 lines  | X     | XX KB      |
| 200-500 lines | X     | XX KB      |
| > 500 lines   | X     | XX KB      |

### Largest Files (Top 10)
1. `/src/styles/path/file.css` — XXX lines, XX KB
2. ...
```

---

### Phase 2: Selector Usage Analysis

**Task:** For each CSS file, extract all selectors and cross-reference against component usage.

**Method:**
1. Parse all `.css` files to extract unique selectors (classes, IDs, elements)
2. Grep all `.tsx` files in `/src/app/` for className usage
3. Flag selectors that appear in CSS but NEVER in any component
4. Calculate "usage percentage" for each file

**Output:**
```markdown
## Phase 2: Selector Usage Analysis

**Total unique selectors:** X,XXX
**Used in components:** X,XXX (XX%)
**Never used:** XXX (XX%)

### Unused Selector Breakdown by File
| File | Total Selectors | Used | Unused | Usage % |
|------|----------------|------|--------|---------|
| `/src/styles/blocks/cart/cart-item.css` | 45 | 42 | 3 | 93% |
| ...

### High-Impact Unused Selectors (> 50 lines unused)
1. **File:** `/src/styles/sections/hero-section.css`
   - **Unused selectors:** `.hero__deprecated-element`, `.hero__old-badge`
   - **Lines affected:** 78
   - **Potential savings:** 2.3 KB

### Dead CSS Files (0% usage)
1. `/src/styles/blocks/legacy/old-component.css` — 0/45 selectors used
```

---

### Phase 3: Duplicate Selector Detection

**Task:** Identify CSS selectors defined in multiple files (potential conflicts or consolidation opportunities).

**Method:**
1. Build a map of `selector → [files that define it]`
2. Flag selectors defined in 2+ files
3. Check for conflicting property values
4. Identify cascading/specificity issues

**Output:**
```markdown
## Phase 3: Duplicate Selector Detection

**Total duplicate selectors:** XXX
**Files affected:** XX

### Conflicting Duplicates (Same selector, different values)
1. **Selector:** `.wc-block-product-card`
   - **File 1:** `/src/styles/blocks/product/product-card.css` — `padding: 1rem;`
   - **File 2:** `/src/styles/sections/product-grid-section.css` — `padding: 1.5rem;`
   - **Recommendation:** Consolidate into one file or use BEM modifiers

### Non-Conflicting Duplicates (Same selector, same values)
1. **Selector:** `.funky-glass-panel`
   - **Defined in:** 
     - `/src/styles/theme-funky.css`
     - `/src/styles/sections/hero-section.css`
   - **Recommendation:** Remove from hero-section.css (already in theme-funky.css)
```

---

### Phase 4: Dark Mode Optimization

**Task:** Analyze dark mode CSS for redundancy and optimization opportunities.

**Method:**
1. Count total `.dark` selectors across all files
2. Identify `.dark` selectors that override with identical values
3. Identify components missing `.dark` variants
4. Calculate dark mode CSS overhead

**Output:**
```markdown
## Phase 4: Dark Mode Optimization

**Total `.dark` selectors:** XXX
**Redundant dark selectors:** XX (selectors with identical light/dark values)
**Missing dark variants:** XX components

### Redundant Dark Mode Rules
1. **Selector:** `.dark .some-class`
   - **File:** `/src/styles/blocks/ui/button.css`
   - **Issue:** Sets `color: #ffffff` when light mode already uses `color: var(--color-text-primary)` which adapts
   - **Savings:** 2 lines

### Missing Dark Mode Variants
1. **Component:** `.checkout-step__header`
   - **File:** `/src/styles/blocks/checkout/checkout-step.css`
   - **Issue:** No `.dark` variant, uses hardcoded light colors
   - **Impact:** Broken in dark mode

### Dark Mode CSS Overhead
- **Total dark mode lines:** XXX
- **Estimated redundant lines:** XX (XX%)
- **Potential savings:** XX KB
```

---

### Phase 5: CSS Custom Property Analysis

**Task:** Audit CSS variable usage and identify unused or redundant variables.

**Method:**
1. Extract all `--wp--preset--*` and `--funky-*` variables from `theme-variables.css`
2. Grep all CSS files for `var(--variable-name)` usage
3. Flag variables defined but never used
4. Flag hardcoded values that should use variables

**Output:**
```markdown
## Phase 5: CSS Custom Property Analysis

**Total CSS variables defined:** XXX
**Used in stylesheets:** XXX (XX%)
**Never used:** XX (XX%)

### Unused Variables
1. `--wp--preset--color--deprecated-accent` — Defined in theme-variables.css, 0 usages
2. `--funky-orb-size-xl` — Defined in theme-funky.css, 0 usages

### Hardcoded Values (Should use variables)
1. **File:** `/src/styles/blocks/cart/cart-totals.css`
   - **Line 23:** `color: #6b7280;` — Should use `var(--wp--preset--color--text-secondary)`
   - **Line 45:** `border-radius: 8px;` — Should use `var(--wp--preset--border-radius--md)`

### Variable Usage Statistics
| Variable Prefix | Total Defined | Used | Unused |
|-----------------|---------------|------|--------|
| `--wp--preset--color--` | XX | XX | XX |
| `--wp--preset--spacing--` | XX | XX | XX |
| `--wp--preset--font-size--` | XX | XX | XX |
| `--funky--` | XX | XX | XX |
```

---

### Phase 6: Bundle Size Optimization Potential

**Task:** Calculate total potential bundle size reduction.

**Method:**
1. Sum up all unused CSS lines
2. Sum up all duplicate selector lines
3. Sum up all redundant dark mode lines
4. Calculate total potential savings in KB

**Output:**
```markdown
## Phase 6: Bundle Size Optimization Potential

### Current State
- **Total CSS size:** XXX KB (unminified)
- **Total lines:** X,XXX
- **Estimated minified size:** XXX KB

### Optimization Opportunities
| Category | Lines | Size (unminified) | % of Total |
|----------|-------|-------------------|------------|
| Unused selectors | XXX | XX KB | XX% |
| Duplicate selectors | XXX | XX KB | XX% |
| Redundant dark mode | XX | X KB | X% |
| Empty/near-empty files | XX | X KB | X% |
| **TOTAL POTENTIAL SAVINGS** | **XXX** | **XX KB** | **XX%** |

### High-Impact Quick Wins (> 5 KB savings each)
1. **Delete unused section CSS** — `/src/styles/sections/deprecated-hero.css` (78 lines, 2.3 KB)
2. **Consolidate duplicate .funky-glass-panel** — Remove from 3 section files (120 lines, 3.5 KB)
3. **Remove redundant dark mode rules** — 45 rules with identical values (90 lines, 2.7 KB)

### Estimated Post-Optimization Size
- **Current:** XXX KB (unminified)
- **After cleanup:** XXX KB (unminified)
- **Reduction:** XX KB (**XX% smaller**)
```

---

### Phase 7: Figma Make Memory Impact

**Task:** Estimate memory reduction benefit for Figma Make parser.

**Method:**
1. Figma Make parses all CSS files individually (no @import chaining)
2. Each CSS file contributes to parser memory overhead
3. Calculate memory impact based on file count, total size, and selector complexity

**Output:**
```markdown
## Phase 7: Figma Make Memory Impact

### Current Memory Footprint (Estimated)
- **Total CSS files parsed:** 180
- **Total selectors:** X,XXX
- **Estimated parser memory:** XX MB

### Memory Impact by Category
| File Type | Count | Size | Est. Memory |
|-----------|-------|------|-------------|
| Root CSS | 9 | XX KB | X MB |
| Block CSS | 130+ | XX KB | XX MB |
| Section CSS | 42 | XX KB | X MB |
| Globals | 1 | XX KB | X MB |

### Post-Optimization Projection
- **Files after cleanup:** XXX (XX fewer)
- **Total size after cleanup:** XXX KB (XX KB smaller)
- **Estimated memory savings:** XX MB (**XX% reduction**)

### Critical Files for Optimization (> 500 lines)
1. `/styles/globals.css` — XXX lines (auto-loaded by Figma, high priority)
2. `/src/styles/theme-variables.css` — XXX lines (high selector count)
3. ...
```

---

## Output Format

Create a comprehensive report at `/reports/audits/2026-03-10_css-performance-audit.md` with all 7 phases, including:

1. **Executive Summary** (top-level metrics and recommendations)
2. **Phase 1-7 detailed findings** (as outlined above)
3. **Action Plan** (prioritized list of optimization tasks)
4. **Risk Assessment** (what NOT to delete/change)

Create a task list at `/tasks/css-performance-optimization.md` with:
- P0 tasks (high-impact, low-risk quick wins)
- P1 tasks (moderate impact, requires component testing)
- P2 tasks (low impact, nice-to-have)

---

## Execution Instructions

1. Read this prompt file
2. Execute each phase sequentially (Phase 1 → Phase 7)
3. Use file_search tool to grep for selectors, variables, and className usage
4. Use read tool to parse CSS files and extract selectors
5. Calculate metrics and generate tables
6. Create comprehensive audit report
7. Create prioritized task list
8. Update `/tasks/task-list.md` with new P2 section for CSS optimization

---

## Success Criteria

- ✅ All 180+ CSS files inventoried
- ✅ Unused selectors identified and quantified
- ✅ Duplicate selectors mapped and categorized
- ✅ Dark mode redundancy calculated
- ✅ CSS variable usage audited
- ✅ Bundle size reduction potential calculated (target: 10-20% reduction)
- ✅ Figma Make memory impact estimated
- ✅ Actionable task list created with ROI estimates

---

## Notes

- **DO NOT delete any CSS without verifying zero usage**
- **DO NOT modify CSS variables without checking all usages**
- **PRIORITY:** Focus on high-impact, low-risk optimizations first
- **PRESERVE:** All dark mode functionality, WCAG compliance, funky aesthetic
- **TEST:** Any CSS consolidation must be tested in both light and dark modes

---

**Related Files:**
- `/guidelines/development/css-optimization-guidelines.md` — CSS optimization best practices
- `/guidelines/design-tokens/Colors.md` — Color system reference
- `/src/styles/theme-variables.css` — CSS variable definitions
- `/styles/globals.css` — Figma Make entry point
