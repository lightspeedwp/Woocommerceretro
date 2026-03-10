/**
 * Accessibility Statement Data
 * 
 * Content for the Accessibility Statement page, including features,
 * standards, and commitment statements.
 * 
 * @module data/accessibilityStatement
 */

// @typedef {Object} AccessibilityFeature
// @property {string} id
// @property {string} icon
// @property {string} title
// @property {string} description

var accessibilityFeatures = [
  { 
    id: 'keyboard',
    icon: 'Keyboard', 
    title: 'Keyboard Navigation', 
    description: 'All interactive elements are fully accessible via keyboard. Use Tab, Enter, Space, and Arrow keys to navigate.' 
  },
  { 
    id: 'screen-reader',
    icon: 'Eye', 
    title: 'Screen Reader Support', 
    description: 'Proper ARIA labels, landmarks, and semantic HTML ensure compatibility with screen readers like NVDA, JAWS, and VoiceOver.' 
  },
  { 
    id: 'responsive',
    icon: 'Monitor', 
    title: 'Responsive Design', 
    description: 'Our website adapts to all screen sizes and supports zoom up to 200% without loss of content or functionality.' 
  },
  { 
    id: 'alt-text',
    icon: 'Volume2', 
    title: 'Alternative Text', 
    description: 'All meaningful images include descriptive alternative text. Decorative images are properly hidden from assistive technologies.' 
  },
];

var accessibilityStandards = [
  'WCAG 2.1 Level AA conformance across all pages',
  'Proper heading hierarchy (h1 through h6)',
  'Color contrast ratios meet or exceed 4.5:1 for normal text',
  'Focus indicators visible on all interactive elements',
  'Skip navigation links for keyboard users',
  'Form fields with associated labels and error messages',
  'No content that flashes more than 3 times per second',
  'All functionality available without a mouse',
];

var accessibilityPageContent = {
  title: 'Accessibility Statement',
  description: 'We are committed to making our website accessible to everyone, regardless of ability or technology.',
  commitmentHeading: 'Our Commitment',
  commitmentText: 'We believe that everyone deserves equal access to our products and services. Our team actively works to ensure our website meets or exceeds the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Accessibility is not an afterthought — it is integrated into our design and development process from the start.',
  featuresHeading: 'Accessibility Features',
  standardsHeading: 'Standards We Follow',
  feedbackHeading: 'Feedback & Assistance',
  feedbackText1: 'We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please let us know. We take all accessibility feedback seriously and strive to respond within 2 business days.',
  feedbackText2: 'If you need assistance with any part of our website, our customer support team is trained to help users of all abilities and can provide information in alternative formats upon request.',
  ctaHeading: 'Report an Accessibility Issue',
  ctaText: 'Help us improve by reporting any accessibility barriers you encounter.',
  ctaButtonPrimary: 'Contact Us',
  ctaButtonSecondary: 'Email Directly'
};

export { accessibilityFeatures, accessibilityStandards, accessibilityPageContent };