import { cn } from '@/lib/utils';

interface ExplodedItem {
  number: string;
  title: string;
  text: string;
}

interface ProductExplodedArchitectureProps {
  items?: ExplodedItem[];
}

const DEFAULT_ITEMS: ExplodedItem[] = [
  {
    number: '01',
    title: 'ARCHITECTURE COMPLÈTE',
    text: 'Vue latérale en configuration finale. Tige, plaque carbone et midsole en assemblage intégral.',
  },
  {
    number: '02',
    title: 'SEMELLE INTERNE ATPU',
    text: "Semelle de propreté amovible en ATPU. Absorption des microchocs. Retrait et remplacement possible selon l'usage.",
  },
  {
    number: '03',
    title: 'MOUSSE ATPU 37 MM',
    text: 'Mousse ATPU super-critique. Stack 37 mm. Réactivité et restitution énergétique optimales à chaque foulée.',
  },
  {
    number: '04',
    title: 'CONTREFORT TPU',
    text: 'Renfort arrière en TPU discret. Stabilisation latérale du talon. Efficace sans surpoids ni volume.',
  },
];

function ExplodedPlaceholder() {
  return (
    <div
      className="relative w-full h-full min-h-[320px] md:min-h-0 bg-[#EAEAE6] flex items-center justify-center overflow-hidden select-none"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />
      <span className="absolute top-4 left-4 w-5 h-5 border-t border-l border-black/15" />
      <span className="absolute top-4 right-4 w-5 h-5 border-t border-r border-black/15" />
      <span className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-black/15" />
      <span className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-black/15" />
      <div className="flex flex-col items-center gap-3 text-center px-8">
        <span
          className="font-condensed text-black/15 uppercase"
          style={{ fontSize: 'clamp(16px, 2vw, 22px)', letterSpacing: '0.28em' }}
        >
          EXPLODED VIEW
        </span>
        <div className="w-8 h-px bg-black/15" />
        <span
          className="font-condensed text-black/10 uppercase"
          style={{ fontSize: 11, letterSpacing: '0.2em' }}
        >
          NÆTS ÆR-REFLEX
        </span>
      </div>
    </div>
  );
}

export default function ProductExplodedArchitecture({ items }: ProductExplodedArchitectureProps) {
  const exploded = items && items.length >= 4 ? items : DEFAULT_ITEMS;

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
              style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '0.04em' }}
            >
              VUE ÉCLATÉE
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-[#D8D8D2] ml-4" aria-hidden="true" />
        </div>

        {/* 50/50 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#D8D8D2]">

          {/* Left — image placeholder */}
          <div className="border-b border-[#D8D8D2] md:border-b-0 md:border-r border-[#D8D8D2]">
            <ExplodedPlaceholder />
          </div>

          {/* Right — numbered descriptions */}
          <div className="flex flex-col divide-y divide-[#D8D8D2] bg-white">
            {exploded.map((item) => (
              <div key={item.number} className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="font-condensed text-naets-mid-gray shrink-0"
                    style={{ fontSize: 11, letterSpacing: '0.15em' }}
                  >
                    {item.number}
                  </span>
                  <div className="flex-1 h-px bg-[#E5E5E0]" aria-hidden="true" />
                </div>
                <h3
                  className="font-condensed text-naets-black uppercase leading-none"
                  style={{ fontSize: 14, letterSpacing: '0.08em' }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 12 }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
