import React from 'react';
import * as ReactRouterModule from 'react-router';
import { CaretRight as ChevronRight, House as Home } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;
var useLocation = ReactRouterModule.useLocation;

/**
 * Breadcrumbs — Hierarchical navigation component (Template Part)
 *
 * Displays the current page location within the site structure.
 * Auto-renders a Home icon link, then each item in order, with
 * the last item marked as current page (not linked).
 *
 * CSS: /src/styles/blocks/navigation/breadcrumb.css
 *      /src/styles/blocks/theme/parts-funky.css (funky overrides)
 *
 * @param {Object} props
 * @param {{ label: string, path: string }[]} props.items - Breadcrumb items (excluding Home)
 */
export function Breadcrumbs(props) {
  var items = props.items;
  return React.createElement('div', { className: 'wp-breadcrumbs-bar wp-breadcrumbs-bar--funky' },
    React.createElement('div', { className: 'wp-breadcrumbs-container' },
      React.createElement('nav', { 'aria-label': 'Breadcrumb' },
        React.createElement('ol', { className: 'wp-breadcrumbs-list' },
          React.createElement('li', { className: 'wp-breadcrumbs-item' },
            React.createElement(Link, { to: '/', className: 'wp-breadcrumbs-link' },
              React.createElement(Home, { size: 16 }),
              React.createElement('span', { className: 'sr-only' }, 'Home')
            )
          ),
          items.map(function(item, index) { return (
            React.createElement('li', { key: item.path, className: 'wp-breadcrumbs-item' },
              React.createElement(ChevronRight, { size: 16, className: 'wp-breadcrumbs-separator' }),
              index === items.length - 1 ? (
                React.createElement('span', { className: 'wp-breadcrumbs-current', 'aria-current': 'page' }, item.label)
              ) : (
                React.createElement(Link, { to: item.path, className: 'wp-breadcrumbs-link' }, item.label)
              )
            )
          ); })
        )
      )
    )
  );
}
