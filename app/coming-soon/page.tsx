import type { Metadata } from 'next';
import Link from 'next/link';
import ComingSoonHero from '@/components/ComingSoonHero';

export const metadata: Metadata = {
  title: 'Bientôt — NÆTS',
  description:
    'Le premier drop NÆTS arrive prochainement. Inscrivez-vous pour recevoir un accès exclusif avant l\'ouverture officielle.',
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <>
      <ComingSoonHero />

      {/* Minimal coming-soon footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/[0.06] px-8 md:px-16 py-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            {/* Brand */}
            <div>
              <p
                className="font-condensed text-white leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 22,
                  letterSpacing: '0.06em',
                }}
              >
                NÆTS
              </p>
              <p className="font-naets-micro text-white/18 text-[9px] tracking-[0.3em] mt-0.5">
                ENGINEERED RUNNING PERFORMANCE
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="font-naets-micro text-white/18 text-[9px]">© NÆTS 2027</span>
              <Link
                href="/mentions-legales"
                className="font-naets-micro text-white/25 hover:text-white/55 text-[9px] transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="font-naets-micro text-white/25 hover:text-white/55 text-[9px] transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/consentements"
                className="font-naets-micro text-white/25 hover:text-white/55 text-[9px] transition-colors"
              >
                Gérer mes consentements
              </Link>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
