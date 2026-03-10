/**
 * Membership Plans Mock Data
 * 
 * Contains all data related to membership tiers, benefits, testimonials, and FAQs
 * for WooCommerce Memberships integration.
 * 
 * **Used By:**
 * - SingleMembership.tsx
 * - MembershipLanding.tsx
 * - Account sections
 * 
 * **Data Structure:**
 * - Membership plans with tiered pricing
 * - Member benefits and perks
 * - Member testimonials with savings data
 * - Membership FAQs
 * - Value calculators
 * 
 * @module data/memberships
 */

import { Percent, Bag as ShoppingBag, Lightning as Zap, Users, Crown, Gift, Star, Check } from '@phosphor-icons/react';
// Type references (JSDoc only - no runtime import needed):
// PhosphorIcon (React.ComponentType)

/**
 * @typedef {Object} MembershipFeature
 * @property {string} text - Feature name/title
 * @property {string} [description] - Optional detailed description
 */

/**
 * @typedef {Object} MembershipPlan
 * @property {string} id - Unique plan identifier (slug)
 * @property {string} name - Display name (Basic, Premium, VIP)
 * @property {string} description - Short plan description
 * @property {number} monthlyPrice - Monthly subscription price
 * @property {number} annualPrice - Annual subscription price
 * @property {number} annualSavings - Amount saved with annual billing
 * @property {string} discount - Discount percentage (e.g., "10%")
 * @property {string} [badge] - Optional badge text ("Most Popular", "Best Value")
 * @property {boolean} [popular] - Whether this is the most popular tier
 * @property {MembershipFeature[]} features - List of included features
 * @property {string[]} exclusivePerks - List of exclusive perks
 */

/**
 * @typedef {Object} MemberBenefit
 * @property {any} icon - Phosphor icon component
 * @property {string} title - Benefit title
 * @property {string} description - Benefit description
 * @property {string} color - CSS color class
 * @property {string} bg - CSS background color class
 */

/**
 * @typedef {Object} MemberTestimonial
 * @property {string} id - Unique testimonial identifier
 * @property {string} name - Member name
 * @property {string} tier - Membership tier (Basic, Premium, VIP)
 * @property {string} memberSince - Year joined
 * @property {string} image - Profile image URL
 * @property {string} quote - Testimonial text
 * @property {number} rating - Star rating (1-5)
 * @property {string} savings - Total savings amount
 */

/**
 * @typedef {Object} MembershipFAQ
 * @property {string} id - Unique FAQ identifier
 * @property {string} question - Question text
 * @property {string} answer - Answer text
 * @property {string} [category] - Optional category (Billing, Benefits, etc.)
 */

/**
 * @typedef {Object} MembershipStat
 * @property {string} value - Stat value (e.g., "25,000+")
 * @property {string} label - Stat label (e.g., "Active Members")
 * @property {string} [description] - Optional description
 */

/**
 * Membership Plans
 * 
 * Three-tier membership system with increasing benefits.
 * 
 * **Tiers:**
 * 1. Basic - 10% discount, free standard shipping
 * 2. Premium - 20% discount, free express shipping (MOST POPULAR)
 * 3. VIP - 30% discount, free worldwide shipping
 * 
 * @type {MembershipPlan[]}
 */
export var membershipPlans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for occasional shoppers',
    monthlyPrice: 9.99,
    annualPrice: 95.99,
    annualSavings: 24,
    discount: '10%',
    features: [
      { text: '10% off all purchases', description: 'Automatic discount at checkout' },
      { text: 'Free standard shipping', description: 'On orders over £50' },
      { text: 'Early sale access', description: '24 hours before public' },
      { text: 'Member community', description: 'Access to private forums' },
      { text: 'Birthday discount', description: 'Extra 15% off during birthday month' },
    ],
    exclusivePerks: [
      'Monthly newsletter with tips',
      'Access to member-only content',
      'Priority customer support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Best for regular shoppers',
    monthlyPrice: 19.99,
    annualPrice: 191.99,
    annualSavings: 48,
    discount: '20%',
    badge: 'Most popular',
    popular: true,
    features: [
      { text: '20% off all purchases', description: 'Automatic discount at checkout' },
      { text: 'Free express shipping', description: 'On all orders, no minimum' },
      { text: 'Early sale access', description: '48 hours before public' },
      { text: 'Member-only products', description: 'Exclusive collections' },
      { text: 'VIP events', description: 'Invitations to special events' },
      { text: 'Quarterly gift', description: 'Surprise premium product' },
    ],
    exclusivePerks: [
      'Personal style consultation',
      'Product testing opportunities',
      'VIP community access',
      'Extended return window (60 days)',
    ],
  },
  {
    id: 'vip',
    name: 'VIP',
    description: 'Ultimate exclusive experience',
    monthlyPrice: 39.99,
    annualPrice: 383.99,
    annualSavings: 96,
    discount: '30%',
    badge: 'Best value',
    features: [
      { text: '30% off all purchases', description: 'Maximum savings on everything' },
      { text: 'Free worldwide shipping', description: 'Express delivery included' },
      { text: 'First sale access', description: '72 hours before public' },
      { text: 'All exclusive products', description: 'Full collection access' },
      { text: 'Private events', description: 'Exclusive VIP shopping experiences' },
      { text: 'Personal concierge', description: 'Dedicated support team' },
      { text: 'Luxury gifts', description: 'Premium quarterly surprises' },
    ],
    exclusivePerks: [
      'Personal stylist sessions',
      'First access to new collections',
      'Invite to annual VIP gala',
      'Lifetime return policy',
      'Priority product reservations',
    ],
  },
];

/**
 * Member Benefits
 * 
 * High-level benefit categories displayed with icons.
 * Used for "Why Members Love Us" section.
 * 
 * @type {MemberBenefit[]}
 */
export var memberBenefits = [
  {
    icon: Percent,
    title: 'Instant savings',
    description: 'Your discount applies automatically at checkout on every purchase.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-100 dark:bg-purple-950',
  },
  {
    icon: ShoppingBag,
    title: 'Exclusive access',
    description: 'Shop limited-edition products and member-only collections.',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-950',
  },
  {
    icon: Zap,
    title: 'Priority treatment',
    description: 'Get early access to sales and new releases before anyone else.',
    color: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-100 dark:bg-yellow-950',
  },
  {
    icon: Users,
    title: 'VIP community',
    description: 'Join exclusive events and connect with fellow members.',
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-950',
  },
];

/**
 * Member Testimonials
 * 
 * Real customer success stories with savings data.
 * Used for social proof and conversion optimization.
 * 
 * @type {MemberTestimonial[]}
 */
export var memberTestimonials = [
  {
    id: '1',
    name: 'Jessica Martinez',
    tier: 'VIP member',
    memberSince: '2023',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=100',
    quote: 'The VIP membership is incredible. The 30% discount has saved me over £1,200 this year, and the personal stylist service is absolutely worth it. Best investment I\'ve made!',
    rating: 5,
    savings: '£1,247',
  },
  {
    id: '2',
    name: 'Thomas Green',
    tier: 'Premium member',
    memberSince: '2023',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    quote: 'I was skeptical at first, but the Premium membership has paid for itself many times over. The 20% discount and free express shipping are game-changers.',
    rating: 5,
    savings: '£680',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    tier: 'Basic member',
    memberSince: '2024',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    quote: 'Even the Basic membership is fantastic value. The 10% discount adds up quickly, and I love getting early access to sales. Highly recommend!',
    rating: 5,
    savings: '£285',
  },
  {
    id: '4',
    name: 'Michael Chen',
    tier: 'Premium member',
    memberSince: '2022',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    quote: 'The member-only products are worth the membership alone. I\'ve found so many unique items that aren\'t available to the general public. Love it!',
    rating: 5,
    savings: '£920',
  },
];

/**
 * Membership FAQs
 * 
 * Comprehensive FAQ list addressing common questions.
 * Organized by category for easy filtering.
 * 
 * @type {MembershipFAQ[]}
 */
export var membershipFAQs = [
  {
    id: '1',
    question: 'How does my membership discount work?',
    answer: 'Your membership discount is automatically applied to your cart at checkout. There\'s nothing you need to do - just shop as normal and watch the savings add up! The discount applies to all eligible products including sale items.',
    category: 'Benefits',
  },
  {
    id: '2',
    question: 'Can I switch membership tiers?',
    answer: 'Yes! You can upgrade or downgrade your membership at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle.',
    category: 'Account',
  },
  {
    id: '3',
    question: 'What\'s the difference between monthly and annual billing?',
    answer: 'With monthly billing, you pay each month. With annual billing, you pay once per year and save up to 20%. Annual members also get extended trial periods and additional perks.',
    category: 'Billing',
  },
  {
    id: '4',
    question: 'Do member-only products cost extra?',
    answer: 'No! Member-only products are exclusive collections available only to members, but they\'re priced the same as our regular products and your membership discount still applies.',
    category: 'Products',
  },
  {
    id: '5',
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your membership at any time with no cancellation fees. You\'ll retain your benefits until the end of your current billing period.',
    category: 'Account',
  },
  {
    id: '6',
    question: 'Is there a trial period?',
    answer: 'Yes! New members get a 30-day satisfaction guarantee. If you\'re not completely satisfied, cancel within 30 days for a full refund.',
    category: 'Billing',
  },
  {
    id: '7',
    question: 'Can I use my discount on sale items?',
    answer: 'Absolutely! Your membership discount stacks on top of any sale prices, giving you the best possible deals on already-discounted items.',
    category: 'Benefits',
  },
  {
    id: '8',
    question: 'How do I access member-only products?',
    answer: 'Once you\'re a member, you\'ll see a "Member Exclusives" section in the navigation menu and special "Members Only" badges on exclusive products throughout the site.',
    category: 'Products',
  },
  {
    id: '9',
    question: 'What happens if I forget to use my discount?',
    answer: 'Don\'t worry! Your discount is automatically applied at checkout - you never have to remember to enter a code or click a button. It just works.',
    category: 'Benefits',
  },
  {
    id: '10',
    question: 'Can I share my membership with family?',
    answer: 'Memberships are for individual use only. However, VIP members can purchase discounted gift cards for family members at their member discount rate.',
    category: 'Account',
  },
];

/**
 * Membership Stats
 * 
 * Key statistics displayed on the membership landing page.
 * Used for social proof and conversion optimization.
 * 
 * @type {MembershipStat[]}
 */
export var membershipStats = [
  {
    value: '25,000+',
    label: 'Active members',
    description: 'Join our growing community of savvy shoppers',
  },
  {
    value: '£650',
    label: 'Average annual savings',
    description: 'Based on Premium membership holders',
  },
  {
    value: '4.9/5',
    label: 'Member satisfaction',
    description: 'From over 5,000 reviews',
  },
  {
    value: '95%',
    label: 'Renewal rate',
    description: 'Members love their benefits',
  },
];

/**
 * Helper function to calculate membership ROI
 * 
 * Calculates the return on investment for a membership based on average monthly spend.
 * 
 * @param {number} monthlySpend - Average monthly spend
 * @param {string} discountPercent - Discount percentage (e.g., "20%")
 * @param {number} membershipCost - Monthly membership cost
 * @returns {Object} ROI breakdown with monthly and annual savings
 */
export function calculateMembershipROI(monthlySpend, discountPercent, membershipCost) {
  var discountRate = parseFloat(discountPercent) / 100;
  var monthlySavings = monthlySpend * discountRate;
  var netSavings = monthlySavings - membershipCost;
  var annualSavings = netSavings * 12;

  return {
    monthlySavings: Math.round(monthlySavings * 100) / 100,
    membershipCost: membershipCost,
    netSavings: Math.round(netSavings * 100) / 100,
    annualSavings: Math.round(annualSavings * 100) / 100,
  };
}

/**
 * Helper function to get membership plan by ID
 * 
 * @param {string} planId - Plan identifier
 * @returns {Object|undefined} Membership plan or undefined if not found
 */
export function getMembershipPlanById(planId) {
  return membershipPlans.find(function(plan) { return plan.id === planId; });
}

/**
 * Helper function to get most popular membership plan
 * 
 * @returns {Object} Most popular membership plan
 */
export function getPopularMembershipPlan() {
  return membershipPlans.find(function(plan) { return plan.popular; }) || membershipPlans[1];
}

/**
 * Helper function to filter FAQs by category
 * 
 * @param {string} category - FAQ category
 * @returns {Array} Filtered FAQs
 */
export function getMembershipFAQsByCategory(category) {
  return membershipFAQs.filter(function(faq) { return faq.category === category; });
}

export default {
  membershipPlans: membershipPlans,
  memberBenefits: memberBenefits,
  memberTestimonials: memberTestimonials,
  membershipFAQs: membershipFAQs,
  membershipStats: membershipStats,
  calculateMembershipROI: calculateMembershipROI,
  getMembershipPlanById: getMembershipPlanById,
  getPopularMembershipPlan: getPopularMembershipPlan,
  getMembershipFAQsByCategory: getMembershipFAQsByCategory,
};