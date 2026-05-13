'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type ClubOption = 'running' | 'social' | 'les-deux';

interface FormState {
  prenom: string;
  nom: string;
  email: string;
  ville: string;
  club: ClubOption | '';
}

// ─── Static data ──────────────────────────────────────────────────────────────

const events = [
  {
    type: 'SESSION TRACK',
    day: 'VENDREDI',
    time: '18H00',
    location: 'Stade Charléty, Paris',
    tag: 'PISTE',
  },
  {
    type: 'LONG RUN',
    day: 'DIMANCHE',
    time: '08H00',
    location: 'Bois de Vincennes',
    tag: 'ROUTE',
  },
  {
    type: 'INTERVAL TRAINING',
    day: 'MERCREDI',
    time: '19H30',
    location: 'Piste couverte',
    tag: 'INDOOR',
  },
];

const socialFeatures = [
  {
    number: '01',
    title: 'PHOTOGRAPHES',
    description:
      'Capturer le mouvement à travers la lentille. Collaborations, shoots et archives visuelles de la communauté.',
  },
  {
    number: '02',
    title: 'CRÉATEURS',
    description:
      'Graphistes, designers, directeurs artistiques — l\'univers NÆTS inspire, la communauté crée.',
  },
  {
    number: '03',
    title: 'COMMUNAUTÉ',
    description:
      'Partage, entraide et culture du mouvement. Une tribu unie par l\'exigence et la sobriété.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function NaetsCollectiveClient() {
  const [formState, setFormState] = useState<FormState>({
    prenom: '',
    nom: '',
    email: '',
    ville: '',
    club: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
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
        className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="collective-hero-title"
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
            NÆTS — COMMUNAUTÉ
          </p>
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-screen-xl mx-auto w-full">
          <h1
            id="collective-hero-title"
            className="font-condensed text-naets-white leading-none mb-8"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(64px, 11vw, 168px)',
              letterSpacing: '0.02em',
            }}
          >
            NÆTS
            <br />
            COLLECTIVE
          </h1>
          <p
            className="font-sans text-naets-mid-gray leading-relaxed max-w-2xl"
            style={{ fontSize: 14, letterSpacing: '0.04em', lineHeight: 1.8 }}
          >
            UN ESPACE POUR CELLES ET CEUX QUI COURENT, CRÉENT, TESTENT ET VIVENT LE MOUVEMENT.
          </p>
          <div className="h-px bg-white/10 mt-8 max-w-lg" aria-hidden="true" />
        </div>
      </section>

      {/* ── 2. MANIFESTE ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16 bg-naets-white"
        aria-labelledby="manifeste-title"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">

            <p
              className="font-sans text-naets-dark-gray uppercase"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              MANIFESTE
            </p>

            <div className="h-px bg-naets-light-gray w-16" aria-hidden="true" />

            <h2
              id="manifeste-title"
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(36px, 5vw, 64px)',
                letterSpacing: '0.03em',
              }}
            >
              PAS UN PROGRAMME.
              <br />
              UNE COMMUNAUTÉ.
            </h2>

            <div className="h-px bg-naets-light-gray w-16" aria-hidden="true" />

            <p
              className="font-sans text-naets-dark-gray leading-relaxed"
              style={{ fontSize: 15, letterSpacing: '0.02em', lineHeight: 2 }}
            >
              Le Collective n'est pas un programme de fidélité. C'est une communauté de coureurs, de créateurs
              et de personnes en mouvement qui partagent la même vision : courir avec sobriété, créer avec
              intention, avancer avec exigence. Rejoindre le NÆTS Collective, c'est rejoindre une tribu silencieuse
              qui n'a pas besoin de se montrer pour exister.
            </p>

          </div>
        </div>
      </section>

      {/* ── 3. RUNNING CLUB ──────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16"
        style={{ backgroundColor: '#F5F5F2' }}
        aria-labelledby="running-club-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="flex items-start gap-6 mb-16">
            <span
              className="font-sans text-naets-white bg-naets-black inline-flex items-center justify-center shrink-0 mt-1"
              style={{ fontSize: 10, width: 22, height: 22, fontWeight: 600 }}
              aria-hidden="true"
            >
              01
            </span>
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-2"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                MOUVEMENT COLLECTIF
              </p>
              <h2
                id="running-club-title"
                className="font-condensed text-naets-black leading-none mb-4"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 6vw, 80px)',
                  letterSpacing: '0.02em',
                }}
              >
                RUNNING CLUB
              </h2>
              <p
                className="font-sans text-naets-dark-gray leading-relaxed max-w-xl"
                style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
              >
                Sorties hebdomadaires, tracks locaux, progression collective. Courir ensemble sans compétition,
                juste l'effort, la régularité et le groupe.
              </p>
            </div>
          </div>

          {/* Event cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-naets-black">
            {events.map((event, idx) => (
              <article
                key={event.type}
                className={`relative p-8 md:p-10 flex flex-col gap-6 border-b md:border-b-0 ${idx < events.length - 1 ? 'md:border-r' : ''} border-naets-black bg-naets-white`}
              >
                {/* Top: tag + index */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-sans text-naets-dark-gray uppercase border border-naets-light-gray px-3 py-1"
                    style={{ fontSize: 9, letterSpacing: '0.15em' }}
                  >
                    {event.tag}
                  </span>
                  <span
                    className="font-condensed text-naets-light-gray leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: '0.02em' }}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Event type */}
                <h3
                  className="font-condensed text-naets-black leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {event.type}
                </h3>

                <div className="h-px bg-naets-light-gray" aria-hidden="true" />

                {/* Time & location */}
                <div className="flex flex-col gap-2">
                  {[
                    { key: 'JOUR', val: event.day },
                    { key: 'HEURE', val: event.time },
                  ].map((row) => (
                    <div key={row.key} className="flex items-center gap-3">
                      <span
                        className="font-sans text-naets-dark-gray uppercase"
                        style={{ fontSize: 10, letterSpacing: '0.15em', minWidth: 56 }}
                      >
                        {row.key}
                      </span>
                      <span
                        className="font-sans text-naets-black uppercase font-medium"
                        style={{ fontSize: 11, letterSpacing: '0.12em' }}
                      >
                        {row.val}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3">
                    <span
                      className="font-sans text-naets-dark-gray uppercase"
                      style={{ fontSize: 10, letterSpacing: '0.15em', minWidth: 56 }}
                    >
                      LIEU
                    </span>
                    <span
                      className="font-sans text-naets-black"
                      style={{ fontSize: 12, letterSpacing: '0.04em', lineHeight: 1.5 }}
                    >
                      {event.location}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. SOCIAL CLUB ───────────────────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="social-club-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="flex items-start gap-6 mb-16">
            <span
              className="font-sans text-naets-black bg-naets-white inline-flex items-center justify-center shrink-0 mt-1"
              style={{ fontSize: 10, width: 22, height: 22, fontWeight: 600 }}
              aria-hidden="true"
            >
              02
            </span>
            <div>
              <p
                className="font-sans text-naets-dark-gray uppercase mb-2"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                CRÉATION &amp; EXPRESSION
              </p>
              <h2
                id="social-club-title"
                className="font-condensed text-naets-white leading-none mb-4"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 6vw, 80px)',
                  letterSpacing: '0.02em',
                }}
              >
                SOCIAL CLUB
              </h2>
              <p
                className="font-sans text-naets-mid-gray leading-relaxed max-w-xl"
                style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
              >
                Création, expression, culture urbaine. Le Social Club rassemble ceux qui créent autour
                du mouvement — pas seulement ceux qui courent.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: feature items */}
            <div className="flex flex-col gap-0 border border-white/10">
              {socialFeatures.map((item, idx) => (
                <div
                  key={item.number}
                  className={`p-8 flex flex-col gap-4 ${idx < socialFeatures.length - 1 ? 'border-b border-white/10' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-condensed text-naets-dark-gray leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28 }}
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                    <div className="h-px bg-white/10 flex-1" aria-hidden="true" />
                  </div>
                  <h3
                    className="font-condensed text-naets-white leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(26px, 3vw, 36px)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-sans text-naets-dark-gray leading-relaxed"
                    style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: 2×2 dark image placeholder grid */}
            <div className="grid grid-cols-2 gap-0 border border-white/10" aria-hidden="true">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`relative min-h-[200px] flex items-center justify-center overflow-hidden ${i % 2 === 0 ? 'border-r border-white/10' : ''} ${i < 2 ? 'border-b border-white/10' : ''}`}
                  style={{ backgroundColor: i % 2 === 0 ? '#0A0A0A' : '#111111' }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <p
                    className="relative font-sans text-white/20 uppercase"
                    style={{ fontSize: 9, letterSpacing: '0.25em' }}
                  >
                    IMAGE
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. FORMULAIRE D'INSCRIPTION ──────────────────────────────────────── */}
      <section
        className="py-24 px-8 md:px-16 bg-naets-white"
        aria-labelledby="inscription-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-naets-light-gray">

            {/* Left: title + context */}
            <div className="p-10 md:p-16 flex flex-col justify-center gap-8 border-b lg:border-b-0 lg:border-r border-naets-light-gray">
              <p
                className="font-sans text-naets-dark-gray uppercase"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                NÆTS COLLECTIVE — INSCRIPTION
              </p>
              <h2
                id="inscription-title"
                className="font-condensed text-naets-black leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(42px, 5vw, 72px)',
                  letterSpacing: '0.02em',
                }}
              >
                REJOINDRE
                <br />
                LE COLLECTIVE
              </h2>
              <div className="h-px bg-naets-light-gray" aria-hidden="true" />
              <p
                className="font-sans text-naets-dark-gray leading-relaxed"
                style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.9 }}
              >
                Remplis ce formulaire pour intégrer le Collective. Running Club pour les sorties
                hebdomadaires, Social Club pour la création et la culture, ou les deux. Gratuit,
                sans engagement, avec exigence.
              </p>

              {/* Quick benefits */}
              <ul className="flex flex-col gap-3">
                {[
                  'Accès aux sessions Running Club',
                  'Newsletter éditoriale exclusive',
                  'Early access aux nouvelles collections',
                  'Invitation aux événements NÆTS',
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 font-sans"
                    style={{ fontSize: 12, letterSpacing: '0.04em' }}
                  >
                    <span className="w-3 h-px bg-naets-black shrink-0" aria-hidden="true" />
                    <span className="text-naets-dark-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
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
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: '0.03em' }}
                  >
                    INSCRIPTION REÇUE
                  </h3>
                  <p
                    className="font-sans text-naets-dark-gray leading-relaxed max-w-xs"
                    style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                  >
                    Bienvenue dans le Collective. Tu recevras un e-mail de confirmation prochainement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>

                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="prenom"
                        className="font-sans text-naets-dark-gray uppercase"
                        style={{ fontSize: 10, letterSpacing: '0.2em' }}
                      >
                        PRÉNOM
                      </label>
                      <input
                        id="prenom"
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
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="nom"
                        className="font-sans text-naets-dark-gray uppercase"
                        style={{ fontSize: 10, letterSpacing: '0.2em' }}
                      >
                        NOM
                      </label>
                      <input
                        id="nom"
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
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-sans text-naets-dark-gray uppercase"
                      style={{ fontSize: 10, letterSpacing: '0.2em' }}
                    >
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formState.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full font-sans text-naets-black bg-transparent border-b border-naets-black pb-2 focus:outline-none placeholder-naets-mid-gray"
                      style={{ fontSize: 13, letterSpacing: '0.03em' }}
                      placeholder="jean@exemple.fr"
                    />
                  </div>

                  {/* Ville */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="ville"
                      className="font-sans text-naets-dark-gray uppercase"
                      style={{ fontSize: 10, letterSpacing: '0.2em' }}
                    >
                      VILLE
                    </label>
                    <input
                      id="ville"
                      type="text"
                      required
                      autoComplete="address-level2"
                      value={formState.ville}
                      onChange={(e) => handleChange('ville', e.target.value)}
                      className="w-full font-sans text-naets-black bg-transparent border-b border-naets-black pb-2 focus:outline-none placeholder-naets-mid-gray"
                      style={{ fontSize: 13, letterSpacing: '0.03em' }}
                      placeholder="Paris"
                    />
                  </div>

                  {/* Club selection */}
                  <fieldset className="flex flex-col gap-4">
                    <legend
                      className="font-sans text-naets-dark-gray uppercase"
                      style={{ fontSize: 10, letterSpacing: '0.2em' }}
                    >
                      JE REJOINS
                    </legend>
                    <div className="flex flex-col gap-3">
                      {[
                        { value: 'running' as ClubOption, label: 'RUNNING CLUB' },
                        { value: 'social' as ClubOption, label: 'SOCIAL CLUB' },
                        { value: 'les-deux' as ClubOption, label: 'LES DEUX' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-4 cursor-pointer group"
                        >
                          {/* Custom radio visual */}
                          <span
                            className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors duration-100 ${
                              formState.club === option.value
                                ? 'bg-naets-black border-naets-black'
                                : 'bg-transparent border-naets-black'
                            }`}
                            aria-hidden="true"
                          >
                            {formState.club === option.value && (
                              <span className="block w-2 h-2 bg-naets-white" />
                            )}
                          </span>
                          <input
                            type="radio"
                            name="club"
                            value={option.value}
                            checked={formState.club === option.value}
                            onChange={() => handleChange('club', option.value)}
                            className="sr-only"
                            required
                          />
                          <span
                            className="font-sans text-naets-black uppercase"
                            style={{ fontSize: 11, letterSpacing: '0.12em' }}
                          >
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 font-sans text-naets-white bg-naets-black px-8 py-5 uppercase transition-colors duration-150 hover:bg-naets-near-black"
                    style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 600 }}
                  >
                    S'INSCRIRE
                    <ArrowRight size={12} />
                  </button>

                  <p
                    className="font-sans text-naets-dark-gray text-center"
                    style={{ fontSize: 10, letterSpacing: '0.05em' }}
                  >
                    Gratuit · Sans engagement · Données protégées
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
