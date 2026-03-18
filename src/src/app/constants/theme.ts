/**
 * Theme Constants
 * 
 * Central source of truth for design tokens (Fonts, Spacing, Typography).
 * Colors are managed via CSS variables in /src/styles/theme-variables.css
 * 
 * @module constants/theme
 */

/**
 * Font Families
 * Defined in CSS/Tailwind but referenced here for JS usage (e.g., Canvas drawing).
 */
export const FONTS = {
  heading: '"Inter", sans-serif',
  body: '"Inter", sans-serif',
};

/**
 * Spacing Scale
 * Fluid spacing values using clamp() for responsive layouts.
 * Aligned with CSS custom properties in globals.css
 */
export const SPACING = {
  section: 'clamp(3rem, 8vw, 6rem)',      /* 48px → 96px - Section vertical spacing */
  container: 'clamp(1rem, 3vw, 3rem)',    /* 16px → 48px - Container horizontal padding */
  inner: 'clamp(1rem, 4vw, 3rem)',        /* 16px → 48px - Inner content spacing */
  gapSm: 'clamp(0.5rem, 1.5vw, 1.5rem)',  /* 8px → 24px - Small gaps */
  gapLg: 'clamp(1rem, 3vw, 3rem)',        /* 16px → 48px - Large gaps */
};

/**
 * Container Widths
 * Standard max-widths for different layout contexts with fluid padding.
 * 
 * WordPress FSE Alignment:
 * - site: Standard container (1400px) - Default layout
 * - content: Narrow content (960px) - Blog posts, long-form
 * - wide: Wide container (1200px) - Equivalent to .alignwide
 * - full: Full viewport - Handled by .alignfull CSS class
 * 
 * Inner content class for full-width sections:
 * Use 'inner' constant for content within .alignfull containers
 */
export const CONTAINER = {
  site: 'wp-container-site',
  content: 'wp-container-content',
  wide: 'wp-container-wide',
  inner: 'wp-container-site', // For content inside full-width containers
};

/**
 * Typography Variant Classes
 * WordPress-aligned typography classes with automatic dark mode support.
 * Actual styles defined in /src/styles/globals.css
 */
export const TYPOGRAPHY = {
  h1: 'typography-h1',
  h2: 'typography-h2',
  h3: 'typography-h3',
  h4: 'typography-h4',
  h5: 'typography-h5',
  h6: 'typography-h6',
  bodyLarge: 'typography-body-large',
  body: 'typography-body',
  caption: 'typography-caption',
};

/**
 * Retro Color Constants
 * JS-accessible retro neon/accent colors for use in canvas, 3D components,
 * and dynamic inline styles. CSS equivalents: --retro-neon-* custom properties.
 */
export const RETRO_COLORS = {
  gold: '#FFD700',
  cyan: '#00fff9',
  magenta: '#ff00ff',
  yellow: '#ffff00',
  surfaceDark: '#1a1a1a',
  surfaceLight: '#2a2a2a',
};