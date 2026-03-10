import React from 'react';

// OptimizedImageProps structure
// - src: string
// - alt: string
// - className?: string
// - width?: number
// - height?: number
// - loading?: 'lazy' | 'eager'
// - priority?: boolean
// - srcSet?: string
// - sizes?: string
// - objectFit?: 'cover' | 'contain' | 'fill'
// - objectPosition?: string
// - quality?: number
// - blurDataURL?: string
// - onLoad?: () => void
// - onError?: () => void

/**
 * OptimizedImage Component
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 * 5. No TypeScript type annotations
 */

/**
 * Utility: Detect slow connection
 */
function isSlowConnection() {
  if (typeof navigator === 'undefined' || !navigator.connection) return false;
  var connection = navigator.connection;
  var effectiveType = connection.effectiveType;
  return effectiveType === 'slow-2g' || effectiveType === '2g';
}

/**
 * Utility: Detect data saver preference
 */
function prefersDataSaver() {
  if (typeof navigator === 'undefined' || !navigator.connection) return false;
  var connection = navigator.connection;
  return connection.saveData === true;
}

export function OptimizedImage(props) {
  var useState = React.useState;
  var useEffect = React.useEffect;
  var useRef = React.useRef;
  
  var src = props.src;
  var alt = props.alt;
  var className = props.className || '';
  var width = props.width;
  var height = props.height;
  var loading = props.loading || 'lazy';
  var priority = props.priority || false;
  var srcSet = props.srcSet;
  var sizes = props.sizes;
  var objectFit = props.objectFit || 'cover';
  var objectPosition = props.objectPosition || 'center';
  var quality = props.quality || 75;
  var blurDataURL = props.blurDataURL;
  var onLoad = props.onLoad;
  var onError = props.onError;

  var isLoadedState = useState(false);
  var isLoaded = isLoadedState[0];
  var setIsLoaded = isLoadedState[1];
  
  var hasErrorState = useState(false);
  var hasError = hasErrorState[0];
  var setHasError = hasErrorState[1];
  
  var imageSrcState = useState(src);
  var imageSrc = imageSrcState[0];
  var setImageSrc = imageSrcState[1];
  
  var imgRef = useRef(null);

  var shouldUseAdaptiveLoading = !priority && (isSlowConnection() || prefersDataSaver());
  var adaptiveQuality = shouldUseAdaptiveLoading ? Math.min(quality, 50) : quality;

  useEffect(function() {
    if (priority) {
      setImageSrc(src);
      return;
    }

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && imgRef.current) {
      var observer = new IntersectionObserver(
        function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '50px' }
      );

      observer.observe(imgRef.current);

      return function() {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    } else {
      setImageSrc(src);
    }
  }, [src, priority]);

  var handleLoad = function() {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  var handleError = function() {
    setHasError(true);
    if (onError) onError();
  };

  var style = {
    objectFit: objectFit,
    objectPosition: objectPosition,
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0.5,
    filter: (blurDataURL && !isLoaded) ? 'blur(10px)' : 'none'
  };

  if (hasError) {
    return React.createElement('div', {
      className: 'wp-optimized-image-placeholder ' + className,
      style: { width: width, height: height },
      'aria-label': alt
    },
      React.createElement('svg', {
        className: "wp-optimized-image-placeholder__icon",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        'aria-hidden': "true"
      },
        React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        })
      )
    );
  }

  return React.createElement('img', {
    ref: imgRef,
    src: imageSrc,
    srcSet: srcSet,
    sizes: sizes,
    alt: alt,
    width: width,
    height: height,
    className: className,
    style: style,
    loading: priority ? 'eager' : loading,
    onLoad: handleLoad,
    onError: handleError,
    decoding: "async",
    'data-quality': adaptiveQuality
  });
}

OptimizedImage.displayName = 'OptimizedImage';

/**
 * ResponsiveImage Component
 * 
 * ResponsiveImageProps structure:
 * - baseSrc: string
 * - format?: 'jpg' | 'png' | 'webp'
 * - alt: string
 * - aspectRatio?: '1/1' | '4/3' | '16/9' | '3/4'
 * - className?: string
 * - priority?: boolean
 */
export function ResponsiveImage(props) {
  var baseSrc = props.baseSrc;
  var format = props.format || 'jpg';
  var alt = props.alt;
  var aspectRatio = props.aspectRatio || '4/3';
  var className = props.className || '';
  var priority = props.priority || false;

  var srcSet = [
    baseSrc + '-400.' + format + ' 400w',
    baseSrc + '-800.' + format + ' 800w',
    baseSrc + '-1200.' + format + ' 1200w',
    baseSrc + '-1600.' + format + ' 1600w'
  ].join(', ');

  var sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  var aspectRatioClasses = {
    '1/1': 'wp-aspect-square',
    '4/3': 'wp-aspect-landscape',
    '16/9': 'wp-aspect-video',
    '3/4': 'wp-aspect-portrait',
  };

  var ratioClass = aspectRatioClasses[aspectRatio] || 'wp-aspect-landscape';

  return React.createElement('div', { className: 'wp-responsive-image-container ' + ratioClass + ' ' + className },
    React.createElement(OptimizedImage, {
      src: baseSrc + '-800.' + format,
      srcSet: srcSet,
      sizes: sizes,
      alt: alt,
      className: "wp-responsive-image-absolute",
      priority: priority
    })
  );
}

ResponsiveImage.displayName = 'ResponsiveImage';

/**
 * ProductImage Component
 * 
 * ProductImageProps structure:
 * - src: string
 * - alt: string
 * - priority?: boolean
 */
export function ProductImage(props) {
  var src = props.src;
  var alt = props.alt;
  var priority = props.priority || false;

  return React.createElement(OptimizedImage, {
    src: src,
    alt: alt,
    className: "wp-optimized-image--cover funky-product-img",
    loading: priority ? 'eager' : 'lazy',
    objectFit: "cover",
    objectPosition: "center",
    priority: priority,
    quality: 85
  });
}

ProductImage.displayName = 'ProductImage';
