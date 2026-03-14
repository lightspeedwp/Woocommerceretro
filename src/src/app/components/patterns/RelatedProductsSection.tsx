import React from 'react';
import { Typography } from '../common/Typography';
import { ProductGrid } from './ProductGrid';

interface RelatedProductsSectionProps {
  products: any[];
  heading?: string;
  description?: string;
  maxProducts?: number;
  className?: string;
}

/**
 * RelatedProductsSection Pattern Component
 */
export const RelatedProductsSection = ({
  products,
  heading = 'You May Also Like',
  description,
  maxProducts = 8,
  className = '',
}: RelatedProductsSectionProps) => {
  if (!products || !Array.isArray(products)) {
    return null;
  }

  const displayProducts = products.slice(0, maxProducts);

  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <div className={`wc-related-products ${className}`}>
      {(heading || description) && (
        <div className="wc-related-products__header">
          {heading && <Typography variant="h2" className="wc-related-products__title">{heading}</Typography>}
          {description && <Typography variant="p" className="wc-related-products__description">{description}</Typography>}
        </div>
      )}
      <ProductGrid products={displayProducts} />
    </div>
  );
}