/**
 * Slider.tsx - Forms Block
 * 
 * Custom implementation of a slider component.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

"use client";

import * as React from "react";
import * as cnModule from "../../../utils/cn";

var cn = cnModule.cn;

export var Slider = React.forwardRef(function Slider(props, ref) {
  var className = props.className;
  var value = props.value;
  var defaultValue = props.defaultValue;
  var min = props.min !== undefined ? props.min : 0;
  var max = props.max !== undefined ? props.max : 100;
  var step = props.step !== undefined ? props.step : 1;
  var onValueChange = props.onValueChange;
  var disabled = props.disabled;
  var id = props.id;
  var style = props.style;

  var localValueState = React.useState(defaultValue || [min]);
  var localValue = localValueState[0];
  var setLocalValue = localValueState[1];
  var currentValue = value || localValue;
  var val = currentValue[0] !== undefined ? currentValue[0] : min;

  var trackRef = React.useRef(null);

  var getPercentage = function(v) {
    return ((v - min) / (max - min)) * 100;
  };

  var handleMove = React.useCallback(
    function(clientX) {
      if (disabled || !trackRef.current) return;
      var rect = trackRef.current.getBoundingClientRect();
      var percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
      var newValue = min + percent * (max - min);
      
      if (step) {
        newValue = Math.round((newValue - min) / step) * step + min;
      }
      
      newValue = Math.max(min, Math.min(max, newValue));

      if (newValue !== val) {
        var nextValue = [newValue];
        if (!value) {
          setLocalValue(nextValue);
        }
        if (onValueChange) {
          onValueChange(nextValue);
        }
      }
    },
    [disabled, min, max, step, val, value, onValueChange]
  );

  var handleMouseDown = function(e) {
    if (disabled) return;
    handleMove(e.clientX);
    
    var handleMouseMove = function(event) {
      handleMove(event.clientX);
    };
    
    var handleMouseUp = function() {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  
  var handleTouchStart = function(e) {
    if (disabled) return;
    handleMove(e.touches[0].clientX);
    
    var handleTouchMove = function(event) {
      handleMove(event.touches[0].clientX);
    };
    
    var handleTouchEnd = function() {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
    
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };

  var percentage = getPercentage(val);

  var rangeElement = React.createElement('div', {
    className: "wp-block-slider-range",
    style: { width: percentage + "%" }
  });

  var trackElement = React.createElement('div', {
    ref: trackRef,
    className: "wp-block-slider-track",
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart
  }, rangeElement);

  var thumbElement = React.createElement('div', {
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": val,
    className: "wp-block-slider-thumb",
    style: { left: percentage + "%" },
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart
  });

  return React.createElement('div', {
    id: id,
    style: style,
    ref: ref,
    className: cn(
      "wp-block-slider",
      disabled ? "wp-block-slider--disabled" : null,
      className
    )
  }, [trackElement, thumbElement]);
});

Slider.displayName = "Slider";