import React from 'react';
import { Link } from 'react-router';

interface QuickEntryTile {
  id: string;
  icon: React.ComponentType<{ 'aria-hidden'?: string }>;
  title: string;
  description: string;
  href: string;
}

interface QuickEntryTilesGridProps {
  tiles: QuickEntryTile[];
  columns?: { mobile?: 1 | 2; tablet?: 2 | 3 | 4; desktop?: 2 | 3 | 4 };
  className?: string;
}

/**
 * QuickEntryTilesGrid Pattern Component
 */
export const QuickEntryTilesGrid = ({
  tiles,
  columns = { mobile: 1, tablet: 2, desktop: 4 },
  className = '',
}: QuickEntryTilesGridProps) => {
  const mobile = columns.mobile || 1;
  const tablet = columns.tablet || 2;
  const desktop = columns.desktop || 4;

  return (
    <div className={`wp-quick-entry-tiles-grid wp-quick-entry-tiles-grid--${mobile}-${tablet}-${desktop} ${className}`}>
      {tiles.map((tile) => {
        const Icon = tile.icon;
        return (
          <Link
            key={tile.id}
            to={tile.href}
            className="wp-quick-entry-tile wp-block-card wp-block-card--interactive funky-spring-hover"
          >
            <div className="wp-quick-entry-tile__icon">
              <Icon aria-hidden="true" />
            </div>
            <h4 className="wp-quick-entry-tile__title">{tile.title}</h4>
            <p className="wp-quick-entry-tile__description">
              <small>{tile.description}</small>
            </p>
          </Link>
        );
      })}
    </div>
  );
}