import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Crown, Lock, Gift, Check, Star } from '@phosphor-icons/react';

var useState = React.useState;
var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as HeadingModule from '../common/Heading';
import * as TestimonialCarouselModule from '../patterns/TestimonialCarousel';
import * as FAQSectionModule from '../patterns/FAQSection';
import * as TrustBandModule from '../patterns/TrustBand';

import * as MembershipsDataModule from '../../data/memberships';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var Heading = HeadingModule.Heading;
var TestimonialCarousel = TestimonialCarouselModule.TestimonialCarousel;
var FAQSection = FAQSectionModule.FAQSection;
var TrustBand = TrustBandModule.TrustBand;
var membershipPlans = MembershipsDataModule.membershipPlans;
var memberBenefits = MembershipsDataModule.memberBenefits;
var memberTestimonials = MembershipsDataModule.memberTestimonials;
var membershipFAQs = MembershipsDataModule.membershipFAQs;

/**
 * SingleMembership Template — Funky Redesign (Phase 9)
 */
export function SingleMembership() {
  var planState = React.useState('premium');
  var selectedPlan = planState[0];
  var setSelectedPlan = planState[1];
  var billingState = React.useState('annual');
  var billingPeriod = billingState[0];
  var setBillingPeriod = billingState[1];
  
  var currentPlan = membershipPlans.find(function(p) { return p.id === selectedPlan; }) || membershipPlans[1];
  var currentPrice = billingPeriod === 'annual' ? currentPlan.annualPrice : currentPlan.monthlyPrice;

  var transformedTestimonials = memberTestimonials.map(function(t) { return {
    id: t.id,
    quote: t.quote,
    author: t.name,
    role: t.tier + ' - Since ' + t.memberSince,
    avatar: t.image,
    rating: t.rating,
  }; });

  var transformedFAQs = membershipFAQs.map(function(f) { return {
    question: f.question,
    answer: f.answer,
  }; });

  return (
    React.createElement(Layout, null,
      React.createElement(Container, { className: "wp-product-page" },
        /* Breadcrumbs */
        React.createElement('nav', { className: "wp-breadcrumbs", "aria-label": "Breadcrumb" },
          React.createElement('ol', { className: "wp-breadcrumbs__list" },
            React.createElement('li', null, React.createElement(Link, { to: "/" }, "Home")),
            React.createElement('li', { className: "wp-breadcrumbs__separator" }, "/"),
            React.createElement('li', null, React.createElement(Link, { to: "/membership" }, "Membership")),
            React.createElement('li', { className: "wp-breadcrumbs__separator" }, "/"),
            React.createElement('li', { className: "wp-breadcrumbs__current" }, currentPlan.name + " Membership")
          )
        ),

        React.createElement('div', { className: "wp-product-layout" },
          /* Left: Plan Selection */
          React.createElement('div', { className: "wp-product-info" },
            React.createElement('div', { className: "wp-badge-pill" },
              React.createElement(Crown, { size: 14, "aria-hidden": "true" }),
              React.createElement(Typography, { variant: "caption", className: "wp-badge-pill__text" }, "Exclusive Membership")
            ),

            React.createElement(Heading, { level: 1, className: "wp-product-title" }, currentPlan.name + " Membership"),

            React.createElement(Typography, { className: "wp-product-description" },
              currentPlan.description + ". Get " + currentPlan.discount + " off every purchase, exclusive products, and VIP perks that pay for themselves."
            ),

            /* Billing Period Toggle */
            React.createElement('div', { className: "wp-billing-toggle" },
              React.createElement('div', { className: "wp-billing-toggle__wrapper" },
                React.createElement('button', {
                  onClick: function() { setBillingPeriod('monthly'); },
                  className: 'wp-billing-toggle__btn' + (billingPeriod === 'monthly' ? ' wp-billing-toggle__btn--active' : '')
                },
                  React.createElement(Typography, { className: "wp-billing-toggle__label" }, "Monthly")
                ),
                React.createElement('button', {
                  onClick: function() { setBillingPeriod('annual'); },
                  className: 'wp-billing-toggle__btn' + (billingPeriod === 'annual' ? ' wp-billing-toggle__btn--active' : '')
                },
                  React.createElement(Typography, { className: "wp-billing-toggle__label" }, "Annual"),
                  React.createElement('span', { className: "wp-billing-toggle__badge" }, "Save 20%")
                )
              )
            ),

            /* Plan Selection */
            React.createElement('div', { className: "wp-plan-selector" },
              membershipPlans.map(function(plan) {
                var price = billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice;
                return (
                  React.createElement('button', {
                    key: plan.id,
                    onClick: function() { setSelectedPlan(plan.id); },
                    className: 'wp-plan-option' + (selectedPlan === plan.id ? ' wp-plan-option--active' : '')
                  },
                    React.createElement('div', { className: "wp-plan-option__content" },
                      React.createElement('div', { className: 'wp-radio-indicator' + (selectedPlan === plan.id ? ' wp-radio-indicator--checked' : '') },
                        selectedPlan === plan.id && React.createElement('div', { className: "wp-radio-indicator__dot" })
                      ),
                      
                      React.createElement('div', { className: "wp-plan-option__details" },
                        React.createElement('div', { className: "wp-plan-option__header" },
                          React.createElement(Typography, { className: "wp-plan-option__name" }, plan.name),
                          plan.badge && (
                            React.createElement('span', { className: "wp-plan-option__badge" }, plan.badge)
                          )
                        ),
                        React.createElement(Typography, { variant: "caption", className: "wp-plan-option__desc" }, plan.discount + " off everything")
                      )
                    ),
                    
                    React.createElement('div', { className: "wp-plan-option__pricing" },
                      React.createElement(Typography, { className: "wp-plan-option__price" }, "\u00A3" + price),
                      React.createElement(Typography, { variant: "caption", className: "wp-plan-option__interval" },
                        "/" + (billingPeriod === 'annual' ? 'year' : 'month')
                      ),
                      billingPeriod === 'annual' && (
                        React.createElement(Typography, { variant: "caption", className: "wp-plan-option__savings" },
                          "Save \u00A3" + plan.annualSavings
                        )
                      )
                    )
                  )
                );
              })
            ),

            /* Add to Cart */
            React.createElement('button', { className: "wp-button-primary wp-button-full", type: "button" },
              "Become a " + currentPlan.name + " Member"
            ),

            React.createElement(Typography, { variant: "caption", className: "wp-guarantee-text" },
              React.createElement(Lock, { size: 14, className: "wp-icon-inline", "aria-hidden": "true" }),
              "30-day money-back guarantee \u2022 Cancel anytime"
            ),

            /* Value Calculator */
            React.createElement('div', { className: "wp-roi-card" },
              React.createElement('div', { className: "wp-roi-card__header" },
                React.createElement('div', { className: "wp-roi-card__icon-wrapper" },
                  React.createElement(Gift, { size: 20, className: "wp-icon-white", "aria-hidden": "true" })
                ),
                React.createElement('div', null,
                  React.createElement(Typography, { className: "wp-roi-card__title" }, "Your Membership Pays for Itself!"),
                  React.createElement(Typography, { variant: "caption", className: "wp-roi-card__subtitle" }, "Based on average monthly spend of \u00A3200")
                )
              ),
              
              React.createElement('div', { className: "wp-roi-card__content" },
                React.createElement('div', { className: "wp-roi-row" },
                  React.createElement('span', null, "Monthly savings (" + currentPlan.discount + " off):"),
                  React.createElement('span', { className: "wp-roi-value" }, "\u00A3" + (200 * parseFloat(currentPlan.discount) / 100).toFixed(2))
                ),
                React.createElement('div', { className: "wp-roi-row" },
                  React.createElement('span', null, "Membership cost:"),
                  React.createElement('span', { className: "wp-roi-value" }, "-\u00A3" + currentPlan.monthlyPrice)
                ),
                React.createElement('div', { className: "wp-roi-row wp-roi-row--total" },
                  React.createElement('span', null, "Net monthly savings:"),
                  React.createElement('span', { className: "wp-roi-value--total" },
                    "\u00A3" + ((200 * parseFloat(currentPlan.discount) / 100) - currentPlan.monthlyPrice).toFixed(2)
                  )
                )
              )
            )
          ),

          /* Right: Benefits & Features */
          React.createElement('div', { className: "wp-product-features" },
            React.createElement('div', { className: "wp-features-list-wrapper" },
              React.createElement(Heading, { level: 2, className: "wp-section-heading" }, "What's Included"),
              
              React.createElement('div', { className: "wp-features-list" },
                currentPlan.features.map(function(feature, index) { return (
                  React.createElement('div', { key: index, className: "wp-feature-item" },
                    React.createElement('div', { className: "wp-feature-item__icon" },
                      React.createElement(Check, { size: 16, className: "wp-icon-primary", "aria-hidden": "true" })
                    ),
                    React.createElement('div', null,
                      React.createElement(Typography, { className: "wp-feature-item__title" }, feature.text),
                      feature.description && (
                        React.createElement(Typography, { variant: "caption", className: "wp-feature-item__desc" }, feature.description)
                      )
                    )
                  )
                ); })
              )
            ),

            React.createElement('div', { className: "wp-perks-card" },
              React.createElement('div', { className: "wp-perks-card__header" },
                React.createElement(Crown, { size: 20, className: "wp-icon-primary", "aria-hidden": "true" }),
                React.createElement(Heading, { level: 3 }, "Exclusive Perks")
              ),
              
              React.createElement('ul', { className: "wp-perks-list" },
                currentPlan.exclusivePerks.map(function(perk, index) { return (
                  React.createElement('li', { key: index, className: "wp-perks-item" },
                    React.createElement(Star, { size: 16, className: "wp-icon-primary", "aria-hidden": "true" }),
                    React.createElement(Typography, { className: "wp-perks-text" }, perk)
                  )
                ); })
              )
            )
          )
        ),

        /* Member Benefits */
        React.createElement('section', { className: "wp-section-benefits" },
          React.createElement('div', { className: "wp-section-header" },
            React.createElement(Heading, { level: 2, className: "wp-section-title" }, "Why Members Love Us"),
            React.createElement(Typography, { className: "wp-section-subtitle" }, "More than just discounts - it's a complete VIP experience.")
          ),

          React.createElement('div', { className: "wp-grid-4" },
            memberBenefits.map(function(benefit, index) {
              var Icon = benefit.icon;
              return (
                React.createElement('div', { key: index, className: "wp-benefit-item" },
                  React.createElement('div', { className: 'wp-benefit-icon ' + benefit.bg },
                    React.createElement(Icon, { size: 32, className: benefit.color, "aria-hidden": "true" })
                  ),
                  React.createElement(Heading, { level: 3, className: "wp-benefit-title" }, benefit.title),
                  React.createElement(Typography, { className: "wp-benefit-desc" }, benefit.description)
                )
              );
            })
          )
        ),

        /* Testimonials */
        React.createElement('section', { className: "wp-section-testimonials" },
          React.createElement(Heading, { level: 2, className: "wp-section-heading" }, "Member Success Stories"),
          React.createElement(TestimonialCarousel, { testimonials: transformedTestimonials })
        ),

        /* FAQ */
        React.createElement('section', { className: "wp-section-faq" },
          React.createElement(Heading, { level: 2, className: "wp-section-heading" }, "Membership Questions"),
          React.createElement(FAQSection, { items: transformedFAQs })
        ),

        /* Trust Band */
        React.createElement('section', { className: "wp-section-trust" },
          React.createElement(TrustBand, null)
        )
      )
    )
  );
}
