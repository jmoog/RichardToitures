// Pages « couvreur à [ville] » — 13 communes validées (les 10 villes cibles de
// la fiche artisan + Saint-Cyr-sur-Loire, Fondettes et Monts, comme le cocon
// nettoyage). Une entrée par commune ; la page est générée par
// src/pages/couvreur-[slug].astro.
//
// Règles appliquées (brief Joseph du 10 août 2026) :
// - H1 sans prestation, sans département, différent d'une ville à l'autre,
//   parmi : Couvreur / Artisan couvreur / Entreprise de couverture /
//   Couvreur zingueur + ville. Le nom « Richard Toitures » s'affiche en rouge
//   sous le H1 (classe .page-hero__artisan).
// - Title ≠ H1 (autre formule du même champ lexical), 50-60 caractères.
// - Meta 140-158 caractères : une prestation + nom de l'artisan + ✓ téléphone.
// - 3 cards services (nettoyage, rénovation, réparation) dans un ordre qui
//   change d'une ville à l'autre ; une seule card sur les trois porte le nom
//   de la ville dans son titre.
// - Section CTA photo : H2 avec la ville (≠ H1), texte 10 années d'expérience.
// - Section longue : H2 « Faites appel à… » + 4 paragraphes (~350-400 mots)
//   qui se terminent par le code de l'urbanisme (PLU/POS, déclaration
//   préalable) + encart mairie : adresse mise en évidence + lien vers le site
//   officiel de la commune (adresses vérifiées sur service-public.gouv.fr et
//   sur les sites municipaux, août 2026).
// - Toujours à la 1re personne (« je »), jamais d'avis clients, jamais de
//   quartiers, ni climat, ni architecture locale, ni « sécurité ».

export const villes = [
  // ─────────────────────────────────────────────────────────────── TOURS ──
  {
    slug: "couvreur-tours",
    name: "Tours",
    postalCode: "37000",
    h1: "Couvreur à Tours",
    metaTitle: "Entreprise de couverture à Tours - Devis gratuit 24 h",
    metaDescription: "Michel Richard entretient, répare et rénove les toitures à Tours. Démoussage, zinguerie, remplacement d'ardoises. Devis gratuit ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/couverture-ardoise-toiture-urbaine-richard-toitures-40.webp", width: 1600, height: 1200, alt: "Couverture en ardoise en milieu urbain — Richard Toitures, couvreur à Tours" },
    intro: [
      "<strong>Vous avez besoin d'un spécialiste de la toiture à Tours ? Je prends en charge l'entretien, la réparation et la rénovation de votre couverture</strong> : démoussage et nettoyage, traitement hydrofuge, recherche de fuites, remplacement des toitures anciennes.",
      "Je me déplace à Tours du lundi au samedi — et 24 h/24 lorsqu'il y a urgence. Le devis est gratuit, sans engagement, remis sous 24 heures.",
    ],
    bullets: ["Entreprise artisanale de couverture", "10 années d'expérience", "Garantie décennale"],
    servicesTitle: "Mes services de couvreur",
    cards: [
      { href: "/nettoyage-toiture-tours/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Démoussage de toiture à Tours", text: "Mousses et lichens retiennent l'eau et rendent les matériaux poreux. Je pratique un nettoyage de toiture qui respecte votre couverture : basse pression, traitement adapté, hydrofuge en finition." },
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture", text: "Ardoise, tuile plate, tuile mécanique en terre cuite, zinc : je maîtrise tous les matériaux de couverture posés sur les toits de Tours, pour un remplacement partiel ou complet." },
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture", text: "J'interviens rapidement : pose d'une bâche en urgence si nécessaire, recherche de l'origine de la fuite ou de l'infiltration, puis une réparation qui tient dans le temps." },
    ],
    cta: {
      title: "Votre artisan couvreur à Tours",
      text: "Je me déplace rapidement à votre domicile pour examiner la toiture et vous proposer la solution adaptée — ni plus, ni moins. Dix années d'expérience dans les travaux de couverture à Tours et un savoir-faire transmis de père en fils : vous savez à qui vous confiez votre toit. Déplacement, conseil et devis gratuits.",
      ctaLabel: "Demander un devis gratuit",
      photo: { src: "/photos-chantier/couverture-ardoise-echafaudage-richard-toitures-30-2.webp", width: 1200, height: 1600, alt: "Chantier de couverture en ardoise sur échafaudage — Richard Toitures, couvreur à Tours" },
    },
    longue: {
      title: "Faites appel à un couvreur zingueur pour l'entretien de votre toiture",
      paragraphs: [
        "Couvreur de père en fils, j'exerce un métier appris sur les chantiers, aux côtés de la génération précédente. Après dix années de pratique, j'interviens à Tours chez les particuliers comme chez les professionnels : maisons de ville, immeubles gérés par des syndics de copropriété, locaux d'entreprises. Mon principe reste le même quel que soit le chantier : des matériaux de qualité, un travail réalisé avec précision et des clients satisfaits. Je réponds aussi aux urgences, 24 h/24, lorsqu'une fuite ne peut pas attendre.",
        "L'entretien est la partie la plus discrète de mon métier, et pourtant celle qui évite les gros travaux. Un démoussage réalisé au bon moment, un hydrofuge appliqué sur une couverture saine, des gouttières débarrassées de leurs feuilles : ces gestes simples prolongent la vie d'un toit de plusieurs années. J'en profite systématiquement pour contrôler les points singuliers — faîtage, solins, abergements de cheminée — qui sont les premiers à laisser passer l'eau. Un passage tous les deux à trois ans suffit généralement, davantage si le toit est bordé d'arbres.",
        "Je connais les matériaux que je répare : l'ardoise naturelle fixée au crochet ou au clou sur volige, la tuile plate posée sur liteaux, le zinc des chéneaux et des noues. Cette connaissance me permet de reprendre une couverture sans la dénaturer, en conservant ce qui peut l'être et en remplaçant ce qui doit l'être. C'est aussi ce qui fait la différence entre une réparation qui tient dix ans et un simple rafistolage. Sur les toits anciens, je réutilise volontiers les tuiles saines afin de conserver l'aspect d'origine de la couverture.",
        "Un point à ne pas négliger avant de lancer vos travaux : refaire certains éléments d'une toiture implique le respect du code de l'urbanisme, et notamment du plan local d'urbanisme (PLU) ou du plan d'occupation des sols. Changer la couleur ou le matériau d'une couverture, poser des fenêtres de toit : ces interventions demandent souvent une déclaration préalable. Le service urbanisme de la mairie de Tours vous indiquera les règles qui s'appliquent à votre adresse.",
      ],
    },
    mairie: { label: "Mairie de Tours", address: "1 à 3 rue des Minimes, 37926 Tours Cedex 9", url: "https://www.tours.fr/" },
    nearby: ["couvreur-la-riche", "couvreur-saint-cyr-sur-loire", "couvreur-saint-avertin", "couvreur-chambray-les-tours"],
  },

  // ─────────────────────────────────────────────────────── SAINT-AVERTIN ──
  {
    slug: "couvreur-saint-avertin",
    name: "Saint-Avertin",
    postalCode: "37550",
    h1: "Artisan couvreur à Saint-Avertin",
    metaTitle: "Couvreur zingueur à Saint-Avertin - Devis gratuit 24 h",
    metaDescription: "Nettoyage, démoussage et réparation de toiture à Saint-Avertin : Michel Richard se déplace gratuitement et remet son devis sous 24 h ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-1.webp", width: 1600, height: 1200, alt: "Démoussage et traitement de toiture — Richard Toitures, couvreur à Saint-Avertin" },
    intro: [
      "<strong>Une toiture à entretenir, à réparer ou à remplacer à Saint-Avertin ? Je suis le professionnel qu'il vous faut</strong> : démoussage et nettoyage de couverture, application de traitements hydrofuges, réparation d'infiltrations, rénovation des toitures abîmées.",
      "Artisan couvreur installé à quelques kilomètres, j'interviens vite — en urgence 24 h/24 s'il le faut — et je remets un devis gratuit sous 24 heures.",
    ],
    bullets: ["Couvreur depuis deux générations", "Tous matériaux de couverture", "Garantie décennale"],
    servicesTitle: "Mes prestations de couverture",
    cards: [
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture à Saint-Avertin", text: "Une couverture en fin de vie se remplace avant qu'elle ne laisse entrer l'eau. Tuile plate, tuile mécanique, ardoise, zinc : je travaille tous les matériaux posés sur les toits de la commune." },
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture", text: "Fuite, tuiles déplacées, solin décollé : je cherche l'origine du problème avant de réparer. En urgence, je pose une bâche pour mettre la maison hors d'eau en attendant la réparation." },
      { href: "/nettoyage-toiture-saint-avertin/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Nettoyage & démoussage", text: "Le nettoyage d'une toiture ne s'improvise pas : une pression trop forte abîme tuiles et ardoises. À Saint-Avertin, je démousse à basse pression puis j'applique un traitement adapté au matériau." },
    ],
    cta: {
      title: "Une entreprise de couverture qui connaît Saint-Avertin",
      text: "Le premier rendez-vous se passe toujours de la même façon : je viens chez vous, j'examine la couverture et je vous dis ce qu'elle nécessite — parfois un simple entretien suffit. Fort de 10 années d'expérience dans les travaux de couverture à Saint-Avertin et dans les communes voisines, je vous conseille avec franchise. Le déplacement et le devis sont gratuits.",
      ctaLabel: "Demander une intervention",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-3.webp", width: 1200, height: 1600, alt: "Toiture démoussée et traitée — Richard Toitures, couvreur à Saint-Avertin" },
    },
    longue: {
      title: "Faites appel à une entreprise de couverture pour la réfection de votre toiture",
      paragraphs: [
        "Refaire une toiture ne se résume pas à poser des tuiles neuves. Il faut d'abord juger l'état de la charpente et des liteaux, choisir un matériau conforme à ce qui existe, prévoir l'écran de sous-toiture et les ouvrages de zinguerie qui accompagnent la couverture. Deux générations d'artisans couvreurs m'ont transmis cette façon de faire : regarder l'ensemble du toit avant de toucher au premier rang. Ce diagnostic préalable évite les mauvaises surprises en cours de chantier et vous donne un budget fiable dès le départ.",
        "À Saint-Avertin, j'assure aussi bien la réfection complète que la reprise partielle d'un versant. Lorsque la couverture le permet, je réutilise les tuiles ou les ardoises saines et je ne remplace que les éléments fatigués : le toit garde son aspect, et vous ne payez que ce qui est nécessaire. Le chantier se termine toujours par le contrôle du faîtage, des rives et des noues, par lesquels l'eau s'infiltre en premier. Vous recevez un devis détaillé, poste par poste, avant toute intervention.",
        "La zinguerie fait partie intégrante de mon métier. Gouttières, descentes, solins, abergements : ces ouvrages en zinc guident l'eau de pluie du toit jusqu'au sol et protègent les façades. Une réfection bien menée les intègre dès le départ, avec les bonnes pentes et les bons développés, plutôt que de les ajouter après coup. Je contrôle aussi l'état des descentes et des crapaudines, souvent oubliées lors des réfections.",
        "Avant de lancer une réfection, pensez aux formalités : les travaux qui modifient l'aspect d'une toiture relèvent du code de l'urbanisme, en particulier du plan local d'urbanisme (PLU) ou, pour certaines communes, de l'ancien plan d'occupation des sols. Un changement de teinte ou de matériau, une fenêtre de toit supplémentaire : tout cela passe le plus souvent par une déclaration préalable. Renseignez-vous auprès du service urbanisme de la mairie de Saint-Avertin avant de signer.",
      ],
    },
    mairie: { label: "Mairie de Saint-Avertin", address: "21 rue de Rochepinard, 37550 Saint-Avertin", url: "https://www.ville-saint-avertin.fr/" },
    nearby: ["couvreur-tours", "couvreur-chambray-les-tours", "couvreur-larcay", "couvreur-veigne"],
  },

  // ─────────────────────────────────────────────────── CHAMBRAY-LÈS-TOURS ──
  {
    slug: "couvreur-chambray-les-tours",
    name: "Chambray-lès-Tours",
    postalCode: "37170",
    h1: "Entreprise de couverture à Chambray-lès-Tours",
    metaTitle: "Couvreur à Chambray-lès-Tours (37170) - Devis gratuit",
    metaDescription: "Rénovation et entretien de toiture à Chambray-lès-Tours par Michel Richard, artisan couvreur zingueur. Déplacement et devis gratuits ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/couverture-ardoise-maison-brique-richard-toitures-17-3.webp", width: 1600, height: 1200, alt: "Maison en brique couverte en ardoise — Richard Toitures, couvreur à Chambray-lès-Tours" },
    intro: [
      "<strong>Votre toiture a besoin d'un professionnel à Chambray-lès-Tours ? Je m'occupe de tout ce qui la concerne</strong> : nettoyage et démoussage, traitement hydrofuge, recherche de fuites, réparation d'infiltrations, remplacement des couvertures usées.",
      "J'interviens du lundi au samedi, et 24 h/24 en cas d'urgence. Devis gratuit et sans engagement, remis sous 24 heures.",
    ],
    bullets: ["Savoir-faire artisanal", "10 années d'expérience", "Garantie décennale"],
    servicesTitle: "Mes interventions sur votre toiture",
    cards: [
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture à Chambray-lès-Tours", text: "La proximité fait la rapidité : j'arrive vite, je bâche s'il y a urgence, je localise l'origine de la fuite et je répare. Vous retrouvez un toit hors d'eau sans attendre." },
      { href: "/nettoyage-toiture-chambray-les-tours/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Nettoyage & démoussage", text: "Un bon nettoyage de toiture élimine mousses et lichens sans agresser le matériau. Je travaille à basse pression, avec des produits dosés selon la couverture, et je termine par un hydrofuge." },
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture", text: "Tuile mécanique, tuile plate, ardoise ou zinc : les toits de Chambray-lès-Tours mélangent les matériaux, et je les maîtrise tous. Je rénove partiellement ou intégralement votre couverture." },
    ],
    cta: {
      title: "Un couvreur zingueur près de chez vous, à Chambray-lès-Tours",
      text: "Dès votre appel, je conviens avec vous d'un rendez-vous pour examiner la toiture sur place. C'est ce premier regard qui compte : après 10 années passées sur les toits, je repère vite ce qui doit être repris, et ce qui peut attendre. Je vous l'explique simplement, puis je chiffre. Déplacement et devis gratuits, sans engagement.",
      ctaLabel: "Obtenir mon devis gratuit",
      photo: { src: "/photos-chantier/couverture-ardoise-immeuble-richard-toitures-10-3.webp", width: 1200, height: 1600, alt: "Couvreur au travail sur un toit en ardoise — Richard Toitures, à Chambray-lès-Tours" },
    },
    longue: {
      title: "Faites appel à un artisan couvreur pour le remplacement de votre toiture",
      paragraphs: [
        "Remplacer une toiture est le chantier le plus engageant de mon métier : on dépose la couverture existante, on vérifie la charpente, on reprend le voligeage ou le lattage, on pose un écran de sous-toiture, puis le matériau neuf. Dix années d'expérience et un apprentissage auprès de mon père m'ont appris à mener ces étapes dans l'ordre, sans en sauter aucune. C'est aussi le bon moment pour améliorer la ventilation de la couverture et corriger les défauts d'origine du toit. Avant la dépose, je protège les abords — terrasses, massifs, véhicules — et l'échafaudage reste en place toute la durée du chantier.",
        "À Chambray-lès-Tours, je remplace des couvertures en tuile mécanique comme en tuile plate ou en ardoise. Le choix du matériau neuf dépend de l'existant, de la pente du toit et de vos envies — je vous présente les options avec leurs prix, et je vous laisse décider. Sur demande, j'intègre au chantier l'isolation sous rampants ou la pose de fenêtres de toit, tant que la couverture est ouverte. Le chantier reste protégé et rangé en fin de journée : vous continuez à vivre normalement pendant les travaux.",
        "Un remplacement de toiture est aussi le bon moment pour revoir la zinguerie : gouttières, descentes, noues et abergements neufs accompagnent la couverture et évitent de rouvrir le toit dans cinq ans. Je façonne ces ouvrages en zinc avec les pentes et les recouvrements qui conviennent, pour que l'eau file au bon endroit dès la première pluie. Sur demande, je remplace aussi les descentes vieillissantes pour un ensemble homogène.",
        "N'oubliez pas le volet administratif : le remplacement d'une couverture touche au code de l'urbanisme, et le plan local d'urbanisme (PLU) de la commune peut imposer des teintes ou des matériaux. Une déclaration préalable de travaux est fréquemment exigée, notamment si l'aspect du toit change. Le service urbanisme de la mairie de Chambray-lès-Tours vous renseignera sur votre situation précise.",
      ],
    },
    mairie: { label: "Mairie de Chambray-lès-Tours", address: "7 rue de la Mairie, 37170 Chambray-lès-Tours", url: "https://www.ville-chambray-les-tours.fr/" },
    nearby: ["couvreur-tours", "couvreur-saint-avertin", "couvreur-veigne", "couvreur-montbazon"],
  },

  // ─────────────────────────────────────────────────────────── BALLAN-MIRÉ ──
  {
    slug: "couvreur-ballan-mire",
    name: "Ballan-Miré",
    postalCode: "37510",
    h1: "Couvreur zingueur à Ballan-Miré",
    metaTitle: "Artisan couvreur à Ballan-Miré - Richard Toitures",
    metaDescription: "Une fuite, une toiture à rafraîchir à Ballan-Miré ? Michel Richard répare, démousse et rénove votre couverture. Devis gratuit sous 24 h ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/chantier-couvreur-maison-colombages-richard-toitures-28.webp", width: 1600, height: 1200, alt: "Le camion de chantier devant une maison à colombages — Richard Toitures, couvreur à Ballan-Miré" },
    intro: [
      "<strong>Vous cherchez un spécialiste de la toiture à Ballan-Miré ? Je mets mon savoir-faire au service de votre couverture</strong> : entretien avec démoussage et nettoyage, traitements hydrofuges, réparation de fuites, rénovation des toitures anciennes.",
      "Je me déplace gratuitement pour examiner votre toit et je vous remets un devis sous 24 heures. En cas d'urgence, je réponds 24 h/24.",
    ],
    bullets: ["Deux générations d'artisans couvreurs", "Spécialiste des toitures traditionnelles", "Garantie décennale"],
    servicesTitle: "Les travaux que je réalise",
    cards: [
      { href: "/nettoyage-toiture-ballan-mire/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Démoussage & nettoyage", text: "Démousser sans abîmer : tout est là. J'adapte la pression, les produits et le geste au matériau de votre couverture, puis je protège le nettoyage de toiture par un traitement hydrofuge." },
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture à Ballan-Miré", text: "Tuile cassée, ardoise glissée, infiltration au plafond : j'interviens sans tarder, je bâche si la situation l'exige et je remonte jusqu'à l'origine de la fuite avant de réparer." },
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture", text: "Du simple versant à la réfection complète, je rénove les couvertures en tuile, en ardoise et en zinc. Le matériau est choisi en fonction de l'existant, jamais au hasard." },
    ],
    cta: {
      title: "Votre entreprise de couverture à Ballan-Miré",
      text: "Un toit s'examine de près avant de se chiffrer. C'est pourquoi je commence toujours par me déplacer chez vous, gratuitement, pour regarder l'état de la couverture, de la zinguerie et des points singuliers. Mes 10 années d'expérience dans les travaux de couverture à Ballan-Miré et alentour me permettent de vous proposer une solution juste, expliquée clairement dans le devis.",
      ctaLabel: "Demander un devis gratuit",
      photo: { src: "/photos-chantier/renovation-toiture-ferme-nacelle-richard-toitures-39-2.webp", width: 900, height: 1600, alt: "Intervention en nacelle sur la toiture d'une ferme — Richard Toitures, couvreur à Ballan-Miré" },
    },
    longue: {
      title: "Faites appel à une entreprise de couverture-zinguerie pour vos travaux de charpente et de zinguerie",
      paragraphs: [
        "Couverture, zinguerie, charpente : les trois se travaillent ensemble. Une toiture qui fuit peut cacher un liteau fatigué ; une gouttière qui déborde finit par tacher la façade ; une panne affaissée déforme tout un versant. Formé de père en fils, j'ai appris à lire ces signes et à traiter la cause plutôt que le symptôme. C'est ce qui distingue une intervention d'artisan d'un simple dépannage. Avant tout devis, je passe la toiture en revue, du faîtage aux gouttières, pour ne chiffrer que ce qui est utile. Le devis distingue clairement la couverture, la zinguerie et la charpente : vous savez où va chaque euro.",
        "À Ballan-Miré, la zinguerie occupe une bonne part de mes chantiers : pose et remplacement de gouttières, façonnage de noues, solins et abergements de cheminée, chéneaux. Le zinc se coupe, se plie et se soude sur mesure — un ouvrage bien exécuté guide l'eau sans débordement pendant des décennies, avec une pente régulière de 0,5 cm par mètre pour les gouttières. En pied de mur, un dauphin en fonte protège la descente là où elle est exposée aux chocs.",
        "Côté charpente, j'interviens sur les éléments accessibles lors des travaux de couverture : remplacement de liteaux et de voliges, reprise ponctuelle de chevrons, traitement des bois. Si la structure demande davantage, je vous le dis franchement et je vous oriente. Mon rôle est de vous donner une vision honnête de l'état du toit, pas de vendre des travaux inutiles. Après mon passage, vous recevez des photos de l'état des bois, avant et après traitement.",
        "Dernier point, et non des moindres : refaire certains ouvrages d'une toiture implique le respect du code de l'urbanisme, notamment du plan local d'urbanisme (PLU) ou du plan d'occupation des sols. Modifier l'aspect de la couverture ou créer une ouverture nécessite le plus souvent une déclaration préalable. Le service urbanisme de la mairie de Ballan-Miré vous précisera les règles applicables à votre parcelle.",
      ],
    },
    mairie: { label: "Mairie de Ballan-Miré", address: "12 place du 11 Novembre, 37510 Ballan-Miré", url: "https://www.mairie-ballan-mire.fr/" },
    nearby: ["couvreur-savonnieres", "couvreur-druye", "couvreur-la-riche", "couvreur-monts"],
  },

  // ─────────────────────────────────────────────────────────── SAVONNIÈRES ──
  {
    slug: "couvreur-savonnieres",
    name: "Savonnières",
    postalCode: "37510",
    h1: "Couvreur à Savonnières",
    metaTitle: "Entreprise de couverture à Savonnières - Devis gratuit",
    metaDescription: "Michel Richard, couvreur zingueur, intervient à Savonnières : démoussage de toiture, traitement hydrofuge, réparations. Devis gratuit ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/renovation-toiture-ferme-pierre-richard-toitures-05.webp", width: 1600, height: 1200, alt: "Ferme en pierre et sa toiture — Richard Toitures, couvreur à Savonnières" },
    intro: [
      "<strong>Besoin d'un spécialiste de la toiture à Savonnières ? Je suis à votre service pour toute la vie de votre couverture</strong> : démoussage et nettoyage, application d'hydrofuge, recherche de fuites, réparation d'infiltrations, remplacement des toitures abîmées.",
      "Artisan couvreur du secteur, j'interviens rapidement — en urgence 24 h/24 quand il le faut. Déplacement, conseil et devis gratuits.",
    ],
    bullets: ["Entreprise artisanale de couverture", "Couvreur de père en fils", "Tous matériaux de couverture"],
    servicesTitle: "Couverture : mes prestations",
    cards: [
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture", text: "Longères, fermes, maisons récentes : je rénove tous les types de toits, en tuile plate, tuile mécanique ou ardoise, en conservant les éléments sains et en remplaçant le reste." },
      { href: "/nettoyage-toiture-savonnieres/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Nettoyage de toiture à Savonnières", text: "Le démoussage se joue dans le geste : une basse pression bien menée nettoie sans creuser le matériau. Je termine par un traitement qui retarde la repousse des mousses plusieurs années." },
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture", text: "Une fuite n'attend pas. Je me déplace vite, je protège la zone touchée — bâche comprise si nécessaire — puis je recherche l'origine de l'infiltration et je répare pour de bon." },
    ],
    cta: {
      title: "Un couvreur zingueur au service de Savonnières",
      text: "Avant tout devis, je viens voir votre toiture. Sur place, j'examine la couverture, les gouttières et les points sensibles, je vous montre ce que j'observe et je vous propose la suite — entretien, réparation ou rénovation. Après 10 années d'expérience dans les travaux de couverture à Savonnières et dans les communes voisines, je sais qu'un bon diagnostic vaut mieux qu'un long discours.",
      ctaLabel: "Demander une intervention",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-4.webp", width: 1200, height: 1600, alt: "Démoussage de toiture en cours — Richard Toitures, couvreur à Savonnières" },
    },
    longue: {
      title: "Faites appel à un couvreur zingueur pour la réfection de votre toiture",
      paragraphs: [
        "Mon métier, je l'ai appris en famille : deux générations de couvreurs, des centaines de toits, et une conviction — une réfection réussie commence par un examen honnête de l'existant. Avant de proposer quoi que ce soit à Savonnières, je monte un diagnostic complet : état des tuiles ou des ardoises, du faîtage, des rives, de la zinguerie, et de ce qui se voit moins, liteaux et voliges. Ce relevé vous est remis avec le devis, photos à l'appui. La visite ne prend qu'une heure ou deux et vous évite bien des incertitudes.",
        "Une réfection ne signifie pas toujours tout remplacer. Lorsqu'une partie de la couverture reste saine, je la conserve et je concentre le travail sur les zones fatiguées : c'est mieux pour le toit, et pour votre budget. Les tuiles anciennes en bon état peuvent même être reposées — une pratique courante sur les toits en tuile plate, qui garde au toit son caractère. La même mesure vaut pour la zinguerie : un chéneau se répare souvent avant de devoir se remplacer. Quand deux options se valent, je chiffre les deux et je vous laisse arbitrer.",
        "La zinguerie accompagne chacune de ces réfections : gouttières et descentes redimensionnées, noues refaites à neuf, solins et abergements repris au niveau des cheminées. Ces ouvrages décident de la manière dont l'eau quitte le toit ; les négliger revient à refaire une couverture pour la voir fuir par ses bords.",
        "Avant d'engager le chantier, un passage par les règles d'urbanisme s'impose : la réfection d'une toiture relève du code de l'urbanisme et, selon les cas, du plan local d'urbanisme (PLU) ou du plan d'occupation des sols. Un changement de matériau ou de teinte, une fenêtre de toit : la déclaration préalable est souvent obligatoire. Renseignez-vous auprès du service urbanisme de la mairie de Savonnières avant de commencer.",
      ],
    },
    mairie: { label: "Mairie de Savonnières", address: "Rue Principale, 37510 Savonnières", url: "https://www.savonnieres.fr/" },
    nearby: ["couvreur-ballan-mire", "couvreur-druye", "couvreur-la-riche"],
  },

  // ────────────────────────────────────────────────────────────────── DRUYE ──
  {
    slug: "couvreur-druye",
    name: "Druye",
    postalCode: "37190",
    h1: "Artisan couvreur à Druye",
    metaTitle: "Couvreur à Druye - Devis gratuit - Richard Toitures",
    metaDescription: "Michel Richard entretient et répare tuiles et ardoises à Druye : démoussage, zinguerie, recherche de fuite. Déplacement et devis gratuits ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/renovation-toiture-longere-richard-toitures-16-2.webp", width: 1600, height: 1200, alt: "Longère en cours de rénovation de toiture — Richard Toitures, couvreur à Druye" },
    intro: [
      "<strong>Vous avez besoin d'un spécialiste de la toiture à Druye ? Je m'occupe de votre couverture de A à Z</strong> : entretien avec démoussage et nettoyage, traitement hydrofuge, réparation de fuites et d'infiltrations, rénovation des toitures anciennes.",
      "J'interviens dans la commune du lundi au samedi, et 24 h/24 en urgence. Le devis est gratuit et vous parvient sous 24 heures.",
    ],
    bullets: ["Savoir-faire artisanal", "10 années d'expérience", "Garantie décennale"],
    servicesTitle: "Ce que je fais pour votre toiture",
    cards: [
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture", text: "Mon atout, c'est la proximité : j'arrive vite, je pose une bâche si l'eau entre, puis je recherche l'origine de la fuite et je répare avec les matériaux qui conviennent." },
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture à Druye", text: "Tuile plate, tuile mécanique en terre cuite, ardoise : je maîtrise les matériaux qui couvrent les maisons et les longères de Druye, et je rénove versant par versant ou en totalité." },
      { href: "/nettoyage-toiture-druye/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Nettoyage & démoussage", text: "Un nettoyage de toiture réussi ne laisse aucune trace de son passage : pas de tuile déplacée, pas de matériau creusé. Basse pression, produits adaptés, hydrofuge en option." },
    ],
    cta: {
      title: "Une entreprise de couverture qui intervient à Druye",
      text: "Appelez-moi, décrivez-moi votre toit, et je viens l'examiner sans frais. Sur place, je contrôle la couverture et la zinguerie, je vous montre les photos de ce que je constate et je vous remets un devis détaillé. Mes 10 années d'expérience dans les travaux de couverture à Druye et dans les communes rurales voisines m'ont appris une chose : un client bien informé est un client satisfait.",
      ctaLabel: "Obtenir mon devis gratuit",
      photo: { src: "/photos-chantier/renovation-toiture-longere-richard-toitures-16-4.webp", width: 1200, height: 1600, alt: "Rénovation de toiture d'une longère avec nacelle — Richard Toitures, couvreur à Druye" },
    },
    longue: {
      title: "Faites appel à un artisan couvreur pour l'entretien de votre toiture",
      paragraphs: [
        "Entretenir un toit coûte toujours moins cher que le réparer. C'est la première chose que m'a transmise mon père, couvreur avant moi, et dix années de chantiers n'ont fait que la confirmer. Un contrôle régulier de la couverture — après l'automne et ses feuilles, après un gros coup de vent — permet de reprendre une tuile déplacée ou un solin fatigué avant que l'eau ne s'invite dans la charpente.",
        "Mon programme d'entretien à Druye tient en trois gestes : le démoussage, réalisé à basse pression pour préserver le grain des tuiles et des ardoises ; le traitement hydrofuge, qui imprègne le matériau sur quelques millimètres et retarde la repousse des mousses ; et le curage des gouttières, pour que l'eau de pluie continue de filer vers les descentes au lieu de déborder sur les façades. Un hydrofuge appliqué sur une couverture propre protège en général cinq à sept ans. Ce suivi peut prendre la forme d'un simple passage annuel, convenu ensemble à l'avance.",
        "Ces interventions sont aussi l'occasion de surveiller les points singuliers du toit : faîtage, arêtiers, rives, abergements de cheminée. Ce sont eux qui travaillent le plus, et eux qui lâchent en premier. Les petites reprises se font souvent le jour même du contrôle. En les traitant au fil de l'eau, on repousse de plusieurs années la vraie rénovation — et on la planifie sereinement au lieu de la subir. Après ma visite, vous recevez un point précis sur l'état du toit, photos à l'appui.",
        "Si l'entretien vous amène un jour à des travaux plus visibles — changement de matériau, nouvelle teinte, fenêtre de toit — souvenez-vous que la toiture relève du code de l'urbanisme, et notamment du plan local d'urbanisme (PLU) ou du plan d'occupation des sols. Une déclaration préalable est alors souvent requise. Le service urbanisme de la mairie de Druye vous précisera les démarches à prévoir.",
      ],
    },
    mairie: { label: "Mairie de Druye", address: "7 rue des Fonchers, 37190 Druye", url: "https://www.druye.fr/" },
    nearby: ["couvreur-ballan-mire", "couvreur-savonnieres", "couvreur-monts"],
  },

  // ───────────────────────────────────────────────────────────────── VEIGNÉ ──
  {
    slug: "couvreur-veigne",
    name: "Veigné",
    postalCode: "37250",
    h1: "Couvreur zingueur à Veigné",
    metaTitle: "Entreprise de couverture à Veigné - Devis gratuit 24 h",
    metaDescription: "Richard Toitures rénove, nettoie et répare les couvertures à Veigné. Artisan couvreur, garantie décennale, urgences 24 h/24. Devis gratuit ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/couverture-ardoise-isolation-toiture-richard-toitures-24-1.webp", width: 1600, height: 1200, alt: "Couverture en ardoise avec isolation de toiture — Richard Toitures, couvreur à Veigné" },
    intro: [
      "<strong>Une toiture à confier à un professionnel à Veigné ? Je réponds présent</strong> : entretien avec démoussage et nettoyage de la couverture, application de traitements hydrofuges, recherche de fuites, remplacement des toitures anciennes, réparation d'infiltrations.",
      "Je me déplace gratuitement pour examiner votre toit, j'établis le devis sous 24 heures, et je réponds aux urgences 24 h/24.",
    ],
    bullets: ["Couvreur depuis deux générations", "Tous matériaux de couverture", "10 années d'expérience"],
    servicesTitle: "Mes services de couvreur",
    cards: [
      { href: "/nettoyage-toiture-veigne/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Nettoyage de toiture à Veigné", text: "Je débarrasse votre couverture des mousses et lichens qui l'étouffent, à basse pression et avec des produits choisis pour le matériau. Le nettoyage se conclut par un hydrofuge protecteur." },
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture", text: "Quand la couverture arrive en bout de course, je la remplace : tuile mécanique, tuile plate, ardoise, zinc en complément. Je vous guide vers le matériau adapté à votre toit et à votre budget." },
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture", text: "Fuite après un orage, tuiles envolées, gouttière percée : je répare vite et bien. En urgence, la pose d'une bâche met votre maison à l'abri en attendant la réparation définitive." },
    ],
    cta: {
      title: "Votre artisan couvreur près de Veigné",
      text: "Installé à quelques minutes de Veigné, je viens examiner votre toiture rapidement — souvent dans la semaine, le jour même en cas d'urgence. Sur place, mes 10 années d'expérience dans les travaux de couverture me permettent de poser un diagnostic clair : je vous dis ce qui doit être fait maintenant, ce qui peut attendre, et je chiffre le tout gratuitement.",
      ctaLabel: "Demander un devis gratuit",
      photo: { src: "/photos-chantier/couverture-ardoise-echafaudage-richard-toitures-30-1.webp", width: 1200, height: 1600, alt: "Couverture en ardoise avec échafaudage — Richard Toitures, couvreur à Veigné" },
    },
    longue: {
      title: "Faites appel à une entreprise de couverture pour le remplacement de votre toiture",
      paragraphs: [
        "On ne remplace pas une toiture tous les dix ans : c'est un chantier qu'on mène une fois, et qu'il faut mener bien. Mon expérience — dix années de couverture, un métier appris de père en fils — me sert précisément à cela : évaluer si votre toit a vraiment besoin d'être remplacé, ou si une rénovation partielle suffit encore. Je vous donne un avis d'artisan, pas un argumentaire commercial. Ce premier échange ne vous coûte rien : le déplacement et le devis sont gratuits. Et si votre toit peut attendre deux ou trois ans, je vous le dis aussi.",
        "Quand le remplacement s'impose à Veigné, j'organise le chantier de bout en bout : dépose de l'ancienne couverture — tuiles saines mises de côté, gravats évacués —, contrôle et reprise du support — liteaux, voliges —, pose d'un écran de sous-toiture HPV, puis mise en place du matériau neuf, rang après rang, jusqu'au faîtage. Les découpes autour des cheminées et des ouvertures reçoivent leurs solins et abergements en zinc. Si la couverture doit rester ouverte plusieurs jours, le toit est bâché en fin de journée.",
        "Le choix du matériau se fait ensemble : tuile mécanique pour son rapport qualité-prix, tuile plate pour les pentes fortes, ardoise pour sa longévité, zinc ou bac acier sur certaines annexes. Je vous présente des échantillons, les écarts de prix et ce que cela change pour l'entretien futur. Vous décidez en connaissance de cause, échantillons en main, à la lumière du jour.",
        "Pensez enfin aux autorisations : remplacer une toiture engage le code de l'urbanisme, à commencer par le plan local d'urbanisme (PLU) qui peut encadrer teintes et matériaux. Dans la plupart des cas, une déclaration préalable de travaux doit être déposée avant d'ouvrir le chantier. Le service urbanisme de la mairie de Veigné vous confirmera les règles en vigueur pour votre habitation.",
      ],
    },
    mairie: { label: "Mairie de Veigné", address: "2 place du Maréchal-Leclerc, 37250 Veigné", url: "https://www.veigne.fr/" },
    nearby: ["couvreur-montbazon", "couvreur-chambray-les-tours", "couvreur-saint-avertin", "couvreur-monts"],
  },

  // ─────────────────────────────────────────────────────────────── MONTBAZON ──
  {
    slug: "couvreur-montbazon",
    name: "Montbazon",
    postalCode: "37250",
    h1: "Entreprise de couverture à Montbazon",
    metaTitle: "Artisan couvreur à Montbazon - Devis gratuit sous 24 h",
    metaDescription: "Toiture à démousser, fuite à réparer à Montbazon ? Michel Richard, couvreur zingueur, se déplace rapidement. Devis gratuit sous 24 h ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/ecran-sous-toiture-pose-velux-richard-toitures-23-2.webp", width: 1600, height: 777, alt: "Pose d'écran de sous-toiture et de fenêtres de toit — Richard Toitures, couvreur à Montbazon" },
    intro: [
      "<strong>Vous cherchez un spécialiste de la toiture à Montbazon ? Votre couverture est entre de bonnes mains</strong> : entretien avec démoussage et nettoyage, traitements hydrofuges, recherche de fuites, réparation d'infiltrations, rénovation des toitures abîmées.",
      "Je réponds vite — 24 h/24 pour les urgences — et le devis, gratuit et sans engagement, vous est remis sous 24 heures.",
    ],
    bullets: ["Entreprise artisanale de couverture", "Spécialiste des toitures traditionnelles", "Garantie décennale"],
    servicesTitle: "Mes prestations de couverture",
    cards: [
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture", text: "Réfection d'un versant, remplacement complet, reprise du faîtage : je rénove les couvertures en tuile et en ardoise avec les techniques et les matériaux qui conviennent à votre toit." },
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture à Montbazon", text: "J'interviens rapidement pour stopper une fuite : bâche d'urgence si besoin, recherche de l'origine de l'infiltration, remplacement des éléments touchés. Le toit repart pour des années." },
      { href: "/nettoyage-toiture-montbazon/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Nettoyage & démoussage", text: "La mousse retient l'humidité contre le matériau et finit par le rendre poreux. Je pratique un nettoyage de toiture respectueux — basse pression, traitement, hydrofuge — qui inverse la tendance." },
    ],
    cta: {
      title: "Un couvreur à Montbazon, à côté de chez vous",
      text: "Depuis mon atelier, Montbazon est à un quart d'heure : quand vous appelez, je peux venir vite. J'examine la toiture, je photographie ce que je constate et je vous explique les options avec leurs coûts. Dix années d'expérience dans les travaux de couverture à Montbazon et dans la vallée de l'Indre m'ont appris à faire simple : un diagnostic honnête, un devis clair, un chantier propre.",
      ctaLabel: "Demander une intervention",
      photo: { src: "/photos-chantier/renovation-toiture-longere-pierre-richard-toitures-31-2.webp", width: 720, height: 720, alt: "Chantier de rénovation de toiture, échafaudage en place — Richard Toitures, couvreur à Montbazon" },
    },
    longue: {
      title: "Faites appel à un couvreur zingueur pour vos travaux de zinguerie et de charpente",
      paragraphs: [
        "Le zingueur est le compagnon indispensable du couvreur : sans zinguerie, pas de toit étanche. Gouttières, descentes, noues, solins, abergements, chéneaux — tous ces ouvrages en zinc collectent l'eau de pluie et la conduisent hors de la maison. Je les façonne et je les pose depuis dix ans, avec le soin qu'exige un matériau qui se travaille à la main, pli par pli, soudure par soudure. Ce travail à la main demande du temps, mais il fait la différence sur la tenue des ouvrages. L'épaisseur du zinc, 0,65 ou 0,80 mm selon l'ouvrage, se choisit : elle ne s'improvise pas.",
        "À Montbazon, mes chantiers de zinguerie vont du remplacement d'une gouttière percée à la réfection complète des évacuations d'une maison : redimensionnement des développés, pose de crapaudines pour retenir les feuilles, création de boîtes à eau, raccordement des descentes. Une gouttière bien posée respecte une pente d'environ 0,5 cm par mètre — un détail invisible qui change tout. J'interviens aussi sur les chéneaux encastrés, plus délicats, qui exigent des soudures parfaitement étanches.",
        "La charpente entre en jeu dès que la couverture s'ouvre : je remplace les liteaux et les voliges fatigués, je reprends ponctuellement un chevron — toujours sur toute sa portée, jamais rabouté à l'économie —, je traite les bois avant de refermer. Ces interventions se font dans la continuité du chantier de couverture, sans intervenant supplémentaire à coordonner de votre côté. Les bois remplacés repartent avec le reste des gravats : le chantier est laissé propre.",
        "Comme tous les travaux qui touchent à l'aspect d'un toit, ceux-ci peuvent relever du code de l'urbanisme — plan local d'urbanisme (PLU) ou plan d'occupation des sols selon les communes. Le remplacement à l'identique reste généralement libre, mais un changement visible demande souvent une déclaration préalable. Le service urbanisme de la mairie de Montbazon saura vous dire ce qui s'applique chez vous.",
      ],
    },
    mairie: { label: "Mairie de Montbazon", address: "Place André Delaunay, 37250 Montbazon", url: "https://ville-montbazon.fr/" },
    nearby: ["couvreur-veigne", "couvreur-monts", "couvreur-chambray-les-tours"],
  },

  // ──────────────────────────────────────────────────────────────── LA RICHE ──
  {
    slug: "couvreur-la-riche",
    name: "La Riche",
    postalCode: "37520",
    h1: "Couvreur à La Riche",
    metaTitle: "Couvreur zingueur à La Riche (37520) - Devis gratuit",
    metaDescription: "Michel Richard rénove, entretient et répare les toitures de La Riche. Entreprise artisanale de couverture, devis gratuit sous 24 h ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/refection-toiture-pignon-brique-richard-toitures-37-2.webp", width: 1600, height: 1200, alt: "Réfection de toiture sur un pignon en brique — Richard Toitures, couvreur à La Riche" },
    intro: [
      "<strong>Vous avez besoin d'un spécialiste de la toiture à La Riche ? Je prends soin de votre couverture</strong> : entretien avec démoussage et nettoyage, application de traitements hydrofuges, recherche de fuites, réparation d'infiltrations, remplacement des toitures anciennes.",
      "J'interviens du lundi au samedi de 8 h à 20 h, et 24 h/24 pour les urgences. Devis gratuit, remis sous 24 heures.",
    ],
    bullets: ["Couvreur de père en fils", "Tous matériaux de couverture", "Garantie décennale"],
    servicesTitle: "Mes interventions sur votre toiture",
    cards: [
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture", text: "De la tuile cassée à l'infiltration installée, je répare vite : bâchage d'urgence quand il faut protéger, recherche de fuite, remplacement des éléments abîmés. Rapidité et proximité font le reste." },
      { href: "/nettoyage-toiture-la-riche/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Démoussage de toiture à La Riche", text: "Le nettoyage d'une couverture demande de la mesure : trop de pression abîme, trop peu ne sert à rien. J'ajuste le geste au matériau et je termine par un hydrofuge qui protège durablement le toit." },
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture", text: "Maisons de bourg, pavillons, petits collectifs : je rénove les couvertures en ardoise, tuile plate et tuile mécanique, en totalité ou versant par versant selon l'état du toit." },
    ],
    cta: {
      title: "Votre entreprise de couverture à La Riche",
      text: "Chez vous en quelques minutes depuis Joué-lès-Tours, j'examine votre toiture sans frais et sans détour : ce qui va, ce qui fatigue, ce qui doit être repris. Mes 10 années d'expérience dans les travaux de couverture à La Riche et dans l'agglomération me permettent de chiffrer juste — et de tenir le devis. Conseil, déplacement et devis gratuits.",
      ctaLabel: "Obtenir mon devis gratuit",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-5.webp", width: 1200, height: 1600, alt: "Démoussage et traitement de toiture en cours — Richard Toitures, couvreur à La Riche" },
    },
    longue: {
      title: "Faites appel à une entreprise de couverture pour l'entretien de votre toiture",
      paragraphs: [
        "Une toiture bien entretenue peut traverser plusieurs décennies ; une toiture délaissée réclame une rénovation au bout de quinze ans. Toute la différence tient à quelques rendez-vous réguliers. Héritier d'un savoir-faire familial — deux générations d'artisans couvreurs —, j'ai fait de l'entretien un pilier de mon activité à La Riche, pour les particuliers comme pour les syndics et les entreprises. J'établis pour votre toit un calendrier d'entretien adapté à son âge et à son environnement immédiat. La première visite sert de point de référence : tout ce qui suit s'y compare.",
        "Concrètement, un entretien complet comprend le démoussage de la couverture à basse pression, l'application d'un traitement contre les mousses et lichens, puis un hydrofuge qui imprègne le matériau et fait perler l'eau. Les tuiles ou ardoises déplacées sont remises en place, les éléments cassés remplacés à l'identique. Le tout se termine par le curage des gouttières et la vérification des descentes. Le rinçage se fait à l'eau claire, jamais à haute pression, et les mousses retirées sont évacuées dans les règles.",
        "Ce suivi régulier a un autre avantage : il me permet de détecter tôt les signes qui annoncent de plus gros travaux — un faîtage qui se descelle, un solin qui se décolle, une volige qui ploie. Vous êtes prévenu à temps, vous planifiez la dépense, et vous évitez le dégât des eaux qui transforme une réparation en sinistre. Ce constat est consigné avec photos, pour suivre l'évolution du toit d'une visite à l'autre.",
        "Gardez enfin en tête le volet réglementaire : dès qu'un entretien débouche sur des travaux modifiant l'aspect du toit, le code de l'urbanisme s'applique — plan local d'urbanisme (PLU) ou plan d'occupation des sols selon les cas — et une déclaration préalable peut être exigée. Le service urbanisme de la mairie de La Riche vous renseignera précisément.",
      ],
    },
    mairie: { label: "Mairie de La Riche", address: "Place du Maréchal Leclerc, 37520 La Riche", url: "https://www.ville-lariche.fr/" },
    nearby: ["couvreur-tours", "couvreur-saint-cyr-sur-loire", "couvreur-fondettes", "couvreur-ballan-mire"],
  },

  // ────────────────────────────────────────────────────────────────── LARÇAY ──
  {
    slug: "couvreur-larcay",
    name: "Larçay",
    postalCode: "37270",
    h1: "Artisan couvreur à Larçay",
    metaTitle: "Entreprise de couverture à Larçay - Devis gratuit 24 h",
    metaDescription: "Nettoyage de toiture, zinguerie, réparation de fuite à Larçay : Richard Toitures intervient rapidement. Devis gratuit et sans engagement ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/toiture-terrasse-etancheite-richard-toitures-13-1.webp", width: 1600, height: 1200, alt: "Toiture en cours de travaux d'étanchéité — Richard Toitures, couvreur à Larçay" },
    intro: [
      "<strong>Besoin d'un spécialiste de la toiture à Larçay ? Je m'occupe de votre couverture, quel que soit son état</strong> : démoussage et nettoyage, traitement hydrofuge, recherche de fuites, réparation d'infiltrations, remplacement des toitures fatiguées.",
      "Je me déplace gratuitement pour établir un diagnostic, je remets le devis sous 24 heures et je réponds aux urgences 24 h/24.",
    ],
    bullets: ["Deux générations d'artisans couvreurs", "10 années d'expérience", "Garantie décennale"],
    servicesTitle: "Les travaux que je réalise",
    cards: [
      { href: "/nettoyage-toiture-larcay/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Nettoyage & démoussage", text: "Redonner son aspect à une couverture sans l'abîmer, c'est un savoir-faire : basse pression, produits dosés, rinçage maîtrisé. Le nettoyage de toiture se conclut par un traitement hydrofuge." },
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture à Larçay", text: "Tuile mécanique, tuile plate ou ardoise : je remplace les couvertures usées par le matériau qui convient au toit, en reprenant liteaux, écran de sous-toiture et zinguerie au passage." },
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture", text: "Une infiltration signalée tôt se répare à moindre coût. J'interviens rapidement, je localise l'origine de la fuite et je remets la couverture en état — bâche d'urgence comprise si nécessaire." },
    ],
    cta: {
      title: "Un couvreur zingueur au service de Larçay",
      text: "Votre toiture mérite mieux qu'un diagnostic à distance : je viens la voir. Sur place, j'inspecte la couverture, la zinguerie et les points singuliers, puis je vous remets un devis détaillé et gratuit. Dix années d'expérience dans les travaux de couverture à Larçay et dans les bourgs voisins, un savoir-faire familial : voilà ce que je mets sur votre toit.",
      ctaLabel: "Demander un devis gratuit",
      photo: { src: "/photos-chantier/depose-charpente-toiture-richard-toitures-34-3.webp", width: 1600, height: 1600, alt: "Travaux de charpente et de couverture en cours — Richard Toitures, couvreur à Larçay" },
    },
    longue: {
      title: "Faites appel à un artisan couvreur pour la réfection de votre toiture",
      paragraphs: [
        "Une réfection de toiture réussie repose sur un ordre immuable : diagnostiquer, déposer, vérifier le support, poser, contrôler. J'applique cet ordre depuis dix ans, comme mon père me l'a appris. À Larçay, cela me permet de reprendre des couvertures très différentes — de la maison récente au bâtiment plus âgé — avec à la fin le même résultat : un toit hors d'eau, propre, et fait pour longtemps. Le calendrier des travaux est fixé avec vous, puis respecté, et le chantier est préparé en amont pour limiter le temps passé toiture ouverte.",
        "La phase de diagnostic est celle à laquelle je consacre le plus d'attention. J'examine le pureau des tuiles ou des ardoises, l'état des liteaux, les points de faiblesse au niveau des noues et des rives. C'est ce relevé précis qui décide de l'ampleur du chantier : réfection totale, reprise d'un seul versant, ou simple remplacement des éléments défectueux — les formats d'ardoise courants, 32 × 22 et 30 × 20, restent disponibles pour les reprises ponctuelles. Vous recevez un devis qui correspond à ce que votre toit demande réellement.",
        "Pendant les travaux, le support est remis à niveau — liteaux remplacés là où ils faiblissent, écran de sous-toiture posé si la configuration le permet — puis la couverture neuve monte rang par rang jusqu'au faîtage, scellé ou posé à sec selon les cas. La zinguerie termine l'ensemble : gouttières, solins et abergements assurent l'évacuation de l'eau. Un contrôle final, versant par versant, précède mon départ du chantier.",
        "Avant d'ouvrir le chantier, vérifiez les règles d'urbanisme : la réfection d'une toiture est encadrée par le code de l'urbanisme, via le plan local d'urbanisme (PLU) ou le plan d'occupation des sols. Si l'aspect du toit change — teinte, matériau, ouvertures —, une déclaration préalable est généralement demandée. Le service urbanisme de la mairie de Larçay vous précisera la marche à suivre.",
      ],
    },
    mairie: { label: "Mairie de Larçay", address: "3 rue du 8 Mai 1945, 37270 Larçay", url: "https://www.ville-larcay.fr/" },
    nearby: ["couvreur-saint-avertin", "couvreur-chambray-les-tours", "couvreur-veigne"],
  },

  // ──────────────────────────────────────────────────── SAINT-CYR-SUR-LOIRE ──
  {
    slug: "couvreur-saint-cyr-sur-loire",
    name: "Saint-Cyr-sur-Loire",
    postalCode: "37540",
    h1: "Couvreur à Saint-Cyr-sur-Loire",
    metaTitle: "Artisan couvreur à Saint-Cyr-sur-Loire - Devis gratuit",
    metaDescription: "Michel Richard prend soin des toitures de Saint-Cyr-sur-Loire : démoussage, hydrofuge, remplacement d'ardoises. Devis gratuit sous 24 h ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/renovation-toiture-maison-bourgeoise-richard-toitures-26-2.webp", width: 1600, height: 1600, alt: "Maison bourgeoise en rénovation de toiture — Richard Toitures, couvreur à Saint-Cyr-sur-Loire" },
    intro: [
      "<strong>Vous cherchez un spécialiste de la toiture à Saint-Cyr-sur-Loire ? Je veille sur votre couverture</strong> : entretien avec démoussage et nettoyage, traitements hydrofuges, recherche de fuites, réparation d'infiltrations, rénovation des toitures anciennes.",
      "Artisan couvreur de l'agglomération, j'interviens sans délai — 24 h/24 en urgence — et je remets un devis gratuit sous 24 heures.",
    ],
    bullets: ["Entreprise artisanale de couverture", "Spécialiste des toitures traditionnelles", "10 années d'expérience"],
    servicesTitle: "Couverture : mes prestations",
    cards: [
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture", text: "Ardoise posée au crochet, tuile plate, tuile mécanique : je rénove les couvertures de Saint-Cyr-sur-Loire dans les règles de l'art, du remplacement partiel à la réfection complète." },
      { href: "/nettoyage-toiture-saint-cyr-sur-loire/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Démoussage & nettoyage", text: "Un nettoyage de toiture bien conduit rend au toit son aspect d'origine sans fragiliser le matériau. Basse pression, traitement anti-mousse, hydrofuge : trois étapes, aucun raccourci." },
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture", text: "Ardoise glissée, solin ouvert, fuite au plafond : je recherche l'origine du problème et je le corrige durablement. En urgence, une bâche protège la maison le temps de la réparation." },
    ],
    cta: {
      title: "Une entreprise de couverture pour Saint-Cyr-sur-Loire",
      text: "Sur simple appel, je viens examiner votre toiture et vous donner un avis franc : entretien, réparation ou rénovation, je ne propose que ce qui est utile. Mon expertise s'appuie sur 10 années d'expérience dans les travaux de couverture à Saint-Cyr-sur-Loire et dans toute l'agglomération de Tours. Déplacement, conseil et devis gratuits, sans engagement.",
      ctaLabel: "Demander une intervention",
      photo: { src: "/photos-chantier/zinguerie-pose-gouttieres-richard-toitures-11-2.webp", width: 1200, height: 1600, alt: "Pose de gouttières en zinc sur un chantier — Richard Toitures, couvreur à Saint-Cyr-sur-Loire" },
    },
    longue: {
      title: "Faites appel à une entreprise de couverture-zinguerie pour l'entretien de votre toiture",
      paragraphs: [
        "L'entretien d'une toiture est un métier à part entière, que j'exerce avec les mêmes exigences que la rénovation. Couvreur formé de père en fils, je sais qu'un toit s'use d'abord par petites touches : une mousse qui s'installe, un crochet qui se desserre, une gouttière qui retient les feuilles. Traiter ces détails à temps, c'est offrir des années de tranquillité à votre couverture de Saint-Cyr-sur-Loire. Ce suivi convient aussi bien aux maisons qu'aux copropriétés gérées par un syndic. Un simple appel suffit pour convenir d'une visite, souvent dans la semaine.",
        "Mon intervention type commence par un examen complet du toit, versant par versant. Vient ensuite le démoussage, mené à basse pression — 2 à 3 bars, pas davantage — pour préserver le matériau, puis l'application d'un traitement qui élimine les micro-organismes en profondeur. L'hydrofuge, en dernière étape, imprègne la surface et fait glisser l'eau de pluie au lieu de la laisser stagner. Le traitement agit en quelques semaines ; les résidus disparaissent avec les pluies suivantes. Comptez 48 à 72 heures de séchage avant l'application de l'hydrofuge.",
        "L'entretien couvre aussi la zinguerie : curage des gouttières et des descentes, pose de crapaudines aux naissances pour retenir les feuilles, contrôle des soudures, vérification des solins et abergements autour des cheminées. Ces ouvrages en zinc font un travail silencieux mais décisif — tant qu'ils fonctionnent, les façades et les fondations restent au sec. Un compte rendu photographique vous est remis après l'intervention.",
        "Si votre projet d'entretien évolue vers des travaux plus visibles — changement de teinte, de matériau, pose de fenêtres de toit —, le code de l'urbanisme entre en jeu, notamment via le plan local d'urbanisme (PLU). Ces interventions exigent le plus souvent une déclaration préalable en mairie. Le service urbanisme de la mairie de Saint-Cyr-sur-Loire vous indiquera les règles propres à votre secteur.",
      ],
    },
    mairie: { label: "Mairie de Saint-Cyr-sur-Loire", address: "Parc de la Perraudière, 37540 Saint-Cyr-sur-Loire", url: "https://www.saint-cyr-sur-loire.com/" },
    nearby: ["couvreur-tours", "couvreur-fondettes", "couvreur-la-riche"],
  },

  // ─────────────────────────────────────────────────────────────── FONDETTES ──
  {
    slug: "couvreur-fondettes",
    name: "Fondettes",
    postalCode: "37230",
    h1: "Couvreur zingueur à Fondettes",
    metaTitle: "Couvreur à Fondettes - Devis gratuit - Richard Toitures",
    metaDescription: "Toiture ancienne à rénover, tuiles à remplacer à Fondettes ? Michel Richard, artisan couvreur, vous remet un devis gratuit sous 24 h ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/renovation-toiture-ferme-nacelle-richard-toitures-39-4.webp", width: 1600, height: 1200, alt: "Rénovation de toiture d'une ferme avec nacelle — Richard Toitures, couvreur à Fondettes" },
    intro: [
      "<strong>Une toiture à entretenir ou à remettre en état à Fondettes ? Je suis le professionnel qu'il vous faut</strong> : démoussage et nettoyage de la couverture, application de traitements hydrofuges, recherche de fuites, remplacement des toitures anciennes, réparation d'infiltrations.",
      "Je me déplace gratuitement, j'examine le toit et je vous remets un devis sous 24 heures. Urgences assurées 24 h/24.",
    ],
    bullets: ["Couvreur de père en fils", "Tous matériaux de couverture", "Garantie décennale"],
    servicesTitle: "Ce que je fais pour votre toiture",
    cards: [
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture", text: "Le temps joue contre une fuite : plus elle attend, plus elle coûte. J'arrive vite, je bâche si nécessaire, je trouve l'origine de l'infiltration et je répare avec les bons matériaux." },
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture à Fondettes", text: "Fermes, longères, pavillons : les toits de Fondettes portent de la tuile plate, de la tuile mécanique et de l'ardoise. Je maîtrise ces trois matériaux et je rénove sans dénaturer." },
      { href: "/nettoyage-toiture-fondettes/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Nettoyage & démoussage", text: "Le nettoyage d'une toiture se joue à la basse pression et au bon produit : assez pour retirer mousses et lichens, jamais au point d'attaquer le matériau. Hydrofuge en finition conseillé." },
    ],
    cta: {
      title: "Votre artisan couvreur à Fondettes",
      text: "Je viens examiner votre toiture gratuitement, à l'heure qui vous arrange. Après 10 années d'expérience dans les travaux de couverture à Fondettes et sur les deux rives de la Loire, j'ai appris à donner un diagnostic net : ce qui doit être fait, ce qui peut attendre, ce que ça coûte. Vous décidez ensuite, sans pression et sans engagement.",
      ctaLabel: "Obtenir mon devis gratuit",
      photo: { src: "/photos-chantier/toiture-terrasse-etancheite-richard-toitures-13-2.webp", width: 1200, height: 1600, alt: "Chantier de toiture en cours — Richard Toitures, couvreur à Fondettes" },
    },
    longue: {
      title: "Faites appel à un artisan couvreur pour la zinguerie et la charpente",
      paragraphs: [
        "Un toit ne se limite pas à ses tuiles. Dessous, la charpente porte l'ensemble ; sur les bords, la zinguerie évacue l'eau. Mon métier de couvreur zingueur — appris auprès de mon père, exercé depuis dix ans — couvre ces trois dimensions à la fois. C'est ce qui me permet, à Fondettes, de traiter un chantier dans sa globalité au lieu d'empiler les corps de métier. Le devis couvre l'ensemble, du bois au zinc, sans ligne cachée, et le planning annoncé est tenu.",
        "En zinguerie, je pose et je remplace gouttières, descentes, chéneaux et noues ; je façonne solins et abergements autour des souches de cheminée ; je soude le zinc à l'ancienne, au fer, pour des assemblages qui ne bougent pas. Un développé bien calculé et une pente régulière — la pente, environ 0,5 cm par mètre, est contrôlée au niveau — suffisent à faire disparaître les débordements qui abîment les enduits de façade. Sur les chéneaux, je vérifie systématiquement les soudures et les naissances avant l'hiver.",
        "Sur la charpente, mes interventions accompagnent les travaux de couverture : remplacement des liteaux et voliges marqués par une ancienne fuite, reprise d'un chevron, traitement préventif des bois — que je laisse sécher avant de refermer, car la précipitation se paie toujours plus tard. Le support doit être sain avant que la couverture ne referme le toit — dans le cas contraire, les problèmes reviennent en quelques hivers. Les bois neufs sont traités avant la pose, jamais après.",
        "Avant tout chantier qui modifie l'aspect de votre toit, un détour par la réglementation s'impose : le code de l'urbanisme et le plan local d'urbanisme (PLU) encadrent matériaux, teintes et ouvertures, et une déclaration préalable est souvent nécessaire. Renseignez-vous auprès du service urbanisme de la mairie de Fondettes avant de lancer les travaux.",
      ],
    },
    mairie: { label: "Mairie de Fondettes", address: "35 rue Eugène Goüin, 37230 Fondettes", url: "https://fondettes.fr/" },
    nearby: ["couvreur-saint-cyr-sur-loire", "couvreur-la-riche", "couvreur-tours"],
  },

  // ─────────────────────────────────────────────────────────────────── MONTS ──
  {
    slug: "couvreur-monts",
    name: "Monts",
    postalCode: "37260",
    h1: "Entreprise de couverture à Monts",
    metaTitle: "Couvreur zingueur à Monts (37260) - Devis gratuit 24 h",
    metaDescription: "Richard Toitures entretient, démousse et répare les toits à Monts. Couvreur artisanal, garantie décennale. Déplacement et devis gratuits ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/liteaunage-toiture-maison-pierre-richard-toitures-33-1.webp", width: 1600, height: 777, alt: "Liteaunage de la toiture d'une maison en pierre — Richard Toitures, couvreur à Monts" },
    intro: [
      "<strong>Vous avez besoin d'un spécialiste de la toiture à Monts ? Je réponds présent pour votre couverture</strong> : entretien avec démoussage et nettoyage, traitements hydrofuges, recherche de fuites, réparation d'infiltrations, remplacement des toitures usées.",
      "Du lundi au samedi — et 24 h/24 en urgence —, je me déplace, j'examine et je chiffre gratuitement, avec un devis remis sous 24 heures.",
    ],
    bullets: ["Savoir-faire artisanal", "Couvreur depuis deux générations", "Garantie décennale"],
    servicesTitle: "Mes services de couvreur",
    cards: [
      { href: "/nettoyage-toiture-monts/", icon: "/iconesprestations/nettoyage-toiture.png", title: "Démoussage de toiture à Monts", text: "Mousses, lichens et feuilles asphyxient une couverture. Mon nettoyage de toiture procède par étapes — basse pression, traitement, hydrofuge — pour nettoyer sans jamais abîmer." },
      { href: "/renovation-toiture-37/", icon: "/iconesprestations/renovation-toiture.png", title: "Rénovation de toiture", text: "Je remplace les couvertures arrivées en fin de vie : tuile mécanique, tuile plate, ardoise, avec reprise des liteaux et pose d'un écran de sous-toiture quand la configuration le permet." },
      { href: "/reparation-toiture-37/", icon: "/iconesprestations/reparation-toiture.png", title: "Réparation de toiture", text: "Fuite, faîtage descellé, gouttière débordante : je répare rapidement et durablement. En urgence, je peux poser une bâche le jour même pour protéger votre intérieur." },
    ],
    cta: {
      title: "Un artisan couvreur qui intervient à Monts",
      text: "De l'autre côté de l'Indre, mon atelier est à quelques minutes de Monts : je peux passer examiner votre toiture très vite, souvent dans la journée pour une urgence. Fort de 10 années d'expérience dans les travaux de couverture à Monts et dans les communes voisines, je vous remets un diagnostic précis et un devis gratuit — puis je fais ce qui est écrit, ni plus ni moins.",
      ctaLabel: "Demander un devis gratuit",
      photo: { src: "/photos-chantier/toiture-terrasse-etancheite-richard-toitures-13-3.webp", width: 1200, height: 1600, alt: "Toiture en cours de travaux d'étanchéité — Richard Toitures, couvreur à Monts" },
    },
    longue: {
      title: "Faites appel à un couvreur zingueur pour le remplacement de votre toiture",
      paragraphs: [
        "Le remplacement d'une toiture se prépare comme un projet, pas comme un dépannage. Dix années de métier et une formation de père en fils m'ont donné une règle simple : prendre le temps du diagnostic avant celui du chantier. J'examine la couverture de votre maison à Monts, j'évalue le support et la zinguerie, et je vous dis si le remplacement s'impose — ou si une solution plus légère tient encore la route. Cet avis vous est donné par écrit, avec photos, pour comparer sereinement. La visite peut d'ailleurs avoir lieu le samedi si vos semaines sont chargées.",
        "Le chantier lui-même suit un déroulé éprouvé : dépose de l'ancienne couverture, tri des matériaux, contrôle de la charpente, remplacement des liteaux et voliges défaillants, pose d'un écran de sous-toiture HPV, puis montée du matériau neuf rang après rang. Les gravats sont évacués au fil du chantier, jamais stockés sur place. Le faîtage, les rives et les arêtiers referment l'ensemble, avec les scellements ou les closoirs adaptés. Les tuiles déposées encore saines peuvent être réemployées sur un autre versant.",
        "Pour le matériau, je vous laisse choisir en connaissance de cause : tuile mécanique en terre cuite, économique et rapide à poser ; tuile plate, plus dense, pour les pentes marquées ; ardoise naturelle, la plus pérenne ; zinc ou bac acier sur les annexes et les faibles pentes. Prix, aspect, entretien futur : tout est comparé noir sur blanc dans le devis.",
        "Reste le volet réglementaire, à ne jamais négliger : un remplacement de toiture relève du code de l'urbanisme, et le plan local d'urbanisme (PLU) — ou l'ancien plan d'occupation des sols — peut imposer des matériaux ou des teintes. Une déclaration préalable de travaux est très souvent requise. Le service urbanisme de la mairie de Monts vous confirmera les obligations liées à votre adresse.",
      ],
    },
    mairie: { label: "Mairie de Monts", address: "2 rue Maurice Ravel, 37260 Monts", url: "https://monts.fr/" },
    nearby: ["couvreur-montbazon", "couvreur-veigne", "couvreur-druye", "couvreur-ballan-mire"],
  },
];

export function getVilleBySlug(slug) {
  return villes.find((v) => v.slug === slug);
}
