/**
 * Footer Mock Data
 *
 * Centralised content for MainFooter and CheckoutFooter.
 * All labels use sentence case. Brand references use "Woo Shop".
 *
 * @module data/footer
 */

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} FooterLink
 * @property {string} id
 * @property {string} label
 * @property {string} url
 */

/**
 * @typedef {Object} FooterColumn
 * @property {string} id
 * @property {string} heading
 * @property {FooterLink[]} links
 */

// ---------------------------------------------------------------------------
// Footer columns
// ---------------------------------------------------------------------------

/** @type {FooterColumn[]} */
export const footerColumns = [
  {
    id: 'shop',
    heading: 'Shop',
    links: [
      { id: 'f_all', label: 'All products', url: '/shop' },
      { id: 'f_new', label: 'New arrivals', url: '/new-arrivals' },
      { id: 'f_best', label: 'Best sellers', url: '/best-sellers' },
      { id: 'f_sale', label: 'Sale', url: '/sale' },
      { id: 'f_gifts', label: 'Gift cards', url: '/gift-cards' },
      { id: 'f_deals', label: 'Deals', url: '/deals' },
    ],
  },
  {
    id: 'company',
    heading: 'Company',
    links: [
      { id: 'f_about', label: 'About us', url: '/about' },
      { id: 'f_story', label: 'Our story', url: '/about/our-story' },
      { id: 'f_team', label: 'Team', url: '/about/team' },
      { id: 'f_careers', label: 'Careers', url: '/about/careers' },
      { id: 'f_press', label: 'Press', url: '/press' },
      { id: 'f_sustain', label: 'Sustainability', url: '/about/sustainability' },
    ],
  },
  {
    id: 'customer-service',
    heading: 'Support',
    links: [
      { id: 'f_help', label: 'Help center', url: '/help' },
      { id: 'f_shipping', label: 'Shipping & delivery', url: '/shipping-returns' },
      { id: 'f_returns', label: 'Returns & exchanges', url: '/returns' },
      { id: 'f_track', label: 'Track your order', url: '/track-order' },
      { id: 'f_size', label: 'Size guide', url: '/size-guide' },
      { id: 'f_faq', label: 'FAQs', url: '/faq' },
      { id: 'f_contact', label: 'Contact us', url: '/contact' },
    ],
  },
  {
    id: 'legal',
    heading: 'Legal',
    links: [
      { id: 'f_privacy', label: 'Privacy policy', url: '/privacy-policy' },
      { id: 'f_terms', label: 'Terms & conditions', url: '/terms-and-conditions' },
      { id: 'f_access', label: 'Accessibility', url: '/accessibility' },
      { id: 'f_sitemap', label: 'Sitemap', url: '/sitemap' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Newsletter section
// ---------------------------------------------------------------------------

export const footerNewsletter = {
  heading: 'Stay in the loop',
  description:
    'Subscribe for exclusive drops, maker stories, and 10% off your first order.',
  placeholder: 'Enter your email',
  buttonText: 'Subscribe',
};

// ---------------------------------------------------------------------------
// Brand blurb (footer brand column)
// ---------------------------------------------------------------------------

export const footerBrandBlurb =
  'Curating beautifully crafted stationery, homewares, and lifestyle essentials since 2020. Curated living, delivered sustainably.';

// ---------------------------------------------------------------------------
// Legal / bottom-bar links
// ---------------------------------------------------------------------------

/** @type {FooterLink[]} */
export const footerLegalLinks = [
  { id: 'fl_privacy', label: 'Privacy', url: '/privacy-policy' },
  { id: 'fl_terms', label: 'Terms', url: '/terms-and-conditions' },
  { id: 'fl_sitemap', label: 'Sitemap', url: '/sitemap' },
];

// ---------------------------------------------------------------------------
// Checkout footer (minimal)
// ---------------------------------------------------------------------------

/** @type {FooterLink[]} */
export const checkoutFooterLinks = [
  { id: 'cf_privacy', label: 'Privacy policy', url: '/privacy-policy' },
  { id: 'cf_terms', label: 'Terms & conditions', url: '/terms-and-conditions' },
  { id: 'cf_returns', label: 'Returns policy', url: '/shipping-returns' },
];

export default {
  footerColumns: footerColumns,
  footerNewsletter: footerNewsletter,
  footerBrandBlurb: footerBrandBlurb,
  footerLegalLinks: footerLegalLinks,
  checkoutFooterLinks: checkoutFooterLinks,
};