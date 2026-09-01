"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#what-i-do", label: "What I Do" },
  { href: "#how-it-works", label: "Process" },
  { href: "#why", label: "Why ClarityRx" },
  { href: "#samples", label: "Samples" },
  { href: "#drafts", label: "Drafts" },
  { href: "#integrity", label: "Integrity" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" id="siteHeader">
      <div className="wrap header-inner">
        <a href="#home" className="brand" aria-label="ClarityRx — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="ClarityRx" className="brand-logo" />
        </a>

        <nav className={`main-nav${open ? " is-open" : ""}`} id="mainNav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </nav>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mainNav"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
