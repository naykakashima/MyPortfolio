"use client";

import { useEffect, useRef } from "react";

const states = [
  {
    i: 0,
    h3: "I find the blind spot first.",
    p: "A JPMorgan credit markets desk was processing submissions with no way to tell when one failed. Failures weren't being fixed slowly — they weren't being seen at all. Before writing a line of code, the job was proving that gap existed and what it was costing.",
  },
  {
    i: 1,
    h3: "Then I build the pipeline, not the demo.",
    p: "A listener service structuring raw submissions into queryable tables, paired with an API-backed dashboard. Not a proof of concept handed over at the end of summer — something the desk still opens every morning.",
  },
  {
    i: 2,
    h3: "The same instinct travels.",
    p: "At Sony Electronics, a sales-facing warranty platform was crawling. Profiling the SQL and refactoring premature LINQ materialization cut page loads by 75%, and a RabbitMQ import pipeline replaced a manual vendor process entirely.",
  },
  {
    i: 3,
    h3: "And I keep shipping outside the job.",
    p: "Sendix AI raised £22,500 across three venture awards. SurveyBuilder.Blazor exists because the C# ecosystem had no free native option, and now sits at 2.6K downloads. Adoption is the only metric that means anything.",
  },
];

const cardForState = [0, 0, 1, 2];

const cards = [
  {
    i: 0,
    co: "JPMorganChase",
    time: "Summer 2026",
    stats: [
      { val: "$250M+", label: "Annual desk revenue supported" },
      { val: "1,500", label: "Submissions processed daily" },
      { val: "10/day", label: "Failures previously undetected" },
    ],
  },
  {
    i: 1,
    co: "Sony Electronics",
    time: "Summer 2025",
    stats: [
      { val: "75%", label: "Faster page loads" },
      { val: "Nationwide", label: "eWarranty platform scope" },
    ],
  },
  {
    i: 2,
    co: "Built on my own",
    time: "2025 — present",
    stats: [
      { val: "£22,500", label: "Raised for Sendix AI" },
      { val: "2.6K", label: "SurveyBuilder downloads" },
    ],
  },
];

export default function HowIWork() {
  const scrubRef = useRef<HTMLDivElement>(null);
  const currentIdxRef = useRef(-1);

  useEffect(() => {
    const scrubSection = scrubRef.current;
    if (!scrubSection) return;

    const stateEls = scrubSection.querySelectorAll<HTMLElement>(".scrub-state");
    const dotEls =
      scrubSection.querySelectorAll<HTMLElement>(".scrub-dots div");
    const cardEls = scrubSection.querySelectorAll<HTMLElement>(".stat-card");

    function updateScrub() {
      if (!scrubSection) return;
      const rect = scrubSection.getBoundingClientRect();
      const total = scrubSection.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const pct = total > 0 ? scrolled / total : 0;
      const idx = Math.min(Math.max(Math.floor(pct * 4), 0), 3);

      if (idx !== currentIdxRef.current) {
        currentIdxRef.current = idx;
        stateEls.forEach((s) =>
          s.classList.toggle("active", +s.dataset.i! === idx),
        );
        dotEls.forEach((d) =>
          d.classList.toggle("active", +d.dataset.i! === idx),
        );
        cardEls.forEach((c) =>
          c.classList.toggle("lit", +c.dataset.card! === cardForState[idx]),
        );
      }
    }

    window.addEventListener("scroll", updateScrub, { passive: true });
    updateScrub();
    return () => window.removeEventListener("scroll", updateScrub);
  }, []);

  return (
    <div className="scrub" ref={scrubRef}>
      <div className="scrub-pin">
        <div className="scrub-left">
          <div className="label">How I work</div>

          {states.map((s) => (
            <div
              key={s.i}
              className={`scrub-state${s.i === 0 ? " active" : ""}`}
              data-i={s.i}
            >
              <h3>{s.h3}</h3>
              <p>{s.p}</p>
            </div>
          ))}

          <div className="scrub-dots">
            {states.map((s) => (
              <div
                key={s.i}
                data-i={s.i}
                className={s.i === 0 ? "active" : ""}
              />
            ))}
          </div>
        </div>

        <div className="stat-stack">
          {cards.map((c) => (
            <div
              key={c.i}
              className={`stat-card${c.i === 0 ? " lit" : ""}`}
              data-card={c.i}
            >
              <div className="co">
                <span>{c.co}</span>
                <em>{c.time}</em>
              </div>
              <div className="stat-row">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <b>{s.val}</b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
