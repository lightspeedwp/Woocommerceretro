"use client";

import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const AvatarRoot = AvatarPrimitive?.Root || "div";
const AvatarImagePrimitive = AvatarPrimitive?.Image || "img";
const AvatarFallbackPrimitive = AvatarPrimitive?.Fallback || "span";

interface AvatarProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}

const Avatar = ({ className = '', children, style, id }: AvatarProps) => {
  return (
    <AvatarRoot id={id} style={style} data-slot="avatar" className={['wp-block-avatar', className].filter(Boolean).join(' ')}>
      {children}
    </AvatarRoot>
  );
}

const AvatarImage = ({ className = '', src, alt, style, id }: AvatarProps & { src?: string; alt?: string }) => {
  return (
    <AvatarImagePrimitive
      id={id}
      style={style}
      src={src}
      alt={alt}
      data-slot="avatar-image"
      className={['wp-block-avatar__image', className].filter(Boolean).join(' ')}
    />
  );
}

const AvatarFallback = ({ className = '', children, style, id, delayMs }: AvatarProps & { delayMs?: number }) => {
  return (
    <AvatarFallbackPrimitive
      id={id}
      style={style}
      delayMs={delayMs}
      data-slot="avatar-fallback"
      className={['wp-block-avatar__fallback', className].filter(Boolean).join(' ')}
    >
      {children}
    </AvatarFallbackPrimitive>
  );
}

export { Avatar, AvatarImage, AvatarFallback };