# Richard Toitures — Indre-et-Loire (37) — site Astro (scaffold de démarrage)

Nouveau site pour `richard-toitures.fr`, construit avec [Astro](https://astro.build), en reprenant **la même technique** que le site de référence `eric-couvreur-94` : même stack (Astro + adaptateur Node en mode hybride), même structure de fichiers, mêmes composants, même feuille de style, même système d'envoi de devis (Brevo + anti-spam), même Dockerfile pour le déploiement.

**Tout le contenu de ce scaffold est volontairement en lorem ipsum et en placeholders** (`[Numéro SIRET]`, `[Téléphone à préciser]`, photos en encadrés gris « Photo placeholder »…). Rien n'est prêt à publier tel quel — voir la section « Reste à faire » ci-dessous.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:4321.

## Comment le site est construit et servi

Le site tourne en mode **hybride** : toutes les pages de contenu (accueil, prestations, communes, mentions légales…) sont pré-générées en HTML statique au moment du build. Une seule route tourne côté serveur : `/api/devis/`, qui reçoit le formulaire de devis et envoie les e-mails via l'API Brevo. C'est ce qui impose un petit serveur Node (adaptateur `@astrojs/node` en mode `standalone`) plutôt qu'un simple hébergement de fichiers statiques.

```bash
npm run build   # génère dist/ (pages statiques + serveur Node)
npm start       # lance le serveur de production sur le port 4321
```

## Structure du projet

- `src/data/site.js` — coordonnées de l'entreprise (téléphone, adresse, SIRET…), menu et liste des prestations. **C'est le premier fichier à compléter** avec les vraies informations. Aucun avis ni note Google n'est affiché sur le site pour l'instant (il n'y en a pas encore) — voir le commentaire dans ce fichier pour les réintégrer une fois la fiche établissement créée et les premiers avis obtenus.
- `src/data/villes.js` — les pages « couvreur à [ville] ». Une seule commune d'exemple pour l'instant (**Tours**, à titre de gabarit) : ajoutez une entrée par commune réellement desservie. La page correspondante est générée automatiquement par `src/pages/couvreur-[slug].astro`.
- `src/data/schema.js` — données structurées (schema.org / JSON-LD) réutilisées sur toutes les pages pour le référencement local.
- `src/layouts/Layout.astro` — gabarit commun (en-tête, pied de page, bandeau cookies).
- `src/components/` — blocs réutilisés (bandeau de confiance, encart d'appel à l'action, liens vers les communes, FAQ, fil d'Ariane).
- `src/pages/` — une page d'accueil, une page de prestation (`travaux-de-couverture.astro`, à dupliquer pour les autres prestations listées dans `site.js`), « devis gratuit », « mentions légales », « merci » (confirmation), « plan du site ».
- `src/pages/api/devis.ts` — route serveur qui reçoit le formulaire, filtre le spam et envoie les e-mails via l'API Brevo.
- `public/` — images et fichiers statiques. Les logos et photos sont pour l'instant des **SVG placeholder** générés automatiquement (fond gris avec le texte « Photo placeholder ») : à remplacer par les vraies images (logo, photos de chantier, portrait de l'artisan, certifications).
- `Dockerfile` — image de production (voir plus bas).

## Reste à faire avant mise en ligne

1. **`src/data/site.js`** : remplacer tous les placeholders restants (hébergeur...). Aucun avis/note Google n'a été ajouté volontairement : à réintégrer plus tard, une fois une fiche établissement Google créée et de vrais avis obtenus.
2. **Photos et logo** : remplacer les fichiers SVG placeholder du dossier `public/` par les vraies images (logo, photo de l'artisan, photos de chantiers, logo de certification le cas échéant — l'artisan n'est pas certifié RGE, ne pas en faire mention sur le site).
3. **Textes** : tout le contenu éditorial (accueil, page service, page ville, mentions légales) est en lorem ipsum — à réécrire avec le vrai contenu, un peu comme sur le site de référence `eric-couvreur-94`.
4. **Pages de prestation manquantes** : le menu et le footer (`src/data/site.js`) référencent plusieurs prestations (`renovation-toiture`, `reparation-toiture-fuite`, `nettoyage-demoussage-toiture`, `isolation-des-combles`, `ravalement-de-facade`, `ramonage`) qui n'ont pas encore de page dédiée dans ce scaffold — seule `travaux-de-couverture.astro` a été créée à titre d'exemple. Dupliquez ce fichier pour chaque nouvelle prestation, en gardant la même structure (héros, TrustBand, sections médias, FAQ, liens vers les communes).
5. **Communes** : ajoutez une entrée dans `src/data/villes.js` par commune réellement desservie autour de votre zone d'intervention (37).
6. **Formulaire de devis (`/api/devis/`)** : ne fonctionnera qu'une fois les variables d'environnement Brevo configurées (voir `.env.example` et la section suivante). Tant qu'elles sont absentes, le formulaire répond `Configuration serveur incomplète`.
7. **Google Analytics** (`src/layouts/Layout.astro`) : l'identifiant `G-XXXXXXXXXX` est un espace réservé, à remplacer ou à retirer si vous ne souhaitez pas de mesure d'audience.

## Variables d'environnement

Modèle complet dans `.env.example`. Copiez-le en `.env` pour tester en local (jamais versionné).

| Variable | Rôle |
|---|---|
| `BREVO_API_KEY` | Clé API Brevo (envoi des e-mails de devis) |
| `ADMIN_EMAILS` | Destinataires des demandes, séparés par virgule |
| `FROM_EMAIL` | Expéditeur vérifié (authentifié DKIM) dans Brevo |
| `FROM_NAME` | Nom affiché de l'expéditeur |
| `PUBLIC_TURNSTILE_SITE_KEY` | Clé publique anti-spam Cloudflare Turnstile (**variable de build**, facultative) |
| `TURNSTILE_SECRET_KEY` | Clé secrète anti-spam (runtime, facultative) |

**Pourquoi l'API Brevo et pas SMTP.** Beaucoup d'hébergeurs bloquent les ports SMTP sortants (25, 465, 587). L'API HTTPS de Brevo passe par le port 443, qui n'est jamais bloqué.

**Anti-spam intégré, même sans Turnstile.** La route `/api/devis` applique déjà un honeypot, un time-trap (rejet des envois trop rapides) et un scoring de contenu (mots-clés de démarchage SEO, liens, indicatifs étrangers, rafales d'emojis). Turnstile est une couche supplémentaire optionnelle.

## Mise en ligne (déploiement conteneur)

Le `Dockerfile` fourni suit la même recette que le site de référence : build multi-stage sur `node:22-slim`, port exposé `4321`. Il est prêt pour un déploiement type Coolify (ou tout hébergeur de conteneurs) :

1. Poussez le code sur un dépôt Git (vérifiez qu'aucun fichier `.env` n'est inclus — `git status` ne doit montrer que `.env.example`).
2. Créez la ressource dans votre outil de déploiement : *Build Pack* = Dockerfile, port exposé `4321`.
3. Renseignez les variables d'environnement ci-dessus (cochez « Build Variable » pour `PUBLIC_TURNSTILE_SITE_KEY` uniquement).
4. Branchez votre nom de domaine et activez le HTTPS.

## Pourquoi cette structure

Ce projet reprend le contenu, la structure de pages (une page par prestation + une page par commune), le design et le mécanisme d'envoi de devis du site de référence `eric-couvreur-94`, lui-même construit sur le même modèle que `eric-couvreur.fr`. Seuls changent (ou restent à compléter) : l'identité de l'entreprise, la zone de service (Indre-et-Loire plutôt que Val-de-Marne), les communes traitées, et bien sûr tout le contenu éditorial — actuellement en lorem ipsum.
