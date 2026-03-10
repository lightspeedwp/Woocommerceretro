# OrderConfirmation Template

**Category**: Templates  
**Route**: `/order/:id`  
**WordPress**: `page-order-received.html`  
**Version**: 2.2

---

## Purpose

The order confirmation page displayed immediately after successful checkout, showing order details and next steps.

---

## Structure

```
CheckoutLayout (Part - Simplified layout)
  ├─ Success Banner Section
  ├─ Order Details Section
  │   ├─ Order Summary
  │   ├─ Shipping Address
  │   ├─ Billing Address
  │   └─ Payment Method
  └─ Next Steps Section
```

---

## Implementation

```tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckoutLayout } from '../components/parts/CheckoutLayout';
import { Container } from '../components/common/Container';
import { OrderSummary } from '../components/blocks/OrderSummary';
import { CheckCircle } from '@phosphor-icons/react';
import { useOrder } from '../hooks/useOrder';

export const OrderConfirmation: React.FC = () => {
  const { id } = useParams();
  const { order, isLoading } = useOrder(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!order) {
    return <OrderNotFound />;
  }

  return (
    <CheckoutLayout>
      {/* Success Banner */}
      <div className="wp-block-group has-background has-success-background-color has-text-color has-white-color has-text-align-center">
        <Container>
          <CheckCircle size={64} className="wp-block-image is-style-centered" />
          <h1>Order Confirmed!</h1>
          <p className="has-large-font-size">
            Thank you for your order, {order.customer.firstName}!
          </p>
          <p>
            Order number: <strong>#{order.number}</strong>
          </p>
          <p className="has-small-font-size">
            A confirmation email has been sent to {order.customer.email}
          </p>
        </Container>
      </div>

      {/* Order Details */}
      <div className="wp-block-group has-global-padding">
        <Container>
          <div className="wp-block-group" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Estimated Delivery */}
            <div className="wp-block-notice is-info">
              <Truck className="wp-block-icon" />
              <strong>Estimated Delivery</strong>
              <p>
                Your order will arrive between {formatDate(order.estimatedDeliveryStart)} and {formatDate(order.estimatedDeliveryEnd)}
              </p>
            </div>

            {/* Order Items */}
            <div className="wp-block-group has-border">
              <h3>Order Items</h3>
              <div className="wp-block-group">
                {order.items.map(item => (
                  <div key={item.id} className="wp-block-columns has-border-bottom">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="wp-block-image"
                      style={{ width: '80px', height: '80px' }}
                    />
                    <div className="wp-block-column">
                      <h4 className="has-text-weight-medium">{item.name}</h4>
                      {item.variant && (
                        <p className="has-small-font-size has-secondary-color">{item.variant}</p>
                      )}
                      <p className="has-small-font-size has-secondary-color">Qty: {item.quantity}</p>
                    </div>
                    <div className="wp-block-column has-text-align-right">
                      <p className="has-text-weight-medium">
                        £{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="wp-block-separator" />

              {/* Order Totals */}
              <div className="wp-block-group">
                <div className="wp-block-columns has-small-font-size">
                  <div className="wp-block-column">Subtotal</div>
                  <div className="wp-block-column has-text-align-right">£{order.subtotal.toFixed(2)}</div>
                </div>
                <div className="wp-block-columns has-small-font-size">
                  <div className="wp-block-column">Shipping</div>
                  <div className="wp-block-column has-text-align-right">{order.shipping === 0 ? 'FREE' : `£${order.shipping.toFixed(2)}`}</div>
                </div>
                <div className="wp-block-columns has-small-font-size has-secondary-color">
                  <div className="wp-block-column">Tax</div>
                  <div className="wp-block-column has-text-align-right">£{order.tax.toFixed(2)}</div>
                </div>
                <hr className="wp-block-separator" />
                <div className="wp-block-columns has-large-font-size has-text-weight-bold">
                  <div className="wp-block-column">Total</div>
                  <div className="wp-block-column has-text-align-right">£{order.total.toFixed(2)}</div>
                </div>
              </div>
            </div>

            <div className="wp-block-columns">
              {/* Shipping Address */}
              <div className="wp-block-column">
                <div className="wp-block-group has-border">
                  <h3>Shipping Address</h3>
                  <address className="wp-block-address">
                    {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                    {order.shippingAddress.address1}<br />
                    {order.shippingAddress.address2 && <>{order.shippingAddress.address2}<br /></>}
                    {order.shippingAddress.city}, {order.shippingAddress.postcode}<br />
                    {order.shippingAddress.country}
                  </address>
                </div>
              </div>

              {/* Payment Method */}
              <div className="wp-block-column">
                <div className="wp-block-group has-border">
                  <h3>Payment Method</h3>
                  <div className="wp-block-group is-layout-flex">
                    {order.paymentMethod === 'card' && (
                      <>
                        <CreditCard size={20} />
                        <span>Card ending in {order.cardLast4}</span>
                      </>
                    )}
                    {order.paymentMethod === 'paypal' && (
                      <>
                        <img src="/paypal-icon.svg" className="wp-block-image is-style-icon" />
                        <span>PayPal</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="wp-block-group has-border">
              <h3>What's Next?</h3>
              <div className="wp-block-group">
                <div className="wp-block-columns">
                  <CheckCircle size={20} className="wp-block-icon has-success-color" />
                  <div className="wp-block-column">
                    <h4 className="has-text-weight-medium">Order Confirmation Email</h4>
                    <p className="has-small-font-size has-secondary-color">
                      Check your inbox for order details and tracking information.
                    </p>
                  </div>
                </div>

                <div className="wp-block-columns">
                  <Truck size={20} className="wp-block-icon has-primary-color" />
                  <div className="wp-block-column">
                    <h4 className="has-text-weight-medium">Track Your Order</h4>
                    <p className="has-small-font-size has-secondary-color">
                      You'll receive a tracking number once your order ships.
                    </p>
                  </div>
                </div>
              </div>

              <div className="wp-block-buttons">
                <Button variant="outline" href={`/order/${order.id}/track`}>
                  <Truck size={16} className="mr-2" />
                  Track Order
                </Button>
                <Button variant="outline" href="/account/orders">
                  <User size={16} className="mr-2" />
                  View All Orders
                </Button>
                <Button href="/shop">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </CheckoutLayout>
  );
};
```

---

## Section Breakdown

### 1. Success Banner

**Purpose**: Immediate confirmation feedback  
**Classes**: `wp-block-group has-success-background-color`

**Key Features**:
- Large check icon
- Order number prominently displayed
- Confirmation email notification
- Customer name personalization

### 2. Order Details

**Purpose**: Complete order summary  
**Classes**: `wp-block-group has-global-padding`

**Components**:
- Estimated delivery alert
- Order items list
- Order totals
- Shipping address
- Payment method
- Next steps

---

## Order States

### Successful Order

```tsx
<div className="wp-block-group has-background has-success-background-color has-text-color has-white-color">
  <CheckCircle size={64} />
  <h1>Order Confirmed!</h1>
  <p>Order number: #{order.number}</p>
</div>
```

### Pending Payment (PayPal, etc.)

```tsx
<div className="wp-block-group has-background has-warning-background-color has-text-color has-white-color">
  <Clock size={64} />
  <h1>Payment Pending</h1>
  <p>We're waiting for payment confirmation</p>
</div>
```

### Payment Failed

```tsx
<div className="wp-block-group has-background has-error-background-color has-text-color has-white-color">
  <XCircle size={64} />
  <h1>Payment Failed</h1>
  <p>There was a problem processing your payment</p>
  <Button variant="outline">Try Again</Button>
</div>
```

---

## Email Notification

Trigger confirmation email on page load:

```tsx
useEffect(() => {
  if (order && !order.confirmationEmailSent) {
    sendOrderConfirmationEmail(order.id);
  }
}, [order]);
```

---

## Order Tracking

Provide order tracking link:

```tsx
<Button href={`/order/${order.id}/track`}>
  Track Your Order
</Button>
```

---

## Guest vs Registered Users

### Guest Checkout

```tsx
{!user && (
  <div className="wp-block-notice is-info">
    <strong>Create an Account</strong>
    <p>
      Save your order information for faster checkout next time.
      <Button variant="link" href="/register">
        Create Account
      </Button>
    </p>
  </div>
)}
```

### Registered User

```tsx
{user && (
  <div className="wp-block-notice is-info">
    <p>
      This order has been saved to your account. 
      <Button variant="link" href="/account/orders">
        View Order History
      </Button>
    </p>
  </div>
)}
```

---

## Print Order

Provide print functionality:

```tsx
<Button variant="outline" onClick={() => window.print()}>
  <Printer size={16} className="mr-2" />
  Print Order
</Button>
```

---

## SEO & Analytics

```tsx
<Helmet>
  <title>Order #{order.number} Confirmed - Store Name</title>
  <meta name="robots" content="noindex, nofollow" />
</Helmet>

{/* Google Analytics Ecommerce */}
<Script>
  {`
    gtag('event', 'purchase', {
      transaction_id: '${order.id}',
      value: ${order.total},
      currency: 'GBP',
      items: ${JSON.stringify(order.items)}
    });
  `}
</Script>
```

---

## Accessibility

- [ ] Success message announced to screen readers
- [ ] Order details are keyboard navigable
- [ ] High contrast success banner
- [ ] Clear call-to-action buttons
- [ ] Print-friendly styles

---

## WordPress Equivalent

```html
<!-- wp:template-part {"slug":"checkout-header"} /-->

<!-- wp:group {"style":"dark","backgroundColor":"green-600"} -->
  <div class="wp-block-group has-green-600-background-color">
    <h1>Order Confirmed!</h1>
    <p>Order number: #12345</p>
  </div>
<!-- /wp:group -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
  <!-- wp:woocommerce/order-confirmation -->
    <!-- wp:woocommerce/order-confirmation-summary /-->
    <!-- wp:woocommerce/order-confirmation-shipping-address /-->
    <!-- wp:woocommerce/order-confirmation-billing-address /-->
    <!-- wp:woocommerce/order-confirmation-downloads /-->
  <!-- /wp:woocommerce/order-confirmation -->
<!-- /wp:group -->

<!-- wp:template-part {"slug":"checkout-footer"} /-->
```

---

## Related Templates

- [PageCheckout](PageCheckout.md) - Checkout flow
- [AccountLayout](AccountLayout.md) - Account dashboard

---

## Related Guidelines

**CSS Optimization & Performance:**
- [CSS Optimization Guidelines](../development/css-optimization-guidelines.md) - Comprehensive CSS optimization strategies for memory reduction
- [CSS Optimization Quick Reference](../development/css-optimization-quick-reference.md) - Quick start guide for CSS optimization

---

## Back to Overview

[← Templates Overview](../overview-templates.md)