import React from 'react';
import * as ReactRouterModule from 'react-router';
import { CaretRight as ChevronRight, House as Home } from '@phosphor-icons/react';

var useLocation = ReactRouterModule.useLocation;
var Link = ReactRouterModule.Link;

// Safe icon references
var IconChevronRight = ChevronRight;
var IconHome = Home;

// Helper to format path segments
function formatSegment(segment) {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, function(char) { return char.toUpperCase(); });
}

// Custom overrides for specific paths
var PATH_MAP = {
  'shop': 'Shop',
  'faq': 'FAQ',
  'contact': 'Contact Us',
  'cart': 'Cart',
  'checkout': 'Checkout',
  'order-confirmation': 'Order Confirmation',
  'promotions': 'Promotions',
  'shipping-returns': 'Shipping & Returns',
  'policies': 'Policies',
  'terms': 'Terms & Conditions',
  'legal': 'Legal',
  'product': 'Product',
  'my-account': 'My Account',
};

// Paths that should not be clickable
var NON_CLICKABLE_PATHS = ['product', 'shop/tag'];

/**
 * BreadcrumbsBar Component (Global Template Part)
 * 
 * Automatic breadcrumb navigation bar that generates path-based breadcrumbs
 * from the current URL.
 */
export function BreadcrumbsBar() {
  var location = useLocation();
  var pathnames = location.pathname.split('/').filter(function(x) { return x; });

  if (pathnames.length === 0) {
    return null;
  }

  return React.createElement('div', { className: 'wp-breadcrumbs-bar wp-breadcrumbs-bar--funky' },
    React.createElement('div', { className: 'wp-breadcrumbs-container' },
      React.createElement('nav', { 'aria-label': 'Breadcrumb' },
        React.createElement('ol', { className: 'wp-breadcrumbs-list' },
          React.createElement('li', null,
            React.createElement(Link, { to: '/', className: 'wp-breadcrumbs-link' },
              React.createElement(IconHome, { size: 14, className: 'wp-breadcrumbs-home-icon' }),
              React.createElement('span', { className: 'sr-only' }, 'Home')
            )
          ),
          pathnames.map(function(value, index) {
            var to = '/' + pathnames.slice(0, index + 1).join('/');
            var isLast = index === pathnames.length - 1;
            var name = PATH_MAP[value] || formatSegment(value);
            var isNonClickable = NON_CLICKABLE_PATHS.includes(value);

            return React.createElement('li', { key: to, className: 'wp-breadcrumbs-item' },
              React.createElement(IconChevronRight, { size: 14, className: 'wp-breadcrumbs-separator' }),
              isLast ? (
                React.createElement('span', { className: 'wp-breadcrumbs-current', 'aria-current': 'page' }, name)
              ) : isNonClickable ? (
                React.createElement('span', { className: 'wp-breadcrumbs-inactive' }, name)
              ) : (
                React.createElement(Link, { to: to, className: 'wp-breadcrumbs-link' }, name)
              )
            );
          })
        )
      )
    )
  );
}