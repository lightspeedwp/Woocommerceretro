import React from 'react';
import * as ContainerModule from '../common/Container';

var Container = ContainerModule.Container;

/**
 * PageFormShowcase Template 
 * 
 * Dev Tools showcase for all WordPress-aligned form components.
 * 
 * @template
 */
export function PageFormShowcase() {
  var handleSubmit = function(e) { e.preventDefault(); };

  return React.createElement(React.Fragment, null,
    React.createElement(Container, { className: "wp-form-showcase", style: { padding: 'var(--wp--preset--spacing--60) 0' } },
      React.createElement('div', { className: "wp-form-showcase__header", style: { marginBottom: 'var(--wp--preset--spacing--60)' } },
        React.createElement('h1', { style: { marginBottom: 'var(--wp--preset--spacing--40)' } }, "Form Components Showcase"),
        React.createElement('p', null,
          "A comprehensive preview of all standardized form types using the global `.wp-block-*` design system."
        )
      ),

      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--80)' } },
        
        /* 1. Product Review Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "1. Product Review Form"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form" },
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Rating *"),
              React.createElement('select', { className: "wp-block-select funky-input-glow" },
                React.createElement('option', { value: "" }, "Rate..."),
                React.createElement('option', { value: "5" }, "Perfect"),
                React.createElement('option', { value: "4" }, "Good"),
                React.createElement('option', { value: "3" }, "Average")
              )
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Your review *"),
              React.createElement('textarea', { className: "wp-block-textarea funky-input-glow", rows: 4, required: true })
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Name *"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true })
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Submit Review")
          )
        ),

        /* 2. Blog Post Comments Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "2. Blog Post Comments Form"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form" },
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Comment"),
              React.createElement('textarea', { className: "wp-block-textarea funky-input-glow", rows: 4 })
            ),
            React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--wp--preset--spacing--40)', marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "Name *"),
                React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true })
              ),
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "Email *"),
                React.createElement('input', { type: "email", className: "wp-block-input funky-input-glow", required: true })
              )
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Post Comment")
          )
        ),

        /* 3. Contact Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "3. Contact Form"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-contact-form wp-block-form" },
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Subject"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", placeholder: "How can we help?" })
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Message *"),
              React.createElement('textarea', { className: "wp-block-textarea funky-input-glow", rows: 5, placeholder: "Your message...", required: true })
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Send Message")
          )
        ),

        /* 4. Login Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "4. Login Form"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form wp-max-w-md", style: { maxWidth: '400px' } },
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Username or email address *"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true })
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Password *"),
              React.createElement('input', { type: "password", className: "wp-block-input funky-input-glow", required: true })
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-checkbox" },
                React.createElement('input', { type: "checkbox", className: "wp-block-checkbox__input" }),
                React.createElement('span', { className: "wp-block-checkbox__label" }, "Remember me")
              )
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Log in")
          )
        ),

        /* 5. Registration Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "5. Registration Form"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form wp-max-w-md", style: { maxWidth: '400px' } },
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Email address *"),
              React.createElement('input', { type: "email", className: "wp-block-input funky-input-glow", required: true })
            ),
            React.createElement('p', { style: { marginBottom: 'var(--wp--preset--spacing--30)', fontSize: '0.875rem' } }, 
              "A link to set a new password will be sent to your email address."
            ),
            React.createElement('p', { style: { marginBottom: 'var(--wp--preset--spacing--30)', fontSize: '0.875rem' } }, 
              "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy."
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Register")
          )
        ),

        /* 6. WooCommerce Checkout Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "6. WooCommerce Checkout Form (Billing)"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form" },
            React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--wp--preset--spacing--40)', marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "First name *"),
                React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true })
              ),
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "Last name *"),
                React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true })
              )
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Company name (optional)"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow" })
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Country / Region *"),
              React.createElement('select', { className: "wp-block-select funky-input-glow" },
                React.createElement('option', { value: "US" }, "United States (US)"),
                React.createElement('option', { value: "UK" }, "United Kingdom (UK)")
              )
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Street address *"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", placeholder: "House number and street name", style: { marginBottom: 'var(--wp--preset--spacing--20)' }, required: true }),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", placeholder: "Apartment, suite, unit, etc. (optional)" })
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Town / City *"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true })
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Order notes (optional)"),
              React.createElement('textarea', { className: "wp-block-textarea funky-input-glow", placeholder: "Notes about your order, e.g. special notes for delivery.", rows: 4 })
            )
          )
        ),

        /* 7. My Account - Password Reset */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "7. My Account - Password Reset"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form wp-max-w-md", style: { maxWidth: '400px' } },
            React.createElement('p', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, 
              "Lost your password? Please enter your username or email address. You will receive a link to create a new password via email."
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Username or email"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true })
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Reset password")
          )
        ),

        /* 8. My Account - Update Profile */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "8. My Account - Update Profile"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form" },
            React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--wp--preset--spacing--40)', marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "First name *"),
                React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true })
              ),
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "Last name *"),
                React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true })
              )
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Display name *"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true }),
              React.createElement('p', { style: { fontSize: '0.875rem', marginTop: 'var(--wp--preset--spacing--10)', fontStyle: 'italic' } }, "This will be how your name will be displayed in the account section and in reviews")
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Email address *"),
              React.createElement('input', { type: "email", className: "wp-block-input funky-input-glow", required: true })
            ),
            React.createElement('fieldset', { style: { border: '1px solid var(--wp--preset--color--black)', padding: 'var(--wp--preset--spacing--40)', marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('legend', { style: { fontWeight: 'bold' } }, "Password change"),
              React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--20)' } },
                React.createElement('label', { className: "wp-block-form-label" }, "Current password (leave blank to leave unchanged)"),
                React.createElement('input', { type: "password", className: "wp-block-input funky-input-glow" })
              ),
              React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--20)' } },
                React.createElement('label', { className: "wp-block-form-label" }, "New password (leave blank to leave unchanged)"),
                React.createElement('input', { type: "password", className: "wp-block-input funky-input-glow" })
              ),
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "Confirm new password"),
                React.createElement('input', { type: "password", className: "wp-block-input funky-input-glow" })
              )
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Save changes")
          )
        ),

        /* 9. My Account - Change Address */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "9. My Account - Change Address"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form" },
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Country / Region *"),
              React.createElement('select', { className: "wp-block-select funky-input-glow" },
                React.createElement('option', { value: "US" }, "United States (US)"),
                React.createElement('option', { value: "CA" }, "Canada"),
                React.createElement('option', { value: "MX" }, "Mexico")
              )
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Street address *"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", placeholder: "House number and street name" })
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Save address")
          )
        ),

        /* 10. Search Form with Autocomplete */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "10. Search Form with Autocomplete"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-search__button-inside wp-block-search__icon-button wp-block-search" },
            React.createElement('div', { className: "wp-block-search__inside-wrapper", style: { position: 'relative' } },
              React.createElement('input', { 
                type: "search", 
                className: "wp-block-search__input wp-block-input funky-input-glow", 
                placeholder: "Search products...",
                required: true 
              }),
              React.createElement('button', { type: "submit", className: "wp-block-search__button wp-element-button", 'aria-label': "Search" },
                React.createElement('span', null, "🔍")
              )
            )
          )
        ),

        /* 11. Newsletter Subscription Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "11. Newsletter Subscription Form"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form" },
            React.createElement('div', { style: { display: 'flex', gap: 'var(--wp--preset--spacing--20)' } },
              React.createElement('input', { type: "email", className: "wp-block-input funky-input-glow", placeholder: "Email address", required: true, style: { flex: 1 } }),
              React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Subscribe")
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginTop: 'var(--wp--preset--spacing--20)' } },
              React.createElement('label', { className: "wp-block-checkbox" },
                React.createElement('input', { type: "checkbox", className: "wp-block-checkbox__input", required: true }),
                React.createElement('span', { className: "wp-block-checkbox__label", style: { fontSize: '0.875rem' } }, "I agree to the privacy policy")
              )
            )
          )
        ),

        /* 12. Order Tracking Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "12. Order Tracking Form"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form wp-max-w-md", style: { maxWidth: '400px' } },
            React.createElement('p', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, 
              "To track your order please enter your Order ID in the box below and press the \"Track\" button."
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Order ID"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", placeholder: "Found in your order confirmation email.", required: true })
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Billing email"),
              React.createElement('input', { type: "email", className: "wp-block-input funky-input-glow", placeholder: "Email you used during checkout.", required: true })
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Track")
          )
        ),

        /* 13. Gift Card Purchase Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "13. Gift Card Purchase Form"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form wp-max-w-md", style: { maxWidth: '400px' } },
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Amount"),
              React.createElement('select', { className: "wp-block-select funky-input-glow" },
                React.createElement('option', { value: "25" }, "$25.00"),
                React.createElement('option', { value: "50" }, "$50.00"),
                React.createElement('option', { value: "100" }, "$100.00")
              )
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "To (Recipient Email)"),
              React.createElement('input', { type: "email", className: "wp-block-input funky-input-glow", required: true })
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Message (optional)"),
              React.createElement('textarea', { className: "wp-block-textarea funky-input-glow", rows: 3 })
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Add to cart")
          )
        ),

        /* 14. Coupon / Promo Code Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "14. Coupon / Promo Code Form"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form", style: { display: 'flex', gap: 'var(--wp--preset--spacing--20)' } },
            React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", placeholder: "Coupon code", style: { flex: 1, maxWidth: '250px' } }),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Apply coupon")
          )
        ),

        /* 15. Product Enquiry Form */
        React.createElement('section', { className: "wp-form-showcase__section" },
          React.createElement('h2', { style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "15. Product Enquiry Form"),
          React.createElement('form', { onSubmit: handleSubmit, className: "wp-block-form" },
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Product"),
              React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", value: "Awesome Funky Sneaker", disabled: true })
            ),
            React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--wp--preset--spacing--40)', marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "Name *"),
                React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", required: true })
              ),
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "Email *"),
                React.createElement('input', { type: "email", className: "wp-block-input funky-input-glow", required: true })
              )
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { className: "wp-block-form-label" }, "Enquiry *"),
              React.createElement('textarea', { className: "wp-block-textarea funky-input-glow", rows: 4, required: true })
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button" }, "Send Enquiry")
          )
        )
      )
    )
  );
}
