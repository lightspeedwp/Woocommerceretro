import React from 'react';
import { Link } from 'react-router';
import { CaretRight, House } from '../../utils/phosphor-compat';

/**
 * Breadcrumbs — Hierarchical navigation component (Template Part)
 *
 * Displays the current page location within the site structure.
 * Auto-renders a Home icon link, then each item in order, with
 * the last item marked as current page (not linked).
 *
 * CSS: /src/styles/blocks/navigation/breadcrumb.css
 *      /src/styles/blocks/theme/parts-funky.css (funky overrides)
 */

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="wp-breadcrumbs-bar wp-breadcrumbs-bar--funky">
      <div className="wp-breadcrumbs-container">
        <nav aria-label="Breadcrumb">
          <ol className="wp-breadcrumbs-list">
            <li className="wp-breadcrumbs-item">
              <Link to="/" className="wp-breadcrumbs-link">
                <House size={16} />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={item.path} className="wp-breadcrumbs-item">
                <CaretRight size={16} className="wp-breadcrumbs-separator" />
                {index === items.length - 1 ? (
                  <span className="wp-breadcrumbs-current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.path} className="wp-breadcrumbs-link">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}