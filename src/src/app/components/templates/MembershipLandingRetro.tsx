/**
 * MembershipLandingRetro - Retro-Styled Membership Landing Page
 *
 * Marketing landing page for WooCommerce Memberships with retro handheld gaming aesthetic.
 * Features exclusive member benefits, tiered pricing plans, ROI calculator, and FAQ section.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Tiered membership plans with annual/monthly billing toggle
 * - Member-only benefits showcase
 * - ROI calculator demonstrating value
 * - FAQ accordion section
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/front-page-funky.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React, { useState } from 'react';
import { Link } from 'react-router';
import { Crown, Lock, Gift, Check, ArrowRight, CaretDown } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { membershipPlans, memberBenefits, membershipFAQs, membershipStats } from '../../data/memberships';

export const MembershipLandingRetro = () => {
  const [billingPeriod, setBillingPeriod] = useState('annual');
  const prefersReduced = usePrefersReducedMotion();

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">
        
        {/* Hero Section */}
        <HeroRetro
          titleLines={['UNLOCK', 'EXCLUSIVE', 'PERKS!']}
          highlight="25K+ MEMBERS"
          description="Become a member and enjoy up to 30% off every purchase, exclusive products, VIP events, and a community of like-minded shoppers."
        />

        {/* Stats Bar */}
        <section className="retro-section retro-section--stats" aria-label="Membership statistics">
          <div className="retro-container">
            <div className="retro-stats-grid">
              {membershipStats.map((stat: any, index: number) => (
                <div key={index} className="retro-stat">
                  <div className="retro-stat-value retro-font-display">{stat.value}</div>
                  <p className="retro-stat-label retro-font-body retro-uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="retro-section" aria-labelledby="mem-benefits-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="mem-benefits-heading" className="retro-font-display retro-bold retro-section-title">
                MEMBER-ONLY BENEFITS
              </h2>
              <p className="retro-font-body retro-section-desc">
                Your membership unlocks a world of exclusive perks designed to enhance every shopping experience.
              </p>
            </div>

            <div className="retro-grid retro-grid-3">
              {memberBenefits.map((benefit: any, index: number) => {
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
        <section id="membership-tiers" className="retro-section retro-section--pricing" aria-labelledby="mem-pricing-heading">
          <div className="retro-container">
            <h2 id="mem-pricing-heading" className="retro-font-display retro-bold retro-section-title">
              CHOOSE YOUR LEVEL
            </h2>
            <p className="retro-font-body retro-section-desc">
              All memberships include core benefits. Select the tier that matches your shopping frequency.
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

            {/* Pricing Cards */}
            <div className="retro-grid retro-grid-3">
              {membershipPlans.map((plan: any) => {
                const price = billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice;
                const isPopular = plan.badge === 'Most Popular';

                return (
                  <div
                    key={plan.id}
                    className={`retro-card retro-pricing-card ${isPopular ? 'retro-pricing-card--popular' : ''}`}
                  >
                    {isPopular && (
                      <span className="retro-badge retro-badge--popular">MOST POPULAR</span>
                    )}

                    <h3 className="retro-pricing-name retro-font-display retro-bold">
                      {plan.name.toUpperCase()}
                    </h3>
                    <p className="retro-pricing-desc retro-font-body">
                      {plan.description}
                    </p>

                    <div className="retro-pricing-amount">
                      <span className="retro-pricing-price retro-font-display">
                        £{price}
                      </span>
                      <span className="retro-pricing-period retro-font-body">
                        / {billingPeriod === 'annual' ? 'year' : 'month'}
                      </span>
                    </div>

                    <ul className="retro-features-list">
                      {plan.features.map((feature: any, i: number) => (
                        <li key={i} className="retro-feature-item">
                          <Check size={18} weight="bold" className="retro-feature-check" aria-hidden="true" />
                          <span className="retro-font-body">{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/membership/${plan.id}`}
                      className={`retro-button retro-font-display ${isPopular ? 'retro-button--primary' : 'retro-button--secondary'}`}
                    >
                      JOIN {plan.name.toUpperCase()} <ArrowRight size={20} weight="bold" />
                    </Link>
                  </div>
                );
              })}
            </div>

            <p className="retro-section-footer retro-font-body">
              Need help choosing?{' '}
              <Link to="/contact" className="retro-link">
                CHAT WITH OUR TEAM <ArrowRight size={16} weight="bold" />
              </Link>
            </p>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="retro-section retro-section--roi" aria-labelledby="mem-roi-heading">
          <div className="retro-container">
            <div className="retro-card retro-card-highlight retro-roi-card">
              <div className="retro-roi-icon">
                <Gift size={48} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 id="mem-roi-heading" className="retro-font-display retro-bold retro-roi-title">
                YOUR MEMBERSHIP PAYS FOR ITSELF
              </h2>
              <p className="retro-font-body retro-roi-desc">
                See how much you could save with a Premium membership
              </p>

              <div className="retro-roi-stats">
                <div className="retro-stat">
                  <p className="retro-stat-label retro-font-body retro-uppercase">
                    AVG MONTHLY SPEND
                  </p>
                  <div className="retro-stat-value retro-font-display">£200</div>
                </div>
                <div className="retro-stat">
                  <p className="retro-stat-label retro-font-body retro-uppercase">
                    MONTHLY SAVINGS (20%)
                  </p>
                  <div className="retro-stat-value retro-font-display">£40</div>
                </div>
                <div className="retro-stat">
                  <p className="retro-stat-label retro-font-body retro-uppercase">
                    ANNUAL SAVINGS
                  </p>
                  <div className="retro-stat-value retro-font-display">£480</div>
                </div>
              </div>

              <p className="retro-font-body retro-roi-summary">
                Premium membership costs just £19.99/month. You save £20+ every month!
              </p>
              <a href="#membership-tiers" className="retro-button retro-button--primary retro-font-display">
                START SAVING TODAY <ArrowRight size={20} weight="bold" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="retro-section retro-section--faq" aria-labelledby="mem-faq-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="mem-faq-heading" className="retro-font-display retro-bold retro-section-title">
                MEMBERSHIP QUESTIONS
              </h2>
              <p className="retro-font-body retro-section-desc">
                Everything you need to know about becoming a member.
              </p>
            </div>

            <FaqAccordionRetro items={membershipFAQs} />
          </div>
        </section>

        {/* Final CTA */}
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
              <a href="#membership-tiers" className="retro-button retro-button--primary retro-font-display">
                BECOME A MEMBER <ArrowRight size={20} weight="bold" />
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

interface FaqAccordionRetroProps {
  items: Array<{ id: string; question: string; answer: string }>;
}

const FaqAccordionRetro = ({ items }: FaqAccordionRetroProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="retro-faq-list">
      {items.map((item, index) => (
        <div key={item.id} className="retro-faq-item">
          <button
            className="retro-faq-trigger"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`mem-faq-panel-${item.id}`}
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
              id={`mem-faq-panel-${item.id}`}
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
