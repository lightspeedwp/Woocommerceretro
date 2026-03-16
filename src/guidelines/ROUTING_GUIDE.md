# Complete Routing Guide - PlayPocket WooCommerce Prototype

**Last Updated:** March 15, 2026
**Route File:** `/routes.ts`
**Total Routes:** 100+
**Trigger:** `fix routes` (action) | `audit routes` (report only)

---

## Table of Contents

1. [URL Pattern Rules](#url-pattern-rules)
2. [Core Routes](#core-routes)
3. [Shop Routes](#shop-routes)
4. [Account Routes](#account-routes)
5. [Cart & Checkout Routes](#cart--checkout-routes)
6. [Blog Routes](#blog-routes)
7. [About & Company Routes](#about--company-routes)
8. [Promotions Routes](#promotions-routes)
9. [Support & Help Routes](#support--help-routes)
10. [Legal & Compliance Routes](#legal--compliance-routes)
11. [Gaming & Community Routes](#gaming--community-routes)
12. [Subscriptions & Memberships Routes](#subscriptions--memberships-routes)
13. [Dev Tools Routes](#dev-tools-routes)
14. [Error Pages](#error-pages)
15. [Navigation Data Files](#navigation-data-files)
16. [Dynamic Route Validation](#dynamic-route-validation)

---

## URL Pattern Rules

All dynamic routes use `:slug` as the parameter name. No `:id`, `:categorySlug`, or `:tagSlug`.

| Content Type | Pattern | Example |
|-------------|---------|---------|
| Product | `/product/:slug` | `/product/pixel-power-tee` |
| Product Category | `/category/:slug` | `/category/accessories` |
| Product Tag | `/tag/:slug` | `/tag/retro` |
| Blog Post | `/blog/:slug` | `/blog/open-channels-ash-shaw` |
| Blog Category | `/blog/category/:slug` | `/blog/category/development` |
| Blog Tag | `/blog/tag/:slug` | `/blog/tag/wordpress` |
| Blog Author | `/blog/author/:slug` | `/blog/author/alex-morgan` |
| Subscription | `/subscription/:slug` | `/subscription/monthly-box` |
| Membership | `/membership/:slug` | `/membership/premium` |

**Component pattern:**
```tsx
const { slug } = useParams<{ slug: string }>();
const product = getProductBySlug(slug) || getProductById(slug);
```

---

## Core Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | FrontPageRetro | Homepage |
| `/search` | ProductSearchResultsRetro | Global search |
| `/contact` | PageContactRetro | Contact form |
| `/faq` | PageFAQRetro | FAQ page |
| `/newsletter` | PageNewsletter | Newsletter subscription |
| `/sitemap` | Sitemap | Visual route directory |

---

## Shop Routes

### Main Shop Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/shop` | ArchiveProductRetro | Main product archive |
| `/shop/all` | ArchiveProductRetro | All products listing |
| `/shop/all-products` | ArchiveProductRetro | All products (alias) |
| `/shop/collections` | FrontPageRetro | Product collections |
| `/shop/filtered` | ArchiveProductRetro | Shop with filter sidebar |
| `/shop/search` | ProductSearchResultsRetro | Product search results |

### Category & Tag Archives

| Route | Component | Description |
|-------|-----------|-------------|
| `/category/:slug` | ArchiveProductRetro | Category archive (dynamic) |
| `/tag/:slug` | ArchiveProductRetro | Tag archive (dynamic) |

**Available categories:** apparel, accessories, games, posters, collectibles
**Available tags:** retro, gaming, streetwear, limited-edition, pixel-art, vintage, neon, arcade, cozy, unisex, handmade, eco-friendly, gift-idea, new-arrival, best-seller, tabletop, wall-art, nostalgia, premium, bundle-deal

### Single Product Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/product/:slug` | SingleProductRetro | Single product page |
| `/product/:slug/sticky` | SingleProductSticky | Product with sticky buy panel |

**Example slugs:** `pixel-power-tee`, `neon-arcade-hoodie`, `bomber-jacket-alpha`

### Special Shop Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/new-arrivals` | ArchiveProductRetro | New arrivals |
| `/best-sellers` | ArchiveProductRetro | Best selling products |
| `/sale` | ArchiveProductRetro | Sale products |
| `/deals` | ArchiveProductRetro | Current deals |
| `/gift-cards` | PageGiftCardsRetro | Gift cards |
| `/compare` | PageCompareRetro | Product comparison |

---

## Account Routes

### Authentication

| Route | Component | Description |
|-------|-----------|-------------|
| `/account/login` | PageLoginRetro | Login page |
| `/register` | PageRegisterRetro | Registration |
| `/reset-password` | PagePasswordResetRetro | Password reset |
| `/account/reset-password` | PagePasswordResetRetro | Password reset (alias) |

### Account Dashboard (Nested)

Base route: `/account` — Layout: `AccountLayoutRetro`

| Route | Component | Description |
|-------|-----------|-------------|
| `/account` | Redirect | Redirects to `/account/dashboard` |
| `/account/dashboard` | DashboardRetro | Account overview |
| `/account/orders` | OrdersRetro | Order history |
| `/account/addresses` | AddressesRetro | Saved addresses |
| `/account/loyalty` | LoyaltyRetro | Loyalty points & XP |
| `/account/dashboard-widgets` | AccountDashboardWidgets | Enhanced dashboard |

### Other Account Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/wishlist` | PageWishlistRetro | Standalone wishlist |
| `/my-account` | Redirect | Redirects to `/account` |

---

## Cart & Checkout Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/cart` | PageCartRetro | Shopping cart |
| `/checkout` | PageCheckoutRetro | Checkout page |
| `/order-confirmation` | PageOrderConfirmationRetro | Order success |
| `/track-order` | PageTrackOrderRetro | Order tracking |

---

## Blog Routes

### Main Blog

| Route | Component | Description |
|-------|-----------|-------------|
| `/blog` | ArchiveBlogRetro | Blog index |

### Category, Author & Tag Archives

| Route | Component | Description |
|-------|-----------|-------------|
| `/blog/category/:slug` | ArchiveBlogRetro | Blog category archive |
| `/blog/author/:slug` | ArchiveBlogRetro | Author archive |
| `/blog/tag/:slug` | ArchiveBlogRetro | Tag archive |

**Available blog categories:** development, design, podcast, videos, gallery
**Available authors:** alex-morgan, sarah-jenkins, david-chen

### Single Post Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/blog/:slug` | SinglePostRetro | Default post layout |
| `/blog/:slug/sidebar` | SinglePostWithSidebar | Post with sidebar |
| `/blog/:slug/fullwidth` | SinglePostFullWidth | Full-width post |
| `/blog/:slug/standard` | TemplateSingleStandard | Standard format |
| `/blog/:slug/audio` | TemplateSingleAudio | Audio/podcast format |
| `/blog/:slug/video` | TemplateSingleVideo | Video format |
| `/blog/:slug/gallery` | TemplateSingleGallery | Gallery format |
| `/blog/:slug/aside` | TemplateSingleAside | Aside/status format |

**Available post slugs:** `open-channels-ash-shaw`, `lightspeed-dev-workflow`, `office-vibes-gallery`, `quick-update-november`, `getting-started-headless`

### Format Archives

| Route | Component | Description |
|-------|-----------|-------------|
| `/blog/format/audio` | ArchiveAudio | Podcast archive |
| `/blog/format/video` | ArchiveVideo | Video archive |
| `/blog/format/gallery` | ArchiveGallery | Gallery archive |
| `/blog/format/aside` | ArchiveAside | Aside archive |

---

## About & Company Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/about` | PageAboutRetro | About us |
| `/about/our-story` | PageOurStoryRetro | Brand story |
| `/about/team` | PageTeamRetro | Meet the team |
| `/about/sustainability` | PageSustainabilityRetro | Environmental practices |
| `/about/careers` | PageCareersRetro | Careers |
| `/stores` | PageStoresRetro | Store locations |
| `/press` | PagePressMediaRetro | Press & media |

---

## Promotions Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/promotions` | ArchiveProductRetro | Promotions hub |
| `/promotions/flash-sale` | ArchiveProductRetro | Flash sale |
| `/promotions/seasonal` | ArchiveProductRetro | Seasonal sale |
| `/promotions/bundles` | ArchiveProductRetro | Product bundles |
| `/promotions/clearance` | ArchiveProductRetro | Clearance |
| `/promotions/winter-clearance` | ArchiveProductRetro | Winter clearance |
| `/promotions/buy-2-get-1` | ArchiveProductRetro | Buy 2 get 1 |
| `/loyalty` | PageLoyaltyRetro | Loyalty program |

---

## Support & Help Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/help` | PageHelpCenterRetro | Help center |
| `/chat` | PageChat | Live chat |
| `/shipping-returns` | PageShippingReturnsRetro | Shipping & returns |
| `/shipping` | PageShippingReturnsRetro | Shipping (alias) |
| `/returns` | PageReturnsPortalRetro | Returns portal |
| `/refunds` | PageRefundsRetro | Refunds |
| `/size-guide` | PageSizeGuideRetro | Size guide |
| `/buying-guide` | PageBuyingGuideRetro | Buying guide |
| `/care-instructions` | PageCareInstructionsRetro | Care instructions |
| `/warranty` | PageWarrantyRetro | Warranty |
| `/accessibility` | PageAccessibilityStatementRetro | Accessibility statement |
| `/rewards` | PageRewardProgramRetro | Rewards program |
| `/affiliate` | PageAffiliateProgramRetro | Affiliate program |
| `/reviews` | PageReviewsRetro | Customer reviews |

---

## Legal & Compliance Routes

### Primary Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/privacy-policy` | PagePrivacyPolicyRetro | Privacy policy |
| `/terms-and-conditions` | PageTermsConditionsRetro | Terms & conditions |

### Redirects

| Route | Redirects To |
|-------|-------------|
| `/privacy` | `/privacy-policy` |
| `/policies` | `/privacy-policy` |
| `/terms` | `/terms-and-conditions` |
| `/legal/privacy` | `/privacy-policy` |
| `/legal/terms` | `/terms-and-conditions` |
| `/legal/privacy-policy` | `/privacy-policy` |
| `/legal/terms-conditions` | `/terms-and-conditions` |

---

## Gaming & Community Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/achievements` | PageAchievementsRetro | Trophy room |
| `/leaderboard` | PageLeaderboardRetro | Top players |
| `/new-releases` | PageNewReleasesRetro | Upcoming drops |
| `/pre-orders` | PageNewReleasesRetro | Pre-orders (alias) |
| `/bundle-builder` | PageBundleBuilderRetro | Build your own bundle |
| `/lookbook` | PageLookbookRetro | Editorial gallery |
| `/community` | PageCommunityRetro | Community hub |
| `/referral` | PageReferralRetro | Referral program |
| `/events` | PageEventsRetro | Events calendar |

---

## Subscriptions & Memberships Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/subscriptions` | SubscriptionLandingRetro | Subscription plans |
| `/subscription/:id` | SingleSubscription | Single subscription |
| `/memberships` | MembershipLandingRetro | Membership tiers |
| `/membership/:id` | SingleMembership | Single membership |
| `/membership/3d/:id` | MembershipSubscription3DRetro | 3D membership card |

---

## Dev Tools Routes

Nested under `/dev-tools` with `DevToolsLayout`.

| Route | Component | Description |
|-------|-----------|-------------|
| `/dev-tools` | DevToolsIndex | Dev tools hub |
| `/dev-tools/style-guide` | PageStyleGuide | Design system reference |
| `/dev-tools/showcase` | PageShowcase | Component gallery |
| `/dev-tools/forms` | PageFormShowcase | Form elements reference |
| `/dev-tools/icons` | PageIconLibrary | Icon browser |
| `/dev-tools/api` | PageComponentAPI | Component API docs |
| `/dev-tools/live-preview` | PageLivePreview | Live component preview |
| `/dev-tools/performance` | PagePerformance | Web Vitals monitoring |

### Other Dev/Demo Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/template-tester` | FrontPageRetro | Template testing |
| `/campaign/product-launch` | LongFormSalesPage | Sales page demo |
| `/social/:platform` | SocialRedirect | Social redirect |
| `/retro-demo` | RetroDemoIndex | Retro demo hub |
| `/retro-demo/landing-page` | RetroDemoLandingPage | Marketing landing page |

---

## Error Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/error/404` | PageNotFoundRetro | 404 demo |
| `/error/500` | PageNotFoundRetro | 500 demo |
| `/error/503` | PageNotFoundRetro | 503 demo |
| `/error/network` | PageNotFoundRetro | Network error demo |
| `*` (catch-all) | PageNotFoundRetro | 404 fallback |

---

## Navigation Data Files

All navigation menus are driven by centralized data files:

| File | Exports | Used By |
|------|---------|---------|
| `/src/app/data/navigation.ts` | MAIN_MENU, FOOTER_MENU_SHOP, FOOTER_MENU_SUPPORT, FOOTER_MENU_COMPANY | HeaderRetro, mobile nav |
| `/src/app/data/megaMenuData.ts` | shopMenu, dealsMenu, membershipsMenu, communityMenu, aboutMenu | MegaMenu panels |
| `/src/app/data/footer.ts` | footerColumns, footerLegalLinks, checkoutFooterLinks | FooterRetro, CheckoutFooter |

When adding new routes, update ALL relevant data files to keep navigation in sync.

---

## Dynamic Route Validation

### Product Routes

```
/product/:slug          → getProductBySlug(slug) || getProductById(slug)
/category/:slug         → productCategories.find(c => c.slug === slug)
/tag/:slug              → productTags.find(t => t.slug === slug)
```

### Blog Routes

```
/blog/:slug             → getPostBySlug(slug)
/blog/category/:slug    → postCategories.find(c => c.slug === slug)
/blog/author/:slug      → USERS.find(u => u.slug === slug)
/blog/tag/:slug         → tags.find(t => t.slug === slug)
```

### Data Requirements

Every entry in every data file must have:
- `id` — unique identifier (string or number)
- `slug` — URL-safe, lowercase, hyphenated string

---

**Version:** 2.0
**Last Updated:** March 15, 2026
