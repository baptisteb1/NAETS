export type ProductCategory = "chaussures" | "vetements" | "accessoires";
export type ProductCollection = "Æ-ESSENTIAL" | "Æ-REFLEX" | "Æ-SLYDE" | "DROP 1";
export type ProductUsage = "Running" | "Entraînement" | "Compétition" | "Polyvalent";

export interface ProductSize {
  label: string;
  available: boolean;
}

export interface TechnicalSpecs {
  [key: string]: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: ProductCollection;
  category: ProductCategory;
  type: string;
  price: number; // PLACEHOLDER — à remplacer par les vrais prix
  compareAtPrice?: number;
  colors: string[];
  sizes: ProductSize[];
  gender: "Unisexe";
  badges: string[];
  description: string;
  shortDescription: string;
  longDescription?: string;
  technicalSpecs: TechnicalSpecs;
  images: string[]; // PLACEHOLDER — à remplacer par les vrais chemins d'images
  isNew: boolean;
  inStock: boolean;
  usage: ProductUsage[];
  relatedProductIds?: string[];
}

// ─── Size presets ─────────────────────────────────────────────────────────────

const SHOE_SIZES_REFLEX: ProductSize[] = [
  { label: '39',   available: true  },
  { label: '40',   available: true  },
  { label: '40.5', available: false },
  { label: '41',   available: true  },
  { label: '42',   available: true  },
  { label: '42.5', available: true  },
  { label: '43',   available: true  },
  { label: '44',   available: true  },
  { label: '44.5', available: false },
  { label: '45',   available: true  },
  { label: '46',   available: false },
];

const SHOE_SIZES_STANDARD: ProductSize[] = [
  { label: '38', available: true  },
  { label: '39', available: true  },
  { label: '40', available: true  },
  { label: '41', available: true  },
  { label: '42', available: true  },
  { label: '43', available: true  },
  { label: '44', available: true  },
  { label: '45', available: false },
  { label: '46', available: true  },
];

const APPAREL_SIZES: ProductSize[] = [
  { label: 'XS',  available: true  },
  { label: 'S',   available: true  },
  { label: 'M',   available: true  },
  { label: 'L',   available: true  },
  { label: 'XL',  available: true  },
  { label: 'XXL', available: false },
];

const SOCK_SIZES: ProductSize[] = [
  { label: '36-38', available: true },
  { label: '39-41', available: true },
  { label: '42-44', available: true },
  { label: '45-47', available: true },
];

const CAP_SIZES: ProductSize[] = [
  { label: 'S/M',  available: true },
  { label: 'L/XL', available: true },
];

const BOTTLE_SIZES: ProductSize[] = [
  { label: '500 ml', available: true },
  { label: '750 ml', available: true },
];

const UNIQUE_SIZE: ProductSize[] = [
  { label: 'Unique', available: true },
];

// ─── CHAUSSURES ──────────────────────────────────────────────────────────────

const chaussures: Product[] = [
  {
    id: "ae-reflex-bw-001",
    slug: "ae-reflex-black-white",
    name: "Æ-REFLEX Black & White",
    collection: "Æ-REFLEX",
    category: "chaussures",
    type: "Chaussure de running",
    price: 180, // PLACEHOLDER
    colors: ["Black & White"],
    sizes: SHOE_SIZES_REFLEX,
    gender: "Unisexe",
    badges: ["NOUVEAU", "DROP 1"],
    description:
      "Pensée pour les coureurs à la recherche d'un maintien précis et d'une sensation de légèreté absolue, la Æ-REFLEX combine architecture minimaliste et performance technique. Tige single mesh rip-stop, semelle ATPU réactive, plaque carbone intégrée.",
    shortDescription: "Architecture minimaliste. Performance technique.",
    longDescription:
      "Pensée pour les coureurs à la recherche d'un maintien précis et d'une sensation de légèreté absolue, la Æ-REFLEX combine architecture minimaliste et performance technique.\n\nTIGE — Single mesh rip-stop monolayer ultra-léger. Mousses de colliers minimalistes. Renforts latéraux TPU discrets et efficaces.\n\nMAINTIEN — Lacets texturés anti-glissement. Languette fine en suède. Renfort TPU ciblé sur le contrefort. Le pied enveloppé, pas compressé.\n\nSEMELLE — Midsole ATPU 37 mm / drop 8 mm. Drop-in amovible en ATPU. Absorption calibrée pour la réactivité.\n\nPROPULSION — Plaque carbone évidée sur toute la longueur. Transfert d'énergie direct et précis à chaque foulée.\n\nADHÉRENCE — Zones de grip stratégiques avant-pied et talon. Efficace sur route sèche et humide. Équilibre entre réactivité, fluidité et précision.",
    technicalSpecs: {
      Usage: "Running / Entraînement",
      Drop: "8 mm",
      "Stack (avant)": "28 mm",
      "Stack (talon)": "36 mm",
      Poids: "265 g (taille 42)",
      "Plaque carbone": "Oui — évidée, pleine longueur",
      Midsole: "ATPU super-critique",
      "Drop-in": "ATPU amovible",
      "Semelle externe": "Grip route sèche et humide",
      Tige: "Single mesh rip-stop monolayer",
      Renforts: "TPU + soutien latéral minimaliste",
      Languette: "Suède fine",
      Lacets: "Texturés anti-glissement",
      Maintien: "Précis / Enveloppant",
      Sensation: "Légère / Réactive / Stable",
    },
    images: ["/images/placeholder-shoe-bw.jpg"],
    isNew: true,
    inStock: true,
    usage: ["Running", "Entraînement"],
    relatedProductIds: ["ae-reflex-white-001", "ae-reflex-sb-001", "ae-reflex-bw-002"],
  },
  {
    id: "ae-reflex-white-001",
    slug: "ae-reflex-white",
    name: "Æ-REFLEX White",
    collection: "Æ-REFLEX",
    category: "chaussures",
    type: "Chaussure de running",
    price: 180, // PLACEHOLDER
    colors: ["White"],
    sizes: SHOE_SIZES_REFLEX,
    gender: "Unisexe",
    badges: ["NOUVEAU", "DROP 1"],
    description:
      "Édition blanche de la Æ-REFLEX. Expression la plus pure de l'architecture NÆTS. Même performance technique, colorway monochrome intégral.",
    shortDescription: "Expression blanche. Architecture pure.",
    longDescription:
      "La Æ-REFLEX White est l'expression la plus épurée de l'architecture NÆTS. Monochrome intégral, performance maximale.\n\nTIGE — Single mesh rip-stop monolayer en coloris blanc intégral. Renforts TPU assortis. Finition sans compromis.\n\nMAINTIEN — Système de lacage asymétrique. Languette fine. Contrefort TPU invisible.\n\nSEMELLE — ATPU 37 mm drop 8 mm. Drop-in amovible. Stack identique à la version Black & White.\n\nPROPULSION — Plaque carbone full-length. Transfert d'énergie optimisé.\n\nADHÉRENCE — Semelle externe blanche. Grip route identique. Zones stratégiques avant et arrière.",
    technicalSpecs: {
      Usage: "Running / Compétition",
      Drop: "8 mm",
      "Stack (avant)": "28 mm",
      "Stack (talon)": "36 mm",
      Poids: "263 g (taille 42)",
      "Plaque carbone": "Oui — évidée, pleine longueur",
      Midsole: "ATPU super-critique",
      "Drop-in": "ATPU amovible",
      "Semelle externe": "Grip route — coloris blanc",
      Tige: "Single mesh rip-stop monolayer blanc",
      Renforts: "TPU blanc",
      Languette: "Suède fine",
      Lacets: "Texturés anti-glissement",
      Maintien: "Précis",
      Sensation: "Réactive / Propulsive",
    },
    images: ["/images/placeholder-shoe-white.jpg"],
    isNew: true,
    inStock: true,
    usage: ["Running", "Compétition"],
    relatedProductIds: ["ae-reflex-bw-001", "ae-reflex-sb-001"],
  },
  {
    id: "ae-reflex-sb-001",
    slug: "ae-reflex-sable-black",
    name: "Æ-REFLEX Sable & Black",
    collection: "Æ-REFLEX",
    category: "chaussures",
    type: "Chaussure de running",
    price: 180, // PLACEHOLDER
    colors: ["Sable & Black"],
    sizes: SHOE_SIZES_REFLEX,
    gender: "Unisexe",
    badges: ["DROP 1"],
    description:
      "Colorway Sable & Black de la Æ-REFLEX. Ton inox naturel sur semelle noire. Alliance entre chaleur minérale et précision technique.",
    shortDescription: "Ton sable. Précision noire.",
    longDescription:
      "La Æ-REFLEX Sable & Black introduit un nouveau registre chromatique dans la collection NÆTS. Tige sable, semelle noire, plaque carbone intégrée.\n\nTIGE — Mesh rip-stop coloris sable. Renforts TPU noirs contrastés. Lecture graphique forte.\n\nMAINTIEN — Lacets texturés noirs. Languette fine. Enveloppe précise du pied.\n\nSEMELLE — ATPU 37 mm noire. Drop-in sable assorti. Cohérence chromatique totale.\n\nPROPULSION — Plaque carbone intégrée full-length. Même performance que les autres colorways.\n\nADHÉRENCE — Semelle noire. Zones de grip stratégiques. Route sèche et humide.",
    technicalSpecs: {
      Usage: "Running / Entraînement",
      Drop: "8 mm",
      "Stack (avant)": "28 mm",
      "Stack (talon)": "36 mm",
      Poids: "266 g (taille 42)",
      "Plaque carbone": "Oui — évidée, pleine longueur",
      Midsole: "ATPU noir",
      "Drop-in": "ATPU sable",
      "Semelle externe": "Noir — grip route",
      Tige: "Mesh rip-stop sable",
      Renforts: "TPU noir",
      Languette: "Suède fine",
      Lacets: "Texturés noirs anti-glissement",
      Maintien: "Précis",
      Sensation: "Légère / Réactive",
    },
    images: ["/images/placeholder-shoe-bw2.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
    relatedProductIds: ["ae-reflex-bw-001", "ae-reflex-white-001"],
  },
  {
    id: "ae-reflex-bw-002",
    slug: "ae-reflex-black-white-v2",
    name: "Æ-REFLEX Black White",
    collection: "Æ-REFLEX",
    category: "chaussures",
    type: "Chaussure de running",
    price: 180, // PLACEHOLDER
    colors: ["Black White"],
    sizes: SHOE_SIZES_REFLEX,
    gender: "Unisexe",
    badges: ["DROP 1"],
    description:
      "Variante colorway de la Æ-REFLEX. Même architecture technique, nouvelle expression graphique. La précision au service du mouvement.",
    shortDescription: "Précision. Légèreté. Propulsion.",
    technicalSpecs: {
      Usage: "Running / Compétition",
      Drop: "8 mm",
      "Stack (avant)": "28 mm",
      "Stack (talon)": "36 mm",
      Poids: "263 g (taille 42)",
      "Plaque carbone": "Oui",
      Midsole: "ATPU",
      "Drop-in": "ATPU",
      "Semelle externe": "Grip route sèche et humide",
      Tige: "Single mesh rip-stop",
      Renforts: "TPU",
      Languette: "Suède fine",
      Lacets: "Anti-glissement",
      Maintien: "Précis",
      Sensation: "Réactive / Propulsive",
    },
    images: ["/images/placeholder-shoe-bw2.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Compétition"],
  },
  {
    id: "ae-essential-cb-001",
    slug: "ae-essential-concrete-black",
    name: "Æ-ESSENTIAL Concrete Black",
    collection: "Æ-ESSENTIAL",
    category: "chaussures",
    type: "Chaussure de running",
    price: 180, // PLACEHOLDER
    colors: ["Concrete Black"],
    sizes: SHOE_SIZES_STANDARD,
    gender: "Unisexe",
    badges: ["NOUVEAU"],
    description:
      "La Æ-ESSENTIAL est pensée pour le quotidien du coureur urbain. Polyvalente, robuste, confortable. Un compagnon technique pour l'entraînement régulier.",
    shortDescription: "Polyvalence quotidienne. Confort technique.",
    technicalSpecs: {
      Usage: "Entraînement / Polyvalent",
      Drop: "10 mm",
      "Stack (avant)": "24 mm",
      "Stack (talon)": "34 mm",
      Poids: "295 g (taille 42)",
      "Plaque carbone": "Non",
      Midsole: "ATPU",
      "Drop-in": "ATPU",
      "Semelle externe": "Grip mixte route",
      Tige: "Single mesh rip-stop",
      Renforts: "TPU",
      Languette: "Suède fine",
      Lacets: "Anti-glissement",
      Maintien: "Enveloppant",
      Sensation: "Stable / Amorti",
    },
    images: ["/images/placeholder-shoe-black.jpg"],
    isNew: true,
    inStock: true,
    usage: ["Entraînement"],
  },
  {
    id: "ae-slyde-w-001",
    slug: "ae-slyde-white",
    name: "Æ-SLYDE White",
    collection: "Æ-SLYDE",
    category: "chaussures",
    type: "Chaussure de running",
    price: 180, // PLACEHOLDER
    colors: ["White"],
    sizes: SHOE_SIZES_STANDARD,
    gender: "Unisexe",
    badges: ["NOUVEAU", "DROP 1"],
    description:
      "La Æ-SLYDE redéfinit la fluidité du geste. Conçue pour les longues distances, elle combine un amorti progressif et une propulsion contrôlée. Edition blanche, pure et technique.",
    shortDescription: "Fluidité. Distance. Contrôle.",
    technicalSpecs: {
      Usage: "Running / Compétition",
      Drop: "6 mm",
      "Stack (avant)": "32 mm",
      "Stack (talon)": "38 mm",
      Poids: "255 g (taille 42)",
      "Plaque carbone": "Oui",
      Midsole: "ATPU Haute densité",
      "Drop-in": "ATPU",
      "Semelle externe": "Grip route optimisé",
      Tige: "Single mesh rip-stop renforcé",
      Renforts: "TPU",
      Languette: "Suède fine",
      Lacets: "Anti-glissement",
      Maintien: "Anatomique précis",
      Sensation: "Fluide / Propulsive",
    },
    images: ["/images/placeholder-shoe-white.jpg"],
    isNew: true,
    inStock: true,
    usage: ["Running", "Compétition"],
  },
];

// ─── VÊTEMENTS ────────────────────────────────────────────────────────────────

const vetements: Product[] = [
  {
    id: "rain-jacket-black-001",
    slug: "rain-jacket-black",
    name: "Rain Jacket Black",
    collection: "Æ-ESSENTIAL",
    category: "vetements",
    type: "Veste de running",
    price: 160, // PLACEHOLDER
    colors: ["Pantone Black"],
    sizes: APPAREL_SIZES,
    gender: "Unisexe",
    badges: ["NOUVEAU"],
    description:
      "Veste coupe-vent légère pour le running urbain et trail route. Imperméable, respirante, rangeable dans sa propre poche.",
    shortDescription: "Protection légère. Mobilité totale.",
    technicalSpecs: {
      Matière: "100% Polyester recyclé",
      Coupe: "Running fit / Cintrée",
      Imperméabilité: "10 000 mm",
      Respirabilité: "8 000 g/m²/24h",
      Poids: "185 g",
      Coutures: "Thermoscellées",
      Capuche: "Intégrée, ajustable",
      Fermeture: "YKK",
      Poches: "2 zippées + 1 rangement",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-jacket-black.jpg"],
    isNew: true,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "rain-jacket-white-001",
    slug: "rain-jacket-bright-white",
    name: "Rain Jacket Bright White",
    collection: "Æ-ESSENTIAL",
    category: "vetements",
    type: "Veste de running",
    price: 160, // PLACEHOLDER
    colors: ["Pantone 11-0601 TPG Bright White"],
    sizes: APPAREL_SIZES,
    gender: "Unisexe",
    badges: ["NOUVEAU"],
    description:
      "Version Bright White de la Rain Jacket NÆTS. Même performance technique, expression graphique radicale.",
    shortDescription: "Protection légère. Expression radicale.",
    technicalSpecs: {
      Matière: "100% Polyester recyclé",
      Coupe: "Running fit / Cintrée",
      Imperméabilité: "10 000 mm",
      Respirabilité: "8 000 g/m²/24h",
      Poids: "185 g",
      Coutures: "Thermoscellées",
      Capuche: "Intégrée, ajustable",
      Fermeture: "YKK",
      Poches: "2 zippées + 1 rangement",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-jacket-white.jpg"],
    isNew: true,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "running-vest-black-001",
    slug: "running-vest-black",
    name: "Running Vest Black",
    collection: "Æ-REFLEX",
    category: "vetements",
    type: "Gilet de running",
    price: 120, // PLACEHOLDER
    colors: ["Pantone Black"],
    sizes: APPAREL_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "Gilet léger pour les jours de transition. Coupe-vent, respirant, ultra-compact. Parfait pour les entraînements en conditions variables.",
    shortDescription: "Légèreté. Protection ciblée.",
    technicalSpecs: {
      Matière: "95% Polyester / 5% Élasthanne",
      Coupe: "Ergonomique running",
      Poids: "95 g",
      Fermeture: "Zip 1/2",
      Poches: "1 zippée dos",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-vest-black.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "running-vest-white-001",
    slug: "running-vest-bright-white",
    name: "Running Vest Bright White",
    collection: "Æ-REFLEX",
    category: "vetements",
    type: "Gilet de running",
    price: 120, // PLACEHOLDER
    colors: ["Pantone 11-0601 TPG Bright White"],
    sizes: APPAREL_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "Version Bright White du gilet de running NÆTS. Ultra-léger, technique, statement.",
    shortDescription: "Légèreté. Expression blanche.",
    technicalSpecs: {
      Matière: "95% Polyester / 5% Élasthanne",
      Coupe: "Ergonomique running",
      Poids: "95 g",
      Fermeture: "Zip 1/2",
      Poches: "1 zippée dos",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-vest-white.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "running-top-black-001",
    slug: "running-top-black",
    name: "Running T-Shirt Black",
    collection: "Æ-ESSENTIAL",
    category: "vetements",
    type: "T-shirt de running",
    price: 55, // PLACEHOLDER
    colors: ["Pantone Black"],
    sizes: APPAREL_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "T-shirt technique NÆTS. Tissu respirant à évacuation rapide de la transpiration, coupe semi-ajustée, marquages NÆTS.",
    shortDescription: "Technique. Respirant. Précis.",
    technicalSpecs: {
      Matière: "88% Polyester / 12% Élasthanne",
      Coupe: "Semi-ajustée",
      Finition: "Coutures plates",
      "Gestion humidité": "Oui",
      Traitement: "Anti-odeur",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-top-black.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "running-top-white-001",
    slug: "running-top-bright-white",
    name: "Running T-Shirt Bright White",
    collection: "Æ-ESSENTIAL",
    category: "vetements",
    type: "T-shirt de running",
    price: 55, // PLACEHOLDER
    colors: ["Pantone 11-0601 TPG Bright White"],
    sizes: APPAREL_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "Version Bright White du Running T-Shirt NÆTS. Même technologie, expression épurée.",
    shortDescription: "Technique. Épuré. Blanc.",
    technicalSpecs: {
      Matière: "88% Polyester / 12% Élasthanne",
      Coupe: "Semi-ajustée",
      Finition: "Coutures plates",
      "Gestion humidité": "Oui",
      Traitement: "Anti-odeur",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-top-white.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "tank-top-black-001",
    slug: "tank-top-black",
    name: "Tank Top Black",
    collection: "Æ-SLYDE",
    category: "vetements",
    type: "Débardeur",
    price: 50, // PLACEHOLDER
    colors: ["Pantone Black"],
    sizes: APPAREL_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "Débardeur technique NÆTS pour les entraînements intensifs. Légèreté maximale, liberté de mouvement totale.",
    shortDescription: "Légèreté maximale. Liberté totale.",
    technicalSpecs: {
      Matière: "90% Polyester / 10% Élasthanne",
      Coupe: "Ajustée performance",
      Finition: "Coutures plates minimales",
      "Gestion humidité": "Oui",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-tank-black.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "tank-top-white-001",
    slug: "tank-top-bright-white",
    name: "Tank Top Bright White",
    collection: "Æ-SLYDE",
    category: "vetements",
    type: "Débardeur",
    price: 50, // PLACEHOLDER
    colors: ["Pantone 11-0601 TPG Bright White"],
    sizes: APPAREL_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "Version Bright White du Tank Top NÆTS. Légèreté technique et expression graphique pure.",
    shortDescription: "Légèreté. Expression blanche.",
    technicalSpecs: {
      Matière: "90% Polyester / 10% Élasthanne",
      Coupe: "Ajustée performance",
      Finition: "Coutures plates minimales",
      "Gestion humidité": "Oui",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-tank-white.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "running-short-black-001",
    slug: "running-short-black",
    name: "Running Short Black",
    collection: "Æ-ESSENTIAL",
    category: "vetements",
    type: "Short de running",
    price: 70, // PLACEHOLDER
    colors: ["Pantone Black"],
    sizes: APPAREL_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "Short technique NÆTS. Tissu léger à 4 voies d'extension, short intégré, poche zippée, coupe running précise.",
    shortDescription: "Amplitude. Légèreté. Précision.",
    technicalSpecs: {
      Matière: "92% Polyester / 8% Élasthanne",
      Coupe: "Running / Split",
      Longueur: "5\" (12,7 cm)",
      "Short intégré": "Oui",
      Poches: "1 zippée arrière",
      Ceinture: "Élastique + cordon",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-short-black.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "cycliste-black-001",
    slug: "cycliste-black",
    name: "Cycliste Black",
    collection: "Æ-REFLEX",
    category: "vetements",
    type: "Cycliste",
    price: 80, // PLACEHOLDER
    colors: ["Pantone Black"],
    sizes: APPAREL_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "Cycliste de compression NÆTS. Maintien musculaire précis, tissu technique, coupe anatomique.",
    shortDescription: "Compression. Maintien. Précision.",
    technicalSpecs: {
      Matière: "80% Polyamide / 20% Élasthanne",
      Coupe: "Anatomique compression",
      Compression: "Graduée légère",
      Finition: "Coutures plates",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-cycliste-black.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
];

// ─── ACCESSOIRES ──────────────────────────────────────────────────────────────

const accessoires: Product[] = [
  {
    id: "running-sock-white-001",
    slug: "running-sock-white",
    name: "Running Sock White",
    collection: "Æ-ESSENTIAL",
    category: "accessoires",
    type: "Chaussette de running",
    price: 20, // PLACEHOLDER
    colors: ["White"],
    sizes: SOCK_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "Chaussette technique NÆTS. Anatomique gauche/droite, renfort talon/pointe, maille respirante, marquage NÆTS discret.",
    shortDescription: "Technique. Anatomique. Précise.",
    technicalSpecs: {
      Matière: "75% Coton / 20% Polyamide / 5% Élasthanne",
      Coupe: "Anatomique G/D",
      Hauteur: "Mi-mollet",
      "Renfort talon": "Oui",
      "Renfort pointe": "Oui",
      Marquage: "NÆTS",
    },
    images: ["/images/placeholder-sock-white.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "casquette-naets-001",
    slug: "casquette-naets",
    name: "Casquette NÆTS",
    collection: "Æ-ESSENTIAL",
    category: "accessoires",
    type: "Casquette de running",
    price: 35, // PLACEHOLDER
    colors: ["Pantone Black", "White"],
    sizes: CAP_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "Casquette technique NÆTS. Visière rigide, sangle ajustable, tissu respirant et déperlant. Marquage NÆTS discret sur la visière.",
    shortDescription: "Protection. Légèreté. Style.",
    technicalSpecs: {
      Matière: "95% Polyester / 5% Élasthanne",
      Visière: "Rigide, incurvée",
      Fermeture: "Sangle ajustable",
      "Déperlance": "Oui",
      Marquage: "NÆTS brodé",
    },
    images: ["/images/placeholder-cap.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Entraînement"],
  },
  {
    id: "tote-bag-naets-001",
    slug: "tote-bag-naets",
    name: "Tote Bag NÆTS",
    collection: "Æ-ESSENTIAL",
    category: "accessoires",
    type: "Sac",
    price: 30, // PLACEHOLDER
    colors: ["Pantone Black", "White"],
    sizes: UNIQUE_SIZE,
    gender: "Unisexe",
    badges: [],
    description:
      "Tote bag NÆTS en coton épais. Marquage NÆTS sérigraphié. Format standard, anses renforcées.",
    shortDescription: "Simple. Robuste. NÆTS.",
    technicalSpecs: {
      Matière: "100% Coton épais",
      Format: "38 × 42 cm",
      Anses: "Renforcées",
      Marquage: "Sérigraphié NÆTS",
    },
    images: ["/images/placeholder-tote.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Polyvalent"],
  },
  {
    id: "gourde-naets-001",
    slug: "gourde-naets",
    name: "Gourde NÆTS",
    collection: "Æ-ESSENTIAL",
    category: "accessoires",
    type: "Gourde",
    price: 25, // PLACEHOLDER
    colors: ["Pantone Black", "White"],
    sizes: BOTTLE_SIZES,
    gender: "Unisexe",
    badges: [],
    description:
      "Gourde isotherme NÆTS. Acier inoxydable, bouchon à vis, marquage NÆTS gravé. Garde le froid 24h, le chaud 12h.",
    shortDescription: "Hydratation technique. Inox gravé.",
    technicalSpecs: {
      Matière: "Acier inoxydable 18/8",
      Isolation: "Double paroi sous vide",
      Froid: "24h",
      Chaud: "12h",
      Bouchon: "À vis étanche",
      Marquage: "Gravé laser",
    },
    images: ["/images/placeholder-bottle.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Polyvalent"],
  },
  {
    id: "mousqueton-naets-001",
    slug: "mousqueton-naets",
    name: "Mousqueton NÆTS",
    collection: "Æ-ESSENTIAL",
    category: "accessoires",
    type: "Accessoire",
    price: 15, // PLACEHOLDER
    colors: ["Pantone Black"],
    sizes: UNIQUE_SIZE,
    gender: "Unisexe",
    badges: [],
    description:
      "Mousqueton aluminium NÆTS. Robuste, léger, marquage NÆTS gravé. Pour fixer ton équipement à la ceinture ou au sac.",
    shortDescription: "Aluminium. Solide. Compact.",
    technicalSpecs: {
      Matière: "Aluminium 6061",
      Résistance: "25 kN",
      Poids: "35 g",
      Marquage: "Gravé NÆTS",
      Finition: "Anodisé noir",
    },
    images: ["/images/placeholder-carabiner.jpg"],
    isNew: false,
    inStock: true,
    usage: ["Running", "Polyvalent"],
  },
];

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export const products: Product[] = [...chaussures, ...vetements, ...accessoires];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: ProductCategory): Product[] =>
  products.filter((p) => p.category === category);

export const getProductsByCollection = (collection: ProductCollection): Product[] =>
  products.filter((p) => p.collection === collection);

export const getFeaturedShoes = (): Product[] =>
  products.filter((p) => p.category === "chaussures").slice(0, 4);

export const getFeaturedApparel = (): Product[] =>
  products.filter((p) => p.category === "vetements").slice(0, 6);

export const getNewProducts = (): Product[] =>
  products.filter((p) => p.isNew);

export const getRelatedProducts = (product: Product, limit = 4): Product[] =>
  products
    .filter((p) => p.id !== product.id && p.collection === product.collection)
    .slice(0, limit);

export const getComplementaryProducts = (product: Product, limit = 4): Product[] => {
  if (product.category === "chaussures") {
    return products
      .filter((p) => p.category === "vetements" || p.category === "accessoires")
      .slice(0, limit);
  }
  if (product.category === "vetements") {
    const shoes = products.filter((p) => p.category === "chaussures").slice(0, 2);
    const accs = products.filter((p) => p.category === "accessoires").slice(0, 2);
    return [...shoes, ...accs].slice(0, limit);
  }
  const shoes = products.filter((p) => p.category === "chaussures").slice(0, 2);
  const app = products.filter((p) => p.category === "vetements").slice(0, 2);
  return [...shoes, ...app].slice(0, limit);
};
