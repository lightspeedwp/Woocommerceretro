import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Package, Star, Check } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as HeadingModule from '../common/Heading';
import * as FAQSectionModule from '../patterns/FAQSection';
import * as TrustBandModule from '../patterns/TrustBand';
import * as FeaturesComparisonTableModule from '../patterns/FeaturesComparisonTable';
import * as SubscriptionsDataModule from '../../data/subscriptions';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var Heading = HeadingModule.Heading;
var FAQSection = FAQSectionModule.FAQSection;
var TrustBand = TrustBandModule.TrustBand;
var FeaturesComparisonTable = FeaturesComparisonTableModule.FeaturesComparisonTable;
var subscriptionPlans = SubscriptionsDataModule.subscriptionPlans;
var subscriptionFeatures = SubscriptionsDataModule.subscriptionFeatures;
var subscriptionBenefits = SubscriptionsDataModule.subscriptionBenefits;
var subscriptionFAQs = SubscriptionsDataModule.subscriptionFAQs;
var subscriptionProductImages = SubscriptionsDataModule.subscriptionProductImages;
var subscriptionPageContent = SubscriptionsDataModule.subscriptionPageContent;

/**
 * SingleSubscription Template — Funky Redesign (Phase 9)
 * 
 * Single product page for subscription products using WooCommerce Subscriptions.
 * 
 * @template
 */
export function SingleSubscription() {
  var intervalState = React.useState('quarterly');
  var selectedInterval = intervalState[0];
  var setSelectedInterval = intervalState[1];
  var single = subscriptionPageContent.single;
  
  var currentInterval = subscriptionPlans.find(function(p) { return p.id === selectedInterval; }) || subscriptionPlans[1];

  var transformedFAQs = subscriptionFAQs.map(function(f) { return {
    question: f.question,
    answer: f.answer,
  }; });

  var transformedFeatures = subscriptionFeatures.map(function(f) { return {
    name: f.name,
    description: f.description,
    values: [
      f.availability.monthly,
      f.availability.quarterly,
      f.availability.annual,
    ],
  }; });

  return (
    React.createElement(Layout, null,
      React.createElement(Container, { className: "wp-product-page" },
        /* Breadcrumbs */
        React.createElement('nav', { className: "wp-breadcrumbs", "aria-label": "Breadcrumb" },
          React.createElement('ol', { className: "wp-breadcrumbs__list" },
            React.createElement('li', null, React.createElement(Link, { to: "/" }, "Home")),
            React.createElement('li', { className: "wp-breadcrumbs__separator" }, "/"),
            React.createElement('li', null, React.createElement(Link, { to: "/subscriptions" }, "Subscriptions")),
            React.createElement('li', { className: "wp-breadcrumbs__separator" }, "/"),
            React.createElement('li', { className: "wp-breadcrumbs__current" }, single.title)
          )
        ),

        React.createElement('div', { className: "wp-product-layout" },
          /* Left: Product Image Gallery */
          React.createElement('div', { className: "wp-product-gallery" },
            React.createElement('div', { className: "wp-product-gallery__main" },
              React.createElement('img', {
                src: subscriptionProductImages.main,
                alt: single.title,
                className: "wp-product-gallery__img"
              })
            ),
            
            React.createElement('div', { className: "wp-product-gallery__thumbs" },
              subscriptionProductImages.gallery.map(function(src, index) { return (
                React.createElement('button', {
                  key: index,
                  className: "wp-product-gallery__thumb-btn",
                  "aria-label": 'View product image ' + (index + 1)
                },
                  React.createElement('img', { src: src, alt: "", className: "wp-product-gallery__thumb-img" })
                )
              ); })
            )
          ),

          /* Right: Product Info & Subscription Options */
          React.createElement('div', { className: "wp-product-info" },
            React.createElement('div', { className: "wp-badge-pill" },
              React.createElement(Package, { size: 14, "aria-hidden": "true" }),
              React.createElement(Typography, { variant: "caption", className: "wp-badge-pill__text" }, single.badge)
            ),

            React.createElement(Heading, { level: 1, className: "wp-product-title" }, single.title),

            React.createElement('div', { className: "wp-product-reviews" },
              React.createElement('div', { className: "wp-rating-stars", "aria-label": "5 out of 5 stars" },
                [1, 2, 3, 4, 5].map(function(star) { return (
                  React.createElement(Star, { key: star, size: 16, fill: "currentColor", className: "wp-icon-star", "aria-hidden": "true" })
                ); })
              ),
              React.createElement(Typography, { className: "wp-review-count" }, single.rating)
            ),

            React.createElement(Typography, { className: "wp-product-description" }, single.description),

            /* Billing Interval Selection */
            React.createElement('div', { className: "wp-plan-selector-container" },
              React.createElement('label', { className: "wp-field-label" },
                React.createElement(Typography, { className: "wp-label-text" }, "Choose Your Delivery Frequency:")
              ),
              
              React.createElement('div', { className: "wp-plan-list" },
                subscriptionPlans.map(function(interval) { return (
                  React.createElement('button', {
                    key: interval.id,
                    onClick: function() { setSelectedInterval(interval.id); },
                    className: 'wp-plan-option' + (selectedInterval === interval.id ? ' wp-plan-option--active' : ''),
                    "aria-pressed": selectedInterval === interval.id
                  },
                    React.createElement('div', { className: "wp-plan-option__content" },
                      React.createElement('div', { className: 'wp-radio-indicator' + (selectedInterval === interval.id ? ' wp-radio-indicator--checked' : '') },
                        selectedInterval === interval.id && React.createElement('div', { className: "wp-radio-indicator__dot" })
                      ),
                      
                      React.createElement('div', { className: "wp-plan-option__details" },
                        React.createElement('div', { className: "wp-plan-option__header" },
                          React.createElement(Typography, { className: "wp-plan-option__name" }, interval.name),
                          interval.badge && (
                            React.createElement('span', { className: "wp-plan-option__badge" }, interval.badge)
                          )
                        ),
                        React.createElement(Typography, { variant: "caption", className: "wp-plan-option__desc" },
                          (interval.trialDays || 7) + " day free trial - Cancel anytime"
                        )
                      )
                    ),
                    
                    React.createElement('div', { className: "wp-plan-option__pricing" },
                      React.createElement(Typography, { className: "wp-plan-option__price" }, "\u00A3" + interval.price),
                      React.createElement(Typography, { variant: "caption", className: "wp-plan-option__interval" }, "/ " + interval.interval),
                      interval.savings && (
                        React.createElement(Typography, { variant: "caption", className: "wp-plan-option__savings" }, "Save \u00A3" + interval.savings)
                      )
                    )
                  )
                ); })
              )
            ),

            /* CTA */
            React.createElement('button', { className: "wp-button-primary wp-button-full", type: "button" },
              "Start " + currentInterval.trialDays + "-Day Free Trial"
            ),

            React.createElement(Typography, { variant: "caption", className: "wp-guarantee-text" },
              "Cancel anytime during trial period at no charge"
            ),

            /* What's Included */
            React.createElement('div', { className: "wp-features-card" },
              React.createElement(Heading, { level: 3, className: "wp-features-card__title" }, "What's Included"),
              
              React.createElement('ul', { className: "wp-features-card__list" },
                currentInterval.features.map(function(item, index) { return (
                  React.createElement('li', { key: index, className: "wp-features-card__item" },
                    React.createElement(Check, { size: 20, className: "wp-icon-success", "aria-hidden": "true" }),
                    React.createElement(Typography, { className: "wp-features-card__text" }, item)
                  )
                ); })
              )
            ),

            /* Auto-renewal Info */
            React.createElement('div', { className: "wp-info-box" },
              React.createElement(Typography, { className: "wp-info-box__text" },
                React.createElement('strong', null, "Auto-renewal:"),
                " After your free trial, your subscription will automatically renew at \u00A3" + currentInterval.price + " per " + currentInterval.interval + ". You can cancel or modify anytime."
              )
            )
          )
        ),

        /* Subscription Benefits */
        React.createElement('section', { className: "wp-section-benefits" },
          React.createElement('div', { className: "wp-section-header" },
            React.createElement(Heading, { level: 2, className: "wp-section-title" }, subscriptionPageContent.landing.benefitsHeading),
            React.createElement(Typography, { className: "wp-section-subtitle" }, subscriptionPageContent.landing.benefitsText)
          ),

          React.createElement('div', { className: "wp-benefits-grid" },
            subscriptionBenefits.map(function(benefit, index) {
              var Icon = benefit.icon;
              return (
                React.createElement('div', { key: index, className: "wp-benefit-card" },
                  React.createElement('div', { className: 'wp-benefit-icon-wrapper ' + benefit.bg },
                    React.createElement(Icon, { size: 32, className: benefit.color, "aria-hidden": "true" })
                  ),
                  React.createElement(Heading, { level: 3, className: "wp-benefit-title" }, benefit.title),
                  React.createElement(Typography, { className: "wp-benefit-desc" }, benefit.description)
                )
              );
            })
          )
        ),

        /* Features Comparison Table */
        React.createElement('section', { className: "wp-section-comparison" },
          React.createElement(Heading, { level: 2, className: "wp-section-heading" }, "Compare Plans"),

          React.createElement(FeaturesComparisonTable, {
            features: transformedFeatures,
            plans: [
              { id: 'monthly', name: 'Monthly', price: subscriptionPlans[0].price },
              { id: 'quarterly', name: 'Quarterly', price: subscriptionPlans[1].price },
              { id: 'annual', name: 'Annual', price: subscriptionPlans[2].price },
            ]
          })
        ),

        /* FAQ */
        React.createElement('section', { className: "wp-section-faq" },
          React.createElement(Heading, { level: 2, className: "wp-section-heading" }, "Frequently Asked Questions"),
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
