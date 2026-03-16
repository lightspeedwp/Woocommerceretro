/**
 * Subscription Plans Mock Data
 * 
 * Contains all data related to subscription products, features, and FAQs
 * for WooCommerce Subscriptions integration.
 * 
 * **Used By:**
 * - SingleSubscription.tsx
 * - SubscriptionLanding.tsx
 * - Account sections
 * 
 * **Data Structure:**
 * - Subscription plans with interval pricing
 * - Subscription features and comparisons
 * - Subscription FAQs
 * - Billing intervals and discounts
 * 
 * @module data/subscriptions
 */

import { Cube as Box, Truck, ArrowClockwise as RotateCw, Gift, Star, Percent, Calendar, Users } from '../utils/phosphor-compat';

/**
 * @typedef {Object} SubscriptionFeature
 * @property {string} id - Unique feature identifier
 * @property {string} name - Feature name
 * @property {string} description - Feature description
 * @property {any} icon - Phosphor icon component
 * @property {Object} availability - Feature availability per plan
 */

/**
 * @typedef {Object} SubscriptionPlan
 * @property {string} id - Unique subscription identifier (slug)
 * @property {string} name - Display name (Monthly, Quarterly, Annual)
 * @property {string} description - Short plan description
 * @property {number} price - Price per interval
 * @property {string} interval - Billing interval (month, quarter, year)
 * @property {string} intervalLabel - Display label for interval
 * @property {number} [trialDays] - Free trial period in days
 * @property {number} [discount] - Discount percentage vs monthly
 * @property {string} [badge] - Optional badge text ("Best Value", "Most Popular")
 * @property {boolean} [popular] - Whether this is the most popular option
 * @property {number} totalValue - Total value received
 * @property {number} savings - Amount saved vs monthly billing
 * @property {string[]} features - List of included features
 * @property {Array} detailedFeatures - Detailed feature breakdown
 */

/**
 * @typedef {Object} SubscriptionFAQ
 * @property {string} id - Unique FAQ identifier
 * @property {string} question - Question text
 * @property {string} answer - Answer text
 * @property {string} [category] - Optional category (Billing, Shipping, etc.)
 */

/**
 * @typedef {Object} SubscriptionBenefit
 * @property {any} icon - Phosphor icon component
 * @property {string} title - Benefit title
 * @property {string} description - Benefit description
 * @property {string} color - CSS text color class
 * @property {string} bg - CSS background color class
 */

/**
 * Subscription Plans
 * 
 * Three billing interval options with increasing savings.
 * 
 * **Intervals:**
 * 1. Monthly - £29.99/month, no commitment
 * 2. Quarterly - £79.99/quarter, save 11% (MOST POPULAR)
 * 3. Annual - £287.99/year, save 20% (BEST VALUE)
 * 
 * @type {SubscriptionPlan[]}
 */
export const subscriptionPlans = [
  {
    id: 'monthly',
    name: 'Monthly',
    description: 'Flexible month-to-month billing',
    price: 29.99,
    interval: 'month',
    intervalLabel: '/month',
    trialDays: 7,
    totalValue: 29.99,
    savings: 0,
    features: [
      'Cancel anytime',
      '1 premium product per month',
      'Free standard shipping',
      'Member-only content access',
      'Exclusive discounts',
    ],
    detailedFeatures: [],
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    description: 'Best balance of value and flexibility',
    price: 79.99,
    interval: 'quarter',
    intervalLabel: '/3 months',
    trialDays: 7,
    discount: 11,
    badge: 'Most popular',
    popular: true,
    totalValue: 90,
    savings: 10.01,
    features: [
      'Save 11% vs monthly',
      '3 premium products per quarter',
      'Free express shipping',
      'Early access to new releases',
      '10% store credit bonus',
      'Priority support',
    ],
    detailedFeatures: [],
  },
  {
    id: 'annual',
    name: 'Annual',
    description: 'Maximum savings for committed subscribers',
    price: 287.99,
    interval: 'year',
    intervalLabel: '/year',
    trialDays: 14,
    discount: 20,
    badge: 'Best value',
    totalValue: 360,
    savings: 72.01,
    features: [
      'Save 20% vs monthly',
      '12 premium products per year',
      'Free worldwide express shipping',
      'Exclusive gift box (4x per year)',
      '15% store credit bonus',
      'VIP concierge support',
      'Birthday surprise gift',
    ],
    detailedFeatures: [],
  },
];

/**
 * Subscription Features (For Comparison Table)
 * 
 * Detailed feature breakdown showing what's included in each plan.
 * 
 * @type {SubscriptionFeature[]}
 */
export const subscriptionFeatures = [
  {
    id: 'products',
    name: 'Premium products',
    description: 'Curated selection of premium items',
    icon: Box,
    availability: {
      monthly: '1 per month',
      quarterly: '3 per quarter',
      annual: '12 per year',
    },
  },
  {
    id: 'shipping',
    name: 'Shipping',
    description: 'Free shipping on all subscription orders',
    icon: Truck,
    availability: {
      monthly: 'Standard',
      quarterly: 'Express',
      annual: 'Worldwide Express',
    },
  },
  {
    id: 'flexibility',
    name: 'Flexibility',
    description: 'Skip, pause, or cancel options',
    icon: RotateCw,
    availability: {
      monthly: true,
      quarterly: true,
      annual: 'Limited',
    },
  },
  {
    id: 'bonus',
    name: 'Bonus gifts',
    description: 'Exclusive surprise gifts',
    icon: Gift,
    availability: {
      monthly: false,
      quarterly: false,
      annual: '4x per year',
    },
  },
  {
    id: 'early-access',
    name: 'Early access',
    description: 'Get new releases before public',
    icon: Star,
    availability: {
      monthly: false,
      quarterly: '24 hours early',
      annual: '48 hours early',
    },
  },
  {
    id: 'store-credit',
    name: 'Store credit bonus',
    description: 'Earn extra store credit',
    icon: Percent,
    availability: {
      monthly: '5%',
      quarterly: '10%',
      annual: '15%',
    },
  },
  {
    id: 'customization',
    name: 'Customization',
    description: 'Personalize your box contents',
    icon: Calendar,
    availability: {
      monthly: 'Basic',
      quarterly: 'Advanced',
      annual: 'Full Control',
    },
  },
  {
    id: 'support',
    name: 'Customer support',
    description: 'Dedicated support team',
    icon: Users,
    availability: {
      monthly: 'Standard',
      quarterly: 'Priority',
      annual: 'VIP Concierge',
    },
  },
];

/**
 * Subscription Benefits
 * 
 * High-level benefit categories for marketing.
 * 
 * @type {SubscriptionBenefit[]}
 */
export const subscriptionBenefits = [
  {
    icon: Box,
    title: 'Curated selection',
    description: 'Hand-picked premium products delivered to your door every month.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-100 dark:bg-purple-950',
  },
  {
    icon: Truck,
    title: 'Free shipping',
    description: 'Never pay for shipping on your subscription orders.',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-950',
  },
  {
    icon: RotateCw,
    title: 'Complete flexibility',
    description: 'Skip, pause, or cancel anytime with no penalties.',
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-950',
  },
  {
    icon: Gift,
    title: 'Exclusive perks',
    description: 'Early access, bonus gifts, and members-only discounts.',
    color: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-100 dark:bg-yellow-950',
  },
];

/**
 * Subscription FAQs
 * 
 * Comprehensive FAQ list addressing common subscription questions.
 * 
 * @type {SubscriptionFAQ[]}
 */
export const subscriptionFAQs = [
  {
    id: '1',
    question: 'How does the subscription work?',
    answer: 'Choose your billing frequency (monthly, quarterly, or annual). We\'ll ship a curated box of premium products at the start of each billing period. You can skip, pause, or cancel anytime.',
    category: 'General',
  },
  {
    id: '2',
    question: 'When will I be charged?',
    answer: 'Your first charge occurs immediately when you subscribe. After that, you\'ll be charged at the start of each billing period (monthly, quarterly, or annually depending on your plan).',
    category: 'Billing',
  },
  {
    id: '3',
    question: 'Can I skip a month?',
    answer: 'Yes! Monthly and quarterly subscribers can skip any delivery. Just log into your account and click "Skip Next Box" before the processing date (5 days before shipment).',
    category: 'Flexibility',
  },
  {
    id: '4',
    question: 'What if I don\'t like a product?',
    answer: 'We stand behind our curation! If you\'re not satisfied with any product, contact us within 14 days for a replacement or store credit.',
    category: 'Returns',
  },
  {
    id: '5',
    question: 'Can I cancel my subscription?',
    answer: 'Absolutely! You can cancel anytime with no fees. Monthly and quarterly subscriptions end at the current billing period. Annual subscriptions may be eligible for prorated refunds.',
    category: 'Cancellation',
  },
  {
    id: '6',
    question: 'Can I customize my box?',
    answer: 'Yes! Quarterly and annual subscribers can set preferences (style, size, color) and exclude specific product types. Monthly subscribers get our expert curation.',
    category: 'Customization',
  },
  {
    id: '7',
    question: 'When will my box ship?',
    answer: 'Boxes ship on the 1st of each month (monthly), or the 1st of each quarter (quarterly), or the 1st of your anniversary month (annual). You\'ll receive tracking once shipped.',
    category: 'Shipping',
  },
  {
    id: '8',
    question: 'How much is shipping?',
    answer: 'Shipping is always FREE on subscription boxes! We cover all shipping costs so you get maximum value.',
    category: 'Shipping',
  },
  {
    id: '9',
    question: 'Can I purchase additional products?',
    answer: 'Yes! Subscribers get exclusive access to our subscriber shop with special pricing. Your store credit bonus applies to these purchases too.',
    category: 'Shopping',
  },
  {
    id: '10',
    question: 'What\'s the difference between plans?',
    answer: 'All plans include premium products and free shipping. Longer commitments (quarterly/annual) get better pricing, bonus gifts, higher store credit, and enhanced customization options.',
    category: 'Plans',
  },
  {
    id: '11',
    question: 'Can I pause my subscription?',
    answer: 'Yes! You can pause for 1-3 months. Your billing date will shift accordingly. This is perfect for vacations or if you have too much inventory.',
    category: 'Flexibility',
  },
  {
    id: '12',
    question: 'Do you ship internationally?',
    answer: 'We ship to the US, Canada, UK, and EU. Annual subscribers get free worldwide express shipping. Monthly and quarterly subscribers pay standard international rates.',
    category: 'Shipping',
  },
];

/**
 * Helper function to calculate subscription savings
 * 
 * Compares a plan's cost to monthly billing over the same period.
 * 
 * @param {Object} plan - Subscription plan
 * @returns {Object} Savings breakdown
 */
export const calculateSubscriptionSavings = (plan) => {
  const monthlyPlan = subscriptionPlans.find((p) => p.id === 'monthly');
  if (!monthlyPlan) {
    return { totalCost: 0, monthlyEquivalent: 0, savings: 0, savingsPercent: 0 };
  }

  const months = plan.interval === 'quarter' ? 3 : plan.interval === 'year' ? 12 : 1;
  const monthlyEquivalent = monthlyPlan.price * months;
  const savings = monthlyEquivalent - plan.price;
  const savingsPercent = (savings / monthlyEquivalent) * 100;

  return {
    totalCost: plan.price,
    monthlyEquivalent: Math.round(monthlyEquivalent * 100) / 100,
    savings: Math.round(savings * 100) / 100,
    savingsPercent: Math.round(savingsPercent),
  };
}

/**
 * Helper function to get subscription plan by ID
 * 
 * @param {string} planId - Plan identifier
 * @returns {Object|undefined} Subscription plan or undefined
 */
export const getSubscriptionPlanById = (planId) => {
  return subscriptionPlans.find((plan) => plan.id === planId);
}

/**
 * Helper function to get most popular subscription plan
 * 
 * @returns {Object} Most popular subscription plan
 */
export const getPopularSubscriptionPlan = () => {
  return subscriptionPlans.find((plan) => plan.popular) || subscriptionPlans[1];
}

/**
 * Helper function to get best value subscription plan
 * 
 * @returns {Object} Best value subscription plan
 */
export const getBestValueSubscriptionPlan = () => {
  return subscriptionPlans.find((plan) => plan.badge === 'Best Value') || subscriptionPlans[2];
}

/**
 * Helper function to filter FAQs by category
 * 
 * @param {string} category - FAQ category
 * @returns {Array} Filtered FAQs
 */
export const getSubscriptionFAQsByCategory = (category) => {
  return subscriptionFAQs.filter((faq) => faq.category === category);
}

/**
 * Helper function to get unique FAQ categories
 * 
 * @returns {string[]} Array of unique category names
 */
export const getSubscriptionFAQCategories = () => {
  const categories = subscriptionFAQs
    .map((faq) => faq.category)
    .filter((category) => category !== undefined);
  return Array.from(new Set(categories)).sort();
}

/**
 * How It Works Steps
 */
export const howItWorksSteps = [
  {
    id: '1',
    step: '1',
    title: 'Choose Your Plan',
    description: 'Select the subscription frequency that works best for you.',
  },
  {
    id: '2',
    step: '2',
    title: 'Personalize',
    description: 'Tell us about your preferences and style.',
  },
  {
    id: '3',
    step: '3',
    title: 'Receive & Enjoy',
    description: 'Get your curated box delivered right to your door.',
  },
];

/**
 * Subscription Testimonials
 */
export const subscriptionTestimonials = [
  {
    id: '1',
    quote: 'The quarterly box is perfect! I love discovering new products without the commitment of monthly deliveries. The quality is always top-notch.',
    author: 'Sarah Mitchell',
    role: 'Annual Subscriber',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Best decision ever! The flexibility to pause or cancel is amazing, and the member discounts have saved me more than the subscription costs.',
    author: 'James Thompson',
    role: 'Monthly Subscriber',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The annual plan is incredible value. I\'ve discovered so many amazing products I wouldn\'t have found otherwise. Highly recommend!',
    author: 'Emily Chen',
    role: 'Annual Subscriber',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    rating: 5,
  },
];

/**
 * Subscription Product Images
 */
export const subscriptionProductImages = {
  main: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=800',
  gallery: [
    'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1607083206871-cb19906b28b5?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?auto=format&fit=crop&q=80&w=200',
  ]
};

export const subscriptionPageContent = {
  landing: {
    heroTitle: "Discover Something New Every Month",
    heroSubtitle: "Join thousands of happy subscribers who receive hand-curated products delivered to their door. Flexible plans, exclusive perks, and the freedom to pause or cancel anytime.",
    heroBadge: "50% off your first box with code WELCOME50",
    benefitsHeading: "Why Subscribe?",
    benefitsText: "More than just products—it's an experience designed around your lifestyle.",
    pricingHeading: "Choose Your Perfect Plan",
    pricingSubheading: "All plans include free shipping, member discounts, and the flexibility to pause or cancel anytime.",
    howItWorksHeading: "How It Works",
    howItWorksText: "Getting started is simple. Here's what to expect.",
    testimonialsHeading: "Loved by Thousands",
    testimonialsText: "See what our subscribers have to say about their experience.",
    faqHeading: "Frequently Asked Questions",
    faqText: "Got questions? We've got answers.",
    ctaHeading: "Ready to Start Your Subscription?",
    ctaText: "Join 12,000+ happy subscribers and get 50% off your first box with code WELCOME50.",
    ctaButton: "Choose Your Plan"
  },
  single: {
    title: "Curated Discovery Box",
    description: "Discover new favorites every delivery with our hand-curated subscription box. Each box contains 4-5 premium products selected by our expert team, delivered on your schedule.",
    rating: "4.9/5 (847 reviews)",
    badge: "Subscription Box"
  }
};

export default {
  subscriptionPlans,
  subscriptionFeatures,
  subscriptionBenefits,
  subscriptionFAQs,
  calculateSubscriptionSavings,
  getSubscriptionPlanById,
  getPopularSubscriptionPlan,
  getBestValueSubscriptionPlan,
  getSubscriptionFAQsByCategory,
  getSubscriptionFAQCategories,
  howItWorksSteps,
  subscriptionTestimonials,
  subscriptionProductImages,
  subscriptionPageContent
};