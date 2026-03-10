import React from 'react';
import * as ReactRouterModule from 'react-router';
import { CaretDown, Question, Package, Truck, ArrowCounterClockwise, CreditCard, ShieldCheck, ChatCircle } from '@phosphor-icons/react';

var useState = React.useState;
var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as FAQDataModule from '../../data/faq';
import * as HeroDataModule from '../../data/heroData';
import * as NewsletterCTAModule from '../patterns/NewsletterCTA';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var NewsletterCTA = NewsletterCTAModule.NewsletterCTA;
var faqCategories = FAQDataModule.faqCategories;
var faqPageContent = FAQDataModule.faqPageContent;
var faqHero = HeroDataModule.faqHero;

var categoryIcons = {
  'Truck': React.createElement(Truck, { size: 24, weight: 'duotone' }),
  'RotateCcw': React.createElement(ArrowCounterClockwise, { size: 24, weight: 'duotone' }),
  'CreditCard': React.createElement(CreditCard, { size: 24, weight: 'duotone' }),
  'Package': React.createElement(Package, { size: 24, weight: 'duotone' }),
  'ShieldCheck': React.createElement(ShieldCheck, { size: 24, weight: 'duotone' })
};

/**
 * PageFAQ Template — Funky Redesign
 *
 * FAQ page with purple-tinted hero, glow-on-active accordion items,
 * gradient icon circles, and commerce CTA.
 *
 * @route /faq
 */
export function PageFAQ() {
  var openState = useState({});
  var openItems = openState[0];
  var setOpenItems = openState[1];

  var toggleItem = function(categoryIndex, itemIndex) {
    var key = categoryIndex + "-" + itemIndex;
    var nextState = Object.assign({}, openItems);
    nextState[key] = !nextState[key];
    setOpenItems(nextState);
  };

  return React.createElement(Layout, null,
    /* ── Hero (shared FunkyHero) ── */
    React.createElement(FunkyHero, { config: faqHero }),

    React.createElement('hr', { className: "funky-section__divider" }),

    /* ── FAQ Categories ── */
    React.createElement('section', { className: "info-faq" },
      React.createElement(Container, null,
        React.createElement('div', { className: "info-faq__content" },
          faqCategories.map(function(category, catIndex) {
            return React.createElement('div', { key: catIndex, className: "info-faq__category" },
              React.createElement('div', { className: "info-faq__cat-header" },
                React.createElement('span', { className: "info-faq__cat-icon" },
                  categoryIcons[category.icon] || React.createElement(Question, { size: 24, weight: 'duotone' })
                ),
                React.createElement('h2', { className: "info-faq__cat-title" }, category.title)
              ),
              React.createElement('div', { className: "info-faq__items" },
                category.items.map(function(item, itemIndex) {
                  var isOpen = openItems[catIndex + "-" + itemIndex];
                  return React.createElement('div', {
                    key: itemIndex,
                    className: "info-faq__item" + (isOpen ? ' info-faq__item--open' : '')
                  },
                    React.createElement('button', {
                      className: "info-faq__trigger",
                      onClick: function() { toggleItem(catIndex, itemIndex); },
                      'aria-expanded': isOpen
                    },
                      React.createElement('span', null, item.question),
                      React.createElement(CaretDown, {
                        size: 20,
                        weight: 'bold',
                        className: "info-faq__chevron" + (isOpen ? ' info-faq__chevron--open' : '')
                      })
                    ),
                    isOpen ? React.createElement('div', { className: "info-faq__answer" }, item.answer) : null
                  );
                })
              )
            );
          })
        )
      )
    ),

    React.createElement('hr', { className: "funky-section__divider" }),

    /* ── NEWSLETTER ── */
    React.createElement(Container, null,
      React.createElement(NewsletterCTA, { 
        variant: 'compact',
        heading: 'Get helpful tips',
        description: 'Subscribe to our newsletter for product tips and tricks.',
        className: 'info-faq__newsletter'
      })
    ),

    React.createElement('hr', { className: "funky-section__divider" }),

    /* ── CTA ── */
    React.createElement('section', { className: "info-cta" },
      React.createElement(Container, null,
        React.createElement('div', { className: "info-cta__content" },
          React.createElement(ChatCircle, { size: 48, weight: 'duotone', className: "info-cta__icon" }),
          React.createElement('h2', { className: "info-cta__heading" }, faqPageContent.ctaHeading),
          React.createElement('p', { className: "info-cta__text" }, faqPageContent.ctaText),
          React.createElement('div', { className: "info-cta__actions" },
            React.createElement(Link, { to: "/contact", className: "info-cta__btn--primary" }, faqPageContent.ctaButtonPrimary),
            React.createElement(Link, { to: "/chat", className: "info-cta__btn--secondary" }, faqPageContent.ctaButtonSecondary)
          )
        )
      ),
      React.createElement('div', { className: "info-cta__orb--1 funky-orb funky-animate-float" }),
      React.createElement('div', { className: "info-cta__orb--2 funky-orb funky-animate-float" })
    )
  );
}