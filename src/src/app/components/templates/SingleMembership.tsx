import React, { useState } from 'react';
import { Link } from 'react-router';
import { Crown, Lock, Gift, Check, Star } from '@phosphor-icons/react';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Heading } from '../common/Heading';
import { TestimonialCarousel } from '../patterns/TestimonialCarousel';
import { FAQSection } from '../patterns/FAQSection';
import { TrustBand } from '../patterns/TrustBand';
import { membershipPlans, memberBenefits, memberTestimonials, membershipFAQs } from '../../data/memberships';

/**
 * SingleMembership Template — Funky Redesign (Phase 9)
 */
export const SingleMembership = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [billingPeriod, setBillingPeriod] = useState('annual');

  const currentPlan = membershipPlans.find((p) => p.id === selectedPlan) || membershipPlans[1];
  const currentPrice = billingPeriod === 'annual' ? currentPlan.annualPrice : currentPlan.monthlyPrice;

  const transformedTestimonials = memberTestimonials.map((t) => ({
    id: t.id,
    quote: t.quote,
    author: t.name,
    role: `${t.tier} - Since ${t.memberSince}`,
    avatar: t.image,
    rating: t.rating,
  }));

  const transformedFAQs = membershipFAQs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <Layout>
      <Container className="wp-product-page">
        {/* Breadcrumbs */}
        <nav className="wp-breadcrumbs" aria-label="Breadcrumb">
          <ol className="wp-breadcrumbs__list">
            <li><Link to="/">Home</Link></li>
            <li className="wp-breadcrumbs__separator">/</li>
            <li><Link to="/membership">Membership</Link></li>
            <li className="wp-breadcrumbs__separator">/</li>
            <li className="wp-breadcrumbs__current">{`${currentPlan.name} Membership`}</li>
          </ol>
        </nav>

        <div className="wp-product-layout">
          {/* Left: Plan Selection */}
          <div className="wp-product-info">
            <div className="wp-badge-pill">
              <Crown size={14} aria-hidden="true" />
              <Typography variant="caption" className="wp-badge-pill__text">Exclusive Membership</Typography>
            </div>

            <Heading level={1} className="wp-product-title">{`${currentPlan.name} Membership`}</Heading>

            <Typography className="wp-product-description">
              {`${currentPlan.description}. Get ${currentPlan.discount} off every purchase, exclusive products, and VIP perks that pay for themselves.`}
            </Typography>

            {/* Billing Period Toggle */}
            <div className="wp-billing-toggle">
              <div className="wp-billing-toggle__wrapper">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`wp-billing-toggle__btn${billingPeriod === 'monthly' ? ' wp-billing-toggle__btn--active' : ''}`}
                >
                  <Typography className="wp-billing-toggle__label">Monthly</Typography>
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`wp-billing-toggle__btn${billingPeriod === 'annual' ? ' wp-billing-toggle__btn--active' : ''}`}
                >
                  <Typography className="wp-billing-toggle__label">Annual</Typography>
                  <span className="wp-billing-toggle__badge">Save 20%</span>
                </button>
              </div>
            </div>

            {/* Plan Selection */}
            <div className="wp-plan-selector">
              {membershipPlans.map((plan) => {
                const price = billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`wp-plan-option${selectedPlan === plan.id ? ' wp-plan-option--active' : ''}`}
                  >
                    <div className="wp-plan-option__content">
                      <div className={`wp-radio-indicator${selectedPlan === plan.id ? ' wp-radio-indicator--checked' : ''}`}>
                        {selectedPlan === plan.id && <div className="wp-radio-indicator__dot" />}
                      </div>

                      <div className="wp-plan-option__details">
                        <div className="wp-plan-option__header">
                          <Typography className="wp-plan-option__name">{plan.name}</Typography>
                          {plan.badge && (
                            <span className="wp-plan-option__badge">{plan.badge}</span>
                          )}
                        </div>
                        <Typography variant="caption" className="wp-plan-option__desc">{`${plan.discount} off everything`}</Typography>
                      </div>
                    </div>

                    <div className="wp-plan-option__pricing">
                      <Typography className="wp-plan-option__price">{`£${price}`}</Typography>
                      <Typography variant="caption" className="wp-plan-option__interval">
                        {`/${billingPeriod === 'annual' ? 'year' : 'month'}`}
                      </Typography>
                      {billingPeriod === 'annual' && (
                        <Typography variant="caption" className="wp-plan-option__savings">
                          {`Save £${plan.annualSavings}`}
                        </Typography>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Add to Cart */}
            <button className="wp-button-primary wp-button-full" type="button">
              {`Become a ${currentPlan.name} Member`}
            </button>

            <Typography variant="caption" className="wp-guarantee-text">
              <Lock size={14} className="wp-icon-inline" aria-hidden="true" />
              30-day money-back guarantee • Cancel anytime
            </Typography>

            {/* Value Calculator */}
            <div className="wp-roi-card">
              <div className="wp-roi-card__header">
                <div className="wp-roi-card__icon-wrapper">
                  <Gift size={20} className="wp-icon-white" aria-hidden="true" />
                </div>
                <div>
                  <Typography className="wp-roi-card__title">Your Membership Pays for Itself!</Typography>
                  <Typography variant="caption" className="wp-roi-card__subtitle">Based on average monthly spend of £200</Typography>
                </div>
              </div>

              <div className="wp-roi-card__content">
                <div className="wp-roi-row">
                  <span>{`Monthly savings (${currentPlan.discount} off):`}</span>
                  <span className="wp-roi-value">{`£${(200 * parseFloat(currentPlan.discount) / 100).toFixed(2)}`}</span>
                </div>
                <div className="wp-roi-row">
                  <span>Membership cost:</span>
                  <span className="wp-roi-value">{`-£${currentPlan.monthlyPrice}`}</span>
                </div>
                <div className="wp-roi-row wp-roi-row--total">
                  <span>Net monthly savings:</span>
                  <span className="wp-roi-value--total">
                    {`£${((200 * parseFloat(currentPlan.discount) / 100) - currentPlan.monthlyPrice).toFixed(2)}`}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Benefits & Features */}
          <div className="wp-product-features">
            <div className="wp-features-list-wrapper">
              <Heading level={2} className="wp-section-heading">What's Included</Heading>

              <div className="wp-features-list">
                {currentPlan.features.map((feature: any, index: number) => (
                  <div key={index} className="wp-feature-item">
                    <div className="wp-feature-item__icon">
                      <Check size={16} className="wp-icon-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <Typography className="wp-feature-item__title">{feature.text}</Typography>
                      {feature.description && (
                        <Typography variant="caption" className="wp-feature-item__desc">{feature.description}</Typography>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="wp-perks-card">
              <div className="wp-perks-card__header">
                <Crown size={20} className="wp-icon-primary" aria-hidden="true" />
                <Heading level={3}>Exclusive Perks</Heading>
              </div>

              <ul className="wp-perks-list">
                {currentPlan.exclusivePerks.map((perk: string, index: number) => (
                  <li key={index} className="wp-perks-item">
                    <Star size={16} className="wp-icon-primary" aria-hidden="true" />
                    <Typography className="wp-perks-text">{perk}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Member Benefits */}
        <section className="wp-section-benefits">
          <div className="wp-section-header">
            <Heading level={2} className="wp-section-title">Why Members Love Us</Heading>
            <Typography className="wp-section-subtitle">More than just discounts - it's a complete VIP experience.</Typography>
          </div>

          <div className="wp-grid-4">
            {memberBenefits.map((benefit: any, index: number) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="wp-benefit-item">
                  <div className={`wp-benefit-icon ${benefit.bg}`}>
                    <Icon size={32} className={benefit.color} aria-hidden="true" />
                  </div>
                  <Heading level={3} className="wp-benefit-title">{benefit.title}</Heading>
                  <Typography className="wp-benefit-desc">{benefit.description}</Typography>
                </div>
              );
            })}
          </div>
        </section>

        {/* Testimonials */}
        <section className="wp-section-testimonials">
          <Heading level={2} className="wp-section-heading">Member Success Stories</Heading>
          <TestimonialCarousel testimonials={transformedTestimonials} />
        </section>

        {/* FAQ */}
        <section className="wp-section-faq">
          <Heading level={2} className="wp-section-heading">Membership Questions</Heading>
          <FAQSection items={transformedFAQs} />
        </section>

        {/* Trust Band */}
        <section className="wp-section-trust">
          <TrustBand />
        </section>
      </Container>
    </Layout>
  );
}