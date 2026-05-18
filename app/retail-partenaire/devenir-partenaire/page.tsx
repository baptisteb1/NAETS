import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devenir Partenaire — Retail NÆTS',
  description:
    'Rejoignez le réseau de distribution NÆTS. Critères de sélection, formulaire de candidature et informations partenaires.',
};

const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

export default function DevenirPartenairePage() {
  return (
    <main>
      <section className="relative min-h-[68vh] flex flex-col justify-end bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={GRID_BG} aria-hidden="true" />
        <span className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-8 right-8 w-5 h-5 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-white/20" aria-hidden="true" />

        <div className="absolute top-12 left-8 md:left-16">
          <p className="font-naets-micro text-white/30">RETAIL PARTENAIRE — CANDIDATURE</p>
        </div>

        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-screen-xl mx-auto w-full">
          <p className="font-naets-micro text-white/25 mb-4">02 — DISTRIBUTION</p>
          <h1
            className="font-condensed text-white leading-none mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(52px, 8.5vw, 128px)',
              letterSpacing: '0.02em',
            }}
          >
            DEVENIR
            <br />
            PARTENAIRE
          </h1>
          <p
            className="text-[#707070] text-[13px] mb-8 max-w-md leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.02em' }}
          >
            Rejoindre le réseau NÆTS. Un partenariat sélectif, exigeant, premium.
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
        <div className="max-w-screen-xl mx-auto max-w-2xl">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-number" aria-hidden="true">01</span>
            <p className="font-naets-label text-black text-[11px]">CANDIDATURE PARTENAIRE</p>
          </div>
          <p
            className="text-[13px] text-[#707070] leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            NÆTS sélectionne ses points de vente partenaires selon des critères stricts d&apos;image,
            de positionnement et de service. Le processus de candidature sera ouvert lors du
            lancement officiel de la marque.
          </p>
          <div className="border border-[#E5E5E0] p-8">
            <p className="font-naets-label text-[#707070] text-[11px] mb-4">
              CRITÈRES DE SÉLECTION
            </p>
            <ul className="space-y-3">
              {[
                'Concept store premium ou spécialiste running haut de gamme',
                'Positionnement cohérent avec l\'univers NÆTS',
                'Surface de vente dédiée et mise en scène produit soignée',
                'Équipe de vente formée aux produits techniques',
              ].map((criterion, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="text-[#BDBDB7] text-[11px] shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-[13px] text-[#707070] leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {criterion}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
