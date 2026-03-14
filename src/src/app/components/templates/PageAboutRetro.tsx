/**
 * PageAboutRetro
 *
 * "PlayPocket" FSE theme - About page.
 * WCAG AA 2.2 compliant.
 */

import { type ComponentType } from 'react';
import { Link } from 'react-router';
import { Trophy, Users, ShieldCheck, Smiley, ArrowRight } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

interface Stat { label: string; value: string; }
interface Value { icon: ComponentType<any>; title: string; desc: string; }

const stats: Stat[] = [
  { label: 'PLAYERS WORLDWIDE', value: '2M+' },
  { label: 'YEARS IN GAME', value: '15' },
  { label: 'RARE ITEMS', value: '800+' },
  { label: '5-STAR REVIEWS', value: '50K+' },
];

const values: Value[] = [
  { icon: Trophy, title: 'TOP TIER QUALITY', desc: 'We only source the highest quality materials for maximum durability and comfort.' },
  { icon: Users, title: 'CO-OP MULTIPLAYER', desc: 'Our community drives everything we do. We build gear for gamers, by gamers.' },
  { icon: ShieldCheck, title: 'SECURE SAVE DATA', desc: 'Your privacy and satisfaction are guarded by industry-leading security protocols.' },
  { icon: Smiley, title: 'FUN FIRST', desc: "If it's not fun, we don't make it. Every item is designed to bring a smile to your face." },
];

export const PageAboutRetro = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-about-layout">
          {/* Title Banner */}
          <div className="retro-title-banner retro-about-layout__banner">
            <h1 className="retro-font-display retro-bold retro-about-layout__title">OUR ORIGIN STORY</h1>
            <p className="retro-font-body retro-about-layout__subtitle">
              From a small pixelated dream to a global inventory of top-tier gear.
            </p>
          </div>

          {/* Main Story Split */}
          <div className="retro-about-story">
            <div className="retro-about-story__image-col">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Retro arcade gaming room"
                className="retro-about-story__image"
              />
            </div>
            <div className="retro-about-story__text-col">
              <h2 className="retro-font-display retro-bold retro-about-story__heading">PRESS START</h2>
              <p className="retro-font-body">
                Back in 2008, we realized the gaming merch world was missing something crucial: actual style.
                Everything looked like a cheap promotional giveaway. We wanted gear that we could wear outside
                without feeling like a walking billboard.
              </p>
              <p className="retro-font-body">
                So we started PlayPocket. A brand dedicated to creating high-quality, subtle, and beautifully
                designed apparel and accessories for people who love the retro aesthetic as much as we do.
              </p>
              <Link to="/shop" className="retro-button retro-button--primary retro-font-display retro-bold retro-about-story__cta">
                VIEW INVENTORY <ArrowRight weight="bold" />
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="retro-stats-bar">
            {stats.map((stat, i) => (
              <div key={i} className="retro-stats-bar__item">
                <div className="retro-font-display retro-bold retro-stats-bar__value">{stat.value}</div>
                <div className="retro-font-body retro-stats-bar__label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div className="retro-values">
            <h2 className="retro-font-display retro-bold retro-values__title">CORE PROGRAMMING</h2>
            <div className="retro-values__grid">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div key={i} className="retro-values__card">
                    <Icon size={32} weight="fill" className="retro-values__card-icon" />
                    <h3 className="retro-font-display retro-bold retro-values__card-title">{val.title}</h3>
                    <p className="retro-font-body retro-values__card-desc">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PageAboutRetro.displayName = 'PageAboutRetro';