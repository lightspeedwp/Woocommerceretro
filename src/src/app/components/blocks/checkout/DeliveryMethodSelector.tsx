import React from 'react';
import { Truck, Storefront as Store } from '@phosphor-icons/react';
import * as TypographyModule from '../../common/Typography';

var Typography = TypographyModule.Typography;

/**
 * DeliveryMethodSelector Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 */
export function DeliveryMethodSelector(props) {
  var method = props.method;
  var setMethod = props.setMethod;

  var handleShipClick = function() {
    setMethod('ship');
  };

  var handlePickupClick = function() {
    setMethod('pickup');
  };

  var shipClasses = [
    'wp-checkout-toggle-option',
    method === 'ship' ? 'is-active funky-toggle--active' : '',
    'funky-toggle-option'
  ].filter(function(c) { return !!c; }).join(' ');

  var pickupClasses = [
    'wp-checkout-toggle-option',
    method === 'pickup' ? 'is-active funky-toggle--active' : '',
    'funky-toggle-option'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', { className: "wp-delivery-method funky-delivery-selector" },
    React.createElement(Typography, { variant: "body", className: "wp-delivery-method__description" },
      "Select how you would like to receive your order."
    ),
    
    React.createElement('div', { className: "wp-checkout-toggle-group funky-toggle-group" },
      React.createElement('button', {
        onClick: handleShipClick,
        className: shipClasses,
        type: "button"
      },
        React.createElement(Truck, { size: 20, className: "wp-delivery-method__icon" }),
        React.createElement('span', { className: "wp-delivery-method__label" }, "Ship")
      ),

      React.createElement('button', {
        onClick: handlePickupClick,
        className: pickupClasses,
        type: "button"
      },
        React.createElement(Store, { size: 20, className: "wp-delivery-method__icon" }),
        React.createElement('span', { className: "wp-delivery-method__label" }, "Pickup")
      )
    )
  );
}

DeliveryMethodSelector.displayName = 'DeliveryMethodSelector';