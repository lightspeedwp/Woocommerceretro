/**
 * RetroDemoLandingPage
 *
 * A comprehensive showcase of every retro pattern, block, and design element
 * in the PlayPocket design system. Used at /retro-demo/landing-page/ for
 * marketing and as a living style reference.
 *
 * Patterns demonstrated:
 * - HeroRetro (hero section with images)
 * - CategoryRowRetro (category navigation)
 * - FeaturedProductsRetro (product grid cards)
 * - FlashSaleBanner (urgency countdown)
 * - PricingTable (subscription tiers)
 * - TestimonialCarousel (social proof)
 * - FAQSection (accordion Q&A)
 * - NewsletterCTA (lead capture)
 * - BottomGridRetro (bottom products + rewards)
 * - StatsSection (key metrics)
 * - SpinningCoin3D + SubscriptionBox3D (CSS 3D / WebGL)
 * - Custom SVG decorations and WebGL canvas
 *
 * @component
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import {
  ArrowRight, Star, Lightning, Moon, Eye, GameController,
  Rocket, Trophy, ShieldCheck, Sparkle, Crown, Heart,
  Package, TShirt, Ghost, Image as ImageIcon,
  CaretLeft, CaretRight,
} from '../../utils/phosphor-compat';

import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';

import { HeroRetro } from '../patterns/HeroRetro';
import { CategoryRowRetro } from '../patterns/CategoryRowRetro';
import { FeaturedProductsRetro } from '../patterns/FeaturedProductsRetro';
import { FlashSaleBanner } from '../patterns/FlashSaleBanner';
import { TestimonialCarousel } from '../patterns/TestimonialCarousel';
import { PricingTable } from '../patterns/PricingTable';
import { BottomGridRetro } from '../patterns/BottomGridRetro';

import { SpinningCoin3D } from '../blocks/display/SpinningCoin3D';
import { SubscriptionBox3D } from '../blocks/display/SubscriptionBox3D';

import {
  DEMO_HERO,
  DEMO_STATS,
  DEMO_TESTIMONIALS,
  DEMO_FAQ,
  DEMO_PRICING_PLANS,
  DEMO_HOW_IT_WORKS,
  DEMO_FLASH_SALE,
  DEMO_VALUE_PROPS,
  DEMO_PRODUCTS,
} from '../../data/retroDemo';

// ─── Neon Color Constants ────────────────────────────────────────────────────
// Centralized palette — mirrors CSS custom properties in retro-demo-landing.css

const NEON = {
  cyan: '#00fff9',
  magenta: '#ff00ff',
  gold: '#FFD700',
  green: '#39ff14',
  red: '#ff4444',
} as const;

// ─── Inline SVG Decorations ──────────────────────────────────────────────────

const RetroGridSVG = () => (
  <svg
    className="retro-demo-grid-svg"
    viewBox="0 0 400 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Horizontal grid lines */}
    {Array.from({ length: 11 }).map((_, i) => (
      <line
        key={`h-${i}`}
        x1="0"
        y1={i * 20}
        x2="400"
        y2={i * 20}
        stroke="currentColor"
        strokeWidth="0.5"
      />
    ))}
    {/* Vertical grid lines */}
    {Array.from({ length: 21 }).map((_, i) => (
      <line
        key={`v-${i}`}
        x1={i * 20}
        y1="0"
        x2={i * 20}
        y2="200"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    ))}
  </svg>
);

const NeonDividerSVG = ({ color = NEON.cyan }: { color?: string }) => (
  <svg
    className="retro-demo-neon-divider"
    viewBox="0 0 1200 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="0" y1="2" x2="1200" y2="2" stroke={color} strokeWidth="1" opacity="0.4" />
    <line x1="200" y1="2" x2="1000" y2="2" stroke={color} strokeWidth="2" opacity="0.7" />
    <circle cx="200" cy="2" r="3" fill={color} opacity="0.9" />
    <circle cx="1000" cy="2" r="3" fill={color} opacity="0.9" />
  </svg>
);

const PixelStarSVG = ({ size = 24, color = NEON.gold }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="7" y="0" width="2" height="2" />
    <rect x="5" y="2" width="2" height="2" />
    <rect x="9" y="2" width="2" height="2" />
    <rect x="0" y="5" width="16" height="2" />
    <rect x="2" y="7" width="12" height="2" />
    <rect x="3" y="9" width="10" height="2" />
    <rect x="4" y="11" width="3" height="2" />
    <rect x="9" y="11" width="3" height="2" />
    <rect x="5" y="13" width="2" height="2" />
    <rect x="9" y="13" width="2" height="2" />
  </svg>
);

const ScanlineOverlay = () => (
  <div className="retro-demo-scanline" aria-hidden="true" />
);

// ─── WebGL Canvas Background ─────────────────────────────────────────────────

const RetroCanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const time = Date.now() * 0.001;

    ctx.clearRect(0, 0, w, h);

    // Draw floating pixel particles
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const seed = i * 137.508;
      const x = ((Math.sin(seed + time * 0.3) + 1) / 2) * w;
      const y = ((Math.cos(seed * 0.7 + time * 0.2) + 1) / 2) * h;
      const size = 2 + Math.sin(seed * 0.3 + time) * 1.5;

      const hue = (seed * 2 + time * 20) % 360;
      ctx.fillStyle = `hsla(${hue}, 100%, 70%, 0.4)`;
      ctx.fillRect(Math.floor(x), Math.floor(y), Math.ceil(size), Math.ceil(size));
    }

    // Draw neon grid lines (perspective)
    ctx.strokeStyle = 'rgba(0, 255, 249, 0.08)';
    ctx.lineWidth = 1;
    const gridSpacing = 40;
    for (let i = 0; i < w / gridSpacing; i++) {
      const xPos = i * gridSpacing;
      ctx.beginPath();
      ctx.moveTo(xPos, 0);
      ctx.lineTo(xPos, h);
      ctx.stroke();
    }
    for (let i = 0; i < h / gridSpacing; i++) {
      const yPos = i * gridSpacing;
      ctx.beginPath();
      ctx.moveTo(0, yPos);
      ctx.lineTo(w, yPos);
      ctx.stroke();
    }

    animationRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="retro-demo-canvas-bg"
      aria-hidden="true"
    />
  );
};

// ─── Section Wrapper ─────────────────────────────────────────────────────────

const DemoSection = ({
  id,
  title,
  subtitle,
  children,
  dark = false,
  neonColor = '#00fff9',
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
  neonColor?: string;
}) => (
  <section
    id={id}
    className={`retro-demo-section ${dark ? 'retro-demo-section--dark' : ''}`}
  >
    <RetroGridSVG />
    <div className="retro-demo-section__content">
      <div className="retro-demo-section__header">
        <div
          className="retro-font-display retro-bold retro-demo-section__subtitle"
          style={{ color: neonColor, textShadow: `0 0 10px ${neonColor}40` }}
        >
          {subtitle || `// ${title}`}
        </div>
        <h2 className="retro-font-display retro-bold retro-demo-section__title">
          {title}
        </h2>
      </div>
      <NeonDividerSVG color={neonColor} />
      <div className="retro-demo-section__body">
        {children}
      </div>
    </div>
  </section>
);

// ─── Stats Section (Retro Version) ──────────────────────────────────────────

const RetroStatsRow = () => (
  <div className="retro-demo-stats__grid">
    {DEMO_STATS.map((stat) => (
      <div key={stat.id} className="retro-glass-panel retro-demo-stats__card">
        <div className="retro-font-display retro-bold retro-demo-stats__value">
          {stat.value}{stat.suffix || ''}
        </div>
        <div className="retro-font-body retro-demo-stats__label">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
);

// ─── How It Works (Retro Version) ───────────��────────────────────────────────

const RetroHowItWorks = () => (
  <div className="retro-demo-hiw__grid">
    {DEMO_HOW_IT_WORKS.map((item, idx) => {
      const colors = [NEON.cyan, NEON.magenta, NEON.gold];
      const icons = [Rocket, GameController, Trophy];
      const Icon = icons[idx];
      const color = colors[idx];

      return (
        <div
          key={item.step}
          className="retro-demo-hiw__card"
          style={{ '--step-color': color } as React.CSSProperties}
        >
          {/* Step number LED */}
          <div
            className="retro-font-display retro-bold retro-demo-hiw__step-badge"
            style={{ color, textShadow: `0 0 8px ${color}60` }}
          >
            STEP {item.step}
          </div>

          <div className="retro-demo-hiw__icon">
            <Icon size={40} weight="duotone" style={{ color }} />
          </div>

          <h3 className="retro-font-display retro-bold retro-demo-hiw__title">
            {item.title}
          </h3>

          <p className="retro-font-body retro-demo-hiw__desc">
            {item.description}
          </p>
        </div>
      );
    })}
  </div>
);

// ─── Value Proposition Cards ─────────────────────────────────────────────────

const RetroValueProps = () => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    PixelatedStar: Sparkle,
    Moon: Moon,
    Eye: Eye,
    Lightning: Lightning,
  };

  return (
    <div className="retro-demo-vp__grid">
      {DEMO_VALUE_PROPS.map((prop, idx) => {
        const Icon = iconMap[prop.iconName] || Star;
        const colors = [NEON.cyan, NEON.magenta, NEON.gold, NEON.green];
        const color = colors[idx % colors.length];

        return (
          <div
            key={prop.title}
            className="retro-demo-vp__card"
            style={{ '--vp-color': color } as React.CSSProperties}
          >
            <div className="retro-demo-vp__icon-box">
              <Icon size={24} weight="duotone" style={{ color }} />
            </div>
            <h4 className="retro-font-display retro-bold retro-demo-vp__title">
              {prop.title}
            </h4>
            <p className="retro-font-body retro-demo-vp__desc">
              {prop.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

// ─── FAQ Accordion ───────────────────────────────────────────────────────────

const RetroFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="retro-demo-faq__list">
      {DEMO_FAQ.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="retro-demo-faq__item">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="retro-font-display retro-bold retro-demo-faq__trigger"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className={`retro-demo-faq__chevron ${isOpen ? 'retro-demo-faq__chevron--open' : ''}`}>
                <CaretRight size={14} weight="bold" />
              </span>
            </button>
            {isOpen && (
              <div className="retro-font-body retro-demo-faq__answer">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// ─── Newsletter CTA (Retro) ─────────────────────────────────────────────────

const RetroNewsletterBand = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="retro-demo-newsletter__box">
      <Crown size={40} weight="duotone" style={{ color: NEON.magenta }} />
      <h3 className="retro-font-display retro-bold retro-demo-newsletter__title">
        JOIN THE PLAYER CLUB
      </h3>
      <p className="retro-font-body retro-demo-newsletter__desc">
        Get exclusive retro drops, design tips, and early access to new patterns.
      </p>

      {submitted ? (
        <div className="retro-font-display retro-bold retro-demo-newsletter__success">
          ACHIEVEMENT UNLOCKED: SUBSCRIBED!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="retro-demo-newsletter__form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.gg"
            required
            className="retro-font-body retro-demo-newsletter__input"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="retro-btn retro-btn--primary retro-font-display retro-bold retro-demo-newsletter__submit"
          >
            SUBSCRIBE
          </button>
        </form>
      )}
    </div>
  );
};

// ─── 3D Showcase Section ─────────────────────────────────────────────────────

const Retro3DShowcase = () => {
  const [boxStep, setBoxStep] = useState<1 | 2 | 3>(1);

  return (
    <div className="retro-demo-3d__grid">
      {/* Spinning Coin */}
      <div className="retro-demo-3d__panel">
        <SpinningCoin3D size={100} glowColor={NEON.gold} label="DEMO" speed={0.8} />
        <p className="retro-font-display retro-bold retro-demo-3d__caption">
          CSS 3D Spinning Coin
        </p>
        <p className="retro-font-body retro-demo-3d__subcaption">
          Pure CSS transforms, no WebGL needed. ~2KB.
        </p>
      </div>

      {/* Subscription Box */}
      <div className="retro-demo-3d__panel">
        <SubscriptionBox3D
          step={boxStep}
          size={140}
          glowColor={NEON.cyan}
          autoRotate={boxStep === 2}
        />
        <div className="retro-demo-3d__steps">
          {([1, 2, 3] as const).map((s) => (
            <button
              key={s}
              onClick={() => setBoxStep(s)}
              className={`retro-font-display retro-bold retro-demo-3d__step-btn ${boxStep === s ? 'retro-demo-3d__step-btn--active' : ''}`}
              aria-pressed={boxStep === s}
            >
              Step {s}
            </button>
          ))}
        </div>
        <p className="retro-font-display retro-bold retro-demo-3d__caption">
          3D Subscription Box
        </p>
        <p className="retro-font-body retro-demo-3d__subcaption">
          3-step flow with Canvas particle burst. ~8KB.
        </p>
      </div>

      {/* WebGL Canvas Preview */}
      <div className="retro-demo-3d__canvas-panel">
        <RetroCanvasBackground />
        <div className="retro-demo-3d__canvas-overlay">
          <PixelStarSVG size={32} color={NEON.gold} />
          <p className="retro-font-display retro-bold retro-demo-3d__caption">
            Canvas Particle System
          </p>
          <p className="retro-font-body retro-demo-3d__subcaption">
            Floating pixel particles with neon grid.
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Pattern Index Banner ────────────────────────────────────────────────────

const PatternIndexBanner = () => {
  const patterns = [
    'HeroRetro', 'CategoryRowRetro', 'FeaturedProductsRetro', 'FlashSaleBanner',
    'PricingTable', 'TestimonialCarousel', 'FAQSection', 'NewsletterCTA',
    'BottomGridRetro', 'StatsSection', 'SpinningCoin3D', 'SubscriptionBox3D',
    'HowItWorks', 'ValueProps', 'RetroCanvas',
  ];

  return (
    <div className="retro-demo-pattern-index">
      <div className="retro-demo-pattern-index__header">
        <ShieldCheck size={24} weight="duotone" style={{ color: NEON.green }} />
        <span className="retro-font-display retro-bold retro-demo-pattern-index__title">
          {patterns.length} PATTERNS DEMONSTRATED ON THIS PAGE
        </span>
      </div>
      <div className="retro-demo-pattern-index__tags">
        {patterns.map((p) => (
          <span key={p} className="retro-font-body retro-demo-pattern-index__tag">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export const RetroDemoLandingPage = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <main className="retro-main">
          {/* ─── Hero ─────────────────────────────────────── */}
          <HeroRetro
            titleLines={DEMO_HERO.titleLines}
            highlight={DEMO_HERO.highlight}
            description={DEMO_HERO.description}
            images={DEMO_HERO.images}
          />

          {/* ─── Pattern Index ─────────────────────────────── */}
          <PatternIndexBanner />

          {/* ─── Stats ─────────────────────────────────────── */}
          <DemoSection id="stats" title="BY THE NUMBERS" subtitle="// SYSTEM STATS" neonColor={NEON.cyan}>
            <RetroStatsRow />
          </DemoSection>

          {/* ─── Categories ────────────────────────────────── */}
          <DemoSection id="categories" title="CATEGORY ROW" subtitle="// BROWSE BY TYPE" neonColor={NEON.magenta}>
            <CategoryRowRetro />
          </DemoSection>

          {/* ─── Featured Products ─────────────────────────── */}
          <DemoSection id="featured" title="FEATURED PRODUCTS" subtitle="// PRODUCT CARDS" neonColor={NEON.gold}>
            <FeaturedProductsRetro
              title="DEMO COLLECTION <<"
              linkText="RETRO PICKS! >"
              products={DEMO_PRODUCTS}
            />
          </DemoSection>

          {/* ─── Flash Sale ────────────────────────────────── */}
          <DemoSection id="flash-sale" title="FLASH SALE BANNER" subtitle="// URGENCY PATTERN" neonColor={NEON.red}>
            <FlashSaleBanner
              title={DEMO_FLASH_SALE.title}
              discount={DEMO_FLASH_SALE.discount}
              description={DEMO_FLASH_SALE.description}
              ctaText={DEMO_FLASH_SALE.ctaText}
              ctaLink={DEMO_FLASH_SALE.ctaLink}
              endDate={DEMO_FLASH_SALE.endDate}
              variant={DEMO_FLASH_SALE.variant}
              hideWhenExpired={false}
            />
          </DemoSection>

          {/* ─── How It Works ──────────────────────────────── */}
          <DemoSection id="how-it-works" title="HOW IT WORKS" subtitle="// 3-STEP PROCESS" neonColor={NEON.cyan}>
            <RetroHowItWorks />
          </DemoSection>

          {/* ─── Value Propositions ─────────────────────────── */}
          <DemoSection id="value-props" title="WHY PLAYPOCKET?" subtitle="// VALUE PROPOSITIONS" neonColor={NEON.green}>
            <RetroValueProps />
          </DemoSection>

          {/* ─── 3D / WebGL Showcase ───────────────────────── */}
          <DemoSection id="3d-showcase" title="3D & CANVAS EFFECTS" subtitle="// WEBGL + CSS 3D" neonColor={NEON.gold}>
            <Retro3DShowcase />
          </DemoSection>

          {/* ─── Pricing ───────────────────────────────────── */}
          <DemoSection id="pricing" title="PRICING TABLE" subtitle="// SUBSCRIPTION TIERS" neonColor={NEON.magenta}>
            <PricingTable
              plans={DEMO_PRICING_PLANS}
              heading="CHOOSE YOUR LEVEL"
              subheading="START YOUR RETRO JOURNEY"
              showToggle={true}
              defaultBilling="monthly"
            />
          </DemoSection>

          {/* ─── Testimonials ──────────────────────────────── */}
          <DemoSection id="testimonials" title="TESTIMONIALS" subtitle="// SOCIAL PROOF" neonColor={NEON.cyan}>
            <TestimonialCarousel
              testimonials={DEMO_TESTIMONIALS}
              autoRotate={true}
              showDots={true}
              showArrows={true}
            />
          </DemoSection>

          {/* ─── FAQ ───────────────────────────────────────── */}
          <DemoSection id="faq" title="FAQ ACCORDION" subtitle="// QUESTIONS & ANSWERS" neonColor={NEON.gold}>
            <RetroFAQ />
          </DemoSection>

          {/* ─── Newsletter ────────────────────────────────── */}
          <DemoSection id="newsletter" title="NEWSLETTER CTA" subtitle="// LEAD CAPTURE" neonColor={NEON.magenta}>
            <RetroNewsletterBand />
          </DemoSection>

          {/* ─── Bottom Grid ───────────────────────────────── */}
          <DemoSection id="bottom-grid" title="BOTTOM GRID" subtitle="// PRODUCTS + REWARDS" neonColor={NEON.green}>
            <BottomGridRetro />
          </DemoSection>

          {/* ─── CTA Banner ────────────────────────────────── */}
          <div className="retro-demo-cta">
            <ScanlineOverlay />
            <div className="retro-demo-cta__content">
              <PixelStarSVG size={40} color={NEON.gold} />
              <h2 className="retro-font-display retro-bold retro-demo-cta__title">
                READY TO BUILD?
              </h2>
              <p className="retro-font-body retro-demo-cta__desc">
                Explore the full PlayPocket design system with 176+ components, 280 CSS imports, and complete dark mode support.
              </p>
              <div className="retro-demo-cta__buttons">
                <Link
                  to="/shop"
                  className="retro-btn retro-btn--primary retro-font-display retro-bold retro-demo-cta__link"
                >
                  EXPLORE SHOP <ArrowRight size={16} weight="bold" />
                </Link>
                <Link
                  to="/sitemap"
                  className="retro-btn retro-btn--secondary retro-font-display retro-bold retro-demo-cta__link"
                >
                  ALL 150+ PAGES <ArrowRight size={16} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </main>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
};