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

// ─── Inline SVG Decorations ──────────────────────────────────────────────────

const RetroGridSVG = () => (
  <svg
    className="retro-demo-grid-svg"
    viewBox="0 0 400 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.06,
      pointerEvents: 'none',
    }}
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

const NeonDividerSVG = ({ color = '#00fff9' }: { color?: string }) => (
  <svg
    viewBox="0 0 1200 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: '4px', display: 'block' }}
  >
    <line x1="0" y1="2" x2="1200" y2="2" stroke={color} strokeWidth="1" opacity="0.4" />
    <line x1="200" y1="2" x2="1000" y2="2" stroke={color} strokeWidth="2" opacity="0.7" />
    <circle cx="200" cy="2" r="3" fill={color} opacity="0.9" />
    <circle cx="1000" cy="2" r="3" fill={color} opacity="0.9" />
  </svg>
);

const PixelStarSVG = ({ size = 24, color = '#FFD700' }: { size?: number; color?: string }) => (
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
  <div
    aria-hidden="true"
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage:
        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
      pointerEvents: 'none',
      zIndex: 1,
    }}
  />
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
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
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
    style={{
      position: 'relative',
      padding: 'var(--wp--preset--spacing--70, 3rem) 0',
      overflow: 'hidden',
    }}
  >
    <RetroGridSVG />
    <div style={{ position: 'relative', zIndex: 2 }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--wp--preset--spacing--60, 2rem)' }}>
        <div
          className="retro-font-display retro-bold"
          style={{
            fontSize: 'clamp(0.6rem, 1.5vw, 0.85rem)',
            color: neonColor,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '0.5rem',
            textShadow: `0 0 10px ${neonColor}40`,
          }}
        >
          {subtitle || `// ${title}`}
        </div>
        <h2
          className="retro-font-display retro-bold"
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>
      <NeonDividerSVG color={neonColor} />
      <div style={{ marginTop: 'var(--wp--preset--spacing--50, 1.5rem)' }}>
        {children}
      </div>
    </div>
  </section>
);

// ─── Stats Section (Retro Version) ──────────────────────────────────────────

const RetroStatsRow = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '1rem',
      padding: '1.5rem',
    }}
  >
    {DEMO_STATS.map((stat) => (
      <div
        key={stat.id}
        className="retro-glass-panel"
        style={{
          textAlign: 'center',
          padding: '1.5rem 1rem',
          borderRadius: '8px',
          border: '1px solid rgba(0, 255, 249, 0.2)',
          background: 'rgba(0, 255, 249, 0.03)',
        }}
      >
        <div
          className="retro-font-display retro-bold"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'var(--color-signal, #00fff9)',
            textShadow: '0 0 15px rgba(0, 255, 249, 0.5)',
            lineHeight: 1,
          }}
        >
          {stat.value}{stat.suffix || ''}
        </div>
        <div
          className="retro-font-body"
          style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginTop: '0.5rem',
            opacity: 0.7,
          }}
        >
          {stat.label}
        </div>
      </div>
    ))}
  </div>
);

// ─── How It Works (Retro Version) ────────────────────────────────────────────

const RetroHowItWorks = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      padding: '0 1rem',
    }}
  >
    {DEMO_HOW_IT_WORKS.map((item, idx) => {
      const colors = ['#00fff9', '#ff00ff', '#FFD700'];
      const icons = [Rocket, GameController, Trophy];
      const Icon = icons[idx];
      const color = colors[idx];

      return (
        <div
          key={item.step}
          style={{
            textAlign: 'center',
            padding: '2rem 1.5rem',
            border: `1px solid ${color}30`,
            borderRadius: '8px',
            background: `${color}05`,
            position: 'relative',
          }}
        >
          {/* Step number LED */}
          <div
            className="retro-font-display retro-bold"
            style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--color-bg, #0f0f0f)',
              padding: '0.25rem 0.75rem',
              fontSize: '0.6rem',
              color: color,
              border: `1px solid ${color}50`,
              borderRadius: '4px',
              textShadow: `0 0 8px ${color}60`,
            }}
          >
            STEP {item.step}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <Icon size={40} weight="duotone" style={{ color }} />
          </div>

          <h3
            className="retro-font-display retro-bold"
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              margin: '0 0 0.75rem 0',
            }}
          >
            {item.title}
          </h3>

          <p
            className="retro-font-body"
            style={{ fontSize: '0.85rem', opacity: 0.8, margin: 0, lineHeight: 1.6 }}
          >
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
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        padding: '0 1rem',
      }}
    >
      {DEMO_VALUE_PROPS.map((prop, idx) => {
        const Icon = iconMap[prop.iconName] || Star;
        const colors = ['#00fff9', '#ff00ff', '#FFD700', '#39ff14'];
        const color = colors[idx % colors.length];

        return (
          <div
            key={prop.title}
            style={{
              padding: '1.5rem',
              border: `1px solid ${color}25`,
              borderRadius: '8px',
              background: `${color}05`,
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `${color}15`,
                border: `1px solid ${color}30`,
                marginBottom: '1rem',
              }}
            >
              <Icon size={24} weight="duotone" style={{ color }} />
            </div>
            <h4
              className="retro-font-display retro-bold"
              style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                margin: '0 0 0.5rem 0',
              }}
            >
              {prop.title}
            </h4>
            <p
              className="retro-font-body"
              style={{ fontSize: '0.8rem', opacity: 0.75, margin: 0, lineHeight: 1.5 }}
            >
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
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      {DEMO_FAQ.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              borderBottom: '1px solid rgba(0, 255, 249, 0.15)',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="retro-font-display retro-bold"
              aria-expanded={isOpen}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '1rem 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                textAlign: 'left',
                color: 'inherit',
                gap: '1rem',
              }}
            >
              <span>{item.question}</span>
              <span
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0,
                  color: 'var(--color-signal, #00fff9)',
                }}
              >
                <CaretRight size={14} weight="bold" />
              </span>
            </button>
            {isOpen && (
              <div
                className="retro-font-body"
                style={{
                  padding: '0 0 1rem 0',
                  fontSize: '0.85rem',
                  opacity: 0.8,
                  lineHeight: 1.6,
                }}
              >
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
    <div
      style={{
        textAlign: 'center',
        padding: '2rem 1rem',
        border: '1px solid rgba(255, 0, 255, 0.2)',
        borderRadius: '8px',
        background: 'rgba(255, 0, 255, 0.03)',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <Crown size={40} weight="duotone" style={{ color: '#ff00ff', marginBottom: '0.75rem' }} />
      <h3
        className="retro-font-display retro-bold"
        style={{ fontSize: '0.85rem', textTransform: 'uppercase', margin: '0 0 0.5rem 0' }}
      >
        JOIN THE PLAYER CLUB
      </h3>
      <p
        className="retro-font-body"
        style={{ fontSize: '0.8rem', opacity: 0.7, margin: '0 0 1.25rem 0' }}
      >
        Get exclusive retro drops, design tips, and early access to new patterns.
      </p>

      {submitted ? (
        <div
          className="retro-font-display retro-bold"
          style={{ color: '#39ff14', fontSize: '0.7rem', textShadow: '0 0 10px rgba(57,255,20,0.5)' }}
        >
          ACHIEVEMENT UNLOCKED: SUBSCRIBED!
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.gg"
            required
            className="retro-font-body"
            style={{
              flex: 1,
              padding: '0.6rem 1rem',
              border: '1px solid rgba(255, 0, 255, 0.3)',
              borderRadius: '4px',
              background: 'rgba(255, 0, 255, 0.05)',
              color: 'inherit',
              fontSize: '0.85rem',
              outline: 'none',
            }}
            aria-label="Email address"
          />
          <button
            type="submit"
            className="retro-btn retro-btn--primary retro-font-display retro-bold"
            style={{ whiteSpace: 'nowrap', fontSize: '0.6rem' }}
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
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        padding: '0 1rem',
        alignItems: 'center',
      }}
    >
      {/* Spinning Coin */}
      <div style={{ textAlign: 'center' }}>
        <SpinningCoin3D size={100} glowColor="#FFD700" label="DEMO" speed={0.8} />
        <p
          className="retro-font-display retro-bold"
          style={{ fontSize: '0.65rem', marginTop: '1rem', textTransform: 'uppercase' }}
        >
          CSS 3D Spinning Coin
        </p>
        <p className="retro-font-body" style={{ fontSize: '0.75rem', opacity: 0.6, margin: '0.25rem 0 0 0' }}>
          Pure CSS transforms, no WebGL needed. ~2KB.
        </p>
      </div>

      {/* Subscription Box */}
      <div style={{ textAlign: 'center' }}>
        <SubscriptionBox3D
          step={boxStep}
          size={140}
          glowColor="#00fff9"
          autoRotate={boxStep === 2}
        />
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem' }}>
          {([1, 2, 3] as const).map((s) => (
            <button
              key={s}
              onClick={() => setBoxStep(s)}
              className="retro-font-display retro-bold"
              style={{
                padding: '0.3rem 0.6rem',
                fontSize: '0.5rem',
                border: `1px solid ${boxStep === s ? '#00fff9' : 'rgba(255,255,255,0.2)'}`,
                borderRadius: '4px',
                background: boxStep === s ? 'rgba(0,255,249,0.15)' : 'transparent',
                color: boxStep === s ? '#00fff9' : 'inherit',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
              aria-pressed={boxStep === s}
            >
              Step {s}
            </button>
          ))}
        </div>
        <p
          className="retro-font-display retro-bold"
          style={{ fontSize: '0.65rem', marginTop: '0.75rem', textTransform: 'uppercase' }}
        >
          3D Subscription Box
        </p>
        <p className="retro-font-body" style={{ fontSize: '0.75rem', opacity: 0.6, margin: '0.25rem 0 0 0' }}>
          3-step flow with Canvas particle burst. ~8KB.
        </p>
      </div>

      {/* WebGL Canvas Preview */}
      <div
        style={{
          textAlign: 'center',
          position: 'relative',
          height: '200px',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(0, 255, 249, 0.15)',
        }}
      >
        <RetroCanvasBackground />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <PixelStarSVG size={32} color="#FFD700" />
          <p
            className="retro-font-display retro-bold"
            style={{ fontSize: '0.65rem', marginTop: '0.75rem', textTransform: 'uppercase' }}
          >
            Canvas Particle System
          </p>
          <p className="retro-font-body" style={{ fontSize: '0.75rem', opacity: 0.6, margin: '0.25rem 0 0 0' }}>
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
    <div
      style={{
        padding: '1.5rem',
        border: '1px solid rgba(57, 255, 20, 0.2)',
        borderRadius: '8px',
        background: 'rgba(57, 255, 20, 0.03)',
        margin: '0 1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <ShieldCheck size={24} weight="duotone" style={{ color: '#39ff14' }} />
        <span
          className="retro-font-display retro-bold"
          style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#39ff14' }}
        >
          {patterns.length} PATTERNS DEMONSTRATED ON THIS PAGE
        </span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {patterns.map((p) => (
          <span
            key={p}
            className="retro-font-body"
            style={{
              padding: '0.2rem 0.5rem',
              fontSize: '0.65rem',
              border: '1px solid rgba(57, 255, 20, 0.2)',
              borderRadius: '4px',
              background: 'rgba(57, 255, 20, 0.05)',
            }}
          >
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
          <DemoSection id="stats" title="BY THE NUMBERS" subtitle="// SYSTEM STATS" neonColor="#00fff9">
            <RetroStatsRow />
          </DemoSection>

          {/* ─── Categories ────────────────────────────────── */}
          <DemoSection id="categories" title="CATEGORY ROW" subtitle="// BROWSE BY TYPE" neonColor="#ff00ff">
            <CategoryRowRetro />
          </DemoSection>

          {/* ─── Featured Products ─────────────────────────── */}
          <DemoSection id="featured" title="FEATURED PRODUCTS" subtitle="// PRODUCT CARDS" neonColor="#FFD700">
            <FeaturedProductsRetro
              title="DEMO COLLECTION <<"
              linkText="RETRO PICKS! >"
              products={DEMO_PRODUCTS}
            />
          </DemoSection>

          {/* ─── Flash Sale ────────────────────────────────── */}
          <DemoSection id="flash-sale" title="FLASH SALE BANNER" subtitle="// URGENCY PATTERN" neonColor="#ff4444">
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
          <DemoSection id="how-it-works" title="HOW IT WORKS" subtitle="// 3-STEP PROCESS" neonColor="#00fff9">
            <RetroHowItWorks />
          </DemoSection>

          {/* ─── Value Propositions ────────────────────────── */}
          <DemoSection id="value-props" title="WHY PLAYPOCKET?" subtitle="// VALUE PROPOSITIONS" neonColor="#39ff14">
            <RetroValueProps />
          </DemoSection>

          {/* ─── 3D / WebGL Showcase ───────────────────────── */}
          <DemoSection id="3d-showcase" title="3D & CANVAS EFFECTS" subtitle="// WEBGL + CSS 3D" neonColor="#FFD700">
            <Retro3DShowcase />
          </DemoSection>

          {/* ─── Pricing ───────────────────────────────────── */}
          <DemoSection id="pricing" title="PRICING TABLE" subtitle="// SUBSCRIPTION TIERS" neonColor="#ff00ff">
            <PricingTable
              plans={DEMO_PRICING_PLANS}
              heading="CHOOSE YOUR LEVEL"
              subheading="START YOUR RETRO JOURNEY"
              showToggle={true}
              defaultBilling="monthly"
            />
          </DemoSection>

          {/* ─── Testimonials ──────────────────────────────── */}
          <DemoSection id="testimonials" title="TESTIMONIALS" subtitle="// SOCIAL PROOF" neonColor="#00fff9">
            <TestimonialCarousel
              testimonials={DEMO_TESTIMONIALS}
              autoRotate={true}
              showDots={true}
              showArrows={true}
            />
          </DemoSection>

          {/* ─── FAQ ───────────────────────────────────────── */}
          <DemoSection id="faq" title="FAQ ACCORDION" subtitle="// QUESTIONS & ANSWERS" neonColor="#FFD700">
            <RetroFAQ />
          </DemoSection>

          {/* ─── Newsletter ────────────────────────────────── */}
          <DemoSection id="newsletter" title="NEWSLETTER CTA" subtitle="// LEAD CAPTURE" neonColor="#ff00ff">
            <RetroNewsletterBand />
          </DemoSection>

          {/* ─── Bottom Grid ───────────────────────────────── */}
          <DemoSection id="bottom-grid" title="BOTTOM GRID" subtitle="// PRODUCTS + REWARDS" neonColor="#39ff14">
            <BottomGridRetro />
          </DemoSection>

          {/* ─── CTA Banner ────────────────────────────────── */}
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <ScanlineOverlay />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <PixelStarSVG size={40} color="#FFD700" />
              <h2
                className="retro-font-display retro-bold"
                style={{
                  fontSize: 'clamp(1rem, 3vw, 1.8rem)',
                  textTransform: 'uppercase',
                  margin: '1rem 0 0.75rem 0',
                }}
              >
                READY TO BUILD?
              </h2>
              <p
                className="retro-font-body"
                style={{ fontSize: '0.9rem', opacity: 0.7, margin: '0 0 1.5rem 0', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}
              >
                Explore the full PlayPocket design system with 176+ components, 280 CSS imports, and complete dark mode support.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/shop"
                  className="retro-btn retro-btn--primary retro-font-display retro-bold"
                  style={{ textDecoration: 'none', fontSize: '0.6rem' }}
                >
                  EXPLORE SHOP <ArrowRight size={16} weight="bold" />
                </Link>
                <Link
                  to="/sitemap"
                  className="retro-btn retro-btn--secondary retro-font-display retro-bold"
                  style={{ textDecoration: 'none', fontSize: '0.6rem' }}
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

RetroDemoLandingPage.displayName = 'RetroDemoLandingPage';