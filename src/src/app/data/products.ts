/**
 * Products Data - Main Aggregator
 * 
 * Imports and aggregates products from all category-specific files.
 * Total Products: 15 (3 per category)
 * Categories: 5 (Electronics, Clothing, Home & Living, Accessories, Sports & Fitness)
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No spread operators
 * 3. ASCII characters only
 * 4. No optional chaining
 */

import { ELECTRONICS_PRODUCTS } from './products/electronics';
import { CLOTHING_PRODUCTS } from './products/clothing';
import { HOME_LIVING_PRODUCTS } from './products/home-living';
import { ACCESSORIES_PRODUCTS } from './products/accessories';
import { SPORTS_FITNESS_PRODUCTS } from './products/sports-fitness';

/**
 * All products aggregated from category files
 * Total: 15 products
 */
export var PRODUCTS = [].concat(
  ELECTRONICS_PRODUCTS,
  CLOTHING_PRODUCTS,
  HOME_LIVING_PRODUCTS,
  ACCESSORIES_PRODUCTS,
  SPORTS_FITNESS_PRODUCTS
);

export var products = PRODUCTS;

/**
 * Get product by ID
 * @param {string} id - Product ID
 * @returns {Object|undefined}
 */
export function getProductById(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) return PRODUCTS[i];
  }
  return undefined;
}

/**
 * Get product by slug
 * @param {string} slug - Product slug
 * @returns {Object|undefined}
 */
export function getProductBySlug(slug) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].slug === slug) return PRODUCTS[i];
  }
  return undefined;
}

/**
 * Get products by category slug
 * @param {string} categorySlug - Category slug
 * @returns {Array}
 */
export function getProductsByCategory(categorySlug) {
  var result = [];
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].categorySlug === categorySlug) result.push(PRODUCTS[i]);
  }
  return result;
}

/**
 * Get featured products
 * @returns {Array}
 */
export function getFeaturedProducts() {
  var result = [];
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].featured) result.push(PRODUCTS[i]);
  }
  return result;
}

/**
 * Get products on sale
 * @returns {Array}
 */
export function getOnSaleProducts() {
  var result = [];
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].onSale) result.push(PRODUCTS[i]);
  }
  return result;
}

/**
 * Get best sellers (sorted by total sales)
 * @param {number} [limitArg] - Optional limit
 * @returns {Array}
 */
export function getBestSellers(limitArg) {
  var limitVal = limitArg || 4;
  var sorted = PRODUCTS.slice().sort(function(a, b) {
    var salesA = a.totalSales || 0;
    var salesB = b.totalSales || 0;
    return salesB - salesA;
  });
  return sorted.slice(0, limitVal);
}

/**
 * Get new arrivals (sorted by date added, newest first)
 * @param {number} [limitArg] - Optional limit
 * @returns {Array}
 */
export function getNewArrivals(limitArg) {
  var limitVal = limitArg || 4;
  var sorted = PRODUCTS.slice().sort(function(a, b) {
    var dateA = a.dateAdded || '';
    var dateB = b.dateAdded || '';
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
  });
  return sorted.slice(0, limitVal);
}

/**
 * Get related products (same category, excluding current product)
 * @param {string} productId - Product ID
 * @param {number} [limitArg] - Optional limit
 * @returns {Array}
 */
export function getRelatedProducts(productId, limitArg) {
  var limitVal = limitArg || 4;
  var product = getProductById(productId);
  if (!product) return PRODUCTS.slice(0, limitVal);
  var result = [];
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id !== productId && PRODUCTS[i].categorySlug === product.categorySlug) {
      result.push(PRODUCTS[i]);
    }
  }
  return result.slice(0, limitVal);
}

/**
 * Search products by query
 * @param {string} query - Search query
 * @returns {Array}
 */
export function searchProducts(query) {
  var q = query.toLowerCase();
  var result = [];
  for (var i = 0; i < PRODUCTS.length; i++) {
    var p = PRODUCTS[i];
    var nameMatch = p.name.toLowerCase().indexOf(q) !== -1;
    var catMatch = p.category.toLowerCase().indexOf(q) !== -1;
    var brandMatch = p.brand.toLowerCase().indexOf(q) !== -1;
    var tagMatch = false;
    if (p.tags) {
      for (var j = 0; j < p.tags.length; j++) {
        if (p.tags[j].toLowerCase().indexOf(q) !== -1) {
          tagMatch = true;
          break;
        }
      }
    }
    if (nameMatch || catMatch || brandMatch || tagMatch) {
      result.push(p);
    }
  }
  return result;
}

export var newInStoreProducts = getNewArrivals(4);

export default {
  PRODUCTS: PRODUCTS,
  products: products,
  getProductById: getProductById,
  getProductBySlug: getProductBySlug,
  getProductsByCategory: getProductsByCategory,
  getFeaturedProducts: getFeaturedProducts,
  getOnSaleProducts: getOnSaleProducts,
  getBestSellers: getBestSellers,
  getNewArrivals: getNewArrivals,
  getRelatedProducts: getRelatedProducts,
  searchProducts: searchProducts,
  newInStoreProducts: newInStoreProducts,
};
