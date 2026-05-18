import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Matériaux — Inside NÆTS',
  description:
    'Les matériaux NÆTS : ATPU midsole, single mesh rip-stop, renforts TPU, plaque carbone. Chaque matière choisie pour une raison.',
};

const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

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

export default function MateriauxPage() {
  return (
    <main>
      <section className="relative min-h-[68vh] flex flex-col justify-end bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={GRID_BG} aria-hidden="true" />
        <span className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-8 right-8 w-5 h-5 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-white/20" aria-hidden="true" />

        <div className="absolute top-12 left-8 md:left-16">
          <p className="font-naets-micro text-white/30">INSIDE NÆTS — MATÉRIAUX</p>
        </div>

        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-screen-xl mx-auto w-full">
          <p className="font-naets-micro text-white/25 mb-4">05 — L&apos;UNIVERS TECHNIQUE</p>
          <h1
            className="font-condensed text-white leading-none mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(65px, 11vw, 158px)',
              letterSpacing: '0.02em',
            }}
          >
            MATÉRIAUX
          </h1>
          <p
            className="text-[#707070] text-[13px] mb-8 max-w-md leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.02em' }}
          >
            Chaque matière a une fonction. Rien n&apos;est esthétique sans être technique.
          </p>
          <Link
            href="/inside-naets"
            className="inline-flex items-center gap-2 font-naets-micro text-white/35 hover:text-white/75 transition-colors"
          >
            ← INSIDE NÆTS
          </Link>
        </div>
      </section>

      {/* Materials list */}
      <section className="bg-white py-20 px-8 md:px-16 border-b border-[#E5E5E0]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-number" aria-hidden="true">01</span>
            <p className="font-naets-label text-black text-[11px]">CATALOGUE MATÉRIAUX</p>
          </div>
          <div className="border border-[#E5E5E0]">
            {materials.map((mat, idx) => (
              <div
                key={mat.code}
                className={`flex items-start gap-8 px-8 py-6 ${idx < materials.length - 1 ? 'border-b border-[#E5E5E0]' : ''}`}
              >
                <span
                  className="font-condensed text-[#E5E5E0] leading-none shrink-0 w-8"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28 }}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <p
                    className="font-naets-label text-black text-[11px] mb-1.5"
                  >
                    {mat.code}
                  </p>
                  <p
                    className="text-[#707070] text-[13px] leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {mat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
