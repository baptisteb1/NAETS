# Graph Report - .  (2026-06-12)

## Corpus Check
- Corpus is ~36,237 words - fits in a single context window. You may not need a graph.

## Summary
- 361 nodes · 563 edges · 26 communities (18 shown, 8 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 40 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_UI Components Core|UI Components Core]]
- [[_COMMUNITY_Footer & Navigation Layout|Footer & Navigation Layout]]
- [[_COMMUNITY_Product & Collection Pages|Product & Collection Pages]]
- [[_COMMUNITY_App Shell & Layout|App Shell & Layout]]
- [[_COMMUNITY_Homepage & Brand Hero|Homepage & Brand Hero]]
- [[_COMMUNITY_Dependencies & Config|Dependencies & Config]]
- [[_COMMUNITY_Search & Discovery|Search & Discovery]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_B2B Retail Partner|B2B Retail Partner]]
- [[_COMMUNITY_Blog & Inside NÆTS|Blog & Inside NÆTS]]
- [[_COMMUNITY_Product Detail UX|Product Detail UX]]
- [[_COMMUNITY_Packs & Sizing|Packs & Sizing]]
- [[_COMMUNITY_Shop & Filtering|Shop & Filtering]]
- [[_COMMUNITY_Community Collective|Community Collective]]
- [[_COMMUNITY_Returns & FAQ|Returns & FAQ]]
- [[_COMMUNITY_Brand Philosophy|Brand Philosophy]]
- [[_COMMUNITY_Cart & Wishlist|Cart & Wishlist]]
- [[_COMMUNITY_Technical Specs|Technical Specs]]
- [[_COMMUNITY_Customer Reviews|Customer Reviews]]
- [[_COMMUNITY_Data Layer Products|Data Layer Products]]
- [[_COMMUNITY_Reassurance & Trust|Reassurance & Trust]]
- [[_COMMUNITY_Newsletter|Newsletter]]
- [[_COMMUNITY_Breadcrumb Nav|Breadcrumb Nav]]
- [[_COMMUNITY_MegaMenu|MegaMenu]]
- [[_COMMUNITY_Editorial Block|Editorial Block]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 32 edges
2. `compilerOptions` - 16 edges
3. `ProductPageContent` - 16 edges
4. `SearchOverlay()` - 14 edges
5. `Product` - 14 edges
6. `chaussures` - 9 edges
7. `useCart()` - 8 edges
8. `formatPrice()` - 8 edges
9. `HomePage` - 8 edges
10. `mainNav` - 7 edges

## Surprising Connections (you probably didn't know these)
- `nextConfig` --conceptually_related_to--> `GitHub Actions deploy workflow (GitHub Pages)`  [INFERRED]
  next.config.ts → .github/workflows/deploy.yml
- `GalleryPlaceholder()` --calls--> `cn()`  [EXTRACTED]
  app/product/[slug]/ProductPageContent.tsx → lib/utils.ts
- `Breadcrumb()` --calls--> `cn()`  [EXTRACTED]
  components/Breadcrumb.tsx → lib/utils.ts
- `CartBadge()` --calls--> `cn()`  [EXTRACTED]
  components/Header.tsx → lib/utils.ts
- `MegaMenu()` --calls--> `cn()`  [EXTRACTED]
  components/MegaMenu.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (26 total, 8 thin omitted)

### Community 0 - "UI Components Core"
Cohesion: 0.06
Nodes (38): Accordion(), AccordionItem, AccordionProps, AccordionRow(), AccordionItem interface, AccordionRow sub-component, CartDrawer(), CartDrawerProps (+30 more)

### Community 1 - "Footer & Navigation Layout"
Cohesion: 0.08
Nodes (33): columns, FooterColumn, MobileAccordion(), CartBadge(), Header(), HeaderProps, MegaMenu(), MegaMenuProps (+25 more)

### Community 2 - "Product & Collection Pages"
Cohesion: 0.09
Nodes (26): generateMetadata(), metadata, NotFound(), generateMetadata(), CollectionCard(), CollectionCardProps, CollectionsPage(), metadata (+18 more)

### Community 3 - "App Shell & Layout"
Cohesion: 0.10
Nodes (24): inter, metadata, ProductGridProps, CartDrawer, Footer, Header, SearchOverlay, SiteShell() (+16 more)

### Community 4 - "Homepage & Brand Hero"
Cohesion: 0.10
Nodes (17): HomePage(), technicalItems, Hero(), HeroProps, items, TechnicalBlock(), TechnicalBlockProps, TechnicalItem (+9 more)

### Community 5 - "Dependencies & Config"
Cohesion: 0.08
Nodes (23): dependencies, clsx, lucide-react, next, react, react-dom, tailwind-merge, devDependencies (+15 more)

### Community 6 - "Search & Discovery"
Cohesion: 0.13
Nodes (19): ArticleResult, MOCK_ARTICLES, MOCK_PAGES, PageResult, Popular Searches: Æ-REFLEX, Plaque carbone, Rain Jacket, Æ-SLYDE, Running Top, searchArticles(), searchCollections(), SearchOverlay() (+11 more)

### Community 7 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 8 - "B2B Retail Partner"
Cohesion: 0.12
Nodes (10): metadata, B2BFormState, introArguments, partnerArguments, CITIES, metadata, Retailer, RETAILERS (+2 more)

### Community 9 - "Blog & Inside NÆTS"
Cohesion: 0.16
Nodes (12): articles, BlogPage(), ImagePlaceholder(), metadata, ATPU + Carbon Plate technology, explodedParts, InsideNaetsPage(), materials (+4 more)

### Community 10 - "Product Detail UX"
Cohesion: 0.14
Nodes (10): QuantitySelectorProps, TechnicalSpecsProps, ColorSelector, GalleryPlaceholder, ProductNotFound, ProductPage, ProductGallery, ProductPageContent (+2 more)

### Community 11 - "Packs & Sizing"
Cohesion: 0.24
Nodes (10): MiniImagePlaceholder(), Pack, PackCard(), PackProduct, PACKS, PacksPage(), SIZES_APPAREL, SIZES_SHOES (+2 more)

### Community 12 - "Shop & Filtering"
Cohesion: 0.20
Nodes (7): NaetsCollectiveClient, ClubOption, events, FormState, socialFeatures, metadata, NaetsCollectivePage()

### Community 13 - "Community Collective"
Cohesion: 0.25
Nodes (6): CLOTHING_SIZES data, CLOTHING_SIZES, MEASUREMENT_TIPS, metadata, SHOE_SIZES, SHOE_SIZES data

### Community 14 - "Returns & FAQ"
Cohesion: 0.33
Nodes (6): AvisClientsPage(), metadata, RATING_BARS, Review, REVIEWS, StarDisplay()

### Community 15 - "Brand Philosophy"
Cohesion: 0.40
Nodes (5): AccordionItem(), FAQ_DATA, FAQCategory, FAQItem, FAQPage()

### Community 16 - "Cart & Wishlist"
Cohesion: 0.60
Nodes (4): AccountPage(), EmptyOrders(), Field(), metadata

## Ambiguous Edges - Review These
- `EditorialBlock.tsx` → `utils.ts`  [AMBIGUOUS]
  components/EditorialBlock.tsx · relation: conceptually_related_to
- `Newsletter.tsx` → `utils.ts`  [AMBIGUOUS]
  components/Newsletter.tsx · relation: conceptually_related_to

## Knowledge Gaps
- **160 isolated node(s):** `metadata`, `metadata`, `Review`, `REVIEWS`, `RATING_BARS` (+155 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `EditorialBlock.tsx` and `utils.ts`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Newsletter.tsx` and `utils.ts`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `ProductPageContent` connect `Product Detail UX` to `UI Components Core`, `Blog & Inside NÆTS`, `Product & Collection Pages`, `App Shell & Layout`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `cn()` connect `UI Components Core` to `Footer & Navigation Layout`, `Product & Collection Pages`, `App Shell & Layout`, `Homepage & Brand Hero`, `Search & Discovery`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Why does `HomePage` connect `Homepage & Brand Hero` to `UI Components Core`, `Footer & Navigation Layout`, `Product & Collection Pages`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **What connects `metadata`, `metadata`, `Review` to the rest of the system?**
  _160 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Components Core` be split into smaller, more focused modules?**
  _Cohesion score 0.0636734693877551 - nodes in this community are weakly interconnected._