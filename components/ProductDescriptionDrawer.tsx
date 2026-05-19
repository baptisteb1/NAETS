'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ProductDescriptionDrawerProps {
  open: boolean;
  onClose: () => void;
  productName: string;
  longDescription: string;
}

export default function ProductDescriptionDrawer({
  open,
  onClose,
  productName,
  longDescription,
}: ProductDescriptionDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const paragraphs = longDescription.trim().split('\n\n').filter(Boolean);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Description complète — ${productName}`}
        className={cn(
          'fixed top-0 right-0 z-50 h-full bg-white shadow-[-4px_0_32px_rgba(0,0,0,0.1)]',
          'w-full md:w-[55vw] lg:w-[48vw] max-w-[680px]',
          'flex flex-col transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#E5E5E0] shrink-0">
          <div>
            <p className="font-naets-micro text-naets-mid-gray text-[9px] tracking-[0.22em] mb-1">
              DESCRIPTION COMPLÈTE
            </p>
            <h2
              className="font-condensed text-naets-black uppercase leading-none"
              style={{ fontSize: 18, letterSpacing: '0.06em' }}
            >
              {productName}
            </h2>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Fermer"
            className="w-9 h-9 flex items-center justify-center border border-[#D0D0C8] hover:border-naets-black transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-naets-black"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M1 1L9 9M9 1L1 9" stroke="#111" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          <div className="flex flex-col gap-6">
            {paragraphs.map((para, i) => {
              const hasSeparator = para.includes(' — ');
              if (hasSeparator) {
                const dashIdx = para.indexOf(' — ');
                const title = para.slice(0, dashIdx);
                const content = para.slice(dashIdx + 3);
                return (
                  <div key={i}>
                    <p
                      className="font-condensed text-naets-black uppercase mb-2"
                      style={{ fontSize: 13, letterSpacing: '0.12em' }}
                    >
                      {title}
                    </p>
                    <p
                      className="font-sans text-naets-dark-gray leading-relaxed"
                      style={{ fontSize: 13 }}
                    >
                      {content}
                    </p>
                  </div>
                );
              }
              if (para.startsWith('•')) {
                const lines = para.split('\n').filter(Boolean);
                return (
                  <ul key={i} className="space-y-2">
                    {lines.map((line, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 font-sans text-naets-dark-gray leading-relaxed"
                        style={{ fontSize: 13 }}
                      >
                        <span className="w-1 h-1 rounded-full bg-naets-dark-gray mt-2 shrink-0" aria-hidden="true" />
                        <span>{line.replace(/^•\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 13 }}
                >
                  {para}
                </p>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-[#E5E5E0] shrink-0">
          <button
            onClick={onClose}
            className="font-condensed text-naets-black uppercase text-[11px] tracking-[0.2em] hover:opacity-60 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-naets-black"
          >
            FERMER ✕
          </button>
        </div>
      </div>
    </>
  );
}
