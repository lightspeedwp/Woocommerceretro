import React from 'react';
import * as ReactRouterModule from 'react-router';
import { EnvelopeSimple, Heart, CreditCard, Bag as ShoppingBag, Sparkle, Check, ArrowRight, Gift } from '@phosphor-icons/react';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as ImageWithFallbackModule from '../figma/ImageWithFallback';
import * as CartContextModule from '../../contexts/CartContext';
import * as ReducedMotionModule from '../../hooks/usePrefersReducedMotion';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var ImageWithFallback = ImageWithFallbackModule.ImageWithFallback;
var useCart = CartContextModule.useCart;
var usePrefersReducedMotion = ReducedMotionModule.usePrefersReducedMotion;
var giftCardsHero = HeroDataModule.giftCardsHero;

var Link = ReactRouterModule.Link;

/**
 * PageGiftCards Template - Funky Redesign
 * @route /gift-cards
 * @template
 */

var denominations = [
  { id: 'gc-25', amount: 25 },
  { id: 'gc-50', amount: 50, popular: true },
  { id: 'gc-75', amount: 75 },
  { id: 'gc-100', amount: 100, popular: true },
  { id: 'gc-150', amount: 150 },
  { id: 'gc-250', amount: 250 }
];

var features = [
  { icon: React.createElement(EnvelopeSimple, { size: 24, weight: "duotone" }), title: 'Instant delivery', description: 'Send by email or print at home — arrives in seconds.' },
  { icon: React.createElement(Heart, { size: 24, weight: "duotone" }), title: 'Add a personal note', description: 'Include a heartfelt message with every gift card.' },
  { icon: React.createElement(CreditCard, { size: 24, weight: "duotone" }), title: 'Never expires', description: 'No expiry dates, no hidden fees. Use at any time.' },
  { icon: React.createElement(ShoppingBag, { size: 24, weight: "duotone" }), title: 'Redeemable on anything', description: 'Valid across our entire product catalogue.' },
];

var occasions = [
  { label: 'Birthday', image: 'https://images.unsplash.com/photo-1656237825388-de2a5f3e8d34?auto=format&fit=crop&q=80&w=200' },
  { label: 'Thank you', image: 'https://images.unsplash.com/photo-1767694934233-a277dc685f38?auto=format&fit=crop&q=80&w=200' },
];

var GIFT_CARD_IMAGE = 'https://images.unsplash.com/photo-1709365954502-b05425750347?auto=format&fit=crop&q=80&w=400';

export function PageGiftCards() {
  var prefersReduced = usePrefersReducedMotion();
  var amountState = React.useState(50);
  var selectedAmount = amountState[0];
  var setSelectedAmount = amountState[1];
  var occasionState = React.useState('Birthday');
  var selectedOccasion = occasionState[0];
  var setSelectedOccasion = occasionState[1];
  var deliveryState = React.useState('email');
  var deliveryMethod = deliveryState[0];
  var setDeliveryMethod = deliveryState[1];
  var addedState = React.useState(false);
  var addedToCart = addedState[0];
  var setAddedToCart = addedState[1];
  var cartCtx = useCart();
  var addToCart = cartCtx.addToCart;

  function handleAddToCart() {
    var giftCardProduct = {
      id: 'gift-card-' + selectedAmount,
      name: 'Woo Shop Gift Card — $' + selectedAmount,
      slug: 'gift-card-' + selectedAmount,
      brand: 'Woo Shop',
      price: selectedAmount,
      image: GIFT_CARD_IMAGE,
      description: 'Digital gift card worth $' + selectedAmount + '. Delivered via ' + deliveryMethod + '. Occasion: ' + selectedOccasion + '. Never expires.',
      shortDescription: '$' + selectedAmount + ' digital gift card',
      sku: 'GC-' + selectedAmount,
      category: 'Gift Cards',
      categorySlug: 'gift-cards',
      inStock: true,
      onSale: false,
      featured: false,
      rating: 5,
      reviewCount: 0,
    };

    addToCart(giftCardProduct, 1);
    setAddedToCart(true);
    setTimeout(function() { setAddedToCart(false); }, 2500);
  }

  return (
    React.createElement(Layout, null,
      React.createElement('div', { className: "page-gift-cards" },
        /* Hero – FunkyHero not imported, use inline placeholder if needed */
        /* Gift Card Builder */
        React.createElement('section', { id: "gc-builder", className: "gc-builder", "aria-label": "Build your gift card" },
          React.createElement(Container, null,
            React.createElement('div', { className: "gc-builder__layout" },
              React.createElement('div', { className: "gc-builder__preview" },
                React.createElement('div', { className: "gc-preview-card funky-glass-panel", style: { padding: '0', overflow: 'hidden' } },
                  React.createElement('div', { className: "gc-preview-card__bg", "aria-hidden": "true", style: { background: 'linear-gradient(135deg, var(--wp--preset--color--neon-pink), var(--wp--preset--color--neon-cyan))', opacity: 0.1, position: 'absolute', inset: 0 } }),
                  React.createElement('div', { className: "gc-preview-card__content", style: { padding: 'var(--wp--preset--spacing--80)', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', minHeight: '300px' } },
                    React.createElement(Sparkle, { size: 32, weight: "duotone", className: "gc-preview-card__icon funky-animate-float", "aria-hidden": "true", style: { color: 'var(--wp--preset--color--neon-cyan)', marginBottom: 'auto' } }),
                    React.createElement('span', { className: "gc-preview-card__brand", style: { fontSize: 'var(--wp--preset--font-size--large)', fontWeight: 'bold' } }, "Woo Shop"),
                    React.createElement('span', { className: "gc-preview-card__amount funky-section__heading--gradient", style: { fontSize: 'var(--wp--preset--font-size--gigantic)', lineHeight: 1, margin: 'var(--wp--preset--spacing--20) 0' } }, "$" + selectedAmount),
                    React.createElement('span', { className: "gc-preview-card__label", style: { color: 'var(--wp--preset--color--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' } }, "Gift Card")
                  )
                )
              ),

              React.createElement('div', { className: "gc-builder__options" },
                React.createElement('h2', { className: "gc-builder__heading" }, "Select amount"),

                React.createElement('div', { className: "gc-denominations", role: "radiogroup", "aria-label": "Gift card amount", style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--wp--preset--spacing--20)', marginBottom: 'var(--wp--preset--spacing--40)' } },
                  denominations.map(function(d) { return (
                    React.createElement('button', {
                      key: d.id,
                      type: "button",
                      role: "radio",
                      "aria-checked": selectedAmount === d.amount,
                      className: 'gc-denomination funky-glass-panel' + (selectedAmount === d.amount ? ' gc-denomination--active' : '') + (d.popular ? ' gc-denomination--popular' : ''),
                      onClick: function() { setSelectedAmount(d.amount); },
                      style: { padding: 'var(--wp--preset--spacing--30)', border: selectedAmount === d.amount ? '2px solid var(--wp--preset--color--neon-cyan)' : '1px solid var(--funky-glass-border)', cursor: 'pointer', position: 'relative' }
                    },
                      React.createElement('span', { style: { fontSize: 'var(--wp--preset--font-size--large)', fontWeight: 'bold' } }, "$" + d.amount),
                      d.popular && React.createElement('span', { className: "gc-denomination__badge", style: { position: 'absolute', top: '-10px', right: '-10px', background: 'var(--wp--preset--color--neon-pink)', color: '#000', fontSize: '10px', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' } }, "Popular")
                    )
                  ); })
                ),

                React.createElement('h3', { className: "gc-builder__subheading" }, "Delivery method"),

                React.createElement('div', { className: "gc-delivery-options" },
                  React.createElement('button', {
                    type: "button",
                    className: 'gc-delivery-option' + (deliveryMethod === 'email' ? ' gc-delivery-option--active' : ''),
                    onClick: function() { setDeliveryMethod('email'); }
                  },
                    React.createElement(EnvelopeSimple, { size: 20, weight: "duotone" }),
                    React.createElement('span', { className: "gc-delivery-option__label" }, "Email"),
                    React.createElement('span', { className: "gc-delivery-option__desc" }, "Send instantly to their inbox"),
                    deliveryMethod === 'email' && React.createElement(Check, { size: 16, className: "gc-delivery-option__check" })
                  ),
                  React.createElement('button', {
                    type: "button",
                    className: 'gc-delivery-option' + (deliveryMethod === 'print' ? ' gc-delivery-option--active' : ''),
                    onClick: function() { setDeliveryMethod('print'); }
                  },
                    React.createElement(CreditCard, { size: 20, weight: "duotone" }),
                    React.createElement('span', { className: "gc-delivery-option__label" }, "Print at home"),
                    React.createElement('span', { className: "gc-delivery-option__desc" }, "Download a printable PDF"),
                    deliveryMethod === 'print' && React.createElement(Check, { size: 16, className: "gc-delivery-option__check" })
                  )
                ),

                React.createElement('button', {
                  type: "button",
                  className: 'gc-add-to-cart wp-sales-btn wp-sales-btn--primary' + (addedToCart ? ' gc-add-to-cart--added' : ''),
                  onClick: handleAddToCart,
                  disabled: addedToCart
                },
                  addedToCart
                    ? React.createElement(React.Fragment, null, React.createElement(Check, { size: 18 }), " Added to cart")
                    : React.createElement(React.Fragment, null, "Add to cart — $" + selectedAmount, React.createElement(ArrowRight, { size: 18 }))
                )
              )
            )
          )
        ),

        /* Occasions */
        React.createElement('section', { className: "gc-occasions", "aria-label": "Gift card occasions", style: { padding: 'var(--wp--preset--spacing--80) 0' } },
          React.createElement(Container, null,
            React.createElement('h2', { className: "gc-occasions__heading funky-section__heading--gradient", style: { textAlign: 'center', marginBottom: 'var(--wp--preset--spacing--60)' } }, "Perfect for every occasion"),
            React.createElement('div', { className: "gc-occasions__grid gc-occasions__grid--visual", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--wp--preset--spacing--40)' } },
              occasions.map(function(occasion) { return (
                React.createElement('button', {
                  key: occasion.label,
                  type: "button",
                  className: 'gc-occasion-card funky-glass-panel funky-spring-hover' + (selectedOccasion === occasion.label ? ' gc-occasion-card--active' : ''),
                  onClick: function() { setSelectedOccasion(occasion.label); },
                  "aria-pressed": selectedOccasion === occasion.label,
                  style: { padding: 'var(--wp--preset--spacing--20)', border: selectedOccasion === occasion.label ? '2px solid var(--wp--preset--color--neon-pink)' : '1px solid var(--funky-glass-border)' }
                },
                  React.createElement('span', { className: "gc-occasion-card__img-wrap", style: { display: 'block', borderRadius: 'var(--wp--preset--border-radius--md)', overflow: 'hidden', marginBottom: 'var(--wp--preset--spacing--20)' } },
                    React.createElement(ImageWithFallback, {
                      src: occasion.image,
                      alt: occasion.label,
                      className: "gc-occasion-card__img",
                      loading: "lazy"
                    })
                  ),
                  React.createElement('span', { className: "gc-occasion-card__label", style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--wp--preset--spacing--10)', fontSize: 'var(--wp--preset--font-size--medium)', fontWeight: 'bold' } },
                    React.createElement(Gift, { size: 18, weight: "duotone", "aria-hidden": "true" }),
                    occasion.label
                  ),
                  selectedOccasion === occasion.label && (
                    React.createElement('span', { className: "gc-occasion-card__check", "aria-hidden": "true", style: { position: 'absolute', top: '10px', right: '10px', background: 'var(--wp--preset--color--neon-pink)', color: '#000', borderRadius: '50%', padding: '4px' } },
                      React.createElement(Check, { size: 14, weight: "bold" })
                    )
                  )
                )
              ); })
            )
          )
        ),

        /* Features */
        React.createElement('section', { className: "commerce-benefits", "aria-label": "Gift card benefits" },
          React.createElement(Container, null,
            React.createElement('div', { className: "commerce-benefits__header" },
              React.createElement('h2', null, "Why choose a gift card?"),
              React.createElement('p', { className: "commerce-benefits__subtitle" }, "The easiest, most thoughtful way to show you care.")
            ),
            React.createElement('div', { className: "commerce-benefits__grid" },
              features.map(function(feature) { return (
                React.createElement('div', { key: feature.title, className: "commerce-benefit-card funky-glass-panel" },
                  React.createElement('div', { className: "commerce-benefit-icon", "aria-hidden": "true", style: { color: 'var(--wp--preset--color--neon-cyan)' } },
                    feature.icon
                  ),
                  React.createElement('h4', { className: "commerce-benefit-card__title" }, feature.title),
                  React.createElement('p', { className: "commerce-benefit-card__text" }, feature.description)
                )
              ); })
            )
          )
        ),

        /* CTA */
        React.createElement('section', { className: "commerce-cta", "aria-label": "Start shopping" },
          React.createElement('div', { className: "commerce-cta__bg", "aria-hidden": "true" }),
          !prefersReduced && (
            React.createElement(React.Fragment, null,
              React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--1", "aria-hidden": "true" }),
              React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--2", "aria-hidden": "true" })
            )
          ),
          React.createElement(Container, null,
            React.createElement('div', { className: "commerce-cta__content" },
              React.createElement('h2', { className: "commerce-cta__title" }, "Not sure what to give?"),
              React.createElement('p', { className: "commerce-cta__text" },
                "A gift card lets them pick exactly what they love from our entire collection."
              ),
              React.createElement('a', { href: "#gc-builder", className: "commerce-cta__btn funky-spring-hover" },
                "Get a gift card",
                React.createElement(ArrowRight, { size: 18, weight: "bold" })
              )
            )
          )
        )
      )
    )
  );
}

export default PageGiftCards;
