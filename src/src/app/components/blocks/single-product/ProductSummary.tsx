import React from 'react';
import { Typography } from '../../common/Typography';

/**
 * ProductSummary Component
 *
 * Displays the product summary/short description.
 */
export const ProductSummary = ({
  summary,
}: {
  summary: string;
}) => {
  return (
    <div className="wc-product-summary">
      <Typography variant="body">{summary}</Typography>
    </div>
  );
};
