import * as React from "react"

/**
 * useIsMobile Hook
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. Standard function declarations
 */
var MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  var ref = React.useState(undefined)
  var isMobile = ref[0]
  var setIsMobile = ref[1]

  React.useEffect(function() {
    function onChange() {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    if (window.matchMedia) {
      var mql = window.matchMedia("(max-width: " + (MOBILE_BREAKPOINT - 1) + "px)")
      mql.addEventListener("change", onChange)
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      return function() {
        mql.removeEventListener("change", onChange)
      };
    } else {
      window.addEventListener("resize", onChange);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      return function() {
        window.removeEventListener("resize", onChange);
      };
    }
  }, [])

  return isMobile === true;
}