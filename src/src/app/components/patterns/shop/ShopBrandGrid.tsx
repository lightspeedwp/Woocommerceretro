import React from 'react';
import { Link } from 'react-router';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';

const BRANDS = [
  { name: 'KWV Classic Collection', link: '/shop/brands/kwv-classic-collection' },
  { name: 'Laborie', link: '/shop/brands/laborie' },
  { name: 'Roodeberg', link: '/shop/brands/roodeberg' },
  { name: 'Cathedral Cellar', link: '/shop/brands/cathedral-cellar' },
  { name: 'Annabelle', link: '/shop/brands/annabelle' },
  { name: 'KWV House of Brandy', link: '/shop/brands/kwv-brandy' },
  { name: 'Imagin', link: '/shop/brands/imagin-gin' },
  { name: 'Cruxland', link: '/shop/brands/cruxland-gin' },
  { name: 'Wild Africa Cream', link: '/shop/brands/wild-africa-cream' },
];

/**
 * ShopBrandGrid Component
 */
export const ShopBrandGrid = () => {
  return (
    <div className="wp-shop-brand-grid">
      <Container variant="site">
        <div className="wp-shop-brand-grid__header">
          <Typography variant="h2" className="wp-shop-brand-grid__title">
            Shop Our Famous Brands
          </Typography>
          <div className="wp-shop-brand-grid__divider" />
        </div>

        <div className="wp-shop-brand-grid__grid">
          {BRANDS.map((brand, idx) => (
            <Link key={idx} to={brand.link} className="wp-brand-card group">
              <div className="wp-brand-card__inner">
                <Typography variant="h3" className="wp-brand-card__name">{brand.name}</Typography>
                <div className="wp-brand-card__divider" />
                <span className="wp-brand-card__established">Est. 1918</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
