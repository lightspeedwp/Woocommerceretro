import React, { useState } from 'react';
import { Container } from '../common/Container';
import { DarkModeToggle } from '../common/DarkModeToggle';
import { Palette, TextT, Stack as Layers, GridFour, Check, Copy, Sparkle } from '../../utils/phosphor-compat';

/**
 * PageStyleGuide Template - Retro Redesign
 *
 * Design system style guide overview with colors, typography, spacing, and components.
 *
 * @template
 * @route /dev-tools/style-guide
 */
export const PageStyleGuide = () => {
  const [activeTab, setActiveTab] = useState('colors');

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
  };

  const ColorSwatch = ({ name, value, usage, bgColor }: { name: string; value: string; usage: string; bgColor: string }) => (
    <button
      className="retro-color-card"
      onClick={() => handleCopyColor(value)}
    >
      <div className="retro-color-card__swatch" style={{ backgroundColor: bgColor }} />
      <div className="retro-color-card__info">
        <div className="retro-font-display retro-bold retro-color-card__name">{name}</div>
        <div className="retro-font-body retro-color-card__value">{value}</div>
        <div className="retro-font-body retro-color-card__usage">{usage}</div>
      </div>
    </button>
  );

  const overviewCards = [
    { icon: Palette, title: 'COLORS', desc: 'Brand palette & retro colors' },
    { icon: TextT, title: 'TYPOGRAPHY', desc: 'Pixel fonts & display type' },
    { icon: Layers, title: 'SPACING', desc: 'Chunky block spacing system' },
    { icon: GridFour, title: 'COMPONENTS', desc: 'UI component library' }
  ];

  const typographyScale = [
    { label: 'Display', tag: '.retro-font-display', example: 'THE QUICK BROWN FOX', class: 'retro-font-display retro-bold', size: '3rem' },
    { label: 'Heading 1', tag: '<h1>', example: 'JUMPS OVER THE', class: 'retro-font-display retro-bold', size: '2.5rem' },
    { label: 'Heading 2', tag: '<h2>', example: 'LAZY DOG', class: 'retro-font-display retro-bold', size: '2rem' },
    { label: 'Heading 3', tag: '<h3>', example: 'PACK MY BOX WITH', class: 'retro-font-display retro-bold', size: '1.5rem' },
    { label: 'Heading 4', tag: '<h4>', example: 'FIVE DOZEN JUGS', class: 'retro-font-display retro-bold', size: '1.25rem' },
    { label: 'Body', tag: '<p>', example: 'Sphinx of black quartz, judge my vow.', class: 'retro-font-body', size: '1rem' },
    { label: 'Small', tag: '<small>', example: 'The five boxing wizards jump quickly', class: 'retro-font-body', size: '0.875rem' }
  ];

  const spacingScale = [
    { name: '100', var: 'var(--space--100)', px: '4px', size: 4 },
    { name: '200', var: 'var(--space--200)', px: '8px', size: 8 },
    { name: '300', var: 'var(--space--300)', px: '12px', size: 12 },
    { name: '400', var: 'var(--space--400)', px: '16px', size: 16 },
    { name: '500', var: 'var(--space--500)', px: '20px', size: 20 },
    { name: '600', var: 'var(--space--600)', px: '24px', size: 24 },
    { name: '700', var: 'var(--space--700)', px: '32px', size: 32 },
    { name: '800', var: 'var(--space--800)', px: '40px', size: 40 },
    { name: '900', var: 'var(--space--900)', px: '48px', size: 48 },
    { name: '1000', var: 'var(--space--1000)', px: '56px', size: 56 },
    { name: '1100', var: 'var(--space--1100)', px: '64px', size: 64 }
  ];

  return (
    <>
      <DarkModeToggle />
      <div className="retro-devtools-page retro-style-guide">

        {/* Header Section */}
        <section className="retro-style-guide__header">
          <Container>
            <div className="retro-style-guide__title-box">
              <h1 className="retro-font-display retro-bold retro-style-guide__title">STYLE GUIDE</h1>
              <p className="retro-font-body retro-style-guide__subtitle">
                Interactive design system reference with colors, typography, spacing, and component examples.
              </p>
            </div>
          </Container>
        </section>

        {/* Overview Cards */}
        <section className="retro-style-guide__overview">
          <Container>
            <div className="retro-style-guide__overview-grid">
              {overviewCards.map((item, idx) => (
                <div key={idx} className="retro-style-guide__overview-card">
                  <div className="retro-style-guide__overview-icon">
                    <item.icon size={48} weight="bold" />
                  </div>
                  <h3 className="retro-font-display retro-bold retro-style-guide__overview-title">{item.title}</h3>
                  <p className="retro-font-body retro-style-guide__overview-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Colors Section */}
        <section className="retro-style-guide__section retro-style-guide__section--alt">
          <Container>
            <div className="retro-style-guide__section-header">
              <h2 className="retro-font-display retro-bold retro-style-guide__section-title">COLOR PALETTE</h2>
              <p className="retro-font-body retro-style-guide__section-desc">Click any color to copy its hex value to your clipboard</p>
            </div>

            <div className="retro-style-guide__color-groups">
              {/* Brand Colors */}
              <div>
                <h3 className="retro-font-display retro-bold retro-style-guide__color-group-title">Base theme colors</h3>
                <div className="retro-style-guide__color-grid">
                  <ColorSwatch name="Paper" value="var(--color-paper)" bgColor="var(--color-paper)" usage="Main background color" />
                  <ColorSwatch name="Paper Deep" value="var(--color-paper-deep)" bgColor="var(--color-paper-deep)" usage="Alt background / cards" />
                  <ColorSwatch name="Ink" value="var(--color-ink)" bgColor="var(--color-ink)" usage="Primary text & borders" />
                  <ColorSwatch name="Signal" value="var(--color-signal)" bgColor="var(--color-signal)" usage="Accents & CTAs" />
                </div>
              </div>

              {/* Semantic Colors */}
              <div>
                <h3 className="retro-font-display retro-bold retro-style-guide__color-group-title">Semantic colors</h3>
                <div className="retro-style-guide__color-grid">
                  <ColorSwatch name="Success" value="var(--wp--preset--color--success)" bgColor="var(--wp--preset--color--success)" usage="Confirmations" />
                  <ColorSwatch name="Error" value="var(--wp--preset--color--error)" bgColor="var(--wp--preset--color--error)" usage="Warnings & destructive" />
                  <ColorSwatch name="Muted" value="var(--color-muted)" bgColor="var(--color-muted)" usage="Secondary text" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Typography Section */}
        <section className="retro-style-guide__section">
          <Container>
            <div className="retro-style-guide__section-header">
              <h2 className="retro-font-display retro-bold retro-style-guide__section-title">TYPOGRAPHY SCALE</h2>
              <p className="retro-font-body retro-style-guide__section-desc">Fluid typography system with responsive scaling across all device sizes</p>
            </div>

            <div className="retro-style-guide__type-panel">
              {typographyScale.map((item, idx) => (
                <div key={idx} className={`retro-style-guide__type-row${idx < 6 ? ' retro-style-guide__type-row--border' : ''}`}>
                  <div className="retro-style-guide__type-meta">
                    <span className="retro-font-display retro-bold retro-style-guide__type-label">{item.label}</span>
                    <code className="retro-style-guide__type-tag">
                      {item.tag}
                    </code>
                  </div>
                  <div className={`${item.class} retro-style-guide__type-sample`} style={{ fontSize: item.size }}>{item.example}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Spacing Section */}
        <section className="retro-style-guide__section retro-style-guide__section--alt-top">
          <Container>
            <div className="retro-style-guide__section-header">
              <h2 className="retro-font-display retro-bold retro-style-guide__section-title">SPACING SCALE</h2>
              <p className="retro-font-body retro-style-guide__section-desc">4px-based spacing system with CSS custom properties for consistent layouts</p>
            </div>

            <div className="retro-style-guide__spacing-list">
              {spacingScale.map((item, idx) => (
                <div key={idx} className="retro-style-guide__spacing-row">
                  <div className="retro-style-guide__spacing-bar" style={{ width: `${item.size}px` }} />
                  <div className="retro-style-guide__spacing-info">
                    <span className="retro-font-display retro-bold retro-style-guide__spacing-name">{item.name}</span>
                    <code className="retro-style-guide__spacing-var">
                      {item.var}
                    </code>
                    <span className="retro-font-body retro-style-guide__spacing-px">{item.px}</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default PageStyleGuide;
