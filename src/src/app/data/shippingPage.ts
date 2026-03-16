/**
 * Shipping & Returns Page Data — PlayPocket Retro Theme
 *
 * All content for the Shipping & Logistics page template.
 * Keeps templates data-driven with zero hardcoded strings.
 *
 * @module data/shippingPage
 */

export interface ShippingRate {
  speed: string;
  time: string;
  cost: string;
}

export interface ShippingSection {
  icon: string;
  title: string;
  content?: string;
  rates?: ShippingRate[];
}

export const shippingPageContent = {
  heroTitle: 'SHIPPING & LOGISTICS',
  heroSubtitle: 'How we get your loot to your base.',
  heroIcon: 'Truck'
};

export const domesticRates: ShippingRate[] = [
  { speed: 'Standard (Free over $50)', time: '3-5 Business Days', cost: '$5.00' },
  { speed: 'Expedited', time: '2 Business Days', cost: '$12.00' },
  { speed: 'Next Day / Warp Speed', time: '1 Business Day', cost: '$25.00' }
];

export const internationalRates: ShippingRate[] = [
  { speed: 'International Standard', time: '7-14 Business Days', cost: 'From $15.00' },
  { speed: 'International Express', time: '3-5 Business Days', cost: 'From $35.00' }
];

export const shippingSections: ShippingSection[] = [
  {
    icon: 'Package',
    title: 'DOMESTIC SHIPPING (USA)',
    rates: domesticRates
  },
  {
    icon: 'Globe',
    title: 'INTERNATIONAL SHIPPING',
    content: 'We ship globally to most regions! International rates are calculated at checkout based on package weight and destination. Please note that customs duties and import taxes are the responsibility of the buyer (the final boss).',
    rates: internationalRates
  }
];

export const shippingPolicies = [
  {
    title: 'PROCESSING TIME',
    text: 'Orders are processed within 1-2 business days (Monday-Friday). Orders placed on weekends or holidays will be processed the next business day.'
  },
  {
    title: 'TRACKING',
    text: 'All shipments include tracking. You will receive a tracking number via email once your order ships. Track your package anytime at /track-order.'
  },
  {
    title: 'FREE SHIPPING',
    text: 'Standard domestic shipping is free on all orders over $50. No promo code needed — just load up your cart and the discount applies at checkout.'
  }
];
