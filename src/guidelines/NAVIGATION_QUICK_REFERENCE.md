# Navigation Quick Reference - v2.10

**Version:** 2.10.0  
**Last Updated:** March 12, 2026  
**Purpose:** Quick lookup for navigation architecture standards

---

## 📋 TL;DR (Too Long; Didn't Read)

### **Navigation Philosophy (v2.10)**
> **"Simplify navigation, elevate discovery"**

- **Header:** 5 essential links (SHOP, DEALS, COMMUNITY, ABOUT, ALL PAGES)
- **Sitemap:** Primary discovery tool (150+ routes, real-time search)
- **Discovery CTAs:** Homepage + 404 page banners
- **NO mega menus**
- **ALL PAGES link → sitemap**

---

## 🗺️ Header Navigation

### **Essential Links (5 Maximum)**

```tsx
const navItems: NavItem[] = [
  { id: 'shop', label: 'SHOP', to: '/shop' },
  { id: 'deals', label: 'DEALS', to: '/promotions/flash-sale' },
  { id: 'community', label: 'COMMUNITY', to: '/community' },
  { id: 'about', label: 'ABOUT', to: '/about' },
  { id: 'sitemap', label: 'ALL PAGES', to: '/sitemap' }, // ⭐ Required
];
```

### **Rules**
- ✅ Maximum 5 links
- ✅ One MUST direct to sitemap
- ✅ Mobile mirrors desktop
- ❌ NO mega menus
- ❌ NO complex dropdowns

---

## 🔍 Sitemap Component

### **Required Features**

| Feature | Status | Description |
|---------|--------|-------------|
| Real-time search | ✅ Required | Instant filtering with autocomplete |
| Expand/Collapse All | ✅ Required | User-friendly category browsing |
| Statistics display | ✅ Required | Total/static/dynamic/sections |
| Performance optimized | ✅ Required | useMemo, useCallback |
| Dark mode support | ✅ Required | Full contrast compliance |
| WCAG AA 2.2 | ✅ Required | Keyboard nav, ARIA |

### **Component Structure**

```tsx
<div className="sitemap-container">
  {/* Search bar */}
  <input type="search" placeholder="Search pages..." />
  
  {/* Expand/Collapse controls */}
  <button onClick={expandAll}>Expand All</button>
  <button onClick={collapseAll}>Collapse All</button>
  
  {/* Statistics */}
  <div>Total: 150+ routes (120 static, 30+ dynamic, 15 sections)</div>
  
  {/* Route sections (15+) */}
  {filteredSections.map(section => (
    <section key={section.title}>
      <h2>{section.title}</h2>
      <ul>
        {section.routes.map(route => (
          <li key={route.path}>
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  ))}
</div>
```

---

## 📍 Discovery CTAs

### **Homepage CTA** (Before Footer)

```tsx
<div className="retro-sitemap-cta">
  <div className="retro-sitemap-cta__card">
    <MapTrifold size={40} weight="bold" className="retro-sitemap-cta__icon" />
    <div className="retro-sitemap-cta__content">
      <h2 className="retro-sitemap-cta__title">
        EXPLORE ALL PAGES
      </h2>
      <p className="retro-sitemap-cta__desc">
        Browse our complete sitemap with 150+ pages organized by category.
      </p>
    </div>
    <Link to="/sitemap" className="retro-button retro-button--primary">
      VIEW SITEMAP <ArrowRight size={18} weight="bold" />
    </Link>
  </div>
</div>
```

### **404 Page CTA**

```tsx
<div className="retro-sitemap-cta">
  <div className="retro-sitemap-cta__card">
    <MapTrifold size={40} weight="bold" className="retro-sitemap-cta__icon" />
    <div className="retro-sitemap-cta__content">
      <h2 className="retro-sitemap-cta__title">
        LOST? CHECK THE MAP!
      </h2>
      <p className="retro-sitemap-cta__desc">
        Use search to find exactly what you need.
      </p>
    </div>
    <Link to="/sitemap" className="retro-button retro-button--primary">
      VIEW SITEMAP <ArrowRight size={18} weight="bold" />
    </Link>
  </div>
</div>
```

**CSS:** `/src/styles/sections/front-page-funky.css` (retro-sitemap-cta)

---

## ⚡ Performance Requirements

### **React Hooks - Correct Dependencies**

#### **✅ CORRECT Patterns**

```tsx
// useMemo with all dependencies
const filteredSections = useMemo(() => {
  return routeSections.map(section => ({
    ...section,
    routes: section.routes.filter(route =>
      route.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));
}, [searchTerm, routeSections]); // ✅ Both dependencies declared

// useCallback with functional setState (no state dependency)
const toggleSection = useCallback((title: string) => {
  setExpandedSections((prev) => {
    if (prev.includes(title)) {
      return prev.filter(t => t !== title);
    }
    return [...prev, title];
  });
}, []); // ✅ No dependencies needed (functional setState)

// useCallback with all closures listed
const expandAll = useCallback(() => {
  const allTitles = routeSections.map(s => s.title);
  setExpandedSections(allTitles);
}, [routeSections]); // ✅ routeSections in dependencies
```

#### **❌ WRONG Patterns**

```tsx
// Missing dependency (stale closure)
const stats = useMemo(() => {
  return routeSections.reduce((sum, s) => sum + s.routes.length, 0);
}, []); // ❌ Missing routeSections!

// Non-functional setState (requires state dependency)
const toggle = useCallback(() => {
  setExpanded(!expanded);
}, []); // ❌ Missing expanded in dependencies!

// Missing closure in dependencies
const handler = useCallback(() => {
  doSomething(prop);
}, []); // ❌ Missing prop in dependencies!
```

### **Hook Dependency Checklist**

- [ ] All variables from outer scope listed in dependencies
- [ ] Use functional setState to avoid state dependencies
- [ ] Memoize expensive operations (filtering, mapping large arrays)
- [ ] Import React.memo for future optimization
- [ ] Audit all hooks before deployment

---

## 🎯 User Journeys

### **Journey 1: New User Landing**

1. User arrives on homepage
2. Scrolls down, sees "EXPLORE ALL PAGES" banner
3. Clicks "VIEW SITEMAP"
4. Uses search or browses categories
5. Finds desired page
6. Navigates successfully

### **Journey 2: Lost User (404)**

1. User hits broken link → 404 page
2. Sees "LOST? CHECK THE MAP!" banner
3. Clicks "VIEW SITEMAP"
4. Searches for correct page
5. Navigates successfully

### **Journey 3: Power User**

1. User sees "ALL PAGES" in header
2. One click → sitemap
3. Bookmarks sitemap for future use
4. Uses search for instant results
5. Efficient navigation

---

## 📊 Impact Metrics (v2.10)

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Header nav links | 30+ | 5 | **-83%** |
| Code lines (header) | ~400 | ~200 | **-50%** |
| Sitemap routes | ~100 | 150+ | **+50%** |
| Sitemap features | 3 | 7 | **+133%** |
| Discovery CTAs | 0 | 2 | **New** |
| Iframe errors | 2 | 0 | **-100%** |
| Hook issues | 2 | 0 | **-100%** |

---

## 🛡️ Quality Standards

### **WCAG AA 2.2 Compliance**

```tsx
// ✅ Keyboard navigation
<button
  onClick={toggleSection}
  onKeyDown={(e) => e.key === 'Enter' && toggleSection()}
  aria-expanded={isExpanded}
  aria-controls={`section-${id}`}
>

// ✅ ARIA labels
<input
  type="search"
  aria-label="Search all pages"
  placeholder="Search pages..."
/>

// ✅ Focus management
<Link
  to={route.path}
  className="focus:ring-2 focus:ring-retro-focus focus:outline-none"
>
```

### **Dark Mode Support**

```css
/* Light mode */
.sitemap-container {
  background: var(--retro-bg-primary);
  color: var(--retro-text-primary);
}

/* Dark mode (automatic via CSS variables) */
.dark .sitemap-container {
  background: var(--retro-bg-primary); /* Already updated */
  color: var(--retro-text-primary); /* Already updated */
}
```

---

## 📁 File Locations

### **Components**

| File | Location | Purpose |
|------|----------|---------|
| Sitemap | `/src/app/components/pages/Sitemap.tsx` | Main sitemap component |
| HeaderRetroPattern | `/src/app/components/patterns/HeaderRetroPattern.tsx` | Simplified header (5 links) |
| FrontPageRetro | `/src/app/components/templates/FrontPageRetro.tsx` | Homepage with sitemap CTA |
| PageNotFoundRetro | `/src/app/components/templates/PageNotFoundRetro.tsx` | 404 with sitemap CTA |

### **CSS**

| File | Location | Purpose |
|------|----------|---------|
| Sitemap styles | `/src/styles/sections/sitemap-retro.css` | Sitemap component styles |
| CTA styles | `/src/styles/sections/front-page-funky.css` | Sitemap CTA banner styles |
| 404 styles | `/src/styles/sections/404-retro.css` | Complete 404 page styles |
| Globals | `/styles/globals.css` | Import chain entry point |

### **Documentation**

| File | Location | Purpose |
|------|----------|---------|
| Guidelines | `/guidelines/Guidelines.md` (Section 10.4) | Complete navigation standards |
| Implementation | `/NAVIGATION_STREAMLINING_COMPLETE.md` | Project summary |
| Status | `/PROJECT_STATUS_v2.10.md` | Current status report |

---

## 🚀 Quick Implementation Checklist

### **Adding Sitemap Link to Header**

- [ ] Add "ALL PAGES" link to nav items array
- [ ] Set `to="/sitemap"` route
- [ ] Test navigation works
- [ ] Verify mobile navigation includes link
- [ ] Check dark mode styling

### **Creating Discovery CTA**

- [ ] Import MapTrifold and ArrowRight icons
- [ ] Use `.retro-sitemap-cta` BEM classes
- [ ] Add descriptive title and text
- [ ] Link to `/sitemap` route
- [ ] Test responsive layout
- [ ] Verify dark mode support

### **Optimizing Sitemap Performance**

- [ ] Wrap expensive operations in useMemo
- [ ] Use functional setState in useCallback
- [ ] Declare all hook dependencies
- [ ] Import React.memo
- [ ] Audit all 8 hooks
- [ ] Test for iframe errors

---

## 🔍 Troubleshooting

### **Problem: Sitemap not updating**
**Solution:** Check useMemo dependencies include `routeSections`

### **Problem: Iframe communication errors**
**Solution:** Verify all useCallback dependencies are correct

### **Problem: Expand All not working**
**Solution:** Ensure `routeSections` is in dependency array

### **Problem: Dark mode broken**
**Solution:** Verify CSS uses CSS variables, not hardcoded colors

### **Problem: Search not filtering**
**Solution:** Check `searchTerm` is in useMemo dependencies

---

## 📖 Related Documentation

### **Complete Standards**
- [Guidelines v2.10 - Section 10.4](/guidelines/Guidelines.md#104-navigation-architecture--sitemap-centric-design)

### **Implementation Details**
- [Navigation Streamlining Complete](/NAVIGATION_STREAMLINING_COMPLETE.md)
- [Project Status v2.10](/PROJECT_STATUS_v2.10.md)
- [Release Summary](/V2.10_RELEASE_SUMMARY.md)

### **Version History**
- [CHANGELOG v2.10](/CHANGELOG.md#210---2026-03-12)
- [README v2.10](/README.md#-whats-new-in-v2100)

---

## ✅ Pre-Deployment Checklist

**Before deploying navigation changes:**

### **Navigation**
- [ ] Header has maximum 5 links
- [ ] One link directs to sitemap
- [ ] Mobile navigation mirrors desktop
- [ ] All links functional
- [ ] No mega menus present

### **Sitemap**
- [ ] Real-time search works
- [ ] Expand/Collapse All works
- [ ] Statistics accurate
- [ ] 150+ routes organized
- [ ] All sections labeled

### **Performance**
- [ ] All hooks have correct dependencies
- [ ] No console errors
- [ ] No iframe errors
- [ ] Stable re-renders
- [ ] React.memo imported

### **Accessibility**
- [ ] Keyboard navigation works
- [ ] ARIA labels present
- [ ] Focus states visible
- [ ] WCAG AA compliant
- [ ] Screen reader tested

### **Styling**
- [ ] Dark mode works
- [ ] Responsive layouts
- [ ] CTAs render correctly
- [ ] Icons display properly
- [ ] Animations performant

---

**Quick Reference Version:** 2.10.0  
**Last Updated:** March 12, 2026  
**Status:** ✅ Production Ready

**For complete details, see [Guidelines v2.10 - Section 10.4](/guidelines/Guidelines.md#104-navigation-architecture--sitemap-centric-design)**
