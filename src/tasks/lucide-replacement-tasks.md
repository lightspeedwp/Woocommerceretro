# Lucide to Phosphor Icons Replacement Task List

**Status:** ✅ **FULLY COMPLETE** (March 10, 2026)

**Context:** The project requires replacing all `lucide-react` icons with `@phosphor-icons/react` to resolve potential ModuleFetchErrors and align with the Funky Redesign aesthetic.
**Goal:** Systematically replace all Lucide imports and components with their Phosphor equivalents across 50 files.

## ✅ Final Cleanup (March 10, 2026)

All source files were already converted. Final sweep removed remaining lucide references from build/config:

- [x] **`package.json`** — Removed `lucide-react` dependency (`"lucide-react": "^0.487.0"`)
- [x] **`vite.config.ts`** — Removed `lucide-react@0.487.0` version alias mapping
- [x] **`/src/styles/blocks/display/badge.css`** — Removed 2 dead `.lucide` CSS class selectors (lines 88, 91)
- [x] **Full codebase scan** — Zero `lucide` references remain in any `.ts`, `.tsx`, `.css`, `.json`, or config file

---

## Batch 1: Order & Single Product Blocks
- [ ] `/src/app/components/blocks/order/AccountCreation.tsx`
- [ ] `/src/app/components/blocks/order/DownloadsSection.tsx`
- [ ] `/src/app/components/blocks/search/SearchAutocomplete.tsx`
- [ ] `/src/app/components/blocks/search/ProductSearch.tsx`
- [ ] `/src/app/components/blocks/single-product/StoreNotices.tsx`

## Batch 2: Theme & Forms
- [ ] `/src/app/components/blocks/theme/Search.tsx`
- [ ] `/src/app/components/blocks/theme/ThemeToggle.tsx`
- [ ] `/src/app/components/blocks/forms/Select.tsx`
- [ ] `/src/app/components/blocks/forms/QuantitySelector.tsx`
- [ ] `/src/app/components/blocks/feedback/PageAlert.tsx`

## Batch 3: Layout & Navigation
- [ ] `/src/app/components/blocks/layout/Sheet.tsx`
- [ ] `/src/app/components/blocks/layout/Sidebar.tsx`
- [ ] `/src/app/components/blocks/navigation/Breadcrumb.tsx`
- [ ] `/src/app/components/navigation/Pagination.tsx`
- [ ] `/src/app/components/blocks/navigation/NavigationMenu.tsx`
- [ ] `/src/app/components/blocks/navigation/Menubar.tsx`

## Batch 4: Overlay & Interactive
- [ ] `/src/app/components/blocks/overlay/DropdownMenu.tsx`
- [ ] `/src/app/components/blocks/overlay/ContextMenu.tsx`
- [ ] `/src/app/components/blocks/overlay/Dialog.tsx`
- [ ] `/src/app/components/blocks/overlay/EnquiryModal.tsx`
- [ ] `/src/app/components/blocks/interactive/Resizable.tsx`
- [ ] `/src/app/components/blocks/interactive/Command.tsx`
- [ ] `/src/app/components/blocks/interactive/Carousel.tsx`

## Batch 5: Advanced Forms & Media
- [ ] `/src/app/components/blocks/forms-advanced/Calendar.tsx`
- [ ] `/src/app/components/blocks/forms-advanced/InputOTP.tsx`
- [ ] `/src/app/components/blocks/media/VideoTestimonial.tsx`

## Batch 6: Patterns 1
- [ ] `/src/app/components/patterns/ArchivePagination.tsx`
- [ ] `/src/app/components/patterns/BlogSidebar.tsx`
- [ ] `/src/app/components/patterns/CartEmptyState.tsx`
- [ ] `/src/app/components/patterns/CartFilled.tsx`
- [ ] `/src/app/components/patterns/CategoryShowcaseGrid.tsx`

## Batch 7: Patterns 2
- [ ] `/src/app/components/patterns/CheckoutFormSection.tsx`
- [ ] `/src/app/components/patterns/CollectionRow.tsx`
- [ ] `/src/app/components/patterns/ContactFormSection.tsx`
- [ ] `/src/app/components/patterns/FeaturesComparisonTable.tsx`
- [ ] `/src/app/components/patterns/FlashSaleBanner.tsx`

## Batch 8: Patterns 3
- [ ] `/src/app/components/patterns/Hero.tsx`
- [ ] `/src/app/components/patterns/InstagramFeed.tsx`
- [ ] `/src/app/components/patterns/NewsletterSignup.tsx`
- [ ] `/src/app/components/patterns/PostMeta.tsx`
- [ ] `/src/app/components/patterns/PostNavigation.tsx`

## Batch 9: Patterns 4
- [ ] `/src/app/components/patterns/PricingTable.tsx`
- [ ] `/src/app/components/patterns/ProductTabsSection.tsx`
- [ ] `/src/app/components/patterns/QuickEntryTilesGrid.tsx`
- [ ] `/src/app/components/patterns/QuickView.tsx`
- [ ] `/src/app/components/patterns/RecentlyViewedSection.tsx`

## Batch 10: Patterns 5 & Pages
- [ ] `/src/app/components/patterns/RelatedPosts.tsx`
- [ ] `/src/app/components/patterns/SocialMediaFeed.tsx`
- [ ] `/src/app/components/patterns/TeamGridSection.tsx`
- [ ] `/src/app/components/pages/NotFound.tsx`