import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-8 px-6">
      {/* Decorative label */}
      <span
        className="font-sans text-[10px] tracking-[0.25em] uppercase text-naets-mid-gray"
      >
        Erreur 404
      </span>

      {/* Headline */}
      <h1
        className="font-condensed text-naets-black uppercase text-center leading-none"
        style={{ fontSize: 'clamp(52px, 10vw, 96px)', letterSpacing: '0.04em', fontFamily: "'Bebas Neue', sans-serif" }}
      >
        PRODUIT INTROUVABLE
      </h1>

      {/* Thin rule */}
      <div className="w-16 h-px bg-naets-black" />

      {/* Sub-copy */}
      <p
        className="font-sans text-naets-dark-gray text-center max-w-sm leading-relaxed"
        style={{ fontSize: 13 }}
      >
        Ce produit n'existe pas ou a été retiré de la collection.
        Explorez le shop pour découvrir nos modèles disponibles.
      </p>

      {/* CTA */}
      <Link
        href="/shop"
        className="flex items-center gap-3 h-12 px-8 border border-naets-black text-naets-black font-sans text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-150 hover:bg-naets-black hover:text-naets-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2"
      >
        <span>Retour au shop</span>
        <ArrowRight size={13} strokeWidth={1.5} />
      </Link>
    </div>
  );
}
