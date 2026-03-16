/**
 * SiteBreadcrumb — Sitewide Breadcrumb Navigation
 *
 * Auto-generates breadcrumb trail from the current URL path.
 * Rendered by SiteLayout between header and page content.
 *
 * **CSS:** `/src/styles/sections/pp-breadcrumb.css`
 * **Dark Mode:** Automatic via --color-* tokens
 * **WCAG AA 2.2:** aria-label, aria-current="page", focus-visible, 44px touch
 *
 * @common
 */

import { Link, useLocation } from 'react-router';
import { CaretRight } from '../../utils/phosphor-compat';

/**
 * Human-readable labels for URL segments.
 * Keys are lowercase slug segments, values are display labels.
 */
const SEGMENT_LABELS: Record<string, string> = {
  /* Shop & Products */
  shop: 'Shop',
  product: 'Product',
  category: 'Category',
  tag: 'Tag',
  deals: 'Deals',
  sale: 'Sale',
  'new-arrivals': 'New arrivals',
  'best-sellers': 'Best sellers',
  'gift-cards': 'Gift Cards',
  compare: 'Compare',
  search: 'Search',
  'bundle-builder': 'Bundle Builder',
  lookbook: 'Lookbook',
  'new-releases': 'New Releases',
  'pre-orders': 'Pre-Orders',

  /* Account */
  account: 'Account',
  login: 'Login',
  register: 'Register',
  'reset-password': 'Reset Password',
  dashboard: 'Dashboard',
  orders: 'Orders',
  addresses: 'Addresses',
  wishlist: 'Wishlist',
  loyalty: 'Loyalty',

  /* Checkout */
  cart: 'Cart',
  checkout: 'Checkout',
  'order-confirmation': 'Order Confirmation',
  'track-order': 'Track Order',

  /* Blog */
  blog: 'Game Log',
  format: 'Format',
  audio: 'Audio',
  video: 'Video',
  gallery: 'Gallery',
  aside: 'Aside',
  standard: 'Standard',
  author: 'Author',

  /* About & Company */
  about: 'About',
  'our-story': 'Our Story',
  team: 'Team',
  sustainability: 'Sustainability',
  careers: 'Careers',
  contact: 'Contact',
  stores: 'Stores',
  press: 'Press & Media',

  /* Support */
  faq: 'FAQ',
  help: 'Help Center',
  chat: 'Live Chat',
  'shipping-returns': 'Shipping & Returns',
  shipping: 'Shipping',
  'size-guide': 'Size Guide',
  returns: 'Returns',
  refunds: 'Refunds',
  'buying-guide': 'Buying Guide',
  'care-instructions': 'Care Instructions',
  warranty: 'Warranty',
  accessibility: 'Accessibility',
  rewards: 'Rewards',
  affiliate: 'Affiliate Program',
  reviews: 'Reviews',
  support: 'Support',

  /* Legal */
  'privacy-policy': 'Privacy Policy',
  'terms-and-conditions': 'Terms & Conditions',
  legal: 'Legal',

  /* Commerce */
  subscriptions: 'Subscriptions',
  subscription: 'Subscription',
  memberships: 'Memberships',
  membership: 'Membership',
  newsletter: 'Newsletter',
  archive: 'Archive',
  promotions: 'Promotions',
  'flash-sale': 'Flash Sale',
  seasonal: 'Seasonal',
  bundles: 'Bundles',
  clearance: 'Clearance',
  'winter-clearance': 'Winter Clearance',
  'buy-2-get-1': 'Buy 2 Get 1',
  campaign: 'Campaign',
  'product-launch': 'Product Launch',

  /* Community & Gaming */
  achievements: 'Achievements',
  leaderboard: 'Leaderboard',
  community: 'Community',
  referral: 'Referral',
  events: 'Events',
  podcasts: 'Podcasts',
  videos: 'Videos',

  /* Misc */
  sitemap: 'Sitemap',
  '3d': '3D',
  'retro-demo': 'Retro Demo',
  'landing-page': 'Landing Page',
  'dev-tools': 'Dev Tools',
  'style-guide': 'Style Guide',
  'template-tester': 'Template Tester',
};

/** Pages that should NOT display breadcrumbs (homepage) */
const HIDDEN_PATHS = ['/', ''];

/**
 * Converts a URL slug to a human-readable label.
 * Checks the lookup table first, then title-cases the slug.
 */
const segmentToLabel = (segment: string): string => {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];
  // Title-case fallback: "my-cool-page" → "My Cool Page"
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

interface BreadcrumbSegment {
  label: string;
  href: string;
}

export const SiteBreadcrumb = () => {
  const { pathname } = useLocation();

  // Don't render on homepage
  if (HIDDEN_PATHS.includes(pathname)) return null;

  // Split path into segments, filter empties
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  // Build breadcrumb trail — all except last segment are links
  const trail: BreadcrumbSegment[] = segments.map((segment, index) => ({
    label: segmentToLabel(segment),
    href: '/' + segments.slice(0, index + 1).join('/'),
  }));

  return (
    <div className="pp-breadcrumb-bar">
      <div className="pp-breadcrumb-bar__inner px-[32px] py-[0px]">
        <nav className="pp-breadcrumb" aria-label="Breadcrumb">
          <ol className="pp-breadcrumb__list">
            {/* Home link */}
            <li className="pp-breadcrumb__item">
              <Link
                to="/"
                className="pp-breadcrumb__link retro-font-display retro-bold"
              >
                HOME
              </Link>
            </li>

            {/* Path segments */}
            {trail.map((item, index) => {
              const isLast = index === trail.length - 1;
              return (
                <li key={item.href} className="pp-breadcrumb__item">
                  <span className="pp-breadcrumb__separator" aria-hidden="true">
                    <CaretRight size={10} />
                  </span>
                  {isLast ? (
                    <span
                      className="pp-breadcrumb__current retro-font-display retro-bold"
                      aria-current="page"
                    >
                      {item.label.toUpperCase()}
                    </span>
                  ) : (
                    <Link
                      to={item.href}
                      className="pp-breadcrumb__link retro-font-display retro-bold"
                    >
                      {item.label.toUpperCase()}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

SiteBreadcrumb.displayName = 'SiteBreadcrumb';