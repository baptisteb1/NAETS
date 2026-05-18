import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Revendeurs — Retail Partenaire NÆTS',
  description:
    'Trouvez un revendeur NÆTS agréé près de chez vous. Points de vente partenaires en France et à l\'international.',
};

const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

export default function RevendeurPage() {
  return (
    <main>
      <section className="relative min-h-[68vh] flex flex-col justify-end bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={GRID_BG} aria-hidden="true" />
        <span className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-8 right-8 w-5 h-5 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-white/20" aria-hidden="true" />

        <div className="absolute top-12 left-8 md:left-16">
          <p className="font-naets-micro text-white/30">RETAIL PARTENAIRE — REVENDEURS</p>
        </div>

        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-screen-xl mx-auto w-full">
          <p className="font-naets-micro text-white/25 mb-4">01 — DISTRIBUTION</p>
          <h1
            className="font-condensed text-white leading-none mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(65px, 11vw, 158px)',
              letterSpacing: '0.02em',
            }}
          >
            REVENDEURS
          </h1>
          <p
            className="text-[#707070] text-[13px] mb-8 max-w-md leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.02em' }}
          >
            Les points de vente NÆTS agréés. Physique et sélectif, comme notre produit.
          </p>
          <Link
            href="/retail-partenaire"
            className="inline-flex items-center gap-2 font-naets-micro text-white/35 hover:text-white/75 transition-colors"
          >
            ← RETAIL PARTENAIRE
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 px-8 md:px-16 border-b border-[#E5E5E0]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-start gap-5">
            <span className="section-number shrink-0 mt-0.5" aria-hidden="true">CS</span>
            <div>
              <p className="font-naets-label text-[#707070] text-[11px] mb-2">
                RÉSEAU EN CONSTRUCTION
              </p>
              <p
                className="text-[13px] text-[#707070] max-w-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Notre réseau de revendeurs sera dévoilé lors du lancement. En attendant,
                retrouvez tous les points de vente sur{' '}
                <Link href="/revendeurs" className="text-black hover:underline">
                  Nos revendeurs
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
