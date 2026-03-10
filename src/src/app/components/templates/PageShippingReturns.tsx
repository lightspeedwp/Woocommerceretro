import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Truck, ArrowCounterClockwise as RotateCcw, Clock, Package, MapPin, Shield, CheckCircle, XCircle } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as ShippingDataModule from '../../data/shipping';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var shippingMethods = ShippingDataModule.shippingMethods;
var returnProcessSteps = ShippingDataModule.returnProcessSteps;
var shippingPageContent = ShippingDataModule.shippingPageContent;
var shippingReturnsHero = HeroDataModule.shippingReturnsHero;

var shippingIcons = {
  'Package': Package,
  'Truck': Truck,
  'Clock': Clock,
  'MapPin': MapPin,
};

/**
 * PageShippingReturns Template — Funky Redesign (Clean Funky)
 *
 * @route /shipping-returns
 */
export function PageShippingReturns() {
  return (
    React.createElement(Layout, null,
      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: shippingReturnsHero }),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Shipping Methods */
      React.createElement('section', { className: "legal-cards" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content" },
            React.createElement('h2', { className: "legal-cards__heading" }, shippingPageContent.shippingHeading),
            React.createElement('p', { className: "legal-cards__text" }, shippingPageContent.shippingText),
            React.createElement('div', { className: "legal-cards__grid" },
              shippingMethods.map(function(method, i) {
                var Icon = shippingIcons[method.icon] || Package;
                return (
                  React.createElement('div', { key: i, className: "legal-cards__card" },
                    React.createElement('span', { className: "legal-cards__icon" }, React.createElement(Icon, { size: 20 })),
                    React.createElement('h3', { className: "legal-cards__card-title" }, method.name),
                    React.createElement('p', { className: "legal-cards__card-text" }, React.createElement('strong', null, "Delivery:"), " ", method.time),
                    React.createElement('p', { className: "legal-cards__card-text" }, React.createElement('strong', null, "Cost:"), " ", method.cost)
                  )
                );
              })
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Return Process */
      React.createElement('section', { className: "legal-steps legal-steps--alt" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content" },
            React.createElement('div', { className: "legal-steps__header" },
              React.createElement(RotateCcw, { size: 28, className: "legal-form-card__icon" }),
              React.createElement('h2', { className: "legal-steps__heading" }, shippingPageContent.returnsHeading)
            ),
            React.createElement('p', { className: "legal-cards__text" }, shippingPageContent.returnsText),
            React.createElement('h3', { className: "legal-cards__heading legal-cards__heading--sm" },
              shippingPageContent.returnProcessHeading
            ),
            React.createElement('div', { className: "legal-steps__list" },
              returnProcessSteps.map(function(item, i) { return (
                React.createElement('div', { key: i, className: "legal-steps__item" },
                  React.createElement('span', { className: "legal-steps__number" }, item.step),
                  React.createElement('div', { className: "legal-steps__item-body" },
                    React.createElement('h4', { className: "legal-steps__item-title" }, item.title),
                    React.createElement('p', { className: "legal-steps__item-text" }, item.description)
                  )
                )
              )})
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Conditions */
      React.createElement('section', { className: "legal-conditions" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--md-gap" },
            React.createElement('h2', { className: "legal-cards__heading" }, shippingPageContent.conditionsHeading),
            React.createElement('div', { className: "legal-conditions__grid" },
              React.createElement('div', { className: "legal-conditions__card" },
                React.createElement('h3', { className: "legal-conditions__card-title" }, shippingPageContent.conditionsEligible.title),
                React.createElement('ul', { className: "legal-conditions__list" },
                  shippingPageContent.conditionsEligible.items.map(function(item, i) { return (
                    React.createElement('li', { key: i, className: "legal-conditions__item" },
                      React.createElement(CheckCircle, { size: 14, className: "legal-conditions__icon--success" }),
                      React.createElement('span', null, item)
                    )
                  )})
                )
              ),
              React.createElement('div', { className: "legal-conditions__card" },
                React.createElement('h3', { className: "legal-conditions__card-title" }, shippingPageContent.conditionsIneligible.title),
                React.createElement('ul', { className: "legal-conditions__list" },
                  shippingPageContent.conditionsIneligible.items.map(function(item, i) { return (
                    React.createElement('li', { key: i, className: "legal-conditions__item" },
                      React.createElement(XCircle, { size: 14, className: "legal-conditions__icon--error" }),
                      React.createElement('span', null, item)
                    )
                  )})
                )
              )
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      React.createElement('section', { className: "legal-cta" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cta__content" },
            React.createElement(Shield, { size: 28, className: "legal-cta__icon" }),
            React.createElement('h2', { className: "legal-cta__heading" }, shippingPageContent.ctaHeading),
            React.createElement('p', { className: "legal-cta__text" }, shippingPageContent.ctaText),
            React.createElement('div', { className: "legal-cta__actions" },
              React.createElement(Link, { to: "/returns", className: "legal-cta__btn--primary" }, shippingPageContent.ctaButtonPrimary),
              React.createElement(Link, { to: "/faq", className: "legal-cta__btn--secondary" }, shippingPageContent.ctaButtonSecondary)
            )
          )
        )
      )
    )
  );
}
