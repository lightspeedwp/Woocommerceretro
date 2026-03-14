import React from 'react';
import { Link } from 'react-router';
import { Container } from '../../common/Container';

/**
 * CategoryTilesGrid Pattern
 */
interface CategoryTilesGridProps {
  categories: string[];
}

export const CategoryTilesGrid = ({ categories }: CategoryTilesGridProps) => {
  return (
    <section className="wp-category-tiles">
      <Container>
        <h2 className="wp-category-tiles__heading">Browse by Category</h2>
        <div className="wp-category-tiles__grid">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/shop/category/${cat.toLowerCase()}`}
              className="wp-category-tiles__tile"
            >
              <span className="wp-category-tiles__label">
                <strong>{cat}</strong>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
