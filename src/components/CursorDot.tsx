"use client";

import { useEffect } from "react";

export default function CursorDot() {
  useEffect(() => {
    const dot = document.getElementById("dot");
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMove);

    const targets = document.querySelectorAll(
      "a, .stack-item, .tl-item, .feat, .more-item",
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => dot.classList.add("big"));
      el.addEventListener("mouseleave", () => dot.classList.remove("big"));
    });

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div id="dot" />;
}
