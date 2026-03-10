/**
 * Accessories Products Data
 * 
 * Category: Accessories
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
export var ACCESSORIES_PRODUCTS = [
  {
    id: 'prod-13',
    name: 'Leather crossbody bag',
    slug: 'leather-crossbody-bag',
    brand: 'Artisan & Co',
    price: 189.00,
    salePrice: 159.00,
    image: 'https://images.unsplash.com/photo-1761707238000-859cdfd0a9a0',
    images: [
      'https://images.unsplash.com/photo-1761707238000-859cdfd0a9a0',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf'
    ],
    description: 'Full-grain vegetable-tanned leather crossbody with adjustable strap, interior zip pocket, and brass hardware. Ages beautifully over time.',
    shortDescription: 'Full-grain leather crossbody bag.',
    sku: 'ACC-BG-013',
    category: 'Accessories',
    categorySlug: 'accessories',
    inStock: true,
    onSale: true,
    featured: true,
    rating: 4.8,
    reviewCount: 64,
    badges: ['Sale', 'Best Seller'],
    tags: ['bag', 'leather', 'crossbody'],
    weight: '0.68',
    dateAdded: '2025-08-05',
    totalSales: 523,
  },
  {
    id: 'prod-14',
    name: 'Polarized aviator sunglasses',
    slug: 'polarized-aviator-sunglasses',
    brand: 'SunShield',
    price: 125.00,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
      'https://images.unsplash.com/photo-1577803645773-f96470509666',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4'
    ],
    description: 'Classic aviator style with polarized lenses for 100 percent UV protection. Lightweight metal frame with adjustable nose pads. Includes protective case and cleaning cloth.',
    shortDescription: 'Classic polarized aviator shades.',
    sku: 'ACC-SG-014',
    category: 'Accessories',
    categorySlug: 'accessories',
    inStock: true,
    onSale: false,
    featured: false,
    rating: 4.7,
    reviewCount: 112,
    badges: [],
    tags: ['sunglasses', 'aviator', 'polarized'],
    weight: '0.03',
    dateAdded: '2025-06-18',
    totalSales: 687,
  },
  {
    id: 'prod-15',
    name: 'Minimalist leather wallet',
    slug: 'minimalist-leather-wallet',
    brand: 'SlimCraft',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93',
      'https://images.unsplash.com/photo-1627123424622-f2b90b5a5e3e',
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76',
      'https://images.unsplash.com/photo-1627123424746-74d96d3e3663'
    ],
    description: 'Slim bifold wallet in full-grain leather. Holds 8 cards plus cash. RFID blocking technology for security. Ages beautifully with daily use. Handcrafted with attention to detail.',
    shortDescription: 'Slim RFID-blocking bifold wallet.',
    sku: 'ACC-WL-015',
    category: 'Accessories',
    categorySlug: 'accessories',
    inStock: true,
    onSale: false,
    featured: false,
    rating: 4.6,
    reviewCount: 203,
    badges: [],
    tags: ['wallet', 'leather', 'minimalist', 'rfid'],
    weight: '0.08',
    dateAdded: '2025-07-10',
    totalSales: 891,
  }
];