import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as MainHeaderModule from './MainHeader';
import * as CheckoutHeaderModule from './CheckoutHeader';

var useLocation = ReactRouterModule.useLocation;
var MainHeader = MainHeaderModule.MainHeader;
var CheckoutHeader = CheckoutHeaderModule.CheckoutHeader;

/**
 * Header — Smart header switcher (Global Template Part)
 *
 * Renders MainHeader or CheckoutHeader based on current route.
 * Checkout/order-confirmation routes get the minimal CheckoutHeader;
 * all other routes get the full MainHeader with navigation and mega menus.
 *
 * CSS: /src/styles/blocks/theme/parts-funky.css (header + mega menu overrides)
 *
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes
 */
export function Header(props) {
  var location = useLocation();
  var pathname = location.pathname;
  var className = props.className || '';
  var isCheckout = pathname.startsWith('/checkout') || pathname.startsWith('/order-confirmation');

  if (isCheckout) {
    return React.createElement(CheckoutHeader, { className: className });
  }

  return React.createElement(MainHeader, { className: className });
}
