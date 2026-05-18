'use client';

import { cn } from '@/lib/utils';
import type { ProductSize } from '@/data/products';

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: string | null;
  onSelect: (size: string) => void;
  category?: 'chaussures' | 'vetements' | 'accessoires';
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSelect,
  category = 'chaussures',
}: SizeSelectorProps) {
  const isShoe = category === 'chaussures';

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[11px] tracking-[0.15em] uppercase font-medium"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          TAILLE{selectedSize ? ` — ${selectedSize}` : ''}
        </span>
        <a
          href="/tableau-des-tailles"
          className="text-[11px] tracking-[0.05em] underline text-naets-dark-gray hover:text-black transition-colors"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          Guide des tailles
        </a>
      </div>

      <div className={cn('grid gap-2', isShoe ? 'grid-cols-5' : 'grid-cols-6')}>
        {sizes.map(({ label, available }) => {
          const selected = selectedSize === label;
          return (
            <button
              key={label}
              onClick={() => available && onSelect(label)}
              disabled={!available}
              aria-pressed={selected}
              aria-label={`Taille ${label}${!available ? ' (indisponible)' : ''}`}
              className={cn(
                'relative h-11 text-xs tracking-wide font-medium border transition-all duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-1',
                selected
                  ? 'bg-black text-white border-black'
                  : !available
                  ? 'border-naets-light-gray text-naets-mid-gray cursor-not-allowed bg-naets-off-white'
                  : 'border-naets-light-gray text-black hover:border-black'
              )}
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {label}
              {!available && (
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="absolute w-full h-px bg-naets-mid-gray rotate-45 opacity-50" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
