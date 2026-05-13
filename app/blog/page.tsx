import type { Metadata } from 'next';
import Link from 'next/link';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles, run reports, inspiration et technique NÆTS. Découvrez notre univers éditorial.',
  openGraph: {
    title: 'Blog | NÆTS',
    description: 'Articles, run reports, inspiration technique.',
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const articles = [
  {
    slug: 'guide-tailles-naets',
    category: 'CONSEILS',
    title: 'Guide des tailles NÆTS — Comment choisir sa pointure',
    excerpt:
      'Chaque modèle NÆTS présente des spécificités de forme et de largeur. Ce guide vous aide à choisir la taille exacte selon votre foulée.',
    date: '8 MAI 2027',
  },
  {
    slug: 'run-report-ae-slyde-42km',
    category: 'PERFORMANCE',
    title: 'Run Report : 42km avec la Æ-SLYDE',
    excerpt:
      'Retour terrain sur un marathon complet en Æ-SLYDE Black. Dynamique de foulée, confort et conclusions après 42km.',
    date: '3 MAI 2027',
  },
  {
    slug: 'entretien-chaussures-running',
    category: 'CONSEILS',
    title: "L'entretien de vos chaussures de running",
    excerpt:
      'Nettoyage, stockage, durée de vie : comment préserver les performances techniques de vos modèles NÆTS sur le long terme.',
    date: '28 AVRIL 2027',
  },
  {
    slug: 'naets-collective-saison-1',
    category: 'COMMUNAUTÉ',
    title: 'NÆTS Collective : saison 1',
    excerpt:
      'Retour sur la première saison du NÆTS Collective — coureurs, ambassadeurs, sessions terrain et résultats collectifs.',
    date: '20 AVRIL 2027',
  },
  {
    slug: 'materiaux-atpu-vs-eva',
    category: 'TECHNIQUE',
    title: "Matériaux techniques : ATPU vs EVA",
    excerpt:
      "Analyse comparative des deux mousses dominantes du running premium. Pourquoi NÆTS a choisi l'ATPU pour l'ensemble de sa gamme.",
    date: '15 AVRIL 2027',
  },
  {
    slug: 'guide-debutant-chaussure-running',
    category: 'CONSEILS',
    title: 'Guide débutant : choisir sa chaussure de running',
    excerpt:
      "Drop, stack, amorti, plaque carbone — tout ce qu'un coureur débutant doit comprendre avant son premier achat technique.",
    date: '10 AVRIL 2027',
  },
];

// ─── Image Placeholder ────────────────────────────────────────────────────────

function ImagePlaceholder({
  className,
  label = 'IMAGE À VENIR',
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className ?? ''}`}
      style={{ backgroundColor: '#0A0A0A' }}
      aria-hidden="true"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Corner marks */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/20" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/20" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/20" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/20" />
      {/* Watermark */}
      <div className="relative flex flex-col items-center gap-1 select-none pointer-events-none">
        <span
          className="font-condensed text-white/[0.05] leading-none"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontFamily: "'Bebas Neue', sans-serif" }}
        >
          NÆTS
        </span>
        <span
          className="font-sans text-white/20 uppercase"
          style={{ fontSize: 9, letterSpacing: '0.3em' }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  return (
    <main>

      {/* ── 1. HERO HEADER ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="blog-title"
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        {/* Corner marks */}
        <span className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20" aria-hidden="true" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-8 md:px-12 pt-16 pb-16 md:pb-20">
          <p
            className="font-sans text-naets-dark-gray uppercase mb-4"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            NÆTS — CONTENT
          </p>
          <h1
            id="blog-title"
            className="font-condensed text-naets-white leading-none mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(80px, 14vw, 180px)',
              letterSpacing: '0.02em',
            }}
          >
            BLOG
          </h1>
          <p
            className="font-sans text-naets-mid-gray"
            style={{ fontSize: 13, letterSpacing: '0.05em' }}
          >
            Articles, run reports, inspiration &amp; technique.
          </p>
        </div>
      </section>

      {/* ── 2. FEATURED ARTICLE ──────────────────────────────────────────────── */}
      <section
        className="bg-naets-white px-8 md:px-12 pt-16 pb-12"
        aria-labelledby="featured-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section label */}
          <p
            className="font-sans text-naets-dark-gray uppercase mb-6"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            À LA UNE
          </p>

          {/* Featured card */}
          <article className="border border-naets-black">

            {/* Image */}
            <ImagePlaceholder className="aspect-video min-h-[280px] md:min-h-[400px] w-full" />

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0 border-t border-naets-black">

              {/* Left: text */}
              <div className="p-8 md:p-10 flex flex-col gap-5 md:border-r border-naets-black">
                {/* Category */}
                <span
                  className="font-sans text-naets-dark-gray uppercase"
                  style={{ fontSize: 10, letterSpacing: '0.2em' }}
                >
                  TECHNIQUE
                </span>

                {/* Title */}
                <h2
                  id="featured-title"
                  className="font-condensed text-naets-black leading-tight"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    letterSpacing: '0.02em',
                  }}
                >
                  L&apos;architecture de la Æ-REFLEX : plaque carbone et ATPU
                </h2>

                {/* Excerpt */}
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed max-w-2xl"
                  style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                >
                  Comment nous avons conçu la Æ-REFLEX pour maximiser la propulsion tout en conservant
                  une légèreté extrême. Analyse de l&apos;architecture interne, du choix de la plaque et
                  de la formule ATPU exclusive.
                </p>

                {/* Date */}
                <p
                  className="font-sans text-naets-mid-gray uppercase"
                  style={{ fontSize: 10, letterSpacing: '0.15em' }}
                >
                  13 MAI 2027
                </p>
              </div>

              {/* Right: CTA block */}
              <div className="flex items-end p-8 md:p-10">
                <Link
                  href="/blog/architecture-ae-reflex"
                  className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.15em] uppercase font-medium bg-naets-black text-naets-white px-8 py-4 transition-colors duration-150 hover:bg-naets-near-black whitespace-nowrap"
                >
                  LIRE L&apos;ARTICLE →
                </Link>
              </div>

            </div>
          </article>
        </div>
      </section>

      {/* ── 3. ARTICLE GRID ──────────────────────────────────────────────────── */}
      <section
        className="bg-naets-white px-8 md:px-12 pb-20"
        aria-labelledby="articles-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Divider + label */}
          <div className="flex items-center gap-6 mb-10">
            <div className="h-px bg-naets-light-gray flex-1" aria-hidden="true" />
            <p
              id="articles-title"
              className="font-sans text-naets-dark-gray uppercase shrink-0"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              TOUS LES ARTICLES
            </p>
            <div className="h-px bg-naets-light-gray flex-1" aria-hidden="true" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-naets-light-gray">
            {articles.map((article, idx) => (
              <article
                key={article.slug}
                className={[
                  'flex flex-col',
                  'border-b border-naets-light-gray',
                  idx % 3 !== 2 ? 'lg:border-r lg:border-naets-light-gray' : '',
                  idx % 2 === 0 ? 'md:border-r md:border-naets-light-gray lg:border-r-0' : '',
                  idx % 3 !== 2 && idx % 2 === 0 ? 'lg:border-r lg:border-naets-light-gray' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {/* Image */}
                <ImagePlaceholder className="aspect-[3/2] min-h-[200px] w-full" />

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  {/* Category */}
                  <span
                    className="font-sans text-naets-dark-gray uppercase"
                    style={{ fontSize: 10, letterSpacing: '0.2em' }}
                  >
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-condensed text-naets-black leading-tight"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 24,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="font-sans text-naets-dark-gray leading-relaxed line-clamp-2 flex-1"
                    style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.7 }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Footer: date + link */}
                  <div className="flex items-center justify-between pt-3 border-t border-naets-light-gray mt-auto">
                    <span
                      className="font-sans text-naets-mid-gray uppercase"
                      style={{ fontSize: 10, letterSpacing: '0.15em' }}
                    >
                      {article.date}
                    </span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="font-sans text-naets-black uppercase font-medium transition-colors duration-150 hover:text-naets-dark-gray"
                      style={{ fontSize: 11, letterSpacing: '0.15em' }}
                    >
                      LIRE →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
