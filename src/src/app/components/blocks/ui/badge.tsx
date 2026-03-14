"use client";

import React from "react";
import { cn } from "./utils";

interface BadgeProps {
  className?: string;
  variant?: string;
  size?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}

export const Badge = ({ className = '', variant = 'default', size = 'md', children, style, id }: BadgeProps) => {
  return (
    <span
      id={id}
      style={style}
      data-slot="badge"
      className={cn("wp-block-badge", `wp-block-badge--variant-${variant}`, `wp-block-badge--size-${size}`, className)}
    >
      {children}
    </span>
  );
}

Badge.displayName = 'Badge';