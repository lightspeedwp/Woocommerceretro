import React, { useState, useEffect } from 'react';
import { Button } from '../design/Buttons';
import { ShoppingCart, Truck, ArrowsClockwise as RefreshCw, Lock } from '../../../utils/phosphor-compat';

interface Variation {
  id: string;
  name: string;
  price: number;
}

/**
 * ProductAddToCart Block
 *
 * Add-to-cart controls with quantity selector, variation picker,
 * subscription toggle, and trust badges.
 */
export const ProductAddToCart = ({
  inStock,
  onAddToCart,
  isLoading = false,
  isSubscriptionAvailable = false,
  variations = [],
  selectedVariation,
  onVariationChange,
  variationLabel = 'Option',
}: {
  inStock: boolean;
  onAddToCart: (quantity: number, isSubscription: boolean, variationId?: string) => void;
  isLoading?: boolean;
  isSubscriptionAvailable?: boolean;
  variations?: Variation[];
  selectedVariation?: Variation;
  onVariationChange?: (variation: Variation) => void;
  variationLabel?: string;
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);

  useEffect(() => {
    if (variations.length > 0 && !selectedVariation && onVariationChange) {
      onVariationChange(variations[0]);
    }
  }, [variations, selectedVariation, onVariationChange]);

  const handleSubmit = () => {
    if (inStock) {
      onAddToCart(quantity, isSubscription, selectedVariation?.id);
    }
  };

  const cartButtonContent = (() => {
    if (isLoading) {
      return <span className="wc-product-add-to-cart__button-content">Processing...</span>;
    }
    if (!inStock) {
      return 'Out of Stock';
    }
    return (
      <span className="wc-product-add-to-cart__button-content">
        <ShoppingCart size={20} />{' '}
        <strong>{isSubscription ? 'Subscribe Now' : 'Add to Cart'}</strong>
      </span>
    );
  })();

  return (
    <div className="wc-product-add-to-cart funky-card-glow">
      <div className="wc-product-add-to-cart__inner">
        {variations.length > 0 && (
          <div className="wc-product-add-to-cart__variations">
            <label className="wc-product-add-to-cart__variation-label">
              {variationLabel}:{' '}
              <span className="wc-product-add-to-cart__variation-selected">
                {selectedVariation?.name || ''}
              </span>
            </label>
            <div className="wc-product-add-to-cart__variation-options">
              {variations.map((v) => (
                <button
                  key={v.id}
                  onClick={() => onVariationChange?.(v)}
                  className={`wc-product-add-to-cart__variation-button ${selectedVariation?.id === v.id ? 'wc-product-add-to-cart__variation-button--selected' : ''}`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {isSubscriptionAvailable && (
          <div className="wc-product-add-to-cart__subscription">
            <div
              className="wc-product-add-to-cart__subscription-toggle"
              onClick={() => setIsSubscription(!isSubscription)}
            >
              <input
                type="checkbox"
                className="wc-product-add-to-cart__subscription-checkbox"
                checked={isSubscription}
                readOnly
              />
              <div className={`wc-product-add-to-cart__subscription-switch ${isSubscription ? 'wc-product-add-to-cart__subscription-switch--checked' : ''}`} />
            </div>
            <span
              className="wc-product-add-to-cart__subscription-label"
              onClick={() => setIsSubscription(!isSubscription)}
            >
              <small><strong>Subscribe &amp; Save 10%</strong></small>
            </span>
          </div>
        )}

        <div className="wc-product-add-to-cart__controls">
          <div className="wc-product-add-to-cart__quantity">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="wc-product-add-to-cart__quantity-button wc-product-add-to-cart__quantity-button--decrement"
              aria-label="Decrease quantity"
              disabled={!inStock}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="wc-product-add-to-cart__quantity-input"
              aria-label="Quantity"
              disabled={!inStock}
            />
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="wc-product-add-to-cart__quantity-button wc-product-add-to-cart__quantity-button--increment"
              aria-label="Increase quantity"
              disabled={!inStock}
            >
              +
            </button>
          </div>
          <Button
            fullWidth
            variant="primary"
            onClick={handleSubmit}
            disabled={isLoading || !inStock}
            className="wc-product-add-to-cart__button funky-spring-hover"
          >
            {cartButtonContent}
          </Button>
        </div>

        <div className="wc-product-add-to-cart__trust-badges">
          <div className="wc-product-add-to-cart__trust-badge">
            <Truck size={16} className="wc-product-add-to-cart__trust-icon" />
            <span>Free shipping over R500</span>
          </div>
          <div className="wc-product-add-to-cart__trust-badge">
            <RefreshCw size={16} className="wc-product-add-to-cart__trust-icon" />
            <span>Easy returns</span>
          </div>
          <div className="wc-product-add-to-cart__trust-badge">
            <Lock size={16} className="wc-product-add-to-cart__trust-icon" />
            <span>Secure checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};