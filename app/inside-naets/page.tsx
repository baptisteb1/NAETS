import type { Metadata } from 'next';
import { Play } from 'lucide-react';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Inside NÆTS',
  description:
    'Découvrez l\'univers technique de NÆTS : matériaux, conception, tests terrain et performance mesurée. ATPU, carbone, mesh rip-stop.',
  openGraph: {
    title: 'Inside NÆTS — L\'univers technique de la marque',
    description:
      'Matériaux high-performance, processus de conception rigoureux, 500+ km de tests. L\'ingénierie NÆTS au détail.',
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────

const materials = [
  {
    code: 'ATPU MIDSOLE',
    description: 'Mousse haute performance, retour d\'énergie optimal, durabilité accrue',
  },
  {
    code: 'SINGLE MESH RIP-STOP',
    description: 'Tige ultra-légère, résistance à l\'abrasion, ventilation optimale',
  },
  {
    code: 'TPU RENFORTS',
    description: 'Points de renfort stratégiques, maintien de la tige, longévité',
  },
  {
    code: 'CARBON PLATE',
    description: 'Propulsion maximale, transfert d\'énergie direct, rigidité ciblée',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'ANALYSE BIOMÉCANIQUE',
    description: 'Étude des mouvements et contraintes articulaires en conditions réelles de course.',
  },
  {
    number: '02',
    title: 'DESIGN STRUCTUREL',
    description: 'Architecture 3D développée par nos ingénieurs. Chaque forme a une fonction.',
  },
  {
    number: '03',
    title: 'TESTS MATÉRIAUX',
    description: 'Validation en laboratoire : résistance, poids, retour d\'énergie, durabilité.',
  },
  {
    number: '04',
    title: 'VALIDATION TERRAIN',
    description: 'Panel de 8 coureurs experts. 500+ km sur routes, pistes et surfaces mixtes.',
  },
];

const explodedParts = [
  { number: '01', name: 'TIGE', description: 'Single mesh rip-stop respirant, coutures réduites au minimum.' },
  { number: '02', name: 'SEMELLE EXTERNE', description: 'Gomme haute densité, grip multi-surfaces, résistance à l\'abrasion.' },
  { number: '03', name: 'MOUSSE ATPU', description: 'Amorti réactif, retour énergie 85%+, stabilité latérale.' },
  { number: '04', name: 'PLAQUE CARBONE', description: 'Rigidité 12N/mm, propulsion passive, gain biomécanique.' },
  { number: '05', name: 'DROP-IN SOCQUETTE', description: 'Confort de tige, amortissement supplémentaire, lavable.' },
];

const metrics = [
  { label: 'DROP', value: '8MM' },
  { label: 'STACK', value: '36MM' },
  { label: 'POIDS', value: '265G' },
  { label: 'CARBONE', value: 'OUI' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PlaceholderImage({ dark = true }: { dark?: boolean }) {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: dark ? '#0A0A0A' : '#E5E5E0', minHeight: 400 }}
      aria-hidden="true"
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: dark
            ? 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)'
            : 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      {/* Corner marks */}
      <span className={`absolute top-4 left-4 w-4 h-4 border-t border-l ${dark ? 'border-white/20' : 'border-black/20'}`} />
      <span className={`absolute top-4 right-4 w-4 h-4 border-t border-r ${dark ? 'border-white/20' : 'border-black/20'}`} />
      <span className={`absolute bottom-4 left-4 w-4 h-4 border-b border-l ${dark ? 'border-white/20' : 'border-black/20'}`} />
      <span className={`absolute bottom-4 right-4 w-4 h-4 border-b border-r ${dark ? 'border-white/20' : 'border-black/20'}`} />
      {/* Watermark */}
      <div className="relative flex flex-col items-center gap-2 select-none pointer-events-none">
        <span
          className="font-condensed leading-none"
          style={{
            fontSize: 'clamp(64px, 8vw, 100px)',
            fontFamily: "'Bebas Neue', sans-serif",
            color: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
          }}
        >
          NÆTS
        </span>
        <span
          className="font-sans uppercase"
          style={{
            fontSize: 10,
            letterSpacing: '0.3em',
            color: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
          }}
        >
          IMAGE À VENIR
        </span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InsideNaetsPage() {
  return (
    <main>

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="inside-hero-title"
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

        {/* Section label */}
        <div className="absolute top-12 left-8 md:left-16">
          <p
            className="font-sans text-naets-dark-gray uppercase"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            NÆTS — ARCHITECTURE TECHNIQUE
          </p>
        </div>

        {/* Decorative run counter */}
        <div className="absolute top-12 right-8 md:right-16 flex flex-col items-end gap-1">
          <span
            className="font-sans text-naets-dark-gray uppercase"
            style={{ fontSize: 10, letterSpacing: '0.2em' }}
          >
            R&amp;D — 12 MOIS
          </span>
          <div className="flex gap-1">
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="block h-px bg-naets-dark-gray"
                style={{ width: i < 8 ? 12 : 6 }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-screen-xl mx-auto w-full">
          <h1
            id="inside-hero-title"
            className="font-condensed text-naets-white leading-none mb-8"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(72px, 13vw, 200px)',
              letterSpacing: '0.02em',
            }}
          >
            INSIDE
            <br />
            NÆTS
          </h1>
          <p
            className="font-sans text-naets-mid-gray leading-relaxed max-w-md"
            style={{ fontSize: 14, letterSpacing: '0.05em' }}
          >
            L'UNIVERS TECHNIQUE DE LA MARQUE
          </p>
          {/* Horizontal rule */}
          <div className="h-px bg-white/10 mt-8 max-w-md" aria-hidden="true" />
        </div>
      </section>

      {/* ── 2. MATÉRIAUX ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16 bg-naets-white"
        aria-labelledby="materiaux-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="flex items-start gap-6 mb-16">
            <span
              className="font-sans text-naets-white bg-naets-black inline-flex items-center justify-center shrink-0 mt-1"
              style={{ fontSize: 10, width: 22, height: 22, fontWeight: 600 }}
              aria-hidden="true"
            >
              01
            </span>
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-2"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                COMPOSANTS
              </p>
              <h2
                id="materiaux-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 6vw, 80px)',
                  letterSpacing: '0.02em',
                }}
              >
                MATÉRIAUX
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-naets-light-gray">

            {/* Left: material list */}
            <div className="border-b md:border-b-0 md:border-r border-naets-light-gray">
              {materials.map((mat, idx) => (
                <div
                  key={mat.code}
                  className={`px-10 py-8 flex flex-col gap-3 ${idx < materials.length - 1 ? 'border-b border-naets-light-gray' : ''}`}
                >
                  {/* Code line */}
                  <div className="flex items-center gap-4">
                    <span
                      className="font-sans text-naets-mid-gray"
                      style={{ fontSize: 10, letterSpacing: '0.1em' }}
                      aria-hidden="true"
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px bg-naets-light-gray flex-1" aria-hidden="true" />
                  </div>
                  <h3
                    className="font-condensed text-naets-black leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(22px, 2.5vw, 32px)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {mat.code}
                  </h3>
                  <p
                    className="font-sans text-naets-dark-gray leading-relaxed"
                    style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.7 }}
                  >
                    {mat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: dark placeholder image */}
            <PlaceholderImage dark />

          </div>
        </div>
      </section>

      {/* ── 3. CONCEPTION ────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16"
        style={{ backgroundColor: '#F5F5F2' }}
        aria-labelledby="conception-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="flex items-start gap-6 mb-16">
            <span
              className="font-sans text-naets-white bg-naets-black inline-flex items-center justify-center shrink-0 mt-1"
              style={{ fontSize: 10, width: 22, height: 22, fontWeight: 600 }}
              aria-hidden="true"
            >
              02
            </span>
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-2"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                PROCESSUS
              </p>
              <h2
                id="conception-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 6vw, 80px)',
                  letterSpacing: '0.02em',
                }}
              >
                CONCEPTION
              </h2>
            </div>
          </div>

          {/* 4-step process — horizontal grid with vertical dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-naets-light-gray">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative p-10 flex flex-col gap-6 border-b sm:border-b-0 ${idx < processSteps.length - 1 ? 'sm:border-r' : ''} border-naets-light-gray`}
              >
                {/* Large background number */}
                <span
                  className="font-condensed text-naets-light-gray leading-none absolute top-6 right-6 select-none pointer-events-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 80,
                    letterSpacing: '0.02em',
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Arrow pointing right (except last) */}
                {idx < processSteps.length - 1 && (
                  <span
                    className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-naets-mid-gray select-none"
                    style={{ fontSize: 16 }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}

                <div className="relative z-10 flex flex-col gap-4 mt-8">
                  <h3
                    className="font-condensed text-naets-black leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(20px, 2vw, 26px)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step.title}
                  </h3>
                  <div className="h-px bg-naets-black w-6" aria-hidden="true" />
                  <p
                    className="font-sans text-naets-dark-gray leading-relaxed"
                    style={{ fontSize: 12, letterSpacing: '0.02em', lineHeight: 1.8 }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. TESTS TERRAIN ─────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16 bg-naets-white"
        aria-labelledby="tests-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="flex items-start gap-6 mb-16">
            <span
              className="font-sans text-naets-white bg-naets-black inline-flex items-center justify-center shrink-0 mt-1"
              style={{ fontSize: 10, width: 22, height: 22, fontWeight: 600 }}
              aria-hidden="true"
            >
              03
            </span>
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-2"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                VALIDATION
              </p>
              <h2
                id="tests-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 6vw, 80px)',
                  letterSpacing: '0.02em',
                }}
              >
                TESTS TERRAIN
              </h2>
            </div>
          </div>

          {/* 3 large stat blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-naets-black">
            {[
              { value: '500+', unit: 'KM', label: 'DE TESTS PAR MODÈLE', sublabel: 'Routes, pistes et surfaces mixtes' },
              { value: '12', unit: 'MOIS', label: 'DE R&D', sublabel: 'Développement continu avant lancement' },
              { value: '8', unit: 'COUREURS', label: 'EXPERTS', sublabel: 'Panel test sélectionné par profil' },
            ].map((stat, idx) => (
              <div
                key={stat.value}
                className={`bg-naets-black p-12 md:p-16 flex flex-col gap-4 border-b md:border-b-0 ${idx < 2 ? 'md:border-r border-naets-dark-gray' : ''}`}
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-condensed text-naets-white leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(56px, 8vw, 96px)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-condensed text-naets-mid-gray leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(24px, 3vw, 40px)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stat.unit}
                  </span>
                </div>
                <div className="h-px bg-naets-dark-gray w-12" aria-hidden="true" />
                <p
                  className="font-sans text-naets-white uppercase"
                  style={{ fontSize: 11, letterSpacing: '0.15em', fontWeight: 600 }}
                >
                  {stat.label}
                </p>
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 12, letterSpacing: '0.02em' }}
                >
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. VIDÉO USINE ───────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="video-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="flex items-start gap-6 mb-16">
            <span
              className="font-sans text-naets-black bg-naets-white inline-flex items-center justify-center shrink-0 mt-1"
              style={{ fontSize: 10, width: 22, height: 22, fontWeight: 600 }}
              aria-hidden="true"
            >
              04
            </span>
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-2"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                FABRICATION
              </p>
              <h2
                id="video-title"
                className="font-condensed text-naets-white leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 6vw, 80px)',
                  letterSpacing: '0.02em',
                }}
              >
                VIDÉO USINE
              </h2>
            </div>
          </div>

          {/* Video placeholder */}
          <div className="relative overflow-hidden border border-white/10" style={{ aspectRatio: '16/9' }}>
            {/* Dark background */}
            <div className="absolute inset-0" style={{ backgroundColor: '#0A0A0A' }} />

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
            <span className="absolute top-6 left-6 w-6 h-6 border-t border-l border-white/20" aria-hidden="true" />
            <span className="absolute top-6 right-6 w-6 h-6 border-t border-r border-white/20" aria-hidden="true" />
            <span className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-white/20" aria-hidden="true" />
            <span className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-white/20" aria-hidden="true" />

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div
                className="flex items-center justify-center border border-white/30 transition-colors duration-150 hover:bg-white hover:text-naets-black"
                style={{ width: 72, height: 72, cursor: 'default' }}
                aria-hidden="true"
              >
                <Play size={24} className="text-white ml-1" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <p
                  className="font-condensed text-naets-white leading-none text-center"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(28px, 4vw, 52px)',
                    letterSpacing: '0.05em',
                  }}
                >
                  DE L'ATELIER À LA ROUTE
                </p>
                <p
                  className="font-sans text-naets-dark-gray uppercase text-center"
                  style={{ fontSize: 11, letterSpacing: '0.2em' }}
                >
                  VIDÉO DE FABRICATION — NÆTS FACTORY
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. VUE ÉCLATÉE ───────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16 bg-naets-white"
        aria-labelledby="eclate-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="flex items-start gap-6 mb-16">
            <span
              className="font-sans text-naets-white bg-naets-black inline-flex items-center justify-center shrink-0 mt-1"
              style={{ fontSize: 10, width: 22, height: 22, fontWeight: 600 }}
              aria-hidden="true"
            >
              05
            </span>
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-2"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                ANATOMIE
              </p>
              <h2
                id="eclate-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 6vw, 80px)',
                  letterSpacing: '0.02em',
                }}
              >
                VUE ÉCLATÉE
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-naets-light-gray">

            {/* Left: exploded view placeholder */}
            <div
              className="relative min-h-[480px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-naets-light-gray overflow-hidden"
              style={{ backgroundColor: '#F5F5F2' }}
              aria-hidden="true"
            >
              {/* Dot grid */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: 'radial-gradient(circle, #BDBDB7 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              {/* Cross lines */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-px bg-naets-light-gray h-full absolute left-1/2" />
                <div className="h-px bg-naets-light-gray w-full absolute top-1/2" />
              </div>
              {/* Corner marks */}
              <span className="absolute top-4 left-4 w-4 h-4 border-t border-l border-naets-mid-gray" />
              <span className="absolute top-4 right-4 w-4 h-4 border-t border-r border-naets-mid-gray" />
              <span className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-naets-mid-gray" />
              <span className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-naets-mid-gray" />
              <p
                className="relative font-sans text-naets-mid-gray uppercase text-center"
                style={{ fontSize: 11, letterSpacing: '0.25em' }}
              >
                VUE ÉCLATÉE
                <br />
                IMAGE À VENIR
              </p>
            </div>

            {/* Right: labeled parts list */}
            <div className="flex flex-col">
              {explodedParts.map((part, idx) => (
                <div
                  key={part.number}
                  className={`px-10 py-7 flex items-start gap-6 ${idx < explodedParts.length - 1 ? 'border-b border-naets-light-gray' : ''}`}
                >
                  {/* Number + arrow */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="font-condensed text-naets-mid-gray leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: '0.02em' }}
                      aria-hidden="true"
                    >
                      {part.number}
                    </span>
                    <span
                      className="text-naets-mid-gray"
                      style={{ fontSize: 14 }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="font-condensed text-naets-black leading-none"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 20,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {part.name}
                    </h3>
                    <p
                      className="font-sans text-naets-dark-gray leading-relaxed"
                      style={{ fontSize: 12, letterSpacing: '0.02em', lineHeight: 1.7 }}
                    >
                      {part.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. PERFORMANCE MESURÉE ───────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16"
        style={{ backgroundColor: '#F5F5F2' }}
        aria-labelledby="perf-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="flex items-start gap-6 mb-16">
            <span
              className="font-sans text-naets-white bg-naets-black inline-flex items-center justify-center shrink-0 mt-1"
              style={{ fontSize: 10, width: 22, height: 22, fontWeight: 600 }}
              aria-hidden="true"
            >
              06
            </span>
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-2"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                SPÉCIFICATIONS
              </p>
              <h2
                id="perf-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 6vw, 80px)',
                  letterSpacing: '0.02em',
                }}
              >
                PERFORMANCE MESURÉE
              </h2>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-naets-black">
            {metrics.map((metric, idx) => (
              <div
                key={metric.label}
                className={`p-10 md:p-14 flex flex-col gap-4 border-b lg:border-b-0 ${idx < metrics.length - 1 ? 'border-r border-naets-black' : ''}`}
              >
                <p
                  className="font-sans text-naets-dark-gray uppercase"
                  style={{ fontSize: 10, letterSpacing: '0.2em' }}
                >
                  {metric.label}
                </p>
                <div className="h-px bg-naets-black" aria-hidden="true" />
                <p
                  className="font-condensed text-naets-black leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(36px, 5vw, 64px)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
