import React from 'react';
import { Typography } from '../../common/Typography';

/**
 * ProductTitle Component
 *
 * Displays product title with optional brand badge.
 */
export const ProductTitle = ({
  title,
  brand,
}: {
  title: string;
  brand?: string;
}) => {
  return (
    <div className="wc-product-title">
      {brand && <span className="wc-product-title__brand">{brand}</span>}
      <Typography variant="h1">{title}</Typography>
    </div>
  );
};
