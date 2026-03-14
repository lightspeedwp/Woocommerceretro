import React from 'react';
import { ProductCard } from '../blocks/product/ProductCard';

interface ProductGridProps {
  products?: any[];
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: string;
  className?: string;
  scrollOnMobile?: boolean;
}

/**
 * ProductGrid Pattern
 */
export const ProductGrid = ({
  products,
  columns = { mobile: 1, tablet: 2, desktop: 4 },
  className = '',
  scrollOnMobile = false,
}: ProductGridProps) => {
  if (!products || products.length === 0) {
    return null;
  }

  const desktop = columns.desktop || 4;

  let baseClass = 'wc-block-product-grid';
  if (desktop === 3) {
    baseClass = 'wc-block-product-grid--three-col';
  }
  if (desktop === 2) {
    baseClass = 'wc-block-product-grid--two-col';
  }
  if (scrollOnMobile) {
    baseClass = `${baseClass} wc-block-product-grid--scroll-mobile`;
  }

  return (
    <div className={`${baseClass} ${className}`}>
      {products.map((product) => (
        <div key={product.id} className="wc-block-product-grid__item">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}