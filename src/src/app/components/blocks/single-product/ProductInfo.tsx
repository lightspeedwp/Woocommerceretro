import React from 'react';
import { Typography } from '../../common/Typography';
import { Star } from '../../../utils/phosphor-compat';

/**
 * ProductInfo Block
 *
 * Displays product title, star rating, price, and short description.
 */
export const ProductInfo = ({
  title,
  price,
  salePrice,
  rating,
  reviewCount,
  shortDescription,
}: {
  title: string;
  price: number;
  salePrice?: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
}) => {
  return (
    <div className="wc-product-info">
      <Typography variant="h1" className="wc-product-info__title">{title}</Typography>

      <div className="wc-product-info__rating">
        <div className="wc-product-info__stars">
          {[0, 1, 2, 3, 4].map((i) => {
            const isFilled = i < Math.floor(rating);
            return (
              <Star
                key={i}
                size={18}
                fill={isFilled ? 'currentColor' : 'none'}
                className={isFilled ? '' : 'wc-product-info__star--empty'}
              />
            );
          })}
        </div>
        <span className="wc-product-info__review-count">({reviewCount} reviews)</span>
      </div>

      <div className="wc-product-info__price">
        {salePrice ? (
          <>
            <span className="wc-product-info__price-sale">&pound;{salePrice.toFixed(2)}</span>
            <span className="wc-product-info__price-regular">&pound;{price.toFixed(2)}</span>
          </>
        ) : (
          <span className="wc-product-info__price-current">&pound;{price.toFixed(2)}</span>
        )}
      </div>

      <div className="wc-product-info__description">
        <p>{shortDescription}</p>
      </div>
    </div>
  );
};