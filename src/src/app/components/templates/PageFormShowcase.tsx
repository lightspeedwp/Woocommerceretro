import React from 'react';
import { Container } from '../common/Container';

/**
 * PageFormShowcase Template
 *
 * Dev Tools showcase for all WordPress-aligned form components.
 *
 * @template
 * @route /dev-tools/forms
 */
export const PageFormShowcase = () => {
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); };

  return (
    <>
      <Container className="wp-form-showcase">
        <div className="wp-form-showcase__header">
          <h1>Form Components Showcase</h1>
          <p>
            A comprehensive preview of all standardized form types using the global `.wp-block-*` design system.
          </p>
        </div>

        <div className="wp-form-showcase__sections">

          {/* 1. Product Review Form */}
          <section className="wp-form-showcase__section">
            <h2>1. Product Review Form</h2>
            <form onSubmit={handleSubmit} className="wp-block-form">
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Rating *</label>
                <select className="wp-block-select funky-input-glow">
                  <option value="">Rate...</option>
                  <option value="5">Perfect</option>
                  <option value="4">Good</option>
                  <option value="3">Average</option>
                </select>
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Your review *</label>
                <textarea className="wp-block-textarea funky-input-glow" rows={4} required />
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Name *</label>
                <input type="text" className="wp-block-input funky-input-glow" required />
              </div>
              <button type="submit" className="wp-block-button__link wp-element-button">Submit Review</button>
            </form>
          </section>

          {/* 2. Blog Post Comments Form */}
          <section className="wp-form-showcase__section">
            <h2>2. Blog Post Comments Form</h2>
            <form onSubmit={handleSubmit} className="wp-block-form">
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Comment</label>
                <textarea className="wp-block-textarea funky-input-glow" rows={4} />
              </div>
              <div className="wp-form-showcase__grid-2col">
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">Name *</label>
                  <input type="text" className="wp-block-input funky-input-glow" required />
                </div>
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">Email *</label>
                  <input type="email" className="wp-block-input funky-input-glow" required />
                </div>
              </div>
              <button type="submit" className="wp-block-button__link wp-element-button">Post Comment</button>
            </form>
          </section>

          {/* 3. Contact Form */}
          <section className="wp-form-showcase__section">
            <h2>3. Contact Form</h2>
            <form onSubmit={handleSubmit} className="wp-contact-form wp-block-form">
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Subject</label>
                <input type="text" className="wp-block-input funky-input-glow" placeholder="How can we help?" />
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Message *</label>
                <textarea className="wp-block-textarea funky-input-glow" rows={5} placeholder="Your message..." required />
              </div>
              <button type="submit" className="wp-block-button__link wp-element-button">Send Message</button>
            </form>
          </section>

          {/* 4. Login Form */}
          <section className="wp-form-showcase__section">
            <h2>4. Login Form</h2>
            <form onSubmit={handleSubmit} className="wp-block-form wp-form-showcase__narrow">
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Username or email address *</label>
                <input type="text" className="wp-block-input funky-input-glow" required />
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Password *</label>
                <input type="password" className="wp-block-input funky-input-glow" required />
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-checkbox">
                  <input type="checkbox" className="wp-block-checkbox__input" />
                  <span className="wp-block-checkbox__label">Remember me</span>
                </label>
              </div>
              <button type="submit" className="wp-block-button__link wp-element-button">Log in</button>
            </form>
          </section>

          {/* 5. Registration Form */}
          <section className="wp-form-showcase__section">
            <h2>5. Registration Form</h2>
            <form onSubmit={handleSubmit} className="wp-block-form wp-form-showcase__narrow">
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Email address *</label>
                <input type="email" className="wp-block-input funky-input-glow" required />
              </div>
              <p className="wp-form-showcase__hint">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="wp-form-showcase__hint">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </p>
              <button type="submit" className="wp-block-button__link wp-element-button">Register</button>
            </form>
          </section>

          {/* 6. WooCommerce Checkout Form */}
          <section className="wp-form-showcase__section">
            <h2>6. WooCommerce Checkout Form (Billing)</h2>
            <form onSubmit={handleSubmit} className="wp-block-form">
              <div className="wp-form-showcase__grid-2col">
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">First name *</label>
                  <input type="text" className="wp-block-input funky-input-glow" required />
                </div>
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">Last name *</label>
                  <input type="text" className="wp-block-input funky-input-glow" required />
                </div>
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Company name (optional)</label>
                <input type="text" className="wp-block-input funky-input-glow" />
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Country / Region *</label>
                <select className="wp-block-select funky-input-glow">
                  <option value="US">United States (US)</option>
                  <option value="UK">United Kingdom (UK)</option>
                </select>
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Street address *</label>
                <input type="text" className="wp-block-input funky-input-glow" placeholder="House number and street name" required />
                <input type="text" className="wp-block-input funky-input-glow" placeholder="Apartment, suite, unit, etc. (optional)" />
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Town / City *</label>
                <input type="text" className="wp-block-input funky-input-glow" required />
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Order notes (optional)</label>
                <textarea className="wp-block-textarea funky-input-glow" placeholder="Notes about your order, e.g. special notes for delivery." rows={4} />
              </div>
            </form>
          </section>

          {/* 7. My Account - Password Reset */}
          <section className="wp-form-showcase__section">
            <h2>7. My Account - Password Reset</h2>
            <form onSubmit={handleSubmit} className="wp-block-form wp-form-showcase__narrow">
              <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Username or email</label>
                <input type="text" className="wp-block-input funky-input-glow" required />
              </div>
              <button type="submit" className="wp-block-button__link wp-element-button">Reset password</button>
            </form>
          </section>

          {/* 8. My Account - Update Profile */}
          <section className="wp-form-showcase__section">
            <h2>8. My Account - Update Profile</h2>
            <form onSubmit={handleSubmit} className="wp-block-form">
              <div className="wp-form-showcase__grid-2col">
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">First name *</label>
                  <input type="text" className="wp-block-input funky-input-glow" required />
                </div>
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">Last name *</label>
                  <input type="text" className="wp-block-input funky-input-glow" required />
                </div>
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Display name *</label>
                <input type="text" className="wp-block-input funky-input-glow" required />
                <p className="wp-form-showcase__hint wp-form-showcase__hint--italic">
                  This will be how your name will be displayed in the account section and in reviews
                </p>
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Email address *</label>
                <input type="email" className="wp-block-input funky-input-glow" required />
              </div>
              <fieldset className="wp-form-showcase__fieldset">
                <legend>Password change</legend>
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">Current password (leave blank to leave unchanged)</label>
                  <input type="password" className="wp-block-input funky-input-glow" />
                </div>
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">New password (leave blank to leave unchanged)</label>
                  <input type="password" className="wp-block-input funky-input-glow" />
                </div>
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">Confirm new password</label>
                  <input type="password" className="wp-block-input funky-input-glow" />
                </div>
              </fieldset>
              <button type="submit" className="wp-block-button__link wp-element-button">Save changes</button>
            </form>
          </section>

          {/* 9. My Account - Change Address */}
          <section className="wp-form-showcase__section">
            <h2>9. My Account - Change Address</h2>
            <form onSubmit={handleSubmit} className="wp-block-form">
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Country / Region *</label>
                <select className="wp-block-select funky-input-glow">
                  <option value="US">United States (US)</option>
                  <option value="CA">Canada</option>
                  <option value="MX">Mexico</option>
                </select>
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Street address *</label>
                <input type="text" className="wp-block-input funky-input-glow" placeholder="House number and street name" />
              </div>
              <button type="submit" className="wp-block-button__link wp-element-button">Save address</button>
            </form>
          </section>

          {/* 10. Search Form with Autocomplete */}
          <section className="wp-form-showcase__section">
            <h2>10. Search Form with Autocomplete</h2>
            <form onSubmit={handleSubmit} className="wp-block-search__button-inside wp-block-search__icon-button wp-block-search">
              <div className="wp-block-search__inside-wrapper">
                <input
                  type="search"
                  className="wp-block-search__input wp-block-input funky-input-glow"
                  placeholder="Search products..."
                  required
                />
                <button type="submit" className="wp-block-search__button wp-element-button" aria-label="Search">
                  <span>&#128269;</span>
                </button>
              </div>
            </form>
          </section>

          {/* 11. Newsletter Subscription Form */}
          <section className="wp-form-showcase__section">
            <h2>11. Newsletter Subscription Form</h2>
            <form onSubmit={handleSubmit} className="wp-block-form">
              <div className="wp-form-showcase__inline-group">
                <input type="email" className="wp-block-input funky-input-glow" placeholder="Email address" required />
                <button type="submit" className="wp-block-button__link wp-element-button">Subscribe</button>
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-checkbox">
                  <input type="checkbox" className="wp-block-checkbox__input" required />
                  <span className="wp-block-checkbox__label">I agree to the privacy policy</span>
                </label>
              </div>
            </form>
          </section>

          {/* 12. Order Tracking Form */}
          <section className="wp-form-showcase__section">
            <h2>12. Order Tracking Form</h2>
            <form onSubmit={handleSubmit} className="wp-block-form wp-form-showcase__narrow">
              <p>To track your order please enter your Order ID in the box below and press the "Track" button.</p>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Order ID</label>
                <input type="text" className="wp-block-input funky-input-glow" placeholder="Found in your order confirmation email." required />
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Billing email</label>
                <input type="email" className="wp-block-input funky-input-glow" placeholder="Email you used during checkout." required />
              </div>
              <button type="submit" className="wp-block-button__link wp-element-button">Track</button>
            </form>
          </section>

          {/* 13. Gift Card Purchase Form */}
          <section className="wp-form-showcase__section">
            <h2>13. Gift Card Purchase Form</h2>
            <form onSubmit={handleSubmit} className="wp-block-form wp-form-showcase__narrow">
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Amount</label>
                <select className="wp-block-select funky-input-glow">
                  <option value="25">$25.00</option>
                  <option value="50">$50.00</option>
                  <option value="100">$100.00</option>
                </select>
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">To (Recipient Email)</label>
                <input type="email" className="wp-block-input funky-input-glow" required />
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Message (optional)</label>
                <textarea className="wp-block-textarea funky-input-glow" rows={3} />
              </div>
              <button type="submit" className="wp-block-button__link wp-element-button">Add to cart</button>
            </form>
          </section>

          {/* 14. Coupon / Promo Code Form */}
          <section className="wp-form-showcase__section">
            <h2>14. Coupon / Promo Code Form</h2>
            <form onSubmit={handleSubmit} className="wp-block-form wp-form-showcase__inline-group">
              <input type="text" className="wp-block-input funky-input-glow" placeholder="Coupon code" />
              <button type="submit" className="wp-block-button__link wp-element-button">Apply coupon</button>
            </form>
          </section>

          {/* 15. Product Enquiry Form */}
          <section className="wp-form-showcase__section">
            <h2>15. Product Enquiry Form</h2>
            <form onSubmit={handleSubmit} className="wp-block-form">
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Product</label>
                <input type="text" className="wp-block-input funky-input-glow" value="Awesome Funky Sneaker" disabled />
              </div>
              <div className="wp-form-showcase__grid-2col">
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">Name *</label>
                  <input type="text" className="wp-block-input funky-input-glow" required />
                </div>
                <div className="wp-block-form-item">
                  <label className="wp-block-form-label">Email *</label>
                  <input type="email" className="wp-block-input funky-input-glow" required />
                </div>
              </div>
              <div className="wp-block-form-item">
                <label className="wp-block-form-label">Enquiry *</label>
                <textarea className="wp-block-textarea funky-input-glow" rows={4} required />
              </div>
              <button type="submit" className="wp-block-button__link wp-element-button">Send Enquiry</button>
            </form>
          </section>

        </div>
      </Container>
    </>
  );
}