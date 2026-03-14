import React from 'react';

/**
 * ProductSkeleton - Product Block
 *
 * Loading placeholder for product cards with animated pulse effect.
 */
export const ProductSkeleton = () => {
  return (
    <div className="wc-block-product-skeleton">
      <div className="wc-block-product-skeleton__image" />
      <div className="wc-block-product-skeleton__content">
        <div className="wc-block-product-skeleton__brand" />
        <div className="wc-block-product-skeleton__title">
          <div className="wc-block-product-skeleton__title-line wc-block-product-skeleton__title-line--full" />
          <div className="wc-block-product-skeleton__title-line wc-block-product-skeleton__title-line--partial" />
        </div>
        <div className="wc-block-product-skeleton__price" />
        <div className="wc-block-product-skeleton__button" />
      </div>
    </div>
  );
};

ProductSkeleton.displayName = 'ProductSkeleton';
