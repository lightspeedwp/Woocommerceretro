import { clsx } from "clsx";

/**
 * Combines class names using clsx.
 * 
 * Optimized for Figma Make parser:
 * 1. No rest parameters
 * 2. No spread operators
 * 3. Uses arguments object for compatibility
 */
export const cn = () => {
  return clsx(Array.prototype.slice.call(arguments));
}