# Data & Types Remediation Task List

**Source:** A2 Data & Types Content Model Audit (2026-02-21)  
**Status:** NOT STARTED  
**Updated:** February 21, 2026 (Data→Template wiring map added)  
**Cross-Reference:** `/prompts/funky-redesign-orchestrator.md` Appendix C

---

## P0: Critical

### T2.1 — Audit `blogData.ts` vs `posts.ts`

**Files:**
- `/src/app/data/blogData.ts`
- `/src/app/data/posts.ts`

**Action:** Determine if duplicate. Compare exports and types.  
**Expected Resolution:** `posts.ts` is the canonical file (used by BlogIndex, PostCard). `blogData.ts` may be legacy.  
**Template Impact:** `BlogIndex.tsx` imports from `posts.ts`. If `blogData.ts` is orphaned, delete it.

---

### T2.2 — Audit `brands.ts` vs `shopBrands.ts`

**Files:**
- `/src/app/data/brands.ts`
- `/src/app/data/shopBrands.ts`

**Action:** Determine scope — `brands.ts` may be general brand data, `shopBrands.ts` may be shop-page-specific.  
**Expected Resolution:** Merge if overlapping, or clarify scope with comments.

---

### T2.3 — Verify `woocommerce.ts` type coverage

**File:** `/src/app/types/woocommerce.ts`  
**Required Types:** All 7 WooCommerce product types must have interfaces:

| Product Type | Interface | Status |
|-------------|-----------|--------|
| Simple | `SimpleProduct` | CHECK |
| Variable | `VariableProduct` | CHECK |
| Grouped | `GroupedProduct` | CHECK |
| External/Affiliate | `ExternalProduct` | CHECK |
| Subscription | `SubscriptionProduct` | CHECK |
| Bundle | `BundleProduct` | CHECK |
| Composite | `CompositeProduct` | CHECK |

**Funky Impact:** Each product type template needs proper typing. `SingleProduct.tsx`, `VariableProduct.tsx`, `SingleSubscription.tsx`, etc.

---

## P1: High Priority

### T2.4 — Template→Data wiring verification

**Action:** Grep all 63 templates to confirm each imports from `/src/app/data/` (no hardcoded strings).

**Data→Template Wiring Map (expected):**

| Data File | Template(s) Using It | Status |
|-----------|---------------------|--------|
| `homepage.ts` | `FrontPage.tsx` | VERIFY |
| `products.ts` | `FrontPage`, `ArchiveProduct`, `SingleProduct`, `PageCart`, `ShopWithSidebar`, `VariableProduct`, `ProductSearchResults`, `PageDeals`, `PageWishlist` | VERIFY |
| `posts.ts` | `BlogIndex`, `SinglePost`, `SinglePostFullWidth`, `SinglePostWithSidebar`, `TemplateSingle*`, `ArchiveAuthor`, `ArchiveCategory` | VERIFY |
| `categories.ts` | `BlogIndex`, `ArchiveCategory` | VERIFY |
| `tags.ts` | TBD — may be orphaned | VERIFY |
| `reviews.ts` | `SingleProduct`, `VariableProduct` | VERIFY |
| `navigation.ts` | `MainHeader`, `MobileMenu` | VERIFY |
| `footer.ts` | `Footer`, `MainFooter` | VERIFY |
| `company.ts` | `PageAbout` | VERIFY |
| `team.ts` | `PageAbout`, `PageTeam` | VERIFY |
| `testimonials.ts` | `PageAbout` | VERIFY |
| `faq.ts` | `PageFAQ`, `PageCart` | VERIFY |
| `contact.ts` | `PageContact` | VERIFY |
| `checkout.ts` | `PageCheckout` | VERIFY |
| `account.ts` | `AccountLayout`, `AccountDashboardWidgets` | VERIFY |
| `archiveCTA.ts` | `ArchiveProduct`, `BlogIndex` | VERIFY |
| `filters.ts` | `ArchiveProduct`, `ShopWithSidebar` | VERIFY |
| `careers.ts` | `PageCareers` | VERIFY |
| `stores.ts` | `PageStores` | VERIFY |
| `subscriptions.ts` | `SubscriptionLanding`, `SingleSubscription` | VERIFY |
| `memberships.ts` | `MembershipLanding`, `SingleMembership` | VERIFY |
| `newsletter.ts` | `PageNewsletter`, `NewsletterSignup` | VERIFY |
| `legalContent.ts` | `PagePrivacyPolicy`, `PageTermsConditions` | VERIFY |
| `accessibilityStatement.ts` | `PageAccessibilityStatement` | VERIFY |
| `shipping.ts` | `PageShippingReturns` | VERIFY |
| `sizeGuide.ts` | `PageSizeGuide` | VERIFY |
| `warranty.ts` | `PageWarranty` | VERIFY |
| `careInstructions.ts` | `PageCareInstructions` | VERIFY |
| `returnsPortal.ts` | `PageReturnsPortal` | VERIFY |
| `buyingGuide.ts` | `PageBuyingGuide` | VERIFY |
| `helpCenter.ts` | `PageHelpCenter` | VERIFY |
| `pressMedia.ts` | `PagePressMedia` | VERIFY |
| `sustainability.ts` | `PageSustainability` | VERIFY |
| `rewardProgram.ts` | `PageRewardProgram` | VERIFY |
| `affiliateProgram.ts` | `PageAffiliateProgram` | VERIFY |
| `chat.ts` | `PageChat` | VERIFY |
| `wishlist.ts` | `PageWishlist` | VERIFY |
| `orderSamples.ts` | Account order pages | VERIFY |
| `site.ts` | `SiteLogo`, `SiteTitle`, `SiteTagline` | VERIFY |
| `brands.ts` | `BrandLogoGrid` | VERIFY |
| `shopBrands.ts` | `ShopBrandGrid` | VERIFY |
| `variableProducts.ts` | `VariableProduct` | VERIFY |
| `popularSearches.ts` | `SearchOverlay`, `SearchAutocomplete` | VERIFY |
| `trustFeatures.ts` | `TrustBand` | VERIFY |
| `productLaunch.ts` | TBD — may be orphaned | VERIFY |
| `users.ts` | Account pages | VERIFY |
| `blogData.ts` | TBD — may be duplicate of posts.ts | VERIFY |

---

### T2.5 — Verify `wordpress.ts` WPPost type

**File:** `/src/app/types/wordpress.ts`  
**Required:** `WPPost` type with all 5 format variants:

```typescript
interface WPPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  author: WPAuthor;
  categories: WPCategory[];
  tags: WPTag[];
  format: 'standard' | 'audio' | 'video' | 'gallery' | 'aside';
  // Format-specific metadata
  audioUrl?: string;      // audio format
  videoUrl?: string;      // video format
  galleryImages?: string[]; // gallery format
  // ...
}
```

---

### T2.6–T2.8 — Verify specific data file usage

| Task | Data File | Expected Consumer | Action |
|------|-----------|-------------------|--------|
| T2.6 | `popularSearches.ts` | SearchOverlay, SearchAutocomplete | VERIFY import exists |
| T2.7 | `trustFeatures.ts` | TrustBand pattern | VERIFY import exists |
| T2.8 | `chat.ts` | PageChat template | VERIFY import exists |

---

## P2: Medium Priority

### T2.9 — Add missing product type interfaces

**File:** `/src/app/types/woocommerce.ts`  
**Action:** If `GroupedProduct` or `ExternalProduct` interfaces are missing, add them.

### T2.10 — WordPress content model naming

**Action:** Verify all data file exports use WP-aligned naming:
- `Post` not `BlogPost`
- `Product` not `ShopItem`
- `Category` not `Tag` (when it's a category)

### T2.11 — Confirm root `/data/` deletion

**Action:** Verify root-level `/data/` directory is fully deleted (migration to `/src/app/data/` complete).

---

## Funky-Specific Data Needs

The funky redesign may require additional data entries:

| Data Need | File | Description |
|-----------|------|-------------|
| Flash sale content | `homepage.ts` or new `sales.ts` | Countdown end time, sale headline, CTA |
| Page colour identities | `site.ts` or new `pageThemes.ts` | Per-page gradient configs |
| Social proof stats | `company.ts` | Large numbers for animated stat sections |
| Testimonial quotes | `testimonials.ts` | Ensure enough entries for carousel |
