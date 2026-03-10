/**
 * CheckoutHeader Component (Checkout Template Part)
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. Named functions
 * 4. ASCII only
 */

import React from 'react';
import * as ContainerModule from '../common/Container';
import * as LogoModule from '../common/Logo';
import { Lock, ArrowLeft } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';

var Container = ContainerModule.Container;
var ShopLogo = LogoModule.ShopLogo;
var Link = ReactRouterModule.Link;
var useLocation = ReactRouterModule.useLocation;

export function CheckoutHeader() {
  var location = useLocation();
  var isCartPage = location.pathname === '/cart';

  var renderLogoLink = function() {
    return React.createElement(Link, { 
      key: 'logoLink',
      to: '/shop', 
      className: 'wp-checkout-header__logo-link' 
    }, [
      React.createElement(ShopLogo, { 
        key: 'logo',
        variant: 'current', 
        className: 'wp-checkout-header__logo' 
      })
    ]);
  };

  var renderCartLink = function() {
    var icon = React.createElement(ArrowLeft, { 
      key: 'icon',
      size: 16, 
      className: 'wp-checkout-header__back-icon' 
    });
    var text = React.createElement('span', { 
      key: 'text',
      className: 'wp-checkout-header__back-text' 
    }, 'Back to Cart');

    return React.createElement(Link, { 
      key: 'cartLink',
      to: '/cart', 
      className: 'wp-checkout-header__back-link' 
    }, [icon, text]);
  };

  var branding = React.createElement('div', { 
    key: 'branding',
    className: 'wp-checkout-header__branding' 
  }, [
    renderLogoLink(),
    React.createElement('div', { 
      key: 'secure',
      className: 'wp-checkout-header__secure-badge' 
    }, [
      React.createElement(Lock, { key: 'icon', size: 16, className: 'wp-checkout-header__secure-icon' }),
      React.createElement('span', { key: 'text', className: 'wp-checkout-header__secure-text' }, 'Secure Checkout')
    ])
  ]);

  var inner = React.createElement('div', { 
    key: 'inner',
    className: 'wp-checkout-header__inner' 
  }, [
    branding,
    isCartPage ? null : renderCartLink()
  ]);

  return React.createElement('header', { className: 'wp-checkout-header' }, [
    React.createElement(Container, { 
      key: 'container',
      variant: 'site' 
    }, [inner])
  ]);
}

CheckoutHeader.displayName = 'CheckoutHeader';