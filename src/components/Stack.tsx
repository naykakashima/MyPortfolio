const groups = [
  {
    label: "Languages",
    items: ["C#", "Java", "TypeScript", "Python"],
  },
  {
    label: "Frameworks",
    items: [".NET", "Blazor", "React", "Next.js", "Flask"],
  },
  {
    label: "Platforms & infrastructure",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "PostgreSQL",
      "Supabase",
      "Pinecone",
      "Vercel",
    ],
  },
  {
    label: "Languages spoken",
    items: ["English — Fluent", "Japanese — Fluent", "Mandarin — Basic"],
  },
];

export default function Stack() {
  return (
    <section id="stack">
      <div className="sec-head reveal">
        <div>
          <div className="label">Toolkit</div>
          <h2>Stack &amp; tools</h2>
        </div>
      </div>
      {groups.map((g) => (
        <div key={g.label} className="stack-group reveal">
          <h4>{g.label}</h4>
          <div className="stack-wrap">
            {g.items.map((item) => (
              <div key={item} className="stack-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
