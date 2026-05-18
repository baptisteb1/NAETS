import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gérer mes Consentements',
  description: 'Gérez vos préférences de cookies et de consentements NÆTS.',
};

export default function ConsentementsPage() {
  return (
    <main>
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-md mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-number" aria-hidden="true">GC</span>
            <h1
              className="font-condensed text-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(34px, 5vw, 56px)',
                letterSpacing: '0.02em',
              }}
            >
              GÉRER MES CONSENTEMENTS
            </h1>
          </div>
          <div className="h-px bg-[#E5E5E0] mb-10" aria-hidden="true" />
          <p
            className="text-[13px] text-[#707070] leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Gérez ici vos préférences en matière de cookies et de communication. Vos choix sont
            enregistrés et respectés conformément au RGPD.
          </p>
          <div className="border border-[#E5E5E0]">
            {[
              {
                title: 'COOKIES ESSENTIELS',
                description: 'Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.',
                required: true,
              },
              {
                title: 'COOKIES ANALYTIQUES',
                description: 'Nous aident à comprendre comment vous utilisez le site.',
                required: false,
              },
              {
                title: 'COMMUNICATIONS MARKETING',
                description: 'Emails et notifications liés aux nouveautés et drops NÆTS.',
                required: false,
              },
            ].map((item, idx, arr) => (
              <div
                key={item.title}
                className={`flex items-center justify-between px-8 py-6 gap-6 ${idx < arr.length - 1 ? 'border-b border-[#E5E5E0]' : ''}`}
              >
                <div>
                  <p className="font-naets-label text-black text-[11px] mb-1">{item.title}</p>
                  <p
                    className="text-[12px] text-[#707070]"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0">
                  {item.required ? (
                    <span className="font-naets-micro text-[#707070] text-[9px]">REQUIS</span>
                  ) : (
                    <div
                      className="w-10 h-5 border border-[#E5E5E0] bg-[#F5F5F2] flex items-center justify-end px-0.5"
                      role="switch"
                      aria-checked="false"
                      aria-label={`Activer ${item.title}`}
                      tabIndex={0}
                    >
                      <div className="w-4 h-4 bg-[#BDBDB7]" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p
            className="mt-6 text-[11px] text-[#BDBDB7] italic"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            La gestion dynamique des consentements sera activée lors du déploiement de la
            solution CMP.
          </p>
        </div>
      </section>
    </main>
  );
}
