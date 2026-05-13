import Link from 'next/link';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Minimal breadcrumb navigation following the NÆTS industrial design system.
 *
 * - 11px, #707070, uppercase, letter-spacing 0.05em
 * - Items separated by "/"
 * - Last item: #000, not linked
 * - Single line; overflow-x scroll on mobile (hidden scrollbar)
 * - No 'use client' needed — purely presentational, no state/effects
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cn(
        'w-full overflow-x-auto',
        // Hide scrollbar cross-browser while keeping scroll functional
        '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
      )}
    >
      <ol
        className="flex items-center whitespace-nowrap"
        role="list"
        style={{
          fontSize: 11,
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center"
              aria-current={isLast ? 'page' : undefined}
            >
              {/* Separator */}
              {!isFirst && (
                <span
                  className="mx-1.5 text-naets-mid-gray select-none shrink-0"
                  aria-hidden="true"
                  style={{ fontSize: 10 }}
                >
                  /
                </span>
              )}

              {/* Item */}
              {isLast || !item.href ? (
                // Last item or unlinked: plain text in near-black
                <span
                  className={cn(
                    'font-sans uppercase',
                    isLast
                      ? 'text-naets-black font-medium'
                      : 'text-naets-dark-gray'
                  )}
                >
                  {item.label}
                </span>
              ) : (
                // Linked item: dark-gray, hover to black
                <Link
                  href={item.href}
                  className={cn(
                    'font-sans uppercase text-naets-dark-gray',
                    'transition-colors duration-150',
                    'hover:text-naets-black',
                    'focus-visible:outline-none focus-visible:text-naets-black focus-visible:underline'
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
