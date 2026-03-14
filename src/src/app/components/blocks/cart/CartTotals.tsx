import { Link } from 'react-router';
import { Button } from '../design/Buttons';
import { Typography } from '../../common/Typography';
import { NewsletterCTA } from '../../patterns/NewsletterCTA';
import { Lock, Truck } from '@phosphor-icons/react';

interface CartTotalsProps {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  className?: string;
}

/**
 * CartTotals Component
 *
 * Order summary with totals breakdown, coupon, and checkout CTA.
 */
export const CartTotals = ({
  subtotal,
  shipping,
  tax,
  discount,
  total,
  className = '',
}: CartTotalsProps) => {
  return (
    <div className={`woocommerce-cart-totals funky-cart-totals ${className}`}>
      <Typography variant="h4" className="woocommerce-cart-totals__title">
        Order Summary
      </Typography>
      <div className="woocommerce-cart-totals__breakdown">
        <div className="woocommerce-cart-totals__row">
          <span className="woocommerce-cart-totals__label">Subtotal</span>
          <span className="woocommerce-cart-totals__value">{`$${subtotal.toFixed(2)}`}</span>
        </div>
        <div className="woocommerce-cart-totals__row">
          <span className="woocommerce-cart-totals__label">Shipping</span>
          <span className="woocommerce-cart-totals__value">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="woocommerce-cart-totals__row">
          <span className="woocommerce-cart-totals__label">Tax</span>
          <span className="woocommerce-cart-totals__value">{`$${tax.toFixed(2)}`}</span>
        </div>
        {discount > 0 && (
          <div className="woocommerce-cart-totals__row woocommerce-cart-totals__row--discount">
            <span className="woocommerce-cart-totals__label">Discount</span>
            <span className="woocommerce-cart-totals__value woocommerce-cart-totals__value--discount">
              {`-$${discount.toFixed(2)}`}
            </span>
          </div>
        )}
        <div className="woocommerce-cart-totals__divider" />
        <div className="woocommerce-cart-totals__row woocommerce-cart-totals__row--total">
          <span className="woocommerce-cart-totals__label woocommerce-cart-totals__label--total">Total</span>
          <span className="woocommerce-cart-totals__value woocommerce-cart-totals__value--total funky-total-value">
            {`$${total.toFixed(2)}`}
          </span>
        </div>
      </div>
      <div className="woocommerce-cart-totals__actions">
        <div style={{ marginBottom: 'var(--wp--preset--spacing--60)' }}>
          <NewsletterCTA variant="compact" heading="Save 10%" description="Subscribe to our newsletter and get 10% off your first order!" />
        </div>
        <Link to="/checkout" className="woocommerce-cart-totals__checkout-link">
          <Button variant="primary" className="woocommerce-cart-totals__checkout-btn funky-checkout-btn">
            <Lock className="woocommerce-cart-totals__checkout-icon" />
            Proceed to Checkout
          </Button>
        </Link>
        <div className="woocommerce-cart-totals__shipping-info funky-shipping-info">
          <Truck className="woocommerce-cart-totals__shipping-icon" />
          <span>Free shipping on orders over $50</span>
        </div>
      </div>
    </div>
  );
};

CartTotals.displayName = 'CartTotals';
