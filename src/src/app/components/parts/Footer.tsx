import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as MainFooterModule from './MainFooter';
import * as CheckoutFooterModule from './CheckoutFooter';

var useLocation = ReactRouterModule.useLocation;
var MainFooter = MainFooterModule.MainFooter;
var CheckoutFooter = CheckoutFooterModule.CheckoutFooter;

/**
 * Footer — Smart footer switcher (Global Template Part)
 *
 * Renders MainFooter or CheckoutFooter based on current route.
 * Checkout/order-confirmation routes get the minimal CheckoutFooter;
 * all other routes get the full MainFooter.
 *
 * CSS: /src/styles/blocks/layout/footer.css (base)
 *      /src/styles/blocks/theme/parts-funky.css (funky overrides)
 *
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.id] - Optional element ID
 */
export function Footer(props) {
  var location = useLocation();
  var pathname = location.pathname;
  var className = props.className || '';
  var isCheckout = pathname.startsWith('/checkout') || pathname.startsWith('/order-confirmation');

  if (isCheckout) {
    return React.createElement(CheckoutFooter, { className: className });
  }

  return React.createElement(MainFooter, { id: props.id, className: className });
}
