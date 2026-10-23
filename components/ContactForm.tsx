"use client";
import { useState, FormEvent } from "react";
import { SERVICES } from "@/lib/site";

type Errs = Record<string, string>;

export default function ContactForm() {
  const [errs, setErrs] = useState<Errs>({});
  const [st, setSt] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = Object.fromEntries(new FormData(f)) as Record<string, string>;
    const er: Errs = {};
    if (!d.name?.trim()) er.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(d.email || "")) er.email = "Enter a valid email address.";
    if (!d.service) er.service = "Choose a service.";
    if ((d.message || "").trim().length < 10) er.message = "Describe your project in at least 10 characters.";
    if (!d.consent) er.consent = "Please accept to continue.";
    setErrs(er);
    if (Object.keys(er).length) return;
    setSt("loading");
    try {
      const r = await fetch("/api/contact/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json().catch(() => ({}));
      if (r.ok) { setSt("ok"); f.reset(); } else { setSt("err"); setMsg(j.error || "Something went wrong. Please try again."); }
    } catch { setSt("err"); setMsg("Network error. Please try again or email us directly."); }
  }

  const field = (id: string, label: string, type = "text", req = false, full = false) => (
    <div className={`fld ${full ? "full" : ""}`}>
      <label htmlFor={id}>{label}{req ? " *" : ""}</label>
      {type === "textarea"
        ? <textarea id={id} name={id} rows={5} aria-invalid={!!errs[id]} aria-describedby={errs[id] ? `${id}-e` : undefined} />
        : <input id={id} name={id} type={type} aria-invalid={!!errs[id]} aria-describedby={errs[id] ? `${id}-e` : undefined} />}
      {errs[id] && <p id={`${id}-e`} className="err" role="alert">{errs[id]}</p>}
    </div>
  );

  return (
    <form className="cf" onSubmit={onSubmit} noValidate>
      {field("name", "Full name", "text", true)}
      {field("email", "Email address", "email", true)}
      {field("phone", "Phone number (optional)", "tel")}
      {field("company", "Company name (optional)")}
      <div className="fld">
        <label htmlFor="service">Service required *</label>
        <select id="service" name="service" defaultValue="" aria-invalid={!!errs.service}>
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Other</option>
        </select>
        {errs.service && <p className="err" role="alert">{errs.service}</p>}
      </div>
      {field("budget", "Estimated budget (optional)")}
      {field("timeline", "Project timeline (optional)", "text", false, true)}
      {field("message", "Project details", "textarea", true, true)}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
      <div className="fld full">
        <label className="chk"><input type="checkbox" name="consent" value="yes" /> I agree that Pixitech Studio may use these details to respond to my enquiry.</label>
        {errs.consent && <p className="err" role="alert">{errs.consent}</p>}
      </div>
      <div className="full">
        <button className="btn btn-gold" type="submit" disabled={st === "loading"}>{st === "loading" ? "Sending…" : "Send message"}</button>
        {st === "ok" && <p className="ok" role="status">Message sent. We will reply to your email soon.</p>}
        {st === "err" && <p className="err" role="alert">{msg}</p>}
      </div>
    </form>
  );
}
