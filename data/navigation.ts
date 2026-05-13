export interface NavItem {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  number: string;
  title: string;
  items: NavItem[];
  note?: string;
}

export interface MegaMenuSection {
  columns: MegaMenuColumn[];
}

export interface NavLink {
  label: string;
  href: string;
  megaMenu?: MegaMenuSection;
}

export const mainNav: NavLink[] = [
  {
    label: "SHOP",
    href: "/shop",
    megaMenu: {
      columns: [
        {
          number: "01",
          title: "GENRE",
          items: [
            { label: "Shop Homme", href: "/shop?genre=homme" },
            { label: "Shop Femme", href: "/shop?genre=femme" },
            { label: "Produits Unisexes", href: "/shop?genre=unisexe" },
          ],
          note: "Tous nos produits sont unisexes",
        },
        {
          number: "02",
          title: "COLLECTION",
          items: [
            { label: "Drop 1", href: "/collections/drop-1" },
            { label: "Æ-ESSENTIAL", href: "/collections/ae-essential" },
            { label: "Æ-REFLEX", href: "/collections/ae-reflex" },
            { label: "Æ-SLYDE", href: "/collections/ae-slyde" },
          ],
        },
        {
          number: "03",
          title: "CHAUSSURES",
          items: [
            { label: "All", href: "/shop?category=chaussures" },
            { label: "Running", href: "/shop?category=chaussures&usage=running" },
            { label: "Entraînements", href: "/shop?category=chaussures&usage=entrainement" },
            { label: "Compétitions", href: "/shop?category=chaussures&usage=competition" },
          ],
        },
        {
          number: "04",
          title: "VÊTEMENTS",
          items: [
            { label: "All", href: "/shop?category=vetements" },
            { label: "T-shirts", href: "/shop?category=vetements&type=tshirt" },
            { label: "Débardeur", href: "/shop?category=vetements&type=debardeur" },
            { label: "Veste", href: "/shop?category=vetements&type=veste" },
            { label: "Short", href: "/shop?category=vetements&type=short" },
            { label: "Cycliste", href: "/shop?category=vetements&type=cycliste" },
          ],
          note: "Catégories évolutives selon les nouveautés",
        },
      ],
    },
  },
  {
    label: "PHILOSOPHIE",
    href: "/philosophie",
    megaMenu: {
      columns: [
        {
          number: "01",
          title: "MARQUE",
          items: [
            { label: "Notre Histoire", href: "/philosophie" },
            { label: "Blog", href: "/blog" },
          ],
        },
      ],
    },
  },
  {
    label: "INSIDE NÆTS",
    href: "/inside-naets",
    megaMenu: {
      columns: [
        {
          number: "01",
          title: "L'UNIVERS TECHNIQUE",
          items: [
            { label: "Explications techniques", href: "/inside-naets#technique" },
            { label: "Photos", href: "/inside-naets#photos" },
            { label: "Vidéo usine", href: "/inside-naets#video" },
            { label: "Matériaux", href: "/inside-naets#materiaux" },
          ],
        },
      ],
    },
  },
  {
    label: "NÆTS COLLECTIVE",
    href: "/naets-collective",
    megaMenu: {
      columns: [
        {
          number: "01",
          title: "COMMUNAUTÉ",
          items: [
            { label: "Running Club", href: "/naets-collective#running-club" },
            { label: "Social Club", href: "/naets-collective#social-club" },
          ],
        },
      ],
    },
  },
  {
    label: "RETAIL PARTENAIRE",
    href: "/retail-partenaire",
    megaMenu: {
      columns: [
        {
          number: "01",
          title: "DISTRIBUTION",
          items: [
            { label: "Revendeur", href: "/revendeurs" },
            { label: "Devenir partenaire", href: "/retail-partenaire" },
          ],
        },
      ],
    },
  },
];

export const footerNav = {
  produits: [
    { label: "CHAUSSURES", href: "/shop?category=chaussures" },
    { label: "VÊTEMENTS", href: "/shop?category=vetements" },
    { label: "NOUVEAUTÉS", href: "/shop?filter=new" },
    { label: "PROMOTIONS", href: "/shop?filter=promo" },
  ],
  collections: [
    { label: "Æ-ESSENTIAL", href: "/collections/ae-essential" },
    { label: "Æ-REFLEX", href: "/collections/ae-reflex" },
    { label: "Æ-SLYDE", href: "/collections/ae-slyde" },
  ],
  assistance: [
    { label: "FAIRE UN RETOUR", href: "/retours" },
    { label: "FAQ", href: "/faq" },
    { label: "NOS REVENDEURS", href: "/revendeurs" },
    { label: "AVIS CLIENTS", href: "/avis-clients" },
    { label: "TABLEAUX DES TAILLES", href: "/tableau-des-tailles" },
  ],
  naets: [
    { label: "COLLECTIVE", href: "/naets-collective" },
    { label: "PHILOSOPHIE", href: "/philosophie" },
    { label: "INSIDE", href: "/inside-naets" },
    { label: "BLOG", href: "/blog" },
  ],
};

export const legalNav = [
  { label: "Conditions générales de vente", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Gérer mes consentements", href: "/consentements" },
];
