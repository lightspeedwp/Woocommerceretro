import React from 'react';

/**
 * OrderStatus Component
 * 
 * WooCommerce Order Confirmation Block: Order Status Header
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Named functions
 * 3. ASCII only
 * 4. Funky Redesign: Gradient header + Glass panel
 */
export function OrderStatus(props) {
  var status = props.status || 'processing';

  function getStatusMessage() {
    if (status === 'completed') {
      return 'Thank you. Your order is complete.';
    }
    if (status === 'on-hold') {
      return 'Thank you. Your order is currently on hold.';
    }
    if (status === 'pending') {
      return 'Thank you. Your order is pending payment.';
    }
    return 'Thank you. Your order has been received.';
  }

  return React.createElement('div', { 
    className: "wp-block-group wp-block-group--vertical funky-glass-panel funky-glow-border--lime wp-p-6" 
  }, [
    React.createElement('h1', { 
      key: 'h1', 
      className: "wp-block-heading funky-gradient-text has-x-large-font-size" 
    }, "Order received"),
    React.createElement('p', { 
      key: 'p1',
      className: "text-neon-lime wp-mt-2"
    }, getStatusMessage())
  ]);
}

OrderStatus.displayName = 'OrderStatus';