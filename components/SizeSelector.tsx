'use client';

import { cn } from '@/lib/utils';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSelect: (size: string) => void;
  unavailableSizes?: string[];
  category?: 'chaussures' | 'vetements' | 'accessoires';
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSelect,
  unavailableSizes = [],
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
        {sizes.map((size) => {
          const unavailable = unavailableSizes.includes(size);
          const selected = selectedSize === size;
          return (
            <button
              key={size}
              onClick={() => !unavailable && onSelect(size)}
              disabled={unavailable}
              aria-pressed={selected}
              aria-label={`Taille ${size}${unavailable ? ' (indisponible)' : ''}`}
              className={cn(
                'relative h-11 text-xs tracking-wide font-medium border transition-all duration-150',
                selected
                  ? 'bg-black text-white border-black'
                  : unavailable
                  ? 'border-naets-light-gray text-naets-mid-gray cursor-not-allowed bg-naets-off-white'
                  : 'border-naets-light-gray text-black hover:border-black'
              )}
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {size}
              {unavailable && (
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
