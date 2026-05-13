import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface EditorialBlockProps {
  label?: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
  imagePosition?: 'left' | 'right';
  dark?: boolean;
  imagePlaceholder?: string;
}

export default function EditorialBlock({
  label,
  title,
  body,
  cta,
  imagePosition = 'right',
  dark = false,
  imagePlaceholder = 'NÆTS',
}: EditorialBlockProps) {
  const textBlock = (
    <div className="flex flex-col justify-center py-16 lg:py-24 px-8 lg:px-16">
      {label && (
        <p
          className="text-[10px] tracking-[0.25em] uppercase mb-8"
          style={{
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            color: dark ? '#707070' : '#707070',
          }}
        >
          {label}
        </p>
      )}
      <h2
        className="text-4xl lg:text-6xl font-condensed leading-tight mb-6"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {title}
      </h2>
      <p
        className="text-sm leading-relaxed mb-10 max-w-md"
        style={{
          fontFamily: 'var(--font-inter), Inter, sans-serif',
          color: dark ? '#BDBDB7' : '#707070',
        }}
      >
        {body}
      </p>
      {cta && (
        <Link
          href={cta.href}
          className={`inline-flex items-center gap-3 self-start text-xs tracking-[0.15em] uppercase font-medium border px-8 py-4 transition-all duration-150 ${
            dark
              ? 'border-white/40 text-white hover:bg-white hover:text-black'
              : 'border-black text-black hover:bg-black hover:text-white'
          }`}
        >
          {cta.label}
          <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );

  const imageBlock = (
    <div
      className="relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center"
      style={{
        background: dark
          ? 'linear-gradient(135deg, #111 0%, #222 100%)'
          : 'linear-gradient(135deg, #E5E5E0 0%, #BDBDB7 100%)',
      }}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <span
        className="relative text-6xl font-condensed tracking-widest opacity-20"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: dark ? '#fff' : '#000',
        }}
        aria-hidden="true"
      >
        {imagePlaceholder}
      </span>

      {/* Corner marks */}
      <span
        className="absolute top-4 left-4 w-5 h-5 border-t border-l"
        style={{ borderColor: dark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)' }}
        aria-hidden="true"
      />
      <span
        className="absolute bottom-4 right-4 w-5 h-5 border-b border-r"
        style={{ borderColor: dark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)' }}
        aria-hidden="true"
      />
    </div>
  );

  return (
    <section
      className={`${dark ? 'bg-naets-near-black text-white' : 'bg-white text-black'}`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        {imagePosition === 'left' ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}
