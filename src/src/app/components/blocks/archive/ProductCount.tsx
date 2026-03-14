import { Typography } from '../../common/Typography';

interface ProductCountProps {
  total: number;
  showing: number;
  className?: string;
}

/**
 * ProductCount Component
 *
 * Displays the current product count relative to total.
 */
export const ProductCount = ({ total, showing, className = '' }: ProductCountProps) => {
  const message = showing === total
    ? `${total} products`
    : `Showing ${showing} of ${total} products`;

  return (
    <Typography variant="body" className={`wp-product-count funky-product-count ${className}`}>
      {message}
    </Typography>
  );
};

ProductCount.displayName = 'ProductCount';
