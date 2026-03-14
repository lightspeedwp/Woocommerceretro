import React, { useState } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose, DrawerTrigger } from '../blocks/layout/Drawer';
import { Button } from '../blocks/design/Buttons';
import { Typography } from '../common/Typography';
import { Bag as ShoppingBag, X, Minus, Plus } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useCart } from '../../contexts/CartContext';

/**
 * MiniCart Component (Global Template Part) — Funky Redesign (Phase 2)
 */
export const MiniCart = () => {
  const cartContext = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (!cartContext) return null;

  const { items, updateQuantity, removeFromCart, getCartTotal, getCartCount } = cartContext;
  const total = getCartTotal();
  const itemCount = getCartCount();

  const handleClose = () => setIsOpen(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button className="woocommerce-mini-cart__trigger funky-spring-hover" aria-label="Cart">
          <ShoppingBag size={24} />
          {itemCount > 0 && (
            <strong className="woocommerce-mini-cart__badge woocommerce-mini-cart__badge--funky">
              <small>{itemCount}</small>
            </strong>
          )}
        </button>
      </DrawerTrigger>
      <DrawerContent side="right" className="woocommerce-mini-cart woocommerce-mini-cart--funky">
        <DrawerHeader
          className={`woocommerce-mini-cart__header woocommerce-mini-cart__header--funky ${
            items.length > 0 ? 'woocommerce-mini-cart__header--has-items' : 'woocommerce-mini-cart__header--empty'
          }`}
        >
          <DrawerTitle className={`woocommerce-mini-cart__title${items.length === 0 ? ' sr-only' : ''}`}>
            {items.length > 0 ? `Cart (${itemCount})` : 'Cart'}
          </DrawerTitle>
          <DrawerClose asChild>
            <button className="woocommerce-mini-cart__close" aria-label="Close cart">
              <X size={24} aria-hidden="true" />
            </button>
          </DrawerClose>
          <DrawerDescription className="sr-only">Review your items.</DrawerDescription>
        </DrawerHeader>

        <div className="woocommerce-mini-cart__content">
          {items.length === 0 ? (
            <div className="woocommerce-mini-cart__empty">
              <Typography variant="body" className="woocommerce-mini-cart__empty-message">
                Your cart is currently empty
              </Typography>
              <Button onClick={handleClose} className="woocommerce-mini-cart__empty-cta funky-spring-hover">
                Start shopping
              </Button>
            </div>
          ) : (
            items.map((item) => {
              const price = item.product.salePrice || item.product.price;
              return (
                <div key={item.product.id} className="woocommerce-mini-cart-item">
                  <div className="woocommerce-mini-cart-item__image woocommerce-mini-cart-item__image--funky">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      className="woocommerce-mini-cart-item__img"
                    />
                  </div>
                  <div className="woocommerce-mini-cart-item__details">
                    <div>
                      <div className="woocommerce-mini-cart-item__header">
                        <h4 className="woocommerce-mini-cart-item__name">
                          <Link to={`/product/${item.product.id}`} onClick={handleClose}>
                            {item.product.name}
                          </Link>
                        </h4>
                        <span className="woocommerce-mini-cart-item__price">
                          &pound;{price.toFixed(2)}
                        </span>
                      </div>
                      {item.product.brand && (
                        <small className="woocommerce-mini-cart-item__brand">{item.product.brand}</small>
                      )}
                    </div>
                    <div className="woocommerce-mini-cart-item__footer">
                      <div className="woocommerce-quantity-selector">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          aria-label={`Decrease quantity of ${item.product.name}`}
                          className="woocommerce-quantity-selector__button"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="woocommerce-quantity-selector__value">
                          <small>{item.quantity}</small>
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.product.name}`}
                          className="woocommerce-quantity-selector__button"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        aria-label={`Remove ${item.product.name} from cart`}
                        className="woocommerce-mini-cart-item__remove funky-spring-hover"
                      >
                        <small>Remove</small>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="woocommerce-mini-cart__footer woocommerce-mini-cart__footer--funky">
            <div className="woocommerce-mini-cart__totals">
              <span className="woocommerce-mini-cart__subtotal-label">Subtotal</span>
              <span className="woocommerce-mini-cart__subtotal-amount woocommerce-mini-cart__subtotal-amount--funky">
                &pound;{total.toFixed(2)}
              </span>
            </div>
            <p className="woocommerce-mini-cart__notice">Shipping and taxes calculated at checkout.</p>
            <div className="woocommerce-mini-cart__actions">
              <Button fullWidth variant="outline" size="lg" to="/cart" onClick={handleClose} className="funky-spring-hover">
                View cart
              </Button>
              <Button fullWidth variant="primary" size="lg" to="/checkout" onClick={handleClose} className="funky-spring-hover">
                Checkout
              </Button>
            </div>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}