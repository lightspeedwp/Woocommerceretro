import React from 'react';
import { Truck, Storefront as Store } from '../../../utils/phosphor-compat';
import { Typography } from '../../common/Typography';

/**
 * DeliveryMethodSelector Component
 *
 * Toggle between Ship and Pickup delivery methods.
 */
export const DeliveryMethodSelector = ({
  method,
  setMethod,
}: {
  method: string;
  setMethod: (method: string) => void;
}) => {
  const shipClasses = [
    'wp-checkout-toggle-option',
    method === 'ship' ? 'is-active funky-toggle--active' : '',
    'funky-toggle-option',
  ].filter(Boolean).join(' ');

  const pickupClasses = [
    'wp-checkout-toggle-option',
    method === 'pickup' ? 'is-active funky-toggle--active' : '',
    'funky-toggle-option',
  ].filter(Boolean).join(' ');

  return (
    <div className="wp-delivery-method funky-delivery-selector">
      <Typography variant="body" className="wp-delivery-method__description">
        Select how you would like to receive your order.
      </Typography>

      <div className="wp-checkout-toggle-group funky-toggle-group">
        <button
          onClick={() => setMethod('ship')}
          className={shipClasses}
          type="button"
        >
          <Truck size={20} className="wp-delivery-method__icon" />
          <span className="wp-delivery-method__label">Ship</span>
        </button>

        <button
          onClick={() => setMethod('pickup')}
          className={pickupClasses}
          type="button"
        >
          <Store size={20} className="wp-delivery-method__icon" />
          <span className="wp-delivery-method__label">Pickup</span>
        </button>
      </div>
    </div>
  );
};

DeliveryMethodSelector.displayName = 'DeliveryMethodSelector';