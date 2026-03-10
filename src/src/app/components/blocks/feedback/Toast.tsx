import React from "react";
import * as SonnerModule from "sonner@2.0.3";

var Sonner = SonnerModule.Toaster;

/**
 * Toast Component
 * No TypeScript syntax for parser compatibility.
 */
function Toaster(props) {
  var _ts = React.useState("light");
  var themeState = _ts[0];
  var setTheme = _ts[1];

  React.useEffect(function() {
    var html = document.documentElement;
    var updateTheme = function() {
      setTheme(html.classList.contains("dark") ? "dark" : "light");
    };
    var observer = new MutationObserver(updateTheme);
    updateTheme();
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return function() { observer.disconnect(); };
  }, []);

  var position = props.position;
  var hotkey = props.hotkey;
  var richColors = props.richColors;
  var closeButton = props.closeButton;
  var offset = props.offset;

  var toastOptions = {
    classNames: {
      toast: "group wp-toast funky-card-glow",
      description: "wp-toast-description",
      actionButton: "wp-toast-action-button funky-spring-hover",
      cancelButton: "wp-toast-cancel-button",
    },
    style: {
        "--normal-bg": "var(--wp--preset--color--surface)",
        "--normal-text": "var(--wp--preset--color--foreground)",
        "--normal-border": "var(--wp--preset--color--neon-cyan)",
    }
  };

  return React.createElement(Sonner, {
    theme: themeState,
    className: "toaster group",
    position: position,
    hotkey: hotkey,
    richColors: richColors,
    closeButton: closeButton,
    offset: offset,
    toastOptions: toastOptions
  });
}

export { Toaster };