import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Philosophie',
  description:
    'NÆTS est née d\'une conviction simple : la performance n\'a pas besoin d\'être bruyante. Découvrez notre histoire, notre vision et nos valeurs.',
  openGraph: {
    title: 'Philosophie | NÆTS',
    description:
      'La sobriété comme langage. Marque de running premium, sobre, technique et statutaire.',
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PhilosophiePage() {
  return (
    <main>

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="hero-title"
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
        <span className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-8 right-8 w-5 h-5 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-white/20" aria-hidden="true" />

        {/* Section label — top left */}
        <div className="absolute top-12 left-8 md:left-16">
          <p
            className="font-sans text-naets-dark-gray uppercase"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            01 — NOTRE HISTOIRE
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-screen-xl mx-auto w-full">
          <h1
            id="hero-title"
            className="font-condensed text-naets-white leading-none mb-8"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(72px, 12vw, 180px)',
              letterSpacing: '0.02em',
            }}
          >
            LA SOBRIÉTÉ
            <br />
            COMME LANGAGE.
          </h1>
          <p
            className="font-sans text-naets-mid-gray leading-relaxed max-w-xl"
            style={{ fontSize: 14, letterSpacing: '0.03em' }}
          >
            NÆTS est née d'une conviction simple : la performance n'a pas besoin d"être bruyante.
          </p>
        </div>
      </section>

      {/* ── 2. TEXT + IMAGE BLOCK ─────────────────────────────────────────────── */}
      <section className="bg-naets-white py-24 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-naets-light-gray">

          {/* Left: editorial text */}
          <div className="p-10 md:p-16 flex flex-col justify-center gap-8 border-b md:border-b-0 md:border-r border-naets-light-gray">
            {/* Section label */}
            <p
              className="font-sans text-naets-dark-gray uppercase"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              NÆTS — IDENTITÉ
            </p>

            <p
              className="font-sans text-naets-black leading-relaxed"
              style={{ fontSize: 14, letterSpacing: '0.02em', lineHeight: 1.8 }}
            >
              Nous avons créé NÆTS pour les coureurs qui ne cherchent pas à se montrer. Qui courent tôt le matin, qui refont le même circuit jusqu'à le maîtriser, qui font confiance à leur foulée plutôt qu'à leurs équipements.
            </p>

            <div className="h-px bg-naets-light-gray" aria-hidden="true" />

            <p
              className="font-sans text-naets-black leading-relaxed"
              style={{ fontSize: 14, letterSpacing: '0.02em', lineHeight: 1.8 }}
            >
              Notre chaussure est conçue pour disparaître. Pour que le seul souvenir de la course soit la course elle-même.
            </p>

            <div className="h-px bg-naets-light-gray" aria-hidden="true" />

            <p
              className="font-sans text-naets-black leading-relaxed"
              style={{ fontSize: 14, letterSpacing: '0.02em', lineHeight: 1.8 }}
            >
              NÆTS est une marque de running premium, sobre, technique et statutaire.
            </p>
          </div>

          {/* Right: dark placeholder image */}
          <div
            className="relative min-h-[420px] flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: '#0A0A0A' }}
            aria-hidden="true"
          >
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, #BDBDB7 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* Corner marks */}
            <span className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" />
            <span className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20" />
            <span className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20" />
            <span className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />
            {/* Watermark */}
            <div className="relative flex flex-col items-center gap-2 select-none pointer-events-none">
              <span
                className="font-condensed text-white/[0.06] leading-none"
                style={{ fontSize: 'clamp(64px, 10vw, 120px)', fontFamily: "'Bebas Neue', sans-serif" }}
              >
                NÆTS
              </span>
              <span
                className="font-sans text-white/20 uppercase"
                style={{ fontSize: 10, letterSpacing: '0.3em' }}
              >
                IMAGE À VENIR
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. NOTRE VISION ──────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16"
        style={{ backgroundColor: '#FFFFFF' }}
        aria-labelledby="vision-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Header */}
          <div className="flex items-start gap-6 mb-16">
            <span
              className="font-sans text-naets-white bg-naets-black inline-flex items-center justify-center shrink-0 mt-1"
              style={{ fontSize: 10, letterSpacing: 0, width: 22, height: 22, fontWeight: 600 }}
              aria-hidden="true"
            >
              02
            </span>
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-2"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                VALEURS FONDATRICES
              </p>
              <h2
                id="vision-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 6vw, 80px)',
                  letterSpacing: '0.02em',
                }}
              >
                NOTRE VISION
              </h2>
            </div>
          </div>

          {/* 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-naets-light-gray">
            {[
              {
                number: '01',
                title: 'PERFORMANCE',
                body: 'Chaque détail technique existe pour une raison. Rien d\'esthétique ne justifie une perte de performance.',
              },
              {
                number: '02',
                title: 'SOBRIÉTÉ',
                body: 'Le noir et le blanc ne sont pas un choix par défaut. C\'est une déclaration.',
              },
              {
                number: '03',
                title: 'MOUVEMENT',
                body: 'Nous fabriquons des chaussures pour ceux qui courent. Pas pour ceux qui s\'en vantent.',
              },
            ].map((item, idx) => (
              <div
                key={item.number}
                className={`p-10 md:p-12 flex flex-col gap-6 border-b md:border-b-0 ${idx < 2 ? 'md:border-r' : ''} border-naets-light-gray`}
              >
                <span
                  className="font-condensed text-naets-light-gray leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 64,
                    letterSpacing: '0.02em',
                  }}
                  aria-hidden="true"
                >
                  {item.number}
                </span>
                <div className="h-px bg-naets-black w-8" aria-hidden="true" />
                <h3
                  className="font-condensed text-naets-black leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. LARGE QUOTE ───────────────────────────────────────────────────── */}
      <section
        className="py-28 px-8 md:px-16 overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-label="Citation NÆTS"
      >
        <div className="max-w-screen-xl mx-auto relative">
          {/* Corner marks */}
          <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20" aria-hidden="true" />
          <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/20" aria-hidden="true" />
          <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/20" aria-hidden="true" />
          <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20" aria-hidden="true" />

          <div className="py-16 px-8 text-center">
            <blockquote
              className="font-condensed text-naets-white leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(52px, 9vw, 140px)',
                letterSpacing: '0.03em',
              }}
            >
              "RUN THE STREETS,
              <br />
              RUN NÆTS"
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── 5. POURQUOI NÆTS ─────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16"
        style={{ backgroundColor: '#F5F5F2' }}
        aria-labelledby="pourquoi-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Header */}
          <div className="flex items-start gap-6 mb-16">
            <span
              className="font-sans text-naets-white bg-naets-black inline-flex items-center justify-center shrink-0 mt-1"
              style={{ fontSize: 10, letterSpacing: 0, width: 22, height: 22, fontWeight: 600 }}
              aria-hidden="true"
            >
              03
            </span>
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-2"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                POSITIONNEMENT
              </p>
              <h2
                id="pourquoi-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 6vw, 80px)',
                  letterSpacing: '0.02em',
                }}
              >
                POURQUOI NÆTS
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Left: text */}
            <div className="flex flex-col justify-center">
              <p
                className="font-sans text-naets-dark-gray leading-relaxed"
                style={{ fontSize: 14, letterSpacing: '0.02em', lineHeight: 1.9 }}
              >
                NÆTS occupe un espace rare dans l'industrie du running : celui d'une marque qui ne sacrifie ni la performance ni l"esthétique. Chaque choix de matière, chaque ligne de produit, chaque campagne est pensé pour un coureur exigeant qui comprend la valeur de la sobriété.
              </p>
            </div>

            {/* Right: numbered list */}
            <div className="flex flex-col gap-0 border border-naets-light-gray">
              {[
                { num: '01', text: 'Marque statutaire mais fonctionnelle' },
                { num: '02', text: 'Mode, performance, identité' },
                { num: '03', text: 'Ingénierie produit visible' },
                { num: '04', text: 'Esthétique industrielle maîtrisée' },
              ].map((item, idx) => (
                <div
                  key={item.num}
                  className={`flex items-center gap-6 px-8 py-6 ${idx < 3 ? 'border-b border-naets-light-gray' : ''}`}
                >
                  <span
                    className="font-condensed text-naets-mid-gray leading-none shrink-0"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 32,
                      letterSpacing: '0.02em',
                    }}
                    aria-hidden="true"
                  >
                    {item.num}
                  </span>
                  <span
                    className="font-sans text-naets-black uppercase"
                    style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 500 }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. BLOG CTA ──────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16 border-t border-naets-light-gray"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="font-sans text-naets-dark-gray uppercase mb-2"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              NÆTS — ÉDITO
            </p>
            <p
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(36px, 4vw, 56px)',
                letterSpacing: '0.02em',
              }}
            >
              NOS ARTICLES ET ACTUALITÉS
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 shrink-0 text-[11px] tracking-[0.15em] uppercase font-sans font-medium bg-naets-black text-naets-white px-10 py-4 transition-colors duration-150 hover:bg-naets-near-black"
          >
            LIRE NOS ARTICLES
            <ArrowRight size={12} />
          </Link>
        </div>
      </section>

    </main>
  );
}
