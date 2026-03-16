/**
 * PageCartRetro
 *
 * "PlayPocket" FSE theme - Shopping Cart page.
 * Uses CartContext for dynamic cart data.
 * WCAG AA 2.2 compliant.
 */

import { Link } from 'react-router';
import { Trash, ArrowRight, Minus, Plus, ShoppingCart } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'sonner@2.0.3';

export const PageCartRetro = () => {
  const cart = useCart();

  // Google Fonts loading moved to RootLayout.

  const isEmpty = !cart.items || cart.items.length === 0;
  const subtotal = cart.getCartTotal();
  const discount = cart.getDiscount();
  const shipping = cart.getShippingCost();
  const finalTotal = cart.getFinalTotal();
  const itemCount = cart.getCartCount();

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        {/* Breadcrumb */}
        <div className="retro-breadcrumb retro-font-display">
          <div className="retro-breadcrumb-dot" />
          <Link to="/" className="retro-breadcrumb-link">HOME</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <Link to="/shop" className="retro-breadcrumb-link">SHOP</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <span className="retro-breadcrumb-current">CART</span>
        </div>

        <div className="retro-cart-layout">
          <h1 className="retro-page-title retro-font-display retro-bold">
            <ShoppingCart size={28} weight="bold" aria-hidden="true" />
            YOUR INVENTORY ({itemCount})
          </h1>

          {isEmpty ? (
            <div className="retro-cart-empty">
              <ShoppingCart size={64} weight="thin" aria-hidden="true" />
              <h2 className="retro-font-display retro-bold">YOUR INVENTORY IS EMPTY!</h2>
              <p className="retro-font-body">Looks like you need to equip some items before you can proceed.</p>
              <Link to="/shop" className="retro-button retro-button--secondary retro-font-display retro-bold retro-cart-empty__link">
                GO TO SHOP <ArrowRight weight="bold" />
              </Link>
            </div>
          ) : (
            <div className="retro-cart-grid">
              <div className="retro-cart-main">
                <div className="retro-cart-items">
                  {cart.items.map((item) => {
                    const product = item.product;
                    const price = product.salePrice || product.price;
                    const lineTotal = price * item.quantity;
                    return (
                      <div key={product.id} className="retro-cart-item">
                        <div className="retro-cart-item-img-wrap">
                          <Link to={`/product/${product.slug || product.id}`}>
                            <img src={product.image} alt={product.name || 'Product'} className="retro-cart-item-img" />
                          </Link>
                        </div>
                        <div className="retro-cart-item-details">
                          <Link to={`/product/${product.slug || product.id}`} className="retro-font-display retro-bold retro-cart-item-title">
                            {product.name}
                          </Link>
                          <div className="retro-cart-item-meta retro-font-body">
                            {product.salePrice ? (
                              <>
                                <span className="retro-cart-item-price--original">${product.price.toFixed(2)}</span>
                                <span className="retro-cart-item-price--sale retro-bold">${product.salePrice.toFixed(2)}</span>
                              </>
                            ) : (
                              <span className="retro-bold">${product.price.toFixed(2)}</span>
                            )}
                          </div>
                        </div>
                        <div className="retro-cart-item-actions">
                          <div className="retro-qty">
                            <button
                              className="retro-qty-btn"
                              onClick={() => cart.updateQuantity(product.id, Math.max(1, item.quantity - 1))}
                              aria-label={`Decrease quantity of ${product.name}`}
                            >
                              <Minus size={14} weight="bold" />
                            </button>
                            <div className="retro-qty-val retro-font-body retro-bold">{item.quantity}</div>
                            <button
                              className="retro-qty-btn"
                              onClick={() => cart.updateQuantity(product.id, item.quantity + 1)}
                              aria-label={`Increase quantity of ${product.name}`}
                            >
                              <Plus size={14} weight="bold" />
                            </button>
                          </div>
                          <span className="retro-cart-item-line-total retro-font-body retro-bold">${lineTotal.toFixed(2)}</span>
                          <button
                            className="retro-cart-item-remove"
                            onClick={() => {
                              cart.removeFromCart(product.id);
                              toast.success(`${product.name} removed from cart`, { duration: 2000 });
                            }}
                            aria-label={`Remove ${product.name} from cart`}
                          >
                            <Trash size={20} weight="bold" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Continue Shopping */}
                <Link to="/shop" className="retro-cart-continue retro-font-display retro-bold">
                  <ArrowRight size={16} weight="bold" style={{ transform: 'rotate(180deg)' }} />
                  CONTINUE SHOPPING
                </Link>
              </div>

              <aside className="retro-cart-sidebar">
                <div className="retro-cart-summary">
                  <h2 className="retro-font-display retro-bold retro-cart-summary-title">LEVEL SUMMARY</h2>
                  <div className="retro-cart-summary-row retro-font-body">
                    <span>SUBTOTAL:</span>
                    <span className="retro-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="retro-cart-summary-row retro-cart-summary-row--discount retro-font-body">
                      <span>DISCOUNT ({cart.appliedCoupon?.code}):</span>
                      <span className="retro-bold">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="retro-cart-summary-row retro-font-body">
                    <span>SHIPPING:</span>
                    <span className="retro-bold">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="retro-cart-summary-divider" />
                  <div className="retro-cart-summary-row retro-cart-summary-total retro-font-display retro-bold">
                    <span>TOTAL XP:</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                  <Link to="/checkout" className="retro-button retro-font-display retro-bold retro-cart-summary__checkout-link">
                    PROCEED TO CHECKOUT <ArrowRight weight="bold" />
                  </Link>
                  <button
                    className="retro-button retro-button--secondary retro-font-display retro-bold retro-cart-summary__clear-btn"
                    onClick={() => {
                      cart.clearCart();
                      toast.success('Cart cleared!', { duration: 2000 });
                    }}
                  >
                    <Trash size={16} weight="bold" /> CLEAR CART
                  </button>
                </div>
              </aside>
            </div>
          )}
        </div>

        <BottomGridRetro />
        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
}

PageCartRetro.displayName = 'PageCartRetro';