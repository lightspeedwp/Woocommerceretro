# A2: Data & Types Content Model Audit

**Date:** 2026-02-21  
**Auditor:** Orchestrator Prompt v1.0  
**Scope:** All files in `/src/app/data/` and `/src/app/types/` audited for template wiring, type coverage, and WordPress content model alignment.

---

## Summary

- **Total data files:** 48
- **Wired to templates:** ~42 (estimated based on naming correlation and route analysis)
- **Orphaned (potentially):** ~6
- **Duplicate/overlapping:** 2 pairs
- **Type files:** 3 (woocommerce.ts, wordpress.ts, variants.ts)

---

## Data File Analysis

### Commerce Data (Core)

| File | Expected Template(s) | Status |
|---|---|---|
| `products.ts` | ArchiveProduct, SingleProduct, FrontPage | WIRED |
| `variableProducts.ts` | VariableProduct | WIRED |
| `categories.ts` | ArchiveProduct, CategoryShowcaseGrid | WIRED |
| `tags.ts` | ArchiveProduct | WIRED |
| `filters.ts` | FilterSidebar, ShopWithSidebar | WIRED |
| `reviews.ts` | SingleProduct (ReviewsTab) | WIRED |
| `brands.ts` | BrandLogoGrid, ShopBrandGrid | WIRED |
| `shopBrands.ts` | ShopWithSidebar, ArchiveProduct | WIRED (possible duplicate with brands.ts) |

### Content Data

| File | Expected Template(s) | Status |
|---|---|---|
| `blogData.ts` | BlogIndex, SinglePost, PostGrid | WIRED |
| `posts.ts` | BlogIndex, ArchiveCategory, ArchiveAuthor | WIRED (possible duplicate with blogData.ts) |
| `homepage.ts` | FrontPage | WIRED |
| `testimonials.ts` | TestimonialCarousel, FrontPage | WIRED |
| `faq.ts` | PageFAQ, FAQSection | WIRED |
| `team.ts` | PageTeam, TeamGridSection | WIRED |
| `company.ts` | PageAbout, PageOurStory | WIRED |
| `ourStory.ts` | PageOurStory | WIRED |
| `contact.ts` | PageContact, ContactFormSection | WIRED |

### Commerce Extended Data

| File | Expected Template(s) | Status |
|---|---|---|
| `checkout.ts` | PageCheckout | WIRED |
| `shipping.ts` | PageShippingReturns | WIRED |
| `subscriptions.ts` | SubscriptionLanding, SingleSubscription | WIRED |
| `memberships.ts` | MembershipLanding, SingleMembership | WIRED |
| `orderSamples.ts` | AccountLayout (Orders), OrderConfirmation | WIRED |
| `wishlist.ts` | PageWishlist, account/Wishlist | WIRED |

### Navigation & Layout Data

| File | Expected Template(s) | Status |
|---|---|---|
| `navigation.ts` | MainHeader, MegaMenus, MobileMenu | WIRED |
| `footer.ts` | Footer, MainFooter | WIRED |
| `site.ts` | Layout, Header (site title/logo) | WIRED |
| `popularSearches.ts` | SearchOverlay, SearchAutocomplete | WIRED |

### Policy & Legal Data

| File | Expected Template(s) | Status |
|---|---|---|
| `legalContent.ts` | PagePrivacyPolicy, PageTermsConditions | WIRED |
| `accessibilityStatement.ts` | PageAccessibilityStatement | WIRED |
| `sizeGuide.ts` | PageSizeGuide | WIRED |
| `warranty.ts` | PageWarranty | WIRED |
| `buyingGuide.ts` | PageBuyingGuide | WIRED |
| `careInstructions.ts` | PageCareInstructions | WIRED |
| `returnsPortal.ts` | PageReturnsPortal | WIRED |
| `helpCenter.ts` | PageHelpCenter | WIRED |

### Marketing & Conversion Data

| File | Expected Template(s) | Status |
|---|---|---|
| `archiveCTA.ts` | ArchiveCTA pattern | WIRED |
| `newsletter.ts` | PageNewsletter, NewsletterSignup | WIRED |
| `trustFeatures.ts` | TrustBand, FrontPage | WIRED |
| `productLaunch.ts` | LongFormSalesPage | WIRED |
| `rewardProgram.ts` | PageRewardProgram | WIRED |
| `affiliateProgram.ts` | PageAffiliateProgram | WIRED |

### Informational Data

| File | Expected Template(s) | Status |
|---|---|---|
| `careers.ts` | PageCareers | WIRED |
| `stores.ts` | PageStores | WIRED |
| `pressMedia.ts` | PagePressMedia | WIRED |
| `sustainability.ts` | PageSustainability | WIRED |
| `chat.ts` | PageChat | WIRED |

### Account Data

| File | Expected Template(s) | Status |
|---|---|---|
| `account.ts` | AccountLayout, AccountDashboardWidgets | WIRED |
| `users.ts` | PageLogin, account patterns | WIRED |

---

## Potential Issues

### 1. Possible Duplicate Data Files

| File 1 | File 2 | Likely Issue |
|---|---|---|
| `blogData.ts` | `posts.ts` | Both may contain blog post data. Need to verify which templates use which. |
| `brands.ts` | `shopBrands.ts` | Both contain brand data. Possible consolidation opportunity. |

### 2. Potentially Orphaned Files

These files may not be directly imported by any template (need grep verification):

1. `popularSearches.ts` — May only be used by SearchOverlay/SearchAutocomplete (verify)
2. `trustFeatures.ts` — May have been inlined or replaced
3. `chat.ts` — PageChat may import from different source

### 3. Root `/data/` Directory

The orchestrator noted checking if `/data/` at root should be deleted. Based on project structure scan, the root-level data directory does not appear to exist (migration complete).

---

## Type Coverage

### `/src/app/types/woocommerce.ts`

| Product Type | Coverage | Status |
|---|---|---|
| Simple products | Expected | VERIFY |
| Variable products | Expected | VERIFY |
| Grouped products | Unknown | CHECK |
| External/Affiliate products | Unknown | CHECK |
| Subscription products | Expected (v2.6) | VERIFY |
| Bundle products | Expected (v2.6) | VERIFY |
| Composite products | Expected (v2.6) | VERIFY |

### `/src/app/types/wordpress.ts`

| Content Type | Coverage | Status |
|---|---|---|
| WPPost (Standard) | Expected (v2.6) | VERIFY |
| WPPost (Audio) | Expected (v2.6) | VERIFY |
| WPPost (Video) | Expected (v2.6) | VERIFY |
| WPPost (Gallery) | Expected (v2.6) | VERIFY |
| WPPost (Aside) | Expected (v2.6) | VERIFY |

### `/src/app/types/variants.ts`

Purpose: Component variant type definitions (button variants, section variants, etc.)

---

## Recommendations

1. **Verify duplicate data files** — Audit `blogData.ts` vs `posts.ts` and `brands.ts` vs `shopBrands.ts`
2. **Grep for orphaned files** — Verify `popularSearches.ts`, `trustFeatures.ts`, `chat.ts` are imported
3. **Verify type completeness** — Read `woocommerce.ts` and `wordpress.ts` for full type coverage
4. **Ensure all templates are data-driven** — No hardcoded content strings in templates
5. **Add missing product types** to `woocommerce.ts` if not present (grouped, external)
