/**
 * PageCareersRetro - Retro-Styled Careers Page
 *
 * Careers page with retro handheld gaming aesthetic.
 * Features employee benefits, open positions list, and contact CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Benefits grid with neon icon circles
 * - Open positions list with department/location/type meta
 * - Application CTA section
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/careers-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { Heart, Coffee, GraduationCap, Globe, Users, Briefcase, MapPin, Clock, ArrowRight, Envelope } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { careerBenefits, openPositions, careersPageContent } from '../../data/careers';

const benefitIcons: Record<string, React.ElementType> = {
  'health': Heart,
  'flexible': Coffee,
  'learning': GraduationCap,
  'pto': Globe,
  'discount': Users,
  'equity': Briefcase,
};

export const PageCareersRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['JOIN', 'OUR', 'SQUAD!']}
          highlight={openPositions.length + ' OPEN ROLES'}
          description="Join a team that is passionate about creating exceptional shopping experiences. We are always looking for talented, curious people."
          images={{
            main: 'https://images.unsplash.com/photo-1758876019673-704b039d405c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBncm93dGglMjBwcm9mZXNzaW9uYWwlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzMzNDIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1765366417033-5d74f04ca77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzMzMTc2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1758611972613-3afe657c3249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBlcmtzJTIwYmVuZWZpdHMlMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzczMzQyMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Benefits Section */}
        <section className="retro-section" aria-labelledby="careers-benefits-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="careers-benefits-heading" className="retro-font-display retro-bold retro-section-title">
                {careersPageContent.benefitsHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-grid retro-grid-3">
              {careerBenefits.map((benefit: any) => {
                const Icon = benefitIcons[benefit.id] || Heart;
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

        {/* Open Positions Section */}
        <section className="retro-section retro-section--positions" aria-labelledby="careers-positions-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="careers-positions-heading" className="retro-font-display retro-bold retro-section-title">
                {careersPageContent.positionsHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {careersPageContent.positionsText}
              </p>
            </div>

            <div className="retro-positions-list">
              {openPositions.map((position: any) => (
                <div key={position.id} className="retro-position-card">
                  <div className="retro-position-info">
                    <h3 className="retro-position-title retro-font-display retro-bold">
                      {position.title.toUpperCase()}
                    </h3>
                    <div className="retro-position-meta">
                      <span className="retro-position-tag retro-font-body">
                        <Briefcase size={14} weight="bold" aria-hidden="true" />
                        {position.department}
                      </span>
                      <span className="retro-position-tag retro-font-body">
                        <MapPin size={14} weight="bold" aria-hidden="true" />
                        {position.location}
                      </span>
                      <span className="retro-position-tag retro-font-body">
                        <Clock size={14} weight="bold" aria-hidden="true" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="retro-button retro-button--secondary retro-font-display"
                    aria-label={'Apply for ' + position.title}
                  >
                    APPLY <ArrowRight size={16} weight="bold" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Contact us about careers">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Envelope size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {careersPageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {careersPageContent.ctaText}
              </p>
              <Link to="/contact" className="retro-button retro-button--primary retro-font-display">
                {careersPageContent.ctaButton.toUpperCase()} <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};