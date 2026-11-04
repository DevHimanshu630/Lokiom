"use client";

import { FormEvent, useRef, useState } from "react";

const interests = [
  "Maati, objects of earth",
  "Taar, objects of thread",
  "Both collections",
  "Trade and interiors",
  "Press",
];

export default function Register() {
  const [done, setDone] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    if (!name) return nameRef.current?.focus();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return emailRef.current?.focus();

    try {
      const rows = JSON.parse(localStorage.getItem("lokiom-register") || "[]");
      rows.push({
        name,
        email,
        city: String(data.get("city") ?? "").trim(),
        interest: String(data.get("interest") ?? ""),
        note: String(data.get("note") ?? "").trim(),
        at: new Date().toISOString(),
      });
      localStorage.setItem("lokiom-register", JSON.stringify(rows));
    } catch {
      /* storage unavailable; the confirmation still shows */
    }
    setDone(true);
  }

  return (
    <section className="register ground section" id="register">
      <div className="wrap">
        <div className="copy">
          <p className="eyebrow">Register interest</p>
          <h2>Be told when the first collection meets the standard.</h2>
          <p>
            Leave your name and we will write once, when Maati is available. No newsletters, and
            we will not share your details.
          </p>
        </div>
        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="row">
            <div className="field">
              <label htmlFor="fname">Name</label>
              <input ref={nameRef} id="fname" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="femail">Email</label>
              <input ref={emailRef} id="femail" name="email" type="email" autoComplete="email" required />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="fcity">City</label>
              <input id="fcity" name="city" type="text" autoComplete="address-level2" />
            </div>
            <div className="field">
              <label htmlFor="finterest">Interest</label>
              <select id="finterest" name="interest" defaultValue={interests[0]}>
                {interests.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="fnote">A note, if you wish</label>
            <textarea id="fnote" name="note" rows={2} />
          </div>
          {!done ? (
            <>
              <button className="btn solid" type="submit">
                Register
              </button>
              <p className="fine">Private preview. Submissions are held locally until the house opens its register.</p>
            </>
          ) : (
            <div className="done">
              <b>Noted.</b>
              <p>We will write once, when the collection is ready. Thank you for your attention.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
