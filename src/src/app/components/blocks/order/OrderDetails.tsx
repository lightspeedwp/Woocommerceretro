import React from 'react';
import { Link } from 'react-router';
import { sampleOrderItems, sampleShipping, sampleTotals } from '../../../data/orderSamples';

/**
 * OrderDetails Component
 *
 * WooCommerce Order Confirmation Block: Order Details Section
 * Funky Redesign: Glass panels + Neon accents
 */
export const OrderDetails = ({
  items = sampleOrderItems,
  shipping = {
    method: sampleShipping.method,
    address: '46 Devon Street, Cape Town, Western Cape, 7015',
    location: 'Collection from Dispatch',
  },
  total = sampleTotals.total,
}: {
  items?: typeof sampleOrderItems;
  shipping?: { method: string; address: string; location: string };
  total?: string;
}) => {
  return (
    <div className="wp-block-group wp-block-group--vertical">
      <h2 className="wp-block-heading funky-gradient-text">Order details</h2>
      <div className="wp-order-details-table">
        <div className="wp-order-details-row wp-order-details-header funky-glass-panel">
          <p className="wp-text-bold wp-order-text--sky">Product</p>
          <p className="wp-text-bold wp-text-right wp-order-text--coral">Total</p>
        </div>

        <div>
          {items.map((item) => (
            <div key={item.id} className="wp-order-details-row funky-glass-panel">
              <div className="wp-flex wp-items-center">
                <Link to={item.link} className="wp-order-text--sky">{item.name}</Link>
                <span className="wp-text-bold"> x {item.quantity}</span>
              </div>
              <div className="wp-text-right">
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="wp-order-details-footer">
          <div className="wp-order-details-row funky-glass-panel">
            <p className="wp-text-bold wp-order-text--sky">Shipping:</p>
            <div className="wp-text-right">
              <p>{shipping.location}:</p>
              <p>{shipping.address}</p>
              <p className="wp-order-text--coral">{shipping.method}</p>
            </div>
          </div>
          <div className="wp-order-details-row funky-glass-panel funky-glow-border--lime">
            <h4 className="wp-block-heading wp-order-text--success">Total:</h4>
            <div className="wp-text-right">
              <p className="wp-text-bold wp-order-text--success has-large-font-size">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderDetails.displayName = 'OrderDetails';