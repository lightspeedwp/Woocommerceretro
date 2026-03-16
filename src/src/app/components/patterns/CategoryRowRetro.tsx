/**
 * CategoryRowRetro
 *
 * Category navigation row with pixel-style icons.
 * Matches the design reference with bordered cells and arrow button.
 *
 * **Styling:** BEM (.retro-cat__*) in /src/styles/sections/playpocket-home.css
 * **WCAG:** Semantic nav, 44px touch targets, text labels
 */

import React from 'react';
import { ArrowRight, Shirt, Gamepad2, Ghost, Image as ImageIcon, Package } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router';

interface Category {
  name: string;
  icon: LucideIcon;
  slug: string;
}

interface CategoryRowRetroProps {
  categories?: Category[];
}

const defaultCategories: Category[] = [
  { name: 'APPAREL', icon: Shirt, slug: 'apparel' },
  { name: 'ACCESSORIES', icon: Gamepad2, slug: 'accessories' },
  { name: 'GAMES', icon: Ghost, slug: 'games' },
  { name: 'POSTERS', icon: ImageIcon, slug: 'posters' },
  { name: 'COLLECTIBLES', icon: Package, slug: 'collectibles' },
];

export const CategoryRowRetro = ({ categories = defaultCategories }: CategoryRowRetroProps) => {
  return (
    <nav aria-label="Product categories">
      <div className="retro-cat-header retro-font-display">CATEGORIES +</div>
      <div className="retro-cat-row">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.slug} to={`/category/${cat.slug}`} className="retro-cat-item">
              <Icon size={32} className="retro-cat-icon" strokeWidth={1.5} />
              <span className="retro-font-display">{cat.name}</span>
            </Link>
          );
        })}
        <Link to="/shop" className="retro-cat-item retro-cat-item--arrow" aria-label="View all categories">
          <ArrowRight size={24} strokeWidth={2.5} className="retro-cat-icon" />
        </Link>
      </div>
    </nav>
  );
};

CategoryRowRetro.displayName = 'CategoryRowRetro';