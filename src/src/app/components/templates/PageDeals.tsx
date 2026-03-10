import React from 'react';
import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as ProductCardModule from '../blocks/product/ProductCard';
import * as ProductsDataModule from '../../data/products';
import { Fire, ArrowRight } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
import * as ReducedMotionModule from '../../hooks/usePrefersReducedMotion';
import * as HeroDataModule from '../../data/heroData';

var Link = ReactRouterModule.Link;
var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var ProductCard = ProductCardModule.ProductCard;
var products = ProductsDataModule.products;
var usePrefersReducedMotion = ReducedMotionModule.usePrefersReducedMotion;
var dealsHero = HeroDataModule.dealsHero;

/**
 * PageDeals Template
 *
 * Sales & deals page with funky gradient hero, animated flash-sale banner,
 * and glow-accent product grid.
 *
 * **Phase 9 — Funky Redesign**
 * **Colour identity:** Hot Pink #ff00ff / Neon Yellow #ccff00
 * **CSS:** `/src/styles/sections/commerce-special-funky.css`
 *
 * @template
 */
export function PageDeals() {
  var deals = products.filter(
    function(product) { return product.salePrice && product.salePrice < product.price; }
  );
  var prefersReduced = usePrefersReducedMotion();

  return React.createElement(Layout, null,
    React.createElement('div', { className: "page-deals" },
      /* Flash sale banner */
      React.createElement('div', { className: "deals-flash-banner", role: "status", 'aria-live': "polite" },
        React.createElement(Fire, { size: 14, weight: 'duotone', 'aria-hidden': "true" }),
        " Flash sale — Up to 50 % off selected items — Ends Sunday ",
        React.createElement(Fire, { size: 14, weight: 'duotone', 'aria-hidden': "true" })
      ),

      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: dealsHero }),

      /* Deals grid */
      React.createElement('section', { id: "deals-grid", className: "deals-section", 'aria-label': "Current deals" },
        React.createElement(Container, null,
          deals.length > 0 ? React.createElement(React.Fragment, null,
            React.createElement('div', { className: "deals-section__heading" },
              React.createElement('h2', null, deals.length + " deal" + (deals.length !== 1 ? 's' : '') + " live now")
            ),
            React.createElement('div', { className: "deals-section__grid" },
              deals.map(function(product) {
                return React.createElement(ProductCard, { key: product.id, product: product });
              })
            )
          ) : React.createElement('div', { className: "deals-section__empty" },
            React.createElement('h3', null, "No deals active right now"),
            React.createElement('p', null, "Check back soon for great discounts!")
          )
        )
      ),

      /* CTA */
      React.createElement('section', { className: "commerce-cta", 'aria-label': "Explore more" },
        React.createElement('div', { className: "commerce-cta__bg", 'aria-hidden': "true" }),
        !prefersReduced ? React.createElement(React.Fragment, null,
          React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--1", 'aria-hidden': "true" }),
          React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--2", 'aria-hidden': "true" })
        ) : null,

        React.createElement(Container, null,
          React.createElement('div', { className: "commerce-cta__content" },
            React.createElement('h2', { className: "commerce-cta__title" }, "Don't miss out"),
            React.createElement('p', { className: "commerce-cta__text" },
              "New deals drop every week. Browse our full collection to find your next favourite."
            ),
            React.createElement(Link, { to: "/shop", className: "commerce-cta__btn" },
              "Shop all products",
              React.createElement(ArrowRight, { size: 18, weight: 'bold' })
            )
          )
        )
      )
    )
  );
}

export default PageDeals;