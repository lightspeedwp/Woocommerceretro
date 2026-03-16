import { CaretRight as ChevronRight, House as Home } from '../../utils/phosphor-compat';
import React from 'react';
import { useLocation, Link } from 'react-router';

/** Helper to format path segments */
const formatSegment = (segment: string): string =>
  segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

/** Custom overrides for specific paths */
const PATH_MAP: Record<string, string> = {
  'shop': 'Shop',
  'faq': 'FAQ',
  'contact': 'Contact Us',
  'cart': 'Cart',
  'checkout': 'Checkout',
  'order-confirmation': 'Order Confirmation',
  'promotions': 'Promotions',
  'shipping-returns': 'Shipping & Returns',
  'policies': 'Policies',
  'terms': 'Terms & Conditions',
  'legal': 'Legal',
  'product': 'Product',
  'my-account': 'My Account',
};

/** Paths that should not be clickable */
const NON_CLICKABLE_PATHS = ['product', 'shop/tag'];

/**
 * BreadcrumbsBar Component (Global Template Part)
 *
 * Automatic breadcrumb navigation bar that generates path-based breadcrumbs
 * from the current URL.
 */
export const BreadcrumbsBar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className="wp-breadcrumbs-bar wp-breadcrumbs-bar--funky">
      <div className="wp-breadcrumbs-container">
        <nav aria-label="Breadcrumb">
          <ol className="wp-breadcrumbs-list">
            <li>
              <Link to="/" className="wp-breadcrumbs-link">
                <Home size={14} className="wp-breadcrumbs-home-icon" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = '/' + pathnames.slice(0, index + 1).join('/');
              const isLast = index === pathnames.length - 1;
              const name = PATH_MAP[value] || formatSegment(value);
              const isNonClickable = NON_CLICKABLE_PATHS.includes(value);

              return (
                <li key={to} className="wp-breadcrumbs-item">
                  <ChevronRight size={14} className="wp-breadcrumbs-separator" />
                  {isLast ? (
                    <span className="wp-breadcrumbs-current" aria-current="page">
                      {name}
                    </span>
                  ) : isNonClickable ? (
                    <span className="wp-breadcrumbs-inactive">{name}</span>
                  ) : (
                    <Link to={to} className="wp-breadcrumbs-link">
                      {name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}