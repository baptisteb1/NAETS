import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import TechnicalBlock from '@/components/TechnicalBlock';
import ReassuranceBar from '@/components/ReassuranceBar';
import Newsletter from '@/components/Newsletter';

import { getFeaturedShoes, getFeaturedApparel } from '@/data/products';
import { collections } from '@/data/collections';

// ─── Static data ──────────────────────────────────────────────────────────────

const technicalItems = [
  {
    number: '01',
    title: 'Matériaux',
    description:
      'Tissus techniques sélectionnés pour leur rapport poids/performance : mesh rip-stop, ATPU, polyester recyclé haute densité.',
  },
  {
    number: '02',
    title: 'Conception',
    description:
      'Architecture développée par ingénieurs et testée en conditions réelles. Chaque détail — plaque, drop, stack — est calculé.',
  },
  {
    number: '03',
    title: 'Tests terrain',
    description:
      'Chaque modèle est soumis à des sessions intensives sur route, piste et urbain avant sa mise en production.',
  },
  {
    number: '04',
    title: 'Vidéo usine',
    description:
      'Transparence totale sur nos process de fabrication. Découvrez l\'intérieur de la production NÆTS.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const featuredShoes = getFeaturedShoes();
  const featuredApparel = getFeaturedApparel();

  return (
    <main>

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── 2. NOTRE SÉLECTION — Shoes ───────────────────────────────────── */}
      <section
        className="bg-naets-white py-20"
        aria-labelledby="selection-title"
      >
        <div className="max-w-screen-xl mx-auto px-8">
          {/* Header */}
          <div className="mb-12">
            <p
              className="font-sans uppercase text-naets-dark-gray mb-3"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              CHAUSSURES — DROP 01
            </p>
            <div className="flex items-end justify-between gap-6">
              <h2
                id="selection-title"
                className="font-condensed text-naets-black leading-none"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)', letterSpacing: '0.02em' }}
              >
                NOTRE SÉLECTION
              </h2>
              <Link
                href="/shop?category=chaussures"
                className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-sans font-medium border border-naets-black px-6 py-3 text-naets-black transition-colors duration-150 hover:bg-naets-black hover:text-naets-white shrink-0"
              >
                VOIR TOUT
                <ArrowRight size={12} />
              </Link>
            </div>
            {/* Ruled line */}
            <div className="h-px bg-naets-light-gray mt-6" aria-hidden="true" />
          </div>

          <ProductGrid
            products={featuredShoes}
            columns={4}
            showLoadMore={false}
          />

          {/* Mobile CTA */}
          <div className="flex sm:hidden justify-center mt-10">
            <Link
              href="/shop?category=chaussures"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-sans font-medium border border-naets-black px-8 py-4 text-naets-black transition-colors duration-150 hover:bg-naets-black hover:text-naets-white"
            >
              VOIR TOUT
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. NOS COLLECTIONS — 3 editorial cards ───────────────────────── */}
      <section
        className="bg-naets-near-black py-20 px-8"
        aria-labelledby="collections-title"
      >
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p
              className="font-sans uppercase text-naets-dark-gray mb-3"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              TROIS LIGNES — UN UNIVERS TECHNIQUE
            </p>
            <h2
              id="collections-title"
              className="font-condensed text-naets-white leading-none"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)', letterSpacing: '0.02em' }}
            >
              NOS COLLECTIONS
            </h2>
            <div className="h-px bg-white/10 mt-6" aria-hidden="true" />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {collections.map((col, idx) => (
              <article
                key={col.slug}
                className={`relative min-h-[480px] flex flex-col justify-between overflow-hidden group ${
                  idx < collections.length - 1 ? 'md:border-r border-white/10' : ''
                } border-b md:border-b-0 border-white/10`}
                style={{ background: '#0A0A0A' }}
              >
                {/* Background watermark */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                  aria-hidden="true"
                >
                  <span
                    className="font-condensed text-[9vw] md:text-[5vw] leading-none text-white/[0.04] transition-all duration-300 group-hover:text-white/[0.07]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {col.shortName}
                  </span>
                </div>

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                  aria-hidden="true"
                />

                {/* Corner marks */}
                <span className="absolute top-5 left-5 w-4 h-4 border-t border-l border-white/20 z-10" aria-hidden="true" />
                <span className="absolute top-5 right-5 w-4 h-4 border-t border-r border-white/20 z-10" aria-hidden="true" />
                <span className="absolute bottom-5 left-5 w-4 h-4 border-b border-l border-white/20 z-10" aria-hidden="true" />
                <span className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-white/20 z-10" aria-hidden="true" />

                {/* Top: collection index */}
                <div className="relative z-10 p-8">
                  <span
                    className="font-sans text-naets-dark-gray uppercase"
                    style={{ fontSize: 10, letterSpacing: '0.2em' }}
                  >
                    {String(idx + 1).padStart(2, '0')} — COLLECTION
                  </span>
                </div>

                {/* Bottom: content */}
                <div className="relative z-10 p-8 flex flex-col gap-4">
                  <h3
                    className="font-condensed text-naets-white leading-none"
                    style={{ fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '0.02em' }}
                  >
                    {col.name}
                  </h3>
                  <p
                    className="font-sans text-naets-mid-gray leading-relaxed max-w-xs"
                    style={{ fontSize: 12, letterSpacing: '0.04em' }}
                  >
                    {col.tagline}
                  </p>

                  {/* Technical highlights — 2 visible */}
                  <ul className="flex flex-col gap-1 mt-1" aria-label="Points techniques">
                    {col.technicalHighlights.slice(0, 2).map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 font-sans text-naets-dark-gray"
                        style={{ fontSize: 10, letterSpacing: '0.12em' }}
                      >
                        <span className="w-2 h-px bg-naets-dark-gray inline-block shrink-0" aria-hidden="true" />
                        {point.toUpperCase()}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/collections/${col.slug}`}
                    className="inline-flex items-center gap-2 self-start mt-2 text-[11px] tracking-[0.15em] uppercase font-sans font-medium text-naets-white border border-white/30 px-5 py-3 transition-all duration-150 hover:bg-naets-white hover:text-naets-black"
                  >
                    SHOP
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. RUNNING APPAREL — Clothes grid ────────────────────────────── */}
      <section
        className="bg-naets-off-white py-20"
        aria-labelledby="apparel-title"
      >
        <div className="max-w-screen-xl mx-auto px-8">
          {/* Header */}
          <div className="mb-12">
            <p
              className="font-sans uppercase text-naets-dark-gray mb-3"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              VÊTEMENTS TECHNIQUES — COLLECTION EN COURS
            </p>
            <div className="flex items-end justify-between gap-6">
              <h2
                id="apparel-title"
                className="font-condensed text-naets-black leading-none"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)', letterSpacing: '0.02em' }}
              >
                RUNNING APPAREL
              </h2>
              <Link
                href="/shop?category=vetements"
                className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-sans font-medium border border-naets-black px-6 py-3 text-naets-black transition-colors duration-150 hover:bg-naets-black hover:text-naets-white shrink-0"
              >
                VOIR TOUT
                <ArrowRight size={12} />
              </Link>
            </div>
            <div className="h-px bg-naets-light-gray mt-6" aria-hidden="true" />
          </div>

          <ProductGrid
            products={featuredApparel}
            columns={3}
            showLoadMore={false}
          />

          {/* Mobile CTA */}
          <div className="flex sm:hidden justify-center mt-10">
            <Link
              href="/shop?category=vetements"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-sans font-medium border border-naets-black px-8 py-4 text-naets-black transition-colors duration-150 hover:bg-naets-black hover:text-naets-white"
            >
              VOIR TOUT
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. NÆTS COLLECTIVE — Full-width editorial banner ─────────────── */}
      <section
        className="py-0"
        aria-labelledby="collective-title"
        style={{ backgroundColor: '#111111' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

            {/* Left: text */}
            <div className="flex flex-col justify-center px-8 lg:px-16 py-20 relative">
              {/* Corner marks */}
              <span className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white/20" aria-hidden="true" />
              <span className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white/20" aria-hidden="true" />

              <p
                className="font-sans uppercase text-naets-dark-gray mb-6"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                COMMUNAUTÉ — NÆTS PROGRAM
              </p>
              <h2
                id="collective-title"
                className="font-condensed text-naets-white leading-none mb-6"
                style={{ fontSize: 'clamp(52px, 7vw, 96px)', letterSpacing: '0.02em' }}
              >
                NÆTS
                <br />
                COLLECTIVE
              </h2>
              <p
                className="font-sans text-naets-mid-gray leading-relaxed mb-10 max-w-sm"
                style={{ fontSize: 13 }}
              >
                Un espace pour celles et ceux qui courent, créent, testent
                et vivent le mouvement.
              </p>
              <Link
                href="/naets-collective"
                className="inline-flex items-center gap-3 self-start text-[11px] tracking-[0.15em] uppercase font-sans font-medium bg-naets-white text-naets-black px-8 py-4 transition-colors duration-150 hover:bg-naets-off-white"
              >
                REJOINDRE LE COLLECTIVE
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* Right: dark placeholder image */}
            <div
              className="relative min-h-[320px] lg:min-h-0 flex items-center justify-center overflow-hidden"
              style={{ background: '#0A0A0A' }}
              aria-hidden="true"
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '60px 60px',
                }}
              />
              {/* Watermark */}
              <div className="relative flex flex-col items-center gap-2 select-none pointer-events-none">
                <span
                  className="font-condensed text-white/[0.06] leading-none"
                  style={{ fontSize: 'clamp(64px, 10vw, 140px)', fontFamily: "'Bebas Neue', sans-serif" }}
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

              {/* Corner marks */}
              <span className="absolute top-6 right-6 w-5 h-5 border-t border-r border-white/20" />
              <span className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. INSIDE NÆTS — Technical block ─────────────────────────────── */}
      <TechnicalBlock
        title="INSIDE NÆTS"
        subtitle="L'univers technique de la marque. Matériaux. Conception. Performance. Tests."
        items={technicalItems}
        dark={false}
        cta={{ label: 'EXPLORER', href: '/inside-naets' }}
      />

      {/* ── 7. REASSURANCE BAR ───────────────────────────────────────────── */}
      <ReassuranceBar />

      {/* ── 8. NEWSLETTER ────────────────────────────────────────────────── */}
      <Newsletter />

    </main>
  );
}
