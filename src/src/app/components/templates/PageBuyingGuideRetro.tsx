/**
 * PageBuyingGuideRetro - Retro-Styled Buying Guide Page
 *
 * Buying guide with retro handheld gaming aesthetic.
 * Features shopping tips, category guides, and help CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Shopping tip cards with checklist items
 * - Category guide grid with linked cards
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/buying-guide-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { CheckCircle, Lightbulb, Bag as ShoppingBag, Star, ArrowRight } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { buyingGuides, categoryGuides, buyingGuidePageContent } from '../../data/buyingGuide';

export const PageBuyingGuideRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['BUYING', 'GUIDE']}
          highlight="SHOP SMART!"
          description="Expert tips and category guides to help you make the best purchasing decisions."
          images={{
            main: 'https://images.unsplash.com/photo-1611611158648-437f072cb7fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGd1aWRlJTIwcmV0YWlsJTIwc3RvcmV8ZW58MXx8fHwxNzczMzQyNjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1740126102414-fee092192258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcXVhbGl0eSUyMGNoZWNrJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NzMzNDI2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1758520387682-1ae18d2ebc42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNob3BwaW5nJTIwYmFncyUyMGhhcHB5fGVufDF8fHx8MTc3MzM0MjY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Shopping Tips Section */}
        <section className="retro-section" aria-labelledby="buying-tips-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="buying-tips-heading" className="retro-font-display retro-bold retro-section-title">
                {buyingGuidePageContent.tipsHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-tips-list">
              {buyingGuides.map((guide: any) => (
                <div key={guide.id} className="retro-tip-card">
                  <div className="retro-tip-card__header">
                    <div className="retro-feature-icon retro-feature-icon--sm">
                      <Lightbulb size={24} weight="bold" aria-hidden="true" />
                    </div>
                    <h3 className="retro-tip-card__title retro-font-display retro-bold">
                      {guide.title.toUpperCase()}
                    </h3>
                  </div>
                  <ul className="retro-checklist" role="list">
                    {guide.tips.map((tip: string, i: number) => (
                      <li key={i} className="retro-checklist__item">
                        <CheckCircle size={16} weight="bold" className="retro-checklist__icon" aria-hidden="true" />
                        <span className="retro-font-body">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Guides Section */}
        <section className="retro-section retro-section--categories" aria-labelledby="buying-categories-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="buying-categories-heading" className="retro-font-display retro-bold retro-section-title">
                {buyingGuidePageContent.categoriesHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-grid retro-grid-3">
              {categoryGuides.map((cat: any) => (
                <Link key={cat.id} to={cat.link} className="retro-card retro-card-glow retro-card--link">
                  <div className="retro-feature-icon">
                    <ShoppingBag size={32} weight="bold" aria-hidden="true" />
                  </div>
                  <h3 className="retro-card-title retro-font-display retro-bold">
                    {cat.name.toUpperCase()}
                  </h3>
                  <p className="retro-card-desc retro-font-body">
                    {cat.description}
                  </p>
                  <span className="retro-card-link retro-font-display">
                    BROWSE <ArrowRight size={14} weight="bold" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Need help choosing">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Star size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {buyingGuidePageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {buyingGuidePageContent.ctaText}
              </p>
              <Link to="/contact" className="retro-button retro-button--primary retro-font-display">
                {buyingGuidePageContent.ctaButton.toUpperCase()} <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};