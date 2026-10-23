import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const d = await req.json().catch(() => null);
  if (!d || d.website) return NextResponse.json({ ok: true }); // honeypot: bots are dropped silently
  const s = (k: string, n = 2000) => String(d[k] ?? "").trim().slice(0, n);
  const name = s("name", 120), email = s("email", 160), message = s("message");
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10 || !d.consent) {
    return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });
  }
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "The form is not set up yet. Please email hello@pixitechstudio.com or use WhatsApp." }, { status: 503 });
  const text = [`Name: ${name}`, `Email: ${email}`, `Phone: ${s("phone", 40)}`, `Company: ${s("company", 120)}`, `Service: ${s("service", 80)}`,
    `Budget: ${s("budget", 80)}`, `Timeline: ${s("timeline", 80)}`, "", message].join("\n");
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `PixiTech Website <${process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [process.env.CONTACT_TO_EMAIL || "hello@pixitechstudio.com"],
      reply_to: email, subject: `New enquiry: ${s("service", 80)} - ${name}`, text,
    }),
  });
  return r.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "We could not send your message. Please try again shortly." }, { status: 502 });
}
