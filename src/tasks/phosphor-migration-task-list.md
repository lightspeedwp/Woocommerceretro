---
title: "Task list — Phosphor Icons migration"
created: "2026-03-16"
status: "in-progress"
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
- [ ] **P1.3** Verify all 30+ files importing via phosphor-compat still render correctly

## Phase 2 — Direct import migration (~25 files)

Files that import directly from `lucide-react` — each needs manual icon mapping:

| # | File | Icons used | Status |
|---|------|-----------|--------|
| 1 | `blocks/design/Buttons.tsx` | Loader2→SpinnerGap | [ ] |
| 2 | `blocks/product/ComparisonBar.tsx` | X | [ ] |
| 3 | `blocks/product/VariantSelector.tsx` | Check | [ ] |
| 4 | `pages/Sitemap.tsx` | 15+ icons | [ ] |
| 5 | `patterns/QuickView.tsx` | X, Heart, Star, ShoppingCart, etc. | [ ] |
| 6 | `patterns/HeaderRetroPattern.tsx` | multiple | [ ] |
| 7 | `patterns/FooterRetroPattern.tsx` | Twitter, Instagram, Youtube, etc. | [ ] |
| 8 | `patterns/HeroRetro.tsx` | ArrowRight | [ ] |
| 9 | `patterns/CategoryRowRetro.tsx` | ArrowRight, Shirt, Gamepad2, etc. | [ ] |
| 10 | `patterns/FeaturedProductsRetro.tsx` | Heart | [ ] |
| 11 | `patterns/MegaMenuPanel.tsx` | ChevronDown | [ ] |
| 12 | `patterns/PowerUpSection.tsx` | ArrowRight | [ ] |
| 13 | `patterns/BestSellersBox.tsx` | ArrowRight | [ ] |
| 14 | `parts/Breadcrumbs.tsx` | ChevronRight, Home | [ ] |
| 15 | `parts/MiniCartRetro.tsx` | X, Minus, Plus, ShoppingCart, Trash2 | [ ] |
| 16 | `templates/PageNewsletter.tsx` | CheckCircle2 | [ ] |
| 17 | `templates/blog/ArchiveGallery.tsx` | Camera | [ ] |
| 18 | `templates/blog/ArchiveVideo.tsx` | Eye | [ ] |
| 19 | `templates/PageIconLibrary.tsx` | icons collection + Search, Copy, etc. | [ ] |
| 20 | `templates/PageNotFoundRetro.tsx` | Ghost, ArrowLeft, Map, ArrowRight | [ ] |
| 21 | `templates/PagePressMediaRetro.tsx` | Camera | [ ] |
| 22 | `common/ErrorBoundary.tsx` | AlertTriangle, RefreshCw, Home | [ ] |

## Phase 3 — Cleanup

- [ ] **P3.1** Remove all `from 'lucide-react'` imports from codebase
- [ ] **P3.2** Remove `lucide-react` from dependencies
- [ ] **P3.3** Optionally convert phosphor-compat.ts to a simple barrel re-export
- [ ] **P3.4** Update PageIconLibrary to showcase Phosphor icons with duotone weight
- [ ] **P3.5** Update Guidelines.md to reference `@phosphor-icons/react` instead of `lucide-react`

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
