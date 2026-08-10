// Cocon nettoyage — les 13 pages satellites /nettoyage-toiture-{ville}/ du
// pilier /nettoyage-toiture-37/. Générées par
// src/pages/nettoyage-toiture-[slug].astro.
//
// Cadrage (décisions du 10 août 2026) :
// - Satellites de 800-1000 mots, toujours moins profonds que le pilier (pas de
//   tarifs détaillés, pas de FAQ) ; H1 = prestation + ville, aligné sur
//   l'ancre utilisée dans le bloc « villes desservies » du pilier.
// - Anti-cannibalisation avec les pages /couvreur-{ville}/ : ici l'intention
//   est « nettoyage/démoussage + ville », jamais « couvreur + ville ».
// - Maillage : chaque satellite lie le pilier (ancres variées), la page
//   /couvreur-{ville}/ de la même commune, et 2-3 satellites voisins.
// - Lexique du gabarit nettoyage : basse pression 2-3 bars, séchage 48-72 h,
//   hydrofuge 2-3 mm / 5-7 ans, pureau, crochet, volige, liteau, embarrure,
//   calcin ; ardoise naturelle et tuile plate. Les chiffres tournent d'une
//   ville à l'autre pour éviter la duplication.
// - Photos CTA : l'artisan au travail (échafaudage, nacelle, chantier en
//   cours), jamais de gros plan sur un problème — voir [[feedback-photos]].

export const villesNettoyage = [
  // ─────────────────────────────────────────────────────────────── TOURS ──
  {
    slug: "nettoyage-toiture-tours",
    name: "Tours",
    couvreurSlug: "couvreur-tours",
    h1: "Démoussage de toiture à Tours",
    metaTitle: "Nettoyage de Toiture à Tours - Devis Gratuit en 24 h",
    metaDescription: "Démoussage à basse pression, traitement antimousse et hydrofuge : Michel Richard nettoie les toitures de Tours sans les abîmer ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-2.webp", width: 1600, height: 1200, alt: "Toiture en cours de démoussage, mousse retirée sur un versant — Richard Toitures, couvreur à Tours" },
    intro: [
      "<strong>Votre toiture verdit à Tours ? Je la démousse, je la nettoie et je la protège</strong> — à basse pression, avec des produits adaptés à chaque matériau, sans jamais l'agresser.",
      "Couvreur installé à Joué-lès-Tours, à quelques minutes de Tours, je me déplace gratuitement pour examiner votre couverture et je remets le devis sous 24 heures.",
    ],
    bullets: ["Basse pression 2-3 bars", "Hydrofuge efficace 5 à 7 ans", "Devis gratuit en 24 h"],
    sectionA: {
      h2: "Pourquoi démousser votre toiture à Tours ?",
      paragraphs: [
        "Les mousses ne se contentent pas d'enlaidir un toit : elles retiennent l'eau au contact permanent du matériau. Sur les couvertures en ardoise naturelle et en tuile plate que je nettoie à Tours, cette eau migre dans la porosité, ouvre des micro-fissures, puis les élargit à chaque cycle de gel. Les éléments deviennent gélifs et cassent, les pureaux s'effritent, et l'étanchéité se dégrade des années avant l'heure.",
        "Sur les immeubles comme sur les maisons de ville, le tableau est le même : versants exposés au nord colonisés en premier, gouttières qui se chargent de débris, ardoises qui ternissent. Un <a href=\"/nettoyage-toiture-37/\">démoussage de toiture</a> réalisé au bon moment coûte sans comparaison moins cher qu'une réfection anticipée — c'est l'entretien le plus rentable que vous puissiez offrir à votre couverture. Sur rendez-vous, je vous montre l'état réel du toit, photos prises depuis l'échafaudage à l'appui.",
        "Le calendrier joue aussi : je programme les traitements du printemps au début de l'automne, quand les produits disposent des 48 à 72 heures nécessaires pour agir sur un support sec. Un chantier de nettoyage bien calé dure une à deux journées pour une maison de ville, un peu plus pour un immeuble — et vous n'avez rien à préparer, hormis me laisser l'accès.",
      ],
    },
    sectionB: {
      h2: "Un nettoyage à basse pression, jamais au Kärcher",
      paragraphs: [
        "Le nettoyeur haute pression est l'ennemi des toitures : il arrache le calcin des tuiles plates, attaque la surface feuilletée de l'ardoise et déplace les pureaux au passage. Le matériau, mis à nu, se recouvre de mousses encore plus vite. C'est pourquoi je travaille exclusivement à basse pression, entre 2 et 3 bars, complétée d'un brossage manuel sur les zones sensibles.",
        "Avant de nettoyer, j'inspecte la couverture : éléments cassés, crochets déchaussés, points singuliers. Après le lavage, j'applique un traitement antimousse biocide à pH neutre, puis — sur un support sec — un hydrofuge qui pénètre le matériau sur 2 à 3 millimètres. L'eau perle et ruisselle au lieu de s'imprégner, et la repousse est retardée de plusieurs années. Et si le nettoyage révèle des éléments à remplacer, je vous propose la réparation dans la foulée — c'est l'avantage de confier son toit à un <a href=\"/couvreur-tours/\">couvreur à Tours</a>.",
      ],
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-3.webp", width: 1200, height: 1600, alt: "Versant de toiture en cours de démoussage — Richard Toitures, nettoyage à Tours" },
    },
    sectionC: {
      h2: "Les gouttières, nettoyées dans la même intervention",
      paragraphs: [
        "Le nettoyage des versants se termine toujours par celui des évacuations. Gouttières pendantes, naissances, coudes et descentes sont curés à la main et mécaniquement, débarrassés des feuilles et des mousses tombées pendant le lavage. Je pose des crapaudines aux naissances pour retenir les débris, et je vérifie les fixations ainsi que la pente d'écoulement — 0,5 cm par mètre — qui garantit que l'eau file vers les descentes.",
        "Ce passage me permet aussi de contrôler les solins et les bandes de rive, ces ouvrages discrets par lesquels commencent bien des infiltrations. À Tours, sur les maisons de ville comme sur les immeubles, c'est souvent là que je repère les reprises à prévoir — et vous êtes prévenu avant que le plafond ne parle.",
      ],
    },
    cta: {
      title: "Faites nettoyer votre toiture à Tours par un couvreur",
      text: "Je viens examiner votre couverture gratuitement : matériau, pente, niveau d'encrassement, état des points singuliers. Vous recevez sous 24 heures un devis détaillé poste par poste — démoussage, traitement, hydrofuge, gouttières. Et parce que je suis couvreur avant tout, je repère et je signale ce qu'une société de nettoyage ne verrait pas.",
      ctaLabel: "Demander un devis de nettoyage",
      photo: { src: "/photos-chantier/couverture-ardoise-echafaudage-richard-toitures-30-2.webp", width: 1200, height: 1600, alt: "Chantier de nettoyage sur échafaudage — Richard Toitures, démoussage à Tours" },
    },
    etapes: [
      { h3: "1. Inspection de la couverture", text: "Je passe le toit en revue : ardoises gélives, crochets déchaussés, embarrures des faîtages. Ce qui doit être repris est signalé avant le nettoyage." },
      { h3: "2. Traitement curatif", text: "Un antimousse professionnel dessèche mousses et lichens en 48 à 72 heures, sur ardoise naturelle comme sur tuile plate." },
      { h3: "3. Lavage basse pression", text: "Rinçage à 2-3 bars mené du faîtage vers l'égout, brossage manuel des zones tenaces, gouttières curées en fin de passe." },
      { h3: "4. Hydrofuge de protection", text: "Sur support sec, je pulvérise un hydrofuge qui imprègne le matériau sur 2 à 3 mm et protège la couverture 5 à 7 ans." },
    ],
    nearby: ["nettoyage-toiture-saint-cyr-sur-loire", "nettoyage-toiture-saint-avertin", "nettoyage-toiture-la-riche"],
  },

  // ─────────────────────────────────────────────────────── SAINT-AVERTIN ──
  {
    slug: "nettoyage-toiture-saint-avertin",
    name: "Saint-Avertin",
    couvreurSlug: "couvreur-saint-avertin",
    h1: "Nettoyage de toiture à Saint-Avertin",
    metaTitle: "Démoussage de Toiture à Saint-Avertin - Devis Gratuit",
    metaDescription: "Toiture verdie à Saint-Avertin ? Démoussage doux, hydrofuge longue durée et curage des gouttières par un couvreur. Devis en 24 h ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-1.webp", width: 1600, height: 1200, alt: "Démoussage et traitement d'une toiture — Richard Toitures, nettoyage à Saint-Avertin" },
    intro: [
      "<strong>Mousses, lichens, traînées vertes sur votre toit à Saint-Avertin ? Je remets votre couverture au propre</strong> et je la protège pour plusieurs années avec un traitement hydrofuge adapté au matériau.",
      "J'inspecte, je nettoie en douceur, je traite — et le devis, gratuit et détaillé, vous parvient sous 24 heures.",
    ],
    bullets: ["Produits biocides certifiés", "Hydrofuge 5 à 7 ans", "Couvreur, pas société de nettoyage"],
    sectionA: {
      h2: "Le traitement hydrofuge, la vraie protection de votre toit",
      paragraphs: [
        "Nettoyer une toiture sans la protéger ensuite, c'est recommencer dans deux ans. À Saint-Avertin, je termine donc la plupart des chantiers par un hydrofuge : une résine pulvérisée à saturation, qui s'infiltre sur 2 à 3 millimètres dans le matériau. L'eau de pluie perle et ruisselle au lieu de s'imprégner — et sans eau stagnante, les mousses n'ont plus de quoi s'installer.",
        "J'attends toujours que le support soit sec, 48 à 72 heures après le lavage : un hydrofuge appliqué sur un matériau gorgé d'eau ne pénètre pas. Et j'adapte la formulation au support, car un produit conçu pour l'ardoise naturelle n'est pas celui d'une tuile plate — la microporosité doit rester ouverte pour que le toit continue de respirer. La protection tient 5 à 7 ans, et le traitement est chiffré à part dans le devis : vous voyez exactement ce qu'il coûte et ce qu'il apporte.",
        "Un hydrofuge réussi se voit d'ailleurs à l'œil nu : après la première pluie, l'eau forme des gouttes rondes qui filent vers les gouttières au lieu de s'étaler en auréoles sombres. C'est le test que je vous invite à faire quelques jours après mon passage — et celui que je refais moi-même au contrôle suivant.",
      ],
    },
    sectionB: {
      h2: "Des gouttières propres pour une toiture saine",
      paragraphs: [
        "Un toit propre qui déborde par ses gouttières reste un toit malade. À chaque nettoyage de toiture à Saint-Avertin, je cure aussi les évacuations : gouttières pendantes, naissances, coudes et descentes, débarrassés des feuilles et des dépôts qui s'y accumulent. Je pose des crapaudines aux naissances pour retenir les débris, et je vérifie la pente — 0,5 cm par mètre — ainsi que les fixations.",
        "Ce passage me permet de contrôler les ouvrages de raccord, solins et bandes de rive, souvent à l'origine d'infiltrations discrètes. Mon métier de <a href=\"/couvreur-saint-avertin/\">couvreur à Saint-Avertin</a> me permet de les reprendre aussitôt. Deux curages par an, au printemps et à l'automne, suffisent en général à éviter les débordements qui finissent en coulures sur les façades. Ce double passage annuel se programme à l'avance : vous n'y pensez plus, moi si.",
        "Les descentes bouchées se détectent d'un geste simple : par temps de pluie, regardez si l'eau déborde en rideau au milieu de la gouttière. Si c'est le cas, inutile d'attendre l'automne — un curage ponctuel se programme en quelques jours, et il évite les auréoles qui finissent par marquer les enduits.",
      ],
      photo: { src: "/photos-chantier/zinguerie-pose-gouttieres-richard-toitures-11-1.webp", width: 1200, height: 1600, alt: "Gouttières en zinc entretenues — Richard Toitures, nettoyage de toiture à Saint-Avertin" },
    },
    sectionC: {
      h2: "Les signes qui montrent qu'il est temps d'agir",
      paragraphs: [
        "Des plaques vertes sur le versant le moins ensoleillé, des traînées sombres sous les rives, des touffes de mousse dans les noues, des granulats de tuiles dans les gouttières : votre toiture vous parle. Ces signes annoncent un encrassement qui, laissé à lui-même, finit par attaquer le matériau — les racines des mousses soulèvent les pureaux et ouvrent le chemin de l'eau.",
        "Au moindre doute à Saint-Avertin, demandez-moi un contrôle : je monte, je regarde, et je vous dis franchement si un <a href=\"/nettoyage-toiture-37/\">nettoyage de toiture</a> s'impose ou si votre couverture peut attendre. Ce diagnostic ne vous engage à rien — et dix minutes de vérification valent mieux qu'une infiltration découverte au premier gros orage.",
      ],
    },
    cta: {
      title: "Votre démoussage de toiture à Saint-Avertin, chiffré en 24 h",
      text: "Appelez-moi ou remplissez le formulaire : je passe examiner votre couverture, j'évalue l'encrassement et l'état des éléments, et je vous remets un devis clair, poste par poste. Dix années de métier m'ont appris à doser l'intervention — un toit peu encrassé n'a pas besoin du protocole complet, et je vous le dis.",
      ctaLabel: "Obtenir mon devis gratuit",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-4.webp", width: 1200, height: 1600, alt: "Application d'un traitement de toiture en cours — Richard Toitures à Saint-Avertin" },
    },
    etapes: [
      { h3: "1. Diagnostic sur place", text: "Matériau, pente, encrassement, état des pureaux et des crochets : le devis se fonde sur ce que je vois, pas sur une grille théorique." },
      { h3: "2. Antimousse curatif", text: "Le produit agit deux à trois jours et dessèche mousses et algues en profondeur, sans attaquer le matériau." },
      { h3: "3. Nettoyage en douceur", text: "Basse pression et brosse sur les zones fragiles, rinçage du haut vers le bas, gouttières et descentes curées dans la foulée." },
      { h3: "4. Protection longue durée", text: "L'hydrofuge appliqué sur support sec fait perler l'eau pendant 5 à 7 ans et retarde nettement la recolonisation." },
    ],
    nearby: ["nettoyage-toiture-tours", "nettoyage-toiture-chambray-les-tours", "nettoyage-toiture-larcay"],
  },

  // ─────────────────────────────────────────────────── CHAMBRAY-LÈS-TOURS ──
  {
    slug: "nettoyage-toiture-chambray-les-tours",
    name: "Chambray-lès-Tours",
    couvreurSlug: "couvreur-chambray-les-tours",
    h1: "Nettoyage de toiture à Chambray-lès-Tours",
    metaTitle: "Démoussage de Toiture à Chambray-lès-Tours - Devis 24 h",
    metaDescription: "Michel Richard applique traitement antimousse et hydrofuge sur les toitures de Chambray-lès-Tours. Nettoyage doux, devis gratuit ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-2.webp", width: 1600, height: 1200, alt: "Versant démoussé pour moitié — Richard Toitures, nettoyage de toiture à Chambray-lès-Tours" },
    intro: [
      "<strong>Des plaques de mousse s'installent sur votre toit à Chambray-lès-Tours ? Je les traite à la source</strong> : antimousse curatif, nettoyage en douceur, puis protection préventive qui retarde la repousse.",
      "Couvreur du secteur, j'examine votre couverture gratuitement et je chiffre l'intervention sous 24 heures.",
    ],
    bullets: ["Traitement curatif + préventif", "Basse pression 2-3 bars", "Devis gratuit en 24 h"],
    sectionA: {
      h2: "Un traitement antimousse en deux temps",
      paragraphs: [
        "Un bon traitement antimousse se joue en deux applications. La première est curative : un biocide professionnel à pH neutre, pulvérisé sur toute la couverture, qui dessèche mousses, algues et lichens en quelques jours. Vient ensuite le nettoyage, qui évacue les végétaux morts. La seconde application est préventive : un produit rémanent, résistant au lessivage, qui empêche les spores de se réinstaller pendant plusieurs saisons.",
        "À Chambray-lès-Tours, j'applique ce protocole de <a href=\"/nettoyage-toiture-37/\">nettoyage de toiture</a> sur la tuile mécanique comme sur la tuile plate et l'ardoise naturelle. Le dosage et le temps de pose changent selon le matériau et son encrassement — un lichen incrusté dans le calcin d'une tuile plate ne se traite pas comme une algue de surface. C'est ce réglage qui fait la différence entre un toit propre six mois et un toit propre plusieurs années. Les produits que j'emploie sont biodégradables et appliqués sans excès : vos plantations n'en sauront rien.",
        "Entre les deux applications, le lavage évacue aussi les dépôts que la pluie ne suffit pas à emporter : poussières, feuilles broyées, granulats détachés des tuiles. La couverture retrouve sa couleur d'origine, et la différence avec les versants voisins non traités se voit depuis la rue pendant des années.",
      ],
    },
    sectionB: {
      h2: "À quel rythme faire nettoyer sa toiture ?",
      paragraphs: [
        "Tout dépend de l'environnement immédiat de la maison. Un pavillon bordé d'arbres verdit en deux ou trois ans ; un toit bien dégagé peut attendre quatre à cinq ans. Plutôt qu'un calendrier théorique, je vous recommande un contrôle visuel simple : quand les premières plaques vertes apparaissent sur le versant le moins ensoleillé, c'est le moment d'agir — avant que les racines des mousses ne s'ancrent dans le matériau.",
        "Intervenir tôt change tout : un encrassement léger se traite vite et à moindre coût, tandis qu'une couverture envahie demande un protocole renforcé, avec brossage manuel des pureaux et traitement des lichens en plusieurs passes. Si vous avez un doute sur l'état de votre toit à Chambray-lès-Tours, je passe le voir gratuitement et je vous donne un avis franc. Entre deux nettoyages, un coup d'œil après chaque gros coup de vent suffit à garder l'esprit tranquille.",
        "Pour les maisons récemment achetées, je conseille un premier contrôle dans l'année qui suit l'emménagement : il donne un état de référence de la couverture et révèle les entretiens que l'ancien propriétaire aurait repoussés. C'est aussi le bon moment pour caler le rythme des passages suivants, selon l'exposition du toit.",
      ],
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-5.webp", width: 1200, height: 1600, alt: "Toiture traitée après démoussage — Richard Toitures, couvreur à Chambray-lès-Tours" },
    },
    sectionC: {
      h2: "L'hydrofuge, pour prolonger les effets du nettoyage",
      paragraphs: [
        "Pour prolonger le résultat, je propose d'achever le chantier par un traitement hydrofuge. Appliqué sur une couverture propre et sèche — 48 à 72 heures après le lavage —, il imprègne le matériau sur 2 à 3 millimètres et fait perler l'eau de pluie au lieu de la laisser s'imprégner dans la tuile ou l'ardoise.",
        "La protection tient 5 à 7 ans et retarde d'autant la repousse des mousses. Sur une toiture de Chambray-lès-Tours suivie à ce rythme, les nettoyages s'espacent nettement et la couverture garde son aspect entre deux passages. La formulation est choisie selon le matériau, pour que le toit continue de respirer. Et si le lavage révèle une tuile fêlée ou un solin fatigué, votre <a href=\"/couvreur-chambray-les-tours/\">couvreur à Chambray-lès-Tours</a> les reprend dans la foulée.",
      ],
    },
    cta: {
      title: "Un couvreur pour le nettoyage de votre toit à Chambray-lès-Tours",
      text: "Avant d'être un nettoyage, c'est un diagnostic : je monte examiner l'état des tuiles, des faîtages et des gouttières, et je vous dis ce que votre couverture demande vraiment. Devis gratuit sous 24 heures, produits professionnels, et un artisan qui répare ce qu'il faut réparer au passage.",
      ctaLabel: "Demander un devis de nettoyage",
      photo: { src: "/photos-chantier/couverture-ardoise-immeuble-richard-toitures-10-3.webp", width: 1200, height: 1600, alt: "Couvreur au travail sur un toit en ardoise — Richard Toitures à Chambray-lès-Tours" },
    },
    etapes: [
      { h3: "1. Examen du toit", text: "Encrassement, matériau, éléments fragiles : je repère aussi les tuiles à remplacer et les crochets à resserrer avant de traiter." },
      { h3: "2. Biocide curatif", text: "Pulvérisation sur couverture sèche ; le produit agit 48 à 72 heures et neutralise mousses, algues et lichens." },
      { h3: "3. Lavage et rinçage", text: "Basse pression 2-3 bars du faîtage vers l'égout, brossage des zones incrustées, évacuations curées." },
      { h3: "4. Préventif rémanent", text: "Un traitement anti-repousse qui résiste au lessivage, complété si vous le souhaitez d'un hydrofuge 5-7 ans." },
    ],
    nearby: ["nettoyage-toiture-saint-avertin", "nettoyage-toiture-veigne", "nettoyage-toiture-montbazon"],
  },

  // ─────────────────────────────────────────────────────────── BALLAN-MIRÉ ──
  {
    slug: "nettoyage-toiture-ballan-mire",
    name: "Ballan-Miré",
    couvreurSlug: "couvreur-ballan-mire",
    h1: "Lavage et démoussage de toiture à Ballan-Miré",
    metaTitle: "Nettoyage de Toiture à Ballan-Miré - Devis Gratuit 24 h",
    metaDescription: "Lavage doux, traitement des lichens et hydrofuge : Michel Richard, couvreur, entretient les toitures de Ballan-Miré. Devis gratuit ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-1.webp", width: 1600, height: 1200, alt: "Toiture en cours de démoussage et de traitement — Richard Toitures, lavage de toiture à Ballan-Miré" },
    intro: [
      "<strong>Votre toiture a besoin d'un bon lavage à Ballan-Miré ? Je m'en charge sans l'abîmer</strong> : basse pression, brossage manuel là où il faut, traitement des lichens et hydrofuge en finition.",
      "Le déplacement et le devis sont gratuits — et en secteur boisé, où les toits verdissent vite, mieux vaut ne pas attendre.",
    ],
    bullets: ["Lavage basse pression", "Traitement des lichens tenaces", "Devis gratuit en 24 h"],
    sectionA: {
      h2: "Un lavage de toiture adapté à l'état d'encrassement de votre toit",
      paragraphs: [
        "Il n'existe pas un <a href=\"/nettoyage-toiture-37/\">lavage de toiture</a>, mais plusieurs. Une couverture simplement ternie se contente d'un nettoyage basse pression et d'un rinçage ; un toit couvert de mousses demande un traitement curatif préalable ; des lichens incrustés exigent un protocole renforcé — biocide laissé agir plusieurs jours, puis brossage adapté au matériau. À Ballan-Miré, je choisis le niveau d'intervention après examen, pas avant.",
        "Cette gradation évite deux écueils : le nettoyage trop léger, qui laisse les racines des mousses en place et ne tient pas six mois, et le nettoyage trop agressif, qui décape le matériau et accélère la recolonisation. Entre les deux, il y a le geste juste — celui qu'un couvreur connaît parce qu'il sait ce qu'une ardoise ou une tuile peut supporter. Le devis précise le protocole retenu et son pourquoi, pour comparer en connaissance de cause.",
        "Le choix du protocole se fait toujours sur place, jamais au téléphone : deux toits de la même rue peuvent appeler deux interventions différentes selon leur exposition, leur pente et l'âge de la couverture. C'est la visite — gratuite — qui décide, et le devis qui grave le tout noir sur blanc.",
      ],
    },
    sectionB: {
      h2: "Le brossage manuel pour les toitures anciennes ou fragiles",
      paragraphs: [
        "Sur les toitures anciennes — ardoises naturelles posées aux crochets sur volige, tuiles plates sur liteaux —, même la basse pression peut être de trop. Je travaille alors à la brosse douce, à très basse pression, avec des produits neutres sans javel. Le calcin des tuiles plates, cette fine pellicule protectrice née de la cuisson, reste intact ; la surface feuilletée de l'ardoise aussi.",
        "Ce travail à la main est plus long, mais il préserve ce qui fait la valeur de ces couvertures. J'en profite pour contrôler les embarrures des faîtages et des arêtiers, resserrer un crochet qui a glissé, remettre un pureau d'aplomb — des gestes de <a href=\"/couvreur-ballan-mire/\">couvreur à Ballan-Miré</a> qu'aucune société de lavage ne fera pour vous. À Ballan-Miré, plusieurs toitures que j'entretiens ainsi ont retrouvé des années de tranquillité sans qu'on touche à leur couverture d'origine. Ces couvertures le rendent bien : entretenues ainsi, elles durent plus longtemps que bien des toits récents.",
        "Le matériel compte autant que le geste : échelle de toit, échafaudage ou nacelle selon la configuration, pour travailler sans jamais charger les tuiles anciennes. C'est une part invisible du savoir-faire — mais c'est elle qui évite les casses qu'on découvre au premier orage. Le devis précise toujours le moyen d'accès retenu.",
      ],
      photo: { src: "/photos-chantier/couverture-tuile-rouge-richard-toitures-19-3.webp", width: 939, height: 1600, alt: "Toiture en tuiles entretenue — Richard Toitures, lavage de toiture à Ballan-Miré" },
    },
    sectionC: {
      h2: "Les gouttières, nettoyées avec le toit",
      paragraphs: [
        "Un lavage de toiture charrie mousses et débris vers les évacuations : les laisser là reviendrait à déplacer le problème. Je termine donc chaque chantier de Ballan-Miré par le curage complet des gouttières, naissances, coudes et descentes, avec pose de crapaudines pour retenir les feuilles des saisons suivantes.",
        "J'en profite pour vérifier la pente d'écoulement et les fixations, et pour contrôler les ouvrages de raccord — solins, noquets, bandes de rive. L'eau qui quitte proprement le toit ne s'attarde ni sur les façades ni au pied des murs : c'est toute la maison qui y gagne.",
      ],
    },
    cta: {
      title: "Confiez le nettoyage de votre toiture à un artisan de Ballan-Miré et ses environs",
      text: "Je passe chez vous, j'examine la couverture versant par versant et je vous propose le protocole adapté — ni plus, ni moins. Le devis, gratuit et remis sous 24 heures, détaille chaque poste. Et si je repère une tuile cassée ou un solin fatigué, je vous le montre en photo et je peux le reprendre dans la foulée.",
      ctaLabel: "Obtenir mon devis gratuit",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-4.webp", width: 1200, height: 1600, alt: "Application d'un traitement antimousse — Richard Toitures à Ballan-Miré" },
    },
    etapes: [
      { h3: "1. Visite et diagnostic", text: "J'évalue l'encrassement et l'état de la couverture, et je choisis le protocole : lavage simple, curatif complet ou brossage manuel." },
      { h3: "2. Traitement des végétaux", text: "Antimousse ou biocide renforcé selon les cas, laissé agir le temps nécessaire — jusqu'à plusieurs jours pour les lichens." },
      { h3: "3. Lavage adapté", text: "Basse pression ou brosse douce, produits neutres, rinçage complet du faîtage vers les gouttières." },
      { h3: "4. Finition et protection", text: "Contrôle des points singuliers, curage des évacuations, hydrofuge en option pour 5 à 7 ans de tranquillité." },
    ],
    nearby: ["nettoyage-toiture-savonnieres", "nettoyage-toiture-druye", "nettoyage-toiture-la-riche"],
  },

  // ─────────────────────────────────────────────────────────── SAVONNIÈRES ──
  {
    slug: "nettoyage-toiture-savonnieres",
    name: "Savonnières",
    couvreurSlug: "couvreur-savonnieres",
    h1: "Nettoyage de toiture à Savonnières",
    metaTitle: "Démoussage de Toiture à Savonnières - Devis Gratuit",
    metaDescription: "Tuiles plates, ardoises : Michel Richard nettoie et démousse les toitures de Savonnières en préservant le calcin. Devis en 24 h ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-5.webp", width: 1200, height: 1600, alt: "Toiture nettoyée et traitée — Richard Toitures, nettoyage de toiture à Savonnières" },
    intro: [
      "<strong>Votre couverture mérite un nettoyage qui la respecte à Savonnières.</strong> Tuile plate ancienne ou ardoise, je démousse en douceur et je protège le matériau au lieu de le décaper.",
      "Examen de la toiture et devis gratuits — réponse sous 24 heures.",
    ],
    bullets: ["Respect du calcin des tuiles", "Brossage manuel si nécessaire", "Hydrofuge 5 à 7 ans"],
    sectionA: {
      h2: "Nettoyer la tuile plate sans abîmer son calcin",
      paragraphs: [
        "La tuile plate en terre cuite doit sa résistance à une fine pellicule née de la cuisson : le calcin. Un nettoyage haute pression l'arrache — et une tuile privée de son calcin boit l'eau, gèle, casse, et verdit deux fois plus vite. À Savonnières, où les toits en tuile plate sont nombreux, je pratique le <a href=\"/nettoyage-toiture-37/\">nettoyage de toiture</a> exclusivement à basse pression, entre 2 et 3 bars, en complétant à la brosse douce sur les rangs les plus incrustés.",
        "Le même soin vaut pour l'ardoise naturelle : sa surface feuilletée n'aime ni les jets agressifs ni les produits chlorés. J'utilise des biocides à pH neutre, sans javel, qui neutralisent mousses et lichens sans toucher au matériau. Le toit ressort propre — pas décapé — et les pureaux restent exactement là où le couvreur les a posés. Sur les toits que j'entretiens dans la commune, cette prudence a préservé des tuiles qui ont plusieurs décennies.",
        "Cette exigence a un autre avantage : elle préserve la valeur de la maison. Une couverture ancienne en bon état est un argument au moment d'une vente, quand une toiture décapée ou reverdie fait baisser les estimations. L'entretien raisonné est un investissement qui se retrouve dans le prix du bien.",
      ],
    },
    sectionB: {
      h2: "L'hydrofuge, pour espacer les nettoyages",
      paragraphs: [
        "Une fois la couverture propre et sèche — je laisse passer 48 à 72 heures —, j'applique un hydrofuge à saturation. La résine s'infiltre sur 2 à 3 millimètres, fait perler l'eau de pluie et prive les mousses de ce dont elles ont besoin pour s'installer : un support qui reste mouillé. Résultat, la repousse est retardée de plusieurs années et les nettoyages s'espacent d'autant.",
        "J'ajuste la formulation au matériau : celle d'une tuile plate n'est pas celle d'une ardoise, et toutes deux doivent laisser la couverture respirer. La protection tient 5 à 7 ans ; passé ce délai, une simple réapplication suffit si le toit est resté sain. C'est l'investissement d'entretien le plus rentable pour une toiture à Savonnières — et je vérifie son efficacité au contrôle suivant : l'eau doit encore perler.",
        "Notez que l'hydrofuge existe aussi en version colorée, qui ravive une couverture ternie tout en la protégeant. Je le propose rarement d'office — beaucoup préfèrent la teinte naturelle du matériau — mais sur une tuile mécanique passée, il peut redonner belle allure au toit. On en parle au moment du devis, échantillons à l'appui.",
      ],
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-4.webp", width: 1200, height: 1600, alt: "Application d'un traitement hydrofuge après démoussage — Richard Toitures à Savonnières" },
    },
    sectionC: {
      h2: "L'inspection du couvreur, comprise dans le nettoyage",
      paragraphs: [
        "Nettoyer une toiture, c'est l'occasion de la voir de près — et j'en profite systématiquement. Pureaux réalignés, crochets resserrés, embarrures des faîtages contrôlées, liteaux vérifiés là où ils se laissent voir : cette inspection fait partie de mes chantiers à Savonnières, sans supplément.",
        "Si je découvre un élément gélif ou une tuile condamnée sous la mousse, je vous le montre en photo et je peux le remplacer dans la foulée. Une société de nettoyage rince et s'en va ; un <a href=\"/couvreur-savonnieres/\">couvreur à Savonnières</a> regarde, répare et rend un toit en état de traverser l'hiver.",
      ],
    },
    cta: {
      title: "Votre toiture nettoyée et protégée à Savonnières",
      text: "Je me déplace gratuitement pour examiner votre couverture — matériau, encrassement, points singuliers — et je vous remets un devis détaillé sous 24 heures. Couvreur de métier, je vois ce qui se cache sous la mousse : une tuile gélive, un crochet déchaussé, une embarrure fatiguée. Vous êtes prévenu avant que ça ne fuie.",
      ctaLabel: "Demander un devis de nettoyage",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-3.webp", width: 1200, height: 1600, alt: "Versant de toiture en cours de démoussage — Richard Toitures à Savonnières" },
    },
    etapes: [
      { h3: "1. Reconnaissance du matériau", text: "Tuile plate, mécanique ou ardoise : le protocole, la pression et les produits se choisissent d'après la couverture." },
      { h3: "2. Antimousse à pH neutre", text: "Le biocide agit en profondeur sur mousses et lichens, sans javel et sans attaquer le calcin ni l'ardoise." },
      { h3: "3. Nettoyage en douceur", text: "Basse pression et brosse douce, rinçage du haut vers le bas, versant par versant, gouttières comprises." },
      { h3: "4. Hydrofuge sur support sec", text: "Après 48 à 72 heures de séchage, la résine imprègne le matériau et le protège 5 à 7 ans." },
    ],
    nearby: ["nettoyage-toiture-ballan-mire", "nettoyage-toiture-druye"],
  },

  // ────────────────────────────────────────────────────────────────── DRUYE ──
  {
    slug: "nettoyage-toiture-druye",
    name: "Druye",
    couvreurSlug: "couvreur-druye",
    h1: "Démoussage de toiture à Druye",
    metaTitle: "Nettoyage de Toiture à Druye - Devis Gratuit en 24 h",
    metaDescription: "Toits bordés d'arbres à Druye : démoussage régulier, curage des gouttières et hydrofuge par Michel Richard, couvreur ✓ 06 06 41 49 02. Devis gratuit.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-2.webp", width: 1600, height: 1200, alt: "Versant de toiture démoussé pour moitié — Richard Toitures, démoussage à Druye" },
    intro: [
      "<strong>À Druye, les toits bordés d'arbres verdissent vite — le vôtre aussi ?</strong> Je le démousse, je cure les gouttières et j'applique la protection qui retardera la repousse.",
      "Couvreur des communes rurales du secteur, je me déplace gratuitement et je chiffre sous 24 heures.",
    ],
    bullets: ["Entretien régulier possible", "Gouttières curées à chaque passage", "Devis gratuit en 24 h"],
    sectionA: {
      h2: "Toitures sous les arbres : un entretien plus rapproché",
      paragraphs: [
        "Feuilles qui s'accumulent dans les noues, ombre portée qui garde les versants mouillés, débris organiques qui nourrissent les mousses : une maison entourée d'arbres demande un entretien de toiture plus fréquent qu'un pavillon dégagé. Sur les longères et les maisons de Druye, je conseille un démoussage tous les deux à trois ans, avec un contrôle visuel chaque année après la chute des feuilles.",
        "Ce rythme n'est pas une règle gravée : c'est l'état du toit qui décide. Dès que des plaques vertes s'installent sur le versant le moins exposé, les racines des mousses commencent à travailler les pureaux — et plus on attend, plus le protocole se complique. Un passage régulier, léger et peu coûteux, vaut mieux qu'un grand nettoyage tous les dix ans. Je vous propose d'ailleurs de caler ce rythme ensemble, une fois pour toutes, après la première visite.",
        "Pour les longères aux toitures étendues, je découpe l'intervention en séquences — un versant après l'autre — afin que le traitement agisse partout le temps voulu. Le chantier s'étale alors sur deux à trois passages courts plutôt qu'une seule journée marathon, sans surcoût de déplacement : la commune est sur ma route.",
      ],
    },
    sectionB: {
      h2: "Gouttières et noues : garder le circuit de l'eau dégagé",
      paragraphs: [
        "Sur un terrain arboré, les gouttières se comblent en une saison. Je les cure à la main et mécaniquement — pendantes, naissances, coudes, descentes —, je pose des crapaudines pour retenir les feuilles, et je contrôle la pente de 0,5 cm par mètre qui garantit l'écoulement. Les noues, où transitent les plus gros volumes d'eau, sont dégagées et vérifiées avec le même soin.",
        "Ce travail sur les évacuations fait partie intégrante du <a href=\"/nettoyage-toiture-37/\">nettoyage de toiture</a> : un toit propre dont l'eau déborde par les gouttières continue d'arroser façades et fondations. À Druye, je propose un passage d'entretien bisannuel, au printemps et à l'automne — le second, juste après les feuilles, est le plus utile. Au besoin, je remets aussi en état les dauphins et les regards en pied de descente.",
        "Un mot enfin sur les regards en pied de descente : c'est là que finissent les débris qui ont échappé aux crapaudines, et un regard bouché fait remonter l'eau dans la descente aux premières grosses pluies. Je les contrôle à chaque passage — un geste de cinq minutes qui évite bien des pieds de mur détrempés.",
      ],
      photo: { src: "/photos-chantier/zinguerie-pose-gouttieres-richard-toitures-11-4.webp", width: 1200, height: 1600, alt: "Descente de gouttière en zinc — Richard Toitures, nettoyage de toiture à Druye" },
    },
    sectionC: {
      h2: "L'hydrofuge, utile aussi sur les toits bordés d'arbres",
      paragraphs: [
        "Sur un toit qui sèche lentement, l'hydrofuge rend un service précieux : en faisant perler l'eau, il raccourcit le temps pendant lequel le matériau reste mouillé — précisément ce dont les mousses ont besoin pour s'installer. Appliqué après le nettoyage, sur support sec, il pénètre de 2 à 3 millimètres et agit 5 à 7 ans.",
        "À Druye, je le propose en option sur les couvertures saines : c'est lui qui permet d'espacer les passages d'entretien, même sous les arbres. Sur une couverture fatiguée en revanche, je vous le déconseillerai — un traitement ne remplace pas une réparation, et je préfère vous le dire. Pour ces travaux-là, je reste votre <a href=\"/couvreur-druye/\">couvreur à Druye</a>.",
        "Dernier avantage, et non des moindres : un toit hydrofugé se salit moins. Les poussières et débris glissent avec l'eau au lieu de s'incruster, et le prochain nettoyage s'en trouve allégé d'autant. C'est un cercle vertueux que je constate chez tous mes clients réguliers.",
      ],
    },
    cta: {
      title: "Un couvreur pour entretenir votre toiture à Druye",
      text: "J'examine votre couverture gratuitement, je vous montre ce que je constate — photos à l'appui — et je vous propose la formule adaptée : nettoyage ponctuel ou entretien régulier convenu à l'avance. Le devis arrive sous 24 heures, détaillé poste par poste, et le déplacement ne vous coûte rien.",
      ctaLabel: "Demander une visite gratuite",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-1.webp", width: 1600, height: 1200, alt: "Démoussage et traitement d'une toiture — Richard Toitures à Druye" },
    },
    etapes: [
      { h3: "1. Contrôle du toit et des abords", text: "J'évalue l'encrassement, l'état des tuiles et l'influence des arbres proches pour caler le bon rythme d'entretien." },
      { h3: "2. Traitement antimousse", text: "Un biocide professionnel, laissé agir 48 à 72 heures, neutralise mousses et algues jusqu'aux racines." },
      { h3: "3. Nettoyage et curage", text: "Lavage basse pression 2-3 bars, noues dégagées, gouttières et descentes curées, crapaudines posées." },
      { h3: "4. Protection préventive", text: "Traitement rémanent anti-repousse, complété d'un hydrofuge 5-7 ans si la couverture s'y prête." },
    ],
    nearby: ["nettoyage-toiture-ballan-mire", "nettoyage-toiture-savonnieres", "nettoyage-toiture-monts"],
  },

  // ───────────────────────────────────────────────────────────────── VEIGNÉ ──
  {
    slug: "nettoyage-toiture-veigne",
    name: "Veigné",
    couvreurSlug: "couvreur-veigne",
    h1: "Nettoyage et démoussage de toiture à Veigné",
    metaTitle: "Démoussage de Toiture à Veigné - Richard Toitures",
    metaDescription: "Mousses et lichens sur votre toit à Veigné ? Nettoyage basse pression, traitement biocide et hydrofuge par un couvreur ✓ 06 06 41 49 02. Devis 24 h.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-3.webp", width: 1200, height: 1600, alt: "Versant de toiture en cours de démoussage — Richard Toitures, nettoyage à Veigné" },
    intro: [
      "<strong>Mousse installée, tuiles qui ternissent à Veigné ? N'attendez pas les infiltrations.</strong> Je nettoie votre couverture en douceur et je la protège pour les années qui viennent.",
      "Diagnostic gratuit sur place, devis détaillé sous 24 heures — et un couvreur qui répare ce qu'il découvre, pas seulement un pulvérisateur.",
    ],
    bullets: ["Couvreur, pas société de nettoyage", "Produits professionnels certifiés", "Hydrofuge 5 à 7 ans"],
    sectionA: {
      h2: "Ce que la mousse fait à votre couverture",
      paragraphs: [
        "La mousse travaille en silence. Elle retient l'eau contre le matériau, en permanence ; cette eau migre dans la porosité des tuiles et des ardoises, puis le gel l'y fait travailler comme un coin. Les micro-fissures s'élargissent hiver après hiver, les éléments deviennent gélifs et cassent, les pureaux s'effritent. Quand la fuite apparaît au plafond, le mal est fait depuis longtemps.",
        "C'est pourquoi je traite les toitures de Veigné avant ce stade : un <a href=\"/nettoyage-toiture-37/\">démoussage de toiture</a> complet, du faîtage aux gouttières, qui élimine les végétaux jusqu'aux racines et rend au toit sa capacité à évacuer l'eau. Sur une couverture saine, l'opération est rapide ; sur une couverture déjà marquée, j'en profite pour remplacer les éléments condamnés — c'est le geste du <a href=\"/couvreur-veigne/\">couvreur à Veigné</a> en plus du nettoyage. Les éléments remplacés sont fournis assortis à l'existant, pour que la reprise ne se voie pas.",
        "Le résultat d'ensemble se juge quelques semaines plus tard, quand les résidus de traitement ont fini de partir avec les pluies : la couverture retrouve une teinte uniforme, sans les auréoles vertes qui signalaient l'eau stagnante. C'est à ce moment que je programme, si vous le souhaitez, l'application de l'hydrofuge.",
      ],
    },
    sectionB: {
      h2: "Des produits professionnels, appliqués dans les règles",
      paragraphs: [
        "Le résultat d'un démoussage tient autant aux produits qu'au geste. J'utilise des gammes professionnelles : antimousse curatif à base de sels d'ammoniums quaternaires, traitement préventif fongicide et algicide résistant au lessivage, hydrofuge à résines qui imprègne le support sur 2 à 3 millimètres. Tous à pH neutre, tous choisis selon le matériau de votre couverture.",
        "L'application suit un ordre strict : produit curatif sur support sec, temps d'action de 48 à 72 heures, lavage basse pression, puis traitement préventif — et l'hydrofuge en dernier, jamais sur un toit encore humide de rinçage. Court-circuiter ces délais, c'est pulvériser un produit qui ne pénétrera pas. Je préfère revenir un jour de plus et livrer un travail qui tient. La différence se voit à l'œil nu : l'eau perle sur les tuiles dès la première pluie.",
        "Tous ces produits sont appliqués par pulvérisation dosée, jamais versés ni badigeonnés : la couverture reçoit exactement la quantité utile, sans excédent qui ruissellerait vers les gouttières et les massifs. Les fiches techniques des produits utilisés sont disponibles sur simple demande — la transparence fait partie du service.",
      ],
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-1.webp", width: 1600, height: 1200, alt: "Pulvérisation d'un traitement sur la couverture — Richard Toitures à Veigné" },
    },
    sectionC: {
      h2: "Le nettoyage des gouttières et des noues",
      paragraphs: [
        "Le circuit de l'eau ne s'arrête pas au bas du versant. À chaque nettoyage de toiture à Veigné, je dégage les noues, je cure gouttières et descentes et je pose des crapaudines aux naissances. La pente — 0,5 cm par mètre — et les fixations sont contrôlées au passage, ainsi que les jonctions entre éléments.",
        "Ces ouvrages décident de la santé des façades : une gouttière qui déborde tache les enduits et détrempe les soubassements. Deux curages par an, au printemps et après la chute des feuilles, suffisent à garder le circuit propre — et je peux les caler d'avance avec vous.",
      ],
    },
    cta: {
      title: "Demandez votre devis de nettoyage de toiture à Veigné",
      text: "Je viens voir votre toit, j'évalue l'encrassement et l'état des éléments, et je vous remets sous 24 heures un devis poste par poste : démoussage, traitements, hydrofuge, gouttières. Vous choisissez ce que vous retenez — et si un simple lavage suffit, c'est ce que je vous proposerai.",
      ctaLabel: "Obtenir mon devis gratuit",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-5.webp", width: 1200, height: 1600, alt: "Traitement de toiture en cours d'application — Richard Toitures à Veigné" },
    },
    etapes: [
      { h3: "1. État des lieux", text: "Versant par versant, je repère l'encrassement, les éléments gélifs et les crochets à reprendre." },
      { h3: "2. Curatif professionnel", text: "L'antimousse agit 48 à 72 heures et neutralise la végétation jusqu'aux racines, sans agresser le support." },
      { h3: "3. Lavage maîtrisé", text: "Basse pression 2-3 bars, brossage manuel des zones incrustées, rinçage complet vers les gouttières." },
      { h3: "4. Préventif + hydrofuge", text: "Anti-repousse rémanent, puis hydrofuge sur support sec : l'eau perle et la mousse ne revient pas avant des années." },
    ],
    nearby: ["nettoyage-toiture-montbazon", "nettoyage-toiture-chambray-les-tours", "nettoyage-toiture-monts"],
  },

  // ─────────────────────────────────────────────────────────────── MONTBAZON ──
  {
    slug: "nettoyage-toiture-montbazon",
    name: "Montbazon",
    couvreurSlug: "couvreur-montbazon",
    h1: "Démoussage de toiture à Montbazon",
    metaTitle: "Nettoyage de Toiture à Montbazon - Devis Gratuit 24 h",
    metaDescription: "Démoussage doux des ardoises et tuiles, brossage manuel et hydrofuge à Montbazon par Michel Richard, couvreur zingueur ✓ 06 06 41 49 02. Devis 24 h.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-4.webp", width: 1200, height: 1600, alt: "Traitement de toiture en cours d'application — Richard Toitures, démoussage à Montbazon" },
    intro: [
      "<strong>Ardoises ternies, mousse dans les noues à Montbazon ? Votre toit réclame un entretien</strong> — et mieux vaut un nettoyage de couvreur qu'un coup de Kärcher qui abîme tout.",
      "Je me déplace gratuitement depuis mon atelier, à un quart d'heure, et je chiffre l'intervention sous 24 heures.",
    ],
    bullets: ["Brossage manuel des ardoises", "Basse pression 2-3 bars", "Couvreur depuis deux générations"],
    sectionA: {
      h2: "L'ardoise naturelle se nettoie à la main",
      paragraphs: [
        "L'ardoise est un matériau feuilleté : sa surface se délite si on la brutalise. Sur les couvertures en ardoise naturelle de Montbazon — posées au crochet sur volige —, je privilégie le brossage manuel à la brosse douce, complété d'une très basse pression et de produits neutres sans javel. Les lichens incrustés reçoivent un biocide laissé agir plusieurs jours avant le moindre brossage.",
        "Ce soin s'étend aux points singuliers : embarrures des faîtages et des arêtiers contrôlées, crochets resserrés, pureaux réalignés quand ils ont glissé. Un nettoyage d'ardoise bien mené est presque une révision de la couverture — c'est ce qui distingue le travail d'un <a href=\"/couvreur-montbazon/\">couvreur à Montbazon</a> de celui d'une entreprise de lavage. Les ardoises condamnées sont remplacées à l'identique, format 32 × 22 ou 30 × 20 selon la couverture.",
        "Quand une ardoise doit être remplacée, je la débite au format de l'existant et je la fixe au crochet, comme à l'origine. La reprise se fond dans le versant en quelques mois — le temps que la teinte s'harmonise — et la couverture conserve son homogénéité, ce qui compte autant pour l'étanchéité que pour l'allure de la maison.",
      ],
    },
    sectionB: {
      h2: "L'hydrofuge, pour garder une toiture propre plus longtemps",
      paragraphs: [
        "Le <a href=\"/nettoyage-toiture-37/\">nettoyage de toiture</a> rend le toit propre ; l'hydrofuge le garde propre. Appliqué à saturation sur une couverture sèche — je respecte 48 à 72 heures de séchage —, il imprègne le matériau sur 2 à 3 millimètres et fait perler l'eau de pluie. Sans film en surface : la microporosité reste ouverte et le toit continue de respirer, une exigence sur l'ardoise comme sur la tuile plate.",
        "La protection tient 5 à 7 ans et espace d'autant les nettoyages suivants. Sur un toit de Montbazon entretenu à ce rythme, la couverture traverse les décennies sans réfection anticipée — et le budget entretien reste sans commune mesure avec celui d'un remplacement. Un toit d'ardoise entretenu de la sorte est de ceux qu'on transmet avec la maison.",
        "Reste la question du moment : l'hydrofuge s'applique du printemps au début de l'automne, sur une couverture parfaitement sèche. Si votre nettoyage se fait en fin de saison, je préfère programmer la protection au printemps suivant plutôt que de l'appliquer dans de mauvaises conditions — le résultat en dépend directement.",
      ],
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-5.webp", width: 1200, height: 1600, alt: "Toiture nettoyée et protégée — Richard Toitures à Montbazon" },
    },
    sectionC: {
      h2: "Des gouttières et des descentes entretenues",
      paragraphs: [
        "Après les versants, les évacuations : je cure gouttières, chéneaux et descentes, je pose des crapaudines et je contrôle la pente d'écoulement. Sur les toits de Montbazon dont je m'occupe, cette étape révèle souvent des granulats ou des débris qui renseignent sur l'état réel de la couverture.",
        "Les ouvrages de raccord ont droit au même examen : solins, bandes de rive, abergements de cheminée. Ce sont eux qui lâchent en premier, et un simple resserrage pris à temps évite l'infiltration de l'hiver suivant. Le compte rendu vous est remis avec photos.",
        "Si vous le souhaitez, ce passage sur les évacuations peut devenir un rendez-vous régulier, au printemps et après la chute des feuilles. C'est la formule la plus simple pour ne plus jamais découvrir une gouttière comble au milieu d'un orage de novembre.",
      ],
    },
    cta: {
      title: "Un devis gratuit pour le nettoyage de votre toit à Montbazon",
      text: "Décrivez-moi votre toiture, je viens l'examiner sans frais : matériau, encrassement, état des ardoises et des gouttières. Sous 24 heures, vous recevez un devis détaillé — et mon avis franc sur ce qui est nécessaire et ce qui peut attendre. Dix années de métier, un savoir-faire de père en fils : votre toit est en bonnes mains.",
      ctaLabel: "Demander un devis de nettoyage",
      photo: { src: "/photos-chantier/renovation-toiture-longere-pierre-richard-toitures-31-4.webp", width: 720, height: 716, alt: "Chantier sur échafaudage — Richard Toitures à Montbazon" },
    },
    etapes: [
      { h3: "1. Examen de la couverture", text: "Ardoise, tuile plate ou mécanique : je vérifie l'état du matériau, des crochets et des embarrures avant de choisir le protocole." },
      { h3: "2. Biocide adapté", text: "Produit à pH neutre, sans javel, laissé agir de 48 heures à plusieurs jours selon l'incrustation des lichens." },
      { h3: "3. Brossage et rinçage", text: "Brosse douce sur l'ardoise, basse pression ailleurs, rinçage du faîtage vers l'égout et gouttières curées." },
      { h3: "4. Hydrofuge respirant", text: "Appliqué sur support sec, il protège la couverture 5 à 7 ans sans bloquer sa microporosité." },
    ],
    nearby: ["nettoyage-toiture-veigne", "nettoyage-toiture-monts"],
  },

  // ──────────────────────────────────────────────────────────────── LA RICHE ──
  {
    slug: "nettoyage-toiture-la-riche",
    name: "La Riche",
    couvreurSlug: "couvreur-la-riche",
    h1: "Nettoyage de toiture à La Riche",
    metaTitle: "Démoussage de Toiture à La Riche (37520) - Devis Gratuit",
    metaDescription: "Nettoyage basse pression et traitement hydrofuge des toitures à La Riche : Michel Richard protège votre couverture 5 à 7 ans ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-1.webp", width: 1600, height: 1200, alt: "Démoussage et traitement de toiture — Richard Toitures, couvreur à La Riche" },
    intro: [
      "<strong>Un toit propre qui le reste : c'est ce que je propose à La Riche.</strong> Nettoyage en douceur, puis traitement hydrofuge qui fait perler l'eau et retarde la repousse des mousses pendant des années.",
      "Déplacement gratuit depuis Joué-lès-Tours, devis détaillé sous 24 heures.",
    ],
    bullets: ["Hydrofuge efficace 5 à 7 ans", "Basse pression 2-3 bars", "Devis gratuit en 24 h"],
    sectionA: {
      h2: "Le traitement hydrofuge, comment ça marche ?",
      paragraphs: [
        "Un <a href=\"/nettoyage-toiture-37/\">hydrofuge de toiture</a> est une résine que je pulvérise à saturation sur la couverture propre et sèche. Elle s'infiltre sur 2 à 3 millimètres dans le matériau — sans créer de film en surface — et change son comportement face à la pluie : l'eau perle et ruisselle au lieu de s'imprégner. Privées d'un support constamment mouillé, les mousses ne trouvent plus où s'installer.",
        "Deux conditions font la réussite du traitement à La Riche comme ailleurs. D'abord le séchage : 48 à 72 heures après le lavage, jamais moins, sinon le produit reste en surface. Ensuite la formulation : une ardoise naturelle et une tuile plate n'appellent pas la même résine, et toutes deux doivent garder leur microporosité ouverte pour laisser respirer le toit. Le résultat se mesure des années plus tard : c'est toute la logique de l'entretien préventif.",
        "Le traitement s'applique aussi bien sur les toits en tuile mécanique des pavillons que sur l'ardoise des maisons plus anciennes de La Riche : seule la formulation change. Dans les deux cas, je procède par passes croisées, jusqu'à saturation du matériau — c'est la garantie d'une protection uniforme, sans zone oubliée.",
      ],
    },
    sectionB: {
      h2: "Un lavage en douceur qui prépare le traitement",
      paragraphs: [
        "L'hydrofuge ne rattrape pas un lavage raté. Si la couverture a été décapée à haute pression, le matériau mis à nu boira le produit sans en tirer profit — et les mousses reviendront par les micro-fissures ouvertes. Je nettoie donc à basse pression, entre 2 et 3 bars, avec un traitement antimousse préalable qui fait le travail chimiquement plutôt que mécaniquement.",
        "Le brossage manuel complète le lavage sur les zones sensibles : rives, arêtiers, pourtours de cheminée. J'en profite pour vérifier les solins et les crochets — le réflexe du <a href=\"/couvreur-la-riche/\">couvreur à La Riche</a> — et pour curer gouttières et descentes — l'eau qui perle sur un toit hydrofugé doit bien finir quelque part, autant qu'elle y circule librement. Le tout est consigné dans le devis puis dans le compte rendu de fin de chantier : vous savez ce qui a été fait, et quand recommencer.",
        "Le chantier type se déroule sur deux visites : la première pour le traitement curatif et l'état des lieux, la seconde — deux à trois jours plus tard — pour le lavage, le rinçage et l'hydrofuge. Entre les deux, vous n'avez rien à faire : le produit travaille seul, sans odeur marquée une fois le support sec.",
      ],
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-3.webp", width: 1200, height: 1600, alt: "Lavage basse pression d'un versant — Richard Toitures à La Riche" },
    },
    sectionC: {
      h2: "Pourquoi la mousse revient — et comment la retarder",
      paragraphs: [
        "La mousse ne tombe pas du ciel : ses spores voyagent et s'installent partout où un support reste mouillé assez longtemps. C'est pourquoi un toit décapé à haute pression reverdit plus vite qu'un toit nettoyé en douceur — les micro-fissures ouvertes retiennent l'eau et offrent aux spores l'accroche qu'elles cherchent.",
        "La parade tient en trois gestes que j'applique à La Riche : un nettoyage qui préserve la surface du matériau, un traitement préventif rémanent qui neutralise les spores, et l'hydrofuge qui garde le support sec. Ensemble, ils espacent les nettoyages de plusieurs années.",
      ],
    },
    cta: {
      title: "Protégez votre toiture à La Riche pour les années qui viennent",
      text: "Je passe examiner votre couverture gratuitement et je vous dis si un hydrofuge se justifie — sur un toit en fin de vie, je vous orienterai plutôt vers la rénovation, sans vous vendre un traitement sans lendemain. Devis sous 24 heures, poste par poste, avec mon avis de couvreur en prime.",
      ctaLabel: "Demander un devis gratuit",
      photo: { src: "/photos-chantier/couverture-ardoise-echafaudage-richard-toitures-30-1.webp", width: 1200, height: 1600, alt: "Intervention sur toiture depuis un échafaudage — Richard Toitures à La Riche" },
    },
    etapes: [
      { h3: "1. Diagnostic honnête", text: "J'évalue si votre couverture justifie un traitement : un hydrofuge se pose sur un toit sain, pas sur un toit à remplacer." },
      { h3: "2. Nettoyage préparatoire", text: "Antimousse curatif, lavage basse pression 2-3 bars, brossage des zones incrustées, gouttières curées." },
      { h3: "3. Séchage contrôlé", text: "48 à 72 heures sans traitement : le support doit être sec pour que la résine pénètre sur 2 à 3 mm." },
      { h3: "4. Application à saturation", text: "L'hydrofuge est pulvérisé jusqu'au refus, en respectant la microporosité du matériau. Protection : 5 à 7 ans." },
    ],
    nearby: ["nettoyage-toiture-tours", "nettoyage-toiture-saint-cyr-sur-loire", "nettoyage-toiture-ballan-mire"],
  },

  // ────────────────────────────────────────────────────────────────── LARÇAY ──
  {
    slug: "nettoyage-toiture-larcay",
    name: "Larçay",
    couvreurSlug: "couvreur-larcay",
    h1: "Nettoyage de toiture à Larçay",
    metaTitle: "Démoussage de Toiture à Larçay - Devis Gratuit en 24 h",
    metaDescription: "Contrôle annuel, démoussage et traitement préventif des toitures à Larçay par Michel Richard, artisan couvreur ✓ 06 06 41 49 02. Déplacement gratuit.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-3.webp", width: 1200, height: 1600, alt: "Démoussage de toiture en cours — Richard Toitures, nettoyage à Larçay" },
    intro: [
      "<strong>Quand avez-vous fait contrôler votre toiture à Larçay pour la dernière fois ?</strong> Un simple passage permet de nettoyer ce qui doit l'être — et d'éviter que la mousse ne transforme un entretien en chantier.",
      "Examen gratuit de la couverture, devis sous 24 heures, intervention rapide.",
    ],
    bullets: ["Contrôle visuel offert", "Traitement curatif + préventif", "10 années d'expérience"],
    sectionA: {
      h2: "Le bon moment pour nettoyer sa toiture",
      paragraphs: [
        "Le bon indicateur n'est pas le calendrier, c'est le toit lui-même. Des plaques vertes sur le versant le moins ensoleillé, des traînées sombres sous les rives, des touffes dans les noues : voilà les signes qui comptent. À Larçay, je propose un contrôle visuel rapide — et gratuit — qui permet de décider en connaissance de cause : nettoyer maintenant, ou revoir dans un an. Le contrôle prend une demi-heure et peut se faire en votre absence, compte rendu envoyé dans la journée.",
        "Intervenir au bon moment change le coût de tout au tout. Une couverture prise tôt se traite en une journée, produits compris ; une couverture envahie demande un biocide renforcé, un brossage des pureaux incrustés et parfois le remplacement d'éléments que les racines des mousses ont soulevés — un travail que votre <a href=\"/couvreur-larcay/\">couvreur à Larçay</a> assure lui-même. L'entretien n'est pas une dépense : c'est l'assurance de ne pas payer une réfection avant l'heure.",
        "Ce contrôle est aussi l'occasion de jeter un œil aux gouttières et aux solins, qui en disent long sur la santé d'un toit : des granulats dans les gouttières trahissent des tuiles qui s'usent, une trace verte le long d'un solin signale une étanchéité qui faiblit. Autant d'indices qui affinent mon diagnostic.",
      ],
    },
    sectionB: {
      h2: "Mousses et lichens : deux traitements différents",
      paragraphs: [
        "La mousse s'arrache bien : un antimousse classique et un lavage basse pression en viennent à bout. Le lichen, lui, s'incruste — dans le calcin des tuiles plates, dans la surface feuilletée de l'ardoise — et résiste au lavage simple. Je le traite avec un biocide professionnel laissé agir plusieurs jours, puis un brossage manuel adapté au matériau, jamais à la haute pression qui emporterait le support avec le lichen.",
        "Après le nettoyage, un traitement préventif rémanent retarde le retour des deux : fongicide et algicide combinés, résistants au lessivage. Sur les toitures de Larçay que j'entretiens régulièrement, ce protocole de <a href=\"/nettoyage-toiture-37/\">démoussage de toiture</a> espace les nettoyages de plusieurs années — et le toit garde son aspect entre deux passages. Le traitement préventif est renouvelable seul, sans refaire tout le nettoyage, tant que la couverture reste saine.",
        "Un dernier repère utile : la mousse revient toujours par les mêmes endroits — versant le moins ensoleillé, abords de cheminée, rives ombragées par un arbre. Surveiller ces zones-témoins suffit pour savoir où en est votre toit ; tant qu'elles restent nettes, le reste de la couverture l'est aussi.",
      ],
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-2.webp", width: 1600, height: 1200, alt: "Versant démoussé pour moitié, mousse encore visible sur l'autre — Richard Toitures à Larçay" },
    },
    sectionC: {
      h2: "L'hydrofuge en option, pour espacer les entretiens",
      paragraphs: [
        "Sur une couverture saine, je propose de conclure par un hydrofuge : une résine appliquée à saturation sur support sec, qui imprègne le matériau sur 2 à 3 millimètres. L'eau de pluie perle et ruisselle, le toit reste sec plus longtemps, et les mousses perdent leur point d'accroche.",
        "La protection agit 5 à 7 ans et se renouvelle simplement ensuite. À Larçay, c'est l'option que je recommande aux propriétaires qui veulent espacer les nettoyages au maximum — à condition que la couverture le justifie, ce que le contrôle gratuit permet de vérifier.",
        "Pour les toitures déjà hydrofugées par mes soins, la visite de contrôle vérifie l'état de la protection : tant que l'eau perle, on n'y touche pas ; quand elle commence à s'étaler, une réapplication légère suffit, bien moins coûteuse que le traitement initial.",
      ],
    },
    cta: {
      title: "Faites examiner votre toiture à Larçay, c'est gratuit",
      text: "Je me déplace, je monte contrôler l'état de la couverture et je vous montre ce que je vois, photos à l'appui. Si un nettoyage s'impose, le devis vous parvient sous 24 heures ; si le toit peut attendre, je vous le dis et nous convenons d'un point l'année suivante. Simple, honnête, sans engagement.",
      ctaLabel: "Demander une visite gratuite",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-5.webp", width: 1200, height: 1600, alt: "Toiture traitée après démoussage — Richard Toitures à Larçay" },
    },
    etapes: [
      { h3: "1. Contrôle gratuit", text: "Un passage sur place pour évaluer l'encrassement et l'état des éléments — et décider s'il faut agir maintenant." },
      { h3: "2. Traitement ciblé", text: "Antimousse standard ou biocide renforcé pour les lichens, laissé agir le temps qu'il faut." },
      { h3: "3. Lavage respectueux", text: "Basse pression 2-3 bars, brossage manuel des zones incrustées, rinçage complet, gouttières curées." },
      { h3: "4. Prévention durable", text: "Traitement anti-repousse rémanent, et hydrofuge 5-7 ans en option pour espacer encore les entretiens." },
    ],
    nearby: ["nettoyage-toiture-saint-avertin", "nettoyage-toiture-veigne"],
  },

  // ──────────────────────────────────────────────────── SAINT-CYR-SUR-LOIRE ──
  {
    slug: "nettoyage-toiture-saint-cyr-sur-loire",
    name: "Saint-Cyr-sur-Loire",
    couvreurSlug: "couvreur-saint-cyr-sur-loire",
    h1: "Nettoyage de toit à Saint-Cyr-sur-Loire",
    metaTitle: "Démoussage de Toiture à Saint-Cyr-sur-Loire - Devis 24 h",
    metaDescription: "Nettoyage complet des toits à Saint-Cyr-sur-Loire : versants, faîtages, gouttières. Basse pression et produits certifiés ✓ 06 06 41 49 02. Devis gratuit.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-1.webp", width: 1600, height: 1200, alt: "Démoussage et traitement d'un toit — Richard Toitures, nettoyage à Saint-Cyr-sur-Loire" },
    intro: [
      "<strong>Un nettoyage de toit complet à Saint-Cyr-sur-Loire, du faîtage aux gouttières.</strong> Je traite les versants, les points singuliers et les évacuations en une seule intervention, avec des produits professionnels certifiés.",
      "Un appel suffit : je viens examiner votre couverture gratuitement, souvent dans la semaine.",
    ],
    bullets: ["Intervention complète, versants + gouttières", "Produits certifiés à pH neutre", "Devis gratuit en 24 h"],
    sectionA: {
      h2: "Un nettoyage de toit complet, des versants aux gouttières",
      paragraphs: [
        "Un toit se nettoie comme un ensemble. Les versants, bien sûr — démoussage, lavage basse pression, rinçage du faîtage vers l'égout. Mais aussi les points singuliers, où les dépôts s'accrochent : faîtages et leurs embarrures, arêtiers, rives, pourtours de souches de cheminée, solins. Et les évacuations, gouttières et descentes, que je cure et vérifie à chaque passage, crapaudines posées aux naissances.",
        "Cette approche complète évite le résultat en demi-teinte des nettoyages partiels : des versants propres qui continuent de déborder par des gouttières combles, ou des faîtages verdis qui réensemencent la couverture en une saison. À Saint-Cyr-sur-Loire, mes interventions couvrent l'ensemble — c'est plus long, mais c'est fait. À la fin du chantier, je repasse l'ensemble en revue avec vous, depuis le sol ou sur les photos.",
        "Les interventions se planifient à votre convenance, en votre présence ou non : beaucoup de mes clients de Saint-Cyr-sur-Loire me confient l'accès et retrouvent le soir un toit propre, un jardin net et un compte rendu photo dans leur boîte mail. La confiance se construit chantier après chantier.",
      ],
    },
    sectionB: {
      h2: "Des produits certifiés, un dosage de professionnel",
      paragraphs: [
        "Les produits que j'applique sont des gammes professionnelles à pH neutre, sans javel : antimousse curatif, traitement préventif fongicide et algicide, hydrofuge à résines. La javel, elle, nettoie vite et détruit lentement — elle blanchit l'ardoise, fragilise la terre cuite et brûle la végétation des abords. Elle n'entre jamais dans mon pulvérisateur.",
        "Le dosage et le temps d'action se règlent selon le matériau et l'encrassement : un biocide laissé agir 48 heures sur une tuile mécanique, plusieurs jours sur des lichens incrustés dans une tuile plate. Ce réglage, c'est l'expérience qui le donne — dix années de toits, et un principe simple : le produit travaille, pas la pression. Cette exigence vaut du pavillon à la copropriété : les produits ne changent pas, seules les quantités.",
        "Cette rigueur s'applique jusqu'au rinçage : l'eau de lavage est dirigée vers les descentes, jamais vers les massifs, et les abords — terrasse, allée, voiture — sont protégés avant le premier coup de pulvérisateur. Un chantier de nettoyage réussi se reconnaît aussi à ce qu'il ne laisse aucune trace au sol.",
      ],
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-3.webp", width: 1200, height: 1600, alt: "Versant en cours de démoussage — Richard Toitures, nettoyage de toit à Saint-Cyr-sur-Loire" },
    },
    sectionC: {
      h2: "Maisons et copropriétés : un entretien qui se planifie",
      paragraphs: [
        "Le <a href=\"/nettoyage-toiture-37/\">nettoyage de toit</a> se prête bien à un entretien planifié : un passage convenu tous les deux à quatre ans selon l'exposition, avec contrôle des points singuliers et curage des gouttières à chaque visite. Les copropriétés de Saint-Cyr-sur-Loire y trouvent un budget prévisible ; les particuliers, la tranquillité.",
        "Ce suivi crée aussi un historique : d'une visite à l'autre, je compare l'état de la couverture, photos à l'appui, et je repère ce qui évolue. Une ardoise qui bouge, un solin qui se décolle — pris tôt, ces détails se règlent en une heure au lieu d'un chantier.",
        "La formule reste souple : chaque visite donne lieu à un compte rendu et à un accord avant toute intervention supplémentaire. Vous gardez la main sur le budget, et le toit garde son <a href=\"/couvreur-saint-cyr-sur-loire/\">couvreur à Saint-Cyr-sur-Loire</a> — celui qui le connaît versant par versant.",
      ],
    },
    cta: {
      title: "Votre toit remis à neuf à Saint-Cyr-sur-Loire",
      text: "Je viens voir votre couverture, j'établis l'état des lieux — versants, faîtages, gouttières — et je vous remets un devis complet sous 24 heures. Maisons comme copropriétés : le protocole s'adapte à la surface et au matériau, et le résultat se voit depuis la rue.",
      ctaLabel: "Demander un devis de nettoyage",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-4.webp", width: 1200, height: 1600, alt: "Application d'un traitement de toiture — Richard Toitures à Saint-Cyr-sur-Loire" },
    },
    etapes: [
      { h3: "1. État des lieux complet", text: "Versants, points singuliers, évacuations : tout est passé en revue avant de chiffrer." },
      { h3: "2. Traitement certifié", text: "Biocide professionnel à pH neutre, sans javel, dosé selon le matériau et laissé agir 48 à 72 heures." },
      { h3: "3. Nettoyage intégral", text: "Lavage basse pression des versants, brossage des points singuliers, curage des gouttières et descentes." },
      { h3: "4. Protection finale", text: "Traitement préventif rémanent, hydrofuge en option — la couverture reste propre plusieurs années." },
    ],
    nearby: ["nettoyage-toiture-tours", "nettoyage-toiture-fondettes", "nettoyage-toiture-la-riche"],
  },

  // ─────────────────────────────────────────────────────────────── FONDETTES ──
  {
    slug: "nettoyage-toiture-fondettes",
    name: "Fondettes",
    couvreurSlug: "couvreur-fondettes",
    h1: "Démoussage de toiture à Fondettes",
    metaTitle: "Nettoyage de Toiture à Fondettes - Devis Gratuit en 24 h",
    metaDescription: "Grandes toitures, longères, pavillons : Michel Richard démousse et protège les couvertures de Fondettes. Gouttières comprises ✓ 06 06 41 49 02.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-4.webp", width: 1200, height: 1600, alt: "Application d'un traitement de toiture — Richard Toitures, démoussage à Fondettes" },
    intro: [
      "<strong>Longère, ferme ou pavillon : à Fondettes, je démousse toutes les toitures</strong> — y compris les grandes surfaces, avec le matériel et le rythme qu'elles demandent.",
      "Déplacement et devis gratuits ; réponse sous 24 heures, même pour les couvertures de plusieurs centaines de mètres carrés.",
    ],
    bullets: ["Grandes toitures acceptées", "Gouttières curées à chaque chantier", "Hydrofuge 5 à 7 ans"],
    sectionA: {
      h2: "Grandes toitures : un nettoyage qui s'organise",
      paragraphs: [
        "Le <a href=\"/nettoyage-toiture-37/\">démoussage de toiture</a> d'une longère de 300 m² ne se mène pas comme celui d'un pavillon de 80. Les volumes de produit, les temps d'action, l'ordre des versants, l'accès — tout se planifie. J'organise ces chantiers de Fondettes en séquences : traitement curatif un jour, lavage 48 à 72 heures plus tard, versant par versant, puis traitement préventif sur l'ensemble une fois la couverture sèche.",
        "Cette organisation garantit un résultat homogène : pas de versant oublié, pas de raccord visible entre deux passes, pas de produit appliqué hors délai. Et le chantier reste propre — les mousses retirées sont évacuées au fur et à mesure, jamais laissées dans les massifs ou les gouttières du voisin. Les accès difficiles ne sont pas un obstacle : nacelle ou échafaudage, le devis prévoit le bon moyen dès le départ.",
        "Le tri des déchets fait partie du chantier : mousses et débris partent en déchetterie, jamais dans les massifs ni au pied des haies. Sur une grande toiture, cela représente plusieurs sacs — et c'est précisément pour cela que je l'annonce dans le devis, ligne par ligne, plutôt que de le laisser découvrir en fin de chantier.",
      ],
    },
    sectionB: {
      h2: "Gouttières et crapaudines : la finition qui compte",
      paragraphs: [
        "Sur une grande toiture, les gouttières collectent des volumes d'eau considérables — et autant de débris. Je termine chaque démoussage à Fondettes par un curage complet : gouttières pendantes, chéneaux, naissances, coudes et descentes, jusqu'aux regards. Les crapaudines posées aux naissances retiennent les feuilles avant qu'elles ne bouchent les tuyaux.",
        "Je vérifie au passage la pente — 0,5 cm par mètre — et les fixations, et je contrôle les ouvrages de raccord : bandes de rive, solins, noquets. Ces pièces discrètes sont souvent à l'origine des infiltrations qu'on attribue à tort à la couverture. Un toit dont l'eau circule bien est un toit qui vieillit bien. En fin de chantier, je vous remets un état de la couverture, photos à l'appui, versant par versant.",
        "Sur les chéneaux encastrés, plus fréquents sur les grandes bâtisses, le curage se double d'un contrôle d'étanchéité : une soudure fatiguée y provoque des dégâts discrets mais profonds, car l'eau s'écoule alors dans la maçonnerie. Dix minutes d'attention à chaque passage, pour un ouvrage qu'on ne remplace pas tous les ans. Et si une soudure doit être refaite, votre <a href=\"/couvreur-fondettes/\">couvreur à Fondettes</a> s'en charge sans sous-traiter.",
      ],
      photo: { src: "/photos-chantier/zinguerie-pose-gouttieres-richard-toitures-11-3.webp", width: 1600, height: 1200, alt: "Gouttières en zinc le long d'une toiture — Richard Toitures, nettoyage à Fondettes" },
    },
    sectionC: {
      h2: "Traitement préventif et hydrofuge après le lavage",
      paragraphs: [
        "Une fois la couverture propre, je la protège : traitement préventif fongicide et algicide résistant au lessivage, puis — en option — un hydrofuge appliqué sur support sec, 48 à 72 heures après le rinçage. La résine imprègne le matériau sur 2 à 3 millimètres et fait perler l'eau pendant 5 à 7 ans.",
        "Sur les grandes toitures de Fondettes, cette protection prend tout son sens : plus la surface est vaste, plus le nettoyage suivant coûte — et plus il vaut la peine de le repousser. Le devis distingue clairement le nettoyage de la protection, pour que vous choisissiez librement.",
        "Pour les propriétaires qui hésitent, je chiffre systématiquement les deux versions du devis — avec et sans hydrofuge — en indiquant l'échéance probable du prochain nettoyage dans les deux cas. Les chiffres parlent d'eux-mêmes, et la décision vous revient.",
      ],
    },
    cta: {
      title: "Votre démoussage de toiture à Fondettes, quel que soit le toit",
      text: "Petite ou grande couverture, je viens l'examiner gratuitement et je vous remets un devis détaillé sous 24 heures : traitement, lavage, gouttières, hydrofuge en option. Vous savez ce que vous payez, poste par poste — et le chantier est mené jusqu'à la dernière crapaudine.",
      ctaLabel: "Obtenir mon devis gratuit",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-3.webp", width: 1200, height: 1600, alt: "Démoussage de toiture en cours — Richard Toitures à Fondettes" },
    },
    etapes: [
      { h3: "1. Repérage du chantier", text: "Surface, accès, matériau, encrassement : je planifie les séquences et je chiffre l'ensemble en une visite." },
      { h3: "2. Curatif par zones", text: "L'antimousse est appliqué versant par versant et laissé agir 48 à 72 heures avant tout lavage." },
      { h3: "3. Lavage séquencé", text: "Basse pression 2-3 bars, brossage des zones incrustées, mousses évacuées au fil du chantier." },
      { h3: "4. Évacuations et protection", text: "Gouttières curées, crapaudines posées, traitement préventif — et hydrofuge 5-7 ans si vous le souhaitez." },
    ],
    nearby: ["nettoyage-toiture-saint-cyr-sur-loire", "nettoyage-toiture-tours"],
  },

  // ─────────────────────────────────────────────────────────────────── MONTS ──
  {
    slug: "nettoyage-toiture-monts",
    name: "Monts",
    couvreurSlug: "couvreur-monts",
    h1: "Nettoyage et démoussage de toiture à Monts",
    metaTitle: "Démoussage de Toiture à Monts (37260) - Devis Gratuit",
    metaDescription: "Toits ombragés vite verdis à Monts : Michel Richard démousse, traite et contrôle les points singuliers de votre couverture ✓ 06 06 41 49 02. Devis 24 h.",
    heroPhoto: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-2.webp", width: 1600, height: 1200, alt: "Versant démoussé pour moitié — Richard Toitures, nettoyage de toiture à Monts" },
    intro: [
      "<strong>À Monts, les toitures ombragées se couvrent vite de mousse — la vôtre aussi ?</strong> Je la nettoie en douceur, je traite la repousse et je contrôle les points sensibles de la couverture au passage.",
      "Visite gratuite, devis sous 24 heures, et la possibilité de caler un entretien régulier une fois pour toutes.",
    ],
    bullets: ["Secteurs boisés : entretien 2-3 ans", "Contrôle des points singuliers", "Devis gratuit en 24 h"],
    sectionA: {
      h2: "Toits ombragés : pourquoi la mousse va plus vite",
      paragraphs: [
        "Un versant à l'ombre sèche lentement — et un matériau qui reste mouillé est une invitation pour les mousses et les algues. Dans les secteurs boisés de Monts, les couvertures se recouvrent en deux à trois ans là où un toit dégagé tiendrait le double. Les débris végétaux qui s'accumulent dans les noues et les gouttières nourrissent le phénomène en retenant l'eau à leur tour.",
        "La réponse n'est pas de nettoyer plus fort, mais plus souvent et plus juste : un <a href=\"/nettoyage-toiture-37/\">démoussage de toiture</a> régulier et léger, qui élimine la végétation avant que ses racines ne s'ancrent dans les pureaux, complété d'un traitement préventif rémanent. Sur ce rythme, l'intervention reste courte et le budget maîtrisé — et la couverture ne souffre jamais. C'est pour cela que je propose aux habitants du secteur un passage de contrôle après chaque automne.",
        "Sur les toits en tuile mécanique des pavillons récents, l'intervention est plus rapide que sur l'ardoise ou la tuile plate : le matériau supporte la basse pression standard et le traitement s'applique en une passe. Comptez une journée pour une maison de taille courante, produits et curage des gouttières compris.",
      ],
    },
    sectionB: {
      h2: "Les points singuliers, surveillés à chaque nettoyage",
      paragraphs: [
        "Le nettoyage est l'occasion rêvée d'inspecter ce qui ne se voit pas du sol. À chaque intervention à Monts, je contrôle les embarrures des faîtages et des arêtiers, l'alignement des pureaux, la tenue des crochets sur les couvertures en ardoise, l'état des liteaux visibles en sous-face. Une tuile déplacée ou un élément gélif se remplace dans la foulée, avant que l'eau ne trouve le chemin.",
        "Ce double regard — nettoyeur et <a href=\"/couvreur-monts/\">couvreur à Monts</a> — évite la mauvaise surprise classique : un toit propre en apparence, qui fuit au premier orage parce que personne n'a regardé sous la mousse. Ce compte rendu sert de référence pour la visite suivante : on compare, et on n'intervient que si nécessaire. Chez moi, le nettoyage se termine toujours par un compte rendu de l'état de la couverture, photos à l'appui.",
        "Cette inspection vaut aussi pour les fenêtres de toit et leurs raccords d'étanchéité, souvent installés après coup : leurs bavettes et solins vieillissent plus vite que la couverture qui les entoure. Je les vérifie à chaque nettoyage et je reprends les joints qui le demandent, avant que l'eau ne trouve le passage.",
      ],
      photo: { src: "/photos-chantier/couverture-tuile-refection-faitage-richard-toitures-03-2.webp", width: 627, height: 836, alt: "Faîtage d'une toiture en tuiles contrôlé — Richard Toitures à Monts" },
    },
    sectionC: {
      h2: "L'hydrofuge, une protection utile sous les arbres",
      paragraphs: [
        "Après le nettoyage et le traitement préventif, l'hydrofuge complète la défense du toit : appliqué à saturation sur couverture sèche, il imprègne le matériau sur 2 à 3 millimètres sans bloquer sa microporosité. L'eau perle, le support sèche vite — et les mousses attendent des années avant de retrouver prise.",
        "À Monts, où l'ombre des arbres entretient les versants mouillés, ce traitement fait une vraie différence sur la durée. Je le propose en option, chiffré à part dans le devis, et uniquement quand l'état de la couverture le justifie.",
        "Et si votre couverture n'est pas éligible — trop usée, trop poreuse —, je vous l'écris noir sur blanc avec les solutions de repli : reprise partielle, rénovation du versant le plus atteint, ou simple entretien renforcé en attendant. Pas de traitement pour le principe.",
      ],
    },
    cta: {
      title: "Un couvreur pour le démoussage de votre toit à Monts",
      text: "Mon atelier est à quelques minutes : je peux passer rapidement, examiner la couverture et vous remettre un devis sous 24 heures. Nettoyage ponctuel ou entretien régulier — je vous propose la formule qui correspond à votre toit et à son environnement, et je m'y tiens.",
      ctaLabel: "Demander un devis de nettoyage",
      photo: { src: "/photos-chantier/demoussage-traitement-toiture-richard-toitures-12-5.webp", width: 1200, height: 1600, alt: "Traitement de toiture en cours — Richard Toitures à Monts" },
    },
    etapes: [
      { h3: "1. Visite et plan d'entretien", text: "J'évalue l'encrassement et l'environnement du toit, et je vous propose un rythme d'entretien adapté." },
      { h3: "2. Traitement curatif", text: "Antimousse professionnel appliqué sur couverture sèche, laissé agir 48 à 72 heures." },
      { h3: "3. Nettoyage et inspection", text: "Lavage basse pression, noues et gouttières dégagées, points singuliers contrôlés un à un." },
      { h3: "4. Prévention longue durée", text: "Traitement anti-repousse rémanent, hydrofuge 5-7 ans en option, compte rendu photos remis en fin de chantier." },
    ],
    nearby: ["nettoyage-toiture-montbazon", "nettoyage-toiture-veigne", "nettoyage-toiture-druye"],
  },
];

export function getVilleNettoyageBySlug(slug) {
  return villesNettoyage.find((v) => v.slug === slug);
}
