# IframeMessageAbortError Threshold Discovery

**Date:** March 13, 2026  
**Incident:** IframeMessageAbortError with 100 imports  
**Resolution:** Reduced to 10 imports (Batches 1-2 only)

---

## Summary

Discovered that Figma Make's iframe message port has a lower threshold than initially estimated. 100 CSS `@import` statements still overwhelm the system during initialization.

---

## Timeline

### Initial State (v2.12 Part 1)
- **CSS Imports:** 5 (Batches 1 only)
- **Status:** Stable, app loads successfully
- **Trade-off:** Minimal styling, missing component-specific CSS

### Expansion Attempt (v2.12 Part 2)
- **CSS Imports:** 100 (Batches 1-8)
- **Goal:** Restore essential UI components
- **Result:** **FAILED** - IframeMessageAbortError

### Emergency Reduction (v2.12 Part 3 - Current)
- **CSS Imports:** 10 (Batches 1-2 only)
- **Status:** Testing in progress
- **Trade-off:** Basic theme only, component styles still missing

---

## Error Details

```
IframeMessageAbortError: Message aborted: message port was destroyed
    at r.cleanup (https://www.figma.com/webpack-artifacts/assets/1535-b5b5bbc16f7fd25b.min.js.br:1061:395596)
    at s.cleanup (https://www.figma.com/webpack-artifacts/assets/1535-b5b5bbc16f7fd25b.min.js.br:1061:398647)
    at eI.setupMessageChannel (https://www.figma.com/webpack-artifacts/assets/figma_app-c1c13c137ebf8460.min.js.br:477:12190)
    at e.onload (https://www.figma.com/webpack-artifacts/assets/figma_app-c1c13c137ebf8460.min.js.br:477:5240)
```

**Trigger:** CSS file loading during iframe initialization  
**Root Cause:** Too many `@import` statements processed simultaneously  
**Threshold:** Somewhere between 10 and 100 imports

---

## Current Configuration

### Active (10 imports)

**Batch 1: Critical Foundation (5)**
- `theme-variables.css` - CSS custom properties
- `critical.css` - Base styles
- `retro-theme.css` - Retro design system
- `layout-grid.css` - Layout utilities
- `utilities.css` - Essential utilities

**Batch 2: Root Theme (5)**
- `wordpress-core.css` - WordPress core styles
- `woocommerce-core.css` - WooCommerce core styles
- `theme-light-mode.css` - Light mode theme
- `theme-dark-mode.css` - Dark mode theme
- `theme-funky.css` - Funky theme (legacy)

### Deferred (270 imports)

**Batches 3-8:** Layout, navigation, design, forms, product, feedback, retro (90 imports)  
**Batches 9-10:** Text, blog, archive, embed, widgets, media, legacy (180 imports)

---

## Findings

### Confirmed Thresholds

| Import Count | Status | Notes |
|--------------|--------|-------|
| 5 | ✅ Stable | Original minimal config |
| 10 | ⏳ Testing | Current configuration |
| 100 | ❌ Failed | IframeMessageAbortError |
| 280 | ❌ Failed | Original config that triggered issue |

### Estimated Safe Threshold

**Hypothesis:** 10-20 imports may be safe threshold  
**Next Test:** Try 15 imports (Batches 1-2 + 5 critical component blocks)

---

## Impact Assessment

### What's Missing

With only 10 imports active, the following are NOT styled:
- ❌ Layout blocks (header, footer, drawer, modal, sidebar)
- ❌ Navigation blocks (mega-menu, mobile-menu, tabs, pagination)
- ❌ Design blocks (button, card, separator, accordion)
- ❌ Form blocks (input, checkbox, select, switch, textarea)
- ❌ Product blocks (product-card, grid, add-to-cart, gallery)
- ❌ Cart/Checkout blocks
- ❌ Feedback blocks (toast, skeleton, alert, spinner)
- ❌ Overlay blocks (dialog, tooltip, popover, modal)
- ❌ Retro section styles (all retro pages)

### What's Still Working

With 10 imports active:
- ✅ CSS custom properties (theme variables)
- ✅ Critical base styles
- ✅ Retro theme foundations
- ✅ Layout grid system
- ✅ Essential utilities
- ✅ WordPress core styles
- ✅ WooCommerce core styles
- ✅ Light/dark mode switching

---

## Recommended Next Steps

### Option 1: Inline Critical CSS (Recommended)

Instead of `@import`, inline the most critical component CSS directly into `globals-minimal.css`:
- Manually copy contents of top 5-10 component CSS files
- Embed directly in `globals-minimal.css`
- No `@import` statements for these
- Keep remaining files as `@import`

**Pros:**
- Reduces `@import` count
- Critical styles load immediately
- More control over load order

**Cons:**
- Larger `globals-minimal.css` file
- Harder to maintain (changes must be synced)

**Estimated Improvement:** Could reduce `@import` count by 20-30 while maintaining critical styling

---

### Option 2: CSS Bundle Tool

Create a build script that concatenates CSS files into fewer bundles:
- `bundle-layout.css` - All layout + navigation (14 files → 1)
- `bundle-design.css` - All design blocks (8 files → 1)
- `bundle-forms.css` - All form blocks (12 files → 1)
- etc.

**Pros:**
- Dramatically reduces `@import` count (280 → ~10 bundles)
- Maintains separation in source
- Easier to manage

**Cons:**
- Requires build step
- Adds complexity
- Need to regenerate bundles on CSS changes

**Estimated Improvement:** 280 imports → 10 bundle imports

---

### Option 3: Abandon @import Chain (Nuclear)

Move all CSS into single monolithic file:
- Manually concatenate all 280 CSS files
- Single `globals-all.css` with NO `@import`
- ~50,000+ lines in one file

**Pros:**
- Zero `@import` statements
- Guaranteed to avoid iframe issue
- Simplest for Figma Make

**Cons:**
- Massive file size
- Nightmare to maintain
- Lose modular structure
- Conflicts likely

**Estimated Improvement:** Zero imports, but maintenance disaster

---

## Decision Matrix

| Option | `@import` Count | Maintenance | Performance | Recommended |
|--------|----------------|-------------|-------------|-------------|
| **Current (10 imports)** | 10 | ✅ Easy | ⚠️ Missing styles | ❌ Incomplete |
| **Inline Critical CSS** | ~15-20 | ⚠️ Medium | ✅ Good | ✅ **YES** |
| **CSS Bundling** | ~10-15 | ⚠️ Medium | ✅ Best | ✅ **YES** |
| **Monolithic File** | 0 | ❌ Impossible | ⚠️ Large file | ❌ NO |

---

## Recommended Action Plan

### Phase 1: Inline Critical Component CSS (Immediate)

1. Identify top 10 most critical component CSS files
2. Copy their contents into `globals-minimal.css`
3. Remove their `@import` statements
4. Test in Figma Make
5. If stable, proceed to Phase 2

**Top 10 Critical Component CSS (Suggested):**
1. `blocks/layout/header.css`
2. `blocks/layout/footer.css`
3. `blocks/navigation/mega-menu.css`
4. `blocks/navigation/mobile-menu.css`
5. `blocks/design/button.css`
6. `blocks/product/product-card.css`
7. `blocks/cart/minicart.css`
8. `sections/retro-patterns.css`
9. `sections/retro-mega-menu.css`
10. `sections/retro-mini-cart.css`

**Expected Result:** 10 base imports + 0 component imports (inlined) = 10 total `@import` statements

---

### Phase 2: CSS Bundling Build Script (Long-term)

1. Create `/scripts/bundle-css.sh`
2. Concatenate related CSS files into bundles
3. Update `globals-minimal.css` to import bundles
4. Add to build process

**Bundles:**
- `bundle-layout.css` - Layout + Navigation (14 files)
- `bundle-design.css` - Design blocks (8 files)
- `bundle-forms.css` - Form blocks (12 files)
- `bundle-product.css` - Product + Cart + Checkout (14 files)
- `bundle-feedback.css` - Feedback + Overlay (15 files)
- `bundle-retro.css` - Retro sections (27 files)
- `bundle-text.css` - Text blocks (11 files)
- `bundle-media.css` - Media + Embed (16 files)
- `bundle-widgets.css` - Widgets + Interactive (18 files)
- `bundle-legacy.css` - Legacy styles (remaining)

**Expected Result:** 10 base imports + 10 bundle imports = 20 total `@import` statements

---

## Conclusion

Figma Make's iframe has a hard limit on `@import` chain length (somewhere between 10-100). Current configuration with 10 imports is minimal but incomplete. Recommended path forward is to inline critical component CSS to restore essential functionality while staying under the iframe threshold.

**Next Action:** Implement Phase 1 (inline critical CSS) and test for stability.

---

**Report End**
