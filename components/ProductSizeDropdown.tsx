'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { ProductSize } from '@/data/products';

interface ProductSizeDropdownProps {
  sizes: ProductSize[];
  selected: string | null;
  onSelect: (size: string) => void;
  error?: boolean;
  category?: 'chaussures' | 'vetements' | 'accessoires';
}

export default function ProductSizeDropdown({
  sizes,
  selected,
  onSelect,
  error = false,
  category,
}: ProductSizeDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const label = category === 'chaussures' ? 'POINTURE' : 'TAILLE';
  const placeholder = `Sélectionner ${category === 'chaussures' ? 'une pointure' : 'une taille'}`;
  const selectedSize = sizes.find((s) => s.label === selected);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-naets-label text-naets-black text-[10px] tracking-[0.2em] uppercase">
          {label}
        </span>
        {error && (
          <span className="font-naets-label text-red-600 text-[10px] tracking-[0.15em] uppercase">
            Veuillez choisir une taille
          </span>
        )}
      </div>

      <div ref={containerRef} className="relative">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            'w-full flex items-center justify-between px-4 h-11',
            'bg-white border text-left transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-naets-black',
            error
              ? 'border-red-500 border-l-2'
              : open
              ? 'border-naets-black'
              : 'border-[#D0D0C8] hover:border-naets-black'
          )}
        >
          <span
            className={cn(
              'font-sans text-[12px] tracking-[0.05em]',
              selected ? 'text-naets-black' : 'text-naets-mid-gray'
            )}
          >
            {selected || placeholder}
          </span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            aria-hidden="true"
            className={cn('transition-transform duration-200 shrink-0', open && 'rotate-180')}
          >
            <path d="M1 1L5 5L9 1" stroke="#111" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dropdown list */}
        {open && (
          <ul
            role="listbox"
            aria-label={label}
            className="absolute z-20 top-full left-0 w-full mt-px bg-white border border-naets-black shadow-[0_4px_16px_rgba(0,0,0,0.08)] max-h-60 overflow-y-auto"
          >
            {sizes.map((size) => (
              <li
                key={size.label}
                role="option"
                aria-selected={selected === size.label}
                aria-disabled={!size.available}
                onClick={() => {
                  if (!size.available) return;
                  onSelect(size.label);
                  setOpen(false);
                }}
                className={cn(
                  'flex items-center justify-between px-4 h-10 text-[12px] tracking-[0.05em] transition-colors duration-100',
                  size.available
                    ? selected === size.label
                      ? 'bg-naets-black text-white font-medium cursor-pointer'
                      : 'text-naets-black cursor-pointer hover:bg-[#F5F5F2]'
                    : 'text-naets-mid-gray cursor-not-allowed'
                )}
              >
                <span className={cn('font-sans', !size.available && 'line-through')}>
                  {size.label}
                </span>
                {!size.available && (
                  <span className="font-naets-label text-[9px] tracking-[0.15em] uppercase text-naets-mid-gray">
                    Indisponible
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedSize && selectedSize.available === false && (
        <p className="font-sans text-[11px] text-red-600">Cette taille n'est pas disponible.</p>
      )}
    </div>
  );
}
