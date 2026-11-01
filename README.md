# Haze Monitor

Single-page app: Singapore 24-hour PSI by area (NEA via data.gov.sg) and current weather for Singapore and 11 ASEAN cities (Open-Meteo).

## Files
- `index.html` - the whole app (HTML, CSS and JS in one file)
- `src/analytics.js` - starts Vercel Web Analytics (`@vercel/analytics`)
- `package.json` - dependencies and scripts (Vite builds the page and bundles analytics)
- `vercel.json` - build settings (Vite, output `dist`), clean URLs and basic security headers

## Deploy on Vercel
1. Unzip, run `npm install`, then `npx vercel` (preview) or `npx vercel --prod`.
   Or push the folder to a Git repo and import it at vercel.com/new.
2. Settings are read from `vercel.json` (framework Vite, build `npm run build`, output `dist`).
3. In the Vercel dashboard open your project, go to **Analytics** and click **Enable**.
   Page views show up after the next deployment gets traffic.

## Local development
`npm install`, then `npm run dev`. Analytics runs in debug mode locally and sends nothing.

## Data
On load the page fetches:
- https://api-open.data.gov.sg/v2/real-time/api/psi
- https://api.open-meteo.com/v1/forecast (12 locations in one request)

If either request fails, it falls back to the reading embedded in the file (PSI for 2026-11-01 10:00 SGT) and the label at the top says "reading" instead of "live".
