import React, { useState } from 'react';
import { Check, X } from '../../utils/phosphor-compat';
import { Button } from '../blocks/design/Buttons';
import { Typography } from '../common/Typography';

interface PricingFeature {
  name: string;
  included: boolean;
  description?: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  features: PricingFeature[];
  popular?: boolean;
  cta: { label: string; href?: string; onClick?: () => void };
}

interface PricingTableProps {
  plans: PricingPlan[];
  showToggle?: boolean;
  defaultBilling?: 'monthly' | 'yearly';
  heading?: string;
  subheading?: string;
  className?: string;
}

/**
 * PricingTable Pattern Component
 */
export const PricingTable = ({
  plans,
  showToggle = true,
  defaultBilling = 'monthly',
  heading,
  subheading,
  className = '',
}: PricingTableProps) => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>(defaultBilling);

  return (
    <div className={`wp-pricing-table ${className}`}>
      {(heading || subheading || showToggle) && (
        <div className="wp-pricing-table__header">
          {subheading && (
            <div className="wp-pricing-table__subheading">
              <small><strong>{subheading}</strong></small>
            </div>
          )}
          {heading && (
            <Typography variant="h2" className="wp-pricing-table__heading">{heading}</Typography>
          )}
          {showToggle && (
            <div className="wp-pricing-toggle">
              <button
                onClick={() => setBilling('monthly')}
                className="wp-pricing-toggle__button"
                aria-pressed={billing === 'monthly'}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('yearly')}
                className="wp-pricing-toggle__button"
                aria-pressed={billing === 'yearly'}
              >
                Yearly
                <span className="wp-pricing-toggle__save-badge">Save 17%</span>
              </button>
            </div>
          )}
        </div>
      )}
      <div className="wp-pricing-grid">
        {plans.map((plan) => {
          const price = billing === 'monthly' ? plan.priceMonthly : plan.priceYearly;
          const isPopular = plan.popular;

          return (
            <div key={plan.id} className={`wp-pricing-card ${isPopular ? 'wp-pricing-card--popular' : ''}`}>
              {isPopular && <div className="wp-pricing-card__badge">Most Popular</div>}
              <Typography variant="h3" className="wp-pricing-card__title">{plan.name}</Typography>
              <Typography variant="p" className="wp-pricing-card__description">{plan.description}</Typography>
              <div className="wp-pricing-card__price">
                <span className="wp-pricing-card__amount">${price}</span>
                <span className="wp-pricing-card__period">/{billing === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              {billing === 'yearly' && (
                <div className="wp-pricing-table__billing-note">
                  ${(price / 12).toFixed(2)}/month billed annually
                </div>
              )}
              <Button
                variant={isPopular ? 'cta' : 'outline'}
                size="lg"
                to={plan.cta.href}
                onClick={plan.cta.onClick}
                className="wp-pricing-table__cta-button"
              >
                {plan.cta.label}
              </Button>
              <ul className="wp-pricing-card__features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="wp-pricing-card__feature">
                    <div className={`wp-pricing-card__check ${feature.included ? 'wp-pricing-card__check--included' : 'wp-pricing-card__check--excluded'}`}>
                      {feature.included ? <Check size={14} /> : <X size={14} />}
                    </div>
                    <span className={`wp-pricing-card__feature-text ${feature.included ? '' : 'wp-pricing-card__feature-text--excluded'}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}