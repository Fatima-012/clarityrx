"use client";

import { useEffect } from "react";

/**
 * All the page-wide interactive behavior that isn't tied to one specific
 * piece of markup: scroll progress bar, header shadow-on-scroll, the
 * scroll-reveal animations, the custom pill cursor, and the magnetic pull
 * on buttons. Rendered once in app/layout.js.
 *
 * This mirrors the vanilla-JS version of the site closely on purpose —
 * it's a direct, low-abstraction port so it's easy to tweak later.
 */
export default function PageFX() {
  useEffect(() => {
    const header = document.getElementById("siteHeader");
    const progress = document.getElementById("scrollProgress");

    /* ---- scroll progress + header shadow ---- */
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progress) progress.style.width = pct + "%";
      if (header) header.classList.toggle("is-scrolled", scrollTop > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---- scroll-reveal, started right after the opening intro ---- */
    let io;
    function startReveals() {
      const revealEls = document.querySelectorAll(".reveal, .process-step");
      if ("IntersectionObserver" in window) {
        io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                io.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );
        revealEls.forEach((el) => io.observe(el));
      } else {
        revealEls.forEach((el) => el.classList.add("in-view"));
      }
    }
    const preloaderPresent = !!document.getElementById("preloader");
    let fallbackTimer;
    if (preloaderPresent) {
      window.addEventListener("clarityrx:introend", startReveals, { once: true });
      // Safety net in case the intro event never fires for some reason.
      fallbackTimer = window.setTimeout(startReveals, 3000);
    } else {
      startReveals();
    }

    /* ---- custom pill cursor + magnetic buttons (pointer/hover devices only) ---- */
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cursorPill = document.getElementById("cursorPill");
    let raf;
    let onMouseMove, onMouseLeave, onMouseEnter, onMouseDown, onMouseUp, onMouseOver, onMouseOut;

    if (supportsHover && cursorPill) {
      document.body.classList.add("has-custom-cursor");
      let targetX = 0, targetY = 0, curX = 0, curY = 0, started = false;

      onMouseMove = (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!started) {
          started = true;
          curX = targetX;
          curY = targetY;
          cursorPill.classList.add("is-active");
        }
      };
      onMouseLeave = () => cursorPill.classList.remove("is-active");
      onMouseEnter = () => { if (started) cursorPill.classList.add("is-active"); };
      onMouseDown = () => cursorPill.classList.add("is-down");
      onMouseUp = () => cursorPill.classList.remove("is-down");

      const hoverSelector = "a, button, input, select, textarea, .card, .sample-card, .why-item, label";
      onMouseOver = (e) => { if (e.target.closest && e.target.closest(hoverSelector)) cursorPill.classList.add("is-hover"); };
      onMouseOut = (e) => { if (e.target.closest && e.target.closest(hoverSelector)) cursorPill.classList.remove("is-hover"); };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mouseover", onMouseOver);
      document.addEventListener("mouseout", onMouseOut);

      function tick() {
        curX += (targetX - curX) * 0.2;
        curY += (targetY - curY) * 0.2;
        cursorPill.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
        raf = window.requestAnimationFrame(tick);
      }
      raf = window.requestAnimationFrame(tick);
    } else if (cursorPill) {
      cursorPill.remove();
    }

    let magneticCleanups = [];
    if (supportsHover) {
      document.querySelectorAll(".magnetic").forEach((el) => {
        const move = (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
        };
        const leave = () => { el.style.transform = "translate(0,0)"; };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        magneticCleanups.push(() => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        });
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("clarityrx:introend", startReveals);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      if (io) io.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
      if (onMouseMove) {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mouseover", onMouseOver);
        document.removeEventListener("mouseout", onMouseOut);
      }
      magneticCleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" aria-hidden="true" />
      <div className="cursor-pill" id="cursorPill" aria-hidden="true" />
    </>
  );
}
