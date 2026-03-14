/**
 * PageAccessibilityStatementRetro - Retro-Styled Accessibility Statement Page
 *
 * Accessibility statement with retro handheld gaming aesthetic.
 * Features commitment text, accessibility feature cards, standards checklist,
 * feedback section, and contact CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Commitment prose section
 * - Accessibility feature cards with icons
 * - Standards compliance checklist
 * - Feedback & assistance section
 * - Contact CTA with dual buttons
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/accessibility-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { Keyboard, Eye, Monitor, SpeakerHigh as Volume2, CheckCircle, ArrowRight, Envelope, Lifebuoy } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { accessibilityFeatures, accessibilityStandards, accessibilityPageContent } from '../../data/accessibilityStatement';

const featureIcons: Record<string, React.ComponentType<any>> = {
  'keyboard': Keyboard,
  'screen-reader': Eye,
  'responsive': Monitor,
  'alt-text': Volume2,
};

export const PageAccessibilityStatementRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['ACCESS', 'FOR ALL']}
          highlight="INCLUSIVE!"
          description="We are committed to making our website accessible to everyone, regardless of ability or technology."
          images={{
            main: 'https://images.unsplash.com/photo-1556505619-560ec2cb7c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMGFjY2Vzc2liaWxpdHklMjB0ZWNobm9sb2d5JTIwaW5jbHVzaXZlfGVufDF8fHx8MTc3MzM0MjY2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1740721455292-e5cd29544381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBzY3JlZW4lMjBhY2Nlc3NpYmlsaXR5JTIwZGVzaWdufGVufDF8fHx8MTc3MzM0MjY3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1660839061462-c9c8ceecb33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbGxlJTIwYXNzaXN0aXZlJTIwdGVjaG5vbG9neSUyMGhhbmRzfGVufDF8fHx8MTc3MzM0MjY3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Commitment Section */}
        <section className="retro-section" aria-labelledby="a11y-commitment-heading">
          <div className="retro-container">
            <div className="retro-prose">
              <h2 id="a11y-commitment-heading" className="retro-font-display retro-bold retro-section-title">
                {accessibilityPageContent.commitmentHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-prose-text">
                {accessibilityPageContent.commitmentText}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="retro-section retro-section--a11y-features" aria-labelledby="a11y-features-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="a11y-features-heading" className="retro-font-display retro-bold retro-section-title">
                {accessibilityPageContent.featuresHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-grid retro-grid-2">
              {accessibilityFeatures.map((feature) => {
                const Icon = featureIcons[feature.id] || Eye;
                return (
                  <div key={feature.id} className="retro-card retro-card-glow">
                    <div className="retro-feature-icon">
                      <Icon size={32} weight="bold" aria-hidden="true" />
                    </div>
                    <h3 className="retro-card-title retro-font-display retro-bold">
                      {feature.title.toUpperCase()}
                    </h3>
                    <p className="retro-card-desc retro-font-body">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="retro-section" aria-labelledby="a11y-standards-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="a11y-standards-heading" className="retro-font-display retro-bold retro-section-title">
                {accessibilityPageContent.standardsHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-checklist-block">
              {accessibilityStandards.map((standard, i) => (
                <div key={i} className="retro-checklist__item">
                  <CheckCircle size={18} weight="bold" className="retro-checklist__icon" aria-hidden="true" />
                  <span className="retro-font-body">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="retro-section retro-section--feedback" aria-labelledby="a11y-feedback-heading">
          <div className="retro-container">
            <div className="retro-prose">
              <h2 id="a11y-feedback-heading" className="retro-font-display retro-bold retro-section-title">
                {accessibilityPageContent.feedbackHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-prose-text">
                {accessibilityPageContent.feedbackText1}
              </p>
              <p className="retro-font-body retro-prose-text">
                {accessibilityPageContent.feedbackText2}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Report accessibility issue">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Lifebuoy size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {accessibilityPageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {accessibilityPageContent.ctaText}
              </p>
              <div className="retro-cta-actions">
                <Link to="/contact" className="retro-button retro-button--primary retro-font-display">
                  {accessibilityPageContent.ctaButtonPrimary.toUpperCase()} <ArrowRight size={20} weight="bold" />
                </Link>
                <a href="mailto:accessibility@example.com" className="retro-button retro-button--secondary retro-font-display">
                  {accessibilityPageContent.ctaButtonSecondary.toUpperCase()} <Envelope size={18} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};
