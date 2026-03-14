import React, { useState } from 'react';
import { Button } from '../design/Buttons';
import { FloatingLabelInput } from './ui/FloatingLabelInput';
import { Typography } from '../../common/Typography';
import { useCart } from '../../../contexts/CartContext';

/**
 * CouponInput Block Component
 *
 * Expandable coupon code input with apply/remove functionality.
 */
export const CouponInput = ({
  className = '',
}: {
  className?: string;
}) => {
  const { applyCoupon, appliedCoupon, removeCoupon } = useCart();

  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = () => {
    if (!code.trim()) return;

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const result = applyCoupon(code);

      if (result.success) {
        setCode('');
        setIsOpen(false);
      } else {
        setError(result.message || 'Invalid coupon code');
      }

      setIsLoading(false);
    }, 600);
  };

  if (appliedCoupon) {
    return (
      <div className={`wp-coupon-input wp-coupon-input--applied funky-coupon-applied ${className}`}>
        <div className="wp-coupon-input__success-message">
          <span className="wp-coupon-input__icon">&#127991;&#65039; </span>
          <Typography variant="body" className="wp-coupon-input__text">
            Coupon <strong>{appliedCoupon.code}</strong> applied
          </Typography>
        </div>
        <Button
          variant="text"
          size="small"
          onClick={() => removeCoupon()}
          className="wp-coupon-input__remove-btn funky-link-btn"
        >
          Remove
        </Button>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className={`wp-coupon-input ${className}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="wp-coupon-input__toggle funky-toggle-btn"
        >
          Have a coupon?{' '}
          <span className="wp-coupon-input__toggle-link">Click here to enter your code</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`wp-coupon-input ${className}`}>
      <div className="wp-coupon-input__form animate-fade-in funky-coupon-form">
        <div className="wp-coupon-input__fields">
          <FloatingLabelInput
            label="Coupon code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="wp-coupon-input__field funky-input"
            error={error}
          />
          <Button
            variant="secondary"
            onClick={handleApply}
            disabled={!code.trim() || isLoading}
            className="wp-coupon-input__submit funky-secondary-btn"
          >
            {isLoading ? 'Applying...' : 'Apply'}
          </Button>
        </div>
        {error && (
          <Typography variant="caption" className="wp-coupon-input__error funky-error-text">
            {error}
          </Typography>
        )}
      </div>
    </div>
  );
};

CouponInput.displayName = 'CouponInput';
