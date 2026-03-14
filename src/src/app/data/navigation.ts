/**
 * Navigation Data
 * 
 * Mock navigation menus for header and footer.
 */

/**
 * @typedef {Object} NavItem
 * @property {string} id
 * @property {string} label
 * @property {string} url
 * @property {string} [badge]
 * @property {NavItem[]} [children]
 * @property {boolean} [megaMenu]
 * @property {NavItem[]} [columns]
 */

/** @type {NavItem[]} */
export const MAIN_MENU = [
  {
    id: 'home',
    label: 'Home',
    url: '/'
  },
  {
    id: 'shop',
    label: 'Shop',
    url: '/shop',
    megaMenu: true,
    children: [
      { id: 'all', label: 'All products', url: '/shop' },
      { id: 'electronics', label: 'Electronics', url: '/shop/category/electronics' },
      { id: 'clothing', label: 'Clothing', url: '/shop/category/clothing' },
      { id: 'home-living', label: 'Home & Living', url: '/shop/category/home-living' },
      { id: 'accessories', label: 'Accessories', url: '/shop/category/accessories' },
      { id: 'sports-fitness', label: 'Sports & Fitness', url: '/shop/category/sports-fitness' },
      { id: 'sale', label: 'Sale', url: '/sale', badge: 'Hot' }
    ]
  },
  {
    id: 'deals',
    label: 'Deals',
    url: '/deals',
    megaMenu: true,
    children: [
      { id: 'sale', label: 'Sale', url: '/sale', badge: 'Hot' },
      { id: 'flash', label: 'Flash sale', url: '/promotions/flash-sale' },
      { id: 'bundles', label: 'Bundle deals', url: '/promotions/bundles' },
      { id: 'clearance', label: 'Clearance', url: '/promotions/clearance' },
      { id: 'gift-cards', label: 'Gift cards', url: '/gift-cards' },
      { id: 'rewards', label: 'Rewards program', url: '/rewards' },
      { id: 'loyalty', label: 'My loyalty', url: '/loyalty' }
    ]
  },
  {
    id: 'blog',
    label: 'Blog',
    url: '/blog',
    megaMenu: true,
    columns: [
      {
        id: 'formats',
        label: 'Formats',
        url: '#',
        children: [
          { id: 'fmt_all', label: 'All posts', url: '/blog' },
          { id: 'fmt_standard', label: 'Articles', url: '/blog/format/standard' },
          { id: 'fmt_audio', label: 'Podcasts', url: '/blog/format/audio', badge: 'New' },
          { id: 'fmt_video', label: 'Videos', url: '/blog/format/video' },
          { id: 'fmt_gallery', label: 'Gallery', url: '/blog/format/gallery' },
          { id: 'fmt_aside', label: 'Updates', url: '/blog/format/aside' }
        ]
      },
      {
        id: 'topics',
        label: 'Topics',
        url: '#',
        children: [
          { id: 'cat_dev', label: 'Development', url: '/blog/category/development' },
          { id: 'cat_design', label: 'Design', url: '/blog/category/design' },
          { id: 'cat_news', label: 'News', url: '/blog/category/news' }
        ]
      },
      {
        id: 'featured',
        label: 'Featured',
        url: '#',
        children: [
           { id: 'feat_scaling', label: 'Scaling WordPress', url: '/blog/open-channels-ash-shaw' },
           { id: 'feat_workflow', label: 'Dev workflow', url: '/blog/lightspeed-dev-workflow' }
        ]
      }
    ]
  },
  {
    id: 'about',
    label: 'About',
    url: '/about',
    megaMenu: true
  },
  {
    id: 'contact',
    label: 'Contact',
    url: '/contact',
    megaMenu: true
  }
];

/** @type {NavItem[]} */
export const FOOTER_MENU_SHOP = [
  { id: 'f_new', label: 'New arrivals', url: '/new-arrivals' },
  { id: 'f_best', label: 'Best sellers', url: '/best-sellers' },
  { id: 'f_sale', label: 'Sale', url: '/sale' },
  { id: 'f_gift', label: 'Gift cards', url: '/gift-cards' }
];

/** @type {NavItem[]} */
export const FOOTER_MENU_SUPPORT = [
  { id: 'f_help', label: 'Help center', url: '/help' },
  { id: 'f_shipping', label: 'Shipping & returns', url: '/shipping-returns' },
  { id: 'f_size', label: 'Size guide', url: '/size-guide' },
  { id: 'f_track', label: 'Track order', url: '/track-order' }
];

/** @type {NavItem[]} */
export const FOOTER_MENU_COMPANY = [
  { id: 'f_about', label: 'About us', url: '/about' },
  { id: 'f_careers', label: 'Careers', url: '/about/careers' },
  { id: 'f_stores', label: 'Store locations', url: '/stores' },
  { id: 'f_privacy', label: 'Privacy policy', url: '/privacy-policy' },
  { id: 'f_terms', label: 'Terms of service', url: '/terms-and-conditions' }
];