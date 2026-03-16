/**
 * Trust Features Mock Data
 * 
 * Optimized for Figma Make parser:
 * 1. No optional chaining, nullish coalescing, or spread at module level
 * 2. ASCII characters only
 * 
 * @typedef {Object} TrustFeature
 * @property {string} id
 * @property {any} icon
 * @property {string} title
 * @property {string} description
 */

import { ShieldCheck, Truck, CreditCard, Headphones, Medal as Award, ArrowsClockwise as RefreshCw, Lock, UserCircleCheck as UserCheck, Eye } from '../utils/phosphor-compat';

export const trustFeatures = [
  {
    id: 'secure',
    icon: ShieldCheck,
    title: 'Secure checkout',
    description: 'Your data is protected',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Free shipping',
    description: 'On orders over $50',
  },
  {
    id: 'payment',
    icon: CreditCard,
    title: 'Easy returns',
    description: '30-day money back',
  },
  {
    id: 'support',
    icon: Headphones,
    title: '24/7 support',
    description: 'We are here to help',
  },
];

export const extendedTrustFeatures = (() => {
  const result = [];
  for (let i = 0; i < trustFeatures.length; i++) {
    result.push(trustFeatures[i]);
  }
  result.push({
    id: 'quality',
    icon: Award,
    title: 'Premium quality',
    description: 'Curated products only',
  });
  result.push({
    id: 'warranty',
    icon: RefreshCw,
    title: '1-year warranty',
    description: 'Full coverage included',
  });
  return result;
})();

export const loginTrustFeatures = [
  {
    id: 'secure-account',
    icon: ShieldCheck,
    title: 'Secure Account',
    description: 'Bank-level encryption',
  },
  {
    id: 'privacy',
    icon: Lock,
    title: 'Privacy Protected',
    description: 'Your data is safe',
  },
  {
    id: 'verified',
    icon: UserCheck,
    title: 'Verified Identity',
    description: '2-factor authentication',
  },
  {
    id: 'transparent',
    icon: Eye,
    title: 'Transparent',
    description: 'No hidden terms',
  },
];

/**
 * @param {string[]} ids
 * @returns {Array}
 */
export const getTrustFeaturesById = (ids) => {
  const result = [];
  for (let i = 0; i < extendedTrustFeatures.length; i++) {
    if (ids.indexOf(extendedTrustFeatures[i].id) !== -1) {
      result.push(extendedTrustFeatures[i]);
    }
  }
  return result;
}

/**
 * @param {string} context
 * @returns {Array}
 */
export const getTrustFeaturesForContext = (context) => {
  if (context === 'checkout') {
    return getTrustFeaturesById(['secure', 'support', 'payment']);
  } else if (context === 'product') {
    return getTrustFeaturesById(['shipping', 'payment', 'warranty']);
  } else if (context === 'footer') {
    return getTrustFeaturesById(['secure', 'shipping', 'support']);
  }
  return trustFeatures;
}

export default {
  trustFeatures: trustFeatures,
  extendedTrustFeatures: extendedTrustFeatures,
  loginTrustFeatures: loginTrustFeatures,
  getTrustFeaturesById: getTrustFeaturesById,
  getTrustFeaturesForContext: getTrustFeaturesForContext,
};