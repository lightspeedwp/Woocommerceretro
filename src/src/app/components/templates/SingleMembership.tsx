/**
 * SingleMembership Template — Retro Redesign
 *
 * Single product page for membership tiers using WooCommerce Memberships.
 * Reads the `:slug` route param to display the correct membership plan.
 *
 * **Route:** /membership/:slug (e.g. /membership/premium)
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Route-param-driven plan selection
 * - Billing period toggle (monthly / annual)
 * - ROI value calculator
 * - Benefits showcase
 * - FAQ accordion section
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px – 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/membership-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import { Crown, Lock, Gift, Check, Star, ArrowRight, CaretDown } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import {
  membershipPlans,
  memberBenefits,
  memberTestimonials,
  membershipFAQs,
} from '../../data/memberships';

export const SingleMembership = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the plan matching the slug, fallback to premium
  const initialPlan = membershipPlans.find((p) => p.id === slug) || membershipPlans[1];
  const [selectedPlan, setSelectedPlan] = useState(initialPlan.id);
  const [billingPeriod, setBillingPeriod] = useState('annual');

  const currentPlan = membershipPlans.find((p) => p.id === selectedPlan) || membershipPlans[1];
  const currentPrice = billingPeriod === 'annual' ? currentPlan.annualPrice : currentPlan.monthlyPrice;

  // ROI calculation
  const discountRate = parseFloat(currentPlan.discount) / 100;
  const monthlySavings = 200 * discountRate; // Based on £200 avg spend
  const netSavings = monthlySavings - currentPlan.monthlyPrice;

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Product Section */}
        <section className="retro-section" aria-labelledby="mem-product-heading">
          <div className="retro-container">
            <div className="retro-product-layout">
              {/* Left: Plan Info & Selection */}
              <div className="retro-product-info-panel">
                <div className="retro-product-badge-row">
                  <span className="retro-badge">
                    <Crown size={14} weight="bold" aria-hidden="true" /> EXCLUSIVE MEMBERSHIP
                  </span>
                  {currentPlan.badge && (
                    <span className="retro-badge retro-badge--popular">
                      {currentPlan.badge.toUpperCase()}
                    </span>
                  )}
                </div>

                <h1
                  id="mem-product-heading"
                  className="retro-font-display retro-bold retro-product-title"
                >
                  {currentPlan.name.toUpperCase()} MEMBERSHIP
                </h1>

                <p className="retro-font-body retro-product-desc">
                  {currentPlan.description}. Get {currentPlan.discount} off every purchase,
                  exclusive products, and VIP perks that pay for themselves.
                </p>

                {/* Billing Toggle */}
                <div className="retro-billing-toggle">
                  <button
                    onClick={() => setBillingPeriod('monthly')}
                    className={`retro-toggle-btn retro-font-display ${billingPeriod === 'monthly' ? 'retro-toggle-btn--active' : ''}`}
                    aria-pressed={billingPeriod === 'monthly'}
                  >
                    MONTHLY
                  </button>
                  <button
                    onClick={() => setBillingPeriod('annual')}
                    className={`retro-toggle-btn retro-font-display ${billingPeriod === 'annual' ? 'retro-toggle-btn--active' : ''}`}
                    aria-pressed={billingPeriod === 'annual'}
                  >
                    ANNUAL (SAVE 20%)
                  </button>
                </div>

                {/* Plan Selector */}
                <div className="retro-plan-selector">
                  <p className="retro-font-display retro-bold retro-plan-selector__label">
                    SELECT YOUR TIER:
                  </p>

                  <div className="retro-plan-options">
                    {membershipPlans.map((plan) => {
                      const price =
                        billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice;
                      return (
                        <button
                          key={plan.id}
                          onClick={() => setSelectedPlan(plan.id)}
                          className={`retro-plan-option ${selectedPlan === plan.id ? 'retro-plan-option--active' : ''}`}
                          aria-pressed={selectedPlan === plan.id}
                        >
                          <div className="retro-plan-option__left">
                            <div
                              className={`retro-radio ${selectedPlan === plan.id ? 'retro-radio--checked' : ''}`}
                            >
                              {selectedPlan === plan.id && <div className="retro-radio__dot" />}
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
                                {plan.discount} off everything
                              </span>
                            </div>
                          </div>

                          <div className="retro-plan-option__right">
                            <span className="retro-font-display retro-plan-option__price">
                              £{price}
                            </span>
                            <span className="retro-font-body retro-plan-option__interval">
                              /{billingPeriod === 'annual' ? 'year' : 'month'}
                            </span>
                            {billingPeriod === 'annual' && (
                              <span className="retro-font-body retro-plan-option__savings">
                                Save £{plan.annualSavings}
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="retro-btn retro-btn--primary retro-font-display retro-btn--full"
                  type="button"
                >
                  BECOME A {currentPlan.name.toUpperCase()} MEMBER{' '}
                  <ArrowRight size={20} weight="bold" />
                </button>

                <p className="retro-font-body retro-guarantee-text">
                  <Lock size={14} weight="bold" aria-hidden="true" /> 30-day money-back guarantee •
                  Cancel anytime
                </p>

                {/* ROI Card */}
                <div className="retro-card retro-card--highlight retro-roi-card">
                  <div className="retro-roi-card__header">
                    <Gift size={24} weight="bold" className="retro-neon-icon" aria-hidden="true" />
                    <div>
                      <h3 className="retro-font-display retro-bold">
                        YOUR MEMBERSHIP PAYS FOR ITSELF!
                      </h3>
                      <p className="retro-font-body">Based on average monthly spend of £200</p>
                    </div>
                  </div>

                  <div className="retro-roi-stats retro-roi-stats--compact">
                    <div className="retro-roi-row">
                      <span className="retro-font-body">
                        Monthly savings ({currentPlan.discount} off):
                      </span>
                      <span className="retro-font-display retro-bold retro-neon-text">
                        £{monthlySavings.toFixed(2)}
                      </span>
                    </div>
                    <div className="retro-roi-row">
                      <span className="retro-font-body">Membership cost:</span>
                      <span className="retro-font-display">-£{currentPlan.monthlyPrice}</span>
                    </div>
                    <div className="retro-roi-row retro-roi-row--total">
                      <span className="retro-font-body retro-bold">Net monthly savings:</span>
                      <span className="retro-font-display retro-bold retro-neon-text">
                        £{netSavings.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Features & Perks */}
              <div className="retro-product-features-panel">
                {/* Features Card */}
                <div className="retro-card retro-features-card">
                  <h3 className="retro-font-display retro-bold retro-features-card__title">
                    WHAT'S INCLUDED
                  </h3>
                  <ul className="retro-features-list">
                    {currentPlan.features.map((feature: any, index: number) => (
                      <li key={index} className="retro-feature-item">
                        <Check
                          size={18}
                          weight="bold"
                          className="retro-feature-check"
                          aria-hidden="true"
                        />
                        <div>
                          <span className="retro-font-body retro-bold">{feature.text}</span>
                          {feature.description && (
                            <span className="retro-font-body retro-feature-desc">
                              {feature.description}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusive Perks Card */}
                <div className="retro-card retro-card--glow retro-perks-card">
                  <div className="retro-perks-card__header">
                    <Crown size={24} weight="bold" className="retro-neon-icon" aria-hidden="true" />
                    <h3 className="retro-font-display retro-bold">EXCLUSIVE PERKS</h3>
                  </div>
                  <ul className="retro-perks-list">
                    {currentPlan.exclusivePerks.map((perk: string, index: number) => (
                      <li key={index} className="retro-perk-item">
                        <Star
                          size={16}
                          weight="fill"
                          className="retro-star-icon"
                          aria-hidden="true"
                        />
                        <span className="retro-font-body">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3D View Link */}
                <Link
                  to={`/membership/3d/${currentPlan.id}`}
                  className="retro-btn retro-btn--secondary retro-font-display retro-btn--full"
                >
                  VIEW IN 3D <ArrowRight size={20} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="retro-section" aria-labelledby="mem-benefits-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2
                id="mem-benefits-heading"
                className="retro-font-display retro-bold retro-section-title"
              >
                WHY MEMBERS LOVE US
              </h2>
              <p className="retro-font-body retro-section-desc">
                More than just discounts — it's a complete VIP experience.
              </p>
            </div>

            <div className="retro-grid retro-grid-4">
              {memberBenefits.map((benefit: any, index: number) => {
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

        {/* Testimonials Section */}
        <section
          className="retro-section retro-section--testimonials"
          aria-labelledby="mem-testimonials-heading"
        >
          <div className="retro-container">
            <h2
              id="mem-testimonials-heading"
              className="retro-font-display retro-bold retro-section-title"
            >
              MEMBER SUCCESS STORIES
            </h2>

            <div className="retro-grid retro-grid-2">
              {memberTestimonials.slice(0, 4).map((testimonial) => (
                <div key={testimonial.id} className="retro-card retro-testimonial-card">
                  <div className="retro-testimonial-header">
                    <div className="retro-testimonial-avatar">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} avatar`}
                        className="retro-testimonial-avatar__img"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="retro-font-display retro-bold">{testimonial.name}</p>
                      <p className="retro-font-body retro-testimonial-tier">
                        {testimonial.tier} — Since {testimonial.memberSince}
                      </p>
                    </div>
                  </div>
                  <div className="retro-stars retro-stars--small">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        weight={s <= testimonial.rating ? 'fill' : 'regular'}
                        className="retro-star-icon"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="retro-font-body retro-testimonial-quote">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="retro-font-body retro-testimonial-savings">
                    Total saved: <strong>{testimonial.savings}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="retro-section retro-section--faq" aria-labelledby="mem-single-faq-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2
                id="mem-single-faq-heading"
                className="retro-font-display retro-bold retro-section-title"
              >
                MEMBERSHIP QUESTIONS
              </h2>
              <p className="retro-font-body retro-section-desc">
                Everything you need to know about becoming a member.
              </p>
            </div>

            <MemFaqAccordion items={membershipFAQs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Membership call to action">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Crown size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                READY TO JOIN OUR EXCLUSIVE COMMUNITY?
              </h2>
              <p className="retro-font-body retro-cta-desc">
                Start saving today with up to 30% off every purchase. Cancel anytime, no commitment.
              </p>
              <Link
                to="/memberships"
                className="retro-btn retro-btn--primary retro-font-display"
              >
                VIEW ALL TIERS <ArrowRight size={20} weight="bold" />
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

const MemFaqAccordion = ({
  items,
}: {
  items: Array<{ id: string; question: string; answer: string }>;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="retro-faq__list">
      {items.map((item, index) => (
        <div key={item.id} className="retro-faq__item">
          <button
            className="retro-faq__trigger"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`mem-single-faq-panel-${item.id}`}
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
              id={`mem-single-faq-panel-${item.id}`}
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