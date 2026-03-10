/**
 * Site Logo Block Component
 * 
 * Displays the site's logo with optional home page linking.
 * Transformed from the existing Logo component with WordPress block parity.
 * 
 * WordPress Equivalent: core/site-logo
 * Category: Theme
 * Introduced: WordPress 5.9
 */

import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;

import * as UiUtils from '../ui/utils';
var cn = UiUtils.cn;

/**
 * Site Logo component with WordPress block parity
 */
export function SiteLogo(props) {
  var src = props.src;
  var srcDark = props.srcDark;
  var alt = props.alt;
  var width = props.width || '150px';
  var linkHref = props.linkHref !== undefined ? props.linkHref : '/';
  var linkLabel = props.linkLabel || 'Home';
  var className = props.className;
  var style = props.style;

  // Combine width and style manually to avoid spread
  var combinedStyle = { width: width };
  if (style) {
    Object.assign(combinedStyle, style);
  }

  // Logo image element with dark mode support
  var logoElement;
  if (srcDark) {
    logoElement = React.createElement(React.Fragment, null,
      React.createElement('img', {
        src: src,
        alt: alt,
        className: cn('wp-block-site-logo__image wp-hidden-dark', className),
        style: combinedStyle
      }),
      React.createElement('img', {
        src: srcDark,
        alt: alt,
        className: cn('wp-block-site-logo__image wp-hidden-light', className),
        style: combinedStyle
      })
    );
  } else {
    logoElement = React.createElement('img', {
      src: src,
      alt: alt,
      className: cn('wp-block-site-logo__image', className),
      style: combinedStyle
    });
  }

  // Return with or without link
  if (linkHref) {
    return React.createElement(Link, {
      to: linkHref,
      'aria-label': linkLabel,
      className: "wp-block-site-logo__link"
    }, logoElement);
  }

  return React.createElement('div', { className: "wp-block-site-logo__wrapper" }, logoElement);
}

SiteLogo.displayName = 'SiteLogo';

/**
 * WooCommerce Logo (Legacy - uses inline SVG)
 */
export function WooCommerceLogo(props) {
  var variant = props.variant || 'default';
  var width = props.width || '150px';
  var linkHref = props.linkHref !== undefined ? props.linkHref : '/';
  var className = props.className;

  var fillColor = variant === 'white' ? 'var(--wp--preset--color--white)' : 'currentColor';

  var svgElement = React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    role: "img",
    'aria-label': "WooCommerce",
    viewBox: "0 0 95 26",
    className: cn('wp-block-site-logo__image wp-site-logo', className),
    style: { width: width },
    preserveAspectRatio: "xMidYMid"
  },
    React.createElement('title', null, 'WooCommerce'),
    React.createElement('path', {
      d: "M12.0825 25.2704C14.8471 25.2704 17.0657 23.9052 18.7381 20.7651L22.4584 13.8023V19.707C22.4584 23.1884 24.7111 25.2704 28.1925 25.2704C30.923 25.2704 32.9368 24.0758 34.8822 20.7651L43.4492 6.29339C45.3264 3.11918 43.9953 0.72998 39.8654 0.72998C37.6469 0.72998 36.2134 1.44674 34.9164 3.87006L29.0117 14.9628V5.09879C29.0117 2.1635 27.6123 0.72998 25.0183 0.72998C22.9704 0.72998 21.3321 1.6174 20.0692 4.07485L14.5058 14.9628V5.20119C14.5058 2.0611 13.2088 0.72998 10.0687 0.72998H3.65206C1.22873 0.72998 0 1.85632 0 3.93833C0 6.02034 1.29699 7.21494 3.65206 7.21494H6.28017V19.6729C6.28017 23.1884 8.63523 25.2704 12.0825 25.2704Z",
      fill: fillColor
    }),
    React.createElement('path', {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M55.9772 0.72998C48.9803 0.72998 43.6217 5.95208 43.6217 13.0173C43.6217 20.0825 49.0144 25.2704 55.9772 25.2704C62.94 25.2704 68.2645 20.0483 68.2986 13.0173C68.2986 5.95208 62.94 0.72998 55.9772 0.72998ZM55.9772 17.7274C53.3491 17.7274 51.5401 15.7478 51.5401 13.0173C51.5401 10.2868 53.3491 8.27301 55.9772 8.27301C58.6053 8.27301 60.4143 10.2868 60.4143 13.0173C60.4143 15.7478 58.6395 17.7274 55.9772 17.7274Z",
      fill: fillColor
    }),
    React.createElement('path', {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M70.0369 13.0173C70.0369 5.95208 75.3955 0.72998 82.3583 0.72998C89.3211 0.72998 94.6797 5.98621 94.6797 13.0173C94.6797 20.0483 89.3211 25.2704 82.3583 25.2704C75.3955 25.2704 70.0369 20.0825 70.0369 13.0173ZM77.9554 13.0173C77.9554 15.7478 79.6961 17.7274 82.3583 17.7274C84.9864 17.7274 86.7954 15.7478 86.7954 13.0173C86.7954 10.2868 84.9864 8.27301 82.3583 8.27301C79.7302 8.27301 77.9554 10.2868 77.9554 13.0173Z",
      fill: fillColor
    })
  );

  if (linkHref) {
    return React.createElement(Link, {
      to: linkHref,
      'aria-label': "Home",
      className: "wp-block-site-logo__link"
    }, svgElement);
  }

  return React.createElement('div', { className: "wp-block-site-logo__wrapper" }, svgElement);
}

WooCommerceLogo.displayName = 'WooCommerceLogo';

// Backward compatibility aliases
export var Logo = WooCommerceLogo;
export var ShopLogo = WooCommerceLogo;
export var MainLogo = WooCommerceLogo;