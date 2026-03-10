/**
 * Testimonials Mock Data
 *
 * Customer testimonials used across the site (About page, FrontPage,
 * product pages, landing pages).
 *
 * @module data/testimonials
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {string} quote
 * @property {string} author
 * @property {string} role
 * @property {number} rating
 * @property {string} [avatar]
 */

/** @type {Testimonial[]} */
export var testimonials = [
  {
    id: 't-1',
    quote:
      'The quality is outstanding! Every product I have purchased has exceeded my expectations. The customer service is also top-notch.',
    author: 'Michael Brown',
    role: 'Verified Customer',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 't-2',
    quote:
      'I love the attention to detail in both the products and the packaging. It feels like opening a gift every time I order.',
    author: 'Emma Wilson',
    role: 'Verified Customer',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 't-3',
    quote:
      'Fast shipping, great prices, and products that actually last. This has become my go-to store for everyday essentials.',
    author: 'David Lee',
    role: 'Verified Customer',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 't-4',
    quote:
      'The merino wool scarf I bought is incredibly soft and warm. I keep coming back for more – the sustainable approach is the cherry on top.',
    author: 'Sophie Martin',
    role: 'Repeat Customer',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 't-5',
    quote:
      'Best online shopping experience I have ever had. Returns were hassle-free and the team went above and beyond to help me find the right size.',
    author: 'James Thompson',
    role: 'Verified Customer',
    rating: 4,
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 't-6',
    quote:
      'I purchased the ceramic mug set as a gift and my friend absolutely loved it. Beautiful craftsmanship and unique glaze on every piece.',
    author: 'Aisha Patel',
    role: 'Gift Buyer',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100',
  },
];

/**
 * Get a subset of testimonials for display.
 *
 * @param {number} count Maximum testimonials to return (default 3).
 * @returns {Testimonial[]}
 */
export function getTestimonials(count) {
  if (count === undefined) count = 3;
  return testimonials.slice(0, count);
}