import React, { useState } from 'react';
import { Container } from '../common/Container';
import { DarkModeToggle } from '../common/DarkModeToggle';
import { Heading } from '../common/Heading';
import { AppWindow, Package, Cube, Code, ShoppingBag, BookOpen, Info, Question, FileText, User, CreditCard, Megaphone, Wrench, MagnifyingGlass, Faders, Sparkle, TextT, GridFour, Check, ArrowSquareOut, ShoppingCart, CursorClick, Image as ImageIcon, Palette } from '../../utils/phosphor-compat';
import { cn } from '../../utils/cn';

/**
 * PageShowcase Template — Retro Redesign
 *
 * Visual component showcase and design system documentation page.
 *
 * @template
 * @route /showcase
 */
export const PageShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const stats = [
    { icon: AppWindow, count: 63, label: 'TEMPLATES' },
    { icon: Package, count: 21, label: 'PARTS' },
    { icon: Cube, count: 43, label: 'PATTERNS' },
    { icon: Code, count: 200, label: 'BLOCKS' },
  ];

  const templateCategories = [
    { icon: ShoppingBag, name: 'Shop', count: 8, desc: 'Product archives & single pages' },
    { icon: BookOpen, name: 'Blog', count: 11, desc: 'Blog archives & post formats' },
    { icon: Info, name: 'Info Pages', count: 11, desc: 'About, team, careers, stores' },
    { icon: Question, name: 'Support', count: 9, desc: 'Help, returns, reviews, rewards' },
    { icon: FileText, name: 'Legal', count: 3, desc: 'Privacy, terms, shipping policy' },
    { icon: User, name: 'Account', count: 5, desc: 'Login, wishlist, dashboard' },
    { icon: CreditCard, name: 'Commerce', count: 7, desc: 'Cart, checkout, subscriptions' },
    { icon: Megaphone, name: 'Marketing', count: 3, desc: 'Homepage, loyalty, newsletter' },
    { icon: Wrench, name: 'Dev Tools', count: 6, desc: 'Style guide, showcase, icons' },
  ];

  const components = [
    { name: 'FrontPageRetro', category: 'Templates', type: 'Page', path: '/templates/FrontPageRetro.tsx', desc: 'Retro Homepage' },
    { name: 'ArchiveProductRetro', category: 'Templates', type: 'Archive', path: '/templates/ArchiveProductRetro.tsx', desc: 'Retro product listing' },
    { name: 'ProductSearchResultsRetro', category: 'Templates', type: 'Archive', path: '/templates/ProductSearchResultsRetro.tsx', desc: 'Retro search results' },
    { name: 'SingleProductRetro', category: 'Templates', type: 'Single', path: '/templates/SingleProductRetro.tsx', desc: 'Retro product detail page' },
    { name: 'PageCartRetro', category: 'Templates', type: 'Commerce', path: '/templates/PageCartRetro.tsx', desc: 'Retro shopping cart' },
    { name: 'PageCheckoutRetro', category: 'Templates', type: 'Commerce', path: '/templates/PageCheckoutRetro.tsx', desc: 'Retro checkout flow' },
    { name: 'PageOrderConfirmationRetro', category: 'Templates', type: 'Commerce', path: '/templates/PageOrderConfirmationRetro.tsx', desc: 'Retro order success' },
    { name: 'PageAboutRetro', category: 'Templates', type: 'Page', path: '/templates/PageAboutRetro.tsx', desc: 'Retro About page' },
    { name: 'PageContactRetro', category: 'Templates', type: 'Page', path: '/templates/PageContactRetro.tsx', desc: 'Retro Contact page' },
    { name: 'PageFAQRetro', category: 'Templates', type: 'Page', path: '/templates/PageFAQRetro.tsx', desc: 'Retro FAQ page' },
    { name: 'PageStoresRetro', category: 'Templates', type: 'Page', path: '/templates/PageStoresRetro.tsx', desc: 'Retro Stores page' },
    { name: 'PageCompareRetro', category: 'Templates', type: 'Page', path: '/templates/PageCompareRetro.tsx', desc: 'Retro Product Compare page' },
    { name: 'PageGiftCardsRetro', category: 'Templates', type: 'Page', path: '/templates/PageGiftCardsRetro.tsx', desc: 'Retro Gift Cards page' },
    { name: 'PageLoginRetro', category: 'Templates', type: 'Account', path: '/templates/PageLoginRetro.tsx', desc: 'Retro Login / Register' },
    { name: 'AccountLayoutRetro', category: 'Templates', type: 'Account', path: '/templates/AccountLayoutRetro.tsx', desc: 'Retro My Account Wrapper' },
    { name: 'DashboardRetro', category: 'Patterns', type: 'Account', path: '/patterns/account/DashboardRetro.tsx', desc: 'Retro Account Dashboard' },
    { name: 'OrdersRetro', category: 'Patterns', type: 'Account', path: '/patterns/account/OrdersRetro.tsx', desc: 'Retro Account Orders' },
    { name: 'PageTrackOrderRetro', category: 'Templates', type: 'Commerce', path: '/templates/PageTrackOrderRetro.tsx', desc: 'Retro Track Order' },
    { name: 'PageWishlistRetro', category: 'Templates', type: 'Account', path: '/templates/PageWishlistRetro.tsx', desc: 'Retro Wishlist' },
    { name: 'PagePrivacyPolicyRetro', category: 'Templates', type: 'Legal', path: '/templates/PagePrivacyPolicyRetro.tsx', desc: 'Retro Privacy Policy' },
    { name: 'PageTermsConditionsRetro', category: 'Templates', type: 'Legal', path: '/templates/PageTermsConditionsRetro.tsx', desc: 'Retro Terms & Conditions' },
    { name: 'PageNotFoundRetro', category: 'Templates', type: 'Page', path: '/templates/PageNotFoundRetro.tsx', desc: 'Retro 404 Error' },
    { name: 'PageReturnsPortalRetro', category: 'Templates', type: 'Support', path: '/templates/PageReturnsPortalRetro.tsx', desc: 'Retro Returns Portal' },
    { name: 'PageShippingReturnsRetro', category: 'Templates', type: 'Support', path: '/templates/PageShippingReturnsRetro.tsx', desc: 'Retro Shipping & Returns' },
    { name: 'ArchiveBlogRetro', category: 'Templates', type: 'Archive', path: '/templates/ArchiveBlogRetro.tsx', desc: 'Retro blog archive' },
    { name: 'SinglePostRetro', category: 'Templates', type: 'Single', path: '/templates/SinglePostRetro.tsx', desc: 'Retro single blog post' },
    { name: 'Header', category: 'Parts', type: 'Navigation', path: '/parts/Header.tsx', desc: 'Main navigation with mega menu and cart' },
    { name: 'Footer', category: 'Parts', type: 'Navigation', path: '/parts/Footer.tsx', desc: 'Site footer with links and newsletter' },
    { name: 'MiniCart', category: 'Parts', type: 'Commerce', path: '/parts/MiniCart.tsx', desc: 'Slide-over cart drawer with items' },
    { name: 'MegaMenu', category: 'Parts', type: 'Navigation', path: '/parts/MegaMenu.tsx', desc: 'Rich navigation overlay with previews' },
    { name: 'Hero', category: 'Patterns', type: 'Marketing', path: '/patterns/Hero.tsx', desc: 'Large hero section with CTA' },
    { name: 'ProductGrid', category: 'Patterns', type: 'Commerce', path: '/patterns/ProductGrid.tsx', desc: 'Responsive product grid layout' },
    { name: 'PostGrid', category: 'Patterns', type: 'Content', path: '/patterns/PostGrid.tsx', desc: 'Blog posts grid with previews' },
    { name: 'ProductCard', category: 'Blocks', type: 'Commerce', path: '/blocks/product/ProductCard.tsx', desc: 'Individual product display unit' },
    { name: 'PostCard', category: 'Blocks', type: 'Content', path: '/blocks/blog/PostCard.tsx', desc: 'Individual blog post display unit' },
    { name: 'Button', category: 'Blocks', type: 'UI', path: '/blocks/design/Button.tsx', desc: 'Interactive button component' },
    { name: 'Input', category: 'Blocks', type: 'UI', path: '/blocks/forms/Input.tsx', desc: 'Form text input field' },
  ];

  const categories = ['All', 'Templates', 'Parts', 'Patterns', 'Blocks'];

  const filteredComponents = components.filter((comp) => {
    const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          comp.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <DarkModeToggle />
      <div className="retro-devtools-page">

        {/* Header Section */}
        <section className="retro-showcase__header retro-showcase__header--pattern">
          <Container>
            <div className="retro-showcase__title-box">
              <Heading level={1} className="retro-showcase__title retro-font-display retro-bold">
                COMPONENT SHOWCASE
              </Heading>
              <p className="retro-showcase__subtitle retro-font-body">
                Explore the complete collection of templates, parts, patterns, and blocks.
              </p>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="retro-showcase__stats-section">
          <Container>
            <div className="retro-showcase__stats">
              {stats.map((stat, index) => (
                <div key={index} className="retro-showcase__stat-card">
                  <div className="retro-showcase__stat-icon">
                    <stat.icon size={48} weight="bold" />
                  </div>
                  <div className="retro-showcase__stat-count retro-font-display retro-bold">{stat.count}</div>
                  <div className="retro-showcase__stat-label retro-font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Templates by Category */}
        <section className="retro-showcase__categories-section">
          <Container>
            <div className="retro-showcase__section-header">
              <Heading level={2} className="retro-showcase__section-title retro-font-display retro-bold">
                TEMPLATE CATEGORIES
              </Heading>
              <p className="retro-showcase__section-description retro-font-body">
                63 templates organized into 9 semantic groups
              </p>
            </div>
            <div className="retro-showcase__category-grid">
              {templateCategories.map((category, index) => (
                <div key={index} className="retro-showcase__category-card">
                  <div className="retro-showcase__category-header">
                    <div className="retro-showcase__category-icon">
                      <category.icon size={32} weight="bold" />
                    </div>
                    <span className="retro-showcase__category-badge retro-font-display retro-bold">
                      {category.count}
                    </span>
                  </div>
                  <Heading level={3} className="retro-showcase__category-title retro-font-display retro-bold">
                    {category.name}
                  </Heading>
                  <p className="retro-showcase__category-description retro-font-body">{category.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Component Browser */}
        <section className="retro-showcase__directory-section">
          <Container>
            <div className="retro-showcase__section-header">
              <Heading level={2} className="retro-showcase__section-title retro-font-display retro-bold">
                COMPONENT DIRECTORY
              </Heading>
              <p className="retro-showcase__section-description retro-font-body">
                Search and filter all available React components
              </p>
            </div>

            <div className="retro-showcase__search">
              <div className="retro-showcase__search-input-wrapper">
                <MagnifyingGlass size={24} weight="bold" color="var(--color-ink)" />
                <input
                  type="text"
                  placeholder="SEARCH COMPONENTS..."
                  value={searchTerm}
                  onChange={(evt) => setSearchTerm(evt.target.value)}
                  className="retro-showcase__search-input retro-font-display retro-bold"
                  aria-label="Search components"
                />
              </div>

              <div className="retro-showcase__filter-wrapper">
                <Faders size={24} weight="bold" color="var(--color-ink)" />
                <div className="retro-showcase__filter-chips">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                          'retro-showcase__chip retro-font-display retro-bold',
                          isActive && 'retro-showcase__chip--active'
                        )}
                        aria-pressed={isActive}
                      >
                        {`${cat} (${cat === 'All' ? components.length : components.filter((c) => c.category === cat).length})`}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="retro-showcase__results-count">
              <p className="retro-font-body retro-showcase__results-count-text">
                SHOWING <strong>{filteredComponents.length}</strong> OF <strong>{components.length}</strong> COMPONENTS
              </p>
            </div>

            {/* Component Grid */}
            {filteredComponents.length > 0 ? (
              <div className="retro-showcase__results">
                {filteredComponents.map((comp) => (
                  <div key={comp.name} className="retro-showcase__component-card">
                    <div className="retro-showcase__component-header">
                      <Heading level={3} className="retro-showcase__component-name retro-font-display retro-bold">
                        {comp.name}
                      </Heading>
                      <div className="retro-showcase__component-badges">
                        <span className="retro-showcase__component-badge retro-font-display">
                          {comp.type}
                        </span>
                      </div>
                    </div>
                    <p className="retro-showcase__component-description retro-font-body">{comp.desc}</p>
                    <div className="retro-showcase__component-path">{comp.path}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="retro-showcase__empty">
                <div className="retro-showcase__empty-icon">
                  <Cube size={48} weight="duotone" />
                </div>
                <Heading level={3} className="retro-showcase__empty-message retro-font-display retro-bold">
                  NO COMPONENTS FOUND
                </Heading>
                <p className="retro-font-body retro-showcase__empty-hint">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </Container>
        </section>
      </div>
    </>
  );
}

export default PageShowcase;