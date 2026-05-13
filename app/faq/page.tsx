'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQ_DATA: FAQCategory[] = [
  {
    id: 'commande',
    label: 'COMMANDE',
    items: [
      {
        question: 'Comment passer une commande ?',
        answer:
          'Sélectionnez votre produit, choisissez la taille et la couleur, puis cliquez sur Ajouter au panier. Suivez ensuite les étapes de paiement.',
      },
      {
        question: 'Puis-je modifier ou annuler ma commande ?',
        answer:
          'Vous pouvez modifier ou annuler votre commande dans les 2 heures suivant sa confirmation. Contactez-nous rapidement.',
      },
      {
        question: 'Puis-je commander en guest (sans créer de compte) ?',
        answer: 'Oui, vous pouvez passer commande sans créer de compte NÆTS.',
      },
    ],
  },
  {
    id: 'livraison',
    label: 'LIVRAISON',
    items: [
      {
        question: 'Quel est le délai de livraison ?',
        answer:
          "Livraison en 24 à 48h ouvrés. Pour les DOM-TOM et l'international, comptez 3 à 7 jours ouvrés.",
      },
      {
        question: 'La livraison est-elle offerte ?',
        answer: 'La livraison est offerte pour toute commande supérieure à 100€.',
      },
      {
        question: 'Comment suivre ma commande ?',
        answer:
          "Un lien de suivi vous sera envoyé par email dès l'expédition de votre colis.",
      },
    ],
  },
  {
    id: 'retours',
    label: 'RETOURS',
    items: [
      {
        question: 'Comment effectuer un retour ?',
        answer:
          'Vous disposez de 30 jours à compter de la réception pour retourner un article. Rendez-vous sur notre page « Faire un retour ».',
      },
      {
        question: 'Le retour est-il gratuit ?',
        answer: 'Le retour est gratuit depuis la France métropolitaine.',
      },
      {
        question: 'Sous quel délai suis-je remboursé ?',
        answer:
          'Le remboursement est effectué sous 5 à 7 jours ouvrés après réception du retour.',
      },
    ],
  },
  {
    id: 'tailles',
    label: 'TAILLES',
    items: [
      {
        question: 'Comment choisir ma taille ?',
        answer:
          'Référez-vous à notre tableau des tailles. Nos chaussures sont en taille EU standard. En cas de doute, nous recommandons de prendre la taille supérieure.',
      },
      {
        question: 'Les produits sont-ils unisexes ?',
        answer: "Oui, l'ensemble de la gamme NÆTS est unisexe. Le sizing est standard EU.",
      },
      {
        question: "Que faire si ma taille n'est plus disponible ?",
        answer:
          "Vous pouvez vous inscrire à notre liste d'attente via la fiche produit.",
      },
    ],
  },
  {
    id: 'produits',
    label: 'PRODUITS',
    items: [
      {
        question: 'Où sont fabriqués les produits NÆTS ?',
        answer:
          'Les produits NÆTS sont conçus en France et fabriqués dans des ateliers certifiés en Europe et en Asie.',
      },
      {
        question: 'Quelle est la différence entre les collections ?',
        answer:
          'Æ-ESSENTIAL est polyvalente, Æ-REFLEX est légère et réactive, Æ-SLYDE est optimisée pour les longues distances.',
      },
      {
        question: 'Les chaussures ont-elles une plaque carbone ?',
        answer:
          "La Æ-REFLEX et la Æ-SLYDE intègrent une plaque carbone. L'Æ-ESSENTIAL n'en comporte pas.",
      },
    ],
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────

function AccordionItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-naets-light-gray last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
      >
        <span
          className="font-sans text-naets-near-black"
          style={{ fontSize: 14, letterSpacing: '0.01em', fontWeight: 500, lineHeight: 1.5 }}
        >
          {question}
        </span>
        <span className="shrink-0 text-naets-dark-gray group-hover:text-naets-black transition-colors duration-150">
          {open ? <Minus size={14} strokeWidth={1.5} /> : <Plus size={14} strokeWidth={1.5} />}
        </span>
      </button>

      {open && (
        <div className="pb-5 pr-8">
          <p
            className="font-sans text-naets-dark-gray leading-relaxed"
            style={{ fontSize: 13, letterSpacing: '0.02em', lineHeight: 1.8 }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  return (
    <main>

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-20 pb-20 px-8 md:px-16 overflow-hidden"
        style={{ backgroundColor: '#111111' }}
        aria-labelledby="faq-title"
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
        <span className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white/20" aria-hidden="true" />
        <span className="absolute top-8 right-8 w-5 h-5 border-t border-r border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white/20" aria-hidden="true" />
        <span className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-white/20" aria-hidden="true" />

        <div className="relative z-10 max-w-screen-xl mx-auto">
          <p
            className="font-sans text-naets-dark-gray uppercase mb-6"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            ASSISTANCE — FAQ
          </p>
          <h1
            id="faq-title"
            className="font-condensed text-white leading-none mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(64px, 10vw, 120px)',
              letterSpacing: '0.02em',
            }}
          >
            QUESTIONS
            <br />
            FRÉQUENTES
          </h1>
          <p
            className="font-sans text-naets-mid-gray"
            style={{ fontSize: 14, letterSpacing: '0.03em' }}
          >
            Trouvez rapidement une réponse à vos questions.
          </p>
        </div>
      </section>

      {/* ── FAQ CATEGORIES ─────────────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-0 divide-y divide-naets-light-gray border border-naets-light-gray">
            {FAQ_DATA.map((category) => (
              <div key={category.id}>
                {/* Category header */}
                <div className="px-8 pt-10 pb-4">
                  <p
                    className="font-sans text-naets-black uppercase"
                    style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 600 }}
                  >
                    {category.label}
                  </p>
                </div>
                {/* Questions */}
                <div className="px-8 pb-4">
                  {category.items.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-16 px-8 md:px-16 border-t border-naets-light-gray"
        style={{ backgroundColor: '#F5F5F2' }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="font-sans text-naets-dark-gray uppercase mb-2"
              style={{ fontSize: 11, letterSpacing: '0.2em' }}
            >
              ASSISTANCE — CONTACT
            </p>
            <p
              className="font-condensed text-naets-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '0.02em',
              }}
            >
              VOUS N&apos;AVEZ PAS TROUVÉ VOTRE RÉPONSE ?
            </p>
          </div>
          <a
            href="mailto:contact@naets.fr"
            className="inline-flex items-center gap-3 shrink-0 font-sans font-medium bg-naets-black text-white px-10 py-4 transition-colors duration-150 hover:bg-naets-near-black"
            style={{ fontSize: 11, letterSpacing: '0.15em' }}
          >
            NOUS CONTACTER
          </a>
        </div>
      </section>

    </main>
  );
}
