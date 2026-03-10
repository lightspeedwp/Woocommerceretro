import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as OrderSamplesData from '../../../data/orderSamples';

var Link = ReactRouterModule.Link;
var sampleOrderItems = OrderSamplesData.sampleOrderItems;
var sampleShipping = OrderSamplesData.sampleShipping;
var sampleTotals = OrderSamplesData.sampleTotals;

/**
 * OrderDetails Component
 * 
 * WooCommerce Order Confirmation Block: Order Details Section
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. Named functions
 * 4. ASCII only
 * 5. Funky Redesign: Glass panels + Neon accents
 * 6. Uses path aliases (@/)
 */
export function OrderDetails(props) {
  var items = props.items || sampleOrderItems;
  var shipping = props.shipping || {
    method: sampleShipping.method,
    address: '46 Devon Street, Cape Town, Western Cape, 7015',
    location: 'Collection from Dispatch'
  };
  var total = props.total || sampleTotals.total;

  var headerElement = React.createElement('div', { 
    key: 'h_row',
    className: "wp-order-details-row wp-order-details-header funky-glass-panel wp-mb-2" 
  }, [
    React.createElement('p', { key: 'p1', className: "wp-text-bold text-neon-cyan" }, ["Product"]),
    React.createElement('p', { key: 'p2', className: "wp-text-bold wp-text-right text-neon-pink" }, ["Total"])
  ]);

  var bodyItems = items.map(function(item) {
    return React.createElement('div', { 
      key: item.id, 
      className: "wp-order-details-row funky-glass-panel wp-mb-1" 
    }, [
      React.createElement('div', { key: 'd1', className: "wp-flex wp-items-center" }, [
        React.createElement(Link, { 
          key: 'l1', 
          to: item.link,
          className: "text-neon-cyan"
        }, [item.name]),
        React.createElement('span', { 
          key: 's1', 
          className: "wp-text-bold wp-ml-1" 
        }, [" x " + item.quantity])
      ]),
      React.createElement('div', { key: 'd2', className: "wp-text-right" }, [
        React.createElement('p', { key: 'price' }, [item.price])
      ])
    ]);
  });

  var footerElement = React.createElement('div', { 
    key: 'footer',
    className: "wp-order-details-footer wp-mt-4" 
  }, [
    React.createElement('div', { 
      key: 'f1', 
      className: "wp-order-details-row funky-glass-panel wp-mb-2" 
    }, [
      React.createElement('p', { key: 'p1', className: "wp-text-bold text-neon-cyan" }, ["Shipping:"]),
      React.createElement('div', { key: 'd1', className: "wp-text-right" }, [
        React.createElement('p', { key: 'p1' }, [shipping.location + ":"]),
        React.createElement('p', { key: 'p2' }, [shipping.address]),
        React.createElement('p', { key: 'p3', className: "text-neon-pink" }, [shipping.method])
      ])
    ]),
    React.createElement('div', { 
      key: 'f2', 
      className: "wp-order-details-row funky-glass-panel funky-glow-border--lime" 
    }, [
      React.createElement('h4', { key: 'h1', className: "wp-block-heading text-neon-lime" }, ["Total:"]),
      React.createElement('div', { key: 'd1', className: "wp-text-right" }, [
        React.createElement('p', { key: 'p1', className: "wp-text-bold text-neon-lime has-large-font-size" }, [total])
      ])
    ])
  ]);

  return React.createElement('div', { 
    className: "wp-block-group wp-block-group--vertical" 
  }, [
    React.createElement('h2', { 
      key: 'h1', 
      className: "wp-block-heading funky-gradient-text" 
    }, ["Order details"]),
    React.createElement('div', { 
      key: 'd1', 
      className: "wp-order-details-table" 
    }, [
      headerElement,
      React.createElement('div', { key: 'body' }, bodyItems),
      footerElement
    ])
  ]);
}

OrderDetails.displayName = 'OrderDetails';