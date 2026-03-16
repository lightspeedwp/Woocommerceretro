/**
 * FrontPageRetro
 *
 * FSE Theme "PlayPocket" - Home Page.
 * Composes Header, Hero, Categories, Featured Items, Power Up + Best Sellers,
 * and Footer into the retro front page layout with Space Invader decorations.
 *
 * **Styling:** BEM classes in /styles/globals.css
 * **WCAG:** Semantic landmarks, heading hierarchy, adequate contrast
 */

import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { CategoryRowRetro } from '../patterns/CategoryRowRetro';
import { FeaturedProductsRetro } from '../patterns/FeaturedProductsRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { SpaceInvader } from '../patterns/SpaceInvaders';

export const FrontPageRetro = () => {
  return (
    <div className="pp-home">
      {/* Background Space Invader decorations */}
      <div className="pp-home__invaders" aria-hidden="true">
        <SpaceInvader variant="crab" size={16} color="var(--wp--preset--color--border, #CBD5C9)" className="pp-home__inv pp-home__inv--1" />
        <SpaceInvader variant="squid" size={14} color="var(--wp--preset--color--border, #CBD5C9)" className="pp-home__inv pp-home__inv--2" />
        <SpaceInvader variant="octopus" size={18} color="var(--wp--preset--color--border, #CBD5C9)" className="pp-home__inv pp-home__inv--3" />
        <SpaceInvader variant="crab" size={12} color="var(--wp--preset--color--border, #CBD5C9)" className="pp-home__inv pp-home__inv--4" />
        <SpaceInvader variant="squid" size={16} color="var(--wp--preset--color--border, #CBD5C9)" className="pp-home__inv pp-home__inv--5" />
      </div>

      <HeaderRetro />
      <main className="pp-main">
        <HeroRetro />
        <CategoryRowRetro />
        <FeaturedProductsRetro title="FEATURED ITEMS" linkText="VIEW ALL" />
        <BottomGridRetro />
      </main>
      <FooterRetro />
      <MiniCartRetro />
    </div>
  );
};

FrontPageRetro.displayName = 'FrontPageRetro';
