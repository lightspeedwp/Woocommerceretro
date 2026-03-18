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

import { HeroRetro } from '../patterns/HeroRetro';
import { CategoryRowRetro } from '../patterns/CategoryRowRetro';
import { FeaturedProductsRetro } from '../patterns/FeaturedProductsRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';

export const FrontPageRetro = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        {/* Space Invader decorations are now site-wide via FloatingInvaders in SiteLayout */}

        <HeroRetro />
        <main className="pp-main" id="main-content" tabIndex={-1}>
          <CategoryRowRetro />
          <FeaturedProductsRetro title="FEATURED ITEMS" linkText="VIEW ALL" />
          <BottomGridRetro />
        </main>
        <MiniCartRetro />
      </div>
    </div>
  );
};

FrontPageRetro.displayName = 'FrontPageRetro';