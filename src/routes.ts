/**
 * routes.ts - Router Configuration
 *
 * Defines the application route tree for React Router Data mode.
 * All route components are lazy-loaded to reduce initial bundle size
 * and prevent Figma Make iframe communication timeouts.
 */

import { createBrowserRouter, Navigate } from 'react-router';
import React from 'react';
import { RootLayout } from './src/app/RootLayout';

// --- Lazy-loaded Route Components -----------------------------------------------
// Each component is loaded on-demand to reduce initial parse/compile time.
// Named exports are remapped to default exports for React.lazy compatibility.

// Shop
const FrontPageRetro = React.lazy(() => import('@/templates/FrontPageRetro').then((m) => ({ default: m.FrontPageRetro })));
const ArchiveProductRetro = React.lazy(() => import('@/templates/ArchiveProductRetro').then((m) => ({ default: m.ArchiveProductRetro })));
const ProductSearchResultsRetro = React.lazy(() => import('@/templates/ProductSearchResultsRetro').then((m) => ({ default: m.ProductSearchResultsRetro })));
const SingleProductSticky = React.lazy(() => import('@/templates/SingleProductSticky').then((m) => ({ default: m.SingleProductSticky })));
const SingleProductRetro = React.lazy(() => import('@/templates/SingleProductRetro').then((m) => ({ default: m.SingleProductRetro })));
const PageGiftCardsRetro = React.lazy(() => import('@/templates/PageGiftCardsRetro').then((m) => ({ default: m.PageGiftCardsRetro })));
const PageCompareRetro = React.lazy(() => import('@/templates/PageCompareRetro').then((m) => ({ default: m.PageCompareRetro })));

// Account Patterns
const DashboardRetro = React.lazy(() => import('./src/app/components/patterns/account/DashboardRetro').then((m) => ({ default: m.DashboardRetro })));
const OrdersRetro = React.lazy(() => import('./src/app/components/patterns/account/OrdersRetro').then((m) => ({ default: m.OrdersRetro })));
const AddressesRetro = React.lazy(() => import('./src/app/components/patterns/account/AddressesRetro').then((m) => ({ default: m.AddressesRetro })));
const LoyaltyRetro = React.lazy(() => import('./src/app/components/patterns/account/LoyaltyRetro').then((m) => ({ default: m.LoyaltyRetro })));

// Account Templates
const PageContactRetro = React.lazy(() => import('@/templates/PageContactRetro').then((m) => ({ default: m.PageContactRetro })));
const PageLoginRetro = React.lazy(() => import('@/templates/PageLoginRetro').then((m) => ({ default: m.PageLoginRetro })));
const AccountLayoutRetro = React.lazy(() => import('@/templates/AccountLayoutRetro').then((m) => ({ default: m.AccountLayoutRetro })));
const PageWishlistRetro = React.lazy(() => import('@/templates/PageWishlistRetro').then((m) => ({ default: m.PageWishlistRetro })));
const AccountDashboardWidgets = React.lazy(() => import('@/templates/AccountDashboardWidgets').then((m) => ({ default: m.AccountDashboardWidgets })));
const PageRegisterRetro = React.lazy(() => import('@/templates/PageRegisterRetro').then((m) => ({ default: m.PageRegisterRetro })));
const PagePasswordResetRetro = React.lazy(() => import('@/templates/PagePasswordResetRetro').then((m) => ({ default: m.PagePasswordResetRetro })));

// Checkout
const PageCartRetro = React.lazy(() => import('@/templates/PageCartRetro').then((m) => ({ default: m.PageCartRetro })));
const PageCheckoutRetro = React.lazy(() => import('@/templates/PageCheckoutRetro').then((m) => ({ default: m.PageCheckoutRetro })));
const PageOrderConfirmationRetro = React.lazy(() => import('@/templates/PageOrderConfirmationRetro').then((m) => ({ default: m.PageOrderConfirmationRetro })));
const PageTrackOrderRetro = React.lazy(() => import('@/templates/PageTrackOrderRetro').then((m) => ({ default: m.PageTrackOrderRetro })));

// Blog
const ArchiveBlogRetro = React.lazy(() => import('@/templates/ArchiveBlogRetro').then((m) => ({ default: m.ArchiveBlogRetro })));
const SinglePostRetro = React.lazy(() => import('@/templates/SinglePostRetro').then((m) => ({ default: m.SinglePostRetro })));
const SinglePostWithSidebar = React.lazy(() => import('@/templates/SinglePostWithSidebar').then((m) => ({ default: m.SinglePostWithSidebar })));
const SinglePostFullWidth = React.lazy(() => import('@/templates/SinglePostFullWidth').then((m) => ({ default: m.SinglePostFullWidth })));
const ArchiveAudio = React.lazy(() => import('@/templates/blog/ArchiveAudio').then((m) => ({ default: m.ArchiveAudio })));
const ArchiveVideo = React.lazy(() => import('@/templates/blog/ArchiveVideo').then((m) => ({ default: m.ArchiveVideo })));
const ArchiveGallery = React.lazy(() => import('@/templates/blog/ArchiveGallery').then((m) => ({ default: m.ArchiveGallery })));
const ArchiveAside = React.lazy(() => import('@/templates/blog/ArchiveAside').then((m) => ({ default: m.ArchiveAside })));
const TemplateSingleStandard = React.lazy(() => import('@/templates/TemplateSingleStandard').then((m) => ({ default: m.TemplateSingleStandard })));
const TemplateSingleAudio = React.lazy(() => import('@/templates/TemplateSingleAudio').then((m) => ({ default: m.TemplateSingleAudio })));
const TemplateSingleVideo = React.lazy(() => import('@/templates/TemplateSingleVideo').then((m) => ({ default: m.TemplateSingleVideo })));
const TemplateSingleGallery = React.lazy(() => import('@/templates/TemplateSingleGallery').then((m) => ({ default: m.TemplateSingleGallery })));
const TemplateSingleAside = React.lazy(() => import('@/templates/TemplateSingleAside').then((m) => ({ default: m.TemplateSingleAside })));

// About & Company
const PageAboutRetro = React.lazy(() => import('@/templates/PageAboutRetro').then((m) => ({ default: m.PageAboutRetro })));
const PageOurStoryRetro = React.lazy(() => import('@/templates/PageOurStoryRetro').then((m) => ({ default: m.PageOurStoryRetro })));
const PageTeamRetro = React.lazy(() => import('@/templates/PageTeamRetro').then((m) => ({ default: m.PageTeamRetro })));
const PageSustainabilityRetro = React.lazy(() => import('@/templates/PageSustainabilityRetro').then((m) => ({ default: m.PageSustainabilityRetro })));
const PageCareersRetro = React.lazy(() => import('@/templates/PageCareersRetro').then((m) => ({ default: m.PageCareersRetro })));
const PageStoresRetro = React.lazy(() => import('@/templates/PageStoresRetro').then((m) => ({ default: m.PageStoresRetro })));
const PagePressMediaRetro = React.lazy(() => import('@/templates/PagePressMediaRetro').then((m) => ({ default: m.PagePressMediaRetro })));

// Support
const PageFAQRetro = React.lazy(() => import('@/templates/PageFAQRetro').then((m) => ({ default: m.PageFAQRetro })));
const PageHelpCenterRetro = React.lazy(() => import('@/templates/PageHelpCenterRetro').then((m) => ({ default: m.PageHelpCenterRetro })));
const PageChat = React.lazy(() => import('@/templates/PageChat').then((m) => ({ default: m.PageChat })));
const PageShippingReturnsRetro = React.lazy(() => import('@/templates/PageShippingReturnsRetro').then((m) => ({ default: m.PageShippingReturnsRetro })));
const PageSizeGuideRetro = React.lazy(() => import('@/templates/PageSizeGuideRetro').then((m) => ({ default: m.PageSizeGuideRetro })));
const PageReturnsPortalRetro = React.lazy(() => import('@/templates/PageReturnsPortalRetro').then((m) => ({ default: m.PageReturnsPortalRetro })));
const PageBuyingGuideRetro = React.lazy(() => import('@/templates/PageBuyingGuideRetro').then((m) => ({ default: m.PageBuyingGuideRetro })));
const PageCareInstructionsRetro = React.lazy(() => import('@/templates/PageCareInstructionsRetro').then((m) => ({ default: m.PageCareInstructionsRetro })));
const PageWarrantyRetro = React.lazy(() => import('@/templates/PageWarrantyRetro').then((m) => ({ default: m.PageWarrantyRetro })));
const PageAccessibilityStatementRetro = React.lazy(() => import('@/templates/PageAccessibilityStatementRetro').then((m) => ({ default: m.PageAccessibilityStatementRetro })));
const PageRewardProgramRetro = React.lazy(() => import('@/templates/PageRewardProgramRetro').then((m) => ({ default: m.PageRewardProgramRetro })));
const PageAffiliateProgramRetro = React.lazy(() => import('@/templates/PageAffiliateProgramRetro').then((m) => ({ default: m.PageAffiliateProgramRetro })));
const PageReviewsRetro = React.lazy(() => import('@/templates/PageReviewsRetro').then((m) => ({ default: m.PageReviewsRetro })));
const PageRefundsRetro = React.lazy(() => import('@/templates/PageRefundsRetro').then((m) => ({ default: m.PageRefundsRetro })));

// Legal
const PagePrivacyPolicyRetro = React.lazy(() => import('@/templates/PagePrivacyPolicyRetro').then((m) => ({ default: m.PagePrivacyPolicyRetro })));
const PageTermsConditionsRetro = React.lazy(() => import('@/templates/PageTermsConditionsRetro').then((m) => ({ default: m.PageTermsConditionsRetro })));

// Promo & Misc
const PageLoyaltyRetro = React.lazy(() => import('@/templates/PageLoyaltyRetro').then((m) => ({ default: m.PageLoyaltyRetro })));
const SubscriptionLandingRetro = React.lazy(() => import('@/templates/SubscriptionLandingRetro').then((m) => ({ default: m.SubscriptionLandingRetro })));
const SingleSubscription = React.lazy(() => import('@/templates/SingleSubscription').then((m) => ({ default: m.SingleSubscription })));
const MembershipLandingRetro = React.lazy(() => import('@/templates/MembershipLandingRetro').then((m) => ({ default: m.MembershipLandingRetro })));
const MembershipSubscription3DRetro = React.lazy(() => import('@/templates/MembershipSubscription3DRetro').then((m) => ({ default: m.MembershipSubscription3DRetro })));
const SingleMembership = React.lazy(() => import('@/templates/SingleMembership').then((m) => ({ default: m.SingleMembership })));
const PageNewsletter = React.lazy(() => import('@/templates/PageNewsletter').then((m) => ({ default: m.PageNewsletter })));
const PageNotFoundRetro = React.lazy(() => import('@/templates/PageNotFoundRetro').then((m) => ({ default: m.PageNotFoundRetro })));
const LongFormSalesPage = React.lazy(() => import('@/templates/LongFormSalesPage').then((m) => ({ default: m.LongFormSalesPage })));
const SocialRedirect = React.lazy(() => import('@/templates/SocialRedirect'));
const Sitemap = React.lazy(() => import('./src/app/components/pages/Sitemap').then((m) => ({ default: m.Sitemap })));

// Retro Demo
const RetroDemoIndex = React.lazy(() => import('@/templates/RetroDemoIndex').then((m) => ({ default: m.RetroDemoIndex })));
const RetroDemoLandingPage = React.lazy(() => import('@/templates/RetroDemoLandingPage').then((m) => ({ default: m.RetroDemoLandingPage })));

// Gaming & Community
const PageAchievementsRetro = React.lazy(() => import('@/templates/PageAchievementsRetro').then((m) => ({ default: m.PageAchievementsRetro })));
const PageLeaderboardRetro = React.lazy(() => import('@/templates/PageLeaderboardRetro').then((m) => ({ default: m.PageLeaderboardRetro })));
const PageNewReleasesRetro = React.lazy(() => import('@/templates/PageNewReleasesRetro').then((m) => ({ default: m.PageNewReleasesRetro })));
const PageBundleBuilderRetro = React.lazy(() => import('@/templates/PageBundleBuilderRetro').then((m) => ({ default: m.PageBundleBuilderRetro })));
const PageLookbookRetro = React.lazy(() => import('@/templates/PageLookbookRetro').then((m) => ({ default: m.PageLookbookRetro })));
const PageCommunityRetro = React.lazy(() => import('@/templates/PageCommunityRetro').then((m) => ({ default: m.PageCommunityRetro })));
const PageReferralRetro = React.lazy(() => import('@/templates/PageReferralRetro').then((m) => ({ default: m.PageReferralRetro })));
const PageEventsRetro = React.lazy(() => import('@/templates/PageEventsRetro').then((m) => ({ default: m.PageEventsRetro })));

// Dev Tools
const DevToolsIndex = React.lazy(() => import('./src/app/components/pages/DevToolsIndex').then((m) => ({ default: m.DevToolsIndex })));
const DevToolsLayout = React.lazy(() => import('@/templates/DevToolsLayout').then((m) => ({ default: m.DevToolsLayout })));
const PageStyleGuide = React.lazy(() => import('@/templates/PageStyleGuide'));
const PageShowcase = React.lazy(() => import('@/templates/PageShowcase'));
const PageIconLibrary = React.lazy(() => import('@/templates/PageIconLibrary'));
const PageComponentAPI = React.lazy(() => import('@/templates/PageComponentAPI'));
const PageLivePreview = React.lazy(() => import('@/templates/PageLivePreview'));
const PagePerformance = React.lazy(() => import('@/templates/PagePerformance'));
const PageFormShowcase = React.lazy(() => import('@/templates/PageFormShowcase').then((m) => ({ default: m.PageFormShowcase })));

// --- Redirect Components -------------------------------------------------------

const RedirectAccount = () => {
  return React.createElement(Navigate, { to: '/account', replace: true });
};

const RedirectPrivacy = () => {
  return React.createElement(Navigate, { to: '/privacy-policy', replace: true });
};

const RedirectTerms = () => {
  return React.createElement(Navigate, { to: '/terms-and-conditions', replace: true });
};

const RedirectRetroDashboard = () => {
  return React.createElement(Navigate, { to: 'dashboard', replace: true });
};

// --- HydrateFallback -----------------------------------------------------------

const HydrateFallback = () => {
  return React.createElement(
    'div',
    { className: 'wp-page-loading' },
    React.createElement(
      'div',
      { className: 'wp-block-group wp-block-group--vertical wp-block-group--spacing-md has-text-align-center' },
      React.createElement('div', { className: 'wp-page-loading__spinner' }),
      React.createElement('small', { className: 'wp-page-loading__text' }, 'Loading...')
    )
  );
}

// --- Route Definitions ---------------------------------------------------------

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    HydrateFallback,
    children: [
      // Home
      { index: true, Component: FrontPageRetro },

      // 1. Shop Routes
      { path: 'shop', Component: ArchiveProductRetro },
      { path: 'shop/all', Component: ArchiveProductRetro },
      { path: 'shop/all-products', Component: ArchiveProductRetro },
      { path: 'shop/collections', Component: FrontPageRetro },
      { path: 'shop/category/:categorySlug', Component: ArchiveProductRetro },
      { path: 'shop/tag/:tagSlug', Component: ArchiveProductRetro },
      { path: 'shop/search', Component: ProductSearchResultsRetro },
      { path: 'shop/filtered', Component: ArchiveProductRetro },
      { path: 'search', Component: ProductSearchResultsRetro },
      { path: 'product/:id', Component: SingleProductRetro },
      { path: 'product/:id/sticky', Component: SingleProductSticky },
      { path: 'variable-product/:id', Component: SingleProductRetro },
      { path: 'deals', Component: ArchiveProductRetro },
      { path: 'new-arrivals', Component: ArchiveProductRetro },
      { path: 'best-sellers', Component: ArchiveProductRetro },
      { path: 'sale', Component: ArchiveProductRetro },
      { path: 'gift-cards', Component: PageGiftCardsRetro },
      { path: 'compare', Component: PageCompareRetro },

      // 2. Account Routes
      { path: 'account/login', Component: PageLoginRetro },
      { path: 'register', Component: PageRegisterRetro },
      { path: 'reset-password', Component: PagePasswordResetRetro },
      { path: 'account/reset-password', Component: PagePasswordResetRetro },
      {
        path: 'account',
        Component: AccountLayoutRetro,
        children: [
          { index: true, Component: RedirectRetroDashboard },
          { path: 'dashboard', Component: DashboardRetro },
          { path: 'orders', Component: OrdersRetro },
          { path: 'addresses', Component: AddressesRetro },
          { path: 'loyalty', Component: LoyaltyRetro },
          { path: '*', Component: RedirectRetroDashboard },
        ],
      },
      { path: 'my-account', Component: RedirectAccount },
      { path: 'wishlist', Component: PageWishlistRetro },
      { path: 'account/dashboard-widgets', Component: AccountDashboardWidgets },

      // 3. Checkout Routes
      { path: 'cart', Component: PageCartRetro },
      { path: 'checkout', Component: PageCheckoutRetro },
      { path: 'order-confirmation', Component: PageOrderConfirmationRetro },
      { path: 'track-order', Component: PageTrackOrderRetro },

      // 4. Blog Routes
      { path: 'blog', Component: ArchiveBlogRetro },
      { path: 'blog/category/:categorySlug', Component: ArchiveBlogRetro },
      { path: 'blog/author/:authorSlug', Component: ArchiveBlogRetro },
      { path: 'blog/tag/:tagSlug', Component: ArchiveBlogRetro },
      { path: 'blog/:slug', Component: SinglePostRetro },
      { path: 'blog/:slug/sidebar', Component: SinglePostWithSidebar },
      { path: 'blog/:slug/fullwidth', Component: SinglePostFullWidth },
      { path: 'blog/format/audio', Component: ArchiveAudio },
      { path: 'blog/format/video', Component: ArchiveVideo },
      { path: 'blog/format/gallery', Component: ArchiveGallery },
      { path: 'blog/format/aside', Component: ArchiveAside },
      { path: 'blog/:slug/standard', Component: TemplateSingleStandard },
      { path: 'blog/:slug/audio', Component: TemplateSingleAudio },
      { path: 'blog/:slug/video', Component: TemplateSingleVideo },
      { path: 'blog/:slug/gallery', Component: TemplateSingleGallery },
      { path: 'blog/:slug/aside', Component: TemplateSingleAside },

      // 5. About & Company Routes
      { path: 'about', Component: PageAboutRetro },
      { path: 'about/our-story', Component: PageOurStoryRetro },
      { path: 'about/team', Component: PageTeamRetro },
      { path: 'about/sustainability', Component: PageSustainabilityRetro },
      { path: 'about/careers', Component: PageCareersRetro },
      { path: 'contact', Component: PageContactRetro },
      { path: 'stores', Component: PageStoresRetro },
      { path: 'press', Component: PagePressMediaRetro },

      // 6. Support Routes
      { path: 'faq', Component: PageFAQRetro },
      { path: 'help', Component: PageHelpCenterRetro },
      { path: 'chat', Component: PageChat },
      { path: 'shipping-returns', Component: PageShippingReturnsRetro },
      { path: 'shipping', Component: PageShippingReturnsRetro },
      { path: 'size-guide', Component: PageSizeGuideRetro },
      { path: 'returns', Component: PageReturnsPortalRetro },
      { path: 'refunds', Component: PageRefundsRetro },
      { path: 'buying-guide', Component: PageBuyingGuideRetro },
      { path: 'care-instructions', Component: PageCareInstructionsRetro },
      { path: 'warranty', Component: PageWarrantyRetro },
      { path: 'accessibility', Component: PageAccessibilityStatementRetro },
      { path: 'rewards', Component: PageRewardProgramRetro },
      { path: 'affiliate', Component: PageAffiliateProgramRetro },
      { path: 'reviews', Component: PageReviewsRetro },

      // 7. Legal Routes
      { path: 'privacy-policy', Component: PagePrivacyPolicyRetro },
      { path: 'terms-and-conditions', Component: PageTermsConditionsRetro },
      { path: 'privacy', Component: RedirectPrivacy },
      { path: 'policies', Component: RedirectPrivacy },
      { path: 'terms', Component: RedirectTerms },
      { path: 'legal/privacy', Component: RedirectPrivacy },
      { path: 'legal/terms', Component: RedirectTerms },
      { path: 'legal/privacy-policy', Component: RedirectPrivacy },
      { path: 'legal/terms-conditions', Component: RedirectTerms },

      // 8. Promo & Misc Routes
      { path: 'promotions', Component: ArchiveProductRetro },
      { path: 'promotions/flash-sale', Component: ArchiveProductRetro },
      { path: 'promotions/seasonal', Component: ArchiveProductRetro },
      { path: 'promotions/bundles', Component: ArchiveProductRetro },
      { path: 'promotions/clearance', Component: ArchiveProductRetro },
      { path: 'promotions/winter-clearance', Component: ArchiveProductRetro },
      { path: 'promotions/buy-2-get-1', Component: ArchiveProductRetro },
      { path: 'loyalty', Component: PageLoyaltyRetro },
      { path: 'subscriptions', Component: SubscriptionLandingRetro },
      { path: 'subscription/:id', Component: SingleSubscription },
      { path: 'memberships', Component: MembershipLandingRetro },
      { path: 'membership/:id', Component: SingleMembership },
      { path: 'membership/3d/:id', Component: MembershipSubscription3DRetro },
      { path: 'newsletter', Component: PageNewsletter },
      { path: 'campaign/product-launch', Component: LongFormSalesPage },
      { path: 'social/:platform', Component: SocialRedirect },
      { path: 'template-tester', Component: FrontPageRetro },
      { path: 'sitemap', Component: Sitemap },

      // 8b. Retro Demo Pages
      { path: 'retro-demo', Component: RetroDemoIndex },
      { path: 'retro-demo/landing-page', Component: RetroDemoLandingPage },

      // 8c. Gaming & Community Pages
      { path: 'achievements', Component: PageAchievementsRetro },
      { path: 'leaderboard', Component: PageLeaderboardRetro },
      { path: 'new-releases', Component: PageNewReleasesRetro },
      { path: 'pre-orders', Component: PageNewReleasesRetro },
      { path: 'bundle-builder', Component: PageBundleBuilderRetro },
      { path: 'lookbook', Component: PageLookbookRetro },
      { path: 'community', Component: PageCommunityRetro },
      { path: 'referral', Component: PageReferralRetro },
      { path: 'events', Component: PageEventsRetro },

      // 9. Dev Tools Routes
      {
        path: 'dev-tools',
        Component: DevToolsLayout,
        children: [
          { index: true, Component: DevToolsIndex },
          { path: 'style-guide', Component: PageStyleGuide },
          { path: 'showcase', Component: PageShowcase },
          { path: 'forms', Component: PageFormShowcase },
          { path: 'icons', Component: PageIconLibrary },
          { path: 'api', Component: PageComponentAPI },
          { path: 'live-preview', Component: PageLivePreview },
          { path: 'performance', Component: PagePerformance },
        ],
      },

      // 10. Error Routes
      { path: 'error/404', Component: PageNotFoundRetro },
      { path: 'error/500', Component: PageNotFoundRetro },
      { path: 'error/503', Component: PageNotFoundRetro },
      { path: 'error/network', Component: PageNotFoundRetro },
      { path: '*', Component: PageNotFoundRetro },
    ],
  },
]);