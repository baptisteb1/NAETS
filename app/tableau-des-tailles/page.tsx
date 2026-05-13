import type { Metadata } from 'next';
import { Ruler } from 'lucide-react';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Tableau des tailles',
  description:
    'Trouvez votre taille NÆTS. Tableau des tailles chaussures (EU, UK, US, CM) et vêtements (XS à XXL). Tous les produits sont unisexes.',
  openGraph: {
    title: 'Tableau des tailles | NÆTS',
    description: 'Guide des tailles chaussures et vêtements NÆTS — sizing EU standard, gamme unisexe.',
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const SHOE_SIZES = [
  { eu: '38', uk: '5', us: '6', cm: '24' },
  { eu: '39', uk: '6', us: '7', cm: '24.5' },
  { eu: '40', uk: '6.5', us: '7.5', cm: '25.5' },
  { eu: '41', uk: '7', us: '8', cm: '26' },
  { eu: '42', uk: '8', us: '9', cm: '26.5' },
  { eu: '43', uk: '8.5', us: '9.5', cm: '27.5' },
  { eu: '44', uk: '9', us: '10', cm: '28' },
  { eu: '45', uk: '10', us: '11', cm: '29' },
  { eu: '46', uk: '11', us: '12', cm: '29.5' },
];

const CLOTHING_SIZES = [
  { size: 'XS', chest: '80-84 cm', waist: '62-66 cm', hip: '86-90 cm' },
  { size: 'S', chest: '84-88 cm', waist: '66-70 cm', hip: '90-94 cm' },
  { size: 'M', chest: '88-92 cm', waist: '70-74 cm', hip: '94-98 cm' },
  { size: 'L', chest: '92-96 cm', waist: '74-78 cm', hip: '98-102 cm' },
  { size: 'XL', chest: '96-100 cm', waist: '78-82 cm', hip: '102-106 cm' },
  { size: 'XXL', chest: '100-105 cm', waist: '82-87 cm', hip: '106-111 cm' },
];

const MEASUREMENT_TIPS = [
  {
    tip: "Mesurez votre pied sur une feuille de papier, debout, en fin de journée. Tracez le contour et mesurez la longueur du talon à l'orteil le plus long.",
  },
  {
    tip: 'Préférez la mesure en fin de journée, car les pieds ont tendance à gonfler légèrement au fil des heures.',
  },
  {
    tip: 'En cas de doute entre deux tailles, prenez la taille supérieure. Les produits NÆTS sont conçus avec un légèr espace au bout pour le confort en mouvement.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TableauDesTaillesPage() {
  return (
    <main>

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-20 pb-20 px-8 md:px-16 overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="tailles-title"
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
            ASSISTANCE — SIZING
          </p>
          <h1
            id="tailles-title"
            className="font-condensed text-white leading-none mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(52px, 9vw, 110px)',
              letterSpacing: '0.02em',
            }}
          >
            TABLEAU
            <br />
            DES TAILLES
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <p
              className="font-sans text-naets-mid-gray"
              style={{ fontSize: 14, letterSpacing: '0.03em' }}
            >
              Tous les produits NÆTS sont unisexes. Le sizing est standard EU.
            </p>
            <div className="h-px sm:h-auto sm:w-px bg-white/10 sm:self-stretch" aria-hidden="true" />
            <span
              className="font-sans text-naets-dark-gray uppercase shrink-0"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              GAMME UNISEXE
            </span>
          </div>
        </div>
      </section>

      {/* ── CHAUSSURES ─────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16 bg-white"
        aria-labelledby="chaussures-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="mb-10">
            <p
              className="font-sans text-naets-dark-gray uppercase mb-3"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              01 — SIZING
            </p>
            <h2
              id="chaussures-title"
              className="font-condensed text-naets-near-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(36px, 5vw, 64px)',
                letterSpacing: '0.02em',
              }}
            >
              CHAUSSURES
            </h2>
          </div>

          <div className="border border-naets-light-gray overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontSize: 13 }}>
              <thead>
                <tr className="bg-naets-near-black text-white">
                  {['EU', 'UK', 'US', 'CM'].map((col) => (
                    <th
                      key={col}
                      className="font-sans text-center py-4 px-6 border-r border-white/10 last:border-r-0"
                      style={{ letterSpacing: '0.15em', fontWeight: 500, fontSize: 11 }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SHOE_SIZES.map((row, idx) => (
                  <tr
                    key={row.eu}
                    className={`border-t border-naets-light-gray ${idx % 2 === 0 ? 'bg-white' : 'bg-naets-off-white'}`}
                  >
                    <td
                      className="font-sans text-naets-near-black text-center py-4 px-6 border-r border-naets-light-gray"
                      style={{ letterSpacing: '0.05em', fontWeight: 600, fontSize: 13 }}
                    >
                      {row.eu}
                    </td>
                    <td
                      className="font-sans text-naets-dark-gray text-center py-4 px-6 border-r border-naets-light-gray"
                      style={{ letterSpacing: '0.03em', fontSize: 13 }}
                    >
                      {row.uk}
                    </td>
                    <td
                      className="font-sans text-naets-dark-gray text-center py-4 px-6 border-r border-naets-light-gray"
                      style={{ letterSpacing: '0.03em', fontSize: 13 }}
                    >
                      {row.us}
                    </td>
                    <td
                      className="font-sans text-naets-dark-gray text-center py-4 px-6"
                      style={{ letterSpacing: '0.03em', fontSize: 13 }}
                    >
                      {row.cm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="font-sans text-naets-dark-gray mt-4"
            style={{ fontSize: 11, letterSpacing: '0.1em' }}
          >
            * Toutes les mesures sont en centimètres. Taille EU standard.
          </p>
        </div>
      </section>

      {/* ── VÊTEMENTS ──────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16"
        style={{ backgroundColor: '#F5F5F2' }}
        aria-labelledby="vetements-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="mb-10">
            <p
              className="font-sans text-naets-dark-gray uppercase mb-3"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              02 — SIZING
            </p>
            <h2
              id="vetements-title"
              className="font-condensed text-naets-near-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(36px, 5vw, 64px)',
                letterSpacing: '0.02em',
              }}
            >
              VÊTEMENTS
            </h2>
          </div>

          <div className="border border-naets-light-gray overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontSize: 13 }}>
              <thead>
                <tr className="bg-naets-near-black text-white">
                  {['TAILLE', 'TOUR DE POITRINE', 'TOUR DE TAILLE', 'HANCHE'].map((col) => (
                    <th
                      key={col}
                      className="font-sans text-center py-4 px-6 border-r border-white/10 last:border-r-0"
                      style={{ letterSpacing: '0.12em', fontWeight: 500, fontSize: 11 }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CLOTHING_SIZES.map((row, idx) => (
                  <tr
                    key={row.size}
                    className={`border-t border-naets-light-gray ${idx % 2 === 0 ? 'bg-white' : 'bg-naets-off-white'}`}
                  >
                    <td
                      className="font-sans text-naets-near-black text-center py-4 px-6 border-r border-naets-light-gray"
                      style={{ letterSpacing: '0.1em', fontWeight: 600, fontSize: 13 }}
                    >
                      {row.size}
                    </td>
                    <td
                      className="font-sans text-naets-dark-gray text-center py-4 px-6 border-r border-naets-light-gray"
                      style={{ letterSpacing: '0.03em', fontSize: 13 }}
                    >
                      {row.chest}
                    </td>
                    <td
                      className="font-sans text-naets-dark-gray text-center py-4 px-6 border-r border-naets-light-gray"
                      style={{ letterSpacing: '0.03em', fontSize: 13 }}
                    >
                      {row.waist}
                    </td>
                    <td
                      className="font-sans text-naets-dark-gray text-center py-4 px-6"
                      style={{ letterSpacing: '0.03em', fontSize: 13 }}
                    >
                      {row.hip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="font-sans text-naets-dark-gray mt-4"
            style={{ fontSize: 11, letterSpacing: '0.1em' }}
          >
            * Mesures en centimètres. En cas de morphologie entre deux tailles, privilégiez la taille supérieure.
          </p>
        </div>
      </section>

      {/* ── CONSEILS DE MESURE ─────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16 bg-white border-t border-naets-light-gray"
        aria-labelledby="conseils-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="mb-12">
            <p
              className="font-sans text-naets-dark-gray uppercase mb-3"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              03 — GUIDE
            </p>
            <h2
              id="conseils-title"
              className="font-condensed text-naets-near-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(36px, 5vw, 64px)',
                letterSpacing: '0.02em',
              }}
            >
              CONSEILS DE MESURE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-naets-light-gray">
            {MEASUREMENT_TIPS.map(({ tip }, idx) => (
              <div
                key={idx}
                className={`p-8 md:p-10 flex flex-col gap-6 border-b md:border-b-0 ${idx < 2 ? 'md:border-r' : ''} border-naets-light-gray`}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 border border-naets-light-gray">
                  <Ruler size={16} strokeWidth={1.5} className="text-naets-dark-gray" />
                </div>

                {/* Number */}
                <span
                  className="font-condensed text-naets-light-gray leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 48,
                    letterSpacing: '0.02em',
                  }}
                  aria-hidden="true"
                >
                  0{idx + 1}
                </span>

                <div className="h-px bg-naets-black w-8" aria-hidden="true" />

                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                >
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section
        className="py-16 px-8 md:px-16 border-t border-naets-light-gray"
        style={{ backgroundColor: '#F5F5F2' }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="font-sans text-naets-dark-gray uppercase mb-2"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              NÆTS — ASSISTANCE
            </p>
            <p
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '0.02em',
              }}
            >
              UN DOUTE SUR VOTRE TAILLE ?
            </p>
            <p
              className="font-sans text-naets-dark-gray mt-2"
              style={{ fontSize: 13, letterSpacing: '0.02em' }}
            >
              Notre équipe d&apos;experts running répond à toutes vos questions.
            </p>
          </div>
          <a
            href="mailto:contact@naets.fr"
            className="inline-flex items-center gap-3 shrink-0 font-sans font-medium bg-naets-black text-white px-10 py-4 transition-colors duration-150 hover:bg-naets-near-black"
            style={{ fontSize: 11, letterSpacing: '0.15em' }}
          >
            CONTACTER UN EXPERT RUNNING
          </a>
        </div>
      </section>

    </main>
  );
}
