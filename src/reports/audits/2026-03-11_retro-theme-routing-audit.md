# Retro Theme Routing Audit

**Date:** 2026-03-11
**Type:** Architecture / Routing
**Description:** Audit of parallel Retro routes and templates to consolidate them into primary standard paths.

## 1. Findings: Redundant Routes
The `routes.ts` file currently defines a significant number of parallel `/retro` routes mapping to `*Retro` components alongside the standard routes.
*   `/shop/retro` vs `/shop`
*   `/shop/category/:categorySlug/retro` vs `/shop/category/:categorySlug`
*   `/shop/tag/:tagSlug/retro` vs `/shop/tag/:tagSlug`
*   `/search/retro` vs `/search`
*   `/product/:id/retro` vs `/product/:id`
*   `/deals/retro` vs `/deals`
*   `/new-arrivals/retro` vs `/new-arrivals`
*   `/best-sellers/retro` vs `/best-sellers`
*   `/sale/retro` vs `/sale`
*   `/gift-cards/retro` vs `/gift-cards`
*   `/compare/retro` vs `/compare`
*   `/account/login/retro` vs `/account/login`
*   `/wishlist/retro` vs `/wishlist`
*   `/cart/retro` vs `/cart`
*   `/checkout/retro` vs `/checkout`
*   `/order-confirmation/retro` vs `/order-confirmation`
*   `/track-order/retro` vs `/track-order`
*   `/blog/retro` vs `/blog`
*   `/blog/category/:categorySlug/retro` vs `/blog/category/:categorySlug`
*   `/blog/author/:authorSlug/retro` vs `/blog/author/:authorSlug`
*   `/blog/tag/:tagSlug/retro` vs `/blog/tag/:tagSlug`
*   `/blog/:slug/retro` vs `/blog/:slug`
*   `/about/retro` vs `/about`
*   `/contact/retro` vs `/contact`
*   `/stores/retro` vs `/stores`
*   `/faq/retro` vs `/faq`
*   `/shipping/retro` vs `/shipping`
*   `/returns/retro` vs `/returns`
*   `/privacy-policy/retro` vs `/privacy-policy`
*   `/terms-and-conditions/retro` vs `/terms-and-conditions`
*   `/404/retro` vs `*` and `/error/404`

## 2. Findings: Legacy Templates to Delete
The following standard components have fully functioning Retro counterparts and must be deleted, redirecting their primary route mapping to the Retro components instead:
*   `PageShippingReturns.tsx` (replaced by `PageShippingReturnsRetro.tsx`)
*   `PageReturnsPortal.tsx` (replaced by `PageReturnsPortalRetro.tsx`)
*   `PagePrivacyPolicy.tsx` (replaced by `PagePrivacyPolicyRetro.tsx`)
*   `PageTermsConditions.tsx` (replaced by `PageTermsConditionsRetro.tsx`)
*   `PageGiftCards.tsx`
*   `PageAbout.tsx`
*   `PageContact.tsx`
*   `PageStores.tsx`
*   `PageFAQ.tsx`
*   `PageCart.tsx`
*   `PageCheckout.tsx`
*   `PageWishlist.tsx`
*   `PageTrackOrder.tsx`
*   `ProductSearchResults.tsx`
*   `FrontPage.tsx`
*   `ArchiveProduct.tsx`
*   `SingleProduct.tsx`
*   `BlogIndex.tsx`
*   `ArchiveCategory.tsx`
*   `ArchiveAuthor.tsx`
*   `SinglePost.tsx`
*   `PageNotFound.tsx`

## 3. Findings: Internal Navigation Links
Multiple `<Link to="...">` instances throughout the `*Retro.tsx` files and global patterns point directly to the parallel `/retro` suffixed paths. These need to be updated to target the root paths instead (e.g. `to="/shop/retro"` becomes `to="/shop"`).
**Affected Files:**
*   `FooterRetroPattern.tsx`
*   `HeaderRetroPattern.tsx`
*   `HeroRetro.tsx`
*   `CategoryRowRetro.tsx`
*   `PageCartRetro.tsx`
*   `PageCheckoutRetro.tsx`
*   `PageAboutRetro.tsx`
*   `SinglePostRetro.tsx`
*   `PageNotFoundRetro.tsx`
*   `PageWishlistRetro.tsx`
*   `ProductSearchResultsRetro.tsx`
*   `AccountLayoutRetro.tsx`
*   `PageOrderConfirmationRetro.tsx`
*   `PageReturnsPortalRetro.tsx`

## 4. Remediation Plan
1. Delete legacy standard `.tsx` templates that have Retro alternatives.
2. Update `routes.ts` to wire standard base URLs to their Retro implementations and prune all `/retro` prefixed routes.
3. Update internal `<Link>` attributes in the Retro pattern/template components.
4. Verify application stability and remove legacy imports from `routes.ts`.