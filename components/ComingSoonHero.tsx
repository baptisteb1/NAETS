'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import ComingSoonForm from './ComingSoonForm';

export default function ComingSoonHero() {
  return (
    <section
      className="relative flex flex-col bg-[#0A0A0A] overflow-hidden"
      style={{ minHeight: 'calc(100vh - 120px)' }}
    >
      <style>{`
        @keyframes cs-ambient {
          0%,100% { transform: scale(1.08) translate(0px, 0px); }
          35%      { transform: scale(1.12) translate(-18px, 10px); }
          70%      { transform: scale(1.1)  translate(10px, -14px); }
        }
        .cs-ambient { animation: cs-ambient 20s ease-in-out infinite; }

        @keyframes cs-scan {
          from { top: -2px; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          to   { top: 100%; opacity: 0; }
        }
        .cs-scan { animation: cs-scan 9s linear infinite; }
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

      {/* Animated background gradient (active until real video is branched) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 cs-ambient"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 30% 55%, #191919 0%, #0c0c0c 50%, #000 100%)',
          }}
        />
        {/* Diagonal light sweep */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, transparent 35%, rgba(180,180,165,0.035) 50%, transparent 65%)',
          }}
        />
        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Dot matrix */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Slow scan line */}
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent cs-scan"
          aria-hidden="true"
        />
      </div>

      {/* Depth overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 25%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* Decorative vertical rules */}
      <div
        className="absolute inset-y-0 left-[58%] w-px bg-white/[0.04] hidden md:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-[16%] w-px bg-white/[0.03] hidden md:block"
        aria-hidden="true"
      />

      {/* Corner marks */}
      <span className="absolute top-6 left-6 w-5 h-5 border-t border-l border-white/15" aria-hidden="true" />
      <span className="absolute top-6 right-6 w-5 h-5 border-t border-r border-white/15" aria-hidden="true" />
      <span className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-white/15" aria-hidden="true" />
      <span className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-white/15" aria-hidden="true" />

      {/* Vertical side label */}
      <div
        className="absolute left-5 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <span
          className="font-naets-micro text-white/10 whitespace-nowrap"
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
              className="inline-flex items-center justify-center w-[18px] h-[18px] border border-white/20 bg-white/[0.06]"
              aria-hidden="true"
            >
              <span className="text-[7px] font-bold text-white/50 leading-none">00</span>
            </span>
            <span className="font-naets-micro text-white/35 text-[9px] tracking-[0.22em]">
              PRE-LAUNCH
            </span>
          </div>
          {/* Language switcher */}
          <nav aria-label="Langue">
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="font-naets-micro text-white/60 hover:text-white/90 text-[10px] transition-colors"
                aria-current="true"
              >
                FR
              </Link>
              <span className="text-white/15 text-[10px]" aria-hidden="true">|</span>
              <Link
                href="#"
                className="font-naets-micro text-white/25 hover:text-white/60 text-[10px] transition-colors"
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
              className="font-condensed text-white leading-none select-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(34px, 5vw, 52px)',
                letterSpacing: '0.06em',
                opacity: 0.82,
              }}
            >
              NÆTS
            </p>
            <p className="font-naets-micro text-white/22 tracking-[0.32em] text-[9px] mt-0.5">
              ENGINEERED RUNNING PERFORMANCE
            </p>
          </div>

          {/* Thin rule */}
          <div className="w-7 h-px bg-white/20 mb-10" aria-hidden="true" />

          {/* Main title */}
          <h1
            className="font-condensed text-white leading-none mb-5"
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
          <p className="font-naets-label text-white/65 text-[11px] tracking-[0.2em] mb-4">
            Nous restons en contact.
          </p>

          {/* Body text */}
          <p
            className="text-white/45 text-[13px] leading-[1.9] mb-10 max-w-md"
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.02em' }}
          >
            Le premier drop NÆTS arrive prochainement. Inscrivez-vous pour recevoir
            un accès exclusif avant l&apos;ouverture officielle.
          </p>

          {/* Form */}
          <ComingSoonForm />

          {/* Calendar */}
          <div className="mt-7 pt-6 border-t border-white/[0.07] space-y-3">
            <p className="font-naets-micro text-white/22 text-[9px] leading-relaxed max-w-sm">
              Ajout de NÆTS au calendrier avec un accès exclusif deux semaines avant le premier drop.
            </p>
            {/*
              TODO: brancher génération calendrier .ics
              Événement    : "Accès exclusif NÆTS"
              Description  : "Accès exclusif deux semaines avant le premier drop NÆTS."
              Date         : [à définir lors de l'annonce du drop]
            */}
            <button
              type="button"
              onClick={() => {
                // TODO: générer et télécharger le fichier .ics
              }}
              className={cn(
                'flex items-center gap-2.5',
                'border border-white/15 px-5 py-2',
                'font-naets-label text-[10px] text-white/35',
                'hover:border-white/35 hover:text-white/65',
                'transition-all duration-150',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30'
              )}
              aria-label="Ajouter au calendrier — disponible lors du lancement"
            >
              <CalendarIcon />
              AJOUTER AU CALENDRIER
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <p className="font-naets-micro text-white/15 text-[9px]">© NÆTS 2027</p>
          <p
            className="font-naets-micro text-white/8 text-[8px] tracking-[0.18em] select-none"
            aria-hidden="true"
          >
            NÆTS DIGITAL PLATFORM — V.001
          </p>
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <rect x="0.5" y="1.5" width="10" height="9" stroke="currentColor" strokeWidth="0.75" />
      <line x1="0.5" y1="4" x2="10.5" y2="4" stroke="currentColor" strokeWidth="0.75" />
      <line x1="3" y1="0.5" x2="3" y2="2.5" stroke="currentColor" strokeWidth="0.75" />
      <line x1="8" y1="0.5" x2="8" y2="2.5" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}
