# A1: Guidelines Freshness Audit

**Date:** 2026-02-21  
**Auditor:** Orchestrator Prompt v1.0  
**Scope:** All files in `/guidelines/` scanned for outdated references, conflicts, and staleness.

---

## Summary

- **Total files scanned:** 113
- **CURRENT:** 42 (37%)
- **STALE:** 48 (42%) — Minor updates needed (path refs, variable naming)
- **OUTDATED:** 18 (16%) — Need rewrite to align with v2.6 architecture
- **CONFLICTING:** 5 (4%) — Actively harmful; contain patterns that contradict current standards

---

## Critical Findings

### 1. Guidelines.md (MAIN FILE) — CONFLICTING

The main `Guidelines.md` is the most problematic file. Despite declaring "NO TAILWIND CSS", sections 6-8 are saturated with Tailwind utility classes used as examples:

**Tailwind class instances in Guidelines.md:** 200+ occurrences including:
- `py-16`, `py-20`, `py-12`, `py-24`, `lg:py-32`, `lg:py-40`
- `bg-white`, `bg-gray-50`, `bg-gray-900`, `bg-purple-600`
- `text-gray-900`, `dark:text-gray-50`, `text-gray-600`, `dark:text-gray-400`
- `border-gray-100`, `dark:border-gray-800`
- `flex`, `grid`, `gap-8`, `items-center`, `justify-center`
- `rounded-lg`, `shadow-md`, `text-center`
- `text-2xl`, `font-semibold`, `font-bold`, `leading-tight`

**Conflicting CSS variable systems referenced:**
- `--color-bg`, `--color-surface`, `--color-text-primary` (old token naming)
- `--wp--preset--color--background`, `--wp--preset--color--surface` (current naming)
- Both systems appear in examples, causing confusion

**Outdated file paths:**
- References `/styles/globals.css` (deleted Jan 12, 2026)
- References `/src/styles/woocommerce-complete.css` (not a real file — actual file is `/src/styles/woocommerce-core.css`)
- Component location references mix `/components/` root and `/src/app/components/`

**Recommended Action:** REWRITE sections 4-8 to remove all Tailwind examples and use only WordPress BEM + CSS variable examples.

### 2. `TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md` — OUTDATED

This migration reference is now obsolete as all Tailwind should already be removed. Should be archived.

### 3. `design-tokens/colors.md` — STALE

References `--color-bg`, `--color-surface`, `--color-text-primary` (old naming). Needs update to `--wp--preset--color--*` namespace.

### 4. `design-tokens/dark-mode.md` & `dark-mode-styles.md` — STALE

Two files covering same topic (duplication). Both reference old variable naming.

### 5. `blocks/design/Buttons.md` — CONFLICTING

Line 349 explicitly says "Uses Tailwind CSS utility classes" — directly contradicts the no-Tailwind mandate.

---

## Per-Directory Analysis

### `/guidelines/blocks/` — 92 files

| Subdirectory | Files | Status | Issues |
|---|---|---|---|
| `design/` | 12 | STALE | Buttons.md references Tailwind; duplicates (Buttons.md + buttons.md) |
| `embed/` | 8 | CURRENT | WordPress block guidelines, well-structured |
| `media/` | 6 | CURRENT | WordPress block guidelines, well-structured |
| `text/` | 15 | STALE | Duplicate files (Heading.md + heading.md, List.md + list.md, etc.) |
| `theme/` | 24 | CURRENT | Well-maintained WordPress theme block docs |
| `widgets/` | 12 | CURRENT | Well-maintained WordPress widget docs |
| `woocommerce/` | 11 | STALE | ProductCard.md references Tailwind migration history |
| Root | 4 | STALE | EnquiryModal.md, feedback.md, forms.md, layout.md |

### `/guidelines/patterns/` — 18 files

| Status | Count | Files |
|---|---|---|
| CURRENT | 12 | ArchiveCTA, ArchiveHeader, ArchivePagination, FAQSection, Hero, NewsletterSignup, PostGrid, PostMeta, ProductGrid, ResultsCount, TestimonialCarousel, ValuePropositionSection |
| STALE | 4 | AccountPatterns, CategoryShowcaseGrid, FeaturesComparisonTable, HowItWorksSection |
| OUTDATED | 2 | PricingTable (no corresponding CSS), ProductTabsSection (duplicate scope with blocks) |

### `/guidelines/parts/` — 5 files

| Status | Count | Files |
|---|---|---|
| CURRENT | 3 | Header.md, Footer.md, CheckoutLayout.md |
| STALE | 1 | CheckoutHeader.md |
| OUTDATED | 1 | menus/MobileMenu.md (references old component structure) |

### `/guidelines/templates/` — 11 files

| Status | Count | Files |
|---|---|---|
| CURRENT | 6 | AccountLayout, ArchiveProduct, FrontPage, PageCart, PageCheckout, SingleProduct |
| STALE | 3 | BlogIndex, OrderConfirmation, VariableProduct |
| OUTDATED | 2 | ArchiveAuthor (references old imports), SinglePost (references old patterns) |

### `/guidelines/design-tokens/` — 7 files

| Status | Count | Files |
|---|---|---|
| CURRENT | 2 | funky-theme.md, funky-woocommerce-design-system.md |
| STALE | 3 | colors.md, typography.md, spacing.md (all use old variable naming partially) |
| CONFLICTING | 2 | dark-mode.md + dark-mode-styles.md (duplicates with conflicting content) |

### `/guidelines/mobile/` — 7 files

| Status | Count | Files |
|---|---|---|
| CURRENT | 5 | animations, forms, images, performance, spacing |
| STALE | 2 | buttons.md, typography.md |

### `/guidelines/styles/` — 2 files

| Status | Count | Files |
|---|---|---|
| STALE | 2 | section-styles.md (references old presets system), layout-grid.md |

### `/guidelines/audits/` — 4 files

| Status | Count | Files |
|---|---|---|
| OUTDATED | 4 | All files dated January 2026 — superseded by this orchestrator audit |

### `/guidelines/components/` — 10 files

| Status | Count | Files |
|---|---|---|
| CURRENT | 4 | Container, Layout, Logo, SectionPresets |
| STALE | 4 | BrandLogoGrid, CollectionRow, ContactFormSection, Hero |
| OUTDATED | 2 | ProductCard (duplicate of blocks/woocommerce/ProductCard), LivePreview |

### Root-level guideline files — 12 files

| File | Status | Issues |
|---|---|---|
| `Guidelines.md` | CONFLICTING | 200+ Tailwind refs, dual CSS variable systems |
| `README.md` | STALE | References may be out of date |
| `WRITING_GUIDELINES.md` | CURRENT | |
| `REPORTING_GUIDELINES.md` | CURRENT | |
| `SHELL_SCRIPT_GUIDELINES.md` | CURRENT | |
| `PYTHON_SCRIPT_GUIDELINES.md` | CURRENT | |
| `PLANNING_GUIDELINES.md` | CURRENT | |
| `IMPORTS_GUIDELINES.md` | CURRENT | |
| `PROMPT_GENERATION_GUIDELINES.md` | CURRENT | |
| `PATH_ALIAS_STRATEGY.md` | STALE | Alias paths may be outdated |
| `ROUTING_GUIDE.md` | STALE | May reference old route structure |
| `TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md` | OUTDATED | Migration should be complete |

---

## Duplicate Files Identified

| File 1 | File 2 | Action |
|---|---|---|
| `blocks/text/Heading.md` | `blocks/text/heading.md` | Merge, delete lowercase |
| `blocks/text/List.md` | `blocks/text/list.md` | Merge, delete lowercase |
| `blocks/text/Paragraph.md` | `blocks/text/paragraph.md` | Merge, delete lowercase |
| `blocks/design/Buttons.md` | `blocks/design/buttons.md` | Merge, delete one |
| `design-tokens/dark-mode.md` | `design-tokens/dark-mode-styles.md` | Merge into one |
| `components/ProductCard.md` | `blocks/woocommerce/ProductCard.md` | Keep blocks/ version, delete components/ |
| `components/Hero.md` | `patterns/Hero.md` | Keep patterns/ version, delete components/ |

---

## Priority Actions

1. **P0 (Immediate):** Rewrite `Guidelines.md` sections 4-8 — remove all Tailwind, use BEM + CSS var examples only
2. **P0 (Immediate):** Resolve `dark-mode.md` vs `dark-mode-styles.md` duplication
3. **P1 (High):** Remove/archive `TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md`
4. **P1 (High):** Fix `blocks/design/Buttons.md` — remove Tailwind reference
5. **P1 (High):** Delete 7 duplicate files (lowercase variants + cross-directory dupes)
6. **P2 (Medium):** Update `colors.md`, `typography.md`, `spacing.md` to use `--wp--preset--*` naming exclusively
7. **P2 (Medium):** Archive all 4 files in `audits/` (superseded by this audit)
8. **P3 (Low):** Update all remaining STALE files with current paths and variable names
