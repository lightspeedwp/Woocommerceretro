import React from 'react';
import { Minus, Plus } from '../../../utils/phosphor-compat';

/**
 * QuantitySelector Block Component
 *
 * WooCommerce-aligned quantity input with increment/decrement buttons.
 *
 * @example
 * <QuantitySelector quantity={1} onChange={(q) => setQty(q)} />
 */

interface QuantitySelectorProps {
  quantity: number;
  min?: number;
  max?: number;
  onChange: (quantity: number) => void;
  className?: string;
  disabled?: boolean;
}

export const QuantitySelector = ({
  quantity,
  min = 1,
  max = 99,
  onChange,
  className = '',
  disabled = false,
}: QuantitySelectorProps) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (!disabled && newQuantity >= min && newQuantity <= max) {
      onChange(newQuantity);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      handleQuantityChange(val);
    }
  };

  const containerClass = [
    'wc-quantity-selector',
    'funky-input-glow',
    className,
    disabled ? 'wc-quantity-selector--disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClass}>
      <button
        onClick={() => handleQuantityChange(quantity - 1)}
        className="wc-quantity-selector__button wc-quantity-selector__button--decrement funky-qty-btn"
        aria-label="Decrease quantity"
        disabled={disabled || quantity <= min}
        type="button"
      >
        <Minus size={16} />
      </button>

      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={handleInputChange}
        className="wc-quantity-selector__input funky-qty-input"
        aria-label="Product quantity"
        disabled={disabled}
      />

      <button
        onClick={() => handleQuantityChange(quantity + 1)}
        className="wc-quantity-selector__button wc-quantity-selector__button--increment funky-qty-btn"
        aria-label="Increase quantity"
        disabled={disabled || quantity >= max}
        type="button"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}

QuantitySelector.displayName = 'QuantitySelector';