import React, { useState } from 'react'

var ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// ImageWithFallbackProps structure (extends React.ImgHTMLAttributes)
// - src: string (required)
// - alt: string (required)
// - srcSet?: string
// - sizes?: string
// - loading?: 'lazy' | 'eager'
// - priority?: boolean (for critical images)
// - onLoad?: () => void
// - onError?: () => void
// - className?: string
// - style?: React.CSSProperties
// - ...rest: other img attributes

/**
 * ImageWithFallback Component (Enhanced)
 * 
 * A robust, performance-optimized image component with:
 * - Graceful error handling (fallback placeholder on 404)
 * - Native lazy loading support (for below-fold images)
 * - Responsive images via srcSet and sizes
 * - Loading state transitions (blur-up effect)
 * - Priority loading for critical images (hero, LCP)
 * 
 * @example
 * // Critical image (hero, LCP)
 * <ImageWithFallback src="hero.jpg" alt="Hero" priority />
 * 
 * @example
 * // Lazy-loaded responsive image
 * <ImageWithFallback 
 *   src="product.jpg" 
 *   srcSet="product-400.jpg 400w, product-800.jpg 800w"
 *   sizes="(max-width: 640px) 400px, 800px"
 *   alt="Product"
 *   loading="lazy"
 * />
 */
export function ImageWithFallback(props) {
  var src = props.src;
  var alt = props.alt;
  var srcSet = props.srcSet;
  var sizes = props.sizes;
  var loading = props.loading !== undefined ? props.loading : 'lazy';
  var priority = props.priority !== undefined ? props.priority : false;
  var className = props.className;
  var style = props.style;
  var onLoad = props.onLoad;
  var onError = props.onError;
  
  var [didError, setDidError] = useState(false);
  var [isLoaded, setIsLoaded] = useState(false);

  function handleError() {
    setDidError(true);
    if (onError) {
      onError();
    }
  }

  function handleLoad() {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  }

  var actualLoading = priority ? 'eager' : loading;

  var imageClasses = [
    className,
    !isLoaded && 'wp-image-loading',
    isLoaded && 'wp-image-loaded',
  ].filter(Boolean).join(' ');

  if (didError) {
    return React.createElement('div', {
      className: 'wp-image-fallback ' + (className || ''),
      style: style
    },
      React.createElement('div', { className: 'wp-image-fallback__content' },
        React.createElement('img', {
          src: ERROR_IMG_SRC,
          alt: 'Error loading image',
          'data-original-url': src
        })
      )
    );
  }

  return React.createElement('img', {
    src: src,
    alt: alt,
    srcSet: srcSet,
    sizes: sizes,
    loading: actualLoading,
    decoding: 'async',
    className: imageClasses,
    style: style,
    onError: handleError,
    onLoad: handleLoad
  });
}
