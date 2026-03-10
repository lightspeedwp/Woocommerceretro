/**
 * Variant Selection Hook
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No spread operators
 * 3. ASCII only
 */

import React from 'react';
var useState = React.useState;
var useMemo = React.useMemo;
// Type references (JSDoc only - no runtime import needed):
// VariableProduct, ProductVariation, SelectedVariant, VariantSelectorState

/**
 * findMatchingVariation
 */
function findMatchingVariation(
  variations,
  selected
) {
  var keys = Object.keys(selected);
  if (keys.length === 0) {
    return null;
  }

  for (var i = 0; i < variations.length; i++) {
    var variation = variations[i];
    var allMatch = true;
    for (var j = 0; j < keys.length; j++) {
      var key = keys[j];
      if (variation.attributes[key] !== selected[key]) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) return variation;
  }
  return null;
}

/**
 * useVariantSelection Hook
 */
export function useVariantSelection(product) {
  var stateRef = useState({});
  var selected = stateRef[0];
  var setSelected = stateRef[1];

  var matchedVariation = useMemo(function() {
    return findMatchingVariation(product.variations, selected);
  }, [product.variations, selected]);

  var isComplete = useMemo(function() {
    var requiredAttributes = [];
    for (var i = 0; i < product.attributes.length; i++) {
      if (product.attributes[i].variation) {
        requiredAttributes.push(product.attributes[i]);
      }
    }

    var complete = true;
    for (var i = 0; i < requiredAttributes.length; i++) {
      if (!selected[requiredAttributes[i].slug]) {
        complete = false;
        break;
      }
    }
    return complete;
  }, [product.attributes, selected]);

  var errors = useMemo(function() {
    var errorList = [];
    
    if (!isComplete) {
      var missingAttributes = [];
      for (var i = 0; i < product.attributes.length; i++) {
        if (product.attributes[i].variation && !selected[product.attributes[i].slug]) {
          missingAttributes.push(product.attributes[i].name);
        }
      }
      
      if (missingAttributes.length > 0) {
        errorList.push("Please select: " + missingAttributes.join(', '));
      }
    }
    
    if (isComplete && !matchedVariation) {
      errorList.push('This combination is not available');
    }
    
    if (matchedVariation && !matchedVariation.inStock) {
      errorList.push('This variation is out of stock');
    }
    
    return errorList;
  }, [isComplete, matchedVariation, product.attributes, selected]);

  var canAddToCart = useMemo(function() {
    return isComplete && 
           matchedVariation !== null && 
           matchedVariation.inStock && 
           errors.length === 0;
  }, [isComplete, matchedVariation, errors]);

  function selectAttribute(attributeSlug, value) {
    setSelected(function(prev) {
      var updated = {};
      var keys = Object.keys(prev);
      for (var i = 0; i < keys.length; i++) {
        updated[keys[i]] = prev[keys[i]];
      }
      updated[attributeSlug] = value;
      return updated;
    });
  }

  function resetSelection() {
    setSelected({});
  }

  return {
    selected: selected,
    matchedVariation: matchedVariation,
    isComplete: isComplete,
    errors: errors,
    selectAttribute: selectAttribute,
    resetSelection: resetSelection,
    canAddToCart: canAddToCart,
  };
}