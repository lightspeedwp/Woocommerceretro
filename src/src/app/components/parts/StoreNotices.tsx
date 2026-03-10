import React from 'react';
import * as ContainerModule from '../common/Container';
import { X } from '@phosphor-icons/react';

var useState = React.useState;
var Container = ContainerModule.Container;

/**
 * StoreNotices Component (Template Part)
 * 
 * Site-wide promotional banner bar displayed above the header.
 * Features neon gradient background in funky mode.
 * 
 * Uses BEM classes from /src/styles/blocks/theme/parts-funky.css.
 * 
 * @part
 */
export function StoreNotices() {
  var _vis = useState(true);
  var isVisible = _vis[0];
  var setIsVisible = _vis[1];

  if (!isVisible) return null;

  return React.createElement('div', { className: 'wp-store-notice wp-store-notice--funky' },
    React.createElement(Container, null,
      React.createElement('div', { className: 'wp-store-notice__inner' },
        React.createElement('div', { className: 'wp-store-notice__content' },
          'Free shipping on orders over $100. ',
          React.createElement('a', { href: '/shop', className: 'wp-store-notice__link' }, 'Details')
        ),
        React.createElement('button', {
            onClick: function() { setIsVisible(false); },
            className: 'wp-store-notice__dismiss funky-spring-hover',
            'aria-label': 'Dismiss notice'
          },
          React.createElement(X, { size: 16 })
        )
      )
    )
  );
};