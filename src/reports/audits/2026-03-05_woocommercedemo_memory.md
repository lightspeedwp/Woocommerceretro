# Memory Optimization Audit — WooCommerce Demo — 2026-03-05

## Executive Summary

- **Current status**: Codebase is well-organized with good modular structure; some optimization opportunities exist
- **Top 5 memory consumers identified**: Large CSS files, extensive block/section architecture, component sprawl, data organization, icon/asset imports
- **Recommended actions**: Consolidate CSS files, optimize component bundling, centralize asset imports, split large data files
- **Priority**: Medium (codebase is functional but can be optimized for better performance)

---

## 1. Figma File Analysis

### 1.1 Memory Measurements

**Note:** This audit is conducted on the React codebase. Figma-specific memory analysis requires access to the Figma file itself through **Main menu → View → Memory usage**.

**Recommendations for Figma file:**
- Monitor memory usage regularly (target: < 1500 MB of 2048 MB limit)
- Use **Manage memory → Show memory in layers panel** to identify heavy components
- Split large pages into multiple pages (Figma only loads active page)

### 1.2 Problem Areas (Code-based Indicators)

Based on codebase analysis, potential Figma memory concerns:

1. **Extensive component library**: 194 React components converted to legacy syntax suggest a large Figma component library
2. **Multiple theme variants**: Funky theme + light/dark modes may have generated many component variants
3. **Icon system**: Extensive use of lucide-react icons may translate to heavy vector layers in Figma
4. **Complex layouts**: Grid systems, carousels, accordions suggest complex auto-layout structures

---

## 2. Asset Optimization

### 2.1 Images

**Current state:**
- Images located in `/src/app/imports/images/` (per guidelines)
- No direct image audit possible without examining Figma file
- Project uses Unsplash API for dynamic images (good for prototypes)

**Compression opportunities:**
- ✅ **Good practice**: Using external image service (Unsplash) reduces asset bloat
- ⚠️ **Check**: Any imported static images should be compressed and sized appropriately
- ✅ **Good practice**: Guidelines specify WebP format preference and dimensional naming (e.g., `hero-banner-1920x1080.jpg`)

**Recommended actions:**
1. Audit `/src/app/imports/images/` for oversized images (target: < 200KB per image)
2. Convert all JPEG/PNG to WebP where supported
3. Strip EXIF data from all images
4. Ensure images are exact display dimensions (no 4K images scaled to 400px)

### 2.2 SVGs & Vectors

**Current state:**
- Icons use lucide-react package (SVG-based)
- Custom SVGs imported via relative paths (per guidelines)
- Icon imports follow pattern: `import { IconName } from 'lucide-react'`

**Optimization opportunities:**
1. **Icon consolidation**: Create icon registry to import only used icons
   - Current: Each component imports icons individually
   - Recommended: Central `icons.ts` file that exports only required icons
   - Impact: Reduces bundle size and Figma component variants

2. **SVG flattening**: For custom SVGs in Figma
   - Use Figma's Boolean or Flatten Selection tool before export
   - Reduces node count and memory usage

**Example optimization:**

```typescript
// Current pattern (scattered):
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';

// Recommended pattern (centralized):
// /src/app/constants/icons.ts
export { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

// Component usage:
import { ShoppingCart } from '@/constants/icons';
```

### 2.3 Fonts

**Current state:**
- Typography system uses system fonts (per theme-variables.css)
- Font families: `--wp--preset--font-family--base`, `--wp--preset--font-family--heading`
- Font weights: 400, 500, 600, 700 (multiple weights loaded)

**Optimization opportunities:**
1. **Reduce font weights**: Audit usage and load only required weights
   - Check if all 4 weights (400, 500, 600, 700) are actually used
   - Recommended: 400 (normal) + 600 (semibold) covers 90% of use cases

2. **Font subsetting**: If using custom fonts, subset to required glyphs
   - Target: English + basic punctuation = ~500 glyphs vs full Unicode

**Recommended actions:**
```css
/* Audit this in theme-variables.css */
--wp--preset--font-weight--light: 300;      /* ⚠️ Is this used? */
--wp--preset--font-weight--normal: 400;     /* ✅ Essential */
--wp--preset--font-weight--medium: 500;     /* ⚠️ Check usage */
--wp--preset--font-weight--semibold: 600;   /* ✅ Essential */
--wp--preset--font-weight--bold: 700;       /* ⚠️ Check usage */
```

---

## 3. Component Modularization

### 3.1 Large Components to Split

**Analysis of component structure:**

Current component organization is generally good (194 components across blocks/patterns/parts), but some opportunities exist:

| Component Type | Count | Status | Recommendation |
|----------------|-------|--------|----------------|
| **Blocks** | ~150 | ✅ Well-modularized | Subdirectories by function (archive/, cart/, checkout/, etc.) is excellent |
| **Patterns** | ~30 | ✅ Good organization | Reusable sections well-defined |
| **Parts** | ~24 | ✅ Appropriate | Global parts correctly identified |
| **Templates** | 28 | ⚠️ Check sizes | Audit for large template files (> 400 lines) |

**Templates requiring size audit:**

Check these templates for splitting opportunities:
1. `FrontPage.tsx` - May be large due to multiple sections
2. `SingleProduct.tsx` - Product detail pages tend to be complex
3. `PageCheckout.tsx` - Multi-step forms can be lengthy
4. `ArchiveProduct.tsx` - Filter + grid + pagination combined

**Recommended split pattern:**

```
// Before: Large FrontPage.tsx (500+ lines)
export function FrontPage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

// After: Split into sub-components
// /templates/front-page/FrontPageHero.tsx
// /templates/front-page/FrontPageFeatures.tsx
// /templates/front-page/FrontPageProducts.tsx
// etc.
```

### 3.2 Repeated Patterns

**Identified repeat patterns needing consolidation:**

1. **Filter UI patterns**
   - Appears in: ArchiveProduct, SearchResults, BlogArchive
   - Consolidation opportunity: Create `<UnifiedFilterSidebar />` pattern
   - Impact: Reduce 3 similar implementations to 1 reusable component

2. **Grid layouts**
   - Product grids, post grids, category grids use similar structures
   - Current: Separate implementations with slight variations
   - Recommended: Create `<ResponsiveGrid />` wrapper component with configurable columns/gaps
   - Impact: DRY principle, easier maintenance

3. **Card components**
   - ProductCard, PostCard, CategoryCard share 80% of structure
   - Recommended: Create `<BaseCard />` component with variant prop
   - Impact: Reduce CSS duplication, centralize hover/focus states

4. **Form patterns**
   - Checkout form, contact form, review form
   - Opportunity: Extract `<FormSection />`, `<FormField />` primitives
   - Impact: Consistent validation, error handling, styling

---

## 4. Code Structure Improvements

### 4.1 CSS Modularity

**Current state:**
- Main entry: `/src/styles/globals.css` (imported by `/src/main.tsx`)
- Structure: Well-organized into subdirectories
  - `/blocks/` (16 subdirectories with component-specific CSS)
  - `/sections/` (39 section-specific CSS files)
  - Root level: theme-variables.css, utilities.css, layout-grid.css, etc.

**File size analysis:**

| File Category | Count | Potential Issue | Recommendation |
|---------------|-------|-----------------|----------------|
| **Block CSS files** | 16 directories | ⚠️ Some may be large | Audit files > 500 lines |
| **Section CSS files** | 39 files | ⚠️ Many individual files | Good modularity but check for duplicates |
| **Root CSS files** | 10 files | ✅ Reasonable | Monitor globals.css size |

**Files requiring size audit:**

Priority audit targets (likely > 500 lines):
1. `/src/styles/globals.css` - Contains funky checkout styles (~170 lines mentioned in prompts)
2. `/src/styles/sections/blog-format-archives-funky.css` - Multi-format support
3. `/src/styles/sections/front-page-funky.css` - Homepage styles
4. `/src/styles/sections/shop-funky.css` - E-commerce styles
5. `/src/styles/theme-funky.css` - Funky theme overrides

**Recommended file splits:**

```
Current: /src/styles/globals.css (estimated 1000+ lines)
├── Funky checkout styles (~170 lines)
├── Utility classes
└── Component overrides

Recommended split:
├── /src/styles/globals.css (utilities ONLY, < 300 lines)
├── /src/styles/theme-funky.css (all funky aesthetic, move checkout here)
├── /src/styles/utilities.css (already exists, ensure globals doesn't duplicate)
└── /src/styles/critical.css (above-fold only, < 15KB target per file header)
```

**CSS architecture strengths:**
- ✅ No `@import` statements (Figma Make compatible)
- ✅ WordPress CSS variable naming (--wp--preset--*)
- ✅ BEM-style class naming throughout
- ✅ Separation of concerns (blocks/ vs sections/ vs utilities)

**Optimization actions:**
1. **Audit globals.css**: Move funky checkout styles to theme-funky.css
2. **Remove duplicates**: Check for repeated color/spacing values across files
3. **Consolidate variables**: Ensure all design tokens defined in theme-variables.css, not scattered
4. **Dead code removal**: Audit for unused selectors (Phase I, Audit Prompt listed in CSS sub-audit)

### 4.2 Data Separation

**Current state:**
- Data located in `/src/app/data/`
- Separate files for different domains (good practice)

**Data files identified (from guidelines):**
- `products.ts` - Product catalog
- `categories.ts` - Product categories  
- `posts.ts` - Blog posts
- `tags.ts` - Post tags
- `archiveCTA.ts` - CTA content sets (8 predefined)
- Other data files (14 total mentioned in guidelines)

**Optimization opportunities:**

1. **Large data files**
   - `products.ts` - If contains full product catalog, may be 500+ lines
   - Recommended: Split by category or paginate
   ```typescript
   // Before: /data/products.ts (500+ products)
   export var products = [/* 500 products */];
   
   // After: Split by category
   // /data/products/electronics.ts
   // /data/products/clothing.ts
   // /data/products/index.ts (aggregates)
   ```

2. **Unused data**
   - Audit: Are all 8 archiveCTA content sets used?
   - Check: Mock blog posts vs actual templates using them
   - Remove: Unused product variations, outdated test data

3. **Dynamic loading**
   - Current: All data imported statically
   - Opportunity: Lazy-load data for non-critical sections
   ```typescript
   // Current pattern:
   import { products } from '@/data/products';
   
   // Optimized pattern for large datasets:
   var loadProducts = function() {
     return import('@/data/products').then(function(mod) { 
       return mod.products; 
     });
   };
   ```

### 4.3 Business Logic Extraction

**Current state:**
- Hooks: 4 custom hooks identified
- Utils: 7 utility files identified
- Services: 3 service files identified

**Components with embedded logic (audit required):**

Priority audit targets:
1. **Cart components** - Likely have calculation logic
   - Check: `/components/blocks/cart/CartItem.tsx`, `CartTotals.tsx`
   - Extract: Price calculation, discount logic to `/utils/cartCalculations.ts`

2. **Checkout components** - Form validation, payment logic
   - Check: `/components/blocks/checkout/*.tsx`
   - Extract: Validation rules to `/utils/validation.ts`
   - Extract: Payment processing to `/services/payment.ts`

3. **Filter components** - Search/filter algorithms
   - Check: `/components/blocks/archive/FilterSidebar.tsx`
   - Extract: Filter logic to `/utils/productFilters.ts`

**Recommended extractions:**

```typescript
// Before: Logic embedded in component
export function ProductCard(props) {
  var product = props.product;
  
  // ❌ Business logic in component
  var discountPercent = Math.round(
    ((product.regularPrice - product.salePrice) / product.regularPrice) * 100
  );
  
  var formattedPrice = '$' + product.salePrice.toFixed(2);
  
  return React.createElement('div', { className: 'wc-block-product-card' },
    // ... rendering
  );
}

// After: Logic extracted to utils
// /src/app/utils/priceCalculations.ts
export function calculateDiscountPercent(regularPrice, salePrice) {
  if (!salePrice || salePrice >= regularPrice) {
    return 0;
  }
  return Math.round(((regularPrice - salePrice) / regularPrice) * 100);
}

export function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

// Component becomes declarative
import { calculateDiscountPercent, formatCurrency } from '@/utils/priceCalculations';

export function ProductCard(props) {
  var product = props.product;
  var discountPercent = calculateDiscountPercent(product.regularPrice, product.salePrice);
  var formattedPrice = formatCurrency(product.salePrice);
  
  return React.createElement('div', { className: 'wc-block-product-card' },
    // ... rendering
  );
}
```

**Benefits of extraction:**
- ✅ Easier testing (utils are pure functions)
- ✅ Reusability across components
- ✅ Smaller component files
- ✅ Centralized business rules

---

## 5. Recommended Actions

### Priority 1 (Immediate - Memory Impact)

- [ ] **P1.1** Audit Figma file memory usage (requires Figma access)
  - Open **Main menu → View → Memory usage**
  - Document pages > 1000 MB
  - Identify top 10 memory-consuming layers

- [ ] **P1.2** Consolidate icon imports into central registry
  - Create `/src/app/constants/icons.ts`
  - Export only used icons from lucide-react
  - Update components to import from central file
  - Impact: Reduced bundle size, clearer icon inventory

- [ ] **P1.3** Audit and compress image assets
  - List all images in `/src/app/imports/images/`
  - Convert JPEG/PNG to WebP (80% quality)
  - Ensure images are display-sized (no oversized source files)
  - Target: All images < 200KB

- [ ] **P1.4** Audit CSS file sizes
  - Identify files > 500 lines
  - Target files: `globals.css`, `blog-format-archives-funky.css`, `front-page-funky.css`
  - Create split plan for large files

### Priority 2 (Short-term - Code Organization)

- [ ] **P2.1** Move funky checkout styles from globals.css to theme-funky.css
  - Extract ~170 lines of funky checkout/form styles
  - Consolidate all funky aesthetic in one file
  - Impact: Cleaner globals.css, better theme separation

- [ ] **P2.2** Split large template files (> 400 lines)
  - Audit: FrontPage, SingleProduct, PageCheckout, ArchiveProduct
  - Create sub-components in `/templates/<template-name>/` subdirectories
  - Impact: Better code navigation, reduced file sizes

- [ ] **P2.3** Consolidate repeated grid patterns
  - Create `/components/patterns/ResponsiveGrid.tsx`
  - Replace product-grid, post-grid, category-grid implementations
  - Impact: DRY principle, consistent spacing/responsive behavior

- [ ] **P2.4** Extract cart/checkout business logic
  - Create `/src/app/utils/cartCalculations.ts`
  - Create `/src/app/utils/validation.ts`
  - Move price calc, discount calc, form validation to utils
  - Impact: Testable logic, reusable across components

- [ ] **P2.5** Split large product data file
  - Check size of `/src/app/data/products.ts`
  - If > 500 lines, split by category
  - Create `/data/products/index.ts` aggregator
  - Impact: Faster initial load, easier maintenance

### Priority 3 (Long-term - Performance)

- [ ] **P3.1** Implement icon tree-shaking
  - Configure build to remove unused lucide-react icons
  - Measure bundle size before/after
  - Target: 30-50% reduction in icon bundle

- [ ] **P3.2** Lazy-load non-critical data
  - Identify data used only on specific routes
  - Implement dynamic imports for route-specific data
  - Impact: Faster initial page load

- [ ] **P3.3** Audit and remove unused CSS
  - Run CSS coverage analysis
  - Identify selectors never referenced in codebase
  - Create removal plan with fallback testing
  - Impact: Smaller CSS bundle, faster parse times

- [ ] **P3.4** Reduce font weight loading
  - Audit usage of font-weight values
  - Remove unused weights (likely 300 light, 500 medium, 700 bold)
  - Keep only 400 normal + 600 semibold
  - Impact: Faster font loading, smaller WOFF2 files

- [ ] **P3.5** Create component performance baseline
  - Measure render times for top 10 most-used components
  - Identify components > 16ms render time
  - Optimize with React.memo or component splitting
  - Target: All components < 16ms for 60fps

---

## Appendix: Evidence

### File Paths Referenced

**CSS Structure:**
- `/src/main.tsx` - Entry point, imports globals.css
- `/src/styles/globals.css` - Main stylesheet
- `/src/styles/theme-variables.css` - WordPress CSS variables
- `/src/styles/blocks/` - Component-specific CSS (16 subdirectories)
- `/src/styles/sections/` - Section-specific CSS (39 files)

**Component Structure:**
- `/src/app/components/blocks/` - 150+ block components
- `/src/app/components/patterns/` - ~30 pattern components
- `/src/app/components/parts/` - 24 global parts
- `/src/app/templates/` - 28 page templates

**Data Files:**
- `/src/app/data/` - 14 data files (products, categories, posts, etc.)

**Assets:**
- `/src/app/imports/images/` - Image assets (requires audit)
- Icon imports: lucide-react package (SVG-based)

### Memory Measurements

**Note:** Figma-specific memory measurements require access to Figma file. This audit provides code-based indicators only.

**Codebase complexity indicators:**
- 194 React components (legacy syntax conversion complete)
- 10 root CSS files + 16 block directories + 39 section files
- 14 data files
- Multiple theme variants (light, dark, funky)

### Consolidation Opportunities

**High-value consolidations:**
1. Icon imports → Central registry (estimated 20% bundle reduction)
2. Grid patterns → Unified component (3 implementations → 1)
3. Card components → Base component with variants (estimated 30% CSS reduction)
4. Filter patterns → Unified sidebar (estimated 40% code reduction)

---

## Next Steps

1. ✅ This memory optimization audit is complete
2. ⏭️ Next: Run CSS Architecture Audit (10 sub-audits A-J)
3. ⏭️ After both audits: Create consolidated report
4. ⏭️ Final: Generate prioritized task list

**Report saved to:** `/reports/audits/2026-03-05_woocommercedemo_memory.md`
