'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { shopMegaMenuData } from '@/data/navigation';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ShopMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ShopMegaMenu({ isOpen, onClose }: ShopMegaMenuProps) {
  const [activeHandle, setActiveHandle] = useState<string>('homme');
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset to HOMME on every open
  useEffect(() => {
    if (isOpen) setActiveHandle('homme');
  }, [isOpen]);

  // Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    },
    [isOpen, onClose]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Focus first focusable element on open
  useEffect(() => {
    if (isOpen && panelRef.current) {
      const first = panelRef.current.querySelector<HTMLElement>(
        'button:not([disabled]), a[href]'
      );
      first?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="overlay-backdrop" aria-hidden="true" onClick={onClose} />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        aria-label="Menu Shop NÆTS"
        className={cn(
          'absolute left-0 right-0 top-full z-50',
          'bg-white border-b border-black',
          'animate-slide-in-down'
        )}
      >
        {/* ── Micro top bar ──────────────────────────────────────────────── */}
        <div className="hidden md:flex items-center justify-between px-8 h-7 border-b border-[#E5E5E0] bg-[#F5F5F2]">
          <span className="font-naets-micro text-[#BDBDB7] tracking-[0.25em]">
            NÆTS DIGITAL PLATFORM
          </span>
          <span className="font-naets-micro text-[#BDBDB7] tracking-[0.2em]">
            SHOP SYSTEM / 01
          </span>
        </div>

        {/* ── Main layout: sidebar + content ─────────────────────────────── */}
        <div className="flex">

          {/* ── Left sidebar ── gender tabs ─────────────────────────────── */}
          <aside
            className="hidden md:flex flex-col shrink-0 border-r border-[#D8D8D2]"
            style={{ width: 300 }}
            aria-label="Sélection genre"
          >
            <div role="tablist" aria-label="Genre" className="flex-1">
              {shopMegaMenuData.categories.map((cat, idx) => {
                const isActive = activeHandle === cat.handle;
                return (
                  <button
                    key={cat.handle}
                    type="button"
                    role="tab"
                    id={`shop-tab-${cat.handle}`}
                    aria-selected={isActive}
                    aria-controls={`shop-panel-${cat.handle}`}
                    onMouseEnter={() => setActiveHandle(cat.handle)}
                    onClick={() => setActiveHandle(cat.handle)}
                    className={cn(
                      'flex items-center justify-between w-full px-8 py-7',
                      'text-left leading-none',
                      'font-condensed text-[26px] tracking-[0.1em]',
                      'transition-all duration-150',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black',
                      idx < shopMegaMenuData.categories.length - 1 && 'border-b border-[#D8D8D2]',
                      isActive
                        ? 'bg-[#111111] text-white'
                        : 'bg-white text-black hover:bg-[#F5F5F2]'
                    )}
                  >
                    <span>{cat.label}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className={cn(
                        'shrink-0 transition-transform duration-150',
                        isActive && 'translate-x-1'
                      )}
                    >
                      <path
                        d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* Sidebar footer shortcut */}
            <div className="px-8 py-5 border-t border-[#E5E5E0] mt-auto">
              <p className="font-naets-micro text-[#BDBDB7] tracking-[0.2em] mb-2">
                TOUS LES PRODUITS
              </p>
              <Link
                href="/shop"
                onClick={onClose}
                className="group flex items-center gap-1.5 font-naets-micro text-[10px] text-black hover:text-[#555] transition-colors"
              >
                VOIR LE SHOP
                <ArrowRight
                  size={10}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </aside>

          {/* ── Right content area ──────────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {shopMegaMenuData.categories.map((cat) => (
              <div
                key={cat.handle}
                id={`shop-panel-${cat.handle}`}
                role="tabpanel"
                aria-labelledby={`shop-tab-${cat.handle}`}
                className={activeHandle === cat.handle ? 'block' : 'hidden'}
              >
                {/* ── 4-column grid ─────────────────────────────────────── */}
                <div className="grid grid-cols-4">
                  {cat.columns.map((col, colIdx) => (
                    <div
                      key={col.title}
                      className={cn(
                        'px-7 py-8',
                        colIdx < cat.columns.length - 1 && 'border-r border-[#E5E5E0]'
                      )}
                    >
                      {/* Column title */}
                      <p
                        className="font-naets-label text-black text-[11px] mb-3 tracking-[0.22em]"
                        style={{ fontWeight: 700 }}
                      >
                        {col.title}
                      </p>
                      <div className="h-px bg-[#D8D8D2] mb-4" aria-hidden="true" />

                      {/* Links */}
                      <ul role="list" className="space-y-3">
                        {col.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={onClose}
                              className={cn(
                                'group flex items-baseline gap-2',
                                'text-[14px] font-light text-[#1a1a1a] leading-snug',
                                'font-[family-name:var(--font-inter)]',
                                'transition-colors duration-150',
                                'focus-visible:outline-none focus-visible:underline'
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className="text-[#BDBDB7] text-[11px] shrink-0 transition-all duration-150 group-hover:text-black group-hover:translate-x-0.5"
                              >
                                →
                              </span>
                              <span className="relative">
                                <span
                                  aria-hidden="true"
                                  className="absolute bottom-0 left-0 h-px w-0 bg-black transition-[width] duration-200 ease-out group-hover:w-full"
                                />
                                {link.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* ── Promo blocks ──────────────────────────────────────── */}
                <div className="grid grid-cols-2 border-t border-[#E5E5E0]">
                  {shopMegaMenuData.promos.map((promo, i) => (
                    <Link
                      key={promo.href}
                      href={promo.href}
                      onClick={onClose}
                      className={cn(
                        'group relative flex items-end overflow-hidden h-28',
                        'bg-[#E6E6E2]',
                        i === 0 && 'border-r border-[#D8D8D2]',
                        'hover:bg-[#DDDDD8] transition-colors duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black'
                      )}
                      aria-label={promo.title}
                    >
                      {/* Dot pattern */}
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                          backgroundSize: '18px 18px',
                        }}
                        aria-hidden="true"
                      />
                      {/* Corner marks */}
                      <span className="absolute top-3 left-4 w-3 h-3 border-t border-l border-black/20" aria-hidden="true" />
                      <span className="absolute top-3 right-4 w-3 h-3 border-t border-r border-black/20" aria-hidden="true" />

                      {/* Content */}
                      <div className="relative z-10 flex items-end justify-between w-full px-6 pb-4">
                        <div>
                          <p className="font-naets-micro text-black/40 mb-1.5">
                            {i === 0 ? 'COLLECTION' : 'DROP'}
                          </p>
                          <p
                            className="font-condensed text-black text-[15px] leading-none tracking-[0.04em]"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                          >
                            {promo.title}
                          </p>
                        </div>
                        <ArrowRight
                          size={14}
                          strokeWidth={1.25}
                          aria-hidden="true"
                          className="text-black/40 shrink-0 ml-4 transition-all duration-200 group-hover:text-black group-hover:translate-x-1"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
