'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const CONTACT_SUBJECTS = [
  'Commande en cours',
  'Retour ou échange',
  'Conseil produit / taille',
  'Partenariat / Distribution',
  'Presse / Médias',
  'Autre',
];

const CONTACT_CHANNELS = [
  {
    number: '01',
    title: 'EMAIL',
    detail: 'contact@naets.fr',
    sub: 'Réponse garantie sous 24h ouvrées.',
    href: 'mailto:contact@naets.fr',
    cta: 'ENVOYER UN EMAIL',
  },
  {
    number: '02',
    title: 'PRESSE & MÉDIAS',
    detail: 'presse@naets.fr',
    sub: 'Demandes presse, partenariats et collaborations.',
    href: 'mailto:presse@naets.fr',
    cta: 'CONTACTER LA PRESSE',
  },
  {
    number: '03',
    title: 'DISTRIBUTION',
    detail: 'retail@naets.fr',
    sub: 'Devenir revendeur, devenir partenaire distribution.',
    href: 'mailto:retail@naets.fr',
    cta: 'CONTACT RETAIL',
  },
];

// ─── Form ─────────────────────────────────────────────────────────────────────

function ContactForm() {
  const [subject, setSubject] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-6 py-12">
        <div className="w-12 h-px bg-naets-black" aria-hidden="true" />
        <p
          className="font-condensed text-naets-black leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '0.04em' }}
        >
          MESSAGE ENVOYÉ
        </p>
        <p
          className="font-sans text-naets-dark-gray leading-relaxed max-w-sm"
          style={{ fontSize: 14, letterSpacing: '0.02em', lineHeight: 1.8 }}
        >
          Merci pour votre message. Notre équipe vous répondra dans un délai de 24h ouvrées.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="font-sans text-naets-dark-gray uppercase underline underline-offset-4 hover:text-naets-black transition-colors duration-150"
          style={{ fontSize: 11, letterSpacing: '0.15em' }}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>

      {/* Subject selector */}
      <fieldset>
        <legend
          className="font-sans text-naets-black uppercase mb-4 block"
          style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 500 }}
        >
          SUJET *
        </legend>
        <div className="flex flex-wrap gap-2">
          {CONTACT_SUBJECTS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSubject(s)}
              className={`
                font-sans uppercase px-4 py-2.5 border transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-naets-black
                ${subject === s
                  ? 'bg-naets-black text-white border-naets-black'
                  : 'text-naets-dark-gray border-naets-light-gray hover:border-naets-black hover:text-naets-black'
                }
              `}
              style={{ fontSize: 11, letterSpacing: '0.15em' }}
            >
              {s}
            </button>
          ))}
        </div>
        <input type="hidden" name="subject" value={subject} />
      </fieldset>

      {/* Name + email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="font-sans text-naets-black uppercase"
            style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 500 }}
          >
            NOM *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Votre nom"
            className="h-12 border border-naets-light-gray bg-white px-4 font-sans text-naets-black placeholder:text-naets-mid-gray focus:outline-none focus:border-naets-black transition-colors duration-150"
            style={{ fontSize: 13 }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-email"
            className="font-sans text-naets-black uppercase"
            style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 500 }}
          >
            EMAIL *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="votre@email.com"
            className="h-12 border border-naets-light-gray bg-white px-4 font-sans text-naets-black placeholder:text-naets-mid-gray focus:outline-none focus:border-naets-black transition-colors duration-150"
            style={{ fontSize: 13 }}
          />
        </div>
      </div>

      {/* Order number (optional) */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-order"
          className="font-sans text-naets-black uppercase"
          style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 500 }}
        >
          N° DE COMMANDE <span className="text-naets-mid-gray normal-case tracking-normal">(optionnel)</span>
        </label>
        <input
          id="contact-order"
          name="order"
          type="text"
          placeholder="Ex: NAETS-00123"
          className="h-12 border border-naets-light-gray bg-white px-4 font-sans text-naets-black placeholder:text-naets-mid-gray focus:outline-none focus:border-naets-black transition-colors duration-150 max-w-xs"
          style={{ fontSize: 13 }}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="font-sans text-naets-black uppercase"
          style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 500 }}
        >
          MESSAGE *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          placeholder="Décrivez votre demande en détail…"
          className="border border-naets-light-gray bg-white px-4 py-3 font-sans text-naets-black placeholder:text-naets-mid-gray focus:outline-none focus:border-naets-black transition-colors duration-150 resize-none"
          style={{ fontSize: 13 }}
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-3 font-sans font-medium bg-naets-black text-white px-10 py-4 transition-colors duration-150 hover:bg-naets-near-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2"
          style={{ fontSize: 11, letterSpacing: '0.2em' }}
        >
          ENVOYER LE MESSAGE
          <ArrowRight size={12} />
        </button>
        <p
          className="font-sans text-naets-mid-gray"
          style={{ fontSize: 11, letterSpacing: '0.05em' }}
        >
          Réponse sous 24h ouvrées
        </p>
      </div>

    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-20 pb-20 px-8 md:px-16 overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="contact-title"
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />
        {/* Corner marks */}
        <span className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-8 right-8 w-5 h-5 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-white/20" aria-hidden="true" />

        <div className="relative z-10 max-w-screen-xl mx-auto">
          <p
            className="font-sans text-naets-dark-gray uppercase mb-6"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            NÆTS — ASSISTANCE
          </p>
          <h1
            id="contact-title"
            className="font-condensed text-white leading-none mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(64px, 10vw, 120px)',
              letterSpacing: '0.02em',
            }}
          >
            CONTACT
          </h1>
          <p
            className="font-sans text-naets-mid-gray max-w-lg"
            style={{ fontSize: 14, letterSpacing: '0.03em', lineHeight: 1.75 }}
          >
            Une question, une demande, un partenariat ? Notre équipe est disponible du lundi au vendredi, 9h–18h.
          </p>
        </div>
      </section>

      {/* ── CANAUX DE CONTACT ───────────────────────────────────────────────── */}
      <section
        className="bg-naets-off-white border-b border-naets-light-gray"
        aria-label="Canaux de contact"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-naets-light-gray">
            {CONTACT_CHANNELS.map((ch) => (
              <div key={ch.number} className="flex flex-col gap-4 p-8 md:p-10">
                <span
                  className="font-sans text-naets-mid-gray uppercase"
                  style={{ fontSize: 10, letterSpacing: '0.2em' }}
                >
                  {ch.number}
                </span>
                <div>
                  <h2
                    className="font-condensed text-naets-black leading-none mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: '0.06em' }}
                  >
                    {ch.title}
                  </h2>
                  <a
                    href={ch.href}
                    className="font-sans text-naets-dark-gray hover:text-naets-black transition-colors duration-150"
                    style={{ fontSize: 13, letterSpacing: '0.02em' }}
                  >
                    {ch.detail}
                  </a>
                </div>
                <p
                  className="font-sans text-naets-mid-gray leading-relaxed"
                  style={{ fontSize: 12, letterSpacing: '0.02em', lineHeight: 1.7 }}
                >
                  {ch.sub}
                </p>
                <a
                  href={ch.href}
                  className="inline-flex items-center gap-2 self-start font-sans text-naets-black uppercase hover:text-naets-dark-gray transition-colors duration-150"
                  style={{ fontSize: 11, letterSpacing: '0.15em', fontWeight: 500 }}
                >
                  {ch.cta}
                  <ArrowRight size={10} strokeWidth={1.5} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ──────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16 bg-white"
        aria-labelledby="form-title"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 lg:gap-24">

            {/* Left: title + infos */}
            <div className="flex flex-col gap-8 lg:sticky lg:top-[140px] self-start">
              <div>
                <p
                  className="font-sans text-naets-dark-gray uppercase mb-4"
                  style={{ fontSize: 11, letterSpacing: '0.2em' }}
                >
                  NÆTS — FORMULAIRE
                </p>
                <h2
                  id="form-title"
                  className="font-condensed text-naets-black leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(36px, 4.5vw, 56px)',
                    letterSpacing: '0.02em',
                  }}
                >
                  ENVOYER UN MESSAGE
                </h2>
              </div>

              <div className="h-px bg-naets-light-gray" aria-hidden="true" />

              <div className="flex flex-col gap-5">
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                >
                  Remplissez le formulaire ci-contre. Tous les champs marqués d'un * sont obligatoires.
                </p>
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                >
                  Pour un retour ou un échange, munissez-vous de votre numéro de commande pour accélérer le traitement.
                </p>
              </div>

              <div className="flex flex-col gap-2 border-l-2 border-naets-black pl-4">
                <p
                  className="font-sans text-naets-black uppercase"
                  style={{ fontSize: 11, letterSpacing: '0.15em', fontWeight: 600 }}
                >
                  DÉLAI DE RÉPONSE
                </p>
                <p
                  className="font-sans text-naets-dark-gray"
                  style={{ fontSize: 12, letterSpacing: '0.02em' }}
                >
                  24h ouvrées — Lundi au vendredi, 9h–18h
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 font-sans text-naets-dark-gray hover:text-naets-black uppercase transition-colors duration-150"
                  style={{ fontSize: 11, letterSpacing: '0.15em' }}
                >
                  → Consulter la FAQ
                </Link>
                <Link
                  href="/retours"
                  className="inline-flex items-center gap-2 font-sans text-naets-dark-gray hover:text-naets-black uppercase transition-colors duration-150"
                  style={{ fontSize: 11, letterSpacing: '0.15em' }}
                >
                  → Faire un retour
                </Link>
                <Link
                  href="/livraison"
                  className="inline-flex items-center gap-2 font-sans text-naets-dark-gray hover:text-naets-black uppercase transition-colors duration-150"
                  style={{ fontSize: 11, letterSpacing: '0.15em' }}
                >
                  → Informations livraison
                </Link>
              </div>
            </div>

            {/* Right: form */}
            <ContactForm />

          </div>
        </div>
      </section>

    </main>
  );
}
