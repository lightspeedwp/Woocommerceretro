/**
 * Returns Portal Page Data — PlayPocket Retro Theme
 *
 * All content for the Returns Portal page template.
 * Keeps templates data-driven with zero hardcoded strings.
 *
 * @module data/returnsPage
 */

export const returnsPageContent = {
  heroTitle: 'RETURNS PORTAL',
  heroSubtitle: 'Need a mulligan? Initiate your return below.',
  heroIcon: 'ArrowUUpLeft',
  formTitle: 'LOOKUP ORDER',
  stepsTitle: 'HOW IT WORKS',
  policyLinkText: 'Read Full Return Policy',
  policyLinkUrl: '/faq',
  formLabels: {
    orderId: 'ORDER ID (#)',
    orderIdPlaceholder: 'e.g. 987-6543-21',
    email: 'EMAIL (PLAYER ID)',
    emailPlaceholder: 'player1@example.com',
    submit: 'START RETURN'
  },
  successMessage: 'Return request submitted! Please check your email for the return label.'
};

export const returnsPolicies = [
  {
    icon: 'MagicWand',
    title: '30-DAY WINDOW',
    text: 'You have 30 days from the date of delivery to return your items for a full refund.'
  },
  {
    icon: 'Warning',
    title: 'CONDITIONS',
    conditions: [
      'Must be in original packaging',
      'No physical damage',
      'Include all cables and manuals',
      'Tags must still be attached'
    ]
  }
];

export const returnsSteps = [
  {
    step: 1,
    title: 'Submit Request',
    text: 'Enter your order ID and email above to start the return process.'
  },
  {
    step: 2,
    title: 'Print Label',
    text: 'We email you a prepaid shipping label within 24 hours.'
  },
  {
    step: 3,
    title: 'Ship It Back',
    text: 'Drop off your package at any authorized carrier location.'
  },
  {
    step: 4,
    title: 'Get Refunded',
    text: 'Refund processed within 5-7 business days after we receive and inspect the item.'
  }
];