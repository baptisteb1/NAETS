import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité NÆTS — Protection des données personnelles et RGPD.',
};

export default function ConfidentialitePage() {
  return (
    <main>
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-md mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-number" aria-hidden="true">PC</span>
            <h1
              className="font-condensed text-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                letterSpacing: '0.02em',
              }}
            >
              POLITIQUE DE CONFIDENTIALITÉ
            </h1>
          </div>
          <div className="h-px bg-[#E5E5E0] mb-10" aria-hidden="true" />
          <div
            className="space-y-8 text-[13px] text-[#707070] leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <div>
              <p className="font-naets-label text-black text-[11px] mb-3">DONNÉES COLLECTÉES</p>
              <p>
                NÆTS collecte uniquement les données nécessaires au fonctionnement du service et à
                l&apos;envoi des communications marketing pour lesquelles vous avez donné votre
                consentement explicite.
              </p>
            </div>
            <div className="h-px bg-[#E5E5E0]" aria-hidden="true" />
            <div>
              <p className="font-naets-label text-black text-[11px] mb-3">VOS DROITS</p>
              <p>
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
                d&apos;effacement et de portabilité de vos données. Pour exercer ces droits,
                contactez-nous à [email à compléter].
              </p>
            </div>
            <div className="h-px bg-[#E5E5E0]" aria-hidden="true" />
            <div>
              <p className="font-naets-label text-black text-[11px] mb-3">CONTACT DPO</p>
              <p>[Email DPO à compléter lors du déploiement]</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
