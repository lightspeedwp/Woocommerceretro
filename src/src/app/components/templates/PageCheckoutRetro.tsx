/**
 * PageCheckoutRetro
 *
 * "PlayPocket" FSE theme - Checkout page.
 * Uses CartContext for dynamic cart data.
 * WCAG AA 2.2 compliant.
 */

import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, CheckCircle, Lock, CreditCard, Truck, MapPin } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'sonner@2.0.3';

const STEP_KEYS = ['info', 'shipping', 'payment'] as const;
type StepKey = typeof STEP_KEYS[number];

const STEP_LABELS: Record<StepKey, { label: string; icon: React.ElementType }> = {
  info: { label: 'PLAYER INFO', icon: MapPin },
  shipping: { label: 'DELIVERY ZONE', icon: Truck },
  payment: { label: 'INSERT COIN', icon: CreditCard },
};

export const PageCheckoutRetro = () => {
  const cart = useCart();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<StepKey>('info');

  // Google Fonts loading moved to RootLayout.

  const isEmpty = !cart.items || cart.items.length === 0;
  const subtotal = cart.getCartTotal();
  const discount = cart.getDiscount();
  const shipping = cart.getShippingCost();
  const finalTotal = cart.getFinalTotal();

  const handleCompleteOrder = (ev: FormEvent) => {
    ev.preventDefault();
    toast.success('Order placed! Redirecting...', { duration: 2000 });
    cart.clearCart();
    navigate('/order-confirmation');
  };

  const goToStep = (step: StepKey) => {
    setActiveStep(step);
  };

  const currentStepIndex = STEP_KEYS.indexOf(activeStep);

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        {/* Breadcrumb */}
        <div className="retro-breadcrumb retro-font-display">
          <div className="retro-breadcrumb-dot" />
          <Link to="/" className="retro-breadcrumb-link">HOME</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <Link to="/cart" className="retro-breadcrumb-link">CART</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <span className="retro-breadcrumb-current">CHECKOUT</span>
        </div>

        <div className="retro-cart-layout">
          <h1 className="retro-page-title retro-font-display retro-bold">
            <Lock size={24} weight="bold" aria-hidden="true" />
            SECURE CHECKOUT
          </h1>

          {isEmpty ? (
            <div className="retro-cart-empty">
              <h2 className="retro-font-display retro-bold">CANNOT PROCEED TO NEXT LEVEL</h2>
              <p className="retro-font-body">Your inventory is empty.</p>
              <Link to="/shop" className="retro-button retro-button--secondary retro-font-display retro-bold retro-cart-empty__link">
                GO TO SHOP <ArrowRight weight="bold" />
              </Link>
            </div>
          ) : (
            <div className="retro-cart-grid retro-checkout-grid">
              <div className="retro-cart-main">
                {/* Step Indicator */}
                <div className="retro-checkout-steps retro-font-display">
                  {STEP_KEYS.map((key, idx) => {
                    const StepIcon = STEP_LABELS[key].icon;
                    const isActive = activeStep === key;
                    const isComplete = idx < currentStepIndex;
                    return (
                      <button
                        key={key}
                        className={`retro-checkout-step${isActive ? ' retro-checkout-step--active' : ''}${isComplete ? ' retro-checkout-step--complete' : ''}`}
                        onClick={() => goToStep(key)}
                        aria-current={isActive ? 'step' : undefined}
                      >
                        <span className="retro-checkout-step__num">
                          {isComplete ? <CheckCircle size={18} weight="fill" /> : idx + 1}
                        </span>
                        <StepIcon size={16} weight="bold" aria-hidden="true" />
                        <span className="retro-checkout-step__label retro-bold">{STEP_LABELS[key].label}</span>
                      </button>
                    );
                  })}
                </div>

                <form className="retro-checkout-form" onSubmit={handleCompleteOrder}>
                  {/* Step 1: Player Info */}
                  {activeStep === 'info' && (
                    <div className="retro-checkout-section">
                      <h2 className="retro-font-display retro-bold retro-checkout-section-title">
                        <MapPin size={20} weight="bold" aria-hidden="true" /> PLAYER INFO
                      </h2>
                      <div className="retro-checkout-field-group">
                        <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-email">EMAIL ADDRESS</label>
                        <input id="ck-email" type="email" required className="retro-input retro-font-body" placeholder="player@example.com" />
                      </div>
                      <div className="retro-checkout-field-group">
                        <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-phone">PHONE (OPTIONAL)</label>
                        <input id="ck-phone" type="tel" className="retro-input retro-font-body" placeholder="+1 555 123 4567" />
                      </div>
                      <button
                        type="button"
                        className="retro-button retro-button--secondary retro-font-display retro-bold"
                        onClick={() => goToStep('shipping')}
                      >
                        NEXT: DELIVERY <ArrowRight weight="bold" />
                      </button>
                    </div>
                  )}

                  {/* Step 2: Shipping */}
                  {activeStep === 'shipping' && (
                    <div className="retro-checkout-section">
                      <h2 className="retro-font-display retro-bold retro-checkout-section-title">
                        <Truck size={20} weight="bold" aria-hidden="true" /> DELIVERY ZONE
                      </h2>
                      <div className="retro-checkout-grid-2">
                        <div className="retro-checkout-field-group">
                          <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-fname">FIRST NAME</label>
                          <input id="ck-fname" type="text" required className="retro-input retro-font-body" placeholder="Mario" />
                        </div>
                        <div className="retro-checkout-field-group">
                          <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-lname">LAST NAME</label>
                          <input id="ck-lname" type="text" required className="retro-input retro-font-body" placeholder="Bros" />
                        </div>
                      </div>
                      <div className="retro-checkout-field-group">
                        <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-address">ADDRESS</label>
                        <input id="ck-address" type="text" required className="retro-input retro-font-body" placeholder="123 Mushroom Kingdom" />
                      </div>
                      <div className="retro-checkout-grid-3">
                        <div className="retro-checkout-field-group">
                          <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-city">CITY</label>
                          <input id="ck-city" type="text" required className="retro-input retro-font-body" placeholder="Toad Town" />
                        </div>
                        <div className="retro-checkout-field-group">
                          <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-state">STATE/PROV</label>
                          <input id="ck-state" type="text" required className="retro-input retro-font-body" placeholder="MK" />
                        </div>
                        <div className="retro-checkout-field-group">
                          <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-postal">POSTAL CODE</label>
                          <input id="ck-postal" type="text" required className="retro-input retro-font-body" placeholder="8500" />
                        </div>
                      </div>
                      <div className="retro-checkout-nav-row">
                        <button
                          type="button"
                          className="retro-button retro-button--secondary retro-font-display retro-bold"
                          onClick={() => goToStep('info')}
                        >
                          BACK
                        </button>
                        <button
                          type="button"
                          className="retro-button retro-button--secondary retro-font-display retro-bold"
                          onClick={() => goToStep('payment')}
                        >
                          NEXT: PAYMENT <ArrowRight weight="bold" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Payment */}
                  {activeStep === 'payment' && (
                    <div className="retro-checkout-section">
                      <h2 className="retro-font-display retro-bold retro-checkout-section-title">
                        <CreditCard size={20} weight="bold" aria-hidden="true" /> INSERT COIN
                      </h2>
                      <div className="retro-checkout-field-group">
                        <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-card">CARD NUMBER</label>
                        <input id="ck-card" type="text" required className="retro-input retro-font-body" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="retro-checkout-grid-2">
                        <div className="retro-checkout-field-group">
                          <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-exp">EXPIRY DATE</label>
                          <input id="ck-exp" type="text" required className="retro-input retro-font-body" placeholder="MM/YY" />
                        </div>
                        <div className="retro-checkout-field-group">
                          <label className="retro-font-body retro-bold retro-checkout-label" htmlFor="ck-cvc">CVC</label>
                          <input id="ck-cvc" type="text" required className="retro-input retro-font-body" placeholder="123" />
                        </div>
                      </div>
                      <div className="retro-checkout-nav-row">
                        <button
                          type="button"
                          className="retro-button retro-button--secondary retro-font-display retro-bold"
                          onClick={() => goToStep('shipping')}
                        >
                          BACK
                        </button>
                        <button type="submit" className="retro-button retro-font-display retro-bold retro-checkout-submit">
                          COMPLETE ORDER <CheckCircle weight="bold" size={24} />
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              <aside className="retro-cart-sidebar">
                <div className="retro-cart-summary">
                  <h2 className="retro-font-display retro-bold retro-cart-summary-title">LEVEL SUMMARY</h2>

                  <div className="retro-checkout-items">
                    {cart.items.map((item) => {
                      const product = item.product;
                      const price = product.salePrice || product.price;
                      return (
                        <div key={product.id} className="retro-checkout-item">
                          <div className="retro-checkout-item-img-wrap">
                            <img src={product.image} alt={product.name || 'Product'} className="retro-checkout-item-img" />
                            <span className="retro-checkout-item-qty retro-font-display">{item.quantity}</span>
                          </div>
                          <div className="retro-checkout-item-details">
                            <h4 className="retro-font-display retro-bold retro-checkout-item-title">{product.name}</h4>
                            <div className="retro-font-body retro-bold retro-checkout-item-price">${(price * item.quantity).toFixed(2)}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="retro-cart-summary-divider" />
                  <div className="retro-cart-summary-row retro-font-body">
                    <span>SUBTOTAL:</span>
                    <span className="retro-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="retro-cart-summary-row retro-cart-summary-row--discount retro-font-body">
                      <span>DISCOUNT:</span>
                      <span className="retro-bold">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="retro-cart-summary-row retro-font-body">
                    <span>SHIPPING:</span>
                    <span className="retro-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="retro-cart-summary-divider" />
                  <div className="retro-cart-summary-row retro-cart-summary-total retro-font-display retro-bold">
                    <span>TOTAL XP:</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>

                  {/* Secure checkout trust signal */}
                  <div className="retro-checkout-trust retro-font-body">
                    <Lock size={14} weight="bold" /> 256-BIT ENCRYPTED
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PageCheckoutRetro.displayName = 'PageCheckoutRetro';