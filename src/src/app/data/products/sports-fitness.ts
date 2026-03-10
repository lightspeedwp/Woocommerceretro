/**
 * Sports & Fitness Products Data
 * 
 * Category: Sports & Fitness
 * Products: 3
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No spread operators
 * 3. ASCII characters only
 * 4. No optional chaining
 */

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} brand
 * @property {number} price
 * @property {number} [salePrice]
 * @property {string} image
 * @property {string} description
 * @property {string} shortDescription
 * @property {string} sku
 * @property {string} category
 * @property {string} categorySlug
 * @property {boolean} inStock
 * @property {boolean} onSale
 * @property {boolean} featured
 * @property {number} rating
 * @property {number} reviewCount
 * @property {string[]} badges
 * @property {string[]} tags
 * @property {string} weight
 * @property {string} dateAdded
 * @property {number} totalSales
 */

/** @type {Product[]} */
export var SPORTS_FITNESS_PRODUCTS = [
  {
    id: 'prod-16',
    name: 'Premium yoga mat',
    slug: 'premium-yoga-mat',
    brand: 'FlowFit',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f',
      'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6',
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'
    ],
    description: 'Extra-thick 6mm yoga mat with superior grip and cushioning. Non-slip surface for all practice types. Eco-friendly TPE material. Includes carrying strap. Perfect for yoga, pilates, and floor exercises.',
    shortDescription: 'Extra-thick 6mm non-slip yoga mat.',
    sku: 'SPT-YM-016',
    category: 'Sports & Fitness',
    categorySlug: 'sports-fitness',
    inStock: true,
    onSale: false,
    featured: true,
    rating: 4.9,
    reviewCount: 245,
    badges: ['New', 'Best Seller'],
    tags: ['yoga', 'mat', 'fitness', 'exercise'],
    weight: '1.10',
    dateAdded: '2025-10-28',
    totalSales: 812,
  },
  {
    id: 'prod-17',
    name: 'Insulated water bottle',
    slug: 'insulated-water-bottle',
    brand: 'HydroCore',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
      'https://images.unsplash.com/photo-1591204326742-79de38e6d863',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504',
      'https://images.unsplash.com/photo-1624103258934-b25fbc005d0a'
    ],
    description: 'Double-wall vacuum insulated bottle keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof lid, wide mouth opening for ice cubes. BPA-free stainless steel construction.',
    shortDescription: 'Insulated stainless steel bottle.',
    sku: 'SPT-WB-017',
    category: 'Sports & Fitness',
    categorySlug: 'sports-fitness',
    inStock: true,
    onSale: false,
    featured: false,
    rating: 4.7,
    reviewCount: 324,
    badges: ['Eco-Friendly'],
    tags: ['water bottle', 'insulated', 'hydration'],
    weight: '0.35',
    dateAdded: '2025-09-14',
    totalSales: 1043,
  },
  {
    id: 'prod-18',
    name: 'Resistance bands set',
    slug: 'resistance-bands-set',
    brand: 'FitStrength',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc',
    images: [
      'https://images.unsplash.com/photo-1598289431512-b97b0917affc',
      'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0',
      'https://images.unsplash.com/photo-1517836477839-7072aaa8b121',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438'
    ],
    description: 'Complete set of 5 resistance bands with varying resistance levels from light to extra heavy. Includes carrying bag, door anchor, and ankle straps. Perfect for strength training, physical therapy, and home workouts.',
    shortDescription: '5-piece resistance bands set.',
    sku: 'SPT-RB-018',
    category: 'Sports & Fitness',
    categorySlug: 'sports-fitness',
    inStock: true,
    onSale: false,
    featured: false,
    rating: 4.5,
    reviewCount: 167,
    badges: [],
    tags: ['resistance bands', 'fitness', 'strength training'],
    weight: '0.42',
    dateAdded: '2025-08-30',
    totalSales: 534,
  }
];