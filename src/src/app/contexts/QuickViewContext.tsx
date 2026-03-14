/**
 * QuickViewContext.tsx
 *
 * Quick view modal state management for product previews.
 */

import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';

interface QuickViewProduct {
  id: string;
  name?: string;
  [key: string]: any;
}

interface QuickViewContextValue {
  product: QuickViewProduct | null;
  isOpen: boolean;
  openQuickView: (product: QuickViewProduct) => void;
  closeQuickView: () => void;
}

const QuickViewContext = createContext<QuickViewContextValue | undefined>(undefined);

export const useQuickView = (): QuickViewContextValue => {
  const context = useContext(QuickViewContext);
  if (!context) {
    throw new Error('useQuickView must be used within QuickViewProvider');
  }
  return context;
}

export const QuickViewProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<QuickViewProduct | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openQuickView = useCallback((productArg: QuickViewProduct) => {
    setProduct(productArg);
    setIsOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closeQuickView = useCallback(() => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
    setTimeout(() => {
      setProduct(null);
    }, 300);
  }, []);

  const value = useMemo<QuickViewContextValue>(() => ({
    product,
    isOpen,
    openQuickView,
    closeQuickView
  }), [product, isOpen, openQuickView, closeQuickView]);

  return <QuickViewContext.Provider value={value}>{children}</QuickViewContext.Provider>;
}