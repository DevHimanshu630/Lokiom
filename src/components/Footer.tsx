import { nav } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="/assets/lokiom-lockup-white.png" alt="Lokiom" width={399} height={396} />
          <p>Said loh-kee-om. Many crafts. One signature. Infinite stories.</p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul>
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Collections</p>
          <ul>
            <li><a href="#maati">Maati · Objects of earth</a></li>
            <li><a href="#taar">Taar · Objects of thread</a></li>
            <li><a href="#ahead">In development</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul>
            <li><a href="mailto:hello@lokiom.com">hello@lokiom.com</a></li>
            <li>Gurugram, Haryana, India</li>
            <li><a href="#register">Trade and press enquiries</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-legal">
        <span>© 2026 Lokiom</span>
      </div>
    </footer>
  );
}
