import React from 'react';
import { ArrowRight, TShirt, GameController, Ghost, Image as ImageIcon, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';

interface Category {
  name: string;
  icon: React.ComponentType<any>;
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
    <section>
      <div className="retro-cat-header retro-font-display">CATEGORIES +</div>
      <div className="retro-cat-row">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <Link key={i} to={`/shop/category/${cat.slug}`} className="retro-cat-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Icon size={36} weight="duotone" className="retro-cat-icon" />
              <span className="retro-font-display retro-bold">{cat.name}</span>
            </Link>
          );
        })}
        <Link to="/shop" className="retro-cat-item" style={{ textDecoration: 'none', backgroundColor: 'var(--color-signal)', color: 'var(--wp--preset--color--primary-foreground, #101417)', flex: '0 0 auto', minWidth: 'auto', padding: '1.5rem 1rem' }}>
          <ArrowRight size={24} weight="bold" className="retro-cat-icon" color="var(--wp--preset--color--primary-foreground, #101417)" />
        </Link>
      </div>
    </section>
  );
}

CategoryRowRetro.displayName = 'CategoryRowRetro';