/**
 * PageAffiliateProgramRetro - Retro-Styled Affiliate Program Page
 *
 * Affiliate program page with retro handheld gaming aesthetic.
 * Features partner benefits, commission tiers table, how-to-join steps,
 * and application CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Benefits grid with neon icon circles
 * - Commission tier table with neon rate highlights
 * - 3-step join process
 * - Dual-button application CTA
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/affiliate-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import {
  Users,
  CurrencyDollar as DollarSign,
  ShareNetwork as Share2,
  ChartBar as BarChart3,
  CheckCircle,
  Lightning as Zap,
  ArrowRight,
  Handshake,
} from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { affiliateBenefits, commissionTiers, affiliateProgramPageContent } from '../../data/affiliateProgram';

const benefitIcons: Record<string, React.ComponentType<any>> = {
  'commission': DollarSign,
  'analytics': BarChart3,
  'cookie': Zap,
  'resources': Share2,
  'support': Users,
  'payouts': CheckCircle,
};

const joinSteps = [
  { step: '1', title: 'Apply', description: 'Submit a brief application with your platform details.' },
  { step: '2', title: 'Get Approved', description: 'We review applications within 48 hours.' },
  { step: '3', title: 'Share & Earn', description: 'Use your unique links to promote products and earn commissions.' },
];

export const PageAffiliateProgramRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['AFFILIATE', 'PROGRAM']}
          highlight="EARN BIG!"
          description="Partner with us and earn commissions by sharing products you love with your audience."
          images={{
            main: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MzI1MjA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1645848810565-ff3c1de0da09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluZmx1ZW5jZXIlMjBjb250ZW50JTIwY3JlYXRvcnxlbnwxfHx8fDE3NzMyODM2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZSUyMGJ1c2luZXNzJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzMzNDMxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Benefits Section */}
        <section className="retro-section" aria-labelledby="affiliate-benefits-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="affiliate-benefits-heading" className="retro-font-display retro-bold retro-section-title">
                {affiliateProgramPageContent.benefitsHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-grid retro-grid-3">
              {affiliateBenefits.map((benefit: any) => {
                const Icon = benefitIcons[benefit.id] || CheckCircle;
                return (
                  <div key={benefit.id} className="retro-card retro-card-glow">
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

        {/* Commission Structure Section */}
        <section className="retro-section retro-section--commission" aria-labelledby="affiliate-commission-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="affiliate-commission-heading" className="retro-font-display retro-bold retro-section-title">
                {affiliateProgramPageContent.commissionHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-table-wrap">
              <table className="retro-table">
                <thead>
                  <tr>
                    <th className="retro-table__header retro-font-display">Tier</th>
                    <th className="retro-table__header retro-font-display">Monthly Sales</th>
                    <th className="retro-table__header retro-font-display">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {commissionTiers.map((tier: any) => (
                    <tr key={tier.id} className="retro-table__row">
                      <td className="retro-table__cell retro-font-display retro-bold">{tier.tier.toUpperCase()}</td>
                      <td className="retro-table__cell retro-font-body">{tier.sales}</td>
                      <td className="retro-table__cell retro-commission-rate retro-font-display retro-bold">{tier.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="retro-section" aria-labelledby="affiliate-join-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="affiliate-join-heading" className="retro-font-display retro-bold retro-section-title">
                {affiliateProgramPageContent.howToJoinHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-steps">
              {joinSteps.map((step, i) => (
                <div key={i} className="retro-step">
                  <span className="retro-step-number retro-font-display retro-bold">{step.step}</span>
                  <div className="retro-step-content">
                    <h3 className="retro-step-title retro-font-display retro-bold">
                      {step.title.toUpperCase()}
                    </h3>
                    <p className="retro-step-desc retro-font-body">{step.description}</p>
                  </div>
                  {i < joinSteps.length - 1 && (
                    <div className="retro-step-connector" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Apply to affiliate program">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Handshake size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {affiliateProgramPageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {affiliateProgramPageContent.ctaText}
              </p>
              <div className="retro-cta-actions">
                <Link to="/contact" className="retro-button retro-button--primary retro-font-display">
                  {affiliateProgramPageContent.ctaButtonPrimary.toUpperCase()} <ArrowRight size={20} weight="bold" />
                </Link>
                <Link to="/faq" className="retro-button retro-button--secondary retro-font-display">
                  {affiliateProgramPageContent.ctaButtonSecondary.toUpperCase()} <ArrowRight size={18} weight="bold" />
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