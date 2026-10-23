import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const head = Playfair_Display({ subsets: ["latin"], variable: "--font-head", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Pixitech Studio | Software Development & AI Automation in Pakistan", template: "%s | PixiTech Studio" },
  description: "Pixitech Studio is a software development company in Attock, Pakistan building WordPress websites, web applications, Shopify stores and AI automation for clients worldwide.",
  openGraph: { type: "website", siteName: SITE.name, url: "/", images: ["/images/hero-mockup-1.jpg"] },
  twitter: { card: "summary_large_image" },
};

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, alternateName: "Pixitech Studio", url: SITE.url,
      logo: `${SITE.url}/images/pixitech-logo.png`, email: SITE.email, telephone: SITE.phone,
      address: { "@type": "PostalAddress", addressLocality: "Attock", addressRegion: "Punjab", addressCountry: "PK" },
      areaServed: ["Pakistan", "Worldwide"], sameAs: Object.values(SITE.social) },
    { "@type": "WebSite", url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${head.variable}`}>
      <body>
        <noscript><style>{".rv,.rise .w>span{opacity:1!important;transform:none!important}"}</style></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
