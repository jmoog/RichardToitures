import { site } from '../data/site.js';
import { villes } from '../data/villes.js';

export const prerender = true;

// Sitemap minimal, généré à partir des pages réellement créées dans ce
// scaffold. Complétez ce tableau au fur et à mesure des pages ajoutées.
const staticPaths = [
  '/',
  '/travaux-de-couverture/',
  '/devis-gratuit/',
  '/mentions-legales/',
  '/plan-du-site/',
];

export async function GET() {
  const paths = [...staticPaths, ...villes.map((v) => `/${v.slug}/`)];
  const urls = paths
    .map((p) => `  <url><loc>${site.domain}${p}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
}
