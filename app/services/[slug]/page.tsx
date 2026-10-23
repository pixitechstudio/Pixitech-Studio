import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Rise, Reveal } from "@/components/Motion";
import { SITE, SERVICES } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return SERVICES.map((s) => ({ slug: s.slug })); }

type P = { params: { slug: string } };

export function generateMetadata({ params }: P): Metadata {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: `${s.title} Services`, description: `${s.short} Pixitech Studio, Attock, Pakistan, serving clients worldwide.`, alternates: { canonical: `/services/${s.slug}/` } };
}

export default function ServicePage({ params }: P) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: s.title, description: s.short, url: `${SITE.url}/services/${s.slug}/`, areaServed: ["Pakistan", "Worldwide"], provider: { "@id": `${SITE.url}/#org` } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/#services` },
        { "@type": "ListItem", position: 3, name: s.title, item: `${SITE.url}/services/${s.slug}/` } ] },
    ],
  };
  return (
    <section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="wrap narrow">
        <nav aria-label="Breadcrumb" className="crumb"><Link href="/">Home</Link> / <Link href="/#services">Services</Link> / <span>{s.title}</span></nav>
        <Rise as="h1" text={`${s.title} Services`} />
        <Reveal>
          <p className="lead">{s.short}</p>
          <p>Pixitech Studio is a software development company in Attock, Pakistan, working with clients across Pakistan and worldwide. Scope, technologies and timelines depend on your project, and we recommend what fits rather than adding every service by default.</p>
          <h2>What this can include</h2>
          <ul className="list">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <h2>Frequently asked</h2>
          <details open><summary>{s.faq[0]}</summary><p>{s.faq[1]}</p></details>
          <p style={{ margin: "28px 0" }}><Link className="btn btn-gold" href="/contact/">Discuss your project</Link></p>
          <h2>Other services</h2>
          <ul className="list">{SERVICES.filter((x) => x.slug !== s.slug).map((x) => <li key={x.slug}><Link href={`/services/${x.slug}/`}>{x.title}</Link></li>)}</ul>
        </Reveal>
      </div>
    </section>
  );
}
