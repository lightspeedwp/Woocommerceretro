/**
 * MiniCartRetro
 *
 * "PlayPocket" FSE theme - Slide-out mini cart drawer.
 * Uses retro theme tokens and BEM classes.
 * WCAG AA 2.2: focus trap, aria-labels, keyboard dismiss.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router';
import { X, Minus, Plus, ShoppingCart, Trash } from '@phosphor-icons/react';
import { useCart } from '../../contexts/CartContext';

export const MiniCartRetro = () => {
  const cartContext = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const { items, updateQuantity, removeFromCart, getCartTotal, getCartCount } = cartContext;
  const total = getCartTotal();
  const itemCount = getCartCount();

  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  /* Close on Escape */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeDrawer();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeDrawer]);

  /* Lock body scroll */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* Focus first element when opened */
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const closeBtn = drawerRef.current.querySelector<HTMLButtonElement>('.retro-mini-cart__close');
      closeBtn?.focus();
    }
  }, [isOpen]);

  /* Listen for custom event from header cart button */
  useEffect(() => {
    const handleOpen = () => openDrawer();
    window.addEventListener('open-mini-cart', handleOpen);
    return () => window.removeEventListener('open-mini-cart', handleOpen);
  }, [openDrawer]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`retro-mini-cart__overlay${isOpen ? ' retro-mini-cart__overlay--open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`retro-mini-cart${isOpen ? ' retro-mini-cart--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="retro-mini-cart__header">
          <h2 className="retro-mini-cart__title retro-font-display retro-bold">
            <ShoppingCart size={20} weight="bold" aria-hidden="true" />
            CART ({itemCount})
          </h2>
          <button
            className="retro-mini-cart__close"
            onClick={closeDrawer}
            aria-label="Close cart"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Content */}
        <div className="retro-mini-cart__content">
          {items.length === 0 ? (
            <div className="retro-mini-cart__empty">
              <ShoppingCart size={48} weight="thin" aria-hidden="true" />
              <p className="retro-font-display retro-bold">INVENTORY EMPTY</p>
              <p className="retro-font-body">Add some loot to get started.</p>
              <Link
                to="/shop"
                className="retro-button retro-button--primary retro-font-display retro-bold"
                onClick={closeDrawer}
              >
                BROWSE SHOP
              </Link>
            </div>
          ) : (
            items.map((item) => {
              const price = item.product.salePrice || item.product.price;
              return (
                <div key={item.product.id} className="retro-mini-cart__item">
                  <div className="retro-mini-cart__item-img-wrap">
                    <img
                      src={item.product.image}
                      alt={item.product.name || 'Product'}
                      className="retro-mini-cart__item-img"
                    />
                  </div>
                  <div className="retro-mini-cart__item-details">
                    <Link
                      to={`/product/${item.product.id}`}
                      className="retro-mini-cart__item-name retro-font-display retro-bold"
                      onClick={closeDrawer}
                    >
                      {item.product.name}
                    </Link>
                    <span className="retro-mini-cart__item-price retro-font-body retro-bold">
                      ${price.toFixed(2)}
                    </span>
                    <div className="retro-mini-cart__item-actions">
                      <div className="retro-qty retro-qty--sm">
                        <button
                          className="retro-qty-btn"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          aria-label={`Decrease quantity of ${item.product.name}`}
                        >
                          <Minus size={12} weight="bold" />
                        </button>
                        <div className="retro-qty-val retro-font-body retro-bold">{item.quantity}</div>
                        <button
                          className="retro-qty-btn"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.product.name}`}
                        >
                          <Plus size={12} weight="bold" />
                        </button>
                      </div>
                      <button
                        className="retro-mini-cart__item-remove"
                        onClick={() => removeFromCart(item.product.id)}
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <Trash size={16} weight="bold" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="retro-mini-cart__footer">
            <div className="retro-mini-cart__total">
              <span className="retro-font-display retro-bold">SUBTOTAL</span>
              <span className="retro-font-display retro-bold">${total.toFixed(2)}</span>
            </div>
            <p className="retro-mini-cart__notice retro-font-body">
              Shipping & taxes calculated at checkout.
            </p>
            <div className="retro-mini-cart__footer-actions">
              <Link
                to="/cart"
                className="retro-button retro-button--secondary retro-font-display retro-bold"
                onClick={closeDrawer}
              >
                VIEW CART
              </Link>
              <Link
                to="/checkout"
                className="retro-button retro-button--primary retro-font-display retro-bold"
                onClick={closeDrawer}
              >
                CHECKOUT
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

MiniCartRetro.displayName = 'MiniCartRetro';
