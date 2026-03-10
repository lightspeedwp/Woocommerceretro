/**
 * Sitemap Page - Visual Route Testing
 */

import React from 'react';
import * as ReactRouterModule from 'react-router';
import { House, Storefront, ShoppingBag, User, BookOpenText, Info, Tag, Question } from '@phosphor-icons/react';

var useState = React.useState;
var Link = ReactRouterModule.Link;

export function Sitemap() {
  var _st = useState('');
  var searchTerm = _st[0];
  var setSearchTerm = _st[1];
  var _se = useState(null);
  var expandedSection = _se[0];
  var setExpandedSection = _se[1];

  var routeSections = [
    {
      title: 'Core Pages',
      icon: React.createElement(House, { size: 20, weight: 'duotone' }),
      color: 'wp-color-primary',
      routes: [
        { path: '/', label: 'Homepage', description: 'Main landing page' },
        { path: '/search', label: 'Search', description: 'Global search' },
        { path: '/contact', label: 'Contact', description: 'Contact form' },
        { path: '/faq', label: 'FAQ', description: 'Frequently asked questions' },
        { path: '/newsletter', label: 'Newsletter', description: 'Newsletter subscription' },
        { path: '/sitemap', label: 'Sitemap', description: 'This page - all routes' },
      ]
    },
    {
      title: 'Shop & Products',
      icon: React.createElement(Storefront, { size: 20, weight: 'duotone' }),
      color: 'wp-color-accent',
      routes: [
        { path: '/shop', label: 'Shop - All Products', description: 'Main shop archive' },
        { path: '/shop/all', label: 'Shop - All (Alt)', description: 'Alternative shop URL' },
        { path: '/shop/all-products', label: 'All Products List', description: 'Complete product listing' },
        { path: '/shop/collections', label: 'Collections', description: 'Product collections' },
        { path: '/shop/filtered', label: 'Shop with Sidebar', description: 'Shop with filter sidebar' },
        { path: '/shop/search', label: 'Product Search', description: 'Search products' },
        { path: '/new-arrivals', label: 'New Arrivals', description: 'Latest products' },
        { path: '/best-sellers', label: 'Best Sellers', description: 'Top selling products' },
        { path: '/sale', label: 'Sale', description: 'Products on sale' },
        { path: '/deals', label: 'Deals', description: 'Current deals and offers' },
        { path: '/gift-cards', label: 'Gift Cards', description: 'Gift card purchase' },
        { path: '/compare', label: 'Compare Products', description: 'Product comparison tool' },
        { path: '/shop/category/clothing', label: 'Category: Clothing', description: 'Example category', dynamic: true },
        { path: '/shop/category/accessories', label: 'Category: Accessories', description: 'Example category', dynamic: true },
        { path: '/shop/category/home', label: 'Category: Home & Living', description: 'Example category', dynamic: true },
        { path: '/shop/tag/eco-friendly', label: 'Tag: Eco-Friendly', description: 'Example product tag', dynamic: true },
        { path: '/product/prod-001', label: 'Single Product', description: 'Example product page', dynamic: true },
        { path: '/product/prod-001/sticky', label: 'Product (Sticky)', description: 'Product with sticky buy panel', dynamic: true },
        { path: '/variable-product/prod-002', label: 'Variable Product', description: 'Product with variations', dynamic: true },
      ]
    },
    {
      title: 'Cart & Checkout',
      icon: React.createElement(ShoppingBag, { size: 20, weight: 'duotone' }),
      color: 'wp-color-success',
      routes: [
        { path: '/cart', label: 'Shopping Cart', description: 'View cart' },
        { path: '/checkout', label: 'Checkout', description: 'Checkout page' },
        { path: '/order-confirmation', label: 'Order Confirmation', description: 'Order success page' },
        { path: '/track-order', label: 'Track Order', description: 'Order tracking' },
      ]
    },
    {
      title: 'Account & Profile',
      icon: React.createElement(User, { size: 20, weight: 'duotone' }),
      color: 'wp-color-info',
      routes: [
        { path: '/account/login', label: 'Login / Register', description: 'Authentication page' },
        { path: '/account', label: 'Account Dashboard', description: 'Redirects to /dashboard' },
        { path: '/account/dashboard', label: 'Dashboard', description: 'Account overview' },
        { path: '/account/orders', label: 'Orders', description: 'Order history' },
        { path: '/account/orders/ORD-12345', label: 'Order Details', description: 'Single order view', dynamic: true },
        { path: '/account/wishlist', label: 'Account Wishlist', description: 'Saved items' },
        { path: '/account/addresses', label: 'Addresses', description: 'Saved addresses' },
        { path: '/account/details', label: 'Account Details', description: 'Profile settings' },
        { path: '/account/loyalty', label: 'Loyalty Dashboard', description: 'Points & rewards overview' },
        { path: '/account/reset-password', label: 'Reset Password', description: 'Password reset' },
        { path: '/account/dashboard-widgets', label: 'Enhanced Dashboard', description: 'Widgets dashboard' },
        { path: '/wishlist', label: 'Wishlist (Standalone)', description: 'Standalone wishlist page' },
      ]
    },
    {
      title: 'Blog & Content',
      icon: React.createElement(BookOpenText, { size: 20, weight: 'duotone' }),
      color: 'wp-color-purple',
      routes: [
        { path: '/blog', label: 'Blog Index', description: 'All blog posts' },
        { path: '/blog/category/fashion', label: 'Category: Fashion', description: 'Example category', dynamic: true },
        { path: '/blog/category/lifestyle', label: 'Category: Lifestyle', description: 'Example category', dynamic: true },
        { path: '/blog/author/jane-smith', label: 'Author: Jane Smith', description: 'Example author', dynamic: true },
        { path: '/blog/tag/style-tips', label: 'Tag: Style Tips', description: 'Example tag', dynamic: true },
        { path: '/blog/latest-trends-2026', label: 'Single Post (Default)', description: 'Example blog post', dynamic: true },
        { path: '/blog/latest-trends-2026/sidebar', label: 'Single Post (Sidebar)', description: 'Post with sidebar', dynamic: true },
        { path: '/blog/latest-trends-2026/fullwidth', label: 'Single Post (Full Width)', description: 'Full width post', dynamic: true },
        { path: '/blog/latest-trends-2026/standard', label: 'Single Post (Standard Format)', description: 'Standard format view', dynamic: true },
        { path: '/blog/latest-trends-2026/audio', label: 'Single Post (Audio Format)', description: 'Audio/podcast format', dynamic: true },
        { path: '/blog/latest-trends-2026/video', label: 'Single Post (Video Format)', description: 'Video format view', dynamic: true },
        { path: '/blog/latest-trends-2026/gallery', label: 'Single Post (Gallery Format)', description: 'Gallery format view', dynamic: true },
        { path: '/blog/latest-trends-2026/aside', label: 'Single Post (Aside Format)', description: 'Aside/status format', dynamic: true },
      ]
    },
    {
      title: 'Blog Format Archives',
      icon: React.createElement(Headphones, { size: 20, weight: 'duotone' }),
      color: 'wp-color-purple',
      routes: [
        { path: '/blog/format/audio', label: 'Podcasts (Audio)', description: 'Audio post archive' },
        { path: '/blog/format/video', label: 'Videos', description: 'Video post archive' },
        { path: '/blog/format/gallery', label: 'Galleries', description: 'Gallery post archive' },
        { path: '/blog/format/aside', label: 'Asides', description: 'Aside/status post archive' },
      ]
    },
    {
      title: 'About & Company',
      icon: React.createElement(Info, { size: 20, weight: 'duotone' }),
      color: 'wp-color-teal',
      routes: [
        { path: '/about', label: 'About Us', description: 'Company information' },
        { path: '/about/our-story', label: 'Our Story', description: 'Brand story' },
        { path: '/about/team', label: 'Team', description: 'Meet the team' },
        { path: '/about/sustainability', label: 'Sustainability', description: 'Environmental practices' },
        { path: '/about/careers', label: 'Careers', description: 'Job openings' },
        { path: '/stores', label: 'Store Locations', description: 'Physical stores' },
        { path: '/press', label: 'Press & Media', description: 'Press kit and media resources' },
      ]
    },
    {
      title: 'Subscriptions & Memberships',
      icon: React.createElement(CreditCard, { size: 20, weight: 'duotone' }),
      color: 'wp-color-accent',
      routes: [
        { path: '/subscriptions', label: 'Subscription Plans', description: 'Browse subscription products' },
        { path: '/subscription/sub-001', label: 'Single Subscription', description: 'Example subscription page', dynamic: true },
        { path: '/memberships', label: 'Membership Plans', description: 'Browse membership tiers' },
        { path: '/membership/mem-001', label: 'Single Membership', description: 'Example membership page', dynamic: true },
      ]
    },
    {
      title: 'Promotions & Sales',
      icon: React.createElement(Tag, { size: 20, weight: 'duotone' }),
      color: 'wp-color-warning',
      routes: [
        { path: '/promotions', label: 'Promotions Hub', description: 'All promotions' },
        { path: '/promotions/flash-sale', label: 'Flash Sale', description: 'Limited time sale' },
        { path: '/promotions/seasonal', label: 'Seasonal Sale', description: 'Seasonal offers' },
        { path: '/promotions/bundles', label: 'Bundles', description: 'Product bundles' },
        { path: '/promotions/clearance', label: 'Clearance', description: 'Clearance items' },
        { path: '/promotions/winter-clearance', label: 'Winter Clearance', description: 'Winter sale (alias)' },
        { path: '/promotions/buy-2-get-1', label: 'Buy 2 Get 1', description: 'Promotion (alias)' },
        { path: '/loyalty', label: 'Loyalty Program', description: 'Rewards program' },
      ]
    },
    {
      title: 'Help & Support',
      icon: React.createElement(Question, { size: 20, weight: 'duotone' }),
      color: 'wp-color-secondary',
      routes: [
        { path: '/help', label: 'Help Center', description: 'Support hub' },
        { path: '/faq', label: 'FAQ', description: 'Frequently asked questions' },
        { path: '/shipping-returns', label: 'Shipping & Returns', description: 'Shipping info' },
        { path: '/returns', label: 'Returns Portal', description: 'Process returns' },
        { path: '/size-guide', label: 'Size Guide', description: 'Sizing information' },
        { path: '/chat', label: 'Live Chat', description: 'Customer support chat' },
        { path: '/buying-guide', label: 'Buying Guide', description: 'Product buying guide' },
        { path: '/care-instructions', label: 'Care Instructions', description: 'Product care guide' },
        { path: '/warranty', label: 'Warranty', description: 'Warranty information' },
        { path: '/accessibility', label: 'Accessibility', description: 'Accessibility statement' },
        { path: '/rewards', label: 'Rewards Program', description: 'Loyalty rewards' },
        { path: '/affiliate', label: 'Affiliate Program', description: 'Partner with us' },
        { path: '/reviews', label: 'Customer Reviews', description: 'Product reviews' },
      ]
    },
    {
      title: 'Legal & Policies',
      icon: React.createElement(ShieldCheck, { size: 20, weight: 'duotone' }),
      color: 'wp-color-gray',
      routes: [
        { path: '/privacy-policy', label: 'Privacy Policy', description: 'Privacy information' },
        { path: '/terms-and-conditions', label: 'Terms & Conditions', description: 'Terms of service' },
      ]
    },
    {
      title: 'Error Pages',
      icon: React.createElement(Warning, { size: 20, weight: 'duotone' }),
      color: 'wp-color-error',
      routes: [
        { path: '/error/404', label: '404 Not Found (Demo)', description: 'Test 404 page' },
        { path: '/error/500', label: '500 Server Error (Demo)', description: 'Test 500 page' },
        { path: '/error/503', label: '503 Maintenance (Demo)', description: 'Test maintenance page' },
        { path: '/error/network', label: 'Network Error (Demo)', description: 'Test network error' },
        { path: '/nonexistent-route', label: '404 Fallback', description: 'Test actual 404' },
      ]
    },
    {
      title: 'Development Tools',
      icon: React.createElement(Wrench, { size: 20, weight: 'duotone' }),
      color: 'wp-color-dev',
      routes: [
        { path: '/dev-tools', label: 'Dev Tools Index', description: 'Developer tools hub' },
        { path: '/dev-tools/style-guide', label: 'Style Guide', description: 'Design system reference' },
        { path: '/dev-tools/showcase', label: 'Component Showcase', description: 'Component gallery' },
        { path: '/dev-tools/forms', label: 'Form Showcase', description: 'Form elements' },
        { path: '/dev-tools/icons', label: 'Icon Library', description: 'Available icons' },
        { path: '/dev-tools/api', label: 'Component API', description: 'Component API docs' },
        { path: '/dev-tools/live-preview', label: 'Live Preview', description: 'Live component preview' },
        { path: '/dev-tools/performance', label: 'Performance', description: 'Performance tools' },
        { path: '/template-tester', label: 'Template Tester', description: 'Test all templates' },
        { path: '/campaign/product-launch', label: 'Long-Form Sales Page', description: 'Sales page demo' },
      ]
    }
  ];

  var filteredSections = routeSections.map(function(section) {
    var filteredRoutes = section.routes.filter(function(route) {
      var lowerSearch = searchTerm.toLowerCase();
      return route.label.toLowerCase().indexOf(lowerSearch) !== -1 ||
             route.path.toLowerCase().indexOf(lowerSearch) !== -1 ||
             (route.description && route.description.toLowerCase().indexOf(lowerSearch) !== -1);
    });
    return {
      title: section.title,
      icon: section.icon,
      color: section.color,
      routes: filteredRoutes
    };
  }).filter(function(section) {
    return section.routes.length > 0;
  });

  var totalRoutes = routeSections.reduce(function(sum, section) {
    return sum + section.routes.length;
  }, 0);
  
  var dynamicRoutes = routeSections.reduce(function(sum, section) {
    return sum + section.routes.filter(function(r) { return r.dynamic; }).length;
  }, 0);
  
  var staticRoutes = totalRoutes - dynamicRoutes;

  var toggleSection = function(title) {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return React.createElement('div', { className: "wp-page-sitemap" },
    /* Header */
    React.createElement('div', { className: "wp-page-sitemap__header" },
      React.createElement('div', { className: "wp-container" },
        React.createElement('div', { className: "wp-page-sitemap__header-content" },
          React.createElement('h1', { className: "wp-page-sitemap__title" },
            React.createElement(Home, { size: 32, className: "wp-page-sitemap__title-icon" }),
            "Complete Sitemap"
          ),
          React.createElement('p', { className: "wp-page-sitemap__description" },
            "Interactive sitemap displaying all " + totalRoutes + " routes in the application. Click any link to navigate to that page."
          ),

          /* Statistics */
          React.createElement('div', { className: "wp-page-sitemap__stats" },
            React.createElement('div', { className: "wp-page-sitemap__stat" },
              React.createElement('span', { className: "wp-page-sitemap__stat-value" }, totalRoutes),
              React.createElement('span', { className: "wp-page-sitemap__stat-label" }, "Total Routes")
            ),
            React.createElement('div', { className: "wp-page-sitemap__stat" },
              React.createElement('span', { className: "wp-page-sitemap__stat-value" }, staticRoutes),
              React.createElement('span', { className: "wp-page-sitemap__stat-label" }, "Static")
            ),
            React.createElement('div', { className: "wp-page-sitemap__stat" },
              React.createElement('span', { className: "wp-page-sitemap__stat-value" }, dynamicRoutes),
              React.createElement('span', { className: "wp-page-sitemap__stat-label" }, "Dynamic")
            ),
            React.createElement('div', { className: "wp-page-sitemap__stat" },
              React.createElement('span', { className: "wp-page-sitemap__stat-value" }, filteredSections.length),
              React.createElement('span', { className: "wp-page-sitemap__stat-label" }, "Categories")
            )
          ),

          /* Search */
          React.createElement('div', { className: "wp-page-sitemap__search" },
            React.createElement(MagnifyingGlass, { size: 20, weight: 'duotone', className: "wp-page-sitemap__search-icon" }),
            React.createElement('input', {
              type: "text",
              placeholder: "Search routes...",
              value: searchTerm,
              onChange: function(e) { setSearchTerm(e.target.value); },
              className: "wp-page-sitemap__search-input funky-input-glow"
            }),
            searchTerm ? React.createElement('button', {
              onClick: function() { setSearchTerm(''); },
              className: "wp-page-sitemap__search-clear",
              'aria-label': "Clear search"
            }, String.fromCharCode(215)) : null
          )
        )
      )
    ),

    /* Route Sections */
    React.createElement('div', { className: "wp-page-sitemap__content" },
      React.createElement('div', { className: "wp-container" },
        filteredSections.length === 0 ?
          React.createElement('div', { className: "wp-page-sitemap__no-results" },
            React.createElement(Warning, { size: 48, weight: 'duotone' }),
            React.createElement('h3', null, "No routes found"),
            React.createElement('p', null, "Try a different search term"),
            React.createElement('button', {
              onClick: function() { setSearchTerm(''); },
              className: "wp-button"
            }, "Clear Search")
          ) :
          React.createElement('div', { className: "wp-page-sitemap__sections" },
            filteredSections.map(function(section) {
              var isExpanded = expandedSection === section.title || searchTerm.length > 0;
              
              return React.createElement('div', { key: section.title, className: "wp-page-sitemap__section" },
                React.createElement('button', {
                  onClick: function() { toggleSection(section.title); },
                  className: "wp-page-sitemap__section-header",
                  'aria-expanded': isExpanded
                },
                  React.createElement('div', { className: "wp-page-sitemap__section-title" },
                    React.createElement('span', { className: "wp-page-sitemap__section-icon " + section.color },
                      section.icon
                    ),
                    React.createElement('span', { className: "wp-page-sitemap__section-name" }, section.title),
                    React.createElement('span', { className: "wp-page-sitemap__section-count" },
                      section.routes.length + ' ' + (section.routes.length === 1 ? 'route' : 'routes')
                    )
                  ),
                  React.createElement(CaretRight, {
                    size: 20,
                    weight: 'bold',
                    className: "wp-page-sitemap__section-chevron " + (isExpanded ? 'wp-page-sitemap__section-chevron--expanded' : '')
                  })
                ),

                isExpanded ? React.createElement('div', { className: "wp-page-sitemap__routes" },
                  section.routes.map(function(route) {
                    return React.createElement(Link, {
                      key: route.path,
                      to: route.path,
                      className: "wp-page-sitemap__route funky-spring-hover"
                    },
                      React.createElement('div', { className: "wp-page-sitemap__route-content" },
                        React.createElement('span', { className: "wp-page-sitemap__route-label" },
                          route.label,
                          route.dynamic ? React.createElement('span', {
                            className: "wp-page-sitemap__route-badge wp-page-sitemap__route-badge--dynamic"
                          }, "Dynamic") : null,
                          route.external ? React.createElement('span', {
                            className: "wp-page-sitemap__route-badge wp-page-sitemap__route-badge--external"
                          }, "External ", React.createElement(ArrowSquareOut, { size: 12 })) : null
                        ),
                        React.createElement('span', { className: "wp-page-sitemap__route-path" }, route.path),
                        route.description ? React.createElement('span', {
                          className: "wp-page-sitemap__route-description"
                        }, route.description) : null
                      ),
                      React.createElement(CaretRight, { size: 16, weight: 'bold', className: "wp-page-sitemap__route-arrow" })
                    );
                  })
                ) : null
              );
            })
          )
      )
    ),

    /* Footer Note */
    React.createElement('div', { className: "wp-page-sitemap__footer" },
      React.createElement('div', { className: "wp-container" },
        React.createElement('p', { className: "wp-page-sitemap__footer-text" },
          React.createElement('strong', null, "Note:"),
          " Dynamic routes show example URLs. Replace parameters like ",
          React.createElement('code', null, ":id"),
          ", ",
          React.createElement('code', null, ":slug"),
          ", or ",
          React.createElement('code', null, ":categorySlug"),
          " with actual values when testing."
        )
      )
    )
  );
}