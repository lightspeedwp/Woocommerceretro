/**
 * WishlistContext.tsx
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No destructuring in parameters
 * 3. ASCII only
 * 4. No TypeScript interfaces or generics
 */

import React from 'react';
var createContext = React.createContext;
var useContext = React.useContext;
var useState = React.useState;
var useEffect = React.useEffect;

var WishlistContext = createContext(undefined);

export function useWishlist() {
  var context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}

export function WishlistProvider(props) {
  var children = props.children;

  var _state = useState(function() {
    try {
      var savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (e) {
      return [];
    }
  });
  var items = _state[0];
  var setItems = _state[1];

  useEffect(function() {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }, [items]);

  function addToWishlist(product) {
    setItems(function(currentItems) {
      var exists = false;
      for (var i = 0; i < currentItems.length; i++) {
        if (currentItems[i].id === product.id) {
          exists = true;
          break;
        }
      }
      if (exists) return currentItems;
      return currentItems.concat([product]);
    });
  }

  function removeFromWishlist(productId) {
    setItems(function(currentItems) {
      var result = [];
      for (var i = 0; i < currentItems.length; i++) {
        if (currentItems[i].id !== productId) result.push(currentItems[i]);
      }
      return result;
    });
  }

  function clearWishlist() {
    setItems([]);
  }

  function isInWishlist(productId) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === productId) return true;
    }
    return false;
  }

  function getWishlistCount() {
    return items.length;
  }

  var value = {
    items: items,
    addToWishlist: addToWishlist,
    removeFromWishlist: removeFromWishlist,
    clearWishlist: clearWishlist,
    isInWishlist: isInWishlist,
    getWishlistCount: getWishlistCount
  };

  return React.createElement(WishlistContext.Provider, { value: value }, children);
}