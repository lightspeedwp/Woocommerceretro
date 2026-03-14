/**
 * Refunds Page Data
 *
 * Content for the dedicated Refunds page covering refund policy,
 * timelines, methods, eligibility, and status tracking.
 *
 * Optimized for Figma Make parser:
 * 1. No optional chaining, nullish coalescing, or spread at module level
 * 2. ASCII characters only
 *
 * @module data/refunds
 */

/**
 * @typedef {Object} RefundTimeline
 * @property {string} method
 * @property {string} timeframe
 * @property {string} description
 */

/**
 * @typedef {Object} RefundEligibility
 * @property {string} icon - 'check' or 'x'
 * @property {string} text
 * @property {boolean} eligible
 */

/**
 * @typedef {Object} RefundFAQ
 * @property {string} question
 * @property {string} answer
 */

const refundTimelines = [
  {
    method: 'Original Payment Method',
    timeframe: '5-7 business days',
    description: 'Refunds to credit/debit cards typically appear within 5-7 business days after we process your return.'
  },
  {
    method: 'Store Credit',
    timeframe: '24 hours',
    description: 'Opt for store credit and receive your refund within 24 hours of return approval -- plus a 10% bonus.'
  },
  {
    method: 'PayPal / Digital Wallet',
    timeframe: '3-5 business days',
    description: 'PayPal, Apple Pay, and Google Pay refunds are processed within 3-5 business days.'
  },
  {
    method: 'Gift Card Purchases',
    timeframe: '24 hours',
    description: 'Items purchased with gift cards are refunded back to a new digital gift card within 24 hours.'
  }
];

const refundEligibility = [
  { icon: 'check', text: 'Unused items in original packaging within 30 days', eligible: true },
  { icon: 'check', text: 'Defective or damaged items (no time limit)', eligible: true },
  { icon: 'check', text: 'Wrong item received', eligible: true },
  { icon: 'check', text: 'Items that do not match the product description', eligible: true },
  { icon: 'check', text: 'Unworn apparel with tags attached', eligible: true },
  { icon: 'x', text: 'Final sale or clearance items marked non-returnable', eligible: false },
  { icon: 'x', text: 'Personalised or custom-made products', eligible: false },
  { icon: 'x', text: 'Intimate apparel, swimwear, or pierced jewellery', eligible: false },
  { icon: 'x', text: 'Items returned after 30 days without prior approval', eligible: false }
];

const refundStatusSteps = [
  { step: '1', title: 'Return Received', description: 'We have received your returned item at our warehouse.' },
  { step: '2', title: 'Inspection', description: 'Our team inspects the item to confirm it meets return conditions.' },
  { step: '3', title: 'Refund Approved', description: 'Your refund has been approved and is being processed.' },
  { step: '4', title: 'Money Back', description: 'The refund has been issued to your original payment method.' }
];

const refundFAQs = [
  {
    question: 'How do I check the status of my refund?',
    answer: 'Log in to your account and visit the Orders section. Each returned order shows its current refund status. You can also use the Track Order page with your order number and email.'
  },
  {
    question: 'Can I get a refund without returning the item?',
    answer: 'In some cases, such as items damaged during shipping or orders under a certain value, we may issue a refund without requiring a return. Contact our support team for assistance.'
  },
  {
    question: 'What if my refund takes longer than expected?',
    answer: 'If your refund has not appeared after 10 business days from our confirmation email, please contact your bank first (processing times vary), then reach out to our support team with your order number.'
  },
  {
    question: 'Can I exchange instead of getting a refund?',
    answer: 'Yes. Start a return through our Returns Portal and select the exchange option. You can swap for a different size, colour, or product of equal or lesser value.'
  },
  {
    question: 'Are shipping costs refunded?',
    answer: 'Original shipping costs are refunded if the return is due to our error (wrong item, defective product). For change-of-mind returns, original shipping is non-refundable, but return shipping is always free.'
  },
  {
    question: 'What about partial refunds?',
    answer: 'Partial refunds may be issued for items returned in used condition or with missing accessories. We will notify you by email with the adjusted refund amount before processing.'
  }
];

const refundsPageContent = {
  title: 'Refunds',
  description: 'Everything you need to know about our refund process, timelines, and eligibility.',
  timelinesHeading: 'Refund Timelines',
  timelinesSubtext: 'How long it takes to get your money back depends on your original payment method.',
  eligibilityHeading: 'Refund Eligibility',
  eligibilitySubtext: 'Review what qualifies for a full refund and what does not.',
  statusHeading: 'Refund Process',
  statusSubtext: 'From return to refund in four simple steps.',
  faqHeading: 'Refund FAQs',
  faqSubtext: 'Common questions about refunds answered.',
  ctaHeading: 'Ready to start a return?',
  ctaText: 'Head to our Returns Portal to begin the process, or contact support if you need help.',
  ctaPrimary: 'Go to Returns Portal',
  ctaSecondary: 'Contact Support'
};

export { refundTimelines, refundEligibility, refundStatusSteps, refundFAQs, refundsPageContent };