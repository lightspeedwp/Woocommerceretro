import React, { useState } from 'react';

var ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

/**
 * ImageWithFallback Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No rest parameters
 * 3. Manual prop assignment
 * 4. No arrow functions
 * 5. No const/let declarations
 * 6. No TypeScript type annotations
 */
export function ImageWithFallback(props) {
  var _didError = useState(false);
  var didError = _didError[0];
  var setDidError = _didError[1];

  var handleError = function() {
    setDidError(true);
  };

  var src = props.src;
  var alt = props.alt;
  var style = props.style;
  var className = props.className;
  var width = props.width;
  var height = props.height;
  var loading = props.loading;

  if (didError) {
    return React.createElement('div', {
      className: 'inline-block bg-gray-100 text-center align-middle ' + (className || ''),
      style: style
    }, 
      React.createElement('div', { className: 'flex items-center justify-center w-full h-full' },
        React.createElement('img', { 
          src: ERROR_IMG_SRC, 
          alt: 'Error loading image',
          width: width,
          height: height
        })
      )
    );
  }

  return React.createElement('img', {
    src: src,
    alt: alt,
    className: className,
    style: style,
    width: width,
    height: height,
    loading: loading,
    onError: handleError
  });
}
