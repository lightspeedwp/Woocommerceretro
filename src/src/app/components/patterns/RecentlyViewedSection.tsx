import React from 'react';
import { Typography } from '../common/Typography';
import { ProductGrid } from './ProductGrid';
import { Clock } from '@phosphor-icons/react';

interface RecentlyViewedSectionProps {
  products: any[];
  heading?: string;
  description?: string;
  maxProducts?: number;
  showIcon?: boolean;
  className?: string;
}

/**
 * RecentlyViewedSection Pattern Component
 */
export const RecentlyViewedSection = ({
  products,
  heading = 'Recently Viewed',
  description,
  maxProducts = 8,
  showIcon = true,
  className = '',
}: RecentlyViewedSectionProps) => {
  const displayProducts = products ? products.slice(0, maxProducts) : [];

  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <div className={`wc-recently-viewed ${className}`}>
      {(heading || description) && (
        <div className="wc-recently-viewed__header">
          {heading && (
            <div className="wc-recently-viewed__title-wrapper">
              {showIcon && <Clock size={24} className="wc-recently-viewed__icon" aria-hidden="true" />}
              <Typography variant="h2" className="wc-recently-viewed__title">{heading}</Typography>
            </div>
          )}
          {description && (
            <Typography variant="p" className="wc-recently-viewed__description">{description}</Typography>
          )}
        </div>
      )}
      <ProductGrid products={displayProducts} />
    </div>
  );
}