import { Truck, Lock, RotateCcw, Star, Headphones } from 'lucide-react';

const items = [
  {
    icon: Truck,
    label: 'LIVRAISON 24H/48H',
    sub: 'Offerte dès 100€',
  },
  {
    icon: Lock,
    label: 'PAIEMENT SÉCURISÉ',
    sub: 'SSL & 3D Secure',
  },
  {
    icon: RotateCcw,
    label: 'RETOURS SIMPLIFIÉS',
    sub: '30 jours pour changer d\'avis',
  },
  {
    icon: Star,
    label: 'AVIS CLIENTS',
    sub: '4.9/5 — Plus de 500 avis',
  },
  {
    icon: Headphones,
    label: 'EXPERT RUNNING',
    sub: 'Conseil personnalisé',
  },
];

export default function ReassuranceBar() {
  return (
    <section className="border-y border-naets-light-gray bg-naets-off-white" aria-label="Nos engagements">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-naets-light-gray">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center gap-3 py-8 px-4"
              >
                <Icon size={20} strokeWidth={1.5} className="text-naets-dark-gray" />
                <div>
                  <p
                    className="text-[10px] tracking-[0.15em] uppercase font-medium text-black mb-1"
                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-[11px] text-naets-dark-gray"
                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
