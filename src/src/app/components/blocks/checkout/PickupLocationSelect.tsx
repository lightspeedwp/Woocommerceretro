import React from 'react';
import * as StoresData from '../../../data/stores';
var storeLocations = StoresData.storeLocations;

/**
 * PickupLocationSelect Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function PickupLocationSelect() {
  var defaultStore = storeLocations[0];

  return React.createElement('div', { className: "wp-checkout-pickup-location funky-pickup-location" },
    React.createElement('div', { className: "wp-checkout-pickup-details" },
      React.createElement('div', { className: "wp-checkout-pickup-icon" },
        React.createElement('div', { className: "wp-checkout-pickup-dot" })
      ),
      React.createElement('div', null,
        React.createElement('p', { className: "wp-checkout-text-medium funky-bold-text" }, defaultStore.name),
        React.createElement('p', { className: "wp-checkout-text-light" }, defaultStore.address),
        React.createElement('p', { className: "wp-checkout-text-light funky-price-text" }, "Free")
      )
    ),
    React.createElement('button', { className: "wp-checkout-btn-link funky-link-btn" }, "Edit")
  );
}

PickupLocationSelect.displayName = 'PickupLocationSelect';