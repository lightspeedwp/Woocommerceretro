---
title: "CSS Architecture Health Audit"
date: "2026-03-16"
auditor: "AI"
scope: "Full CSS architecture — /styles/globals.css, /src/styles/**"
severity_scale: "P0 (critical) > P1 (high) > P2 (medium) > P3 (low)"
---

# CSS Architecture Health Audit

## Summary

| Metric | Value | Status |
|--------|-------|--------|
| Entry point | `/styles/globals.css` | OK |
| Total @imports | ~280 | OK |
| Root token files | 9 | OK |
| Block CSS directories | 20 | OK |
| Section CSS files | 95 | OK |
| Orphaned CSS files (not imported) | 3 | WARNING |
| Duplicate CSS definitions | 1 | P1 |
| Inline styles (total across .tsx) | ~60 | P2 |
| Inline styles EXEMPT (dynamic) | ~35 | N/A |
| Inline styles to fix | ~25 | P2/P3 |

---

## Findings

### F1. Duplicate Footer CSS [P1]

**Files:** `/src/styles/blocks/layout/footer.css` AND `/src/styles/blocks/theme/footer.css`

Both files define the same selectors (`.wp-site-footer`, `.wp-site-footer__main`, `.wp-site-footer__bottom`, etc.) with identical or near-identical rules. Both are @imported in `/styles/globals.css` (lines 146 and 219).

**Impact:** Last-imported file wins (theme/footer.css), making layout/footer.css dead code. Any edits to layout/footer.css are silently overridden. This caused a maintenance bug during the footer width fix.

**Fix:** Merge into one canonical file (`blocks/layout/footer.css`), delete theme duplicate, and remove its @import. If theme-specific overrides are needed, use BEM modifiers (e.g., `.wp-site-footer--retro`).

---

### F2. Token files not imported [P2]

**Files:**
- `/src/styles/tokens/color.ref.light.css`
- `/src/styles/tokens/color.ref.dark.css`
- `/src/styles/tokens/color.semantic.css`

These 3 files in `/src/styles/tokens/` are **not @imported** in `/styles/globals.css`. They define a `--wp--custom--color--*` indirection layer that maps to `--wp--preset--color--*` via `color.semantic.css`.

**Impact:** The indirection layer is dead code. The actual tokens used at runtime come from `theme-variables.css` and `retro-theme.css`.

**Fix:** Either:
- (A) Wire them into the @import chain and migrate components to the 3-tier system, OR
- (B) Delete them if the 2-file system (`theme-variables.css` + `retro-theme.css`) is canonical.

Recommend option (B) — the current 2-file system works and is well-maintained.

---

### F3. Inline `style={{}}` violations in blocks [P2]

| Component | Count | Category |
|-----------|-------|----------|
| `SpinningCoin3D.tsx` | 10 | 3D animation (EXEMPT) |
| `SubscriptionBox3D.tsx` | 13 | 3D animation (EXEMPT) |
| `PageLivePreview.tsx` | 24+ | Dev tools playground |
| `Chart.tsx` | 2 | Dynamic color props (EXEMPT) |
| `Progress.tsx` | 1 | Dynamic transform (EXEMPT) |
| `Sidebar.tsx` | 1 | CSS custom property (EXEMPT) |
| `Buttons.tsx` | 1 | Dynamic gap (EXEMPT) |
| `DropdownMenu.tsx` | 1 | Positioning (EXEMPT) |
| `Popover.tsx` | 1 | Positioning (EXEMPT) |
| `Logo.tsx` | 1 | Static height — FIXABLE |
| `OptimizedImage.tsx` | 1 | Dynamic dimensions (EXEMPT) |
| `Skeleton.tsx` | 2 | Dynamic dimensions (EXEMPT) |
| `SiteLogo.tsx` | 1 | Dynamic width (EXEMPT) |
| `MegaMenuWrapper.tsx` | 1 | Dynamic rotation (EXEMPT) |

**Actionable violations (non-dynamic):**
1. **`PageLivePreview.tsx`** — 24+ static inline styles. Priority: P3 (dev-only page).
2. **`Logo.tsx`** — `style={{ height: '48px', objectFit: 'contain' }}`. Priority: P2 (customer-facing).

---

### F4. Inline CSS in globals.css [P2]

Lines 390-408 of `/styles/globals.css` contain inline CSS rules for mobile menu and WooCommerce mobile menu that should be in separate block CSS files.

**Fix:** Extract to `/src/styles/blocks/navigation/mobile-menu.css` (which already exists — check for duplication) or a dedicated file.

---

### F5. Comment says "42 files" but directory has 95 [P3]

Line 269 of `/styles/globals.css`: `/* @IMPORT: /src/styles/sections/ (42 files) */` — this count is stale. The actual section count is 95 files.

**Fix:** Update comment to reflect actual count.

---

### F6. CSS file size compliance [INFO]

All files checked are within the 200-line guideline limit. The largest new file (`account-dashboard-widgets.css`) is at 471 lines — this exceeds the 200-line limit and should be split by BEM block.

| File | Lines | Status |
|------|-------|--------|
| `account-dashboard-widgets.css` | 471 | OVER (split needed) |
| `legacy-mega-menu.css` | ~80 | OK |
| `toast.css` | ~120 | OK |
| `footer.css` (layout) | ~320 | OVER (also duplicate) |
| `footer.css` (theme) | ~310 | OVER (also duplicate) |

---

## Architecture Health Score

| Category | Score | Notes |
|----------|-------|-------|
| Entry point integrity | 9/10 | Clean, well-organized |
| @import coverage | 8/10 | 3 orphaned token files |
| No duplicates | 6/10 | Footer CSS duplicated |
| BEM compliance | 8/10 | Good after `apply bem` passes |
| File size limits | 7/10 | 3 files over 200 lines |
| Inline style minimization | 7/10 | Most remaining are EXEMPT |
| Dark mode coverage | 9/10 | Comprehensive |
| **Overall** | **7.7/10** | Good — 2 structural issues to resolve |

---

## Recommended Actions (Priority Order)

1. **[P1]** Merge duplicate footer CSS files
2. **[P2]** Decide on `/src/styles/tokens/` — import or delete
3. **[P2]** Split `account-dashboard-widgets.css` (471 lines > 200 limit)
4. **[P2]** Extract `Logo.tsx` inline height to CSS class
5. **[P3]** Extract `PageLivePreview.tsx` inline styles to CSS
6. **[P3]** Update stale "42 files" comment in globals.css
7. **[P3]** Extract inline mobile menu CSS from globals.css to block file
