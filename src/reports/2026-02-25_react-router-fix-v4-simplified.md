# React Router v7 Error Resolution (v4 - Simplified) — In Progress

**Date:** 2026-02-25  
**Priority:** P0 (Critical)  
**Status:** 🔄 IN PROGRESS  
**Attempt:** 4th fix

---

## Changes Made (v4)

### 1. Removed JSX from Route Config

**Problem:** JSX inside the error fallback component might be causing parsing issues

**Solution:** Replaced all JSX with `React.createElement`:

```typescript
// BEFORE (v3)
return {
  Component: () => (
    <div className="wp-app-fallback">
      <h2 className="wp-app-fallback__title">Page could not load</h2>
      <p className="wp-app-fallback__text">{err?.message || 'Unknown import error'}</p>
      <Link to="/" className="wp-app-fallback__btn--primary">Back to home</Link>
    </div>
  ),
};

// AFTER (v4)
const ErrorFallback = () => React.createElement(
  'div',
  { className: 'wp-app-fallback' },
  React.createElement('h2', { className: 'wp-app-fallback__title' }, 'Page could not load'),
  React.createElement('p', { className: 'wp-app-fallback__text' }, err?.message || 'Unknown import error'),
  React.createElement(Link, { to: '/', className: 'wp-app-fallback__btn--primary' }, 'Back to home')
);
return { Component: ErrorFallback };
```

### 2. Simplified Object Creation

**Problem:** Ternary operator with spread operator might be causing issues

**Solution:** Used explicit if/else with direct object literals:

```typescript
// BEFORE (v3)
const routeConfig = routePath 
  ? { path: routePath, lazy: lazyLoader }
  : { lazy: lazyLoader };
return [routeConfig];

// AFTER (v4)
if (routePath) {
  return [{ path: routePath, lazy: lazyLoader }];
}
return [{ lazy: lazyLoader }];
```

---

## Complete `lazyPage` Function (v4)

```typescript
function lazyPage(importFn: () => Promise<any>, exportName?: string, routePath?: string) {
  const lazyLoader = async () => {
    try {
      const mod = await importFn();
      let Comp;
      
      if (exportName) {
        Comp = mod[exportName];
        if (!Comp) {
          throw new Error(`Named export "${exportName}" not found in module`);
        }
      } else {
        Comp = mod.default;
        if (!Comp) {
          const componentKey = Object.keys(mod).find(
            k => typeof mod[k] === 'function' && /^[A-Z]/.test(k)
          );
          if (componentKey) {
            Comp = mod[componentKey];
          } else {
            throw new Error('No default or named export found in module');
          }
        }
      }
      
      if (!Comp || typeof Comp !== 'function') {
        throw new Error(`Component is not a valid function (type: ${typeof Comp})`);
      }
      
      return { Component: Comp };
    } catch (err: any) {
      console.error(`[Route Error] Failed to load ${routePath || 'route'}:`, err);
      const ErrorFallback = () => React.createElement(
        'div',
        { className: 'wp-app-fallback' },
        React.createElement('h2', { className: 'wp-app-fallback__title' }, 'Page could not load'),
        React.createElement('p', { className: 'wp-app-fallback__text' }, err?.message || 'Unknown import error'),
        React.createElement(Link, { to: '/', className: 'wp-app-fallback__btn--primary' }, 'Back to home')
      );
      return { Component: ErrorFallback };
    }
  };
  
  if (routePath) {
    return [{ path: routePath, lazy: lazyLoader }];
  }
  return [{ lazy: lazyLoader }];
}
```

---

## Syntax Simplifications

1. ✅ No JSX in route config (uses `React.createElement`)
2. ✅ No ternary operators with object literals
3. ✅ No spread operators in conditionals
4. ✅ Explicit if/else returns
5. ✅ Simple object literals only

---

## Testing Status

⏳ Awaiting verification...

---

**File Modified:** `/App.tsx` (lines 91-139)  
**Previous Versions:** v1, v2, v3 (all incomplete)
