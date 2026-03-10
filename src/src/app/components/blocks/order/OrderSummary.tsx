import React from 'react';

export function OrderSummary(props) {
  var orderNumber = props.orderNumber;
  var date = props.date;
  var total = props.total;
  var email = props.email;
  var paymentMethod = props.paymentMethod;

  function createSummaryItem(key, label, value, neonClass) {
    return React.createElement('div', { 
      key: key, 
      className: "wp-order-summary-item funky-glass-panel wp-p-3" 
    }, [
      React.createElement('small', { 
        key: 'label', 
        className: "wp-order-summary-label" 
      }, [label]),
      React.createElement('p', { 
        key: 'value', 
        className: "wp-order-summary-value " + neonClass 
      }, [value])
    ]);
  }

  return React.createElement('div', { 
    className: "wp-order-summary-header wp-grid wp-grid-cols-2 md:wp-grid-cols-5 wp-gap-4" 
  }, [
    createSummaryItem('order', "Order #:", orderNumber, "text-neon-pink"),
    createSummaryItem('date', "Date:", date, "text-neon-cyan"),
    createSummaryItem('total', "Total:", total, "text-neon-lime"),
    createSummaryItem('email', "Email:", email, "text-neon-cyan"),
    createSummaryItem('payment', "Payment:", paymentMethod, "text-neon-pink")
  ]);
}

OrderSummary.displayName = 'OrderSummary';