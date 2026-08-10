import { site, services } from './site.js';
import { villes } from './villes.js';

/* ────────────────────────────────────────────────────────────────────────
 * Balisage schema.org du site (JSON-LD, un seul @graph par page).
 *
 * Principes retenus (audit du 10 août 2026) :
 * - une seule entité entreprise, @id stable `#localbusiness`, référencée
 *   par @id partout ailleurs — jamais dupliquée en clair ;
 * - `areaServed` reflète la PORTÉE DE LA PAGE : le département sur les
 *   pages génériques et les piliers, la commune SEULE sur les pages ville
 *   et les satellites (une page « couvreur à Tours » qui revendique
 *   13 communes dilue le signal local et contredit son propre contenu) ;
 * - un nœud `WebPage` par page (relié au WebSite et au fil d'Ariane), qui
 *   porte aussi le type `FAQPage` quand la page affiche réellement une FAQ ;
 * - un nœud `Service` par page de prestation ou de ville, rattaché à
 *   l'entreprise via `provider` ;
 * - aucune URL en 404 et aucun placeholder dans le balisage.
 * ──────────────────────────────────────────────────────────────────────── */

const abs = (path = '/') => `${site.domain}${path}`;
const BUSINESS_ID = `${site.domain}/#localbusiness`;
const WEBSITE_ID = `${site.domain}/#website`;

// Prestations dont la page existe réellement. Les pages /isolation-des-combles/,
// /ravalement-de-facade/ et /ramonage/ ne sont pas encore publiées : les
// référencer dans l'OfferCatalog reviendrait à baliser des URL en 404.
// ⚠️ Ajouter leur href ici le jour où elles sont mises en ligne.
const PAGES_PRESTATIONS_PUBLIEES = new Set([
  '/travaux-de-couverture/',
  '/renovation-toiture-37/',
  '/reparation-toiture-37/',
  '/gouttieres-37/',
  '/nettoyage-toiture-37/',
]);

const servicesPublies = services.filter((s) => PAGES_PRESTATIONS_PUBLIEES.has(s.href));

// Photos de chantier réelles : Google privilégie des visuels du travail
// effectué, le logo restant sur la propriété `logo`.
const PHOTOS_ENTREPRISE = [
  '/photos-chantier/couverture-ardoise-toiture-urbaine-richard-toitures-40.webp',
  '/photos-chantier/renovation-toiture-longere-richard-toitures-16-1.webp',
  '/photos-chantier/zinguerie-pose-gouttieres-richard-toitures-11-3.webp',
];

const FRANCE = { '@type': 'Country', name: 'France' };

// Chaque zone reçoit un @id stable : elle est décrite une seule fois (sur
// l'entité entreprise) et simplement référencée ailleurs dans le graphe —
// sans quoi la liste des communes était recopiée intégralement dans le nœud
// Service, doublant le poids du JSON-LD sur les pages piliers.
const DEPARTEMENT_ID = `${site.domain}/#zone-${site.address.department}`;

const slugZone = (nom) =>
  nom.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
     .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/** Référence courte vers un nœud déjà décrit dans le même graphe. */
const ref = (node) => ({ '@id': node['@id'] });

const departement = {
  '@type': 'AdministrativeArea',
  '@id': DEPARTEMENT_ID,
  name: site.address.region,
  alternateName: `Département ${site.address.department}`,
  containedInPlace: FRANCE,
};

// Codes postaux repris de villes.js : ils désambiguïsent les communes dont
// le nom existe ailleurs en France (Monts, La Riche, Druye…).
const codesPostaux = new Map(villes.map((v) => [v.name, v.postalCode]));

/** Une commune, correctement rattachée à l'Indre-et-Loire. */
export function communeArea(name) {
  const postalCode = codesPostaux.get(name);
  return {
    '@type': 'City',
    '@id': `${site.domain}/#zone-${slugZone(name)}`,
    name,
    ...(postalCode
      ? {
          address: {
            '@type': 'PostalAddress',
            addressLocality: name,
            postalCode,
            addressRegion: site.address.region,
            addressCountry: site.address.country,
          },
        }
      : {}),
    containedInPlace: ref(departement),
  };
}

// Zone par défaut : le département + les communes couvertes par une page
// dédiée. Utilisée sur l'accueil, les piliers et les pages transverses.
const zoneParDefaut = () => [departement, ...villes.map((v) => communeArea(v.name))];

/* ── Entité entreprise ─────────────────────────────────────────────────── */

export function localBusinessGraph({ areaServed } = {}) {
  return [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: abs('/'),
      name: site.brand,
      inLanguage: 'fr-FR',
      publisher: { '@id': BUSINESS_ID },
    },
    {
      '@type': 'RoofingContractor',
      '@id': BUSINESS_ID,
      name: site.brand,
      legalName: site.legalName,
      description: `Artisan couvreur installé à ${site.address.city}, j'interviens en ${site.address.region} (${site.address.department}) : travaux de couverture, rénovation et réparation de toiture, recherche de fuite, nettoyage et démoussage, gouttières, noues et chéneaux. Devis gratuit sous 24 h, urgences 24 h/24.`,
      url: abs('/'),
      image: PHOTOS_ENTREPRISE.map((p) => abs(p)),
      logo: abs('/logo-richard-toitures.png'),
      telephone: site.phoneIntl,
      email: site.email,
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      founder: { '@type': 'Person', name: site.founder },
      foundingDate: site.foundingDate,
      vatID: site.tva.replace(/\s/g, ''),
      identifier: [
        { '@type': 'PropertyValue', name: 'SIRET', value: site.siret.replace(/\s/g, '') },
        { '@type': 'PropertyValue', name: 'SIREN', value: site.siren.replace(/\s/g, '') },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '19:00',
        },
      ],
      // Le site annonce des urgences 24 h/24 : sans ce point de contact, le
      // balisage (8 h-19 h du lundi au samedi) contredirait le contenu.
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: site.phoneIntl,
          email: site.email,
          availableLanguage: 'French',
          areaServed: 'FR',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'emergency',
          name: 'Urgence fuite de toiture',
          telephone: site.phoneIntl,
          availableLanguage: 'French',
          areaServed: 'FR',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        },
      ],
      areaServed: areaServed || zoneParDefaut(),
      knowsAbout: [
        'Couverture', 'Zinguerie', 'Gouttières, noues et chéneaux', 'Rénovation de toiture',
        'Réparation de fuite de toiture', 'Démoussage de toiture', 'Traitement hydrofuge',
        'Isolation de toiture', 'Isolation des combles', 'Ramonage', 'Ravalement de façade',
        'Tuiles mécaniques', 'Tuiles plates', 'Ardoises', 'Zinc',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Prestations de couverture en ${site.address.region}`,
        itemListElement: servicesPublies.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.label, url: abs(s.href) },
        })),
      },
    },
  ];
}

/* ── Fil d'Ariane ──────────────────────────────────────────────────────── */

/**
 * `trail` = niveaux intermédiaires, du plus général au plus précis :
 * [{ name: 'Nettoyage & démoussage', path: '/nettoyage-toiture-37/' }].
 * Doit refléter exactement le fil d'Ariane affiché (composant Breadcrumb).
 */
export function breadcrumbSchema(path, name, trail = []) {
  const items = [
    { name: 'Accueil', item: abs('/') },
    ...trail.map((t) => ({ name: t.name, item: abs(t.path) })),
  ];
  // Sur l'accueil, un second niveau « Accueil » pointant vers la même URL
  // était incohérent : le fil s'arrête au premier item.
  if (path !== '/') items.push({ name, item: abs(path) });

  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(path)}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

/* ── Page ──────────────────────────────────────────────────────────────── */

function webPageSchema(path, { pageName, description, image, faq, serviceId }) {
  const questions = (faq || []).map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      // Les réponses contiennent du HTML (liens internes) : le balisage
      // n'accepte que du texte.
      text: String(item.a).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
    },
  }));

  return {
    // Une seule entité par URL : la page porte le type FAQPage quand elle
    // affiche réellement une FAQ, plutôt qu'un second nœud concurrent.
    '@type': questions.length ? ['WebPage', 'FAQPage'] : 'WebPage',
    '@id': `${abs(path)}#webpage`,
    url: abs(path),
    name: pageName,
    ...(description ? { description } : {}),
    inLanguage: 'fr-FR',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': serviceId || BUSINESS_ID },
    breadcrumb: { '@id': `${abs(path)}#breadcrumb` },
    ...(image ? { primaryImageOfPage: { '@type': 'ImageObject', url: abs(image) } } : {}),
    ...(questions.length ? { mainEntity: questions } : {}),
  };
}

/* ── Prestation ────────────────────────────────────────────────────────── */

function serviceSchema(path, service, areaServed) {
  return {
    '@type': 'Service',
    '@id': `${abs(path)}#service`,
    name: service.name,
    serviceType: service.type || service.name,
    ...(service.description ? { description: service.description } : {}),
    provider: { '@id': BUSINESS_ID },
    // Zones référencées par @id : elles sont décrites en entier sur l'entité
    // entreprise, plus haut dans le même graphe.
    areaServed: areaServed.map(ref),
    url: abs(path),
  };
}

/* ── Assemblage ────────────────────────────────────────────────────────── */

/**
 * @param {string} path      chemin de la page, ex. '/couvreur-tours/'
 * @param {string} name      libellé du dernier niveau du fil d'Ariane
 * @param {object} [options]
 *   - pageName   : titre du nœud WebPage (défaut : `name`)
 *   - description: description de la page
 *   - image      : visuel principal de la page (chemin absolu du site)
 *   - trail      : niveaux intermédiaires du fil d'Ariane
 *   - commune    : nom d'UNE commune → areaServed limité à cette commune
 *   - service    : { name, type, description } → nœud Service
 *   - faq        : [{ q, a }] → la page devient aussi une FAQPage
 */
export function pageSchema(path, name, options = {}) {
  const { pageName, description, image, trail = [], commune, service, faq } = options;

  // Cœur de la logique demandée : sur une page ville, la zone desservie est
  // la commune concernée, et elle seule.
  const areaServed = commune ? [communeArea(commune)] : zoneParDefaut();

  const graph = [
    ...localBusinessGraph({ areaServed }),
    webPageSchema(path, {
      pageName: pageName || name,
      description,
      image,
      faq,
      serviceId: service ? `${abs(path)}#service` : null,
    }),
    breadcrumbSchema(path, name, trail),
  ];

  if (service) graph.push(serviceSchema(path, service, areaServed));

  return { '@context': 'https://schema.org', '@graph': graph };
}
