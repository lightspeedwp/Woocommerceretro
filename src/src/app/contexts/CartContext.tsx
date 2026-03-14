/**
 * CartContext.tsx
 *
 * Shopping cart state management with coupon and shipping support.
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';

interface Coupon {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  minPurchase?: number;
  maxDiscount?: number;
}

interface ShippingZone {
  country: string;
  rate: number;
  freeShippingThreshold: number;
}

interface CartProduct {
  id: string;
  name?: string;
  price: number;
  salePrice?: number;
  image?: string;
  [key: string]: any;
}

interface CartItem {
  product: CartProduct;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addToCart: (product: CartProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  isInCart: (productId: string) => boolean;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  appliedCoupon: Coupon | null;
  getDiscount: () => number;
  setShippingCountry: (country: string) => void;
  shippingCountry: string;
  getShippingCost: () => number;
  getFinalTotal: () => number;
}

const MOCK_COUPONS: Coupon[] = [
  { code: 'SAVE10', discount: 10, type: 'percentage' },
  { code: 'SAVE20', discount: 20, type: 'percentage', minPurchase: 100 },
  { code: 'WELCOME', discount: 15, type: 'fixed' },
  { code: 'FREESHIP', discount: 0, type: 'fixed' },
  { code: 'SUMMER25', discount: 25, type: 'percentage', maxDiscount: 50 }
];

const MOCK_SHIPPING_ZONES: ShippingZone[] = [
  { country: 'GB', rate: 4.99, freeShippingThreshold: 50 },
  { country: 'US', rate: 9.99, freeShippingThreshold: 75 },
  { country: 'EU', rate: 7.99, freeShippingThreshold: 60 },
  { country: 'OTHER', rate: 14.99, freeShippingThreshold: 100 }
];

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [shippingCountry, setShippingCountry] = useState('GB');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((product: CartProduct, quantity: number = 1) => {
    setItems((currentItems) => {
      const existingIndex = currentItems.findIndex((item) => item.product.id === product.id);

      if (existingIndex !== -1) {
        return currentItems.map((item, i) =>
          i === existingIndex
            ? { product: item.product, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...currentItems, { product, quantity }];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { product: item.product, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getCartTotal = useCallback((): number => {
    return items.reduce((total, item) => {
      const price = item.product.salePrice || item.product.price;
      return total + price * item.quantity;
    }, 0);
  }, [items]);

  const getCartCount = useCallback((): number => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const isInCart = useCallback((productId: string): boolean => {
    return items.some((item) => item.product.id === productId);
  }, [items]);

  const applyCoupon = useCallback((code: string): { success: boolean; message: string } => {
    const coupon = MOCK_COUPONS.find((c) => c.code.toUpperCase() === code.toUpperCase());

    if (!coupon) {
      return { success: false, message: 'Invalid coupon code.' };
    }

    const subtotal = items.reduce((total, item) => {
      const price = item.product.salePrice || item.product.price;
      return total + price * item.quantity;
    }, 0);

    if (coupon.minPurchase && subtotal < coupon.minPurchase) {
      return { success: false, message: `Minimum purchase of GBP ${coupon.minPurchase.toFixed(2)} required.` };
    }

    setAppliedCoupon(coupon);
    return { success: true, message: 'Coupon applied successfully!' };
  }, [items]);

  const removeCoupon = useCallback(() => {
    setAppliedCoupon(null);
  }, []);

  const getDiscount = useCallback((): number => {
    if (!appliedCoupon) return 0;

    const subtotal = items.reduce((total, item) => {
      const price = item.product.salePrice || item.product.price;
      return total + price * item.quantity;
    }, 0);

    if (appliedCoupon.type === 'percentage') {
      const discount = (subtotal * appliedCoupon.discount) / 100;
      if (appliedCoupon.maxDiscount && discount > appliedCoupon.maxDiscount) {
        return appliedCoupon.maxDiscount;
      }
      return discount;
    } else {
      return appliedCoupon.discount;
    }
  }, [items, appliedCoupon]);

  const getShippingCost = useCallback((): number => {
    const zone = MOCK_SHIPPING_ZONES.find((z) => z.country === shippingCountry);
    if (!zone) return 0;

    const subtotal = items.reduce((total, item) => {
      const price = item.product.salePrice || item.product.price;
      return total + price * item.quantity;
    }, 0);

    if (zone.freeShippingThreshold && subtotal >= zone.freeShippingThreshold) {
      return 0;
    }

    return zone.rate;
  }, [items, shippingCountry]);

  const getFinalTotal = useCallback((): number => {
    const subtotal = items.reduce((total, item) => {
      const price = item.product.salePrice || item.product.price;
      return total + price * item.quantity;
    }, 0);

    let discountAmount = 0;
    if (appliedCoupon) {
      if (appliedCoupon.type === 'percentage') {
        discountAmount = (subtotal * appliedCoupon.discount) / 100;
        if (appliedCoupon.maxDiscount && discountAmount > appliedCoupon.maxDiscount) {
          discountAmount = appliedCoupon.maxDiscount;
        }
      } else {
        discountAmount = appliedCoupon.discount;
      }
    }

    const zone = MOCK_SHIPPING_ZONES.find((z) => z.country === shippingCountry);
    let shippingCost = 0;
    if (zone) {
      shippingCost = (zone.freeShippingThreshold && subtotal >= zone.freeShippingThreshold)
        ? 0
        : zone.rate;
    }

    return subtotal - discountAmount + shippingCost;
  }, [items, appliedCoupon, shippingCountry]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isInCart,
    applyCoupon,
    removeCoupon,
    appliedCoupon,
    getDiscount,
    setShippingCountry,
    shippingCountry,
    getShippingCost,
    getFinalTotal
  }), [items, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount, isInCart, applyCoupon, removeCoupon, appliedCoupon, getDiscount, shippingCountry, getShippingCost, getFinalTotal]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}