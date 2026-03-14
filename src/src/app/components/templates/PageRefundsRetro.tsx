/**
 * PageRefundsRetro - Retro-Styled Refunds Page
 *
 * Refunds information page with retro handheld gaming aesthetic.
 * Features refund timeline cards, process steps, eligibility lists,
 * FAQ accordion, and returns portal CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Refund timeline cards with method icons
 * - 4-step refund process with numbered steps
 * - Eligible/ineligible split columns
 * - FAQ accordion with expand/collapse
 * - Dual-button CTA section
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/refunds-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  CheckCircle,
  XCircle,
  CaretDown,
  CurrencyDollar,
  CreditCard,
  Lightning,
  Wallet,
  Gift,
  ArrowRight,
  Lifebuoy,
} from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import {
  refundTimelines,
  refundEligibility,
  refundStatusSteps,
  refundFAQs,
  refundsPageContent,
} from '../../data/refunds';

type IconComponent = React.ComponentType<{ size?: number; weight?: string; className?: string }>;

const timelineIcons: Record<string, IconComponent> = {
  'Original Payment Method': CreditCard,
  'Store Credit': Lightning,
  'PayPal / Digital Wallet': Wallet,
  'Gift Card Purchases': Gift,
};

export const PageRefundsRetro = () => {
  const [openFAQ, setOpenFAQ] = useState(-1);

  const toggleFAQ = (index: number) => () => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['REFUND', 'POLICY']}
          highlight="EASY RETURNS!"
          description="Everything you need to know about our refund process, timelines, and eligibility."
          images={{
            main: 'https://images.unsplash.com/photo-1758351507026-71ad3645cb43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZ1bmQlMjBtb25leSUyMHJldHVybiUyMHBhY2thZ2UlMjBzaGlwcGluZ3xlbnwxfHx8fDE3NzMzNDI2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwcGF5bWVudCUyMHRyYW5zYWN0aW9ufGVufDF8fHx8MTc3MzI4NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0JTIwaGVhZHNldHxlbnwxfHx8fDE3NzMzMzI0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Refund Timelines Section */}
        <section className="retro-section" aria-labelledby="refund-timelines-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="refund-timelines-heading" className="retro-font-display retro-bold retro-section-title">
                {refundsPageContent.timelinesHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {refundsPageContent.timelinesSubtext}
              </p>
            </div>

            <div className="retro-grid retro-grid-2">
              {refundTimelines.map((item, i) => {
                const IconComp = timelineIcons[item.method] || CurrencyDollar;
                return (
                  <div key={i} className="retro-card retro-card-glow">
                    <div className="retro-feature-icon">
                      <IconComp size={32} weight="bold" aria-hidden="true" />
                    </div>
                    <h3 className="retro-card-title retro-font-display retro-bold">
                      {item.method.toUpperCase()}
                    </h3>
                    <span className="retro-refund-timeframe retro-font-display">{item.timeframe}</span>
                    <p className="retro-card-desc retro-font-body">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Refund Process Steps */}
        <section className="retro-section retro-section--process" aria-labelledby="refund-process-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="refund-process-heading" className="retro-font-display retro-bold retro-section-title">
                {refundsPageContent.statusHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {refundsPageContent.statusSubtext}
              </p>
            </div>

            <div className="retro-steps">
              {refundStatusSteps.map((step, i) => (
                <div key={i} className="retro-step">
                  <span className="retro-step-number retro-font-display retro-bold">{step.step}</span>
                  <div className="retro-step-content">
                    <h3 className="retro-step-title retro-font-display retro-bold">
                      {step.title.toUpperCase()}
                    </h3>
                    <p className="retro-step-desc retro-font-body">{step.description}</p>
                  </div>
                  {i < refundStatusSteps.length - 1 && (
                    <div className="retro-step-connector" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="retro-section" aria-labelledby="refund-eligibility-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="refund-eligibility-heading" className="retro-font-display retro-bold retro-section-title">
                {refundsPageContent.eligibilityHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {refundsPageContent.eligibilitySubtext}
              </p>
            </div>

            <div className="retro-eligibility-grid">
              <div className="retro-eligibility-col">
                <h3 className="retro-eligibility-heading retro-eligibility-heading--eligible retro-font-display retro-bold">
                  <CheckCircle size={22} weight="fill" aria-hidden="true" /> ELIGIBLE
                </h3>
                <ul className="retro-eligibility-list" role="list">
                  {refundEligibility
                    .filter((e) => e.eligible)
                    .map((item, i) => (
                      <li key={i} className="retro-eligibility-item retro-eligibility-item--eligible">
                        <CheckCircle size={16} weight="fill" className="retro-eligibility-icon--eligible" aria-hidden="true" />
                        <span className="retro-font-body">{item.text}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="retro-eligibility-col">
                <h3 className="retro-eligibility-heading retro-eligibility-heading--ineligible retro-font-display retro-bold">
                  <XCircle size={22} weight="fill" aria-hidden="true" /> NOT ELIGIBLE
                </h3>
                <ul className="retro-eligibility-list" role="list">
                  {refundEligibility
                    .filter((e) => !e.eligible)
                    .map((item, i) => (
                      <li key={i} className="retro-eligibility-item retro-eligibility-item--ineligible">
                        <XCircle size={16} weight="fill" className="retro-eligibility-icon--ineligible" aria-hidden="true" />
                        <span className="retro-font-body">{item.text}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="retro-section retro-section--faq" aria-labelledby="refund-faq-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="refund-faq-heading" className="retro-font-display retro-bold retro-section-title">
                {refundsPageContent.faqHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {refundsPageContent.faqSubtext}
              </p>
            </div>

            <div className="retro-faq-list" role="list">
              {refundFAQs.map((faq, i) => {
                const isOpen = openFAQ === i;
                return (
                  <div
                    key={i}
                    className={'retro-faq-item' + (isOpen ? ' retro-faq-item--open' : '')}
                    role="listitem"
                  >
                    <button
                      type="button"
                      className="retro-faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={'refund-faq-panel-' + i}
                      onClick={toggleFAQ(i)}
                    >
                      <span className="retro-faq-question retro-font-display">{faq.question}</span>
                      <CaretDown
                        size={18}
                        weight="bold"
                        className={'retro-faq-chevron' + (isOpen ? ' retro-faq-chevron--open' : '')}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div id={'refund-faq-panel-' + i} className="retro-faq-answer" role="region">
                        <p className="retro-font-body">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Start a return">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Lifebuoy size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {refundsPageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {refundsPageContent.ctaText}
              </p>
              <div className="retro-cta-actions">
                <Link to="/returns" className="retro-button retro-button--primary retro-font-display">
                  {refundsPageContent.ctaPrimary.toUpperCase()} <ArrowRight size={20} weight="bold" />
                </Link>
                <Link to="/contact" className="retro-button retro-button--secondary retro-font-display">
                  {refundsPageContent.ctaSecondary.toUpperCase()} <ArrowRight size={18} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};
