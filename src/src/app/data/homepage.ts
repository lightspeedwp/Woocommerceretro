/**
 * Homepage Mock Data
 *
 * Optimized for Figma Make parser:
 * 1. ASCII characters only
 * 2. No modern JS
 */

import { Truck, ArrowCounterClockwise as RotateCcw, Shield, Headphones } from '@phosphor-icons/react';

/**
 * @typedef {Object} HeroContent
 * @property {string} heading
 * @property {string} subheading
 * @property {{ label: string; href: string }} primaryCta
 * @property {{ label: string; href: string }} secondaryCta
 * @property {string} backgroundImage
 */

/** @type {HeroContent} */
export var heroContent = {
  heading: 'Curated living, delivered to your door',
  subheading: 'Discover our curated collection of stationery, homewares, and lifestyle essentials - crafted with care, shipped sustainably.',
  primaryCta: { label: 'Explore the collection', href: '/shop' },
  secondaryCta: { label: 'New arrivals', href: '/new-arrivals' },
  backgroundImage: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1600&auto=format&fit=crop'
};

/**
 * @typedef {Object} FeatureTile
 * @property {string} id
 * @property {*} icon
 * @property {string} title
 * @property {string} description
 * @property {string} href
 */

/** @type {FeatureTile[]} */
export var featureTiles = [
  {
    id: 'shipping',
    icon: Truck,
    title: 'Free shipping',
    description: 'On orders over GBP 50',
    href: '/shipping-returns'
  },
  {
    id: 'returns',
    icon: RotateCcw,
    title: 'Easy returns',
    description: '30-day return window',
    href: '/returns'
  },
  {
    id: 'secure',
    icon: Shield,
    title: 'Secure checkout',
    description: '100% payment protection',
    href: '/faq'
  },
  {
    id: 'support',
    icon: Headphones,
    title: 'Friendly support',
    description: 'Real humans, real help',
    href: '/help'
  }
];

/**
 * @typedef {Object} CategoryShowcase
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} image
 * @property {string} description
 * @property {number} productCount
 */

/** @type {CategoryShowcase[]} */
export var categoryShowcase = [
  {
    id: 'stationery',
    name: 'Stationery',
    slug: 'stationery',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop',
    description: 'Notebooks, pens & paper goods',
    productCount: 186
  },
  {
    id: 'desk',
    name: 'Desk & office',
    slug: 'desk-office',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop',
    description: 'Organisers, accessories & tools',
    productCount: 124
  },
  {
    id: 'home',
    name: 'Home & living',
    slug: 'home-living',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    description: 'Candles, prints & homewares',
    productCount: 97
  },
  {
    id: 'gifts',
    name: 'Gifts & wrapping',
    slug: 'gifts',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238f495?q=80&w=800&auto=format&fit=crop',
    description: 'Thoughtful gifts for every occasion',
    productCount: 142
  }
];

export var collectionRowContent = {
  trending: {
    title: 'Trending now',
    description: 'The most popular picks this week',
    viewAllLink: '/shop?sort=newest'
  },
  bestSellers: {
    title: 'Best sellers',
    description: 'Customer favourites, tried and loved',
    viewAllLink: '/best-sellers'
  }
};

/**
 * @typedef {Object} BrandStory
 * @property {string} heading
 * @property {string} body
 * @property {string} image
 * @property {string} ctaLabel
 * @property {string} ctaHref
 */

/** @type {BrandStory} */
export var brandStory = {
  heading: 'Crafted with care, built to last',
  body: 'Every item in our collection is thoughtfully curated, ethically sourced, and designed to stand the test of time. We believe quality should be accessible to everyone.',
  image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1632&auto=format&fit=crop',
  ctaLabel: 'Our story',
  ctaHref: '/about'
};

export var newsletterContent = {
  heading: 'Join the Woo Shop community',
  subheading: 'Subscribe for early access to new arrivals, maker stories, and an exclusive 10% off your first order.',
  placeholder: 'Your email address',
  buttonText: 'Subscribe'
};

export var shopByCategoryHeading = {
  title: 'Shop by category',
  headingLevel: 2
};

export default {
  heroContent: heroContent,
  featureTiles: featureTiles,
  categoryShowcase: categoryShowcase,
  collectionRowContent: collectionRowContent,
  brandStory: brandStory,
  newsletterContent: newsletterContent,
  shopByCategoryHeading: shopByCategoryHeading,
};