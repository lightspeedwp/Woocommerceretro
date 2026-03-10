/**
 * CartEmptyState.tsx - Cart Pattern
 * 
 * Empty state display for cart with no items.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. No optional chaining (?.)
 * 5. Named functions
 * 6. ASCII only
 */

import React from 'react';
import { Bag as ShoppingBag } from '@phosphor-icons/react';
import * as ContentSectionModule from './sections/ContentSection';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as TypographyModule from '../common/Typography';
import * as ProductGridModule from './ProductGrid';
import * as ProductsData from '../../data/products';

var ContentSection = ContentSectionModule.ContentSection;
var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;
var ProductGrid = ProductGridModule.ProductGrid;
var products = ProductsData.products;

export function CartEmptyState() {
  var suggestedProducts = products.slice(0, 4).map(function(p) {
    var imgSrc = '';
    if (p.images && p.images.length > 0 && p.images[0]) {
      imgSrc = p.images[0].src || '';
    }
    return {
      id: p.id.toString(),
      name: p.name,
      price: parseFloat(p.price),
      image: imgSrc,
      inStock: p.stock_status === 'instock',
      rating: parseFloat(p.average_rating)
    };
  });

  var iconWrapper = React.createElement('div', { className: "wp-cart-empty__icon-wrapper" },
    React.createElement('div', { className: "wp-cart-empty__icon" },
      React.createElement(ShoppingBag, { size: 32, "aria-hidden": "true" })
    )
  );

  var heading = React.createElement(Typography, { 
    variant: "h2", 
    align: "center", 
    className: "wp-cart-empty__heading" 
  }, 'Your cart is empty');

  var description = React.createElement('p', { className: "wp-cart-empty__description" }, 
    "Looks like you haven't added anything to your cart yet. Browse our collections to find something you love."
  );

  var cta = React.createElement('div', { className: "wp-cart-empty__cta" },
    React.createElement(Button, { size: "lg", variant: "cta", to: "/shop" }, 'Start Shopping')
  );

  var suggestions = React.createElement('div', { className: "wp-cart-empty__suggestions" }, [
    React.createElement(Typography, { variant: "h3", className: "wp-cart-empty__suggestions-title" }, 'You might also like'),
    React.createElement(ProductGrid, { products: suggestedProducts })
  ]);

  var content = React.createElement(React.Fragment, null, [
    iconWrapper,
    heading,
    description,
    cta,
    suggestions
  ]);

  return React.createElement(ContentSection, {
    className: "wp-cart-empty",
    content: content
  });
}

CartEmptyState.displayName = 'CartEmptyState';