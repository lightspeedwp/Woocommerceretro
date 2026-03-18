/**
 * RouteDocumentTitle — Automatic SEO Page Titles
 *
 * Renders nothing visible. Reads the current pathname via React Router
 * and sets `document.title` from a centralised metadata map.
 *
 * Mounted once in SiteLayout so every route gets a title automatically.
 * Dynamic routes (`:slug`) are handled with pattern matching.
 *
 * @common
 * @see /src/app/hooks/useDocumentTitle.ts
 */

import { useLocation } from 'react-router';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/* ─── Static Route Metadata ─────────────────────────────── */

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Home',

  // 1. Shop
  '/shop': 'Shop',
  '/shop/search': 'Search results',
  '/shop/filtered': 'Filtered products',
  '/search': 'Search results',
  '/deals': 'Deals & offers',
  '/new-arrivals': 'New arrivals',
  '/best-sellers': 'Best sellers',
  '/sale': 'Sale',
  '/gift-cards': 'Gift cards',
  '/compare': 'Compare products',

  // 2. Account
  '/account/login': 'Log in',
  '/register': 'Create account',
  '/reset-password': 'Reset password',
  '/account/reset-password': 'Reset password',
  '/account': 'My account',
  '/account/dashboard': 'Dashboard',
  '/account/orders': 'Order history',
  '/account/addresses': 'Addresses',
  '/account/loyalty': 'Loyalty points',
  '/wishlist': 'Wishlist',
  '/account/dashboard-widgets': 'Dashboard widgets',

  // 3. Checkout
  '/cart': 'Cart',
  '/checkout': 'Checkout',
  '/order-confirmation': 'Order confirmed',
  '/track-order': 'Track order',

  // 4. Blog
  '/blog': 'Blog',
  '/blog/format/audio': 'Podcasts',
  '/blog/format/video': 'Videos',
  '/blog/format/gallery': 'Gallery posts',
  '/blog/format/aside': 'Aside posts',
  '/blog/format/standard': 'Blog',

  // 5. About & Company
  '/about': 'About us',
  '/about/our-story': 'Our story',
  '/about/team': 'Our team',
  '/about/sustainability': 'Sustainability',
  '/about/careers': 'Careers',
  '/contact': 'Contact',
  '/stores': 'Store locator',
  '/press': 'Press & media',

  // 6. Support
  '/faq': 'FAQ',
  '/help': 'Help centre',
  '/chat': 'Live chat',
  '/shipping-returns': 'Shipping & returns',
  '/shipping': 'Shipping information',
  '/size-guide': 'Size guide',
  '/returns': 'Returns portal',
  '/refunds': 'Refund policy',
  '/buying-guide': 'Buying guide',
  '/care-instructions': 'Care instructions',
  '/warranty': 'Warranty information',
  '/accessibility': 'Accessibility statement',
  '/rewards': 'Reward programme',
  '/affiliate': 'Affiliate programme',
  '/reviews': 'Customer reviews',

  // 7. Legal
  '/privacy-policy': 'Privacy policy',
  '/terms-and-conditions': 'Terms & conditions',

  // 8. Promo & Misc
  '/promotions': 'Promotions',
  '/promotions/flash-sale': 'Flash sale',
  '/promotions/seasonal': 'Seasonal sale',
  '/promotions/bundles': 'Bundle deals',
  '/promotions/clearance': 'Clearance',
  '/promotions/winter-clearance': 'Winter clearance',
  '/promotions/buy-2-get-1': 'Buy 2 get 1 free',
  '/loyalty': 'Loyalty rewards',
  '/subscriptions': 'Subscriptions',
  '/memberships': 'Memberships',
  '/newsletter': 'Newsletter',
  '/newsletter/archive': 'Newsletter archive',
  '/campaign/product-launch': 'Product launch',
  '/sitemap': 'Sitemap',

  // 8b. Retro Demo
  '/retro-demo': 'Retro demo',
  '/retro-demo/landing-page': 'Retro landing page',

  // 8c. Gaming & Community
  '/achievements': 'Achievements',
  '/leaderboard': 'Leaderboard',
  '/new-releases': 'New releases',
  '/pre-orders': 'Pre-orders',
  '/bundle-builder': 'Bundle builder',
  '/lookbook': 'Lookbook',
  '/community': 'Community',
  '/referral': 'Refer a friend',
  '/events': 'Events',
};

/* ─── Dynamic Route Patterns ────────────────────────────── */

interface DynamicRoute {
  pattern: RegExp;
  titleFn: (match: RegExpMatchArray) => string;
}

const DYNAMIC_ROUTES: DynamicRoute[] = [
  {
    pattern: /^\/product\/([^/]+)$/,
    titleFn: (m) => formatSlug(m[1]),
  },
  {
    pattern: /^\/product\/([^/]+)\/sticky$/,
    titleFn: (m) => formatSlug(m[1]),
  },
  {
    pattern: /^\/blog\/category\/([^/]+)$/,
    titleFn: (m) => `${formatSlug(m[1])} — Blog`,
  },
  {
    pattern: /^\/blog\/author\/([^/]+)$/,
    titleFn: (m) => `Posts by ${formatSlug(m[1])}`,
  },
  {
    pattern: /^\/blog\/tag\/([^/]+)$/,
    titleFn: (m) => `Tagged "${formatSlug(m[1])}" — Blog`,
  },
  {
    pattern: /^\/blog\/([^/]+)$/,
    titleFn: (m) => formatSlug(m[1]),
  },
  {
    pattern: /^\/blog\/([^/]+)\/(standard|audio|video|gallery|aside)$/,
    titleFn: (m) => formatSlug(m[1]),
  },
  {
    pattern: /^\/category\/([^/]+)$/,
    titleFn: (m) => formatSlug(m[1]),
  },
  {
    pattern: /^\/tag\/([^/]+)$/,
    titleFn: (m) => `Tagged "${formatSlug(m[1])}"`,
  },
  {
    pattern: /^\/subscription\/([^/]+)$/,
    titleFn: (m) => formatSlug(m[1]),
  },
  {
    pattern: /^\/membership\/([^/]+)$/,
    titleFn: (m) => formatSlug(m[1]),
  },
  {
    pattern: /^\/membership\/3d\/([^/]+)$/,
    titleFn: (m) => `${formatSlug(m[1])} — 3D view`,
  },
  {
    pattern: /^\/newsletter\/([^/]+)$/,
    titleFn: (m) => formatSlug(m[1]),
  },
  {
    pattern: /^\/social\/([^/]+)$/,
    titleFn: (m) => `Follow us on ${formatSlug(m[1])}`,
  },
];

/** Converts a URL slug to a readable title: "my-cool-product" → "My cool product" */
const formatSlug = (slug: string): string => {
  const words = slug.replace(/-/g, ' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
};

/** Resolves the page title from the current pathname */
const resolveTitle = (pathname: string): string => {
  const path = pathname.replace(/\/+$/, '') || '/';

  // 1. Exact match
  if (ROUTE_TITLES[path]) {
    return ROUTE_TITLES[path];
  }

  // 2. Dynamic pattern match
  for (let i = 0; i < DYNAMIC_ROUTES.length; i++) {
    const match = path.match(DYNAMIC_ROUTES[i].pattern);
    if (match) {
      return DYNAMIC_ROUTES[i].titleFn(match);
    }
  }

  // 3. Dev tools (catch-all)
  if (path.startsWith('/dev-tools')) {
    return 'Dev tools';
  }

  // 4. Fallback
  return 'PlayPocket';
};

/* ─── Component ─────────────────────────────────────────── */

export const RouteDocumentTitle = () => {
  const location = useLocation();
  const title = resolveTitle(location.pathname);

  useDocumentTitle(title);

  return null;
};

RouteDocumentTitle.displayName = 'RouteDocumentTitle';
