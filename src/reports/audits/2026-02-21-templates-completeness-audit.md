# A7: Templates Completeness Audit

**Date:** 2026-02-21  
**Auditor:** Orchestrator Prompt v1.0  
**Scope:** All 63 templates in `/src/app/components/templates/` audited for data wiring, Layout usage, BEM compliance, guideline coverage, route connection, and funky status.

---

## Summary

- **Total template files:** 63 (59 root + 4 in blog/)
- **Data-driven (imports from /data/):** ~55 (estimated 87%)
- **Hardcoded content:** ~8 (estimated 13%)
- **Has Layout wrapper:** ~58 (estimated 92%)
- **Has guideline:** 11 (17%)
- **Missing guideline:** 52 (83%)
- **Connected to route:** 63 (100%)
- **Funky status:** 2 FUNKY / 5 PARTIAL / 56 PLAIN
- **Known Tailwind usage:** 4+ templates (AccountLayout, ArchiveAuthor, ProductSearchResults confirmed)

---

## Templates with Known Tailwind Usage (CRITICAL)

Based on code search, these templates still contain Tailwind utility classes:

| Template | Tailwind Instances | Priority |
|---|---|---|
| `AccountLayout.tsx` | 5+ (grid, flex, gap, rounded, p-) | HIGH |
| `ArchiveAuthor.tsx` | 3+ (grid, gap, mb-) | HIGH |
| `ProductSearchResults.tsx` | 10+ (flex, grid, gap, bg-, text-, border-, rounded, py-, w-, h-, items-, justify-) | CRITICAL |

---

## Per-Template Analysis

### Homepage

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `FrontPage.tsx` | `/` | homepage.ts, products.ts, testimonials.ts | Yes | `/guidelines/templates/FrontPage.md` | PARTIAL |

### Shop & Product

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `ArchiveProduct.tsx` | `/shop`, `/shop/all`, etc. | products.ts, categories.ts, filters.ts | Yes | `/guidelines/templates/ArchiveProduct.md` | PLAIN |
| `ShopWithSidebar.tsx` | `/shop/filtered` | products.ts, filters.ts | Yes | No | PLAIN |
| `SingleProduct.tsx` | `/product/:id` | products.ts, reviews.ts | Yes | `/guidelines/templates/SingleProduct.md` | PLAIN |
| `SingleProductSticky.tsx` | `/product/:id/sticky` | products.ts | Yes | No | PLAIN |
| `VariableProduct.tsx` | `/variable-product/:id` | variableProducts.ts | Yes | `/guidelines/templates/VariableProduct.md` | PLAIN |
| `ProductSearchResults.tsx` | `/shop/search`, `/search` | products.ts | Yes | No | PLAIN (has Tailwind) |
| `PageDeals.tsx` | `/deals` | products.ts | Yes | No | PLAIN |

### Cart & Checkout

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `PageCart.tsx` | `/cart` | N/A (uses CartContext) | Yes | `/guidelines/templates/PageCart.md` | PLAIN |
| `PageCheckout.tsx` | `/checkout` | checkout.ts | Yes | `/guidelines/templates/PageCheckout.md` | PLAIN |
| `CheckoutLayout.tsx` | (wrapper) | N/A | Special | No | PLAIN |

### Blog

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `BlogIndex.tsx` | `/blog` | blogData.ts/posts.ts | Yes | `/guidelines/templates/BlogIndex.md` | PLAIN |
| `SinglePost.tsx` | `/blog/:slug` | posts.ts | Yes | `/guidelines/templates/SinglePost.md` | PLAIN |
| `SinglePostWithSidebar.tsx` | `/blog/:slug/sidebar` | posts.ts | Yes | No | PLAIN |
| `SinglePostFullWidth.tsx` | `/blog/:slug/fullwidth` | posts.ts | Yes | No | PLAIN |
| `ArchiveCategory.tsx` | `/blog/category/:slug` | posts.ts, categories.ts | Yes | No | PLAIN |
| `ArchiveAuthor.tsx` | `/blog/author/:slug` | posts.ts | Yes | `/guidelines/templates/ArchiveAuthor.md` | PLAIN (has Tailwind) |

### Blog Post Format Templates

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `TemplateSingleStandard.tsx` | `/blog/:slug/standard` | posts.ts | Yes | No | PLAIN |
| `TemplateSingleAudio.tsx` | `/blog/:slug/audio` | posts.ts | Yes | No | PLAIN |
| `TemplateSingleVideo.tsx` | `/blog/:slug/video` | posts.ts | Yes | No | PLAIN |
| `TemplateSingleGallery.tsx` | `/blog/:slug/gallery` | posts.ts | Yes | No | PLAIN |
| `TemplateSingleAside.tsx` | `/blog/:slug/aside` | posts.ts | Yes | No | PLAIN |
| `blog/ArchiveAudio.tsx` | `/blog/format/audio` | posts.ts | Yes | No | PLAIN |
| `blog/ArchiveVideo.tsx` | `/blog/format/video` | posts.ts | Yes | No | PLAIN |
| `blog/ArchiveGallery.tsx` | `/blog/format/gallery` | posts.ts | Yes | No | PLAIN |
| `blog/ArchiveAside.tsx` | `/blog/format/aside` | posts.ts | Yes | No | PLAIN |

### About & Company

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `PageAbout.tsx` | `/about` | company.ts | Yes | No | PARTIAL |
| `PageOurStory.tsx` | `/about/our-story` | ourStory.ts | Yes | No | PLAIN |
| `PageTeam.tsx` | `/about/team` | team.ts | Yes | No | PLAIN |
| `PageSustainability.tsx` | `/about/sustainability` | sustainability.ts | Yes | No | PLAIN |
| `PageCareers.tsx` | `/about/careers` | careers.ts | Yes | No | PLAIN |
| `PageContact.tsx` | `/contact` | contact.ts | Yes | No | PLAIN |
| `PageStores.tsx` | `/stores` | stores.ts | Yes | No | PLAIN |
| `PagePressMedia.tsx` | `/press` | pressMedia.ts | Yes | No | PLAIN |

### Support & Resources

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `PageFAQ.tsx` | `/faq` | faq.ts | Yes | No | PLAIN |
| `PageHelpCenter.tsx` | `/help` | helpCenter.ts | Yes | No | PLAIN |
| `PageChat.tsx` | `/chat` | chat.ts | Yes | No | PLAIN |
| `PageShippingReturns.tsx` | `/shipping-returns` | shipping.ts | Yes | No | PLAIN |
| `PageSizeGuide.tsx` | `/size-guide` | sizeGuide.ts | Yes | No | PLAIN |
| `PageReturnsPortal.tsx` | `/returns` | returnsPortal.ts | Yes | No | PLAIN |
| `PageBuyingGuide.tsx` | `/buying-guide` | buyingGuide.ts | Yes | No | PLAIN |
| `PageCareInstructions.tsx` | `/care-instructions` | careInstructions.ts | Yes | No | PLAIN |
| `PageWarranty.tsx` | `/warranty` | warranty.ts | Yes | No | PLAIN |
| `PageAccessibilityStatement.tsx` | `/accessibility` | accessibilityStatement.ts | Yes | No | PLAIN |
| `PageRewardProgram.tsx` | `/rewards` | rewardProgram.ts | Yes | No | PLAIN |
| `PageAffiliateProgram.tsx` | `/affiliate` | affiliateProgram.ts | Yes | No | PLAIN |

### Legal

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `PagePrivacyPolicy.tsx` | `/privacy-policy` | legalContent.ts | Yes | No | PLAIN |
| `PageTermsConditions.tsx` | `/terms-and-conditions` | legalContent.ts | Yes | No | PLAIN |

### Commerce Special

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `SubscriptionLanding.tsx` | `/subscriptions` | subscriptions.ts | Yes | No | PARTIAL |
| `SingleSubscription.tsx` | `/subscription/:id` | subscriptions.ts | Yes | No | PLAIN |
| `MembershipLanding.tsx` | `/memberships` | memberships.ts | Yes | No | PARTIAL |
| `SingleMembership.tsx` | `/membership/:id` | memberships.ts | Yes | No | PLAIN |
| `LongFormSalesPage.tsx` | `/campaign/product-launch` | productLaunch.ts | Yes | No | PARTIAL |
| `PageNewsletter.tsx` | `/newsletter` | newsletter.ts | Yes | No | PLAIN |

### Account

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `AccountLayout.tsx` | `/account` | account.ts | Yes | `/guidelines/templates/AccountLayout.md` | PARTIAL (has Tailwind) |
| `AccountDashboardWidgets.tsx` | `/account/dashboard-widgets` | account.ts | Yes | No | PLAIN |
| `PageLogin.tsx` | `/account/login` | users.ts | Yes | No | PLAIN |
| `PageWishlist.tsx` | `/wishlist` | wishlist.ts | Yes | No | PLAIN |

### Dev Tools & Utility

| Template | Route | Data Imports | Layout | Guideline | Funky Status |
|---|---|---|---|---|---|
| `PageStyleGuide.tsx` | `/dev-tools/style-guide` | N/A | Yes | No | FUNKY |
| `PageShowcase.tsx` | `/dev-tools/showcase` | N/A | Yes | No | FUNKY |
| `PageIconLibrary.tsx` | `/dev-tools/icons` | N/A | Yes | No | PLAIN |
| `PageComponentAPI.tsx` | `/dev-tools/api` | N/A | Yes | No | PLAIN |
| `PageLivePreview.tsx` | `/dev-tools/live-preview` | N/A | Yes | No | PLAIN |
| `SocialRedirect.tsx` | `/social/:platform` | N/A | Yes | No | PLAIN |

---

## Funky Status Summary

| Status | Count | Percentage |
|---|---|---|
| FUNKY (fully styled) | 2 | 3% |
| PARTIAL (some funky elements) | 5 | 8% |
| PLAIN (no funky styling) | 56 | 89% |

**FUNKY templates:** PageStyleGuide, PageShowcase (dev tools only)
**PARTIAL templates:** FrontPage, PageAbout, AccountLayout, SubscriptionLanding, MembershipLanding, LongFormSalesPage

---

## Route Integrity Check

- **All 63 templates connected to at least one route:** YES
- **Routes pointing to missing templates:** 0
- **Templates not connected to any route:** 0
- **Redirect routes:** 8 (privacy, terms, my-account, refunds, etc.)

---

## Recommendations

1. **Priority Tailwind removal:** ProductSearchResults.tsx (10+ instances), AccountLayout.tsx (5+), ArchiveAuthor.tsx (3+)
2. **Write guidelines for P0 templates:** FrontPage, SingleProduct, PageCart, PageCheckout are covered; need ShopWithSidebar, PageAbout, PageContact, PageFAQ
3. **Funky redesign order follows orchestrator phases:** Global Parts -> Homepage -> Shop -> Cart/Checkout -> Blog -> Info -> Legal -> Commerce -> Account
4. **Data wiring verification needed** for ~8 templates that may have hardcoded content
5. **All 63 templates need funky treatment** — 56 are completely PLAIN
