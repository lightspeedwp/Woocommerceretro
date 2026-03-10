import React from 'react';
var useState = React.useState;
import * as ButtonsModule from '../design/Buttons';
import * as FloatingLabelInputModule from './ui/FloatingLabelInput';
import * as TypographyModule from '../../common/Typography';
import * as CartContextModule from '../../../contexts/CartContext';

var Button = ButtonsModule.Button;
var FloatingLabelInput = FloatingLabelInputModule.FloatingLabelInput;
var Typography = TypographyModule.Typography;
var useCart = CartContextModule.useCart;

/**
 * CouponInput Block Component
 * 
 * Optimized for Figma Make parser:
 * - Uses var instead of const/let
 * - Uses function declarations
 * - No TypeScript-specific syntax
 */
export function CouponInput(props) {
  var className = props.className || '';
  var cart = useCart();
  var applyCoupon = cart.applyCoupon;
  var appliedCoupon = cart.appliedCoupon;
  var removeCoupon = cart.removeCoupon;

  var _isOpen = useState(false);
  var isOpen = _isOpen[0];
  var setIsOpen = _isOpen[1];
  var _code = useState('');
  var code = _code[0];
  var setCode = _code[1];
  var _error = useState('');
  var error = _error[0];
  var setError = _error[1];
  var _isLoading = useState(false);
  var isLoading = _isLoading[0];
  var setIsLoading = _isLoading[1];

  var handleApply = function() {
    if (!code.trim()) return;
    
    setIsLoading(true);
    setError('');

    setTimeout(function() {
      var result = applyCoupon(code);
      
      if (result.success) {
        setCode('');
        setIsOpen(false);
      } else {
        setError(result.message || 'Invalid coupon code');
      }
      
      setIsLoading(false);
    }, 600);
  };

  var handleRemove = function() {
    removeCoupon();
  };

  var handleOpen = function() {
    setIsOpen(true);
  };

  var handleCodeChange = function(e) {
    setCode(e.target.value);
  };

  if (appliedCoupon) {
    return React.createElement('div', { className: "wp-coupon-input wp-coupon-input--applied funky-coupon-applied " + className },
      React.createElement('div', { className: "wp-coupon-input__success-message" },
        React.createElement('span', { className: "wp-coupon-input__icon" }, "🏷️ "),
        React.createElement(Typography, { variant: "body", className: "wp-coupon-input__text" }, 
          "Coupon ",
          React.createElement('strong', null, appliedCoupon.code),
          " applied"
        )
      ),
      React.createElement(Button, { 
        variant: "text", 
        size: "small", 
        onClick: handleRemove,
        className: "wp-coupon-input__remove-btn funky-link-btn"
      }, "Remove")
    );
  }

  if (!isOpen) {
    return React.createElement('div', { className: "wp-coupon-input " + className },
      React.createElement('button', { 
        onClick: handleOpen,
        className: "wp-coupon-input__toggle funky-toggle-btn"
      }, 
        "Have a coupon? ",
        React.createElement('span', { className: "wp-coupon-input__toggle-link" }, "Click here to enter your code")
      )
    );
  }

  return React.createElement('div', { className: "wp-coupon-input " + className },
    React.createElement('div', { className: "wp-coupon-input__form animate-fade-in funky-coupon-form" },
      React.createElement('div', { className: "wp-coupon-input__fields" },
        React.createElement(FloatingLabelInput, {
          label: "Coupon code",
          value: code,
          onChange: handleCodeChange,
          className: "wp-coupon-input__field funky-input",
          error: error
        }),
        React.createElement(Button, {
          variant: "secondary",
          onClick: handleApply,
          disabled: !code.trim() || isLoading,
          className: "wp-coupon-input__submit funky-secondary-btn"
        }, isLoading ? 'Applying...' : 'Apply')
      ),
      error ? React.createElement(Typography, { variant: "caption", className: "wp-coupon-input__error funky-error-text" }, error) : null
    )
  );
}

CouponInput.displayName = 'CouponInput';
