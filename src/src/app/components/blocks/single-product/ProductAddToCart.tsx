import React from 'react';
import * as ButtonsModule from '../design/Buttons';
import { ShoppingCart, Truck, ArrowsClockwise as RefreshCw, Lock } from '@phosphor-icons/react';

var useState = React.useState;
var useEffect = React.useEffect;
var Button = ButtonsModule.Button;

/* ProductOption: { name: string, values: string[] } */
/* Variation: { id: string, name: string, price: number } */
/* ProductAddToCartProps: { inStock, onAddToCart, isLoading, isSubscriptionAvailable, variations, selectedVariation, onVariationChange, variationLabel } */

/**
 * ProductAddToCart Block
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 * 5. No non-ASCII characters
 */
export function ProductAddToCart(props) {
  var inStock = props.inStock;
  var onAddToCart = props.onAddToCart;
  var isLoading = props.isLoading === undefined ? false : props.isLoading;
  var isSubscriptionAvailable = props.isSubscriptionAvailable === undefined ? false : props.isSubscriptionAvailable;
  var variations = props.variations || [];
  var selectedVariation = props.selectedVariation;
  var onVariationChange = props.onVariationChange;
  var variationLabel = props.variationLabel || 'Option';

  var _q = useState(1);
  var quantity = _q[0];
  var setQuantity = _q[1];
  var _s = useState(false);
  var isSubscription = _s[0];
  var setIsSubscription = _s[1];

  useEffect(function() {
     if (variations.length > 0 && !selectedVariation && onVariationChange) {
         onVariationChange(variations[0]);
     }
  }, [variations, selectedVariation, onVariationChange]);

  var handleIncrement = function() { setQuantity(function(prev) { return prev + 1; }); };
  var handleDecrement = function() { setQuantity(function(prev) { return (prev > 1 ? prev - 1 : 1); }); };

  var handleVariationSelect = function(variation) {
      if (onVariationChange) {
          onVariationChange(variation);
      }
  };

  var handleSubmit = function() {
    if (inStock) {
      onAddToCart(quantity, isSubscription, selectedVariation ? selectedVariation.id : undefined);
    }
  };

  var variationElement = variations.length > 0 ? React.createElement('div', { className: 'wc-product-add-to-cart__variations' },
    React.createElement('label', { className: 'wc-product-add-to-cart__variation-label' },
      variationLabel + ': ',
      React.createElement('span', { className: 'wc-product-add-to-cart__variation-selected' }, selectedVariation ? selectedVariation.name : '')
    ),
    React.createElement('div', { className: 'wc-product-add-to-cart__variation-options' },
      variations.map(function(v) {
        return React.createElement('button', {
          key: v.id,
          onClick: function() { handleVariationSelect(v); },
          className: 'wc-product-add-to-cart__variation-button ' + (selectedVariation && selectedVariation.id === v.id ? 'wc-product-add-to-cart__variation-button--selected' : '')
        }, v.name);
      })
    )
  ) : null;

  var subscriptionElement = isSubscriptionAvailable ? React.createElement('div', { className: 'wc-product-add-to-cart__subscription' },
    React.createElement('div', { 
      className: 'wc-product-add-to-cart__subscription-toggle', 
      onClick: function() { setIsSubscription(!isSubscription); } 
    },
      React.createElement('input', { 
        type: 'checkbox', 
        className: 'wc-product-add-to-cart__subscription-checkbox', 
        checked: isSubscription, 
        readOnly: true 
      }),
      React.createElement('div', { 
        className: 'wc-product-add-to-cart__subscription-switch ' + (isSubscription ? 'wc-product-add-to-cart__subscription-switch--checked' : '') 
      })
    ),
    React.createElement('span', { 
      className: 'wc-product-add-to-cart__subscription-label', 
      onClick: function() { setIsSubscription(!isSubscription); } 
    },
      React.createElement('small', null, React.createElement('strong', null, 'Subscribe & Save 10%'))
    )
  ) : null;

  var cartButtonContent = (function() {
    if (isLoading) {
      return React.createElement('span', { className: 'wc-product-add-to-cart__button-content' }, 'Processing...');
    }
    if (!inStock) {
      return 'Out of Stock';
    }
    return React.createElement('span', { className: 'wc-product-add-to-cart__button-content' },
      React.createElement(ShoppingCart, { size: 20 }),
      ' ',
      React.createElement('strong', null, isSubscription ? 'Subscribe Now' : 'Add to Cart')
    );
  })();

  var controlsElement = React.createElement('div', { className: 'wc-product-add-to-cart__controls' },
    React.createElement('div', { className: 'wc-product-add-to-cart__quantity' },
      React.createElement('button', { 
        onClick: handleDecrement,
        className: 'wc-product-add-to-cart__quantity-button wc-product-add-to-cart__quantity-button--decrement',
        'aria-label': 'Decrease quantity',
        disabled: !inStock
      }, '-'),
      React.createElement('input', { 
        type: 'number', 
        value: quantity, 
        readOnly: true, 
        className: 'wc-product-add-to-cart__quantity-input', 
        'aria-label': 'Quantity',
        disabled: !inStock
      }),
      React.createElement('button', { 
        onClick: handleIncrement,
        className: 'wc-product-add-to-cart__quantity-button wc-product-add-to-cart__quantity-button--increment',
        'aria-label': 'Increase quantity',
        disabled: !inStock
      }, '+')
    ),
    React.createElement(Button, {
      fullWidth: true,
      variant: 'primary',
      onClick: handleSubmit,
      disabled: isLoading || !inStock,
      className: 'wc-product-add-to-cart__button funky-spring-hover'
    }, cartButtonContent)
  );

  var trustBadgesElement = React.createElement('div', { className: 'wc-product-add-to-cart__trust-badges' },
    React.createElement('div', { className: 'wc-product-add-to-cart__trust-badge' },
      React.createElement(Truck, { size: 16, className: 'wc-product-add-to-cart__trust-icon' }),
      React.createElement('span', null, 'Free shipping over R500')
    ),
    React.createElement('div', { className: 'wc-product-add-to-cart__trust-badge' },
      React.createElement(RefreshCw, { size: 16, className: 'wc-product-add-to-cart__trust-icon' }),
      React.createElement('span', null, 'Easy returns')
    ),
    React.createElement('div', { className: 'wc-product-add-to-cart__trust-badge' },
      React.createElement(Lock, { size: 16, className: 'wc-product-add-to-cart__trust-icon' }),
      React.createElement('span', null, 'Secure checkout')
    )
  );

  return React.createElement('div', { className: 'wc-product-add-to-cart funky-card-glow' },
    React.createElement('div', { className: 'wc-product-add-to-cart__inner' },
      variationElement,
      subscriptionElement,
      controlsElement,
      trustBadgesElement
    )
  );
}