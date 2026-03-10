/**
 * CheckoutFooter Component (Checkout Template Part)
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. Named functions
 * 4. ASCII only
 */

import React from 'react';
import * as ContainerModule from '../common/Container';
import * as ReactRouterModule from 'react-router';

var Container = ContainerModule.Container;
var Link = ReactRouterModule.Link;

export function CheckoutFooter() {
  var currentYear = new Date().getFullYear();

  var renderLink = function(to, text, key) {
    return React.createElement(Link, { 
      key: key,
      to: to, 
      className: 'wp-checkout-footer__link' 
    }, text);
  };

  var copyright = React.createElement('p', { 
    key: 'copy',
    className: 'wp-checkout-footer__copyright' 
  }, '© ' + currentYear + ' Store. All rights reserved.');

  var links = React.createElement('div', { 
    key: 'links',
    className: 'wp-checkout-footer__links' 
  }, [
    renderLink('/legal/privacy', 'Privacy Policy', 'l1'),
    renderLink('/legal/terms', 'Terms & Conditions', 'l2'),
    renderLink('/shipping-returns', 'Returns Policy', 'l3')
  ]);

  var badges = React.createElement('div', { 
    key: 'badges',
    className: 'wp-checkout-footer__badges' 
  }, [
     React.createElement('span', { key: 'b1', className: 'wp-checkout-footer__badge funky-card-glow' }, 'Visa'),
     React.createElement('span', { key: 'b2', className: 'wp-checkout-footer__badge funky-card-glow' }, 'Mastercard'),
     React.createElement('span', { key: 'b3', className: 'wp-checkout-footer__badge funky-card-glow' }, 'Secure SSL')
  ]);

  var inner = React.createElement('div', { 
    key: 'inner',
    className: 'wp-checkout-footer__inner' 
  }, [
    copyright,
    links,
    badges
  ]);

  return React.createElement('footer', { className: 'wp-checkout-footer' }, [
    React.createElement(Container, { 
      key: 'container',
      variant: 'site' 
    }, [inner])
  ]);
}

CheckoutFooter.displayName = 'CheckoutFooter';