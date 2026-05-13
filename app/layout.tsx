import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';
import { WishlistProvider } from '@/lib/wishlist-context';
import SiteShell from '@/components/SiteShell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | NÆTS',
    default: 'NÆTS — Engineered Running Performance',
  },
  description:
    'NÆTS — Marque de running premium. Chaussures techniques, vêtements performants. Engineered Running Performance.',
  keywords: ['running', 'chaussures running', 'vêtements running', 'NÆTS', 'performance'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'NÆTS',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* Bebas Neue via Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black antialiased">
        <CartProvider>
          <WishlistProvider>
            <SiteShell>{children}</SiteShell>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
