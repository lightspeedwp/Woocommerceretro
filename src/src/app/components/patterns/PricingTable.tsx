import React from 'react';
import { Check, X } from '@phosphor-icons/react';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as TypographyModule from '../common/Typography';

var useState = React.useState;
var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;

// PricingFeature structure
// - name: string
// - included: boolean
// - description?: string

// PricingPlan structure
// - id: string
// - name: string
// - description: string
// - priceMonthly: number
// - priceYearly: number
// - features: PricingFeature[]
// - popular?: boolean
// - cta: { label: string, href?: string, onClick?: () => void }

// PricingTableProps structure
// - plans: PricingPlan[]
// - showToggle?: boolean
// - defaultBilling?: 'monthly' | 'yearly'
// - heading?: string
// - subheading?: string
// - className?: string

/**
 * PricingTable Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function PricingTable(props) {
  var plans = props.plans;
  var showToggle = props.showToggle === undefined ? true : props.showToggle;
  var defaultBilling = props.defaultBilling || 'monthly';
  var heading = props.heading;
  var subheading = props.subheading;
  var className = props.className || '';

  var _b = useState(defaultBilling);
  var billing = _b[0];
  var setBilling = _b[1];

  var header = (heading || subheading || showToggle) ? React.createElement('div', { key: 'header', className: "wp-pricing-table__header" }, [
    subheading ? React.createElement('div', { key: 'sub', className: "wp-pricing-table__subheading" }, 
      React.createElement('small', null, React.createElement('strong', null, subheading))
    ) : null,
    heading ? React.createElement(Typography, { key: 'h', variant: "h2", className: "wp-pricing-table__heading" }, heading) : null,
    showToggle ? React.createElement('div', { key: 'toggle', className: "wp-pricing-toggle" }, [
      React.createElement('button', {
        key: 'mon',
        onClick: function() { setBilling('monthly'); },
        className: "wp-pricing-toggle__button",
        'aria-pressed': billing === 'monthly'
      }, "Monthly"),
      React.createElement('button', {
        key: 'yr',
        onClick: function() { setBilling('yearly'); },
        className: "wp-pricing-toggle__button",
        'aria-pressed': billing === 'yearly'
      }, [
        "Yearly",
        React.createElement('span', { key: 'save', className: "wp-pricing-toggle__save-badge" }, "Save 17%")
      ])
    ]) : null
  ]) : null;

  var planCards = plans.map(function(plan) {
    var price = billing === 'monthly' ? plan.priceMonthly : plan.priceYearly;
    var isPopular = plan.popular;

    var badge = isPopular ? React.createElement('div', { key: 'pop', className: "wp-pricing-card__badge" }, "Most Popular") : null;

    var priceBlock = React.createElement('div', { key: 'price', className: "wp-pricing-card__price" }, [
      React.createElement('span', { key: 'a', className: "wp-pricing-card__amount" }, "$" + price),
      React.createElement('span', { key: 'p', className: "wp-pricing-card__period" }, "/" + (billing === 'monthly' ? 'mo' : 'yr'))
    ]);

    var billingNote = billing === 'yearly' ? React.createElement('div', { key: 'note', className: "wp-pricing-table__billing-note" }, 
      "$" + (price / 12).toFixed(2) + "/month billed annually"
    ) : null;

    var featuresList = React.createElement('ul', { key: 'feats', className: "wp-pricing-card__features" }, 
      plan.features.map(function(feature, index) {
        return React.createElement('li', { key: index, className: "wp-pricing-card__feature" }, [
          React.createElement('div', { key: 'c', className: "wp-pricing-card__check " + (feature.included ? 'wp-pricing-card__check--included' : 'wp-pricing-card__check--excluded') }, 
            feature.included ? React.createElement(Check, { size: 14 }) : React.createElement(X, { size: 14 })
          ),
          React.createElement('span', { key: 't', className: "wp-pricing-card__feature-text " + (feature.included ? '' : 'wp-pricing-card__feature-text--excluded') }, 
            feature.name
          )
        ]);
      })
    );

    return React.createElement('div', {
      key: plan.id,
      className: "wp-pricing-card " + (isPopular ? 'wp-pricing-card--popular' : '')
    }, [
      badge,
      React.createElement(Typography, { key: 'n', variant: "h3", className: "wp-pricing-card__title" }, plan.name),
      React.createElement(Typography, { key: 'd', variant: "p", className: "wp-pricing-card__description" }, plan.description),
      priceBlock,
      billingNote,
      React.createElement(Button, {
        key: 'cta',
        variant: isPopular ? 'cta' : 'outline',
        size: "lg",
        to: plan.cta.href,
        onClick: plan.cta.onClick,
        className: "wp-pricing-table__cta-button"
      }, plan.cta.label),
      featuresList
    ]);
  });

  var grid = React.createElement('div', { key: 'grid', className: "wp-pricing-grid" }, planCards);

  return React.createElement('div', { className: "wp-pricing-table " + className }, [
    header,
    grid
  ]);
}