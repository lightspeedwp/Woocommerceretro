import React from 'react';
import * as TypographyModule from '../common/Typography';
import * as ProductGridModule from './ProductGrid';
import { Clock } from '@phosphor-icons/react';

var Typography = TypographyModule.Typography;
var ProductGrid = ProductGridModule.ProductGrid;
var ClockIcon = Clock;

// RecentlyViewedSectionProps structure
// - products: any[]
// - heading?: string
// - description?: string
// - maxProducts?: number
// - showIcon?: boolean
// - className?: string

/**
 * RecentlyViewedSection Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function RecentlyViewedSection(props) {
  var products = props.products;
  var heading = props.heading === undefined ? 'Recently Viewed' : props.heading;
  var description = props.description;
  var maxProducts = props.maxProducts === undefined ? 8 : props.maxProducts;
  var showIcon = props.showIcon === undefined ? true : props.showIcon;
  var className = props.className || '';

  var displayProducts = products ? products.slice(0, maxProducts) : [];

  if (displayProducts.length === 0) {
    return null;
  }

  var titleWrapper = React.createElement('div', { key: 'title-wrap', className: "wc-recently-viewed__title-wrapper" }, [
    showIcon ? React.createElement(ClockIcon, { 
      key: 'icon',
      size: 24, 
      className: "wc-recently-viewed__icon", 
      'aria-hidden': "true"
    }) : null,
    React.createElement(Typography, { 
      key: 'title',
      variant: "h2", 
      className: "wc-recently-viewed__title" 
    }, heading)
  ]);

  var descElement = description ? React.createElement(Typography, { 
    key: 'desc',
    variant: "p", 
    className: "wc-recently-viewed__description" 
  }, description) : null;

  var header = (heading || description) ? React.createElement('div', { 
    key: 'header',
    className: "wc-recently-viewed__header" 
  }, [
    heading ? titleWrapper : null,
    descElement
  ]) : null;

  var grid = React.createElement(ProductGrid, { 
    key: 'grid',
    products: displayProducts 
  });

  return React.createElement('div', { className: "wc-recently-viewed " + className }, [
    header,
    grid
  ]);
}