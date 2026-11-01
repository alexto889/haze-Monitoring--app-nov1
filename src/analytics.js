import { inject } from '@vercel/analytics';

// Adds Vercel Web Analytics page-view tracking.
// On Vercel it loads /_vercel/insights/script.js; locally it runs in debug mode.
inject();
