/**
 * Home & Living Products Data
 * 
 * Category: Home & Living
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
export var HOME_LIVING_PRODUCTS = [
  {
    id: 'prod-9',
    name: 'Handcrafted ceramic mug',
    slug: 'handcrafted-ceramic-mug',
    brand: 'Terra Studio',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1633738674687-9505aa528801',
    images: [
      'https://images.unsplash.com/photo-1633738674687-9505aa528801',
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d',
      'https://images.unsplash.com/photo-1485808191679-5f86510681a2',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa'
    ],
    description: 'Wheel-thrown stoneware mug with a reactive glaze that makes each piece unique. Microwave and dishwasher safe. 350 ml capacity.',
    shortDescription: 'Unique handmade stoneware mug.',
    sku: 'HOME-MG-009',
    category: 'Home & Living',
    categorySlug: 'home-living',
    inStock: true,
    onSale: false,
    featured: false,
    rating: 4.8,
    reviewCount: 67,
    badges: ['Handmade'],
    tags: ['mug', 'ceramic', 'handmade'],
    weight: '0.38',
    dateAdded: '2025-05-10',
    totalSales: 892,
  },
  {
    id: 'prod-10',
    name: 'Abstract canvas wall art',
    slug: 'abstract-canvas-wall-art',
    brand: 'Modern Gallery',
    price: 159.00,
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262',
    images: [
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
      'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8',
      'https://images.unsplash.com/photo-1549887534-1541e9326642'
    ],
    description: 'Museum-quality canvas print featuring bold abstract design. Gallery-wrapped and ready to hang. Adds instant sophistication to any space. UV-resistant inks ensure lasting vibrancy.',
    shortDescription: 'Modern abstract canvas print.',
    sku: 'HOME-ART-010',
    category: 'Home & Living',
    categorySlug: 'home-living',
    inStock: true,
    onSale: false,
    featured: false,
    rating: 4.6,
    reviewCount: 54,
    badges: [],
    tags: ['wall art', 'canvas', 'abstract', 'decor'],
    weight: '1.20',
    dateAdded: '2025-07-22',
    totalSales: 312,
  },
  {
    id: 'prod-11',
    name: 'Chunky knit throw blanket',
    slug: 'chunky-knit-throw-blanket',
    brand: 'CozyHome',
    price: 79.00,
    salePrice: 59.00,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2',
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf',
      'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5',
      'https://images.unsplash.com/photo-1567016526105-22da7c13161a'
    ],
    description: 'Hand-knitted throw blanket in soft merino wool blend. Oversized design perfect for sofas or beds. Machine washable for easy care. Available in 6 neutral tones.',
    shortDescription: 'Chunky hand-knit merino blanket.',
    sku: 'HOME-BL-011',
    category: 'Home & Living',
    categorySlug: 'home-living',
    inStock: true,
    onSale: true,
    featured: false,
    rating: 4.9,
    reviewCount: 187,
    badges: ['Sale'],
    tags: ['blanket', 'throw', 'knit', 'wool'],
    weight: '1.80',
    dateAdded: '2025-09-05',
    totalSales: 456,
  }
];