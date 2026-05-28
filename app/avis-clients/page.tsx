import type { Metadata } from 'next';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Avis clients',
  description:
    'Découvrez les avis clients NÆTS. Note moyenne 4.9/5 basée sur 500+ avis vérifiés. Chaussures de running Æ-REFLEX, Æ-SLYDE, Æ-ESSENTIAL.',
  openGraph: {
    title: 'Avis clients | NÆTS',
    description: 'Note 4.9/5 — 500+ avis vérifiés sur les produits NÆTS.',
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Review {
  author: string;
  rating: number;
  text: string;
  product: string;
}

const REVIEWS: Review[] = [
  {
    author: 'Thomas M.',
    rating: 5,
    text: 'Æ-REFLEX incroyable. Légèreté et maintien au top. Je suis passé de Nike à NÆTS et je ne regrette pas.',
    product: 'Æ-REFLEX',
  },
  {
    author: 'Sarah L.',
    rating: 5,
    text: 'Design épuré, confort parfait. La Æ-SLYDE pour mes longues sorties, rien de mieux.',
    product: 'Æ-SLYDE',
  },
  {
    author: 'Maxime D.',
    rating: 4,
    text: 'Qualité premium évidente. Livraison rapide. Très satisfait.',
    product: 'Æ-ESSENTIAL',
  },
  {
    author: 'Julie R.',
    rating: 5,
    text: "Running Top + Short parfaits pour l’entraînement. Respirant et stylé.",
    product: 'RUNNING TOP',
  },
  {
    author: 'Antoine B.',
    rating: 5,
    text: "J'attendais une marque française technique et premium. C'est fait.",
    product: 'Æ-REFLEX',
  },
  {
    author: 'Camille V.',
    rating: 5,
    text: 'Æ-ESSENTIAL pour mon quotidien, confort immédiat, tenue parfaite.',
    product: 'Æ-ESSENTIAL',
  },
  {
    author: 'Pierre T.',
    rating: 5,
    text: 'Service client réactif, livraison en 24h, produit conforme. Parfait.',
    product: 'Æ-SLYDE',
  },
  {
    author: 'Emma S.',
    rating: 4,
    text: 'Belle marque, belle vision. Hâte de voir les prochaines collections.',
    product: 'Æ-ESSENTIAL',
  },
];

const RATING_BARS = [
  { stars: 5, percentage: 88 },
  { stars: 4, percentage: 9 },
  { stars: 3, percentage: 2 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0 },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarDisplay({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <span
      className="font-sans text-naets-black"
      style={{ fontSize: 13, letterSpacing: '0.05em' }}
      aria-label={`${rating} étoiles sur ${max}`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-naets-black' : 'text-naets-light-gray'}>
          ★
        </span>
      ))}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AvisClientsPage() {
  return (
    <main>

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-20 pb-20 px-8 md:px-16 bg-white border-b border-naets-light-gray"
        aria-labelledby="avis-title"
      >
        <div className="max-w-screen-xl mx-auto">
          <p
            className="font-sans text-naets-dark-gray uppercase mb-6"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            NÆTS — COMMUNAUTÉ
          </p>
          <h1
            id="avis-title"
            className="font-condensed text-naets-near-black leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(64px, 10vw, 120px)',
              letterSpacing: '0.02em',
            }}
          >
            AVIS CLIENTS
          </h1>
        </div>
      </section>

      {/* ── RATING SUMMARY ─────────────────────────────────────────────────── */}
      <section
        className="relative py-20 px-8 md:px-16 overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-label="Résumé des avis"
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">

            {/* Left: big score */}
            <div className="p-10 md:p-16 flex flex-col justify-center gap-4 border-b md:border-b-0 md:border-r border-white/10">
              <p
                className="font-condensed text-white leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(96px, 14vw, 160px)',
                  letterSpacing: '0.02em',
                  lineHeight: 0.9,
                }}
                aria-label="Note de 4.9 sur 5"
              >
                4.9
                <span
                  className="text-naets-mid-gray"
                  style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
                >
                  /5
                </span>
              </p>
              <p
                className="font-sans text-naets-mid-gray uppercase"
                style={{ fontSize: 11, letterSpacing: '0.2em' }}
              >
                Basé sur 500+ avis vérifiés
              </p>
              <div className="flex items-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-white" style={{ fontSize: 20 }}>★</span>
                ))}
              </div>
            </div>

            {/* Right: rating bars */}
            <div className="p-10 md:p-16 flex flex-col justify-center gap-4">
              {RATING_BARS.map(({ stars, percentage }) => (
                <div key={stars} className="flex items-center gap-4">
                  {/* Star label */}
                  <span
                    className="font-sans text-naets-mid-gray shrink-0 w-4 text-right"
                    style={{ fontSize: 12, letterSpacing: '0.05em' }}
                  >
                    {stars}★
                  </span>

                  {/* Bar track */}
                  <div
                    className="flex-1 bg-white/10"
                    style={{ height: 2 }}
                    aria-hidden="true"
                  >
                    <div
                      className="h-full bg-white"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  {/* Percentage */}
                  <span
                    className="font-sans text-naets-mid-gray shrink-0 w-8 text-right"
                    style={{ fontSize: 11, letterSpacing: '0.05em' }}
                  >
                    {percentage}%
                  </span>
                </div>
              ))}

              <div className="h-px bg-white/10 mt-2" aria-hidden="true" />

              <p
                className="font-sans text-naets-dark-gray uppercase"
                style={{ fontSize: 10, letterSpacing: '0.2em' }}
              >
                AVIS COLLECTÉS VIA NOTRE PARTENAIRE DE CONFIANCE
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── REVIEWS GRID ───────────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16 bg-white"
        aria-label="Témoignages clients"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section label */}
          <div className="flex items-center gap-6 mb-12">
            <p
              className="font-sans text-naets-dark-gray uppercase shrink-0"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              TÉMOIGNAGES VÉRIFIÉS
            </p>
            <div className="h-px bg-naets-light-gray flex-1" aria-hidden="true" />
            <p
              className="font-sans text-naets-dark-gray uppercase shrink-0"
              style={{ fontSize: 11, letterSpacing: '0.15em' }}
            >
              {REVIEWS.length} AVIS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-naets-light-gray">
            {REVIEWS.map((review, idx) => {
              const col = idx % 4;
              const isLastRow = idx >= REVIEWS.length - (REVIEWS.length % 4 || 4);
              const isRightmost = col === 3;

              return (
                <article
                  key={idx}
                  className={`
                    p-5 md:p-6 flex flex-col gap-4
                    border-b border-naets-light-gray
                    ${!isRightmost ? 'lg:border-r' : ''}
                    ${idx % 2 === 0 ? 'sm:border-r' : ''}
                    ${isLastRow ? 'lg:border-b-0' : ''}
                  `}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <span
                        className="font-sans text-naets-near-black"
                        style={{ fontSize: 13, letterSpacing: '0.05em', fontWeight: 600 }}
                      >
                        {review.author}
                      </span>
                      <StarDisplay rating={review.rating} />
                    </div>
                    {/* Verified badge */}
                    <span
                      className="font-sans text-white bg-naets-black px-2 py-1 shrink-0"
                      style={{ fontSize: 9, letterSpacing: '0.12em' }}
                      aria-label="Avis vérifié"
                    >
                      VÉRIFIÉ
                    </span>
                  </div>

                  <div className="h-px bg-naets-light-gray" aria-hidden="true" />

                  {/* Review text */}
                  <p
                    className="font-sans text-naets-dark-gray leading-relaxed flex-1"
                    style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.75 }}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Product tag */}
                  <span
                    className="font-sans text-naets-dark-gray border border-naets-light-gray px-2 py-1 self-start uppercase"
                    style={{ fontSize: 10, letterSpacing: '0.15em' }}
                  >
                    {review.product}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
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
              NÆTS — COMMUNAUTÉ
            </p>
            <p
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '0.02em',
              }}
            >
              PARTAGEZ VOTRE EXPÉRIENCE
            </p>
            <p
              className="font-sans text-naets-dark-gray mt-2"
              style={{ fontSize: 13, letterSpacing: '0.02em' }}
            >
              Vous avez acheté un produit NÆTS ? Laissez votre avis.
            </p>
          </div>
          <a
            href="mailto:avis@naets.fr"
            className="inline-flex items-center gap-3 shrink-0 font-sans font-medium bg-naets-black text-white px-10 py-4 transition-colors duration-150 hover:bg-naets-near-black"
            style={{ fontSize: 11, letterSpacing: '0.15em' }}
          >
            LAISSER UN AVIS
          </a>
        </div>
      </section>

    </main>
  );
}
