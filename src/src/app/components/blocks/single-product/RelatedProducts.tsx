import React from 'react';
import { ProductCard } from '../product/ProductCard';
import { Typography } from '../../common/Typography';
import { getRelatedProducts } from '../../../data/products';

/**
 * RelatedProducts Component
 *
 * Displays a grid of related products based on shared tags.
 * Falls back to same-category products if no tag overlap found.
 */
export const RelatedProducts = ({
  productId,
  products,
  limit = 4,
}: {
  productId?: string;
  products?: any[];
  limit?: number;
}) => {
  let displayProducts = products || [];

  // If productId given, dynamically fetch tag-based related products
  if (productId && displayProducts.length === 0) {
    displayProducts = getRelatedProducts(productId, limit);
  }

  if (displayProducts.length === 0) return null;

  return (
    <section className="wc-related-products">
      <Typography variant="h2" className="wc-related-products__title">You may also like</Typography>
      <div className="wc-related-products__grid">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

RelatedProducts.displayName = 'RelatedProducts';