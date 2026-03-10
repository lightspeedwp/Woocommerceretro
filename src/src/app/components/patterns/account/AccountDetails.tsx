import React from 'react';
import * as AccountDataModule from '../../../data/account';

var mockUserProfile = AccountDataModule.mockUserProfile;

/**
 * Account Details Pattern
 *
 * Form for updating personal information and password.
 * Neon cyan focus states on all inputs.
 *
 * **Styling:** BEM (.account-details) in /src/styles/sections/account-auth-funky.css
 * **Dark Mode:** Full support via CSS variables
 */
export function AccountDetails() {
  return React.createElement('div', { className: "account-details funky-glass-panel", style: { padding: 'var(--wp--preset--spacing--60)' } },
    React.createElement('h2', { className: "account-details__title funky-section__heading--gradient", style: { marginBottom: 'var(--wp--preset--spacing--40)' } },
      "Account details"
    ),

    React.createElement('form', { className: "account-details__form" },
      React.createElement('div', { className: "account-details__row" },
        React.createElement('div', { className: "wp-block-form-item" },
          React.createElement('label', { htmlFor: "firstName", className: "wp-block-label" },
            "First name ", React.createElement('span', { className: "account-details__required" }, "*")
          ),
          React.createElement('input', {
            type: "text",
            id: "firstName",
            defaultValue: mockUserProfile.firstName,
            className: "wp-block-input funky-input-glow"
          })
        ),
        React.createElement('div', { className: "wp-block-form-item" },
          React.createElement('label', { htmlFor: "lastName", className: "wp-block-label" },
            "Last name ", React.createElement('span', { className: "account-details__required" }, "*")
          ),
          React.createElement('input', {
            type: "text",
            id: "lastName",
            defaultValue: mockUserProfile.lastName,
            className: "wp-block-input funky-input-glow"
          })
        )
      ),

      React.createElement('div', { className: "wp-block-form-item account-details__field-full", style: { marginTop: 'var(--wp--preset--spacing--30)' } },
        React.createElement('label', { htmlFor: "displayName", className: "wp-block-label" },
          "Display name ", React.createElement('span', { className: "account-details__required" }, "*")
        ),
        React.createElement('input', {
          type: "text",
          id: "displayName",
          defaultValue: mockUserProfile.firstName + ' ' + mockUserProfile.lastName,
          className: "wp-block-input funky-input-glow"
        }),
        React.createElement('p', { className: "wp-block-form-description", style: { color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)', marginTop: 'var(--wp--preset--spacing--10)' } },
          "This will be how your name will be displayed in the account section and in reviews."
        )
      ),

      React.createElement('div', { className: "wp-block-form-item account-details__field-full", style: { marginTop: 'var(--wp--preset--spacing--30)' } },
        React.createElement('label', { htmlFor: "email", className: "wp-block-label" },
          "Email address ", React.createElement('span', { className: "account-details__required" }, "*")
        ),
        React.createElement('input', {
          type: "email",
          id: "email",
          defaultValue: mockUserProfile.email,
          className: "wp-block-input funky-input-glow"
        })
      ),

      React.createElement('hr', { className: "account-details__section-divider", style: { margin: 'var(--wp--preset--spacing--50) 0', border: 'none', borderTop: '1px solid var(--funky-glass-border)' } }),

      React.createElement('h3', { className: "account-details__subtitle", style: { marginBottom: 'var(--wp--preset--spacing--30)', color: 'var(--wp--preset--color--neon-cyan)' } },
        "Password change"
      ),

      React.createElement('div', { className: "account-details__password-group", style: { display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--30)' } },
        React.createElement('div', { className: "wp-block-form-item" },
          React.createElement('label', { htmlFor: "currentPassword", className: "wp-block-label" },
            "Current password (leave blank to leave unchanged)"
          ),
          React.createElement('input', {
            type: "password",
            id: "currentPassword",
            className: "wp-block-input funky-input-glow"
          })
        ),
        React.createElement('div', { className: "wp-block-form-item" },
          React.createElement('label', { htmlFor: "newPassword", className: "wp-block-label" },
            "New password (leave blank to leave unchanged)"
          ),
          React.createElement('input', {
            type: "password",
            id: "newPassword",
            className: "wp-block-input funky-input-glow"
          })
        )
      )
    )
  );
}

export default AccountDetails;