---
title: "CSS10 — Dark mode !important audit"
created: "2026-03-16"
task: "CSS10"
status: "complete"
---

# CSS10 — Dark mode `!important` audit

## Summary

Scanned all 280+ CSS files in `/src/styles/` for `!important` usage. Found **60 instances** across **8 files**. Zero non-funky `.dark` rules use `!important` — the dark mode CSS variable system is clean.

## Findings by category

### 1. Acceptable — `prefers-reduced-motion` (4 instances)

| File | Line(s) | Rule |
|------|---------|------|
| `blocks/display/pp-3d-components.css` | 180 | `animation: none !important` |
| `blocks/ui/funky-utilities.css` | 99-101 | `animation/transition/transform: none !important` |
| `sections/legacy-animations.css` | 18 | `animation/transition/transform: none !important` |

**Verdict:** Keep. `!important` is correct here per WCAG `prefers-reduced-motion` guidance — must override any specificity.

### 2. Acceptable — Utility class overrides (3 instances)

| File | Line(s) | Rule |
|------|---------|------|
| `blocks/ui/page-utilities.css` | 20 | `.wp-border-neon-cyan { border-color: var(--retro-accent-sky) !important }` |
| `blocks/ui/page-utilities.css` | 24 | `.wp-border-neon-pink { border-color: var(--retro-accent-coral) !important }` |
| `blocks/ui/page-utilities.css` | 28 | `.wp-border-neon-lime { border-color: var(--retro-success) !important }` |

**Verdict:** Keep. These already use CSS variables. `!important` is standard for utility-class override pattern.

### 3. Deferred — Funky theme files (53 instances)

| File | Count | Notes |
|------|-------|-------|
| `blocks/archive/filter-sidebar.css` | 37 | Funky filter UI — hardcoded hex + `!important` |
| `blocks/cart/funky-cart.css` | 9 | Funky cart CTA — hardcoded hex + `!important` |
| `blocks/archive/pagination.css` | 4 | Funky pagination active — hardcoded hex + `!important` |
| `sections/legacy-animations.css` | 3 | Counted in category 1 above |

**Dark-mode specific funky `!important` (subset of above):**

- `filter-sidebar.css:108` — `.dark .funky-filter-section { border-color: #fff !important }`
- `filter-sidebar.css:112-113` — `.dark .funky-filter-trigger { background: #000; color: #fff !important }`
- `filter-sidebar.css:117` — `.dark .funky-filter-trigger:hover { background: #f0f !important }`
- `filter-sidebar.css:125` — `.dark .funky-color-swatch { border-color: #fff !important }`
- `filter-sidebar.css:130-132` — `.dark .funky-size-btn { 3 props !important }`
- `pagination.css:127-128` — `.dark .funky-pagination-item--active { background: #f0f; color: #fff !important }`
- `funky-cart.css:108-110` — `.dark` funky cart overrides (3 `!important`)

**Verdict:** Deferred — all in `funky-*` classes tagged for deprecation (CSS28/TK20). Will be resolved when funky theme layer is retired.

## Conclusion

| Category | Count | Action |
|----------|-------|--------|
| `prefers-reduced-motion` | 4 | ✅ Keep (WCAG compliant) |
| Utility overrides | 3 | ✅ Keep (uses CSS variables) |
| Funky theme (deferred) | 53 | ⏳ Deferred per CSS28/TK20 |
| Non-funky `.dark` with `!important` | **0** | ✅ Clean |

**Result:** The dark mode CSS variable system is healthy. All `.dark` overrides outside funky files use CSS variables without `!important`. No action needed beyond the deferred funky cleanup.
