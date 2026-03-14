/**
 * Sitemap Page - Visual Route Directory
 *
 * Full-page sitemap with HeaderRetro, FooterRetro, Breadcrumbs,
 * and clear accordion sections with strong visual affordance.
 *
 * **Styling:** BEM (.retro-sitemap__*) in /src/styles/sections/sitemap-retro.css
 * **Dark Mode:** Inherits retro theme tokens from front-page-funky.css
 * **WCAG AA 2.2:** Focus-visible rings, aria-expanded, keyboard nav
 */

import { useState, useMemo, useCallback, memo, type ReactNode } from 'react';
import { Link } from 'react-router';
import {
  House, Storefront, Bag as ShoppingBag, User, BookOpenText, Info,
  Tag, Question, Headphones, CreditCard, ShieldCheck, Warning, Wrench,
  MagnifyingGlass, CaretDown, ArrowSquareOut, MapTrifold,
  GameController, Users, CheckCircle, Code, Palette, FileText
} from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { Breadcrumbs } from '../parts/Breadcrumbs';
import { DevToolsStatsBar } from '../blocks/dev-tools/DevToolsStatsBar';

interface RouteItem {
  path: string;
  label: string;
  description: string;
  dynamic?: boolean;
  external?: boolean;
}

interface RouteSection {
  title: string;
  icon: ReactNode;
  routes: RouteItem[];
}

// Module-level constant -- never changes, never triggers re-renders
const ROUTE_SECTIONS: RouteSection[] = [
    {
      title: 'Core Pages',
      icon: <House size={20} weight="bold" />,
      routes: [
        { path: '/', label: 'Homepage (PlayPocket)', description: 'Main retro FSE landing page' },
        { path: '/search', label: 'Search', description: 'Global product search' },
        { path: '/contact', label: 'Contact', description: 'Contact form' },
        { path: '/faq', label: 'FAQ', description: 'Frequently asked questions' },
        { path: '/newsletter', label: 'Newsletter', description: 'Newsletter subscription' },
        { path: '/sitemap', label: 'Sitemap', description: 'This page - all routes' },
      ],
    },
    {
      title: 'Shop & Products',
      icon: <Storefront size={20} weight="bold" />,
      routes: [
        { path: '/shop', label: 'Shop', description: 'Main product archive' },
        { path: '/shop/all', label: 'Shop - All', description: 'All products listing' },
        { path: '/shop/all-products', label: 'All Products', description: 'Complete product listing' },
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
        { path: '/shop/category/electronics', label: 'Category: Electronics', description: 'Example category', dynamic: true },
        { path: '/shop/category/sports-fitness', label: 'Category: Sports & Fitness', description: 'Example category', dynamic: true },
        { path: '/shop/tag/eco-friendly', label: 'Tag: Eco-Friendly', description: 'Example product tag', dynamic: true },
        { path: '/product/prod-001', label: 'Single Product', description: 'Example product page', dynamic: true },
        { path: '/product/prod-001/sticky', label: 'Product (Sticky)', description: 'Product with sticky buy panel', dynamic: true },
        { path: '/variable-product/prod-002', label: 'Variable Product', description: 'Product with variations', dynamic: true },
        { path: '/lookbook', label: 'Lookbook', description: 'Curated editorial collection gallery' },
      ],
    },
    {
      title: 'Cart & Checkout',
      icon: <ShoppingBag size={20} weight="bold" />,
      routes: [
        { path: '/cart', label: 'Shopping Cart', description: 'View cart' },
        { path: '/checkout', label: 'Checkout', description: 'Checkout page' },
        { path: '/order-confirmation', label: 'Order Confirmation', description: 'Order success page' },
        { path: '/track-order', label: 'Track Order', description: 'Order tracking' },
      ],
    },
    {
      title: 'Account & Profile',
      icon: <User size={20} weight="bold" />,
      routes: [
        { path: '/account/login', label: 'Login / Register', description: 'Authentication page' },
        { path: '/register', label: 'Register (New Game)', description: 'New account registration' },
        { path: '/reset-password', label: 'Password Reset', description: 'Forgot password recovery' },
        { path: '/account/reset-password', label: 'Password Reset (Account)', description: 'Account-scoped reset alias' },
        { path: '/account', label: 'Account', description: 'Redirects to dashboard' },
        { path: '/account/dashboard', label: 'Dashboard', description: 'Account overview' },
        { path: '/account/orders', label: 'Orders', description: 'Order history' },
        { path: '/account/addresses', label: 'Addresses', description: 'Saved addresses (Save Files)' },
        { path: '/account/loyalty', label: 'Loyalty & XP', description: 'Points, tier progress, and activity' },
        { path: '/account/dashboard-widgets', label: 'Enhanced Dashboard', description: 'Widgets dashboard' },
        { path: '/wishlist', label: 'Wishlist', description: 'Standalone wishlist page' },
      ],
    },
    {
      title: 'Blog & Content',
      icon: <BookOpenText size={20} weight="bold" />,
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
      ],
    },
    {
      title: 'Blog Format Archives',
      icon: <Headphones size={20} weight="bold" />,
      routes: [
        { path: '/blog/format/audio', label: 'Podcasts (Audio)', description: 'Audio post archive' },
        { path: '/blog/format/video', label: 'Videos', description: 'Video post archive' },
        { path: '/blog/format/gallery', label: 'Galleries', description: 'Gallery post archive' },
        { path: '/blog/format/aside', label: 'Asides', description: 'Aside/status post archive' },
      ],
    },
    {
      title: 'About & Company',
      icon: <Info size={20} weight="bold" />,
      routes: [
        { path: '/about', label: 'About Us', description: 'Company information' },
        { path: '/about/our-story', label: 'Our Story', description: 'Brand story' },
        { path: '/about/team', label: 'Team', description: 'Meet the team' },
        { path: '/about/sustainability', label: 'Sustainability', description: 'Environmental practices' },
        { path: '/about/careers', label: 'Careers', description: 'Job openings' },
        { path: '/stores', label: 'Store Locations', description: 'Physical stores' },
        { path: '/press', label: 'Press & Media', description: 'Press kit and media resources' },
      ],
    },
    {
      title: 'Subscriptions & Memberships',
      icon: <CreditCard size={20} weight="bold" />,
      routes: [
        { path: '/subscriptions', label: 'Subscription Plans', description: 'Browse subscription products' },
        { path: '/subscription/sub-001', label: 'Single Subscription', description: 'Example subscription page', dynamic: true },
        { path: '/memberships', label: 'Membership Plans', description: 'Browse membership tiers' },
        { path: '/membership/mem-001', label: 'Single Membership', description: 'Example membership page', dynamic: true },
      ],
    },
    {
      title: 'Promotions & Sales',
      icon: <Tag size={20} weight="bold" />,
      routes: [
        { path: '/promotions', label: 'Promotions Hub', description: 'All promotions' },
        { path: '/promotions/flash-sale', label: 'Flash Sale', description: 'Limited time sale' },
        { path: '/promotions/seasonal', label: 'Seasonal Sale', description: 'Seasonal offers' },
        { path: '/promotions/bundles', label: 'Bundles', description: 'Product bundles' },
        { path: '/promotions/clearance', label: 'Clearance', description: 'Clearance items' },
        { path: '/promotions/winter-clearance', label: 'Winter Clearance', description: 'Winter sale (alias)' },
        { path: '/promotions/buy-2-get-1', label: 'Buy 2 Get 1', description: 'Promotion (alias)' },
        { path: '/loyalty', label: 'Loyalty Program', description: 'Rewards program' },
      ],
    },
    {
      title: 'Gaming & Rewards',
      icon: <GameController size={20} weight="bold" />,
      routes: [
        { path: '/achievements', label: 'Achievements', description: 'Trophy room with unlockable badges' },
        { path: '/leaderboard', label: 'Leaderboard', description: 'Top players by XP and loyalty points' },
        { path: '/new-releases', label: 'New Releases', description: 'Upcoming product drops with countdown timers' },
        { path: '/pre-orders', label: 'Pre-Orders', description: 'Reserve upcoming products (alias)' },
        { path: '/bundle-builder', label: 'Bundle Builder', description: 'Build your own product pack with tiered discounts' },
      ],
    },
    {
      title: 'Community & Engagement',
      icon: <Users size={20} weight="bold" />,
      routes: [
        { path: '/community', label: 'Community Hub', description: 'Player lounge with social feed and contributors' },
        { path: '/referral', label: 'Referral Program', description: 'Invite friends and earn reward tiers' },
        { path: '/events', label: 'Events', description: 'Upcoming events with RSVP and capacity tracking' },
      ],
    },
    {
      title: 'Help & Support',
      icon: <Question size={20} weight="bold" />,
      routes: [
        { path: '/help', label: 'Help Center', description: 'Support hub' },
        { path: '/shipping-returns', label: 'Shipping & Returns', description: 'Shipping info' },
        { path: '/shipping', label: 'Shipping (Alias)', description: 'Redirects to shipping & returns' },
        { path: '/returns', label: 'Returns Portal', description: 'Process returns' },
        { path: '/refunds', label: 'Refunds', description: 'Refund policy and requests' },
        { path: '/size-guide', label: 'Size Guide', description: 'Sizing information' },
        { path: '/chat', label: 'Live Chat', description: 'Customer support chat' },
        { path: '/buying-guide', label: 'Buying Guide', description: 'Product buying guide' },
        { path: '/care-instructions', label: 'Care Instructions', description: 'Product care guide' },
        { path: '/warranty', label: 'Warranty', description: 'Warranty information' },
        { path: '/accessibility', label: 'Accessibility', description: 'Accessibility statement' },
        { path: '/rewards', label: 'Rewards Program', description: 'Loyalty rewards' },
        { path: '/affiliate', label: 'Affiliate Program', description: 'Partner with us' },
        { path: '/reviews', label: 'Customer Reviews', description: 'Product reviews' },
      ],
    },
    {
      title: 'Legal & Policies',
      icon: <ShieldCheck size={20} weight="bold" />,
      routes: [
        { path: '/privacy-policy', label: 'Privacy Policy', description: 'Privacy information' },
        { path: '/terms-and-conditions', label: 'Terms & Conditions', description: 'Terms of service' },
        { path: '/privacy', label: 'Privacy (Redirect)', description: 'Redirects to /privacy-policy' },
        { path: '/terms', label: 'Terms (Redirect)', description: 'Redirects to /terms-and-conditions' },
      ],
    },
    {
      title: 'Error Pages',
      icon: <Warning size={20} weight="bold" />,
      routes: [
        { path: '/error/404', label: '404 Not Found (Demo)', description: 'Test 404 page' },
        { path: '/error/500', label: '500 Server Error (Demo)', description: 'Test 500 page' },
        { path: '/error/503', label: '503 Maintenance (Demo)', description: 'Test maintenance page' },
        { path: '/error/network', label: 'Network Error (Demo)', description: 'Test network error' },
        { path: '/nonexistent-route', label: '404 Fallback', description: 'Test actual 404' },
      ],
    },
    {
      title: 'Development Tools',
      icon: <Wrench size={20} weight="bold" />,
      routes: [
        { path: '/dev-tools', label: 'Dev Tools Hub', description: 'Developer tools index' },
        { path: '/dev-tools/style-guide', label: 'Style Guide', description: 'Design system reference' },
        { path: '/dev-tools/showcase', label: 'Component Showcase', description: 'Component gallery' },
        { path: '/dev-tools/forms', label: 'Form Showcase', description: 'Form elements reference' },
        { path: '/dev-tools/icons', label: 'Icon Library', description: 'Phosphor icons browser' },
        { path: '/dev-tools/api', label: 'Component API', description: 'Component API docs' },
        { path: '/dev-tools/live-preview', label: 'Live Preview', description: 'Live component preview' },
        { path: '/dev-tools/performance', label: 'Performance', description: 'Web Vitals monitoring (temporarily disabled)' },
        { path: '/template-tester', label: 'Template Tester', description: 'PlayPocket homepage preview' },
        { path: '/campaign/product-launch', label: 'Long-Form Sales Page', description: 'Sales page demo' },
        { path: '/social/instagram', label: 'Social Redirect', description: 'Social platform redirect', dynamic: true },
      ],
    },
  ];

// Pre-computed stats -- static data, computed once at module level
const SITEMAP_STATS = (() => {
  const totalRoutes = ROUTE_SECTIONS.reduce((sum, s) => sum + s.routes.length, 0);
  const dynamicRoutes = ROUTE_SECTIONS.reduce(
    (sum, s) => sum + s.routes.filter((r) => r.dynamic).length,
    0
  );
  const staticRoutes = totalRoutes - dynamicRoutes;

  return [
    { value: totalRoutes, label: 'TOTAL' },
    { value: staticRoutes, label: 'STATIC' },
    { value: dynamicRoutes, label: 'DYNAMIC' },
    { value: ROUTE_SECTIONS.length, label: 'SECTIONS' },
  ];
})();

// Pre-computed section titles for expandAll
const ALL_SECTION_TITLES = new Set(ROUTE_SECTIONS.map((s) => s.title));

export const Sitemap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  // Memoize filtered sections to prevent unnecessary re-computation
  const filteredSections = useMemo(
    () =>
      ROUTE_SECTIONS
        .map((section) => ({
          ...section,
          routes: section.routes.filter((route) => {
            const lower = searchTerm.toLowerCase();
            return (
              route.label.toLowerCase().includes(lower) ||
              route.path.toLowerCase().includes(lower) ||
              route.description.toLowerCase().includes(lower)
            );
          }),
        }))
        .filter((section) => section.routes.length > 0),
    [searchTerm]
  );

  // Stable callbacks with useCallback
  const toggleSection = useCallback((title: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    setExpandedSections(new Set(ALL_SECTION_TITLES));
  }, []);

  const collapseAll = useCallback(() => {
    setExpandedSections(new Set());
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  const isSearching = searchTerm.length > 0;

  const breadcrumbItems = useMemo(
    () => [{ label: 'Sitemap', path: '/sitemap' }],
    []
  );

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />
      </div>

      <Breadcrumbs items={breadcrumbItems} />

      <main className="retro-sitemap" id="main-content">
        {/* Hero Banner */}
        <div className="retro-sitemap__hero">
          <div className="wp-container">
            <div className="retro-sitemap__hero-card">
              <MapTrifold size={48} weight="bold" className="retro-sitemap__hero-icon" />
              <div className="retro-sitemap__hero-text">
                <h1 className="retro-font-display retro-bold retro-sitemap__hero-title">
                  SITE NAVIGATION
                </h1>
                <p className="retro-font-body retro-sitemap__hero-desc">
                  Welcome to PlayPocket! Find any page quickly using the search below or browse by category.
                </p>
                <p className="retro-font-body retro-sitemap__hero-stats">
                  {`${SITEMAP_STATS[0].value} total pages • ${SITEMAP_STATS[1].value} main sections`}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wp-container">
          {/* Search + Quick Actions */}
          <div className="retro-sitemap__toolbar">
            <div className="retro-sitemap__search">
              <MagnifyingGlass size={24} weight="bold" className="retro-sitemap__search-icon" />
              <input
                type="text"
                placeholder="Search for a page... (e.g., 'cart', 'wishlist', 'blog')"
                value={searchTerm}
                onChange={handleSearchChange}
                className="retro-font-body retro-sitemap__search-input"
                aria-label="Search routes"
              />
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="retro-font-display retro-bold retro-sitemap__search-clear"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="retro-sitemap__toolbar-actions">
              <button
                onClick={expandAll}
                className="retro-font-display retro-bold retro-sitemap__toolbar-btn"
                aria-label="Expand all sections"
              >
                EXPAND ALL
              </button>
              <button
                onClick={collapseAll}
                className="retro-font-display retro-bold retro-sitemap__toolbar-btn"
                aria-label="Collapse all sections"
              >
                COLLAPSE ALL
              </button>
            </div>
          </div>

          {/* Quick Tips Banner */}
          {!isSearching && (
            <div className="retro-sitemap__tips">
              <div className="retro-sitemap__tip retro-font-body">
                <strong className="retro-font-display retro-bold">💡 TIP:</strong> Use the search above to find any page instantly, or click a category below to explore.
              </div>
            </div>
          )}

          {/* Project Architecture Status */}
          {!isSearching && (
            <div className="retro-sitemap__architecture">
              <h2 className="retro-font-display retro-bold retro-sitemap__architecture-title">
                <Code size={24} weight="bold" />
                PROJECT ARCHITECTURE
              </h2>
              <div className="retro-sitemap__architecture-grid">
                <div className="retro-sitemap__arch-card">
                  <CheckCircle size={32} weight="fill" className="retro-sitemap__arch-icon retro-sitemap__arch-icon--complete" />
                  <div className="retro-sitemap__arch-content">
                    <h3 className="retro-font-display retro-bold retro-sitemap__arch-heading">Templates</h3>
                    <p className="retro-font-body retro-sitemap__arch-stat">23/23 Complete</p>
                    <p className="retro-font-body retro-sitemap__arch-desc">All templates converted to retro theme</p>
                  </div>
                </div>

                <div className="retro-sitemap__arch-card">
                  <CheckCircle size={32} weight="fill" className="retro-sitemap__arch-icon retro-sitemap__arch-icon--complete" />
                  <div className="retro-sitemap__arch-content">
                    <h3 className="retro-font-display retro-bold retro-sitemap__arch-heading">P0 Blocks</h3>
                    <p className="retro-font-body retro-sitemap__arch-stat">13/13 Complete</p>
                    <p className="retro-font-body retro-sitemap__arch-desc">Critical block guidelines documented</p>
                  </div>
                </div>

                <div className="retro-sitemap__arch-card">
                  <CheckCircle size={32} weight="fill" className="retro-sitemap__arch-icon retro-sitemap__arch-icon--complete" />
                  <div className="retro-sitemap__arch-content">
                    <h3 className="retro-font-display retro-bold retro-sitemap__arch-heading">P1 Blocks</h3>
                    <p className="retro-font-body retro-sitemap__arch-stat">35/35 Complete 🎊</p>
                    <p className="retro-font-body retro-sitemap__arch-desc">High priority block guidelines complete</p>
                  </div>
                </div>

                <div className="retro-sitemap__arch-card">
                  <CheckCircle size={32} weight="fill" className="retro-sitemap__arch-icon retro-sitemap__arch-icon--complete" />
                  <div className="retro-sitemap__arch-content">
                    <h3 className="retro-font-display retro-bold retro-sitemap__arch-heading">CSS System</h3>
                    <p className="retro-font-body retro-sitemap__arch-stat">280 imports active</p>
                    <p className="retro-font-body retro-sitemap__arch-desc">Full retro design system restored</p>
                  </div>
                </div>

                <div className="retro-sitemap__arch-card">
                  <Palette size={32} weight="fill" className="retro-sitemap__arch-icon retro-sitemap__arch-icon--design" />
                  <div className="retro-sitemap__arch-content">
                    <h3 className="retro-font-display retro-bold retro-sitemap__arch-heading">Retro Theme</h3>
                    <p className="retro-font-body retro-sitemap__arch-stat">100% Applied</p>
                    <p className="retro-font-body retro-sitemap__arch-desc">Neon glows, CRT effects, pixel borders</p>
                  </div>
                </div>

                <div className="retro-sitemap__arch-card">
                  <FileText size={32} weight="fill" className="retro-sitemap__arch-icon retro-sitemap__arch-icon--docs" />
                  <div className="retro-sitemap__arch-content">
                    <h3 className="retro-font-display retro-bold retro-sitemap__arch-heading">Guidelines</h3>
                    <p className="retro-font-body retro-sitemap__arch-stat">48 total docs</p>
                    <p className="retro-font-body retro-sitemap__arch-desc">Complete component documentation</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sections */}
        <div className="wp-container">
          {filteredSections.length === 0 ? (
            <div className="retro-sitemap__empty">
              <Warning size={48} weight="duotone" className="retro-sitemap__empty-icon" />
              <h3 className="retro-font-display retro-bold retro-sitemap__empty-title">NO ROUTES FOUND</h3>
              <p className="retro-font-body retro-sitemap__empty-desc">
                No routes match &quot;{searchTerm}&quot;
              </p>
              <button
                onClick={handleClearSearch}
                className="retro-font-display retro-bold retro-sitemap__empty-btn"
              >
                CLEAR SEARCH
              </button>
            </div>
          ) : (
            <div className="retro-sitemap__sections" role="list">
              {filteredSections.map((section) => {
                const isExpanded = expandedSections.has(section.title) || isSearching;
                const dynamicCount = section.routes.filter((r) => r.dynamic).length;

                return (
                  <div key={section.title} className="retro-sitemap__section" role="listitem">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className={`retro-sitemap__trigger${isExpanded ? ' retro-sitemap__trigger--open' : ''}`}
                      aria-expanded={isExpanded}
                    >
                      <span className="retro-sitemap__trigger-icon-wrap">
                        {section.icon}
                      </span>
                      <span className="retro-sitemap__trigger-content">
                        <span className="retro-font-display retro-bold retro-sitemap__trigger-title">
                          {section.title}
                        </span>
                        <span className="retro-font-body retro-sitemap__trigger-meta">
                          {section.routes.length} {section.routes.length === 1 ? 'route' : 'routes'}
                          {dynamicCount > 0 && ` · ${dynamicCount} dynamic`}
                        </span>
                      </span>
                      <CaretDown
                        size={20}
                        weight="bold"
                        className="retro-sitemap__trigger-caret"
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && (
                      <ul className="retro-sitemap__routes">
                        {section.routes.map((route) => (
                          <li key={route.path} className="retro-sitemap__route-item">
                            <Link
                              to={route.path}
                              className="retro-sitemap__route"
                            >
                              <span className="retro-sitemap__route-info">
                                <span className="retro-font-display retro-bold retro-sitemap__route-label">
                                  {route.label}
                                  {route.dynamic && (
                                    <span className="retro-sitemap__badge retro-sitemap__badge--dynamic">
                                      DYN
                                    </span>
                                  )}
                                  {route.external && (
                                    <span className="retro-sitemap__badge retro-sitemap__badge--external">
                                      EXT <ArrowSquareOut size={10} weight="bold" />
                                    </span>
                                  )}
                                </span>
                                <span className="retro-font-body retro-sitemap__route-path">{route.path}</span>
                              </span>
                              <span className="retro-sitemap__route-desc retro-font-body">
                                {route.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Legend */}
          <div className="retro-sitemap__legend">
            <span className="retro-font-body retro-sitemap__legend-item">
              <span className="retro-sitemap__badge retro-sitemap__badge--dynamic">DYN</span>
              = Dynamic route (parameterized URL)
            </span>
            <span className="retro-font-body retro-sitemap__legend-item">
              <span className="retro-sitemap__badge retro-sitemap__badge--external">EXT</span>
              = External link
            </span>
          </div>
        </div>
      </main>

      <div className="retro-container">
        <FooterRetro />
      </div>
    </div>
  );
}

Sitemap.displayName = 'Sitemap';