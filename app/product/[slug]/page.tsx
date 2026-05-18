import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';
import ProductPageContent from './ProductPageContent';

// ─── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Produit introuvable | NÆTS' };

  const productUrl = `https://naets.fr/product/${product.slug}`;

  return {
    title: `${product.name} | NÆTS`,
    description: product.description,
    alternates: { canonical: productUrl },
    openGraph: {
      title: `${product.name} | NÆTS`,
      description: product.shortDescription,
      url: productUrl,
      siteName: 'NÆTS',
      locale: 'fr_FR',
      type: 'website',
      images: product.images.length > 0 ? [{ url: product.images[0] }] : [],
    },
  };
}

// ─── JSON-LD structured data ───────────────────────────────────────────────────

function ProductJsonLd({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  if (!product) return null;

  const productUrl = `https://naets.fr/product/${product.slug}`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    sku: product.id,
    brand: { '@type': 'Brand', name: 'NÆTS' },
    category: product.type,
    image: product.images,
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'EUR',
      price: product.price,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: { '@type': 'Organization', name: 'NÆTS' },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://naets.fr' },
      { '@type': 'ListItem', position: 2, name: 'Shop',    item: 'https://naets.fr/shop' },
      {
        '@type': 'ListItem',
        position: 3,
        name:
          product.category === 'chaussures'
            ? 'Chaussures'
            : product.category === 'vetements'
            ? 'Vêtements'
            : 'Accessoires',
        item: `https://naets.fr/shop?category=${product.category}`,
      },
      { '@type': 'ListItem', position: 4, name: product.name, item: productUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

// ─── Page (server component) ───────────────────────────────────────────────────

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <>
      <ProductJsonLd slug={slug} />
      <ProductPageContent product={product} related={related} />
    </>
  );
}
