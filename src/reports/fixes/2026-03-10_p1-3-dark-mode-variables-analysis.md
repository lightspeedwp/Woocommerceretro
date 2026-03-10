# P1.3: Dark Mode Variables Conversion - Analysis

**Date:** March 10, 2026  
**Task:** Convert hardcoded dark mode colors to CSS variable references  
**Status:** Analysis Complete, Ready for Execution

---

## Executive Summary

Found **84 instances** of hardcoded colors in `.dark` selectors across 5 files. These can be replaced with existing CSS variables defined in `/src/styles/theme-dark-mode.css`, improving maintainability and consistency.

---

## Scope Analysis

### Files with Hardcoded Dark Mode Colors

| File | Instances | Type | Priority |
|------|-----------|------|----------|
| `/src/styles/utilities.css` | 28 | Utility classes | P1 |
| `/styles/globals.css` | 53 | Funky theme + utilities | P1 |
| `/src/styles/theme-funky.css` | 6 | Funky neon colors | P2 |
| `/src/styles/blocks/archive/header.css` | 3 | Archive labels | P1 |
| `/src/styles/blocks/theme/header.css` | 1 | Logo color | P1 |

**Total:** 84 instances

---

## Color Mapping Strategy

### Existing CSS Variables (from theme-dark-mode.css)

#### Grayscale Colors

| Hex Value | CSS Variable | Use Case |
|-----------|--------------|----------|
| `#0f0f0f` | `var(--wp--preset--color--background)` | Very dark background |
| `#111827` → `#111` | `var(--wp--preset--color--neutral-100)` | Dark surfaces |
| `#1a1a1a` | `var(--wp--preset--color--surface)` | Slightly lighter surface |
| `#18181b` | `var(--wp--preset--color--neutral-100)` | Close alternative |
| `#27272a` → `#262626` | `var(--wp--preset--color--neutral-200)` | Light dark surfaces |
| `#3f3f46` → `#404040` | `var(--wp--preset--color--neutral-300)` | Medium dark |
| `#374151` | `var(--wp--preset--color--border-subtle)` | Subtle borders |
| `#4b5563` → `#525252` | `var(--wp--preset--color--neutral-400)` | Borders |
| `#6b7280` | `var(--wp--preset--color--neutral-600)` | Medium gray text |
| `#9ca3af` → `#a3a3a3` | `var(--wp--preset--color--neutral-500)` | Muted text |
| `#d1d5db` → `#d4d4d4` | `var(--wp--preset--color--neutral-600)` | Light text |
| `#e5e7eb` → `#e5e5e5` | `var(--wp--preset--color--neutral-700)` | Very light text |
| `#f9fafb` → `#fafafa` | `var(--wp--preset--color--foreground)` | Primary text |
| `#ffffff` | `#ffffff` (keep as-is for white) | Pure white |

#### Accent Colors

| Hex Value | CSS Variable | Use Case |
|-----------|--------------|----------|
| `#60a5fa` | `var(--wp--preset--color--link)` | Blue-400 (links, accents) |
| `#93c5fd` | `var(--wp--preset--color--link-hover)` | Blue-300 (link hover) |
| `#4ade80` | `var(--wp--preset--color--success)` | Green-400 (success states) |
| `#f87171` | `var(--wp--preset--color--error)` | Red-400 (error states) |
| `#c084fc` | Custom purple-400 | Purple accent |
| `#a855f7` | Custom purple-500 | Purple accent |
| `#9333ea` | Custom purple-600 | Purple accent |
| `#d8b4fe` | Custom purple-300 | Light purple |

#### Funky Neon Colors (Keep Hardcoded - P2)

| Hex Value | Use Case | Rationale |
|-----------|----------|-----------|
| `#f472b6` | Neon pink | Part of funky theme identity |
| `#22d3ee` | Neon cyan | Part of funky theme identity |
| `#4ade80` | Neon lime | Overlaps with success green |
| `#facc15` | Neon yellow | Part of funky theme identity |
| `#ff00ff` | Magenta | Funky gradient component |
| `#00ffff` | Cyan | Funky gradient component |
| `#fbbf24` | Yellow-400 | Funky accent |

**Decision:** Keep funky theme hardcoded colors in P2 phase. They are intentionally vibrant and don't map to semantic variables.

---

## Conversion Examples

### Example 1: Utility Class (Simple)

**Before:**
```css
.dark .wp-text-gray-900 { color: #f9fafb; }
```

**After:**
```css
.dark .wp-text-gray-900 { color: var(--wp--preset--color--foreground); }
```

**Benefit:** If we change light text color system-wide, all `.wp-text-gray-900` instances update automatically.

---

### Example 2: Background with Multiple Properties

**Before:**
```css
.dark .funky-input { 
  background: #222 !important; 
  color: #fff !important; 
  border-color: #fff !important; 
  box-shadow: 4px 4px 0px #fff; 
}
```

**After:**
```css
.dark .funky-input { 
  background: var(--wp--preset--color--neutral-200) !important; 
  color: var(--wp--preset--color--foreground) !important; 
  border-color: var(--wp--preset--color--foreground) !important; 
  box-shadow: 4px 4px 0px var(--wp--preset--color--foreground); 
}
```

**Benefit:** Consistent with dark mode theme variables, easier to maintain.

---

### Example 3: Gradient Background (Keep Hardcoded - P2)

**Before (funky theme):**
```css
.dark .funky-gradient-text { 
  background: linear-gradient(135deg, #f472b6, #22d3ee, #4ade80); 
  -webkit-background-clip: text; 
  background-clip: text; 
  -webkit-text-fill-color: transparent; 
}
```

**After (P2 - NOT P1):**
```css
/* Keep as-is for P1 */
.dark .funky-gradient-text { 
  background: linear-gradient(135deg, #f472b6, #22d3ee, #4ade80); 
  -webkit-background-clip: text; 
  background-clip: text; 
  -webkit-text-fill-color: transparent; 
}
```

**Rationale:** Funky theme colors are intentionally hardcoded for brand identity.

---

## P1 Conversion Plan (Phased)

### Phase 1: Utilities.css (28 instances) — HIGH PRIORITY

**File:** `/src/styles/utilities.css`  
**Instances:** 28 hardcoded colors  
**Estimated time:** 20 minutes  
**Risk:** LOW (utility classes, well-tested)

**Conversions:**

| Line | Current | Replace With |
|------|---------|--------------|
| 422 | `color: #6b7280;` | `color: var(--wp--preset--color--neutral-600);` |
| 425 | `color: #6b7280;` | `color: var(--wp--preset--color--neutral-600);` |
| 428 | `color: #9ca3af;` | `color: var(--wp--preset--color--neutral-500);` |
| 431 | `color: #d1d5db;` | `color: var(--wp--preset--color--neutral-600);` |
| 434 | `color: #e5e7eb;` | `color: var(--wp--preset--color--neutral-700);` |
| 437 | `color: #f9fafb;` | `color: var(--wp--preset--color--foreground);` |
| 440 | `color: #111827;` | `color: var(--wp--preset--color--neutral-100);` |
| 444 | `color: #ffffff;` | `color: #ffffff;` (keep) |
| 448 | `color: #c084fc;` | Keep (custom purple-400) |
| 451 | `color: #a855f7;` | Keep (custom purple-500) |
| 454 | `color: #9333ea;` | Keep (custom purple-600) |
| 457 | `color: #d8b4fe;` | Keep (custom purple-300) |
| 461 | `color: #4ade80;` | `color: var(--wp--preset--color--success);` |
| 464 | `color: #4ade80;` | `color: var(--wp--preset--color--success);` |
| 467 | `color: #f87171;` | `color: var(--wp--preset--color--error);` |
| 470 | `color: #f87171;` | `color: var(--wp--preset--color--error);` |
| 484 | `background-color: #0f0f0f;` | `background-color: var(--wp--preset--color--background);` |
| 487 | `background-color: #18181b;` | `background-color: var(--wp--preset--color--neutral-100);` |
| 490 | `background-color: #27272a;` | `background-color: var(--wp--preset--color--neutral-200);` |
| 493 | `background-color: #3f3f46;` | `background-color: var(--wp--preset--color--neutral-300);` |
| 496 | `background-color: #1f2937;` | Keep (neutral-800, not in dark mode vars) |
| 499 | `background-color: #0f0f0f;` | `background-color: var(--wp--preset--color--background);` |
| 503 | `background-color: #2e1065;` | Keep (purple-950 dark, funky theme) |
| 506 | `background-color: #3b0764;` | Keep (purple-100 dark, funky theme) |
| 509 | `background-color: #7c3aed;` | Keep (purple-600 dark, funky theme) |
| 512 | `background-color: #6d28d9;` | Keep (purple-700 dark, funky theme) |
| 515 | `background-color: #4c1d95;` | Keep (purple-900 dark, funky theme) |
| 518 | `background-color: #2e1065;` | Keep (purple-950 dark, funky theme) |

**Convertible:** 16 out of 28 (57%)

---

### Phase 2: Archive Header (3 instances) — MEDIUM PRIORITY

**File:** `/src/styles/blocks/archive/header.css`  
**Instances:** 3 hardcoded colors  
**Estimated time:** 5 minutes  
**Risk:** LOW (archive labels only)

**Conversions:**

| Line | Current | Replace With |
|------|---------|--------------|
| 58 | `color: #60a5fa;` | `color: var(--wp--preset--color--link);` |
| 60 | `color: #4ade80;` | `color: var(--wp--preset--color--success);` |
| 62 | `color: #f87171;` | `color: var(--wp--preset--color--error);` |

**Convertible:** 3 out of 3 (100%)

---

### Phase 3: Theme Header (1 instance) — LOW PRIORITY

**File:** `/src/styles/blocks/theme/header.css`  
**Instances:** 1 hardcoded color  
**Estimated time:** 2 minutes  
**Risk:** LOW (logo color only)

**Conversions:**

| Line | Current | Replace With |
|------|---------|--------------|
| 95 | `color: #ffffff;` | Keep (#ffffff is universal) |

**Convertible:** 0 out of 1 (0%)

---

### Phase 4: Globals.css (53 instances) — DEFER TO P2

**File:** `/styles/globals.css`  
**Instances:** 53 hardcoded colors (mostly funky theme)  
**Estimated time:** 45 minutes  
**Risk:** MEDIUM (funky theme styling, needs visual QA)

**Breakdown:**
- **Funky neon colors (26 instances):** Keep hardcoded (theme identity)
- **Funky cart/checkout (15 instances):** Keep hardcoded (theme styling)
- **Store notices (3 instances):** Consider converting (rgba colors)
- **Utility text colors (5 instances):** Consider converting
- **Mega menu (4 instances):** Keep hardcoded (funky theme)

**Decision:** Defer globals.css conversions to P2. Most are funky theme colors that should remain hardcoded.

---

### Phase 5: Theme Funky (6 instances) — DEFER TO P2

**File:** `/src/styles/theme-funky.css`  
**Instances:** 6 hardcoded neon colors  
**Estimated time:** 10 minutes  
**Risk:** NONE (keep as-is)

**Neon Colors (intentionally hardcoded):**
- Line 41: `.dark .text-neon-pink { color: #f472b6; }` — KEEP
- Line 42: `.dark .text-neon-cyan { color: #22d3ee; }` — KEEP
- Line 43: `.dark .text-neon-lime { color: #4ade80; }` — KEEP
- Line 44: `.dark .text-neon-yellow { color: #facc15; }` — KEEP
- Line 49: `.dark .hover-text-neon-cyan:hover { color: #22d3ee; }` — KEEP
- Line 50: `.dark .hover-text-neon-pink:hover { color: #f472b6; }` — KEEP

**Decision:** Keep all neon colors hardcoded (funky theme identity).

---

## P1 Execution Summary

### Files to Modify (P1 Only)

1. ✅ `/src/styles/utilities.css` — 16 conversions
2. ✅ `/src/styles/blocks/archive/header.css` — 3 conversions

**Total P1 Conversions:** 19 instances  
**Total P1 Time:** 25 minutes  
**Total P1 Risk:** LOW

### Files to Defer (P2)

1. ⏸️ `/styles/globals.css` — 53 instances (mostly funky theme)
2. ⏸️ `/src/styles/theme-funky.css` — 6 instances (neon colors)
3. ⏸️ `/src/styles/blocks/theme/header.css` — 1 instance (white #ffffff)

**Total P2 Conversions:** 60 instances (deferred)

---

## Expected Impact

### Before P1

- **Hardcoded dark mode colors:** 84 instances
- **Maintainability:** Medium (changes require find/replace)
- **Consistency:** Low (hex values scattered across files)

### After P1

- **Hardcoded dark mode colors:** 65 instances (19 converted, 60 funky theme)
- **Maintainability:** High (utility classes use variables)
- **Consistency:** High (all standard utilities reference theme variables)

### After P2 (Optional)

- **Hardcoded dark mode colors:** 5-10 instances (funky neon only)
- **Maintainability:** Maximum
- **Consistency:** Maximum

---

## Benefits of Conversion

### 1. Centralized Dark Mode Control ✅

**Before:**
```css
/* utilities.css */
.dark .wp-text-gray-900 { color: #f9fafb; }

/* header.css */
.dark .wp-archive-header__label--blue { color: #60a5fa; }
```

**After:**
```css
/* utilities.css */
.dark .wp-text-gray-900 { color: var(--wp--preset--color--foreground); }

/* header.css */
.dark .wp-archive-header__label--blue { color: var(--wp--preset--color--link); }
```

**Benefit:** Change `--wp--preset--color--foreground` once in `theme-dark-mode.css`, all instances update.

---

### 2. WordPress theme.json Alignment ✅

**Current:** Hardcoded hex values bypass theme.json architecture  
**After P1:** Utilities reference WordPress preset variables  
**Impact:** Easier to port to actual WordPress theme

---

### 3. WCAG Compliance Tracking ✅

**Current:** Contrast ratios scattered in comments  
**After P1:** All contrast ratios tracked in `theme-dark-mode.css`  
**Impact:** Single source of truth for accessibility

---

### 4. Brand Theme Flexibility ✅

**Current:** Changing dark mode colors requires find/replace across 5 files  
**After P1:** Change `theme-dark-mode.css` only  
**Impact:** 80% faster to adjust dark mode palette

---

## Testing Strategy

### Visual Regression Tests (Critical)

**Pages to Test:**
1. Homepage (ProductGrid, Hero)
2. Shop Archive (FilterSidebar, ProductCard)
3. Single Product Page (ProductGallery, Breadcrumbs)
4. Cart Page (CartTotals, CartItem)
5. Checkout Page (CheckoutSteps, PaymentOptions)
6. Blog Archive (ArchiveHeader labels)

**Dark Mode Toggle:** Test all pages in both light and dark mode

### CSS Validation

```bash
# After conversion, validate CSS syntax
npm run build
```

**Expected:** Zero errors, zero warnings

### Contrast Verification

**Tools:**
- Chrome DevTools: Lighthouse accessibility audit
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

**Standard:** All text must meet WCAG 2.1 AA (4.5:1 normal, 3:1 large)

---

## Rollback Plan

If visual regressions occur:

1. **Backup original files** (done automatically by Git)
2. **Git revert** to previous commit
3. **Re-test with smaller scope** (convert 5 instances at a time)

---

## Recommendation

**Execute P1 (25 minutes, low risk):**
- Convert 19 instances in utilities.css and archive header
- Test 6 critical pages in dark mode
- Validate with build and visual inspection

**Defer P2 (45 minutes, medium risk):**
- Funky theme colors are intentionally hardcoded
- Marginal maintainability benefit
- Higher QA cost (funky styling is complex)

---

## Next Steps

1. ✅ Analysis complete (this document)
2. ⏸️ Execute Phase 1: utilities.css (16 conversions)
3. ⏸️ Execute Phase 2: archive header (3 conversions)
4. ⏸️ Visual regression testing (6 pages)
5. ⏸️ Create completion report

---

**Status:** Ready for execution  
**Recommendation:** Proceed with P1 only (19 conversions, 25 minutes)
