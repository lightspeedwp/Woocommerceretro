import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Leaf, Recycle, Drop as Droplets, Sun, Tree as TreePine, Medal as Award, Check } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as SustainabilityDataModule from '../../data/sustainability';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var sustainabilityInitiatives = SustainabilityDataModule.sustainabilityInitiatives;
var sustainabilityStats = SustainabilityDataModule.sustainabilityStats;
var sustainabilityGoals = SustainabilityDataModule.sustainabilityGoals;
var sustainabilityPageContent = SustainabilityDataModule.sustainabilityPageContent;
var sustainabilityHero = HeroDataModule.sustainabilityHero;

var initiativeIcons = {
  'Recycle': Recycle,
  'Leaf': Leaf,
  'Droplets': Droplets,
  'Sun': Sun,
  'TreePine': TreePine,
  'Award': Award,
};

/**
 * PageSustainability Template — Funky Redesign
 *
 * Sustainability page with hero, gradient stat numbers,
 * glow initiative cards, goal checklist, and commerce CTA.
 *
 * @route /about/sustainability
 */
export function PageSustainability() {
  return (
    React.createElement(Layout, null,
      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: sustainabilityHero }),

      React.createElement('hr', { className: "funky-section__divider" }),

      /* Stats */
      React.createElement('section', { className: "info-stats" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-stats__content" },
            React.createElement('div', { className: "info-stats__grid" },
              sustainabilityStats.map(function(stat, i) { return (
                React.createElement('div', { key: i, className: "info-stats__item" },
                  React.createElement('span', { className: "info-stats__number" }, stat.value),
                  React.createElement('span', { className: "info-stats__label" }, stat.label)
                )
              )})
            )
          )
        ),
        React.createElement('div', { className: "info-stats__orb--1 funky-orb funky-animate-float" }),
        React.createElement('div', { className: "info-stats__orb--2 funky-orb funky-animate-float" })
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      /* Initiatives */
      React.createElement('section', { className: "info-cards" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-cards__content info-cards__content--lg" },
            React.createElement('h2', { className: "info-cards__heading funky-section__heading--gradient" },
              sustainabilityPageContent.initiativesHeading
            ),
            React.createElement('p', { className: "info-cards__subheading" }, sustainabilityPageContent.initiativesDescription),
            React.createElement('div', { className: "info-cards__grid" },
              sustainabilityInitiatives.map(function(initiative, i) {
                var Icon = initiativeIcons[initiative.iconName] || Leaf;
                return (
                  React.createElement('div', { key: i, className: "info-cards__card" },
                    React.createElement('div', { className: "info-cards__card-glow" }),
                    React.createElement('div', { className: "info-cards__card-inner" },
                      React.createElement('span', { className: "info-cards__icon-circle" },
                        React.createElement(Icon, { size: 22 })
                      ),
                      React.createElement('h3', { className: "info-cards__card-title" }, initiative.title),
                      React.createElement('p', { className: "info-cards__card-text" }, initiative.description)
                    )
                  )
                );
              })
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Goals */
      React.createElement('section', { className: "info-goals" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-goals__content" },
            React.createElement('h2', { className: "info-goals__heading" }, sustainabilityPageContent.goalsHeading),
            React.createElement('ul', { className: "info-goals__list" },
              sustainabilityGoals.map(function(goal, i) { return (
                React.createElement('li', { key: i, className: "info-goals__item" },
                  React.createElement('span', { className: "info-goals__check" },
                    React.createElement(Check, { size: 14 })
                  ),
                  React.createElement('span', { className: "info-goals__text" }, goal.text)
                )
              )})
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      /* CTA */
      React.createElement('section', { className: "info-cta" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-cta__content" },
            React.createElement('h2', { className: "info-cta__heading" }, sustainabilityPageContent.ctaHeading),
            React.createElement('p', { className: "info-cta__text" }, sustainabilityPageContent.ctaText),
            React.createElement('div', { className: "info-cta__actions" },
              React.createElement(Link, { to: "/shop", className: "info-cta__btn--primary" }, "Shop Eco-Friendly")
            )
          )
        ),
        React.createElement('div', { className: "info-cta__orb--1 funky-orb funky-animate-float" }),
        React.createElement('div', { className: "info-cta__orb--2 funky-orb funky-animate-float" })
      )
    )
  );
}
