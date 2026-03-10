# NewsletterSignup Pattern

**Version:** 1.0  
**Type:** Pattern (Email Subscription Form)  
**WordPress Mapping:** Newsletter Block / MailChimp Block  
**File:** `/components/patterns/NewsletterSignup.tsx`

---

## Overview

The NewsletterSignup pattern provides an email subscription form for collecting newsletter signups with validation, double opt-in support, and integration with email marketing platforms.

**Purpose:**
- Collect email subscriptions
- Build mailing list
- Validate email addresses
- Comply with GDPR/privacy laws
- Integrate with email platforms

**WordPress Equivalent:**
- Newsletter Block
- MailChimp for WordPress
- Subscribe Form Block
- Email Subscription Widget

---

## Component Structure

```
NewsletterSignup (Pattern)
└── Signup Container
    ├── Heading & Description
    ├── Email Input Field
    ├── Privacy Checkbox (GDPR)
    ├── Submit Button
    └── Status Message (success/error/loading)
```

---

## Props Interface

```typescript
interface NewsletterSignupProps {
  heading?: string;
  description?: string;
  submitText?: string;
  placeholder?: string;
  onSubmit: (email: string) => Promise<void>;
  successMessage?: string;
  showPrivacyCheckbox?: boolean;
  privacyLink?: string;
  layout?: 'inline' | 'stacked';
  size?: 'small' | 'medium' | 'large';
}
```

---

**Last Updated:** December 2024  
**Status:** ✅ Production Ready
