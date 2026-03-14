import React from 'react';
import { useCart } from '../../../contexts/CartContext';
import { Link } from 'react-router';
import { CouponInput } from '../checkout/CouponInput';
import { Typography } from '../../common/Typography';
import { Button } from '../design/Buttons';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

/**
 * OrderSummary Block Component
 *
 * Displays cart items, totals, and coupon input in the checkout sidebar.
 */
export const OrderSummary = () => {
  const { items, getCartTotal, getShippingCost, getDiscount, getFinalTotal, appliedCoupon } = useCart();

  const subtotal = getCartTotal();
  const shipping = getShippingCost();
  const discount = getDiscount();
  const tax = subtotal * 0.1;
  const total = getFinalTotal();

  if (items.length === 0) {
    return (
      <div className="wp-order-summary wp-order-summary--empty funky-order-summary">
        <Typography variant="h3" className="wp-order-summary__title">Your cart is empty</Typography>
        <Button to="/shop" variant="primary" fullWidth>Return to Shop</Button>
      </div>
    );
  }

  return (
    <div className="wp-order-summary funky-order-summary">
      <div className="wp-order-summary__header">
        <Typography variant="h3" className="wp-order-summary__title funky-title">Order summary</Typography>
        <Link to="/cart" className="wp-order-summary__edit-link funky-link">Edit cart</Link>
      </div>

      <div className="wp-order-summary__items">
        {items.map((item) => {
          const itemKey = `${item.product.id}-${item.product.name}`;
          const price = item.product.salePrice || item.product.price;

          return (
            <div key={itemKey} className="wp-order-summary__item funky-summary-item">
              <div className="wp-order-summary__item-image-wrapper">
                <div className="wp-order-summary__item-image">
                  <ImageWithFallback src={item.product.image} alt={item.product.name} />
                </div>
                <span className="wp-order-summary__item-quantity funky-badge">{item.quantity}</span>
              </div>
              <div className="wp-order-summary__item-details">
                <div className="wp-order-summary__item-header">
                  <span className="wp-order-summary__item-name">{item.product.name}</span>
                  <span className="wp-order-summary__item-price">GBP {price.toFixed(2)}</span>
                </div>
                {item.product.category && (
                  <p className="wp-order-summary__item-meta">{item.product.category}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="wp-order-summary__totals funky-totals">
        <div className="wp-order-summary__row">
          <span className="wp-order-summary__label">Subtotal</span>
          <span className="wp-order-summary__value">GBP {subtotal.toFixed(2)}</span>
        </div>

        {discount > 0 && (
          <div className="wp-order-summary__row wp-order-summary__row--discount">
            <span className="wp-order-summary__label">
              Discount {appliedCoupon ? `(${appliedCoupon.code})` : ''}
            </span>
            <span className="wp-order-summary__value">-GBP {discount.toFixed(2)}</span>
          </div>
        )}

        <div className="wp-order-summary__row">
          <span className="wp-order-summary__label">Shipping</span>
          <span className="wp-order-summary__value">{shipping === 0 ? 'Free' : `GBP ${shipping.toFixed(2)}`}</span>
        </div>

        <div className="wp-order-summary__row">
          <span className="wp-order-summary__label">Estimated taxes</span>
          <span className="wp-order-summary__value">GBP {tax.toFixed(2)}</span>
        </div>

        <div className="wp-order-summary__divider funky-divider" />

        <div className="wp-order-summary__row wp-order-summary__row--total funky-total-row">
          <span className="wp-order-summary__label">Total</span>
          <span className="wp-order-summary__value wp-order-summary__value--large funky-price">
            GBP {total.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="wp-order-summary__coupon">
        <CouponInput />
      </div>
    </div>
  );
};

OrderSummary.displayName = 'OrderSummary';
