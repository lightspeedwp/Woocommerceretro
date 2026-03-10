import * as ClsxModule from "clsx";
var clsx = ClsxModule.clsx;

/**
 * Combines class names using clsx.
 * 
 * Optimized for Figma Make parser:
 * 1. No rest parameters
 * 2. No spread operators
 * 3. Uses a manual loop for compatibility
 */
export function cn() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  return clsx(args);
}