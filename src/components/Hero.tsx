"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/content/site";

const INTERVAL = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;
  const touchX = useRef<number | null>(null);

  const go = useCallback((n: number) => setIndex(((n % count) + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearInterval(t);
  }, [paused, count]);

  return (
    <section
      className="hero"
      id="top"
      aria-roledescription="carousel"
      aria-label="Featured"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="hero-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {heroSlides.map((s, i) => (
          <div
            className="hero-slide"
            key={s.image}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="hero-img"
              style={{ objectPosition: s.position }}
            />
            <div className="hero-shade" />
            <div className="wrap hero-content">
              <p className="eyebrow">{s.eyebrow}</p>
              <h1>{s.title}</h1>
              <p className="lede">{s.text}</p>
              <div className="actions">
                <a className="btn solid" href={s.primary.href} tabIndex={i === index ? 0 : -1}>
                  {s.primary.label}
                </a>
                <a className="btn ghost" href={s.secondary.href} tabIndex={i === index ? 0 : -1}>
                  {s.secondary.label}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-foot wrap">
        <span>Private preview · Brass available now</span>
        <div className="hero-controls">
          <button type="button" aria-label="Previous slide" onClick={() => go(index - 1)}>
            ←
          </button>
          <ol className="dots" aria-label="Slides">
            {heroSlides.map((s, i) => (
              <li key={s.image}>
                <button
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={i === index ? "on" : undefined}
                  onClick={() => go(i)}
                />
              </li>
            ))}
          </ol>
          <button type="button" aria-label="Next slide" onClick={() => go(index + 1)}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}
