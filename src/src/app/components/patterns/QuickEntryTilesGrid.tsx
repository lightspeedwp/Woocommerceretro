import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;

// QuickEntryTile structure
// - id: string
// - icon: React.ComponentType (Phosphor icon)
// - title: string
// - description: string
// - href: string

// QuickEntryTilesGridProps structure
// - tiles: QuickEntryTile[]
// - columns?: { mobile?: 1 | 2, tablet?: 2 | 3 | 4, desktop?: 2 | 3 | 4 }
// - className?: string

/**
 * QuickEntryTilesGrid Pattern Component
 */
export function QuickEntryTilesGrid(props) {
  var tiles = props.tiles;
  var columns = props.columns || { mobile: 1, tablet: 2, desktop: 4 };
  var className = props.className || '';

  var mobile = columns.mobile || 1;
  var tablet = columns.tablet || 2;
  var desktop = columns.desktop || 4;

  var gridClass = 'wp-quick-entry-tiles-grid wp-quick-entry-tiles-grid--' + mobile + '-' + tablet + '-' + desktop;

  return React.createElement('div', { className: gridClass + ' ' + className },
    tiles.map(function(tile) {
      var Icon = tile.icon;

      return React.createElement(Link, {
        key: tile.id,
        to: tile.href,
        className: 'wp-quick-entry-tile wp-block-card wp-block-card--interactive funky-spring-hover'
      },
        React.createElement('div', { className: 'wp-quick-entry-tile__icon' },
          React.createElement(Icon, { 'aria-hidden': 'true' })
        ),
        React.createElement('h4', { className: 'wp-quick-entry-tile__title' }, tile.title),
        React.createElement('p', { className: 'wp-quick-entry-tile__description' },
          React.createElement('small', null, tile.description)
        )
      );
    })
  );
}