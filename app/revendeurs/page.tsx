import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Nos revendeurs',
  description:
    'Retrouvez les revendeurs agréés NÆTS en France. Paris, Lyon, Bordeaux, Marseille, Nice — trouvez le point de vente le plus proche.',
  openGraph: {
    title: 'Nos revendeurs | NÆTS',
    description: 'Retrouvez nos partenaires revendeurs NÆTS partout en France.',
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Retailer {
  name: string;
  address: string;
  city: string;
  email?: string;
  website?: string;
}

const RETAILERS: Retailer[] = [
  {
    name: 'RUNNER STORE PARIS',
    address: '42 rue du Sport',
    city: '75001 Paris',
    email: 'running@runnerstore.fr',
    website: 'https://runnerstore.fr',
  },
  {
    name: 'PERFORMANCE RUN',
    address: '18 av. Marceau',
    city: '75008 Paris',
    email: 'contact@perfrun.com',
    website: 'https://perfrun.com',
  },
  {
    name: 'SPORT CONCEPT LYON',
    address: '5 rue Victor Hugo',
    city: '69001 Lyon',
    website: 'https://sportconcept-lyon.fr',
  },
  {
    name: 'RUN & URBAN BORDEAUX',
    address: "12 cours de l’Intendance",
    city: '33000 Bordeaux',
    website: 'https://runurban-bordeaux.fr',
  },
  {
    name: 'LA FOULÉE MARSEILLE',
    address: '28 La Canebière',
    city: '13001 Marseille',
    website: 'https://lafoulee-marseille.fr',
  },
  {
    name: 'ATHLÈTICA NICE',
    address: '14 av. Jean Médecin',
    city: '06000 Nice',
    website: 'https://athletica-nice.fr',
  },
];

const CITIES = ['TOUTES LES VILLES', 'PARIS', 'LYON', 'BORDEAUX', 'MARSEILLE', 'NICE'];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RevendeursPage() {
  return (
    <main>

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-20 pb-20 px-8 md:px-16 overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="revendeurs-title"
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
            NÆTS — DISTRIBUTION
          </p>
          <h1
            id="revendeurs-title"
            className="font-condensed text-white leading-none mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(64px, 10vw, 120px)',
              letterSpacing: '0.02em',
            }}
          >
            NOS REVENDEURS
          </h1>
          <p
            className="font-sans text-naets-mid-gray"
            style={{ fontSize: 14, letterSpacing: '0.03em' }}
          >
            Retrouvez nos partenaires revendeurs NÆTS.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ─────────────────────────────────────────────────────── */}
      <section
        className="border-b border-naets-light-gray bg-white"
        aria-label="Filtrer par ville"
      >
        <div className="max-w-screen-xl mx-auto px-8 md:px-16">
          <div className="flex items-stretch overflow-x-auto">
            {CITIES.map((city, idx) => (
              <button
                key={city}
                type="button"
                className={`
                  shrink-0 font-sans uppercase px-6 py-5 border-r border-naets-light-gray
                  transition-colors duration-150 text-left
                  ${idx === 0
                    ? 'bg-naets-black text-white'
                    : 'bg-white text-naets-dark-gray hover:text-naets-black hover:bg-naets-off-white'
                  }
                `}
                style={{ fontSize: 11, letterSpacing: '0.15em', fontWeight: idx === 0 ? 600 : 400 }}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── RETAILER GRID ──────────────────────────────────────────────────── */}
      <section
        className="py-20 px-8 md:px-16 bg-white"
        aria-label="Liste des revendeurs"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Count label */}
          <div className="flex items-center justify-between mb-10">
            <p
              className="font-sans text-naets-dark-gray uppercase"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              {RETAILERS.length} REVENDEURS AGRÉÉS
            </p>
            <div className="h-px bg-naets-light-gray flex-1 mx-8" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-naets-light-gray">
            {RETAILERS.map((retailer, idx) => {
              const isLastRow2 = idx >= 3;
              const isRightCol = (idx + 1) % 3 === 0;
              const isBottomRow = idx >= RETAILERS.length - (RETAILERS.length % 3 || 3);

              return (
                <div
                  key={retailer.name}
                  className={`
                    p-6 md:p-8 flex flex-col gap-4
                    border-b border-naets-light-gray
                    ${!isRightCol ? 'lg:border-r' : ''}
                    ${(idx % 2 === 0) ? 'sm:border-r sm:last:border-r-0 lg:border-r' : ''}
                    ${isBottomRow ? 'lg:border-b-0' : ''}
                    ${isLastRow2 && idx >= 3 && idx < RETAILERS.length ? 'sm:border-b-0' : ''}
                  `}
                >
                  {/* City tag */}
                  <span
                    className="font-sans text-naets-dark-gray uppercase"
                    style={{ fontSize: 10, letterSpacing: '0.2em' }}
                  >
                    {retailer.city.split(' ').slice(1).join(' ')}
                  </span>

                  {/* Name */}
                  <h2
                    className="font-sans text-naets-near-black leading-tight"
                    style={{ fontSize: 14, letterSpacing: '0.05em', fontWeight: 600 }}
                  >
                    {retailer.name}
                  </h2>

                  <div className="h-px bg-naets-light-gray" aria-hidden="true" />

                  {/* Address */}
                  <div className="flex flex-col gap-1">
                    <p
                      className="font-sans text-naets-dark-gray"
                      style={{ fontSize: 13, letterSpacing: '0.02em' }}
                    >
                      {retailer.address}
                    </p>
                    <p
                      className="font-sans text-naets-dark-gray"
                      style={{ fontSize: 13, letterSpacing: '0.02em' }}
                    >
                      {retailer.city}
                    </p>
                  </div>

                  {/* Email */}
                  {retailer.email && (
                    <a
                      href={`mailto:${retailer.email}`}
                      className="font-sans text-naets-dark-gray hover:text-naets-black transition-colors duration-150"
                      style={{ fontSize: 12, letterSpacing: '0.02em' }}
                    >
                      {retailer.email}
                    </a>
                  )}

                  {/* CTA */}
                  <div className="mt-auto pt-2">
                    <a
                      href={retailer.website ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-naets-black uppercase hover:text-naets-dark-gray transition-colors duration-150"
                      style={{ fontSize: 11, letterSpacing: '0.15em', fontWeight: 500 }}
                    >
                      VOIR LE SITE
                      <ArrowRight size={10} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA PARTENAIRE ─────────────────────────────────────────────────── */}
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
              NÆTS — DISTRIBUTION
            </p>
            <p
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '0.02em',
              }}
            >
              VOUS ÊTES REVENDEUR ?
            </p>
            <p
              className="font-sans text-naets-dark-gray mt-2"
              style={{ fontSize: 13, letterSpacing: '0.02em' }}
            >
              Rejoignez le réseau de distribution NÆTS.
            </p>
          </div>
          <Link
            href="/retail-partenaire"
            className="inline-flex items-center gap-3 shrink-0 font-sans font-medium bg-naets-black text-white px-10 py-4 transition-colors duration-150 hover:bg-naets-near-black"
            style={{ fontSize: 11, letterSpacing: '0.15em' }}
          >
            CONTACTEZ-NOUS
            <ArrowRight size={12} />
          </Link>
        </div>
      </section>

    </main>
  );
}
