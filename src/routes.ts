/**
 * routes.ts - Router Configuration
 *
 * Defines the application route tree for React Router Data mode.
 * All route components are lazy-loaded to reduce initial bundle size
 * and prevent Figma Make iframe communication timeouts.
 *
 * CRITICAL: All imports use relative paths (NOT @/ aliases) because
 * Figma Make's Vite environment does not resolve @/ path aliases.
 */

import { createBrowserRouter, Navigate } from 'react-router';
import React from 'react';
import { RootLayout } from './src/app/RootLayout';

// Shared site chrome (header + footer)
const SiteLayout = React.lazy(() => import('./src/app/components/templates/SiteLayout').then((m) => ({ default: m.SiteLayout })));

// --- Lazy-loaded Route Components ------------------------------------------
// Each component is loaded on-demand to reduce initial parse/compile time.
// Named exports are remapped to default exports for React.lazy compatibility.

// Shop
const FrontPageRetro = React.lazy(() => import('./src/app/components/templates/FrontPageRetro').then((m) => ({ default: m.FrontPageRetro })));
const ArchiveProductRetro = React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then((m) => ({ default: m.ArchiveProductRetro })));
const ProductSearchResultsRetro = React.lazy(() => import('./src/app/components/templates/ProductSearchResultsRetro').then((m) => ({ default: m.ProductSearchResultsRetro })));
const SingleProductSticky = React.lazy(() => import('./src/app/components/templates/SingleProductSticky').then((m) => ({ default: m.SingleProductSticky })));
const SingleProductRetro = React.lazy(() => import('./src/app/components/templates/SingleProductRetro').then((m) => ({ default: m.SingleProductRetro })));
const PageGiftCardsRetro = React.lazy(() => import('./src/app/components/templates/PageGiftCardsRetro').then((m) => ({ default: m.PageGiftCardsRetro })));
const PageCompareRetro = React.lazy(() => import('./src/app/components/templates/PageCompareRetro').then((m) => ({ default: m.PageCompareRetro })));

// Account Patterns
const DashboardRetro = React.lazy(() => import('./src/app/components/patterns/account/DashboardRetro').then((m) => ({ default: m.DashboardRetro })));
const OrdersRetro = React.lazy(() => import('./src/app/components/patterns/account/OrdersRetro').then((m) => ({ default: m.OrdersRetro })));
const AddressesRetro = React.lazy(() => import('./src/app/components/patterns/account/AddressesRetro').then((m) => ({ default: m.AddressesRetro })));
const LoyaltyRetro = React.lazy(() => import('./src/app/components/patterns/account/LoyaltyRetro').then((m) => ({ default: m.LoyaltyRetro })));

// Account Templates
const PageContactRetro = React.lazy(() => import('./src/app/components/templates/PageContactRetro').then((m) => ({ default: m.PageContactRetro })));
const PageLoginRetro = React.lazy(() => import('./src/app/components/templates/PageLoginRetro').then((m) => ({ default: m.PageLoginRetro })));
const AccountLayoutRetro = React.lazy(() => import('./src/app/components/templates/AccountLayoutRetro').then((m) => ({ default: m.AccountLayoutRetro })));
const PageWishlistRetro = React.lazy(() => import('./src/app/components/templates/PageWishlistRetro').then((m) => ({ default: m.PageWishlistRetro })));
const AccountDashboardWidgets = React.lazy(() => import('./src/app/components/templates/AccountDashboardWidgets').then((m) => ({ default: m.AccountDashboardWidgets })));
const PageRegisterRetro = React.lazy(() => import('./src/app/components/templates/PageRegisterRetro').then((m) => ({ default: m.PageRegisterRetro })));
const PagePasswordResetRetro = React.lazy(() => import('./src/app/components/templates/PagePasswordResetRetro').then((m) => ({ default: m.PagePasswordResetRetro })));

// Checkout
const PageCartRetro = React.lazy(() => import('./src/app/components/templates/PageCartRetro').then((m) => ({ default: m.PageCartRetro })));
const PageCheckoutRetro = React.lazy(() => import('./src/app/components/templates/PageCheckoutRetro').then((m) => ({ default: m.PageCheckoutRetro })));
const PageOrderConfirmationRetro = React.lazy(() => import('./src/app/components/templates/PageOrderConfirmationRetro').then((m) => ({ default: m.PageOrderConfirmationRetro })));
const PageTrackOrderRetro = React.lazy(() => import('./src/app/components/templates/PageTrackOrderRetro').then((m) => ({ default: m.PageTrackOrderRetro })));

// Blog
const ArchiveBlogRetro = React.lazy(() => import('./src/app/components/templates/ArchiveBlogRetro').then((m) => ({ default: m.ArchiveBlogRetro })));
const SinglePostRetro = React.lazy(() => import('./src/app/components/templates/SinglePostRetro').then((m) => ({ default: m.SinglePostRetro })));
const SinglePostWithSidebar = React.lazy(() => import('./src/app/components/templates/SinglePostWithSidebar').then((m) => ({ default: m.SinglePostWithSidebar })));
const SinglePostFullWidth = React.lazy(() => import('./src/app/components/templates/SinglePostFullWidth').then((m) => ({ default: m.SinglePostFullWidth })));
const ArchiveBlogAuthorRetro = React.lazy(() => import('./src/app/components/templates/ArchiveBlogAuthorRetro').then((m) => ({ default: m.ArchiveBlogAuthorRetro })));
const ArchiveBlogCategoryRetro = React.lazy(() => import('./src/app/components/templates/ArchiveBlogCategoryRetro').then((m) => ({ default: m.ArchiveBlogCategoryRetro })));
const ArchiveBlogTagRetro = React.lazy(() => import('./src/app/components/templates/ArchiveBlogTagRetro').then((m) => ({ default: m.ArchiveBlogTagRetro })));
const ArchiveAudio = React.lazy(() => import('./src/app/components/templates/blog/ArchiveAudio').then((m) => ({ default: m.ArchiveAudio })));
const ArchiveVideo = React.lazy(() => import('./src/app/components/templates/blog/ArchiveVideo').then((m) => ({ default: m.ArchiveVideo })));
const ArchiveGallery = React.lazy(() => import('./src/app/components/templates/blog/ArchiveGallery').then((m) => ({ default: m.ArchiveGallery })));
const ArchiveAside = React.lazy(() => import('./src/app/components/templates/blog/ArchiveAside').then((m) => ({ default: m.ArchiveAside })));
const TemplateSingleStandard = React.lazy(() => import('./src/app/components/templates/TemplateSingleStandard').then((m) => ({ default: m.TemplateSingleStandard })));
const TemplateSingleAudio = React.lazy(() => import('./src/app/components/templates/TemplateSingleAudio').then((m) => ({ default: m.TemplateSingleAudio })));
const TemplateSingleVideo = React.lazy(() => import('./src/app/components/templates/TemplateSingleVideo').then((m) => ({ default: m.TemplateSingleVideo })));
const TemplateSingleGallery = React.lazy(() => import('./src/app/components/templates/TemplateSingleGallery').then((m) => ({ default: m.TemplateSingleGallery })));
const TemplateSingleAside = React.lazy(() => import('./src/app/components/templates/TemplateSingleAside').then((m) => ({ default: m.TemplateSingleAside })));

// About & Company
const PageAboutRetro = React.lazy(() => import('./src/app/components/templates/PageAboutRetro').then((m) => ({ default: m.PageAboutRetro })));
const PageOurStoryRetro = React.lazy(() => import('./src/app/components/templates/PageOurStoryRetro').then((m) => ({ default: m.PageOurStoryRetro })));
const PageTeamRetro = React.lazy(() => import('./src/app/components/templates/PageTeamRetro').then((m) => ({ default: m.PageTeamRetro })));
const PageSustainabilityRetro = React.lazy(() => import('./src/app/components/templates/PageSustainabilityRetro').then((m) => ({ default: m.PageSustainabilityRetro })));
const PageCareersRetro = React.lazy(() => import('./src/app/components/templates/PageCareersRetro').then((m) => ({ default: m.PageCareersRetro })));
const PageStoresRetro = React.lazy(() => import('./src/app/components/templates/PageStoresRetro').then((m) => ({ default: m.PageStoresRetro })));
const PagePressMediaRetro = React.lazy(() => import('./src/app/components/templates/PagePressMediaRetro').then((m) => ({ default: m.PagePressMediaRetro })));

// Support
const PageFAQRetro = React.lazy(() => import('./src/app/components/templates/PageFAQRetro').then((m) => ({ default: m.PageFAQRetro })));
const PageHelpCenterRetro = React.lazy(() => import('./src/app/components/templates/PageHelpCenterRetro').then((m) => ({ default: m.PageHelpCenterRetro })));
const PageChat = React.lazy(() => import('./src/app/components/templates/PageChat').then((m) => ({ default: m.PageChat })));
const PageShippingReturnsRetro = React.lazy(() => import('./src/app/components/templates/PageShippingReturnsRetro').then((m) => ({ default: m.PageShippingReturnsRetro })));
const PageSizeGuideRetro = React.lazy(() => import('./src/app/components/templates/PageSizeGuideRetro').then((m) => ({ default: m.PageSizeGuideRetro })));
const PageReturnsPortalRetro = React.lazy(() => import('./src/app/components/templates/PageReturnsPortalRetro').then((m) => ({ default: m.PageReturnsPortalRetro })));
const PageBuyingGuideRetro = React.lazy(() => import('./src/app/components/templates/PageBuyingGuideRetro').then((m) => ({ default: m.PageBuyingGuideRetro })));
const PageCareInstructionsRetro = React.lazy(() => import('./src/app/components/templates/PageCareInstructionsRetro').then((m) => ({ default: m.PageCareInstructionsRetro })));
const PageWarrantyRetro = React.lazy(() => import('./src/app/components/templates/PageWarrantyRetro').then((m) => ({ default: m.PageWarrantyRetro })));
const PageAccessibilityStatementRetro = React.lazy(() => import('./src/app/components/templates/PageAccessibilityStatementRetro').then((m) => ({ default: m.PageAccessibilityStatementRetro })));
const PageRewardProgramRetro = React.lazy(() => import('./src/app/components/templates/PageRewardProgramRetro').then((m) => ({ default: m.PageRewardProgramRetro })));
const PageAffiliateProgramRetro = React.lazy(() => import('./src/app/components/templates/PageAffiliateProgramRetro').then((m) => ({ default: m.PageAffiliateProgramRetro })));
const PageReviewsRetro = React.lazy(() => import('./src/app/components/templates/PageReviewsRetro').then((m) => ({ default: m.PageReviewsRetro })));
const PageRefundsRetro = React.lazy(() => import('./src/app/components/templates/PageRefundsRetro').then((m) => ({ default: m.PageRefundsRetro })));

// 6b. Convenience Alias Redirects
const RedirectPodcasts = () => React.createElement(Navigate, { to: '/blog/format/audio', replace: true });
const RedirectVideos = () => React.createElement(Navigate, { to: '/blog/format/video', replace: true });
const RedirectGallery = () => React.createElement(Navigate, { to: '/blog/format/gallery', replace: true });
const RedirectAsides = () => React.createElement(Navigate, { to: '/blog/format/aside', replace: true });
const RedirectSupport = () => React.createElement(Navigate, { to: '/help', replace: true });
const RedirectFaqs = () => React.createElement(Navigate, { to: '/faq', replace: true });

// Legal
const PagePrivacyPolicyRetro = React.lazy(() => import('./src/app/components/templates/PagePrivacyPolicyRetro').then((m) => ({ default: m.PagePrivacyPolicyRetro })));
const PageTermsConditionsRetro = React.lazy(() => import('./src/app/components/templates/PageTermsConditionsRetro').then((m) => ({ default: m.PageTermsConditionsRetro })));

// Promo & Misc
const PageLoyaltyRetro = React.lazy(() => import('./src/app/components/templates/PageLoyaltyRetro').then((m) => ({ default: m.PageLoyaltyRetro })));
const SubscriptionLandingRetro = React.lazy(() => import('./src/app/components/templates/SubscriptionLandingRetro').then((m) => ({ default: m.SubscriptionLandingRetro })));
const SingleSubscription = React.lazy(() => import('./src/app/components/templates/SingleSubscription').then((m) => ({ default: m.SingleSubscription })));
const MembershipLandingRetro = React.lazy(() => import('./src/app/components/templates/MembershipLandingRetro').then((m) => ({ default: m.MembershipLandingRetro })));
const MembershipSubscription3DRetro = React.lazy(() => import('./src/app/components/templates/MembershipSubscription3DRetro').then((m) => ({ default: m.MembershipSubscription3DRetro })));
const SingleMembership = React.lazy(() => import('./src/app/components/templates/SingleMembership').then((m) => ({ default: m.SingleMembership })));
const PageNewsletter = React.lazy(() => import('./src/app/components/templates/PageNewsletter').then((m) => ({ default: m.PageNewsletter })));
const ArchiveNewsletterRetro = React.lazy(() => import('./src/app/components/templates/ArchiveNewsletterRetro').then((m) => ({ default: m.ArchiveNewsletterRetro })));
const SingleNewsletterRetro = React.lazy(() => import('./src/app/components/templates/SingleNewsletterRetro').then((m) => ({ default: m.SingleNewsletterRetro })));
const PageNotFoundRetro = React.lazy(() => import('./src/app/components/templates/PageNotFoundRetro').then((m) => ({ default: m.PageNotFoundRetro })));
const LongFormSalesPage = React.lazy(() => import('./src/app/components/templates/LongFormSalesPage').then((m) => ({ default: m.LongFormSalesPage })));
const SocialRedirect = React.lazy(() => import('./src/app/components/templates/SocialRedirect'));
const Sitemap = React.lazy(() => import('./src/app/components/pages/Sitemap').then((m) => ({ default: m.Sitemap })));

// Retro Demo
const RetroDemoIndex = React.lazy(() => import('./src/app/components/templates/RetroDemoIndex').then((m) => ({ default: m.RetroDemoIndex })));
const RetroDemoLandingPage = React.lazy(() => import('./src/app/components/templates/RetroDemoLandingPage').then((m) => ({ default: m.RetroDemoLandingPage })));

// Gaming & Community
const PageAchievementsRetro = React.lazy(() => import('./src/app/components/templates/PageAchievementsRetro').then((m) => ({ default: m.PageAchievementsRetro })));
const PageLeaderboardRetro = React.lazy(() => import('./src/app/components/templates/PageLeaderboardRetro').then((m) => ({ default: m.PageLeaderboardRetro })));
const PageNewReleasesRetro = React.lazy(() => import('./src/app/components/templates/PageNewReleasesRetro').then((m) => ({ default: m.PageNewReleasesRetro })));
const PageBundleBuilderRetro = React.lazy(() => import('./src/app/components/templates/PageBundleBuilderRetro').then((m) => ({ default: m.PageBundleBuilderRetro })));
const PageLookbookRetro = React.lazy(() => import('./src/app/components/templates/PageLookbookRetro').then((m) => ({ default: m.PageLookbookRetro })));
const PageCommunityRetro = React.lazy(() => import('./src/app/components/templates/PageCommunityRetro').then((m) => ({ default: m.PageCommunityRetro })));
const PageReferralRetro = React.lazy(() => import('./src/app/components/templates/PageReferralRetro').then((m) => ({ default: m.PageReferralRetro })));
const PageEventsRetro = React.lazy(() => import('./src/app/components/templates/PageEventsRetro').then((m) => ({ default: m.PageEventsRetro })));

// Dev Tools
const DevToolsIndex = React.lazy(() => import('./src/app/components/pages/DevToolsIndex').then((m) => ({ default: m.DevToolsIndex })));
const DevToolsLayout = React.lazy(() => import('./src/app/components/templates/DevToolsLayout').then((m) => ({ default: m.DevToolsLayout })));
const PageStyleGuide = React.lazy(() => import('./src/app/components/templates/PageStyleGuide'));
const PageShowcase = React.lazy(() => import('./src/app/components/templates/PageShowcase'));
const PageIconLibrary = React.lazy(() => import('./src/app/components/templates/PageIconLibrary'));
const PageComponentAPI = React.lazy(() => import('./src/app/components/templates/PageComponentAPI'));
const PageLivePreview = React.lazy(() => import('./src/app/components/templates/PageLivePreview'));
const PagePerformance = React.lazy(() => import('./src/app/components/templates/PagePerformance'));
const PageFormShowcase = React.lazy(() => import('./src/app/components/templates/PageFormShowcase').then((m) => ({ default: m.PageFormShowcase })));

// --- Redirect Components ---------------------------------------------------

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

// --- HydrateFallback -------------------------------------------------------

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

// --- Route Definitions -----------------------------------------------------

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    HydrateFallback,
    children: [
      {
        /* SiteLayout — shared HeaderRetro + FooterRetro for all pages */
        Component: SiteLayout,
        children: [
          // Home
          { index: true, Component: FrontPageRetro },

          // 1. Shop Routes
          { path: 'shop', Component: ArchiveProductRetro },
          { path: 'shop/all', Component: ArchiveProductRetro },
          { path: 'shop/all-products', Component: ArchiveProductRetro },
          { path: 'shop/collections', Component: FrontPageRetro },
          { path: 'category/:slug', Component: ArchiveProductRetro },
          { path: 'tag/:slug', Component: ArchiveProductRetro },
          { path: 'shop/search', Component: ProductSearchResultsRetro },
          { path: 'shop/filtered', Component: ArchiveProductRetro },
          { path: 'search', Component: ProductSearchResultsRetro },
          { path: 'product/:slug', Component: SingleProductRetro },
          { path: 'product/:slug/sticky', Component: SingleProductSticky },
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
          { path: 'blog/category/:slug', Component: ArchiveBlogCategoryRetro },
          { path: 'blog/author/:slug', Component: ArchiveBlogAuthorRetro },
          { path: 'blog/tag/:slug', Component: ArchiveBlogTagRetro },
          { path: 'blog/:slug', Component: SinglePostRetro },
          { path: 'blog/:slug/sidebar', Component: SinglePostWithSidebar },
          { path: 'blog/:slug/fullwidth', Component: SinglePostFullWidth },
          { path: 'blog/format/audio', Component: ArchiveAudio },
          { path: 'blog/format/video', Component: ArchiveVideo },
          { path: 'blog/format/gallery', Component: ArchiveGallery },
          { path: 'blog/format/aside', Component: ArchiveAside },
          { path: 'blog/format/standard', Component: ArchiveBlogRetro },
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

          // 6b. Convenience Aliases
          { path: 'podcasts', Component: RedirectPodcasts },
          { path: 'videos', Component: RedirectVideos },
          { path: 'gallery', Component: RedirectGallery },
          { path: 'asides', Component: RedirectAsides },
          { path: 'support', Component: RedirectSupport },
          { path: 'faqs', Component: RedirectFaqs },

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
          { path: 'subscription/:slug', Component: SingleSubscription },
          { path: 'memberships', Component: MembershipLandingRetro },
          { path: 'membership/3d/:slug', Component: MembershipSubscription3DRetro },
          { path: 'membership/:slug', Component: SingleMembership },
          { path: 'newsletter', Component: PageNewsletter },
          { path: 'newsletter/archive', Component: ArchiveNewsletterRetro },
          { path: 'newsletter/:slug', Component: SingleNewsletterRetro },
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
    ],
  },
]);