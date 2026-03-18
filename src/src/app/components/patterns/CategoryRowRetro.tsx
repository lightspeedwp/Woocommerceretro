/**
 * CategoryRowRetro
 *
 * Category navigation row with pixel-style icons.
 * Matches the design reference with bordered cells and arrow button.
 *
 * **BEM block:** .retro-cat
 * **Styling:** /src/styles/sections/pp-categories.css
 * **WCAG:** Semantic nav, 44px touch targets, text labels
 */

import React from 'react';
import { ArrowRight, TShirt, GameController, Ghost, Image as ImageIcon, Package } from '../../utils/phosphor-compat';
import type { Icon as PhosphorIcon } from '@phosphor-icons/react';
import { Link } from 'react-router';

interface Category {
  name: string;
  icon: PhosphorIcon;
  slug: string;
}

interface CategoryRowRetroProps {
  categories?: Category[];
}

const defaultCategories: Category[] = [
  { name: 'APPAREL', icon: TShirt, slug: 'apparel' },
  { name: 'ACCESSORIES', icon: GameController, slug: 'accessories' },
  { name: 'GAMES', icon: Ghost, slug: 'games' },
  { name: 'POSTERS', icon: ImageIcon, slug: 'posters' },
  { name: 'COLLECTIBLES', icon: Package, slug: 'collectibles' },
];

export const CategoryRowRetro = ({ categories = defaultCategories }: CategoryRowRetroProps) => {
  return (
    <nav className="retro-cat" aria-label="Product categories">
      <div className="retro-cat__header retro-font-display">CATEGORIES +</div>
      <div className="retro-cat__list">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.slug} to={`/category/${cat.slug}`} className="retro-cat__item">
              <Icon size={32} className="retro-cat__icon" strokeWidth={1.5} />
              <span className="retro-font-display">{cat.name}</span>
            </Link>
          );
        })}
        <Link to="/shop" className="retro-cat__item retro-cat__item--arrow" aria-label="View all categories">
          <ArrowRight size={24} strokeWidth={2.5} className="retro-cat__icon" />
        </Link>
      </div>
    </nav>
  );
};

CategoryRowRetro.displayName = 'CategoryRowRetro';