'use client';

import { useState } from 'react';
import Link from 'next/link';
import { footerNav, legalNav } from '@/data/navigation';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FooterColumn {
  title: string;
  items: { label: string; href: string }[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const columns: FooterColumn[] = [
  { title: 'PRODUITS',     items: footerNav.produits    },
  { title: 'DROP',          items: footerNav.collections },
  { title: 'ASSISTANCE',   items: footerNav.assistance  },
  { title: 'NÆTS',         items: footerNav.naets       },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Graphic corner marks rendered as absolute-positioned spans */
function CornerMarks() {
  const base = 'absolute w-3 h-3';
  const border = 'border-naets-black';
  return (
    <>
      {/* top-left */}
      <span
        className={`${base} top-0 left-0 border-t border-l ${border}`}
        aria-hidden="true"
      />
      {/* top-right */}
      <span
        className={`${base} top-0 right-0 border-t border-r ${border}`}
        aria-hidden="true"
      />
      {/* bottom-left */}
      <span
        className={`${base} bottom-0 left-0 border-b border-l ${border}`}
        aria-hidden="true"
      />
      {/* bottom-right */}
      <span
        className={`${base} bottom-0 right-0 border-b border-r ${border}`}
        aria-hidden="true"
      />
    </>
  );
}

/** Dot pattern block via inline style (radial-gradient) */
function DotBlock() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 80,
        height: 80,
        backgroundImage: 'radial-gradient(circle, #BDBDB7 1px, transparent 1px)',
        backgroundSize: '8px 8px',
        flexShrink: 0,
      }}
    />
  );
}

/** Single link column — desktop */
function DesktopColumn({ column }: { column: FooterColumn }) {
  return (
    <div className="flex flex-col gap-0 min-w-0">
      {/* Column title */}
      <p
        className="pb-2 mb-3 border-b border-naets-light-gray font-sans uppercase text-naets-dark-gray"
        style={{ fontSize: 11, letterSpacing: '0.15em', fontWeight: 500 }}
      >
        {column.title}
      </p>

      {/* Links */}
      <ul className="flex flex-col gap-2" role="list">
        {column.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group inline-flex items-start gap-1.5 font-sans text-naets-dark-gray hover:text-naets-black transition-colors duration-150"
              style={{ fontSize: 13 }}
            >
              {/* Arrow prefix */}
              <span
                className="mt-px shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-150"
                aria-hidden="true"
              >
                →
              </span>
              {/* Label with underline effect */}
              <span className="border-b border-transparent group-hover:border-naets-black transition-all duration-150 leading-snug">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Accordion row for mobile */
function MobileAccordion({ column }: { column: FooterColumn }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-naets-light-gray">
      {/* Accordion trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 px-0 font-sans text-naets-black"
        aria-expanded={open}
      >
        <span
          className="uppercase tracking-[0.15em] font-medium"
          style={{ fontSize: 11 }}
        >
          {column.title}
        </span>
        {/* Chevron */}
        <span
          className={`text-naets-dark-gray transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
          style={{ fontSize: 14, lineHeight: 1 }}
        >
          ↓
        </span>
      </button>

      {/* Collapsible links */}
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-64 pb-4' : 'max-h-0'}`}
      >
        <ul className="flex flex-col gap-3" role="list">
          {column.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group inline-flex items-start gap-2 font-sans text-naets-dark-gray hover:text-naets-black transition-colors duration-150"
                style={{ fontSize: 13 }}
              >
                <span className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-150" aria-hidden="true">
                  →
                </span>
                <span className="border-b border-transparent group-hover:border-naets-black transition-all duration-150">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      className="bg-naets-off-white text-naets-black"
      role="contentinfo"
    >
      {/* ── Main content wrapper ─────────────────────────────────────────── */}
      <div className="px-4 md:px-8 pt-8 pb-0">

        {/* Framed inner area with corner marks */}
        <div
          className="relative border border-naets-black"
          style={{ borderColor: '#000' }}
        >
          <CornerMarks />

          {/* ── Desktop layout ─────────────────────────────────────────── */}
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-0">

            {/* Left identity column */}
            <div
              className="flex flex-col justify-between p-8 pr-10 border-r"
              style={{ borderColor: '#E5E5E0', minHeight: 340 }}
            >
              {/* Logo block */}
              <div>
                <p
                  className="font-condensed text-naets-black leading-none select-none"
                  style={{ fontSize: 48, fontFamily: 'var(--font-bebas), Oswald, Arial Narrow, sans-serif' }}
                >
                  NÆTS
                </p>
                <p
                  className="mt-1 font-sans uppercase text-naets-dark-gray"
                  style={{ fontSize: 11, letterSpacing: '0.15em', fontWeight: 500 }}
                >
                  ENGINEERED RUNNING PERFORMANCE
                </p>
              </div>

              {/* Dot pattern */}
              <div className="my-6">
                <DotBlock />
              </div>

              {/* Manifesto text */}
              <div>
                <p
                  className="font-sans text-naets-dark-gray uppercase leading-relaxed"
                  style={{ fontSize: 12, letterSpacing: '0.05em', lineHeight: 1.6 }}
                >
                  ARCHITECTURE,
                  <br />
                  DIFFUSION,
                  <br />
                  LOGISTIQUE
                  <br />
                  ET STRATÉGIE
                  <br />
                  DE LANCEMENT
                </p>
              </div>
            </div>

            {/* 4 link columns with vertical separators */}
            {columns.map((col, i) => (
              <div
                key={col.title}
                className={`p-8 ${i < columns.length - 1 ? 'border-r' : ''}`}
                style={{ borderColor: '#E5E5E0' }}
              >
                <DesktopColumn column={col} />
              </div>
            ))}
          </div>

          {/* ── Mobile layout ──────────────────────────────────────────── */}
          <div className="md:hidden">
            {/* Logo area */}
            <div className="px-6 pt-8 pb-6 border-b" style={{ borderColor: '#E5E5E0' }}>
              <p
                className="font-condensed text-naets-black leading-none select-none"
                style={{ fontSize: 40, fontFamily: 'var(--font-bebas), Oswald, Arial Narrow, sans-serif' }}
              >
                NÆTS
              </p>
              <p
                className="mt-1 font-sans uppercase text-naets-dark-gray"
                style={{ fontSize: 11, letterSpacing: '0.15em', fontWeight: 500 }}
              >
                ENGINEERED RUNNING PERFORMANCE
              </p>
            </div>

            {/* Accordions */}
            <div className="px-6">
              {columns.map((col) => (
                <MobileAccordion key={col.title} column={col} />
              ))}
            </div>

            {/* Manifesto — mobile bottom */}
            <div className="px-6 py-6">
              <p
                className="font-sans text-naets-dark-gray uppercase leading-relaxed"
                style={{ fontSize: 11, letterSpacing: '0.05em', lineHeight: 1.6 }}
              >
                ARCHITECTURE, DIFFUSION,
                <br />
                LOGISTIQUE ET STRATÉGIE DE LANCEMENT
              </p>
            </div>
          </div>

        </div>{/* /framed area */}
      </div>

      {/* ── Legal row ──────────────────────────────────────────────────────── */}
      <div
        className="px-4 md:px-8 border-b"
        style={{ borderColor: '#E5E5E0' }}
      >
        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto py-4">
          <nav aria-label="Liens légaux" className="flex items-center gap-0 whitespace-nowrap">
            {legalNav.map((item, i) => (
              <span key={item.href} className="flex items-center">
                {i > 0 && (
                  <span
                    className="mx-3 text-naets-mid-gray select-none"
                    style={{ fontSize: 11 }}
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
                <Link
                  href={item.href}
                  className="font-sans text-naets-dark-gray hover:text-naets-black transition-colors duration-150 hover:underline"
                  style={{ fontSize: 11, letterSpacing: '0.05em' }}
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>

        {/* Desktop: same row, no scroll */}
        <div className="hidden md:block py-4">
          <nav aria-label="Liens légaux" className="flex items-center flex-wrap gap-y-2">
            {legalNav.map((item, i) => (
              <span key={item.href} className="flex items-center">
                {i > 0 && (
                  <span
                    className="mx-3 text-naets-mid-gray select-none"
                    style={{ fontSize: 11 }}
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
                <Link
                  href={item.href}
                  className="font-sans text-naets-dark-gray hover:text-naets-black transition-colors duration-150 hover:underline"
                  style={{ fontSize: 11, letterSpacing: '0.05em' }}
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
      <div className="px-4 md:px-8">
        <div className="flex items-center justify-between py-4 gap-4 flex-wrap">
          {/* Copyright */}
          <p
            className="font-sans text-naets-dark-gray uppercase"
            style={{ fontSize: 11, letterSpacing: '0.1em' }}
          >
            © NÆTS 2027&nbsp;·&nbsp;ENGINEERED RUNNING PERFORMANCE&nbsp;·&nbsp;ALL RIGHTS RESERVED
          </p>

          {/* Language selector */}
          <div className="flex items-center gap-0" aria-label="Sélection de langue">
            <button
              type="button"
              className="font-sans text-naets-black hover:text-naets-dark-gray transition-colors duration-150"
              style={{ fontSize: 11, letterSpacing: '0.1em', fontWeight: 600 }}
              aria-current="true"
            >
              FR
            </button>
            <span
              className="mx-2 text-naets-mid-gray select-none"
              style={{ fontSize: 11 }}
              aria-hidden="true"
            >
              |
            </span>
            <button
              type="button"
              className="font-sans text-naets-dark-gray hover:text-naets-black transition-colors duration-150"
              style={{ fontSize: 11, letterSpacing: '0.1em' }}
            >
              EN
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
