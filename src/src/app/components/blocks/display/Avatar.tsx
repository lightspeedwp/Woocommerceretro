import React, { useState, createContext, useContext, useLayoutEffect, useEffect } from 'react';

type AvatarStatus = 'loading' | 'loaded' | 'error';

const AvatarContext = createContext<{ status: AvatarStatus; setStatus: (s: AvatarStatus) => void } | undefined>(undefined);

interface AvatarProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ className = '', children, id, style }, ref) => {
  const [status, setStatus] = useState<AvatarStatus>('loading');

  return (
    <AvatarContext.Provider value={{ status, setStatus }}>
      <div ref={ref} id={id} style={style} className={['wp-block-avatar', 'funky-avatar-container', className].filter(Boolean).join(' ')}>
        {children}
      </div>
    </AvatarContext.Provider>
  );
});
Avatar.displayName = "Avatar";

interface AvatarImageProps {
  className?: string;
  src?: string;
  srcSet?: string;
  alt?: string;
  onLoadingStatusChange?: (status: AvatarStatus) => void;
  id?: string;
  style?: React.CSSProperties;
}

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className = '', src, srcSet, alt, onLoadingStatusChange, id, style }, ref) => {
    const context = useContext(AvatarContext);
    if (!context) throw new Error("AvatarImage must be used within an Avatar");

    const { setStatus, status } = context;

    useLayoutEffect(() => {
      if (!src) {
        setStatus('error');
        return;
      }

      let isMounted = true;
      const image = new window.Image();

      const updateStatus = (newStatus: AvatarStatus) => {
        if (!isMounted) return;
        setStatus(newStatus);
        onLoadingStatusChange?.(newStatus);
      };

      setStatus('loading');
      image.onload = () => updateStatus('loaded');
      image.onerror = () => updateStatus('error');
      image.src = src;
      if (srcSet) image.srcset = srcSet;

      return () => { isMounted = false; };
    }, [src, srcSet, setStatus, onLoadingStatusChange]);

    if (status === 'error') return null;

    return (
      <img
        ref={ref} id={id} style={style} src={src} srcSet={srcSet} alt={alt}
        className={['wp-block-avatar__image', 'funky-avatar-img', className].filter(Boolean).join(' ')}
      />
    );
  }
);
AvatarImage.displayName = "AvatarImage";

interface AvatarFallbackProps {
  className?: string;
  delayMs?: number;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

export const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className = '', delayMs = 0, children, id, style }, ref) => {
    const context = useContext(AvatarContext);
    if (!context) throw new Error("AvatarFallback must be used within an Avatar");

    const { status } = context;
    const [canRender, setCanRender] = useState(delayMs === 0);

    useEffect(() => {
      if (delayMs > 0) {
        const timer = setTimeout(() => setCanRender(true), delayMs);
        return () => clearTimeout(timer);
      }
    }, [delayMs]);

    if (status === 'loaded' || !canRender) return null;

    return (
      <div ref={ref} id={id} style={style} className={['wp-block-avatar__fallback', 'funky-avatar-fallback', className].filter(Boolean).join(' ')}>
        {children}
      </div>
    );
  }
);
AvatarFallback.displayName = "AvatarFallback";
