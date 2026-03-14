import { clsx } from "clsx";

/**
 * Combines class names using clsx.
 */
export const cn = (...args: Parameters<typeof clsx>) => {
  return clsx(args);
}