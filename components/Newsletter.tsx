'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    // PLACEHOLDER — connecter à un vrai service email
    setSubmitted(true);
  };

  return (
    <section className="bg-naets-near-black text-white py-20 px-8" aria-labelledby="newsletter-title">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Section number */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-white text-black text-[10px] font-semibold">
                N
              </span>
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-naets-mid-gray"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                NEWSLETTER
              </span>
            </div>

            <h2
              id="newsletter-title"
              className="text-5xl lg:text-6xl font-condensed leading-tight mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              RECEVOIR LES PROCHAINS DROPS
            </h2>
            <p
              className="text-naets-mid-gray text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              Soyez informé en avant-première des nouvelles collections, drops exclusifs
              et actualités NÆTS.
            </p>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="border border-white/20 p-8">
                <p
                  className="text-sm tracking-[0.1em] uppercase text-naets-mid-gray"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                >
                  Inscription confirmée. Bienvenue dans l&apos;univers NÆTS.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email field */}
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Adresse email
                  </label>
                  <div className="flex">
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="VOTRE ADRESSE EMAIL"
                      required
                      className="flex-1 bg-transparent border border-white/20 px-5 py-4 text-sm tracking-[0.08em] uppercase placeholder:text-naets-dark-gray focus:outline-none focus:border-white transition-colors"
                      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    />
                    <button
                      type="submit"
                      disabled={!email || !consent}
                      className="bg-white text-black px-6 py-4 flex items-center justify-center hover:bg-naets-off-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      aria-label="S'inscrire à la newsletter"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    id="newsletter-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-0.5 w-4 h-4 border border-white/20 bg-transparent accent-white cursor-pointer"
                  />
                  <label
                    htmlFor="newsletter-consent"
                    className="text-[11px] text-naets-dark-gray leading-relaxed cursor-pointer"
                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  >
                    J&apos;accepte de recevoir les communications commerciales de NÆTS. Vous
                    pouvez vous désinscrire à tout moment.{' '}
                    <a href="/confidentialite" className="underline hover:text-white transition-colors">
                      Politique de confidentialité
                    </a>
                  </label>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
