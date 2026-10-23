import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Rise, Reveal } from "@/components/Motion";
import ContactSection from "@/components/ContactSection";
import { SERVICES, PROJECTS, HERO, TEAM, PROCESS, FLOW, WHY } from "@/lib/site";

export const metadata: Metadata = {
  description: "Pixitech Studio is a software development company in Attock, Pakistan building WordPress websites, web applications, Shopify stores and AI automation for clients worldwide.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <p className="eyebrow">SOFTWARE DEVELOPMENT • AI AUTOMATION • DIGITAL SOLUTIONS</p>
            <Rise as="h1" text="Building Powerful Digital Experiences That Move Businesses Forward." />
            <Reveal delay={350}>
              <p className="sub">Pixitech Studio helps businesses turn ideas into high-performing websites, intelligent AI workflows, scalable web applications, and conversion-focused eCommerce experiences.</p>
              <div className="cta">
                <Link className="btn btn-gold" href="/contact/">Start Your Project <ArrowRight size={18} /></Link>
                <Link className="btn btn-line" href="/#portfolio">Explore Our Work</Link>
              </div>
              <p className="trust">Based in Pakistan. Building for clients worldwide.</p>
            </Reveal>
          </div>
          <div className="stage">
            {HERO.map((h, i) => h.src ? (
              <div key={i} className={`m ${i === 0 ? "main" : ""}`}>
                <Image src={h.src} alt={h.alt} width={1360} height={634} priority={i === 0} sizes={i === 0 ? "(max-width:900px) 100vw, 640px" : "(max-width:900px) 33vw, 210px"} />
              </div>
            ) : <div key={i} className="m ph">Add public/images/hero-mockup-{i + 1}.jpg</div>)}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <p className="eyebrow">About Pixitech Studio</p>
          <Rise text="A Software Studio Built Around Your Business." />
          <Reveal>
            <p className="lead">Pixitech Studio is a software development company in Attock, Pakistan. We build WordPress websites, front-end and back-end solutions, full-stack web applications, Shopify stores and AI automation, working with local and international clients.</p>
            <ul className="chips">{WHY.map((w) => <li key={w}>{w}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section id="services" className="alt">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <Rise text="What We Build" />
          <div className="grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <div className="card">
                  <span className="ic"><s.icon size={26} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <Link className="more" href={`/services/${s.slug}/`}>Learn more <ArrowRight size={16} /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="wrap">
          <p className="eyebrow">Portfolio</p>
          <Rise text="Demo Projects" />
          <p className="lead">Four demo projects showing the range of work Pixitech Studio can deliver. These are demonstrations, not completed client work.</p>
          <div className="grid pg">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="card pcard">
                  <div className="thumb">
                    <Image src={p.img} alt={`${p.title} demo website by Pixitech Studio`} width={1360} height={634} sizes="(max-width:700px) 100vw, 560px" loading="lazy" />
                    <span className="badge">Demo project</span>
                  </div>
                  <div className="body">
                    <p className="tag">{p.cat}</p>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <a className="more" href={p.url} target="_blank" rel="noopener noreferrer">View Project <ExternalLink size={15} /></a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal><p className="center"><Link className="btn btn-gold" href="/contact/">Have a Project in Mind? Let&apos;s Build It.</Link></p></Reveal>
        </div>
      </section>

      <section id="ai-automation" className="dark">
        <div className="wrap">
          <p className="eyebrow">AI Automation</p>
          <Rise text="AI Automation That Works Smarter." />
          <p className="lead">Connect Conversations, Tools, and Business Processes with Intelligent Workflows.</p>
          <ol className="flow" aria-label="Example AI workflow">
            {FLOW.map(([t, Icon], i) => (
              <li className="node" key={t} style={{ "--i": i } as React.CSSProperties}><span className="ic"><Icon size={26} /></span><b>{t}</b></li>
            ))}
          </ol>
          <p className="lead">This animation is a visual demonstration of how an automation can work, not a live workflow. Real integrations depend on your tools and requirements. Typical uses: AI customer support, lead qualification, FAQ chatbots, appointment request routing, lead capture and notification, and repetitive task automation.</p>
          <p style={{ marginTop: 24 }}><Link className="btn btn-gold" href="/services/ai-automation/">Automate Your Business</Link></p>
        </div>
      </section>

      <section id="team">
        <div className="wrap">
          <p className="eyebrow">Leadership</p>
          <Rise text="The People Behind Pixitech Studio" />
          <div className="grid tg">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="card">
                  <div className="av">{t.photo ? <Image src={t.photo} alt={`${t.name}, ${t.role} of Pixitech Studio`} width={96} height={96} /> : t.name[0]}</div>
                  <h3>{t.name}</h3>
                  <p className="tag">{t.role}, Pixitech Studio</p>
                  <p>{t.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="alt">
        <div className="wrap">
          <p className="eyebrow">Our Process</p>
          <Rise text="How We Deliver Projects" />
          <ol className="grid steps">
            {PROCESS.map(([t, d], i) => (
              <li key={t}><Reveal delay={i * 90}><div className="card"><h3>{t}</h3><p>{d}</p></div></Reveal></li>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
