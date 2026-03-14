/**
 * Section Patterns Index
 * 
 * Exports all section pattern components for easy importing.
 * All patterns use WordPress FSE Group block architecture.
 * 
 * **Version:** 3.0 (FSE Aligned)
 * **Total Patterns:** 8
 * **WordPress Block:** core/group with style variations
 * 
 * @example
 * ```tsx
 * // Import individual patterns
 * import { ContentSection, DarkSection, HeroSection } from './src/app/components/patterns/sections';
 *
 * // Use in templates
 * <HeroSection heading="Welcome" minHeight="80vh" />
 * <ContentSection heading="Featured Products" content={<ProductGrid />} />
 * <DarkSection heading="Newsletter" cta={{ label: "Subscribe", href: "/newsletter" }} />
 * ```
 * 
 * @see {@link /guidelines/patterns/sections/README.md} for pattern overview
 */

// Content Section (default style)
export { ContentSection } from './ContentSection';

// Dark Section (high-contrast dark background)
export { DarkSection } from './DarkSection';

// Accent Section (brand-colored background)
export { AccentSection } from './AccentSection';

// Muted Section (subtle gray background)
export { MutedSection } from './MutedSection';

// Hero Section (full-height gradient banners)
export { HeroSection } from './HeroSection';

// Bordered Section (with visible borders)
export { BorderedSection } from './BorderedSection';

// Full Width Section (edge-to-edge layout)
export { FullWidthSection } from './FullWidthSection';

// Compact Section (reduced padding)
export { CompactSection } from './CompactSection';