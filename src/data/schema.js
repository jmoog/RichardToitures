import { site, services } from './site.js';
import { villes } from './villes.js';

// Bloc RoofingContractor + WebSite, réutilisé sur toutes les pages (même
// technique que le site de référence "eric-couvreur-94"), adapté à
// l'Indre-et-Loire (37). Les valeurs restent des placeholders tant que
// site.js n'a pas été complété avec les vraies informations.
export function localBusinessGraph() {
  return [
    {
      '@type': 'WebSite',
      '@id': `${site.domain}/#website`,
      url: `${site.domain}/`,
      name: site.brand,
      alternateName: `Couvreur ${site.address.department} — ${site.brand}`,
      inLanguage: 'fr-FR',
      publisher: { '@id': `${site.domain}/#localbusiness` },
    },
    {
      '@type': 'RoofingContractor',
      '@id': `${site.domain}/#localbusiness`,
      name: site.brand,
      alternateName: `Couvreur ${site.address.department} — ${site.brand}`,
      description: `Artisan couvreur en ${site.address.region} (${site.address.department}). Travaux de couverture, rénovation et réparation de toiture, isolation, ravalement de façade, ramonage. [Description à compléter]`,
      url: `${site.domain}/`,
      image: `${site.domain}/logo-richard-toitures.png`,
      logo: `${site.domain}/logo-richard-toitures.png`,
      telephone: site.phoneIntl,
      email: site.email,
      priceRange: '€€',
      founder: { '@type': 'Person', name: site.founder },
      foundingDate: site.foundingDate,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: `${site.address.region} (${site.address.department})` },
        ...villes.map((v) => ({ '@type': 'City', name: v.name })),
      ],
      knowsAbout: [
        'Couverture', 'Zinguerie', 'Gouttières, noues et chéneaux', 'Rénovation de toiture',
        'Réparation de fuite de toiture', 'Démoussage de toiture', 'Traitement hydrofuge',
        'Isolation de toiture', 'Isolation des combles', 'Ramonage', 'Ravalement de façade',
        'Tuiles mécaniques', 'Tuiles plates', 'Ardoises', 'Zinc',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Prestations de couverture en ${site.address.region}`,
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.label, url: `${site.domain}${s.href}` },
        })),
      },
    },
  ];
}

export function breadcrumbSchema(path, name) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${site.domain}${path}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${site.domain}/` },
      { '@type': 'ListItem', position: 2, name, item: `${site.domain}${path}` },
    ],
  };
}

export function pageSchema(path, name) {
  return { '@context': 'https://schema.org', '@graph': [...localBusinessGraph(), breadcrumbSchema(path, name)] };
}
