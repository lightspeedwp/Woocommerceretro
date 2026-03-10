/**
 * Clothing Products Data
 * 
 * Category: Clothing
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
export var CLOTHING_PRODUCTS = [
  {
    id: 'prod-5',
    name: 'Organic cotton T-shirt',
    slug: 'organic-cotton-tshirt',
    brand: 'EcoThreads',
    price: 39.00,
    image: 'https://images.unsplash.com/photo-1668959843026-1a3af00607ab',
    images: [
      'https://images.unsplash.com/photo-1668959843026-1a3af00607ab',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
      'https://images.unsplash.com/photo-1622445275576-721325763afe'
    ],
    description: '100 percent GOTS-certified organic cotton. Pre-shrunk, garment-dyed for a soft hand feel. Available in 8 colours.',
    shortDescription: 'Soft organic cotton everyday tee.',
    sku: 'CLO-TS-005',
    category: 'Clothing',
    categorySlug: 'clothing',
    inStock: true,
    onSale: false,
    featured: false,
    rating: 4.7,
    reviewCount: 215,
    badges: ['Eco-Friendly'],
    tags: ['tshirt', 'organic', 'cotton'],
    weight: '0.18',
    dateAdded: '2025-06-01',
    totalSales: 1240,
  },
  {
    id: 'prod-6',
    name: 'Slim fit denim jeans',
    slug: 'slim-fit-denim-jeans',
    brand: 'DenimCraft',
    price: 89.00,
    salePrice: 69.00,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d',
      'https://images.unsplash.com/photo-1604176354204-9268737828e4',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452'
    ],
    description: 'Classic slim fit jeans crafted from premium selvedge denim with just the right amount of stretch for all-day comfort. Five-pocket styling with reinforced seams.',
    shortDescription: 'Premium selvedge denim jeans.',
    sku: 'CLO-JN-006',
    category: 'Clothing',
    categorySlug: 'clothing',
    inStock: true,
    onSale: true,
    featured: false,
    rating: 4.5,
    reviewCount: 143,
    badges: ['Sale'],
    tags: ['jeans', 'denim', 'pants'],
    weight: '0.65',
    dateAdded: '2025-08-12',
    totalSales: 534,
  },
  {
    id: 'prod-7',
    name: 'Cozy fleece hoodie',
    slug: 'cozy-fleece-hoodie',
    brand: 'ComfyWear',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2'
    ],
    description: 'Ultra-soft fleece hoodie with brushed interior, kangaroo pocket, and relaxed fit. Perfect for layering or lounging. Ribbed cuffs and hem for warmth.',
    shortDescription: 'Ultra-soft fleece pullover hoodie.',
    sku: 'CLO-HD-007',
    category: 'Clothing',
    categorySlug: 'clothing',
    inStock: true,
    onSale: false,
    featured: true,
    rating: 4.8,
    reviewCount: 98,
    badges: ['New'],
    tags: ['hoodie', 'fleece', 'sweatshirt'],
    weight: '0.52',
    dateAdded: '2025-11-15',
    totalSales: 287,
  }
];