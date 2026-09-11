"use client";

import { useEffect, useRef } from "react";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const tlfill = document.getElementById("tlfill");
    if (!timeline || !tlfill) return;

    function updateTimeline() {
      if (!timeline || !tlfill) return;
      const r = timeline.getBoundingClientRect();
      const pct = Math.min(
        Math.max((window.innerHeight * 0.75 - r.top) / r.height, 0),
        1,
      );
      tlfill.style.height = pct * r.height + "px";
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.35 },
    );
    timeline.querySelectorAll(".tl-item").forEach((el) => io.observe(el));

    window.addEventListener("scroll", updateTimeline, { passive: true });
    updateTimeline();

    return () => {
      window.removeEventListener("scroll", updateTimeline);
      io.disconnect();
    };
  }, []);

  return (
    <section id="experience">
      <div className="sec-head reveal">
        <div>
          <div className="label">Where I&apos;ve been</div>
          <h2>Experience</h2>
        </div>
        <div className="count">02 internships</div>
      </div>

      <div className="timeline" ref={timelineRef}>
        <div className="tl-fill" id="tlfill" />

        <div className="tl-item">
          <div className="tl-date">
            <b>Jun — Aug 2026</b>Glasgow, Scotland
          </div>
          <h3>Software Engineering Intern</h3>
          <div className="tl-org">
            JPMorganChase · Digital Platform Services
          </div>
          <ul>
            <li>
              Eliminated a blind spot in submission monitoring for a credit
              markets desk supporting <b>$250M+ in annual revenue</b> by
              building the team&apos;s first analytics tool.
            </li>
            <li>
              Built an end-to-end monitoring pipeline: a listener service
              structuring raw submissions into queryable tables, paired with an
              API-backed dashboard now used by the desk daily.
            </li>
            <li>
              Processed <b>1,500 daily submissions</b>, surfacing an average of{" "}
              <b>10 previously undetected failures</b> per day.
            </li>
          </ul>
          <p className="tl-texture">Youngest intern in the cohort.</p>
        </div>

        <div className="tl-item">
          <div className="tl-date">
            <b>Jun — Aug 2025</b>Ho Chi Minh, Vietnam
          </div>
          <h3>Software Engineering Intern</h3>
          <div className="tl-org">Sony Electronics</div>
          <ul>
            <li>
              Contributed to eWarranty, a nationwide product registration and
              warranty platform used by sales teams and vendors.
            </li>
            <li>
              Diagnosed a performance bottleneck by profiling SQL queries and
              refactoring premature LINQ materialization —{" "}
              <b>75% faster page loads</b>.
            </li>
            <li>
              Built a RabbitMQ-based CSV import pipeline enabling vendors to
              submit inventory data directly, automating a previously manual
              process.
            </li>
          </ul>
          <p className="tl-texture">Youngest person in the firm.</p>
        </div>
      </div>
    </section>
  );
}
