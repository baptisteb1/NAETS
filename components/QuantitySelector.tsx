'use client';

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (qty: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 10,
}: QuantitySelectorProps) {
  return (
    <div
      className="flex items-center border border-naets-light-gray"
      role="group"
      aria-label="Quantité"
    >
      <button
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="Diminuer la quantité"
        className="w-11 h-11 flex items-center justify-center hover:bg-naets-off-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Minus size={14} strokeWidth={1.5} />
      </button>

      <span
        className="flex-1 text-center text-sm font-medium min-w-[40px]"
        aria-live="polite"
        aria-atomic="true"
        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
      >
        {quantity}
      </span>

      <button
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="Augmenter la quantité"
        className="w-11 h-11 flex items-center justify-center hover:bg-naets-off-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Plus size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
}
