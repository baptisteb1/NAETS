import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales NÆTS — Informations légales, éditeur, hébergeur.',
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-md mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-number" aria-hidden="true">ML</span>
            <h1
              className="font-condensed text-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(36px, 5vw, 56px)',
                letterSpacing: '0.02em',
              }}
            >
              MENTIONS LÉGALES
            </h1>
          </div>
          <div className="h-px bg-[#E5E5E0] mb-10" aria-hidden="true" />
          <div
            className="space-y-8 text-[13px] text-[#707070] leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <div>
              <p className="font-naets-label text-black text-[11px] mb-3">ÉDITEUR</p>
              <p>NÆTS — [Raison sociale à compléter]</p>
              <p>Siège social : [Adresse à compléter]</p>
              <p>SIRET : [N° SIRET à compléter]</p>
            </div>
            <div className="h-px bg-[#E5E5E0]" aria-hidden="true" />
            <div>
              <p className="font-naets-label text-black text-[11px] mb-3">HÉBERGEMENT</p>
              <p>[Hébergeur à compléter lors du déploiement]</p>
            </div>
            <div className="h-px bg-[#E5E5E0]" aria-hidden="true" />
            <div>
              <p className="font-naets-label text-black text-[11px] mb-3">CONTACT</p>
              <p>[Email de contact à compléter]</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
