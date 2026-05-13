'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { type Product } from '@/data/products';
import { cn, formatPrice } from '@/lib/utils';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Derive a CSS background-color for a color swatch from a product color string.
 * Handles common Pantone / plain English descriptors used in the product data.
 */
function resolveSwatchColor(colorName: string): { bg: string; border: string } {
  const lower = colorName.toLowerCase();

  if (lower.includes('black') || lower === 'pantone black') {
    return { bg: '#000000', border: 'border-naets-mid-gray' };
  }
  if (
    lower.includes('white') ||
    lower.includes('bright white') ||
    lower.includes('11-0601')
  ) {
    return { bg: '#FFFFFF', border: 'border-naets-mid-gray' };
  }
  if (lower.includes('concrete')) {
    return { bg: '#707070', border: 'border-transparent' };
  }

  // Fallback: mid-gray
  return { bg: '#BDBDB7', border: 'border-transparent' };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface BadgeProps {
  label: string;
}

function Badge({ label }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center',
        'px-1.5 py-px',
        'bg-naets-black text-naets-white',
        'font-sans text-[9px] font-medium uppercase tracking-[0.1em]',
        'leading-none',
        'shrink-0'
      )}
    >
      {label}
    </span>
  );
}

interface ColorSwatchProps {
  color: string;
}

function ColorSwatch({ color }: ColorSwatchProps) {
  const { bg, border } = resolveSwatchColor(color);
  return (
    <span
      aria-label={color}
      title={color}
      className={cn('inline-block w-3 h-3 border shrink-0', border)}
      style={{ backgroundColor: bg }}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  showCollection?: boolean;
}

export default function ProductCard({
  product,
  onAddToCart,
  showCollection = true,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // prevent link navigation if card is wrapped in a link
    onAddToCart?.(product);
  };

  const handleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsWishlisted((v) => !v);
  };

  return (
    <article
      className="group flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={product.name}
    >
      {/* ── Image area ────────────────────────────────────────────────── */}
      <Link
        href={`/produits/${product.slug}`}
        className="relative block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2"
        tabIndex={0}
        aria-label={`Voir ${product.name}`}
      >
        {/* Aspect ratio container — 4:5 */}
        <div
          className="relative w-full bg-naets-light-gray"
          style={{ aspectRatio: '4 / 5' }}
        >
          {/* Placeholder image with "NÆTS" text */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}
            aria-hidden="true"
          >
            {product.images[0] && !product.images[0].includes('placeholder') ? (
              // Real image (future use)
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              // Placeholder
              <span
                className="font-condensed text-naets-mid-gray select-none"
                style={{ fontSize: 48, letterSpacing: '0.05em' }}
              >
                NÆTS
              </span>
            )}
          </div>

          {/* Wishlist button — top-right, appears on hover */}
          <button
            type="button"
            onClick={handleWishlist}
            aria-label={
              isWishlisted
                ? `Retirer ${product.name} de la liste de souhaits`
                : `Ajouter ${product.name} à la liste de souhaits`
            }
            className={cn(
              'absolute top-2 right-2 z-10',
              'flex items-center justify-center w-8 h-8',
              'bg-white/90',
              'transition-opacity duration-200',
              isHovered ? 'opacity-100' : 'opacity-0',
              'focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black'
            )}
          >
            <Heart
              size={14}
              strokeWidth={1.5}
              aria-hidden="true"
              className={cn(
                'transition-colors duration-150',
                isWishlisted
                  ? 'fill-naets-black text-naets-black'
                  : 'fill-transparent text-naets-black'
              )}
            />
          </button>
        </div>
      </Link>

      {/* ── Info area ─────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-1.5 pt-3">

        {/* Row 1: collection + badges */}
        {(showCollection || product.badges.length > 0) && (
          <div className="flex items-center gap-2 flex-wrap min-h-[16px]">
            {showCollection && (
              <span
                className="font-sans text-naets-dark-gray uppercase leading-none shrink-0"
                style={{ fontSize: 10, letterSpacing: '0.1em' }}
              >
                {product.collection}
              </span>
            )}
            {product.badges.map((badge) => (
              <Badge key={badge} label={badge} />
            ))}
          </div>
        )}

        {/* Row 2: product name */}
        <Link
          href={`/produits/${product.slug}`}
          className="group/name focus-visible:outline-none focus-visible:underline"
          tabIndex={0}
        >
          <h3
            className={cn(
              'font-sans text-naets-black uppercase',
              'font-medium leading-tight',
              'hover-line'
            )}
            style={{ fontSize: 14, letterSpacing: '0.01em' }}
          >
            {product.name}
          </h3>
        </Link>

        {/* Row 3: price */}
        <p
          className="font-sans text-naets-black font-bold leading-none"
          style={{ fontSize: 15 }}
          aria-label={`Prix : ${formatPrice(product.price)}`}
        >
          {formatPrice(product.price)}
        </p>

        {/* Row 4: color swatches */}
        {product.colors.length > 0 && (
          <div
            className="flex items-center gap-1"
            aria-label={`Coloris disponibles : ${product.colors.join(', ')}`}
          >
            {product.colors.map((color) => (
              <ColorSwatch key={color} color={color} />
            ))}
          </div>
        )}

        {/* Row 5: Add to cart button */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={cn(
            'w-full mt-1',
            'px-0 py-2.5',
            'bg-naets-black text-naets-white',
            'font-sans uppercase font-medium',
            'transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2',
            product.inStock
              ? 'hover:bg-naets-near-black cursor-pointer'
              : 'opacity-40 cursor-not-allowed'
          )}
          style={{ fontSize: 11, letterSpacing: '0.1em' }}
          aria-label={
            product.inStock
              ? `Ajouter ${product.name} au panier`
              : `${product.name} — Rupture de stock`
          }
        >
          {product.inStock ? 'AJOUTER AU PANIER' : 'RUPTURE DE STOCK'}
        </button>
      </div>
    </article>
  );
}
