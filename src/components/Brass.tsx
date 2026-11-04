import Image from "next/image";
import { brassProducts } from "@/content/site";

export default function Brass() {
  return (
    <section className="section brass" id="brass">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Moradabad brass · Available now</p>
            <h2>The brass city, at the standard it was once known for.</h2>
          </div>
          <p className="section-sub">
            Moradabad has cast and engraved brass since the seventeenth century. Lokiom works with
            a single family workshop there, on functional objects of precise weight and
            proportion. Every piece is made to order.
          </p>
        </div>
        <ul className="product-grid">
          {brassProducts.map((p) => (
            <li key={p.id} className="product">
              <div className="product-media">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  style={{ objectPosition: p.position ?? "50% 50%" }}
                />
              </div>
              <div className="product-body">
                <div className="product-title">
                  <h3>{p.name}</h3>
                  <span className="form">{p.form}</span>
                </div>
                <p>{p.blurb}</p>
                <div className="product-foot">
                  <span className="finish">{p.finish}</span>
                  <a href="#register" className="enquire">
                    Enquire <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="brass-note">
          <p className="eyebrow">Care and provenance</p>
          <p>
            Unlacquered brass darkens with use, which is intended. Each piece is stamped on the
            base with the workshop mark and arrives with a card naming the caster, the engraver and
            the alloy. Prices on request, held the same for private and trade buyers.
          </p>
          <a className="btn primary" href="#register">
            Request the brass price list
          </a>
        </div>
      </div>
    </section>
  );
}
