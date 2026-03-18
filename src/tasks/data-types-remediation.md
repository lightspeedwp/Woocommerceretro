# Data & Types Remediation Task List

**Source:** A2 Data & Types Content Model Audit (2026-02-21)  
**Status:** ✅ COMPLETE  
**Updated:** March 17, 2026 (T2.1-T2.11 all verified)
**Cross-Reference:** `/prompts/funky-redesign-orchestrator.md` Appendix C

---

## P0: Critical

### T2.1 — Audit `blogData.ts` vs `posts.ts`

**Files:**
- `/src/app/data/blogData.ts`
- `/src/app/data/posts.ts`

**Status:** ✅ **COMPLETE** — Not duplicates. Both files are actively used:
- `blogData.ts` → 9 retro blog templates (`BLOG_POSTS` export, JSDoc typedef)
- `posts.ts` → 5 legacy/sidebar/mega menu templates (`posts`, `resolvedPosts`, `getMediaSource`, `getResolvedPostBySlug`)
- Different data structures, different consumers. Both retained.

**Action:** Determine if duplicate. Compare exports and types.  
**Expected Resolution:** `posts.ts` is the canonical file (used by BlogIndex, PostCard). `blogData.ts` may be legacy.  
**Template Impact:** `BlogIndex.tsx` imports from `posts.ts`. If `blogData.ts` is orphaned, delete it.

---

### T2.2 — Audit `brands.ts` vs `shopBrands.ts`

**Files:**
- `/src/app/data/brands.ts`
- `/src/app/data/shopBrands.ts`

**Status:** ✅ **COMPLETE** — Not overlapping:
- `brands.ts` → 1 active consumer (`BrandLogoGrid.tsx` imports `brandLogos`)
- `shopBrands.ts` → 0 active consumers (orphaned — no .tsx file imports it). Referenced only in guidelines/reports.
- **Action:** `shopBrands.ts` can be safely deleted when a cleanup pass runs. Low priority.

**Action:** Determine scope — `brands.ts` may be general brand data, `shopBrands.ts` may be shop-page-specific.  
**Expected Resolution:** Merge if overlapping, or clarify scope with comments.

---

### T2.3 — Verify `woocommerce.ts` type coverage

**Status:** ✅ **COMPLETE** — All 7+ product types covered via `WCProductType` union (`simple|grouped|external|variable|subscription|variable-subscription|composite|bundle`). Base `WCProduct` typedef has 88 properties. Extension data: `WCSubscriptionData`, `WCCompositeData`/`WCCompositeComponent`, `WCBundleData`/`WCBundleItem`. Individual per-type interfaces (T2.9) not needed — WC REST API returns uniform shape with `type` discriminator.

---

## P1: High Priority

### T2.4 — Template→Data wiring verification

**Status:** ✅ **COMPLETE** — Wiring is correct but flows through pattern/block components, not directly in templates. Key findings:
- `FrontPageRetro` → composes `HeroRetro`, `CategoryRowRetro`, `FeaturedProductsRetro`, `BottomGridRetro` (patterns import data internally)
- `homepage.ts` → consumed by `BrandStoryBanner`
- `tags.ts` → 3 consumers (BlogSidebar, TemplateSingleStandard, TagArchive) — NOT orphaned
- `productLaunch.ts` → consumed by `LongFormSalesPage` — NOT orphaned
- `shopBrands.ts` → 0 .tsx consumers — orphaned (confirmed T2.2)
- All other data files have verified consumers

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

**Status:** ✅ **COMPLETE** — `WPPost` has all 5+ format variants via `WPPostFormat` union (10 formats: standard, aside, gallery, link, image, quote, status, video, audio, chat). Format-specific fields in `format_data` object (audio_url, video_url, gallery_images, aside_text, link_url, podcast fields). Full `WPCategory`, `WPTag`, `WPAuthor`, `WPMedia` types present.

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
| T2.6 | `popularSearches.ts` | SearchAutocomplete | ✅ VERIFIED — `SearchAutocomplete.tsx` imports `POPULAR_SEARCHES` |
| T2.7 | `trustFeatures.ts` | TrustBand | ✅ VERIFIED — `TrustBand.tsx` imports `trustFeatures` |
| T2.8 | `chat.ts` | PageChat | ✅ VERIFIED — `PageChat.tsx` imports `chatPopularTopics`, `chatContactOptions` |

---

## P2: Medium Priority

### T2.9 — Add missing product type interfaces

**Status:** ✅ **NOT NEEDED** — Per T2.3, WC REST API uses uniform `WCProduct` shape with `type` discriminator. Individual interfaces would add complexity without value.

**File:** `/src/app/types/woocommerce.ts`  
**Action:** If `GroupedProduct` or `ExternalProduct` interfaces are missing, add them.

### T2.10 — WordPress content model naming

**Status:** ✅ **COMPLETE** — No `BlogPost` or `ShopItem` exports found in data files. Types use WP-aligned naming (`WPPost`, `WCProduct`, `WPCategory`, `WPTag`).

**Action:** Verify all data file exports use WP-aligned naming:
- `Post` not `BlogPost`
- `Product` not `ShopItem`
- `Category` not `Tag` (when it's a category)

### T2.11 — Confirm root `/data/` deletion

**Status:** ✅ **COMPLETE** — `/data/` directory does not exist. All data lives in `/src/app/data/`.

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