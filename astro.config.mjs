import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://richard-toitures.fr',
  trailingSlash: 'always',
  // "hybrid" : toutes les pages restent statiques (rapides, servies telles
  // quelles) sauf celles qui déclarent explicitement `export const prerender
  // = false` — seule /api/devis est dynamique, pour envoyer l'e-mail
  // côté serveur au moment de la soumission du formulaire.
  // (Même technique que le site "eric-couvreur-94", pris comme référence.)
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  // Le formulaire envoie du JSON en fetch vers /api/devis/ : on désactive la
  // vérification d'origine d'Astro, qui rejette ce type de requête derrière un
  // reverse proxy (Coolify/Traefik + Cloudflare).
  security: { checkOrigin: false },
  compressHTML: true,
});
