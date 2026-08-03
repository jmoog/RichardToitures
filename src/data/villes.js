// Pages "couvreur à [ville]" — un seul exemple pour l'instant (Tours, 37),
// à titre de gabarit. Même logique que le site de référence
// "eric-couvreur-94" : pour ajouter une commune, il suffit d'ajouter une
// entrée à ce tableau ; la page correspondante est générée automatiquement
// par src/pages/couvreur-[slug].astro.
//
// Le texte "intro" est du lorem ipsum de démonstration : à remplacer par un
// vrai texte local (quartiers, repères, exemples de chantiers) avant mise en
// ligne.

export const villes = [
  {
    slug: 'couvreur-tours',
    name: 'Tours',
    postalCode: '37000',
    metaTitle: 'Couvreur à Tours (37000) — Richard Toitures',
    metaDescription: 'Couvreur-zingueur à Tours (37000) : Lorem ipsum dolor sit amet. Toiture, isolation, démoussage. Devis gratuit.',
    intro: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation.',
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat : duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Devis gratuit, souvent sous 48 heures.',
    ],
    nearby: [],
  },
];

export function getVilleBySlug(slug) {
  return villes.find((v) => v.slug === slug);
}
