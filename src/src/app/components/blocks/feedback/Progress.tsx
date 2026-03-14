import React from "react";

interface ProgressProps {
  className?: string;
  value?: number | null;
  max?: number;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className = '', value, max = 100, id, style, children }, ref) => {
    const percentage = value != null ? Math.min(Math.max((value / max) * 100, 0), 100) : 0;

    return (
      <div
        ref={ref} id={id} style={style} role="progressbar"
        aria-valuemax={max} aria-valuemin={0} aria-valuenow={value === null ? undefined : (value ?? undefined)}
        className={['wp-block-progress', 'funky-progress', className].filter(Boolean).join(' ')}
      >
        <div
          className="wp-block-progress__indicator funky-progress-indicator"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
        {children}
      </div>
    );
  }
);

Progress.displayName = "Progress";
