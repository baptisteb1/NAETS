'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-naets-light-gray last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-${item.id}`}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className="text-sm font-medium tracking-wide group-hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          {item.question}
        </span>
        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
          {isOpen ? (
            <Minus size={14} strokeWidth={1.5} />
          ) : (
            <Plus size={14} strokeWidth={1.5} />
          )}
        </span>
      </button>
      <div
        id={`accordion-${item.id}`}
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <div
          className="text-sm text-naets-dark-gray leading-relaxed"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={cn('divide-y divide-naets-light-gray border-t border-naets-light-gray', className)}>
      {items.map((item) => (
        <AccordionRow
          key={item.id}
          item={item}
          isOpen={openIds.has(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}
