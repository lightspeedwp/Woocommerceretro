/**
 * PlayPocketLogo
 *
 * Interactive logo with a 3D mechanical-keyboard-style keycap.
 * The entire gold square is the keycap — it slams down on click
 * like a Cherry MX bottoming out, then springs back.
 *
 * 3D depth is created by static "wall" rects behind the keycap face.
 * When pressed, the face translateY's down, occluding the bottom wall
 * and revealing a dark gap at the top — just like a real key.
 *
 * **Styling:** BEM (.pp-logo__*) in /src/styles/sections/playpocket-home.css
 * **WCAG:** 44px touch target, aria-label, prefers-reduced-motion
 */

import { useState, useCallback } from 'react';
import { Link } from 'react-router';

export const PlayPocketLogo = () => {
  const [pressed, setPressed] = useState(false);

  const handlePress = useCallback(() => {
    setPressed(true);
    setTimeout(() => setPressed(false), 300);
  }, []);

  return (
    <Link
      to="/"
      className="pp-logo"
      onClick={handlePress}
      aria-label="PlayPocket home"
    >
      {/* ── Device Icon ── */}
      <svg
        className="pp-logo__icon"
        viewBox="0 0 64 64"
        width="48"
        height="48"
        fill="none"
        aria-hidden="true"
      >
        {/* ── STATIC LAYERS (keyboard housing) ── */}

        {/* Drop shadow behind everything */}
        <rect
          x="5" y="7" width="56" height="56" rx="10"
          fill="#0D1117" opacity="0.25"
        />

        {/* Housing / plate — dark navy */}
        <rect
          x="3" y="3" width="58" height="58" rx="10"
          fill="var(--pp-logo-shell, #2C3A4A)"
        />

        {/* Key well — slightly darker recess where keycap sinks into */}
        <rect
          x="7" y="7" width="50" height="50" rx="7"
          fill="var(--pp-logo-well, #1A252F)"
        />

        {/* ── 3D DEPTH WALLS (static, keycap occludes these) ── */}

        {/* Bottom wall — darkest gold, the "front face" of the keycap stem */}
        <rect
          x="8" y="50" width="46" height="6" rx="2"
          fill="var(--pp-logo-depth-bottom, #9A7820)"
        />

        {/* Right wall — medium dark gold, the "side face" */}
        <rect
          x="52" y="8" width="5" height="46" rx="2"
          fill="var(--pp-logo-depth-right, #B08A28)"
        />

        {/* Corner join (bottom-right) */}
        <rect
          x="52" y="50" width="5" height="6" rx="2"
          fill="var(--pp-logo-depth-bottom, #9A7820)"
        />

        {/* ── KEYCAP FACE (animated group — moves down on press) ── */}
        <g className={`pp-logo__keycap${pressed ? ' pp-logo__keycap--pressed' : ''}`}>

          {/* Keycap top surface — the big gold square */}
          <rect
            x="7" y="4" width="47" height="47" rx="7"
            fill="var(--pp-logo-gold, #DEAD4F)"
          />

          {/* Top-edge highlight — light catching the top bevel */}
          <rect
            x="7" y="4" width="47" height="8" rx="7"
            fill="rgba(255,255,255,0.18)"
          />

          {/* Bottom-edge bevel — subtle shadow on bottom of keycap face */}
          <rect
            x="11" y="45" width="39" height="5" rx="3"
            fill="rgba(0,0,0,0.08)"
          />

          {/* ── Screen ── */}
          <rect
            x="15" y="15" width="28" height="24" rx="3"
            fill="var(--pp-logo-screen, #1E2630)"
          />
          {/* Screen top bezel glint */}
          <rect
            x="16" y="16" width="26" height="2" rx="1"
            fill="rgba(255,255,255,0.06)"
          />

        </g>
      </svg>

      {/* ── Wordmark ── */}
      <div className="pp-logo__wordmark">
        <span className="pp-logo__text">PLAYPOCKET</span>
        {/* Decorative underlines */}
        <svg
          className="pp-logo__underlines"
          viewBox="0 0 200 8"
          width="160"
          height="6"
          aria-hidden="true"
        >
          <rect x="0" y="1" width="120" height="4" rx="2" fill="var(--pp-logo-mint-line, #B5CFC4)" />
        </svg>
      </div>
    </Link>
  );
};

PlayPocketLogo.displayName = 'PlayPocketLogo';