/**
 * WebGL Utilities
 * 
 * Helper functions for WebGL 3D components, performance monitoring,
 * and progressive enhancement.
 * 
 * @module utils/webgl
 */

/**
 * Check if WebGL is supported in the current browser
 * 
 * @returns {boolean} True if WebGL is available
 */
export const isWebGLAvailable = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

/**
 * Check if WebGL2 is supported (better performance)
 * 
 * @returns {boolean} True if WebGL2 is available
 */
export const isWebGL2Available = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!canvas.getContext('webgl2');
  } catch (e) {
    return false;
  }
};

/**
 * Get user's reduced motion preference
 * 
 * @returns {boolean} True if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Clamp value between min and max
 * 
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Linear interpolation between two values
 * 
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number} Interpolated value
 */
export const lerp = (start: number, end: number, t: number): number => {
  return start + (end - start) * t;
};

/**
 * Ease in-out cubic easing function
 * 
 * @param {number} t - Time (0-1)
 * @returns {number} Eased value
 */
export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Ease out back easing (overshoot)
 * 
 * @param {number} t - Time (0-1)
 * @returns {number} Eased value
 */
export const easeOutBack = (t: number): number => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

/**
 * Convert hex color to RGB array
 * 
 * @param {string} hex - Hex color (#RRGGBB)
 * @returns {[number, number, number]} RGB array (0-1 range)
 */
export const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : [0, 0, 0];
};

/**
 * Generate random float between min and max
 * 
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random value
 */
export const randomFloat = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

/**
 * Generate random integer between min and max (inclusive)
 * 
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
export const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Performance monitoring class for WebGL components
 */
export class WebGLPerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;
  private warningThreshold = 30;
  private onWarning?: (fps: number) => void;

  constructor(warningThreshold = 30, onWarning?: (fps: number) => void) {
    this.warningThreshold = warningThreshold;
    this.onWarning = onWarning;
  }

  /**
   * Update FPS counter (call every frame)
   */
  update(): void {
    this.frameCount++;
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastTime;

    // Update FPS every second
    if (deltaTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / deltaTime);
      this.frameCount = 0;
      this.lastTime = currentTime;

      // Trigger warning if FPS drops
      if (this.fps < this.warningThreshold && this.onWarning) {
        this.onWarning(this.fps);
      }
    }
  }

  /**
   * Get current FPS
   */
  getFPS(): number {
    return this.fps;
  }

  /**
   * Reset counter
   */
  reset(): void {
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.fps = 60;
  }
}

/**
 * Device capability detection
 */
export const getDeviceCapabilities = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  if (!gl) {
    return {
      webgl: false,
      webgl2: false,
      maxTextureSize: 0,
      maxRenderbufferSize: 0,
      maxVertexTextureUnits: 0,
      isMobile: false,
    };
  }

  const glContext = gl as WebGLRenderingContext;

  return {
    webgl: true,
    webgl2: isWebGL2Available(),
    maxTextureSize: glContext.getParameter(glContext.MAX_TEXTURE_SIZE),
    maxRenderbufferSize: glContext.getParameter(glContext.MAX_RENDERBUFFER_SIZE),
    maxVertexTextureUnits: glContext.getParameter(glContext.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
  };
};
