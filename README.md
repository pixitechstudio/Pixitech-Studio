# Pixitech Studio website (Next.js 14 + TypeScript)

## Run
1. Install Node.js 18.18+ (nodejs.org)
2. `npm install`
3. Copy `.env.example` to `.env.local` and fill the values
4. `npm run dev` -> http://localhost:3000
5. Production: `npm run build && npm start` (or deploy to Vercel / Netlify)

## Contact form
Needs `RESEND_API_KEY` (resend.com). Until it is set the form shows a clear "not set up yet" message; it never fakes success.

## Replace later (all in `lib/site.ts`)
- Hero mockups 5-7: add `public/images/hero-mockup-5.jpg` ... `-7.jpg`, then set their `src` in `HERO`
- CEO / Director photos: add files to `public/images/` and set `photo` in `TEAM`
- Social URLs, contact details, services, projects: `SITE`, `SERVICES`, `PROJECTS`
- Domain: set `NEXT_PUBLIC_SITE_URL` (confirm pixitechstudio.com vs pixietekstudio.com first)

## Google Search Console
1. search.google.com/search-console -> Add property -> Domain -> pixitechstudio.com (or your confirmed domain)
2. Add the TXT record Google gives you at your DNS provider, then Verify
3. Sitemaps -> submit `https://<your-domain>/sitemap.xml`
4. URL Inspection -> inspect the homepage and each service page -> Request indexing
5. Check Pages (indexing), Core Web Vitals and Performance reports over the following weeks. Rankings are never guaranteed.
