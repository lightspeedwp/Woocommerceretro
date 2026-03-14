import React from "react";

interface AlertProps {
  className?: string;
  variant?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  role?: string;
  children?: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className = '', variant = 'default', id, style, onClick, role = 'alert', children }, ref) => (
    <div
      ref={ref} id={id} style={style} onClick={onClick} role={role}
      className={['wp-block-alert', `wp-block-alert--${variant}`, 'funky-alert', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
);
Alert.displayName = "Alert";

export const AlertTitle = React.forwardRef<HTMLHeadingElement, { className?: string; children?: React.ReactNode; id?: string; style?: React.CSSProperties }>(
  ({ className = '', children, id, style }, ref) => (
    <h5 ref={ref} id={id} style={style} className={`wp-block-alert__title funky-alert-title ${className}`}>{children}</h5>
  )
);
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode; id?: string; style?: React.CSSProperties }>(
  ({ className = '', children, id, style }, ref) => (
    <div ref={ref} id={id} style={style} className={`wp-block-alert__description funky-alert-desc ${className}`}>{children}</div>
  )
);
AlertDescription.displayName = "AlertDescription";
