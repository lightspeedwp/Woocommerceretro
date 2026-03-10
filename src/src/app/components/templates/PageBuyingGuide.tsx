import React from 'react';
import * as ReactRouterModule from 'react-router';
import { CheckCircle, Lightbulb, Bag as ShoppingBag, Star, ArrowRight } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as BuyingGuideDataModule from '../../data/buyingGuide';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var buyingGuides = BuyingGuideDataModule.buyingGuides;
var categoryGuides = BuyingGuideDataModule.categoryGuides;
var buyingGuidePageContent = BuyingGuideDataModule.buyingGuidePageContent;
var buyingGuideHero = HeroDataModule.buyingGuideHero;

/**
 * PageBuyingGuide Template — Funky Redesign (Clean Funky)
 *
 * @route /buying-guide
 */
export function PageBuyingGuide() {
  return (
    React.createElement(Layout, null,
      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: buyingGuideHero }),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Tips */
      React.createElement('section', { className: "legal-cards" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content" },
            React.createElement('h2', { className: "legal-cards__heading" }, buyingGuidePageContent.tipsHeading),
            buyingGuides.map(function(guide) { return (
              React.createElement('div', { key: guide.id, className: "legal-care-card" },
                React.createElement('div', { className: "legal-care-card__header" },
                  React.createElement(Lightbulb, { size: 22, className: "legal-care-card__icon" }),
                  React.createElement('h3', { className: "legal-care-card__title" }, guide.title)
                ),
                React.createElement('ul', { className: "legal-conditions__list" },
                  guide.tips.map(function(tip, i) { return (
                    React.createElement('li', { key: i, className: "legal-conditions__item" },
                      React.createElement(CheckCircle, { size: 14, className: "legal-conditions__icon--success" }),
                      React.createElement('span', null, tip)
                    )
                  )})
                )
              )
            )})
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Categories */
      React.createElement('section', { className: "legal-cards legal-cards--alt" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--centered" },
            React.createElement('h2', { className: "legal-cards__heading funky-section__heading--gradient" },
              buyingGuidePageContent.categoriesHeading
            ),
            React.createElement('div', { className: "legal-cards__grid legal-cards__grid--3col" },
              categoryGuides.map(function(cat) { return (
                React.createElement(Link, { key: cat.id, to: cat.link, className: "legal-cards__link-card" },
                  React.createElement('span', { className: "legal-cards__icon" }, React.createElement(ShoppingBag, { size: 22 })),
                  React.createElement('h3', { className: "legal-cards__card-title" }, cat.name),
                  React.createElement('p', { className: "legal-cards__card-text" }, cat.description),
                  React.createElement('span', { className: "legal-cards__link-arrow" },
                    "Browse ", React.createElement(ArrowRight, { size: 12 })
                  )
                )
              )})
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      React.createElement('section', { className: "legal-cta" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cta__content" },
            React.createElement(Star, { size: 28, className: "legal-cta__icon" }),
            React.createElement('h2', { className: "legal-cta__heading" }, buyingGuidePageContent.ctaHeading),
            React.createElement('p', { className: "legal-cta__text" }, buyingGuidePageContent.ctaText),
            React.createElement('div', { className: "legal-cta__actions" },
              React.createElement(Link, { to: "/contact", className: "legal-cta__btn--primary" }, buyingGuidePageContent.ctaButton)
            )
          )
        )
      )
    )
  );
}
