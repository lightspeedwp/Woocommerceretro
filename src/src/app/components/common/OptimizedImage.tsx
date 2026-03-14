import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  srcSet?: string;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
  objectPosition?: string;
  quality?: number;
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) return false;
  const connection = (navigator as any).connection;
  return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
};

const prefersDataSaver = (): boolean => {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) return false;
  return (navigator as any).connection.saveData === true;
};

/**
 * OptimizedImage Component
 *
 * Provides lazy loading via IntersectionObserver, adaptive quality for slow
 * connections, and a placeholder fallback on error.
 */
export const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  srcSet,
  sizes,
  objectFit = 'cover',
  objectPosition = 'center',
  quality = 75,
  blurDataURL,
  onLoad: onLoadProp,
  onError: onErrorProp,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  const shouldUseAdaptiveLoading = !priority && (isSlowConnection() || prefersDataSaver());
  const adaptiveQuality = shouldUseAdaptiveLoading ? Math.min(quality, 50) : quality;

  useEffect(() => {
    if (priority) {
      setImageSrc(src);
      return;
    }

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '50px' }
      );

      observer.observe(imgRef.current);

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    } else {
      setImageSrc(src);
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoadProp) onLoadProp();
  };

  const handleError = () => {
    setHasError(true);
    if (onErrorProp) onErrorProp();
  };

  const style: React.CSSProperties = {
    objectFit,
    objectPosition,
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0.5,
    filter: blurDataURL && !isLoaded ? 'blur(10px)' : 'none',
  };

  if (hasError) {
    return (
      <div
        className={`wp-optimized-image-placeholder ${className}`}
        style={{ width, height }}
        aria-label={alt}
      >
        <svg
          className="wp-optimized-image-placeholder__icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={priority ? 'eager' : loading}
      onLoad={handleLoad}
      onError={handleError}
      decoding="async"
      data-quality={adaptiveQuality}
    />
  );
}

OptimizedImage.displayName = 'OptimizedImage';

interface ResponsiveImageProps {
  baseSrc: string;
  format?: 'jpg' | 'png' | 'webp';
  alt: string;
  aspectRatio?: '1/1' | '4/3' | '16/9' | '3/4';
  className?: string;
  priority?: boolean;
}

export const ResponsiveImage = ({
  baseSrc,
  format = 'jpg',
  alt,
  aspectRatio = '4/3',
  className = '',
  priority = false,
}: ResponsiveImageProps) => {
  const srcSetValue = [
    `${baseSrc}-400.${format} 400w`,
    `${baseSrc}-800.${format} 800w`,
    `${baseSrc}-1200.${format} 1200w`,
    `${baseSrc}-1600.${format} 1600w`,
  ].join(', ');

  const sizesValue = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  const aspectRatioClasses: Record<string, string> = {
    '1/1': 'wp-aspect-square',
    '4/3': 'wp-aspect-landscape',
    '16/9': 'wp-aspect-video',
    '3/4': 'wp-aspect-portrait',
  };

  const ratioClass = aspectRatioClasses[aspectRatio] || 'wp-aspect-landscape';

  return (
    <div className={`wp-responsive-image-container ${ratioClass} ${className}`}>
      <OptimizedImage
        src={`${baseSrc}-800.${format}`}
        srcSet={srcSetValue}
        sizes={sizesValue}
        alt={alt}
        className="wp-responsive-image-absolute"
        priority={priority}
      />
    </div>
  );
}

ResponsiveImage.displayName = 'ResponsiveImage';

interface ProductImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export const ProductImage = ({ src, alt, priority = false }: ProductImageProps) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className="wp-optimized-image--cover funky-product-img"
      loading={priority ? 'eager' : 'lazy'}
      objectFit="cover"
      objectPosition="center"
      priority={priority}
      quality={85}
    />
  );
}

ProductImage.displayName = 'ProductImage';