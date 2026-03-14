/**
 * CartFilled.tsx - Pattern
 * 
 * Full shopping cart display with item list, quantity controls, and order summary.
 */

import React from 'react';
import { Bag as ShoppingBag } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { MutedSection } from './sections/MutedSection';
import { ContentSection } from './sections/ContentSection';
import { Layout } from '../parts/Layout';
import { CartItem } from '../blocks/cart/CartItem';
import { CartTotals } from '../blocks/cart/CartTotals';

interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartFilledProps {
  items: CartItemType[];
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
}

export const CartFilled = ({ items, updateQuantity, removeItem }: CartFilledProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <Layout>
      <MutedSection
        className="wp-cart-header"
        heading="Shopping Cart"
        headingLevel={1}
      />
      <ContentSection
        content={
          <div className="wp-cart-layout">
            <div className="wp-cart-layout__items">
              <div className="wp-cart-table-header">
                <span className="wp-cart-table-header__label">Product</span>
                <span className="wp-cart-table-header__label">Price</span>
              </div>
              <div className="wp-cart-items-list">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                  />
                ))}
              </div>
              <div className="wp-cart-layout__continue">
                <Link to="/shop" className="wp-cart-layout__continue-link">
                  <ShoppingBag size={16} /> Continue Shopping
                </Link>
              </div>
            </div>
            <div className="wp-cart-layout__sidebar">
              <CartTotals subtotal={subtotal} tax={tax} total={total} />
            </div>
          </div>
        }
      />
    </Layout>
  );
}

CartFilled.displayName = 'CartFilled';