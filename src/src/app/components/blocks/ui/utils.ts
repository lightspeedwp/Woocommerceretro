import * as ClsxModule from "clsx";

var clsx = ClsxModule.clsx;

/**
 * Combines class names using clsx.
 * 
 * Optimized for Figma Make parser:
 * 1. No rest parameters
 * 2. No spread operators
 * 3. Uses arguments object for compatibility
 */
export function cn() {
  return clsx(Array.prototype.slice.call(arguments));
}