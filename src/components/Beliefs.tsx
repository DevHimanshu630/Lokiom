import { beliefs } from "@/content/site";

export default function Beliefs() {
  return (
    <section className="section beliefs ground" id="beliefs">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Four beliefs</p>
            <h2>Every piece is both things at once: the material, and the knowledge that shaped it.</h2>
          </div>
        </div>
        <ol className="belief-grid">
          {beliefs.map((b) => (
            <li key={b.n}>
              <span className="n">{b.n}</span>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
