'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

interface CartContextType {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (product: Product, size: string, color: string) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const addItem = useCallback((product: Product, size: string, color: string) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, size, color }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, size: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, size: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, size);
        return;
      }
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  return (
    <CartContext.Provider
      value={{ items, count, total, addItem, removeItem, updateQuantity, clearCart, isOpen, setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
