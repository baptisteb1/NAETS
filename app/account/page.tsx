import type { Metadata } from 'next';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Mon Compte',
  description:
    'Connectez-vous à votre compte NÆTS ou créez votre espace personnel pour suivre vos commandes.',
  openGraph: {
    title: 'Mon Compte | NÆTS',
    description: 'Accédez à votre espace NÆTS.',
  },
};

// ─── Field ────────────────────────────────────────────────────────────────────

function Field({
  id,
  label,
  type = 'text',
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="font-sans text-naets-black uppercase"
        style={{ fontSize: 10, letterSpacing: '0.18em', fontWeight: 500 }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="
          w-full bg-transparent border-b border-naets-black py-2
          font-sans text-naets-black placeholder:text-naets-mid-gray
          focus:outline-none focus:border-naets-black
          transition-colors duration-150
        "
        style={{ fontSize: 14, letterSpacing: '0.02em' }}
      />
    </div>
  );
}

// ─── Empty Order State ────────────────────────────────────────────────────────

function EmptyOrders() {
  return (
    <div className="flex flex-col items-center justify-center py-16 border border-naets-light-gray">
      {/* Corner marks */}
      <div className="relative w-full h-full">
        <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-naets-light-gray" aria-hidden="true" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-naets-light-gray" aria-hidden="true" />
      </div>

      <span
        className="font-condensed text-naets-light-gray leading-none mb-4 select-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(48px, 8vw, 96px)',
          letterSpacing: '0.05em',
        }}
        aria-hidden="true"
      >
        0
      </span>

      <p
        className="font-sans text-naets-dark-gray uppercase mb-2"
        style={{ fontSize: 11, letterSpacing: '0.15em' }}
      >
        AUCUNE COMMANDE POUR L&apos;INSTANT
      </p>
      <p
        className="font-sans text-naets-mid-gray text-center max-w-xs"
        style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.7 }}
      >
        Vos commandes apparaîtront ici une fois votre premier achat effectué.
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AccountPage() {
  return (
    <main>

      {/* ── 1. HERO HEADER ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="account-title"
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        {/* Corner marks */}
        <span className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20" aria-hidden="true" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-8 md:px-12 pt-16 pb-14 md:pb-16">
          <p
            className="font-sans text-naets-dark-gray uppercase mb-4"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            NÆTS — ESPACE CLIENT
          </p>
          <h1
            id="account-title"
            className="font-condensed text-naets-white leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(64px, 11vw, 140px)',
              letterSpacing: '0.02em',
            }}
          >
            MON COMPTE
          </h1>
        </div>
      </section>

      {/* ── 2. LOGIN / REGISTER ──────────────────────────────────────────────── */}
      <section
        className="bg-naets-white px-8 md:px-12 py-16"
        aria-label="Connexion et inscription"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-naets-black">

            {/* ─── Left: Login ─────────────────────────────────────────────── */}
            <div className="p-8 md:p-12 flex flex-col gap-8 border-b md:border-b-0 md:border-r border-naets-black">

              {/* Section label */}
              <div className="flex items-center gap-4">
                <span
                  className="inline-flex items-center justify-center bg-naets-black text-naets-white font-sans font-semibold shrink-0"
                  style={{ fontSize: 10, width: 22, height: 22, letterSpacing: 0 }}
                  aria-hidden="true"
                >
                  01
                </span>
                <h2
                  className="font-condensed text-naets-black leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(28px, 3.5vw, 44px)',
                    letterSpacing: '0.02em',
                  }}
                >
                  SE CONNECTER
                </h2>
              </div>

              {/* Form */}
              <form
                method="post"
                action="#"
                className="flex flex-col gap-7"
                noValidate
                aria-label="Formulaire de connexion"
              >
                <Field
                  id="login-email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  placeholder="exemple@email.fr"
                />
                <Field
                  id="login-password"
                  label="Mot de passe"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                />

                <div className="flex flex-col gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full font-sans font-medium bg-naets-black text-naets-white py-4 transition-colors duration-150 hover:bg-naets-near-black focus:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2"
                    style={{ fontSize: 11, letterSpacing: '0.15em' }}
                  >
                    SE CONNECTER
                  </button>

                  <button
                    type="button"
                    className="font-sans text-naets-dark-gray underline underline-offset-4 hover:text-naets-black transition-colors duration-150 text-left"
                    style={{ fontSize: 12, letterSpacing: '0.04em' }}
                  >
                    Mot de passe oublié ?
                  </button>
                </div>
              </form>
            </div>

            {/* ─── Right: Register ─────────────────────────────────────────── */}
            <div className="p-8 md:p-12 flex flex-col gap-8" style={{ backgroundColor: '#F5F5F2' }}>

              {/* Section label */}
              <div className="flex items-center gap-4">
                <span
                  className="inline-flex items-center justify-center bg-naets-black text-naets-white font-sans font-semibold shrink-0"
                  style={{ fontSize: 10, width: 22, height: 22, letterSpacing: 0 }}
                  aria-hidden="true"
                >
                  02
                </span>
                <h2
                  className="font-condensed text-naets-black leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(28px, 3.5vw, 44px)',
                    letterSpacing: '0.02em',
                  }}
                >
                  CRÉER UN COMPTE
                </h2>
              </div>

              {/* Form */}
              <form
                method="post"
                action="#"
                className="flex flex-col gap-7"
                noValidate
                aria-label="Formulaire de création de compte"
              >
                <div className="grid grid-cols-2 gap-6">
                  <Field
                    id="register-firstname"
                    label="Prénom"
                    autoComplete="given-name"
                    placeholder="Jean"
                  />
                  <Field
                    id="register-lastname"
                    label="Nom"
                    autoComplete="family-name"
                    placeholder="Dupont"
                  />
                </div>
                <Field
                  id="register-email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  placeholder="exemple@email.fr"
                />
                <Field
                  id="register-password"
                  label="Mot de passe"
                  type="password"
                  autoComplete="new-password"
                  placeholder="8 caractères minimum"
                />

                {/* CGV checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="cgv"
                    name="cgv"
                    className="
                      mt-0.5 shrink-0 w-4 h-4 border border-naets-black bg-white
                      appearance-none checked:bg-naets-black
                      focus:outline-none focus-visible:ring-1 focus-visible:ring-naets-black
                      cursor-pointer
                    "
                  />
                  <span
                    className="font-sans text-naets-dark-gray leading-snug group-hover:text-naets-black transition-colors duration-150"
                    style={{ fontSize: 12, letterSpacing: '0.03em' }}
                  >
                    J&apos;accepte les{' '}
                    <a
                      href="/cgv"
                      className="text-naets-black underline underline-offset-2 hover:text-naets-dark-gray"
                    >
                      Conditions Générales de Vente
                    </a>
                  </span>
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full font-sans font-medium border border-naets-black text-naets-black py-4 transition-colors duration-150 hover:bg-naets-black hover:text-naets-white focus:outline-none focus-visible:ring-2 focus-visible:ring-naets-black focus-visible:ring-offset-2"
                    style={{ fontSize: 11, letterSpacing: '0.15em' }}
                  >
                    CRÉER MON COMPTE
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. ORDER HISTORY ─────────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-12 pb-20"
        style={{ backgroundColor: '#FFFFFF' }}
        aria-labelledby="orders-title"
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="flex items-center gap-4 mb-8 pt-4 border-t border-naets-light-gray">
            <h2
              id="orders-title"
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(28px, 4vw, 48px)',
                letterSpacing: '0.02em',
              }}
            >
              HISTORIQUE DE COMMANDES
            </h2>
          </div>

          {/* Empty state */}
          <EmptyOrders />

        </div>
      </section>

      {/* ── 4. AVANTAGES COMPTE ──────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-12 py-14 border-t border-naets-light-gray"
        style={{ backgroundColor: '#F5F5F2' }}
        aria-labelledby="avantages-title"
      >
        <div className="max-w-screen-xl mx-auto">
          <p
            className="font-sans text-naets-dark-gray uppercase mb-6"
            style={{ fontSize: 10, letterSpacing: '0.2em' }}
          >
            NÆTS — ESPACE CLIENT
          </p>
          <h3
            id="avantages-title"
            className="font-condensed text-naets-black leading-none mb-10"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(32px, 5vw, 64px)',
              letterSpacing: '0.02em',
            }}
          >
            POURQUOI CRÉER UN COMPTE ?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 border border-naets-light-gray">
            {[
              {
                num: '01',
                title: 'SUIVI DE COMMANDE',
                body: "Consultez l'état de vos livraisons en temps réel, directement depuis votre espace.",
              },
              {
                num: '02',
                title: 'RETOURS SIMPLIFIÉS',
                body: 'Initiez vos retours en un clic sans avoir à remplir un bon papier.',
              },
              {
                num: '03',
                title: 'LISTE DE SOUHAITS',
                body: 'Sauvegardez vos modèles favoris et soyez alerté dès le retour en stock.',
              },
            ].map((item, idx) => (
              <div
                key={item.num}
                className={`p-8 bg-white flex flex-col gap-4 border-b sm:border-b-0 ${idx < 2 ? 'sm:border-r' : ''} border-naets-light-gray`}
              >
                <span
                  className="font-condensed text-naets-light-gray leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 48,
                    letterSpacing: '0.02em',
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {item.num}
                </span>
                <div className="h-px bg-naets-black w-6" aria-hidden="true" />
                <h4
                  className="font-condensed text-naets-black leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 24,
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="font-sans text-naets-dark-gray leading-relaxed"
                  style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.75 }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
