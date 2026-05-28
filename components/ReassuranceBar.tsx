import Link from 'next/link';
import { Truck, Lock, RotateCcw, Star, Headphones } from 'lucide-react';

const items = [
  {
    icon: Truck,
    label: 'LIVRAISON 24H/48H',
    sub: "Offerte dès 100€",
    href: '/livraison',
  },
  {
    icon: Lock,
    label: 'PAIEMENT SÉCURISÉ',
    sub: 'SSL & 3D Secure',
    href: null,
  },
  {
    icon: RotateCcw,
    label: 'RETOURS SIMPLIFIÉS',
    sub: "30 jours pour changer d'avis",
    href: '/retours',
  },
  {
    icon: Star,
    label: 'AVIS CLIENTS',
    sub: '4.9/5 — Plus de 500 avis',
    href: '/avis-clients',
  },
  {
    icon: Headphones,
    label: 'EXPERT RUNNING',
    sub: 'Conseil personnalisé',
    href: '/contact',
  },
];

export default function ReassuranceBar() {
  return (
    <section className="border-y border-naets-light-gray bg-naets-off-white" aria-label="Nos engagements">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-naets-light-gray">
          {items.map((item) => {
            const Icon = item.icon;
            const inner = (
              <>
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
              </>
            );

            const baseClass =
              'flex flex-col items-center text-center gap-3 py-8 px-4 transition-colors duration-150';

            return item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className={`${baseClass} hover:bg-white`}
              >
                {inner}
              </Link>
            ) : (
              <div key={item.label} className={baseClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
