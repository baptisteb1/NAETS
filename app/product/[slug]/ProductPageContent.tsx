'use client';

import { useState } from 'react';
import { Heart, ArrowRight, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import SizeSelector from '@/components/SizeSelector';
import QuantitySelector from '@/components/QuantitySelector';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import Accordion from '@/components/Accordion';
import ProductGrid from '@/components/ProductGrid';
import { type Product } from '@/data/products';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProductPageContentProps {
  product: Product;
  related: Product[];
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

function GalleryPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center bg-naets-light-gray overflow-hidden select-none',
        className
      )}
      aria-hidden="true"
    >
      <span
        className="font-condensed text-naets-mid-gray uppercase tracking-widest"
        style={{ fontSize: 'clamp(18px, 3vw, 28px)', letterSpacing: '0.2em' }}
      >
        {label}
      </span>
      {/* Subtle corner markers */}
      <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-naets-mid-gray" />
      <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-naets-mid-gray" />
      <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-naets-mid-gray" />
      <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-naets-mid-gray" />
    </div>
  );
}

function ProductGallery({ productName }: { productName: string }) {
  const [activeThumb, setActiveThumb] = useState(0);

  const thumbnailLabels = ['VUE 01', 'VUE 02', 'VUE 03'];

  return (
    <div className="flex flex-col gap-4">
      {/* Main image — 4:5 aspect ratio */}
      <div className="w-full" style={{ aspectRatio: '4/5' }}>
        <GalleryPlaceholder
          label="NÆTS"
          className="w-full h-full"
        />
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-3 gap-2">
        {thumbnailLabels.map((label, i) => (
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
            <GalleryPlaceholder
              label={label}
              className="w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Color selector ───────────────────────────────────────────────────────────

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onSelect: (color: string) => void;
}

function ColorSelector({ colors, selectedColor, onSelect }: ColorSelectorProps) {
  // Map color names to approximate display values
  const colorSwatchMap: Record<string, string> = {
    'Black & White': 'linear-gradient(135deg, #000 50%, #fff 50%)',
    'Black White': 'linear-gradient(135deg, #000 50%, #fff 50%)',
    'Concrete Black': '#1a1a1a',
    'White': '#fff',
    'Pantone Black': '#000',
    'Pantone 11-0601 TPG Bright White': '#f8f8f6',
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-sans text-[11px] tracking-[0.15em] uppercase font-medium"
        >
          COLORIS — {selectedColor}
        </span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {colors.map((color) => {
          const bg = colorSwatchMap[color] ?? '#888';
          const isSelected = selectedColor === color;
          const isWhite =
            color === 'White' || color.includes('Bright White');

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
                isWhite ? 'border border-naets-light-gray' : ''
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
    { icon: Truck, label: 'Livraison offerte', sub: 'dès 100€' },
    { icon: ShieldCheck, label: 'Paiement sécurisé', sub: '3D Secure' },
    { icon: RotateCcw, label: 'Retours 30 jours', sub: 'Offerts' },
  ];

  return (
    <div className="grid grid-cols-3 border border-naets-light-gray">
      {items.map(({ icon: Icon, label, sub }, i) => (
        <div
          key={label}
          className={cn(
            'flex flex-col items-center gap-2 py-4 px-2',
            i < items.length - 1 ? 'border-r border-naets-light-gray' : ''
          )}
        >
          <Icon size={16} strokeWidth={1.25} className="text-naets-dark-gray" />
          <div className="text-center">
            <p className="font-sans text-[10px] uppercase tracking-[0.12em] font-medium leading-tight">
              {label}
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.08em] text-naets-dark-gray leading-tight mt-0.5">
              {sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Technical analysis (shoes only) ─────────────────────────────────────────

function TechnicalAnalysis() {
  const pillars = [
    {
      num: '01',
      name: 'Tige',
      desc: 'Single mesh rip-stop ultra-léger. Maintien anatomique avec renforts TPU ciblés.',
    },
    {
      num: '02',
      name: 'Semelle',
      desc: 'ATPU réactif haute densité. Absorption des chocs et restitution énergétique optimale.',
    },
    {
      num: '03',
      name: 'Maintien',
      desc: 'Système de lacage asymétrique. Enveloppe précise du pied sans points de compression.',
    },
    {
      num: '04',
      name: 'Propulsion',
      desc: 'Plaque carbone intégrée. Transfert d\'énergie direct à chaque foulée.',
    },
    {
      num: '05',
      name: 'Adhérence',
      desc: 'Grip optimisé route sèche et humide. Zones de contact stratégiques avant/talon.',
    },
  ];

  return (
    <section className="bg-naets-near-black text-naets-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-start gap-6 mb-12 md:mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <span className="section-number" aria-hidden="true">T</span>
              <span
                className="font-sans text-[11px] tracking-[0.2em] uppercase text-naets-mid-gray"
              >
                Architecture produit
              </span>
            </div>
            <h2
              className="font-condensed uppercase leading-none"
              style={{ fontSize: 'clamp(42px, 6vw, 72px)', letterSpacing: '0.04em' }}
            >
              ANALYSE TECHNIQUE
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-naets-dark-gray self-center mt-auto mb-3 ml-4" />
        </div>

        {/* 5-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {pillars.map(({ num, name, desc }, i) => (
            <div
              key={num}
              className={cn(
                'flex flex-col gap-4 p-6 border-naets-dark-gray',
                'border-t',
                i < pillars.length - 1 ? 'border-r-0 md:border-r border-naets-dark-gray' : '',
                i === 0 ? 'border-l-0' : ''
              )}
            >
              <span
                className="font-condensed text-naets-mid-gray"
                style={{ fontSize: 13, letterSpacing: '0.1em' }}
              >
                {num}
              </span>
              <h3
                className="font-condensed text-naets-white uppercase"
                style={{ fontSize: 22, letterSpacing: '0.06em' }}
              >
                {name}
              </h3>
              <p
                className="font-sans text-naets-mid-gray leading-relaxed"
                style={{ fontSize: 12 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main client component ────────────────────────────────────────────────────

export default function ProductPageContent({ product, related }: ProductPageContentProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addItem } = useCart();
  const { isInWishlist, toggle: toggleWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  // Category label for breadcrumb
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

  const accordionItems = [
    {
      id: 'livraison',
      question: 'Livraison',
      answer: (
        <div className="space-y-2">
          <p>Livraison 24–48h offerte dès 100€ d'achat en France métropolitaine.</p>
          <p>Livraison standard 3–5 jours ouvrés — 4,90€ pour les commandes inférieures à 100€.</p>
          <p>Livraison express disponible sous 24h — 9,90€.</p>
          <p>Livraison internationale disponible. Délais et tarifs variables selon destination.</p>
        </div>
      ),
    },
    {
      id: 'retours',
      question: 'Retours',
      answer: (
        <div className="space-y-2">
          <p>30 jours pour retourner votre commande sans justification.</p>
          <p>Retours gratuits depuis la France métropolitaine. Étiquette prépayée incluse.</p>
          <p>
            Le produit doit être retourné dans son état d'origine, non porté, avec étiquettes
            attachées et emballage d'origine.
          </p>
          <p>Remboursement sous 5–7 jours ouvrés après réception et contrôle du retour.</p>
        </div>
      ),
    },
    {
      id: 'contact',
      question: 'Contact',
      answer: (
        <div className="space-y-2">
          <p>Notre équipe running est disponible du lundi au vendredi, 9h–18h.</p>
          <p>
            Email :{' '}
            <a
              href="mailto:contact@naets.fr"
              className="underline hover:text-naets-black transition-colors"
            >
              contact@naets.fr
            </a>
          </p>
          <p>Réponse garantie sous 24h ouvrées.</p>
        </div>
      ),
    },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize, selectedColor);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(product.price);

  const formattedCompareAtPrice = product.compareAtPrice
    ? new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
      }).format(product.compareAtPrice)
    : null;

  return (
    <>
      {/* ─── MAIN PRODUCT SECTION ─────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Breadcrumb */}
        <div className="py-5 border-b border-naets-light-gray mb-8 md:mb-10">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 pb-16 md:pb-20">

          {/* ── LEFT — Gallery ───────────────────────────────────────────── */}
          <div className="lg:sticky lg:top-6 self-start">
            <ProductGallery productName={product.name} />
          </div>

          {/* ── RIGHT — Product info + controls ──────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Product identity */}
            <div className="flex flex-col gap-4">
              {/* Collection badge */}
              <div className="flex items-center gap-3">
                <span
                  className="font-sans text-[10px] tracking-[0.2em] uppercase text-naets-dark-gray border border-naets-light-gray px-2 py-1"
                >
                  {product.collection}
                </span>
                <span
                  className="font-sans text-[10px] tracking-[0.1em] uppercase text-naets-dark-gray"
                >
                  {product.type}
                </span>
              </div>

              {/* Product name */}
              <h1
                className="font-condensed text-naets-black uppercase leading-none"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '0.03em' }}
              >
                {product.name}
              </h1>

              {/* Price row */}
              <div className="flex items-baseline gap-3">
                <span
                  className="font-condensed text-naets-black"
                  style={{ fontSize: 28, letterSpacing: '0.02em' }}
                >
                  {formattedPrice}
                </span>
                {formattedCompareAtPrice && (
                  <span
                    className="font-sans text-naets-mid-gray line-through"
                    style={{ fontSize: 16 }}
                  >
                    {formattedCompareAtPrice}
                  </span>
                )}
              </div>

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

              {/* Short description */}
              <p className="font-sans text-naets-dark-gray leading-relaxed" style={{ fontSize: 13 }}>
                {product.shortDescription}
              </p>
            </div>

            {/* ── Divider */}
            <div className="h-px bg-naets-light-gray" />

            {/* ── Selectors */}
            <div className="flex flex-col gap-6">

              {/* Color selector */}
              <ColorSelector
                colors={product.colors}
                selectedColor={selectedColor}
                onSelect={setSelectedColor}
              />

              {/* Size selector */}
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelect={setSelectedSize}
                category={product.category}
              />

              {/* Quantity selector */}
              <div>
                <span className="font-sans text-[11px] tracking-[0.15em] uppercase font-medium block mb-3">
                  QUANTITÉ
                </span>
                <QuantitySelector
                  quantity={quantity}
                  onChange={setQuantity}
                />
              </div>
            </div>

            {/* ── CTA buttons */}
            <div className="flex flex-col gap-3">
              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
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
                  selectedSize
                    ? addedToCart
                      ? 'bg-naets-near-black text-naets-white cursor-default'
                      : 'bg-naets-black text-naets-white hover:bg-naets-near-black'
                    : 'bg-naets-light-gray text-naets-mid-gray cursor-not-allowed'
                )}
              >
                {addedToCart ? (
                  <>
                    <span>AJOUTÉ AU PANIER</span>
                  </>
                ) : (
                  <>
                    <span>{selectedSize ? 'AJOUTER AU PANIER' : 'SÉLECTIONNEZ UNE TAILLE'}</span>
                    {selectedSize && <ArrowRight size={14} strokeWidth={1.5} />}
                  </>
                )}
              </button>

              {/* Wishlist */}
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
                  size={14}
                  strokeWidth={1.5}
                  className={isWishlisted ? 'fill-naets-black' : ''}
                />
                <span>{isWishlisted ? 'RETIRÉ DES FAVORIS' : 'AJOUTER AUX FAVORIS'}</span>
              </button>
            </div>

            {/* ── Divider */}
            <div className="h-px bg-naets-light-gray" />

            {/* ── Reassurance */}
            <ReassuranceRow />

            {/* ── Accordions */}
            <Accordion items={accordionItems} />

          </div>
          {/* end right column */}
        </div>
        {/* end two-column grid */}
      </div>

      {/* ─── TECHNICAL ANALYSIS (chaussures only) ─────────────────────────── */}
      {product.category === 'chaussures' && <TechnicalAnalysis />}

      {/* ─── TECHNICAL SPECS ──────────────────────────────────────────────── */}
      <section className="bg-naets-off-white py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <TechnicalSpecs
            specs={product.technicalSpecs}
            title="SPÉCIFICATIONS TECHNIQUES"
            columns={2}
          />
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <ProductGrid
              products={related}
              title="VOUS AIMEREZ AUSSI"
              columns={4}
            />
          </div>
        </section>
      )}
    </>
  );
}
