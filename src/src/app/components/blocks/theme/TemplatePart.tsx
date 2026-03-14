import React from 'react';
import { cn } from '../ui/utils';

interface TemplatePartProps {
  name: string;
  as?: keyof JSX.IntrinsicElements;
  area?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TemplatePart = ({ name, as: Comp = 'div', area, children, className, style }: TemplatePartProps) => {
  return (
    <Comp
      className={cn('wp-block-template-part', `wp-block-template-part--${name}`, area ? `wp-block-template-part--area-${area}` : null, className)}
      style={style}
      data-template-part={name}
      data-area={area}
    >
      {children}
    </Comp>
  );
};

TemplatePart.displayName = 'TemplatePart';

export const HeaderTemplate = ({ name = 'header-main', children, className, style }: Omit<TemplatePartProps, 'name'> & { name?: string }) => {
  return <TemplatePart name={name} as="header" area="header" className={className} style={style}>{children}</TemplatePart>;
};
HeaderTemplate.displayName = 'HeaderTemplate';

export const FooterTemplate = ({ name = 'footer-primary', children, className, style }: Omit<TemplatePartProps, 'name'> & { name?: string }) => {
  return <TemplatePart name={name} as="footer" area="footer" className={className} style={style}>{children}</TemplatePart>;
};
FooterTemplate.displayName = 'FooterTemplate';

export const SidebarTemplate = ({ name = 'sidebar-primary', children, className, style }: Omit<TemplatePartProps, 'name'> & { name?: string }) => {
  return <TemplatePart name={name} as="aside" area="sidebar" className={className} style={style}>{children}</TemplatePart>;
};
SidebarTemplate.displayName = 'SidebarTemplate';
