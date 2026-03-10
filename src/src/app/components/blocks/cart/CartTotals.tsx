import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as ButtonsModule from '../design/Buttons';
import * as TypographyModule from '../../common/Typography';
import * as NewsletterCTAModule from '../../patterns/NewsletterCTA';
import { Lock, Truck } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;
var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;
var NewsletterCTA = NewsletterCTAModule.NewsletterCTA;

/**
 * CartTotals Component
 * 
 * Optimized for Figma Make parser:
 * - Uses var instead of const/let
 * - Uses function declarations
 * - No TypeScript-specific syntax
 */
export function CartTotals(props) {
  var subtotal = props.subtotal;
  var shipping = props.shipping;
  var tax = props.tax;
  var discount = props.discount;
  var total = props.total;
  var className = props.className || '';

  return React.createElement('div', { className: "woocommerce-cart-totals funky-cart-totals " + className },
    React.createElement(Typography, { variant: "h4", className: "woocommerce-cart-totals__title" }, 
      "Order Summary"
    ),
    React.createElement('div', { className: "woocommerce-cart-totals__breakdown" },
      React.createElement('div', { className: "woocommerce-cart-totals__row" },
        React.createElement('span', { className: "woocommerce-cart-totals__label" }, "Subtotal"),
        React.createElement('span', { className: "woocommerce-cart-totals__value" }, 
          "$" + subtotal.toFixed(2)
        )
      ),
      React.createElement('div', { className: "woocommerce-cart-totals__row" },
        React.createElement('span', { className: "woocommerce-cart-totals__label" }, "Shipping"),
        React.createElement('span', { className: "woocommerce-cart-totals__value" }, 
          shipping === 0 ? "Free" : "$" + shipping.toFixed(2)
        )
      ),
      React.createElement('div', { className: "woocommerce-cart-totals__row" },
        React.createElement('span', { className: "woocommerce-cart-totals__label" }, "Tax"),
        React.createElement('span', { className: "woocommerce-cart-totals__value" }, 
          "$" + tax.toFixed(2)
        )
      ),
      discount > 0 ? React.createElement('div', { className: "woocommerce-cart-totals__row woocommerce-cart-totals__row--discount" },
        React.createElement('span', { className: "woocommerce-cart-totals__label" }, "Discount"),
        React.createElement('span', { className: "woocommerce-cart-totals__value woocommerce-cart-totals__value--discount" }, 
          "-$" + discount.toFixed(2)
        )
      ) : null,
      React.createElement('div', { className: "woocommerce-cart-totals__divider" }),
      React.createElement('div', { className: "woocommerce-cart-totals__row woocommerce-cart-totals__row--total" },
        React.createElement('span', { className: "woocommerce-cart-totals__label woocommerce-cart-totals__label--total" }, 
          "Total"
        ),
        React.createElement('span', { className: "woocommerce-cart-totals__value woocommerce-cart-totals__value--total funky-total-value" }, 
          "$" + total.toFixed(2)
        )
      )
    ),
    React.createElement('div', { className: "woocommerce-cart-totals__actions" },
      React.createElement('div', { style: { marginBottom: 'var(--wp--preset--spacing--60)' } },
        React.createElement(NewsletterCTA, { variant: 'compact', heading: 'Save 10%', description: 'Subscribe to our newsletter and get 10% off your first order!' })
      ),
      React.createElement(Link, { to: "/checkout", className: "woocommerce-cart-totals__checkout-link" },
        React.createElement(Button, { 
          variant: "primary",
          className: "woocommerce-cart-totals__checkout-btn funky-checkout-btn"
        },
          React.createElement(Lock, { className: "woocommerce-cart-totals__checkout-icon" }),
          "Proceed to Checkout"
        )
      ),
      React.createElement('div', { className: "woocommerce-cart-totals__shipping-info funky-shipping-info" },
        React.createElement(Truck, { className: "woocommerce-cart-totals__shipping-icon" }),
        React.createElement('span', null, "Free shipping on orders over $50")
      )
    )
  );
}

CartTotals.displayName = 'CartTotals';