import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Photos — Inside NÆTS',
  description:
    'Galerie photographique NÆTS : matériaux, détails de fabrication, produits et univers de marque.',
};

const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

export default function PhotosPage() {
  return (
    <main>
      <section className="relative min-h-[68vh] flex flex-col justify-end bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={GRID_BG} aria-hidden="true" />
        <span className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-8 right-8 w-5 h-5 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-white/20" aria-hidden="true" />

        <div className="absolute top-12 left-8 md:left-16">
          <p className="font-naets-micro text-white/30">INSIDE NÆTS — GALERIE PHOTOS</p>
        </div>

        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-screen-xl mx-auto w-full">
          <p className="font-naets-micro text-white/25 mb-4">03 — L&apos;UNIVERS TECHNIQUE</p>
          <h1
            className="font-condensed text-white leading-none mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(72px, 12vw, 170px)',
              letterSpacing: '0.02em',
            }}
          >
            PHOTOS
          </h1>
          <p
            className="text-[#707070] text-[13px] mb-8 max-w-md leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.02em' }}
          >
            Matériaux, fabrication, détails de conception. La précision en image.
          </p>
          <Link
            href="/inside-naets"
            className="inline-flex items-center gap-2 font-naets-micro text-white/35 hover:text-white/75 transition-colors"
          >
            ← INSIDE NÆTS
          </Link>
        </div>
      </section>

      {/* Placeholder grid */}
      <section className="bg-white py-20 px-8 md:px-16 border-b border-[#E5E5E0]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-start gap-5 mb-12">
            <span className="section-number shrink-0 mt-0.5" aria-hidden="true">CS</span>
            <div>
              <p className="font-naets-label text-[#707070] text-[11px] mb-2">
                GALERIE BIENTÔT DISPONIBLE
              </p>
              <p
                className="text-[13px] text-[#707070] max-w-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Les photos de fabrication et de matériaux seront ajoutées prochainement.
              </p>
            </div>
          </div>
          {/* Placeholder grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E5E5E0]">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-[#0A0A0A] flex items-center justify-center"
                aria-hidden="true"
              >
                <div
                  className="w-full h-full opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #BDBDB7 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
