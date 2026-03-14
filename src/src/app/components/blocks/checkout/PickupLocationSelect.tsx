import React from 'react';
import { storeLocations } from '../../../data/stores';

/**
 * PickupLocationSelect Component
 *
 * Displays the default pickup store location with edit option.
 */
export const PickupLocationSelect = () => {
  const defaultStore = storeLocations[0];

  return (
    <div className="wp-checkout-pickup-location funky-pickup-location">
      <div className="wp-checkout-pickup-details">
        <div className="wp-checkout-pickup-icon">
          <div className="wp-checkout-pickup-dot" />
        </div>
        <div>
          <p className="wp-checkout-text-medium funky-bold-text">{defaultStore.name}</p>
          <p className="wp-checkout-text-light">{defaultStore.address}</p>
          <p className="wp-checkout-text-light funky-price-text">Free</p>
        </div>
      </div>
      <button className="wp-checkout-btn-link funky-link-btn">Edit</button>
    </div>
  );
};

PickupLocationSelect.displayName = 'PickupLocationSelect';
