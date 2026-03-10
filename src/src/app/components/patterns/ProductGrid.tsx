import React from 'react';
import * as ProductCardModule from '../blocks/product/ProductCard';
import * as ProductsData from '../../data/products';

var ProductCard = ProductCardModule.ProductCard;
var Product = ProductsData.Product;

/*
 * ProductGridProps:
 *   products?: Product[]
 *   columns?: {
 *     mobile?: number
 *     tablet?: number
 *     desktop?: number
 *   }
 *   gap?: string
 *   className?: string
 *   scrollOnMobile?: boolean
 */

/**
 * ProductGrid Pattern
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No rest parameters
 * 3. No destructuring in parameter list
 */
export function ProductGrid(props) {
  var products = props.products;
  var columns = props.columns || { mobile: 1, tablet: 2, desktop: 4 };
  var className = props.className || '';
  var scrollOnMobile = props.scrollOnMobile || false;

  if (!products || products.length === 0) {
    return null;
  }
  
  var desktop = columns.desktop || 4;
  
  var baseClass = 'wc-block-product-grid';
  if (desktop === 3) {
    baseClass = 'wc-block-product-grid--three-col';
  }
  if (desktop === 2) {
    baseClass = 'wc-block-product-grid--two-col';
  }
  if (scrollOnMobile) {
    baseClass = baseClass + ' wc-block-product-grid--scroll-mobile';
  }
  
  var gridClass = baseClass;

  return React.createElement('div', { className: gridClass + ' ' + className },
    products.map(function(product) {
      return React.createElement('div', { key: product.id, className: 'wc-block-product-grid__item' },
        React.createElement(ProductCard, { product: product })
      );
    })
  );
}