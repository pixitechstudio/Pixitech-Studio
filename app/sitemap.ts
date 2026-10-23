import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/contact/", ...SERVICES.map((s) => `/services/${s.slug}/`)].map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }));
}
