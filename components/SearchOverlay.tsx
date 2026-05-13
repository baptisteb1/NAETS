'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { X, Search } from 'lucide-react';
import { products, type Product } from '@/data/products';
import { collections } from '@/data/collections';
import { cn, formatPrice } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

type SearchTab = 'PRODUITS' | 'COLLECTIONS' | 'PAGES' | 'ARTICLES';

interface PageResult {
  label: string;
  href: string;
  description: string;
}

interface ArticleResult {
  id: string;
  title: string;
  href: string;
  category: string;
  excerpt: string;
}

// ─── Static mock data ─────────────────────────────────────────────────────────

const SUGGESTION_PRODUCTS: Product[] = products.slice(0, 4);

const MOCK_PAGES: PageResult[] = [
  { label: 'Notre Philosophie', href: '/philosophie', description: "L'histoire et les valeurs de la marque NÆTS" },
  { label: 'Inside NÆTS', href: '/inside-naets', description: "L'univers technique — matériaux, usine, process" },
  { label: 'NÆTS Collective', href: '/naets-collective', description: 'Running Club & Social Club' },
  { label: 'Tableau des Tailles', href: '/tableau-des-tailles', description: 'Guide de tailles pour chaussures et vêtements' },
  { label: 'FAQ', href: '/faq', description: 'Livraisons, retours, entretien des produits' },
];

const MOCK_ARTICLES: ArticleResult[] = [
  {
    id: 'a1',
    title: 'Choisir la bonne chaussure de running',
    href: '/blog/choisir-chaussure-running',
    category: 'TECHNIQUE',
    excerpt: 'Drop, stack, plaque carbone — comment décrypter les specs techniques pour trouver votre paire idéale.',
  },
  {
    id: 'a2',
    title: 'L\'ATPU : la science derrière la réactivité',
    href: '/blog/atpu-science-reactivite',
    category: 'MATÉRIAUX',
    excerpt: 'Comprendre pourquoi la mousse ATPU change la donne pour les coureurs exigeants.',
  },
  {
    id: 'a3',
    title: 'Entraînement par temps froid',
    href: '/blog/entrainement-temps-froid',
    category: 'ENTRAÎNEMENT',
    excerpt: 'Stratégies et équipements pour maintenir vos performances lorsque les températures chutent.',
  },
  {
    id: 'a4',
    title: 'NÆTS Collective : rejoindre la communauté',
    href: '/blog/naets-collective-communaute',
    category: 'COMMUNAUTÉ',
    excerpt: 'Ce que signifie courir ensemble — les valeurs et le format du Running Club NÆTS.',
  },
];

// ─── Search helpers ───────────────────────────────────────────────────────────

function searchProducts(query: string): Product[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
  );
}

function searchCollections(query: string) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return collections.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.tagline.toLowerCase().includes(q) ||
      c.shortName.toLowerCase().includes(q)
  );
}

function searchPages(query: string): PageResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return MOCK_PAGES.filter(
    (p) =>
      p.label.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

function searchArticles(query: string): ArticleResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return MOCK_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Compact product card used in search results and suggestion grids */
function SearchProductCard({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  return (
    <Link
      href={`/produits/${product.slug}`}
      onClick={onClose}
      className={cn(
        'group flex flex-col',
        'border border-[#E5E5E0] hover:border-black',
        'transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black'
      )}
      aria-label={`${product.name} — ${formatPrice(product.price)}`}
    >
      {/* Image placeholder */}
      <div
        className="w-full aspect-square bg-[#E5E5E0] placeholder-image flex items-center justify-center"
        aria-hidden="true"
      >
        <span
          className="font-condensed text-[#BDBDB7] select-none"
          style={{ fontSize: 28, letterSpacing: '0.05em' }}
        >
          NÆTS
        </span>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="font-naets-micro text-[#707070] mb-0.5 truncate">
          {product.collection}
        </p>
        <p className="font-condensed text-[14px] tracking-wide text-black uppercase leading-tight mb-1.5 truncate group-hover:underline">
          {product.name}
        </p>
        {product.badges.length > 0 && (
          <div className="flex gap-1 flex-wrap mb-1.5">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-1.5 py-px bg-black text-white text-[9px] font-medium tracking-[0.1em] uppercase leading-none"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <p className="text-[13px] font-semibold text-black">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}

/** Tabs row for switching result categories */
function TabRow({
  tabs,
  active,
  counts,
  onSelect,
}: {
  tabs: SearchTab[];
  active: SearchTab;
  counts: Record<SearchTab, number>;
  onSelect: (tab: SearchTab) => void;
}) {
  return (
    <div
      className="flex items-end gap-0 border-b border-[#E5E5E0]"
      role="tablist"
      aria-label="Catégories de résultats"
    >
      {tabs.map((tab) => {
        const isActive = tab === active;
        const count = counts[tab];
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(tab)}
            className={cn(
              'relative flex items-center gap-1.5 px-4 py-3',
              'font-naets-label text-[11px]',
              'transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black',
              isActive ? 'text-black' : 'text-[#707070] hover:text-black',
              // active bottom border
              isActive && 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black'
            )}
          >
            {tab}
            {count > 0 && (
              <span
                className={cn(
                  'flex items-center justify-center',
                  'min-w-[16px] h-4 px-1',
                  'text-[9px] font-semibold leading-none',
                  isActive ? 'bg-black text-white' : 'bg-[#E5E5E0] text-[#707070]'
                )}
              >
                {count > 99 ? '99+' : count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const TABS: SearchTab[] = ['PRODUITS', 'COLLECTIONS', 'PAGES', 'ARTICLES'];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<SearchTab>('PRODUITS');
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // ── Autofocus when opened ─────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 60); // slight delay so CSS transition has started
      return () => clearTimeout(timer);
    } else {
      // Reset state on close
      setQuery('');
      setActiveTab('PRODUITS');
    }
  }, [isOpen]);

  // ── Body scroll lock ──────────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ── Keyboard: Escape closes ───────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // ── Derived search results ────────────────────────────────────────────────
  const hasQuery = query.trim().length > 0;

  const productResults = searchProducts(query);
  const collectionResults = searchCollections(query);
  const pageResults = searchPages(query);
  const articleResults = searchArticles(query);

  const resultCounts: Record<SearchTab, number> = {
    PRODUITS: productResults.length,
    COLLECTIONS: collectionResults.length,
    PAGES: pageResults.length,
    ARTICLES: articleResults.length,
  };

  const totalResults = Object.values(resultCounts).reduce((a, b) => a + b, 0);

  // Auto-switch to first tab with results when query changes
  useEffect(() => {
    if (!hasQuery) return;
    const firstWithResults = TABS.find((t) => resultCounts[t] > 0);
    if (firstWithResults && resultCounts[activeTab] === 0) {
      setActiveTab(firstWithResults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // ── Render helpers ────────────────────────────────────────────────────────

  const renderProductResults = () => {
    if (productResults.length === 0) return null;
    return (
      <div
        role="tabpanel"
        aria-label="Résultats produits"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {productResults.map((p) => (
          <SearchProductCard key={p.id} product={p} onClose={onClose} />
        ))}
      </div>
    );
  };

  const renderCollectionResults = () => {
    if (collectionResults.length === 0) return null;
    return (
      <div
        role="tabpanel"
        aria-label="Résultats collections"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {collectionResults.map((col) => (
          <Link
            key={col.slug}
            href={`/collections/${col.slug}`}
            onClick={onClose}
            className={cn(
              'group flex flex-col',
              'border border-[#E5E5E0] hover:border-black',
              'transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black'
            )}
            aria-label={col.name}
          >
            <div
              className="w-full h-32 bg-[#E5E5E0] placeholder-image flex items-center justify-center"
              aria-hidden="true"
            >
              <span
                className="font-condensed text-[#BDBDB7] select-none"
                style={{ fontSize: 32, letterSpacing: '0.05em' }}
              >
                {col.shortName}
              </span>
            </div>
            <div className="p-4">
              <p className="font-condensed text-[18px] tracking-wide text-black uppercase leading-tight mb-1 group-hover:underline">
                {col.name}
              </p>
              <p className="text-[12px] text-[#707070] tracking-[0.04em] leading-snug">
                {col.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  const renderPageResults = () => {
    if (pageResults.length === 0) return null;
    return (
      <ul
        role="tabpanel"
        aria-label="Résultats pages"
        className="divide-y divide-[#E5E5E0] border border-[#E5E5E0]"
      >
        {pageResults.map((page) => (
          <li key={page.href}>
            <Link
              href={page.href}
              onClick={onClose}
              className={cn(
                'group flex items-start gap-3 px-5 py-4',
                'hover:bg-[#F5F5F2]',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:bg-[#F5F5F2]'
              )}
            >
              <span
                aria-hidden="true"
                className="mt-0.5 text-[#BDBDB7] text-[12px] shrink-0 group-hover:text-black transition-colors duration-150"
              >
                →
              </span>
              <div>
                <p className="font-naets-label text-[11px] text-black mb-0.5 group-hover:underline">
                  {page.label}
                </p>
                <p className="text-[12px] text-[#707070] tracking-[0.02em] leading-snug">
                  {page.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderArticleResults = () => {
    if (articleResults.length === 0) return null;
    return (
      <ul
        role="tabpanel"
        aria-label="Résultats articles"
        className="divide-y divide-[#E5E5E0] border border-[#E5E5E0]"
      >
        {articleResults.map((article) => (
          <li key={article.id}>
            <Link
              href={article.href}
              onClick={onClose}
              className={cn(
                'group flex flex-col gap-1.5 px-5 py-4',
                'hover:bg-[#F5F5F2]',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:bg-[#F5F5F2]'
              )}
            >
              <div className="flex items-center gap-2">
                <span className="font-naets-micro text-[#707070]">{article.category}</span>
              </div>
              <p className="font-condensed text-[16px] tracking-wide text-black uppercase leading-tight group-hover:underline">
                {article.title}
              </p>
              <p className="text-[12px] text-[#707070] tracking-[0.02em] leading-snug">
                {article.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'PRODUITS':
        return renderProductResults();
      case 'COLLECTIONS':
        return renderCollectionResults();
      case 'PAGES':
        return renderPageResults();
      case 'ARTICLES':
        return renderArticleResults();
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Recherche"
      aria-hidden={!isOpen}
      className={cn(
        'fixed inset-0 z-[60] bg-white',
        'flex flex-col',
        'transition-opacity duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* ── Top bar: search input + close ───────────────────────────────── */}
      <div className="shrink-0 border-b border-[#E5E5E0]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-4 h-20 md:h-24">
            {/* Search icon */}
            <Search
              size={22}
              strokeWidth={1.25}
              className="shrink-0 text-[#BDBDB7]"
              aria-hidden="true"
            />

            {/* Input */}
            <label htmlFor="search-input" className="sr-only">
              Rechercher
            </label>
            <input
              ref={inputRef}
              id="search-input"
              type="search"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="RECHERCHER UN PRODUIT, UNE COLLECTION..."
              aria-label="Rechercher un produit, une collection..."
              className={cn(
                'flex-1 min-w-0 bg-transparent outline-none',
                'font-condensed text-black placeholder:text-[#BDBDB7]',
                'text-[20px] md:text-[24px] tracking-wide',
                'border-b border-[#E5E5E0] pb-1',
                '[&::-webkit-search-cancel-button]:hidden',
                'focus:border-black transition-colors duration-150'
              )}
            />

            {/* Clear query button (only when typing) */}
            {hasQuery && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                aria-label="Effacer la recherche"
                className={cn(
                  'shrink-0 flex items-center justify-center w-8 h-8',
                  'text-[#707070] hover:text-black',
                  'transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black'
                )}
              >
                <X size={16} strokeWidth={1.5} aria-hidden="true" />
              </button>
            )}

            {/* Close overlay button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer la recherche"
              className={cn(
                'shrink-0 flex items-center justify-center w-10 h-10',
                'text-black hover:bg-[#F5F5F2]',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black'
              )}
            >
              <X size={20} strokeWidth={1.25} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Scrollable results area ──────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10">

          {/* ── STATE: No query → suggestions ───────────────────────────── */}
          {!hasQuery && (
            <section aria-label="Suggestions de produits">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="section-number" aria-hidden="true">
                  →
                </span>
                <h2 className="font-naets-label text-[11px] text-black">
                  SUGGESTIONS
                </h2>
              </div>

              {/* 4-product suggestion grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {SUGGESTION_PRODUCTS.map((product) => (
                  <SearchProductCard key={product.id} product={product} onClose={onClose} />
                ))}
              </div>

              {/* Popular searches */}
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-number" aria-hidden="true">
                    →
                  </span>
                  <h2 className="font-naets-label text-[11px] text-black">
                    RECHERCHES POPULAIRES
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Æ-REFLEX', 'Plaque carbone', 'Rain Jacket', 'Æ-SLYDE', 'Running Top', 'Nouvelles collections'].map(
                    (term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => {
                          setQuery(term);
                          inputRef.current?.focus();
                        }}
                        className={cn(
                          'px-4 h-8',
                          'border border-[#E5E5E0] hover:border-black',
                          'font-naets-micro text-[#707070] hover:text-black',
                          'transition-colors duration-150',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black'
                        )}
                      >
                        {term}
                      </button>
                    )
                  )}
                </div>
              </div>
            </section>
          )}

          {/* ── STATE: Has query ─────────────────────────────────────────── */}
          {hasQuery && (
            <>
              {/* Results summary */}
              <p className="font-naets-micro text-[#707070] mb-5" aria-live="polite" aria-atomic="true">
                {totalResults > 0
                  ? `${totalResults} RÉSULTAT${totalResults > 1 ? 'S' : ''} POUR « ${query.toUpperCase()} »`
                  : `AUCUN RÉSULTAT POUR « ${query.toUpperCase()} »`}
              </p>

              {/* ── Empty state ── */}
              {totalResults === 0 && (
                <div className="flex flex-col items-start gap-6 py-6">
                  <div>
                    <p className="font-condensed text-[28px] md:text-[36px] tracking-wide text-black mb-2">
                      AUCUN RÉSULTAT
                    </p>
                    <p className="text-[13px] text-[#707070] tracking-[0.04em] max-w-md">
                      Essayez un autre terme ou parcourez nos collections directement.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/shop"
                      onClick={onClose}
                      className={cn(
                        'inline-flex items-center justify-center',
                        'px-6 h-10',
                        'bg-black text-white',
                        'font-naets-label text-[11px]',
                        'hover:bg-[#111]',
                        'transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
                      )}
                    >
                      VOIR TOUS LES PRODUITS
                    </Link>
                    <Link
                      href="/collections"
                      onClick={onClose}
                      className={cn(
                        'inline-flex items-center justify-center',
                        'px-6 h-10',
                        'border border-black text-black',
                        'font-naets-label text-[11px]',
                        'hover:bg-[#F5F5F2]',
                        'transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
                      )}
                    >
                      NOS COLLECTIONS
                    </Link>
                  </div>
                </div>
              )}

              {/* ── Results: tabs + content ── */}
              {totalResults > 0 && (
                <div>
                  {/* Tab row */}
                  <TabRow
                    tabs={TABS}
                    active={activeTab}
                    counts={resultCounts}
                    onSelect={setActiveTab}
                  />

                  {/* Tab content */}
                  <div className="mt-6">
                    {renderActiveTabContent()}

                    {/* No results for this specific tab */}
                    {resultCounts[activeTab] === 0 && (
                      <p className="font-naets-micro text-[#707070] py-6">
                        AUCUN RÉSULTAT DANS CETTE CATÉGORIE.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
