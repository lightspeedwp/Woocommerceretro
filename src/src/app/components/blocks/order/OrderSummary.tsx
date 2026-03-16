import React from 'react';

/**
 * OrderSummary Component
 *
 * Displays order summary grid with neon-styled values.
 */
export const OrderSummary = ({
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
      <small className="wp-order-summary-label">{label}</small>
      <p className={`wp-order-summary-value ${neonClass}`}>{value}</p>
    </div>
  );

  return (
    <div className="wp-order-summary-header">
      {createSummaryItem('order', 'Order #:', orderNumber, 'wp-order-text--coral')}
      {createSummaryItem('date', 'Date:', date, 'wp-order-text--sky')}
      {createSummaryItem('total', 'Total:', total, 'wp-order-text--success')}
      {createSummaryItem('email', 'Email:', email, 'wp-order-text--sky')}
      {createSummaryItem('payment', 'Payment:', paymentMethod, 'wp-order-text--coral')}
    </div>
  );
};

OrderSummary.displayName = 'OrderSummary';