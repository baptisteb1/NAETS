'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useCart } from '@/lib/cart-context';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const CartDrawer = dynamic(() => import('@/components/CartDrawer'), { ssr: false });
const SearchOverlay = dynamic(() => import('@/components/SearchOverlay'), { ssr: false });

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { isOpen: cartOpen, setIsOpen: setCartOpen } = useCart();

  return (
    <>
      <Header onSearchOpen={() => setSearchOpen(true)} onCartOpen={() => setCartOpen(true)} />
      <main className="pt-[120px] min-h-screen">{children}</main>
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
