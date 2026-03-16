import React, { useState } from 'react';
import { Container } from '../common/Container';
import { DarkModeToggle } from '../common/DarkModeToggle';
import { AppWindow, Package, Cube, Code, ShoppingBag, BookOpen, Info, Question, FileText, User, CreditCard, Megaphone, Wrench, MagnifyingGlass, Faders, Sparkle, TextT, GridFour, Check, ArrowSquareOut, ShoppingCart, CursorClick, Image as ImageIcon, Palette } from '../../utils/phosphor-compat';

/**
 * PageShowcase Template — Retro Redesign
 *
 * Visual component showcase and design system documentation page.
 *
 * @template
 * @route /showcase
 */
const PageShowcase = () => {
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
      <div className="retro-devtools-page" style={{ backgroundColor: 'var(--color-paper)', color: 'var(--color-ink)', minHeight: '100vh', paddingBottom: '4rem' }}>

        {/* Header Section */}
        <section style={{
          padding: '3rem 0',
          borderBottom: '4px solid var(--color-ink)',
          backgroundColor: 'var(--color-signal)',
          backgroundImage: 'radial-gradient(var(--color-ink) 2px, transparent 2px)',
          backgroundSize: '16px 16px',
        }}>
          <Container>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '2rem',
              border: '4px solid var(--color-ink)',
              boxShadow: '8px 8px 0 rgba(0,0,0,0.2)',
              display: 'inline-block',
              color: 'var(--color-paper)'
            }}>
              <h1 className="retro-font-display retro-bold" style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>COMPONENT SHOWCASE</h1>
              <p className="retro-font-body" style={{ fontSize: '1.125rem', margin: 0, opacity: 0.9 }}>
                Explore the complete collection of templates, parts, patterns, and blocks.
              </p>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section style={{ padding: '4rem 0' }}>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {stats.map((stat, index) => (
                <div key={index} style={{
                  backgroundColor: 'var(--color-paper-deep)',
                  border: '4px solid var(--color-ink)',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '4px 4px 0 var(--color-ink)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: 'var(--color-signal)' }}>
                    <stat.icon size={48} weight="bold" />
                  </div>
                  <div className="retro-font-display retro-bold" style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>{stat.count}</div>
                  <div className="retro-font-body" style={{ fontSize: '0.875rem', opacity: 0.8, fontWeight: 'bold' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Templates by Category */}
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-paper-deep)', borderTop: '4px solid var(--color-ink)' }}>
          <Container>
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="retro-font-display retro-bold" style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>TEMPLATE CATEGORIES</h2>
              <p className="retro-font-body" style={{ margin: 0, opacity: 0.8 }}>63 templates organized into 9 semantic groups</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
              {templateCategories.map((category, index) => (
                <div key={index} style={{
                  backgroundColor: 'var(--color-paper)',
                  border: '4px solid var(--color-ink)',
                  padding: '1.5rem',
                  boxShadow: '4px 4px 0 var(--color-ink)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ color: 'var(--color-signal)' }}>
                      <category.icon size={32} weight="bold" />
                    </div>
                    <span className="retro-font-display retro-bold" style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-paper)', padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}>
                      {category.count}
                    </span>
                  </div>
                  <h3 className="retro-font-display retro-bold" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{category.name}</h3>
                  <p className="retro-font-body" style={{ margin: 0, fontSize: '0.875rem', opacity: 0.8 }}>{category.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Component Browser */}
        <section style={{ padding: '4rem 0', borderTop: '4px solid var(--color-ink)' }}>
          <Container>
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="retro-font-display retro-bold" style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>COMPONENT DIRECTORY</h2>
              <p className="retro-font-body" style={{ margin: 0, opacity: 0.8 }}>Search and filter all available React components</p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginBottom: '3rem',
              backgroundColor: 'var(--color-paper-deep)',
              border: '4px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '4px 4px 0 var(--color-ink)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <MagnifyingGlass size={24} weight="bold" color="var(--color-ink)" />
                <input
                  type="text"
                  placeholder="SEARCH COMPONENTS..."
                  value={searchTerm}
                  onChange={(evt) => setSearchTerm(evt.target.value)}
                  className="retro-font-display retro-bold"
                  style={{
                    flex: 1,
                    backgroundColor: 'var(--color-paper)',
                    border: '2px solid var(--color-ink)',
                    padding: '0.75rem 1rem',
                    fontSize: '1rem',
                    color: 'var(--color-ink)',
                    outline: 'none'
                  }}
                  aria-label="Search components"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Faders size={24} weight="bold" color="var(--color-ink)" />
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className="retro-font-display retro-bold"
                        style={{
                          backgroundColor: isActive ? 'var(--color-ink)' : 'var(--color-paper)',
                          color: isActive ? 'var(--color-paper)' : 'var(--color-ink)',
                          border: '2px solid var(--color-ink)',
                          padding: '0.5rem 1rem',
                          fontSize: '0.875rem',
                          cursor: 'pointer',
                          textTransform: 'uppercase'
                        }}
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
            <div style={{ marginBottom: '2rem' }}>
              <p className="retro-font-body" style={{ fontSize: '1rem' }}>
                SHOWING <strong>{filteredComponents.length}</strong> OF <strong>{components.length}</strong> COMPONENTS
              </p>
            </div>

            {/* Component Grid */}
            {filteredComponents.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {filteredComponents.map((comp) => (
                  <div key={comp.name} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'var(--color-paper)',
                    border: '4px solid var(--color-ink)',
                    padding: '1.5rem',
                    boxShadow: '4px 4px 0 var(--color-ink)',
                    transition: 'transform 0.1s, box-shadow 0.1s'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h3 className="retro-font-display retro-bold" style={{ margin: 0, fontSize: '1.25rem', wordBreak: 'break-all' }}>{comp.name}</h3>
                      <span
                        className="retro-font-display"
                        style={{
                          backgroundColor: 'var(--color-signal)',
                          color: 'var(--color-paper)',
                          padding: '0.25rem 0.5rem',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          borderRadius: '2px',
                          whiteSpace: 'nowrap',
                          marginLeft: '0.5rem'
                        }}
                      >
                        {comp.type}
                      </span>
                    </div>
                    <p className="retro-font-body" style={{ margin: '0 0 1.5rem 0', fontSize: '0.875rem', flex: 1, opacity: 0.8 }}>{comp.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px dashed var(--color-ink)', paddingTop: '1rem', marginTop: 'auto' }}>
                      <code style={{ fontSize: '0.75rem', backgroundColor: 'var(--color-paper-deep)', padding: '0.25rem 0.5rem', border: '1px solid var(--color-ink)', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{comp.path}</code>
                      <a
                        href={`#${comp.path}`}
                        style={{ color: 'var(--color-ink)' }}
                        aria-label={`View ${comp.name} source`}
                      >
                        <ArrowSquareOut size={20} weight="bold" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                backgroundColor: 'var(--color-paper-deep)',
                border: '4px dashed var(--color-ink)'
              }}>
                <Cube size={48} weight="duotone" color="var(--color-ink)" style={{ marginBottom: '1rem' }} />
                <h3 className="retro-font-display retro-bold" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>NO COMPONENTS FOUND</h3>
                <p className="retro-font-body" style={{ margin: 0, opacity: 0.8 }}>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </Container>
        </section>
      </div>
    </>
  );
}

export default PageShowcase;