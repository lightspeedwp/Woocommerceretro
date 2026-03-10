import React from 'react';
import { Minus, Plus } from '@phosphor-icons/react';

/**
 * QuantitySelector Block Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript-specific syntax
 */
export function QuantitySelector(props) {
  var quantity = props.quantity;
  var min = props.min !== undefined ? props.min : 1;
  var max = props.max !== undefined ? props.max : 99;
  var onChange = props.onChange;
  var className = props.className || '';
  var disabled = props.disabled || false;

  var handleQuantityChange = function(newQuantity) {
    if (!disabled && newQuantity >= min && newQuantity <= max) {
      onChange(newQuantity);
    }
  };

  var handleInputChange = function(e) {
    var val = parseInt(e.target.value);
    if (!isNaN(val)) {
      handleQuantityChange(val);
    }
  };

  var containerClass = [
    'wc-quantity-selector',
    'funky-input-glow',
    className,
    disabled ? 'wc-quantity-selector--disabled' : ''
  ].filter(function(c) { return !!c; }).join(' ');

  var handleDecrement = function() { handleQuantityChange(quantity - 1); };
  var handleIncrement = function() { handleQuantityChange(quantity + 1); };

  return React.createElement('div', { className: containerClass },
    React.createElement('button', {
      onClick: handleDecrement,
      className: "wc-quantity-selector__button wc-quantity-selector__button--decrement funky-qty-btn",
      'aria-label': "Decrease quantity",
      disabled: disabled || quantity <= min,
      type: "button"
    },
      React.createElement(Minus, { size: 16 })
    ),
    
    React.createElement('input', {
      type: "number",
      min: min,
      max: max,
      value: quantity,
      onChange: handleInputChange,
      className: "wc-quantity-selector__input funky-qty-input",
      'aria-label': "Product quantity",
      disabled: disabled
    }),
    
    React.createElement('button', {
      onClick: handleIncrement,
      className: "wc-quantity-selector__button wc-quantity-selector__button--increment funky-qty-btn",
      'aria-label': "Increase quantity",
      disabled: disabled || quantity >= max,
      type: "button"
    },
      React.createElement(Plus, { size: 16 })
    )
  );
}

QuantitySelector.displayName = 'QuantitySelector';