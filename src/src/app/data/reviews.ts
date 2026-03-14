/**
 * Reviews Data
 * 
 * Mock reviews for products.
 */

/**
 * @typedef {Object} Review
 * @property {string} id
 * @property {string} productId
 * @property {string} author
 * @property {string} date
 * @property {number} rating
 * @property {string} title
 * @property {string} content
 * @property {boolean} verified
 * @property {string} [avatar]
 * @property {number} helpful
 */

/** @type {Review[]} */
export const REVIEWS = [
  // Product: prod-1 (Premium Wireless Headphones) - 4 reviews (3 verified, 1 not)
  {
    id: 'r1',
    productId: 'prod-1',
    author: 'Sarah Jenkins',
    date: '2025-12-15',
    rating: 5,
    title: 'Best headphones I have ever owned',
    content: 'The noise cancellation is incredible. I use these for my daily commute and I cannot hear a thing. Battery life is also true to the claims.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    helpful: 24
  },
  {
    id: 'r2',
    productId: 'prod-1',
    author: 'Michael Chen',
    date: '2025-12-10',
    rating: 4,
    title: 'Great sound, bit tight',
    content: 'Sound quality is top notch. Bass is punchy but not overwhelming. My only complaint is they feel a bit tight on the ears after 2-3 hours.',
    verified: true,
    helpful: 8
  },
  {
    id: 'r3',
    productId: 'prod-1',
    author: 'Anonymous User',
    date: '2025-12-01',
    rating: 1,
    title: 'Did not purchase',
    content: 'I did not actually buy this product, just leaving a review.',
    verified: false,
    helpful: 0
  },
  {
    id: 'r4',
    productId: 'prod-1',
    author: 'Fake Reviewer',
    date: '2025-11-28',
    rating: 5,
    title: 'Amazing headphones!',
    content: 'These are the best headphones ever made! Buy now!',
    verified: false,
    helpful: 2
  },
  
  // Product: prod-2 (Fitness Smartwatch Pro) - 3 reviews (2 verified, 1 not)
  {
    id: 'r5',
    productId: 'prod-2',
    author: 'Jessica Williams',
    date: '2025-11-28',
    rating: 5,
    title: 'Perfect fitness companion',
    content: 'Tracks everything I need for my marathon training. The GPS is accurate and it syncs perfectly with my phone.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    helpful: 45
  },
  {
    id: 'r6',
    productId: 'prod-2',
    author: 'Robert Taylor',
    date: '2025-12-05',
    rating: 4,
    title: 'Great for workouts',
    content: 'Love the heart rate monitoring and the display is super bright even in direct sunlight. Water resistance is solid.',
    verified: true,
    helpful: 18
  },
  {
    id: 'r7',
    productId: 'prod-2',
    author: 'Competitor Brand',
    date: '2025-11-15',
    rating: 2,
    title: 'Battery life issues',
    content: 'Battery drains too fast. Would not recommend.',
    verified: false,
    helpful: 1
  },
  
  // Product: prod-5 (Organic Cotton T-Shirt) - 4 reviews (3 verified, 1 not)
  {
    id: 'r8',
    productId: 'prod-5',
    author: 'David Smith',
    date: '2026-01-05',
    rating: 5,
    title: 'Super soft',
    content: 'Really impressed with the quality of the cotton. It feels very premium and holds up well after washing.',
    verified: true,
    helpful: 12
  },
  {
    id: 'r9',
    productId: 'prod-5',
    author: 'Amanda Lee',
    date: '2025-12-20',
    rating: 5,
    title: 'Best basic tee',
    content: 'This is my go-to shirt now. The fit is perfect and it does not shrink. Already bought 3 more.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100',
    helpful: 34
  },
  {
    id: 'r10',
    productId: 'prod-5',
    author: 'Karen Martinez',
    date: '2025-11-30',
    rating: 4,
    title: 'Great quality, runs large',
    content: 'Love the organic cotton feel but I had to size down. Otherwise perfect everyday shirt.',
    verified: true,
    helpful: 9
  },
  {
    id: 'r11',
    productId: 'prod-5',
    author: 'Spam Bot',
    date: '2025-11-01',
    rating: 1,
    title: 'Terrible',
    content: 'Do not buy this. Check out our competitor site instead!',
    verified: false,
    helpful: 0
  }
];

/**
 * @param {string} productId
 * @returns {Review[]}
 */
export const getReviewsByProductId = (productId) => {
  return REVIEWS.filter((review) => review.productId === productId);
}

/**
 * @param {string} productId
 * @returns {number}
 */
export const getAverageRating = (productId) => {
  const productReviews = getReviewsByProductId(productId);
  if (productReviews.length === 0) return 0;
  
  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
  return Number((sum / productReviews.length).toFixed(1));
}

/** @type {Review} */
export const defaultReview = {
  id: 'default',
  productId: 'all',
  author: 'Verified Customer',
  date: '2026-01-01',
  rating: 5,
  title: 'Great product',
  content: 'Excellent quality and fast shipping. Highly recommended!',
  verified: true,
  helpful: 0
};