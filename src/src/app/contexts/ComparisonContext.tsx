/**
 * ComparisonContext.tsx
 *
 * Product comparison state management (max 4 items).
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { toast } from 'sonner@2.0.3';

interface ComparisonProduct {
  id: string;
  name?: string;
  [key: string]: any;
}

interface ComparisonContextValue {
  comparisonItems: ComparisonProduct[];
  addToComparison: (product: ComparisonProduct) => void;
  removeFromComparison: (productId: string) => void;
  clearComparison: () => void;
  isInComparison: (productId: string) => boolean;
  canAddMore: boolean;
  comparisonCount: number;
}

const ComparisonContext = createContext<ComparisonContextValue | undefined>(undefined);
const MAX_COMPARISON_ITEMS = 4;

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [comparisonItems, setComparisonItems] = useState<ComparisonProduct[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('productComparison');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (error) {
        // Ignored
      }
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('productComparison', JSON.stringify(comparisonItems));
      } catch (error) {
        // Ignored
      }
    }
  }, [comparisonItems]);

  const addToComparison = useCallback((product: ComparisonProduct) => {
    setComparisonItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        toast.info('Product already in comparison');
        return prev;
      }
      if (prev.length >= MAX_COMPARISON_ITEMS) {
        toast.error('Comparison limit reached');
        return prev;
      }
      toast.success('Added to comparison');
      return [...prev, product];
    });
  }, []);

  const removeFromComparison = useCallback((productId: string) => {
    setComparisonItems((prev) => prev.filter((item) => item.id !== productId));
    toast.success('Removed from comparison');
  }, []);

  const clearComparison = useCallback(() => {
    setComparisonItems([]);
    toast.success('Comparison cleared');
  }, []);

  const isInComparison = useCallback((productId: string): boolean => {
    return comparisonItems.some((item) => item.id === productId);
  }, [comparisonItems]);

  const value = useMemo<ComparisonContextValue>(() => ({
    comparisonItems,
    addToComparison,
    removeFromComparison,
    clearComparison,
    isInComparison,
    canAddMore: comparisonItems.length < MAX_COMPARISON_ITEMS,
    comparisonCount: comparisonItems.length
  }), [comparisonItems, addToComparison, removeFromComparison, clearComparison, isInComparison]);

  return <ComparisonContext.Provider value={value}>{children}</ComparisonContext.Provider>;
}

export const useComparison = (): ComparisonContextValue => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
}