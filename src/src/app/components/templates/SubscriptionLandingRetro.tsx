/**
 * SubscriptionLandingRetro - Retro-Styled Subscription Landing Page
 *
 * Marketing landing page for WooCommerce Subscriptions with retro handheld gaming aesthetic.
 * Features subscription plans, benefits showcase, FAQ section, and conversion CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Monthly subscription box plans
 * - Curated benefits showcase
 * - FAQ accordion section
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/subscription-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React, { useState } from 'react';
import { Link } from 'react-router';
import { Check, Gift, ArrowRight, CaretDown, Package } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import {
  subscriptionPlans,
  subscriptionBenefits,
  subscriptionFAQs,
  subscriptionPageContent,
} from '../../data/subscriptions';

export const SubscriptionLandingRetro = () => {
  const landing = subscriptionPageContent.landing;
  const prefersReduced = usePrefersReducedMotion();

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">
        
        {/* Hero Section */}
        <HeroRetro
          titleLines={['SUBSCRIPTION', 'BOXES!']}
          highlight="SUBSCRIBE & SAVE"
          description="Curated products delivered to your door every month. Save up to 25% with a subscription."
        />

        {/* Benefits Section */}
        <section id="benefits" className="retro-section" aria-labelledby="benefits-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="benefits-heading" className="retro-font-display retro-bold retro-section-title">
                {landing.benefitsHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {landing.benefitsText}
              </p>
            </div>

            <div className="retro-grid retro-grid-3">
              {subscriptionBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="retro-card retro-card-glow">
                    <div className="retro-feature-icon">
                      <Icon size={32} weight="bold" aria-hidden="true" />
                    </div>
                    <h3 className="retro-card-title retro-font-display retro-bold">
                      {benefit.title.toUpperCase()}
                    </h3>
                    <p className="retro-card-desc retro-font-body">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="retro-section retro-section--pricing" aria-labelledby="pricing-heading">
          <div className="retro-container">
            <h2 id="pricing-heading" className="retro-font-display retro-bold retro-section-title">
              {landing.pricingHeading.toUpperCase()}
            </h2>
            <p className="retro-font-body retro-section-desc">
              {landing.pricingSubheading}
            </p>

            {/* Pricing Cards */}
            <div className="retro-grid retro-grid-3">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`retro-card retro-pricing-card ${plan.popular ? 'retro-pricing-card--popular' : ''}`}
                >
                  {plan.popular && (
                    <span className="retro-badge retro-badge--popular">MOST POPULAR</span>
                  )}

                  <div className="retro-plan-icon">
                    <Package size={40} weight="bold" aria-hidden="true" />
                  </div>

                  <h3 className="retro-pricing-name retro-font-display retro-bold">
                    {plan.name.toUpperCase()}
                  </h3>
                  <p className="retro-pricing-desc retro-font-body">
                    {plan.description}
                  </p>

                  <div className="retro-pricing-amount">
                    <span className="retro-pricing-price retro-font-display">
                      ${plan.price}
                    </span>
                    <span className="retro-pricing-period retro-font-body">
                      / {plan.intervalLabel}
                    </span>
                  </div>

                  <ul className="retro-features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="retro-feature-item">
                        <Check size={18} weight="bold" className="retro-feature-check" aria-hidden="true" />
                        <span className="retro-font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/product/${plan.id}-subscription`}
                    className={`retro-button retro-font-display ${plan.popular ? 'retro-button--primary' : 'retro-button--secondary'}`}
                  >
                    SUBSCRIBE NOW <ArrowRight size={20} weight="bold" />
                  </Link>
                </div>
              ))}
            </div>

            <p className="retro-section-footer retro-font-body">
              Not sure?{' '}
              <Link to="/contact" className="retro-link">
                CONTACT US <ArrowRight size={16} weight="bold" />
              </Link>
              {' '}for a personalised recommendation.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="retro-section retro-section--faq" aria-labelledby="sub-faq-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="sub-faq-heading" className="retro-font-display retro-bold retro-section-title">
                {landing.faqHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {landing.faqText}
              </p>
            </div>

            <FaqAccordionRetro items={subscriptionFAQs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="retro-section retro-section--cta" aria-label="Subscribe call to action">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Gift size={64} weight="fill" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {landing.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {landing.ctaText}
              </p>
              <a href="#pricing" className="retro-button retro-button--primary retro-font-display">
                {landing.ctaButton.toUpperCase()} <ArrowRight size={20} weight="bold" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};

/* Private FAQ Accordion - Retro Styled */

interface FaqItem {
  id: string | number;
  question: string;
  answer: string;
}

interface FaqAccordionRetroProps {
  items: FaqItem[];
}

const FaqAccordionRetro = ({ items }: FaqAccordionRetroProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="retro-faq-list">
      {items.map((item, index) => (
        <div key={item.id} className="retro-faq-item">
          <button
            className="retro-faq-trigger"
            onClick={() => handleToggle(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-panel-${item.id}`}
          >
            <span className="retro-faq-question retro-font-body retro-bold">
              {item.question}
            </span>
            <CaretDown
              size={20}
              weight="bold"
              className={`retro-faq-chevron ${openIndex === index ? 'retro-faq-chevron--open' : ''}`}
              aria-hidden="true"
            />
          </button>
          {openIndex === index && (
            <div
              id={`faq-panel-${item.id}`}
              className="retro-faq-answer"
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
