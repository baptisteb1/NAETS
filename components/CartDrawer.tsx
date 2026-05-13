'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X, ShoppingBag, Plus, Minus } from 'lucide-react';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';

interface CartItem {
  id: string;
  productId: string;
  name: string;
  collection: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

const MOCK_CART_ITEMS: CartItem[] = [
  {
    id: 'cart-item-1',
    productId: 'ae-reflex-bw-001',
    name: 'Æ-REFLEX Black & White',
    collection: 'Æ-REFLEX',
    size: '42',
    color: 'Black & White',
    price: 180,
    quantity: 1,
    image: '/images/placeholder-shoe-bw.jpg',
  },
  {
    id: 'cart-item-2',
    productId: 'rain-jacket-black-001',
    name: 'Rain Jacket Black',
    collection: 'Æ-ESSENTIAL',
    size: 'M',
    color: 'Pantone Black',
    price: 160,
    quantity: 1,
    image: '/images/placeholder-jacket-black.jpg',
  },
];

// Use first 2 products not in cart for suggestions
const SUGGESTED_PRODUCTS = products
  .filter((p) => !MOCK_CART_ITEMS.some((ci) => ci.productId === p.id))
  .slice(0, 2);

const DEMO_HAS_ITEMS = true; // Toggle to false to see empty state

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [items, setItems] = useState<CartItem[]>(DEMO_HAS_ITEMS ? MOCK_CART_ITEMS : []);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus close button when drawer opens
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const isEmpty = items.length === 0;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-40 bg-black/50',
          'transition-opacity duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Panier"
        aria-hidden={!isOpen}
        className={cn(
          'fixed right-0 top-0 bottom-0 z-50',
          'w-full sm:w-[480px]',
          'bg-white',
          'flex flex-col',
          'border-l border-[#E5E5E0]',
          'transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-[#E5E5E0] shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="font-condensed text-[24px] leading-none tracking-wide text-black">
              PANIER
            </h2>
            {cartCount > 0 && (
              <span
                aria-label={`${cartCount} article${cartCount !== 1 ? 's' : ''}`}
                className={cn(
                  'flex items-center justify-center',
                  'w-5 h-5 bg-black text-white',
                  'text-[10px] font-semibold leading-none tracking-tight'
                )}
              >
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Fermer le panier"
            className={cn(
              'flex items-center justify-center w-10 h-10',
              'text-black hover:bg-[#F5F5F2]',
              'transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black'
            )}
          >
            <X size={18} strokeWidth={1.25} />
          </button>
        </div>

        {/* ── Scrollable content ───────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto">
          {isEmpty ? (
            /* ── Empty state ── */
            <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
              <ShoppingBag
                size={48}
                strokeWidth={0.75}
                className="text-[#BDBDB7] mb-6"
                aria-hidden="true"
              />
              <p className="font-condensed text-[20px] tracking-wide text-black mb-2">
                VOTRE PANIER EST VIDE
              </p>
              <p className="text-[12px] text-[#707070] tracking-[0.1em] uppercase mb-8">
                Ajoutez des articles pour commencer
              </p>
              <Link
                href="/shop"
                onClick={onClose}
                className={cn(
                  'inline-flex items-center justify-center',
                  'px-8 h-11',
                  'border border-black text-black',
                  'font-naets-label text-[11px]',
                  'hover:bg-black hover:text-white',
                  'transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
                )}
              >
                CONTINUER LE SHOPPING
              </Link>
            </div>
          ) : (
            <>
              {/* ── Cart items ── */}
              <ul role="list" className="divide-y divide-[#E5E5E0]">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 px-6 py-5">
                    {/* Image placeholder */}
                    <div
                      aria-hidden="true"
                      className="w-[60px] h-[60px] shrink-0 bg-[#E5E5E0] placeholder-image"
                    />

                    {/* Item details */}
                    <div className="flex-1 min-w-0">
                      {/* Collection label */}
                      <p className="font-naets-micro text-[#707070] mb-0.5">
                        {item.collection}
                      </p>

                      {/* Product name */}
                      <p className="font-condensed text-[15px] leading-tight tracking-wide text-black uppercase mb-1 truncate">
                        {item.name}
                      </p>

                      {/* Size & Color */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[11px] text-[#707070] tracking-[0.08em] uppercase">
                          TAILLE {item.size}
                        </span>
                        <span aria-hidden="true" className="text-[#BDBDB7]">·</span>
                        <span className="text-[11px] text-[#707070] tracking-[0.08em] uppercase truncate">
                          {item.color}
                        </span>
                      </div>

                      {/* Price + Controls row */}
                      <div className="flex items-center justify-between gap-2">
                        {/* Quantity controls */}
                        <div
                          className="flex items-center border border-[#E5E5E0]"
                          role="group"
                          aria-label={`Quantité pour ${item.name}`}
                        >
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Réduire la quantité de ${item.name}`}
                            className={cn(
                              'flex items-center justify-center w-8 h-8',
                              'text-black hover:bg-[#F5F5F2]',
                              'transition-colors duration-150',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black'
                            )}
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>

                          <span
                            aria-live="polite"
                            aria-label={`${item.quantity} article${item.quantity !== 1 ? 's' : ''}`}
                            className="flex items-center justify-center w-8 h-8 text-[12px] font-medium text-black border-x border-[#E5E5E0]"
                          >
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Augmenter la quantité de ${item.name}`}
                            className={cn(
                              'flex items-center justify-center w-8 h-8',
                              'text-black hover:bg-[#F5F5F2]',
                              'transition-colors duration-150',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black'
                            )}
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          {/* Price */}
                          <span className="font-condensed text-[16px] tracking-wide text-black">
                            {formatPrice(item.price * item.quantity)}
                          </span>

                          {/* Remove button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label={`Supprimer ${item.name} du panier`}
                            className={cn(
                              'flex items-center justify-center w-7 h-7',
                              'text-[#BDBDB7] hover:text-black',
                              'transition-colors duration-150',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black'
                            )}
                          >
                            <X size={14} strokeWidth={1.25} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* ── Subtotal ── */}
              <div className="px-6 py-5 border-t border-[#E5E5E0]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-naets-label text-[11px] text-black">SOUS-TOTAL</span>
                  <span className="font-condensed text-[20px] tracking-wide text-black">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-[11px] text-[#707070] tracking-[0.06em]">
                  Livraison calculée à la commande
                </p>
              </div>

              {/* ── Suggestions section ── */}
              {SUGGESTED_PRODUCTS.length > 0 && (
                <div className="px-6 pb-5 border-t border-[#E5E5E0]">
                  <p className="font-naets-micro text-[#707070] py-4">
                    COMPLÈTE TON ÉQUIPEMENT
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {SUGGESTED_PRODUCTS.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={onClose}
                        className={cn(
                          'group flex flex-col',
                          'border border-[#E5E5E0]',
                          'hover:border-black',
                          'transition-colors duration-150',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black'
                        )}
                        aria-label={`${product.name} — ${formatPrice(product.price)}`}
                      >
                        {/* Image placeholder */}
                        <div
                          className="w-full aspect-square bg-[#E5E5E0] placeholder-image"
                          aria-hidden="true"
                        />
                        <div className="p-2.5">
                          <p className="font-naets-micro text-[#707070] mb-0.5 truncate">
                            {product.collection}
                          </p>
                          <p className="font-condensed text-[13px] tracking-wide text-black uppercase leading-tight mb-1 truncate group-hover:underline">
                            {product.name}
                          </p>
                          <p className="text-[12px] font-medium text-black">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* ── Footer CTAs — only when cart has items ───────────────────── */}
        {!isEmpty && (
          <div className="shrink-0 px-6 py-5 border-t border-[#E5E5E0] space-y-3 bg-white">
            <Link
              href="/checkout"
              onClick={onClose}
              className={cn(
                'flex items-center justify-center w-full h-12',
                'bg-black text-white',
                'font-naets-label text-[12px]',
                'hover:bg-[#111111]',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
              )}
            >
              COMMANDER — {formatPrice(subtotal)}
            </Link>

            <button
              onClick={onClose}
              className={cn(
                'flex items-center justify-center w-full h-11',
                'border border-black text-black bg-white',
                'font-naets-label text-[12px]',
                'hover:bg-[#F5F5F2]',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
              )}
            >
              CONTINUER MES ACHATS
            </button>
          </div>
        )}
      </div>
    </>
  );
}
