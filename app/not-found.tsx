import type { Metadata } from 'next';
import Link from 'next/link';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: '404 — NÆTS',
  description: 'La page que vous cherchez n\'existe pas ou a été déplacée.',
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >

      {/* ── Grid overlay ─────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* ── Corner marks ─────────────────────────────────────────────────────── */}
      <span
        className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/25"
        aria-hidden="true"
      />
      <span
        className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/25"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-white/25"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/25"
        aria-hidden="true"
      />

      {/* ── Section label — top ───────────────────────────────────────────────── */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <p
          className="font-sans text-naets-dark-gray uppercase"
          style={{ fontSize: 10, letterSpacing: '0.25em' }}
        >
          NÆTS — ERREUR
        </p>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">

        {/* 404 — huge typographic number */}
        <p
          className="font-condensed text-naets-white leading-none select-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(140px, 30vw, 400px)',
            letterSpacing: '0.02em',
            opacity: 0.08,
            lineHeight: 0.85,
          }}
          aria-hidden="true"
        >
          404
        </p>

        {/* Overlay content — positioned over the 404 number */}
        <div className="flex flex-col items-center gap-6 -mt-8 md:-mt-14">

          {/* Title */}
          <h1
            className="font-condensed text-naets-white leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(36px, 6vw, 80px)',
              letterSpacing: '0.04em',
            }}
          >
            PAGE INTROUVABLE
          </h1>

          {/* Thin rule */}
          <div className="w-12 h-px bg-white/30" aria-hidden="true" />

          {/* Body copy */}
          <p
            className="font-sans text-naets-mid-gray max-w-sm leading-relaxed"
            style={{ fontSize: 13, letterSpacing: '0.04em', lineHeight: 1.8 }}
          >
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-10 font-sans font-medium bg-naets-white text-naets-black transition-colors duration-150 hover:bg-naets-off-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-naets-near-black"
              style={{ fontSize: 11, letterSpacing: '0.15em' }}
            >
              RETOUR À L&apos;ACCUEIL
            </Link>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center h-12 px-10 font-sans font-medium border border-white/40 text-naets-white transition-colors duration-150 hover:border-white/80 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-naets-near-black"
              style={{ fontSize: 11, letterSpacing: '0.15em' }}
            >
              SHOP
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom label ─────────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <p
          className="font-condensed text-white/15 leading-none select-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(24px, 3vw, 40px)',
            letterSpacing: '0.15em',
          }}
          aria-hidden="true"
        >
          NÆTS — ENGINEERED RUNNING PERFORMANCE
        </p>
      </div>

    </main>
  );
}
