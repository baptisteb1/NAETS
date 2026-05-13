import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TechnicalItem {
  number: string;
  title: string;
  description: string;
}

interface TechnicalBlockProps {
  sectionLabel?: string;
  title: string;
  subtitle?: string;
  items: TechnicalItem[];
  cta?: { label: string; href: string };
  dark?: boolean;
}

export default function TechnicalBlock({
  sectionLabel,
  title,
  subtitle,
  items,
  cta,
  dark = false,
}: TechnicalBlockProps) {
  return (
    <section
      className={`py-20 px-8 ${dark ? 'bg-naets-near-black text-white' : 'bg-naets-off-white text-black'}`}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          {sectionLabel && (
            <div className="flex items-center gap-3 mb-6">
              <span
                className="section-number"
                style={{ background: dark ? '#fff' : '#000', color: dark ? '#000' : '#fff' }}
              >
                {sectionLabel}
              </span>
              <span
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  color: dark ? '#BDBDB7' : '#707070',
                }}
              >
                ARCHITECTURE TECHNIQUE
              </span>
            </div>
          )}
          <h2
            className="text-5xl lg:text-7xl font-condensed leading-tight mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-sm max-w-lg leading-relaxed"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                color: dark ? '#BDBDB7' : '#707070',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, idx) => (
            <div
              key={item.number}
              className={`relative p-8 border-b ${
                dark ? 'border-white/10' : 'border-naets-light-gray'
              } ${idx < items.length - 1 ? (dark ? 'lg:border-r lg:border-white/10' : 'lg:border-r lg:border-naets-light-gray') : ''}`}
            >
              {/* Number */}
              <div
                className="text-6xl font-condensed leading-none mb-4 opacity-20"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                aria-hidden="true"
              >
                {item.number}
              </div>
              <h3
                className="text-sm font-medium tracking-[0.1em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  color: dark ? '#707070' : '#707070',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className="mt-12">
            <Link
              href={cta.href}
              className={`inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase font-medium border px-8 py-4 transition-colors duration-150 ${
                dark
                  ? 'border-white/30 text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              {cta.label}
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
