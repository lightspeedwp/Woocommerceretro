/**
 * Shipping & Returns Data
 * 
 * Shipping methods, costs, and return process steps.
 * 
 * @module data/shipping
 * 
 * @typedef {Object} ShippingMethod
 * @property {string} name
 * @property {string} time
 * @property {string} cost
 * @property {string} icon
 * 
 * @typedef {Object} ReturnProcessStep
 * @property {string} step
 * @property {string} title
 * @property {string} description
 */

export const shippingMethods = [
  { name: 'Standard Shipping', time: '5-7 Business Days', cost: 'Free over $50', icon: 'Package' },
  { name: 'Express Shipping', time: '2-3 Business Days', cost: '$12.99', icon: 'Truck' },
  { name: 'Next Day Delivery', time: '1 Business Day', cost: '$24.99', icon: 'Clock' },
  { name: 'Store Pickup', time: 'Same Day', cost: 'Free', icon: 'MapPin' },
];

export const returnProcessSteps = [
  { step: '1', title: 'Start Your Return', description: 'Log into your account and navigate to your order history. Select the item you wish to return and choose a reason.' },
  { step: '2', title: 'Print Shipping Label', description: 'A prepaid return shipping label will be emailed to you. Print it and attach it to your package.' },
  { step: '3', title: 'Ship Your Return', description: 'Drop off your package at any authorized shipping location. You can track the return status in your account.' },
  { step: '4', title: 'Receive Your Refund', description: 'Once we receive and inspect your return, your refund will be processed within 5-7 business days to your original payment method.' },
];

export const shippingPageContent = {
  title: 'Shipping & Returns',
  description: 'Everything you need to know about getting your order delivered and our hassle-free return process.',
  shippingHeading: 'Shipping options',
  shippingText: 'We offer several shipping options to meet your needs. All orders are processed within 1-2 business days.',
  returnsHeading: '30-Day Return Policy',
  returnsText: 'We want you to love your purchase. If you are not completely satisfied, you may return most items within 30 days of delivery for a full refund or exchange.',
  returnProcessHeading: 'How to Return an Item',
  conditionsHeading: 'Return conditions',
  conditionsEligible: {
    title: 'Eligible for Return',
    items: [
      'Items in original, unworn condition',
      'Items with all tags still attached',
      'Items in original packaging',
      'Items purchased within the last 30 days'
    ]
  },
  conditionsIneligible: {
    title: 'Not eligible for return',
    items: [
      'Undergarments and swimwear',
      'Personalized or custom items',
      'Items marked as \"Final Sale\"',
      'Gift cards'
    ]
  },
  ctaHeading: 'Need to start a return?',
  ctaText: 'Visit your account to begin the return process, or contact our support team for assistance.',
  ctaButtonPrimary: 'Start Return',
  ctaButtonSecondary: 'View FAQ'
};