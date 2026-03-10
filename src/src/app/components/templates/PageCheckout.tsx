import React from 'react';
import * as ReactRouterModule from 'react-router';
import { User, UserMinus } from '@phosphor-icons/react';

var useState = React.useState;
var useNavigate = ReactRouterModule.useNavigate;
var Link = ReactRouterModule.Link;

import * as CheckoutLayoutModule from '../parts/CheckoutLayout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as ButtonsModule from '../blocks/design/Buttons';

import * as ContactInfoModule from '../blocks/checkout/ContactInfo';
import * as DeliveryMethodSelectorModule from '../blocks/checkout/DeliveryMethodSelector';
import * as PickupLocationSelectModule from '../blocks/checkout/PickupLocationSelect';
import * as ShippingAddressFormModule from '../blocks/checkout/ShippingAddressForm';
import * as BillingAddressFormModule from '../blocks/checkout/BillingAddressForm';
import * as PaymentMethodsModule from '../blocks/checkout/PaymentMethods';
import * as OrderSummaryModule from '../blocks/checkout/OrderSummary';
import * as CheckoutStepModule from '../blocks/checkout/CheckoutStep';
import * as TrustBandModule from '../patterns/TrustBand';

var CheckoutLayout = CheckoutLayoutModule.CheckoutLayout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var Button = ButtonsModule.Button;

var ContactInfo = ContactInfoModule.ContactInfo;
var DeliveryMethodSelector = DeliveryMethodSelectorModule.DeliveryMethodSelector;
var PickupLocationSelect = PickupLocationSelectModule.PickupLocationSelect;
var ShippingAddressForm = ShippingAddressFormModule.ShippingAddressForm;
var BillingAddressForm = BillingAddressFormModule.BillingAddressForm;
var PaymentMethods = PaymentMethodsModule.PaymentMethods;
var OrderSummary = OrderSummaryModule.OrderSummary;
var CheckoutStep = CheckoutStepModule.CheckoutStep;
var TrustBand = TrustBandModule.TrustBand;

/**
 * PageCheckout Template - Funky Redesign (Phase 5, Clean Funky)
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Standard function declarations
 * 3. Manual prop assignment
 * 4. No spread operators
 */
function PageCheckout() {
  var navigate = useNavigate();
  var loggedInState = useState(false);
  var isLoggedIn = loggedInState[0];
  var setIsLoggedIn = loggedInState[1];
  var deliveryState = useState('ship');
  var deliveryMethod = deliveryState[0];
  var setDeliveryMethod = deliveryState[1];
  var billingState = useState(true);
  var useSameBilling = billingState[0];
  var setUseSameBilling = billingState[1];
  var stepState = useState(1);
  var activeStep = stepState[0];
  var setActiveStep = stepState[1];

  // Calculate step numbers dynamically
  var stepShipping = 3;
  var stepBilling = useSameBilling ? null : 4;
  var stepPayment = useSameBilling ? 4 : 5;

  function handleStepComplete(step) {
    setActiveStep(step + 1);
  }

  function handleStepToggle(step) {
    if (step < activeStep) {
      setActiveStep(step);
    }
  }

  var loginLink = React.createElement('div', { className: "wp-checkout-step__login-link-wrapper" },
    React.createElement(Link, { 
      to: "/account", 
      className: "wp-checkout-step__login-link" 
    }, "Log in")
  );

  return React.createElement(CheckoutLayout, null,
    React.createElement('div', { className: "checkout-page" },
      React.createElement(Container, { 
        variant: "site", 
        className: "wp-checkout-page" 
      },
        /* Dev Control: Toggle Login State */
        React.createElement('div', { className: "wp-dev-control" },
          React.createElement('span', null, React.createElement('small', null, React.createElement('strong', null, "Prototype Mode:"))),
          React.createElement('button', { 
            onClick: function() { setIsLoggedIn(!isLoggedIn); },
            className: "wp-dev-control__button " + (isLoggedIn ? 'wp-dev-control__button--logged-in' : 'wp-dev-control__button--guest')
          },
            isLoggedIn ? React.createElement('span', { className: "wp-dev-control__icon" }, 
              React.createElement(User, { size: 12, weight: 'duotone' }), " Logged In"
            ) : React.createElement('span', { className: "wp-dev-control__icon" }, 
              React.createElement(UserMinus, { size: 12, weight: 'duotone' }), " Guest"
            )
          )
        ),

        React.createElement('div', { className: "wp-checkout-page__header" },
          React.createElement(Typography, { 
            variant: "h1", 
            className: "wp-checkout-page__title" 
          }, "Checkout")
        ),

        React.createElement('div', { className: "wp-checkout-page__layout" },
          /* Main Column */
          React.createElement('div', { className: "wp-checkout-page__main" },
            
            /* Step 1: Contact */
            React.createElement(CheckoutStep, { 
              number: "1", 
              title: "Contact information",
              isOpen: activeStep === 1,
              isCompleted: activeStep > 1,
              onToggle: function() { handleStepToggle(1); },
              headerRight: !isLoggedIn ? loginLink : null
            }, 
              React.createElement(ContactInfo, { isLoggedIn: isLoggedIn }),
              React.createElement('div', { className: "wp-checkout-step__actions" },
                React.createElement(Button, { 
                  variant: "primary", 
                  onClick: function() { handleStepComplete(1); }
                }, "Continue to Delivery")
              )
            ),

            /* Step 2: Delivery */
            React.createElement(CheckoutStep, { 
              number: "2", 
              title: "Delivery",
              isOpen: activeStep === 2,
              isCompleted: activeStep > 2,
              onToggle: function() { handleStepToggle(2); }
            },
              React.createElement(DeliveryMethodSelector, { 
                method: deliveryMethod, 
                setMethod: setDeliveryMethod 
              }),
              React.createElement('div', { className: "wp-checkout-step__actions" },
                React.createElement(Button, { 
                  variant: "primary", 
                  onClick: function() { handleStepComplete(2); }
                }, "Continue to " + (deliveryMethod === 'ship' ? 'Shipping' : 'Pickup'))
              )
            ),

            /* Step 3: Dynamic (Shipping or Pickup) */
            React.createElement(CheckoutStep, { 
              number: stepShipping.toString(), 
              title: deliveryMethod === 'ship' ? "Shipping address" : "Pickup locations",
              isOpen: activeStep === 3,
              isCompleted: activeStep > 3,
              onToggle: function() { handleStepToggle(3); }
            },
              deliveryMethod === 'ship' ? React.createElement(ShippingAddressForm, { 
                useSameBilling: useSameBilling, 
                onToggleSameBilling: setUseSameBilling 
              }) : React.createElement(PickupLocationSelect, null),
              React.createElement('div', { className: "wp-checkout-step__actions" },
                React.createElement(Button, { 
                  variant: "primary", 
                  onClick: function() { handleStepComplete(3); }
                }, "Continue to " + (useSameBilling ? 'Payment' : 'Billing'))
              )
            ),

            /* Step 4: Billing Address (Conditional) */
            (!useSameBilling && deliveryMethod === 'ship') ? React.createElement(CheckoutStep, { 
              number: (stepBilling ? stepBilling.toString() : "4"), 
              title: "Billing address",
              isOpen: activeStep === 4,
              isCompleted: activeStep > 4,
              onToggle: function() { handleStepToggle(4); }
            },
              React.createElement(BillingAddressForm, null),
              React.createElement('div', { className: "wp-checkout-step__actions" },
                React.createElement(Button, { 
                  variant: "primary", 
                  onClick: function() { handleStepComplete(4); }
                }, "Continue to Payment")
              )
            ) : null,

            /* Step 4/5: Payment */
            React.createElement(CheckoutStep, { 
              number: stepPayment.toString(), 
              title: "Payment options", 
              isLast: true,
              isOpen: activeStep === (useSameBilling ? 4 : 5),
              isCompleted: false
            },
              React.createElement(PaymentMethods, { isLoggedIn: isLoggedIn })
            )
          ),

          /* Sidebar Column */
          React.createElement('div', { className: "wp-checkout-page__sidebar" },
            React.createElement(OrderSummary, null)
          )
        ),

        /* Trust Band - Security reassurance */
        React.createElement('div', { className: "wp-checkout-page__footer" },
          React.createElement(TrustBand, { 
            layout: "horizontal", 
            compact: false 
          })
        )
      )
    )
  );
}

export { PageCheckout };
export default PageCheckout;