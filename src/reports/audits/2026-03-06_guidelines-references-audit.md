# Guidelines Cross-Reference Audit

**Date:** 2026-03-06  
**Scope:** All `@see` and file path references in `/guidelines/Guidelines.md` and source files  
**Status:** Complete

---

## Summary

- **Source file JSDoc references (CSS paths):** 16 references across 16 files — **ALL VALID**
- **Source file `@see` references:** 10 references across 4 files — **ALL VALID**
- **Guidelines.md internal references:** 40+ links — **17 stale (files removed during cleanup)**

---

## Stale References in Guidelines.md

These files are referenced in `Guidelines.md` but no longer exist at the specified paths.
They were likely removed during project cleanup or were aspirational documentation that was never created.

### Root-Level Files (Missing from `/guidelines/`)

| Referenced Path | Status | Notes |
|---|---|---|
| `testing.md` | Missing | Testing standards (content partially in audits/) |
| `performance.md` | Missing | Mobile version exists at `mobile/performance.md` |
| `SPACING_QUICK_REFERENCE.md` | Missing | Spacing info in `design-tokens/Spacing.md` |
| `COMPONENT_SPACING_GUIDE.md` | Missing | Spacing info in `design-tokens/Spacing.md` |
| `COMPONENT_INDEX.md` | Missing | Component list in `overview-components.md` |
| `CONVERSION_OPTIMIZATION_GUIDE.md` | Missing | |
| `MEGA_MENU_RESPONSIVE_STRATEGY.md` | Missing | |
| `MEGA_MENU_OPTIMIZATION_REPORT.md` | Missing | |
| `FOOTER_AUDIT_REPORT.md` | Missing | |
| `SINGLE_PRODUCT_DARK_MODE_AUDIT.md` | Missing | |
| `ARCHIVE_TEMPLATE_ENHANCEMENT.md` | Missing | |
| `HOMEPAGE_CTA_INTEGRATION.md` | Missing | |
| `CHECKOUT_FLOW_ENHANCEMENT.md` | Missing | |
| `CART_UX_ENHANCEMENT.md` | Missing | |
| `TESTING_EXPANSION_GUIDE.md` | Missing | |
| `PERFORMANCE_OPTIMIZATION_GUIDE.md` | Missing | |

### Subdirectory Files (Missing)

| Referenced Path | Status |
|---|---|
| `design-tokens/CONTRAST_AUDIT_REPORT.md` | Missing |
| `audits/SPACING_AUDIT.md` | Missing |
| `audits/PERFORMANCE_AUDIT.md` | Missing |
| `audits/TESTING_EXPANSION_AUDIT.md` | Missing |
| `audits/COMPONENT_AUDIT_BATCH_11.md` | Missing |
| `audits/ARCHITECTURE_COMPLIANCE_AUDIT.md` | Missing |
| `patterns/CartFilled.md` | Missing |
| `patterns/CartEmpty.md` | Missing |
| `patterns/CallToAction.md` | Missing |
| `patterns/TestimonialSlider.md` | Missing |
| `styles/button-styles.md` | Missing |

### Case Mismatches (Functional but inconsistent)

| Referenced As | Actual Filename |
|---|---|
| `design-tokens/colors.md` | `Colors.md` |
| `design-tokens/typography.md` | `Typography.md` |
| `design-tokens/spacing.md` | `Spacing.md` |
| `design-tokens/dark-mode.md` | `Dark-Mode.md` |

---

## Valid References (Confirmed)

All source file JSDoc references to CSS files are valid:
- `/src/styles/blocks/layout/footer.css`
- `/src/styles/blocks/theme/parts-funky.css`
- `/src/styles/sections/account-auth-funky.css`
- `/src/styles/sections/blog-format-archives-funky.css`
- `/src/styles/sections/blog-funky.css`
- `/src/styles/sections/commerce-special-funky.css`
- `/src/styles/sections/info-pages-funky.css`

---

## Recommendation

**Impact:** Low (documentation-only, no build/runtime impact)  
**Action:** Remove stale references from Guidelines.md Section 10+ (Sub-Guidelines listings) during next guidelines refresh. The core architecture sections (1-9) remain accurate.
