'use client';

import { useState } from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────────

interface PackProduct {
  name: string;
  price: number;
  sizes: string[];
}

interface Pack {
  id: string;
  number: string;
  name: string;
  tagline: string;
  products: PackProduct[];
  totalUnit: number;
  packPrice: number;
  discount: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const SIZES_SHOES = ['39', '40', '41', '42', '43', '44', '45', '46'];
const SIZES_APPAREL = ['XS', 'S', 'M', 'L', 'XL'];
const SIZES_SOCK = ['38–41', '42–45'];

const PACKS: Pack[] = [
  {
    id: 'pack-running-performance',
    number: '01',
    name: 'PACK RUNNING PERFORMANCE',
    tagline: "L'essentiel technique pour performer sur route.",
    products: [
      { name: 'Æ-REFLEX Black & White', price: 180, sizes: SIZES_SHOES },
      { name: 'Running Top Black', price: 65, sizes: SIZES_APPAREL },
      { name: 'Running Short Black', price: 70, sizes: SIZES_APPAREL },
    ],
    totalUnit: 315,
    packPrice: 265,
    discount: '-15%',
  },
  {
    id: 'pack-race-day',
    number: '02',
    name: 'PACK RACE DAY',
    tagline: "Tout ce qu'il faut le jour J, sans compromis.",
    products: [
      { name: 'Æ-SLYDE White', price: 180, sizes: SIZES_SHOES },
      { name: 'Tank Top Black', price: 50, sizes: SIZES_APPAREL },
      { name: 'Cycliste Black', price: 80, sizes: SIZES_APPAREL },
      { name: 'Running Sock White', price: 20, sizes: SIZES_SOCK },
    ],
    totalUnit: 330,
    packPrice: 279,
    discount: '-15%',
  },
  {
    id: 'pack-daily-training',
    number: '03',
    name: 'PACK DAILY TRAINING',
    tagline: "Pour ceux qui s'entraînent sans relâche.",
    products: [
      { name: 'Æ-ESSENTIAL Concrete Black', price: 180, sizes: SIZES_SHOES },
      { name: 'Running Vest Black', price: 120, sizes: SIZES_APPAREL },
      { name: 'Running Short Black', price: 70, sizes: SIZES_APPAREL },
    ],
    totalUnit: 370,
    packPrice: 314,
    discount: '-15%',
  },
];

// ─── Image Placeholder ─────────────────────────────────────────────────────────

function MiniImagePlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden shrink-0 ${className ?? ''}`}
      style={{ backgroundColor: '#111111' }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }}
      />
      <span
        className="font-condensed text-white/10 leading-none select-none"
        style={{ fontSize: 14, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
      >
        NÆTS
      </span>
    </div>
  );
}

// ─── Size Selector ─────────────────────────────────────────────────────────────

function SizeSelector({
  productIdx,
  packId,
  sizes,
  selectedSize,
  onSelect,
}: {
  productIdx: number;
  packId: string;
  sizes: string[];
  selectedSize: string;
  onSelect: (size: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {sizes.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => onSelect(size)}
          aria-label={`Taille ${size} pour produit ${productIdx + 1} du pack ${packId}`}
          className={[
            'h-7 px-2 border font-sans transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-naets-black',
            'text-[10px] uppercase tracking-[0.08em]',
            selectedSize === size
              ? 'bg-naets-black text-naets-white border-naets-black'
              : 'bg-white text-naets-black border-naets-light-gray hover:border-naets-black',
          ].join(' ')}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

// ─── Pack Card ─────────────────────────────────────────────────────────────────

function PackCard({ pack }: { pack: Pack }) {
  const [sizes, setSizes] = useState<string[]>(pack.products.map(() => ''));

  const handleSizeSelect = (productIdx: number, size: string) => {
    setSizes((prev) => {
      const next = [...prev];
      next[productIdx] = size;
      return next;
    });
  };

  return (
    <article className="border border-naets-black" aria-labelledby={`pack-title-${pack.id}`}>

      {/* Card header bar */}
      <div className="flex items-center gap-4 px-8 py-4 border-b border-naets-black bg-naets-near-black">
        <span
          className="inline-flex items-center justify-center bg-naets-white text-naets-black font-sans font-semibold shrink-0"
          style={{ fontSize: 10, width: 22, height: 22, letterSpacing: 0 }}
          aria-hidden="true"
        >
          {pack.number}
        </span>
        <h2
          id={`pack-title-${pack.id}`}
          className="font-condensed text-naets-white leading-none flex-1"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            letterSpacing: '0.03em',
          }}
        >
          {pack.name}
        </h2>
        <span
          className="shrink-0 font-sans text-naets-mid-gray"
          style={{ fontSize: 11, letterSpacing: '0.1em' }}
        >
          {pack.tagline}
        </span>
      </div>

      {/* Main body */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">

        {/* Left: Products list */}
        <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-naets-black">
          <p
            className="font-sans text-naets-dark-gray uppercase mb-6"
            style={{ fontSize: 10, letterSpacing: '0.2em' }}
          >
            PRODUITS INCLUS — {pack.products.length} ARTICLES
          </p>

          <div className="flex flex-col divide-y divide-naets-light-gray">
            {pack.products.map((product, idx) => (
              <div key={idx} className="flex gap-4 py-5 first:pt-0 last:pb-0">

                {/* Number */}
                <span
                  className="font-condensed text-naets-light-gray leading-none shrink-0 mt-1"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 32,
                    letterSpacing: '0.02em',
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Mini image */}
                <MiniImagePlaceholder className="w-14 h-14" />

                {/* Product info */}
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <p
                    className="font-sans text-naets-black font-medium leading-snug"
                    style={{ fontSize: 13, letterSpacing: '0.02em' }}
                  >
                    {product.name}
                  </p>
                  <p
                    className="font-sans text-naets-dark-gray"
                    style={{ fontSize: 12, letterSpacing: '0.04em' }}
                  >
                    {product.price}€
                  </p>

                  {/* Size selector */}
                  <div>
                    <p
                      className="font-sans text-naets-dark-gray uppercase mt-2"
                      style={{ fontSize: 10, letterSpacing: '0.15em' }}
                    >
                      TAILLE{sizes[idx] ? ` : ${sizes[idx]}` : ''}
                    </p>
                    <SizeSelector
                      productIdx={idx}
                      packId={pack.id}
                      sizes={product.sizes}
                      selectedSize={sizes[idx]}
                      onSelect={(size) => handleSizeSelect(idx, size)}
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right: Price block */}
        <div className="p-8 lg:p-10 flex flex-col justify-between gap-8">

          {/* Savings badge */}
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center bg-naets-black text-naets-white font-sans font-semibold px-3 py-1"
              style={{ fontSize: 12, letterSpacing: '0.05em' }}
            >
              {pack.discount}
            </span>
            <span
              className="font-sans text-naets-dark-gray uppercase"
              style={{ fontSize: 10, letterSpacing: '0.15em' }}
            >
              ÉCONOMIE : {pack.totalUnit - pack.packPrice}€
            </span>
          </div>

          {/* Prices */}
          <div className="flex flex-col gap-2">
            <p
              className="font-sans text-naets-mid-gray line-through"
              style={{ fontSize: 14, letterSpacing: '0.02em' }}
            >
              Valeur unitaire : {pack.totalUnit}€
            </p>
            <p
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(40px, 6vw, 64px)',
                letterSpacing: '0.02em',
              }}
            >
              {pack.packPrice}€
            </p>
            <p
              className="font-sans text-naets-dark-gray"
              style={{ fontSize: 12, letterSpacing: '0.03em' }}
            >
              Prix pack — livraison offerte
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-naets-light-gray" aria-hidden="true" />

          {/* CTA */}
          <button
            type="button"
            className="w-full font-sans font-medium bg-naets-black text-naets-white py-4 transition-colors duration-150 hover:bg-naets-near-black focus:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2"
            style={{ fontSize: 11, letterSpacing: '0.15em' }}
          >
            AJOUTER LE PACK AU PANIER
          </button>

          {/* Fine print */}
          <p
            className="font-sans text-naets-mid-gray"
            style={{ fontSize: 11, letterSpacing: '0.03em', lineHeight: 1.6 }}
          >
            Sélectionnez une taille pour chaque article avant d'ajouter au panier.
          </p>

        </div>
      </div>
    </article>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PacksPage() {
  return (
    <main>

      {/* ── 1. HERO HEADER ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="packs-title"
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
        <span className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20" aria-hidden="true" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-8 md:px-12 pt-16 pb-16 md:pb-20">
          <p
            className="font-sans text-naets-dark-gray uppercase mb-4"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            NÆTS — SHOP
          </p>
          <h1
            id="packs-title"
            className="font-condensed text-naets-white leading-none mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(72px, 13vw, 160px)',
              letterSpacing: '0.02em',
            }}
          >
            PACKS NÆTS
          </h1>
          <p
            className="font-sans text-naets-mid-gray uppercase"
            style={{ fontSize: 12, letterSpacing: '0.12em' }}
          >
            ÉQUIPEZ-VOUS COMPLÈTEMENT À TARIF PRÉFÉRENTIEL.
          </p>
        </div>
      </section>

      {/* ── 2. PACK CARDS ────────────────────────────────────────────────────── */}
      <section
        className="bg-naets-white px-8 md:px-12 py-16"
        aria-label="Sélection de packs NÆTS"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
          {PACKS.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>
      </section>

      {/* ── 3. REASSURANCE BAR ───────────────────────────────────────────────── */}
      <section
        className="border-t border-naets-light-gray"
        style={{ backgroundColor: '#F5F5F2' }}
      >
        <div className="max-w-screen-xl mx-auto px-8 md:px-12 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-naets-light-gray">
            {[
              { label: 'LIVRAISON OFFERTE', sub: "Dès 100€ d'achat — France métropolitaine" },
              { label: 'RETOURS 30 JOURS', sub: 'Retour gratuit, remboursement rapide' },
              { label: 'SERVICE CLIENT', sub: 'Disponible 7j/7 — contact@naets.fr' },
            ].map((item) => (
              <div key={item.label} className="px-6 py-4 first:pl-0 last:pr-0 flex flex-col gap-1">
                <p
                  className="font-sans text-naets-black uppercase font-medium"
                  style={{ fontSize: 11, letterSpacing: '0.15em' }}
                >
                  {item.label}
                </p>
                <p
                  className="font-sans text-naets-dark-gray"
                  style={{ fontSize: 12, letterSpacing: '0.02em' }}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
