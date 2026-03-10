import React from 'react';
import * as ReactRouterModule from 'react-router';
import { ArrowLeft, Download, Package, Truck, CheckCircle, CreditCard } from '@phosphor-icons/react';
import * as AccountDataModule from '../../../data/account';

var useMemo = React.useMemo;
var useParams = ReactRouterModule.useParams;
var Link = ReactRouterModule.Link;
var getOrderById = AccountDataModule.getOrderById;
var mockOrders = AccountDataModule.mockOrders;

/**
 * OrderViewPattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function OrderViewPattern() {
  var params = useParams();
  var orderId = params.orderId;

  var orderData = useMemo(function() {
    var found = getOrderById(orderId || '');
    return found || mockOrders[0];
  }, [orderId]);

  var items = orderData.items.map(function(item) {
    var newItem = Object.assign({}, item);
    newItem.image = item.image || 'https://images.unsplash.com/photo-5057404209928-5e560c06d30e?auto=format&fit=crop&q=80&w=200';
    return newItem;
  });

  var order = {
    orderNumber: orderData.id,
    date: new Date(orderData.date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    status: orderData.status,
    trackingNumber: orderData.trackingNumber,
    items: items,
    subtotal: orderData.total * 0.9,
    shipping: 0,
    tax: orderData.total * 0.1,
    total: orderData.total,
    shippingAddress: {
      name: 'Sarah Johnson',
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102'
    },
    billingAddress: {
      name: 'Sarah Johnson',
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102'
    },
    paymentMethod: 'Visa ending in 4242'
  };

  var isCompleted = order.status === 'delivered' || order.status === 'completed';

  var handleReorder = function() {
    alert('Items added to cart! (Demo)');
  };

  var handleDownloadInvoice = function() {
    alert('Invoice download started! (Demo)');
  };

  var renderItems = function() {
    return order.items.map(function(item) {
      return React.createElement('div', { key: item.id, className: "account-order__item funky-order-item" },
        React.createElement('div', { className: "account-order__item-img" },
          React.createElement('img', { src: item.image, alt: item.name })
        ),
        React.createElement('div', { className: "account-order__item-details" },
          React.createElement('h4', { className: "account-order__item-name" }, item.name),
          React.createElement('p', { className: "account-order__item-meta" }, "Quantity: " + item.quantity)
        ),
        React.createElement('div', { className: "account-order__item-pricing" },
          React.createElement('p', { className: "account-order__item-price" },
            "$" + (item.price * item.quantity).toFixed(2)
          ),
          React.createElement('p', { className: "account-order__item-meta" }, "$" + item.price.toFixed(2) + " each")
        )
      );
    });
  };

  return React.createElement('div', { className: "account-order funky-account-panel" },
    /* Header */
    React.createElement('div', { className: "account-order__header funky-account-header" },
      React.createElement('div', null,
        React.createElement(Link, { to: "/account/orders", className: "account-order__back funky-back-link funky-spring-hover" },
          React.createElement(ArrowLeft, { size: 16, weight: "bold" }),
          React.createElement('span', null, "Back to orders")
        ),
        React.createElement('h2', { className: "account-order__title funky-title funky-section__heading--gradient" }, "Order " + order.orderNumber),
        React.createElement('p', { className: "account-order__date", style: { color: 'var(--wp--preset--color--muted-foreground)' } }, "Placed on " + order.date)
      ),
      React.createElement('div', { className: "account-order__actions" },
        React.createElement('button', { onClick: handleDownloadInvoice, className: "account-order__action-btn funky-action-btn funky-spring-hover" },
          React.createElement(Download, { size: 16, weight: "duotone" }),
          React.createElement('span', null, "Invoice")
        ),
        React.createElement('button', { onClick: handleReorder, className: "account-order__action-btn account-order__action-btn--primary funky-action-btn--primary funky-spring-hover" },
          React.createElement(Package, { size: 16, weight: "duotone" }),
          React.createElement('span', null, "Reorder")
        )
      )
    ),

    /* Status panel */
    React.createElement('div', { className: "account-order__panel funky-panel funky-glass-panel" },
      React.createElement('div', { className: "account-order__status-row" },
        React.createElement('div', { className: "account-order__status-icon account-order__status-icon--" + (isCompleted ? 'success' : 'transit') + " funky-status-icon" },
          isCompleted ? React.createElement(CheckCircle, { size: 24, weight: "duotone" }) : React.createElement(Truck, { size: 24, weight: "duotone" })
        ),
        React.createElement('div', null,
          React.createElement('h3', { className: "account-order__status-label account-order__status-label--" + (isCompleted ? 'success' : 'transit') + " funky-status-label" },
            order.status.charAt(0).toUpperCase() + order.status.slice(1)
          ),
          React.createElement('p', { className: "account-order__date", style: { color: 'var(--wp--preset--color--muted-foreground)' } },
            isCompleted ? 'Your order has been delivered' : "Your order is " + order.status
          )
        )
      ),

      order.trackingNumber ? React.createElement('div', { className: "account-order__panel account-order__tracking-panel funky-tracking-panel funky-glass-panel" },
        React.createElement('div', { className: "account-order__tracking-content" },
          React.createElement(Truck, { size: 20, weight: "duotone", className: "account-order__tracking-icon", style: { color: 'var(--wp--preset--color--neon-cyan)' } }),
          React.createElement('div', null,
            React.createElement('h3', { className: "account-order__item-name" }, "Tracking information"),
            React.createElement('p', { className: "account-order__date account-order__tracking-desc", style: { color: 'var(--wp--preset--color--muted-foreground)' } },
              "Your order is on its way! Track your shipment:"
            ),
            React.createElement('div', { className: "account-order__tracking-actions" },
              React.createElement('code', { className: "account-order__tracking-code funky-code", style: { background: 'rgba(0, 255, 255, 0.1)', color: 'var(--wp--preset--color--neon-cyan)', padding: '4px 8px', borderRadius: '4px' } }, order.trackingNumber),
              React.createElement('button', { className: "account-order__track-link funky-track-btn funky-spring-hover" },
                "Track shipment"
              )
            )
          )
        )
      ) : null
    ),

    /* Order items */
    React.createElement('div', { className: "account-order__panel funky-panel funky-glass-panel" },
      React.createElement('h3', { className: "account-order__panel-heading" }, "Order items"),
      React.createElement('div', { className: "account-order__items-list" },
        renderItems()
      ),

      /* Totals */
      React.createElement('div', { className: "account-order__totals-section" },
        React.createElement('div', { className: "account-order__totals funky-totals-grid" },
          React.createElement('div', { className: "account-order__total-row" },
            React.createElement('span', null, "Subtotal"),
            React.createElement('span', null, "$" + order.subtotal.toFixed(2))
          ),
          React.createElement('div', { className: "account-order__total-row" },
            React.createElement('span', null, "Shipping"),
            React.createElement('span', { className: order.shipping === 0 ? 'account-order__shipping-free funky-free-text' : '' },
              order.shipping === 0 ? 'Free' : "$" + order.shipping.toFixed(2)
            )
          ),
          React.createElement('div', { className: "account-order__total-row" },
            React.createElement('span', null, "Tax"),
            React.createElement('span', null, "$" + order.tax.toFixed(2))
          ),
          React.createElement('div', { className: "account-order__total-row account-order__total-row--final funky-final-total" },
            React.createElement('span', null, "Total"),
            React.createElement('span', { className: "account-order__total-value--neon funky-neon-text" }, "$" + order.total.toFixed(2))
          )
        )
      )
    ),

    /* Addresses */
    React.createElement('div', { className: "account-order__addr-grid" },
      React.createElement('div', { className: "account-order__panel funky-panel" },
        React.createElement('h3', { className: "account-order__panel-subheading" }, "Shipping address"),
        React.createElement('p', { className: "account-addr__card-name" }, order.shippingAddress.name),
        React.createElement('p', { className: "account-addr__card-line" },
          order.shippingAddress.street,
          React.createElement('br'),
          order.shippingAddress.city + ", " + order.shippingAddress.state + " " + order.shippingAddress.zip
        )
      ),

      React.createElement('div', { className: "account-order__panel funky-panel" },
        React.createElement('h3', { className: "account-order__panel-subheading" }, "Billing address"),
        React.createElement('p', { className: "account-addr__card-name" }, order.billingAddress.name),
        React.createElement('p', { className: "account-addr__card-line" },
          order.billingAddress.street,
          React.createElement('br'),
          order.billingAddress.city + ", " + order.billingAddress.state + " " + order.billingAddress.zip
        )
      )
    ),

    /* Payment method */
    React.createElement('div', { className: "account-order__panel funky-panel" },
      React.createElement('h3', { className: "account-order__panel-subheading" }, "Payment method"),
      React.createElement('p', { className: "account-order__payment-info" },
        React.createElement(CreditCard, { size: 18, className: "account-order__payment-icon" }),
        order.paymentMethod
      )
    )
  );
}

OrderViewPattern.displayName = 'OrderViewPattern';