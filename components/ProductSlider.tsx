'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

// ─── Placeholder slide ────────────────────────────────────────────────────────

function SlidePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#EBEBEA] select-none">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <span
        className="font-condensed text-[#C0C0B8] uppercase"
        style={{ fontSize: 'clamp(14px, 2vw, 22px)', letterSpacing: '0.2em' }}
      >
        {label}
      </span>
      <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-black/12" aria-hidden="true" />
      <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-black/12" aria-hidden="true" />
      <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-black/12" aria-hidden="true" />
      <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-black/12" aria-hidden="true" />
    </div>
  );
}

// ─── Nav arrow ────────────────────────────────────────────────────────────────

function NavArrow({ dir, onClick }: { dir: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Image précédente' : 'Image suivante'}
      className={cn(
        'absolute top-1/2 -translate-y-1/2 z-10',
        'w-9 h-9 flex items-center justify-center',
        'border border-black/12 bg-white/85 hover:bg-white',
        'transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-naets-black',
        dir === 'prev' ? 'left-3' : 'right-3'
      )}
    >
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" aria-hidden="true">
        {dir === 'prev' ? (
          <path d="M7.5 1L1.5 7L7.5 13" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M1.5 1L7.5 7L1.5 13" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

interface ProductSliderProps {
  images: string[];
  productName: string;
}

const SLIDE_COUNT = 3; // minimum number of visible slides (placeholder mode)

export default function ProductSlider({ images, productName }: ProductSliderProps) {
  const count = Math.max(images.length, SLIDE_COUNT);
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStart = useRef<number | null>(null);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + count) % count), [count]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % count), [count]);

  // Keyboard navigation (only when lightbox is closed)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') setLightboxOpen(false);
        return;
      }
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [prev, next, lightboxOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 42) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  const isPlaceholder = (src: string) => src.startsWith('/images/placeholder');

  return (
    <div className="flex flex-col gap-3">

      {/* Micro top label */}
      <div className="flex items-center justify-between px-0.5">
        <span className="font-naets-micro text-naets-mid-gray text-[9px] tracking-[0.22em]">
          PRODUCT VIEW
        </span>
        <span className="font-naets-micro text-naets-mid-gray text-[9px] tracking-[0.22em]">
          {String(current + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
      </div>

      {/* ── Main slider ─────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '4/5' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-label={`Galerie produit — ${productName}`}
        aria-roledescription="slider"
      >
        {/* Track */}
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            width: `${count * 100}%`,
            transform: `translateX(-${current * (100 / count)}%)`,
          }}
        >
          {Array.from({ length: count }).map((_, i) => {
            const src = images[i];
            return (
              <div
                key={i}
                role="group"
                aria-label={`Vue ${i + 1} sur ${count}`}
                aria-roledescription="slide"
                className="relative h-full"
                style={{ width: `${100 / count}%` }}
              >
                {src && !isPlaceholder(src) ? (
                  <img
                    src={src}
                    alt={`${productName} — vue ${i + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                ) : (
                  <SlidePlaceholder label={`VUE ${String(i + 1).padStart(2, '0')}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Prev / Next */}
        {count > 1 && (
          <>
            <NavArrow dir="prev" onClick={prev} />
            <NavArrow dir="next" onClick={next} />
          </>
        )}

        {/* Expand button */}
        <button
          onClick={() => setLightboxOpen(true)}
          aria-label={`Agrandir — ${productName}`}
          className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center bg-white/85 border border-black/12 hover:bg-white transition-colors"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M7 1H10V4M1 7V10H4M10 1L6 5M1 10L5 6" stroke="#111" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ── Dots ───────────────────────────────────────────────────────── */}
      {count > 1 && (
        <div className="flex items-center justify-center gap-2.5" role="tablist" aria-label="Navigation galerie">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={current === i}
              aria-label={`Vue ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={cn(
                'h-px transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-naets-black focus-visible:ring-offset-1',
                current === i
                  ? 'w-8 bg-naets-black'
                  : 'w-4 bg-naets-light-gray hover:bg-naets-mid-gray'
              )}
            />
          ))}
        </div>
      )}

      {/* ── Thumbnails ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: Math.min(count, 3) }).map((_, i) => {
          const src = images[i];
          return (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Vue ${i + 1} — ${productName}`}
              className={cn(
                'relative overflow-hidden transition-all duration-150',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-naets-black',
                current === i
                  ? 'ring-1 ring-naets-black'
                  : 'ring-1 ring-naets-light-gray hover:ring-naets-mid-gray'
              )}
              style={{ aspectRatio: '1/1' }}
            >
              {src && !isPlaceholder(src) ? (
                <img src={src} alt={`${productName} — miniature ${i + 1}`} className="w-full h-full object-cover" />
              ) : (
                <SlidePlaceholder label={`VUE ${String(i + 1).padStart(2, '0')}`} />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Lightbox ────────────────────────────────────────────────────── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-8 font-naets-label text-white/50 hover:text-white text-[10px] tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            onClick={() => setLightboxOpen(false)}
            aria-label="Fermer"
          >
            FERMER ✕
          </button>
          <div
            className="w-full max-w-2xl mx-8 relative"
            style={{ aspectRatio: '4/5' }}
            onClick={(e) => e.stopPropagation()}
          >
            {images[current] && !isPlaceholder(images[current]) ? (
              <img src={images[current]} alt={productName} className="w-full h-full object-cover" />
            ) : (
              <SlidePlaceholder label="NÆTS" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
