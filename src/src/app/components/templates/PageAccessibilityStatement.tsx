import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Keyboard, Eye, Monitor, SpeakerHigh as Volume2, CheckCircle } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as AccessibilityDataModule from '../../data/accessibilityStatement';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var accessibilityFeatures = AccessibilityDataModule.accessibilityFeatures;
var accessibilityStandards = AccessibilityDataModule.accessibilityStandards;
var accessibilityPageContent = AccessibilityDataModule.accessibilityPageContent;
var accessibilityHero = HeroDataModule.accessibilityHero;

var featureIcons = {
  'keyboard': Keyboard,
  'screen-reader': Eye,
  'responsive': Monitor,
  'alt-text': Volume2,
};

/**
 * PageAccessibilityStatement Template — Funky Redesign (Clean Funky)
 *
 * @route /accessibility
 */
export function PageAccessibilityStatement() {
  return (
    React.createElement(Layout, null,
      React.createElement(FunkyHero, { config: accessibilityHero }),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-content" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-content__inner" },
            React.createElement('div', { className: "legal-content__section" },
              React.createElement('h2', { className: "legal-content__heading" }, accessibilityPageContent.commitmentHeading),
              React.createElement('p', { className: "legal-content__text" }, accessibilityPageContent.commitmentText)
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-cards legal-cards--alt" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--centered" },
            React.createElement('h2', { className: "legal-cards__heading funky-section__heading--gradient" },
              accessibilityPageContent.featuresHeading
            ),
            React.createElement('div', { className: "legal-cards__grid" },
              accessibilityFeatures.map(function(feature) {
                var Icon = featureIcons[feature.iconName] || Eye;
                return (
                  React.createElement('div', { key: feature.id, className: "legal-cards__card" },
                    React.createElement('span', { className: "legal-cards__icon" }, React.createElement(Icon, { size: 22 })),
                    React.createElement('h3', { className: "legal-cards__card-title" }, feature.title),
                    React.createElement('p', { className: "legal-cards__card-text" }, feature.description)
                  )
                );
              })
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-steps" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--md-gap" },
            React.createElement('h2', { className: "legal-steps__heading" }, accessibilityPageContent.standardsHeading),
            React.createElement('div', { className: "legal-checklist" },
              accessibilityStandards.map(function(standard, i) { return (
                React.createElement('div', { key: i, className: "legal-checklist__item" },
                  React.createElement(CheckCircle, { size: 16, className: "legal-checklist__icon" }),
                  React.createElement('span', null, standard)
                )
              )})
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-content" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-content__inner" },
            React.createElement('div', { className: "legal-content__section" },
              React.createElement('h2', { className: "legal-content__heading" }, accessibilityPageContent.feedbackHeading),
              React.createElement('p', { className: "legal-content__text" }, accessibilityPageContent.feedbackText1),
              React.createElement('p', { className: "legal-content__text" }, accessibilityPageContent.feedbackText2)
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      React.createElement('section', { className: "legal-cta" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cta__content" },
            React.createElement('h2', { className: "legal-cta__heading" }, accessibilityPageContent.ctaHeading),
            React.createElement('p', { className: "legal-cta__text" }, accessibilityPageContent.ctaText),
            React.createElement('div', { className: "legal-cta__actions" },
              React.createElement(Link, { to: "/contact", className: "legal-cta__btn--primary" }, accessibilityPageContent.ctaButtonPrimary),
              React.createElement('a', { href: "mailto:accessibility@example.com", className: "legal-cta__btn--secondary" }, accessibilityPageContent.ctaButtonSecondary)
            )
          )
        )
      )
    )
  );
}
