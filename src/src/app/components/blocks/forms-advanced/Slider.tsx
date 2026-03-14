"use client";

import React, { useState, useRef, useCallback, forwardRef } from "react";
import { cn } from "@/utils/cn";

/**
 * Slider Component
 *
 * Custom range slider with mouse and touch support.
 *
 * @example
 * <Slider value={[50]} onValueChange={setVal} min={0} max={100} />
 */

interface SliderProps {
  className?: string;
  value?: number[];
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number[]) => void;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    { className, value, defaultValue, min = 0, max = 100, step = 1, onValueChange, disabled, id, style },
    ref
  ) => {
    const [localValue, setLocalValue] = useState(defaultValue || [min]);
    const currentValue = value || localValue;
    const val = currentValue[0] !== undefined ? currentValue[0] : min;

    const trackRef = useRef<HTMLDivElement>(null);

    const getPercentage = (v: number) => ((v - min) / (max - min)) * 100;

    const handleMove = useCallback(
      (clientX: number) => {
        if (disabled || !trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
        let newValue = min + percent * (max - min);

        if (step) {
          newValue = Math.round((newValue - min) / step) * step + min;
        }

        newValue = Math.max(min, Math.min(max, newValue));

        if (newValue !== val) {
          const nextValue = [newValue];
          if (!value) {
            setLocalValue(nextValue);
          }
          onValueChange?.(nextValue);
        }
      },
      [disabled, min, max, step, val, value, onValueChange]
    );

    const handleMouseDown = (e: React.MouseEvent) => {
      if (disabled) return;
      handleMove(e.clientX);

      const handleMouseMove = (event: MouseEvent) => handleMove(event.clientX);
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      if (disabled) return;
      handleMove(e.touches[0].clientX);

      const handleTouchMove = (event: TouchEvent) => handleMove(event.touches[0].clientX);
      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };

      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd);
    };

    const percentage = getPercentage(val);

    return (
      <div
        id={id}
        style={style}
        ref={ref}
        className={cn(
          "wp-block-slider",
          disabled ? "wp-block-slider--disabled" : null,
          className
        )}
      >
        <div
          ref={trackRef}
          className="wp-block-slider-track"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="wp-block-slider-range" style={{ width: `${percentage}%` }} />
        </div>
        <div
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={val}
          className="wp-block-slider-thumb"
          style={{ left: `${percentage}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        />
      </div>
    );
  }
);

Slider.displayName = "Slider";