import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '@phosphor-icons/react';

const imgHoodie = 'https://images.unsplash.com/photo-1677221832017-4e6c31737e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGhvb2RpZSUyMGFwcGFyZWx8ZW58MXx8fHwxNzczMTY0MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080';
const imgCap = 'https://images.unsplash.com/photo-1609561812031-24e3312230f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMGNhcCUyMGhhdCUyMGFwcGFyZWx8ZW58MXx8fHwxNzczMTY0MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080';
const imgKeychain = 'https://images.unsplash.com/photo-1523350518665-e177eea6988b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHBpeGVsJTIwa2V5Y2hhaW58ZW58MXx8fHwxNzczMTY0MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080';

interface HeroRetroProps {
  images?: { main: string; sub1: string; sub2: string };
  titleLines?: string[];
  highlight?: string;
  description?: string;
}

export const HeroRetro = ({
  images,
  titleLines = ['LEVEL UP', 'YOUR GEAR!'],
  highlight = '',
  description = 'Shop Unique Game-Inspired Merch & Gear.',
}: HeroRetroProps) => {
  const heroImages = images || { main: imgHoodie, sub1: imgCap, sub2: imgKeychain };

  return (
    <section className="retro-hero">
      <div className="retro-hero-dots">
        <div className="retro-dot" />
        <div className="retro-dot" />
        <div className="retro-dot" />
        <div className="retro-dot" />
      </div>
      <div className="retro-hero-left">
        <h1 className="retro-hero-title retro-font-display">
          {titleLines.map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
          {highlight && <span className="retro-hero-highlight">{highlight}</span>}
        </h1>
        <p className="retro-hero-desc retro-bold">{description}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/shop" className="retro-button retro-font-display" style={{ textDecoration: 'none' }}>
            SHOP NOW <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </div>
      <div className="retro-hero-right">
        <div className="retro-hero-stage">
          <img src={heroImages.main} alt="Hero Main" className="retro-hero-stage-main" />
          <img src={heroImages.sub1} alt="Hero Sub 1" className="retro-hero-stage-sub1" />
          <img src={heroImages.sub2} alt="Hero Sub 2" className="retro-hero-stage-sub2" />
        </div>
      </div>
    </section>
  );
}

HeroRetro.displayName = 'HeroRetro';