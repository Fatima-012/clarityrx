"use client";

import { useEffect, useState } from "react";

/**
 * Opening intro: the pencil "writes" the ClarityRx wordmark (pure CSS
 * animation in app/globals.css), then this component hands off to the
 * rest of the page — fires a window "clarityrx:introend" event that
 * PageFX listens for to start the scroll-reveal animations right after.
 *
 * Skips instantly if the visitor prefers reduced motion. If JavaScript
 * never runs at all, globals.css also hides #preloader outright so the
 * page is never stuck (see the noscript-style reduced-motion guard).
 */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function finish() {
      setDone(true);
      document.body.classList.remove("intro-active");
      window.dispatchEvent(new Event("clarityrx:introend"));
    }

    if (reduceMotion) {
      finish();
      return;
    }

    document.body.classList.add("intro-active");
    // Matches globals.css timing: 0.25s delay + 1.5s draw = 1.75s, plus a short hold.
    const timer = window.setTimeout(finish, 1900);
    return () => window.clearTimeout(timer);
  }, []);

  // Nothing rendered until mounted client-side keeps this in sync with body class;
  // on the server / first paint it still renders so there's no flash of raw content.
  if (!mounted && typeof window === "undefined") {
    // no-op guard for clarity; SSR still renders the overlay below
  }

  return (
    <div id="preloader" className={done ? "preloader--done" : ""} aria-hidden="true">
      <div className="preloader-inner">
        <span className="preloader-text">ClarityRx</span>
        <svg className="preloader-pencil" viewBox="0 0 48 48" aria-hidden="true">
          <path
            d="M31 6l11 11-22 22-13 3 3-13z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M26 11l11 11" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  );
}
