import React from 'react';
import * as ReactRouterModule from 'react-router';
import { MapPin, Clock, Phone, NavigationArrow as Navigation } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as StoresDataModule from '../../data/stores';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var storeLocations = StoresDataModule.storeLocations;
var storesPageContent = StoresDataModule.storesPageContent;
var storesHero = HeroDataModule.storesHero;

/**
 * PageStores Template — Funky Redesign
 *
 * Store locator with hero, glow store cards, feature tags,
 * and commerce CTA.
 *
 * @route /stores
 */
export function PageStores() {
  return (
    React.createElement(Layout, null,
      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: storesHero }),

      React.createElement('hr', { className: "funky-section__divider" }),

      /* Store Grid */
      React.createElement('section', { className: "info-stores" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-stores__grid" },
            storeLocations.map(function(store, i) { return (
              React.createElement('div', { key: i, className: "info-stores__card" },
                React.createElement('div', { className: "info-stores__card-glow" }),
                React.createElement('div', { className: "info-stores__card-inner" },
                  React.createElement('h3', { className: "info-stores__name" }, store.name),
                  React.createElement('div', { className: "info-stores__details" },
                    React.createElement('div', { className: "info-stores__detail" },
                      React.createElement(MapPin, { size: 14, className: "info-stores__detail-icon" }),
                      React.createElement('span', null, store.address)
                    ),
                    React.createElement('div', { className: "info-stores__detail" },
                      React.createElement(Clock, { size: 14, className: "info-stores__detail-icon" }),
                      React.createElement('span', null, store.hours)
                    ),
                    React.createElement('div', { className: "info-stores__detail" },
                      React.createElement(Phone, { size: 14, className: "info-stores__detail-icon" }),
                      React.createElement('a', { href: 'tel:' + store.phone.replace(/\D/g, ''), className: "info-contact__detail-link" }, store.phone)
                    )
                  ),
                  React.createElement('div', { className: "info-stores__features" },
                    store.features.map(function(feature, fIndex) { return (
                      React.createElement('span', { key: fIndex, className: "info-stores__feature-tag" }, feature)
                    )})
                  ),
                  React.createElement('button', { className: "info-stores__directions" },
                    React.createElement(Navigation, { size: 12 }), " Get Directions"
                  )
                )
              )
            )})
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      /* CTA */
      React.createElement('section', { className: "info-cta" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-cta__content" },
            React.createElement('h2', { className: "info-cta__heading" }, storesPageContent.ctaHeading),
            React.createElement('p', { className: "info-cta__text" }, storesPageContent.ctaText),
            React.createElement('div', { className: "info-cta__actions" },
              React.createElement(Link, { to: "/shop", className: "info-cta__btn--primary" }, "Shop Online")
            )
          )
        ),
        React.createElement('div', { className: "info-cta__orb--1 funky-orb funky-animate-float" }),
        React.createElement('div', { className: "info-cta__orb--2 funky-orb funky-animate-float" })
      )
    )
  );
}
