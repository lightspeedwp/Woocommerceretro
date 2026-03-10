/**
 * Wishlist Data
 * 
 * Mock wishlist items.
 * 
 * @module data/wishlist
 */

// @typedef {Object} WishlistItem
// @property {string} id
// @property {string} name
// @property {string} slug
// @property {number} price
// @property {number} [salePrice]
// @property {string} image
// @property {boolean} inStock
// @property {string} category

var mockWishlistItems = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    price: 249.99,
    salePrice: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
    inStock: true,
    category: 'Electronics',
  },
  {
    id: '6',
    name: 'Smart Watch Pro',
    slug: 'smart-watch-pro',
    price: 399.99,
    salePrice: 349.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
    inStock: true,
    category: 'Electronics',
  },
  {
    id: '4',
    name: 'Leather Laptop Bag',
    slug: 'leather-laptop-bag',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400',
    inStock: true,
    category: 'Accessories',
  },
  {
    id: '12',
    name: 'Plant Pot Ceramic',
    slug: 'plant-pot-ceramic',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400',
    inStock: false,
    category: 'Home',
  },
];

export { mockWishlistItems };