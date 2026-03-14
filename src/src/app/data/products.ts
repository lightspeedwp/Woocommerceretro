/**
 * Products Data - Main Aggregator
 *
 * Imports and aggregates products from all category-specific files.
 * Total Products: 100 (20 per category)
 * Categories: 5 (Apparel, Accessories, Games, Posters, Collectibles)
 * Tags: 20 (each product has 3-5 tags)
 *
 * Optimized for Figma Make parser:
 * 1. No optional chaining, nullish coalescing, or spread at module level
 * 2. ASCII characters only
 */

import { APPAREL_PRODUCTS } from './products/apparel';
import { ACCESSORIES_PRODUCTS } from './products/accessories';
import { GAMES_PRODUCTS } from './products/games';
import { POSTERS_PRODUCTS } from './products/posters';
import { COLLECTIBLES_PRODUCTS } from './products/collectibles';

/**
 * All products aggregated from category files
 * Total: 100 products
 */
export const PRODUCTS = [].concat(
  APPAREL_PRODUCTS,
  ACCESSORIES_PRODUCTS,
  GAMES_PRODUCTS,
  POSTERS_PRODUCTS,
  COLLECTIBLES_PRODUCTS
);

export const products = PRODUCTS;

/**
 * Get product by ID
 * @param {string} id - Product ID
 * @returns {Object|undefined}
 */
export const getProductById = (id) => {
  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) return PRODUCTS[i];
  }
  return undefined;
}

/**
 * Get product by slug
 * @param {string} slug - Product slug
 * @returns {Object|undefined}
 */
export const getProductBySlug = (slug) => {
  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].slug === slug) return PRODUCTS[i];
  }
  return undefined;
}

/**
 * Get products by category slug
 * @param {string} categorySlug - Category slug
 * @returns {Array}
 */
export const getProductsByCategory = (categorySlug) => {
  const result = [];
  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].categorySlug === categorySlug) result.push(PRODUCTS[i]);
  }
  return result;
}

/**
 * Get featured products
 * @returns {Array}
 */
export const getFeaturedProducts = () => {
  const result = [];
  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].featured) result.push(PRODUCTS[i]);
  }
  return result;
}

/**
 * Get products on sale
 * @returns {Array}
 */
export const getOnSaleProducts = () => {
  const result = [];
  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].onSale) result.push(PRODUCTS[i]);
  }
  return result;
}

/**
 * Get best sellers (sorted by totalSales descending)
 * @param {number} [limitArg] - Optional limit
 * @returns {Array}
 */
export const getBestSellers = (limitArg) => {
  const limitVal = limitArg || 4;
  const sorted = PRODUCTS.slice().sort((a, b) => {
    return (b.totalSales || 0) - (a.totalSales || 0);
  });
  return sorted.slice(0, limitVal);
}

/**
 * Get new arrivals (sorted by dateAdded descending)
 * @param {number} [limitArg] - Optional limit
 * @returns {Array}
 */
export const getNewArrivals = (limitArg) => {
  const limitVal = limitArg || 4;
  const sorted = PRODUCTS.slice().sort((a, b) => {
    const dateA = new Date(a.dateAdded).getTime();
    const dateB = new Date(b.dateAdded).getTime();
    return dateB - dateA;
  });
  return sorted.slice(0, limitVal);
}

/**
 * Get related products based on SHARED TAGS (tag-based matching).
 * Scores each product by number of shared tags, returns top matches.
 *
 * @param {string} productId - Source product ID
 * @param {number} [limitArg] - Optional limit (default 4)
 * @returns {Array}
 */
export const getRelatedProducts = (productId, limitArg) => {
  const limitVal = limitArg || 4;
  const sourceProduct = getProductById(productId);

  if (!sourceProduct) return [];

  const sourceTags = sourceProduct.tags || [];
  if (sourceTags.length === 0) {
    // Fallback: same category
    const catResult = [];
    for (let c = 0; c < PRODUCTS.length; c++) {
      if (PRODUCTS[c].id !== productId && PRODUCTS[c].categorySlug === sourceProduct.categorySlug) {
        catResult.push(PRODUCTS[c]);
      }
    }
    return catResult.slice(0, limitVal);
  }

  // Score every other product by shared tag count
  const scored = [];
  for (let i = 0; i < PRODUCTS.length; i++) {
    const p = PRODUCTS[i];
    if (p.id === productId) continue;
    const pTags = p.tags || [];
    let sharedCount = 0;
    for (let s = 0; s < sourceTags.length; s++) {
      for (let t = 0; t < pTags.length; t++) {
        if (sourceTags[s] === pTags[t]) {
          sharedCount++;
          break;
        }
      }
    }
    if (sharedCount > 0) {
      scored.push({ product: p, score: sharedCount });
    }
  }

  // Sort by score desc, then totalSales desc as tiebreaker
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return (b.product.totalSales || 0) - (a.product.totalSales || 0);
  });

  const result = [];
  for (let r = 0; r < scored.length && r < limitVal; r++) {
    result.push(scored[r].product);
  }
  return result;
}

/**
 * Get products by tag slug
 * @param {string} tagSlug - Tag slug
 * @param {number} [limitArg] - Optional limit
 * @returns {Array}
 */
export const getProductsByTag = (tagSlug, limitArg) => {
  const result = [];
  for (let i = 0; i < PRODUCTS.length; i++) {
    const tags = PRODUCTS[i].tags || [];
    for (let t = 0; t < tags.length; t++) {
      if (tags[t] === tagSlug) {
        result.push(PRODUCTS[i]);
        break;
      }
    }
  }
  if (limitArg) return result.slice(0, limitArg);
  return result;
}

/**
 * Search products by name or description
 * @param {string} query - Search query
 * @returns {Array}
 */
export const searchProducts = (query) => {
  const q = query.toLowerCase();
  const result = [];

  for (let i = 0; i < PRODUCTS.length; i++) {
    const p = PRODUCTS[i];
    const nameMatch = p.name && p.name.toLowerCase().indexOf(q) !== -1;
    const descMatch = p.description && p.description.toLowerCase().indexOf(q) !== -1;
    const shortDescMatch = p.shortDescription && p.shortDescription.toLowerCase().indexOf(q) !== -1;

    if (nameMatch || descMatch || shortDescMatch) {
      result.push(p);
    }
  }

  return result;
}

export const newInStoreProducts = getNewArrivals(4);

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
  getProductsByTag: getProductsByTag,
  searchProducts: searchProducts,
  newInStoreProducts: newInStoreProducts
};