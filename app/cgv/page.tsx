import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'CGV NÆTS — Conditions générales de vente, livraison, retours et garanties.',
};

export default function CGVPage() {
  return (
    <main>
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-md mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-number" aria-hidden="true">CV</span>
            <h1
              className="font-condensed text-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(34px, 5vw, 56px)',
                letterSpacing: '0.02em',
              }}
            >
              CONDITIONS GÉNÉRALES DE VENTE
            </h1>
          </div>
          <div className="h-px bg-[#E5E5E0] mb-10" aria-hidden="true" />
          <div
            className="space-y-8 text-[13px] text-[#707070] leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {[
              {
                title: 'OBJET',
                body: 'Les présentes conditions générales de vente régissent les ventes effectuées sur le site næts.com. [Contenu à compléter]',
              },
              {
                title: 'COMMANDES',
                body: 'Toute commande passée sur le site vaut acceptation des présentes CGV. [Contenu à compléter]',
              },
              {
                title: 'LIVRAISON',
                body: 'Les délais et modalités de livraison seront précisés lors du lancement. [Contenu à compléter]',
              },
              {
                title: 'RETOURS',
                body: 'Vous disposez d\'un délai de 14 jours à compter de la réception pour exercer votre droit de rétractation. Consultez notre politique de retours pour plus d\'informations.',
              },
            ].map((section, idx, arr) => (
              <div key={section.title}>
                <p className="font-naets-label text-black text-[11px] mb-3">{section.title}</p>
                <p>{section.body}</p>
                {idx < arr.length - 1 && (
                  <div className="h-px bg-[#E5E5E0] mt-8" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
