# Audit Prompt A5: Patterns Coverage Audit

**Version:** 1.0  
**Created:** February 21, 2026  
**Orchestrator:** `/prompts/funky-redesign-orchestrator.md`  
**Report Output:** `/reports/audits/2026-02-21-patterns-coverage-audit.md`  
**Task Output:** `/tasks/patterns-guidelines-gaps.md`

---

## Objective

Verify every pattern component in `/src/app/components/patterns/` has a corresponding guideline in `/guidelines/patterns/`. Identify coverage gaps.

## Pre-Read (Required)

```
/guidelines/overview-patterns.md       — Pattern architecture overview
/guidelines/WRITING_GUIDELINES.md      — Standards for writing guidelines
```

## Procedure

### Step 1: Component Inventory

List ALL files in `/src/app/components/patterns/`:
- Top-level `.tsx` files (41+ files)
- Subdirectory files: `/sections/`, `/account/`, `/shop/`

Record component names and paths.

### Step 2: Guideline Inventory

List ALL files in `/guidelines/patterns/` (currently 18 files):
- AccountPatterns.md, ArchiveCTA.md, ArchiveHeader.md, ArchivePagination.md
- CategoryShowcaseGrid.md, FAQSection.md, FeaturesComparisonTable.md
- Hero.md, HowItWorksSection.md, NewsletterSignup.md
- PostGrid.md, PostMeta.md, PricingTable.md, ProductGrid.md
- ProductTabsSection.md, ResultsCount.md, TestimonialCarousel.md
- ValuePropositionSection.md

### Step 3: Cross-Reference & Gap Analysis

Compare lists. Expected gaps include patterns WITHOUT guidelines:
- BlogSidebar, BrandLogoGrid, BrandStoryBanner, CartEmptyState, CartFilled
- CheckoutFormSection, CollectionRow, ContactFormSection, FlashSaleBanner
- InstagramFeed, PostNavigation, ProductComparison, QuickEntryTilesGrid
- QuickView, RecentlyViewed, RecentlyViewedSection, RelatedPosts
- RelatedProductsSection, ShopFilterSidebar, SocialMediaFeed
- StatsSection, TeamGridSection, TrustBand, ValuesGridSection
- Plus all files in subdirectories

### Step 4: Priority Assessment

Prioritise by usage frequency and importance:
- P0: Patterns used on homepage and shop pages
- P1: Patterns used across multiple templates
- P2: Patterns used on single templates
- P3: Utility/internal patterns

### Step 5: Generate Outputs

Save report and task list per orchestrator format.

## Success Criteria

- 100% of pattern components catalogued
- Coverage percentage calculated
- Priority-ordered task list for missing guidelines
