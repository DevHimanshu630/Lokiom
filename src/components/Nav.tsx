"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Lokiom, home" onClick={close}>
          <img src="/assets/wordmark-white.png" alt="Lokiom" width={399} height={123} />
        </a>
        <nav aria-label="Primary">
          <ul id="navList">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mobile-only">
              <a href="#register" onClick={close}>
                Register interest
              </a>
            </li>
          </ul>
        </nav>
        <div className="right">
          <a className="btn small solid" href="#register" onClick={close}>
            Register interest
          </a>
          <button
            className="menu"
            aria-expanded={open}
            aria-controls="navList"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
