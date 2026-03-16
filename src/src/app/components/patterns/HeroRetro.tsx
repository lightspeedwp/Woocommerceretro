/**
 * HeroRetro
 *
 * Hero banner for the PlayPocket front page.
 * "EXPLORE. COLLECT. LEVEL UP." with product collage and grid background.
 *
 * **Styling:** BEM (.retro-hero__*) in /styles/globals.css
 * **WCAG:** Semantic heading, alt text on images, adequate contrast
 */

import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { SpaceInvader, PixelCursor } from './SpaceInvaders';

const imgHoodie = 'https://images.unsplash.com/photo-1604272490759-7c465473958a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMGhvb2RpZSUyMHN0cmVldHdlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc3MzYwODAwMXww&ixlib=rb-4.1.0&q=80&w=1080';
const imgCap = 'https://images.unsplash.com/photo-1659081422237-87034ac6591b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMGJhc2ViYWxsJTIwY2FwJTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NzM2MDc5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080';
const imgKeychain = 'https://images.unsplash.com/photo-1649877533786-15e85479fd19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMG1lcmNoYW5kaXNlJTIwa2V5Y2hhaW58ZW58MXx8fHwxNzczNjA4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080';

interface HeroRetroProps {
  images?: { main: string; sub1: string; sub2: string };
  titleLines?: string[];
  highlight?: string;
  description?: string;
}

export const HeroRetro = ({
  images,
  titleLines = ['EXPLORE.', 'COLLECT.'],
  highlight = 'LEVEL UP.',
  description = 'RETRO-INSPIRED GEAR\nMADE FOR EVERY DAY PLAY.',
}: HeroRetroProps) => {
  const heroImages = images || { main: imgHoodie, sub1: imgCap, sub2: imgKeychain };

  return (
    <section className="retro-hero" aria-label="Hero banner">
      {/* Space Invader decorations */}
      <div className="retro-hero__invaders" aria-hidden="true">
        <SpaceInvader variant="crab" size={20} color="var(--wp--preset--color--foreground, #1E2630)" className="retro-hero__invader retro-hero__invader--1" />
        <PixelCursor size={22} className="retro-hero__invader retro-hero__invader--2" />
      </div>

      {/* Pixel dots decoration */}
      <div className="retro-hero-dots" aria-hidden="true">
        <span className="retro-dot" />
        <span className="retro-dot" />
        <span className="retro-dot" />
      </div>

      <div className="retro-hero-left">
        <h1 className="retro-hero-title retro-font-display">
          {titleLines.map((line, i) => (
            <span key={i} className="retro-hero-title__line">{line}</span>
          ))}
          {highlight && (
            <span className="retro-hero-highlight">{highlight}</span>
          )}
        </h1>
        <p className="retro-hero-desc">{description}</p>
        <Link to="/shop" className="pp-pixel-btn pp-pixel-btn--primary retro-font-display">
          SHOP NOW <ArrowRight size={18} strokeWidth={2.5} />
        </Link>

        {/* Small pixel decoration */}
        <div className="retro-hero__pixel-deco" aria-hidden="true">
          <SpaceInvader variant="squid" size={24} color="var(--wp--preset--color--primary, #FFC533)" />
        </div>
      </div>

      <div className="retro-hero-right">
        <div className="retro-hero-stage">
          <img src={heroImages.main} alt="Featured product - hoodie" className="retro-hero-stage-main" />
          <img src={heroImages.sub1} alt="Featured product - cap" className="retro-hero-stage-sub1" />
          <img src={heroImages.sub2} alt="Featured product - keychain" className="retro-hero-stage-sub2" />
        </div>
      </div>
    </section>
  );
};

HeroRetro.displayName = 'HeroRetro';