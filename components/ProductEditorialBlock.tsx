'use client';

import { useState } from 'react';
import ProductDescriptionDrawer from './ProductDescriptionDrawer';

interface ProductEditorialBlockProps {
  summaryStatement: string;
  shortDescriptionIntro: string;
  longDescription: string;
  productName: string;
}

export default function ProductEditorialBlock({
  summaryStatement,
  shortDescriptionIntro,
  longDescription,
  productName,
}: ProductEditorialBlockProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-20 border-t border-[#E5E5E0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left — Manifesto */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <span className="section-number" aria-hidden="true">M</span>
                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-naets-dark-gray">
                  Manifeste
                </span>
              </div>
              <blockquote>
                <p
                  className="font-condensed text-naets-black uppercase leading-[1.08]"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '0.03em' }}
                >
                  {summaryStatement}
                </p>
              </blockquote>
              <div className="w-10 h-px bg-naets-black mt-8" aria-hidden="true" />
            </div>

            {/* Right — Intro + CTA */}
            <div className="flex flex-col justify-center gap-8">
              <div className="flex items-center gap-3">
                <span className="section-number" aria-hidden="true">D</span>
                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-naets-dark-gray">
                  Description
                </span>
              </div>

              <p
                className="font-sans text-naets-dark-gray leading-relaxed"
                style={{ fontSize: 14 }}
              >
                {shortDescriptionIntro}
              </p>

              <button
                onClick={() => setDrawerOpen(true)}
                className="group flex items-center gap-3 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-naets-black"
                aria-label="Lire la suite de la description complète"
              >
                <span className="font-condensed text-naets-black uppercase text-[13px] tracking-[0.2em] border-b border-naets-black pb-0.5 transition-opacity duration-150 group-hover:opacity-60">
                  LIRE LA SUITE
                </span>
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M1 5H13M9 1L13 5L9 9" stroke="#111" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProductDescriptionDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        productName={productName}
        longDescription={longDescription}
      />
    </>
  );
}
