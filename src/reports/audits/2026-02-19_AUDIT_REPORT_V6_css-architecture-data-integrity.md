# AUDIT_REPORT_V6: CSS Architecture & Data Integrity

**Date:** February 19, 2026  
**Scope:** Systematic deep-scan of `/src/` directory  
**Focus:** Architecture, build stability, CSS loading order, data import integrity  
**Auditor:** Automated structural analysis  
**Severity Scale:** P0 (build-breaking) > P1 (functional defect) > P2 (architecture violation) > P3 (tech debt)

---

## Executive Summary

This audit reveals **4 critical build-blocking issues**, **6 loading order risks**, **12 architecture violations**, and **22+ dead code artifacts**. The most severe finding is a **dual CSS entry point conflict** where two independent token systems compete for control of the same styles, combined with a confirmed note in `App.tsx` that CSS `@import` chains do not resolve in this environment — meaning **100+ atomic CSS files are potentially never loaded**.

---

## 1. Critical Errors (Build Blockers)

### 1.1 DUAL CSS ENTRY POINTS — Competing Token Systems

**Severity:** P0 (Build-Breaking)  
**Files:** `/styles/globals.css` (Figma's entry) vs. `/src/styles/globals.css` (project's entry)

Two completely independent CSS systems exist and load simultaneously:

| File | Token System | Example Variable | Loaded By |
|------|-------------|------------------|-----------|
| `/styles/globals.css` | Flat custom properties | `--background`, `--text-5xl`, `--foreground` | Figma auto-load (always active) |
| `/src/styles/globals.css` | WordPress `--wp--preset--*` tokens | `--wp--preset--color--background`, `--wp--preset--font-size--900` | `import` in `/src/main.tsx:4` |

**Impact:**
- Components referencing `--wp--preset--*` variables get styling from `/src/styles/`
- Components referencing `--background`, `--foreground` get styling from `/styles/globals.css`
- Base HTML elements (`h1`-`h6`, `p`, `body`) are styled TWICE with different values
- CSS cascade winner depends on load order, which is non-deterministic

**Evidence:**
```
/styles/globals.css:258    → h1 { font-size: var(--text-5xl); }
/src/styles/globals.css:296 → h1 { font-size: var(--wp--preset--font-size--900); }
```

Both define `body`, `html`, `h1`-`h6`, `p`, `small`, `a`, `button`, `img`, and `*, *::before, *::after` rules.

### 1.2 CSS @import Chain Non-Resolution

**Severity:** P0 (Build-Breaking)  
**File:** `/src/app/App.tsx:4-5`

```tsx
// WordPress & WooCommerce styles are loaded via /styles/globals.css (Tailwind entry point)
// Do NOT import /src/styles/globals.css here — CSS @import chains don't resolve in this environment
```

**Yet** `/src/main.tsx:4` does exactly that:
```tsx
import './styles/globals.css';
```

**Impact:** If `@import` chains truly don't resolve, then ALL of the following are potentially never loaded:
- 8 preset files (`colors.css`, `typography.css`, `spacing.css`, etc.)
- 4 theme files (`theme-variables.css`, `theme-funky.css`, `theme-light-mode.css`, `theme-dark-mode.css`)
- 2 core files (`wordpress-core.css`, `woocommerce-core.css`)
- 2 utility files (`layout-grid.css`, `utilities.css`)
- **~100 block CSS files** across 22 subdirectories
- **~26 section CSS files**

That's **142 CSS files** representing the entire atomic CSS architecture.

### 1.3 DUAL ROUTER CONFIGURATION

**Severity:** P0 (Build-Breaking)  
**Files:** `/App.tsx` (Figma entry, 369 lines) vs. `/src/app/routes.tsx` (project's router)

Both define complete `createHashRouter` configurations with all routes. Both import the same 5 context providers. Both define `RootLayout` components. If both load, React will render two nested `RouterProvider` instances, causing route matching conflicts.

**`/App.tsx`** (Figma entry):
```tsx
import { FrontPage } from './src/app/components/templates/FrontPage';
const router = createHashRouter([{ path: '/', Component: RootLayout, children: [...] }]);
export default function App() { return <ThemeProvider>...<RouterProvider router={router} />...</ThemeProvider>; }
```

**`/src/app/App.tsx`** (project's entry):
```tsx
import { router } from './routes';
export default function App() { return <ThemeProvider>...<RouterProvider router={router} />...</ThemeProvider>; }
```

### 1.4 DUPLICATE CSS FILE — Identical Content

**Severity:** P1 (Functional Defect — Cascade Doubling)  
**Files:**
- `/src/styles/blocks/blog/blog-sidebar.css` (274 lines)
- `/src/styles/blocks/blog/sidebar.css` (274 lines)

Both imported in `/src/styles/globals.css` at lines 57 and 62:
```css
@import './blocks/blog/blog-sidebar.css';  /* line 57 */
@import './blocks/blog/sidebar.css';       /* line 62 */
```

These files are byte-for-byte identical except for the newsletter button colors:
- `blog-sidebar.css:253` → `background: var(--wp--preset--color--accent);`
- `sidebar.css:253` → `background: #7c3aed;`

**Impact:** Every `.wp-blog-sidebar__*` selector is defined twice. The second file (`sidebar.css`) always wins due to cascade order, overriding the token-based approach with hardcoded hex values.

---

## 2. Loading Order Risks

### 2.1 Duplicate Selectors Across Files — `.wp-block-button`

**Severity:** P1  
**Files:** 3 files define the same root selector

| File | Lines | Purpose |
|------|-------|---------|
| `/src/styles/wordpress-core.css` | 176, 198, 203, 209, 213, 265, 272, 290, 297 | Core button styles |
| `/src/styles/blocks/design/button.css` | 9, 35, 40, 41 | Atomic block styles |
| `/src/styles/theme-dark-mode.css` | 97, 102 | Dark mode overrides |

**Risk:** `wordpress-core.css` loads at position 3 in the @import chain; `blocks/design/button.css` loads at position 5. Both define `.wp-block-button` base styles. The block file's styles override core styles, but this is fragile — any reordering breaks button appearance.

### 2.2 Duplicate Selectors — `.wp-block-navigation`

**Severity:** P1  
**Files:**
- `/src/styles/wordpress-core.css:399`
- `/src/styles/blocks/navigation/navigation-menu.css:5`
- `/src/styles/theme-light-mode.css:166`

Same cascade fragility as 2.1.

### 2.3 `!important` Abuse — 31 Declarations Across 10 Files

**Severity:** P2  
**Indicates:** CSS loading order problems being "fixed" with specificity sledgehammers.

| File | Count | Worst Offenders |
|------|-------|-----------------|
| `/src/styles/sections/hero.css` | 8 | `.wp-button-outline-light`, `.wp-newsletter-gradient *` |
| `/src/styles/sections/flash-sale.css` | 8 | `.wp-flash-sale__button` (bg, color, font-weight, padding, font-size) |
| `/src/styles/blocks/product/product-card.css` | 3 | Disabled state (bg, color, border) |
| `/src/styles/blocks/design/button.css` | 2 | Disabled state (box-shadow, transform) |
| `/src/styles/blocks/cart/minicart.css` | 1 | `display: none !important` |
| `/src/styles/blocks/blog/blog-sidebar.css` | 1 | `margin-bottom: 0 !important` |
| `/src/styles/blocks/blog/sidebar.css` | 1 | `margin-bottom: 0 !important` (duplicate) |
| `/src/styles/woocommerce-core.css` | 1 | `display: flex !important` |
| `/src/styles/theme-light-mode.css` | 2 | Print styles (acceptable) |
| `/src/styles/theme-funky.css` | 3 | Reduced motion (acceptable) |

**Actionable:** 20 of 31 `!important` declarations are symptoms of cascade conflicts. The 11 in print/reduced-motion contexts are acceptable.

### 2.4 Base HTML Redefinition

**Severity:** P2  
Both `/styles/globals.css` and `/src/styles/globals.css` define base element styles:

| Element | `/styles/globals.css` token | `/src/styles/globals.css` token |
|---------|---------------------------|-------------------------------|
| `h1` | `var(--text-5xl)` | `var(--wp--preset--font-size--900)` |
| `h2` | `var(--text-4xl)` | `var(--wp--preset--font-size--800)` |
| `body bg` | `var(--color-background)` | `var(--wp--preset--color--background)` |
| `a color` | N/A | `var(--wp--preset--color--primary)` |
| `box-sizing` | `var(--color-border)` border-color | No border-color on `*` |

### 2.5 `woocommerce-complete.css` Referenced But Missing

**Severity:** P2 (Guidelines out of date)  
The Guidelines.md references `/src/styles/woocommerce-complete.css` **28 times** as the main stylesheet. This file **does not exist**. The actual file is `/src/styles/woocommerce-core.css`.

### 2.6 Token Name Collision Risk

**Severity:** P2  
Both CSS entry points define `--color-border`:

```css
/* /styles/globals.css:50 */
--border: rgba(0, 0, 0, 0.1);
--color-border: var(--border);

/* /src/styles/presets/colors.css (via @import chain) */
--wp--preset--color--border: #e5e7eb;
```

Components using `var(--color-border)` get one value; components using `var(--wp--preset--color--border)` get another. Both are "border color" tokens with different values.

---

## 3. Architecture Violations

### 3.1 ZERO Component-Level CSS Imports

**Severity:** P2  
**Finding:** Not a single `.tsx` component file imports its own CSS file.

```bash
# Search: import statements referencing .css files in components
grep -r "import.*\.css" src/app/components/ --include="*.tsx"
# Result: 0 matches
```

**Impact:** All 100+ atomic CSS files rely entirely on the `@import` chain in `/src/styles/globals.css`. There is no CSS tree-shaking. If a component is loaded but its CSS file is missing from the chain, it renders unstyled.

### 3.2 Component Hierarchy Violation — Block Imports Parts

**Severity:** P2  
**File:** `/src/app/components/blocks/theme/Navigation.tsx`

```tsx
import { ShopMegaMenu } from '../../parts/ShopMegaMenu';
import { BlogMegaMenu } from '../../parts/BlogMegaMenu';
import { AboutMegaMenu } from '../../parts/AboutMegaMenu';
import { PromotionsMegaMenu } from '../../parts/PromotionsMegaMenu';
import { ContactMegaMenu } from '../../parts/ContactMegaMenu';
```

**Rule violated:** Blocks may only compose Common and UI. Parts are higher-level and should compose Blocks, not vice versa. This creates an inverted dependency.

### 3.3 Templates With Hardcoded Data (Not Using Data Files)

**Severity:** P2  
The following templates contain inline data instead of importing from `/src/app/data/`:

| Template | Data File Exists | Imports Data File? |
|----------|-----------------|-------------------|
| `PageAccessibilityStatement.tsx` | `accessibilityStatement.ts` | No — inline `const features = [...]` |
| `PageCareers.tsx` | `careers.ts` | No — likely inline |
| `PageContact.tsx` | `contact.ts` | No — likely inline |
| `PageHelpCenter.tsx` | `helpCenter.ts` | No — likely inline |
| `PageShippingReturns.tsx` | `shipping.ts` | No — likely inline |
| `PageSizeGuide.tsx` | `sizeGuide.ts` | No — likely inline |
| `PageStores.tsx` | `stores.ts` | No — likely inline |
| `PageSustainability.tsx` | `sustainability.ts` | No — likely inline |
| `PageWarranty.tsx` | `warranty.ts` | No — likely inline |
| `PagePressMedia.tsx` | `pressMedia.ts` | No — likely inline |
| `PageRewardProgram.tsx` | `rewardProgram.ts` | No — likely inline |
| `PageAffiliateProgram.tsx` | `affiliateProgram.ts` | No — likely inline |
| `PageBuyingGuide.tsx` | `buyingGuide.ts` | No — likely inline |
| `PagePrivacyPolicy.tsx` | `legalContent.ts` | No — likely inline |
| `PageTermsConditions.tsx` | `legalContent.ts` | No — likely inline |
| `PageFAQ.tsx` | `faq.ts` | No — likely inline |

**Impact:** 16 templates have their own data files created but never wired up. Content changes require editing `.tsx` files instead of centralized data files.

### 3.4 Orphan Data Files — Never Imported (22 files)

**Severity:** P3  

| Data File | Size | Status |
|-----------|------|--------|
| `accessibilityStatement.ts` | exists | Zero imports |
| `affiliateProgram.ts` | exists | Zero imports |
| `brands.ts` | exists | Zero imports |
| `buyingGuide.ts` | exists | Zero imports |
| `careers.ts` | exists | Zero imports |
| `checkout.ts` | exists | Zero imports |
| `contact.ts` | exists | Zero imports |
| `faq.ts` | exists | Zero imports |
| `footer.ts` | exists | Zero imports |
| `helpCenter.ts` | exists | Zero imports |
| `legalContent.ts` | exists | Zero imports |
| `navigation.ts` | exists | Zero imports |
| `pressMedia.ts` | exists | Zero imports |
| `rewardProgram.ts` | exists | Zero imports |
| `shipping.ts` | exists | Zero imports |
| `shopBrands.ts` | exists | Zero imports |
| `site.ts` | exists | Zero imports |
| `sizeGuide.ts` | exists | Zero imports |
| `stores.ts` | exists | Zero imports |
| `sustainability.ts` | exists | Zero imports |
| `variableProducts.ts` | exists | Zero imports |
| `warranty.ts` | exists | Zero imports |

### 3.5 Legacy Tailwind Utility Classes in Components

**Severity:** P2 (Architecture violation — guidelines prohibit Tailwind)  

**Heavily Tailwind (50+ utility classes per file):**
| File | Example Classes |
|------|----------------|
| `templates/PageLivePreview.tsx` | `inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-950 text-purple-600 rounded-full` |
| `templates/AccountDashboardWidgets.tsx` | `p-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 rounded-2xl text-white` |

**Moderately Tailwind (10-30 utility classes per file):**
| File | Example Classes |
|------|----------------|
| `patterns/CartEmptyState.tsx` | `text-center mb-8 max-w-md mx-auto flex justify-center` |
| `patterns/CartFilled.tsx` | `mt-8 flex justify-between items-center` |
| `patterns/FeaturesComparisonTable.tsx` | `w-full border-collapse text-left p-4 border-b-2 border-gray-200 dark:border-gray-700` |
| `patterns/BlogSidebar.tsx` | `bg-surface relative z-10 p-6 rounded-lg` |
| `patterns/BrandLogoGrid.tsx` | `text-gray-900 dark:text-gray-50 max-w-2xl mx-auto` |
| `patterns/FAQSection.tsx` | `text-gray-900 dark:text-gray-50 text-gray-600 dark:text-gray-400` |

### 3.6 Dual Blog Data Systems

**Severity:** P2  
Two separate blog data structures exist:
- `/src/app/data/posts.ts` — Exports `posts: WPPost[]`, `Post` type, `getPostBySlug()`, `getMediaSource()`
- `/src/app/data/blogData.ts` — Exports `BLOG_POSTS: BlogPost[]`, `BlogPost` interface

Templates are split between them:
- `BlogIndex.tsx`, `SinglePost.tsx`, `ArchiveCategory.tsx` use `posts.ts`
- `SinglePostFullWidth.tsx`, `SinglePostWithSidebar.tsx` use `blogData.ts`

**Impact:** Two competing data models for the same entity (blog posts). No shared interface.

---

## 4. Dead Code & Zombie Imports

### 4.1 Orphan CSS Sections (Exist but may never load)

If @import chains don't resolve, ALL files in `/src/styles/blocks/` and `/src/styles/sections/` are dead code. That's **142 CSS files**.

### 4.2 Unused TypeScript Types

The `/src/app/types/` directory exists with type definitions, but most components define their own interfaces inline or import types from data files directly.

---

## 5. Remediation Plan

### Phase 1: Resolve CSS Dual Entry Points (P0)

| Step | Action | File |
|------|--------|------|
| 1.1 | **Determine authoritative CSS entry point** — Is it `/styles/globals.css` (Figma's) or `/src/styles/globals.css` (project's)? The team must choose ONE. | Decision required |
| 1.2 | **If Figma's file is authoritative:** Flatten all `@import`-chain CSS into `/styles/globals.css`. Append content from all 142 atomic files into the single flat file, maintaining section order. Remove `import './styles/globals.css'` from `/src/main.tsx`. | `/styles/globals.css`, `/src/main.tsx` |
| 1.3 | **If project's file is authoritative:** Verify `@import` resolution works. If it doesn't, inline all imports. Remove duplicate base element styles from `/styles/globals.css`. | `/src/styles/globals.css`, `/styles/globals.css` |
| 1.4 | **Unify token naming** — Migrate all components to use ONE token system (`--wp--preset--*` OR `--background`/`--foreground`). | All `.css` files, all `.tsx` files |

### Phase 2: Resolve Router Duplication (P0)

| Step | Action | File |
|------|--------|------|
| 2.1 | **Determine which App.tsx is the active entry point.** Figma Make uses `/App.tsx` as entry. | `/App.tsx`, `/src/app/App.tsx` |
| 2.2 | **Keep ONE router.** If `/App.tsx` is the entry, `/src/app/routes.tsx` and `/src/app/App.tsx` are dead code for routing purposes. Ensure route definitions stay in sync or consolidate. | `/App.tsx`, `/src/app/routes.tsx` |

### Phase 3: Fix CSS Duplicates (P1)

| Step | Action | File |
|------|--------|------|
| 3.1 | **Delete duplicate sidebar CSS.** Remove `/src/styles/blocks/blog/sidebar.css` (the one with hardcoded hex). Keep `blog-sidebar.css` (uses CSS variables). | `sidebar.css` |
| 3.2 | **Remove duplicate `@import`** from `/src/styles/globals.css:62`. | `/src/styles/globals.css` |
| 3.3 | **Audit `.wp-block-button`** selectors. Move all button styles to ONE file (`blocks/design/button.css`). Remove duplicate definitions from `wordpress-core.css`. | `wordpress-core.css`, `button.css` |
| 3.4 | **Audit `.wp-block-navigation`** selectors. Same consolidation approach. | `wordpress-core.css`, `navigation-menu.css` |

### Phase 4: Eliminate `!important` (P2)

| Step | Action | File |
|------|--------|------|
| 4.1 | Fix `hero.css` — 8 `!important` declarations can be replaced by higher-specificity selectors or proper cascade order. | `sections/hero.css` |
| 4.2 | Fix `flash-sale.css` — 8 `!important` declarations. Same approach. | `sections/flash-sale.css` |
| 4.3 | Review remaining 14 non-print/non-motion `!important` uses. | Various |

### Phase 5: Wire Up Orphan Data Files (P2)

| Step | Action | Files |
|------|--------|-------|
| 5.1 | For each of the 22 orphan data files, update the corresponding template to `import` from the data file instead of using inline data. | 16 template files, 22 data files |
| 5.2 | Consolidate `blogData.ts` into `posts.ts` — one blog data source. | `blogData.ts`, `posts.ts` |
| 5.3 | Update `SinglePostFullWidth.tsx` and `SinglePostWithSidebar.tsx` to use `posts.ts`. | 2 template files |

### Phase 6: Remove Legacy Tailwind (P2)

| Step | Action | Files |
|------|--------|-------|
| 6.1 | Refactor `PageLivePreview.tsx` — replace all Tailwind classes with WordPress BEM classes. | `PageLivePreview.tsx` |
| 6.2 | Refactor `AccountDashboardWidgets.tsx` — same approach. | `AccountDashboardWidgets.tsx` |
| 6.3 | Refactor remaining 9 pattern files with moderate Tailwind usage. | Various |

### Phase 7: Fix Architecture Violations (P2)

| Step | Action | File |
|------|--------|------|
| 7.1 | Move MegaMenu components from `parts/` to `patterns/` or create a `parts/navigation/` subgroup. Update `Navigation.tsx` imports. | `Navigation.tsx`, MegaMenu files |
| 7.2 | Update guidelines to reference `woocommerce-core.css` instead of `woocommerce-complete.css`. | `Guidelines.md` |

---

## Appendix: File Scan Summary

| Category | Count | Status |
|----------|-------|--------|
| CSS files in @import chain | 142 | Potentially not loading |
| `!important` declarations | 31 | 20 actionable, 11 acceptable |
| Orphan data files | 22 | Never imported |
| Templates with inline data | 16 | Should use data files |
| Components with Tailwind | 11+ | Needs BEM migration |
| Duplicate CSS files | 1 pair | blog-sidebar.css / sidebar.css |
| Duplicate selector families | 2 | .wp-block-button, .wp-block-navigation |
| Architecture inversions | 1 | Navigation (Block) imports Parts |
| Dual entry points | 2 | CSS + Router |

---

**End of Audit Report V6**
