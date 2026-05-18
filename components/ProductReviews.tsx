'use client';

// TODO: brancher l'application d'avis clients (Judge.me, Loox, Stamped, etc.)

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
}

// Mock reviews — à remplacer par les vrais avis via intégration CRM/reviews
const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Thomas R.',
    date: '15 janvier 2027',
    rating: 5,
    title: 'Excellente paire de running',
    body: 'La qualité de construction est impressionnante. Légère, réactive, très bonne stabilité sur route. Je cours 60 km par semaine et cette chaussure répond parfaitement à mes attentes.',
    verified: true,
  },
  {
    id: '2',
    author: 'Camille B.',
    date: '3 février 2027',
    rating: 4,
    title: 'Bon rapport technicité / confort',
    body: 'Premier run avec la REFLEX : sensation très intéressante. La plaque carbone se fait sentir sans être agressive. Prendre sa taille habituelle.',
    verified: true,
  },
  {
    id: '3',
    author: 'Marc D.',
    date: '18 février 2027',
    rating: 5,
    title: 'Design et performance au même niveau',
    body: "Incroyable à regarder et encore plus à l'usage. La tige mesh respire bien, le maintien est précis. Mon prochain semi-marathon en NÆTS.",
    verified: true,
  },
  {
    id: '4',
    author: 'Sophie L.',
    date: '25 février 2027',
    rating: 4,
    title: 'Très satisfaite',
    body: 'Belle chaussure, livraison rapide, qualité premium. Légèrement rigide au départ puis parfaite après 3-4 sorties.',
    verified: false,
  },
];

function StarRating({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note : ${rating} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 12 12"
          fill={star <= rating ? '#111' : 'none'}
          stroke="#111"
          strokeWidth="0.75"
          aria-hidden="true"
        >
          <polygon points="6,0.5 7.5,4.5 12,4.5 8.5,7.2 9.8,11.5 6,8.8 2.2,11.5 3.5,7.2 0,4.5 4.5,4.5" />
        </svg>
      ))}
    </div>
  );
}

interface ProductReviewsProps {
  productId: string;
  productName: string;
}

export default function ProductReviews({ productId: _productId, productName }: ProductReviewsProps) {
  const [showForm, setShowForm] = useState(false);

  // TODO: fetch reviews by productId from reviews platform
  const reviews = MOCK_REVIEWS;

  const avgRating =
    reviews.length > 0
      ? Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10
      : 0;

  return (
    <section className="py-16 md:py-20 border-t border-naets-light-gray">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="section-number" aria-hidden="true">R</span>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-naets-dark-gray">
                Expériences clients
              </span>
            </div>
            <h2
              className="font-condensed text-naets-black uppercase leading-none"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '0.04em' }}
            >
              AVIS CLIENTS
            </h2>
            <p className="font-sans text-naets-dark-gray text-[12px] mt-2 italic">
              {productName}
            </p>
          </div>

          {reviews.length > 0 && (
            <div className="flex items-center gap-6 md:mb-1 flex-wrap">
              <div className="flex items-center gap-3">
                <span
                  className="font-condensed text-naets-black"
                  style={{ fontSize: 40, letterSpacing: '0.02em', lineHeight: 1 }}
                >
                  {avgRating.toFixed(1)}
                </span>
                <div>
                  <StarRating rating={Math.round(avgRating)} size={13} />
                  <p className="font-sans text-naets-dark-gray text-[11px] mt-1 tracking-[0.05em]">
                    {reviews.length} avis vérifiés
                  </p>
                </div>
              </div>
              <div className="h-10 w-px bg-naets-light-gray hidden md:block" />
              <button
                onClick={() => setShowForm((v) => !v)}
                className={cn(
                  'h-10 px-6 border border-naets-black',
                  'font-sans text-[11px] tracking-[0.15em] uppercase font-medium',
                  'hover:bg-naets-black hover:text-white transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black'
                )}
              >
                ÉCRIRE UN AVIS
              </button>
            </div>
          )}
        </div>

        {/* Reviews grid */}
        {reviews.length === 0 ? (
          <div className="py-16 text-center border border-naets-light-gray">
            <p
              className="font-condensed text-naets-mid-gray uppercase mb-3"
              style={{ fontSize: 22, letterSpacing: '0.06em' }}
            >
              AUCUN AVIS POUR L&apos;INSTANT
            </p>
            <p className="font-sans text-naets-dark-gray text-[13px] mb-6">
              Soyez le premier à écrire un avis.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className={cn(
                'h-10 px-6 border border-naets-black',
                'font-sans text-[11px] tracking-[0.15em] uppercase font-medium',
                'hover:bg-naets-black hover:text-white transition-all duration-150'
              )}
            >
              ÉCRIRE UN AVIS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 border border-naets-light-gray">
            {reviews.map((review, i) => (
              <div
                key={review.id}
                className={cn(
                  'p-7',
                  i % 2 === 0 ? 'md:border-r border-naets-light-gray' : '',
                  i < reviews.length - 2 ? 'border-b border-naets-light-gray' : '',
                  reviews.length % 2 !== 0 && i === reviews.length - 1
                    ? 'md:border-r-0'
                    : ''
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex flex-col gap-1.5">
                    <StarRating rating={review.rating} />
                    <p
                      className="font-sans font-semibold text-naets-black"
                      style={{ fontSize: 13 }}
                    >
                      {review.title}
                    </p>
                  </div>
                  {review.verified && (
                    <span
                      className="font-sans text-[9px] tracking-[0.12em] uppercase text-naets-dark-gray border border-naets-light-gray px-2 py-0.5 shrink-0 ml-4"
                    >
                      Vérifié
                    </span>
                  )}
                </div>
                <p className="font-sans text-naets-dark-gray leading-relaxed" style={{ fontSize: 13 }}>
                  {review.body}
                </p>
                <p className="font-sans text-naets-mid-gray text-[11px] mt-4 tracking-[0.05em]">
                  {review.author} — {review.date}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Write review form (placeholder) */}
        {showForm && (
          <div className="mt-8 border border-naets-light-gray p-8 bg-naets-off-white">
            <h3
              className="font-condensed text-naets-black uppercase mb-4"
              style={{ fontSize: 20, letterSpacing: '0.06em' }}
            >
              ÉCRIRE UN AVIS
            </h3>
            <p className="font-sans text-naets-dark-gray text-[13px] mb-6 leading-relaxed">
              Le formulaire d&apos;avis sera disponible lors de l&apos;intégration de la solution
              d&apos;avis clients.
              {/* TODO: intégrer formulaire Judge.me / Loox / Stamped.io */}
            </p>
            <button
              onClick={() => setShowForm(false)}
              className="font-sans text-[11px] tracking-[0.1em] underline text-naets-dark-gray hover:text-naets-black transition-colors"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
