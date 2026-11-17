export default function Projects() {
  return (
    <section id="work">
      <div className="sec-head reveal">
        <div>
          <div className="label">Selected work</div>
          <h2>Projects</h2>
        </div>
        <div className="count">02 featured</div>
      </div>

      <div className="feat-grid reveal">
        <div className="feat">
          <div className="feat-head">
            <div className="feat-tag">
              <span>GovTech</span>
              <i>Early technical contributor</i>
            </div>
            <h3>Sendix AI</h3>
            <p className="feat-lede">
              Early technical contributor to a GovTech compliance platform for
              UK local authorities. I built a RAG pipeline (Pinecone, Azure AI
              embeddings) for automated document intelligence, integrating the
              Wonde API for secure school data access. Part of the student team
              that won Venture 2026 and Scottish Young EDGE.
            </p>
          </div>
          <div className="feat-numbers">
            <div>
              <b>2× Winner (team)</b>
              <span>Venture 2026 &amp; Scottish Young EDGE</span>
            </div>
          </div>
          <div className="feat-foot">
            <span className="feat-link">
              Next.js · TypeScript · Azure OpenAI
            </span>
          </div>
        </div>

        <div className="feat">
          <div className="feat-head">
            <div className="feat-tag">
              <span>Open source</span>
              <i>Solo build</i>
            </div>
            <h3>SurveyBuilder.Blazor</h3>
            <p className="feat-lede">
              C# had no free native survey builder — the alternatives were paid,
              or forced you through miserable JS interop. So I built a
              drag-and-drop one with JSON serialisation, published it to NuGet,
              and other developers started using it.
            </p>
          </div>
          <div className="feat-numbers">
            <div>
              <b>2.6K</b>
              <span>Total downloads</span>
            </div>
            <div>
              <b>6/day</b>
              <span>Ongoing average</span>
            </div>
          </div>
          <div className="feat-foot">
            <a
              className="feat-link"
              href="https://www.nuget.org/packages/SurveyBuilder"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on NuGet ↗
            </a>
          </div>
        </div>
      </div>

      <div className="more-head reveal">Other work</div>

      <div className="more reveal">
        <div className="more-item">
          <div className="cat">Observability · Team Lead</div>
          <h4>Log Aggregation &amp; Diagnostics Platform</h4>
          <p>
            Industrial team project for NCR Atleos. A full-stack observability
            platform ingesting operational log data from distributed banking
            infrastructure — detecting anomalies across seven sources,
            correlating events between channels, and surfacing diagnostic
            recommendations. Next.js, Flask, PostgreSQL, Docker.
          </p>
        </div>

        <div className="more-item">
          <div className="cat">SaaS</div>
          <h4>
            <a
              href="https://clear-pie.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              ClearPie
            </a>
          </h4>
          <p>
            Drop in a Trading 212 export and see your real underlying stock
            exposure. Nothing touches a server — the PDF is parsed entirely
            in-browser and never stored anywhere, not in a database, not in
            browser storage.
          </p>
          <a
            className="lnk"
            href="https://clear-pie.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            clear-pie.vercel.app ↗
          </a>
        </div>

        <div className="more-item">
          <div className="cat">Marketplace</div>
          <h4>
            <a
              href="https://termstow.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              termstow
            </a>
          </h4>
          <p>
            Peer-to-peer student storage for the UK. Students leaving their uni
            town for the holidays leave boxes with verified students living near
            campus, a few minutes away instead of a warehouse across the city.
          </p>
          <a
            className="lnk"
            href="https://termstow.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            termstow.vercel.app ↗
          </a>
        </div>

        <div className="more-item">
          <div className="cat">Tool</div>
          <h4>
            <a
              href="https://uod-calendar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              UoD Calendar
            </a>
          </h4>
          <p>
            Turns a University of Dundee timetable into a calendar file for
            Apple, Google, or Outlook in three clicks. No login. Student IDs are
            used for a single fetch and never stored; generated links expire
            after ten minutes.
          </p>
          <a
            className="lnk"
            href="https://uod-calendar.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            uod-calendar.vercel.app ↗
          </a>
        </div>
      </div>
    </section>
  );
}
