export interface Collection {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  manifesto: string;
  technicalHighlights: string[];
  image: string;
  imageDark: string;
}

export const collections: Collection[] = [
  {
    slug: "ae-essential",
    name: "Æ-ESSENTIAL",
    shortName: "ESSENTIAL",
    tagline: "Le fondamental technique.",
    description:
      "La collection Æ-ESSENTIAL est le socle de la marque NÆTS. Pensée pour le quotidien du coureur urbain, elle rassemble les pièces techniques essentielles — chaussures polyvalentes, hauts respirants, vestes légères. Fiable, robuste, sobre.",
    manifesto:
      "Chaque course commence par un choix. Æ-ESSENTIAL est le choix qui ne se questionne pas — solide, technique, présent à chaque session.",
    technicalHighlights: [
      "Tissu respirant haute performance",
      "Confort journalier optimisé",
      "Polyvalence usage / condition",
      "Marquage NÆTS discret",
      "Matières durables",
    ],
    image: "/images/placeholder-collection-essential.jpg",
    imageDark: "/images/placeholder-collection-essential-dark.jpg",
  },
  {
    slug: "ae-reflex",
    name: "Æ-REFLEX",
    shortName: "REFLEX",
    tagline: "Précision. Légèreté. Maintien.",
    description:
      "Pensée pour les coureurs à la recherche d'un maintien précis et d'une sensation de légèreté absolue, la Æ-REFLEX combine architecture minimaliste et performance technique. Plaque carbone, ATPU, tige rip-stop — chaque détail est calculé.",
    manifesto:
      "La vitesse ne se force pas. Elle se libère. Æ-REFLEX est l'architecture qui permet au mouvement d'exister pleinement, sans friction, sans compromis.",
    technicalHighlights: [
      "Plaque carbone intégrée",
      "Midsole ATPU réactive",
      "Tige single mesh rip-stop",
      "Renforts TPU stratégiques",
      "Maintien précis / sensation légère",
    ],
    image: "/images/placeholder-collection-reflex.jpg",
    imageDark: "/images/placeholder-collection-reflex-dark.jpg",
  },
  {
    slug: "ae-slyde",
    name: "Æ-SLYDE",
    shortName: "SLYDE",
    tagline: "Fluidité. Distance. Contrôle.",
    description:
      "La Æ-SLYDE redéfinit la fluidité du geste de course. Conçue pour les longues distances, elle intègre un amorti progressif haute densité et une propulsion contrôlée. Pure, précise, blanche ou noire.",
    manifesto:
      "Les longues distances révèlent la qualité d'une chaussure. Æ-SLYDE ne cède pas. Elle accompagne, kilomètre après kilomètre, avec une régularité mécanique.",
    technicalHighlights: [
      "Plaque carbone longue distance",
      "ATPU haute densité / amorti progressif",
      "Tige renforcée anatomique",
      "Propulsion contrôlée",
      "Disponible Black & White",
    ],
    image: "/images/placeholder-collection-slyde.jpg",
    imageDark: "/images/placeholder-collection-slyde-dark.jpg",
  },
];

export const getCollectionBySlug = (slug: string): Collection | undefined =>
  collections.find((c) => c.slug === slug);
