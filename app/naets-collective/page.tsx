import type { Metadata } from 'next';
import NaetsCollectiveClient from './NaetsCollectiveClient';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'NÆTS Collective',
  description:
    'Rejoindre le NÆTS Collective : Running Club, Social Club, communauté de coureurs, créateurs et personnes en mouvement.',
  openGraph: {
    title: 'NÆTS Collective — Un espace pour celles et ceux qui courent',
    description:
      'Sorties hebdomadaires, culture urbaine, création. La communauté NÆTS t\'attend.',
  },
};

// ─── Page (server component) ──────────────────────────────────────────────────

export default function NaetsCollectivePage() {
  return <NaetsCollectiveClient />;
}
