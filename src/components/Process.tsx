import { process } from "@/content/site";

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">How a piece reaches you</p>
            <h2>Commissioned, made, delivered. Nothing held in stock.</h2>
          </div>
        </div>
        <ol className="steps">
          {process.map((s) => (
            <li key={s.n}>
              <span className="n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
