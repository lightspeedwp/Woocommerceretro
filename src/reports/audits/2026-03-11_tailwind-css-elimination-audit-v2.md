# Tailwind CSS & Inline Styles Elimination Audit v2

**Audit ID:** A12-v2  
**Date:** March 11, 2026  
**Prompt:** `/prompts/refactoring/css-migration/refactor_css_tailwind-to-wordpress_v2.md`  
**Status:** CRITICAL VIOLATIONS FOUND  
**Scope:** All `.tsx` files in `/src/app/components/`

---

## Executive Summary

Fresh codebase scan reveals **180+ violations** across **20 files** in 4 categories:

| Category | Instances | Files | Priority |
|----------|-----------|-------|----------|
| **Tailwind utility classes** | 48+ | 4 | P0 |
| **Inline `style={{}}` attributes** | 70+ | 8 | P0 |
| **wp-utility spacing classes** (non-BEM) | 39 | 16 | P1 |
| **`space-y-*` usage** | 2 | 2 | P1 |

**New in v2:** This audit specifically identifies **margin-to-gap migration opportunities** and **parent layout context gaps** per the new margin-removal-guidelines.md.

---

## Batch Plan (Dependency-Ordered)

### Batch 1: Developer Tools (Pure Tailwind — Highest Density)

**3 files, ~65 Tailwind instances, ~0 inline styles**

These files are 100% Tailwind with zero WordPress alignment:

#### 1.1 `/src/app/components/developer/AccessibilityChecker.tsx`

**Instances: ~25 | Priority: P0**

| Line | Current | Violation Type |
|------|---------|---------------|
| 99 | `className="fixed bottom-4 right-4 z-50 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors"` | Full Tailwind |
| 108 | `className="fixed bottom-0 right-0 w-full md:w-96 h-96 bg-white dark:bg-gray-900 border-t-4 border-blue-600 shadow-2xl z-50 flex flex-col"` | Full Tailwind |
| 110 | `className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"` | Full Tailwind |
| 111 | `className="flex items-center justify-between mb-3"` | Tailwind + margin |
| 114 | `className="font-bold mb-0"` | Tailwind typography |
| 118 | `className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"` | Full Tailwind |
| 123 | `className="flex gap-2 text-sm"` | Tailwind layout |
| 126 | `className="px-3 py-1 rounded ..."` | Tailwind spacing |
| 134 | `className="flex-1 overflow-y-auto p-4 space-y-3"` | **space-y migration needed** |
| 141 | `className="p-3 rounded-lg border-l-4 ..."` | Full Tailwind |
| 146 | `className="font-medium mb-1"` | Tailwind + margin |
| 156 | `className="p-4 border-t"` | Tailwind |
| 157 | `className="w-full bg-blue-600 text-white p-2 rounded"` | Full Tailwind |

**Margin → Gap opportunities:**
- Line 111: `mb-3` on header → parent needs `gap`
- Line 114: `mb-0` → remove
- Line 146: `mb-1` → parent needs `gap`

#### 1.2 `/src/app/components/developer/PerformanceMonitor.tsx`

**Instances: ~22 | Priority: P0**

| Line | Current | Violation Type |
|------|---------|---------------|
| 164 | `className="fixed bottom-20 right-4 z-50 p-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-colors"` | Full Tailwind |
| 173 | `className="fixed bottom-0 right-0 w-full md:w-96 h-96 bg-white dark:bg-gray-900 border-t-4 border-green-600 shadow-2xl z-50 flex flex-col"` | Full Tailwind |
| 175 | `className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"` | Full Tailwind |
| 176 | `className="flex items-center justify-between mb-4"` | Tailwind + margin |
| 179 | `className="font-bold mb-0"` | Tailwind + margin |
| 183 | `className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"` | Full Tailwind |
| 188 | `className="grid grid-cols-2 gap-3"` | Tailwind grid |
| 189 | `className="bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700"` | Full Tailwind |
| 190 | `className="text-xs text-gray-600"` | Tailwind typography |
| 191 | `className="text-2xl font-bold ..."` | Tailwind typography |
| 201 | `className="flex-1 overflow-y-auto p-4 space-y-2"` | **space-y migration needed** |
| 207 | `className="p-2 border-l-4 ..."` | Tailwind |
| 215 | `className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"` | Full Tailwind |
| 216 | `className="w-full px-4 py-2 bg-green-600 text-white rounded-lg"` | Full Tailwind |

#### 1.3 `/src/app/components/dev-tools/DevToolsLayout.tsx`

**Instances: ~18 | Priority: P0**

| Line | Current | Violation Type |
|------|---------|---------------|
| 74 | `className="bg-gradient-to-br ... border-b border-gray-200 dark:border-gray-700 py-12"` | Tailwind |
| 76 | `className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ... text-white text-sm font-medium mb-4"` | Full Tailwind |
| 80 | `className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4"` | Full Tailwind |
| 81 | `className="text-lg text-gray-600 dark:text-gray-400 mb-8"` | Full Tailwind |
| 84 | `className="flex gap-8 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700"` | Full Tailwind |
| 89 | `className="text-2xl font-bold ..."` | Tailwind typography |
| 90 | `className="text-sm text-gray-600 dark:text-gray-400"` | Tailwind |

---

### Batch 2: Inline Styles — Account Patterns (Highest Inline Style Density)

**5 files, ~70 inline style instances**

These files use WordPress variables but in `style={{}}` attributes instead of CSS classes.

#### 2.1 `/src/app/components/patterns/account/AccountLoyalty.tsx`

**Inline styles: ~25 | Priority: P0**

Heavy inline styling throughout. Example violations:
- Line 22: `style={{ marginBottom: 'var(--wp--preset--spacing--60)' }}`
- Line 55: `style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '...' }}`
- Line 60-68: Stat cards with full layout + color inline
- Line 75-90: Progress bar with full layout inline
- Line 97-114: Tier display with full layout inline
- Line 166-193: Benefits grid and upgrade banner

**Strategy:** Create `/src/styles/blocks/account/loyalty.css` with full BEM structure.

#### 2.2 `/src/app/components/patterns/account/Orders.tsx`

**Inline styles: ~18 | Priority: P0**

- Line 17: `style={{ display: 'flex', flexDirection: 'column', gap: '...' }}`
- Line 39-108: Order cards with full layout, colors, spacing inline
- Line 89-103: Item thumbnails with full layout inline

**Strategy:** Create `/src/styles/blocks/account/orders.css`

#### 2.3 `/src/app/components/patterns/account/AccountDetails.tsx`

**Inline styles: ~10 | Priority: P0**

- Line 15: `style={{ padding: 'var(--wp--preset--spacing--60)' }}`
- Line 18: `style={{ marginBottom: 'var(--wp--preset--spacing--40)' }}`
- Line 49, 67: `style={{ marginTop: 'var(--wp--preset--spacing--30)' }}`
- Line 81: `style={{ margin: '...', border: '...', borderTop: '...' }}`
- Line 93: `style={{ display: 'flex', flexDirection: 'column', gap: '...' }}`

**Strategy:** Create `/src/styles/blocks/account/details.css`

#### 2.4 `/src/app/components/patterns/account/OrderView.tsx`

**Inline styles: ~8 | Priority: P1**

- Lines 54, 83, 92, 95, 99: Color overrides via inline styles

#### 2.5 `/src/app/components/patterns/account/Dashboard.tsx`

**Inline styles: ~6 | Priority: P1**

- Lines 60, 84, 97, 105, 110: Color overrides via inline styles

---

### Batch 3: Retro/Sitemap Components (Inline Styles + Layout)

**4 files, ~45 inline style instances**

#### 3.1 `/src/app/components/pages/Sitemap.tsx`

**Inline styles: ~30+ | Priority: P0**

Most heavily inline-styled file in the codebase. Nearly every element has `style={{}}`.

**Strategy:** Create `/src/styles/blocks/pages/sitemap.css`

#### 3.2 `/src/app/components/patterns/BottomGridRetro.tsx`

**Inline styles: ~6 | Priority: P1**

- Lines 46, 49: Flex layout inline
- Lines 60, 70: Button styles inline

#### 3.3 `/src/app/components/patterns/HeaderRetroPattern.tsx`

**Inline styles: ~2 | Priority: P1**

- Line 27: `style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}`

#### 3.4 `/src/app/components/patterns/FooterRetroPattern.tsx`

**Inline styles: ~2 | Priority: P1**

- Line 40: `style={{ display: 'flex', gap: '1rem', ... }}`

---

### Batch 4: WordPress Utility Classes (Non-BEM, P1)

**16 files, ~39 instances of `wp-mt-*`, `wp-mb-*`, `wp-ml-*`, `wp-p-*` classes**

These use WordPress-prefixed utility classes (`wp-mt-4`, `wp-mb-8`, `wp-p-2`) which are better than Tailwind but still violate BEM convention. They should be absorbed into component-specific BEM classes.

**Affected files:**
1. `CheckoutContact.tsx` — `wp-m-0`
2. `AccountCreation.tsx` — `wp-mt-4`, `wp-mb-1`, `wp-ml-2`, `wp-p-2`, `wp-p-6`
3. `AdditionalInformation.tsx` — `wp-mt-2`
4. `DownloadsSection.tsx` — `wp-mb-2`, `wp-p-2`, `wp-p-4`, `wp-ml-2`
5. `OrderDetails.tsx` — `wp-mb-2`, `wp-mb-1`, `wp-ml-1`, `wp-mt-4`
6. `OrderStatus.tsx` — `wp-mt-2`, `wp-p-6`
7. `OrderStatusHeader.tsx` — `wp-mb-8`, `wp-mt-4`, `wp-p-2`
8. `OrderSummary.tsx` — `wp-p-3`
9. `AdditionalFields.tsx` — `wp-p-4`
10. `AddressDetails.tsx` — `wp-p-4`
11. `SinglePost.tsx` — `wp-mb-40`, `wp-mb-50`
12. `TagArchive.tsx` — `wp-mb-50`
13. `ThemeDebug.tsx` — `wp-mb-20`
14. `ComponentPreview.tsx` — `wp-mb-20`, `wp-mb-10`, `wp-ml-20`
15. `DevToolsFilterBar.tsx` — `wp-mt-50`, `wp-pt-50`
16. `SubscriptionLanding.tsx` — `wp-mb-0`

**Strategy:** Absorb these into parent component gap definitions during Batch B2 CSS extraction.

---

## Remediation Roadmap

| Batch | Files | Instances | Est. Time | Output CSS Files |
|-------|-------|-----------|-----------|-----------------|
| **B1: Developer Tools** | 3 | 65 | 3 hours | `dev-tools/accessibility-checker.css`, `dev-tools/performance-monitor.css`, `dev-tools/layout.css` |
| **B2: Account Patterns** | 5 | 70 | 4 hours | `account/loyalty.css`, `account/orders.css`, `account/details.css`, `account/order-view.css`, `account/dashboard.css` |
| **B3: Retro/Sitemap** | 4 | 45 | 3 hours | `pages/sitemap.css`, `retro/bottom-grid.css`, `retro/header.css`, `retro/footer.css` |
| **B4: WP Utility Cleanup** | 16 | 39 | 2 hours | Updates to existing CSS files |

**Total: 28 files, 180+ violations, ~12 hours**

---

## Priority Order

1. **Batch 1 first** — Pure Tailwind files are the most visible violations
2. **Batch 2 second** — Inline styles are the highest volume
3. **Batch 3 third** — Retro components with mixed violations
4. **Batch 4 last** — WP utility classes are least severe (already using WP tokens)

---

## Success Criteria

- [ ] Zero Tailwind utility classes in any `.tsx` file
- [ ] Zero inline `style={{}}` (except approved exceptions)
- [ ] All spacing uses WordPress numeric scale (10-100)
- [ ] All margin-based sibling spacing converted to parent gap
- [ ] All parents have layout context (flex/grid) when gap is used
- [ ] Mobile stacking verified at 320px viewport
- [ ] Dark mode verified for all migrated components
- [ ] All new CSS files imported via `@import` in `globals.css`

---

**Report Status:** COMPLETE  
**Next Action:** Begin Batch 1 (Developer Tools)  
**Task List:** Update `/tasks/task-list.md` with batch items
