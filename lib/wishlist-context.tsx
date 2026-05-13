'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '@/data/products';

interface WishlistContextType {
  items: Product[];
  isInWishlist: (productId: string) => boolean;
  toggle: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  const isInWishlist = useCallback(
    (productId: string) => items.some((p) => p.id === productId),
    [items]
  );

  const toggle = useCallback((product: Product) => {
    setItems((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  }, []);

  return (
    <WishlistContext.Provider value={{ items, isInWishlist, toggle }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used inside WishlistProvider');
  return ctx;
}
