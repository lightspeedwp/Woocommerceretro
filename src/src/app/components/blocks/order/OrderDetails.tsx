import React from 'react';
import { Link } from 'react-router';
import { sampleOrderItems, sampleShipping, sampleTotals } from '../../../data/orderSamples';
import { Heading } from '../../common/Heading';

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
          <p className="wp-order-details__label wp-order-details__label--sky">Product</p>
          <p className="wp-order-details__label wp-order-details__label--coral wp-order-details__label--right">Total</p>
        </div>

        <div>
          {items.map((item) => (
            <div key={item.id} className="wp-order-details-row funky-glass-panel">
              <div className="wp-order-details__product-info">
                <Link to={item.link} className="wp-order-details__product-link">{item.name}</Link>
                <span className="wp-order-details__quantity"> x {item.quantity}</span>
              </div>
              <div className="wp-order-details__price">
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="wp-order-details-footer">
          <div className="wp-order-details-row funky-glass-panel">
            <p className="wp-order-details__label wp-order-details__label--sky">Shipping:</p>
            <div className="wp-order-details__price">
              <p>{shipping.location}:</p>
              <p>{shipping.address}</p>
              <p className="wp-order-details__label--coral">{shipping.method}</p>
            </div>
          </div>
          <div className="wp-order-details-row funky-glass-panel funky-glow-border--lime">
            <Heading level={4} className="wp-block-heading wp-order-details__label--success">Total:</Heading>
            <div className="wp-order-details__price">
              <p className="wp-order-details__total wp-order-details__label--success has-large-font-size">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderDetails.displayName = 'OrderDetails';