import { useState, useEffect, useCallback } from 'react';
import type { Product } from '../data/products';

/**
 * useRecentlyViewed Hook
 *
 * Tracks recently viewed products, persisted in localStorage.
 */
const STORAGE_KEY = 'recentlyViewed';
const MAX_ITEMS = 10;

export const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
      }
    } catch (error) {
      // Ignored
    }
    return [];
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recentlyViewed));
      }
    } catch (error) {
      // Ignored
    }
  }, [recentlyViewed]);

  const addRecentlyViewed = useCallback((product: Product) => {
    if (!product) return;

    setRecentlyViewed((current) => {
      const filtered = current.filter((item) => item.id !== product.id);
      return [product, ...filtered].slice(0, MAX_ITEMS);
    });
  }, []);

  const clearRecentlyViewed = useCallback(() => {
    setRecentlyViewed([]);
  }, []);

  const getRecentlyViewed = useCallback(() => {
    return recentlyViewed;
  }, [recentlyViewed]);

  return {
    recentlyViewed,
    addRecentlyViewed,
    clearRecentlyViewed,
    getRecentlyViewed,
  };
}