'use client';

import { useState, useMemo } from 'react';
import { Heart, ArrowRight, Truck, RotateCcw, ShieldCheck, MessageCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import SizeSelector from '@/components/SizeSelector';
import QuantitySelector from '@/components/QuantitySelector';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import Accordion from '@/components/Accordion';
import ProductGrid from '@/components/ProductGrid';
import ProductReviews from '@/components/ProductReviews';
import ProductExplodedView from '@/components/ProductExplodedView';
import { type Product, products, getComplementaryProducts } from '@/data/products';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProductPageContentProps {
  product: Product;
  related: Product[];
}

// ─── Gallery placeholder ──────────────────────────────────────────────────────

function GalleryPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center bg-[#EBEBEA] overflow-hidden select-none',
        className
      )}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <span
        className="font-condensed text-[#C0C0B8] uppercase tracking-widest"
        style={{ fontSize: 'clamp(16px, 2.5vw, 24px)', letterSpacing: '0.2em' }}
      >
        {label}
      </span>
      <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-black/15" />
      <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-black/15" />
      <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-black/15" />
      <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-black/15" />
    </div>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

function ProductGallery({ productName }: { productName: string }) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const views = ['VUE 01', 'VUE 02', 'VUE 03'];

  return (
    <div className="flex flex-col gap-3">
      {/* Micro top bar */}
      <div className="flex items-center justify-between">
        <span className="font-naets-micro text-naets-mid-gray text-[9px] tracking-[0.2em]">
          PRODUCT VIEW
        </span>
        <span className="font-naets-micro text-naets-mid-gray text-[9px] tracking-[0.2em]">
          {String(activeThumb + 1).padStart(2, '0')} / {String(views.length).padStart(2, '0')}
        </span>
      </div>

      {/* Main image */}
      <button
        className="w-full cursor-zoom-in"
        style={{ aspectRatio: '4/5' }}
        onClick={() => setLightboxOpen(true)}
        aria-label={`Agrandir l'image de ${productName}`}
      >
        <GalleryPlaceholder label="NÆTS" className="w-full h-full" />
      </button>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-3 gap-2">
        {views.map((label, i) => (
          <button
            key={i}
            onClick={() => setActiveThumb(i)}
            aria-label={`${label} — ${productName}`}
            className={cn(
              'relative overflow-hidden transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-naets-black',
              activeThumb === i
                ? 'ring-1 ring-naets-black'
                : 'ring-1 ring-naets-light-gray hover:ring-naets-mid-gray'
            )}
            style={{ aspectRatio: '1/1' }}
          >
            <GalleryPlaceholder label={label} className="w-full h-full" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-8 font-naets-label text-white/50 hover:text-white text-[10px] tracking-[0.2em] transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Fermer"
          >
            FERMER ✕
          </button>
          <div
            className="w-full max-w-xl mx-8"
            style={{ aspectRatio: '4/5' }}
            onClick={(e) => e.stopPropagation()}
          >
            <GalleryPlaceholder label="NÆTS" className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Color selector ───────────────────────────────────────────────────────────

const COLOR_SWATCH: Record<string, string> = {
  'Black & White':  'linear-gradient(135deg, #000 50%, #fff 50%)',
  'Black White':    'linear-gradient(135deg, #000 50%, #fff 50%)',
  'Sable & Black':  'linear-gradient(135deg, #C8B99A 50%, #111 50%)',
  'Concrete Black': '#1a1a1a',
  'White':          '#f8f8f6',
  'Pantone Black':  '#000',
  'Pantone 11-0601 TPG Bright White': '#f5f5f2',
};

function ColorSelector({
  colors,
  selectedColor,
  onSelect,
}: {
  colors: string[];
  selectedColor: string;
  onSelect: (c: string) => void;
}) {
  return (
    <div>
      <p className="font-sans text-[11px] tracking-[0.15em] uppercase font-medium mb-3">
        COLORIS — {selectedColor}
      </p>
      <div className="flex gap-2 flex-wrap">
        {colors.map((color) => {
          const bg = COLOR_SWATCH[color] ?? '#888';
          const isSelected = selectedColor === color;
          const isLight = color === 'White' || color.includes('Bright White');
          return (
            <button
              key={color}
              onClick={() => onSelect(color)}
              aria-pressed={isSelected}
              aria-label={`Coloris ${color}`}
              title={color}
              className={cn(
                'w-8 h-8 transition-all duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-1',
                isSelected
                  ? 'ring-2 ring-naets-black ring-offset-2'
                  : 'ring-1 ring-naets-light-gray hover:ring-naets-black',
                isLight ? 'border border-naets-light-gray' : ''
              )}
              style={{ background: bg }}
            />
          );
        })}
      </div>
    </div>
  );
}

// ─── Reassurance row ──────────────────────────────────────────────────────────

function ReassuranceRow() {
  const items = [
    { icon: Truck,       label: 'Livraison offerte', sub: 'dès 100 €' },
    { icon: ShieldCheck, label: 'Paiement sécurisé', sub: '3D Secure'  },
    { icon: RotateCcw,   label: 'Retours 30 jours',  sub: 'Offerts'    },
  ];
  return (
    <div className="grid grid-cols-3 border border-naets-light-gray">
      {items.map(({ icon: Icon, label, sub }, i) => (
        <div
          key={label}
          className={cn(
            'flex flex-col items-center gap-1.5 py-4 px-2',
            i < items.length - 1 ? 'border-r border-naets-light-gray' : ''
          )}
        >
          <Icon size={15} strokeWidth={1.25} className="text-naets-dark-gray" />
          <div className="text-center">
            <p className="font-sans text-[10px] uppercase tracking-[0.1em] font-medium leading-tight">
              {label}
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.06em] text-naets-dark-gray leading-tight mt-0.5">
              {sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Long description section ─────────────────────────────────────────────────

function LongDescriptionSection({ longDescription }: { longDescription: string }) {
  const paragraphs = longDescription.trim().split('\n\n');
  const intro = paragraphs[0];
  const sections = paragraphs.slice(1);

  return (
    <section className="py-16 md:py-20 bg-white border-t border-naets-light-gray">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20">

          {/* Left: Title block */}
          <div className="lg:sticky lg:top-[140px] self-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-number" aria-hidden="true">D</span>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-naets-dark-gray">
                Description
              </span>
            </div>
            <h2
              className="font-condensed text-naets-black uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', letterSpacing: '0.04em' }}
            >
              LA PRÉCISION EN MOUVEMENT
            </h2>
            <div className="w-8 h-px bg-naets-black mb-6" aria-hidden="true" />
            <p className="font-sans text-naets-dark-gray leading-relaxed" style={{ fontSize: 13 }}>
              {intro}
            </p>
          </div>

          {/* Right: Sections */}
          <div className="divide-y divide-naets-light-gray">
            {sections.map((para, i) => {
              const hasSeparator = para.includes(' — ');
              if (hasSeparator) {
                const dashIdx = para.indexOf(' — ');
                const sectionTitle = para.slice(0, dashIdx);
                const content = para.slice(dashIdx + 3);
                return (
                  <div key={i} className="py-6 first:pt-0 lg:first:pt-6">
                    <p
                      className="font-condensed text-naets-black uppercase mb-2"
                      style={{ fontSize: 14, letterSpacing: '0.1em' }}
                    >
                      {sectionTitle}
                    </p>
                    <p className="font-sans text-naets-dark-gray leading-relaxed" style={{ fontSize: 13 }}>
                      {content}
                    </p>
                  </div>
                );
              }
              return (
                <div key={i} className="py-6 first:pt-0 lg:first:pt-6">
                  <p className="font-sans text-naets-dark-gray leading-relaxed" style={{ fontSize: 13 }}>
                    {para}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Technical analysis (shoes only) ─────────────────────────────────────────

function TechnicalAnalysis() {
  const pillars = [
    { num: '01', name: 'Tige',      desc: 'Single mesh rip-stop ultra-léger. Maintien anatomique avec renforts TPU ciblés.' },
    { num: '02', name: 'Semelle',   desc: 'ATPU réactif haute densité. Absorption des chocs et restitution énergétique optimale.' },
    { num: '03', name: 'Maintien',  desc: 'Lacets texturés anti-glissement. Languette suède fine. Enveloppe précise sans compression.' },
    { num: '04', name: 'Propulsion',desc: "Plaque carbone intégrée full-length. Transfert d'énergie direct à chaque foulée." },
    { num: '05', name: 'Adhérence', desc: 'Grip optimisé route sèche et humide. Zones de contact stratégiques avant-pied et talon.' },
  ];

  return (
    <section className="bg-naets-near-black text-naets-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-start gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="section-number" aria-hidden="true">T</span>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-naets-mid-gray">
                Architecture produit
              </span>
            </div>
            <h2
              className="font-condensed uppercase leading-none"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '0.04em' }}
            >
              ANALYSE TECHNIQUE
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-naets-dark-gray self-center ml-4 mb-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {pillars.map(({ num, name, desc }, i) => (
            <div
              key={num}
              className={cn(
                'flex flex-col gap-4 p-6 border-t border-naets-dark-gray',
                i < pillars.length - 1 ? 'md:border-r border-naets-dark-gray' : ''
              )}
            >
              <span
                className="font-condensed text-naets-mid-gray"
                style={{ fontSize: 12, letterSpacing: '0.1em' }}
              >
                {num}
              </span>
              <h3
                className="font-condensed text-naets-white uppercase"
                style={{ fontSize: 20, letterSpacing: '0.06em' }}
              >
                {name}
              </h3>
              <p className="font-sans text-naets-mid-gray leading-relaxed" style={{ fontSize: 12 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Star rating (compact, for product info) ──────────────────────────────────

function StarRatingCompact({ rating = 4, count = 0 }: { rating?: number; count?: number }) {
  if (count === 0) {
    return (
      <p className="font-sans text-naets-dark-gray text-[11px] tracking-[0.05em]">
        Aucun avis
      </p>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-label={`Note ${rating}/5`}>
        {[1, 2, 3, 4, 5].map((s) => (
          <svg
            key={s}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill={s <= rating ? '#111' : 'none'}
            stroke="#111"
            strokeWidth="0.7"
            aria-hidden="true"
          >
            <polygon points="5,0.5 6.2,3.7 9.5,3.7 7.1,5.9 7.9,9.3 5,7.4 2.1,9.3 2.9,5.9 0.5,3.7 3.8,3.7" />
          </svg>
        ))}
      </div>
      <span className="font-sans text-[11px] text-naets-dark-gray">
        ({count} avis)
      </span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProductPageContent({ product, related }: ProductPageContentProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const { addItem } = useCart();
  const { isInWishlist, toggle: toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const complementary = useMemo(
    () => getComplementaryProducts(product, 4),
    [product]
  );

  const categoryLabel =
    product.category === 'chaussures'
      ? 'Chaussures'
      : product.category === 'vetements'
      ? 'Vêtements'
      : 'Accessoires';

  const categoryHref =
    product.category === 'chaussures'
      ? '/shop?category=chaussures'
      : product.category === 'vetements'
      ? '/shop?category=vetements'
      : '/shop?category=accessoires';

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: categoryLabel, href: categoryHref },
    { label: product.name },
  ];

  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(product.price);

  const formattedCompareAt = product.compareAtPrice
    ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(
        product.compareAtPrice
      )
    : null;

  const accordionItems = [
    {
      id: 'livraison',
      question: 'Livraison gratuite — 24h/48h',
      answer: (
        <div className="space-y-2 font-sans text-[13px] text-naets-dark-gray leading-relaxed">
          <p>Livraison offerte dès 100 € en France métropolitaine. Expédition sous 24h après validation.</p>
          <p>Standard 3–5 jours — 4,90 € sous 100 €. Express 24h — 9,90 €.</p>
          <p>Livraison internationale disponible. Délais et tarifs variables.</p>
        </div>
      ),
    },
    {
      id: 'paiement',
      question: 'Paiement sécurisé',
      answer: (
        <div className="space-y-2 font-sans text-[13px] text-naets-dark-gray leading-relaxed">
          <p>Paiement par carte bancaire, Apple Pay, Google Pay et PayPal.</p>
          <p>Transaction cryptée 3D Secure. Aucune donnée bancaire stockée.</p>
        </div>
      ),
    },
    {
      id: 'retours',
      question: 'Satisfait ou remboursé',
      answer: (
        <div className="space-y-2 font-sans text-[13px] text-naets-dark-gray leading-relaxed">
          <p>30 jours pour retourner votre commande sans justification.</p>
          <p>Retours gratuits depuis la France. Étiquette prépayée incluse.</p>
          <p>Remboursement sous 5–7 jours après réception et contrôle.</p>
        </div>
      ),
    },
    {
      id: 'contact',
      question: 'Contact expert NÆTS',
      answer: (
        <div className="space-y-2 font-sans text-[13px] text-naets-dark-gray leading-relaxed">
          <p>Besoin d'un conseil sur la taille, l'usage ou la technicité du produit ?</p>
          <p>
            Notre équipe running est disponible lundi – vendredi, 9h–18h.{' '}
            <a href="mailto:contact@naets.fr" className="underline hover:text-naets-black transition-colors">
              contact@naets.fr
            </a>
          </p>
          <p>Réponse garantie sous 24h ouvrées.</p>
        </div>
      ),
    },
    {
      id: 'details',
      question: 'Détails produit',
      answer: (
        <div className="space-y-1.5 font-sans text-[13px] text-naets-dark-gray leading-relaxed">
          {Object.entries(product.technicalSpecs).slice(0, 6).map(([key, val]) => (
            <div key={key} className="flex gap-3">
              <span className="uppercase tracking-[0.08em] text-[11px] text-naets-mid-gray shrink-0 w-28">{key}</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2500);
      return;
    }
    // TODO: connecter au vrai panier Shopify / backend plus tard.
    addItem(product, selectedSize, selectedColor);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <>
      {/* ─── MAIN PRODUCT SECTION ───────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Breadcrumb */}
        <div className="py-5 border-b border-naets-light-gray mb-8 md:mb-10">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 pb-16 md:pb-20">

          {/* ── LEFT — Gallery ─────────────────────────────────────────────── */}
          <div className="lg:sticky lg:top-[140px] self-start">
            <ProductGallery productName={product.name} />
          </div>

          {/* ── RIGHT — Product info ────────────────────────────────────────── */}
          <div className="flex flex-col gap-7">

            {/* Identity block */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-naets-dark-gray border border-naets-light-gray px-2 py-1">
                  {product.collection}
                </span>
                <span className="font-sans text-[10px] tracking-[0.1em] uppercase text-naets-dark-gray">
                  {product.type}
                </span>
              </div>

              <h1
                className="font-condensed text-naets-black uppercase leading-none"
                style={{ fontSize: 'clamp(34px, 4.5vw, 54px)', letterSpacing: '0.03em' }}
              >
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3">
                <span
                  className="font-condensed text-naets-black"
                  style={{ fontSize: 28, letterSpacing: '0.02em' }}
                >
                  {formattedPrice}
                </span>
                {formattedCompareAt && (
                  <span className="font-sans text-naets-mid-gray line-through" style={{ fontSize: 16 }}>
                    {formattedCompareAt}
                  </span>
                )}
              </div>

              {/* Star rating */}
              <StarRatingCompact rating={5} count={4} />

              {/* Badges */}
              {product.badges.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className={cn(
                        'font-sans text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 font-medium',
                        badge === 'NOUVEAU'
                          ? 'bg-naets-black text-naets-white'
                          : 'border border-naets-black text-naets-black'
                      )}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              <p className="font-sans text-naets-dark-gray leading-relaxed" style={{ fontSize: 13 }}>
                {product.shortDescription}
              </p>
            </div>

            <div className="h-px bg-naets-light-gray" />

            {/* Selectors */}
            <div className="flex flex-col gap-6">
              <ColorSelector
                colors={product.colors}
                selectedColor={selectedColor}
                onSelect={setSelectedColor}
              />

              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelect={(size) => {
                  setSelectedSize(size);
                  setSizeError(false);
                }}
                category={product.category}
              />

              {/* Stock status */}
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'w-1.5 h-1.5 rounded-full',
                    product.inStock ? 'bg-[#4a7c59]' : 'bg-naets-mid-gray'
                  )}
                  aria-hidden="true"
                />
                <span
                  className="font-sans text-[11px] tracking-[0.08em]"
                  style={{ color: product.inStock ? '#4a7c59' : '#707070' }}
                >
                  {product.inStock ? 'Disponible en stock' : 'Indisponible'}
                </span>
              </div>

              <div>
                <span className="font-sans text-[11px] tracking-[0.15em] uppercase font-medium block mb-3">
                  QUANTITÉ
                </span>
                <QuantitySelector quantity={quantity} onChange={setQuantity} />
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              {/* Size error */}
              {sizeError && (
                <p
                  className="font-sans text-[11px] tracking-[0.08em] text-naets-dark-gray border-l-2 border-naets-black pl-3 py-1"
                  role="alert"
                >
                  Sélectionnez une taille avant d&apos;ajouter au panier.
                </p>
              )}

              <button
                onClick={handleAddToCart}
                aria-label={
                  !selectedSize
                    ? 'Sélectionnez une taille pour ajouter au panier'
                    : `Ajouter ${product.name} au panier`
                }
                className={cn(
                  'relative h-14 w-full flex items-center justify-center gap-3',
                  'font-sans text-[12px] tracking-[0.2em] uppercase font-medium',
                  'transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2',
                  addedToCart
                    ? 'bg-naets-near-black text-naets-white cursor-default'
                    : 'bg-naets-black text-naets-white hover:bg-naets-near-black'
                )}
              >
                {addedToCart ? (
                  <span>AJOUTÉ AU PANIER</span>
                ) : (
                  <>
                    <span>AJOUTER AU PANIER</span>
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                aria-label={isWishlisted ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                aria-pressed={isWishlisted}
                className={cn(
                  'h-12 w-full flex items-center justify-center gap-2.5',
                  'border font-sans text-[11px] tracking-[0.15em] uppercase font-medium',
                  'transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2',
                  isWishlisted
                    ? 'border-naets-black bg-naets-off-white text-naets-black'
                    : 'border-naets-light-gray text-naets-dark-gray hover:border-naets-black hover:text-naets-black'
                )}
              >
                <Heart
                  size={13}
                  strokeWidth={1.5}
                  className={isWishlisted ? 'fill-naets-black' : ''}
                />
                <span>{isWishlisted ? 'DANS MES FAVORIS' : 'AJOUTER AUX FAVORIS'}</span>
              </button>
            </div>

            <div className="h-px bg-naets-light-gray" />

            <ReassuranceRow />

            {/* Accordions */}
            <Accordion items={accordionItems} />

          </div>
        </div>
      </div>

      {/* ─── LONG DESCRIPTION ───────────────────────────────────────────────── */}
      {product.longDescription && (
        <LongDescriptionSection longDescription={product.longDescription} />
      )}

      {/* ─── TECHNICAL ANALYSIS (chaussures only) ───────────────────────────── */}
      {product.category === 'chaussures' && <TechnicalAnalysis />}

      {/* ─── EXPLODED VIEW (chaussures only) ────────────────────────────────── */}
      {product.category === 'chaussures' && <ProductExplodedView />}

      {/* ─── TECHNICAL SPECS ────────────────────────────────────────────────── */}
      <section className="bg-naets-off-white py-16 md:py-20 border-t border-naets-light-gray">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <TechnicalSpecs
            specs={product.technicalSpecs}
            title="SPÉCIFICATIONS TECHNIQUES"
            columns={2}
          />
        </div>
      </section>

      {/* ─── COMPLEMENTARY PRODUCTS ─────────────────────────────────────────── */}
      {complementary.length > 0 && (
        <section className="py-16 md:py-20 border-t border-naets-light-gray">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <ProductGrid
              products={complementary}
              title="COMPLÈTE TON ÉQUIPEMENT"
              columns={4}
            />
          </div>
        </section>
      )}

      {/* ─── RELATED PRODUCTS ───────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-naets-off-white border-t border-naets-light-gray">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <ProductGrid
              products={related}
              title="NOS SUGGESTIONS"
              columns={4}
            />
          </div>
        </section>
      )}

      {/* ─── REVIEWS ────────────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto">
        <ProductReviews productId={product.id} productName={product.name} />
      </div>
    </>
  );
}

// Suppress unused import warning for MessageCircle (available for future use)
void MessageCircle;
