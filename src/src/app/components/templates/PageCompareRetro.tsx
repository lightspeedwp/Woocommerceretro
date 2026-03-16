/**
 * PageCompareRetro
 *
 * "PlayPocket" FSE theme - Product Comparison page.
 * Uses ComparisonContext for dynamic product data.
 * WCAG AA 2.2 compliant.
 */

import { Link } from 'react-router';
import { Sword, CheckCircle, XCircle, ShoppingCart, Trash, ArrowRight } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { useComparison } from '../../contexts/ComparisonContext';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'sonner@2.0.3';

/** Spec keys we display when product data has them */
const SPEC_KEYS = ['sku', 'category', 'brand', 'weight', 'rating', 'reviewCount', 'inStock'] as const;

const SPEC_LABELS: Record<string, string> = {
  sku: 'SKU',
  category: 'CATEGORY',
  brand: 'BRAND',
  weight: 'WEIGHT',
  rating: 'RATING',
  reviewCount: 'REVIEWS',
  inStock: 'IN STOCK',
};

const formatSpecValue = (key: string, val: any) => {
  if (val === undefined || val === null) return '--';
  if (typeof val === 'boolean') return val;
  if (key === 'weight') return `${val} kg`;
  if (key === 'rating') return `${val} / 5`;
  return String(val);
};

export const PageCompareRetro = () => {
  const { comparisonItems, removeFromComparison, clearComparison, comparisonCount } = useComparison();
  const cartContext = useCart();

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-compare-layout">
          {/* Header */}
          <div className="retro-compare-layout__header">
            <Sword size={64} weight="fill" className="retro-compare-layout__icon" />
            <h1 className="retro-font-display retro-bold retro-compare-layout__title">
              VERSUS MODE
            </h1>
            <p className="retro-font-body retro-compare-layout__subtitle">
              {comparisonCount > 0
                ? `Comparing ${comparisonCount} item${comparisonCount !== 1 ? 's' : ''}. Add up to 4.`
                : 'Add products from the shop to compare stats.'}
            </p>
          </div>

          {/* Empty State */}
          {comparisonCount === 0 && (
            <div className="retro-compare-layout__empty">
              <p className="retro-font-display retro-bold retro-compare-layout__empty-title">
                NO FIGHTERS SELECTED
              </p>
              <p className="retro-font-body retro-compare-layout__empty-desc">
                Browse the shop and tap the compare icon on any product card to add it here.
              </p>
              <Link
                to="/shop"
                className="retro-button retro-button--primary retro-font-display retro-bold"
              >
                BROWSE SHOP <ArrowRight weight="bold" />
              </Link>
            </div>
          )}

          {/* Comparison Table */}
          {comparisonCount > 0 && (
            <>
              <div className="retro-compare-layout__actions">
                <button
                  className="retro-button retro-button--secondary retro-font-display retro-bold"
                  onClick={clearComparison}
                >
                  <Trash size={16} weight="bold" /> CLEAR ALL
                </button>
              </div>

              <div className="retro-compare-layout__table-wrapper">
                <table className="retro-compare-layout__table">
                  <thead>
                    <tr>
                      <th className="retro-compare-layout__th retro-compare-layout__th--label" />
                      {comparisonItems.map((p, index) => (
                        <th
                          key={p.id}
                          className={`retro-compare-layout__th${
                            index < comparisonItems.length - 1 ? ' retro-compare-layout__th--bordered' : ''
                          }`}
                        >
                          <div className="retro-compare-layout__product-header">
                            {p.image && (
                              <img
                                src={p.image}
                                alt={p.name || 'Product'}
                                className="retro-compare-layout__product-img"
                              />
                            )}
                            <div className="retro-font-display retro-bold retro-compare-layout__product-name">
                              {p.name || `Product ${p.id}`}
                            </div>
                            {typeof p.price === 'number' && (
                              <div className="retro-font-body retro-compare-layout__product-price">
                                {p.salePrice ? (
                                  <>
                                    <span className="retro-compare-layout__product-price--original">
                                      ${p.price.toFixed(2)}
                                    </span>{' '}
                                    <span className="retro-compare-layout__product-price--sale">
                                      ${p.salePrice.toFixed(2)}
                                    </span>
                                  </>
                                ) : (
                                  `$${p.price.toFixed(2)}`
                                )}
                              </div>
                            )}
                            <div className="retro-compare-layout__product-actions">
                              <button
                                className="retro-button retro-button--primary retro-font-display retro-compare-layout__add-btn"
                                onClick={() => {
                                  cartContext.addToCart(p as any, 1);
                                  toast.success(`${p.name} added to cart!`, { duration: 2000 });
                                }}
                              >
                                <ShoppingCart weight="bold" /> ADD
                              </button>
                              <button
                                className="retro-compare-layout__remove-btn retro-font-body"
                                onClick={() => removeFromComparison(p.id)}
                                aria-label={`Remove ${p.name} from comparison`}
                              >
                                <Trash size={14} weight="bold" /> Remove
                              </button>
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {SPEC_KEYS.map((specKey, rowIdx) => {
                      const isLast = rowIdx === SPEC_KEYS.length - 1;
                      return (
                        <tr key={specKey}>
                          <td
                            className={`retro-font-display retro-bold retro-compare-layout__td retro-compare-layout__td--label${
                              isLast ? ' retro-compare-layout__td--last' : ''
                            }`}
                          >
                            {SPEC_LABELS[specKey] || specKey.toUpperCase()}
                          </td>
                          {comparisonItems.map((p, index) => {
                            const raw = (p as any)[specKey];
                            const val = formatSpecValue(specKey, raw);
                            return (
                              <td
                                key={p.id}
                                className={`retro-font-body retro-compare-layout__td${
                                  isLast ? ' retro-compare-layout__td--last' : ''
                                }${index < comparisonItems.length - 1 ? ' retro-compare-layout__td--bordered' : ''}`}
                              >
                                {typeof val === 'boolean' ? (
                                  val ? (
                                    <CheckCircle
                                      size={32}
                                      weight="bold"
                                      className="retro-compare-layout__icon--yes"
                                      aria-label="Yes"
                                    />
                                  ) : (
                                    <XCircle
                                      size={32}
                                      weight="bold"
                                      className="retro-compare-layout__icon--no"
                                      aria-label="No"
                                    />
                                  )
                                ) : (
                                  val
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}

                    {/* Tags row */}
                    <tr>
                      <td className="retro-font-display retro-bold retro-compare-layout__td retro-compare-layout__td--label retro-compare-layout__td--last">
                        TAGS
                      </td>
                      {comparisonItems.map((p, index) => {
                        const tags: string[] = (p as any).tags || [];
                        return (
                          <td
                            key={p.id}
                            className={`retro-font-body retro-compare-layout__td retro-compare-layout__td--last${
                              index < comparisonItems.length - 1 ? ' retro-compare-layout__td--bordered' : ''
                            }`}
                          >
                            {tags.length > 0 ? (
                              <div className="retro-sp-tag-list">
                                {tags.map((tag) => (
                                  <span key={tag} className="retro-sp-tag retro-font-display">{tag}</span>
                                ))}
                              </div>
                            ) : '--'}
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
};

PageCompareRetro.displayName = 'PageCompareRetro';