import { cn } from '@/lib/utils';

interface Benefit {
  title: string;
  text: string;
}

interface ProductBenefitIconsProps {
  benefits?: Benefit[];
}

const ICONS = [
  // Layers — mousse/stack
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 13L10 17L18 13" stroke="#111" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 9L10 13L18 9" stroke="#111" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 5L10 9L18 5L10 1L2 5Z" stroke="#111" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Shield — maintien
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2L3 5V10C3 14.4 6.2 17.5 10 19C13.8 17.5 17 14.4 17 10V5L10 2Z" stroke="#111" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Zap — race ready
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M11 2L4 12H10L9 18L16 8H10L11 2Z" stroke="#111" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Arrow up-right — propulsion
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15L15 5M15 5H7M15 5V13" stroke="#111" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

const DEFAULT_BENEFITS: Benefit[] = [
  { title: 'MOUSSE ATPU', text: 'Stack 37 mm super-critique' },
  { title: 'MAINTIEN CIBLÉ', text: 'Contrefort TPU intégré' },
  { title: 'RACE READY', text: 'Conçu pour la compétition' },
  { title: 'PROPULSION', text: 'Plaque carbone full-length' },
];

export default function ProductBenefitIcons({ benefits }: ProductBenefitIconsProps) {
  const items = benefits && benefits.length >= 4 ? benefits.slice(0, 4) : DEFAULT_BENEFITS;

  return (
    <div className="grid grid-cols-2 gap-px bg-[#E6E6E2] border border-[#E6E6E2]">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 p-4 bg-white"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            {ICONS[i]}
          </div>
          <div>
            <p className="font-condensed text-naets-black uppercase text-[11px] tracking-[0.15em] leading-none mb-0.5">
              {item.title}
            </p>
            <p className="font-sans text-naets-dark-gray text-[10px] leading-relaxed">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
