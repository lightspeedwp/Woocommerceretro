# Patterns Guidelines Gaps Task List

**Source:** A5 Patterns Coverage Audit (2026-02-21)  
**Status:** NOT STARTED  
**Updated:** February 21, 2026 (Per-component redesign blueprint added)  
**Coverage:** 37% (18/49 components have guidelines)  
**Cross-Reference:** `/prompts/funky-redesign-orchestrator.md` Appendix C

---

## P0: Critical (Homepage/Shop flow)

### T5.1 — `FlashSaleBanner.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/FlashSaleBanner.tsx`  
**Used By:** `PageDeals.tsx`, `FrontPage.tsx` (optional), `ArchiveProduct.tsx` (optional)  
**Guideline:** CREATE → `/guidelines/patterns/FlashSaleBanner.md`

**Current Composition:**
```
FlashSaleBanner
├── Countdown timer (days/hours/minutes/seconds)
├── Sale headline
├── Sale description
├── CTA button
└── Background treatment
```

**Funky Spec:**
- Sale gradient background (pink→orange→yellow — `--wp--preset--gradient--sale`)
- Neon countdown digits with glow separator colons
- Glass CTA button
- Floating orbs (1-2, small, animated)
- Spring animation on countdown tick
- BEM: `.wc-flash-sale__*`
- CSS: CREATE `/src/styles/sections/flash-sale.css`

---

### T5.2 — `QuickView.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/QuickView.tsx`  
**Used By:** Triggered from ProductCard hover/click  
**Guideline:** CREATE → `/guidelines/patterns/QuickView.md`

**Current Composition:**
```
QuickView (modal/dialog)
├── Product image (large)
├── Product title
├── Price
├── Short description
├── Size/variant selector (if variable)
├── Quantity selector
├── "Add to Cart" button
└── "View Full Details" link
```

**Funky Spec:**
- Glass modal panel with `backdrop-filter: blur(16px)`
- Subtle glow frame on product image
- Neon variant selector swatches
- Glow "Add to Cart" button
- Spring animation on modal open
- BEM: `.wc-quick-view__*`
- CSS: CREATE `/src/styles/blocks/overlay/quick-view.css`

---

### T5.3 — `RelatedProductsSection.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/RelatedProductsSection.tsx`  
**Used By:** `SingleProduct.tsx`, `VariableProduct.tsx`  
**Guideline:** CREATE → `/guidelines/patterns/RelatedProductsSection.md`

**Current Composition:**
```
RelatedProductsSection
├── Section heading ("You May Also Like" / "Related Products")
├── Product grid (4 columns desktop)
│   └── ProductCard × 4
└── Optional "View All" link
```

**Funky Spec:**
- Gradient section heading text
- Glow product cards (delegates to ProductCard funky)
- Subtle gradient divider above section
- Alternating section background
- BEM: `.wc-related-products__*`
- CSS: included in single-product section CSS

---

### T5.4 — `ShopFilterSidebar.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/ShopFilterSidebar.tsx`  
**Used By:** `ShopWithSidebar.tsx`, possibly `ArchiveProduct.tsx`  
**Guideline:** CREATE → `/guidelines/patterns/ShopFilterSidebar.md`

**Funky Spec:**
- Glass sidebar panel
- Neon checkboxes and radio buttons for filter options
- Glow range slider for price
- Neon active filter count badges
- Glass accordion sections
- BEM: `.wc-shop-filter__*`

---

### T5.5 — `TrustBand.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/TrustBand.tsx`  
**Used By:** `PageCheckout.tsx`, `PageCart.tsx`, `FrontPage.tsx` (optional)  
**Guideline:** CREATE → `/guidelines/patterns/TrustBand.md`

**Current Composition:**
```
TrustBand
├── Trust badges grid (3-4 items)
│   └── Badge item:
│       ├── Icon (Lucide)
│       ├── Title ("Free Shipping", "Secure Checkout")
│       └── Description (optional)
```

**Funky Spec:**
- Glass badge cards
- Subtle glow on trust icons (neon cyan)
- Gradient divider above/below
- Icon gradient circles variant
- BEM: `.wc-trust-band__*`

---

### T5.6 — `StatsSection.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/StatsSection.tsx`  
**Used By:** `PageAbout.tsx`, `PageSustainability.tsx`  
**Guideline:** CREATE → `/guidelines/patterns/StatsSection.md`

**Current Composition:**
```
StatsSection
├── Section heading
├── Stats grid (3-4 items)
│   └── Stat item:
│       ├── Number (large, prominent)
│       ├── Label
│       └── Optional icon
```

**Funky Spec:**
- Gradient text on stat numbers (pink→cyan for large numbers)
- Glass stat cards
- Spring animation on number reveal (count-up animation with bounce)
- Subtle glow on hover
- BEM: `.wp-stats-section__*`
- CSS: included in about section CSS

---

## P1: High (Content/Blog)

### T5.7 — `BlogSidebar.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/BlogSidebar.tsx`  
**Used By:** `SinglePostWithSidebar.tsx`  
**Guideline:** CREATE → `/guidelines/patterns/BlogSidebar.md`

**Funky Spec:**
- Glass sidebar panel
- Neon active category highlight
- Glow recent post cards
- Gradient dividers between widget sections
- BEM: `.wp-blog-sidebar__*`

---

### T5.8 — `PostNavigation.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/PostNavigation.tsx`  
**Used By:** `SinglePost.tsx`, post format templates  
**Guideline:** CREATE → `/guidelines/patterns/PostNavigation.md`

**Funky Spec:**
- Glow prev/next cards on hover
- Gradient arrow indicators
- Glass card background
- BEM: `.wp-post-navigation__*`

---

### T5.9 — `RelatedPosts.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/RelatedPosts.tsx`  
**Used By:** `SinglePost.tsx`, post format templates  
**Guideline:** CREATE → `/guidelines/patterns/RelatedPosts.md`

**Funky Spec:**
- Glow post cards (delegates to PostCard funky)
- Gradient section heading
- BEM: `.wp-related-posts__*`

---

### T5.10 — `BrandStoryBanner.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/BrandStoryBanner.tsx`  
**Used By:** `FrontPage.tsx`  
**Guideline:** CREATE → `/guidelines/patterns/BrandStoryBanner.md`

**Current Composition:**
```
BrandStoryBanner
├── Background image/treatment
├── Content container:
│   ├── Heading
│   ├── Story text
│   └── CTA button ("Our Story" / "Learn More")
```

**Funky Spec:**
- Commerce gradient background (`--wp--preset--gradient--commerce`)
- Glass content panel overlay
- Floating orbs (2x, cyan + pink, subtle)
- Gradient text on heading
- Glow CTA button
- BEM: `.wp-brand-story__*`
- CSS: included in front-page section CSS

---

### T5.11 — `CollectionRow.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/CollectionRow.tsx`  
**Used By:** `FrontPage.tsx` (Trending Products, Best Sellers)  
**Guideline:** CREATE → `/guidelines/patterns/CollectionRow.md`

**Current Composition:**
```
CollectionRow
├── Section heading (title)
├── Section description
├── "View All" link
├── Product grid or carousel:
│   └── ProductCard × N
└── Background variant prop (white/gray)
```

**Funky Spec:**
- Gradient section heading text
- Glow product cards (from ProductCard)
- Subtle gradient divider above
- Alternating section backgrounds
- Optional floating orb behind grid
- BEM: `.wc-collection-row__*`

---

### T5.12 — `QuickEntryTilesGrid.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/QuickEntryTilesGrid.tsx`  
**Used By:** `FrontPage.tsx` (Features Band)  
**Guideline:** CREATE → `/guidelines/patterns/QuickEntryTilesGrid.md`

**Current Composition:**
```
QuickEntryTilesGrid
├── Grid container (responsive: 2/3/4 columns)
│   └── Tile item × N:
│       ├── Icon
│       ├── Title
│       └── Description (optional)
```

**Funky Spec:**
- Glow card borders on hover
- Icon gradient circles (icon inside gradient-bordered circle)
- Spring hover lift (`translateY(-4px)`)
- Glass card inner panels
- BEM: `.wp-entry-tiles__*`

---

### T5.13 — `CategoryShowcaseGrid.tsx` Guideline + Funky Spec

**File:** `/src/app/components/patterns/CategoryShowcaseGrid.tsx`  
**Used By:** `FrontPage.tsx`  
**Guideline:** CREATE → `/guidelines/patterns/CategoryShowcaseGrid.md`

**Funky Spec:**
- Glow card borders on hover
- Gradient overlay on category images
- Neon category name text on hover
- Spring hover lift
- BEM: `.wc-category-showcase__*`

---

## P2: Medium (Account/Shop sub-patterns)

### T5.14 — Expand Account Patterns Coverage

**Scope:** 8 components in `/src/app/components/patterns/account/`

| Component | Guideline | Funky Spec |
|-----------|-----------|------------|
| `AccountDashboardSection.tsx` | CREATE | Glass section wrapper, gradient section accent |
| `AccountDetails.tsx` | CREATE | Glass form, neon focus inputs |
| `AccountSidebarNav.tsx` | CREATE | Glass nav panel, neon active item |
| `Addresses.tsx` | CREATE | Glass address cards, glow edit button |
| `Dashboard.tsx` | CREATE | Glass metric cards, gradient highlights |
| `OrderView.tsx` | CREATE | Glass order detail, neon status indicators |
| `Orders.tsx` | CREATE | Glass order list, glow hover on rows |
| `Wishlist.tsx` | CREATE | Glow product cards, neon heart icon |

All under BEM prefix `.wc-account__*`

---

### T5.15 — Write guidelines for 9 shop/ sub-patterns

| Component | Guideline | Funky Spec |
|-----------|-----------|------------|
| `shop/CategoryTilesGrid.tsx` | CREATE | Glow tiles, gradient overlay |
| `shop/ContactFollowSection.tsx` | CREATE | Glass cards, neon social glow |
| `shop/ServiceFeaturesSection.tsx` | CREATE | Glass cards, icon gradient circles |
| `shop/ShopBrandGrid.tsx` | CREATE | Glass brand cards, glow hover |
| `shop/ShopCategorySlider.tsx` | CREATE | Glow active, neon arrows |
| `shop/ShopHero.tsx` | CREATE | Blue→Cyan gradient, orbs, glass badge |
| `shop/ShopNewsletter.tsx` | CREATE | Glass input, neon focus |
| `shop/ShopSocialSection.tsx` | CREATE | Glow social cards |
| `shop/SupportStrip.tsx` | CREATE | Glass strip, subtle glow icons |

All under BEM prefix `.wc-shop__*`

---

### T5.16 — Section Pattern Wrappers

| Component | Guideline | Funky Spec |
|-----------|-----------|------------|
| `sections/HeroSection.tsx` | EXISTS (patterns/Hero.md) — UPDATE | Orbs, gradient overlay, glass badge |
| `sections/ContentSection.tsx` | CREATE | Base wrapper — funky alternating backgrounds |
| `sections/AccentSection.tsx` | CREATE | Gradient accent background, glass overlay |
| `sections/DarkSection.tsx` | CREATE | Commerce gradient, orbs, glass content |
| `sections/MutedSection.tsx` | CREATE | Subtle accent-soft gradient tint |
| `sections/BorderedSection.tsx` | CREATE | Gradient glow border top/bottom |
| `sections/CompactSection.tsx` | CREATE | Compact padding, gradient divider |
| `sections/FullWidthSection.tsx` | CREATE | Full-bleed gradient, glass content container |

---

## Structural

- [ ] **T5.17** Move `components/BrandLogoGrid.md` to `patterns/BrandLogoGrid.md`
- [ ] **T5.18** Move `components/CollectionRow.md` to `patterns/CollectionRow.md`
- [ ] **T5.19** Move `components/ContactFormSection.md` to `patterns/ContactFormSection.md`
- [ ] **T5.20** Merge `components/Hero.md` into `patterns/Hero.md`, delete duplicate
- [ ] **T5.21** Investigate `RecentlyViewed.tsx` vs `RecentlyViewedSection.tsx` — merge if duplicate

---

## Remaining Patterns Without Guidelines

| Pattern | Phase | Funky Summary |
|---------|-------|---------------|
| `BrandLogoGrid.tsx` | 3 | Glass cards, subtle glow logos |
| `CheckoutFormSection.tsx` | 5 | Glass form container |
| `FeaturesComparisonTable.tsx` | 9 | Glass table, neon checkmarks |
| `HowItWorksSection.tsx` | 7 | Glow step cards, gradient numbers |
| `InstagramFeed.tsx` | 6 | Glow image grid, neon overlay |
| `NewsletterSignup.tsx` | 3 | Glass input, neon focus, glow CTA |
| `PricingTable.tsx` | 9 | Glow popular plan, glass cards |
| `ProductComparison.tsx` | 9 | Glass comparison, glow winner |
| `ProductTabsSection.tsx` | 4 | Gradient tab underlines |
| `RecentlyViewed.tsx` | 4 | Glow product cards |
| `RecentlyViewedSection.tsx` | 4 | May be duplicate of above |
| `ResultsCount.tsx` | 4 | Neon count highlight |
| `SocialMediaFeed.tsx` | 7 | Glow social cards |
| `TeamGridSection.tsx` | 7 | Glow team cards, gradient roles |
| `TestimonialCarousel.tsx` | 7 | Glass cards, neon quotes |
| `ValuePropositionSection.tsx` | 7 | Commerce gradient, glass content |
| `ValuesGridSection.tsx` | 7 | Glow cards, icon gradient circles |
