/**
 * CartContext.tsx
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No destructuring in parameters
 * 3. ASCII only
 * 4. No modern export-from
 */

import React from 'react';
var createContext = React.createContext;
var useContext = React.useContext;
var useState = React.useState;
var useEffect = React.useEffect;

var MOCK_COUPONS = [
  { code: 'SAVE10', discount: 10, type: 'percentage' },
  { code: 'SAVE20', discount: 20, type: 'percentage', minPurchase: 100 },
  { code: 'WELCOME', discount: 15, type: 'fixed' },
  { code: 'FREESHIP', discount: 0, type: 'fixed' },
  { code: 'SUMMER25', discount: 25, type: 'percentage', maxDiscount: 50 }
];

var MOCK_SHIPPING_ZONES = [
  { country: 'GB', rate: 4.99, freeShippingThreshold: 50 },
  { country: 'US', rate: 9.99, freeShippingThreshold: 75 },
  { country: 'EU', rate: 7.99, freeShippingThreshold: 60 },
  { country: 'OTHER', rate: 14.99, freeShippingThreshold: 100 }
];

var CartContext = createContext(undefined);

export function useCart() {
  var context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider(props) {
  var children = props.children;

  var _itemsState = useState(function() {
    try {
      var savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      return [];
    }
  });
  var items = _itemsState[0];
  var setItems = _itemsState[1];

  useEffect(function() {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  function addToCart(product, quantityArg) {
    var quantity = quantityArg !== undefined ? quantityArg : 1;
    setItems(function(currentItems) {
      var existingIndex = -1;
      for (var i = 0; i < currentItems.length; i++) {
        if (currentItems[i].product.id === product.id) {
          existingIndex = i;
          break;
        }
      }

      if (existingIndex !== -1) {
        var result = [];
        for (var i = 0; i < currentItems.length; i++) {
          if (i === existingIndex) {
            result.push({ 
              product: currentItems[i].product, 
              quantity: currentItems[i].quantity + quantity 
            });
          } else {
            result.push(currentItems[i]);
          }
        }
        return result;
      } else {
        return currentItems.concat([{ product: product, quantity: quantity }]);
      }
    });
  }

  function removeFromCart(productId) {
    setItems(function(currentItems) {
      var result = [];
      for (var i = 0; i < currentItems.length; i++) {
        if (currentItems[i].product.id !== productId) {
          result.push(currentItems[i]);
        }
      }
      return result;
    });
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems(function(currentItems) {
      var result = [];
      for (var i = 0; i < currentItems.length; i++) {
        if (currentItems[i].product.id === productId) {
          result.push({ product: currentItems[i].product, quantity: quantity });
        } else {
          result.push(currentItems[i]);
        }
      }
      return result;
    });
  }

  function clearCart() {
    setItems([]);
  }

  function getCartTotal() {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
      var price = items[i].product.salePrice || items[i].product.price;
      total += price * items[i].quantity;
    }
    return total;
  }

  function getCartCount() {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
      count += items[i].quantity;
    }
    return count;
  }

  function isInCart(productId) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].product.id === productId) return true;
    }
    return false;
  }

  var _couponState = useState(null);
  var appliedCoupon = _couponState[0];
  var setAppliedCoupon = _couponState[1];

  function applyCoupon(code) {
    var coupon = null;
    for (var i = 0; i < MOCK_COUPONS.length; i++) {
      if (MOCK_COUPONS[i].code.toUpperCase() === code.toUpperCase()) {
        coupon = MOCK_COUPONS[i];
        break;
      }
    }

    if (!coupon) {
      return { success: false, message: 'Invalid coupon code.' };
    }

    if (coupon.minPurchase && getCartTotal() < coupon.minPurchase) {
      return { success: false, message: 'Minimum purchase of GBP ' + coupon.minPurchase.toFixed(2) + ' required.' };
    }

    setAppliedCoupon(coupon);
    return { success: true, message: 'Coupon applied successfully!' };
  }

  function removeCoupon() {
    setAppliedCoupon(null);
  }

  function getDiscount() {
    if (!appliedCoupon) return 0;

    var subtotal = getCartTotal();
    if (appliedCoupon.type === 'percentage') {
      var discount = (subtotal * appliedCoupon.discount) / 100;
      if (appliedCoupon.maxDiscount && discount > appliedCoupon.maxDiscount) {
        return appliedCoupon.maxDiscount;
      }
      return discount;
    } else {
      return appliedCoupon.discount;
    }
  }

  var _shippingState = useState('GB');
  var shippingCountry = _shippingState[0];
  var setShippingCountry = _shippingState[1];

  function getShippingCost() {
    var zone = null;
    for (var i = 0; i < MOCK_SHIPPING_ZONES.length; i++) {
      if (MOCK_SHIPPING_ZONES[i].country === shippingCountry) {
        zone = MOCK_SHIPPING_ZONES[i];
        break;
      }
    }

    if (!zone) return 0;

    var subtotal = getCartTotal();
    if (zone.freeShippingThreshold && subtotal >= zone.freeShippingThreshold) {
      return 0;
    }

    return zone.rate;
  }

  function getFinalTotal() {
    var subtotal = getCartTotal();
    var discount = getDiscount();
    var shipping = getShippingCost();
    return subtotal - discount + shipping;
  }

  var value = {
    items: items,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    updateQuantity: updateQuantity,
    clearCart: clearCart,
    getCartTotal: getCartTotal,
    getCartCount: getCartCount,
    isInCart: isInCart,
    applyCoupon: applyCoupon,
    removeCoupon: removeCoupon,
    appliedCoupon: appliedCoupon,
    getDiscount: getDiscount,
    setShippingCountry: setShippingCountry,
    shippingCountry: shippingCountry,
    getShippingCost: getShippingCost,
    getFinalTotal: getFinalTotal
  };

  return React.createElement(CartContext.Provider, { value: value }, children);
}