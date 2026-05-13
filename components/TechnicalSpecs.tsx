interface TechnicalSpecsProps {
  specs: Record<string, string>;
  title?: string;
  columns?: 1 | 2;
}

export default function TechnicalSpecs({
  specs,
  title = 'SPÉCIFICATIONS TECHNIQUES',
  columns = 1,
}: TechnicalSpecsProps) {
  const entries = Object.entries(specs);

  return (
    <div>
      {title && (
        <div className="flex items-center gap-3 mb-6">
          <span className="section-number">T</span>
          <h3
            className="text-[11px] tracking-[0.2em] uppercase font-medium"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            {title}
          </h3>
        </div>
      )}

      <div
        className={
          columns === 2
            ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-8'
            : 'space-y-0'
        }
      >
        {entries.map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-baseline gap-4 py-2.5 border-b border-naets-light-gray"
          >
            <span
              className="text-[11px] tracking-[0.08em] uppercase text-naets-dark-gray shrink-0"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {key}
            </span>
            <span
              className="text-[12px] font-medium text-right"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
