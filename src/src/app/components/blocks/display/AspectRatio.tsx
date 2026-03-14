import React from 'react';

interface AspectRatioProps {
  className?: string;
  ratio?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className = '', ratio = 16 / 9, style = {}, children, id }, ref) => {
    const finalStyle: React.CSSProperties = {
      ...style,
      paddingBottom: `${100 / ratio}%`,
      position: style.position || 'relative',
    };

    return (
      <div ref={ref} id={id} className={['wp-block-aspect-ratio', 'funky-aspect-ratio', className].filter(Boolean).join(' ')} style={finalStyle}>
        <div className="wp-block-aspect-ratio__inner">{children}</div>
      </div>
    );
  }
);

AspectRatio.displayName = "AspectRatio";
