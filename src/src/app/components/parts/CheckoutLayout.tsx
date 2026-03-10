import React from 'react';
import * as CheckoutHeaderModule from './CheckoutHeader';
import * as CheckoutFooterModule from './CheckoutFooter';

var CheckoutHeader = CheckoutHeaderModule.CheckoutHeader;
var CheckoutFooter = CheckoutFooterModule.CheckoutFooter;

/**
 * CheckoutLayout Component (Checkout Template Part)
 * 
 * Specialized layout wrapper for the checkout flow with minimal header/footer.
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Standard function declarations
 * 3. Manual prop assignment
 * 4. No destructuring in parameters
 */
export function CheckoutLayout(props) {
  var children = props.children;

  var layout = React.createElement('div', { className: 'wp-checkout-layout' }, children);
  
  return React.createElement('div', { className: "wp-checkout-layout funky-checkout-layout" },
    React.createElement(CheckoutHeader, null),
    React.createElement('main', { className: "wp-checkout-layout__main" },
      layout
    ),
    React.createElement(CheckoutFooter, null)
  );
}