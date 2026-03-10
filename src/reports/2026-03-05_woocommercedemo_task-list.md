# Task List — WooCommerce Demo Optimization — 2026-03-05

**Source Reports:**
- Memory Optimization: `/reports/audits/2026-03-05_woocommercedemo_memory.md`
- CSS Architecture: `/reports/audits/2026-03-05_woocommercedemo_css-audit.md`
- Consolidated: `/reports/audits/2026-03-05_woocommercedemo_consolidated.md`

**Generated:** 2026-03-05  
**Estimated Total Effort:** 14 weeks (3.5 months)  
**Priority System:** P0 (Critical) → P1 (Important) → P2 (Medium) → P3 (Nice-to-have)

---

## Phase 1: Foundation Fixes (Week 1-2)

**Goal:** Eliminate design token gaps and consolidate funky theme  
**Effort:** 2 weeks  
**Impact:** High (enables full theme customization, eliminates hardcoded colors)

### P0.1: Define Funky CSS Variables

**Acceptance Criteria:**
- [ ] Create funky-specific CSS variables in `/src/styles/theme-funky.css`
- [ ] Define glow colors: `--funky-glow-primary`, `--funky-glow-secondary`, `--funky-glow-accent`
- [ ] Define shadow properties: `--funky-shadow-color`, `--funky-shadow-offset`, `--funky-shadow-offset-sm`, `--funky-shadow-offset-lg`
- [ ] Define border properties: `--funky-border-width`, `--funky-border-color`
- [ ] Define dark mode overrides for funky variables (lighter shadow color)

**Files to modify:**
- `/src/styles/theme-funky.css`

**Reference:** CSS Audit Section 3.2, lines about hardcoded colors

**Code example:**
```css
:root {
  /* Funky Glow Colors */
  --funky-glow-primary: #00ffff;   /* Cyan */
  --funky-glow-secondary: #ff00ff; /* Magenta */
  --funky-glow-accent: #00ff00;    /* Lime */
  
  /* Funky Shadows */
  --funky-shadow-color: #000000;
  --funky-shadow-offset: 10px;
  --funky-shadow-offset-sm: 4px;
  --funky-shadow-offset-lg: 12px;
  
  /* Funky Borders */
  --funky-border-width: 4px;
  --funky-border-color: #000000;
}

.dark {
  --funky-shadow-color: #ffffff;  /* Lighter in dark mode */
}
```

---

### P0.2: Migrate Funky Styles from Globals to Theme-Funky

**Acceptance Criteria:**
- [ ] Identify all `.funky-*` selectors in `/src/styles/globals.css` (~170 lines)
- [ ] Move to `/src/styles/theme-funky.css`
- [ ] Replace hardcoded `#fff`, `#000`, `#0ff` with CSS variables
- [ ] Replace hardcoded `#000` border with `var(--funky-border-color)`
- [ ] Replace hardcoded `#0ff` glow with `var(--funky-glow-primary)`
- [ ] Replace hardcoded `#fff` background with `var(--wp--preset--color--background)`
- [ ] Verify no visual regressions in funky theme
- [ ] Add comment in `globals.css`: "Funky styles moved to theme-funky.css"

**Files to modify:**
- `/src/styles/globals.css` (remove ~170 lines)
- `/src/styles/theme-funky.css` (add ~200 lines with variables)

**Reference:** CSS Audit Section 3.2, Memory Audit Section 4.1

**Impact:** Cleaner globals.css, all funky aesthetic in one file, theme system compliance

---

### P0.3: Add Missing Design Tokens to theme-variables.css

**Acceptance Criteria:**
- [ ] Add focus ring tokens: `--wp--preset--focus-ring--width`, `--wp--preset--focus-ring--offset`, `--wp--preset--focus-ring--color`
- [ ] Add disabled state tokens: `--wp--preset--color--disabled-background`, `--wp--preset--color--disabled-foreground`
- [ ] Add error background/foreground pairs: `--wp--preset--color--error-background`, `--wp--preset--color--error-foreground`
- [ ] Add warning background/foreground pairs: `--wp--preset--color--warning-background`, `--wp--preset--color--warning-foreground`
- [ ] Add success background/foreground pairs: `--wp--preset--color--success-background`, `--wp--preset--color--success-foreground`
- [ ] Define light mode values
- [ ] Define dark mode values
- [ ] Verify AAA contrast ratios for all pairs (use online contrast checker)

**Files to modify:**
- `/src/styles/theme-variables.css` (add ~30 lines)
- `/src/styles/theme-dark-mode.css` (add dark mode overrides)

**Reference:** CSS Audit Section 4 (Light/Dark Mode Coverage)

**Code example:** See CSS Audit Section 4 "Proposed Light/Dark Variable Blocks"

---

### P0.4: Document Dual CSS Entry Points

**Acceptance Criteria:**
- [ ] Create `/guidelines/css-architecture/CSS_ENTRY_POINTS.md`
- [ ] Document `/styles/globals.css` purpose (Figma auto-load, base HTML elements)
- [ ] Document `/src/styles/globals.css` purpose (app import, component utilities)
- [ ] Create architecture diagram showing both files
- [ ] Add rules: What goes in each file
- [ ] Add warning: Never redefine base HTML elements in `/src/styles/globals.css`
- [ ] Link from main `/guidelines/Guidelines.md`

**Files to create:**
- `/guidelines/css-architecture/CSS_ENTRY_POINTS.md`

**Reference:** CSS Audit Section 1 (CSS Inventory & Entrypoints)

---

## Phase 2: Code Quality (Week 3-4)

**Goal:** Improve code organization and reduce bundle size  
**Effort:** 2 weeks  
**Impact:** Medium-High (20-30% icon bundle reduction, consistent naming)

### P1.1: Create Central Icon Registry

**Acceptance Criteria:**
- [ ] Create `/src/app/constants/icons.ts`
- [ ] Export only used icons from lucide-react (~30 icons)
- [ ] Update all components to import from central file
- [ ] Remove direct lucide-react imports from components
- [ ] Verify no icon visual regressions
- [ ] Measure bundle size before/after (expect 20-30% reduction)

**Files to create:**
- `/src/app/constants/icons.ts`

**Files to modify:**
- All component files importing lucide-react icons (~50 files)

**Reference:** Memory Audit Section 2.2 (SVGs & Vectors)

**Code example:**
```typescript
// /src/app/constants/icons.ts
export { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  X,
  Heart,
  Eye,
  Star,
  ChevronRight,
  ChevronLeft
  // ... (only icons actually used, ~30 total)
} from 'lucide-react';

// Component usage:
import { ShoppingCart } from '@/constants/icons';
```

---

### P1.2: Migrate Funky Selectors to BEM

**Acceptance Criteria:**
- [ ] Create mapping table: Existing funky class → Proposed BEM class
- [ ] Rename funky selectors to BEM modifiers (e.g., `.funky-select` → `.wp-element-select--funky`)
- [ ] Use dual-classing during transition: `className="wp-element-select wp-element-select--funky funky-select"`
- [ ] Update React components with new class names
- [ ] Verify no visual regressions
- [ ] Remove old `.funky-*` classes after 1 week of testing

**Priority selectors to migrate:**

| Existing | Proposed BEM | File |
|----------|-------------|------|
| `.funky-checkout-form` | `.wc-block-checkout-form--funky` | theme-funky.css |
| `.funky-select` | `.wp-element-select--funky` | theme-funky.css |
| `.funky-input` | `.wp-element-input--funky` | theme-funky.css |
| `.funky-textarea` | `.wp-element-textarea--funky` | theme-funky.css |
| `.funky-payment-option` | `.wc-block-payment-option--funky` | theme-funky.css |
| `.funky-filter-chip` | `.wp-filter-chip--funky` | blocks/archive/ |

**Files to modify:**
- `/src/styles/theme-funky.css` (~50 selector renames)
- Component files using funky classes (~20 files)

**Reference:** CSS Audit Section 6 (BEM & CSS Architecture Strategy)

---

### P1.3: Update Focus Styles to Use New Tokens

**Acceptance Criteria:**
- [ ] Replace scattered `outline: 2px solid` with token-based focus ring
- [ ] Use `--wp--preset--focus-ring--width`, `--wp--preset--focus-ring--offset`, `--wp--preset--focus-ring--color`
- [ ] Remove `outline: none` from funky styles (keep outline OR box-shadow as fallback)
- [ ] Add dual focus indicators (outline + box-shadow) for belt-and-suspenders approach
- [ ] Verify focus visibility in both light and dark modes
- [ ] Test keyboard navigation

**Files to modify:**
- `/src/styles/theme-funky.css` (funky focus styles)
- `/src/styles/blocks/**/*.css` (component focus styles)

**Reference:** CSS Audit Section 10 (Accessibility - Focus Visibility)

**Code example:**
```css
/* BEFORE */
.funky-select:focus {
  outline: none !important;  /* ❌ Risky */
  box-shadow: 6px 6px 0px #0ff;
}

/* AFTER */
.wp-element-select--funky:focus-visible {
  outline: var(--wp--preset--focus-ring--width) solid var(--wp--preset--focus-ring--color);
  outline-offset: var(--wp--preset--focus-ring--offset);
  box-shadow: 6px 6px 0px var(--funky-glow-primary);  /* Dual indicators */
}
```

---

### P1.4: Audit and Compress Image Assets

**Acceptance Criteria:**
- [ ] List all images in `/src/app/imports/images/`
- [ ] Check file sizes (target: < 200KB per image)
- [ ] Convert JPEG/PNG to WebP format (80% quality)
- [ ] Resize images to exact display dimensions (no oversized source)
- [ ] Strip EXIF data from all images
- [ ] Update import statements to reference `.webp` files
- [ ] Verify images display correctly

**Files to audit:**
- `/src/app/imports/images/*`

**Reference:** Memory Audit Section 2.1 (Images)

**Tools:**
- ImageMagick (convert to WebP)
- ExifTool (strip EXIF)
- Online image compressor

---

## Phase 3: Performance Optimization (Week 5-8)

**Goal:** Reduce CSS size and improve code maintainability  
**Effort:** 4 weeks  
**Impact:** Medium (47% CSS reduction in targeted areas)

### P2.1: Extract Reusable Grid Pattern

**Acceptance Criteria:**
- [ ] Create `/src/styles/utilities/responsive-grid.css`
- [ ] Define `.prototype-responsive-grid` base class
- [ ] Define variants: `--2-col`, `--3-col`, `--4-col`
- [ ] Add responsive breakpoints (mobile → tablet → desktop)
- [ ] Replace grid implementations in:
  - `/sections/category-grid.css`
  - `/sections/brand-grid.css`
  - Inline grid definitions in components
- [ ] Remove duplicate grid CSS (~400 lines)
- [ ] Verify no layout regressions

**Files to create:**
- `/src/styles/utilities/responsive-grid.css`

**Files to modify:**
- `/src/styles/sections/category-grid.css`
- `/src/styles/sections/brand-grid.css`
- Component files with inline grids

**Reference:** CSS Audit Section 8 (DRY Opportunities - Grid Layouts)

**Impact:** ~600 lines → ~200 lines (66% reduction)

---

### P2.2: Extract Reusable Card Component

**Acceptance Criteria:**
- [ ] Create `/src/styles/blocks/ui/base-card.css`
- [ ] Define `.prototype-base-card` base structure
- [ ] Define card elements: `__image`, `__title`, `__description`
- [ ] Define hover/focus states
- [ ] Update ProductCard, PostCard, CategoryCard to extend base
- [ ] Remove duplicate card CSS (~300 lines)
- [ ] Verify no visual regressions

**Files to create:**
- `/src/styles/blocks/ui/base-card.css`

**Files to modify:**
- `/src/styles/blocks/product/*.css` (ProductCard)
- `/src/styles/blocks/blog/*.css` (PostCard)
- `/src/styles/sections/category-grid.css` (CategoryCard)

**Reference:** CSS Audit Section 8 (DRY Opportunities - Card Components)

**Impact:** ~800 lines → ~500 lines (37% reduction)

---

### P2.3: Extract Unified Filter Sidebar

**Acceptance Criteria:**
- [ ] Create `/src/styles/blocks/archive/unified-filter-sidebar.css`
- [ ] Define `.prototype-filter-sidebar` base structure
- [ ] Define `.prototype-filter-section` for filter groups
- [ ] Define `.wp-filter-chip` for active filter chips
- [ ] Replace filter implementations in:
  - ArchiveProduct
  - BlogArchive
  - SearchResults
- [ ] Remove duplicate filter CSS (~200 lines)
- [ ] Verify filter functionality

**Files to create:**
- `/src/styles/blocks/archive/unified-filter-sidebar.css`

**Files to modify:**
- `/src/styles/blocks/archive/filter-sidebar.css`
- `/src/styles/sections/blog-archive.css`

**Reference:** CSS Audit Section 8 (DRY Opportunities - Filter UI)

**Impact:** ~500 lines → ~300 lines (40% reduction)

---

### P2.4: Split Large Template Files

**Acceptance Criteria:**
- [ ] Audit template file sizes (identify files > 400 lines)
- [ ] Priority targets: FrontPage.tsx, SingleProduct.tsx, PageCheckout.tsx
- [ ] Create subdirectories: `/templates/<template-name>/`
- [ ] Extract sub-components (e.g., FrontPageHero, FrontPageFeatures)
- [ ] Update main template to import sub-components
- [ ] Verify no functionality regressions

**Files to audit:**
- `/src/app/templates/FrontPage.tsx`
- `/src/app/templates/SingleProduct.tsx`
- `/src/app/templates/PageCheckout.tsx`
- `/src/app/templates/ArchiveProduct.tsx`

**Reference:** Memory Audit Section 3.1 (Large Components to Split)

---

### P2.5: Split Large Product Data File

**Acceptance Criteria:**
- [ ] Check size of `/src/app/data/products.ts`
- [ ] If > 500 lines, split by category:
  - `/data/products/electronics.ts`
  - `/data/products/clothing.ts`
  - `/data/products/accessories.ts`
  - `/data/products/index.ts` (aggregates all)
- [ ] Update import statements in components
- [ ] Verify product data loads correctly

**Files to modify:**
- `/src/app/data/products.ts`

**Reference:** Memory Audit Section 4.2 (Data Separation)

---

### P2.6: Audit CSS File Sizes

**Acceptance Criteria:**
- [ ] List all CSS files with line counts
- [ ] Identify files > 500 lines:
  - `/src/styles/globals.css`
  - `/src/styles/sections/blog-format-archives-funky.css`
  - `/src/styles/sections/front-page-funky.css`
- [ ] Create split plan for large files
- [ ] Document findings in `/reports/audits/2026-03-05_css-file-sizes.md`

**Reference:** Memory Audit Section 4.1 (CSS Modularity)

---

## Phase 4: Long-term Improvements (Week 9-14)

**Goal:** Enhance maintainability and full WCAG AAA compliance  
**Effort:** 6 weeks  
**Impact:** Medium (improved developer experience, accessibility)

### P3.1: Implement CSS File Naming Convention

**Acceptance Criteria:**
- [ ] Rename CSS files with numeric prefixes:
  - `01-theme-variables.css`
  - `02-theme-light-mode.css`
  - `03-theme-dark-mode.css`
  - `04-theme-funky.css`
  - `05-wordpress-core.css`
  - `06-woocommerce-core.css`
  - `07-layout-grid.css`
  - `08-utilities.css`
  - `09-critical.css`
  - `10-globals.css`
- [ ] Update import in `/src/main.tsx` (if needed)
- [ ] Verify Figma Make parses files in correct order
- [ ] Test in browser (no cascade issues)

**Files to rename:**
- All files in `/src/styles/` root

**Reference:** CSS Audit Section 11 (Proposed Target Folder Structure)

**⚠️ Caution:** Test thoroughly before committing. Renaming may affect Figma Make parsing.

---

### P3.2: Reduce Font Weight Loading

**Acceptance Criteria:**
- [ ] Audit usage of font weights in codebase:
  - Grep for `font-weight: 300` (light)
  - Grep for `font-weight: 500` (medium)
  - Grep for `font-weight: 700` (bold)
- [ ] If unused, remove from `theme-variables.css`:
  - `--wp--preset--font-weight--light`
  - `--wp--preset--font-weight--medium`
  - `--wp--preset--font-weight--bold`
- [ ] Keep only 400 (normal) + 600 (semibold)
- [ ] Update components using removed weights
- [ ] Verify typography hierarchy maintained

**Files to modify:**
- `/src/styles/theme-variables.css`
- Component files using font weights

**Reference:** Memory Audit Section 2.3 (Fonts)

**Impact:** 50% reduction in font weight loading

---

### P3.3: Complete Reduced-Motion Audit

**Acceptance Criteria:**
- [ ] Grep for all `transition:` declarations in CSS
- [ ] Grep for all `animation:` declarations in CSS
- [ ] Grep for all `transform:` declarations in CSS
- [ ] Add `@media (prefers-reduced-motion: reduce)` overrides for each
- [ ] Test with reduced-motion enabled in OS
- [ ] Verify animations disable, transitions reduce to instant
- [ ] Document findings in `/reports/audits/2026-03-05_reduced-motion-audit.md`

**Files to modify:**
- All CSS files with transitions/animations (~30 files)

**Reference:** CSS Audit Section 10 (Accessibility - Reduced Motion)

**Code example:**
```css
.element {
  transition: all 0.2s ease;
}

@media (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
}
```

---

### P3.4: Icon Tree-Shaking Configuration

**Acceptance Criteria:**
- [ ] Verify build tool (Vite) supports icon tree-shaking
- [ ] Configure bundler to remove unused lucide-react icons
- [ ] Measure bundle size before/after
- [ ] Target: 30-50% reduction in icon bundle
- [ ] Document configuration in `/docs/build-configuration.md`

**Files to modify:**
- `vite.config.ts`

**Reference:** Memory Audit Section P3.1

---

### P3.5: Lazy-Load Non-Critical Data

**Acceptance Criteria:**
- [ ] Identify data used only on specific routes:
  - Product data (only on shop/product pages)
  - Blog posts (only on blog pages)
  - Archive CTAs (only on archive pages)
- [ ] Implement dynamic imports:
  ```typescript
  var loadProducts = function() {
    return import('@/data/products').then(function(mod) { 
      return mod.products; 
    });
  };
  ```
- [ ] Update components to lazy-load data
- [ ] Verify data loads correctly on route navigation
- [ ] Measure initial page load time (expect improvement)

**Files to modify:**
- Components importing large data files

**Reference:** Memory Audit Section 4.2 (Data Separation)

---

### P3.6: Audit for Unused CSS Selectors

**Acceptance Criteria:**
- [ ] Run CSS coverage analysis (browser DevTools)
- [ ] Identify selectors never referenced in codebase
- [ ] Create removal plan with fallback testing
- [ ] Comment out selectors (don't delete yet)
- [ ] Test thoroughly for 1 week
- [ ] Permanently delete if no issues
- [ ] Document removed selectors

**Files to audit:**
- All CSS files in `/src/styles/`

**Reference:** CSS Audit Section 9 (Unused Selectors)

---

### P3.7: Create Component Performance Baseline

**Acceptance Criteria:**
- [ ] Identify top 10 most-used components:
  - ProductCard
  - Button
  - Navigation
  - Header
  - Footer
  - etc.
- [ ] Measure render times using React Profiler
- [ ] Identify components > 16ms render time
- [ ] Optimize with React.memo or component splitting
- [ ] Target: All components < 16ms for 60fps
- [ ] Document findings

**Reference:** Memory Audit Section P3.5

---

## Continuous Tasks

### CT.1: Monitor Figma File Memory

**Frequency:** Weekly  
**Owner:** Design Team

**Tasks:**
- [ ] Open Figma file → Main menu → View → Memory usage
- [ ] Document current usage (X MB / 2048 MB)
- [ ] If > 1500 MB, identify heavy layers
- [ ] Split pages if needed
- [ ] Remove hidden layers

**Reference:** Memory Audit Section 1.1

---

### CT.2: CSS Maintenance

**Frequency:** Monthly  
**Owner:** Frontend Team

**Tasks:**
- [ ] Run CSS coverage analysis
- [ ] Identify new duplicate patterns
- [ ] Extract to reusable components
- [ ] Remove unused selectors
- [ ] Verify dark mode coverage

**Reference:** CSS Audit Section 8, 9

---

### CT.3: Accessibility Testing

**Frequency:** Per Release  
**Owner:** QA Team

**Tasks:**
- [ ] Keyboard navigation test
- [ ] Screen reader test (NVDA/JAWS)
- [ ] Contrast checker (all text)
- [ ] Reduced-motion test
- [ ] Focus visibility test
- [ ] WCAG 2.1 compliance scan

**Reference:** CSS Audit Section 10

---

## Success Metrics

### Code Quality Metrics

| Metric | Baseline | Target | Status |
|--------|----------|--------|--------|
| **BEM coverage** | 80% | 100% | 🟡 In Progress |
| **Token usage** | 90% | 100% | 🟡 In Progress |
| **Accessibility** | AA | AAA | 🟡 In Progress |
| **Dark mode coverage** | 95% | 100% | 🟡 In Progress |

### Performance Metrics

| Metric | Baseline | Target | Status |
|--------|----------|--------|--------|
| **CSS file size** | ~500 KB | ~450 KB | 🔴 Not Started |
| **Icon bundle size** | ~200 icons | ~30 icons | 🔴 Not Started |
| **Font weights** | 4 weights | 2 weights | 🔴 Not Started |
| **Component render time** | Unknown | < 16ms | 🔴 Not Started |

### Maintainability Metrics

| Metric | Baseline | Target | Status |
|--------|----------|--------|--------|
| **CSS lines** | ~18,000 | ~16,100 | 🔴 Not Started |
| **Duplicate CSS** | ~1,900 lines | ~1,000 lines | 🔴 Not Started |
| **Large files (> 500 lines)** | ~10 files | < 5 files | 🔴 Not Started |

---

## Risk Management

### High-Risk Tasks

**P0.2: Migrate Funky Styles**
- Risk: Visual regressions
- Mitigation: Test thoroughly, use dual-classing

**P1.2: BEM Migration**
- Risk: Breaking class references
- Mitigation: Grep for all references, dual-class during transition

**P3.1: File Naming Convention**
- Risk: Figma Make parsing order changes
- Mitigation: Test extensively, rollback plan ready

### Low-Risk Tasks

**P0.1: Define CSS Variables**
- Risk: Minimal (additive only)

**P1.1: Icon Registry**
- Risk: Low (centralized imports, testable)

**P2.1-P2.3: Extract Patterns**
- Risk: Low (well-defined patterns)

---

## Timeline

### Week 1-2: Phase 1 (Foundation)
- [ ] P0.1-P0.4 (Design tokens, funky consolidation)

### Week 3-4: Phase 2 (Code Quality)
- [ ] P1.1-P1.4 (Icon registry, BEM migration, focus tokens)

### Week 5-8: Phase 3 (Performance)
- [ ] P2.1-P2.6 (DRY patterns, file splits)

### Week 9-14: Phase 4 (Long-term)
- [ ] P3.1-P3.7 (File naming, reduced-motion, lazy-load)

---

## Approval & Sign-off

**Project Manager:** _____________________ Date: _____  
**Lead Developer:** _____________________ Date: _____  
**QA Lead:** _____________________ Date: _____

---

**Task List Generated:** 2026-03-05  
**Orchestrator:** Figma Prototype Codebase Audit  
**Status:** ✅ Ready for implementation
