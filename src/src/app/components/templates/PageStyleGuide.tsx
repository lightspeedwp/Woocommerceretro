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
const PageStyleGuide = () => {
  const [activeTab, setActiveTab] = useState('colors');

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
  };

  const ColorSwatch = ({ name, value, usage, bgColor }: { name: string; value: string; usage: string; bgColor: string }) => (
    <button
      onClick={() => handleCopyColor(value)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        border: '4px solid var(--color-ink)',
        backgroundColor: 'var(--color-paper)',
        cursor: 'pointer',
        boxShadow: '4px 4px 0 var(--color-ink)',
        padding: '0',
        transition: 'transform 0.1s, box-shadow 0.1s'
      }}
      onMouseEnter={(ev) => {
        ev.currentTarget.style.transform = 'translate(-2px, -2px)';
        ev.currentTarget.style.boxShadow = '6px 6px 0 var(--color-ink)';
      }}
      onMouseLeave={(ev) => {
        ev.currentTarget.style.transform = 'none';
        ev.currentTarget.style.boxShadow = '4px 4px 0 var(--color-ink)';
      }}
      onMouseDown={(ev) => {
        ev.currentTarget.style.transform = 'translate(4px, 4px)';
        ev.currentTarget.style.boxShadow = '0px 0px 0 var(--color-ink)';
      }}
      onMouseUp={(ev) => {
        ev.currentTarget.style.transform = 'translate(-2px, -2px)';
        ev.currentTarget.style.boxShadow = '6px 6px 0 var(--color-ink)';
      }}
    >
      <div style={{ height: '100px', width: '100%', backgroundColor: bgColor, borderBottom: '4px solid var(--color-ink)' }} />
      <div style={{ padding: '1rem' }}>
        <div className="retro-font-display retro-bold" style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--color-ink)' }}>{name}</div>
        <div className="retro-font-body" style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-signal)' }}>{value}</div>
        <div className="retro-font-body" style={{ fontSize: '0.75rem', color: 'var(--color-ink)', opacity: 0.8 }}>{usage}</div>
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
      <div className="retro-devtools-page" style={{ backgroundColor: 'var(--color-paper)', color: 'var(--color-ink)', minHeight: '100vh', paddingBottom: '4rem' }}>

        {/* Header Section */}
        <section style={{
          padding: '3rem 0',
          borderBottom: '4px solid var(--color-ink)',
          backgroundColor: 'var(--color-signal)',
          backgroundImage: 'radial-gradient(var(--color-ink) 2px, transparent 2px)',
          backgroundSize: '16px 16px',
        }}>
          <Container>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '2rem',
              border: '4px solid var(--color-ink)',
              boxShadow: '8px 8px 0 rgba(0,0,0,0.2)',
              display: 'inline-block',
              color: 'var(--color-paper)'
            }}>
              <h1 className="retro-font-display retro-bold" style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>STYLE GUIDE</h1>
              <p className="retro-font-body" style={{ fontSize: '1.125rem', margin: 0, opacity: 0.9 }}>
                Interactive design system reference with colors, typography, spacing, and component examples.
              </p>
            </div>
          </Container>
        </section>

        {/* Overview Cards */}
        <section style={{ padding: '4rem 0' }}>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {overviewCards.map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: 'var(--color-paper-deep)',
                  border: '4px solid var(--color-ink)',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '4px 4px 0 var(--color-ink)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: 'var(--color-signal)' }}>
                    <item.icon size={48} weight="bold" />
                  </div>
                  <h3 className="retro-font-display retro-bold" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p className="retro-font-body" style={{ margin: 0, fontSize: '0.875rem', opacity: 0.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Colors Section */}
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-paper-deep)', borderTop: '4px solid var(--color-ink)', borderBottom: '4px solid var(--color-ink)' }}>
          <Container>
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="retro-font-display retro-bold" style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>COLOR PALETTE</h2>
              <p className="retro-font-body" style={{ margin: 0, opacity: 0.8 }}>Click any color to copy its hex value to your clipboard</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {/* Brand Colors */}
              <div>
                <h3 className="retro-font-display retro-bold" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-signal)', textTransform: 'uppercase' }}>Base Theme Colors</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
                  <ColorSwatch name="Paper" value="var(--color-paper)" bgColor="var(--color-paper)" usage="Main background color" />
                  <ColorSwatch name="Paper Deep" value="var(--color-paper-deep)" bgColor="var(--color-paper-deep)" usage="Alt background / cards" />
                  <ColorSwatch name="Ink" value="var(--color-ink)" bgColor="var(--color-ink)" usage="Primary text & borders" />
                  <ColorSwatch name="Signal" value="var(--color-signal)" bgColor="var(--color-signal)" usage="Accents & CTAs" />
                </div>
              </div>

              {/* Semantic Colors */}
              <div>
                <h3 className="retro-font-display retro-bold" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-signal)', textTransform: 'uppercase' }}>Semantic Colors</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
                  <ColorSwatch name="Success" value="var(--wp--preset--color--success)" bgColor="var(--wp--preset--color--success)" usage="Confirmations" />
                  <ColorSwatch name="Error" value="var(--wp--preset--color--error)" bgColor="var(--wp--preset--color--error)" usage="Warnings & destructive" />
                  <ColorSwatch name="Muted" value="var(--color-muted)" bgColor="var(--color-muted)" usage="Secondary text" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Typography Section */}
        <section style={{ padding: '4rem 0' }}>
          <Container>
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="retro-font-display retro-bold" style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>TYPOGRAPHY SCALE</h2>
              <p className="retro-font-body" style={{ margin: 0, opacity: 0.8 }}>Fluid typography system with responsive scaling across all device sizes</p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              backgroundColor: 'var(--color-paper-deep)',
              border: '4px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '4px 4px 0 var(--color-ink)'
            }}>
              {typographyScale.map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  borderBottom: idx < 6 ? '2px dashed var(--color-ink)' : 'none',
                  paddingBottom: idx < 6 ? '2rem' : '0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="retro-font-display retro-bold" style={{ color: 'var(--color-signal)' }}>{item.label}</span>
                    <code style={{
                      backgroundColor: 'var(--color-ink)',
                      color: 'var(--color-paper)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '2px',
                      fontSize: '0.75rem'
                    }}>
                      {item.tag}
                    </code>
                  </div>
                  <div className={item.class} style={{ fontSize: item.size, margin: 0, lineHeight: 1.2 }}>{item.example}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Spacing Section */}
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-paper-deep)', borderTop: '4px solid var(--color-ink)' }}>
          <Container>
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="retro-font-display retro-bold" style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>SPACING SCALE</h2>
              <p className="retro-font-body" style={{ margin: 0, opacity: 0.8 }}>4px-based spacing system with CSS custom properties for consistent layouts</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {spacingScale.map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  backgroundColor: 'var(--color-paper)',
                  border: '2px solid var(--color-ink)',
                  padding: '1rem',
                  boxShadow: '2px 2px 0 var(--color-ink)'
                }}>
                  <div style={{
                    width: `${item.size}px`,
                    height: '40px',
                    backgroundColor: 'var(--color-signal)',
                    border: '1px solid var(--color-ink)'
                  }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1, flexWrap: 'wrap' }}>
                    <span className="retro-font-display retro-bold" style={{ width: '40px' }}>{item.name}</span>
                    <code style={{
                      backgroundColor: 'var(--color-paper-deep)',
                      padding: '0.25rem 0.5rem',
                      border: '1px solid var(--color-ink)',
                      fontSize: '0.875rem'
                    }}>
                      {item.var}
                    </code>
                    <span className="retro-font-body" style={{ marginLeft: 'auto', color: 'var(--color-signal)', fontWeight: 'bold' }}>{item.px}</span>
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