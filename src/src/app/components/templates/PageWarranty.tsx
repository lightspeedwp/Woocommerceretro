import React from 'react';
import * as ReactRouterModule from 'react-router';
import { ShieldCheck, CheckCircle, XCircle } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as WarrantyDataModule from '../../data/warranty';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var warrantyCovered = WarrantyDataModule.warrantyCovered;
var warrantyNotCovered = WarrantyDataModule.warrantyNotCovered;
var warrantyClaimSteps = WarrantyDataModule.warrantyClaimSteps;
var warrantyPageContent = WarrantyDataModule.warrantyPageContent;
var warrantyHero = HeroDataModule.warrantyHero;

/**
 * PageWarranty Template — Funky Redesign (Clean Funky)
 *
 * @route /warranty
 */
export function PageWarranty() {
  var wpc = warrantyPageContent;
  var overviewHeading = wpc.overviewHeading;
  var overviewDescription = wpc.overviewDescription;
  var coveredHeading = wpc.coveredHeading;
  var notCoveredHeading = wpc.notCoveredHeading;
  var claimHeading = wpc.claimHeading;
  var ctaHeading = wpc.ctaHeading;
  var ctaText = wpc.ctaText;

  return (
    React.createElement(Layout, null,
      React.createElement(FunkyHero, { config: warrantyHero }),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-steps" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-warranty-hero" },
            React.createElement(ShieldCheck, { size: 40, className: "legal-warranty-hero__icon" }),
            React.createElement('h2', { className: "legal-cards__heading" }, overviewHeading),
            React.createElement('p', { className: "legal-cards__text" }, overviewDescription)
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-conditions" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--md-gap" },
            React.createElement('div', { className: "legal-conditions__grid" },
              React.createElement('div', { className: "legal-conditions__card" },
                React.createElement('h3', { className: "legal-conditions__card-title" }, coveredHeading),
                React.createElement('ul', { className: "legal-conditions__list" },
                  warrantyCovered.map(function(item, i) { return (
                    React.createElement('li', { key: i, className: "legal-conditions__item" },
                      React.createElement(CheckCircle, { size: 14, className: "legal-conditions__icon--success" }),
                      React.createElement('span', null, item)
                    )
                  )})
                )
              ),
              React.createElement('div', { className: "legal-conditions__card" },
                React.createElement('h3', { className: "legal-conditions__card-title" }, notCoveredHeading),
                React.createElement('ul', { className: "legal-conditions__list" },
                  warrantyNotCovered.map(function(item, i) { return (
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

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-steps" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--md-gap" },
            React.createElement('h2', { className: "legal-steps__heading" }, claimHeading),
            React.createElement('div', { className: "legal-steps__list" },
              warrantyClaimSteps.map(function(step, i) { return (
                React.createElement('div', { key: i, className: "legal-steps__item" },
                  React.createElement('span', { className: "legal-steps__number" }, step.step),
                  React.createElement('div', { className: "legal-steps__item-body" },
                    React.createElement('h4', { className: "legal-steps__item-title" }, step.title),
                    React.createElement('p', { className: "legal-steps__item-text" }, step.description)
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
            React.createElement('h2', { className: "legal-cta__heading" }, ctaHeading),
            React.createElement('p', { className: "legal-cta__text" }, ctaText),
            React.createElement('div', { className: "legal-cta__actions" },
              React.createElement(Link, { to: "/contact", className: "legal-cta__btn--primary" }, "Contact Support")
            )
          )
        )
      )
    )
  );
}
