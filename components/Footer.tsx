import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="dark ftr">
      <div className="wrap fg">
        <div>
          <span className="chip"><Image src="/images/Pixitech-Studio-Gold-Emblem-Logo.png" alt="Pixitech Studio logo" width={766} height={312} /></span>
          <p>Pixitech Studio is a software development and AI automation company in Attock, Pakistan, building websites, web applications and automation for clients worldwide.</p>
          <Socials />
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/#about">About Us</Link><Link href="/#portfolio">Portfolio</Link><Link href="/#ai-automation">AI Automation</Link><Link href="/#team">Our Team</Link><Link href="/contact/">Contact</Link>
        </div>
        <div>
          <h3>Services</h3>
          {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}/`}>{s.title}</Link>)}
        </div>
        <div>
          <h3>Get in touch</h3>
          <a href={`mailto:${SITE.email}`}><Mail size={15} /> {SITE.email}</a>
          <a href={`tel:${SITE.tel}`}><Phone size={15} /> {SITE.phone}</a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} /> WhatsApp</a>
          <span><MapPin size={15} /> {SITE.location}</span>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} Pixitech Studio. All rights reserved.</p>
    </footer>
  );
}
