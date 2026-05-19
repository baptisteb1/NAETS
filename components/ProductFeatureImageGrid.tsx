import { cn } from '@/lib/utils';

interface FeatureBlock {
  title: string;
  text: string;
}

interface ProductFeatureImageGridProps {
  blocks?: FeatureBlock[];
}

const DEFAULT_BLOCKS: FeatureBlock[] = [
  {
    title: 'TIGE TECHNIQUE',
    text: 'Single mesh rip-stop ultra-léger. Maintien anatomique précis avec renforts TPU ciblés aux zones de contrainte.',
  },
  {
    title: 'PROPULSION CONTRÔLÉE',
    text: "Plaque carbone full-length intégrée dans la midsole ATPU. Transfert d'énergie direct à chaque foulée.",
  },
  {
    title: 'ADHÉRENCE PRÉCISE',
    text: 'Grip optimisé pour routes sèches et humides. Zones de contact stratégiques avant-pied et talon.',
  },
];

function FeaturePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="relative w-full bg-[#EAEAE6] overflow-hidden flex items-center justify-center select-none"
      style={{ aspectRatio: '3/4' }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />
      <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-black/15" />
      <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-black/15" />
      <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-black/15" />
      <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-black/15" />
      <span
        className="font-condensed text-black/12 text-[10px] tracking-[0.28em]"
      >
        {label}
      </span>
    </div>
  );
}

export default function ProductFeatureImageGrid({ blocks }: ProductFeatureImageGridProps) {
  const items = blocks && blocks.length >= 3 ? blocks.slice(0, 3) : DEFAULT_BLOCKS;

  return (
    <section className="py-16 md:py-20 border-t border-[#E5E5E0] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="section-number" aria-hidden="true">F</span>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-naets-dark-gray">
                Caractéristiques
              </span>
            </div>
            <h2
              className="font-condensed text-naets-black uppercase leading-none"
              style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '0.04em' }}
            >
              TECHNOLOGIE DÉTAILLÉE
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-[#D8D8D2] ml-4" aria-hidden="true" />
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#D8D8D2]">
          {items.map((block, i) => (
            <div
              key={i}
              className={cn(
                'flex flex-col',
                i < items.length - 1 ? 'border-b border-[#D8D8D2] md:border-b-0 md:border-r border-[#D8D8D2]' : ''
              )}
            >
              {/* Image placeholder */}
              <FeaturePlaceholder label={`NÆTS / F${String(i + 1).padStart(2, '0')}`} />

              {/* Text block */}
              <div className="p-6 border-t border-[#D8D8D2] flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="font-condensed text-naets-mid-gray shrink-0"
                    style={{ fontSize: 10, letterSpacing: '0.15em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-[#E5E5E0]" aria-hidden="true" />
                </div>
                <h3
                  className="font-condensed text-naets-black uppercase leading-none"
                  style={{ fontSize: 15, letterSpacing: '0.08em' }}
                >
                  {block.title}
                </h3>
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 12 }}
                >
                  {block.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
