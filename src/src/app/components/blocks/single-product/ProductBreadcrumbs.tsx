import React from 'react';
import { Link } from 'react-router';
import { CaretRight as ChevronRight } from '@phosphor-icons/react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * ProductBreadcrumbs Component
 */
export const ProductBreadcrumbs = ({
  items,
}: {
  items: BreadcrumbItem[];
}) => {
  return (
    <nav className="wc-product-breadcrumbs">
      <Link to="/" className="wc-product-breadcrumbs__link">Home</Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} className="wc-product-breadcrumbs__separator" />
          {item.href ? (
            <Link to={item.href} className="wc-product-breadcrumbs__link">{item.label}</Link>
          ) : (
            <span className="wc-product-breadcrumbs__current">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

ProductBreadcrumbs.displayName = 'ProductBreadcrumbs';
