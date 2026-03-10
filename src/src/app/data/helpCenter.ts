/**
 * Help Center Data
 * 
 * Content for the Help Center page, including categories and popular articles.
 * 
 * @module data/helpCenter
 */

// @typedef {Object} HelpCategory
// @property {string} title
// @property {string} icon
// @property {string} description
// @property {string} link

// @typedef {Object} HelpArticle
// @property {string} title
// @property {string} link

var helpCategories = [
  { icon: 'Package', title: 'Orders', description: 'Track orders, modify details, and check order status.', link: '/faq' },
  { icon: 'Truck', title: 'Shipping', description: 'Delivery options, estimated times, and tracking information.', link: '/shipping-returns' },
  { icon: 'RotateCcw', title: 'Returns & Exchanges', description: 'Return policy, how to start a return, and exchange process.', link: '/returns' },
  { icon: 'CreditCard', title: 'Payment', description: 'Accepted payment methods, billing issues, and refund status.', link: '/faq' },
  { icon: 'User', title: 'Account', description: 'Account settings, password reset, and profile management.', link: '/account' },
  { icon: 'HelpCircle', title: 'Product Info', description: 'Sizing, materials, care instructions, and product details.', link: '/size-guide' },
];

var popularArticles = [
  { title: 'How do I track my order?', link: '/faq' },
  { title: 'What is your return policy?', link: '/shipping-returns' },
  { title: 'How do I find the right size?', link: '/size-guide' },
  { title: 'What payment methods are accepted?', link: '/faq' },
  { title: 'How do I reset my password?', link: '/account/login' },
  { title: 'Can I modify my order after placing it?', link: '/faq' },
];

var helpCenterPageContent = {
  title: 'Help center',
  description: 'How can we help you? Browse topics below or contact our support team.',
  categoriesHeading: 'Browse topics',
  articlesHeading: 'Popular articles',
  contactHeading: 'Contact us',
  contactText: 'Could not find what you are looking for? Reach out to our support team.',
  chat: { title: 'Live chat', desc: 'Available Mon-Fri, 9am-6pm EST', action: 'Start Chat' },
  email: { title: 'Email support', desc: 'We respond within 24 hours', action: 'Send Email' },
  phone: { title: 'Phone', desc: 'Call Now' }
};

export { helpCategories, popularArticles, helpCenterPageContent };