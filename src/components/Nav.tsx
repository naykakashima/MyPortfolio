"use client";

import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav>
        <div className="brand">
          <div className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10.5"
                stroke="#fff"
                strokeWidth="1"
                opacity="0.35"
              />
              <g className="rot">
                <circle cx="12" cy="1.5" r="2.2" fill="#fff" />
              </g>
              <circle cx="12" cy="12" r="3" fill="#fff" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="nm">Kay Nakashima</span>
          </div>
        </div>
        <div className="navlinks">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      <button
        className={`nav-toggle${open ? " open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-nav${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
