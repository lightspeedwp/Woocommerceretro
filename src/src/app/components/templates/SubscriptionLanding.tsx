import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Check, Gift, ArrowRight, Lightning as Zap } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as ReducedMotionModule from '../../hooks/usePrefersReducedMotion';
import * as HeroDataModule from '../../data/heroData';
import * as SubscriptionsDataModule from '../../data/subscriptions';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var usePrefersReducedMotion = ReducedMotionModule.usePrefersReducedMotion;
var subscriptionHero = HeroDataModule.subscriptionHero;
var subscriptionPlans = SubscriptionsDataModule.subscriptionPlans;
var subscriptionBenefits = SubscriptionsDataModule.subscriptionBenefits;
var subscriptionFAQs = SubscriptionsDataModule.subscriptionFAQs;
var subscriptionPageContent = SubscriptionsDataModule.subscriptionPageContent;

/**
 * SubscriptionLanding Template
 *
 * Marketing landing page for WooCommerce Subscriptions.
 *
 * @template
 */
export function SubscriptionLanding() {
  var landing = subscriptionPageContent.landing;
  var prefersReduced = usePrefersReducedMotion();

  return (
    React.createElement(Layout, null,
      React.createElement('div', { className: "page-subscriptions" },
        /* Hero (shared FunkyHero) */
        React.createElement(FunkyHero, { config: subscriptionHero }),

        /* Benefits */
        React.createElement('section', { id: "benefits", className: "commerce-benefits", "aria-labelledby": "benefits-heading" },
          React.createElement(Container, null,
            React.createElement('div', { className: "commerce-benefits__header" },
              React.createElement('h2', { id: "benefits-heading" }, landing.benefitsHeading),
              React.createElement('p', { className: "commerce-hero__subtitle wp-mb-0" }, landing.benefitsText)
            ),

            React.createElement('div', { className: "commerce-benefits__grid" },
              subscriptionBenefits.map(function(benefit, index) {
                var Icon = benefit.icon;
                return (
                  React.createElement('div', { key: index, className: "commerce-benefit-card" },
                    React.createElement('div', { className: "commerce-benefit-icon" },
                      React.createElement(Icon, { size: 28, "aria-hidden": "true" })
                    ),
                    React.createElement('h3', { className: "commerce-benefit-card__title" }, benefit.title),
                    React.createElement('p', { className: "commerce-benefit-card__text" }, benefit.description)
                  )
                );
              })
            )
          )
        ),

        /* Pricing */
        React.createElement('section', { id: "pricing", className: "commerce-pricing", "aria-labelledby": "pricing-heading" },
          React.createElement(Container, null,
            React.createElement('h2', { id: "pricing-heading", className: "commerce-pricing__heading" }, landing.pricingHeading),
            React.createElement('p', { className: "commerce-pricing__subtitle" }, landing.pricingSubheading),

            React.createElement('div', { className: "commerce-pricing__grid" },
              subscriptionPlans.map(function(plan) { return (
                React.createElement('div', {
                  key: plan.id,
                  className: 'commerce-plan-card' + (plan.popular ? ' commerce-plan-card--popular' : '')
                },
                  plan.popular && (
                    React.createElement('span', { className: "commerce-plan-badge" }, "Most popular")
                  ),

                  React.createElement('h3', { className: "commerce-plan-card__name" }, plan.name),
                  React.createElement('p', { className: "commerce-plan-card__desc" }, plan.description),

                  React.createElement('div', { className: "commerce-plan-card__price" },
                    React.createElement('span', { className: "commerce-plan-card__amount" }, "$" + plan.price),
                    React.createElement('span', { className: "commerce-plan-card__period" }, "/ " + plan.intervalLabel)
                  ),

                  React.createElement('ul', { className: "commerce-plan-features" },
                    plan.features.map(function(feature, i) { return (
                      React.createElement('li', { key: i, className: "commerce-plan-feature" },
                        React.createElement(Check, { size: 18, className: "commerce-plan-feature__check", "aria-hidden": "true" }),
                        React.createElement('span', null, feature)
                      )
                    ); })
                  ),

                  React.createElement(Link, {
                    to: '/product/' + plan.id + '-subscription',
                    className: 'commerce-plan-btn' + (plan.popular ? ' commerce-plan-btn--primary' : '')
                  }, "Subscribe now")
                )
              ); })
            ),

            React.createElement('p', { className: "commerce-pricing__subtitle commerce-pricing__footer" },
              "Not sure? ",
              React.createElement(Link, { to: "/contact", className: "text-neon-cyan hover-text-neon-pink" }, "Contact us"),
              " for a personalised recommendation."
            )
          )
        ),

        /* FAQ */
        React.createElement('section', { className: "wp-sales-section", "aria-labelledby": "sub-faq-heading" },
          React.createElement(Container, null,
            React.createElement('div', { className: "wp-sales-faq__wrapper" },
              React.createElement('div', { className: "wp-sales-faq__header" },
                React.createElement('h2', { id: "sub-faq-heading", className: "wp-sales-faq__title" }, landing.faqHeading),
                React.createElement('p', { className: "wp-sales-faq__subtitle" }, landing.faqText)
              ),

              React.createElement(FaqAccordion, { items: subscriptionFAQs })
            )
          )
        ),

        /* Final CTA */
        React.createElement('section', { className: "commerce-cta", "aria-label": "Subscribe call to action" },
          React.createElement('div', { className: "commerce-cta__bg", "aria-hidden": "true" }),
          !prefersReduced && (
            React.createElement(React.Fragment, null,
              React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--1", "aria-hidden": "true" }),
              React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--2", "aria-hidden": "true" })
            )
          ),

          React.createElement(Container, null,
            React.createElement('div', { className: "commerce-cta__content" },
              React.createElement('h2', { className: "commerce-cta__title" }, landing.ctaHeading),
              React.createElement('p', { className: "commerce-cta__text" }, landing.ctaText),
              React.createElement('a', { href: "#pricing", className: "commerce-cta__btn" },
                landing.ctaButton,
                React.createElement(ArrowRight, { size: 18 })
              )
            )
          )
        )
      )
    )
  );
}

/* Private FAQ Accordion */

function FaqAccordion(props) {
  var items = props.items;
  var stateResult = React.useState(0);
  var openIndex = stateResult[0];
  var setOpenIndex = stateResult[1];

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    React.createElement('div', { className: "wp-sales-faq__list" },
      items.map(function(item, index) {
        return (
          React.createElement('div', { key: item.id, className: "wp-sales-faq-item" },
            React.createElement('button', {
              className: "wp-sales-faq-trigger",
              onClick: function() { handleToggle(index); },
              "aria-expanded": openIndex === index,
              "aria-controls": 'faq-panel-' + item.id
            },
              React.createElement('span', { className: "wp-sales-faq-question" }, item.question),
              React.createElement('svg', {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: 'wp-sales-faq-chevron' + (openIndex === index ? ' wp-rotate-180' : ''),
                "aria-hidden": "true"
              },
                React.createElement('polyline', { points: "6 9 12 15 18 9" })
              )
            ),
            openIndex === index && (
              React.createElement('div', {
                id: 'faq-panel-' + item.id,
                className: "wp-sales-faq-answer",
                role: "region"
              },
                React.createElement('p', null, item.answer)
              )
            )
          )
        );
      })
    )
  );
}
