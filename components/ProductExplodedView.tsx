import { cn } from '@/lib/utils';

interface ExplodedBlock {
  num: string;
  title: string;
  legend: string;
}

const blocks: ExplodedBlock[] = [
  {
    num: '01',
    title: 'ARCHITECTURE COMPLÈTE',
    legend:
      'Vue latérale en configuration finale. Tige, plaque carbone et midsole en assemblage intégral.',
  },
  {
    num: '02',
    title: 'DROP-IN ATPU',
    legend:
      "Semelle de propreté amovible en ATPU. Absorption des microchocs. Retrait et remplacement possible selon l'usage.",
  },
  {
    num: '03',
    title: 'MIDSOLE ATPU 37 MM',
    legend:
      'Mousse ATPU super-critique. Stack 37 mm. Réactivité et restitution énergétique optimales à chaque foulée.',
  },
  {
    num: '04',
    title: 'CONTREFORT TPU',
    legend:
      'Renfort arrière en TPU discret. Stabilisation latérale du talon. Efficace sans surpoids ni volume.',
  },
];

function PlaceholderBlock({ num }: { num: string }) {
  return (
    <div
      className="relative flex items-center justify-center bg-[#EAEAE6] overflow-hidden"
      style={{ aspectRatio: '1/1' }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }}
      />
      <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-black/15" />
      <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-black/15" />
      <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-black/15" />
      <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-black/15" />
      <span
        className="font-condensed text-black/12 text-[10px] tracking-[0.28em] select-none"
      >
        NÆTS / {num}
      </span>
    </div>
  );
}

export default function ProductExplodedView() {
  return (
    <section className="py-16 md:py-20 bg-[#F5F5F2] border-t border-[#E5E5E0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="section-number" aria-hidden="true">E</span>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-naets-dark-gray">
                Architecture produit
              </span>
            </div>
            <h2
              className="font-condensed text-naets-black uppercase leading-none"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '0.04em' }}
            >
              VUE ÉCLATÉE
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-[#D8D8D2] ml-4" aria-hidden="true" />
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#D8D8D2]">
          {blocks.map((block, i) => (
            <div
              key={block.num}
              className={cn(
                'flex flex-col',
                i < blocks.length - 1 ? 'border-r border-[#D8D8D2]' : '',
                i < 2 ? 'border-b border-[#D8D8D2] md:border-b-0' : ''
              )}
            >
              <PlaceholderBlock num={block.num} />

              <div className="p-5 border-t border-[#D8D8D2] bg-white flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className="font-condensed text-naets-mid-gray shrink-0"
                    style={{ fontSize: 10, letterSpacing: '0.15em' }}
                  >
                    {block.num}
                  </span>
                  <div className="flex-1 h-px bg-[#E5E5E0]" aria-hidden="true" />
                </div>
                <h3
                  className="font-condensed text-naets-black uppercase leading-none"
                  style={{ fontSize: 14, letterSpacing: '0.07em' }}
                >
                  {block.title}
                </h3>
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 11 }}
                >
                  {block.legend}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
