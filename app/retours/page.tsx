import type { Metadata } from 'next';
import Link from 'next/link';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Faire un retour',
  description:
    'Retournez facilement votre commande NÆTS. Politique de retour 30 jours, retour gratuit depuis la France métropolitaine.',
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const RETURN_STEPS = [
  {
    number: '01',
    title: 'INITIER LE RETOUR',
    description:
      'Rendez-vous sur votre espace client ou contactez notre équipe en indiquant votre numéro de commande.',
  },
  {
    number: '02',
    title: 'PRÉPARER LE COLIS',
    description:
      "Emballez l'article dans son emballage d'origine avec toutes les étiquettes. Joignez le bon de retour.",
  },
  {
    number: '03',
    title: 'EXPÉDIER LE COLIS',
    description:
      'Déposez votre colis dans le point relais indiqué sur votre bon de retour. Le retour est gratuit.',
  },
  {
    number: '04',
    title: 'REMBOURSEMENT',
    description:
      'Dès réception et validation du retour, votre remboursement est traité sous 5 à 7 jours ouvrés.',
  },
];

const RETURN_CONDITIONS = [
  "Article dans son état d'origine, non porté et non lavé",
  "Emballage d'origine intact avec toutes les étiquettes attachées",
  'Retour effectué dans un délai de 30 jours après réception',
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RetoursPage() {
  return (
    <main>

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-20 pb-20 px-8 md:px-16 overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="retours-title"
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

        <div className="relative z-10 max-w-screen-xl mx-auto">
          <p
            className="font-sans text-naets-dark-gray uppercase mb-6"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            ASSISTANCE
          </p>
          <h1
            id="retours-title"
            className="font-condensed text-white leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(64px, 10vw, 120px)',
              letterSpacing: '0.02em',
            }}
          >
            FAIRE UN RETOUR
          </h1>
        </div>
      </section>

      {/* ── POLITIQUE DE RETOUR ────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16 bg-white"
        aria-labelledby="politique-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-naets-light-gray">

            {/* Left */}
            <div className="p-10 md:p-14 flex flex-col gap-8 border-b md:border-b-0 md:border-r border-naets-light-gray">
              <div>
                <p
                  className="font-sans text-naets-dark-gray uppercase mb-4"
                  style={{ fontSize: 11, letterSpacing: '0.2em' }}
                >
                  NÆTS — POLITIQUE
                </p>
                <h2
                  id="politique-title"
                  className="font-condensed text-naets-black leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(36px, 4vw, 56px)',
                    letterSpacing: '0.02em',
                  }}
                >
                  POLITIQUE DE RETOUR
                </h2>
              </div>

              <div className="h-px bg-naets-light-gray" aria-hidden="true" />

              <p
                className="font-sans text-naets-dark-gray leading-relaxed"
                style={{ fontSize: 14, letterSpacing: '0.02em', lineHeight: 1.85 }}
              >
                Vous disposez de 30 jours à compter de la réception de votre commande pour retourner
                un article, à condition que celui-ci soit dans son état d'origine, non porté et dans
                son emballage d'origine.
              </p>
            </div>

            {/* Right: conditions */}
            <div className="p-10 md:p-14 flex flex-col justify-center gap-6">
              <p
                className="font-sans text-naets-black uppercase"
                style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 600 }}
              >
                CONDITIONS REQUISES
              </p>
              <ul className="flex flex-col gap-4">
                {RETURN_CONDITIONS.map((condition, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span
                      className="font-sans text-naets-dark-gray shrink-0 mt-px"
                      style={{ fontSize: 13 }}
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span
                      className="font-sans text-naets-dark-gray leading-relaxed"
                      style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.75 }}
                    >
                      {condition}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="h-px bg-naets-light-gray" aria-hidden="true" />

              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center bg-naets-black text-white font-sans font-semibold shrink-0"
                  style={{ fontSize: 10, width: 22, height: 22, letterSpacing: 0 }}
                  aria-hidden="true"
                >
                  30
                </span>
                <p
                  className="font-sans text-naets-black uppercase"
                  style={{ fontSize: 11, letterSpacing: '0.15em', fontWeight: 500 }}
                >
                  JOURS POUR RETOURNER UN ARTICLE
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ÉTAPES DU RETOUR ───────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16"
        style={{ backgroundColor: '#F5F5F2' }}
        aria-labelledby="etapes-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="mb-12">
            <p
              className="font-sans text-naets-dark-gray uppercase mb-4"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              NÆTS — PROCESSUS
            </p>
            <h2
              id="etapes-title"
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(36px, 5vw, 68px)',
                letterSpacing: '0.02em',
              }}
            >
              ÉTAPES DU RETOUR
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-naets-light-gray">
            {RETURN_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className={`
                  p-8 md:p-10 flex flex-col gap-6
                  border-b border-naets-light-gray
                  ${idx < RETURN_STEPS.length - 1 ? 'lg:border-r lg:border-b-0' : 'lg:border-b-0'}
                  ${idx % 2 === 0 ? 'sm:border-r sm:last:border-r-0 lg:border-r' : ''}
                `}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <span
                  className="font-condensed text-naets-light-gray leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 64,
                    letterSpacing: '0.02em',
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div className="h-px bg-naets-black w-8" aria-hidden="true" />
                <h3
                  className="font-condensed text-naets-black leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(20px, 2vw, 28px)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section
        className="py-16 px-8 md:px-16 border-t border-naets-light-gray"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="font-sans text-naets-dark-gray uppercase mb-2"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              ASSISTANCE — RETOUR
            </p>
            <p
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                letterSpacing: '0.02em',
              }}
            >
              PRÊT À INITIER UN RETOUR ?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              type="button"
              className="inline-flex items-center gap-3 font-sans font-medium bg-naets-black text-white px-10 py-4 transition-colors duration-150 hover:bg-naets-near-black"
              style={{ fontSize: 11, letterSpacing: '0.15em' }}
            >
              INITIER UN RETOUR
            </button>
            <a
              href="mailto:contact@naets.fr"
              className="font-sans text-naets-dark-gray uppercase underline underline-offset-4 hover:text-naets-black transition-colors duration-150"
              style={{ fontSize: 11, letterSpacing: '0.15em' }}
            >
              contact@naets.fr
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
