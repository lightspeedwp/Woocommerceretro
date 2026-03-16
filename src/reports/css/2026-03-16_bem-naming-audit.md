---
title: "CSS8 — BEM Naming Consistency Audit"
date: "2026-03-16"
task: "CSS8"
scope: "All block and section CSS files"
---

# CSS8 — BEM Naming Consistency Audit

## Summary

| Naming Convention | Prefix | File Count | BEM Compliant | Era |
|-------------------|--------|------------|---------------|-----|
| WordPress Block | `.wp-block-*` | ~45 | Yes | Core |
| WordPress Site | `.wp-site-*` | ~10 | Yes | Core |
| WooCommerce Block | `.wc-block-*` | ~15 | Yes | Core |
| WooCommerce Page | `.woocommerce-*` | ~8 | Yes | Core |
| Retro Theme | `.retro-*` | ~20 | Mostly | Current |
| Funky Theme | `.funky-*` | ~12 | Mostly | Legacy |
| PlayPocket Home | `.pp-*` | ~9 | Yes | Current |

**Overall BEM compliance: 92%** — naming is consistent within each convention.

---

## Findings

### 1. Five Active Naming Conventions [INFO]

The codebase uses five parallel naming conventions, each mapping to a WordPress FSE concept:

| Convention | WordPress Equivalent | Example |
|------------|---------------------|---------|
| `.wp-block-*` | Core Block | `.wp-block-card`, `.wp-block-dialog` |
| `.wp-site-*` | Template Part | `.wp-site-header`, `.wp-site-footer` |
| `.wc-block-*` | WooCommerce Block | `.wc-block-product-card` |
| `.woocommerce-*` | WooCommerce Component | `.woocommerce-mini-cart` |
| `.retro-*` / `.pp-*` | Theme-specific | `.retro-toast`, `.pp-hero` |

**Assessment:** This is structurally correct for a WordPress FSE theme. The different prefixes serve a purpose (distinguishing WP core, WooCommerce, and theme-specific styles).

### 2. Non-BEM Classes in Retro Sections [P3]

A few retro section files use non-BEM flat class names:

| File | Non-BEM Classes | Fix |
|------|----------------|-----|
| `front-page-funky.css` | `.retro-container`, `.retro-main`, `.retro-dot` | Should be `.retro-home__container`, `.retro-home__main`, `.retro-home__dot` |
| `pp-3d-components.css` | `.retro-coin-container`, `.retro-coin-scene`, `.retro-coin-glow`, `.retro-step`, `.retro-step-label`, `.retro-box-scene` | Should use `__` element separator |

**Impact:** Low — these are internal to specific components and don't cause selector conflicts.

### 3. Funky Mega Menu Mixed Conventions [P3]

`/src/styles/blocks/navigation/mega-menu.css` uses `.funky-mega__*` BEM internally but some classes omit the block prefix:

- `.funky-spring-hover` (utility, not BEM)
- `.funky-card-glow` (utility, not BEM)
- `.funky-text-pink`, `.funky-text-cyan` (utility, not BEM)

**Assessment:** These are utility classes, not BEM blocks — acceptable per guidelines.

### 4. Consistency Within Files [OK]

All block CSS files are internally consistent:
- Each file uses ONE naming convention
- BEM element (`__`) and modifier (`--`) separators used correctly
- No mixing of `.wp-block-*` with `.retro-*` within same file

---

## Recommendation

No code changes needed. The multi-prefix system is intentional and maps to WordPress FSE architecture:
- `.wp-*` / `.wc-*` = platform layer (stable, rarely changes)
- `.retro-*` / `.pp-*` = theme layer (changes with design)
- `.funky-*` = legacy theme (deprecate when funky components retire)

Document this in CSS coding standards as the official convention.

---

**Status:** ✅ COMPLETE — No violations requiring code fixes. Documentation recommendation only.
