// Données centrales de l'entreprise. Coordonnées et informations légales
// réelles (M. Richard, prénoms Seatle Michel, EI, Indre-et-Loire) ; ce qui
// reste inconnu reste en placeholder entre crochets (hébergeur, avis
// Google...) — à compléter
// avant mise en ligne. Pas de certification RGE : M. Richard n'est pas RGE.
export const site = {
  brand: 'Richard Toitures',
  // Nom public : « Michel Richard » — Michel est le deuxième prénom de
  // l'artisan, plus courant que son premier prénom (Seatle). Le nom complet
  // avec les deux prénoms reste dans legalName pour les mentions légales.
  founder: 'Michel Richard',
  domain: 'https://richard-toitures.fr',
  phone: '06 06 41 49 02',
  phoneHref: '0606414902',
  phoneIntl: '+33606414902',
  whatsapp: 'https://wa.me/33606414902',
  email: 'seatlerichard37@gmail.com',
  address: {
    street: 'Lieu-dit Glatinet',
    postalCode: '37300',
    city: 'Joué-lès-Tours',
    // « Indre-et-Loire » est FÉMININ et commence par une voyelle : on écrit
    // « en Indre-et-Loire » et « dans toute l'Indre-et-Loire ».
    // Jamais « dans le Indre-et-Loire ».
    region: 'Indre-et-Loire',
    department: '37',
    country: 'FR',
  },
  // Coordonnées approximatives de Joué-lès-Tours, utilisées pour centrer la
  // carte de la zone d'intervention sur /devis-gratuit/. À affiner si vous
  // voulez que le marqueur tombe exactement sur l'adresse d'intervention.
  geo: { lat: 47.3672, lng: 0.6698 },
  foundingDate: '2021',
  siret: '894 762 053 00011',
  siren: '894 762 053',
  tva: 'FR30 894 762 053',
  rcs: 'RCS Tours 894 762 053',
  // Activité déclarée sur l'extrait officiel actuel : "Nettoyage courant des
  // bâtiments (8121Z)". L'artisan passe à une activité de couverture : le
  // code APE ci-dessous est celui d'une entreprise de couverture (même
  // format que le site de référence "eric-couvreur-94") — pensez à faire
  // mettre à jour le code APE réel auprès de l'INSEE/du guichet unique pour
  // qu'il corresponde avant la mise en ligne définitive.
  ape: '43.91B — Travaux de couverture par éléments',
  legalForm: 'Entrepreneur individuel (EI)',
  legalName: 'Seatle Michel Richard',
  registeredOffice: 'Lieu-dit Glatinet, 37300 Joué-lès-Tours',
  // Pas encore de fiche Google / avis clients à ce stade : ne rien afficher
  // tant qu'il n'y a ni note ni avis réels. À ajouter ici (googleProfileLink,
  // googleRating...) une fois la fiche établissement créée et les premiers
  // avis obtenus — et à réutiliser dans TrustBand.astro / Layout.astro /
  // index.astro / devis-gratuit.astro à ce moment-là.
  hosting: {
    name: '[Nom de l’hébergeur]',
    address: '[Adresse de l’hébergeur]',
    phone: '[Téléphone de l’hébergeur]',
    email: '[E-mail de l’hébergeur]',
    site: '[Site web de l’hébergeur]',
  },
};

// Menu principal du header (structure identique au site de référence
// "eric-couvreur-94" — à adapter si les prestations changent)
export const mainNav = [
  { href: '/travaux-de-couverture/', label: 'Couverture' },
  { href: '/isolation-des-combles/', label: 'Isolation' },
  { href: '/nettoyage-toiture-37/', label: 'Démoussage' },
  { href: '/a-propos/', label: 'À propos' },
];

// Toutes les prestations, pour le footer et les blocs "voir aussi"
export const services = [
  { href: '/travaux-de-couverture/', label: 'Travaux de couverture' },
  // Slug calé sur la requête principale « rénovation toiture 37 » (même
  // logique que le pilier nettoyage).
  { href: '/renovation-toiture-37/', label: 'Rénovation de toiture' },
  // Slug recalé sur « réparation toiture 37 » (décision du 10 août 2026, qui
  // remplace l'ancien choix /reparation-toiture/ — alignement sur les piliers).
  { href: '/reparation-toiture-37/', label: 'Réparation & recherche de fuite' },
  { href: '/gouttieres-37/', label: 'Gouttières, noues & chéneaux' },
  // Slug calé sur la requête principale « nettoyage toiture 37 » (page pilier
  // du cocon nettoyage — les satellites sont en /nettoyage-toiture-{ville}/).
  { href: '/nettoyage-toiture-37/', label: 'Nettoyage & démoussage' },
  { href: '/isolation-des-combles/', label: 'Isolation des combles' },
  { href: '/ravalement-de-facade/', label: 'Ravalement de façade' },
  { href: '/ramonage/', label: 'Ramonage' },
];
