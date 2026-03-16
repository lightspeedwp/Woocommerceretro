/**
 * Homepage Mock Data
 *
 * Optimized for Figma Make parser:
 * 1. No optional chaining, nullish coalescing, or spread at module level
 * 2. ASCII characters only
 */

import { Truck, ArrowCounterClockwise as RotateCcw, Shield, Headphones } from '../utils/phosphor-compat';

/**
 * @typedef {Object} HeroContent
 * @property {string} heading
 * @property {string} subheading
 * @property {{ label: string; href: string }} primaryCta
 * @property {{ label: string; href: string }} secondaryCta
 * @property {string} backgroundImage
 */

/** @type {HeroContent} */
export const heroContent = {
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
export const featureTiles = [
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
export const categoryShowcase = [
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1761641466573-f240b6e446de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: 'Tech gadgets and devices',
    productCount: 15
  },
  {
    id: 'clothing',
    name: 'Clothing',
    slug: 'clothing',
    image: 'https://images.unsplash.com/photo-1769107805465-bfd41863f1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: 'Modern apparel & fashion',
    productCount: 24
  },
  {
    id: 'home',
    name: 'Home & living',
    slug: 'home-living',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    description: 'Candles, prints & homewares',
    productCount: 32
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.unsplash.com/photo-1589524405310-640b626b0abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: 'Watches, bags & essentials',
    productCount: 18
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    slug: 'sports-fitness',
    image: 'https://images.unsplash.com/photo-1771586791190-97ed536c54af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: 'Gym gear & equipment',
    productCount: 12
  }
];

export const collectionRowContent = {
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
export const brandStory = {
  heading: 'Crafted with care, built to last',
  body: 'Every item in our collection is thoughtfully curated, ethically sourced, and designed to stand the test of time. We believe quality should be accessible to everyone.',
  image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1632&auto=format&fit=crop',
  ctaLabel: 'Our story',
  ctaHref: '/about'
};

export const newsletterContent = {
  heading: 'Join the Woo Shop community',
  subheading: 'Subscribe for early access to new arrivals, maker stories, and an exclusive 10% off your first order.',
  placeholder: 'Your email address',
  buttonText: 'Subscribe'
};

export const shopByCategoryHeading = {
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