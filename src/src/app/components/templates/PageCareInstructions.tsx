import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Drop as Droplets, Wind, Thermometer, ShieldCheck, TShirt as Shirt, Sparkle as Sparkles } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as CareInstructionsDataModule from '../../data/careInstructions';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var careGuides = CareInstructionsDataModule.careGuides;
var generalCareTips = CareInstructionsDataModule.generalCareTips;
var careInstructionsPageContent = CareInstructionsDataModule.careInstructionsPageContent;
var careInstructionsHero = HeroDataModule.careInstructionsHero;

var careIcons = {
  'cotton': Shirt,
  'linen': Wind,
  'wool': Thermometer,
  'synthetic': ShieldCheck,
  'leather': Droplets,
};

/**
 * PageCareInstructions Template — Funky Redesign (Clean Funky)
 *
 * @route /care-instructions
 */
export function PageCareInstructions() {
  return (
    React.createElement(Layout, null,
      React.createElement(FunkyHero, { config: careInstructionsHero }),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-steps" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--md-gap" },
            React.createElement('h2', { className: "legal-steps__heading" }, careInstructionsPageContent.tipsHeading),
            React.createElement('div', { className: "legal-checklist" },
              generalCareTips.map(function(tip, i) { return (
                React.createElement('div', { key: i, className: "legal-checklist__item" },
                  React.createElement(ShieldCheck, { size: 16, className: "legal-checklist__icon" }),
                  React.createElement('span', null, tip)
                )
              )})
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-cards legal-cards--alt" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content" },
            React.createElement('h2', { className: "legal-cards__heading" }, careInstructionsPageContent.guidesHeading),
            careGuides.map(function(guide) {
              var Icon = careIcons[guide.iconName] || Shirt;
              return (
                React.createElement('div', { key: guide.id, className: "legal-care-card" },
                  React.createElement('div', { className: "legal-care-card__header" },
                    React.createElement(Icon, { size: 24, className: "legal-care-card__icon" }),
                    React.createElement('h3', { className: "legal-care-card__title" }, guide.material)
                  ),
                  React.createElement('ul', { className: "legal-care-card__list" },
                    guide.instructions.map(function(instruction, iIndex) { return (
                      React.createElement('li', { key: iIndex, className: "legal-care-card__item" }, instruction)
                    )})
                  )
                )
              );
            })
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      React.createElement('section', { className: "legal-cta" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cta__content" },
            React.createElement('h2', { className: "legal-cta__heading" }, careInstructionsPageContent.ctaHeading),
            React.createElement('p', { className: "legal-cta__text" }, careInstructionsPageContent.ctaText),
            React.createElement('div', { className: "legal-cta__actions" },
              React.createElement(Link, { to: "/contact", className: "legal-cta__btn--primary" }, careInstructionsPageContent.ctaButton)
            )
          )
        )
      )
    )
  );
}
