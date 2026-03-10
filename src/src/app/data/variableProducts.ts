/**
 * Mock Variable Products Data
 * 
 * Sample variable products with size, color, and other attributes.
 * Demonstrates WooCommerce variable product architecture.
 * 
 * @module data/variableProducts
 */

// Type references (JSDoc only - no runtime import needed):
// VariableProduct

/**
 * Variable T-Shirt Product
 * 
 * Classic t-shirt with size and color variations.
 * 3 sizes × 4 colors = 12 total variations
 */
export var VARIABLE_TSHIRT = {
  id: 'var-tshirt-001',
  name: 'Classic cotton t-shirt',
  slug: 'classic-cotton-tshirt',
  type: 'variable',
  priceMin: 24.99,
  priceMax: 29.99,
  image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
  images: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
  ],
  description: 'Premium 100% cotton t-shirt with a comfortable fit. Perfect for everyday wear. Features reinforced seams and pre-shrunk fabric for lasting quality.',
  shortDescription: 'Premium 100% cotton t-shirt with comfortable fit',
  category: 'Clothing',
  brand: 'WooCommerce',
  rating: 4.5,
  reviewCount: 128,
  
  attributes: [
    {
      name: 'Size',
      slug: 'size',
      displayType: 'button',
      visible: true,
      variation: true,
      options: [
        { value: 'small', label: 'S', available: true },
        { value: 'medium', label: 'M', available: true },
        { value: 'large', label: 'L', available: true },
        { value: 'xlarge', label: 'XL', available: true },
      ],
    },
    {
      name: 'Color',
      slug: 'color',
      displayType: 'swatch',
      visible: true,
      variation: true,
      options: [
        { value: 'black', label: 'Black', available: true, colorHex: '#000000' },
        { value: 'white', label: 'White', available: true, colorHex: '#FFFFFF' },
        { value: 'blue', label: 'Navy blue', available: true, colorHex: '#1E3A8A' },
        { value: 'red', label: 'Red', available: true, colorHex: '#DC2626' },
      ],
    },
  ],
  
  variations: [
    // Black variations
    { id: 'var-001', sku: 'TSH-BLK-S', attributes: { size: 'small', color: 'black' }, price: 24.99, stock: 15, inStock: true },
    { id: 'var-002', sku: 'TSH-BLK-M', attributes: { size: 'medium', color: 'black' }, price: 24.99, stock: 25, inStock: true },
    { id: 'var-003', sku: 'TSH-BLK-L', attributes: { size: 'large', color: 'black' }, price: 24.99, stock: 20, inStock: true },
    { id: 'var-004', sku: 'TSH-BLK-XL', attributes: { size: 'xlarge', color: 'black' }, price: 29.99, stock: 10, inStock: true },
    
    // White variations
    { id: 'var-005', sku: 'TSH-WHT-S', attributes: { size: 'small', color: 'white' }, price: 24.99, stock: 12, inStock: true },
    { id: 'var-006', sku: 'TSH-WHT-M', attributes: { size: 'medium', color: 'white' }, price: 24.99, stock: 30, inStock: true },
    { id: 'var-007', sku: 'TSH-WHT-L', attributes: { size: 'large', color: 'white' }, price: 24.99, stock: 18, inStock: true },
    { id: 'var-008', sku: 'TSH-WHT-XL', attributes: { size: 'xlarge', color: 'white' }, price: 29.99, stock: 0, inStock: false },
    
    // Blue variations
    { id: 'var-009', sku: 'TSH-BLU-S', attributes: { size: 'small', color: 'blue' }, price: 24.99, salePrice: 19.99, stock: 8, inStock: true },
    { id: 'var-010', sku: 'TSH-BLU-M', attributes: { size: 'medium', color: 'blue' }, price: 24.99, salePrice: 19.99, stock: 22, inStock: true },
    { id: 'var-011', sku: 'TSH-BLU-L', attributes: { size: 'large', color: 'blue' }, price: 24.99, salePrice: 19.99, stock: 15, inStock: true },
    { id: 'var-012', sku: 'TSH-BLU-XL', attributes: { size: 'xlarge', color: 'blue' }, price: 29.99, salePrice: 24.99, stock: 5, inStock: true },
    
    // Red variations
    { id: 'var-013', sku: 'TSH-RED-S', attributes: { size: 'small', color: 'red' }, price: 24.99, stock: 10, inStock: true },
    { id: 'var-014', sku: 'TSH-RED-M', attributes: { size: 'medium', color: 'red' }, price: 24.99, stock: 18, inStock: true },
    { id: 'var-015', sku: 'TSH-RED-L', attributes: { size: 'large', color: 'red' }, price: 24.99, stock: 12, inStock: true },
    { id: 'var-016', sku: 'TSH-RED-XL', attributes: { size: 'xlarge', color: 'red' }, price: 29.99, stock: 3, inStock: true },
  ],
};

/**
 * Variable Hoodie Product
 * 
 * Warm hoodie with size and color variations.
 * 4 sizes × 3 colors = 12 total variations
 */
export var VARIABLE_HOODIE = {
  id: 'var-hoodie-001',
  name: 'Premium pullover hoodie',
  slug: 'premium-pullover-hoodie',
  type: 'variable',
  priceMin: 49.99,
  priceMax: 59.99,
  image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
  images: [
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800',
  ],
  description: 'Ultra-soft fleece hoodie with kangaroo pocket and adjustable drawstring hood. Perfect for layering or wearing alone.',
  shortDescription: 'Ultra-soft fleece hoodie with kangaroo pocket',
  category: 'Clothing',
  brand: 'WooCommerce',
  rating: 4.7,
  reviewCount: 89,
  
  attributes: [
    {
      name: 'Size',
      slug: 'size',
      displayType: 'button',
      visible: true,
      variation: true,
      options: [
        { value: 'small', label: 'S', available: true },
        { value: 'medium', label: 'M', available: true },
        { value: 'large', label: 'L', available: true },
        { value: 'xlarge', label: 'XL', available: true },
      ],
    },
    {
      name: 'Color',
      slug: 'color',
      displayType: 'swatch',
      visible: true,
      variation: true,
      options: [
        { value: 'gray', label: 'Heather gray', available: true, colorHex: '#9CA3AF' },
        { value: 'black', label: 'Black', available: true, colorHex: '#000000' },
        { value: 'navy', label: 'Navy', available: true, colorHex: '#1E3A8A' },
      ],
    },
  ],
  
  variations: [
    // Gray variations
    { id: 'var-h-001', sku: 'HOD-GRY-S', attributes: { size: 'small', color: 'gray' }, price: 49.99, stock: 8, inStock: true },
    { id: 'var-h-002', sku: 'HOD-GRY-M', attributes: { size: 'medium', color: 'gray' }, price: 49.99, stock: 15, inStock: true },
    { id: 'var-h-003', sku: 'HOD-GRY-L', attributes: { size: 'large', color: 'gray' }, price: 49.99, stock: 12, inStock: true },
    { id: 'var-h-004', sku: 'HOD-GRY-XL', attributes: { size: 'xlarge', color: 'gray' }, price: 59.99, stock: 6, inStock: true },
    
    // Black variations
    { id: 'var-h-005', sku: 'HOD-BLK-S', attributes: { size: 'small', color: 'black' }, price: 49.99, stock: 10, inStock: true },
    { id: 'var-h-006', sku: 'HOD-BLK-M', attributes: { size: 'medium', color: 'black' }, price: 49.99, stock: 20, inStock: true },
    { id: 'var-h-007', sku: 'HOD-BLK-L', attributes: { size: 'large', color: 'black' }, price: 49.99, stock: 18, inStock: true },
    { id: 'var-h-008', sku: 'HOD-BLK-XL', attributes: { size: 'xlarge', color: 'black' }, price: 59.99, stock: 8, inStock: true },
    
    // Navy variations
    { id: 'var-h-009', sku: 'HOD-NVY-S', attributes: { size: 'small', color: 'navy' }, price: 49.99, salePrice: 39.99, stock: 5, inStock: true },
    { id: 'var-h-010', sku: 'HOD-NVY-M', attributes: { size: 'medium', color: 'navy' }, price: 49.99, salePrice: 39.99, stock: 12, inStock: true },
    { id: 'var-h-011', sku: 'HOD-NVY-L', attributes: { size: 'large', color: 'navy' }, price: 49.99, salePrice: 39.99, stock: 0, inStock: false },
    { id: 'var-h-012', sku: 'HOD-NVY-XL', attributes: { size: 'xlarge', color: 'navy' }, price: 59.99, salePrice: 49.99, stock: 3, inStock: true },
  ],
};

/**
 * Variable Sneakers Product
 * 
 * Sneakers with size variations only.
 * 7 sizes = 7 total variations
 */
export var VARIABLE_SNEAKERS = {
  id: 'var-sneakers-001',
  name: 'Athletic running sneakers',
  slug: 'athletic-running-sneakers',
  type: 'variable',
  priceMin: 79.99,
  priceMax: 79.99,
  image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
  images: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800',
  ],
  description: 'Lightweight running sneakers with responsive cushioning and breathable mesh upper. Perfect for daily training and long runs.',
  shortDescription: 'Lightweight running sneakers with responsive cushioning',
  category: 'Shoes',
  brand: 'WooCommerce',
  rating: 4.6,
  reviewCount: 203,
  
  attributes: [
    {
      name: 'Size',
      slug: 'size',
      displayType: 'select',
      visible: true,
      variation: true,
      options: [
        { value: 'us-7', label: 'US 7', available: true },
        { value: 'us-8', label: 'US 8', available: true },
        { value: 'us-9', label: 'US 9', available: true },
        { value: 'us-10', label: 'US 10', available: true },
        { value: 'us-11', label: 'US 11', available: true },
        { value: 'us-12', label: 'US 12', available: true },
        { value: 'us-13', label: 'US 13', available: true },
      ],
    },
  ],
  
  variations: [
    { id: 'var-s-001', sku: 'SNK-US7', attributes: { size: 'us-7' }, price: 79.99, stock: 5, inStock: true },
    { id: 'var-s-002', sku: 'SNK-US8', attributes: { size: 'us-8' }, price: 79.99, stock: 8, inStock: true },
    { id: 'var-s-003', sku: 'SNK-US9', attributes: { size: 'us-9' }, price: 79.99, stock: 12, inStock: true },
    { id: 'var-s-004', sku: 'SNK-US10', attributes: { size: 'us-10' }, price: 79.99, stock: 15, inStock: true },
    { id: 'var-s-005', sku: 'SNK-US11', attributes: { size: 'us-11' }, price: 79.99, stock: 10, inStock: true },
    { id: 'var-s-006', sku: 'SNK-US12', attributes: { size: 'us-12' }, price: 79.99, stock: 6, inStock: true },
    { id: 'var-s-007', sku: 'SNK-US13', attributes: { size: 'us-13' }, price: 79.99, stock: 0, inStock: false },
  ],
};

/**
 * All Variable Products
 * 
 * Export array of all variable products for easy access
 */
export var VARIABLE_PRODUCTS = [
  VARIABLE_TSHIRT,
  VARIABLE_HOODIE,
  VARIABLE_SNEAKERS,
];