/**
 * PagePressMediaRetro - Retro-Styled Press & Media Page
 *
 * Press page with retro handheld gaming aesthetic.
 * Features press release timeline, media kit downloads, and contact CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Press release list with date badges
 * - Media kit download items
 * - Press contact CTA with dual buttons
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/press-media-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { DownloadSimple as Download, Camera, Envelope, ArrowRight, Newspaper } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { pressReleases, mediaKitItems, pressMediaPageContent } from '../../data/pressMedia';

export const PagePressMediaRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['PRESS', '& MEDIA']}
          highlight="NEWSROOM!"
          description="News, press releases, and media resources for journalists, bloggers, and partners."
          images={{
            main: 'https://images.unsplash.com/photo-1771340590060-be598dfb81bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzcyUyMGNvbmZlcmVuY2UlMjBtaWNyb3Bob25lJTIwbWVkaWF8ZW58MXx8fHwxNzczMzQyNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1722684768315-11fc753354f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBqb3VybmFsaXNtJTIwcHVibGljYXRpb258ZW58MXx8fHwxNzczMzQyNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1763848843590-acd070c8b9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMHByZXNzJTIwZXZlbnR8ZW58MXx8fHwxNzczMzQyNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Press Releases Section */}
        <section className="retro-section" aria-labelledby="press-releases-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="press-releases-heading" className="retro-font-display retro-bold retro-section-title">
                {pressMediaPageContent.releasesHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-press-list">
              {pressReleases.map((release, i) => (
                <article key={i} className="retro-press-item">
                  <span className="retro-press-date retro-font-display">{release.date}</span>
                  <div className="retro-press-content">
                    <h3 className="retro-press-title retro-font-display retro-bold">
                      {release.title.toUpperCase()}
                    </h3>
                    <p className="retro-press-excerpt retro-font-body">{release.excerpt}</p>
                  </div>
                  <button
                    type="button"
                    className="retro-button retro-button--secondary retro-font-display"
                    aria-label={'Read full release: ' + release.title}
                  >
                    READ <ArrowRight size={14} weight="bold" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit Section */}
        <section className="retro-section retro-section--media-kit" aria-labelledby="media-kit-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="media-kit-heading" className="retro-font-display retro-bold retro-section-title">
                {pressMediaPageContent.mediaKitHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {pressMediaPageContent.mediaKitText}
              </p>
            </div>

            <div className="retro-media-kit-list">
              {mediaKitItems.map((item, i) => (
                <div key={i} className="retro-media-kit-item">
                  <div className="retro-media-kit-info">
                    <Camera size={22} weight="bold" className="retro-media-kit-icon" aria-hidden="true" />
                    <div className="retro-media-kit-body">
                      <h4 className="retro-media-kit-title retro-font-display retro-bold">
                        {item.title.toUpperCase()}
                      </h4>
                      <p className="retro-media-kit-desc retro-font-body">{item.description}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="retro-button retro-button--secondary retro-font-display"
                    aria-label={'Download ' + item.title}
                  >
                    <Download size={14} weight="bold" /> {item.type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Media inquiries">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Newspaper size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {pressMediaPageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {pressMediaPageContent.ctaText}
              </p>
              <div className="retro-cta-actions">
                <a href="mailto:press@example.com" className="retro-button retro-button--primary retro-font-display">
                  {pressMediaPageContent.ctaButtonPrimary.toUpperCase()} <Envelope size={18} weight="bold" />
                </a>
                <Link to="/contact" className="retro-button retro-button--secondary retro-font-display">
                  {pressMediaPageContent.ctaButtonSecondary.toUpperCase()} <ArrowRight size={18} weight="bold" />
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
