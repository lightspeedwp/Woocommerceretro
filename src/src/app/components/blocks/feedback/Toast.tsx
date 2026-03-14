import React, { useState, useEffect } from "react";
import { Toaster as Sonner } from "sonner@2.0.3";

export const Toaster = ({ position, hotkey, richColors, closeButton, offset }: any) => {
  const [themeState, setTheme] = useState("light");

  useEffect(() => {
    const html = document.documentElement;
    const updateTheme = () => {
      setTheme(html.classList.contains("dark") ? "dark" : "light");
    };
    const observer = new MutationObserver(updateTheme);
    updateTheme();
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <Sonner
      theme={themeState as any}
      className="toaster group"
      position={position}
      hotkey={hotkey}
      richColors={richColors}
      closeButton={closeButton}
      offset={offset}
      toastOptions={{
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
        } as React.CSSProperties,
      }}
    />
  );
}