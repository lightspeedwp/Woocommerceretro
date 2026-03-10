/**
 * Recently Viewed Hook
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No spread operators
 * 3. ASCII only
 */

import React from 'react';
var useState = React.useState;
var useEffect = React.useEffect;
var useCallback = React.useCallback;
import * as ProductsModule from '../data/products';
var Product = ProductsModule.Product;

var STORAGE_KEY = 'recentlyViewed';
var MAX_ITEMS = 10;

export function useRecentlyViewed() {
  var stateRef = useState(function() {
    try {
      if (typeof window !== 'undefined') {
        var saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
      }
    } catch (error) {
      // Ignored
    }
    return [];
  });
  var recentlyViewed = stateRef[0];
  var setRecentlyViewed = stateRef[1];

  useEffect(function() {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recentlyViewed));
      }
    } catch (error) {
      // Ignored
    }
  }, [recentlyViewed]);

  var addRecentlyViewed = useCallback(function(product: Product) {
    if (!product) return;
    
    setRecentlyViewed(function(current) {
      var filtered = [];
      for (var i = 0; i < current.length; i++) {
        if (current[i].id !== product.id) {
          filtered.push(current[i]);
        }
      }
      
      var updated = [product].concat(filtered);
      return updated.slice(0, MAX_ITEMS);
    });
  }, []);

  function clearRecentlyViewed() {
    setRecentlyViewed([]);
  }

  function getRecentlyViewed() {
    return recentlyViewed;
  }

  return {
    recentlyViewed: recentlyViewed,
    addRecentlyViewed: addRecentlyViewed,
    clearRecentlyViewed: clearRecentlyViewed,
    getRecentlyViewed: getRecentlyViewed,
  };
}