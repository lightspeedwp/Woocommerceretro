import React from 'react';
import { Typography } from '../../common/Typography';

/**
 * ProductPrice Block Component
 *
 * Displays product pricing with sale price support and strikethrough.
 */
export const ProductPrice = ({
  price,
  salePrice,
}: {
  price: number;
  salePrice?: number;
}) => {
  if (salePrice) {
    return (
      <div className="wc-product-price">
        <Typography variant="h3" className="wc-product-price__current">
          R {salePrice.toFixed(2)}
        </Typography>
        <span className="wc-product-price__original">R {price.toFixed(2)}</span>
      </div>
    );
  }

  return (
    <div className="wc-product-price">
      <Typography variant="h3" className="wc-product-price__current">
        R {price.toFixed(2)}
      </Typography>
    </div>
  );
};
