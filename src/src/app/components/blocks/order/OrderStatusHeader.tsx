import React from 'react';
import { Typography } from '../../common/Typography';

/**
 * OrderStatusHeader Component
 *
 * WooCommerce Order Confirmation Block: Order Status Header Section
 * Funky Redesign: Gradient text + Neon summary
 */
export const OrderStatusHeader = ({
  orderNumber,
  date,
  total,
  email,
  paymentMethod,
}: {
  orderNumber: string;
  date: string;
  total: string;
  email: string;
  paymentMethod: string;
}) => {
  const createSummaryItem = (key: string, label: string, value: string, neonClass: string) => (
    <div key={key} className="wp-order-summary-item funky-glass-panel">
      <span className="wp-order-summary-label">{label}</span>
      <span className={`wp-order-summary-value ${neonClass}`}>{value}</span>
    </div>
  );

  return (
    <div className="wp-block-group wp-block-group--vertical">
      <div className="wp-block-group wp-block-group--vertical wp-order-status-header funky-glass-panel funky-glow-border">
        <Typography variant="h1" className="funky-gradient-text">Order received</Typography>
        <p className="wp-text-medium wp-order-text--sky">Thank you. Your order has been received.</p>
      </div>

      <div className="wp-order-summary-header wp-order-status-header">
        {createSummaryItem('order', 'Order #:', orderNumber, 'wp-order-text--coral')}
        {createSummaryItem('date', 'Date:', date, 'wp-order-text--sky')}
        {createSummaryItem('total', 'Total:', total, 'wp-order-text--success')}
        {createSummaryItem('email', 'Email:', email, 'wp-order-text--sky')}
        {createSummaryItem('payment', 'Payment:', paymentMethod, 'wp-order-text--coral')}
      </div>
    </div>
  );
};

OrderStatusHeader.displayName = 'OrderStatusHeader';