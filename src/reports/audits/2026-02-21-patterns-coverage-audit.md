# A5: Patterns Coverage Audit

**Date:** 2026-02-21  
**Auditor:** Orchestrator Prompt v1.0  
**Scope:** Cross-reference pattern components in `/src/app/components/patterns/` with guidelines in `/guidelines/patterns/`.

---

## Summary

- **Total pattern component files:** 49 (41 root + 8 account/ + 9 shop/ + 8 sections/ - index files)
- **Total pattern guideline files:** 18
- **Coverage:** 37%
- **Patterns with matching guidelines:** 18
- **Patterns WITHOUT guidelines:** 31
- **Dead guidelines (no matching component):** 0

---

## Coverage Matrix

### Root Patterns (41 files)

| Component | Has Guideline? | Guideline Path | Status |
|---|---|---|---|
| `ArchiveCTA.tsx` | Yes | `patterns/ArchiveCTA.md` | COVERED |
| `ArchiveHeader.tsx` | Yes | `patterns/ArchiveHeader.md` | COVERED |
| `ArchivePagination.tsx` | Yes | `patterns/ArchivePagination.md` | COVERED |
| `BlogSidebar.tsx` | No | — | MISSING |
| `BrandLogoGrid.tsx` | No | (components/BrandLogoGrid.md exists) | MISPLACED |
| `BrandStoryBanner.tsx` | No | — | MISSING |
| `CartEmptyState.tsx` | No | (blocks/woocommerce/CartEmptyState.md) | COVERED (wrong dir) |
| `CartFilled.tsx` | No | (blocks/woocommerce/CartFilled.md) | COVERED (wrong dir) |
| `CategoryShowcaseGrid.tsx` | Yes | `patterns/CategoryShowcaseGrid.md` | COVERED |
| `CheckoutFormSection.tsx` | No | (blocks/woocommerce/CheckoutFormSection.md) | COVERED (wrong dir) |
| `CollectionRow.tsx` | No | (components/CollectionRow.md exists) | MISPLACED |
| `ContactFormSection.tsx` | No | (components/ContactFormSection.md exists) | MISPLACED |
| `FAQSection.tsx` | Yes | `patterns/FAQSection.md` | COVERED |
| `FeaturesComparisonTable.tsx` | Yes | `patterns/FeaturesComparisonTable.md` | COVERED |
| `FlashSaleBanner.tsx` | No | — | MISSING |
| `Hero.tsx` | Yes | `patterns/Hero.md` | COVERED |
| `HowItWorksSection.tsx` | Yes | `patterns/HowItWorksSection.md` | COVERED |
| `InstagramFeed.tsx` | No | — | MISSING |
| `NewsletterSignup.tsx` | Yes | `patterns/NewsletterSignup.md` | COVERED |
| `PostGrid.tsx` | Yes | `patterns/PostGrid.md` | COVERED |
| `PostMeta.tsx` | Yes | `patterns/PostMeta.md` | COVERED |
| `PostNavigation.tsx` | No | — | MISSING |
| `PricingTable.tsx` | Yes | `patterns/PricingTable.md` | COVERED |
| `ProductComparison.tsx` | No | — | MISSING |
| `ProductGrid.tsx` | Yes | `patterns/ProductGrid.md` | COVERED |
| `ProductTabsSection.tsx` | Yes | `patterns/ProductTabsSection.md` | COVERED |
| `QuickEntryTilesGrid.tsx` | No | — | MISSING |
| `QuickView.tsx` | No | — | MISSING |
| `RecentlyViewed.tsx` | No | — | MISSING |
| `RecentlyViewedSection.tsx` | No | — | MISSING (duplicate of above?) |
| `RelatedPosts.tsx` | No | — | MISSING |
| `RelatedProductsSection.tsx` | No | — | MISSING |
| `ResultsCount.tsx` | Yes | `patterns/ResultsCount.md` | COVERED |
| `ShopFilterSidebar.tsx` | No | — | MISSING |
| `SocialMediaFeed.tsx` | No | — | MISSING |
| `StatsSection.tsx` | No | — | MISSING |
| `TeamGridSection.tsx` | No | — | MISSING |
| `TestimonialCarousel.tsx` | Yes | `patterns/TestimonialCarousel.md` | COVERED |
| `TrustBand.tsx` | No | — | MISSING |
| `ValuePropositionSection.tsx` | Yes | `patterns/ValuePropositionSection.md` | COVERED |
| `ValuesGridSection.tsx` | No | — | MISSING |

### `/patterns/account/` (8 files)

| Component | Has Guideline? | Status |
|---|---|---|
| `AccountDashboardSection.tsx` | Partial | `AccountPatterns.md` covers broadly |
| `AccountDetails.tsx` | Partial | `AccountPatterns.md` covers broadly |
| `AccountSidebarNav.tsx` | No | MISSING |
| `Addresses.tsx` | No | MISSING |
| `Dashboard.tsx` | Partial | `AccountPatterns.md` covers broadly |
| `OrderView.tsx` | No | MISSING |
| `Orders.tsx` | No | MISSING |
| `Wishlist.tsx` | No | MISSING |

### `/patterns/shop/` (9 files)

| Component | Has Guideline? | Status |
|---|---|---|
| `CategoryTilesGrid.tsx` | No | MISSING |
| `ContactFollowSection.tsx` | No | MISSING |
| `ServiceFeaturesSection.tsx` | No | MISSING |
| `ShopBrandGrid.tsx` | No | MISSING |
| `ShopCategorySlider.tsx` | No | MISSING |
| `ShopHero.tsx` | No | MISSING |
| `ShopNewsletter.tsx` | No | MISSING |
| `ShopSocialSection.tsx` | No | MISSING |
| `SupportStrip.tsx` | No | MISSING |

### `/patterns/sections/` (8 files)

| Component | Has Guideline? | Status |
|---|---|---|
| `AccentSection.tsx` | No | MISSING (use section-styles.md) |
| `BorderedSection.tsx` | No | MISSING |
| `CompactSection.tsx` | No | MISSING |
| `ContentSection.tsx` | No | MISSING |
| `DarkSection.tsx` | No | MISSING |
| `FullWidthSection.tsx` | No | MISSING |
| `HeroSection.tsx` | No | MISSING |
| `MutedSection.tsx` | No | MISSING |

---

## Potential Duplicates

| Component 1 | Component 2 | Action |
|---|---|---|
| `RecentlyViewed.tsx` | `RecentlyViewedSection.tsx` | Investigate, likely merge |
| `ShopFilterSidebar.tsx` | `blocks/archive/FilterSidebar.tsx` | Investigate overlap |
| `CartEmptyState.tsx` | `CartFilled.tsx` | Both are patterns, but guidelines in blocks/woocommerce/ |

---

## Misplaced Guidelines

These guidelines exist in `/guidelines/components/` but should be in `/guidelines/patterns/`:

| Current Location | Component Location | Recommended Move |
|---|---|---|
| `components/BrandLogoGrid.md` | `patterns/BrandLogoGrid.tsx` | Move to `patterns/BrandLogoGrid.md` |
| `components/CollectionRow.md` | `patterns/CollectionRow.tsx` | Move to `patterns/CollectionRow.md` |
| `components/ContactFormSection.md` | `patterns/ContactFormSection.tsx` | Move to `patterns/ContactFormSection.md` |
| `components/Hero.md` | `patterns/Hero.tsx` | Merge with `patterns/Hero.md`, delete |

---

## Missing Guidelines — Priority Order

### P0: Critical (Homepage/Shop flow)

1. `FlashSaleBanner.tsx` — Sale conversion element
2. `QuickView.tsx` — Product quick view modal
3. `RelatedProductsSection.tsx` — Cross-sell pattern
4. `ShopFilterSidebar.tsx` — Shop filtering
5. `TrustBand.tsx` — Trust/conversion element
6. `StatsSection.tsx` — Used on multiple pages

### P1: High (Content/Blog)

7. `BlogSidebar.tsx` — Blog layout
8. `PostNavigation.tsx` — Post navigation
9. `RelatedPosts.tsx` — Blog cross-linking
10. `BrandStoryBanner.tsx` — Brand storytelling

### P2: Medium (Account/Shop patterns)

11-18. All `account/` components (individual guidelines)
19-27. All `shop/` components

### P3: Low (Section wrappers)

28-35. All `sections/` components (these are thin wrappers, may just need section-styles.md reference)

---

## Recommendations

1. **Move misplaced guidelines** to `/guidelines/patterns/`
2. **Create P0 guidelines** for critical commerce patterns
3. **Investigate duplicates** (RecentlyViewed vs RecentlyViewedSection)
4. **Section wrappers** may not need individual guidelines — document in section-styles.md instead
5. **Account patterns** can share a single expanded AccountPatterns.md
