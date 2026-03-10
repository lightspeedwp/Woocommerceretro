import React from 'react';
import * as TypographyModule from '../common/Typography';
import * as ProductGridModule from './ProductGrid';

var Typography = TypographyModule.Typography;
var ProductGrid = ProductGridModule.ProductGrid;

// RelatedProductsSectionProps structure
// - products: any[]
// - heading?: string
// - description?: string
// - maxProducts?: number
// - className?: string

/**
 * RelatedProductsSection Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function RelatedProductsSection(props) {
  var products = props.products;
  var heading = props.heading === undefined ? 'You May Also Like' : props.heading;
  var description = props.description;
  var maxProducts = props.maxProducts === undefined ? 8 : props.maxProducts;
  var className = props.className || '';

  if (!products || !Array.isArray(products)) {
    return null;
  }

  var displayProducts = products.slice(0, maxProducts);

  if (displayProducts.length === 0) {
    return null;
  }

  var titleElement = heading ? React.createElement(Typography, { 
    key: 'title',
    variant: "h2", 
    className: "wc-related-products__title" 
  }, heading) : null;

  var descElement = description ? React.createElement(Typography, { 
    key: 'desc',
    variant: "p", 
    className: "wc-related-products__description" 
  }, description) : null;

  var header = (heading || description) ? React.createElement('div', { 
    key: 'header',
    className: "wc-related-products__header" 
  }, [
    titleElement,
    descElement
  ]) : null;

  var grid = React.createElement(ProductGrid, { 
    key: 'grid',
    products: displayProducts 
  });

  return React.createElement('div', { className: "wc-related-products " + className }, [
    header,
    grid
  ]);
}