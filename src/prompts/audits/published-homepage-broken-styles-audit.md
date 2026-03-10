# Published Homepage Broken Styles Audit

**Created:** February 22, 2026  
**Priority:** CRITICAL  
**Scope:** Diagnose and fix all CSS/styling failures visible on the published Figma Make homepage and site-wide  
**Screenshot Reference:** `figma:asset/96a499da1ddf492dd5dc93032c1c52466d6328ce.png`

---

## 1. Problem Statement

After publishing the Figma Make prototype, the homepage (`FrontPage.tsx`) renders with severely broken styling. The page displays as mostly unstyled HTML with raw text, missing backgrounds, absent gradients, broken grid layouts, and no "Funky" design system effects. The header renders the site title ("WOO WOO") at enormous size with no layout containment, navigation links stack vertically as plain text, blog content sections show images but with no grid, card, or section styling, and the lower portion of the page falls back to a default white/crumpled background with no funky treatments. Some basic image rendering works, indicating that **some** CSS loads but the majority of the stylesheet chain is failing.

### 1.1 Observed Symptoms (from screenshot)

| Section | Expected | Actual |
|---|---|---|
| **MainHeader** | Sticky dark header with logo, mega-menu navigation, search/cart icons, mobile hamburger, funky neon border | Massive "WOO WOO" text filling viewport, no layout, unstylized navigation links stacked vertically |
| **Hero (`.front-page__hero`)** | Full-viewport gradient overlay, floating neon orbs, glassmorphism badge, gradient text title, CTA buttons with glow | Completely absent or invisible — no hero section visible |
| **Features (QuickEntryTilesGrid)** | Glow cards with icon gradient circles, hover lift effects, section padding | No visible features band |
| **Categories (CategoryShowcaseGrid)** | Gradient heading, glow border cards, 4-column grid | Not visible or collapsed |
| **Trending Products (ProductGrid)** | Gradient heading, animated divider, product card grid with glow borders | Not visible |
| **Brand Story** | Gradient overlay, floating orbs, glassmorphism panel, full-width image | Not visible |
| **Best Sellers (ProductGrid)** | Gradient heading, glow section background, product cards | Not visible |
| **Newsletter (NewsletterSignup)** | Glassmorphism panel, neon focus input, gradient background, floating orbs | Not visible |
| **Blog/Latest Updates** | Styled post cards with hover zoom, dark section, 3-column grid | Images render but no cards, no grid, no section styling |
| **MainFooter** | Dark gradient background, neon top border, social links with cyan/pink hover, 5-column widget grid | Partially visible — some content renders but missing gradient, grid layout broken |
| **Typography** | WordPress CSS variable-based fluid typography (`--wp--preset--font-size--*`) | Falls back to browser defaults or `/styles/globals.css` flat fallback tokens |
| **Dark Mode** | Full dark mode with `--wp--preset--color--*` semantic mapping via `.dark` class | Broken — top of page is dark (from inline `background: var(--wp--preset--color--primary)`), bottom is white, inconsistent |
| **CSS Custom Properties** | All `--wp--preset--*` variables resolved from `/src/styles/theme-variables.css` | Variables likely undefined — components using `var(--wp--preset--...)` fall back to empty values |
| **Funky Treatments** | Gradient overlays, neon glows, floating orbs, glassmorphism badges, `funky-card-glow`, `funky-spring-hover` | Completely absent |
| **Layout** | `wp-site-layout` flex column, `wp-container-site` max-width 1400px, proper section spacing | No layout containment — content overflows viewport width |

---

## 2. Root Cause Hypotheses

Investigate these in order of likelihood:

### Hypothesis A: CSS Files in `/src/styles/` Subdirectories Not Loaded
**Likelihood: VERY HIGH**

The project has a **dual CSS entry point** architecture:

1. **`/styles/globals.css`** — Figma Make's auto-loaded entry point (flat fallback tokens + utility classes)
2. **`/src/styles/`** — 150+ individual CSS files containing ALL component/section/block/theme styles

The critical comment in `/src/styles/globals.css` states:
> *"IMPORTANT: @import directives are NOT supported in the Figma Make environment. All sub-stylesheets in /src/styles/blocks/, /src/styles/sections/, etc. are parsed individually by Figma's CSS engine. Do NOT add @import statements here."*

This means Figma Make's CSS engine is expected to **auto-discover and parse all `.css` files** in `/src/styles/` subdirectories. If it only loads `/styles/globals.css` and `/src/styles/globals.css` (the two explicit entry points), then **every component-level, section-level, and block-level CSS file is missing**.

**Diagnostic steps:**
1. Open DevTools on the published site
2. Inspect the `<head>` for `<link>` or `<style>` tags — count them, note sizes
3. Search the compiled CSS output for key class names:
   - `.front-page__hero` (from `/src/styles/sections/front-page-funky.css`)
   - `.wp-site-header` (from `/src/styles/blocks/theme/header.css`)
   - `.wp-site-footer` (from `/src/styles/blocks/theme/footer.css`)
   - `.wc-block-product-card` (from `/src/styles/blocks/product/product-card.css`)
   - `.funky-card-glow` (from `/src/styles/theme-funky.css`)
4. If ANY of these are absent, the subdirectory CSS files are not loading

### Hypothesis B: CSS Custom Properties Not Defined
**Likelihood: HIGH**

The entire design system depends on `--wp--preset--*` CSS custom properties defined in `/src/styles/theme-variables.css` (70+ variables). If this file doesn't load, every downstream rule using `var(--wp--preset--...)` silently fails to its fallback (often empty). The `/styles/globals.css` provides flat tokens (`--background`, `--foreground`, etc.) but NOT the `--wp--preset--*` namespace.

**Diagnostic steps:**
1. Inspect any element and check Computed Styles
2. Search for `--wp--preset--color--primary` — if it shows as unresolved/empty, `theme-variables.css` is not loading
3. Check if `:root` block from `theme-variables.css` is present in the compiled CSS
4. Compare: does `--background` (from `/styles/globals.css`) resolve while `--wp--preset--color--background` (from `/src/styles/theme-variables.css`) does not?

### Hypothesis C: Dark Mode CSS Not Loading
**Likelihood: HIGH**

Dark mode depends on `/src/styles/theme-dark-mode.css` providing `.dark { }` overrides for `--wp--preset--*` variables. If this file doesn't load, the `.dark` class on `<html>` has no effect, and components using dark-mode variables render with undefined values.

**Diagnostic steps:**
1. Check if `<html>` has the `dark` class
2. Search compiled CSS for `.dark {` — if absent, dark mode CSS is missing
3. Check if `--wp--preset--color--background` has different computed values when `.dark` is toggled

### Hypothesis D: Funky Theme CSS Not Loading
**Likelihood: HIGH**

The "Funky Redesign" depends on multiple specialized CSS files:
- `/src/styles/theme-funky.css` — shared funky utilities (`funky-card-glow`, `funky-spring-hover`, `funky-gradient-text`, `funky-input-glow`)
- `/src/styles/sections/front-page-funky.css` — FrontPage-specific hero, orbs, gradient overlays
- `/src/styles/sections/funky-sections.css` — reusable funky section patterns
- `/src/styles/blocks/theme/parts-funky.css` — header/footer funky modifiers

If any of these don't load, the funky treatments are completely absent.

### Hypothesis E: Layout/Container CSS Not Loading
**Likelihood: HIGH**

The massive "WOO WOO" text and broken layout strongly suggest that container and layout CSS is missing. Key classes:
- `.wp-site-layout` (from Layout component)
- `.wp-site-header` / `.wp-header-desktop__*` / `.wp-header-mobile__*` (from header CSS)
- `.wp-container-site` (from container utilities)

Without these, the header's site title renders at the full `h1` fluid size with no max-width or layout constraints.

### Hypothesis F: Cascade Order / Specificity Conflicts
**Likelihood: LOWER**

Even if all CSS loads, if the cascade order is wrong (e.g., `/styles/globals.css` base tokens load AFTER component styles), specificity conflicts will cause visual regressions. The expected load order is:
1. `/styles/globals.css` — base tokens and fallbacks
2. `/src/styles/theme-variables.css` — WordPress tokens (override base)
3. `/src/styles/theme-light-mode.css` — light mode
4. `/src/styles/theme-dark-mode.css` — dark mode overrides
5. `/src/styles/theme-funky.css` — funky utilities
6. `/src/styles/wordpress-core.css` — WordPress block styles
7. `/src/styles/woocommerce-core.css` — WooCommerce block styles
8. `/src/styles/globals.css` (in `/src/`) — component/module styles
9. `/src/styles/blocks/**/*.css` — all block-level styles
10. `/src/styles/sections/**/*.css` — all section-level styles

---

## 3. Audit Checklist

### Phase 1: Diagnostic (Browser DevTools on Published Site)

- [ ] **P1.1** Open published homepage in Chrome DevTools
- [ ] **P1.2** Check `<head>` for CSS `<link>` or `<style>` tags — count them, note file paths and sizes
- [ ] **P1.3** Network tab: Filter by CSS — check for any 404 errors or missing files
- [ ] **P1.4** Inspect `:root` element: is `--wp--preset--color--primary` defined? (Should be `#030213`)
- [ ] **P1.5** Inspect `:root` element: is `--wp--preset--spacing--50` defined? (Should be `1.5rem`)
- [ ] **P1.6** Inspect `.front-page__hero` element: does it have any computed `min-height: 100vh` and `background`?
- [ ] **P1.7** Inspect `.wp-site-header` element: does it have computed `position: sticky`, `z-index`, and `background`?
- [ ] **P1.8** Inspect `.wp-site-footer` element: does it have computed `background-color`?
- [ ] **P1.9** Inspect any `.wc-block-product-card` element: does it have computed border, shadow, border-radius?
- [ ] **P1.10** Search the compiled CSS for these class names (present = file loaded):
  - `.front-page__hero` → `/src/styles/sections/front-page-funky.css`
  - `.wp-site-header` → `/src/styles/blocks/theme/header.css`
  - `.wp-site-footer` → `/src/styles/blocks/theme/footer.css`
  - `.wc-block-product-card` → `/src/styles/blocks/product/product-card.css`
  - `.funky-card-glow` → `/src/styles/theme-funky.css`
  - `.funky-spring-hover` → `/src/styles/theme-funky.css`
  - `.wp-block-button` → `/src/styles/blocks/design/button.css`
  - `.woocommerce-mobile-menu` → `/src/styles/blocks/navigation/mobile-menu.css`
  - `.wp-mega-menu` → `/src/styles/blocks/navigation/mega-menu.css`
- [ ] **P1.11** Check Console tab for any CSS-related errors or warnings
- [ ] **P1.12** Check if the `dark` class is present on `<html>` — and whether `.dark { }` rules exist in compiled CSS

### Phase 2: CSS Architecture Audit (Source Code)

- [ ] **P2.1** Verify `/styles/globals.css` (Figma Make entry) contains `:root` tokens and utilities
- [ ] **P2.2** Verify `/src/styles/theme-variables.css` contains all 70+ `--wp--preset--*` custom properties
- [ ] **P2.3** Verify `/src/styles/theme-dark-mode.css` contains `.dark { }` overrides
- [ ] **P2.4** Verify `/src/styles/theme-funky.css` contains `.funky-card-glow`, `.funky-spring-hover`, `.funky-gradient-text`, `.funky-input-glow`
- [ ] **P2.5** Verify `/src/styles/sections/front-page-funky.css` contains `.front-page__hero` and all FrontPage BEM classes
- [ ] **P2.6** Verify `/src/styles/blocks/theme/header.css` contains `.wp-site-header`
- [ ] **P2.7** Verify `/src/styles/blocks/theme/footer.css` contains `.wp-site-footer`
- [ ] **P2.8** Verify `/src/styles/blocks/theme/parts-funky.css` contains `--funky` modifier classes for header/footer
- [ ] **P2.9** Verify NO `@import` statements exist in any CSS file (not supported in Figma Make)
- [ ] **P2.10** Check if any React components have direct CSS imports (`import '...css'`) — these may not work in Figma Make
- [ ] **P2.11** Verify `/src/styles/globals.css` (in `/src/`) does NOT use `@import` statements (confirmed: it does not)

### Phase 3: Homepage-Specific Component Audit

For each FrontPage section, verify its CSS file loads and classes resolve:

| Section | Component(s) Used | CSS File(s) Required | Key Classes | Status |
|---|---|---|---|---|
| **Hero** | `FrontPage.tsx` (inline) | `sections/front-page-funky.css` | `.front-page__hero`, `.front-page__hero-bg`, `.front-page__hero-overlay`, `.front-page__hero-orb`, `.front-page__hero-content`, `.front-page__hero-badge`, `.front-page__hero-title`, `.front-page__hero-actions`, `.front-page__hero-scroll` | |
| **Features** | `QuickEntryTilesGrid` | `blocks/sections/quick-entry-tiles.css`, `sections/quick-entry.css` | `.wp-quick-entry-tiles`, `.wp-quick-entry-tile` | |
| **Categories** | `CategoryShowcaseGrid` | `sections/category-showcase.css` | `.wp-category-showcase`, `.wp-category-card` | |
| **Trending** | `ProductGrid` | `blocks/product/product-card.css`, `blocks/product/grid.css` | `.wc-block-product-card`, `.wc-product-grid` | |
| **Brand Story** | `FrontPage.tsx` (inline) | `sections/front-page-funky.css` | `.front-page__brand-story`, `.front-page__brand-story-bg`, `.front-page__brand-story-overlay`, `.front-page__brand-story-orb` | |
| **Best Sellers** | `ProductGrid` | `blocks/product/product-card.css`, `blocks/product/grid.css` | `.wc-block-product-card`, `.wc-product-grid` | |
| **Newsletter** | `NewsletterSignup` | `sections/newsletter.css` | `.wp-newsletter-section`, `.wp-newsletter-signup` | |
| **Gradient Dividers** | `FrontPage.tsx` (inline) | `sections/front-page-funky.css` | `.front-page__divider` | |
| **Section Headings** | `FrontPage.tsx` (inline) | `sections/front-page-funky.css` | `.front-page__section-heading`, `.front-page__section-heading--gradient` | |
| **Collection Headers** | `FrontPage.tsx` (inline) | `sections/front-page-funky.css` | `.front-page__collection-header` | |

### Phase 4: Global Parts Audit

| Part | Component | CSS File(s) Required | Key Classes | Status |
|---|---|---|---|---|
| **Header** | `MainHeader.tsx` | `blocks/theme/header.css`, `blocks/theme/parts-funky.css` | `.wp-site-header`, `.wp-header-desktop__*`, `.wp-header-mobile__*`, `.wp-site-header--funky` | |
| **Footer** | `MainFooter.tsx` | `blocks/theme/footer.css`, `blocks/theme/parts-funky.css` | `.wp-site-footer`, `.wp-site-footer__*`, `.wp-site-footer--funky` | |
| **Layout** | `Layout.tsx` | `layout-grid.css`, `globals.css` | `.wp-site-layout`, `.wp-site-main` | |
| **MiniCart** | `MiniCart.tsx` | `blocks/cart/minicart.css` | `.woocommerce-mini-cart`, `.woocommerce-mini-cart__*` | |
| **MobileMenu** | `MobileMenu.tsx` | `blocks/navigation/mobile-menu.css`, `blocks/theme/parts-funky.css` | `.woocommerce-mobile-menu`, `.woocommerce-mobile-menu--funky` | |
| **MegaMenu** | `ShopMegaMenu.tsx`, `BlogMegaMenu.tsx` | `blocks/navigation/mega-menu.css`, `blocks/theme/parts-funky.css` | `.wp-mega-menu`, `.wp-mega-menu__*` | |
| **Breadcrumbs** | `BreadcrumbsBar.tsx` | `blocks/navigation/breadcrumb.css` | `.wp-breadcrumbs-bar` | |
| **Buttons** | `Button` | `blocks/design/button.css` | `.wp-block-button`, `.wp-block-button--*` | |

### Phase 5: Critical CSS Variables Dependency Map

These are the most-used CSS custom properties. If ANY are undefined, dozens of components break:

**Tier 1 — Used 100+ times (total system failure if missing):**
```css
--wp--preset--color--primary              /* #030213 */
--wp--preset--color--primary-foreground   /* #ffffff */
--wp--preset--color--background           /* #ffffff */
--wp--preset--color--foreground           /* #1f2937 */
--wp--preset--color--surface              /* #ffffff */
--wp--preset--color--border               /* rgba(0,0,0,0.1) */
--wp--preset--color--text-secondary       /* #4b5563 */
--wp--preset--spacing--50                 /* 1.5rem */
--wp--preset--spacing--40                 /* 1rem */
--wp--preset--spacing--30                 /* 0.75rem */
--wp--preset--border-radius--lg           /* 0.625rem */
--wp--preset--transition--base            /* 0.2s */
```

**Tier 2 — Used 20-99 times (widespread breakage):**
```css
--wp--preset--color--neutral-100 through --neutral-900
--wp--preset--color--accent
--wp--preset--color--muted-foreground
--wp--preset--color--success / --warning / --error
--wp--preset--color--neon-cyan            /* #00ffff */
--wp--preset--color--neon-pink            /* #ff00ff */
--wp--preset--spacing--10 through --spacing--100
--wp--preset--font-size--small through --font-size--gigantic
--wp--preset--font-family--base / --heading
--wp--preset--font-weight--medium / --semibold / --bold
--wp--preset--layout--site-size           /* 1400px */
--wp--preset--layout--wide-size           /* 1200px */
--wp--preset--layout--content-size        /* 65ch */
```

**Tier 3 — Funky-specific tokens (funky treatments fail if missing):**
```css
--funky-interactive-color                 /* #0e7490 light / #22d3ee dark */
--funky-interactive-color-hover           /* #0c6075 light / #67e8f9 dark */
--funky-interactive-focus                 /* #0369a1 light / #38bdf8 dark */
--funky-interactive-bg                    /* rgba(14,116,144,0.08) */
--funky-glass-bg
--funky-glass-border
--funky-input-bg
--funky-input-border
--funky-text-muted
```

---

## 4. Potential Fixes (by Hypothesis)

### Fix A: Ensure All `/src/styles/` CSS Files Are Discovered

If Figma Make's CSS engine only loads explicitly referenced files, the fix is to ensure every CSS file in `/src/styles/` is reachable. Options:

1. **Verify Figma Make's auto-discovery behavior** — does it scan all subdirectories of `/src/styles/`?
2. **If not**, consolidate critical styles into `/styles/globals.css` or `/src/styles/globals.css` (the two known entry points)
3. **Emergency fix**: Copy the most critical CSS rules (`:root` tokens from `theme-variables.css`, layout from `layout-grid.css`, header/footer from `blocks/theme/`) directly into `/styles/globals.css`

### Fix B: Inline Critical CSS Custom Properties

If `theme-variables.css` isn't loading, inline ALL `:root` custom properties into `/styles/globals.css`:

```css
/* /styles/globals.css — add at top */
:root {
  /* === FROM theme-variables.css === */
  --wp--preset--color--primary: #030213;
  --wp--preset--color--primary-foreground: #ffffff;
  --wp--preset--color--background: #ffffff;
  --wp--preset--color--foreground: #1f2937;
  /* ... all 70+ variables ... */
}
```

This is robust because `/styles/globals.css` is guaranteed to load (it's Figma Make's auto-discovered entry point).

### Fix C: Merge Funky Theme CSS into Entry Point

If the subdirectory CSS files don't auto-load, merge the most critical ones into `/styles/globals.css`:

**Priority merge list (in order):**
1. `/src/styles/theme-variables.css` — design tokens
2. `/src/styles/theme-dark-mode.css` — dark mode overrides
3. `/src/styles/theme-funky.css` — funky utilities
4. `/src/styles/layout-grid.css` — layout system
5. `/src/styles/blocks/theme/header.css` — header layout
6. `/src/styles/blocks/theme/footer.css` — footer layout
7. `/src/styles/blocks/design/button.css` — buttons
8. `/src/styles/blocks/product/product-card.css` — product cards
9. `/src/styles/sections/front-page-funky.css` — homepage sections
10. `/src/styles/blocks/theme/parts-funky.css` — funky header/footer modifiers

### Fix D: Remove Any Lingering `@import` Statements

Search ALL CSS files for `@import` and remove them — they cause `"Missing opening {"` parser errors in Figma Make:

```bash
grep -rn "@import" /src/styles/ /styles/
```

Replace any found with the actual CSS content inlined.

### Fix E: Add CSS Variable Fallbacks to Critical Rules

For the most visible components, add inline fallback values:

```css
/* Instead of: */
background-color: var(--wp--preset--color--primary);

/* Use: */
background-color: var(--wp--preset--color--primary, #030213);
```

This is a safety net, NOT a long-term solution.

### Fix 2: Component CSS Consolidation into `/styles/globals.css` (February 22, 2026)

**Root Cause Extension:** Token injection alone is insufficient — the CSS *rule* definitions for all components, sections, and blocks also live in `/src/styles/blocks/**/*.css` and `/src/styles/sections/**/*.css` files that Figma Make's CSS engine does not load. Without these rules, elements have correct CSS variable values but no actual styles applied.

**Fix Applied — Phase 2 Consolidation (~470 CSS rules added):**

All homepage-critical and global-parts component CSS was consolidated into `/styles/globals.css`:

1. **Mobile Menu** (`mobile-menu.css`) — `.woocommerce-mobile-menu`, search, nav items, submenu, quick links, contact, dark mode
2. **Mega Menu** (`mega-menu.css`) — `.wp-mega-menu__*`, trigger, dropdown, content panel, categories, featured cards, blog variant, post cards, footer
3. **Quick Entry Tiles** (`quick-entry-tiles.css`) — `.wp-quick-entry-tiles-grid`, `.wp-quick-entry-tile`, icon, title, description, responsive grid
4. **Category Showcase** (`category-showcase.css`) — `.wp-category-card`, image, overlay, name, description, count, action, hover effects
5. **MiniCart** (`minicart.css`) — `.woocommerce-mini-cart`, trigger, badge, header
6. **Funky Header** (`parts-funky.css`) — `.wp-site-header--funky`, glassmorphism, neon nav underlines, action button hovers, search focus, dark mode typography
7. **Funky Footer** (`parts-funky.css`) — `.wp-site-footer--funky`, gradient divider, glow orbs, neon newsletter, heading underlines, dark mode typography
8. **Funky MiniCart** (`parts-funky.css`) — `.woocommerce-mini-cart--funky`, glass panel, neon badge, gradient header divider
9. **Funky Mobile Menu** (`parts-funky.css`) — `.woocommerce-mobile-menu--funky`, gradient overlay, neon quick links border, gradient nav labels
10. **Funky Breadcrumbs** (`parts-funky.css`) — `.wp-breadcrumbs-bar--funky`, gradient bottom border
11. **Funky Mega Menus** (`parts-funky.css`) — glassmorphism content panel, gradient section titles, neon hovers, badge gradients
12. **Store Notice** (`parts-funky.css`) — `.wp-store-notice`, `.wp-store-notice--funky`, neon gradient banner
13. **Front Page Funky Treatments** (`front-page-funky.css`) — feature tile glow borders, icon gradient circles, category card neon hovers, product card lift, newsletter input neon focus, brand story parallax

**Final file size:** `/styles/globals.css` is now ~1470 lines containing ALL tokens + ALL homepage-critical CSS rules.

**Verification:** Searched for all critical class names — all present in consolidated file:
- `.wp-site-header--funky` ✅
- `.woocommerce-mobile-menu__nav-button` ✅
- `.wp-mega-menu__dropdown` ✅
- `.wp-quick-entry-tile__icon` ✅
- `.wp-store-notice--funky` ✅
- `.wp-category-card` ✅
- `.woocommerce-mini-cart` ✅

---

## 5. Complete CSS File Inventory

### Entry Points (guaranteed to load):
```
/styles/globals.css                          <- Figma Make auto-loaded entry point
/src/styles/globals.css                      <- Main app stylesheet (NO @import)
```

### Design Token Files (must load for anything to work):
```
/src/styles/theme-variables.css              <- 70+ --wp--preset--* custom properties
/src/styles/theme-light-mode.css             <- Light mode color overrides
/src/styles/theme-dark-mode.css              <- Dark mode .dark {} overrides
/src/styles/theme-funky.css                  <- Funky utilities (glow, spring, gradient)
```

### Layout & Core Files:
```
/src/styles/layout-grid.css                  <- Layout system, containers, grids
/src/styles/wordpress-core.css               <- WordPress block styles
/src/styles/woocommerce-core.css             <- WooCommerce block styles
/src/styles/utilities.css                    <- Utility classes
```

### Homepage-Critical CSS Files:
```
/src/styles/sections/front-page-funky.css    <- ALL FrontPage section styles
/src/styles/sections/category-showcase.css   <- CategoryShowcaseGrid
/src/styles/sections/quick-entry.css         <- QuickEntryTilesGrid section
/src/styles/sections/newsletter.css          <- NewsletterSignup section
/src/styles/sections/collection-row.css      <- CollectionRow section
```

### Block-Level CSS Files (by subdirectory):
```
/src/styles/blocks/theme/
  header.css                                 <- .wp-site-header
  footer.css                                 <- .wp-site-footer
  parts-funky.css                            <- --funky header/footer/menu modifiers
  theme-toggle.css                           <- Dark mode toggle

/src/styles/blocks/design/
  button.css                                 <- .wp-block-button
  card.css                                   <- .wp-block-card
  accordion.css                              <- .wp-block-accordion
  separator.css                              <- .wp-block-separator
  columns.css                                <- .wp-block-columns
  group.css                                  <- .wp-block-group

/src/styles/blocks/product/
  product-card.css                           <- .wc-block-product-card
  grid.css                                   <- .wc-product-grid
  add-to-cart.css                            <- .wc-product-add-to-cart
  info.css                                   <- .wc-product-info
  skeleton.css                               <- Product card skeletons
  variant-selector.css                       <- Variant selectors

/src/styles/blocks/navigation/
  mega-menu.css                              <- .wp-mega-menu
  mobile-menu.css                            <- .woocommerce-mobile-menu
  breadcrumb.css                             <- Breadcrumbs
  menubar.css                                <- Main nav
  pagination.css                             <- .wp-block-pagination

/src/styles/blocks/cart/
  cart.css                                   <- Cart page
  minicart.css                               <- MiniCart drawer

/src/styles/blocks/forms/
  input.css, select.css, checkbox.css, etc.  <- Form components

/src/styles/blocks/feedback/
  toast.css, alert.css, spinner.css, etc.    <- Feedback components

/src/styles/blocks/overlay/
  dialog.css, popover.css, tooltip.css, etc. <- Modal/overlay components

/src/styles/blocks/blog/
  post-grid.css, post-meta.css, etc.         <- Blog components

/src/styles/blocks/sections/
  quick-entry-tiles.css                      <- QuickEntryTilesGrid block
  archive-cta.css                            <- Archive CTA block

/src/styles/blocks/display/
  badge.css, avatar.css, table.css, etc.     <- Display components

/src/styles/blocks/checkout/
  checkout.css                               <- Checkout page

/src/styles/blocks/search/
  autocomplete.css, product-search.css       <- Search components
```

### Section-Level CSS Files:
```
/src/styles/sections/
  front-page-funky.css                       <- Homepage (CRITICAL)
  funky-sections.css                         <- Reusable funky patterns
  hero.css                                   <- Hero base styles
  category-showcase.css                      <- Category grid
  category-grid.css                          <- Category grid alt
  quick-entry.css                            <- Quick entry tiles
  newsletter.css                             <- Newsletter section
  collection-row.css                         <- Collection row
  testimonials.css                           <- Testimonials
  faq.css                                    <- FAQ section
  trust-band.css                             <- Trust band
  value-proposition.css                      <- Value proposition
  how-it-works.css                           <- How it works
  brand-grid.css                             <- Brand logos
  stats.css                                  <- Stats section
  team.css                                   <- Team section
  pricing-table.css                          <- Pricing
  flash-sale.css                             <- Flash sale
  contact-form.css                           <- Contact form
  instagram-feed.css                         <- Instagram feed
  social-feed.css                            <- Social media feed
  comparison-table.css                       <- Comparison table
  related-products.css                       <- Related products
  recently-viewed.css                        <- Recently viewed
  patterns.css                               <- Shared patterns
  shop-funky.css                             <- Shop page funky
  blog-funky.css                             <- Blog page funky
  cart-checkout-funky.css                    <- Cart/checkout funky
  account-auth-funky.css                     <- Account pages funky
  info-pages-funky.css                       <- Info pages funky
  legal-pages-funky.css                      <- Legal pages funky
  commerce-special-funky.css                 <- Commerce special funky
```

### Sweep Cleanup:
```
/src/styles/blocks/sweep-cleanup.css         <- Tailwind contamination replacements
```

---

## 6. React Components to Inspect

### Homepage Template:
```
/src/app/components/templates/FrontPage.tsx
```

### Patterns Used by FrontPage:
```
/src/app/components/patterns/QuickEntryTilesGrid.tsx
/src/app/components/patterns/CategoryShowcaseGrid.tsx
/src/app/components/patterns/ProductGrid.tsx
/src/app/components/patterns/NewsletterSignup.tsx
```

### Global Parts:
```
/src/app/components/parts/Layout.tsx         <- .wp-site-layout wrapper
/src/app/components/parts/MainHeader.tsx     <- Site header
/src/app/components/parts/MainFooter.tsx     <- Site footer
/src/app/components/parts/MobileMenu.tsx     <- Mobile navigation
/src/app/components/parts/MiniCart.tsx        <- Cart drawer
/src/app/components/parts/BreadcrumbsBar.tsx <- Breadcrumbs
```

### Blocks Used by Homepage:
```
/src/app/components/blocks/design/Buttons.tsx    <- Button component
/src/app/components/blocks/product/ProductCard.tsx <- Product card
/src/app/components/common/Container.tsx          <- Container wrapper
/src/app/components/common/BackToTopButton.tsx    <- Back to top
/src/app/components/common/SkipNavigation.tsx     <- Skip nav link
```

---

## 7. Execution Instructions

### Step 1: Diagnostic
Open the published URL in Chrome. Run through Phase 1 checklist above. Document which CSS variables, classes, and files are present vs absent in the compiled output.

### Step 2: Classify the Failure
Based on diagnostics, determine:
- Is it a **total subdirectory CSS failure** (only `/styles/globals.css` loads, nothing from `/src/styles/blocks/` or `/src/styles/sections/`)?
- Is it a **token failure** (`theme-variables.css` doesn't load, so all `--wp--preset--*` are undefined)?
- Is it a **partial failure** (some files load via `/src/styles/globals.css` but subdirectory files don't)?
- Is it a **cascade order failure** (all CSS loads but in wrong order)?

### Step 3: Implement Fix
Apply the appropriate fix from Section 4 based on the classified failure type:
- **If subdirectory files don't load**: Consolidate critical CSS into `/styles/globals.css` (Fix A + C)
- **If tokens are missing**: Inline `:root` properties into `/styles/globals.css` (Fix B)
- **If `@import` is the culprit**: Remove all `@import` statements (Fix D)
- **If cascade order is wrong**: Reorder rules within the entry point file (Fix F)

### Step 4: Regression Test
After fix, verify these 7 homepage sections render correctly:
1. **Hero** — full-viewport gradient overlay + orbs + glassmorphism badge + CTA buttons
2. **Features** — QuickEntryTilesGrid with glow cards
3. **Categories** — CategoryShowcaseGrid with gradient heading + 4-column grid
4. **Trending Products** — ProductGrid with gradient heading + product cards
5. **Brand Story** — full-width image with gradient overlay + orbs
6. **Best Sellers** — ProductGrid with gradient heading + product cards
7. **Newsletter** — glassmorphism panel with neon input + gradient background

Plus global parts: **Header** (sticky, mega menus, search, cart), **Footer** (dark gradient, neon border, 5-column grid), **MobileMenu** (slide-over drawer with funky nav labels), and **Layout** (proper containment, section spacing).

### Step 5: Site-Wide Spot Check
After homepage is fixed, spot-check these pages:
- `/shop` — ArchiveProduct (filter sidebar, product grid)
- `/product/classic-leather-jacket` — SingleProduct (gallery, tabs, add-to-cart)
- `/cart` — PageCart (cart items, totals)
- `/blog` — BlogIndex (post grid, sidebar)
- `/account/dashboard` — AccountDashboardWidgets
- `/faq` — PageFAQ (accordion)
- `/about` — PageAbout (values grid, team)

---

## 8. Success Criteria

- [ ] All 7 homepage sections render with full "Funky" design system styling
- [ ] All `--wp--preset--*` CSS custom properties resolve correctly in Computed Styles
- [ ] All `--funky-*` interactive tokens resolve (AA-safe values)
- [ ] Dark mode toggle works and all sections adapt with proper contrast
- [ ] Gradient overlays, floating orbs, glassmorphism, neon glows, and hover animations all function
- [ ] Header renders as sticky dark bar with proper layout (not massive "WOO WOO" text)
- [ ] Footer displays with dark gradient background, neon top border, and 5-column widget grid
- [ ] Product cards show proper borders, shadows, glow effects, and hover lift
- [ ] Layout contains all content within 1400px max-width with proper padding
- [ ] Mobile responsive at 320px-1920px with hamburger menu, stacked grids, and proper touch targets
- [ ] No CSS-related errors in browser Console
- [ ] No 404 errors for CSS files in Network tab
- [ ] Published site matches the Figma Make preview/local dev appearance
- [ ] All interactive colors meet WCAG AA contrast (4.5:1 minimum) in both light and dark modes

---

## 9. Related Files & References

| Document | Path | Purpose |
|---|---|---|
| Funky Redesign Orchestrator | `/prompts/funky-redesign-orchestrator.md` | Master prompt for all 10 funky phases |
| Funky Design System Tokens | `/guidelines/design-tokens/Funky-Woocommerce-Design-System.md` | Complete token reference |
| Main Guidelines | `/guidelines/Guidelines.md` | Project architecture and standards |
| CSS Architecture Audit | `/prompts/audits/css-architecture-deep-audit.md` | Previous CSS audit |
| Theme Variables | `/src/styles/theme-variables.css` | Canonical CSS custom properties |
| Theme Dark Mode | `/src/styles/theme-dark-mode.css` | Dark mode overrides |
| Theme Funky | `/src/styles/theme-funky.css` | Funky shared utilities |
| FrontPage Template | `/src/app/components/templates/FrontPage.tsx` | Homepage component |
| Routes | `/src/app/routes.tsx` | All application routes |
| App Entry | `/src/app/App.tsx` | Root application component |

---

**Last Updated:** February 22, 2026  
**Author:** Development Team  
**Status:** FIX APPLIED — Two fixes consolidated into `/styles/globals.css`: (1) 150+ WordPress token injection, (2) ~470 component CSS rules. Awaiting publish verification.