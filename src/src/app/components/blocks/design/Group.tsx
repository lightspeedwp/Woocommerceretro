import React from 'react';

const paddingClasses: Record<string, string> = { none: '', xs: 'wp-p-2', sm: 'wp-p-3', md: 'wp-p-4', lg: 'wp-p-6', xl: 'wp-p-8', '2xl': 'wp-p-8' };
const marginClasses: Record<string, string> = { none: '', xs: 'wp-mb-2', sm: 'wp-mb-3', md: 'wp-mb-4', lg: 'wp-mb-6', xl: 'wp-mb-8', '2xl': 'wp-mb-12' };
const borderRadiusClasses: Record<string, string> = { none: '', sm: 'wp-rounded', md: 'wp-rounded-md', lg: 'wp-rounded-lg', xl: 'wp-rounded-xl', full: 'wp-rounded-full' };
const gapClasses: Record<string, string> = { none: '', xs: 'wp-gap-1', sm: 'wp-gap-2', md: 'wp-gap-4', lg: 'wp-gap-6', xl: 'wp-gap-8', '2xl': 'wp-gap-12' };
const widthClasses: Record<string, string> = { constrained: 'wp-max-w-content wp-mx-auto', wide: 'wp-max-w-wide wp-mx-auto', full: 'wp-w-full' };
const groupAlignClasses: Record<string, string> = { default: 'wp-max-w-content wp-mx-auto', wide: 'wp-max-w-wide wp-mx-auto', full: 'wp-w-full' };
const sectionStyleClasses: Record<string, string> = {
  default: 'wp-bg-white wp-text-gray-900', dark: 'wp-bg-gray-900 wp-text-white', accent: 'wp-bg-purple-600 wp-text-white',
  muted: 'wp-bg-gray-50 wp-text-gray-900', hero: 'wp-bg-purple-50 wp-text-gray-900', bordered: 'wp-bg-white wp-text-gray-900',
  'full-width': 'wp-w-full wp-bg-white wp-text-gray-900', compact: 'wp-bg-white wp-text-gray-900',
};
const paddingPresetStyles: Record<string, React.CSSProperties> = {
  section: { paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' },
  hero: { paddingTop: 'clamp(4rem, 10vw, 8rem)', paddingBottom: 'clamp(4rem, 10vw, 8rem)' },
  compact: { paddingTop: 'clamp(2rem, 5vw, 4rem)', paddingBottom: 'clamp(2rem, 5vw, 4rem)' },
  none: {},
};
const variantClasses: Record<string, string> = { default: '', surface: 'wp-bg-white', hero: 'wp-bg-purple-50', brand: 'wp-bg-purple-600 wp-text-white', accent: 'wp-bg-purple-50' };
const layoutClasses: Record<string, string> = { flow: '', flex: 'wp-flex', grid: 'wp-grid' };
const columnClasses: Record<string, string> = {
  '1': 'wp-grid-cols-1', '2': 'wp-grid-cols-2', '3': 'wp-grid-cols-3', '4': 'wp-grid-cols-4',
  responsive: 'wp-grid-cols-1 md:wp-grid-cols-2 lg:wp-grid-cols-4', 'responsive-3': 'wp-grid-cols-1 md:wp-grid-cols-2 lg:wp-grid-cols-3',
};

interface GroupProps {
  sectionStyle?: string; variant?: string; as?: keyof JSX.IntrinsicElements; width?: string; align?: string;
  paddingPreset?: string; backgroundColor?: string; textColor?: string; padding?: string; margin?: string;
  borderRadius?: string; borderWidth?: string; borderColor?: string; shadow?: string; layout?: string;
  flexDirection?: string; gap?: string; columns?: number | string; className?: string;
  style?: React.CSSProperties; children?: React.ReactNode; ariaLabel?: string; id?: string;
}

export const Group = ({
  sectionStyle, variant = 'default', as: Tag = 'div', width, align = 'default',
  paddingPreset, backgroundColor, textColor, padding = 'none', margin = 'none',
  borderRadius = 'none', borderWidth, borderColor, shadow, layout = 'flow',
  flexDirection = 'column', gap = 'none', columns, className = '', style, children, ariaLabel, id,
}: GroupProps) => {
  const widthClass = width ? (widthClasses[width] || '') : (groupAlignClasses[align] || '');
  const styleClass = sectionStyle ? (sectionStyleClasses[sectionStyle] || '') : (variantClasses[variant] || '');
  const paddingClass = paddingPreset ? '' : (paddingClasses[padding] || '');
  const paddingStyle = paddingPreset ? (paddingPresetStyles[paddingPreset] || {}) : {};

  const finalStyle: React.CSSProperties = {
    ...paddingStyle,
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(textColor ? { color: textColor } : {}),
    ...(borderColor ? { borderColor } : {}),
    ...style,
  };

  const combinedClassName = [
    'wp-block-group', styleClass || '',
    sectionStyle !== 'full-width' ? (widthClass || '') : '',
    paddingClass || '', marginClasses[margin] || '', borderRadiusClasses[borderRadius] || '',
    layoutClasses[layout] || '',
    layout === 'flex' && flexDirection === 'row' ? 'wp-flex-row' : '',
    layout === 'flex' && flexDirection === 'column' ? 'wp-flex-col' : '',
    (layout === 'flex' || layout === 'grid') ? (gapClasses[gap] || '') : '',
    layout === 'grid' && columns ? (columnClasses[String(columns)] || '') : '',
    className, 'funky-group',
  ].filter(Boolean).join(' ');

  return (
    <Tag id={id} className={combinedClassName} style={finalStyle} aria-label={ariaLabel}>
      {children}
    </Tag>
  );
}

Group.displayName = 'Group';