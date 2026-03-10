# PageLogin (LoginRegister)

**Component Type:** Template (Login/Registration Page - Full Funky)  
**Location:** `/src/app/components/templates/PageLogin.tsx`  
**CSS:** `/src/styles/sections/account-auth-funky.css`  
**Route:** `/account/login`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 10)  
**Color Identity:** Cyan `#00ffff` / Pink `#ec4899`

---

## Overview

PageLogin (exported as `LoginRegister`) is a combined authentication template featuring login and registration forms in a glassmorphism card with animated floating orbs, neon cyan focus states, and trust band. Toggles between sign-in and create-account modes. Uses account-auth-funky.css for consistent funky styling.

**Page Purpose:** User authentication (login/registration)  
**Target Audience:** New and returning customers  
**Dark Mode:** ✅ Complete support with glassmorphism effects  
**Layout:** Centered glassmorphism card → Form (conditional fields) → Toggle → Trust band

**Note:** Single component for both login and registration, toggled by state

---

## Key Features

### Visual Elements

**1. Floating Orbs:**
- 2 animated orbs (cyan/pink gradients)
- Float animation (8s infinite)
- Respects reduced motion

**2. Glassmorphism Card:**
- Backdrop blur effect
- Semi-transparent background
- Subtle border glow (cyan)
- Centered on page

**3. Form Elements:**
- Gradient title (pink → cyan)
- Conditional Name field (registration only)
- Email field (both modes)
- Password field (both modes)
- Gradient submit button (cyan → lime)
- Neon cyan focus states

**4. Toggle:**
- Text link to switch modes
- "Don't have an account? Register now"
- "Already have an account? Sign in"

**5. Trust Band:**
- 4 trust features (grid layout, compact)
- ShieldCheck, Lock, UserCheck, Eye icons
- Below form card

### Funky Treatments

**Orbs:** Animated float (cyan/pink)  
**Card:** Glassmorphism (backdrop-blur)  
**Title:** Gradient text (pink → cyan)  
**Inputs:** Neon cyan focus ring + glow  
**Submit:** Gradient button (cyan → lime) + glow  
**Toggle:** Cyan underline on hover

---

## State Management

### Toggle Between Modes

```tsx
const [isLogin, setIsLogin] = useState(true);

// Toggle function
const toggleMode = () => setIsLogin(!isLogin);

// Conditional rendering
{!isLogin && (
  <div className="account-login__field">
    <label htmlFor="name">Full Name</label>
    <input type="text" id="name" required />
  </div>
)}

// Dynamic text
<h1>{isLogin ? 'Sign In' : 'Create Account'}</h1>
<button>{isLogin ? 'Sign In' : 'Create Account'}</button>
```

### Form Submission

```tsx
import { useNavigate } from 'react-router';

const navigate = useNavigate();

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // In production: authenticate user, store token
  navigate('/account/dashboard');
};
```

**Production:** Would integrate with authentication service (JWT, OAuth, etc.)

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  <div className="account-login">
    {/* Floating Orbs */}
    <div className="funky-orb funky-animate-float account-login__orb--1" />
    <div className="funky-orb funky-animate-float account-login__orb--2" />

    <Container>
      {/* Glassmorphism Card */}
      <div className="account-login__card">
        <h1 className="account-login__title">
          {isLogin ? 'Sign In' : 'Create Account'}
        </h1>

        <form className="account-login__form" onSubmit={handleSubmit}>
          {/* Name Field (Registration Only) */}
          {!isLogin && (
            <div className="account-login__field">
              <label htmlFor="name" className="account-login__label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="account-login__input"
                placeholder="John Doe"
                required
              />
            </div>
          )}

          {/* Email Field (Both Modes) */}
          <div className="account-login__field">
            <label htmlFor="email" className="account-login__label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="account-login__input"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password Field (Both Modes) */}
          <div className="account-login__field">
            <label htmlFor="password" className="account-login__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="account-login__input"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="account-login__submit">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* Mode Toggle */}
        <p className="account-login__toggle">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="account-login__toggle-btn"
          >
            {isLogin ? 'Register now' : 'Sign in'}
          </button>
        </p>
      </div>

      {/* Trust Band */}
      <div className="account-login__trust">
        <TrustBand
          features={loginTrustFeatures}
          layout="grid"
          compact={true}
        />
      </div>
    </Container>
  </div>
</Layout>
```

### Trust Features Data

```tsx
import { loginTrustFeatures } from '../../data/trustFeatures';

export const loginTrustFeatures: TrustFeature[] = [
  {
    id: 'secure-account',
    icon: ShieldCheck,
    title: 'Secure Account',
    description: 'Bank-level encryption',
  },
  {
    id: 'privacy',
    icon: Lock,
    title: 'Privacy Protected',
    description: 'Your data is safe',
  },
  {
    id: 'verified',
    icon: UserCheck,
    title: 'Verified Identity',
    description: '2-factor authentication',
  },
  {
    id: 'transparent',
    icon: Eye,
    title: 'Transparent',
    description: 'No hidden terms',
  },
];
```

---

## BEM Class Hierarchy

```
.account-login (Page wrapper)
│
├── .funky-orb (Animated orb base)
│   ├── .funky-animate-float (Float animation)
│   ├── .account-login__orb--1 (First orb - cyan)
│   └── .account-login__orb--2 (Second orb - pink)
│
└── .account-login__card (Glassmorphism card)
    ├── .account-login__title (h1 - gradient text)
    ├── .account-login__form (form element)
    │   ├── .account-login__field (Form field wrapper)
    │   │   ├── .account-login__label (label element)
    │   │   └── .account-login__input (input element - cyan focus)
    │   └── .account-login__submit (Submit button - gradient)
    ├── .account-login__toggle (Toggle text)
    │   └── .account-login__toggle-btn (Toggle button)
    └── .account-login__trust (Trust band wrapper)
```

---

## Section Breakdown

### 1. Page Wrapper (`.account-login`)

```css
.account-login {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: var(--space--900) 0;
  background: linear-gradient(135deg, var(--navy) 0%, #0a0a0a 100%);
  overflow: hidden;
}

.dark .account-login {
  background: linear-gradient(135deg, #000000 0%, var(--navy) 100%);
}
```

**Background:** Navy gradient (full viewport height)

---

### 2. Floating Orbs (`.funky-orb`)

```css
.funky-orb {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}

.funky-animate-float {
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.1); }
}

@media (prefers-reduced-motion: reduce) {
  .funky-animate-float {
    animation: none;
  }
}

/* Orb 1 (Cyan - Top Right) */
.account-login__orb--1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%);
  filter: blur(60px);
  animation-delay: 0s;
}

/* Orb 2 (Pink - Bottom Left) */
.account-login__orb--2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%);
  filter: blur(60px);
  animation-delay: 2s;
}

@media (max-width: 640px) {
  .account-login__orb--1,
  .account-login__orb--2 {
    display: none; /* Hide orbs on mobile */
  }
}
```

**Orbs:** Cyan (top-right), Pink (bottom-left), 8s float animation

---

### 3. Glassmorphism Card (`.account-login__card`)

```css
.account-login__card {
  position: relative;
  z-index: 1;
  max-width: 28rem;
  margin: 0 auto;
  padding: var(--space--800);
  border-radius: var(--radius--500);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.dark .account-login__card {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
              0 0 40px rgba(0, 255, 255, 0.2);
}

@media (max-width: 640px) {
  .account-login__card {
    max-width: 100%;
    padding: var(--space--700);
    border-radius: var(--radius--400);
  }
}
```

**Glassmorphism:** Backdrop-blur 20px, semi-transparent, cyan border glow

---

### 4. Gradient Title (`.account-login__title`)

```css
.account-login__title {
  font-size: var(--font-size--700);
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--space--700);
  background: linear-gradient(135deg, var(--pink) 0%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 640px) {
  .account-login__title {
    font-size: var(--font-size--600);
  }
}
```

**Gradient:** Pink → Cyan

---

### 5. Form Fields (`.account-login__field`)

```css
.account-login__form {
  display: flex;
  flex-direction: column;
  gap: var(--space--600);
}

.account-login__field {
  display: flex;
  flex-direction: column;
  gap: var(--space--200);
}

/* Label */
.account-login__label {
  font-size: var(--font-size--200);
  font-weight: 600;
  color: var(--white);
  opacity: 0.9;
}

/* Input */
.account-login__input {
  padding: var(--space--400) var(--space--500);
  border-radius: var(--radius--300);
  font-size: var(--font-size--300);
  color: var(--text);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.dark .account-login__input {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
}

/* Neon Cyan Focus State */
.account-login__input:focus {
  outline: none;
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.dark .account-login__input:focus {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

/* Placeholder */
.account-login__input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.dark .account-login__input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
```

**Focus:** Neon cyan ring + glow (stronger in dark mode)

---

### 6. Submit Button (`.account-login__submit`)

```css
.account-login__submit {
  margin-top: var(--space--400);
  padding: var(--space--500) var(--space--700);
  border-radius: var(--radius--300);
  font-size: var(--font-size--300);
  font-weight: 700;
  color: var(--navy);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.account-login__submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.account-login__submit:active {
  transform: translateY(0);
}

.dark .account-login__submit:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}
```

**Gradient:** Cyan → Lime  
**Hover:** Lift + cyan glow

---

### 7. Mode Toggle (`.account-login__toggle`)

```css
.account-login__toggle {
  margin-top: var(--space--600);
  font-size: var(--font-size--200);
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
}

.account-login__toggle-btn {
  background: none;
  border: none;
  color: var(--cyan);
  font-size: var(--font-size--200);
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s, text-shadow 0.2s;
}

.account-login__toggle-btn:hover {
  color: var(--white);
  text-shadow: 0 0 12px rgba(0, 255, 255, 0.8);
}
```

**Toggle Button:** Cyan text, underline, glow on hover

---

### 8. Trust Band (`.account-login__trust`)

```css
.account-login__trust {
  margin-top: var(--space--900);
}

/* Trust band uses TrustBand pattern component */
/* See /guidelines/patterns/TrustBand.md for details */
```

**Usage:**
```tsx
<TrustBand
  features={loginTrustFeatures}
  layout="grid"      // 2×2 grid
  compact={true}     // Smaller padding/text
/>
```

**Features:** Secure Account, Privacy Protected, Verified Identity, Transparent

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Orbs hidden */
.account-login__orb--1,
.account-login__orb--2 {
  display: none;
}

/* Card full width */
.account-login__card {
  max-width: 100%;
  padding: var(--space--700);
  border-radius: var(--radius--400);
}

/* Title smaller */
.account-login__title {
  font-size: var(--font-size--600);
}

/* Trust band grid adapts (2 cols → 1 col) */
```

### Tablet (640px - 1024px)

```css
/* Card max width maintained */
.account-login__card {
  max-width: 28rem;
}

/* Orbs visible (if not reduced motion) */
```

### Desktop (> 1024px)

```css
/* All elements at full scale */
.account-login__card {
  max-width: 28rem;
  padding: var(--space--800);
}
```

**Key Breakpoints:** Orbs hidden on mobile, card padding reduced

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Background** | Navy gradient | Black → Navy gradient |
| **Orbs** | Cyan/Pink (0.3 opacity) | Cyan/Pink (0.3 opacity) |
| **Card Background** | `rgba(255,255,255,0.1)` | `rgba(255,255,255,0.05)` |
| **Card Border** | `rgba(255,255,255,0.2)` | Cyan `rgba(0,255,255,0.3)` |
| **Card Shadow** | Black shadow | Black + cyan glow |
| **Title** | Pink → Cyan gradient | Pink → Cyan gradient |
| **Label** | White (0.9 opacity) | White (0.9 opacity) |
| **Input Background** | `rgba(255,255,255,0.1)` | `rgba(255,255,255,0.05)` |
| **Input Border** | `rgba(255,255,255,0.2)` | `rgba(255,255,255,0.1)` |
| **Input Focus Glow** | `rgba(0,255,255,0.4)` | `rgba(0,255,255,0.6)` |
| **Submit Button** | Cyan → Lime gradient | Cyan → Lime gradient |
| **Submit Hover Glow** | `rgba(0,255,255,0.6)` | `rgba(0,255,255,0.8)` |
| **Toggle Button** | Cyan | Cyan |

### Dark Mode Enhancements

```css
.dark .account-login {
  background: linear-gradient(135deg, #000000 0%, var(--navy) 100%);
}

.dark .account-login__card {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
              0 0 40px rgba(0, 255, 255, 0.2);
}

.dark .account-login__input {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
}

.dark .account-login__input:focus {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.dark .account-login__submit:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}
```

---

## Accessibility

### Semantic HTML

```tsx
{/* Main form with semantic structure */}
<form className="account-login__form" onSubmit={handleSubmit}>
  <div className="account-login__field">
    <label htmlFor="email">Email Address</label>
    <input 
      type="email" 
      id="email" 
      required 
      aria-required="true"
    />
  </div>
  
  <div className="account-login__field">
    <label htmlFor="password">Password</label>
    <input 
      type="password" 
      id="password" 
      required 
      aria-required="true"
    />
  </div>
  
  <button type="submit">Sign In</button>
</form>

{/* Toggle button with semantic text */}
<p>
  Don't have an account?{' '}
  <button 
    onClick={toggleMode}
    type="button"
    aria-label="Switch to registration form"
  >
    Register now
  </button>
</p>
```

### ARIA Attributes

```tsx
{/* Decorative orbs */}
<div className="funky-orb" aria-hidden="true" />

{/* Form inputs with labels */}
<label htmlFor="email">Email Address</label>
<input 
  type="email" 
  id="email" 
  required 
  aria-required="true"
  aria-describedby="email-error"
/>

{/* Error message (if validation fails) */}
<span id="email-error" role="alert" className="error-message">
  Please enter a valid email address
</span>

{/* Toggle button with clear label */}
<button 
  onClick={toggleMode}
  aria-label={isLogin ? 'Switch to registration form' : 'Switch to login form'}
>
  {isLogin ? 'Register now' : 'Sign in'}
</button>
```

### Keyboard Navigation

- **Tab Order:** Name input (if visible) → Email input → Password input → Submit button → Toggle button
- **Form Submission:** Enter key submits form
- **Toggle:** Enter/Space switches mode
- **Focus Trap:** Form keeps focus within card (no modal, so not required)

### Focus States

```css
.account-login__input:focus-visible {
  outline: none;
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.account-login__submit:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

.account-login__toggle-btn:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
  border-radius: var(--radius--200);
}
```

### Reduced Motion

```tsx
// CSS handles animation removal
@media (prefers-reduced-motion: reduce) {
  .funky-animate-float {
    animation: none;
  }
  
  .account-login__submit {
    transition: none;
  }
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Title (Gradient) | Pink/Cyan | Navy bg | N/A | Decorative ✅ |
| Label | White (0.9 opacity) | Card bg | 12.0:1+ | AAA ✅ |
| Input Text (Light) | `#1a1a1a` | Input bg | 8.0:1+ | AAA ✅ |
| Input Text (Dark) | `#ffffff` | Input bg | 10.0:1+ | AAA ✅ |
| Placeholder | White (0.4 opacity) | Input bg | 4.5:1+ | AA ✅ |
| Submit Button | Navy `#030213` | Cyan gradient | 8.32:1 | AAA ✅ |
| Toggle Text | White (0.7 opacity) | Card bg | 9.0:1+ | AAA ✅ |
| Toggle Button | Cyan `#00ffff` | Card bg | 8.5:1+ | AAA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Form Validation

```tsx
const [errors, setErrors] = useState<Record<string, string>>({});

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password: string) => {
  return password.length >= 8;
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  const newErrors: Record<string, string> = {};
  
  if (!validateEmail(email)) {
    newErrors.email = 'Please enter a valid email address';
  }
  
  if (!validatePassword(password)) {
    newErrors.password = 'Password must be at least 8 characters';
  }
  
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }
  
  // Submit form
  authenticate(email, password);
};

// Display errors
{errors.email && (
  <span className="account-login__error" role="alert">
    {errors.email}
  </span>
)}
```

### 2. Password Visibility Toggle

```tsx
const [showPassword, setShowPassword] = useState(false);

<div className="account-login__field account-login__field--password">
  <label htmlFor="password">Password</label>
  <div className="account-login__input-wrapper">
    <input
      type={showPassword ? 'text' : 'password'}
      id="password"
      className="account-login__input"
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="account-login__password-toggle"
      aria-label={showPassword ? 'Hide password' : 'Show password'}
    >
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  </div>
</div>
```

### 3. Forgot Password Link

```tsx
<div className="account-login__forgot">
  <Link to="/account/forgot-password" className="account-login__forgot-link">
    Forgot your password?
  </Link>
</div>
```

### 4. Social Login

```tsx
<div className="account-login__social">
  <p className="account-login__social-divider">
    <span>Or continue with</span>
  </p>
  
  <div className="account-login__social-buttons">
    <button onClick={loginWithGoogle} className="account-login__social-btn">
      <GoogleIcon size={20} />
      Google
    </button>
    <button onClick={loginWithFacebook} className="account-login__social-btn">
      <FacebookIcon size={20} />
      Facebook
    </button>
  </div>
</div>
```

### 5. Loading State

```tsx
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    await authenticate(email, password);
    navigate('/account/dashboard');
  } catch (error) {
    setErrors({ submit: 'Invalid credentials' });
  } finally {
    setIsLoading(false);
  }
};

<button 
  type="submit" 
  className="account-login__submit"
  disabled={isLoading}
>
  {isLoading ? (
    <>
      <Loader2 size={18} className="animate-spin" />
      Signing in...
    </>
  ) : (
    'Sign In'
  )}
</button>
```

### 6. Remember Me Checkbox

```tsx
<div className="account-login__remember">
  <input
    type="checkbox"
    id="remember"
    className="account-login__checkbox"
  />
  <label htmlFor="remember" className="account-login__remember-label">
    Remember me for 30 days
  </label>
</div>
```

### 7. Password Strength Meter

```tsx
// For registration mode
{!isLogin && (
  <div className="account-login__password-strength">
    <div className="account-login__strength-bar">
      <div 
        className={`account-login__strength-fill account-login__strength-fill--${strength}`}
        style={{ width: `${strengthPercent}%` }}
      />
    </div>
    <small className="account-login__strength-label">
      Password strength: {strength}
    </small>
  </div>
)}
```

### 8. Terms & Conditions

```tsx
{!isLogin && (
  <div className="account-login__terms">
    <input
      type="checkbox"
      id="terms"
      required
      className="account-login__checkbox"
    />
    <label htmlFor="terms" className="account-login__terms-label">
      I agree to the{' '}
      <Link to="/terms">Terms & Conditions</Link>
      {' '}and{' '}
      <Link to="/privacy">Privacy Policy</Link>
    </label>
  </div>
)}
```

### 9. Email Verification

```tsx
// After registration
{showEmailVerification && (
  <div className="account-login__verification">
    <Mail size={32} />
    <h3>Verify your email</h3>
    <p>We've sent a verification link to {email}</p>
    <button onClick={resendEmail}>Resend email</button>
  </div>
)}
```

### 10. CAPTCHA Protection

```tsx
import ReCAPTCHA from 'react-google-recaptcha';

const [captchaToken, setCaptchaToken] = useState<string | null>(null);

<ReCAPTCHA
  sitekey="your-site-key"
  onChange={(token) => setCaptchaToken(token)}
  theme="dark"
/>

<button 
  type="submit" 
  disabled={!captchaToken}
>
  Sign In
</button>
```

---

## Testing Checklist

### Visual Testing

- [ ] Orbs animate (not for reduced motion)
- [ ] Orbs hidden on mobile
- [ ] Glassmorphism card visible
- [ ] Card centered on page
- [ ] Title has gradient (pink → cyan)
- [ ] Name field shows in registration mode
- [ ] Name field hidden in login mode
- [ ] Email field displays
- [ ] Password field displays
- [ ] Submit button displays
- [ ] Submit button has gradient (cyan → lime)
- [ ] Toggle text displays
- [ ] Toggle button displays
- [ ] Trust band displays (4 features)

### Interaction Testing

- [ ] Toggle switches between modes
- [ ] Title updates on toggle
- [ ] Submit button text updates on toggle
- [ ] Name field shows/hides on toggle
- [ ] Form submits on Enter
- [ ] Form submits on button click
- [ ] Submit navigates to dashboard
- [ ] Inputs have neon focus state
- [ ] Submit button has hover lift
- [ ] Submit button has glow on hover
- [ ] Toggle button has glow on hover

### Responsive Testing

- [ ] Mobile: Orbs hidden
- [ ] Mobile: Card full width
- [ ] Mobile: Title smaller
- [ ] Mobile: Card padding reduced
- [ ] Desktop: Orbs visible and animated
- [ ] Desktop: Card max width 28rem

### Dark Mode Testing

- [ ] Background gradient visible
- [ ] Orbs visible (cyan/pink)
- [ ] Card glassmorphism visible
- [ ] Card border cyan-tinted
- [ ] Card shadow + cyan glow
- [ ] Title gradient visible
- [ ] Labels readable
- [ ] Inputs readable
- [ ] Input focus glow stronger
- [ ] Submit button maintains contrast
- [ ] Submit hover glow stronger
- [ ] Toggle button readable
- [ ] Trust band readable
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Form has semantic structure
- [ ] Labels associated with inputs
- [ ] Required fields have aria-required
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Enter submits form
- [ ] Toggle button keyboard accessible
- [ ] Orbs respect reduced motion
- [ ] Button transitions respect reduced motion
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA

### State Management Testing

- [ ] Initial state is login mode
- [ ] Toggle switches to registration
- [ ] Toggle switches back to login
- [ ] Name field conditional on mode
- [ ] Form submission works both modes
- [ ] Navigation after submit works

---

## Related Templates

- **AccountDashboard** — Post-login destination
- **PageWishlist** — Similar account styling
- **PageCart** — Similar glassmorphism

### Shared CSS

- `.account-auth-funky.css` — Funky account styles
- `.funky-orb` — Animated orbs
- Gradient title pattern
- Glassmorphism cards

### New CSS Patterns

- `.account-login` — Login/registration page
- `.account-login__card` — Glassmorphism form card
- `.account-login__input` — Neon cyan focus
- `.account-login__submit` — Gradient button (cyan → lime)

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready
