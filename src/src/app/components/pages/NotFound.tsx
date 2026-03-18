/**
 * NotFound - 404 Page
 *
 * Displays a friendly 404 error page with search,
 * product suggestions, and helpful navigation links.
 */

import React from 'react';
import { Link } from 'react-router';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { House as Home, MagnifyingGlass as Search, Bag as ShoppingBag } from '../../utils/phosphor-compat';
import { ProductCard } from '../blocks/product/ProductCard';
import { products } from '../../data/products';

const helpItems = [
  {
    icon: ShoppingBag,
    title: 'Browse Categories',
    desc: 'Explore our product categories',
    link: '/shop',
    linkText: 'Shop Now \u2192',
    color: 'purple',
  },
  {
    icon: Search,
    title: 'Search Products',
    desc: 'Find exactly what you need',
    link: '/shop/search',
    linkText: 'Start Searching \u2192',
    color: 'blue',
  },
];

export const NotFound = () => {
  const suggestedProducts = products
    .filter((p) => p.inStock)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <Layout>
      <Container variant="content" className="wp-404-container">
        <div className="wp-404-content">
          <Heading level={1} className="wp-404-title">Page not found</Heading>
          <p className="wp-404-description">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <div className="wp-404-actions">
            <Link to="/" className="wp-404-action-primary">
              <Home size={20} /> Go to Homepage
            </Link>
            <Link to="/shop" className="wp-404-action-secondary">
              <ShoppingBag size={20} /> Browse Shop
            </Link>
          </div>

          <div className="wp-404-search">
            <label htmlFor="search-404" className="wp-404-search-label">
              <small className="wp-404-search-hint">Looking for something specific?</small>
            </label>
            <div className="wp-404-search-wrapper">
              <input
                id="search-404"
                type="text"
                placeholder="Search for products..."
                className="wp-404-search-input"
              />
              <button className="wp-404-search-button" aria-label="Search">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="wp-404-suggestions">
          <Heading level={2} className="wp-404-suggestions-title">You might be interested in</Heading>
          <div className="wp-404-suggestions-grid">
            {suggestedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="wp-404-suggestions-link">
            <Link to="/shop" className="wp-404-view-all-link">View All Products &rarr;</Link>
          </div>
        </div>
      </Container>

      <div className="wp-404-help-section">
        <Container variant="site" className="wp-404-help-container">
          <div className="wp-404-help-grid">
            {helpItems.map((item) => (
              <div className="wp-404-help-item" key={item.title}>
                <div className={`wp-404-help-icon wp-404-help-icon-${item.color}`}>
                  <item.icon className="wp-404-help-icon-svg" size={24} />
                </div>
                <h3>{item.title}</h3>
                <p className="wp-404-help-description"><small>{item.desc}</small></p>
                <Link to={item.link} className="wp-404-help-link"><small>{item.linkText}</small></Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}

NotFound.displayName = 'NotFound';