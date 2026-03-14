# Avatar Block Component

**Component:** `Avatar`, `AvatarImage`, `AvatarFallback`  
**Category:** Display Blocks  
**Priority:** P2 (Medium Priority)  
**Status:** ✅ Active  
**Version:** 1.0.0  
**Last Updated:** 2026-03-14

---

## Overview

The **Avatar** component displays user profile images with automatic fallback to initials when images fail to load. It uses a compound component pattern with three sub-components that work together to provide a robust user avatar system with loading states, error handling, and retro glassmorphism styling.

**Common use cases:**
- User profile pictures
- Comment author avatars
- Team member displays
- Customer testimonials
- Review author images
- Account dashboard headers
- Chat/messaging interfaces

---

## Component API

### Avatar (Root Container)

```typescript
interface AvatarProps {
  className?: string;        // Additional CSS classes
  children?: React.ReactNode; // AvatarImage + AvatarFallback
  id?: string;               // HTML id attribute
  style?: React.CSSProperties; // Additional inline styles
}
```

### AvatarImage

```typescript
interface AvatarImageProps {
  className?: string;
  src?: string;              // Image URL
  srcSet?: string;          // Responsive image sources
  alt?: string;             // Alt text (required for accessibility)
  onLoadingStatusChange?: (status: AvatarStatus) => void;
  id?: string;
  style?: React.CSSProperties;
}
```

### AvatarFallback

```typescript
interface AvatarFallbackProps {
  className?: string;
  delayMs?: number;          // Delay before showing fallback (default: 0)
  children?: React.ReactNode; // Initials or icon
  id?: string;
  style?: React.CSSProperties;
}
```

### AvatarStatus Type

```typescript
type AvatarStatus = 'loading' | 'loaded' | 'error';
```

---

## Implementation

### Basic Usage

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/blocks/display/Avatar';

// Simple avatar with fallback initials
<Avatar>
  <AvatarImage 
    src="/user-profile.jpg" 
    alt="Sarah Johnson" 
  />
  <AvatarFallback>SJ</AvatarFallback>
</Avatar>
```

### Sizes

```tsx
// Small (30x30px)
<Avatar className="wp-block-avatar--sm">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>U</AvatarFallback>
</Avatar>

// Medium/Default (40x40px)
<Avatar>
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>U</AvatarFallback>
</Avatar>

// Large (60x60px)
<Avatar className="wp-block-avatar--lg">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>U</AvatarFallback>
</Avatar>
```

### Fallback Initials Helper

```tsx
// Helper function to get initials from name
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2); // Max 2 characters
};

// Usage
const user = { name: 'Sarah Johnson', avatar: '/sarah.jpg' };

<Avatar>
  <AvatarImage src={user.avatar} alt={user.name} />
  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
</Avatar>
// Displays "SJ" if image fails to load
```

### Loading State with Delay

```tsx
// Show spinner for 300ms before showing fallback
<Avatar>
  <AvatarImage src="/user.jpg" alt="User Name" />
  <AvatarFallback delayMs={300}>
    <Spinner size={16} /> {/* Show loading spinner */}
  </AvatarFallback>
</Avatar>
```

### Responsive Images

```tsx
// Use srcSet for different screen densities
<Avatar>
  <AvatarImage
    src="/avatar-1x.jpg"
    srcSet="/avatar-1x.jpg 1x, /avatar-2x.jpg 2x"
    alt="User Name"
  />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

---

## Common Patterns

### Pattern 1: User Profile Header

```tsx
const UserProfileHeader = ({ user }) => (
  <div className="user-profile-header">
    <Avatar className="wp-block-avatar--lg">
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
    </Avatar>
    <div className="user-info">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  </div>
);
```

### Pattern 2: Comment Thread

```tsx
const Comment = ({ comment }) => (
  <div className="comment">
    <Avatar className="wp-block-avatar--sm">
      <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
      <AvatarFallback>{getInitials(comment.author.name)}</AvatarFallback>
    </Avatar>
    <div className="comment-content">
      <div className="comment-author">{comment.author.name}</div>
      <p>{comment.text}</p>
    </div>
  </div>
);
```

### Pattern 3: Team Grid

```tsx
const TeamGrid = ({ members }) => (
  <div className="team-grid">
    {members.map((member) => (
      <div key={member.id} className="team-member">
        <Avatar className="wp-block-avatar--lg">
          <AvatarImage src={member.photo} alt={member.name} />
          <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
        </Avatar>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    ))}
  </div>
);
```

### Pattern 4: Online Status Indicator

```tsx
const AvatarWithStatus = ({ user, isOnline }) => (
  <div className="avatar-with-status">
    <Avatar>
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
    </Avatar>
    <span className={`status-indicator ${isOnline ? 'online' : 'offline'}`} />
  </div>
);

// CSS for status indicator
.avatar-with-status {
  position: relative;
  display: inline-block;
}

.status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--color-bg);
}

.status-indicator.online {
  background-color: var(--retro-color-neon-green);
  box-shadow: 0 0 8px var(--retro-color-neon-green);
}

.status-indicator.offline {
  background-color: var(--color-ink);
}
```

### Pattern 5: Loading State with Callback

```tsx
const UserAvatar = ({ user }) => {
  const [imageStatus, setImageStatus] = useState<AvatarStatus>('loading');

  return (
    <div>
      <Avatar>
        <AvatarImage
          src={user.avatar}
          alt={user.name}
          onLoadingStatusChange={setImageStatus}
        />
        <AvatarFallback delayMs={200}>
          {imageStatus === 'loading' ? (
            <Spinner size={16} />
          ) : (
            getInitials(user.name)
          )}
        </AvatarFallback>
      </Avatar>
      {imageStatus === 'error' && (
        <small className="text-muted">Image failed to load</small>
      )}
    </div>
  );
};
```

---

## BEM Class Structure

### Component Classes

```html
<!-- Root container -->
<div class="wp-block-avatar funky-avatar-container">
  <!-- Image (when loaded) -->
  <img class="wp-block-avatar__image funky-avatar-img" src="..." alt="..." />
  
  <!-- Fallback (when error or loading) -->
  <div class="wp-block-avatar__fallback funky-avatar-fallback">
    SJ
  </div>
</div>
```

### Size Modifiers

```html
<!-- Small -->
<div class="wp-block-avatar wp-block-avatar--sm">

<!-- Default (no modifier) -->
<div class="wp-block-avatar">

<!-- Large -->
<div class="wp-block-avatar wp-block-avatar--lg">
```

### Class Naming Convention

| Class | Purpose | Applied To |
|-------|---------|------------|
| `wp-block-avatar` | Root container (WordPress standard) | Container `<div>` |
| `funky-avatar-container` | Retro theme hook | Container `<div>` |
| `wp-block-avatar--sm` | Small size (30px) | Container `<div>` |
| `wp-block-avatar--lg` | Large size (60px) | Container `<div>` |
| `wp-block-avatar__image` | Profile image | `<img>` element |
| `funky-avatar-img` | Retro theme image hook | `<img>` element |
| `wp-block-avatar__fallback` | Initials/fallback container | Fallback `<div>` |
| `funky-avatar-fallback` | Retro theme fallback hook | Fallback `<div>` |

---

## Styling

### CSS Architecture

**File:** `/src/styles/blocks/display/avatar.css`

```css
/* ========================================
   AVATAR BLOCK
   ======================================== */

.wp-block-avatar {
  position: relative;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: var(--wp--preset--border-radius--full, 9999px);
  width: var(--wp--preset--spacing--40, 40px);
  height: var(--wp--preset--spacing--40, 40px);
  
  /* Funky Redesign: Glassmorphism base */
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform var(--wp--preset--transition--base) ease, 
              box-shadow var(--wp--preset--transition--base) ease;
}

.wp-block-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--wp--preset--color--neon-cyan, #00ffff);
  border-color: var(--wp--preset--color--neon-cyan, #00ffff);
}

/* Dark mode */
.dark .wp-block-avatar {
  background-color: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Size variants */
.wp-block-avatar--sm {
  width: var(--wp--preset--spacing--30, 30px);
  height: var(--wp--preset--spacing--30, 30px);
}

.wp-block-avatar--lg {
  width: var(--wp--preset--spacing--60, 60px);
  height: var(--wp--preset--spacing--60, 60px);
}

/* Image */
.wp-block-avatar__image {
  aspect-ratio: 1/1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
}

/* Fallback initials */
.wp-block-avatar__fallback {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  font-size: var(--wp--preset--font-size--100, 0.75rem);
  font-weight: var(--wp--preset--font-weight--bold, 700);
  text-transform: uppercase;
  
  /* Funky Redesign: Neon Gradient fallback */
  background: linear-gradient(
    135deg, 
    var(--wp--preset--color--neon-pink, #ff00ff), 
    var(--wp--preset--color--deep-purple, #2d0059)
  );
  color: var(--wp--preset--color--white);
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
```

### Retro Theme Features

**Light Mode:**
- Glassmorphism background (semi-transparent white)
- Subtle backdrop blur effect
- Soft drop shadow
- Neon cyan glow on hover

**Dark Mode:**
- Darker glassmorphism (semi-transparent black)
- Reduced border opacity
- Maintains neon glow effects

**Fallback Gradient:**
- Neon pink to deep purple gradient
- White text with shadow for readability
- Bold uppercase initials

---

## Dark Mode Support

### Automatic Adaptation

```tsx
// Component automatically adapts to dark mode via CSS
<Avatar>
  <AvatarImage src={user.avatar} alt={user.name} />
  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
</Avatar>
```

### Dark Mode Styling

```css
/* Light mode - white glassmorphism */
.wp-block-avatar {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Dark mode - black glassmorphism */
.dark .wp-block-avatar {
  background-color: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Hover neon glow (both modes) */
.wp-block-avatar:hover {
  box-shadow: 0 0 15px var(--retro-color-neon-cyan);
}
```

---

## Accessibility

### Alt Text (Required)

```tsx
// ✅ CORRECT - Descriptive alt text
<Avatar>
  <AvatarImage src="/sarah.jpg" alt="Sarah Johnson" />
  <AvatarFallback>SJ</AvatarFallback>
</Avatar>

// ❌ WRONG - Missing or poor alt text
<Avatar>
  <AvatarImage src="/user.jpg" alt="avatar" />
  <AvatarFallback>U</AvatarFallback>
</Avatar>
```

### Semantic HTML

```tsx
// Use semantic markup for user profiles
<div className="user-card" role="article">
  <Avatar>
    <AvatarImage src={user.avatar} alt={user.name} />
    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
  </Avatar>
  <h3>{user.name}</h3>
  <p>{user.bio}</p>
</div>
```

### Screen Reader Support

```tsx
// Provide context for screen readers
<div className="comment">
  <Avatar aria-label={`${author.name}'s profile picture`}>
    <AvatarImage src={author.avatar} alt={author.name} />
    <AvatarFallback aria-hidden="true">
      {getInitials(author.name)}
    </AvatarFallback>
  </Avatar>
  <div className="comment-content">
    <span className="sr-only">{author.name} says:</span>
    <p>{comment.text}</p>
  </div>
</div>
```

---

## Responsive Behavior

### Adaptive Sizing

```css
/* Smaller avatars on mobile */
@media (max-width: 767px) {
  .wp-block-avatar--responsive {
    width: 32px;
    height: 32px;
  }
}

/* Larger avatars on desktop */
@media (min-width: 768px) {
  .wp-block-avatar--responsive {
    width: 48px;
    height: 48px;
  }
}
```

### Mobile Optimization

```tsx
// Conditional sizing based on screen size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

const ResponsiveAvatar = ({ user }) => {
  const isMobile = useIsMobile();
  const sizeClass = isMobile ? 'wp-block-avatar--sm' : '';
  
  return (
    <Avatar className={sizeClass}>
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
    </Avatar>
  );
};
```

---

## Performance Optimization

### Lazy Loading Images

```tsx
// Use loading="lazy" for below-fold avatars
<Avatar>
  <AvatarImage 
    src={user.avatar} 
    alt={user.name}
    loading="lazy"
  />
  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
</Avatar>
```

### Image Optimization

```tsx
// Use optimized image formats and sizes
const getOptimizedAvatar = (url: string, size: number = 40) => {
  // Resize to exact dimensions needed
  return `${url}?w=${size}&h=${size}&fit=crop&auto=format`;
};

<Avatar>
  <AvatarImage 
    src={getOptimizedAvatar(user.avatar, 40)}
    alt={user.name}
  />
  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
</Avatar>
```

### Memoization for Lists

```tsx
// Memoize avatar component for large lists
const MemoizedAvatar = React.memo(({ user }) => (
  <Avatar>
    <AvatarImage src={user.avatar} alt={user.name} />
    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
  </Avatar>
));

// Use in list
{users.map(user => (
  <MemoizedAvatar key={user.id} user={user} />
))}
```

---

## Edge Cases & Troubleshooting

### Issue 1: Image Not Loading

**Problem:** Image fails to load silently

**Solution:**
```tsx
// Use onLoadingStatusChange to track errors
const [status, setStatus] = useState<AvatarStatus>('loading');

<Avatar>
  <AvatarImage 
    src={user.avatar} 
    alt={user.name}
    onLoadingStatusChange={setStatus}
  />
  <AvatarFallback>
    {status === 'error' ? getInitials(user.name) : <Spinner />}
  </AvatarFallback>
</Avatar>

{status === 'error' && (
  <p className="error-message">Unable to load profile image</p>
)}
```

### Issue 2: Fallback Flashing Briefly

**Problem:** Fallback shows before image loads

**Solution:**
```tsx
// Add delay to prevent flash
<Avatar>
  <AvatarImage src={user.avatar} alt={user.name} />
  <AvatarFallback delayMs={300}>
    {getInitials(user.name)}
  </AvatarFallback>
</Avatar>
```

### Issue 3: Long Names Breaking Layout

**Problem:** Three+ word names create 3+ letter initials

**Solution:**
```tsx
// Limit to 2 characters maximum
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2); // Always max 2 characters
};
```

### Issue 4: Special Characters in Names

**Problem:** Names with accents or symbols

**Solution:**
```tsx
const getInitials = (name: string): string => {
  return name
    .normalize('NFD') // Decompose accents
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// "José María" → "JM" (not "JM")
```

---

## Testing

### Visual Testing Checklist

- [ ] **Small size (30px)** - Readable initials
- [ ] **Medium size (40px)** - Default, clear image
- [ ] **Large size (60px)** - High quality image
- [ ] **Image loads** - Displays correctly
- [ ] **Image fails** - Fallback shows initials
- [ ] **Hover state** - Neon glow appears
- [ ] **Dark mode** - Glassmorphism adapts
- [ ] **Long names** - Max 2 initials
- [ ] **Responsive** - Scales on mobile

### Accessibility Testing

- [ ] Images have descriptive alt text
- [ ] Fallback initials not duplicated for screen readers
- [ ] Focus states visible (if interactive)
- [ ] Color contrast meets WCAG AA (fallback text)
- [ ] Works without images (text-only browsers)

### Performance Testing

- [ ] Images lazy load below fold
- [ ] Optimized image sizes used
- [ ] No layout shift when image loads
- [ ] Fast fallback render
- [ ] Memoization works in large lists

---

## Browser Compatibility

### Supported Browsers

- ✅ Chrome/Edge 90+ (Full support with backdrop-filter)
- ✅ Firefox 88+ (Full support)
- ✅ Safari 14+ (Full support with -webkit prefix)
- ✅ iOS Safari 14+ (Full support)
- ✅ Android Chrome 90+ (Full support)

### Known Issues

**Safari < 14:** Backdrop-filter may not work (graceful degradation to solid background)

---

## Migration Notes

### From Inline Images

**Before:**
```tsx
// Plain img tag
<img src="/user.jpg" alt="User" className="avatar-image" />
```

**After:**
```tsx
// Avatar component with fallback
<Avatar>
  <AvatarImage src="/user.jpg" alt="User Name" />
  <AvatarFallback>{getInitials('User Name')}</AvatarFallback>
</Avatar>
```

### From Other Avatar Libraries

**Radix UI Avatar:**
```tsx
// Before (Radix)
<Avatar.Root>
  <Avatar.Image src="/user.jpg" />
  <Avatar.Fallback>UN</Avatar.Fallback>
</Avatar.Root>

// After (PlayPocket)
<Avatar>
  <AvatarImage src="/user.jpg" alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

---

## Related Components

- **AspectRatio** - For maintaining avatar aspect ratios in grids
- **Skeleton** - Loading placeholder for avatars
- **Badge** - Status indicators or notification counts
- **Card** - Container for user profile cards
- **Tooltip** - Hover info for avatar (username, status)

---

## References

- **WordPress Avatar Block:** [wordpress.org/avatar](https://developer.wordpress.org/block-editor/)
- **Radix UI Avatar:** Inspiration for compound component pattern
- **WCAG Image Guidelines:** Alt text requirements
- **Component Location:** `/src/app/components/blocks/display/Avatar.tsx`
- **Styles Location:** `/src/styles/blocks/display/avatar.css`
- **UI Export:** `/src/app/components/blocks/ui/avatar.tsx`

---

**Version:** 1.0.0  
**Last Updated:** 2026-03-14  
**Status:** ✅ Complete  
**Category:** P2 Display Blocks (Medium Priority)
