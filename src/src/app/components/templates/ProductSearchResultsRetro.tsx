/**
 * ProductSearchResultsRetro
 *
 * "PlayPocket" FSE theme - Search Results page.
 * WCAG AA 2.2 compliant.
 */

import { Link, useLocation } from 'react-router';
import { MagnifyingGlass, ShoppingCart } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { products } from '../../data/products';

export const ProductSearchResultsRetro = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q') || 'Retro';

  const results = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-search-results-layout">
          {/* Search Header */}
          <div className="retro-title-banner retro-search-results-layout__banner">
            <MagnifyingGlass size={32} weight="bold" color="var(--color-ink)" />
            <h1 className="retro-font-display retro-bold retro-search-results-layout__title">
              SEARCH: &quot;{q.toUpperCase()}&quot;
            </h1>
            <span className="retro-font-body retro-bold retro-search-results-layout__count">
              {results.length} MATCHES
            </span>
          </div>

          {/* Results */}
          {results.length === 0 ? (
            <div className="retro-search-results-layout__empty">
              <p className="retro-font-body retro-search-results-layout__empty-text">
                No items found matching your query.
              </p>
              <Link
                to="/shop"
                className="retro-button retro-button--primary retro-font-display retro-bold"
              >
                RETURN TO SHOP
              </Link>
            </div>
          ) : (
            <div className="retro-search-results-layout__grid">
              {results.map((item) => (
                <div key={item.id} className="retro-product-card retro-search-results-layout__card">
                  {/* Image */}
                  <Link
                    to={`/product/${item.slug || item.id}`}
                    className="retro-search-results-layout__card-image-link"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="retro-search-results-layout__card-img"
                    />
                  </Link>

                  {/* Details */}
                  <div className="retro-search-results-layout__card-details">
                    <h2 className="retro-font-display retro-bold retro-search-results-layout__card-name">
                      {item.name}
                    </h2>
                    <p className="retro-font-body retro-search-results-layout__card-price">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Action */}
                    <div className="retro-search-results-layout__card-actions">
                      <button className="retro-button retro-button--primary retro-font-display retro-bold retro-search-results-layout__add-btn">
                        <ShoppingCart weight="bold" /> ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

ProductSearchResultsRetro.displayName = 'ProductSearchResultsRetro';