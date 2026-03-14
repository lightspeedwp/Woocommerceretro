/**
 * Warranty Claim Step Interface
 */
// @typedef {Object} WarrantyClaimStep
// @property {string} step
// @property {string} title
// @property {string} description

/**
 * Items Covered Under Warranty
 */
const warrantyCovered = [
  'Manufacturing defects in materials or workmanship',
  'Premature wear under normal use conditions',
  'Hardware failures (zippers, buttons, snaps)',
  'Color fading beyond normal expectations',
  'Structural integrity issues (seam splitting, sole separation)',
];

/**
 * Items Not Covered Under Warranty
 */
const warrantyNotCovered = [
  'Normal wear and tear from regular use',
  'Damage caused by misuse, accidents, or modifications',
  'Damage from improper care or cleaning',
  'Items purchased from unauthorized retailers',
  'Cosmetic changes that do not affect functionality',
];

/**
 * Warranty Claim Steps
 */
const warrantyClaimSteps = [
  {
    step: '1',
    title: 'Contact Support',
    description:
      'Reach out to our customer service team with your order number and a description of the issue.',
  },
  {
    step: '2',
    title: 'Provide Documentation',
    description:
      'Share photos of the defect and your proof of purchase (order confirmation email or receipt).',
  },
  {
    step: '3',
    title: 'Resolution',
    description:
      'We will review your claim within 5 business days and offer a repair, replacement, or refund.',
  },
];

/**
 * Page-level content strings
 */
const warrantyPageContent = {
  title: 'Warranty Information',
  description:
    'We stand behind the quality of our products. Learn about our warranty coverage and how to make a claim.',
  overviewHeading: '1-Year Limited Warranty',
  overviewDescription:
    'All products purchased directly from our store come with a 1-year limited warranty from the date of purchase. This warranty covers defects in materials and workmanship under normal use conditions.',
  coveredHeading: 'What Is Covered',
  notCoveredHeading: 'What Is Not Covered',
  claimHeading: 'How to File a Warranty Claim',
  ctaHeading: 'Have a warranty question?',
  ctaText:
    'Our team can help you determine if your issue is covered under warranty.',
};

export { warrantyCovered, warrantyNotCovered, warrantyClaimSteps, warrantyPageContent };

export default {
  warrantyCovered,
  warrantyNotCovered,
  warrantyClaimSteps,
  warrantyPageContent,
};