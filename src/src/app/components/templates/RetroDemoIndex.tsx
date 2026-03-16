/**
 * RetroDemoIndex
 *
 * Overview page for /retro-demo/ route. Lists all available retro demo pages
 * and provides quick navigation to explore the design system.
 *
 * @component
 */

import React from 'react';
import { Link } from 'react-router';
import {
  Rocket, GameController, Storefront, Palette, Layout,
  ArrowRight, Star, Lightning, Eye, Cube,
  ShieldCheck, Sparkle, PaintBrush, MonitorPlay,
} from '../../utils/phosphor-compat';

import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';

// ─── SVG Pattern Background ─────────────────────────────────────────────────

const HexGridSVG = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '600px',
      opacity: 0.04,
      pointerEvents: 'none',
    }}
  >
    {/* Concentric hexagons */}
    {[20, 40, 60, 80].map((r) => (
      <polygon
        key={r}
        points={Array.from({ length: 6 })
          .map((_, i) => {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
          })
          .join(' ')}
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
      />
    ))}
    {/* Cross lines */}
    <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.3" />
    <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.3" />
    <line x1="20" y1="20" x2="180" y2="180" stroke="currentColor" strokeWidth="0.3" />
    <line x1="180" y1="20" x2="20" y2="180" stroke="currentColor" strokeWidth="0.3" />
  </svg>
);

// ─── Demo Page Cards ─────────────────────────────────────────────────────────

interface DemoPage {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  patternCount: number;
  tags: string[];
}

const DEMO_PAGES: DemoPage[] = [
  {
    id: 'landing',
    title: 'MARKETING LANDING PAGE',
    description: 'Full-featured landing page with 15+ retro patterns: Hero, Stats, Categories, Products, Flash Sale, Pricing, Testimonials, FAQ, Newsletter, 3D effects, and more.',
    href: '/retro-demo/landing-page',
    icon: Rocket,
    color: '#00fff9',
    patternCount: 15,
    tags: ['Hero', 'Pricing', '3D Effects', 'FAQ', 'Newsletter'],
  },
  {
    id: 'shop',
    title: 'SHOP EXPERIENCE',
    description: 'Browse the full product archive with retro-styled filters, product cards, pagination, and category navigation.',
    href: '/shop',
    icon: Storefront,
    color: '#ff00ff',
    patternCount: 8,
    tags: ['ProductGrid', 'Filters', 'Categories', 'Search'],
  },
  {
    id: 'membership-3d',
    title: '3D SUBSCRIPTION',
    description: 'Interactive 3D subscription flow with SpinningCoin, mystery box opening animation, and Canvas particle effects.',
    href: '/membership/3d/pro-gamer',
    icon: Cube,
    color: '#FFD700',
    patternCount: 4,
    tags: ['WebGL', 'CSS 3D', 'Canvas API', 'Animation'],
  },
  {
    id: 'homepage',
    title: 'HOMEPAGE (FRONT PAGE)',
    description: 'The main PlayPocket homepage with HeroRetro, CategoryRow, FeaturedProducts, BottomGrid, and sitemap CTA.',
    href: '/',
    icon: Layout,
    color: '#39ff14',
    patternCount: 6,
    tags: ['HeroRetro', 'CategoryRow', 'FeaturedProducts'],
  },
  {
    id: 'style-guide',
    title: 'STYLE GUIDE',
    description: 'Complete design system reference: colors, typography, spacing, icons, and component variants.',
    href: '/dev-tools/style-guide',
    icon: PaintBrush,
    color: '#ff6b6b',
    patternCount: 20,
    tags: ['Tokens', 'Typography', 'Colors', 'Components'],
  },
  {
    id: 'showcase',
    title: 'COMPONENT SHOWCASE',
    description: 'Interactive preview of all block components: buttons, inputs, cards, modals, and more.',
    href: '/dev-tools/showcase',
    icon: MonitorPlay,
    color: '#4ecdc4',
    patternCount: 50,
    tags: ['Blocks', 'UI', 'Forms', 'Overlays'],
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

export const RetroDemoIndex = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <main className="retro-main">
          {/* ─── Hero Area ─────────────────────────────────── */}
          <section
            style={{
              textAlign: 'center',
              padding: 'clamp(2rem, 6vw, 4rem) 1rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <HexGridSVG />
            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Pixel stars decoration */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                {['#00fff9', '#ff00ff', '#FFD700', '#39ff14', '#ff00ff', '#00fff9'].map((c, i) => (
                  <Sparkle key={i} size={16} weight="fill" style={{ color: c, opacity: 0.6 + (i % 3) * 0.15 }} />
                ))}
              </div>

              <h1
                className="retro-font-display retro-bold"
                style={{
                  fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                  textTransform: 'uppercase',
                  margin: '0 0 1rem 0',
                  lineHeight: 1.1,
                }}
              >
                RETRO<br />
                <span style={{ color: 'var(--color-signal, #00fff9)', textShadow: '0 0 20px rgba(0,255,249,0.4)' }}>
                  DEMO HUB
                </span>
              </h1>

              <p
                className="retro-font-body"
                style={{
                  fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                  opacity: 0.7,
                  maxWidth: '550px',
                  margin: '0 auto 2rem auto',
                  lineHeight: 1.6,
                }}
              >
                Explore every retro pattern, block, and design element in the PlayPocket design system.
                Each demo page showcases real components with generic data.
              </p>

              {/* Quick Stats */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '2rem',
                  flexWrap: 'wrap',
                  marginBottom: '1rem',
                }}
              >
                {[
                  { val: '176+', label: 'Components' },
                  { val: '48+', label: 'Patterns' },
                  { val: '23', label: 'Templates' },
                  { val: '280', label: 'CSS Files' },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div
                      className="retro-font-display retro-bold"
                      style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        color: 'var(--color-signal, #00fff9)',
                        textShadow: '0 0 12px rgba(0,255,249,0.4)',
                        lineHeight: 1,
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      className="retro-font-body"
                      style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.5, marginTop: '0.25rem' }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── Demo Pages Grid ───────────────────────────── */}
          <section style={{ padding: '0 1rem 3rem 1rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              {DEMO_PAGES.map((page) => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.id}
                    to={page.href}
                    style={{
                      display: 'block',
                      padding: '1.5rem',
                      border: `1px solid ${page.color}25`,
                      borderRadius: '8px',
                      background: `${page.color}03`,
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${page.color}60`;
                      el.style.boxShadow = `0 0 20px ${page.color}15`;
                      el.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${page.color}25`;
                      el.style.boxShadow = 'none';
                      el.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `${page.color}12`,
                          border: `1px solid ${page.color}25`,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} weight="duotone" style={{ color: page.color }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3
                          className="retro-font-display retro-bold"
                          style={{
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            margin: 0,
                            lineHeight: 1.3,
                          }}
                        >
                          {page.title}
                        </h3>
                        <span
                          className="retro-font-body"
                          style={{ fontSize: '0.6rem', opacity: 0.5 }}
                        >
                          {page.patternCount} patterns
                        </span>
                      </div>
                      <ArrowRight size={16} weight="bold" style={{ color: page.color, opacity: 0.5 }} />
                    </div>

                    {/* Description */}
                    <p
                      className="retro-font-body"
                      style={{
                        fontSize: '0.8rem',
                        opacity: 0.7,
                        margin: '0 0 0.75rem 0',
                        lineHeight: 1.5,
                      }}
                    >
                      {page.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {page.tags.map((tag) => (
                        <span
                          key={tag}
                          className="retro-font-body"
                          style={{
                            padding: '0.1rem 0.4rem',
                            fontSize: '0.55rem',
                            border: `1px solid ${page.color}20`,
                            borderRadius: '3px',
                            background: `${page.color}08`,
                            textTransform: 'uppercase',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* ─── WCAG Compliance Badge ─────────────────────── */}
          <section
            style={{
              textAlign: 'center',
              padding: '2rem 1rem',
              borderTop: '1px solid rgba(0, 255, 249, 0.1)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1.5rem',
                border: '1px solid rgba(57, 255, 20, 0.2)',
                borderRadius: '8px',
                background: 'rgba(57, 255, 20, 0.03)',
              }}
            >
              <ShieldCheck size={24} weight="duotone" style={{ color: '#39ff14' }} />
              <span className="retro-font-display retro-bold" style={{ fontSize: '0.6rem', textTransform: 'uppercase' }}>
                WCAG AA 2.2 COMPLIANT
              </span>
              <span className="retro-font-body" style={{ fontSize: '0.7rem', opacity: 0.5 }}>
                Keyboard, Screen Reader, Reduced Motion
              </span>
            </div>
          </section>
        </main>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
};

RetroDemoIndex.displayName = 'RetroDemoIndex';