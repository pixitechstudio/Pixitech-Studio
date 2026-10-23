import { Mail, Phone, MessageCircle, MapPin, Globe } from "lucide-react";
import { SITE } from "@/lib/site";
import { Rise, Reveal } from "./Motion";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

export default function ContactSection() {
  return (
    <section className="dark" id="contact">
      <div className="wrap cg">
        <div className="cinfo">
          <p className="eyebrow">Contact</p>
          <Rise text="Let's Build Something Exceptional." />
          <Reveal delay={200}>
            <p className="lead">Tell us about your idea, and let&apos;s discuss how Pixitech Studio can help bring it to life.</p>
            <a className="row" href={`mailto:${SITE.email}`}><Mail size={18} /> {SITE.email}</a>
            <a className="row" href={`tel:${SITE.tel}`}><Phone size={18} /> {SITE.phone}</a>
            <span className="row"><MapPin size={18} /> {SITE.location}</span>
            <span className="row"><Globe size={18} /> Serving Pakistan and worldwide</span>
            <p style={{ margin: "18px 0" }}><a className="btn btn-gold" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Chat on WhatsApp</a></p>
            <Socials />
          </Reveal>
        </div>
        <Reveal delay={150}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
