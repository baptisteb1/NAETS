'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { type MegaMenuSection } from '@/data/navigation';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

interface MegaMenuProps {
  /** Column data for the currently-hovered nav section. */
  section: MegaMenuSection | undefined;
  /** Whether the panel should be visible. */
  isOpen: boolean;
  /** Callback to close the panel (Escape, click-outside, link click). */
  onClose: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MegaMenu({ section, isOpen, onClose }: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // ── Keyboard: Escape closes the panel ────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // ── Tab-focus management ─────────────────────────────────────────────────
  // When the panel opens, move focus to the first focusable element so
  // keyboard users can navigate links without tabbing through the backdrop.
  useEffect(() => {
    if (isOpen && panelRef.current) {
      const firstFocusable = panelRef.current.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }
  }, [isOpen, section]);

  // Nothing to render when closed or no section data
  if (!isOpen || !section) return null;

  // Determine grid class based on column count
  const colCount = section.columns.length;
  const gridClass =
    colCount === 1
      ? 'grid-cols-1 max-w-xs'
      : colCount === 2
      ? 'grid-cols-2'
      : colCount === 3
      ? 'grid-cols-3'
      : 'grid-mega'; // 4-column custom grid from tailwind.config.ts

  return (
    <>
      {/*
       * Translucent backdrop drawn behind the panel.
       * Uses the overlay-backdrop utility from globals.css which is
       * position:fixed; inset:0; z-index:40 — below the header (z-50)
       * but above the rest of the page.
       */}
      <div
        className="overlay-backdrop"
        aria-hidden="true"
        onClick={onClose}
      />

      {/*
       * The mega menu panel itself.
       *
       * Positioning: `absolute left-0 right-0 top-full` stretches the panel
       * full-width directly beneath the header element (which must be the
       * nearest positioned ancestor — handled in Header.tsx).
       *
       * z-index: 50 — same level as the header, above the backdrop (z-40).
       *
       * Entrance animation: animate-slide-in-down (defined in globals.css)
       * translates from Y(-8px, opacity 0) → (0, opacity 1) in 0.2 s.
       */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        aria-label="Navigation étendue"
        className={cn(
          // Positioning
          'absolute left-0 right-0 top-full z-50',
          // Visual
          'bg-white border-b border-black',
          // Entrance animation
          'animate-slide-in-down'
        )}
      >
        {/* ── Inner container ──────────────────────────────────────────── */}
        {/*
         * max-w-screen-xl keeps content from stretching too wide on large
         * monitors. px-20 gives 80 px horizontal padding; py-12 gives 48 px
         * top/bottom padding — matching the design spec.
         */}
        <div className="max-w-screen-xl mx-auto px-8 md:px-20 py-12">
          <div className={cn('grid gap-0', gridClass)}>
            {section.columns.map((col, colIndex) => (
              <div
                key={col.number}
                className={cn(
                  // Horizontal padding; first column flush-left, last flush-right
                  'px-8 first:pl-0 last:pr-0',
                  // Vertical divider between columns
                  colIndex < section.columns.length - 1 &&
                    'border-r border-[#E5E5E0]'
                )}
              >
                {/* ── Column header ────────────────────────────────────── */}
                <div className="flex items-center gap-3 mb-3">
                  {/*
                   * Section number badge: 20×20 px black square, white text,
                   * 10 px font. Uses `.section-number` utility from globals.css.
                   */}
                  <span
                    className="section-number shrink-0"
                    aria-hidden="true"
                  >
                    {col.number}
                  </span>

                  {/*
                   * Column title: 11 px uppercase, letter-spacing 0.15 em.
                   * Uses `.font-naets-label` utility from globals.css.
                   */}
                  <span className="font-naets-label text-black">
                    {col.title}
                  </span>
                </div>

                {/* ── Separator ────────────────────────────────────────── */}
                <div
                  className="h-px bg-[#E5E5E0] mb-5"
                  aria-hidden="true"
                />

                {/* ── Link list ─────────────────────────────────────────── */}
                <ul role="list" className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'group flex items-baseline gap-2',
                          'text-[13px] font-light text-black leading-snug',
                          'font-[family-name:var(--font-inter)]',
                          'transition-colors duration-150',
                          'focus-visible:outline-none focus-visible:underline'
                        )}
                      >
                        {/*
                         * Arrow prefix — shifts subtly on hover to suggest
                         * motion (0.5 px translate-x via Tailwind group-hover).
                         */}
                        <span
                          aria-hidden="true"
                          className={cn(
                            'text-[#BDBDB7] text-[11px] shrink-0',
                            'transition-all duration-150',
                            'group-hover:text-black group-hover:translate-x-0.5'
                          )}
                        >
                          →
                        </span>

                        {/*
                         * Label with animated underline: a 0-width absolute
                         * pseudo-element grows to full width on hover.
                         * This is the "line extension" hover pattern from the
                         * design system.
                         */}
                        <span className="relative">
                          {/* Animated underline */}
                          <span
                            aria-hidden="true"
                            className={cn(
                              'absolute bottom-0 left-0 h-px w-0 bg-black',
                              'transition-[width] duration-200 ease-out',
                              'group-hover:w-full'
                            )}
                          />
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* ── Optional note ────────────────────────────────────── */}
                {col.note && (
                  <p
                    className={cn(
                      'mt-5 text-[10px] italic text-[#707070] leading-relaxed tracking-wide',
                      'font-[family-name:var(--font-inter)]'
                    )}
                  >
                    {col.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
