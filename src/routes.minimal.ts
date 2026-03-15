/**
 * routes.minimal.ts - Complete Router Configuration
 *
 * All sitemap routes mapped to actual template components.
 * Uses explicit static imports for Vite compatibility.
 * React.lazy() on every route for code splitting.
 */

import { createBrowserRouter } from 'react-router';
import React from 'react';
import { RootLayout } from './src/app/RootLayout';

const el = React.createElement;

const HydrateFallback = () =>
  el('div', { className: 'wp-page-loading' },
    el('div', { className: 'wp-block-group wp-block-group--vertical wp-block-group--spacing-md has-text-align-center' },
      el('div', { className: 'wp-page-loading__spinner' }),
      el('small', { className: 'wp-page-loading__text' }, 'Loading...')
    )
  );

export const router = createBrowserRouter([
  {
    path: '/',
    element: el(RootLayout),
    HydrateFallback,
    children: [
      // ── Core Pages ──
      { index: true, element: el(React.lazy(() => import('./src/app/components/templates/FrontPageRetro').then(m => ({ default: m.FrontPageRetro })))) },
      { path: 'search', element: el(React.lazy(() => import('./src/app/components/templates/ProductSearchResultsRetro').then(m => ({ default: m.ProductSearchResultsRetro })))) },
      { path: 'contact', element: el(React.lazy(() => import('./src/app/components/templates/PageContactRetro').then(m => ({ default: m.PageContactRetro })))) },
      { path: 'faq', element: el(React.lazy(() => import('./src/app/components/templates/PageFAQRetro').then(m => ({ default: m.PageFAQRetro })))) },
      { path: 'newsletter', element: el(React.lazy(() => import('./src/app/components/templates/PageNewsletter').then(m => ({ default: m.PageNewsletter })))) },
      { path: 'sitemap', element: el(React.lazy(() => import('./src/app/components/pages/Sitemap').then(m => ({ default: m.Sitemap })))) },

      // ── Shop & Products ──
      { path: 'shop', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'shop/all', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'shop/all-products', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'shop/collections', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'shop/filtered', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'shop/search', element: el(React.lazy(() => import('./src/app/components/templates/ProductSearchResultsRetro').then(m => ({ default: m.ProductSearchResultsRetro })))) },
      { path: 'shop/category/:categorySlug', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'shop/tag/:tagSlug', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'new-arrivals', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'best-sellers', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'sale', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'deals', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'gift-cards', element: el(React.lazy(() => import('./src/app/components/templates/PageGiftCardsRetro').then(m => ({ default: m.PageGiftCardsRetro })))) },
      { path: 'compare', element: el(React.lazy(() => import('./src/app/components/templates/PageCompareRetro').then(m => ({ default: m.PageCompareRetro })))) },
      { path: 'product/:productId', element: el(React.lazy(() => import('./src/app/components/templates/SingleProductRetro').then(m => ({ default: m.SingleProductRetro })))) },
      { path: 'product/:productId/sticky', element: el(React.lazy(() => import('./src/app/components/templates/SingleProductSticky').then(m => ({ default: m.SingleProductSticky })))) },
      { path: 'variable-product/:productId', element: el(React.lazy(() => import('./src/app/components/templates/SingleProductRetro').then(m => ({ default: m.SingleProductRetro })))) },
      { path: 'lookbook', element: el(React.lazy(() => import('./src/app/components/templates/PageLookbookRetro').then(m => ({ default: m.PageLookbookRetro })))) },

      // ── Cart & Checkout ──
      { path: 'cart', element: el(React.lazy(() => import('./src/app/components/templates/PageCartRetro').then(m => ({ default: m.PageCartRetro })))) },
      { path: 'checkout', element: el(React.lazy(() => import('./src/app/components/templates/PageCheckoutRetro').then(m => ({ default: m.PageCheckoutRetro })))) },
      { path: 'order-confirmation', element: el(React.lazy(() => import('./src/app/components/templates/PageOrderConfirmationRetro').then(m => ({ default: m.PageOrderConfirmationRetro })))) },
      { path: 'track-order', element: el(React.lazy(() => import('./src/app/components/templates/PageTrackOrderRetro').then(m => ({ default: m.PageTrackOrderRetro })))) },

      // ── Account & Auth ──
      { path: 'account/login', element: el(React.lazy(() => import('./src/app/components/templates/PageLoginRetro').then(m => ({ default: m.PageLoginRetro })))) },
      { path: 'register', element: el(React.lazy(() => import('./src/app/components/templates/PageRegisterRetro').then(m => ({ default: m.PageRegisterRetro })))) },
      { path: 'reset-password', element: el(React.lazy(() => import('./src/app/components/templates/PagePasswordResetRetro').then(m => ({ default: m.PagePasswordResetRetro })))) },
      { path: 'account/reset-password', element: el(React.lazy(() => import('./src/app/components/templates/PagePasswordResetRetro').then(m => ({ default: m.PagePasswordResetRetro })))) },
      { path: 'account', element: el(React.lazy(() => import('./src/app/components/templates/AccountLayoutRetro').then(m => ({ default: m.AccountLayoutRetro })))) },
      { path: 'account/dashboard', element: el(React.lazy(() => import('./src/app/components/templates/AccountLayoutRetro').then(m => ({ default: m.AccountLayoutRetro })))) },
      { path: 'account/orders', element: el(React.lazy(() => import('./src/app/components/templates/AccountLayoutRetro').then(m => ({ default: m.AccountLayoutRetro })))) },
      { path: 'account/addresses', element: el(React.lazy(() => import('./src/app/components/templates/AccountLayoutRetro').then(m => ({ default: m.AccountLayoutRetro })))) },
      { path: 'account/loyalty', element: el(React.lazy(() => import('./src/app/components/templates/AccountLayoutRetro').then(m => ({ default: m.AccountLayoutRetro })))) },
      { path: 'account/dashboard-widgets', element: el(React.lazy(() => import('./src/app/components/templates/AccountDashboardWidgets').then(m => ({ default: m.AccountDashboardWidgets })))) },
      { path: 'wishlist', element: el(React.lazy(() => import('./src/app/components/templates/PageWishlistRetro').then(m => ({ default: m.PageWishlistRetro })))) },

      // ── Blog & Content ──
      { path: 'blog', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveBlogRetro').then(m => ({ default: m.ArchiveBlogRetro })))) },
      { path: 'blog/format/audio', element: el(React.lazy(() => import('./src/app/components/templates/blog/ArchiveAudio').then(m => ({ default: m.ArchiveAudio })))) },
      { path: 'blog/format/video', element: el(React.lazy(() => import('./src/app/components/templates/blog/ArchiveVideo').then(m => ({ default: m.ArchiveVideo })))) },
      { path: 'blog/format/gallery', element: el(React.lazy(() => import('./src/app/components/templates/blog/ArchiveGallery').then(m => ({ default: m.ArchiveGallery })))) },
      { path: 'blog/format/aside', element: el(React.lazy(() => import('./src/app/components/templates/blog/ArchiveAside').then(m => ({ default: m.ArchiveAside })))) },
      { path: 'blog/category/:categorySlug', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveBlogRetro').then(m => ({ default: m.ArchiveBlogRetro })))) },
      { path: 'blog/author/:authorSlug', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveBlogRetro').then(m => ({ default: m.ArchiveBlogRetro })))) },
      { path: 'blog/tag/:tagSlug', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveBlogRetro').then(m => ({ default: m.ArchiveBlogRetro })))) },
      { path: 'blog/:slug/sidebar', element: el(React.lazy(() => import('./src/app/components/templates/SinglePostWithSidebar').then(m => ({ default: m.SinglePostWithSidebar })))) },
      { path: 'blog/:slug/fullwidth', element: el(React.lazy(() => import('./src/app/components/templates/SinglePostFullWidth').then(m => ({ default: m.SinglePostFullWidth })))) },
      { path: 'blog/:slug/standard', element: el(React.lazy(() => import('./src/app/components/templates/TemplateSingleStandard').then(m => ({ default: m.TemplateSingleStandard })))) },
      { path: 'blog/:slug/audio', element: el(React.lazy(() => import('./src/app/components/templates/TemplateSingleAudio').then(m => ({ default: m.TemplateSingleAudio })))) },
      { path: 'blog/:slug/video', element: el(React.lazy(() => import('./src/app/components/templates/TemplateSingleVideo').then(m => ({ default: m.TemplateSingleVideo })))) },
      { path: 'blog/:slug/gallery', element: el(React.lazy(() => import('./src/app/components/templates/TemplateSingleGallery').then(m => ({ default: m.TemplateSingleGallery })))) },
      { path: 'blog/:slug/aside', element: el(React.lazy(() => import('./src/app/components/templates/TemplateSingleAside').then(m => ({ default: m.TemplateSingleAside })))) },
      { path: 'blog/:slug', element: el(React.lazy(() => import('./src/app/components/templates/SinglePostRetro').then(m => ({ default: m.SinglePostRetro })))) },

      // ── About & Company ──
      { path: 'about', element: el(React.lazy(() => import('./src/app/components/templates/PageAboutRetro').then(m => ({ default: m.PageAboutRetro })))) },
      { path: 'about/our-story', element: el(React.lazy(() => import('./src/app/components/templates/PageOurStoryRetro').then(m => ({ default: m.PageOurStoryRetro })))) },
      { path: 'about/team', element: el(React.lazy(() => import('./src/app/components/templates/PageTeamRetro').then(m => ({ default: m.PageTeamRetro })))) },
      { path: 'about/sustainability', element: el(React.lazy(() => import('./src/app/components/templates/PageSustainabilityRetro').then(m => ({ default: m.PageSustainabilityRetro })))) },
      { path: 'about/careers', element: el(React.lazy(() => import('./src/app/components/templates/PageCareersRetro').then(m => ({ default: m.PageCareersRetro })))) },
      { path: 'stores', element: el(React.lazy(() => import('./src/app/components/templates/PageStoresRetro').then(m => ({ default: m.PageStoresRetro })))) },
      { path: 'press', element: el(React.lazy(() => import('./src/app/components/templates/PagePressMediaRetro').then(m => ({ default: m.PagePressMediaRetro })))) },

      // ── Subscriptions & Memberships ──
      { path: 'subscriptions', element: el(React.lazy(() => import('./src/app/components/templates/SubscriptionLandingRetro').then(m => ({ default: m.SubscriptionLandingRetro })))) },
      { path: 'subscription/:subscriptionId', element: el(React.lazy(() => import('./src/app/components/templates/SingleSubscription').then(m => ({ default: m.SingleSubscription })))) },
      { path: 'memberships', element: el(React.lazy(() => import('./src/app/components/templates/MembershipLandingRetro').then(m => ({ default: m.MembershipLandingRetro })))) },
      { path: 'membership/:membershipId', element: el(React.lazy(() => import('./src/app/components/templates/SingleMembership').then(m => ({ default: m.SingleMembership })))) },

      // ── Promotions & Sales ──
      { path: 'promotions', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'promotions/flash-sale', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'promotions/seasonal', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'promotions/bundles', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'promotions/clearance', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'promotions/winter-clearance', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'promotions/buy-2-get-1', element: el(React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })))) },
      { path: 'loyalty', element: el(React.lazy(() => import('./src/app/components/templates/PageLoyaltyRetro').then(m => ({ default: m.PageLoyaltyRetro })))) },

      // ── Gaming & Rewards ──
      { path: 'achievements', element: el(React.lazy(() => import('./src/app/components/templates/PageAchievementsRetro').then(m => ({ default: m.PageAchievementsRetro })))) },
      { path: 'leaderboard', element: el(React.lazy(() => import('./src/app/components/templates/PageLeaderboardRetro').then(m => ({ default: m.PageLeaderboardRetro })))) },
      { path: 'new-releases', element: el(React.lazy(() => import('./src/app/components/templates/PageNewReleasesRetro').then(m => ({ default: m.PageNewReleasesRetro })))) },
      { path: 'pre-orders', element: el(React.lazy(() => import('./src/app/components/templates/PageNewReleasesRetro').then(m => ({ default: m.PageNewReleasesRetro })))) },
      { path: 'bundle-builder', element: el(React.lazy(() => import('./src/app/components/templates/PageBundleBuilderRetro').then(m => ({ default: m.PageBundleBuilderRetro })))) },

      // ── Community & Engagement ──
      { path: 'community', element: el(React.lazy(() => import('./src/app/components/templates/PageCommunityRetro').then(m => ({ default: m.PageCommunityRetro })))) },
      { path: 'referral', element: el(React.lazy(() => import('./src/app/components/templates/PageReferralRetro').then(m => ({ default: m.PageReferralRetro })))) },
      { path: 'events', element: el(React.lazy(() => import('./src/app/components/templates/PageEventsRetro').then(m => ({ default: m.PageEventsRetro })))) },

      // ── Help & Support ──
      { path: 'help', element: el(React.lazy(() => import('./src/app/components/templates/PageHelpCenterRetro').then(m => ({ default: m.PageHelpCenterRetro })))) },
      { path: 'shipping-returns', element: el(React.lazy(() => import('./src/app/components/templates/PageShippingReturnsRetro').then(m => ({ default: m.PageShippingReturnsRetro })))) },
      { path: 'shipping', element: el(React.lazy(() => import('./src/app/components/templates/PageShippingReturnsRetro').then(m => ({ default: m.PageShippingReturnsRetro })))) },
      { path: 'returns', element: el(React.lazy(() => import('./src/app/components/templates/PageReturnsPortalRetro').then(m => ({ default: m.PageReturnsPortalRetro })))) },
      { path: 'refunds', element: el(React.lazy(() => import('./src/app/components/templates/PageRefundsRetro').then(m => ({ default: m.PageRefundsRetro })))) },
      { path: 'size-guide', element: el(React.lazy(() => import('./src/app/components/templates/PageSizeGuideRetro').then(m => ({ default: m.PageSizeGuideRetro })))) },
      { path: 'chat', element: el(React.lazy(() => import('./src/app/components/templates/PageChat').then(m => ({ default: m.PageChat })))) },
      { path: 'buying-guide', element: el(React.lazy(() => import('./src/app/components/templates/PageBuyingGuideRetro').then(m => ({ default: m.PageBuyingGuideRetro })))) },
      { path: 'care-instructions', element: el(React.lazy(() => import('./src/app/components/templates/PageCareInstructionsRetro').then(m => ({ default: m.PageCareInstructionsRetro })))) },
      { path: 'warranty', element: el(React.lazy(() => import('./src/app/components/templates/PageWarrantyRetro').then(m => ({ default: m.PageWarrantyRetro })))) },
      { path: 'accessibility', element: el(React.lazy(() => import('./src/app/components/templates/PageAccessibilityStatementRetro').then(m => ({ default: m.PageAccessibilityStatementRetro })))) },
      { path: 'rewards', element: el(React.lazy(() => import('./src/app/components/templates/PageRewardProgramRetro').then(m => ({ default: m.PageRewardProgramRetro })))) },
      { path: 'affiliate', element: el(React.lazy(() => import('./src/app/components/templates/PageAffiliateProgramRetro').then(m => ({ default: m.PageAffiliateProgramRetro })))) },
      { path: 'reviews', element: el(React.lazy(() => import('./src/app/components/templates/PageReviewsRetro').then(m => ({ default: m.PageReviewsRetro })))) },

      // ── Legal & Policies ──
      { path: 'privacy-policy', element: el(React.lazy(() => import('./src/app/components/templates/PagePrivacyPolicyRetro').then(m => ({ default: m.PagePrivacyPolicyRetro })))) },
      { path: 'terms-and-conditions', element: el(React.lazy(() => import('./src/app/components/templates/PageTermsConditionsRetro').then(m => ({ default: m.PageTermsConditionsRetro })))) },
      { path: 'privacy', element: el(React.lazy(() => import('./src/app/components/templates/PagePrivacyPolicyRetro').then(m => ({ default: m.PagePrivacyPolicyRetro })))) },
      { path: 'terms', element: el(React.lazy(() => import('./src/app/components/templates/PageTermsConditionsRetro').then(m => ({ default: m.PageTermsConditionsRetro })))) },

      // ── Error Pages (Demo) ──
      { path: 'error/404', element: el(React.lazy(() => import('./src/app/components/templates/PageNotFoundRetro').then(m => ({ default: m.PageNotFoundRetro })))) },
      { path: 'error/500', element: el(React.lazy(() => import('./src/app/components/templates/PageNotFoundRetro').then(m => ({ default: m.PageNotFoundRetro })))) },
      { path: 'error/503', element: el(React.lazy(() => import('./src/app/components/templates/PageNotFoundRetro').then(m => ({ default: m.PageNotFoundRetro })))) },
      { path: 'error/network', element: el(React.lazy(() => import('./src/app/components/templates/PageNotFoundRetro').then(m => ({ default: m.PageNotFoundRetro })))) },

      // ── Development Tools ──
      {
        path: 'dev-tools',
        element: el(React.lazy(() => import('./src/app/components/templates/DevToolsLayout').then(m => ({ default: m.DevToolsLayout })))),
        children: [
          { index: true, element: el(React.lazy(() => import('./src/app/components/pages/DevToolsIndex').then(m => ({ default: m.DevToolsIndex })))) },
          { path: 'style-guide', element: el(React.lazy(() => import('./src/app/components/templates/PageStyleGuide').then(m => ({ default: m.PageStyleGuide })))) },
          { path: 'showcase', element: el(React.lazy(() => import('./src/app/components/templates/PageShowcase').then(m => ({ default: m.PageShowcase })))) },
          { path: 'forms', element: el(React.lazy(() => import('./src/app/components/templates/PageFormShowcase').then(m => ({ default: m.PageFormShowcase })))) },
          { path: 'icons', element: el(React.lazy(() => import('./src/app/components/templates/PageIconLibrary').then(m => ({ default: m.PageIconLibrary })))) },
          { path: 'api', element: el(React.lazy(() => import('./src/app/components/templates/PageComponentAPI').then(m => ({ default: m.PageComponentAPI })))) },
          { path: 'live-preview', element: el(React.lazy(() => import('./src/app/components/templates/PageLivePreview').then(m => ({ default: m.PageLivePreview })))) },
          { path: 'performance', element: el(React.lazy(() => import('./src/app/components/templates/PagePerformance').then(m => ({ default: m.PagePerformance })))) },
        ],
      },
      { path: 'template-tester', element: el(React.lazy(() => import('./src/app/components/templates/FrontPageRetro').then(m => ({ default: m.FrontPageRetro })))) },
      { path: 'campaign/product-launch', element: el(React.lazy(() => import('./src/app/components/templates/LongFormSalesPage').then(m => ({ default: m.LongFormSalesPage })))) },
      { path: 'social/:platform', element: el(React.lazy(() => import('./src/app/components/templates/SocialRedirect').then(m => ({ default: m.SocialRedirect })))) },

      // ── Retro Demo ──
      { path: 'retro-demo', element: el(React.lazy(() => import('./src/app/components/templates/RetroDemoIndex').then(m => ({ default: m.RetroDemoIndex })))) },
      { path: 'retro-demo/landing-page', element: el(React.lazy(() => import('./src/app/components/templates/RetroDemoLandingPage').then(m => ({ default: m.RetroDemoLandingPage })))) },

      // ── Catch-all 404 ──
      { path: '*', element: el(React.lazy(() => import('./src/app/components/templates/PageNotFoundRetro').then(m => ({ default: m.PageNotFoundRetro })))) },
    ],
  },
]);
