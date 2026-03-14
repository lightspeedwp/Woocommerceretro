/**
 * DevToolsSubHeader
 *
 * Sticky sub-navigation bar for dev tools routes.
 * BEM styling in /src/styles/blocks/ui/dev-tools-layout.css
 */

import React from 'react';
import { Link, useLocation } from 'react-router';
import { Code, Palette, TextT, AppWindow, Star, Gauge } from '@phosphor-icons/react';

const devToolsLinks = [
  { id: 'style-guide', label: 'Style Guide', path: '/dev-tools/style-guide', icon: Palette },
  { id: 'showcase', label: 'Components', path: '/dev-tools/showcase', icon: AppWindow },
  { id: 'forms', label: 'Forms', path: '/dev-tools/forms', icon: TextT },
  { id: 'icons', label: 'Icons', path: '/dev-tools/icons', icon: Star },
  { id: 'performance', label: 'Performance', path: '/dev-tools/performance', icon: Gauge },
  { id: 'api', label: 'API', path: '/dev-tools/api', icon: Code },
];

export const DevToolsSubHeader = () => {
  const location = useLocation();

  return (
    <nav className="retro-devtools-subnav" aria-label="Dev Tools navigation">
      <div className="retro-devtools-subnav__inner">
        <div className="retro-devtools-subnav__list">
          {devToolsLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            const IconComp = link.icon;
            return (
              <Link
                key={link.id}
                to={link.path}
                className={`retro-font-display retro-bold retro-devtools-subnav__link${isActive ? ' retro-devtools-subnav__link--active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <IconComp size={18} weight={isActive ? 'fill' : 'bold'} aria-hidden="true" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

DevToolsSubHeader.displayName = 'DevToolsSubHeader';
