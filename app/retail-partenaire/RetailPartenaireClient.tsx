'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface B2BFormState {
  nom: string;
  prenom: string;
  entreprise: string;
  email: string;
  telephone: string;
  ville: string;
  message: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const introArguments = [
  { num: '01', label: 'Marque premium running' },
  { num: '02', label: 'Running technique + lifestyle' },
  { num: '03', label: 'Univers fort et cohérent' },
  { num: '04', label: 'Produits unisexes / collections structurées' },
];

const partnerArguments = [
  {
    number: '01',
    title: 'MARQUE STATUTAIRE',
    description:
      'NÆTS occupe un segment premium distinct. Pas une marque de grande distribution — une marque à positionner avec soin chez des revendeurs sélectionnés.',
  },
  {
    number: '02',
    title: 'MARGE PARTENAIRE',
    description:
      'Conditions de distribution attractives pour les revendeurs qui partagent nos exigences de présentation et d\'expérience client.',
  },
  {
    number: '03',
    title: 'SUPPORT MARKETING',
    description:
      'Assets visuels, kits de mise en scène, formation produit et supports de vente fournis à chaque partenaire retail.',
  },
  {
    number: '04',
    title: 'EXCLUSIVITÉ ZONE',
    description:
      'Distribution limitée par zone géographique. Chaque partenaire bénéficie d\'une exclusivité dans son territoire défini.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function RetailPartenaireClient() {
  const [formState, setFormState] = useState<B2BFormState>({
    nom: '',
    prenom: '',
    entreprise: '',
    email: '',
    telephone: '',
    ville: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof B2BFormState, value: string) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end only — no backend
    setSubmitted(true);
  }

  return (
    <main>

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="retail-hero-title"
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

        {/* Section label */}
        <div className="absolute top-12 left-8 md:left-16">
          <p
            className="font-sans text-naets-dark-gray uppercase"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            NÆTS — B2B DISTRIBUTION
          </p>
        </div>

        {/* Tag top right */}
        <div className="absolute top-12 right-8 md:right-16">
          <span
            className="font-sans text-naets-dark-gray border border-naets-dark-gray px-3 py-1 uppercase"
            style={{ fontSize: 9, letterSpacing: '0.2em' }}
          >
            SÉLECTION PARTENAIRES
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-screen-xl mx-auto w-full">
          <h1
            id="retail-hero-title"
            className="font-condensed text-naets-white leading-none mb-8"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(56px, 10vw, 160px)',
              letterSpacing: '0.02em',
            }}
          >
            RETAIL
            <br />
            PARTENAIRE
          </h1>
          <p
            className="font-sans text-naets-mid-gray leading-relaxed max-w-xl"
            style={{ fontSize: 14, letterSpacing: '0.04em', lineHeight: 1.8 }}
          >
            DISTRIBUER NÆTS, C'EST DISTRIBUER UNE MARQUE PREMIUM.
          </p>
          <div className="h-px bg-white/10 mt-8 max-w-md" aria-hidden="true" />
        </div>
      </section>

      {/* ── 2. INTRO ─────────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16 bg-naets-white"
        aria-labelledby="intro-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-naets-light-gray">

            {/* Left: descriptive text */}
            <div className="p-10 md:p-16 flex flex-col justify-center gap-8 border-b md:border-b-0 md:border-r border-naets-light-gray">
              <p
                className="font-sans text-naets-dark-gray uppercase"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                À QUI S'ADRESSE CE PROGRAMME
              </p>
              <h2
                id="intro-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  letterSpacing: '0.02em',
                }}
              >
                REVENDEURS
                <br />
                SÉLECTIONNÉS
              </h2>
              <div className="h-px bg-naets-light-gray" aria-hidden="true" />
              <p
                className="font-sans text-naets-black leading-relaxed"
                style={{ fontSize: 14, letterSpacing: '0.02em', lineHeight: 1.9 }}
              >
                Vous êtes revendeur running, concept store ou multi-sport premium ? NÆTS recherche
                des partenaires distributeurs partageant son exigence de qualité et son positionnement
                premium. Nous sélectionnons nos points de vente avec la même rigueur que nous appliquons
                à nos produits.
              </p>
            </div>

            {/* Right: 4 argument cards */}
            <div className="flex flex-col">
              {introArguments.map((arg, idx) => (
                <div
                  key={arg.num}
                  className={`px-8 md:px-10 py-7 flex items-center gap-6 ${idx < introArguments.length - 1 ? 'border-b border-naets-light-gray' : ''}`}
                >
                  <span
                    className="font-condensed text-naets-mid-gray leading-none shrink-0"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: '0.02em' }}
                    aria-hidden="true"
                  >
                    {arg.num}
                  </span>
                  <div className="h-px bg-naets-light-gray w-6 shrink-0" aria-hidden="true" />
                  <span
                    className="font-sans text-naets-black uppercase"
                    style={{ fontSize: 12, letterSpacing: '0.1em', fontWeight: 500 }}
                  >
                    {arg.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. ARGUMENTS PARTENAIRES ─────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16"
        style={{ backgroundColor: '#F5F5F2' }}
        aria-labelledby="arguments-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="mb-16">
            <p
              className="font-sans text-naets-dark-gray uppercase mb-3"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              AVANTAGES PARTENAIRES
            </p>
            <h2
              id="arguments-title"
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(42px, 6vw, 80px)',
                letterSpacing: '0.02em',
              }}
            >
              POURQUOI DISTRIBUER NÆTS
            </h2>
            <div className="h-px bg-naets-light-gray mt-8" aria-hidden="true" />
          </div>

          {/* 4-column arguments with vertical dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-naets-light-gray">
            {partnerArguments.map((arg, idx) => (
              <div
                key={arg.number}
                className={`relative p-10 flex flex-col gap-6 border-b sm:border-b-0 ${idx < partnerArguments.length - 1 ? 'sm:border-r' : ''} border-naets-light-gray`}
              >
                {/* Background large number */}
                <span
                  className="font-condensed text-naets-light-gray leading-none absolute top-6 right-6 select-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 72,
                    letterSpacing: '0.02em',
                  }}
                  aria-hidden="true"
                >
                  {arg.number}
                </span>

                <div className="relative z-10 flex flex-col gap-4 mt-6">
                  <h3
                    className="font-condensed text-naets-black leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(22px, 2vw, 28px)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {arg.title}
                  </h3>
                  <div className="h-px bg-naets-black w-6" aria-hidden="true" />
                  <p
                    className="font-sans text-naets-dark-gray leading-relaxed"
                    style={{ fontSize: 12, letterSpacing: '0.02em', lineHeight: 1.8 }}
                  >
                    {arg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. FORMULAIRE B2B ────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16 bg-naets-white"
        aria-labelledby="b2b-form-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-naets-light-gray">

            {/* Left: dark context panel */}
            <div
              className="relative p-10 md:p-16 flex flex-col justify-between gap-12 border-b lg:border-b-0 lg:border-r border-naets-light-gray"
              style={{ backgroundColor: '#111111' }}
            >
              {/* Corner marks */}
              <span className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/10" aria-hidden="true" />
              <span className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/10" aria-hidden="true" />

              <div className="flex flex-col gap-8">
                <p
                  className="font-sans text-naets-dark-gray uppercase"
                  style={{ fontSize: 11, letterSpacing: '0.2em' }}
                >
                  NÆTS — RÉSEAU REVENDEURS
                </p>
                <h2
                  id="b2b-form-title"
                  className="font-condensed text-naets-white leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(42px, 5vw, 72px)',
                    letterSpacing: '0.02em',
                  }}
                >
                  DEVENIR
                  <br />
                  REVENDEUR
                </h2>
                <div className="h-px bg-white/10" aria-hidden="true" />
                <p
                  className="font-sans text-naets-mid-gray leading-relaxed"
                  style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.9 }}
                >
                  Remplissez ce formulaire pour initier une collaboration. Nous étudions chaque demande
                  individuellement et revenons vers vous sous 72 heures ouvrées.
                </p>
              </div>

              {/* Contact info block */}
              <div className="flex flex-col gap-4 border border-white/10 p-6">
                <p
                  className="font-sans text-naets-dark-gray uppercase"
                  style={{ fontSize: 10, letterSpacing: '0.2em' }}
                >
                  CONTACT DIRECT
                </p>
                <div className="flex flex-col gap-2">
                  <p
                    className="font-sans text-naets-white"
                    style={{ fontSize: 12, letterSpacing: '0.04em' }}
                  >
                    retail@naets.run
                  </p>
                  <p
                    className="font-sans text-naets-dark-gray"
                    style={{ fontSize: 11, letterSpacing: '0.04em' }}
                  >
                    Du lundi au vendredi, 9h–18h
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="p-10 md:p-16">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center gap-6 text-center py-16">
                  <span
                    className="font-condensed text-naets-black leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 64, letterSpacing: '0.02em' }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <h3
                    className="font-condensed text-naets-black leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: '0.03em' }}
                  >
                    DEMANDE ENVOYÉE
                  </h3>
                  <p
                    className="font-sans text-naets-dark-gray leading-relaxed max-w-xs"
                    style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                  >
                    Votre dossier est entre nos mains. Nous revenons vers vous sous 72h ouvrées.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>

                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="b2b-nom"
                        className="font-sans text-naets-dark-gray uppercase"
                        style={{ fontSize: 10, letterSpacing: '0.2em' }}
                      >
                        NOM
                      </label>
                      <input
                        id="b2b-nom"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={formState.nom}
                        onChange={(e) => handleChange('nom', e.target.value)}
                        className="w-full font-sans text-naets-black bg-transparent border-b border-naets-black pb-2 focus:outline-none placeholder-naets-mid-gray"
                        style={{ fontSize: 13, letterSpacing: '0.03em' }}
                        placeholder="Dupont"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="b2b-prenom"
                        className="font-sans text-naets-dark-gray uppercase"
                        style={{ fontSize: 10, letterSpacing: '0.2em' }}
                      >
                        PRÉNOM
                      </label>
                      <input
                        id="b2b-prenom"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={formState.prenom}
                        onChange={(e) => handleChange('prenom', e.target.value)}
                        className="w-full font-sans text-naets-black bg-transparent border-b border-naets-black pb-2 focus:outline-none placeholder-naets-mid-gray"
                        style={{ fontSize: 13, letterSpacing: '0.03em' }}
                        placeholder="Jean"
                      />
                    </div>
                  </div>

                  {/* Entreprise */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="b2b-entreprise"
                      className="font-sans text-naets-dark-gray uppercase"
                      style={{ fontSize: 10, letterSpacing: '0.2em' }}
                    >
                      ENTREPRISE
                    </label>
                    <input
                      id="b2b-entreprise"
                      type="text"
                      required
                      autoComplete="organization"
                      value={formState.entreprise}
                      onChange={(e) => handleChange('entreprise', e.target.value)}
                      className="w-full font-sans text-naets-black bg-transparent border-b border-naets-black pb-2 focus:outline-none placeholder-naets-mid-gray"
                      style={{ fontSize: 13, letterSpacing: '0.03em' }}
                      placeholder="Nom de votre enseigne"
                    />
                  </div>

                  {/* Email + Téléphone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="b2b-email"
                        className="font-sans text-naets-dark-gray uppercase"
                        style={{ fontSize: 10, letterSpacing: '0.2em' }}
                      >
                        EMAIL
                      </label>
                      <input
                        id="b2b-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formState.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full font-sans text-naets-black bg-transparent border-b border-naets-black pb-2 focus:outline-none placeholder-naets-mid-gray"
                        style={{ fontSize: 13, letterSpacing: '0.03em' }}
                        placeholder="contact@store.fr"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="b2b-telephone"
                        className="font-sans text-naets-dark-gray uppercase"
                        style={{ fontSize: 10, letterSpacing: '0.2em' }}
                      >
                        TÉLÉPHONE
                      </label>
                      <input
                        id="b2b-telephone"
                        type="tel"
                        autoComplete="tel"
                        value={formState.telephone}
                        onChange={(e) => handleChange('telephone', e.target.value)}
                        className="w-full font-sans text-naets-black bg-transparent border-b border-naets-black pb-2 focus:outline-none placeholder-naets-mid-gray"
                        style={{ fontSize: 13, letterSpacing: '0.03em' }}
                        placeholder="+33 6 00 00 00 00"
                      />
                    </div>
                  </div>

                  {/* Ville */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="b2b-ville"
                      className="font-sans text-naets-dark-gray uppercase"
                      style={{ fontSize: 10, letterSpacing: '0.2em' }}
                    >
                      VILLE
                    </label>
                    <input
                      id="b2b-ville"
                      type="text"
                      required
                      autoComplete="address-level2"
                      value={formState.ville}
                      onChange={(e) => handleChange('ville', e.target.value)}
                      className="w-full font-sans text-naets-black bg-transparent border-b border-naets-black pb-2 focus:outline-none placeholder-naets-mid-gray"
                      style={{ fontSize: 13, letterSpacing: '0.03em' }}
                      placeholder="Paris, Lyon, Bordeaux..."
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="b2b-message"
                      className="font-sans text-naets-dark-gray uppercase"
                      style={{ fontSize: 10, letterSpacing: '0.2em' }}
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="b2b-message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full font-sans text-naets-black bg-transparent border-b border-naets-black pb-2 focus:outline-none placeholder-naets-mid-gray resize-none"
                      style={{ fontSize: 13, letterSpacing: '0.03em', lineHeight: 1.7 }}
                      placeholder="Décrivez votre enseigne, votre positionnement et vos motivations à distribuer NÆTS..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 font-sans text-naets-white bg-naets-black px-8 py-5 uppercase transition-colors duration-150 hover:bg-naets-near-black"
                    style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 600 }}
                  >
                    ENVOYER MA DEMANDE
                    <ArrowRight size={12} />
                  </button>

                  <p
                    className="font-sans text-naets-dark-gray text-center"
                    style={{ fontSize: 10, letterSpacing: '0.05em' }}
                  >
                    Réponse sous 72h ouvrées · Sélection qualitative
                  </p>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
