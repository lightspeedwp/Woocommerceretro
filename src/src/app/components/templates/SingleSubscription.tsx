/**
 * SingleSubscription Template — Retro Redesign
 *
 * Single product page for subscription products using WooCommerce Subscriptions.
 * Reads the `:slug` route param to display the correct subscription plan.
 *
 * **Route:** /subscription/:slug (e.g. /subscription/monthly)
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Route-param-driven plan selection
 * - Plan comparison with feature list
 * - FAQ accordion section
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px – 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/subscription-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import { Package, Star, Check, ArrowRight, CaretDown } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import {
  subscriptionPlans,
  subscriptionFeatures,
  subscriptionBenefits,
  subscriptionFAQs,
  subscriptionPageContent,
} from '../../data/subscriptions';

export const SingleSubscription = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the plan matching the slug, fallback to quarterly
  const initialPlan = subscriptionPlans.find((p) => p.id === slug) || subscriptionPlans[1];
  const [selectedInterval, setSelectedInterval] = useState(initialPlan.id);

  const currentInterval =
    subscriptionPlans.find((p) => p.id === selectedInterval) || subscriptionPlans[1];
  const single = subscriptionPageContent.single;

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Product Hero */}
        <section className="retro-section" aria-labelledby="sub-product-heading">
          <div className="retro-container">
            <div className="retro-product-layout">
              {/* Left: Visual */}
              <div className="retro-product-visual">
                <div className="retro-product-badge-row">
                  <span className="retro-badge">
                    <Package size={14} weight="bold" aria-hidden="true" /> SUBSCRIPTION BOX
                  </span>
                  {currentInterval.popular && (
                    <span className="retro-badge retro-badge--popular">MOST POPULAR</span>
                  )}
                </div>

                <div className="retro-subscription-preview">
                  <div className="retro-subscription-preview__box">
                    <Package size={80} weight="bold" className="retro-neon-icon" aria-hidden="true" />
                  </div>
                  <div className="retro-subscription-preview__label retro-font-display retro-bold">
                    {currentInterval.name.toUpperCase()} BOX
                  </div>
                </div>

                {/* Rating */}
                <div className="retro-product-rating">
                  <div className="retro-stars" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        weight="fill"
                        className="retro-star-icon"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="retro-font-body retro-rating-text">{single.rating}</span>
                </div>
              </div>

              {/* Right: Info */}
              <div className="retro-product-info-panel">
                <h1 id="sub-product-heading" className="retro-font-display retro-bold retro-product-title">
                  {single.title.toUpperCase()}
                </h1>

                <p className="retro-font-body retro-product-desc">{single.description}</p>

                {/* Plan Selector */}
                <div className="retro-plan-selector">
                  <p className="retro-font-display retro-bold retro-plan-selector__label">
                    CHOOSE YOUR DELIVERY FREQUENCY:
                  </p>

                  <div className="retro-plan-options">
                    {subscriptionPlans.map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedInterval(plan.id)}
                        className={`retro-plan-option ${selectedInterval === plan.id ? 'retro-plan-option--active' : ''}`}
                        aria-pressed={selectedInterval === plan.id}
                      >
                        <div className="retro-plan-option__left">
                          <div
                            className={`retro-radio ${selectedInterval === plan.id ? 'retro-radio--checked' : ''}`}
                          >
                            {selectedInterval === plan.id && (
                              <div className="retro-radio__dot" />
                            )}
                          </div>
                          <div className="retro-plan-option__details">
                            <span className="retro-font-display retro-bold retro-plan-option__name">
                              {plan.name.toUpperCase()}
                            </span>
                            {plan.badge && (
                              <span className="retro-badge retro-badge--small">
                                {plan.badge.toUpperCase()}
                              </span>
                            )}
                            <span className="retro-font-body retro-plan-option__trial">
                              {plan.trialDays} day free trial – Cancel anytime
                            </span>
                          </div>
                        </div>

                        <div className="retro-plan-option__right">
                          <span className="retro-font-display retro-plan-option__price">
                            £{plan.price}
                          </span>
                          <span className="retro-font-body retro-plan-option__interval">
                            {plan.intervalLabel}
                          </span>
                          {plan.savings > 0 && (
                            <span className="retro-font-body retro-plan-option__savings">
                              Save £{plan.savings}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="retro-btn retro-btn--primary retro-font-display retro-btn--full" type="button">
                  START {currentInterval.trialDays}-DAY FREE TRIAL{' '}
                  <ArrowRight size={20} weight="bold" />
                </button>

                <p className="retro-font-body retro-guarantee-text">
                  Cancel anytime during trial period at no charge
                </p>

                {/* What's Included */}
                <div className="retro-card retro-features-card">
                  <h3 className="retro-font-display retro-bold retro-features-card__title">
                    WHAT'S INCLUDED
                  </h3>
                  <ul className="retro-features-list">
                    {currentInterval.features.map((item, index) => (
                      <li key={index} className="retro-feature-item">
                        <Check
                          size={18}
                          weight="bold"
                          className="retro-feature-check"
                          aria-hidden="true"
                        />
                        <span className="retro-font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Auto-renewal Info */}
                <div className="retro-info-box">
                  <p className="retro-font-body">
                    <strong>Auto-renewal:</strong> After your free trial, your subscription will
                    automatically renew at £{currentInterval.price} per {currentInterval.interval}.
                    You can cancel or modify anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="retro-section retro-section--alt" aria-labelledby="sub-benefits-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2
                id="sub-benefits-heading"
                className="retro-font-display retro-bold retro-section-title"
              >
                {subscriptionPageContent.landing.benefitsHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {subscriptionPageContent.landing.benefitsText}
              </p>
            </div>

            <div className="retro-grid retro-grid-4">
              {subscriptionBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="retro-card retro-card--glow">
                    <div className="retro-feature-icon">
                      <Icon size={32} weight="bold" aria-hidden="true" />
                    </div>
                    <h3 className="retro-card__title retro-font-display retro-bold">
                      {benefit.title.toUpperCase()}
                    </h3>
                    <p className="retro-card__desc retro-font-body">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compare Plans Section */}
        <section className="retro-section retro-section--pricing" aria-labelledby="sub-compare-heading">
          <div className="retro-container">
            <h2
              id="sub-compare-heading"
              className="retro-font-display retro-bold retro-section-title"
            >
              COMPARE PLANS
            </h2>

            <div className="retro-comparison-table" role="table" aria-label="Subscription plan comparison">
              {/* Header Row */}
              <div className="retro-comparison-row retro-comparison-row--header" role="row">
                <div className="retro-comparison-cell retro-comparison-cell--feature" role="columnheader">
                  <span className="retro-font-display retro-bold">FEATURE</span>
                </div>
                {subscriptionPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`retro-comparison-cell ${plan.id === selectedInterval ? 'retro-comparison-cell--active' : ''}`}
                    role="columnheader"
                  >
                    <span className="retro-font-display retro-bold">{plan.name.toUpperCase()}</span>
                  </div>
                ))}
              </div>

              {/* Feature Rows */}
              {subscriptionFeatures.map((feature) => (
                <div key={feature.id} className="retro-comparison-row" role="row">
                  <div className="retro-comparison-cell retro-comparison-cell--feature" role="cell">
                    <span className="retro-font-body retro-bold">{feature.name}</span>
                    <span className="retro-font-body retro-comparison-cell__desc">
                      {feature.description}
                    </span>
                  </div>
                  {(['monthly', 'quarterly', 'annual'] as const).map((planId) => {
                    const value = feature.availability[planId];
                    return (
                      <div
                        key={planId}
                        className={`retro-comparison-cell ${planId === selectedInterval ? 'retro-comparison-cell--active' : ''}`}
                        role="cell"
                      >
                        {value === true ? (
                          <Check size={20} weight="bold" className="retro-feature-check" aria-label="Included" />
                        ) : value === false ? (
                          <span className="retro-comparison-dash" aria-label="Not included">—</span>
                        ) : (
                          <span className="retro-font-body">{value}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="retro-section" aria-labelledby="sub-single-faq-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2
                id="sub-single-faq-heading"
                className="retro-font-display retro-bold retro-section-title"
              >
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <p className="retro-font-body retro-section-desc">
                Got questions? We've got answers.
              </p>
            </div>

            <SubFaqAccordion items={subscriptionFAQs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Subscription call to action">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Package size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                READY TO START YOUR SUBSCRIPTION?
              </h2>
              <p className="retro-font-body retro-cta-desc">
                Join 12,000+ happy subscribers and get 50% off your first box with code WELCOME50.
              </p>
              <Link
                to="/subscriptions"
                className="retro-btn retro-btn--primary retro-font-display"
              >
                VIEW ALL PLANS <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterRetro />
    </>
  );
};

/* Private FAQ Accordion — Retro Styled */

interface FaqItem {
  id: string | number;
  question: string;
  answer: string;
}

const SubFaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="retro-faq__list">
      {items.map((item, index) => (
        <div key={item.id} className="retro-faq__item">
          <button
            className="retro-faq__trigger"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`sub-single-faq-panel-${item.id}`}
          >
            <span className="retro-faq__question retro-font-body retro-bold">{item.question}</span>
            <CaretDown
              size={20}
              weight="bold"
              className={`retro-faq__chevron ${openIndex === index ? 'retro-faq__chevron--open' : ''}`}
              aria-hidden="true"
            />
          </button>
          {openIndex === index && (
            <div
              id={`sub-single-faq-panel-${item.id}`}
              className="retro-faq__answer"
              role="region"
            >
              <p className="retro-font-body">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};