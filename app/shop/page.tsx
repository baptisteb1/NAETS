'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ProductCard from '@/components/ProductCard';
import {
  products,
  type Product,
  type ProductCategory,
  type ProductCollection,
} from '@/data/products';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

type SortKey = 'pertinence' | 'prix-asc' | 'prix-desc';
type ColorFilter = 'Toutes' | 'Black' | 'White' | 'Black & White';

// ─── Filter bar select ────────────────────────────────────────────────────────

interface FilterSelectProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  const isActive = value !== options[0].value;
  return (
    <div className="relative flex items-center">
      <label
        className="sr-only"
        htmlFor={`filter-${label}`}
      >
        {label}
      </label>
      <select
        id={`filter-${label}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'appearance-none h-9 pl-3 pr-7',
          'border border-naets-black',
          'font-sans text-[11px] uppercase tracking-[0.1em]',
          'focus:outline-none focus-visible:ring-1 focus-visible:ring-naets-black',
          'cursor-pointer transition-colors duration-150',
          isActive
            ? 'bg-naets-black text-naets-white'
            : 'bg-naets-white text-naets-black hover:bg-naets-off-white',
        )}
        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {/* Custom chevron */}
      <span
        className={cn(
          'pointer-events-none absolute right-2 top-1/2 -translate-y-1/2',
          'flex items-center justify-center',
          isActive ? 'text-naets-white' : 'text-naets-black',
        )}
        aria-hidden="true"
      >
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </span>
    </div>
  );
}

interface ToggleButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function ToggleButton({ label, active, onClick }: ToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'h-9 px-4 border border-naets-black',
        'font-sans text-[11px] uppercase tracking-[0.1em]',
        'transition-colors duration-150',
        'focus:outline-none focus-visible:ring-1 focus-visible:ring-naets-black',
        active
          ? 'bg-naets-black text-naets-white'
          : 'bg-naets-white text-naets-black hover:bg-naets-off-white',
      )}
      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
    >
      {label}
    </button>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function matchesColor(product: Product, colorFilter: ColorFilter): boolean {
  if (colorFilter === 'Toutes') return true;
  return product.colors.some((c) => {
    const lower = c.toLowerCase();
    if (colorFilter === 'Black') return lower.includes('black') && !lower.includes('white');
    if (colorFilter === 'White') return lower.includes('white') && !lower.includes('black');
    if (colorFilter === 'Black & White')
      return lower.includes('black') && lower.includes('white');
    return true;
  });
}

function collectionToFilterValue(col: ProductCollection): string {
  if (col === 'Æ-ESSENTIAL') return 'ae-essential';
  if (col === 'Æ-REFLEX') return 'ae-reflex';
  if (col === 'Æ-SLYDE') return 'ae-slyde';
  return 'toutes';
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ShopPage() {
  const [category, setCategory] = useState<string>('toutes');
  const [collection, setCollection] = useState<string>('toutes');
  const [color, setColor] = useState<ColorFilter>('Toutes');
  const [nouveautes, setNouveautes] = useState(false);
  const [sort, setSort] = useState<SortKey>('pertinence');
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== 'toutes') {
      result = result.filter((p) => p.category === (category as ProductCategory));
    }
    if (collection !== 'toutes') {
      result = result.filter(
        (p) => collectionToFilterValue(p.collection) === collection,
      );
    }
    if (color !== 'Toutes') {
      result = result.filter((p) => matchesColor(p, color));
    }
    if (nouveautes) {
      result = result.filter((p) => p.isNew);
    }

    if (sort === 'prix-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'prix-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [category, collection, color, nouveautes, sort]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const activeFilterCount = [
    category !== 'toutes',
    collection !== 'toutes',
    color !== 'Toutes',
    nouveautes,
  ].filter(Boolean).length;

  const resetFilters = () => {
    setCategory('toutes');
    setCollection('toutes');
    setColor('Toutes');
    setNouveautes(false);
    setSort('pertinence');
    setVisibleCount(12);
  };

  return (
    <div className="bg-naets-white min-h-screen">
      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="px-6 md:px-8 lg:px-12 pt-8 pb-0">
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Shop' },
          ]}
        />
      </div>

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="px-6 md:px-8 lg:px-12 pt-6 pb-8 border-b border-naets-light-gray">
        <div className="flex items-end justify-between">
          <div>
            <p
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-naets-dark-gray mb-2"
            >
              NÆTS — Catalogue
            </p>
            <h1
              className="font-condensed leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(48px, 7vw, 80px)',
                letterSpacing: '0.02em',
              }}
            >
              SHOP — Tous les produits
            </h1>
          </div>
          <p
            className="hidden sm:block font-sans text-[11px] uppercase tracking-[0.1em] text-naets-dark-gray pb-1"
          >
            {filtered.length} PRODUIT{filtered.length !== 1 ? 'S' : ''}
          </p>
        </div>
      </div>

      {/* ── Filter bar ──────────────────────────────────────────────────── */}
      <div className="sticky top-[120px] z-20 bg-naets-white border-b border-naets-light-gray">
        <div className="px-6 md:px-8 lg:px-12 py-3">
          <div className="flex flex-wrap items-center gap-2">

            {/* TYPE */}
            <FilterSelect
              label="TYPE"
              value={category}
              options={[
                { value: 'toutes', label: 'Type : Tous' },
                { value: 'chaussures', label: 'Chaussures' },
                { value: 'vetements', label: 'Vêtements' },
                { value: 'accessoires', label: 'Accessoires' },
              ]}
              onChange={(v) => { setCategory(v); setVisibleCount(12); }}
            />

            {/* Divider */}
            <span className="hidden sm:block w-px h-5 bg-naets-light-gray" aria-hidden="true" />

            {/* COLLECTION */}
            <FilterSelect
              label="COLLECTION"
              value={collection}
              options={[
                { value: 'toutes', label: 'Collection : Toutes' },
                { value: 'ae-essential', label: 'Æ-ESSENTIAL' },
                { value: 'ae-reflex', label: 'Æ-REFLEX' },
                { value: 'ae-slyde', label: 'Æ-SLYDE' },
              ]}
              onChange={(v) => { setCollection(v); setVisibleCount(12); }}
            />

            {/* Divider */}
            <span className="hidden sm:block w-px h-5 bg-naets-light-gray" aria-hidden="true" />

            {/* COULEUR */}
            <FilterSelect
              label="COULEUR"
              value={color}
              options={[
                { value: 'Toutes', label: 'Couleur : Toutes' },
                { value: 'Black', label: 'Black' },
                { value: 'White', label: 'White' },
                { value: 'Black & White', label: 'Black & White' },
              ]}
              onChange={(v) => { setColor(v as ColorFilter); setVisibleCount(12); }}
            />

            {/* Divider */}
            <span className="hidden sm:block w-px h-5 bg-naets-light-gray" aria-hidden="true" />

            {/* NOUVEAUTÉS */}
            <ToggleButton
              label="NOUVEAUTÉS"
              active={nouveautes}
              onClick={() => { setNouveautes((v) => !v); setVisibleCount(12); }}
            />

            {/* Spacer */}
            <div className="flex-1" />

            {/* SORT */}
            <FilterSelect
              label="TRI"
              value={sort}
              options={[
                { value: 'pertinence', label: 'Tri : Pertinence' },
                { value: 'prix-asc', label: 'Prix croissant' },
                { value: 'prix-desc', label: 'Prix décroissant' },
              ]}
              onChange={(v) => setSort(v as SortKey)}
            />

            {/* Reset filters */}
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={resetFilters}
                className={cn(
                  'h-9 px-3',
                  'font-sans text-[11px] uppercase tracking-[0.1em]',
                  'text-naets-dark-gray underline underline-offset-2',
                  'hover:text-naets-black transition-colors duration-150',
                  'focus:outline-none',
                )}
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                Effacer ({activeFilterCount})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Main content ────────────────────────────────────────────────── */}
      <div className="px-6 md:px-8 lg:px-12 py-10">

        {/* Results count — mobile */}
        <p className="sm:hidden font-sans text-[11px] uppercase tracking-[0.1em] text-naets-dark-gray mb-6">
          {filtered.length} PRODUIT{filtered.length !== 1 ? 'S' : ''}
        </p>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <p
              className="font-condensed text-naets-mid-gray mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 64,
                letterSpacing: '0.05em',
              }}
            >
              0 RÉSULTAT
            </p>
            <p className="font-sans text-sm text-naets-dark-gray mb-8 max-w-xs">
              Aucun produit ne correspond à vos filtres. Essayez d'en réinitialiser quelques-uns.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-8 py-3 border border-naets-black font-sans text-[11px] uppercase tracking-[0.15em] hover:bg-naets-black hover:text-naets-white transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-naets-black"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Product grid */}
        {filtered.length > 0 && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
              {visible.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showCollection
                />
              ))}
            </div>

            {/* Load more */}
            {hasMore && (
              <div className="mt-16 flex flex-col items-center gap-3">
                {/* Progress indicator */}
                <div className="w-full max-w-xs">
                  <div className="flex justify-between font-sans text-[10px] uppercase tracking-[0.1em] text-naets-dark-gray mb-2">
                    <span>{visibleCount} affichés</span>
                    <span>{filtered.length} total</span>
                  </div>
                  <div className="h-px bg-naets-light-gray w-full">
                    <div
                      className="h-px bg-naets-black transition-all duration-500"
                      style={{ width: `${(visibleCount / filtered.length) * 100}%` }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setVisibleCount((n) => n + 12)}
                  className={cn(
                    'mt-4 px-12 py-4',
                    'border border-naets-black',
                    'font-sans text-[11px] uppercase tracking-[0.15em] font-medium',
                    'hover:bg-naets-black hover:text-naets-white',
                    'transition-colors duration-150',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2',
                  )}
                >
                  CHARGER PLUS
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
