/**
 * CartEmptyState.tsx - Cart Pattern
 * 
 * Empty state display for cart with no items.
 */

import React from 'react';
import { Bag as ShoppingBag } from '@phosphor-icons/react';
import { ContentSection } from './sections/ContentSection';
import { Button } from '../blocks/design/Buttons';
import { Typography } from '../common/Typography';
import { ProductGrid } from './ProductGrid';
import { products } from '../../data/products';

export const CartEmptyState = () => {
  const suggestedProducts = products.slice(0, 4).map((p) => ({
    id: p.id.toString(),
    name: p.name,
    price: parseFloat(p.price),
    image: p.images?.[0]?.src || '',
    inStock: p.stock_status === 'instock',
    rating: parseFloat(p.average_rating),
  }));

  return (
    <ContentSection
      className="wp-cart-empty"
      content={
        <>
          <div className="wp-cart-empty__icon-wrapper">
            <div className="wp-cart-empty__icon">
              <ShoppingBag size={32} aria-hidden="true" />
            </div>
          </div>
          <Typography variant="h2" align="center" className="wp-cart-empty__heading">
            Your cart is empty
          </Typography>
          <p className="wp-cart-empty__description">
            Looks like you haven't added anything to your cart yet. Browse our collections to find something you love.
          </p>
          <div className="wp-cart-empty__cta">
            <Button size="lg" variant="cta" to="/shop">Start Shopping</Button>
          </div>
          <div className="wp-cart-empty__suggestions">
            <Typography variant="h3" className="wp-cart-empty__suggestions-title">
              You might also like
            </Typography>
            <ProductGrid products={suggestedProducts} />
          </div>
        </>
      }
    />
  );
}

CartEmptyState.displayName = 'CartEmptyState';