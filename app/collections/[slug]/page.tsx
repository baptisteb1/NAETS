import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

import { collections, getCollectionBySlug } from '@/data/collections';
import { getProductsByCollection, type ProductCollection } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Breadcrumb from '@/components/Breadcrumb';

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return collections.map((col) => ({ slug: col.slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const col = getCollectionBySlug(slug);

  if (!col) {
    return { title: 'Collection introuvable' };
  }

  return {
    title: col.name,
    description: col.description,
  };
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function CollectionSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = getCollectionBySlug(slug);

  if (!col) notFound();

  const colProducts = getProductsByCollection(col.name as ProductCollection);
  const highlights = col.technicalHighlights;

  return (
    <div className="bg-naets-white min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#0A0A0A', minHeight: '60vh' }}
        aria-labelledby="collection-hero-title"
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        {/* Large background name watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-condensed text-white/[0.04] leading-none whitespace-nowrap"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(120px, 20vw, 280px)',
              letterSpacing: '0.05em',
            }}
          >
            {col.shortName}
          </span>
        </div>

        {/* Corner marks */}
        <span className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-8 right-8 w-5 h-5 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-white/20" aria-hidden="true" />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col justify-end min-h-[60vh] px-6 md:px-12 lg:px-16 pb-16 pt-20 max-w-screen-xl mx-auto">

          {/* Breadcrumb */}
          <div className="mb-10">
            <Breadcrumb
              items={[
                { label: 'Accueil', href: '/' },
                { label: 'Collections', href: '/collections' },
                { label: col.name },
              ]}
            />
          </div>

          {/* Label */}
          <p
            className="font-sans text-naets-dark-gray uppercase mb-4"
            style={{ fontSize: 11, letterSpacing: '0.25em' }}
          >
            NÆTS — Collection
          </p>

          {/* Title */}
          <h1
            id="collection-hero-title"
            className="font-condensed text-naets-white leading-none mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(72px, 12vw, 160px)',
              letterSpacing: '0.02em',
            }}
          >
            {col.name}
          </h1>

          {/* Tagline */}
          <p
            className="font-sans text-naets-mid-gray uppercase"
            style={{ fontSize: 13, letterSpacing: '0.18em' }}
          >
            {col.tagline}
          </p>
        </div>
      </section>

      {/* ── MANIFESTE ─────────────────────────────────────────────────────── */}
      <section
        className="border-b border-naets-light-gray"
        aria-labelledby="manifeste-title"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">

            {/* Left: label + title */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <p
                className="font-sans text-naets-dark-gray uppercase"
                style={{ fontSize: 10, letterSpacing: '0.25em' }}
              >
                01 — MANIFESTE
              </p>
              <h2
                id="manifeste-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  letterSpacing: '0.03em',
                }}
              >
                L'ESPRIT
                <br />
                {col.shortName}
              </h2>
            </div>

            {/* Right: manifesto + description */}
            <div className="md:col-span-8 flex flex-col gap-6">
              {/* Pull quote */}
              <blockquote className="relative pl-6 border-l border-naets-black">
                <p
                  className="font-sans text-naets-near-black leading-relaxed italic"
                  style={{ fontSize: 16 }}
                >
                  {col.manifesto}
                </p>
              </blockquote>

              {/* Description */}
              <p
                className="font-sans text-naets-dark-gray leading-relaxed"
                style={{ fontSize: 13 }}
              >
                {col.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ──────────────────────────────────────────────────── */}
      <section
        className="bg-naets-off-white"
        aria-labelledby="products-title"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">

          {/* Section header */}
          <div className="mb-12">
            <div className="flex items-end justify-between gap-6 mb-6">
              <div>
                <p
                  className="font-sans text-naets-dark-gray uppercase mb-2"
                  style={{ fontSize: 10, letterSpacing: '0.25em' }}
                >
                  02 — PRODUITS
                </p>
                <h2
                  id="products-title"
                  className="font-condensed text-naets-black leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    letterSpacing: '0.03em',
                  }}
                >
                  LA COLLECTION
                </h2>
              </div>
              <p
                className="hidden sm:block font-sans text-naets-dark-gray uppercase pb-1"
                style={{ fontSize: 11, letterSpacing: '0.1em' }}
              >
                {colProducts.length} PRODUIT{colProducts.length !== 1 ? 'S' : ''}
              </p>
            </div>
            <div className="h-px bg-naets-light-gray" aria-hidden="true" />
          </div>

          {/* Product count — mobile */}
          <p
            className="sm:hidden font-sans text-naets-dark-gray uppercase mb-8"
            style={{ fontSize: 11, letterSpacing: '0.1em' }}
          >
            {colProducts.length} PRODUIT{colProducts.length !== 1 ? 'S' : ''}
          </p>

          {colProducts.length === 0 ? (
            <div className="py-24 flex flex-col items-center justify-center text-center">
              <p
                className="font-condensed text-naets-mid-gray mb-4"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 64,
                  letterSpacing: '0.05em',
                }}
              >
                BIENTÔT
              </p>
              <p className="font-sans text-sm text-naets-dark-gray max-w-xs">
                Les produits de cette collection arrivent bientôt.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
              {colProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showCollection={false}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── TECHNICAL HIGHLIGHTS ──────────────────────────────────────────── */}
      <section
        className="border-t border-b border-naets-light-gray"
        aria-labelledby="specs-title"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">

            {/* Left: label + title */}
            <div className="md:col-span-4">
              <p
                className="font-sans text-naets-dark-gray uppercase mb-4"
                style={{ fontSize: 10, letterSpacing: '0.25em' }}
              >
                03 — ARCHITECTURE
              </p>
              <h2
                id="specs-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(36px, 4vw, 52px)',
                  letterSpacing: '0.03em',
                }}
              >
                POINTS
                <br />
                TECHNIQUES
              </h2>
            </div>

            {/* Right: bullet list */}
            <div className="md:col-span-8">
              <ul className="flex flex-col divide-y divide-naets-light-gray" aria-label="Caractéristiques techniques">
                {highlights.map((point, i) => (
                  <li
                    key={point}
                    className="flex items-center gap-6 py-5"
                  >
                    {/* Index */}
                    <span
                      className="font-sans text-naets-mid-gray shrink-0 w-8 text-right"
                      style={{ fontSize: 10, letterSpacing: '0.1em' }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Line mark */}
                    <span
                      className="shrink-0 w-8 h-px bg-naets-black"
                      aria-hidden="true"
                    />

                    {/* Text */}
                    <span
                      className="font-sans text-naets-near-black uppercase"
                      style={{ fontSize: 12, letterSpacing: '0.12em' }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER COLLECTIONS ─────────────────────────────────────────────── */}
      {collections.filter((c) => c.slug !== slug).length > 0 && (
        <section aria-labelledby="other-collections-title">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <p
              className="font-sans text-naets-dark-gray uppercase mb-2"
              style={{ fontSize: 10, letterSpacing: '0.25em' }}
            >
              04 — UNIVERS NÆTS
            </p>
            <div className="flex items-end justify-between gap-6 mb-10">
              <h2
                id="other-collections-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  letterSpacing: '0.03em',
                }}
              >
                AUTRES COLLECTIONS
              </h2>
              <Link
                href="/collections"
                className="hidden sm:inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.15em] border border-naets-black px-5 py-3 text-naets-black hover:bg-naets-black hover:text-naets-white transition-colors duration-150 shrink-0"
              >
                VOIR TOUT
                <ArrowRight size={11} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {collections
                .filter((c) => c.slug !== slug)
                .map((other) => {
                  const count = getProductsByCollection(other.name as ProductCollection).length;
                  return (
                    <Link
                      key={other.slug}
                      href={`/collections/${other.slug}`}
                      className="group relative flex flex-col overflow-hidden border border-naets-light-gray hover:border-naets-black transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2"
                      aria-label={`Découvrir la collection ${other.name}`}
                    >
                      {/* Dark image area */}
                      <div
                        className="relative overflow-hidden flex items-center justify-center"
                        style={{ aspectRatio: '16 / 7', background: '#111111' }}
                        aria-hidden="true"
                      >
                        {/* Grid overlay */}
                        <div
                          className="absolute inset-0 opacity-[0.08]"
                          style={{
                            backgroundImage:
                              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                          }}
                        />

                        {/* Collection name watermark */}
                        <span
                          className="font-condensed text-white/[0.12] leading-none select-none transition-all duration-300 group-hover:text-white/[0.2]"
                          style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: 'clamp(56px, 8vw, 96px)',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {other.shortName}
                        </span>

                        {/* Hover underline */}
                        <div className="absolute bottom-0 left-0 h-px bg-naets-white w-0 group-hover:w-full transition-all duration-500" />
                      </div>

                      {/* Info */}
                      <div className="flex items-center justify-between gap-4 px-6 py-4">
                        <div>
                          <p
                            className="font-condensed text-naets-black leading-none mb-1"
                            style={{
                              fontFamily: "'Bebas Neue', sans-serif",
                              fontSize: 24,
                              letterSpacing: '0.03em',
                            }}
                          >
                            {other.name}
                          </p>
                          <p
                            className="font-sans text-naets-dark-gray uppercase"
                            style={{ fontSize: 10, letterSpacing: '0.12em' }}
                          >
                            {other.tagline} — {count} PRODUIT{count !== 1 ? 'S' : ''}
                          </p>
                        </div>
                        <span
                          className="shrink-0 flex items-center justify-center w-8 h-8 border border-naets-black text-naets-black group-hover:bg-naets-black group-hover:text-naets-white transition-colors duration-200"
                          aria-hidden="true"
                        >
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="bg-naets-near-black"
        aria-labelledby="cta-title"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Text */}
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-3"
                style={{ fontSize: 10, letterSpacing: '0.25em' }}
              >
                NÆTS — Catalogue complet
              </p>
              <h2
                id="cta-title"
                className="font-condensed text-naets-white leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(40px, 6vw, 72px)',
                  letterSpacing: '0.02em',
                }}
              >
                EXPLORER TOUT
                <br />
                LE SHOP NÆTS
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href={`/shop?collection=${slug}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-naets-white text-naets-black font-sans text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-naets-off-white transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-naets-white focus-visible:ring-offset-2 focus-visible:ring-offset-naets-near-black"
              >
                SHOP {col.shortName}
                <ArrowRight size={12} aria-hidden="true" />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/30 text-naets-white font-sans text-[11px] uppercase tracking-[0.15em] font-medium hover:border-white hover:bg-white/10 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-naets-white focus-visible:ring-offset-2 focus-visible:ring-offset-naets-near-black"
              >
                TOUT LE SHOP
                <ArrowRight size={12} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
