import Image from "next/image";
import { crafts } from "@/content/site";

export default function Crafts() {
  return (
    <section className="section crafts" id="crafts">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">The crafts</p>
            <h2>Five traditions, each with its own hand.</h2>
          </div>
          <p className="section-sub">
            Each ridge of the Lokiom mark is a line of making. Read together, they resolve into a
            single print.
          </p>
        </div>
        <ul className="card-grid">
          {crafts.map((c) => (
            <li key={c.id} className="card">
              <a href={c.href ?? `#${c.collection.toLowerCase()}`} className="card-link">
                <div className="card-media">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                </div>
                <p className="eyebrow place">{c.place}</p>
                <h3>{c.name}</h3>
                <p className="blurb">{c.blurb}</p>
                <span className="more">
                  In {c.collection} <span aria-hidden="true">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
