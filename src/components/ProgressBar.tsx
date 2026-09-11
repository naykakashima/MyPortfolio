"use client";

import { useEffect } from "react";

export default function ProgressBar() {
  useEffect(() => {
    const bar = document.getElementById("progress");
    if (!bar) return;

    const onScroll = () => {
      const h = document.documentElement;
      bar.style.width =
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="progress" />;
}
