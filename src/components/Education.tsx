export default function Education() {
  return (
    <section id="education">
      <div className="sec-head reveal">
        <div>
          <div className="label">Academics</div>
          <h2>Education</h2>
        </div>
        <div className="count">2024 — 2027</div>
      </div>
      <div className="edu reveal">
        <div className="edu-main">
          <div className="deg">
            BSc (Hons) Computer Science
            <br />
            Data Science and AI
          </div>
          <div className="uni">University of Dundee</div>
          <div className="loc">DUNDEE, SCOTLAND · EXPECTED 2027</div>
          <p>
            Specialising in Data Science and AI, on a strong foundation in
            object-oriented programming, data structures, and algorithms.
            Currently extending into cloud infrastructure and applied AI
            tooling.
          </p>
        </div>
        <div className="edu-side">
          <div className="edu-stat">
            <b>On track for a First</b>
            <span>Predicted honours</span>
            <small>Grade Band A5 — 19 on the 23-point Scottish scale.</small>
          </div>
          <div className="edu-stat">
            <b>Secretary</b>
            <span>Dundee University Computing Society</span>
            <small>
              Coordinated hackathons partnered with BlackRock and NCR Atleos,
              reaching 100+ students.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
