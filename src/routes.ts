/**
 * routes.ts - Router Configuration
 * 
 * Defines the application route tree for React Router Data mode.
 * Optimized for Figma Make parser:
 * 1. No arrow functions (Uses function() {})
 * 2. No spread operators
 * 3. No JSX inside route objects
 * 4. Categorized route arrays combined via loops
 * 5. ASCII characters only
 * 6. Top-level static imports ONLY (dynamic imports fail in preview)
 * 7. No destructured imports (Legacy syntax)
 */

import React from 'react';
import * as ReactRouterModule from 'react-router';
var createBrowserRouter = ReactRouterModule.createBrowserRouter;
var Navigate = ReactRouterModule.Navigate;

import * as RootLayoutModule from './src/app/RootLayout';
var RootLayout = RootLayoutModule.RootLayout;

// --- Static Imports for all Route Components ----------------------------------
import * as FrontPageMod from './src/app/components/templates/FrontPage';
import * as ArchiveProductMod from './src/app/components/templates/ArchiveProduct';
import * as ProductSearchResultsMod from './src/app/components/templates/ProductSearchResults';
import * as ShopWithSidebarMod from './src/app/components/templates/ShopWithSidebar';
import * as SingleProductMod from './src/app/components/templates/SingleProduct';
import * as SingleProductStickyMod from './src/app/components/templates/SingleProductSticky';
import * as VariableProductMod from './src/app/components/templates/VariableProduct';
import * as PageDealsMod from './src/app/components/templates/PageDeals';
import * as PageGiftCardsMod from './src/app/components/templates/PageGiftCards';
import * as ProductComparisonMod from './src/app/components/patterns/ProductComparison';

import * as DashboardMod from './src/app/components/patterns/account/Dashboard';
import * as OrdersMod from './src/app/components/patterns/account/Orders';
import * as OrderViewPatternMod from './src/app/components/patterns/account/OrderView';
import * as WishlistPatternMod from './src/app/components/patterns/account/Wishlist';
import * as AddressesMod from './src/app/components/patterns/account/Addresses';
import * as AccountDetailsMod from './src/app/components/patterns/account/AccountDetails';
import * as AccountLoyaltyMod from './src/app/components/patterns/account/AccountLoyalty';
import * as PageContactMod from './src/app/components/templates/PageContact';

import * as LoginRegisterMod from './src/app/components/templates/PageLogin';
import * as AccountLayoutMod from './src/app/components/templates/AccountLayout';
import * as PageWishlistMod from './src/app/components/templates/PageWishlist';
import * as AccountDashboardWidgetsMod from './src/app/components/templates/AccountDashboardWidgets';

import * as PageCartMod from './src/app/components/templates/PageCart';
import * as PageCheckoutMod from './src/app/components/templates/PageCheckout';
import * as PageTrackOrderMod from './src/app/components/templates/PageTrackOrder';

import * as BlogIndexMod from './src/app/components/templates/BlogIndex';
import * as ArchiveCategoryMod from './src/app/components/templates/ArchiveCategory';
import * as ArchiveAuthorMod from './src/app/components/templates/ArchiveAuthor';
import * as TagArchiveMod from './src/app/components/blog/TagArchive';
import * as SinglePostMod from './src/app/components/templates/SinglePost';
import * as SinglePostWithSidebarMod from './src/app/components/templates/SinglePostWithSidebar';
import * as SinglePostFullWidthMod from './src/app/components/templates/SinglePostFullWidth';
import * as ArchiveAudioMod from './src/app/components/templates/blog/ArchiveAudio';
import * as ArchiveVideoMod from './src/app/components/templates/blog/ArchiveVideo';
import * as ArchiveGalleryMod from './src/app/components/templates/blog/ArchiveGallery';
import * as ArchiveAsideMod from './src/app/components/templates/blog/ArchiveAside';
import * as TemplateSingleStandardMod from './src/app/components/templates/TemplateSingleStandard';
import * as TemplateSingleAudioMod from './src/app/components/templates/TemplateSingleAudio';
import * as TemplateSingleVideoMod from './src/app/components/templates/TemplateSingleVideo';
import * as TemplateSingleGalleryMod from './src/app/components/templates/TemplateSingleGallery';
import * as TemplateSingleAsideMod from './src/app/components/templates/TemplateSingleAside';

import * as PageAboutMod from './src/app/components/templates/PageAbout';
import * as PageOurStoryMod from './src/app/components/templates/PageOurStory';
import * as PageTeamMod from './src/app/components/templates/PageTeam';
import * as PageSustainabilityMod from './src/app/components/templates/PageSustainability';
import * as PageCareersMod from './src/app/components/templates/PageCareers';
import * as PageStoresMod from './src/app/components/templates/PageStores';
import * as PagePressMediaMod from './src/app/components/templates/PagePressMedia';

import * as PageFAQMod from './src/app/components/templates/PageFAQ';
import * as PageHelpCenterMod from './src/app/components/templates/PageHelpCenter';
import * as PageChatMod from './src/app/components/templates/PageChat';
import * as PageShippingReturnsMod from './src/app/components/templates/PageShippingReturns';
import * as PageSizeGuideMod from './src/app/components/templates/PageSizeGuide';
import * as PageReturnsPortalMod from './src/app/components/templates/PageReturnsPortal';
import * as PageBuyingGuideMod from './src/app/components/templates/PageBuyingGuide';
import * as PageCareInstructionsMod from './src/app/components/templates/PageCareInstructions';
import * as PageWarrantyMod from './src/app/components/templates/PageWarranty';
import * as PageAccessibilityStatementMod from './src/app/components/templates/PageAccessibilityStatement';
import * as PageRewardProgramMod from './src/app/components/templates/PageRewardProgram';
import * as PageAffiliateProgramMod from './src/app/components/templates/PageAffiliateProgram';
import * as PageReviewsMod from './src/app/components/templates/PageReviews';

import * as PagePrivacyPolicyMod from './src/app/components/templates/PagePrivacyPolicy';
import * as PageTermsConditionsMod from './src/app/components/templates/PageTermsConditions';

import * as PageLoyaltyMod from './src/app/components/templates/PageLoyalty';
import * as SubscriptionLandingMod from './src/app/components/templates/SubscriptionLanding';
import * as SingleSubscriptionMod from './src/app/components/templates/SingleSubscription';
import * as MembershipLandingMod from './src/app/components/templates/MembershipLanding';
import * as SingleMembershipMod from './src/app/components/templates/SingleMembership';
import * as PageNewsletterMod from './src/app/components/templates/PageNewsletter';
import * as PageNotFoundMod from './src/app/components/templates/PageNotFound';
import * as LongFormSalesPageMod from './src/app/components/templates/LongFormSalesPage';
import * as SocialRedirectMod from './src/app/components/templates/SocialRedirect';
import * as PageRefundsMod from './src/app/components/templates/PageRefunds';
import * as SitemapMod from './src/app/components/pages/Sitemap';

import * as DevToolsIndexMod from './src/app/components/pages/DevToolsIndex';
import * as PageStyleGuideMod from './src/app/components/templates/PageStyleGuide';
import * as PageShowcaseMod from './src/app/components/templates/PageShowcase';
import * as PageIconLibraryMod from './src/app/components/templates/PageIconLibrary';
import * as PageComponentAPIMod from './src/app/components/templates/PageComponentAPI';
import * as PageLivePreviewMod from './src/app/components/templates/PageLivePreview';
import * as PagePerformanceMod from './src/app/components/templates/PagePerformance';
import * as PageFormShowcaseMod from './src/app/components/templates/PageFormShowcase';
import * as DevToolsLayoutMod from './src/app/components/templates/DevToolsLayout';

// Helper to resolve the correct component export safely
function resolveComp(mod, exportName) {
  if (exportName && mod[exportName]) return mod[exportName];
  if (mod.default) return mod.default;
  var keys = Object.keys(mod);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] !== 'default' && typeof mod[keys[i]] === 'function') {
      return mod[keys[i]];
    }
  }
  return mod; // Fallback
}

// --- Redirect Components ----------------------------------------------------
function RedirectDashboard() { return React.createElement(Navigate, { to: "/account/dashboard", replace: true }); }
function RedirectAccount() { return React.createElement(Navigate, { to: "/account", replace: true }); }
function RedirectPrivacy() { return React.createElement(Navigate, { to: "/privacy-policy", replace: true }); }
function RedirectTerms() { return React.createElement(Navigate, { to: "/terms-and-conditions", replace: true }); }

// --- Route Definitions ------------------------------------------------------

// 1. Shop Routes
var shopRoutes = [
  { path: 'shop', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'shop/all', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'shop/all-products', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'shop/collections', Component: resolveComp(FrontPageMod, 'FrontPage') },
  { path: 'shop/category/:categorySlug', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'shop/tag/:tagSlug', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'shop/search', Component: resolveComp(ProductSearchResultsMod, 'ProductSearchResults') },
  { path: 'shop/filtered', Component: resolveComp(ShopWithSidebarMod, 'ShopWithSidebar') },
  { path: 'search', Component: resolveComp(ProductSearchResultsMod, 'ProductSearchResults') },
  { path: 'product/:id', Component: resolveComp(SingleProductMod, null) },
  { path: 'product/:id/sticky', Component: resolveComp(SingleProductStickyMod, 'SingleProductSticky') },
  { path: 'variable-product/:id', Component: resolveComp(VariableProductMod, null) },
  { path: 'deals', Component: resolveComp(PageDealsMod, 'PageDeals') },
  { path: 'new-arrivals', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'best-sellers', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'sale', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'gift-cards', Component: resolveComp(PageGiftCardsMod, 'PageGiftCards') },
  { path: 'compare', Component: resolveComp(ProductComparisonMod, 'ProductComparison') }
];

// 2. Account Routes
var accountChildren = [
  { index: true, Component: RedirectDashboard },
  { path: 'dashboard', Component: resolveComp(DashboardMod, 'Dashboard') },
  { path: 'orders', Component: resolveComp(OrdersMod, 'Orders') },
  { path: 'orders/:orderId', Component: resolveComp(OrderViewPatternMod, 'OrderViewPattern') },
  { path: 'wishlist', Component: resolveComp(WishlistPatternMod, 'WishlistPattern') },
  { path: 'addresses', Component: resolveComp(AddressesMod, 'Addresses') },
  { path: 'details', Component: resolveComp(AccountDetailsMod, 'AccountDetails') },
  { path: 'loyalty', Component: resolveComp(AccountLoyaltyMod, 'AccountLoyalty') },
  { path: 'reset-password', Component: resolveComp(PageContactMod, 'PageContact') },
  { path: '*', Component: RedirectDashboard }
];

var accountRoutes = [
  { path: 'account/login', Component: resolveComp(LoginRegisterMod, 'LoginRegister') },
  {
    path: 'account',
    Component: resolveComp(AccountLayoutMod, 'AccountLayout'),
    children: accountChildren
  },
  { path: 'my-account', Component: RedirectAccount },
  { path: 'wishlist', Component: resolveComp(PageWishlistMod, 'PageWishlist') },
  { path: 'account/dashboard-widgets', Component: resolveComp(AccountDashboardWidgetsMod, 'AccountDashboardWidgets') }
];

// 3. Checkout Routes
var checkoutRoutes = [
  { path: 'cart', Component: resolveComp(PageCartMod, 'PageCart') },
  { path: 'checkout', Component: resolveComp(PageCheckoutMod, 'PageCheckout') },
  { path: 'order-confirmation', Component: resolveComp(PageCheckoutMod, 'PageCheckout') },
  { path: 'track-order', Component: resolveComp(PageTrackOrderMod, 'PageTrackOrder') }
];

// 4. Blog Routes
var blogRoutes = [
  { path: 'blog', Component: resolveComp(BlogIndexMod, 'BlogIndex') },
  { path: 'blog/category/:categorySlug', Component: resolveComp(ArchiveCategoryMod, 'ArchiveCategory') },
  { path: 'blog/author/:authorSlug', Component: resolveComp(ArchiveAuthorMod, 'ArchiveAuthor') },
  { path: 'blog/tag/:tagSlug', Component: resolveComp(TagArchiveMod, 'TagArchive') },
  { path: 'blog/:slug', Component: resolveComp(SinglePostMod, 'SinglePost') },
  { path: 'blog/:slug/sidebar', Component: resolveComp(SinglePostWithSidebarMod, 'SinglePostWithSidebar') },
  { path: 'blog/:slug/fullwidth', Component: resolveComp(SinglePostFullWidthMod, 'SinglePostFullWidth') },
  { path: 'blog/format/audio', Component: resolveComp(ArchiveAudioMod, 'ArchiveAudio') },
  { path: 'blog/format/video', Component: resolveComp(ArchiveVideoMod, 'ArchiveVideo') },
  { path: 'blog/format/gallery', Component: resolveComp(ArchiveGalleryMod, 'ArchiveGallery') },
  { path: 'blog/format/aside', Component: resolveComp(ArchiveAsideMod, 'ArchiveAside') },
  { path: 'blog/:slug/standard', Component: resolveComp(TemplateSingleStandardMod, 'TemplateSingleStandard') },
  { path: 'blog/:slug/audio', Component: resolveComp(TemplateSingleAudioMod, 'TemplateSingleAudio') },
  { path: 'blog/:slug/video', Component: resolveComp(TemplateSingleVideoMod, 'TemplateSingleVideo') },
  { path: 'blog/:slug/gallery', Component: resolveComp(TemplateSingleGalleryMod, 'TemplateSingleGallery') },
  { path: 'blog/:slug/aside', Component: resolveComp(TemplateSingleAsideMod, 'TemplateSingleAside') }
];

// 5. About & Support Routes
var aboutRoutes = [
  { path: 'about', Component: resolveComp(PageAboutMod, 'PageAbout') },
  { path: 'about/our-story', Component: resolveComp(PageOurStoryMod, 'PageOurStory') },
  { path: 'about/team', Component: resolveComp(PageTeamMod, 'PageTeam') },
  { path: 'about/sustainability', Component: resolveComp(PageSustainabilityMod, 'PageSustainability') },
  { path: 'about/careers', Component: resolveComp(PageCareersMod, 'PageCareers') },
  { path: 'contact', Component: resolveComp(PageContactMod, 'PageContact') },
  { path: 'stores', Component: resolveComp(PageStoresMod, 'PageStores') },
  { path: 'press', Component: resolveComp(PagePressMediaMod, 'PagePressMedia') }
];

var supportRoutes = [
  { path: 'faq', Component: resolveComp(PageFAQMod, 'PageFAQ') },
  { path: 'help', Component: resolveComp(PageHelpCenterMod, 'PageHelpCenter') },
  { path: 'chat', Component: resolveComp(PageChatMod, 'PageChat') },
  { path: 'shipping-returns', Component: resolveComp(PageShippingReturnsMod, 'PageShippingReturns') },
  { path: 'size-guide', Component: resolveComp(PageSizeGuideMod, 'PageSizeGuide') },
  { path: 'returns', Component: resolveComp(PageReturnsPortalMod, 'PageReturnsPortal') },
  { path: 'refunds', Component: resolveComp(PageRefundsMod, 'PageRefunds') },
  { path: 'buying-guide', Component: resolveComp(PageBuyingGuideMod, 'PageBuyingGuide') },
  { path: 'care-instructions', Component: resolveComp(PageCareInstructionsMod, 'PageCareInstructions') },
  { path: 'warranty', Component: resolveComp(PageWarrantyMod, 'PageWarranty') },
  { path: 'accessibility', Component: resolveComp(PageAccessibilityStatementMod, 'PageAccessibilityStatement') },
  { path: 'rewards', Component: resolveComp(PageRewardProgramMod, 'PageRewardProgram') },
  { path: 'affiliate', Component: resolveComp(PageAffiliateProgramMod, 'PageAffiliateProgram') },
  { path: 'reviews', Component: resolveComp(PageReviewsMod, 'PageReviews') }
];

// 6. Legal Routes
var legalRoutes = [
  { path: 'privacy-policy', Component: resolveComp(PagePrivacyPolicyMod, 'PagePrivacyPolicy') },
  { path: 'terms-and-conditions', Component: resolveComp(PageTermsConditionsMod, 'PageTermsConditions') },
  { path: 'privacy', Component: RedirectPrivacy },
  { path: 'policies', Component: RedirectPrivacy },
  { path: 'terms', Component: RedirectTerms },
  { path: 'legal/privacy', Component: RedirectPrivacy },
  { path: 'legal/terms', Component: RedirectTerms },
  { path: 'legal/privacy-policy', Component: RedirectPrivacy },
  { path: 'legal/terms-conditions', Component: RedirectTerms }
];

// 7. Promo & Misc Routes
var miscRoutes = [
  { path: 'promotions', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'promotions/flash-sale', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'promotions/seasonal', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'promotions/bundles', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'promotions/clearance', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'promotions/winter-clearance', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'promotions/buy-2-get-1', Component: resolveComp(ArchiveProductMod, 'ArchiveProduct') },
  { path: 'loyalty', Component: resolveComp(PageLoyaltyMod, 'PageLoyalty') },
  { path: 'subscriptions', Component: resolveComp(SubscriptionLandingMod, 'SubscriptionLanding') },
  { path: 'subscription/:id', Component: resolveComp(SingleSubscriptionMod, 'SingleSubscription') },
  { path: 'memberships', Component: resolveComp(MembershipLandingMod, 'MembershipLanding') },
  { path: 'membership/:id', Component: resolveComp(SingleMembershipMod, 'SingleMembership') },
  { path: 'newsletter', Component: resolveComp(PageNewsletterMod, 'PageNewsletter') },
  { path: 'campaign/product-launch', Component: resolveComp(LongFormSalesPageMod, 'LongFormSalesPage') },
  { path: 'social/:platform', Component: resolveComp(SocialRedirectMod, null) },
  { path: 'template-tester', Component: resolveComp(FrontPageMod, 'FrontPage') },
  { path: 'sitemap', Component: resolveComp(SitemapMod, 'Sitemap') }
];

// 8. Dev Tools Routes
var devRoutes = [
  {
    path: 'dev-tools',
    Component: resolveComp(DevToolsLayoutMod, 'DevToolsLayout'),
    children: [
      { index: true, Component: resolveComp(DevToolsIndexMod, 'DevToolsIndex') },
      { path: 'style-guide', Component: resolveComp(PageStyleGuideMod, null) },
      { path: 'showcase', Component: resolveComp(PageShowcaseMod, null) },
      { path: 'forms', Component: resolveComp(PageFormShowcaseMod, 'PageFormShowcase') },
      { path: 'icons', Component: resolveComp(PageIconLibraryMod, null) },
      { path: 'api', Component: resolveComp(PageComponentAPIMod, null) },
      { path: 'live-preview', Component: resolveComp(PageLivePreviewMod, null) },
      { path: 'performance', Component: resolveComp(PagePerformanceMod, null) }
    ]
  }
];

// 9. Error Routes
var errorRoutes = [
  { path: 'error/404', Component: resolveComp(PageNotFoundMod, 'PageNotFound') },
  { path: 'error/500', Component: resolveComp(PageNotFoundMod, 'PageNotFound') },
  { path: 'error/503', Component: resolveComp(PageNotFoundMod, 'PageNotFound') },
  { path: 'error/network', Component: resolveComp(PageNotFoundMod, 'PageNotFound') },
  { path: '*', Component: resolveComp(PageNotFoundMod, 'PageNotFound') }
];

function HydrateFallback() {
  var spinner = React.createElement('div', { key: 'spinner', className: 'wp-page-loading__spinner' });
  var text = React.createElement('small', { key: 'text', className: 'wp-page-loading__text' }, 'Loading...');
  var inner = React.createElement('div', {
    key: 'inner',
    className: 'wp-block-group wp-block-group--vertical wp-block-group--spacing-md has-text-align-center'
  }, [spinner, text]);
  return React.createElement('div', { className: 'wp-page-loading' }, [inner]);
}

// Combine all route groups
var allChildren = [];
function addRoutes(routes) {
  for (var i = 0; i < routes.length; i++) {
    allChildren.push(routes[i]);
  }
}

addRoutes([{ index: true, Component: resolveComp(FrontPageMod, 'FrontPage') }]);
addRoutes(shopRoutes);
addRoutes(accountRoutes);
addRoutes(checkoutRoutes);
addRoutes(blogRoutes);
addRoutes(aboutRoutes);
addRoutes(supportRoutes);
addRoutes(legalRoutes);
addRoutes(miscRoutes);
addRoutes(devRoutes);
addRoutes(errorRoutes);

var routerConfig = [
  {
    path: '/',
    Component: RootLayout,
    HydrateFallback: HydrateFallback,
    children: allChildren
  }
];

export var router = createBrowserRouter(routerConfig);