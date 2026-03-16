/**
 * PageOurStoryRetro - Retro-Styled Our Story Page
 *
 * Company origin story with retro handheld gaming aesthetic.
 * Features mission statement, core values, company timeline, and CTA section.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Interactive timeline with milestone markers
 * - Value cards with neon glow effects
 * - Mission statement highlight section
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/our-story-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { Heart, Globe, Users, Medal, ArrowRight, Rocket, Flag, Clock } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { storyMilestones, storyValues, ourStoryPageContent } from '../../data/ourStory';

const valueIcons: Record<string, React.ComponentType<any>> = {
  'Heart': Heart,
  'Globe': Globe,
  'Users': Users,
  'Award': Medal,
};

export const PageOurStoryRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['OUR', 'STORY']}
          highlight="EST. 2015"
          description="From humble beginnings to a global community — the journey of building something meaningful."
          images={{
            main: 'https://images.unsplash.com/photo-1760611656615-db3fad24a314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwc3RvcnklMjBvcmlnaW4lMjBzdGFydHVwJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzM0MjE0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1755606159507-a98b20d06578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGVjbyUyMGZyaWVuZGx5JTIwcGFja2FnaW5nfGVufDF8fHx8MTc3MzM0MjE1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1758520387706-791858e84944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc2hvcHBpbmclMjBiYWclMjByZXRhaWx8ZW58MXx8fHwxNzczMzQyMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Mission Section */}
        <section className="retro-section retro-section--mission" aria-labelledby="story-mission-heading">
          <div className="retro-container">
            <div className="retro-mission-card">
              <div className="retro-mission-icon">
                <Rocket size={48} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 id="story-mission-heading" className="retro-font-display retro-bold retro-mission-title">
                {ourStoryPageContent.missionHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-mission-text">
                {ourStoryPageContent.missionText}
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="retro-section" aria-labelledby="story-values-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="story-values-heading" className="retro-font-display retro-bold retro-section-title">
                {ourStoryPageContent.valuesHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-grid retro-grid-2">
              {storyValues.map((value: any, i: number) => {
                const Icon = valueIcons[value.icon] || Heart;
                return (
                  <div key={i} className="retro-card retro-card--glow">
                    <div className="retro-feature-icon">
                      <Icon size={32} weight="bold" aria-hidden="true" />
                    </div>
                    <h3 className="retro-card__title retro-font-display retro-bold">
                      {value.title.toUpperCase()}
                    </h3>
                    <p className="retro-card__desc retro-font-body">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="retro-section retro-section--timeline" aria-labelledby="story-journey-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="story-journey-heading" className="retro-font-display retro-bold retro-section-title">
                {ourStoryPageContent.journeyHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-timeline">
              {storyMilestones.map((milestone: any, i: number) => (
                <div key={i} className="retro-timeline-item">
                  <div className="retro-timeline-marker">
                    <Flag size={18} weight="bold" aria-hidden="true" />
                  </div>
                  <div className="retro-timeline-content">
                    <span className="retro-timeline-year retro-font-display">{milestone.year}</span>
                    <h3 className="retro-timeline-title retro-font-display retro-bold">
                      {milestone.title.toUpperCase()}
                    </h3>
                    <p className="retro-timeline-desc retro-font-body">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Join our story">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Heart size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {ourStoryPageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {ourStoryPageContent.ctaText}
              </p>
              <div className="retro-cta-actions">
                <Link to="/shop" className="retro-btn retro-btn--primary retro-font-display">
                  {ourStoryPageContent.ctaButtonPrimary.toUpperCase()} <ArrowRight size={20} weight="bold" />
                </Link>
                <Link to="/about/team" className="retro-btn retro-btn--secondary retro-font-display">
                  {ourStoryPageContent.ctaButtonSecondary.toUpperCase()} <ArrowRight size={20} weight="bold" />
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