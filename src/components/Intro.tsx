const points = [
  { k: "5", label: "Craft traditions", sub: "Brass, clay, stone, silk and cotton" },
  { k: "3", label: "Collections", sub: "Pital available now; Maati and Taar to follow" },
  { k: "6", label: "Months per collection", sub: "Minimum development time, directly with the makers" },
];

export default function Intro() {
  return (
    <section className="intro">
      <div className="wrap intro-grid">
        <div className="intro-text">
          <p className="eyebrow">The house</p>
          <h2>A single destination where authenticity meets contemporary luxury.</h2>
          <p>
            Lokiom brings together diverse art forms and generations of skilled makers under one
            roof. Each piece carries its own identity, authenticated by one standard.
          </p>
        </div>
        <ul className="stats">
          {points.map((p) => (
            <li key={p.label}>
              <b>{p.k}</b>
              <span className="label">{p.label}</span>
              <span className="sub">{p.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
