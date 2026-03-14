import React from 'react';
import { Star } from '@phosphor-icons/react';

/**
 * ProductRating Block Component
 *
 * Visual star rating display with review count.
 */
export const ProductRating = ({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) => {
  return (
    <div className="wc-product-rating">
      <div className="wc-product-rating__stars">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={16}
            className={i <= rating ? 'wc-product-rating__star--filled' : 'wc-product-rating__star--empty'}
          />
        ))}
      </div>
      <span className="wc-product-rating__count">({reviewCount} customer reviews)</span>
    </div>
  );
};
