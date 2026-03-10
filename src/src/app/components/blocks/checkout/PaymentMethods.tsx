import React from 'react';
import { CreditCard, Wallet, Bank as Banknote } from '@phosphor-icons/react';
import * as TypographyModule from '../../common/Typography';
import * as CheckoutInputModule from './ui/CheckoutInput';
import * as CheckboxModule from './ui/Checkbox';
import * as CheckoutData from '../../../data/checkout';

var useState = React.useState;
var Landmark = Banknote;
var CheckoutInput = CheckoutInputModule.CheckoutInput;
var Checkbox = CheckboxModule.Checkbox;
var paymentMethods = CheckoutData.paymentMethods;

/**
 * PaymentMethods Block Component
 * 
 * Optimized for Figma Make parser:
 * - Uses var instead of const/let
 * - Uses function declarations
 * - No TypeScript-specific syntax
 */
export function PaymentMethods(props) {
  var isLoggedIn = props.isLoggedIn;
  var _selected = useState('card');
  var selected = _selected[0];
  var setSelected = _selected[1];

  var handlePlaceOrder = function() {
    alert('Order placed successfully! (Demo)');
  };

  var options = paymentMethods.map(function(method) {
    var isActive = selected === method.id;
    var handleSelect = function() { setSelected(method.id); };
    
    var radioInput = React.createElement('input', { 
      key: 'radio',
      type: "radio", 
      name: "payment", 
      value: method.id,
      checked: isActive,
      onChange: handleSelect,
      className: "wp-payment-methods__radio"
    });

    var labelGroup = React.createElement('div', { 
      key: 'labelGroup',
      className: "wp-payment-methods__label-group" 
    }, [
      React.createElement('span', { key: 'name', className: "wp-payment-methods__label" }, method.name),
      React.createElement('div', { key: 'icons', className: "wp-payment-methods__icons" }, [
        React.createElement(method.icon, { key: 'icon', size: 20, className: "wp-payment-methods__icon" })
      ])
    ]);

    var detailsContent = null;
    if (isActive && method.fields) {
      var fieldElements = method.fields.map(function(field) {
        return React.createElement(CheckoutInput, {
          key: field.name,
          label: field.label,
          name: field.name,
          type: field.type || 'text',
          required: field.required,
          placeholder: field.placeholder,
          className: "funky-input"
        });
      });

      detailsContent = React.createElement('div', { className: "wp-payment-methods__details animate-fade-in" },
        React.createElement('div', { className: "wp-payment-methods__fields" }, fieldElements)
      );
    }

    return React.createElement('label', {
      key: method.id,
      className: isActive 
        ? "wp-payment-methods__option wp-payment-methods__option--active funky-payment-active" 
        : "wp-payment-methods__option funky-payment-option"
    }, [
      radioInput,
      labelGroup,
      detailsContent
    ]);
  });

  var savePaymentCheckbox = isLoggedIn ? React.createElement('div', { className: "wp-payment-methods__save" },
    React.createElement(Checkbox, {
      id: "savePayment",
      label: "Save payment method for future purchases"
    })
  ) : null;

  return React.createElement('div', { className: "wp-payment-methods funky-payment-methods" }, [
    React.createElement(TypographyModule.Typography, { 
      key: 'title',
      variant: "h4", 
      className: "wp-payment-methods__title" 
    }, "Payment Method"),
    React.createElement('div', { key: 'options', className: "wp-payment-methods__options" }, options),
    savePaymentCheckbox,
    React.createElement('button', {
      key: 'submit',
      onClick: handlePlaceOrder,
      className: "wp-payment-methods__submit funky-submit-btn"
    }, "Place Order")
  ]);
}

PaymentMethods.displayName = 'PaymentMethods';