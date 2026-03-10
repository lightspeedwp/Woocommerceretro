/**
 * ProductSkeleton.tsx - Product Block
 * 
 * Loading placeholder for product cards with animated pulse effect.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

import React from 'react';

export function ProductSkeleton() {
  var imageSkeleton = React.createElement('div', { className: "wc-block-product-skeleton__image" });
  
  var brandSkeleton = React.createElement('div', { className: "wc-block-product-skeleton__brand" });
  
  var titleLineFull = React.createElement('div', { className: "wc-block-product-skeleton__title-line wc-block-product-skeleton__title-line--full" });
  var titleLinePartial = React.createElement('div', { className: "wc-block-product-skeleton__title-line wc-block-product-skeleton__title-line--partial" });
  var titleSkeleton = React.createElement('div', { className: "wc-block-product-skeleton__title" }, [titleLineFull, titleLinePartial]);
  
  var priceSkeleton = React.createElement('div', { className: "wc-block-product-skeleton__price" });
  var buttonSkeleton = React.createElement('div', { className: "wc-block-product-skeleton__button" });
  
  var contentSkeleton = React.createElement('div', { className: "wc-block-product-skeleton__content" }, [
    brandSkeleton,
    titleSkeleton,
    priceSkeleton,
    buttonSkeleton
  ]);

  return React.createElement('div', {
    className: "wc-block-product-skeleton"
  }, [imageSkeleton, contentSkeleton]);
}

ProductSkeleton.displayName = 'ProductSkeleton';
