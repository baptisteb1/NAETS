'use client';

import Link from 'next/link';
import ComingSoonForm from './ComingSoonForm';

export default function ComingSoonHero() {
  return (
    <section
      className="relative flex flex-col bg-[#F5F5F2] overflow-hidden"
      style={{ minHeight: 'calc(100vh - 120px)' }}
    >
      <style>{`
        @keyframes cs-ambient {
          0%,100% { transform: scale(1.06) translate(0px, 0px); }
          35%      { transform: scale(1.09) translate(-14px, 8px); }
          70%      { transform: scale(1.07) translate(8px, -10px); }
        }
        .cs-ambient { animation: cs-ambient 22s ease-in-out infinite; }

        @keyframes cs-scan {
          from { top: -2px; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          to   { top: 100%; opacity: 0; }
        }
        .cs-scan { animation: cs-scan 11s linear infinite; }
      `}</style>

      {/* TODO: brancher la vraie vidéo → src="/videos/naets-launch.mp4"
          Paramètres requis : autoPlay muted loop playsInline
          Dimensions : objet-cover plein écran, overlay léger conservé */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        aria-hidden="true"
      />

      {/* Animated light background (active until real video) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 cs-ambient"
          style={{
            background:
              'radial-gradient(ellipse 85% 65% at 35% 50%, #FFFFFF 0%, #F0F0ED 45%, #E6E6E2 100%)',
          }}
        />
        {/* Diagonal inox light sweep */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, transparent 30%, rgba(200,200,195,0.18) 50%, transparent 70%)',
          }}
        />
        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Dot matrix */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,0,0,0.9) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Slow scan line */}
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent cs-scan"
          aria-hidden="true"
        />
      </div>

      {/* Subtle top/bottom depth overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(245,245,242,0.4) 0%, transparent 20%, rgba(230,230,226,0.25) 100%)',
        }}
      />

      {/* Decorative vertical rules */}
      <div
        className="absolute inset-y-0 left-[58%] w-px bg-black/[0.04] hidden md:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-[16%] w-px bg-black/[0.03] hidden md:block"
        aria-hidden="true"
      />

      {/* Corner marks */}
      <span className="absolute top-6 left-6 w-5 h-5 border-t border-l border-black/15" aria-hidden="true" />
      <span className="absolute top-6 right-6 w-5 h-5 border-t border-r border-black/15" aria-hidden="true" />
      <span className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-black/15" aria-hidden="true" />
      <span className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-black/15" aria-hidden="true" />

      {/* Vertical side label */}
      <div
        className="absolute left-5 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <span
          className="font-naets-micro text-black/12 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.28em', fontSize: 9 }}
        >
          NÆTS DIGITAL PLATFORM
        </span>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col flex-1 px-8 md:px-16 lg:px-20 py-10">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-auto">
          {/* Pre-launch badge */}
          <div className="flex items-center gap-2.5">
            <span
              className="inline-flex items-center justify-center w-[18px] h-[18px] border border-black/15 bg-black/[0.04]"
              aria-hidden="true"
            >
              <span className="text-[7px] font-bold text-black/35 leading-none">00</span>
            </span>
            <span className="font-naets-micro text-black/35 text-[9px] tracking-[0.22em]">
              PRE-LAUNCH SYSTEM
            </span>
          </div>
          {/* Language switcher */}
          <nav aria-label="Langue">
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="font-naets-micro text-black/70 hover:text-black text-[10px] transition-colors"
                aria-current="true"
              >
                FR
              </Link>
              <span className="text-black/20 text-[10px]" aria-hidden="true">|</span>
              <Link
                href="#"
                className="font-naets-micro text-black/30 hover:text-black/70 text-[10px] transition-colors"
              >
                EN
              </Link>
            </div>
          </nav>
        </div>

        {/* Center block */}
        <div className="flex-1 flex flex-col justify-center py-10 max-w-xl lg:max-w-2xl">

          {/* Brand signature */}
          <div className="mb-10">
            <p
              className="font-condensed text-black leading-none select-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(34px, 5vw, 52px)',
                letterSpacing: '0.06em',
                opacity: 0.88,
              }}
            >
              NÆTS
            </p>
            <p className="font-naets-micro text-black/30 tracking-[0.32em] text-[9px] mt-0.5">
              ENGINEERED RUNNING PERFORMANCE
            </p>
          </div>

          {/* Thin rule */}
          <div className="w-7 h-px bg-black/18 mb-10" aria-hidden="true" />

          {/* Main title */}
          <h1
            className="font-condensed text-black leading-none mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(50px, 8.5vw, 118px)',
              letterSpacing: '0.02em',
            }}
          >
            NOUS SOMMES
            <br />
            BIENTÔT LÀ
          </h1>

          {/* Subtitle */}
          <p className="font-naets-label text-black/50 text-[11px] tracking-[0.2em] mb-4 uppercase">
            Nous restons en contact.
          </p>

          {/* Body text */}
          <p
            className="text-[#555550] text-[13px] leading-[1.9] mb-10 max-w-md"
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.02em' }}
          >
            Le premier drop NÆTS arrive prochainement. Inscrivez-vous pour recevoir
            un accès exclusif avant l&apos;ouverture officielle.
          </p>

          {/* Form */}
          <ComingSoonForm />

          {/* Calendar note — text only, no button */}
          <div className="mt-7 pt-6 border-t border-black/[0.07]">
            <p className="font-naets-micro text-black/30 text-[9px] leading-relaxed max-w-sm">
              Ajout de NÆTS au calendrier avec un accès exclusif deux semaines avant le premier drop.
              {/*
                TODO: connecter plus tard le CTA à une génération .ics ou à une automatisation
                calendrier quand la date du premier drop sera connue.
              */}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <p className="font-naets-micro text-black/18 text-[9px]">© NÆTS 2027</p>
          <p
            className="font-naets-micro text-black/10 text-[8px] tracking-[0.18em] select-none"
            aria-hidden="true"
          >
            NÆTS DIGITAL PLATFORM — V.001
          </p>
        </div>
      </div>
    </section>
  );
}
