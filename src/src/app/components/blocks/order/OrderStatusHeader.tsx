import React from 'react';
import * as TypographyModule from '../../common/Typography';
var Typography = TypographyModule.Typography;

/**
 * OrderStatusHeader Component
 * 
 * WooCommerce Order Confirmation Block: Order Status Header Section
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Named functions
 * 3. ASCII only
 * 4. Funky Redesign: Gradient text + Neon summary
 * 5. Uses path aliases (@/)
 */
export function OrderStatusHeader(props) {
  var orderNumber = props.orderNumber;
  var date = props.date;
  var total = props.total;
  var email = props.email;
  var paymentMethod = props.paymentMethod;

  var headerBox = React.createElement('div', { 
    key: 'headerBox', 
    className: "wp-block-group wp-block-group--vertical wp-order-status-header funky-glass-panel funky-glow-border" 
  }, [
    React.createElement(Typography, { 
      key: 'h1', 
      variant: "h1", 
      className: "funky-gradient-text" 
    }, ["Order received"]),
    React.createElement('p', { 
      key: 'p1', 
      className: "wp-text-medium text-neon-cyan" 
    }, ["Thank you. Your order has been received."])
  ]);

  function createSummaryItem(key, label, value, neonClass) {
    return React.createElement('div', { 
      key: key, 
      className: "wp-order-summary-item funky-glass-panel wp-p-2" 
    }, [
      React.createElement('span', { 
        key: 'label', 
        className: "wp-order-summary-label" 
      }, [label]),
      React.createElement('span', { 
        key: 'value', 
        className: "wp-order-summary-value " + neonClass 
      }, [value])
    ]);
  }

  var summaryHeader = React.createElement('div', { 
    key: 'summaryHeader', 
    className: "wp-order-summary-header wp-mb-8 wp-mt-4" 
  }, [
    createSummaryItem('order', "Order #:", orderNumber, "text-neon-pink"),
    createSummaryItem('date', "Date:", date, "text-neon-cyan"),
    createSummaryItem('total', "Total:", total, "text-neon-lime"),
    createSummaryItem('email', "Email:", email, "text-neon-cyan"),
    createSummaryItem('payment', "Payment:", paymentMethod, "text-neon-pink")
  ]);

  return React.createElement('div', { 
    className: "wp-block-group wp-block-group--vertical" 
  }, [
    headerBox,
    summaryHeader
  ]);
}

OrderStatusHeader.displayName = 'OrderStatusHeader';