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
    className="retro-demo-hub__hex-grid"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
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

/* Card accent colors use raw hex because they're set as CSS custom properties
   and consumed via color-mix() in the stylesheet. Values match retro theme tokens. */
const DEMO_PAGES: DemoPage[] = [
  {
    id: 'landing',
    title: 'MARKETING LANDING PAGE',
    description: 'Full-featured landing page with 15+ retro patterns: Hero, Stats, Categories, Products, Flash Sale, Pricing, Testimonials, FAQ, Newsletter, 3D effects, and more.',
    href: '/retro-demo/landing-page',
    icon: Rocket,
    color: '#00fff9', /* --retro-neon-cyan */
    patternCount: 15,
    tags: ['Hero', 'Pricing', '3D Effects', 'FAQ', 'Newsletter'],
  },
  {
    id: 'shop',
    title: 'SHOP EXPERIENCE',
    description: 'Browse the full product archive with retro-styled filters, product cards, pagination, and category navigation.',
    href: '/shop',
    icon: Storefront,
    color: '#ff00ff', /* --retro-neon-magenta */
    patternCount: 8,
    tags: ['ProductGrid', 'Filters', 'Categories', 'Search'],
  },
  {
    id: 'membership-3d',
    title: '3D SUBSCRIPTION',
    description: 'Interactive 3D subscription flow with SpinningCoin, mystery box opening animation, and Canvas particle effects.',
    href: '/membership/3d/pro-gamer',
    icon: Cube,
    color: '#FFD700', /* --retro-accent-gold */
    patternCount: 4,
    tags: ['WebGL', 'CSS 3D', 'Canvas API', 'Animation'],
  },
  {
    id: 'homepage',
    title: 'HOMEPAGE (FRONT PAGE)',
    description: 'The main PlayPocket homepage with HeroRetro, CategoryRow, FeaturedProducts, BottomGrid, and sitemap CTA.',
    href: '/',
    icon: Layout,
    color: '#39ff14', /* --retro-neon-lime */
    patternCount: 6,
    tags: ['HeroRetro', 'CategoryRow', 'FeaturedProducts'],
  },
  {
    id: 'style-guide',
    title: 'STYLE GUIDE',
    description: 'Complete design system reference: colors, typography, spacing, icons, and component variants.',
    href: '/dev-tools/style-guide',
    icon: PaintBrush,
    color: '#ff6b6b', /* --color-alert */
    patternCount: 20,
    tags: ['Tokens', 'Typography', 'Colors', 'Components'],
  },
  {
    id: 'showcase',
    title: 'COMPONENT SHOWCASE',
    description: 'Interactive preview of all block components: buttons, inputs, cards, modals, and more.',
    href: '/dev-tools/showcase',
    icon: MonitorPlay,
    color: '#4ecdc4', /* --retro-accent-teal */
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
          <section className="retro-demo-hub__hero">
            <HexGridSVG />
            <div className="retro-demo-hub__hero-content">
              {/* Pixel stars decoration */}
              <div className="retro-demo-hub__stars">
                {['#00fff9', '#ff00ff', '#FFD700', '#39ff14', '#ff00ff', '#00fff9'].map((c, i) => (
                  <Sparkle key={i} size={16} weight="fill" style={{ color: c, opacity: 0.6 + (i % 3) * 0.15 }} />
                ))}
              </div>

              <h1 className="retro-font-display retro-bold retro-demo-hub__title">
                RETRO<br />
                <span className="retro-demo-hub__title-accent">
                  DEMO HUB
                </span>
              </h1>

              <p className="retro-font-body retro-demo-hub__desc">
                Explore every retro pattern, block, and design element in the PlayPocket design system.
                Each demo page showcases real components with generic data.
              </p>

              {/* Quick Stats */}
              <div className="retro-demo-hub__quick-stats">
                {[
                  { val: '176+', label: 'Components' },
                  { val: '48+', label: 'Patterns' },
                  { val: '23', label: 'Templates' },
                  { val: '280', label: 'CSS Files' },
                ].map((s) => (
                  <div key={s.label} className="retro-demo-hub__stat">
                    <div className="retro-font-display retro-bold retro-demo-hub__stat-value">
                      {s.val}
                    </div>
                    <div className="retro-font-body retro-demo-hub__stat-label">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── Demo Pages Grid ───────────────────────────── */}
          <section className="retro-demo-hub__grid-section">
            <div className="retro-demo-hub__grid">
              {DEMO_PAGES.map((page) => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.id}
                    to={page.href}
                    className="retro-demo-hub__card"
                    style={{ '--card-accent': page.color } as React.CSSProperties}
                  >
                    {/* Header */}
                    <div className="retro-demo-hub__card-header">
                      <div className="retro-demo-hub__card-icon">
                        <Icon size={20} weight="duotone" style={{ color: page.color }} />
                      </div>
                      <div className="retro-demo-hub__card-meta">
                        <h3 className="retro-font-display retro-bold retro-demo-hub__card-title">
                          {page.title}
                        </h3>
                        <span className="retro-font-body retro-demo-hub__card-count">
                          {page.patternCount} patterns
                        </span>
                      </div>
                      <ArrowRight size={16} weight="bold" className="retro-demo-hub__card-arrow" style={{ color: page.color }} />
                    </div>

                    {/* Description */}
                    <p className="retro-font-body retro-demo-hub__card-desc">
                      {page.description}
                    </p>

                    {/* Tags */}
                    <div className="retro-demo-hub__card-tags">
                      {page.tags.map((tag) => (
                        <span
                          key={tag}
                          className="retro-font-body retro-demo-hub__tag"
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
          <section className="retro-demo-hub__compliance">
            <div className="retro-demo-hub__compliance-badge">
              <ShieldCheck size={24} weight="duotone" style={{ color: '#39ff14' }} />
              <span className="retro-font-display retro-bold retro-demo-hub__compliance-title">
                WCAG AA 2.2 COMPLIANT
              </span>
              <span className="retro-font-body retro-demo-hub__compliance-desc">
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
