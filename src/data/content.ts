// Contenu fictif — profil généraliste (marketing & communication digitale)
// Démo technique pour Portfolio For U — ne reflète pas une vraie personne.

export const profile = {
  name: 'Léa Moreau',
  role: 'Marketing & Communication Digitale',
  tagline:
    "Je construis des histoires de marque qui donnent envie d'agir — du brief à la campagne qui tourne.",
  location: 'Lyon, France',
  email: 'lea.moreau.pro@example.com',
  phone: '06 12 34 56 78',
  availability: 'Disponible pour une alternance dès septembre',
}

export const stats = [
  { value: '12', label: 'campagnes menées' },
  { value: '3', label: 'stages & alternances' },
  { value: '+140%', label: "d'engagement moyen généré" },
]

export const about = {
  paragraphs: [
    "Étudiante en Bachelor Marketing & Communication Digitale, je suis passée par trois expériences en agence et en entreprise où j'ai appris qu'une bonne stratégie ne vaut rien sans une exécution soignée.",
    "Ce qui m'intéresse : comprendre une audience, trouver l'angle qui la touche vraiment, et mesurer ce qui marche plutôt que de deviner. J'aime autant écrire un post que monter un tableau de bord de performance.",
    "En dehors du travail, je fais de la photo argentique et je tiens une newsletter culture sur laquelle je teste mes idées avant de les proposer à mes clients.",
  ],
}

export const experienceIntro =
  "Trois expériences en agence et en entreprise, un fil rouge : apprendre en faisant. Chaque étape a ajouté une corde à mon arc, du community management à la stratégie de campagne."

export const experience = [
  {
    period: '2025 — aujourd\'hui',
    title: 'Chargée de communication digitale (alternance)',
    org: 'Studio Belline, agence créative — Lyon',
    description:
      "Pilotage des réseaux sociaux de 4 clients (mode, food, immobilier), création de calendriers éditoriaux, reporting mensuel de performance.",
    skillsGained: ['Gestion multi-comptes', 'Stratégie de contenu', 'Reporting client'],
  },
  {
    period: '2024',
    title: 'Stage marketing & événementiel',
    org: 'Maison Ferrand — Grenoble',
    description:
      "Organisation d'un lancement produit (200 invités), coordination avec 6 prestataires, gestion du budget et bilan post-événement.",
    skillsGained: ['Coordination prestataires', 'Gestion budget', 'Relations presse'],
  },
  {
    period: '2023',
    title: 'Stage community management',
    org: 'Bloom Cosmétiques — Lyon',
    description:
      "Refonte de la ligne éditoriale Instagram, +85% d'engagement en 4 mois, première expérience de gestion de communauté en direct.",
    skillsGained: ['Direction artistique feed', 'Animation de communauté', 'Analyse de performance'],
  },
  {
    period: '2022',
    title: 'Bac général, spécialités Humanités & Langues',
    org: 'Lycée Louis-le-Grand-adjacent — Grenoble',
    description: 'Mention Bien. Option théâtre en parallèle pendant 3 ans.',
    skillsGained: ['Prise de parole en public', 'Expression écrite', 'Anglais renforcé'],
  },
]

export const certifications = [
  { name: 'Google Analytics 4', org: 'Google Skillshop', year: '2024' },
  { name: 'Meta Certified Digital Marketing Associate', org: 'Meta Blueprint', year: '2024' },
  { name: 'Certification HubSpot Content Marketing', org: 'HubSpot Academy', year: '2023' },
]

export const skills = [
  {
    category: 'Stratégie & contenu',
    items: ['Ligne éditoriale', 'Copywriting', 'Storytelling de marque', 'Calendrier éditorial'],
  },
  {
    category: 'Outils',
    items: ['Meta Business Suite', 'Canva / Figma', 'Notion', 'Google Analytics'],
  },
  {
    category: 'Événementiel',
    items: ['Coordination prestataires', 'Gestion budget', 'Relation clients'],
  },
  {
    category: 'Langues',
    items: ['Français (natif)', 'Anglais (C1)', 'Espagnol (B1)'],
  },
]

export const projects = [
  {
    slug: 'lancement-racines-maison-ferrand',
    title: 'Lancement "Racines" — Maison Ferrand',
    client: 'Maison Ferrand',
    tag: 'Événementiel',
    role: 'Coordination événementielle & communication',
    duration: 'Stage de 6 semaines · 2024',
    description:
      "Conception et coordination du lancement d'une nouvelle gamme : 200 invités, presse locale, activation Instagram en simultané.",
    result: '3 retombées presse, 40k impressions sur la soirée',
    context:
      "Maison Ferrand lançait une nouvelle gamme de produits et voulait un événement qui marque les esprits plutôt qu'un simple cocktail presse. On m'a confié la coordination logistique et la communication autour du lancement, en binôme avec la responsable marketing.",
    objectives: [
      "Faire venir la presse locale et des micro-influenceurs régionaux",
      "Créer un moment \"instagrammable\" qui génère du contenu spontané",
      "Rester dans un budget serré sans que ça se voie",
    ],
    actions: [
      "Sourcing et coordination de 6 prestataires (traiteur, scénographie, photographe, DJ)",
      "Création du rétroplanning et suivi budgétaire sur Google Sheets",
      "Rédaction des invitations, du communiqué de presse et des relances",
      "Mise en place d'un mur photo dédié et d'un hashtag de soirée pour capter le contenu généré",
      "Bilan post-événement chiffré présenté à la direction",
    ],
    results: [
      { value: '200', label: 'invités présents' },
      { value: '3', label: 'retombées presse locales' },
      { value: '40k', label: "impressions le soir de l'événement" },
    ],
    tools: ['Google Sheets', 'Canva', 'Meta Business Suite', 'Mailchimp'],
    learned:
      "J'ai appris à négocier avec des prestataires sous pression de délai, et surtout à préparer un plan B pour chaque poste critique (jusqu'au groupe électrogène de secours).",
  },
  {
    slug: 'refonte-instagram-bloom-cosmetiques',
    title: 'Refonte Instagram — Bloom Cosmétiques',
    client: 'Bloom Cosmétiques',
    tag: 'Réseaux sociaux',
    role: 'Community management & direction artistique du feed',
    duration: 'Stage de 4 mois · 2023',
    description:
      "Nouvelle identité visuelle du feed, passage d'une communication produit à une communication communauté, réponse systématique aux commentaires.",
    result: "+85% d'engagement, +1200 abonnés en 4 mois",
    context:
      "Le compte Instagram de Bloom postait uniquement des photos produit, sans réponse aux commentaires ni ligne éditoriale claire. L'engagement stagnait malgré une belle audience acquise via des partenariats influenceurs.",
    objectives: [
      "Sortir d'une communication 100% produit pour créer une vraie communauté",
      "Harmoniser l'identité visuelle du feed",
      "Instaurer une présence quotidienne dans les commentaires et messages privés",
    ],
    actions: [
      "Audit du compte et benchmark de 5 comptes concurrents",
      "Création d'une nouvelle charte visuelle (palette, typographie, gabarits Canva)",
      "Mise en place d'un calendrier éditorial mêlant produit, coulisses et contenu communauté",
      "Réponse systématique aux commentaires et DMs sous 24h",
      "Suivi hebdomadaire des statistiques et ajustement du contenu selon la performance",
    ],
    results: [
      { value: '+85%', label: "d'engagement moyen par publication" },
      { value: '+1200', label: 'nouveaux abonnés en 4 mois' },
      { value: '<24h', label: 'délai moyen de réponse en commentaire' },
    ],
    tools: ['Meta Business Suite', 'Canva', 'Notion', 'Google Analytics'],
    learned:
      "Ce projet m'a montré la différence entre \"poster\" et \"animer\" une communauté — la régularité dans les réponses a eu plus d'impact que n'importe quel post individuel.",
  },
  {
    slug: 'campagne-saisonniere-studio-belline',
    title: 'Campagne saisonnière — Studio Belline (client food)',
    client: 'Studio Belline (pour un client food)',
    tag: 'Publicité digitale',
    role: 'Chargée de communication digitale (alternance)',
    duration: 'Alternance en cours · depuis 2025',
    description:
      "Brief client, écriture des accroches, tests A/B sur 3 formats publicitaires, ajustement en cours de campagne selon les résultats.",
    result: 'Coût par clic réduit de 32% sur la durée de la campagne',
    context:
      "Un client food de l'agence voulait relancer les ventes d'une gamme en fin de saison avec un budget publicitaire limité. Il fallait aller vite et itérer plutôt que tout miser sur un seul format.",
    objectives: [
      "Réduire le coût par clic par rapport à la campagne précédente",
      "Identifier le format publicitaire le plus performant pour ce public",
      "Livrer un reporting hebdomadaire clair au client",
    ],
    actions: [
      "Participation au brief client et reformulation des objectifs en indicateurs mesurables",
      "Écriture de 9 accroches déclinées sur 3 formats (carrousel, vidéo courte, image statique)",
      "Mise en place de tests A/B et suivi quotidien des performances",
      "Réallocation du budget vers les formats gagnants en cours de campagne",
      "Reporting hebdomadaire synthétique pour le client",
    ],
    results: [
      { value: '-32%', label: 'coût par clic sur la durée de la campagne' },
      { value: '3', label: 'formats publicitaires testés' },
      { value: '9', label: 'accroches rédigées et testées' },
    ],
    tools: ['Meta Business Suite', 'Canva', 'Google Analytics', 'Excel'],
    learned:
      "J'ai compris à quel point un test A/B bien cadré vaut mieux qu'une intuition, même bonne — les chiffres ont souvent contredit ce qu'on pensait qui allait marcher.",
  },
  {
    slug: 'newsletter-culture-projet-personnel',
    title: 'Newsletter culture — projet personnel',
    client: 'Projet personnel',
    tag: 'Projet perso',
    role: 'Autrice, éditrice et diffusion',
    duration: "En cours depuis 2023",
    description:
      "Newsletter bimensuelle sur la culture lyonnaise, écrite et diffusée en autonomie depuis 2023, terrain de jeu pour tester des idées.",
    result: '600+ abonnés, taux d\'ouverture de 48%',
    context:
      "Envie d'avoir un espace à moi pour écrire régulièrement et tester des idées de contenu sans validation client — devenu un vrai terrain d'expérimentation que je réutilise ensuite dans mes missions.",
    objectives: [
      "Écrire régulièrement pour garder la plume affûtée",
      "Tester des formats et objets d'e-mail avant de les proposer en mission",
      "Construire une audience engagée sur un sujet de niche",
    ],
    actions: [
      "Rédaction bimensuelle d'une sélection culturelle lyonnaise (expos, lieux, événements)",
      "Tests réguliers d'objets d'e-mail et de formats (liste courte vs. format long)",
      "Diffusion via Mailchimp et relais sur Instagram",
      "Analyse des taux d'ouverture et de clic pour ajuster la ligne éditoriale",
    ],
    results: [
      { value: '600+', label: 'abonnés' },
      { value: '48%', label: "taux d'ouverture moyen" },
      { value: '2/mois', label: 'rythme de publication tenu depuis 2023' },
    ],
    tools: ['Mailchimp', 'Notion', 'Canva'],
    learned:
      "Ce projet perso est devenu mon labo : beaucoup des formats que je propose maintenant en mission, je les ai testés ici en premier.",
  },
]

export const contact = {
  heading: 'On travaille ensemble ?',
  body: "Je termine mon Bachelor en juin et je cherche une alternance ou un poste où la stratégie et le terrain se rencontrent.",
  availabilityNote:
    "Disponible pour une alternance dès septembre, basée à Lyon — ouverte au full remote ou au présentiel/hybride.",
  social: [
    { label: 'LinkedIn', handle: 'in/lea-moreau-marketing', url: 'https://www.linkedin.com/in/lea-moreau-marketing' },
    { label: 'Instagram', handle: '@lea.moreau.marketing', url: 'https://www.instagram.com/lea.moreau.marketing' },
    { label: 'Newsletter culture', handle: 'lettre-lyonnaise.example.com', url: 'https://lettre-lyonnaise.example.com' },
  ],
  faq: [
    {
      question: 'Quel type de mission recherches-tu ?',
      answer:
        "Une alternance ou un poste en communication digitale / marketing de contenu, idéalement avec un mélange de stratégie et d'exécution terrain.",
    },
    {
      question: 'Es-tu disponible en remote ?',
      answer:
        "Oui, je peux travailler en full remote ou en hybride. Je suis basée à Lyon si un format présentiel ou mixte est préféré.",
    },
    {
      question: 'Quel est ton délai de réponse ?',
      answer: "Je réponds sous 24 à 48h, par e-mail ou LinkedIn.",
    },
  ],
}
