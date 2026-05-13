'use client';

import { useState } from 'react';
import { type Product } from '@/data/products';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  onAddToCart?: (product: Product) => void;
  /** Number of columns on desktop (default: 4) */
  columns?: 2 | 3 | 4;
  /** Show "CHARGER PLUS" button when there are more products than currently shown */
  showLoadMore?: boolean;
  /** Total number of products available (used to compute whether load-more is needed) */
  totalCount?: number;
}

// ─── Column grid map ──────────────────────────────────────────────────────────

const colsMap: Record<2 | 3 | 4, string> = {
  2: 'grid-cols-1 xs:grid-cols-2',
  3: 'grid-cols-1 xs:grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  /** Visual section index (starts at 1), used for the numeric badge */
  index?: number;
}

function SectionHeader({ title, subtitle, index = 1 }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 mb-8 md:mb-10">
      {/* Row: section number + decorative line + optional subtitle */}
      <div className="flex items-center gap-4">
        {/* Numeric badge */}
        <span
          className="section-number shrink-0"
          aria-hidden="true"
        >
          {String(index).padStart(2, '0')}
        </span>

        {/* Decorative horizontal rule */}
        <span
          className="flex-1 h-px bg-naets-light-gray"
          aria-hidden="true"
        />

        {/* Subtitle — right-aligned micro text */}
        {subtitle && (
          <span
            className="font-sans text-naets-dark-gray uppercase shrink-0"
            style={{ fontSize: 10, letterSpacing: '0.1em' }}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* Title */}
      <h2
        className="font-condensed text-naets-black uppercase leading-none"
        style={{ fontSize: 'clamp(36px, 6vw, 60px)', letterSpacing: '0.03em' }}
      >
        {title}
      </h2>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProductGrid({
  products,
  title,
  subtitle,
  onAddToCart,
  columns = 4,
  showLoadMore = false,
  totalCount,
}: ProductGridProps) {
  const [visibleCount, setVisibleCount] = useState(products.length);

  const effectiveTotal = totalCount ?? products.length;
  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = showLoadMore && visibleCount < effectiveTotal;

  const handleLoadMore = () => {
    // In a real app this would trigger a fetch; here we simply reveal more
    // from the already-passed products array as a progressive disclosure demo.
    setVisibleCount((prev) => Math.min(prev + (columns * 2), effectiveTotal));
  };

  return (
    <section aria-label={title ?? 'Produits'} className="w-full">

      {/* Section header */}
      {title && (
        <SectionHeader title={title} subtitle={subtitle} />
      )}

      {/* Product grid */}
      {visibleProducts.length > 0 ? (
        <div
          className={cn('grid gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14', colsMap[columns])}
          role="list"
          aria-label={`${visibleProducts.length} produit${visibleProducts.length > 1 ? 's' : ''} affiché${visibleProducts.length > 1 ? 's' : ''}`}
        >
          {visibleProducts.map((product) => (
            <div key={product.id} role="listitem">
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div
          className="flex flex-col items-center justify-center py-20 border border-naets-light-gray"
          role="status"
          aria-live="polite"
        >
          <span
            className="font-condensed text-naets-mid-gray uppercase"
            style={{ fontSize: 36, letterSpacing: '0.05em' }}
            aria-hidden="true"
          >
            NÆTS
          </span>
          <p
            className="mt-2 font-sans text-naets-dark-gray uppercase"
            style={{ fontSize: 11, letterSpacing: '0.1em' }}
          >
            AUCUN PRODUIT TROUVÉ
          </p>
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="flex flex-col items-center gap-3 mt-12 md:mt-16">
          {/* Progress indicator */}
          <p
            className="font-sans text-naets-dark-gray uppercase"
            style={{ fontSize: 10, letterSpacing: '0.1em' }}
            aria-live="polite"
          >
            {visibleCount} / {effectiveTotal} PRODUITS
          </p>

          {/* Thin progress bar */}
          <div
            className="w-32 h-px bg-naets-light-gray overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="h-px bg-naets-black transition-all duration-300"
              style={{ width: `${(visibleCount / effectiveTotal) * 100}%` }}
            />
          </div>

          {/* Load more button */}
          <button
            type="button"
            onClick={handleLoadMore}
            className={cn(
              'mt-2',
              'px-8 py-3',
              'border border-naets-black bg-transparent text-naets-black',
              'font-sans uppercase font-medium',
              'transition-colors duration-150',
              'hover:bg-naets-black hover:text-naets-white',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2'
            )}
            style={{ fontSize: 11, letterSpacing: '0.15em' }}
            aria-label={`Charger plus de produits — ${effectiveTotal - visibleCount} restant${effectiveTotal - visibleCount > 1 ? 's' : ''}`}
          >
            CHARGER PLUS
          </button>
        </div>
      )}
    </section>
  );
}
