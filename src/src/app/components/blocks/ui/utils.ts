import { clsx } from "clsx";

/**
 * Combines class names using clsx.
 */
export const cn = (...args: any[]): string => {
  return clsx(args);
}