'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  dark?: boolean;
}

export default function Hero({
  title = 'NÆTS',
  subtitle = 'ENGINEERED RUNNING PERFORMANCE',
  tagline = 'RUN THE STREETS, RUN NÆTS',
  ctaPrimary = { label: 'SHOP', href: '/shop' },
  ctaSecondary = { label: 'DÉCOUVRIR LA MARQUE', href: '/philosophie' },
  dark = true,
}: HeroProps) {
  return (
    <section
      className={`relative w-full min-h-screen flex flex-col justify-end overflow-hidden ${
        dark ? 'bg-naets-near-black text-white' : 'bg-naets-off-white text-black'
      }`}
      aria-label="Hero principal NÆTS"
    >
      {/* Background placeholder */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: dark
            ? 'linear-gradient(160deg, #111111 0%, #000000 60%, #1a1a1a 100%)'
            : 'linear-gradient(160deg, #F5F5F2 0%, #E5E5E0 100%)',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* NÆTS watermark */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-condensed opacity-5 leading-none select-none pointer-events-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          aria-hidden="true"
        >
          NÆTS
        </div>
      </div>

      {/* Graphic corner marks */}
      <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-current opacity-40 z-10" aria-hidden="true" />
      <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-current opacity-40 z-10" aria-hidden="true" />
      <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-current opacity-40 z-10" aria-hidden="true" />
      <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-current opacity-40 z-10" aria-hidden="true" />

      {/* Micro-text top bar */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <p
          className="text-[10px] tracking-[0.2em] uppercase opacity-50"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          NÆTS DIGITAL PLATFORM — DROP 01
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-8 pb-24 lg:pb-32">
        {/* Section number */}
        <div className="flex items-center gap-3 mb-8">
          <span
            className="inline-flex items-center justify-center w-5 h-5 bg-current text-xs font-semibold"
            style={{ color: dark ? '#000' : '#fff', backgroundColor: dark ? '#fff' : '#000' }}
          >
            01
          </span>
          <span
            className="text-[10px] tracking-[0.2em] uppercase opacity-60"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            HERO PRINCIPAL
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-[18vw] sm:text-[14vw] lg:text-[12vw] leading-[0.85] font-condensed mb-6"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {title}
        </h1>

        {/* Subtitle + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p
              className="text-sm sm:text-base tracking-[0.25em] uppercase font-light mb-2"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {subtitle}
            </p>
            <p
              className="text-xs tracking-[0.15em] uppercase opacity-60"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {tagline}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={ctaPrimary.href}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-150 ${
                dark
                  ? 'bg-white text-black hover:bg-naets-off-white'
                  : 'bg-black text-white hover:bg-naets-near-black'
              }`}
            >
              {ctaPrimary.label}
              <ArrowRight size={14} />
            </Link>
            <Link
              href={ctaSecondary.href}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-xs tracking-[0.15em] uppercase font-medium border transition-all duration-150 ${
                dark
                  ? 'border-white/30 text-white hover:border-white'
                  : 'border-black/30 text-black hover:border-black'
              }`}
            >
              {ctaSecondary.label}
            </Link>
          </div>
        </div>

        {/* Bottom info bar */}
        <div
          className="flex items-center gap-8 pt-6 border-t opacity-40"
          style={{ borderColor: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }}
        >
          <span
            className="text-[10px] tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            HIGH-PERFORMANCE RUNNING SHOES
          </span>
          <span
            className="text-[10px] tracking-[0.15em] uppercase hidden sm:block"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            ENGINEERED DESIGN
          </span>
          <span
            className="text-[10px] tracking-[0.15em] uppercase hidden md:block"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            URBAN PRECISION IN MOTION
          </span>
        </div>
      </div>
    </section>
  );
}
