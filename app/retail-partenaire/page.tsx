import type { Metadata } from 'next';
import RetailPartenaireClient from './RetailPartenaireClient';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Retail Partenaire',
  description:
    'Distribuer NÆTS, c\'est distribuer une marque premium. Programme revendeurs pour concept stores, running shops et multi-sport premium.',
  openGraph: {
    title: 'Retail Partenaire — Distribuer NÆTS',
    description:
      'Marque statutaire, univers fort, conditions partenaires attractives. Rejoignez le réseau de distribution NÆTS.',
  },
};

// ─── Page (server component) ──────────────────────────────────────────────────

export default function RetailPartenairePage() {
  return <RetailPartenaireClient />;
}
