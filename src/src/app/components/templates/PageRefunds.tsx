import React from 'react';
import * as ReactRouterModule from 'react-router';
import { CheckCircle, XCircle, CaretDown, CurrencyDollar, CreditCard, Lightning, Wallet, Gift } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as RefundsDataModule from '../../data/refunds';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var refundTimelines = RefundsDataModule.refundTimelines;
var refundEligibility = RefundsDataModule.refundEligibility;
var refundStatusSteps = RefundsDataModule.refundStatusSteps;
var refundFAQs = RefundsDataModule.refundFAQs;
var refundsPageContent = RefundsDataModule.refundsPageContent;
var refundsHero = HeroDataModule.refundsHero;

var timelineIcons = {
  'Original Payment Method': CreditCard,
  'Store Credit': Lightning,
  'PayPal / Digital Wallet': Wallet,
  'Gift Card Purchases': Gift
};

/**
 * PageRefunds Template -- Funky Redesign
 *
 * Dedicated refunds information page with glassmorphism cards,
 * gradient step numbers, neon focus states, and accordion FAQ.
 *
 * @route /refunds
 */
export function PageRefunds() {
  var faqOpenState = React.useState(-1);
  var openFAQ = faqOpenState[0];
  var setOpenFAQ = faqOpenState[1];

  function toggleFAQ(index) {
    return function () {
      setOpenFAQ(openFAQ === index ? -1 : index);
    };
  }

  return (
    React.createElement(Layout, null,
      React.createElement(FunkyHero, { config: refundsHero }),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Refund Timelines */
      React.createElement('section', { className: "refunds-page__timelines", "aria-labelledby": "timelines-heading" },
        React.createElement(Container, null,
          React.createElement('div', { className: "refunds-page__section-header" },
            React.createElement('h2', { id: "timelines-heading", className: "refunds-page__heading" },
              refundsPageContent.timelinesHeading
            ),
            React.createElement('p', { className: "refunds-page__subtext" }, refundsPageContent.timelinesSubtext)
          ),
          React.createElement('div', { className: "refunds-page__timeline-grid" },
            refundTimelines.map(function (item, i) {
              var IconComp = timelineIcons[item.method] || CurrencyDollar;
              return (
                React.createElement('div', { key: i, className: "refunds-page__timeline-card" },
                  React.createElement('div', { className: "refunds-page__timeline-card-glow", "aria-hidden": "true" }),
                  React.createElement('div', { className: "refunds-page__timeline-card-inner" },
                    React.createElement('div', { className: "refunds-page__timeline-icon-wrap" },
                      React.createElement(IconComp, { size: 24, weight: "duotone", className: "refunds-page__timeline-icon" })
                    ),
                    React.createElement('h3', { className: "refunds-page__timeline-method" }, item.method),
                    React.createElement('span', { className: "refunds-page__timeline-timeframe" }, item.timeframe),
                    React.createElement('p', { className: "refunds-page__timeline-desc" }, item.description)
                  )
                )
              );
            })
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Refund Process Steps */
      React.createElement('section', { className: "refunds-page__process", "aria-labelledby": "process-heading" },
        React.createElement(Container, null,
          React.createElement('div', { className: "refunds-page__section-header" },
            React.createElement('h2', { id: "process-heading", className: "refunds-page__heading" },
              refundsPageContent.statusHeading
            ),
            React.createElement('p', { className: "refunds-page__subtext" }, refundsPageContent.statusSubtext)
          ),
          React.createElement('div', { className: "refunds-page__steps" },
            refundStatusSteps.map(function (step, i) {
              return (
                React.createElement('div', { key: i, className: "refunds-page__step" },
                  React.createElement('span', { className: "refunds-page__step-number" }, step.step),
                  React.createElement('div', { className: "refunds-page__step-content" },
                    React.createElement('h3', { className: "refunds-page__step-title" }, step.title),
                    React.createElement('p', { className: "refunds-page__step-desc" }, step.description)
                  ),
                  i < refundStatusSteps.length - 1 && (
                    React.createElement('div', { className: "refunds-page__step-connector", "aria-hidden": "true" })
                  )
                )
              );
            })
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Eligibility */
      React.createElement('section', { className: "refunds-page__eligibility", "aria-labelledby": "eligibility-heading" },
        React.createElement(Container, null,
          React.createElement('div', { className: "refunds-page__section-header" },
            React.createElement('h2', { id: "eligibility-heading", className: "refunds-page__heading" },
              refundsPageContent.eligibilityHeading
            ),
            React.createElement('p', { className: "refunds-page__subtext" }, refundsPageContent.eligibilitySubtext)
          ),
          React.createElement('div', { className: "refunds-page__eligibility-grid" },
            React.createElement('div', { className: "refunds-page__eligibility-col" },
              React.createElement('h3', { className: "refunds-page__eligibility-col-title refunds-page__eligibility-col-title--eligible" },
                React.createElement(CheckCircle, { size: 20, weight: "fill" }), " Eligible for refund"
              ),
              React.createElement('ul', { className: "refunds-page__eligibility-list", role: "list" },
                refundEligibility.filter(function (e) { return e.eligible; }).map(function (item, i) {
                  return (
                    React.createElement('li', { key: i, className: "refunds-page__eligibility-item refunds-page__eligibility-item--eligible" },
                      React.createElement(CheckCircle, { size: 16, weight: "fill", className: "refunds-page__eligibility-icon--eligible" }),
                      React.createElement('span', null, item.text)
                    )
                  );
                })
              )
            ),
            React.createElement('div', { className: "refunds-page__eligibility-col" },
              React.createElement('h3', { className: "refunds-page__eligibility-col-title refunds-page__eligibility-col-title--ineligible" },
                React.createElement(XCircle, { size: 20, weight: "fill" }), " Not eligible"
              ),
              React.createElement('ul', { className: "refunds-page__eligibility-list", role: "list" },
                refundEligibility.filter(function (e) { return !e.eligible; }).map(function (item, i) {
                  return (
                    React.createElement('li', { key: i, className: "refunds-page__eligibility-item refunds-page__eligibility-item--ineligible" },
                      React.createElement(XCircle, { size: 16, weight: "fill", className: "refunds-page__eligibility-icon--ineligible" }),
                      React.createElement('span', null, item.text)
                    )
                  );
                })
              )
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* FAQ Accordion */
      React.createElement('section', { className: "refunds-page__faq", "aria-labelledby": "faq-heading" },
        React.createElement(Container, null,
          React.createElement('div', { className: "refunds-page__section-header" },
            React.createElement('h2', { id: "faq-heading", className: "refunds-page__heading" },
              refundsPageContent.faqHeading
            ),
            React.createElement('p', { className: "refunds-page__subtext" }, refundsPageContent.faqSubtext)
          ),
          React.createElement('div', { className: "refunds-page__faq-list", role: "list" },
            refundFAQs.map(function (faq, i) {
              var isOpen = openFAQ === i;
              return (
                React.createElement('div', {
                  key: i,
                  className: 'refunds-page__faq-item' + (isOpen ? ' refunds-page__faq-item--open' : ''),
                  role: "listitem"
                },
                  React.createElement('button', {
                    type: "button",
                    className: "refunds-page__faq-trigger",
                    "aria-expanded": isOpen,
                    "aria-controls": 'faq-panel-' + i,
                    onClick: toggleFAQ(i)
                  },
                    React.createElement('span', { className: "refunds-page__faq-question" }, faq.question),
                    React.createElement(CaretDown, {
                      size: 18,
                      weight: "bold",
                      className: 'refunds-page__faq-chevron' + (isOpen ? ' refunds-page__faq-chevron--open' : '')
                    })
                  ),
                  isOpen && (
                    React.createElement('div', { id: 'faq-panel-' + i, className: "refunds-page__faq-answer", role: "region" },
                      React.createElement('p', null, faq.answer)
                    )
                  )
                )
              );
            })
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      /* CTA */
      React.createElement('section', { className: "refunds-page__cta", "aria-labelledby": "cta-heading" },
        React.createElement(Container, null,
          React.createElement('div', { className: "refunds-page__cta-content" },
            React.createElement('h2', { id: "cta-heading", className: "refunds-page__cta-heading" }, refundsPageContent.ctaHeading),
            React.createElement('p', { className: "refunds-page__cta-text" }, refundsPageContent.ctaText),
            React.createElement('div', { className: "refunds-page__cta-actions" },
              React.createElement(Link, { to: "/returns", className: "refunds-page__cta-btn--primary" },
                refundsPageContent.ctaPrimary
              ),
              React.createElement(Link, { to: "/contact", className: "refunds-page__cta-btn--secondary" },
                refundsPageContent.ctaSecondary
              )
            )
          )
        )
      )
    )
  );
}
