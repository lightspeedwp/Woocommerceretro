import React from 'react';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as ButtonsModule from '../blocks/design/Buttons';
import { ShoppingBag, Info } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
import * as FAQSectionModule from '../patterns/FAQSection';
import * as ProductGridModule from '../patterns/ProductGrid';
import * as RecentlyViewedModule from '../patterns/RecentlyViewed';
import * as CartContextModule from '../../contexts/CartContext';
import * as SonnerModule from 'sonner@2.0.3';
import * as CartItemModule from '../blocks/cart/CartItem';
import * as CartTotalsModule from '../blocks/cart/CartTotals';
import * as ProductsData from '../../data/products';
import * as FAQData from '../../data/faq';

var useState = React.useState;
var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var Button = ButtonsModule.Button;
var Link = ReactRouterModule.Link;
var FAQSection = FAQSectionModule.FAQSection;
var ProductGrid = ProductGridModule.ProductGrid;
var RecentlyViewed = RecentlyViewedModule.RecentlyViewed;
var useCart = CartContextModule.useCart;
var toast = SonnerModule.toast;
var CartItem = CartItemModule.CartItem;
var CartTotals = CartTotalsModule.CartTotals;
var newInStoreProducts = ProductsData.newInStoreProducts;
var cartFAQs = FAQData.cartFAQs;

/**
 * PageCart Template — Funky Redesign (Phase 5, Clean Funky)
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Standard function declarations
 * 3. Manual prop assignment
 * 4. No spread operators
 */
function PageCart() {
  var cart = useCart();
  var items = cart.items;
  var updateQuantity = cart.updateQuantity;
  var removeFromCart = cart.removeFromCart;
  var getCartTotal = cart.getCartTotal;
  var applyCoupon = cart.applyCoupon;
  var removeCoupon = cart.removeCoupon;
  var appliedCoupon = cart.appliedCoupon;
  var getDiscount = cart.getDiscount;
  var getShippingCost = cart.getShippingCost;
  var getFinalTotal = cart.getFinalTotal;
  
  var couponState = useState(false);
  var isCouponOpen = couponState[0];
  var setIsCouponOpen = couponState[1];

  var subtotal = getCartTotal();
  var discount = getDiscount();
  var shipping = getShippingCost();
  var total = getFinalTotal();

  function handleApplyCoupon(code) {
    var result = applyCoupon(code);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }

  function handleRemoveCoupon() {
    removeCoupon();
    toast.info('Coupon removed');
  }

  if (items.length === 0) {
    return React.createElement(Layout, null,
      React.createElement('div', { className: "cart-page" },
        React.createElement(Container, { 
          variant: "content", 
          className: "wp-cart-empty" 
        },
          React.createElement('div', { className: "wp-cart-empty__icon-wrapper" },
            React.createElement('div', { className: "wp-cart-empty__icon" },
              React.createElement(Info, { size: 48, weight: 'duotone' })
            )
          ),

          React.createElement(Typography, { 
            variant: "h2", 
            className: "wp-cart-empty__title" 
          }, "Your cart is currently empty!"),

          React.createElement('div', { className: "wp-cart-empty__divider-group" },
            React.createElement('div', { className: "wp-cart-empty__divider" }),
            React.createElement('div', { className: "wp-cart-empty__divider" }),
            React.createElement('div', { className: "wp-cart-empty__divider" })
          ),

          React.createElement(Typography, { 
            variant: "h3", 
            className: "wp-cart-empty__subtitle" 
          }, "New in store"),

          React.createElement('div', { className: "wp-cart-empty__recommendations" },
            React.createElement(ProductGrid, { 
              products: newInStoreProducts,
              columns: { mobile: 1, tablet: 2, desktop: 4 }
            })
          )
        )
      )
    );
  }

  return React.createElement(Layout, null,
    React.createElement('div', { className: "cart-page" },
      React.createElement(Container, { 
        variant: "site", 
        className: "wp-cart-page" 
      },
        React.createElement(Typography, { 
          variant: "h1", 
          className: "wp-cart-header cart-page__title" 
        }, "Cart"),
        
        React.createElement('div', { className: "wp-cart-layout" },
          /* Left Column: Products */
          React.createElement('div', { className: "wp-cart-layout__items" },
            React.createElement('div', { className: "wp-cart-table-header" },
              React.createElement('span', { className: "wp-cart-table-header__label" }, "PRODUCT"),
              React.createElement('span', { className: "wp-cart-table-header__label" }, "TOTAL")
            ),

            React.createElement('div', null,
              items.map(function(item) {
                return React.createElement(CartItem, { 
                  key: item.product.id, 
                  item: item, 
                  onUpdateQuantity: function(qty) { 
                    updateQuantity(item.product.id, qty); 
                  },
                  onRemove: function() { 
                    removeFromCart(item.product.id); 
                  }
                });
              })
            )
          ),

          /* Right Column: Totals */
          React.createElement('div', { className: "wp-cart-layout__sidebar" },
            React.createElement(CartTotals, { 
              subtotal: subtotal, 
              discount: discount,
              shipping: shipping,
              tax: 0,
              total: total,
              isCouponOpen: isCouponOpen,
              onToggleCoupon: function() { 
                setIsCouponOpen(!isCouponOpen); 
              },
              onApplyCoupon: handleApplyCoupon,
              onRemoveCoupon: handleRemoveCoupon,
              appliedCoupon: appliedCoupon
            })
          )
        )
      ),
      
      /* Recently Viewed Section */
      React.createElement(Container, { variant: "site" },
        React.createElement(RecentlyViewed, null)
      ),
      
      React.createElement(FAQSection, { items: cartFAQs })
    )
  );
}

export { PageCart };
export default PageCart;