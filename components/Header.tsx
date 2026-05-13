'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { mainNav, type NavLink } from '@/data/navigation';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import MegaMenu from '@/components/MegaMenu';

// ─── Types ────────────────────────────────────────────────────────────────────

interface HeaderProps {
  onSearchOpen?: () => void;
  onCartOpen?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header({ onSearchOpen, onCartOpen }: HeaderProps) {
  const { cartCount } = useCart();

  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  // Timer used to debounce hover-out so the cursor can travel between
  // the nav bar and the mega-menu panel without the menu flashing closed.
  const hoverLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scroll detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Body scroll lock (mobile menu) ────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // ── Close mega menu helper ────────────────────────────────────────────────
  const closeMegaMenu = useCallback(() => setMegaMenuOpen(null), []);

  // ── Click-outside to close mega menu ─────────────────────────────────────
  useEffect(() => {
    if (!megaMenuOpen) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeMegaMenu();
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [megaMenuOpen, closeMegaMenu]);

  // ── Hover logic (debounced) ───────────────────────────────────────────────
  const clearHoverTimer = () => {
    if (hoverLeaveTimer.current) {
      clearTimeout(hoverLeaveTimer.current);
      hoverLeaveTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearHoverTimer();
    hoverLeaveTimer.current = setTimeout(closeMegaMenu, 120);
  };

  const handleNavMouseEnter = (label: string, item: NavLink) => {
    if (!item.megaMenu) {
      // Nav item without a mega menu: close any open one after delay
      scheduleClose();
      return;
    }
    clearHoverTimer();
    setMegaMenuOpen(label);
  };

  const handleNavMouseLeave = () => scheduleClose();
  const handleMegaMenuMouseEnter = () => clearHoverTimer();
  const handleMegaMenuMouseLeave = () => scheduleClose();

  // ── Mobile accordion ──────────────────────────────────────────────────────
  const toggleMobileAccordion = (label: string) =>
    setMobileAccordion((prev) => (prev === label ? null : label));

  // ── Derived ───────────────────────────────────────────────────────────────
  const activeMegaSection = mainNav.find((n) => n.label === megaMenuOpen)?.megaMenu;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/*
       * The <header> element is the stacking context for the mega menu.
       * The mega menu panel uses `position: absolute; top: 100%` relative to
       * the header (not a nested child div), so the header itself must be the
       * nearest positioned ancestor. We achieve this by placing the MegaMenu
       * as a direct child of the header *outside* any inner wrapper.
       */}
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'bg-white',
          // Subtle bottom border replaces box-shadow on scroll (design: no shadows)
          scrolled ? 'border-b border-[#000]' : 'border-b border-transparent'
        )}
        role="banner"
      >
        {/* ── Top bar ────────────────────────────────────────────────────── */}
        {/*
         * 28 px tall, hidden on mobile.
         * Left: brand tagline in micro-text
         * Right: FR | EN language switcher
         */}
        <div
          className="hidden md:flex items-center justify-between h-7 px-8 border-b border-[#E5E5E0] bg-white"
          aria-label="Information de marque et sélection de langue"
        >
          {/* Left — tagline */}
          <span
            className="font-naets-micro"
            aria-label="Engineered Running Performance"
          >
            ENGINEERED RUNNING PERFORMANCE
          </span>

          {/* Right — language switcher */}
          <nav aria-label="Sélection de langue">
            <ul className="flex items-center gap-0" role="list">
              {(['FR', 'EN'] as const).map((lang, i) => (
                <React.Fragment key={lang}>
                  {i > 0 && (
                    <li aria-hidden="true" className="select-none">
                      <span className="font-naets-micro text-[#BDBDB7] mx-1.5">|</span>
                    </li>
                  )}
                  <li>
                    <button
                      type="button"
                      className={cn(
                        'font-naets-micro transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:underline',
                        i === 0
                          ? 'text-black font-semibold'
                          : 'text-[#707070] hover:text-black'
                      )}
                      aria-current={i === 0 ? 'true' : undefined}
                    >
                      {lang}
                    </button>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Main header row ────────────────────────────────────────────── */}
        {/*
         * Height: 64 px.
         * Left: NÆTS logotype in Bebas Neue, 38 px, tracking-wide.
         * Right (desktop): Search · Account · Cart icons.
         * Right (mobile): Search · Cart · Hamburger.
         */}
        <div className="flex items-center justify-between h-16 px-6 md:px-8 border-b border-[#E5E5E0]">
          {/* Logotype */}
          <Link
            href="/"
            aria-label="NÆTS — Retour à l'accueil"
            className={cn(
              'font-condensed text-black leading-none tracking-wide',
              'text-[38px] md:text-[40px]',
              'hover:opacity-75 transition-opacity duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
            )}
          >
            NÆTS
          </Link>

          {/* Desktop icon row */}
          <div
            className="hidden md:flex items-center"
            role="toolbar"
            aria-label="Actions rapides"
          >
            {/* Search */}
            <button
              type="button"
              onClick={onSearchOpen}
              aria-label="Ouvrir la recherche"
              className={cn(
                'flex items-center justify-center w-10 h-10',
                'text-black hover:bg-[#F5F5F2]',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black'
              )}
            >
              <Search size={18} strokeWidth={1.25} aria-hidden="true" />
            </button>

            {/* Account */}
            <Link
              href="/account"
              aria-label="Mon compte"
              className={cn(
                'flex items-center justify-center w-10 h-10',
                'text-black hover:bg-[#F5F5F2]',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black'
              )}
            >
              <User size={18} strokeWidth={1.25} aria-hidden="true" />
            </Link>

            {/* Cart */}
            <button
              type="button"
              onClick={onCartOpen}
              aria-label={`Panier — ${cartCount} article${cartCount !== 1 ? 's' : ''}`}
              className={cn(
                'relative flex items-center justify-center w-10 h-10',
                'text-black hover:bg-[#F5F5F2]',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black'
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.25} aria-hidden="true" />
              {/* Badge */}
              <CartBadge count={cartCount} />
            </button>
          </div>

          {/* Mobile icon row */}
          <div className="flex md:hidden items-center">
            {/* Search */}
            <button
              type="button"
              onClick={onSearchOpen}
              aria-label="Ouvrir la recherche"
              className="flex items-center justify-center w-10 h-10 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <Search size={18} strokeWidth={1.25} aria-hidden="true" />
            </button>

            {/* Cart */}
            <button
              type="button"
              onClick={onCartOpen}
              aria-label={`Panier — ${cartCount} article${cartCount !== 1 ? 's' : ''}`}
              className="relative flex items-center justify-center w-10 h-10 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <ShoppingBag size={18} strokeWidth={1.25} aria-hidden="true" />
              <CartBadge count={cartCount} />
            </button>

            {/* Hamburger / Close */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className="flex items-center justify-center w-10 h-10 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              {mobileMenuOpen ? (
                <X size={20} strokeWidth={1.25} aria-hidden="true" />
              ) : (
                <Menu size={20} strokeWidth={1.25} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* ── Desktop nav bar ────────────────────────────────────────────── */}
        {/*
         * One row of nav items. Active item: 3 px solid black bottom border.
         * Hover: 3 px light-gray bottom border (line extension effect).
         * Items with a mega menu show a tiny chevron that rotates when open.
         */}
        <nav
          className="hidden md:block border-b border-[#E5E5E0]"
          aria-label="Navigation principale"
        >
          <ul className="flex items-stretch px-8" role="menubar">
            {mainNav.map((item) => {
              const isActive = megaMenuOpen === item.label;
              return (
                <li
                  key={item.label}
                  role="none"
                  onMouseEnter={() => handleNavMouseEnter(item.label, item)}
                  onMouseLeave={handleNavMouseLeave}
                >
                  <button
                    type="button"
                    role="menuitem"
                    aria-haspopup={item.megaMenu ? 'true' : undefined}
                    aria-expanded={item.megaMenu ? isActive : undefined}
                    onClick={() => {
                      if (item.megaMenu) {
                        setMegaMenuOpen(isActive ? null : item.label);
                      }
                    }}
                    className={cn(
                      // Layout
                      'relative flex items-center gap-1',
                      'h-11 px-4',
                      // Typography
                      'font-naets-label text-[11px] text-black whitespace-nowrap',
                      // Focus
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black',
                      // Bottom indicator pseudo-element via after:
                      'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px]',
                      'after:transition-colors after:duration-150',
                      isActive
                        ? 'after:bg-black'
                        : 'after:bg-transparent hover:after:bg-[#E5E5E0]'
                    )}
                  >
                    {item.label}
                    {item.megaMenu && (
                      <ChevronDown
                        size={10}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className={cn(
                          'text-[#707070] transition-transform duration-150',
                          isActive && 'rotate-180'
                        )}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Mega Menu ──────────────────────────────────────────────────── */}
        {/*
         * The mega menu panel uses position: absolute relative to the header.
         * We wrap it in a div that catches mouse events so hovering from the
         * nav bar into the panel doesn't trigger the close timer.
         */}
        <div
          aria-live="polite"
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          <MegaMenu
            section={activeMegaSection}
            isOpen={megaMenuOpen !== null}
            onClose={closeMegaMenu}
          />
        </div>
      </header>

      {/* ── Mobile full-screen slide-in menu ───────────────────────────────── */}
      {/*
       * Slides in from the left.
       * Contains nav items as accordions and bottom account/language links.
       * z-index: 40 (below header at z-50 but above page content).
       */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation mobile"
        aria-hidden={!mobileMenuOpen}
        className={cn(
          'fixed inset-0 z-40 bg-white flex flex-col md:hidden',
          'transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Mirror of main header row (logo + close) */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-[#E5E5E0] shrink-0">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="NÆTS — Retour à l'accueil"
            className="font-condensed text-black text-[38px] leading-none tracking-wide"
          >
            NÆTS
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fermer le menu"
            className="flex items-center justify-center w-10 h-10 text-black"
          >
            <X size={20} strokeWidth={1.25} aria-hidden="true" />
          </button>
        </div>

        {/* Navigation list */}
        <nav
          aria-label="Navigation mobile"
          className="flex-1 overflow-y-auto overscroll-contain"
        >
          <ul role="list">
            {mainNav.map((item) => {
              const isExpanded = mobileAccordion === item.label;
              const hasSub = !!item.megaMenu;

              return (
                <li key={item.label} className="border-b border-[#E5E5E0]">
                  {hasSub ? (
                    <>
                      {/* Accordion trigger */}
                      <button
                        type="button"
                        onClick={() => toggleMobileAccordion(item.label)}
                        aria-expanded={isExpanded}
                        aria-controls={`mobile-acc-${item.label.replace(/\s+/g, '-')}`}
                        className={cn(
                          'w-full flex items-center justify-between',
                          'h-14 px-6',
                          'font-naets-label text-[13px] text-black text-left',
                          'focus-visible:outline-none focus-visible:bg-[#F5F5F2]'
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          strokeWidth={1.25}
                          aria-hidden="true"
                          className={cn(
                            'text-[#707070] transition-transform duration-200 shrink-0',
                            isExpanded && 'rotate-180'
                          )}
                        />
                      </button>

                      {/* Accordion body */}
                      <div
                        id={`mobile-acc-${item.label.replace(/\s+/g, '-')}`}
                        role="region"
                        aria-label={`Sous-menu ${item.label}`}
                        className={cn(
                          'overflow-hidden bg-[#F5F5F2]',
                          'transition-[max-height] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
                          isExpanded ? 'max-h-[600px]' : 'max-h-0'
                        )}
                      >
                        <div className="px-6 py-5 space-y-6">
                          {item.megaMenu?.columns.map((col) => (
                            <div key={col.number}>
                              {/* Column header row */}
                              <div className="flex items-center gap-2 mb-3">
                                <span
                                  className="section-number shrink-0"
                                  aria-hidden="true"
                                >
                                  {col.number}
                                </span>
                                <span className="font-naets-micro text-black">
                                  {col.title}
                                </span>
                              </div>

                              {/* Separator */}
                              <div
                                className="h-px bg-[#E5E5E0] mb-3"
                                aria-hidden="true"
                              />

                              {/* Links */}
                              <ul role="list" className="space-y-3 pl-8">
                                {col.items.map((sub) => (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={cn(
                                        'group flex items-baseline gap-2',
                                        'text-[13px] font-light text-black',
                                        'font-[family-name:var(--font-inter)]'
                                      )}
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="text-[#BDBDB7] text-[11px] shrink-0"
                                      >
                                        →
                                      </span>
                                      <span className="border-b border-transparent group-hover:border-black transition-colors duration-150">
                                        {sub.label}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>

                              {/* Optional note */}
                              {col.note && (
                                <p className="mt-3 pl-8 text-[10px] italic text-[#707070] font-[family-name:var(--font-inter)]">
                                  {col.note}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Simple link — no sub-menu
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center h-14 px-6',
                        'font-naets-label text-[13px] text-black',
                        'focus-visible:outline-none focus-visible:bg-[#F5F5F2]'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile bottom utilities */}
          <div className="px-6 py-6 border-t border-[#E5E5E0] mt-auto">
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-3 font-naets-micro text-black hover:text-[#707070] transition-colors duration-150"
            >
              <User size={16} strokeWidth={1.25} aria-hidden="true" />
              MON COMPTE
            </Link>

            {/* Language switcher */}
            <div
              className="flex items-center gap-0 mt-4"
              aria-label="Sélection de langue"
            >
              {(['FR', 'EN'] as const).map((lang, i) => (
                <React.Fragment key={lang}>
                  {i > 0 && (
                    <span
                      className="font-naets-micro text-[#BDBDB7] mx-1.5 select-none"
                      aria-hidden="true"
                    >
                      |
                    </span>
                  )}
                  <button
                    type="button"
                    className={cn(
                      'font-naets-micro transition-colors duration-150',
                      i === 0
                        ? 'text-black font-semibold'
                        : 'text-[#707070] hover:text-black'
                    )}
                    aria-current={i === 0 ? 'true' : undefined}
                  >
                    {lang}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile backdrop — sits behind the slide-in panel (z-30 vs z-40) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

// ─── CartBadge helper ─────────────────────────────────────────────────────────

/** Small square number badge on top-right of the cart icon. */
function CartBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span
      aria-hidden="true"
      className={cn(
        'absolute top-1.5 right-1.5',
        'flex items-center justify-center',
        'w-[14px] h-[14px]',
        'bg-black text-white',
        'text-[9px] font-semibold leading-none tracking-tight'
      )}
    >
      {count > 99 ? '99+' : count}
    </span>
  );
}
