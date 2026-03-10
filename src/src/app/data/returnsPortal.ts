/**
 * Returns Portal Page Data
 * 
 * Instructions and highlights for the Returns Portal.
 * 
 * @module data/returnsPortal
 */

// @typedef {Object} ReturnStep
// @property {string} step
// @property {string} title
// @property {string} description

// @typedef {Object} ReturnPolicyHighlight
// @property {string} text

var returnSteps = [
  { step: '1', title: 'Find Your Order', description: 'Enter your order number and email above.' },
  { step: '2', title: 'Select Items', description: 'Choose which items to return and provide a reason.' },
  { step: '3', title: 'Print Label', description: 'Download your free prepaid shipping label.' },
  { step: '4', title: 'Ship & Track', description: 'Drop off at any carrier location and track your refund.' },
];

var returnHighlights = [
  { text: '30-day return window from date of delivery' },
  { text: 'Free return shipping on all orders' },
  { text: 'Refunds processed within 5-7 business days' },
  { text: 'Exchange option available for different size or color' },
];

var returnsPortalPageContent = {
  title: 'Returns Portal',
  description: 'Start a return or exchange in just a few steps. We make the process simple and hassle-free.',
  startReturnHeading: 'Start a Return',
  startReturnText: 'Enter your order details to begin the return process.',
  howItWorksHeading: 'How It Works',
  policyHighlightsHeading: 'Return Policy Highlights',
  ctaHeading: 'Need help with your return?',
  ctaText: 'Our support team is here to assist you with any return questions.',
  ctaButton: 'Contact Support'
};

export { returnSteps, returnHighlights, returnsPortalPageContent };