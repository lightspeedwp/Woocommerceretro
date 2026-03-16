/**
 * Mega Menu Navigation Data
 *
 * Centralized data for all retro mega menu panels.
 * Each top-level menu has columns of links covering
 * as many routes as possible from the sitemap.
 *
 * Updated: March 2026
 */

export interface MegaLink {
  title: string;
  href: string;
  desc?: string;
  badge?: 'new' | 'hot' | 'sale' | 'live';
}

export interface MegaColumn {
  heading: string;
  links: MegaLink[];
}

export interface MegaMenuData {
  id: string;
  label: string;
  href: string;
  columns: MegaColumn[];
  wide?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

/* ─── SHOP ─────────────────────────────────────── */

export const shopMenu: MegaMenuData = {
  id: 'shop',
  label: 'SHOP',
  href: '/shop',
  wide: true,
  ctaLabel: 'VIEW ALL PRODUCTS',
  ctaHref: '/shop',
  columns: [
    {
      heading: 'Browse',
      links: [
        { title: 'All Products', href: '/shop' },
        { title: 'New Arrivals', href: '/new-arrivals', badge: 'new' },
        { title: 'Best Sellers', href: '/best-sellers' },
        { title: 'New Releases', href: '/new-releases', badge: 'hot' },
        { title: 'Sale', href: '/sale', badge: 'sale' },
        { title: 'Gift Cards', href: '/gift-cards' },
        { title: 'Compare Products', href: '/compare' },
        { title: 'Lookbook', href: '/lookbook' },
      ],
    },
    {
      heading: 'Categories',
      links: [
        { title: 'Games', href: '/category/games' },
        { title: 'Apparel', href: '/category/apparel' },
        { title: 'Accessories', href: '/category/accessories' },
        { title: 'Collectibles', href: '/category/collectibles' },
        { title: 'Posters & Art', href: '/category/posters' },
        { title: 'All Collections', href: '/shop/collections' },
      ],
    },
    {
      heading: 'Quick Links',
      links: [
        { title: 'My Cart', href: '/cart' },
        { title: 'My Wishlist', href: '/wishlist' },
        { title: 'Track Order', href: '/track-order' },
        { title: 'Size Guide', href: '/size-guide' },
        { title: 'Buying Guide', href: '/buying-guide' },
        { title: 'Bundle Builder', href: '/bundle-builder', badge: 'new' },
      ],
    },
  ],
};

/* ─── DEALS ────────────────────────────────────── */

export const dealsMenu: MegaMenuData = {
  id: 'deals',
  label: 'DEALS',
  href: '/deals',
  wide: true,
  ctaLabel: 'VIEW ALL DEALS',
  ctaHref: '/promotions',
  columns: [
    {
      heading: 'Promotions',
      links: [
        { title: 'All Deals', href: '/promotions' },
        { title: 'Flash Sale', href: '/promotions/flash-sale', badge: 'hot' },
        { title: 'Seasonal Sale', href: '/promotions/seasonal', badge: 'sale' },
        { title: 'Bundle Deals', href: '/promotions/bundles' },
        { title: 'Clearance', href: '/promotions/clearance', badge: 'sale' },
        { title: 'Buy 2 Get 1', href: '/promotions/buy-2-get-1' },
        { title: 'Winter Clearance', href: '/promotions/winter-clearance' },
      ],
    },
    {
      heading: 'Rewards & Points',
      links: [
        { title: 'Loyalty Program', href: '/loyalty' },
        { title: 'Achievements', href: '/achievements', badge: 'new' },
        { title: 'Leaderboard', href: '/leaderboard' },
        { title: 'Reward Program', href: '/rewards' },
        { title: 'Referral Program', href: '/referral' },
        { title: 'Affiliate Program', href: '/affiliate' },
      ],
    },
  ],
};

/* ─── MEMBERSHIPS & SUBSCRIPTIONS ──────────────── */

export const membershipsMenu: MegaMenuData = {
  id: 'memberships',
  label: 'MEMBERSHIPS',
  href: '/memberships',
  wide: true,
  ctaLabel: 'EXPLORE PLANS',
  ctaHref: '/memberships',
  columns: [
    {
      heading: 'Plans',
      links: [
        { title: 'All Memberships', href: '/memberships' },
        { title: 'All Subscriptions', href: '/subscriptions' },
        { title: 'Membership Details', href: '/membership/premium', desc: 'Exclusive perks & early access' },
        { title: 'Subscription Box', href: '/subscription/monthly-box', desc: 'Monthly retro loot crate' },
        { title: 'Pre-Orders', href: '/pre-orders', badge: 'new' },
      ],
    },
    {
      heading: 'My Account',
      links: [
        { title: 'Dashboard', href: '/account/dashboard' },
        { title: 'My Orders', href: '/account/orders' },
        { title: 'My Addresses', href: '/account/addresses' },
        { title: 'Loyalty Points', href: '/account/loyalty' },
        { title: 'Dashboard Widgets', href: '/account/dashboard-widgets' },
        { title: 'My Wishlist', href: '/wishlist' },
      ],
    },
    {
      heading: 'Account Actions',
      links: [
        { title: 'Sign In', href: '/account/login' },
        { title: 'Register', href: '/register' },
        { title: 'Reset Password', href: '/reset-password' },
      ],
    },
  ],
};

/* ─── COMMUNITY ────────────────────────────────── */

export const communityMenu: MegaMenuData = {
  id: 'community',
  label: 'COMMUNITY',
  href: '/community',
  wide: true,
  ctaLabel: 'READ THE BLOG',
  ctaHref: '/blog',
  columns: [
    {
      heading: 'Blog',
      links: [
        { title: 'All Posts', href: '/blog' },
        { title: 'Podcasts', href: '/blog/format/audio', badge: 'new' },
        { title: 'Videos', href: '/blog/format/video' },
        { title: 'Gallery', href: '/blog/format/gallery' },
        { title: 'Asides', href: '/blog/format/aside' },
      ],
    },
    {
      heading: 'Topics',
      links: [
        { title: 'Development', href: '/blog/category/development' },
        { title: 'Design', href: '/blog/category/design' },
        { title: 'News', href: '/blog/category/news' },
      ],
    },
    {
      heading: 'Engage',
      links: [
        { title: 'Community Hub', href: '/community' },
        { title: 'Events', href: '/events' },
        { title: 'Reviews', href: '/reviews' },
        { title: 'Newsletter', href: '/newsletter' },
      ],
    },
  ],
};

/* ─── ABOUT & SUPPORT ──────────────────────────── */

export const aboutMenu: MegaMenuData = {
  id: 'about',
  label: 'ABOUT',
  href: '/about',
  wide: true,
  ctaLabel: 'CONTACT US',
  ctaHref: '/contact',
  columns: [
    {
      heading: 'Company',
      links: [
        { title: 'About Us', href: '/about' },
        { title: 'Our Story', href: '/about/our-story' },
        { title: 'Team', href: '/about/team' },
        { title: 'Sustainability', href: '/about/sustainability' },
        { title: 'Careers', href: '/about/careers' },
        { title: 'Press & Media', href: '/press' },
        { title: 'Store Locator', href: '/stores' },
      ],
    },
    {
      heading: 'Help & Support',
      links: [
        { title: 'Help Center', href: '/help' },
        { title: 'FAQ', href: '/faq' },
        { title: 'Contact Us', href: '/contact' },
        { title: 'Live Chat', href: '/chat', badge: 'live' },
        { title: 'Shipping & Returns', href: '/shipping-returns' },
        { title: 'Returns Portal', href: '/returns' },
        { title: 'Refunds', href: '/refunds' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { title: 'Size Guide', href: '/size-guide' },
        { title: 'Buying Guide', href: '/buying-guide' },
        { title: 'Care Instructions', href: '/care-instructions' },
        { title: 'Warranty', href: '/warranty' },
        { title: 'Accessibility', href: '/accessibility' },
        { title: 'Privacy Policy', href: '/privacy-policy' },
        { title: 'Terms & Conditions', href: '/terms-and-conditions' },
      ],
    },
  ],
};

/* ─── ALL MENUS (ordered) ──────────────────────── */

export const allMenus: MegaMenuData[] = [
  shopMenu,
  dealsMenu,
  membershipsMenu,
  communityMenu,
  aboutMenu,
];