import React from 'react';
var useState = React.useState;
var createContext = React.createContext;
var useContext = React.useContext;
var forwardRef = React.forwardRef;
var useLayoutEffect = React.useLayoutEffect;
var useEffect = React.useEffect;

var AvatarContext = createContext(undefined);

/**
 * Avatar Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax (no generics, no interfaces, no type annotations)
 */
export var Avatar = forwardRef(function Avatar(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var _st = useState("loading");
  var status = _st[0];
  var setStatus = _st[1];

  var contextValue = { status: status, setStatus: setStatus };

  var combinedClassName = [
    'wp-block-avatar',
    'funky-avatar-container',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement(AvatarContext.Provider, { value: contextValue },
    React.createElement('div', {
      ref: ref,
      id: id,
      style: style,
      className: combinedClassName
    }, children)
  );
});

Avatar.displayName = "Avatar";

export var AvatarImage = forwardRef(function AvatarImage(props, ref) {
  var className = props.className || '';
  var src = props.src;
  var srcSet = props.srcSet;
  var alt = props.alt;
  var onLoadingStatusChange = props.onLoadingStatusChange;
  var id = props.id;
  var style = props.style;
  
  var context = useContext(AvatarContext);
  
  if (!context) {
    throw new Error("AvatarImage must be used within an Avatar");
  }

  var setStatus = context.setStatus;
  var status = context.status;

  useLayoutEffect(function() {
    if (!src) {
      setStatus("error");
      return;
    }
    
    var isMounted = true;
    var image = new window.Image();
    
    var updateStatus = function(newStatus) {
      if (!isMounted) return;
      setStatus(newStatus);
      if (onLoadingStatusChange) {
        onLoadingStatusChange(newStatus);
      }
    };

    setStatus("loading");
    
    image.onload = function() { updateStatus("loaded"); };
    image.onerror = function() { updateStatus("error"); };
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }

    return function() {
      isMounted = false;
    };
  }, [src, srcSet, setStatus, onLoadingStatusChange]);

  if (status === "error") return null;

  var combinedClassName = [
    'wp-block-avatar__image',
    'funky-avatar-img',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('img', {
    ref: ref,
    id: id,
    style: style,
    src: src,
    srcSet: srcSet,
    alt: alt,
    className: combinedClassName
  });
});

AvatarImage.displayName = "AvatarImage";

export var AvatarFallback = forwardRef(function AvatarFallback(props, ref) {
  var className = props.className || '';
  var delayMs = props.delayMs === undefined ? 0 : props.delayMs;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var context = useContext(AvatarContext);
  
  if (!context) {
    throw new Error("AvatarFallback must be used within an Avatar");
  }

  var status = context.status;
  var _cr = useState(delayMs === 0);
  var canRender = _cr[0];
  var setCanRender = _cr[1];

  useEffect(function() {
    if (delayMs > 0) {
      var timer = setTimeout(function() { setCanRender(true); }, delayMs);
      return function() { clearTimeout(timer); };
    }
  }, [delayMs]);

  if (status === "loaded" || !canRender) return null;

  var combinedClassName = [
    'wp-block-avatar__fallback',
    'funky-avatar-fallback',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    className: combinedClassName
  }, children);
});

AvatarFallback.displayName = "AvatarFallback";
