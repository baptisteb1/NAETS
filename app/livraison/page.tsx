import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Livraison',
  description:
    'Informations sur la livraison NÆTS. Livraison offerte dès 100 €, expédition sous 24h, livraison standard et express disponibles.',
  openGraph: {
    title: 'Livraison | NÆTS',
    description: 'Livraison offerte dès 100 €. Expédition sous 24h.',
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const DELIVERY_OPTIONS = [
  {
    number: '01',
    title: 'STANDARD',
    delay: '3–5 jours ouvrés',
    price: '4,90 €',
    free: 'Offerte dès 100 €',
    detail:
      'Livraison à domicile ou en point relais. Numéro de suivi envoyé par email dès expédition.',
  },
  {
    number: '02',
    title: 'EXPRESS',
    delay: '24h ouvrées',
    price: '9,90 €',
    free: null,
    detail:
      'Livraison le lendemain pour toute commande passée avant 12h (hors week-end et jours fériés).',
  },
  {
    number: '03',
    title: 'INTERNATIONALE',
    delay: '5–10 jours ouvrés',
    price: 'Variable',
    free: null,
    detail:
      "Livraison dans toute l'Europe et hors UE. Délais et tarifs calculés au moment du paiement selon destination.",
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'VALIDATION',
    description: 'Votre commande est confirmée et transmise à notre entrepôt immédiatement après validation du paiement.',
  },
  {
    number: '02',
    title: 'PRÉPARATION',
    description: 'Chaque colis est préparé et contrôlé manuellement par notre équipe. Emballage soigné, adapté à la nature des produits.',
  },
  {
    number: '03',
    title: 'EXPÉDITION',
    description: 'Votre colis est expédié sous 24h. Vous recevez un email de confirmation avec le numéro de suivi.',
  },
  {
    number: '04',
    title: 'LIVRAISON',
    description: "Votre commande est livrée à l'adresse indiquée. Un avis de passage vous est laissé en cas d'absence.",
  },
];

const FAQ_LIVRAISON = [
  {
    question: 'Quand ma commande sera-t-elle expédiée ?',
    answer:
      'Toutes les commandes validées avant 12h sont expédiées le jour même. Les commandes passées après 12h sont expédiées le lendemain ouvré.',
  },
  {
    question: "Puis-je modifier l'adresse de livraison ?",
    answer:
      'Une modification est possible dans les 2 heures suivant la commande. Contactez-nous rapidement à contact@naets.fr avec votre numéro de commande.',
  },
  {
    question: 'La livraison est-elle vraiment gratuite ?',
    answer:
      "Oui, dès 100 € d'achat en France métropolitaine, la livraison standard est offerte automatiquement. Aucun code promo à saisir.",
  },
  {
    question: 'Que faire si mon colis est endommagé ?',
    answer:
      'Prenez des photos du colis et du produit, puis contactez-nous sous 48h à contact@naets.fr. Nous prenons en charge le remplacement ou le remboursement.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LivraisonPage() {
  return (
    <main>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-20 pb-20 px-8 md:px-16 overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="livraison-title"
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
            id="livraison-title"
            className="font-condensed text-white leading-none mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(64px, 10vw, 120px)',
              letterSpacing: '0.02em',
            }}
          >
            LIVRAISON
          </h1>
          <p
            className="font-sans text-naets-mid-gray max-w-lg"
            style={{ fontSize: 14, letterSpacing: '0.03em', lineHeight: 1.75 }}
          >
            Livraison offerte dès 100 €. Expédition sous 24h, partout en France et à l'international.
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHT BAR ──────────────────────────────────────────────────── */}
      <section className="bg-naets-off-white border-b border-naets-light-gray" aria-label="Points clés livraison">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-naets-light-gray">
            {[
              { value: 'GRATUITE', label: 'dès 100 € en France' },
              { value: '24H', label: "Expédition sous 24h ouvrées" },
              { value: 'SUIVI', label: "Numéro de suivi inclus" },
            ].map((item) => (
              <div key={item.value} className="flex flex-col items-center justify-center py-8 px-6 gap-1 text-center">
                <span
                  className="font-condensed text-naets-black leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '0.04em' }}
                >
                  {item.value}
                </span>
                <span
                  className="font-sans text-naets-dark-gray uppercase"
                  style={{ fontSize: 11, letterSpacing: '0.15em' }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPTIONS DE LIVRAISON ────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16 bg-white"
        aria-labelledby="options-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="mb-14">
            <p
              className="font-sans text-naets-dark-gray uppercase mb-4"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              NÆTS — MODES D'EXPÉDITION
            </p>
            <h2
              id="options-title"
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(36px, 5vw, 68px)',
                letterSpacing: '0.02em',
              }}
            >
              OPTIONS DE LIVRAISON
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-naets-light-gray">
            {DELIVERY_OPTIONS.map((opt, idx) => (
              <div
                key={opt.number}
                className={`p-10 flex flex-col gap-6 border-b border-naets-light-gray ${
                  idx < DELIVERY_OPTIONS.length - 1 ? 'md:border-r md:border-b-0' : 'md:border-b-0'
                }`}
              >
                {/* Number */}
                <span
                  className="font-condensed text-naets-light-gray leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 64, letterSpacing: '0.02em', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {opt.number}
                </span>

                <div className="h-px bg-naets-black w-8" aria-hidden="true" />

                {/* Title + delay */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-condensed text-naets-black leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: '0.06em' }}
                  >
                    {opt.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="font-sans text-naets-dark-gray border border-naets-light-gray px-2.5 py-1 uppercase"
                      style={{ fontSize: 10, letterSpacing: '0.15em' }}
                    >
                      {opt.delay}
                    </span>
                    <span
                      className="font-sans text-naets-black font-semibold"
                      style={{ fontSize: 13 }}
                    >
                      {opt.price}
                    </span>
                  </div>
                  {opt.free && (
                    <span
                      className="font-sans text-naets-black uppercase bg-naets-off-white px-2.5 py-1 self-start"
                      style={{ fontSize: 10, letterSpacing: '0.12em', fontWeight: 600 }}
                    >
                      ✓ {opt.free}
                    </span>
                  )}
                </div>

                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                >
                  {opt.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSUS D'EXPÉDITION ──────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16"
        style={{ backgroundColor: '#F5F5F2' }}
        aria-labelledby="processus-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="mb-14">
            <p
              className="font-sans text-naets-dark-gray uppercase mb-4"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              NÆTS — PROCESSUS
            </p>
            <h2
              id="processus-title"
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(36px, 5vw, 68px)',
                letterSpacing: '0.02em',
              }}
            >
              DE LA COMMANDE À LA LIVRAISON
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-naets-light-gray">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className={`
                  p-8 md:p-10 flex flex-col gap-5 bg-white
                  border-b border-naets-light-gray
                  ${idx < PROCESS_STEPS.length - 1 ? 'lg:border-r lg:border-b-0' : 'lg:border-b-0'}
                  ${idx % 2 === 0 ? 'sm:border-r sm:last:border-r-0 lg:border-r' : ''}
                `}
              >
                <span
                  className="font-condensed text-naets-light-gray leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 64, letterSpacing: '0.02em', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div className="h-px bg-naets-black w-8" aria-hidden="true" />
                <h3
                  className="font-condensed text-naets-black leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: '0.06em' }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ LIVRAISON ───────────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16 bg-white"
        aria-labelledby="faq-title"
      >
        <div className="max-w-screen-xl mx-auto">

          <div className="mb-14">
            <p
              className="font-sans text-naets-dark-gray uppercase mb-4"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              NÆTS — QUESTIONS FRÉQUENTES
            </p>
            <h2
              id="faq-title"
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(36px, 5vw, 68px)',
                letterSpacing: '0.02em',
              }}
            >
              FAQ LIVRAISON
            </h2>
          </div>

          <div className="border border-naets-light-gray divide-y divide-naets-light-gray">
            {FAQ_LIVRAISON.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-0">
                <div className="p-8 lg:p-10 lg:border-r border-naets-light-gray">
                  <h3
                    className="font-condensed text-naets-black leading-snug"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: '0.05em' }}
                  >
                    {item.question}
                  </h3>
                </div>
                <div className="px-8 pb-8 pt-0 lg:p-10 flex items-center">
                  <p
                    className="font-sans text-naets-dark-gray leading-relaxed"
                    style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section
        className="py-16 px-8 md:px-16 border-t border-naets-light-gray"
        style={{ backgroundColor: '#F5F5F2' }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="font-sans text-naets-dark-gray uppercase mb-2"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              NÆTS — ASSISTANCE
            </p>
            <p
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                letterSpacing: '0.02em',
              }}
            >
              UNE QUESTION SUR VOTRE LIVRAISON ?
            </p>
            <p
              className="font-sans text-naets-dark-gray mt-2"
              style={{ fontSize: 13, letterSpacing: '0.02em' }}
            >
              Notre équipe répond sous 24h ouvrées.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-sans font-medium bg-naets-black text-white px-10 py-4 transition-colors duration-150 hover:bg-naets-near-black"
              style={{ fontSize: 11, letterSpacing: '0.15em' }}
            >
              NOUS CONTACTER
              <ArrowRight size={12} />
            </Link>
            <Link
              href="/faq"
              className="font-sans text-naets-dark-gray uppercase underline underline-offset-4 hover:text-naets-black transition-colors duration-150"
              style={{ fontSize: 11, letterSpacing: '0.15em' }}
            >
              VOIR LA FAQ
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
