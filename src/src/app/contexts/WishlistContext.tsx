/**
 * WishlistContext.tsx
 *
 * Wishlist state management with localStorage persistence.
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';

interface WishlistProduct {
  id: string;
  name?: string;
  [key: string]: any;
}

interface WishlistContextValue {
  items: WishlistProduct[];
  addToWishlist: (product: WishlistProduct) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: string) => boolean;
  getWishlistCount: () => number;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export const useWishlist = (): WishlistContextValue => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<WishlistProduct[]>(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }, [items]);

  const addToWishlist = useCallback((product: WishlistProduct) => {
    setItems((currentItems) => {
      const exists = currentItems.some((item) => item.id === product.id);
      if (exists) return currentItems;
      return [...currentItems, product];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  }, []);

  const clearWishlist = useCallback(() => {
    setItems([]);
  }, []);

  const isInWishlist = useCallback((productId: string): boolean => {
    return items.some((item) => item.id === productId);
  }, [items]);

  const getWishlistCount = useCallback((): number => {
    return items.length;
  }, [items]);

  const value = useMemo<WishlistContextValue>(() => ({
    items,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist,
    getWishlistCount
  }), [items, addToWishlist, removeFromWishlist, clearWishlist, isInWishlist, getWishlistCount]);

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}