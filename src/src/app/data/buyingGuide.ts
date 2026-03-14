/**
 * Buying Guide Data
 * 
 * Content for the Buying Guide page, including tips, category links,
 * and general shopping advice.
 * 
 * @module data/buyingGuide
 */

// @typedef {Object} BuyingGuideTip
// @property {string} id
// @property {string} title
// @property {string} icon
// @property {string[]} tips

// @typedef {Object} CategoryGuide
// @property {string} id
// @property {string} name
// @property {string} description
// @property {string} link
// @property {string} icon

const buyingGuides = [
  {
    id: 'measurements',
    title: 'Know Your Measurements',
    icon: 'Lightbulb',
    tips: [
      'Take accurate body measurements before shopping.',
      'Refer to our size guide for brand-specific sizing.',
      'When between sizes, consider the fit you prefer (relaxed vs. fitted).',
    ],
  },
  {
    id: 'occasion',
    title: 'Consider the Occasion',
    icon: 'Lightbulb',
    tips: [
      'Think about where and when you will wear or use the product.',
      'Casual pieces offer versatility; occasion pieces make a statement.',
      'Building a capsule wardrobe maximizes outfit combinations.',
    ],
  },
  {
    id: 'materials',
    title: 'Check Materials & Care',
    icon: 'Lightbulb',
    tips: [
      'Natural fibers like cotton and linen breathe well in warm weather.',
      'Blended fabrics often offer durability with comfort.',
      'Review care labels to ensure maintenance fits your lifestyle.',
    ],
  },
  {
    id: 'reviews',
    title: 'Read Reviews & Ratings',
    icon: 'Lightbulb',
    tips: [
      'Check verified buyer reviews for real-world feedback.',
      'Pay attention to comments about sizing and fit.',
      'Look at photos shared by other customers for reference.',
    ],
  },
];

const categoryGuides = [
  { id: 'apparel', name: 'Apparel', description: 'Find the perfect fit, fabric, and style.', link: '/shop/category/apparel', icon: 'ShoppingBag' },
  { id: 'accessories', name: 'Accessories', description: 'Complete your look with the right pieces.', link: '/shop/category/accessories', icon: 'ShoppingBag' },
  { id: 'home', name: 'Home & Living', description: 'Quality essentials for every room.', link: '/shop/category/home', icon: 'ShoppingBag' },
  { id: 'electronics', name: 'Electronics', description: 'Choose the right tech for your needs.', link: '/shop/category/electronics', icon: 'ShoppingBag' },
];

const buyingGuidePageContent = {
  title: 'Buying Guide',
  description: 'Expert tips and recommendations to help you find exactly what you need.',
  tipsHeading: 'Shopping Tips',
  categoriesHeading: 'Shop by Category',
  ctaHeading: 'Need personalized advice?',
  ctaText: 'Our team can help you find the perfect product for any occasion.',
  ctaButton: 'Ask an Expert'
};

export { buyingGuides, categoryGuides, buyingGuidePageContent };