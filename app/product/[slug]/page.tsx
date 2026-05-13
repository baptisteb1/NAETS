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
  return {
    title: `${product.name} | NÆTS`,
    description: product.shortDescription,
  };
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

  return <ProductPageContent product={product} related={related} />;
}
