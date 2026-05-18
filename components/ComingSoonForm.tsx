'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ComingSoonForm() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Veuillez renseigner votre adresse email.');
      return;
    }
    if (!consent) {
      setError('Veuillez accepter de recevoir nos informations.');
      return;
    }
    // TODO: brancher intégration newsletter (Mailchimp, Klaviyo, etc.)
    setSubmitted(true);
    setError('');
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-4 py-4 border-l-2 border-black/40 pl-4">
        <div>
          <p className="font-naets-label text-black text-[11px]">
            Votre accès exclusif est enregistré.
          </p>
          <p className="font-naets-micro text-black/40 text-[9px] mt-1">
            Vous recevrez un email lors du lancement.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Email + submit */}
      <div className="flex flex-col sm:flex-row border border-black/20">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          placeholder="votre@email.com"
          autoComplete="email"
          className={cn(
            'flex-1 bg-transparent text-black',
            'px-4 py-3',
            'text-[12px] tracking-[0.06em]',
            'font-[family-name:var(--font-inter)]',
            'placeholder:text-black/25',
            'border-b sm:border-b-0 sm:border-r border-black/15',
            'focus:outline-none focus:bg-black/[0.02]',
            'transition-colors duration-150'
          )}
          aria-label="Votre adresse email"
        />
        <button
          type="submit"
          className={cn(
            'shrink-0 px-8 py-3',
            'bg-[#111111] text-white',
            'font-naets-label text-[11px]',
            'hover:bg-white hover:text-black border-t sm:border-t-0 sm:border-l border-black/15',
            'transition-all duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30'
          )}
        >
          ACCÈS EXCLUSIF
        </button>
      </div>

      {/* Checkbox */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <span className="relative shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => { setConsent(e.target.checked); setError(''); }}
            className="sr-only"
          />
          <span
            className={cn(
              'flex items-center justify-center w-3.5 h-3.5 border transition-all duration-150',
              consent
                ? 'bg-[#111111] border-[#111111]'
                : 'border-black/25 group-hover:border-black/50'
            )}
          >
            {consent && (
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                <path d="M1 3L3 5L7 1" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        </span>
        <span
          className={cn(
            'text-[11px] leading-snug transition-colors duration-150',
            'font-[family-name:var(--font-inter)]',
            'text-black/40 group-hover:text-black/65'
          )}
        >
          J&apos;accepte de recevoir les informations liées au lancement NÆTS.
        </span>
      </label>

      {/* Error */}
      {error && (
        <p
          className="text-red-700/70 text-[10px] font-[family-name:var(--font-inter)] tracking-wide"
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
