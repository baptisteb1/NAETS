import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vidéos Usine — Inside NÆTS',
  description:
    'Découvrez les coulisses de la fabrication NÆTS. Processus de production, contrôle qualité, savoir-faire technique.',
};

const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

export default function VideosUsinePage() {
  return (
    <main>
      <section className="relative min-h-[68vh] flex flex-col justify-end bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={GRID_BG} aria-hidden="true" />
        <span className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-8 right-8 w-5 h-5 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-white/20" aria-hidden="true" />

        <div className="absolute top-12 left-8 md:left-16">
          <p className="font-naets-micro text-white/30">INSIDE NÆTS — VIDÉOS USINE</p>
        </div>

        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-screen-xl mx-auto w-full">
          <p className="font-naets-micro text-white/25 mb-4">04 — L&apos;UNIVERS TECHNIQUE</p>
          <h1
            className="font-condensed text-white leading-none mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(60px, 10vw, 145px)',
              letterSpacing: '0.02em',
            }}
          >
            VIDÉOS
            <br />
            USINE
          </h1>
          <p
            className="text-[#707070] text-[13px] mb-8 max-w-md leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.02em' }}
          >
            Les coulisses de la fabrication NÆTS. Précision, contrôle, exigence.
          </p>
          <Link
            href="/inside-naets"
            className="inline-flex items-center gap-2 font-naets-micro text-white/35 hover:text-white/75 transition-colors"
          >
            ← INSIDE NÆTS
          </Link>
        </div>
      </section>

      {/* Placeholder video grid */}
      <section className="bg-white py-20 px-8 md:px-16 border-b border-[#E5E5E0]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-start gap-5 mb-12">
            <span className="section-number shrink-0 mt-0.5" aria-hidden="true">CS</span>
            <div>
              <p className="font-naets-label text-[#707070] text-[11px] mb-2">
                VIDÉOS BIENTÔT DISPONIBLES
              </p>
              <p
                className="text-[13px] text-[#707070] max-w-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Les vidéos de fabrication et de conception seront ajoutées prochainement.
              </p>
            </div>
          </div>
          {/* Placeholder video slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E0]">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-video bg-[#0A0A0A] relative flex items-center justify-center"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <polygon points="5,3 12,7 5,11" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
