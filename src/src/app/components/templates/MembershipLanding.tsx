import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Crown, Lock, Gift, Check, ArrowRight } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as ReducedMotionModule from '../../hooks/usePrefersReducedMotion';
import * as HeroDataModule from '../../data/heroData';
import * as MembershipsDataModule from '../../data/memberships';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var usePrefersReducedMotion = ReducedMotionModule.usePrefersReducedMotion;
var membershipHero = HeroDataModule.membershipHero;
var membershipPlans = MembershipsDataModule.membershipPlans;
var memberBenefits = MembershipsDataModule.memberBenefits;
var membershipFAQs = MembershipsDataModule.membershipFAQs;
var membershipStats = MembershipsDataModule.membershipStats;

/**
 * MembershipLanding Template
 *
 * Marketing landing page for WooCommerce Memberships.
 *
 * @template
 */
export function MembershipLanding() {
  var _bp = React.useState('annual');
  var billingPeriod = _bp[0];
  var setBillingPeriod = _bp[1];
  var prefersReduced = usePrefersReducedMotion();

  return (
    React.createElement(Layout, null,
      React.createElement('div', { className: "page-memberships" },

        /* Hero (shared FunkyHero) */
        React.createElement(FunkyHero, { config: membershipHero }),

        /* Stats Bar */
        React.createElement('div', { className: "wp-sales-proof", "aria-label": "Membership statistics" },
          React.createElement(Container, null,
            React.createElement('div', { className: "wp-sales-proof__grid" },
              membershipStats.map(function(stat, index) {
                return (
                  React.createElement('div', { key: index, className: "wp-sales-stat" },
                    React.createElement('div', { className: "wp-sales-stat__value" }, stat.value),
                    React.createElement('p', { className: "wp-sales-stat__label" }, React.createElement('small', null, stat.label))
                  )
                );
              })
            )
          )
        ),

        /* Benefits */
        React.createElement('section', { id: "benefits", className: "commerce-benefits", "aria-labelledby": "mem-benefits-heading" },
          React.createElement(Container, null,
            React.createElement('div', { className: "commerce-benefits__header" },
              React.createElement('h2', { id: "mem-benefits-heading" }, "Member-only benefits"),
              React.createElement('p', { className: "commerce-hero__subtitle" },
                "Your membership unlocks a world of exclusive perks designed to enhance every shopping experience."
              )
            ),

            React.createElement('div', { className: "commerce-benefits__grid" },
              memberBenefits.map(function(benefit, index) {
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
        React.createElement('section', { id: "membership-tiers", className: "commerce-pricing", "aria-labelledby": "mem-pricing-heading" },
          React.createElement(Container, null,
            React.createElement('h2', { id: "mem-pricing-heading", className: "commerce-pricing__heading" }, "Choose your membership level"),
            React.createElement('p', { className: "commerce-pricing__subtitle" },
              "All memberships include core benefits. Select the tier that matches your shopping frequency."
            ),

            /* Billing toggle */
            React.createElement('div', { className: "commerce-pricing__toggle" },
              React.createElement('button', {
                onClick: function() { setBillingPeriod('monthly'); },
                className: 'wp-sales-btn' + (billingPeriod === 'monthly' ? ' wp-sales-btn--primary' : ' wp-sales-btn--outline'),
                "aria-pressed": billingPeriod === 'monthly'
              }, "Monthly"),
              React.createElement('button', {
                onClick: function() { setBillingPeriod('annual'); },
                className: 'wp-sales-btn' + (billingPeriod === 'annual' ? ' wp-sales-btn--primary' : ' wp-sales-btn--outline'),
                "aria-pressed": billingPeriod === 'annual'
              }, "Annual (save 20\u00A0%)")
            ),

            React.createElement('div', { className: "commerce-pricing__grid" },
              membershipPlans.map(function(plan) {
                var price = billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice;
                var isPopular = plan.badge === 'Most Popular';

                return (
                  React.createElement('div', {
                    key: plan.id,
                    className: 'commerce-plan-card' + (isPopular ? ' commerce-plan-card--popular' : '')
                  },
                    isPopular && (
                      React.createElement('span', { className: "commerce-plan-badge" }, "Most popular")
                    ),

                    React.createElement('h3', { className: "commerce-plan-card__name" }, plan.name),
                    React.createElement('p', { className: "commerce-plan-card__desc" }, plan.description),

                    React.createElement('div', { className: "commerce-plan-card__price" },
                      React.createElement('span', { className: "commerce-plan-card__amount" }, "\u00A3" + price),
                      React.createElement('span', { className: "commerce-plan-card__period" },
                        "/ " + (billingPeriod === 'annual' ? 'year' : 'month')
                      )
                    ),

                    React.createElement('ul', { className: "commerce-plan-features" },
                      plan.features.map(function(feature, i) {
                        return (
                          React.createElement('li', { key: i, className: "commerce-plan-feature" },
                            React.createElement(Check, { size: 18, className: "commerce-plan-feature__check", "aria-hidden": "true" }),
                            React.createElement('span', null, feature.text)
                          )
                        );
                      })
                    ),

                    React.createElement(Link, {
                      to: '/membership/' + plan.id,
                      className: 'commerce-plan-btn' + (isPopular ? ' commerce-plan-btn--primary' : '')
                    }, "Join " + plan.name)
                  )
                );
              })
            ),

            React.createElement('p', { className: "commerce-pricing__subtitle commerce-pricing__footer" },
              "Need help choosing? ",
              React.createElement(Link, { to: "/contact", className: "text-neon-cyan hover-text-neon-pink" }, "Chat with our team")
            )
          )
        ),

        /* ROI Calculator */
        React.createElement('section', { className: "commerce-roi", "aria-labelledby": "mem-roi-heading" },
          React.createElement(Container, null,
            React.createElement('div', { className: "commerce-roi__card" },
              React.createElement('div', { className: "commerce-roi__icon" },
                React.createElement(Gift, { size: 32, className: "commerce-roi__icon-svg", "aria-hidden": "true" })
              ),
              React.createElement('h2', { id: "mem-roi-heading", className: "commerce-roi__heading" }, "Your membership pays for itself"),
              React.createElement('p', { className: "commerce-roi__text" }, "See how much you could save with a Premium membership"),

              React.createElement('div', { className: "commerce-roi__stats" },
                React.createElement('div', { className: "commerce-roi__stat" },
                  React.createElement('p', { className: "commerce-roi__stat-label" }, "Average monthly spend"),
                  React.createElement('div', { className: "commerce-roi__stat-value" }, "\u00A3200")
                ),
                React.createElement('div', { className: "commerce-roi__stat" },
                  React.createElement('p', { className: "commerce-roi__stat-label" }, "Monthly savings (20\u00A0%)"),
                  React.createElement('div', { className: "commerce-roi__stat-value" }, "\u00A340")
                ),
                React.createElement('div', { className: "commerce-roi__stat" },
                  React.createElement('p', { className: "commerce-roi__stat-label" }, "Annual savings"),
                  React.createElement('div', { className: "commerce-roi__stat-value" }, "\u00A3480")
                )
              ),

              React.createElement('p', { className: "commerce-roi__text commerce-roi__text--spaced" },
                "Premium membership costs just \u00A319.99/month. You save \u00A320+ every month!"
              ),
              React.createElement('a', { href: "#membership-tiers", className: "commerce-cta__btn" },
                "Start saving today",
                React.createElement(ArrowRight, { size: 18 })
              )
            )
          )
        ),

        /* FAQ */
        React.createElement('section', { className: "wp-sales-section", "aria-labelledby": "mem-faq-heading" },
          React.createElement(Container, null,
            React.createElement('div', { className: "wp-sales-faq__wrapper" },
              React.createElement('div', { className: "wp-sales-faq__header" },
                React.createElement('h2', { id: "mem-faq-heading", className: "wp-sales-faq__title" }, "Membership questions"),
                React.createElement('p', { className: "wp-sales-faq__subtitle" }, "Everything you need to know about becoming a member.")
              ),

              React.createElement(FaqAccordion, { items: membershipFAQs })
            )
          )
        ),

        /* Final CTA */
        React.createElement('section', { className: "commerce-cta", "aria-label": "Membership call to action" },
          React.createElement('div', { className: "commerce-cta__bg", "aria-hidden": "true" }),
          !prefersReduced && (
            React.createElement(React.Fragment, null,
              React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--1", "aria-hidden": "true" }),
              React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--2", "aria-hidden": "true" })
            )
          ),

          React.createElement(Container, null,
            React.createElement('div', { className: "commerce-cta__content" },
              React.createElement(Crown, { size: 48, "aria-hidden": "true", className: "commerce-cta__icon" }),
              React.createElement('h2', { className: "commerce-cta__title" }, "Ready to join our exclusive community?"),
              React.createElement('p', { className: "commerce-cta__text" },
                "Start saving today with up to 30\u00A0% off every purchase. Cancel anytime, no commitment."
              ),
              React.createElement('a', { href: "#membership-tiers", className: "commerce-cta__btn" },
                "Become a member",
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
  var _state = React.useState(null);
  var openIndex = _state[0];
  var setOpenIndex = _state[1];

  return (
    React.createElement('div', { className: "wp-sales-faq__list" },
      items.map(function(item, index) {
        return (
          React.createElement('div', { key: item.id, className: "wp-sales-faq-item" },
            React.createElement('button', {
              className: "wp-sales-faq-trigger",
              onClick: function() { setOpenIndex(openIndex === index ? null : index); },
              "aria-expanded": openIndex === index,
              "aria-controls": 'mem-faq-panel-' + item.id
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
                id: 'mem-faq-panel-' + item.id,
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
