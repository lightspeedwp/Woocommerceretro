/**
 * PageWarrantyRetro - Retro-Styled Warranty Information Page
 *
 * Warranty information page with retro handheld gaming aesthetic.
 * Features warranty overview, covered/not covered split, claim steps,
 * and contact CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Warranty overview with shield icon
 * - Covered vs not covered eligibility columns
 * - 3-step claim process with numbered steps
 * - Contact support CTA
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/warranty-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { ShieldCheck, CheckCircle, XCircle, ArrowRight, Lifebuoy } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { warrantyCovered, warrantyNotCovered, warrantyClaimSteps, warrantyPageContent } from '../../data/warranty';

export const PageWarrantyRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['WARRANTY', 'INFO']}
          highlight="PROTECTED!"
          description="We stand behind the quality of our products. Learn about our warranty coverage."
          images={{
            main: 'https://images.unsplash.com/photo-1625465104349-d271c6a7a36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJyYW50eSUyMHNoaWVsZCUyMHByb3RlY3Rpb24lMjBndWFyYW50ZWV8ZW58MXx8fHwxNzczMzQzMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1724436494122-566fe0efed83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY3JhZnRzbWFuc2hpcCUyMGhhbmRtYWRlJTIwZGV0YWlsfGVufDF8fHx8MTc3MzM0MzE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1683765084506-3ad53915aa01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwaW5zcGVjdGlvbiUyMG1hbnVmYWN0dXJpbmclMjBxdWFsaXR5fGVufDF8fHx8MTc3MzM0MzE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Warranty Overview Section */}
        <section className="retro-section" aria-labelledby="warranty-overview-heading">
          <div className="retro-container">
            <div className="retro-warranty-overview">
              <div className="retro-feature-icon retro-feature-icon--lg">
                <ShieldCheck size={48} weight="bold" aria-hidden="true" />
              </div>
              <h2 id="warranty-overview-heading" className="retro-font-display retro-bold retro-section-title">
                {warrantyPageContent.overviewHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-prose-text">
                {warrantyPageContent.overviewDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="retro-section retro-section--coverage" aria-labelledby="warranty-coverage-heading">
          <div className="retro-container">
            <div className="retro-eligibility-grid">
              <div className="retro-eligibility-col">
                <h3 className="retro-eligibility-heading retro-eligibility-heading--eligible retro-font-display retro-bold">
                  <CheckCircle size={22} weight="fill" aria-hidden="true" /> {warrantyPageContent.coveredHeading.toUpperCase()}
                </h3>
                <ul className="retro-eligibility-list" role="list">
                  {warrantyCovered.map((item, i) => (
                    <li key={i} className="retro-eligibility-item retro-eligibility-item--eligible">
                      <CheckCircle size={16} weight="fill" className="retro-eligibility-icon--eligible" aria-hidden="true" />
                      <span className="retro-font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="retro-eligibility-col">
                <h3 className="retro-eligibility-heading retro-eligibility-heading--ineligible retro-font-display retro-bold">
                  <XCircle size={22} weight="fill" aria-hidden="true" /> {warrantyPageContent.notCoveredHeading.toUpperCase()}
                </h3>
                <ul className="retro-eligibility-list" role="list">
                  {warrantyNotCovered.map((item, i) => (
                    <li key={i} className="retro-eligibility-item retro-eligibility-item--ineligible">
                      <XCircle size={16} weight="fill" className="retro-eligibility-icon--ineligible" aria-hidden="true" />
                      <span className="retro-font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Claim Steps Section */}
        <section className="retro-section" aria-labelledby="warranty-claim-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="warranty-claim-heading" className="retro-font-display retro-bold retro-section-title">
                {warrantyPageContent.claimHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-steps">
              {warrantyClaimSteps.map((step, i) => (
                <div key={i} className="retro-step">
                  <span className="retro-step-number retro-font-display retro-bold">{step.step}</span>
                  <div className="retro-step-content">
                    <h3 className="retro-step-title retro-font-display retro-bold">
                      {step.title.toUpperCase()}
                    </h3>
                    <p className="retro-step-desc retro-font-body">{step.description}</p>
                  </div>
                  {i < warrantyClaimSteps.length - 1 && (
                    <div className="retro-step-connector" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Warranty support">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Lifebuoy size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {warrantyPageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {warrantyPageContent.ctaText}
              </p>
              <Link to="/contact" className="retro-button retro-button--primary retro-font-display">
                CONTACT SUPPORT <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};