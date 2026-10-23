"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SERVICES } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="hdr">
      <div className="wrap">
        <Link href="/" className="logo" aria-label="Pixitech Studio home" onClick={close}>
          <Image src="/images/pixitech-logo.png" alt="Pixitech Studio logo" width={766} height={312} priority />
        </Link>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <ul className={`nav ${open ? "open" : ""}`}>
          <li><Link className="l" href="/" onClick={close}>Home</Link></li>
          <li><Link className="l" href="/#about" onClick={close}>About Us</Link></li>
          <li>
            <Link className="l" href="/#services" onClick={close}>Services</Link>
            <div className="dd">{SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}/`} onClick={close}>{s.title}</Link>)}</div>
          </li>
          <li><Link className="l" href="/#portfolio" onClick={close}>Portfolio</Link></li>
          <li><Link className="l" href="/#ai-automation" onClick={close}>AI Automation</Link></li>
          <li><Link className="l" href="/#team" onClick={close}>Our Team</Link></li>
          <li><Link className="l" href="/contact/" onClick={close}>Contact</Link></li>
          <li><Link className="btn btn-gold" href="/contact/" onClick={close}>Let&apos;s Talk</Link></li>
        </ul>
      </div>
    </header>
  );
}
