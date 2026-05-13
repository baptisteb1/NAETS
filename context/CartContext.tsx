'use client';

// Re-export from the canonical lib location, adding the `cartCount` alias
// that the Header component expects.
export { CartProvider } from '@/lib/cart-context';
export { useWishlist } from '@/lib/wishlist-context';

import { useCart as _useCart } from '@/lib/cart-context';

/** Wrapper that exposes `cartCount` alongside the standard `count` field. */
export function useCart() {
  const ctx = _useCart();
  return {
    ...ctx,
    cartCount: ctx.count,
  };
}
