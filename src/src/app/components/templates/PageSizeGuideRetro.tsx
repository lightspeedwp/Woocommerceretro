/**
 * PageSizeGuideRetro - Retro-Styled Size Guide Page
 *
 * Size guide page with retro handheld gaming aesthetic.
 * Features measurement instructions, tabbed size charts, and fit tips.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Measurement instruction cards with neon icons
 * - Tabbed size charts by category
 * - Fit tip callout banner
 * - Contact CTA section
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/size-guide-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React, { useState } from 'react';
import { Link } from 'react-router';
import { Ruler, Info, ArrowRight, ChatCircle } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { sizeData, categoryLabels, measurementInstructions, sizeGuidePageContent } from '../../data/sizeGuide';

export const PageSizeGuideRetro = () => {
  const [activeCategory, setActiveCategory] = useState('tops');

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['SIZE', 'GUIDE']}
          highlight="PERFECT FIT!"
          description="Find your perfect fit with our detailed size charts and measurement instructions."
          images={{
            main: 'https://images.unsplash.com/photo-1753162658653-d33c53910d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFzdXJpbmclMjB0YXBlJTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc3MzM0MjY2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1767532857468-78145d499786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMHJhY2slMjBvcmdhbml6ZWQlMjB3YXJkcm9iZXxlbnwxfHx8fDE3NzMzNDI2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1731504799625-f18e50d9a82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBmYWJyaWMlMjBtYXRlcmlhbCUyMHRleHRpbGV8ZW58MXx8fHwxNzczMzQyNjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* How to Measure Section */}
        <section className="retro-section" aria-labelledby="size-measure-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="size-measure-heading" className="retro-font-display retro-bold retro-section-title">
                {sizeGuidePageContent.measureHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-grid retro-grid-2">
              {measurementInstructions.map((item, i) => (
                <div key={i} className="retro-card retro-card--glow">
                  <div className="retro-feature-icon">
                    <Ruler size={32} weight="bold" aria-hidden="true" />
                  </div>
                  <h3 className="retro-card__title retro-font-display retro-bold">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="retro-card__desc retro-font-body">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Size Charts Section */}
        <section className="retro-section retro-section--size-charts" aria-labelledby="size-charts-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="size-charts-heading" className="retro-font-display retro-bold retro-section-title">
                {sizeGuidePageContent.chartsHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-tabs" role="tablist" aria-label="Size chart categories">
              {Object.keys(sizeData).map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={'retro-tab retro-font-display' + (activeCategory === cat ? ' retro-tab--active' : '')}
                  onClick={() => setActiveCategory(cat)}
                >
                  {categoryLabels[cat].toUpperCase()}
                </button>
              ))}
            </div>

            <div className="retro-table-wrap" role="tabpanel">
              <table className="retro-table">
                <thead>
                  <tr>
                    {sizeData[activeCategory].headers.map((header, i) => (
                      <th key={i} className="retro-table__header retro-font-display">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeData[activeCategory].rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="retro-table__row">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="retro-table__cell retro-font-body">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="retro-info-banner">
              <Info size={20} weight="bold" className="retro-info-banner__icon" aria-hidden="true" />
              <span className="retro-font-body">{sizeGuidePageContent.fitTip}</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Get sizing help">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <ChatCircle size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {sizeGuidePageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {sizeGuidePageContent.ctaText}
              </p>
              <Link to="/contact" className="retro-btn retro-btn--primary retro-font-display">
                {sizeGuidePageContent.ctaButton.toUpperCase()} <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};