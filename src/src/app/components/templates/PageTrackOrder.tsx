import React from 'react';
import * as ReactRouterModule from 'react-router';
import { MagnifyingGlass, Package, Truck, CheckCircle, Clock, MapPin, ArrowRight, Question, Cube } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var trackOrderHero = HeroDataModule.trackOrderHero;

/**
 * PageTrackOrder Template - Funky Redesign
 *
 * Order tracking page with lookup form, live status stepper,
 * and support links.
 *
 * Colour identity: Cyan #00ffff / Purple #8b5cf6 (logistics / trust)
 *
 * @route /track-order
 * @template
 */

var mockSteps = [
  {
    id: 'confirmed',
    label: 'Order confirmed',
    description: 'Your order has been placed and payment received.',
    icon: React.createElement(CheckCircle, { size: 20, weight: "duotone" }),
    date: 'Feb 18, 2026 at 10:32 am',
    done: true,
  },
  {
    id: 'processing',
    label: 'Processing',
    description: 'We are picking and packing your items.',
    icon: React.createElement(Cube, { size: 20, weight: "duotone" }),
    date: 'Feb 18, 2026 at 2:15 pm',
    done: true,
  },
  {
    id: 'shipped',
    label: 'Shipped',
    description: 'Your package is on its way.',
    icon: React.createElement(Truck, { size: 20, weight: "duotone" }),
    date: 'Feb 19, 2026 at 9:05 am',
    done: true,
    current: true,
  },
  {
    id: 'out-for-delivery',
    label: 'Out for delivery',
    description: 'Estimated arrival today.',
    icon: React.createElement(MapPin, { size: 20, weight: "duotone" }),
    done: false,
  },
  {
    id: 'delivered',
    label: 'Delivered',
    description: 'Package delivered successfully.',
    icon: React.createElement(Package, { size: 20, weight: "duotone" }),
    done: false,
  },
];

export function PageTrackOrder() {
  var orderState = React.useState('');
  var orderNumber = orderState[0];
  var setOrderNumber = orderState[1];
  var emailState = React.useState('');
  var email = emailState[0];
  var setEmail = emailState[1];
  var resultState = React.useState(false);
  var showResult = resultState[0];
  var setShowResult = resultState[1];

  function handleSubmit(e) {
    e.preventDefault();
    if (orderNumber.trim() && email.trim()) {
      setShowResult(true);
    }
  }

  return React.createElement(Layout, null,
    React.createElement('div', { className: "page-track-order" },
      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: trackOrderHero }),

      /* Lookup Form */
      React.createElement('section', { className: "track-lookup", 'aria-label': "Order lookup form" },
        React.createElement(Container, null,
          React.createElement('div', { className: "track-lookup__card funky-glass-panel" },
            React.createElement('form', { onSubmit: handleSubmit, className: "track-lookup__form wp-block-form" },
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { htmlFor: "order-number", className: "wp-block-label" },
                  "Order number"
                ),
                React.createElement('div', { className: "track-lookup__input-wrap" },
                  React.createElement(MagnifyingGlass, { size: 18, weight: "duotone", className: "track-lookup__input-icon", 'aria-hidden': "true" }),
                  React.createElement('input', {
                    id: "order-number",
                    type: "text",
                    className: "wp-block-input track-lookup__input funky-input-glow",
                    placeholder: "e.g. WOO-12345",
                    value: orderNumber,
                    onChange: function(e) {
                      setOrderNumber(e.target.value);
                    },
                    required: true,
                    autoComplete: "off"
                  })
                )
              ),

              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { htmlFor: "order-email", className: "wp-block-label" },
                  "Email address"
                ),
                React.createElement('div', { className: "track-lookup__input-wrap" },
                  React.createElement('span', { className: "track-lookup__input-icon", 'aria-hidden': "true" }, "@"),
                  React.createElement('input', {
                    id: "order-email",
                    type: "email",
                    className: "wp-block-input track-lookup__input funky-input-glow",
                    placeholder: "you@example.com",
                    value: email,
                    onChange: function(e) {
                      setEmail(e.target.value);
                    },
                    required: true,
                    autoComplete: "email"
                  })
                )
              ),

              React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button track-lookup__btn wp-sales-btn wp-sales-btn--primary funky-spring-hover" },
                "Track order",
                React.createElement(ArrowRight, { size: 18, weight: "bold" })
              )
            )
          )
        )
      ),

      /* Tracking Result */
      showResult ? React.createElement('section', { className: "track-result", 'aria-label': "Tracking result", 'aria-live': "polite" },
        React.createElement(Container, null,
          React.createElement('div', { className: "track-result__card funky-glass-panel" },
            React.createElement('div', { className: "track-result__header" },
              React.createElement('div', { className: "track-result__order-info" },
                React.createElement('h2', { className: "track-result__order-id" },
                  "Order #" + (orderNumber || 'WOO-12345')
                ),
                React.createElement('span', { className: "track-result__status-badge" }, "In transit")
              ),
              React.createElement('p', { className: "track-result__meta" },
                "Estimated delivery: ", React.createElement('strong', null, "Feb 22, 2026")
              )
            ),

            /* Stepper */
            React.createElement('ol', { className: "track-stepper", 'aria-label': "Order progress" },
              mockSteps.map(function(step, index) {
                return React.createElement('li', {
                  key: step.id,
                  className: 'track-stepper__step' +
                    (step.done ? ' track-stepper__step--done' : '') +
                    (step.current ? ' track-stepper__step--current' : '')
                },
                  React.createElement('div', { className: "track-stepper__indicator", 'aria-hidden': "true" },
                    React.createElement('span', { className: "track-stepper__icon" }, step.icon),
                    index < mockSteps.length - 1 ? React.createElement('span', {
                      className: 'track-stepper__line' + (step.done ? ' track-stepper__line--done' : '')
                    }) : null
                  ),
                  React.createElement('div', { className: "track-stepper__content" },
                    React.createElement('h4', { className: "track-stepper__label" }, step.label),
                    React.createElement('p', { className: "track-stepper__desc" }, step.description),
                    step.date ? React.createElement('time', { className: "track-stepper__date" }, step.date) : null
                  )
                );
              })
            )
          )
        )
      ) : null,

      /* Help / FAQ */
      React.createElement('section', { className: "track-help", 'aria-label': "Tracking help" },
        React.createElement(Container, null,
          React.createElement('h2', { className: "track-help__heading funky-section__heading--gradient" }, "Need help?"),
          React.createElement('div', { className: "track-help__grid" },
            React.createElement(Link, { to: "/help", className: "track-help__card funky-glass-panel funky-spring-hover" },
              React.createElement(Question, { size: 24, weight: "duotone", className: "track-help__card-icon" }),
              React.createElement('h4', { className: "track-help__card-title" }, "Help center"),
              React.createElement('p', { className: "track-help__card-text" }, "Browse answers to common shipping questions.")
            ),
            React.createElement(Link, { to: "/shipping-returns", className: "track-help__card funky-glass-panel funky-spring-hover" },
              React.createElement(Package, { size: 24, weight: "duotone", className: "track-help__card-icon" }),
              React.createElement('h4', { className: "track-help__card-title" }, "Shipping & returns"),
              React.createElement('p', { className: "track-help__card-text" }, "View our shipping times, costs, and return policy.")
            ),
            React.createElement(Link, { to: "/contact", className: "track-help__card funky-glass-panel funky-spring-hover" },
              React.createElement(Clock, { size: 24, weight: "duotone", className: "track-help__card-icon" }),
              React.createElement('h4', { className: "track-help__card-title" }, "Contact support"),
              React.createElement('p', { className: "track-help__card-text" }, "Get in touch with our team for personalised help.")
            )
          )
        )
      )
    )
  );
}

export default PageTrackOrder;