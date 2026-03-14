/**
 * PageBundleBuilderRetro
 *
 * "PlayPocket" FSE theme - Interactive Bundle Builder page.
 * Users assemble custom product bundles with tiered discounts.
 * WCAG AA 2.2 compliant.
 *
 * @route /bundle-builder
 */

import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Package, X, ShoppingCart, Check } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BUNDLE_CATEGORIES, BUNDLE_TIERS } from '../../data/newPages';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'sonner@2.0.3';

interface SelectedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const PageBundleBuilderRetro = () => {
  const cart = useCart();
  const [activeTier, setActiveTier] = useState('pro');
  const [activeCategory, setActiveCategory] = useState('apparel');
  const [selected, setSelected] = useState<SelectedProduct[]>([]);

  // Google Fonts loading moved to RootLayout.

  const currentTier = BUNDLE_TIERS.find((t) => t.id === activeTier) || BUNDLE_TIERS[1];
  const maxItems = currentTier.items;

  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter(
      (p: any) => p.categorySlug === activeCategory
    ).slice(0, 8);
  }, [activeCategory]);

  const isSelected = (id: string) => selected.some((s) => s.id === id);

  const toggleProduct = (product: any) => {
    if (isSelected(product.id)) {
      setSelected(selected.filter((s) => s.id !== product.id));
    } else if (selected.length < maxItems) {
      setSelected([
        ...selected,
        { id: product.id, name: product.name, price: product.salePrice || product.price, image: product.image },
      ]);
    } else {
      toast.error(`Max ${maxItems} items for ${currentTier.label}!`, { duration: 2000 });
    }
  };

  const removeItem = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  const subtotal = selected.reduce((sum, s) => sum + s.price, 0);
  const discountAmount = subtotal * (currentTier.discount / 100);
  const total = subtotal - discountAmount;

  const handleAddBundle = () => {
    if (selected.length === 0) {
      toast.error('Add items to your bundle first!', { duration: 2000 });
      return;
    }
    toast.success(`Bundle added to cart! You saved $${discountAmount.toFixed(2)}`, {
      duration: 3000,
      position: 'bottom-right',
    });
    window.dispatchEvent(new Event('open-mini-cart'));
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-breadcrumb retro-font-display">
          <div className="retro-breadcrumb-dot" />
          <Link to="/" className="retro-breadcrumb-link">HOME</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <Link to="/shop" className="retro-breadcrumb-link">SHOP</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <span className="retro-breadcrumb-current">BUNDLE BUILDER</span>
        </div>

        <div className="retro-page-shell">
          <div className="retro-page-shell__header">
            <Package size={32} weight="bold" aria-hidden="true" />
            <div>
              <h1 className="retro-font-display retro-bold retro-page-shell__title">
                BUILD YOUR PACK
              </h1>
              <p className="retro-font-body retro-page-shell__subtitle">
                Pick your tier, choose items, and save big.
              </p>
            </div>
          </div>

          {/* Tier Selector */}
          <div className="retro-bundle__tier-selector" role="radiogroup" aria-label="Bundle tier selection">
            {BUNDLE_TIERS.map((tier) => (
              <button
                key={tier.id}
                role="radio"
                aria-checked={activeTier === tier.id}
                onClick={() => {
                  setActiveTier(tier.id);
                  if (selected.length > tier.items) {
                    setSelected(selected.slice(0, tier.items));
                  }
                }}
                className={`retro-bundle__tier-card ${activeTier === tier.id ? 'retro-bundle__tier-card--active' : ''}`}
              >
                <span className="retro-bundle__tier-icon" aria-hidden="true">{tier.icon}</span>
                <h3 className="retro-font-display retro-bold retro-bundle__tier-label">{tier.label}</h3>
                <span className="retro-font-body retro-bundle__tier-detail">
                  {tier.items} items / {tier.discount}% off
                </span>
              </button>
            ))}
          </div>

          <div className="retro-bundle__layout">
            {/* Main Product Selection */}
            <div className="retro-bundle__main">
              {/* Category Tabs */}
              <div className="retro-bundle__category-tabs" role="tablist" aria-label="Product categories">
                {BUNDLE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={activeCategory === cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`retro-font-display retro-bold retro-bundle__category-tab ${activeCategory === cat.id ? 'retro-bundle__category-tab--active' : ''}`}
                  >
                    <span aria-hidden="true">{cat.icon}</span> {cat.label}
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <div className="retro-bundle__product-grid" role="list">
                {categoryProducts.map((product: any) => {
                  const sel = isSelected(product.id);
                  return (
                    <button
                      key={product.id}
                      role="listitem"
                      onClick={() => toggleProduct(product)}
                      className={`retro-bundle__product-card ${sel ? 'retro-bundle__product-card--selected' : ''}`}
                      aria-pressed={sel}
                      aria-label={`${product.name} - $${(product.salePrice || product.price).toFixed(2)}${sel ? ' (selected)' : ''}`}
                    >
                      {sel && (
                        <span className="retro-bundle__product-card-check" aria-hidden="true">
                          <Check size={14} weight="bold" />
                        </span>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="retro-bundle__product-img"
                        loading="lazy"
                      />
                      <div className="retro-bundle__product-info">
                        <h4 className="retro-font-display retro-bold retro-bundle__product-name">
                          {product.name}
                        </h4>
                        <span className="retro-font-display retro-bold retro-bundle__product-price">
                          ${(product.salePrice || product.price).toFixed(2)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Summary Sidebar */}
            <aside className="retro-bundle__sidebar">
              <div className="retro-bundle__summary">
                <h2 className="retro-font-display retro-bold retro-bundle__summary-title">
                  YOUR BUNDLE
                </h2>
                <p className="retro-font-display retro-bundle__summary-slots">
                  {selected.length} / {maxItems} slots filled
                </p>

                {selected.length === 0 ? (
                  <p className="retro-font-body retro-bundle__summary-slots">
                    Select items from the grid to start building.
                  </p>
                ) : (
                  <ul className="retro-bundle__summary-items">
                    {selected.map((item) => (
                      <li key={item.id} className="retro-bundle__summary-item">
                        <span className="retro-font-body">{item.name}</span>
                        <span className="retro-font-display retro-bold">${item.price.toFixed(2)}</span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="retro-bundle__summary-item-remove"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X size={14} weight="bold" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {selected.length > 0 && (
                  <>
                    <div className="retro-font-display retro-bold retro-bundle__summary-discount">
                      {currentTier.discount}% DISCOUNT: -${discountAmount.toFixed(2)}
                    </div>
                    <div className="retro-font-display retro-bold retro-bundle__summary-total">
                      <span>TOTAL</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </>
                )}

                <button
                  onClick={handleAddBundle}
                  disabled={selected.length === 0}
                  className="retro-btn retro-btn--primary retro-font-display retro-bold"
                >
                  <ShoppingCart size={18} weight="bold" aria-hidden="true" />
                  ADD BUNDLE TO CART
                </button>
              </div>
            </aside>
          </div>

          <FooterRetro />
          <MiniCartRetro />
        </div>
      </div>
    </div>
  );
};

PageBundleBuilderRetro.displayName = 'PageBundleBuilderRetro';