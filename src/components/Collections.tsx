import Image from "next/image";
import { collections } from "@/content/site";

export default function Collections() {
  return (
    <section className="section collections" id="collections">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Collections</p>
            <h2>Each collection is a complete world, not a product range.</h2>
          </div>
          <p className="section-sub">
            Limited in number, developed over months with the makers, and named with a word chosen
            for precision of meaning.
          </p>
        </div>
        <div className="collection-grid">
          {collections.map((c) => (
            <article key={c.id} className="collection-card" id={c.id}>
              <div className="collection-media">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 1000px) 100vw, 33vw"
                  style={{ objectPosition: c.position ?? "50% 50%" }}
                />
                <span className="status">{c.status}</span>
              </div>
              <div className="collection-body">
                <p className="eyebrow">{c.order}</p>
                <h3>
                  {c.name} <em>{c.tagline}</em>
                </h3>
                <p className="places">{c.places}</p>
                <p>{c.description}</p>
                <dl className="facts">
                  {c.facts.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <a className="btn outline" href="#register">
                  Register interest
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
