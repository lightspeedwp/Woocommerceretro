import React from 'react';
import * as TypographyModule from '../../common/Typography';
var Typography = TypographyModule.Typography;

/* ProductPriceProps: { price: number, salePrice?: number } */

/**
 * ProductPrice Block Component
 * 
 * Displays product pricing with sale price support and strikethrough.
 * Shows regular price or sale price with original price crossed out.
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 * 5. No non-ASCII characters
 */
export function ProductPrice(props) {
  var price = props.price;
  var salePrice = props.salePrice;

  if (salePrice) {
    return React.createElement('div', { className: 'wc-product-price' },
      React.createElement(Typography, { 
        variant: 'h3', 
        className: 'wc-product-price__current' 
      }, 'R ' + salePrice.toFixed(2)),
      React.createElement('span', { className: 'wc-product-price__original' }, 
        'R ' + price.toFixed(2)
      )
    );
  }

  return React.createElement('div', { className: 'wc-product-price' },
    React.createElement(Typography, { 
      variant: 'h3', 
      className: 'wc-product-price__current' 
    }, 'R ' + price.toFixed(2))
  );
}