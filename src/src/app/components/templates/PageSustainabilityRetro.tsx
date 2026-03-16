/**
 * PageSustainabilityRetro - Retro-Styled Sustainability Page
 *
 * Sustainability page with retro handheld gaming aesthetic.
 * Features impact stats, initiative cards, 2030 goals checklist, and shop CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Neon stat counters with glowing values
 * - Initiative cards with icon circles
 * - 2030 goals checklist
 * - Shop eco-friendly CTA
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/sustainability-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { Leaf, Recycle, Drop as Droplets, Sun, Tree as TreePine, Medal as Award, Check, ArrowRight, ShoppingBag } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { sustainabilityInitiatives, sustainabilityStats, sustainabilityGoals, sustainabilityPageContent } from '../../data/sustainability';

const initiativeIcons: Record<string, React.ComponentType<any>> = {
  'Recycle': Recycle,
  'Leaf': Leaf,
  'Droplets': Droplets,
  'Sun': Sun,
  'TreePine': TreePine,
  'Award': Award,
};

export const PageSustainabilityRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['ECO', 'FRIENDLY']}
          highlight="PLANET FIRST!"
          description="Our commitment to the planet is woven into everything we do — from sourcing to shipping."
          images={{
            main: 'https://images.unsplash.com/photo-1645307356404-407a1083ec59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMHN1c3RhaW5hYmlsaXR5JTIwbmF0dXJlfGVufDF8fHx8MTc3MzMzNDI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1669384537216-24740a56a2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xlZCUyMHBhY2thZ2luZyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc3MzM0MjY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NzMyNTAwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Impact Stats Section */}
        <section className="retro-section retro-section--stats" aria-labelledby="sustainability-stats-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="sustainability-stats-heading" className="retro-font-display retro-bold retro-section-title">
                OUR IMPACT
              </h2>
            </div>
            <div className="retro-stats-grid">
              {sustainabilityStats.map((stat, i) => (
                <div key={i} className="retro-stat-card">
                  <span className="retro-stat-value retro-font-display retro-bold">{stat.value}</span>
                  <span className="retro-stat-label retro-font-body">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="retro-section" aria-labelledby="sustainability-initiatives-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="sustainability-initiatives-heading" className="retro-font-display retro-bold retro-section-title">
                {sustainabilityPageContent.initiativesHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {sustainabilityPageContent.initiativesDescription}
              </p>
            </div>

            <div className="retro-grid retro-grid-3">
              {sustainabilityInitiatives.map((initiative, i) => {
                const Icon = initiativeIcons[initiative.iconName] || Leaf;
                return (
                  <div key={i} className="retro-card retro-card-glow">
                    <div className="retro-feature-icon">
                      <Icon size={32} weight="bold" aria-hidden="true" />
                    </div>
                    <h3 className="retro-card-title retro-font-display retro-bold">
                      {initiative.title.toUpperCase()}
                    </h3>
                    <p className="retro-card-desc retro-font-body">
                      {initiative.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2030 Goals Section */}
        <section className="retro-section retro-section--goals" aria-labelledby="sustainability-goals-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="sustainability-goals-heading" className="retro-font-display retro-bold retro-section-title">
                {sustainabilityPageContent.goalsHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-goals-list">
              {sustainabilityGoals.map((goal, i) => (
                <div key={i} className="retro-goal-item">
                  <span className="retro-goal-check">
                    <Check size={16} weight="bold" aria-hidden="true" />
                  </span>
                  <span className="retro-font-body retro-goal-text">{goal.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Shop sustainable products">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <ShoppingBag size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {sustainabilityPageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {sustainabilityPageContent.ctaText}
              </p>
              <Link to="/shop" className="retro-button retro-button--primary retro-font-display">
                SHOP ECO-FRIENDLY <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};