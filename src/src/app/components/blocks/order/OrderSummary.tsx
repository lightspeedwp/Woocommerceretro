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
    <div className="wp-order-summary-header wp-grid wp-grid-cols-2 md:wp-grid-cols-5 wp-gap-4">
      {createSummaryItem('order', 'Order #:', orderNumber, 'text-neon-pink')}
      {createSummaryItem('date', 'Date:', date, 'text-neon-cyan')}
      {createSummaryItem('total', 'Total:', total, 'text-neon-lime')}
      {createSummaryItem('email', 'Email:', email, 'text-neon-cyan')}
      {createSummaryItem('payment', 'Payment:', paymentMethod, 'text-neon-pink')}
    </div>
  );
};

OrderSummary.displayName = 'OrderSummary';