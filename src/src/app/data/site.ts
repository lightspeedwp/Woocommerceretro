/**
 * Site & Brand Identity Data
 *
 * Centralised brand identity for the *Woo Shop* prototype.
 */

// ---------------------------------------------------------------------------
// Brand identity
// ---------------------------------------------------------------------------

export var brand = {
  name: 'Woo Shop',
  tagline: 'Curated living, delivered to your door',
  description: 'Woo Shop curates beautifully crafted stationery, homewares, and lifestyle essentials from independent makers around the world.',
  legalEntity: 'Woo Shop Ltd.',
  foundedYear: 2020,
  url: 'https://wooshop.com',
  supportEmail: 'hello@wooshop.com',
  phone: '+1 (555) 420-7272',
  address: {
    street: '88 Commerce Street',
    city: 'Brooklyn',
    state: 'NY',
    postcode: '11201',
    country: 'United States'
  }
};

// ---------------------------------------------------------------------------
// Social media links
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} SocialLink
 * @property {string} id
 * @property {string} platform
 * @property {string} label
 * @property {string} url
 * @property {string} icon - Phosphor icon name
 */

/** @type {SocialLink[]} */
export var socialLinks = [
  { id: 'instagram', platform: 'Instagram', label: 'Follow us on Instagram', url: 'https://instagram.com/wooshop', icon: 'Instagram' },
  { id: 'facebook', platform: 'Facebook', label: 'Like us on Facebook', url: 'https://facebook.com/wooshop', icon: 'Facebook' },
  { id: 'twitter', platform: 'X (Twitter)', label: 'Follow us on X', url: 'https://x.com/wooshop', icon: 'Twitter' },
  { id: 'pinterest', platform: 'Pinterest', label: 'Pin with us on Pinterest', url: 'https://pinterest.com/wooshop', icon: 'Pin' },
  { id: 'youtube', platform: 'YouTube', label: 'Subscribe on YouTube', url: 'https://youtube.com/@wooshop', icon: 'Youtube' },
  { id: 'linkedin', platform: 'LinkedIn', label: 'Connect on LinkedIn', url: 'https://linkedin.com/company/wooshop', icon: 'Linkedin' }
];

// ---------------------------------------------------------------------------
// Copyright & legal
// ---------------------------------------------------------------------------

export var legal = {
  copyrightNotice: function(year) {
    return '\u00A9 ' + year + ' ' + brand.legalEntity + ' All rights reserved.';
  },
  privacyPolicyUrl: '/privacy-policy',
  termsUrl: '/terms-and-conditions',
  accessibilityUrl: '/accessibility',
  cookiePolicyUrl: '/privacy-policy#cookies'
};

// ---------------------------------------------------------------------------
// Payment methods accepted
// ---------------------------------------------------------------------------

export var paymentMethods = [
  { id: 'visa', name: 'Visa', icon: 'credit-card' },
  { id: 'mastercard', name: 'Mastercard', icon: 'credit-card' },
  { id: 'amex', name: 'American Express', icon: 'credit-card' },
  { id: 'paypal', name: 'PayPal', icon: 'wallet' },
  { id: 'apple-pay', name: 'Apple Pay', icon: 'smartphone' },
  { id: 'google-pay', name: 'Google Pay', icon: 'smartphone' }
];

// ---------------------------------------------------------------------------
// Brand voice & tone keywords (for reference)
// ---------------------------------------------------------------------------

export var voiceTone = {
  adjectives: ['curated', 'crafted', 'thoughtful', 'artisan', 'timeless', 'modern'],
  avoidWords: ['cheap', 'bargain', 'buy now', 'limited time only', 'act fast', 'hurry'],
  toneExamples: {
    greeting: 'Welcome to a world of curated living.',
    cta: 'Explore the collection',
    error: 'Something went wrong on our end. We are looking into it — please try again shortly.',
    empty: 'Your cart is waiting. Explore our curated collection to find something you will love.'
  }
};

export default {
  brand: brand,
  socialLinks: socialLinks,
  legal: legal,
  paymentMethods: paymentMethods,
  voiceTone: voiceTone
};