---
title: "Task list — Phosphor Icons migration"
created: "2026-03-16"
status: "complete"
phases: 3
---

# Phosphor Icons migration plan

## Overview

Replace `lucide-react` with `@phosphor-icons/react` for full duotone support
and Phosphor-native icon naming. Migration uses the existing `phosphor-compat.ts`
shim as the bridge — update the shim first, then gradually move direct
`lucide-react` imports, and finally remove the Lucide dependency.

## Phase 1 — Install and bridge (current)

- [x] **P1.1** Add `@phosphor-icons/react` to imports (available via ESM)
- [x] **P1.2** Rewrite `phosphor-compat.ts` to import from `@phosphor-icons/react` instead of `lucide-react`
- [x] **P1.3** Verified all 100+ files importing via phosphor-compat render correctly. Cross-referenced every icon name against exports — zero missing icons. `Link` aliasing (PhosphorLink→Link) confirmed working. ✅ **COMPLETE** (March 17)

## Phase 2 — Direct import migration (~25 files)

Files that import directly from `lucide-react` — each needs manual icon mapping:

| # | File | Icons used | Status |
|---|------|-----------|--------|
| 1 | `blocks/design/Buttons.tsx` | Loader2→SpinnerGap | [x] |
| 2 | `blocks/product/ComparisonBar.tsx` | X | [x] |
| 3 | `blocks/product/VariantSelector.tsx` | Check | [x] |
| 4 | `pages/Sitemap.tsx` | 24 icons → direct Phosphor names | [x] |
| 5 | `patterns/QuickView.tsx` | X, Heart, Star, ShoppingCart, etc. | [x] |
| 6 | `patterns/HeaderRetroPattern.tsx` | multiple | [x] |
| 7 | `patterns/FooterRetroPattern.tsx` | Twitter, Instagram, Youtube, etc. | [x] |
| 8 | `patterns/HeroRetro.tsx` | ArrowRight | [x] |
| 9 | `patterns/CategoryRowRetro.tsx` | ArrowRight, Shirt, Gamepad2, etc. | [x] |
| 10 | `patterns/FeaturedProductsRetro.tsx` | Heart | [x] |
| 11 | `patterns/MegaMenuPanel.tsx` | ChevronDown | [x] |
| 12 | `patterns/PowerUpSection.tsx` | ArrowRight | [x] |
| 13 | `patterns/BestSellersBox.tsx` | ArrowRight | [x] |
| 14 | `parts/Breadcrumbs.tsx` | ChevronRight, Home | [x] |
| 15 | `parts/MiniCartRetro.tsx` | X, Minus, Plus, ShoppingCart, Trash2 | [x] |
| 16 | `templates/PageNewsletter.tsx` | CheckCircle2 | [x] |
| 17 | `templates/blog/ArchiveGallery.tsx` | Camera | [x] |
| 18 | `templates/blog/ArchiveVideo.tsx` | Eye | [x] |
| 19 | `templates/PageIconLibrary.tsx` | Rewritten to use @phosphor-icons/react with curated registry + weight selector | [x] |
| 20 | `templates/PageNotFoundRetro.tsx` | Ghost, ArrowLeft, Map, ArrowRight | [x] |
| 21 | `templates/PagePressMediaRetro.tsx` | Camera | [x] |
| 22 | `common/ErrorBoundary.tsx` | AlertTriangle, RefreshCw, Home | [x] |

**Phase 2 Status:** ✅ **COMPLETE** — 22/22 files migrated (March 17, 2026)
**Verification:** `grep -r "from 'lucide-react'" --include="*.tsx"` returns 0 matches.

## Phase 3 — Cleanup

- [x] **P3.1** Remove all `from 'lucide-react'` imports from codebase — ✅ Zero remain in source code (only historical references in reports/prompts)
- [x] **P3.2** Remove `lucide-react` from dependencies — ✅ Already removed (March 10, 2026)
- [x] **P3.3** Consolidate phosphor-compat.ts to clean barrel re-export — ✅ Sorted A–Z, single export block, 3 aliases, 185 lines
- [x] **P3.4** Update PageIconLibrary to showcase Phosphor icons with duotone weight — ✅ Already uses @phosphor-icons/react with weight selector
- [x] **P3.5** Update Guidelines.md to reference `@phosphor-icons/react` instead of `lucide-react` — ✅ Guidelines.md clean; overview-icons.md already updated

**Phase 3 Status:** ✅ **COMPLETE** (March 17, 2026)

## Icon name mapping reference

| Lucide name | Phosphor name |
|---|---|
| `AlertCircle` | `WarningCircle` |
| `AlertTriangle` | `Warning` |
| `ArrowRight` | `ArrowRight` |
| `BarChart3` | `ChartBar` |
| `Bookmark` | `BookmarkSimple` |
| `Camera` | `Camera` |
| `Check` | `Check` |
| `CheckCircle` | `CheckCircle` |
| `CheckCircle2` | `CheckCircle` |
| `ChevronDown` | `CaretDown` |
| `ChevronLeft` | `CaretLeft` |
| `ChevronRight` | `CaretRight` |
| `ChevronUp` | `CaretUp` |
| `Copy` | `Copy` |
| `CreditCard` | `CreditCard` |
| `ExternalLink` | `ArrowSquareOut` |
| `Eye` | `Eye` |
| `Facebook` | `FacebookLogo` |
| `Gamepad2` | `GameController` |
| `Ghost` | `Ghost` |
| `Heart` | `Heart` |
| `Home` | `House` |
| `Image` | `Image` |
| `Instagram` | `InstagramLogo` |
| `Loader2` | `SpinnerGap` |
| `Lock` | `Lock` |
| `Map` | `MapTrifold` |
| `Menu` | `List` |
| `Minus` | `Minus` |
| `Package` | `Package` |
| `Plus` | `Plus` |
| `RefreshCw` | `ArrowsClockwise` |
| `Search` | `MagnifyingGlass` |
| `Shirt` | `TShirt` |
| `ShoppingCart` | `ShoppingCart` |
| `Star` | `Star` |
| `Trash2` | `Trash` |
| `Truck` | `Truck` |
| `Twitter` | `TwitterLogo` |
| `X` | `X` |
| `Youtube` | `YoutubeLogo` |

## Notes

- Phosphor icons support `weight` prop: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"`
- Duotone weight provides two-tone styling that Lucide cannot
- Phosphor uses `size` prop (same as Lucide) for dimensions
- No `strokeWidth` prop — weight covers this