import React from 'react';

/**
 * OrderStatus Component
 *
 * WooCommerce Order Confirmation Block: Order Status Header
 * Funky Redesign: Gradient header + Glass panel
 */
export const OrderStatus = ({
  status = 'processing',
}: {
  status?: string;
}) => {
  const getStatusMessage = () => {
    if (status === 'completed') return 'Thank you. Your order is complete.';
    if (status === 'on-hold') return 'Thank you. Your order is currently on hold.';
    if (status === 'pending') return 'Thank you. Your order is pending payment.';
    return 'Thank you. Your order has been received.';
  };

  return (
    <div className="wp-block-group wp-block-group--vertical funky-glass-panel funky-glow-border--lime wp-order-status">
      <h1 className="wp-block-heading funky-gradient-text has-x-large-font-size">Order received</h1>
      <p className="wp-order-text--success">{getStatusMessage()}</p>
    </div>
  );
};

OrderStatus.displayName = 'OrderStatus';