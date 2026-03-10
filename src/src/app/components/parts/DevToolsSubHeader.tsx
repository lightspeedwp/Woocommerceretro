import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Code, Palette, TextT, AppWindow, Star, Gauge } from '@phosphor-icons/react';
import * as ContainerModule from '../common/Container';

var Link = ReactRouterModule.Link;
var useLocation = ReactRouterModule.useLocation;
var Container = ContainerModule.Container;

var devToolsLinks = [
  { id: 'style-guide', label: 'Style Guide', path: '/dev-tools/style-guide', icon: Palette },
  { id: 'components', label: 'Components', path: '/dev-tools/components', icon: AppWindow },
  { id: 'icons', label: 'Icons', path: '/dev-tools/icons', icon: Star },
  { id: 'typography', label: 'Typography', path: '/dev-tools/typography', icon: TextT },
  { id: 'performance', label: 'Performance', path: '/dev-tools/performance', icon: Gauge },
  { id: 'api', label: 'API', path: '/dev-tools/api', icon: Code }
];

export function DevToolsSubHeader() {
  var location = useLocation();

  return React.createElement('div', { className: 'dev-tools-nav' },
    React.createElement(Container, { className: 'dev-tools-nav__container' },
      React.createElement('div', { className: 'dev-tools-nav__inner' },
        devToolsLinks.map(function(link) {
          var isActive = location.pathname.startsWith(link.path);
          return React.createElement(Link, {
            key: link.id,
            to: link.path,
            className: 'dev-tools-nav__link' + (isActive ? ' dev-tools-nav__link--active' : '')
          },
            React.createElement(link.icon, { size: 18, weight: isActive ? 'fill' : 'duotone', className: 'dev-tools-nav__icon' }),
            React.createElement('span', null, link.label)
          );
        })
      )
    )
  );
}

DevToolsSubHeader.displayName = 'DevToolsSubHeader';