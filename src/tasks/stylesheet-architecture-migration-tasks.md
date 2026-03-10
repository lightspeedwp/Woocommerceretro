# Stylesheet Architecture Migration - Task List

**Created:** March 3, 2026
**Source Report:** `/reports/audits/2026-03-03_light-dark-mode-stylesheet-audit.md`
**Priority:** P0 (Critical)
**Total Estimated Effort:** ~15 hours
**Last Updated:** March 8, 2026

---

## Phase 1: Selector Unification (P0 - ~2 hours) -- COMPLETE

- [x] **1.1** Replace `[data-theme="dark"]` with `.dark` in `/src/styles/globals.css` (13 rules) -- Already done (prior session)
- [x] **1.2** Replace `[data-theme="dark"]` with `.dark` in `/src/styles/utilities.css` (2 rules) -- No `[data-theme]` found
- [x] **1.3** Replace `[data-theme="dark"]` with `.dark` in `/src/styles/theme-funky.css` (2 rules) -- Already uses `.dark`
- [x] **1.4** Replace `[data-theme="dark"]` with `.dark` in `blocks/layout/*.css` (5 files, ~18 rules) -- No `[data-theme]` found
- [x] **1.5** Replace `[data-theme="dark"]` with `.dark` in `blocks/sections/*.css` (2 files, 3 rules) -- No `[data-theme]` found
- [x] **1.6** Replace `[data-theme="dark"]` with `.dark` in `blocks/archive/*.css` (3 files, 6 rules) -- No `[data-theme]` found
- [x] **1.7** Verify ThemeContext JS toggles `.dark` class on `<html>` -- Confirmed: classList.add/remove('dark')
- [x] **1.8** Remove duplicate `.dark` block in `theme-funky.css` (lines 31-40 duplicate lines 21-30) -- No duplicate found

## Phase 2: Variable Conflict Resolution (P0 - ~1 hour) -- COMPLETE

- [x] **2.1** Resolve `--wp--preset--color--primary`: Standardized to `#111111` (was `#030213` in theme-variables.css + globals.css)
- [x] **2.2** Resolve `--wp--preset--color--foreground`: Standardized to `#1a1a1a` (was `#1f2937` in theme-variables.css + globals.css)
- [x] **2.3** Resolve `--wp--preset--color--surface`: Standardized to `#f9f9f9` (was `#ffffff` in theme-variables.css + globals.css)
- [x] **2.4** Resolve `--wp--preset--transition--base`: Standardized to `200ms` across all files (critical.css was 150ms)
- [x] **2.5** Resolve `--wp--preset--font-family--base`: Standardized to system stack without Inter (critical.css had Inter)
- [x] **2.6** Aligned `critical.css` `:root` values with canonical `theme-variables.css` values
- [x] **2.7** Aligned `/styles/globals.css` `:root` values with canonical `theme-variables.css` values

## Phase 3: New File Creation & Restructure (P1 - ~3 hours) -- DEFERRED

Deferred: Cannot delete protected CSS files, making file rename/refactor tasks impractical. Current structure works well. Will revisit if needed.

- [ ] **3.1** Create `/src/styles/theme-light.css` (extract light-mode color variables from `theme-variables.css`)
- [ ] **3.2** Create `/src/styles/theme-dark.css` (rename/refactor `theme-dark-mode.css`)
- [ ] **3.3** Create `/src/styles/theme-base.css` (extract base element styles from `theme-light-mode.css`)
- [ ] **3.4** Refactor `theme-variables.css` (remove all color variables, keep theme-agnostic only)
- [ ] **3.5** Refactor `/src/styles/globals.css` to orchestrator-only (move funky styles to `theme-funky.css`)
- [ ] **3.6** Update `globals.css` import order

## Phase 4: Hardcoded Color Remediation (P1 - ~4 hours) -- IN PROGRESS

- [ ] **4.1** Convert funky checkout/cart hardcoded colors to CSS variables (~30 instances)
- [x] **4.2** Convert `theme-light-mode.css` link colors to CSS variables -- Done: uses `var(--wp--preset--color--link)` and `var(--wp--preset--color--link-hover)`
- [x] **4.3** Convert `theme-dark-mode.css` hardcoded link colors to CSS variables -- Done: uses `var(--wp--preset--color--link)` and `var(--wp--preset--color--link-hover)`
- [x] **4.4** Convert `utilities.css` text/bg color classes to use CSS variables -- Done: `.wp-text-primary` and `.wp-text-secondary` now use `var(--wp--preset--color--foreground)` and `var(--wp--preset--color--muted-foreground)`, removing need for `.dark` overrides
- [x] **4.5** Convert `critical.css` hardcoded colors to reference canonical variables -- Done: `a` tag uses `var(--wp--preset--color--link)`, link var added to `:root`
- [ ] **4.6** Audit and convert block CSS hardcoded colors
- [ ] **4.7** Audit and convert section CSS hardcoded colors

## Phase 5: Scattered Rule Consolidation (P2 - ~3 hours)

- [ ] **5.1** Eliminate dark mode rules replaceable by CSS variables (~120 rules)
- [ ] **5.2** Move structural dark overrides to `theme-dark.css` (~30 rules)
- [ ] **5.3** Document co-located overrides that stay (mega-menu, funky-sections)
- [ ] **5.4** Reduce `/styles/globals.css` to minimal Figma Make entrypoint

## Phase 6: Verification (P1 - ~2 hours)

- [ ] **6.1** Dark mode toggle test (all components switch correctly)
- [ ] **6.2** Visual regression: Front Page, Shop, Product, Cart, Checkout, Blog
- [ ] **6.3** WCAG contrast verification in both modes
- [x] **6.4** Fix dark border contrast -- Done: `#404040` bumped to `#525252` (4.6:1), border-subtle from `#2a2a2a` to `#374151`, border-strong from `#525252` to `#6b7280`
- [ ] **6.5** Verify `prefers-reduced-motion` still works
- [ ] **6.6** Verify no CSS cascade conflicts

---

**Execution Order:** Phase 2 > Phase 1 > Phase 3 > Phase 4 > Phase 5 > Phase 6
**Progress:** Phase 1 COMPLETE, Phase 2 COMPLETE, Phase 4 4/7 done, Phase 6.4 done (March 8, 2026)