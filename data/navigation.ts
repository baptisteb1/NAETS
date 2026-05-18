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
    // megaMenu stub keeps header hover/aria logic intact — content rendered by ShopMegaMenu
    megaMenu: { columns: [] },
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
            { label: "Notre histoire", href: "/philosophie/notre-histoire" },
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
            { label: "L'univers technique de la marque", href: "/inside-naets/univers-technique" },
            { label: "Explications techniques", href: "/inside-naets/explications-techniques" },
            { label: "Photos", href: "/inside-naets/photos" },
            { label: "Vidéos usine", href: "/inside-naets/videos-usine" },
            { label: "Matériaux", href: "/inside-naets/materiaux" },
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
            { label: "Running club", href: "/naets-collective/running-club" },
            { label: "Social club", href: "/naets-collective/social-club" },
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
            { label: "Revendeur", href: "/retail-partenaire/revendeur" },
            { label: "Devenir partenaire", href: "/retail-partenaire/devenir-partenaire" },
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

// ─── Shop mega menu ───────────────────────────────────────────────────────────

export interface ShopLink {
  label: string;
  href: string;
}

export interface ShopColumn {
  title: string;
  links: ShopLink[];
}

export interface ShopCategory {
  handle: string;
  label: string;
  columns: ShopColumn[];
}

export interface ShopPromo {
  title: string;
  href: string;
}

export interface ShopMegaMenuData {
  categories: ShopCategory[];
  promos: ShopPromo[];
}

export const shopMegaMenuData: ShopMegaMenuData = {
  categories: [
    {
      handle: "homme",
      label: "HOMME",
      columns: [
        {
          title: "DROP",
          links: [
            { label: "Drop 1", href: "/shop/homme/drop-1" },
          ],
        },
        {
          title: "CHAUSSURE",
          links: [
            { label: "All", href: "/shop/homme/chaussures" },
            { label: "Æ-REFLEX", href: "/shop/homme/chaussures/ae-reflex" },
            { label: "Running", href: "/shop/homme/chaussures/running" },
            { label: "Compétition", href: "/shop/homme/chaussures/competition" },
            { label: "Entraînement", href: "/shop/homme/chaussures/entrainement" },
          ],
        },
        {
          title: "VÊTEMENT",
          links: [
            { label: "All", href: "/shop/homme/vetements" },
            { label: "T-shirts", href: "/shop/homme/vetements/t-shirts" },
            { label: "Débardeur", href: "/shop/homme/vetements/debardeur" },
            { label: "Veste", href: "/shop/homme/vetements/veste" },
            { label: "Short", href: "/shop/homme/vetements/short" },
            { label: "Cuissard", href: "/shop/homme/vetements/cuissard" },
          ],
        },
        {
          title: "ACCESSOIRE",
          links: [
            { label: "Casquettes", href: "/shop/homme/accessoires/casquettes" },
            { label: "Chaussettes", href: "/shop/homme/accessoires/chaussettes" },
            { label: "Tote bag", href: "/shop/homme/accessoires/tote-bag" },
            { label: "Gourdes", href: "/shop/homme/accessoires/gourdes" },
            { label: "Mousquetons", href: "/shop/homme/accessoires/mousquetons" },
          ],
        },
      ],
    },
    {
      handle: "femme",
      label: "FEMME",
      columns: [
        {
          title: "DROP",
          links: [
            { label: "Drop 1", href: "/shop/femme/drop-1" },
          ],
        },
        {
          title: "CHAUSSURE",
          links: [
            { label: "All", href: "/shop/femme/chaussures" },
            { label: "Æ-REFLEX", href: "/shop/femme/chaussures/ae-reflex" },
            { label: "Running", href: "/shop/femme/chaussures/running" },
            { label: "Compétition", href: "/shop/femme/chaussures/competition" },
            { label: "Entraînement", href: "/shop/femme/chaussures/entrainement" },
          ],
        },
        {
          title: "VÊTEMENT",
          links: [
            { label: "All", href: "/shop/femme/vetements" },
            { label: "T-shirts", href: "/shop/femme/vetements/t-shirts" },
            { label: "Débardeur", href: "/shop/femme/vetements/debardeur" },
            { label: "Veste", href: "/shop/femme/vetements/veste" },
            { label: "Short", href: "/shop/femme/vetements/short" },
            { label: "Cuissard", href: "/shop/femme/vetements/cuissard" },
          ],
        },
        {
          title: "ACCESSOIRE",
          links: [
            { label: "Casquettes", href: "/shop/femme/accessoires/casquettes" },
            { label: "Chaussettes", href: "/shop/femme/accessoires/chaussettes" },
            { label: "Tote bag", href: "/shop/femme/accessoires/tote-bag" },
            { label: "Gourdes", href: "/shop/femme/accessoires/gourdes" },
            { label: "Mousquetons", href: "/shop/femme/accessoires/mousquetons" },
          ],
        },
      ],
    },
  ],
  promos: [
    {
      title: "Æ-REFLEX — LA PRÉCISION EN MOUVEMENT",
      href: "/collections/ae-reflex",
    },
    {
      title: "DROP 1 — ENGINEERED RUNNING PERFORMANCE",
      href: "/shop/drop-1",
    },
  ],
};
