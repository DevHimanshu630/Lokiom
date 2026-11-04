import { ahead } from "@/content/site";

export default function Ahead() {
  return (
    <section className="section ahead" id="ahead">
      <div className="wrap ahead-grid">
        <div>
          <p className="eyebrow">In development</p>
          <h2>What comes next.</h2>
          <p className="section-sub">Three further collections, each at least six months from the standard.</p>
        </div>
        <ul className="ahead-list">
          {ahead.map((a) => (
            <li key={a.title}>
              <span className="eyebrow">{a.medium}</span>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
