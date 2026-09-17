"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
    };
    const onLeave = () => {
      btn.style.transform = "translate(0,0)";
    };

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <footer id="contact">
      <div className="foot-top">
        <h2 className="reveal">
          Let&apos;s build something
          <br />
          worth <i>shipping.</i>
        </h2>
        <a
          className="btn reveal"
          href="mailto:kayaks0807@gmail.com"
          ref={btnRef}
        >
          Get in touch →
        </a>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Kay Nakashima — United Kingdom</span>
        <span>
          <a
            href="https://www.linkedin.com/in/seth-kay-nakashima-a96008269/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/naykakashima"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </span>
      </div>
    </footer>
  );
}
