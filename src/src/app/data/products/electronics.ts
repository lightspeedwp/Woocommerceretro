/**
 * Electronics Products Data
 * 
 * Category: Electronics
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
export var ELECTRONICS_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Premium wireless headphones',
    slug: 'premium-wireless-headphones',
    brand: 'SoundCore',
    price: 149.99,
    salePrice: 119.99,
    image: 'https://images.unsplash.com/photo-1612858249937-1cc0852093dd',
    images: [
      'https://images.unsplash.com/photo-1612858249937-1cc0852093dd',
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944',
      'https://images.unsplash.com/photo-1545127398-14699f92334b'
    ],
    description: 'Experience pure audio bliss with active noise cancellation, 40-hour battery life, and premium drivers that deliver studio-quality sound.',
    shortDescription: 'ANC headphones with 40h battery.',
    sku: 'ELEC-HP-001',
    category: 'Electronics',
    categorySlug: 'electronics',
    inStock: true,
    onSale: true,
    featured: true,
    rating: 4.8,
    reviewCount: 124,
    badges: ['Sale', 'Best Seller'],
    tags: ['headphones', 'wireless', 'anc'],
    weight: '0.28',
    dateAdded: '2025-09-15',
    totalSales: 847,
  },
  {
    id: 'prod-2',
    name: 'Fitness smartwatch Pro',
    slug: 'fitness-smartwatch-pro',
    brand: 'VitaBand',
    price: 249.00,
    image: 'https://images.unsplash.com/photo-1767903622384-cfd81e2be7ba',
    images: [
      'https://images.unsplash.com/photo-1767903622384-cfd81e2be7ba',
      'https://images.unsplash.com/photo-1544117519-31a4b719223d',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    ],
    description: 'Track your fitness goals with GPS, heart-rate monitoring, SpO2 sensor, and a bright AMOLED display. Water-resistant to 50 m.',
    shortDescription: 'GPS smartwatch with health tracking.',
    sku: 'ELEC-SW-002',
    category: 'Electronics',
    categorySlug: 'electronics',
    inStock: true,
    onSale: false,
    featured: true,
    rating: 4.6,
    reviewCount: 89,
    badges: ['New'],
    tags: ['smartwatch', 'fitness', 'gps'],
    weight: '0.05',
    dateAdded: '2025-11-01',
    totalSales: 412,
  },
  {
    id: 'prod-3',
    name: 'Wireless earbuds Pro',
    slug: 'wireless-earbuds-pro',
    brand: 'AudioFlow',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7',
    images: [
      'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb',
      'https://images.unsplash.com/photo-1598481796369-9689a048e2be'
    ],
    description: 'True wireless freedom with premium sound quality, active noise cancellation, and 24-hour battery life with charging case. Touch controls and water resistance for active lifestyles.',
    shortDescription: 'True wireless earbuds with ANC.',
    sku: 'ELEC-EB-003',
    category: 'Electronics',
    categorySlug: 'electronics',
    inStock: true,
    onSale: false,
    featured: false,
    rating: 4.7,
    reviewCount: 156,
    badges: [],
    tags: ['earbuds', 'wireless', 'anc', 'bluetooth'],
    weight: '0.06',
    dateAdded: '2025-10-20',
    totalSales: 623,
  }
];