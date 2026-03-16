/**
 * FAQ Page Data
 * 
 * Categorized frequently asked questions for the FAQ page.
 * 
 * @module data/faq
 */

/**
 * @typedef {Object} FAQItem
 * @property {string} question
 * @property {string} answer
 */

/**
 * @typedef {Object} FAQCategory
 * @property {string} title
 * @property {string} icon
 * @property {FAQItem[]} items
 */

/** Page-level content for the FAQ page template */
export const faqPageContent = {
  heroTitle: 'GAME GUIDE (FAQ)',
  heroSubtitle: 'Stuck on a level? Check the manual below for answers to common questions.',
};

/** @type {FAQItem[]} */
export const cartFAQs = [
  { question: "How do I use a promo code?", answer: "Click on 'Add coupons' in the Cart Totals section, enter your code, and click Apply." },
  { question: "What if I want to change my order?", answer: "You can update quantities or remove items directly in the cart before proceeding to checkout." },
  { question: "Is shipping included?", answer: "Shipping costs are calculated at checkout based on your delivery address." }
];

/** @type {FAQCategory[]} */
export const faqCategories = [
  {
    title: 'Orders & Shipping',
    icon: 'Truck',
    items: [
      { question: 'How long does shipping take?', answer: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery. Free shipping is offered on orders over $50.' },
      { question: 'Can I track my order?', answer: 'Yes! Once your order ships, you will receive a tracking number via email. You can also track your order from your account dashboard under "Orders".' },
      { question: 'Do you ship internationally?', answer: 'We currently ship to the United States, Canada, United Kingdom, and most EU countries. International shipping times vary by destination.' },
      { question: 'What if my package is lost or damaged?', answer: 'Contact our support team within 14 days of the expected delivery date. We will investigate and either reship your order or issue a full refund.' },
    ],
  },
  {
    title: 'Returns & Refunds',
    icon: 'RotateCcw',
    items: [
      { question: 'What is your return policy?', answer: 'We offer a 30-day return policy for most items. Products must be in their original condition with tags attached. Some items like undergarments and personalized products are final sale.' },
      { question: 'How do I initiate a return?', answer: 'Log into your account, go to "Orders," select the order, and click "Request Return." You will receive a prepaid shipping label via email.' },
      { question: 'When will I receive my refund?', answer: 'Refunds are processed within 5-7 business days after we receive your returned item. The refund will appear on your original payment method.' },
      { question: 'Can I exchange an item instead of returning it?', answer: 'Yes! During the return process, select "Exchange" and choose your preferred size or color. We will ship the exchange item as soon as we receive your return.' },
    ],
  },
  {
    title: 'Payment & Billing',
    icon: 'CreditCard',
    items: [
      { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, American Express, Discover, PayPal, Apple Pay, Google Pay, and Shop Pay. Gift cards can also be applied at checkout.' },
      { question: 'Is my payment information secure?', answer: 'Absolutely. We use industry-standard SSL encryption and are PCI DSS compliant. Your payment information is never stored on our servers.' },
      { question: 'Can I use multiple payment methods?', answer: 'You can combine a gift card with any other payment method. However, splitting payment between two credit cards is not currently supported.' },
      { question: 'Do you offer payment plans?', answer: 'Yes, we offer buy-now-pay-later options through Afterpay and Klarna at checkout for orders between $35 and $1,000.' },
    ],
  },
  {
    title: 'Products & Sizing',
    icon: 'Package',
    items: [
      { question: 'How do I find the right size?', answer: 'Visit our Size Guide page for detailed measurements and fit recommendations. Each product page also includes specific sizing information.' },
      { question: 'Are your products sustainably made?', answer: 'We are committed to sustainability. Many of our products use organic, recycled, or responsibly sourced materials. Look for the "Eco-Friendly" badge on product pages.' },
      { question: 'Can I get notified when an out-of-stock item is back?', answer: 'Yes! Click "Notify Me" on any out-of-stock product page, enter your email, and we will alert you as soon as it is restocked.' },
    ],
  },
  {
    title: 'Account & Privacy',
    icon: 'ShieldCheck',
    items: [
      { question: 'How do I create an account?', answer: 'Click "Sign In" in the header, then select "Create Account." You can also create an account during checkout. An account lets you track orders, save addresses, and manage your wishlist.' },
      { question: 'How do I reset my password?', answer: 'Click "Sign In," then "Forgot Password." Enter your email address and we will send you a password reset link.' },
      { question: 'How is my personal data used?', answer: 'We only use your data to process orders and improve your shopping experience. We never sell your information to third parties. See our Privacy Policy for full details.' },
    ],
  },
];

