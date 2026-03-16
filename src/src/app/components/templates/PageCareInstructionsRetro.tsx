/**
 * PageCareInstructionsRetro - Retro-Styled Care Instructions Page
 *
 * Care instructions page with retro handheld gaming aesthetic.
 * Features general care tips checklist and material-specific guide cards.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - General care tips checklist
 * - Material-specific care guide cards with icons
 * - Instruction lists per material
 * - Contact CTA section
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/care-instructions-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { Drop as Droplets, Wind, Thermometer, ShieldCheck, TShirt as Shirt, ArrowRight, ChatCircle } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { careGuides, generalCareTips, careInstructionsPageContent } from '../../data/careInstructions';

const careIcons: Record<string, React.ComponentType<any>> = {
  'cotton': Shirt,
  'linen': Wind,
  'wool': Thermometer,
  'synthetic': ShieldCheck,
  'leather': Droplets,
};

export const PageCareInstructionsRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['CARE', 'GUIDE']}
          highlight="KEEP IT FRESH!"
          description="Keep your products looking their best with our material-specific care guides."
          images={{
            main: 'https://images.unsplash.com/photo-1765021689917-ac93566d4cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwZmFicmljJTIwY2FyZSUyMGNsb3RoaW5nJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzczMzQzMTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1765015981399-8d024b928fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcm9uJTIwc3RlYW0lMjBnYXJtZW50JTIwcHJlc3Npbmd8ZW58MXx8fHwxNzczMzQzMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1662986788528-0851badbf423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2xkZWQlMjBjbG90aGVzJTIwb3JnYW5pemVkJTIwZHJhd2VyfGVufDF8fHx8MTc3MzM0MzE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* General Care Tips Section */}
        <section className="retro-section" aria-labelledby="care-tips-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="care-tips-heading" className="retro-font-display retro-bold retro-section-title">
                {careInstructionsPageContent.tipsHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-checklist-block">
              {generalCareTips.map((tip, i) => (
                <div key={i} className="retro-checklist__item">
                  <ShieldCheck size={18} weight="bold" className="retro-checklist__icon" aria-hidden="true" />
                  <span className="retro-font-body">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Material Care Guides Section */}
        <section className="retro-section retro-section--care-guides" aria-labelledby="care-guides-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="care-guides-heading" className="retro-font-display retro-bold retro-section-title">
                {careInstructionsPageContent.guidesHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-care-guides-list">
              {careGuides.map((guide) => {
                const Icon = careIcons[guide.id] || Shirt;
                return (
                  <div key={guide.id} className="retro-care-card">
                    <div className="retro-care-card__header">
                      <div className="retro-feature-icon retro-feature-icon--sm">
                        <Icon size={24} weight="bold" aria-hidden="true" />
                      </div>
                      <h3 className="retro-care-card__title retro-font-display retro-bold">
                        {guide.material.toUpperCase()}
                      </h3>
                    </div>
                    <ul className="retro-care-card__list" role="list">
                      {guide.instructions.map((instruction, iIdx) => (
                        <li key={iIdx} className="retro-care-card__item retro-font-body">
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Contact about product care">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <ChatCircle size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {careInstructionsPageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {careInstructionsPageContent.ctaText}
              </p>
              <Link to="/contact" className="retro-btn retro-btn--primary retro-font-display">
                {careInstructionsPageContent.ctaButton.toUpperCase()} <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};