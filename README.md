# Haze Monitor

Single-page app: Singapore 24-hour PSI by area (NEA via data.gov.sg) and current weather for Singapore and 11 ASEAN cities (Open-Meteo).

## Files
- `index.html` - the whole app (HTML, CSS, JS in one file, no build step)
- `vercel.json` - optional: clean URLs and basic security headers

## Deploy on Vercel
1. Unzip, then from this folder run `npx vercel` (preview) or `npx vercel --prod`.
   Or push the folder to a Git repo and import it at vercel.com/new.
2. Framework preset: **Other**. Leave build command and output directory empty.

## Data
On load the page fetches:
- https://api-open.data.gov.sg/v2/real-time/api/psi
- https://api.open-meteo.com/v1/forecast (12 locations in one request)

If either request fails, it falls back to the reading embedded in the file (PSI for 2026-11-01 10:00 SGT) and the label at the top says "reading" instead of "live".
