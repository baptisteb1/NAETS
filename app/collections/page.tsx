import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { collections } from '@/data/collections';
import { getProductsByCollection } from '@/data/products';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Nos Collections',
  description:
    'Découvrez les trois collections NÆTS — Æ-ESSENTIAL, Æ-REFLEX, Æ-SLYDE. Architecture technique, performance radicale.',
};

// ─── Collection card ──────────────────────────────────────────────────────────

interface CollectionCardProps {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  productCount: number;
  index: number;
}

function CollectionCard({
  slug,
  name,
  tagline,
  description,
  productCount,
  index,
}: CollectionCardProps) {
  // Alternate light/dark backgrounds for visual rhythm
  const isDark = index % 2 === 1;

  return (
    <Link
      href={`/collections/${slug}`}
      className="group relative flex flex-col overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2"
      aria-label={`Découvrir la collection ${name}`}
    >
      {/* ── Image area ──────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '3 / 4' }}
        aria-hidden="true"
      >
        {/* Placeholder background — dark gradient */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.03]"
          style={{
            background: isDark
              ? 'linear-gradient(160deg, #111111 0%, #2a2a2a 50%, #111111 100%)'
              : 'linear-gradient(160deg, #1a1a1a 0%, #333333 50%, #1a1a1a 100%)',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Collection name — large Bebas overlay, bottom-left */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Index number */}
          <span
            className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            {String(index + 1).padStart(2, '0')} / {String(collections.length).padStart(2, '0')}
          </span>

          <h2
            className="text-white leading-none mb-1 transition-colors duration-300"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(52px, 9vw, 96px)',
              letterSpacing: '0.03em',
            }}
          >
            {name}
          </h2>

          {/* Tagline */}
          <p
            className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white/90 transition-colors duration-300"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            {tagline}
          </p>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" aria-hidden="true" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20" aria-hidden="true" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" aria-hidden="true" />

        {/* Hover overlay line */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-naets-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] w-0 group-hover:w-full"
          aria-hidden="true"
        />
      </div>

      {/* ── Info area ───────────────────────────────────────────────────── */}
      <div className="pt-5 pb-6 border-b border-naets-light-gray">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p
              className="font-sans text-[10px] uppercase tracking-[0.15em] text-naets-dark-gray mb-2"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {productCount} PRODUIT{productCount !== 1 ? 'S' : ''}
            </p>
            <p
              className="font-sans text-[13px] leading-relaxed text-naets-near-black line-clamp-2"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {description}
            </p>
          </div>

          <span
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 border border-naets-black text-naets-black group-hover:bg-naets-black group-hover:text-naets-white transition-colors duration-200 mt-5"
            aria-hidden="true"
          >
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CollectionsPage() {
  const collectionsWithCount = collections.map((col) => ({
    ...col,
    productCount: getProductsByCollection(col.name as Parameters<typeof getProductsByCollection>[0]).length,
  }));

  return (
    <div className="bg-naets-white min-h-screen">

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="px-6 md:px-8 lg:px-12 pt-10 pb-10 border-b border-naets-light-gray">
        <div className="max-w-screen-xl mx-auto">
          <p
            className="font-sans text-[10px] uppercase tracking-[0.25em] text-naets-dark-gray mb-4"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            NÆTS — Architecture
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1
              className="font-condensed leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(64px, 10vw, 120px)',
                letterSpacing: '0.02em',
              }}
            >
              NOS COLLECTIONS
            </h1>
            <p
              className="font-sans text-[13px] leading-relaxed text-naets-dark-gray max-w-sm md:text-right pb-1"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              Trois collections. Chacune pensée autour d'un usage, d'une sensation,
              d'une architecture technique propre à NÆTS.
            </p>
          </div>
        </div>
      </div>

      {/* ── Collections grid ────────────────────────────────────────────── */}
      <div className="px-6 md:px-8 lg:px-12 py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {collectionsWithCount.map((col, i) => (
              <CollectionCard
                key={col.slug}
                slug={col.slug}
                name={col.name}
                tagline={col.tagline}
                description={col.description}
                productCount={col.productCount}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA strip ───────────────────────────────────────────────────── */}
      <div className="bg-naets-near-black mt-8">
        <div className="px-6 md:px-8 lg:px-12 py-16 max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p
                className="font-sans text-[10px] uppercase tracking-[0.2em] text-naets-mid-gray mb-3"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                NÆTS — Tout le catalogue
              </p>
              <h2
                className="font-condensed text-naets-white leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  letterSpacing: '0.02em',
                }}
              >
                EXPLORER TOUS LES PRODUITS
              </h2>
            </div>
            <Link
              href="/shop"
              className="flex-shrink-0 inline-flex items-center gap-3 px-10 py-4 border border-naets-white text-naets-white font-sans text-[11px] uppercase tracking-[0.15em] hover:bg-naets-white hover:text-naets-black transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-naets-white focus-visible:ring-offset-2 focus-visible:ring-offset-naets-near-black"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              VOIR LE SHOP
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
