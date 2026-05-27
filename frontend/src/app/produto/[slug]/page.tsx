import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS_SEED, PRODUCT_CATEGORIES } from '@atelie-encantarte/shared';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { WhatsAppButton } from '../../../components/WhatsAppButton';
import { ProductCard } from '../../../components/ProductCard';
import styles from './page.module.css';

// ---------------------------------------------------------------------------
// SSG — gera uma rota estática por slug em build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return PRODUCTS_SEED.map((p) => ({ slug: p.slug }));
}

// ---------------------------------------------------------------------------
// Metadata dinâmico por produto
// ---------------------------------------------------------------------------
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = PRODUCTS_SEED.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: { images: [product.images[0]?.url] },
  };
}

// ---------------------------------------------------------------------------
// Utilitário de formatação
// ---------------------------------------------------------------------------
function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ---------------------------------------------------------------------------
// Página de detalhe do produto
// ---------------------------------------------------------------------------
export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS_SEED.find((p) => p.slug === params.slug);

  // Slug inválido → 404
  if (!product) {
    notFound();
  }

  const category = PRODUCT_CATEGORIES.find((c) => c.slug === product.category);

  // Mensagens personalizadas para o WhatsApp
  const whatsappMessage = product.priceFromBRL
    ? `Olá! Vi o produto "${product.name}" no site do Ateliê Encantarte e gostaria de encomendar.`
    : `Olá! Tenho interesse na peça "${product.name}" e gostaria de solicitar um orçamento.`;

  const ctaLabel = product.priceFromBRL ? 'Encomendar pelo WhatsApp' : 'Solicitar orçamento';

  // Produtos sugeridos da mesma categoria (sem o atual)
  const suggestions = PRODUCTS_SEED.filter(
    (p) => p.category === product.category && p.slug !== product.slug && p.isAvailable,
  ).slice(0, 3);

  // Schema.org Product
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    image: product.images[0]?.url,
    ...(product.priceFromBRL && {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BRL',
        price: product.priceFromBRL,
        availability: 'https://schema.org/InStock',
      },
    }),
  };

  return (
    <>
      {/* Schema.org inline */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className={styles.page}>
        <div className={styles.inner}>
          {/* Breadcrumb: Início > Catálogo > [Categoria] > [Nome] */}
          <Breadcrumb
            items={[
              { label: 'Início', href: '/' },
              { label: 'Catálogo', href: '/catalogo' },
              ...(category
                ? [{ label: category.name, href: `/catalogo/${product.category}` }]
                : []),
              { label: product.name },
            ]}
          />

          {/* Layout principal: imagem + dados */}
          <div className={styles.product}>
            {/* Imagem principal */}
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  width={600}
                  height={600}
                  className={styles.image}
                  priority
                />
              </div>
            </div>

            {/* Dados do produto */}
            <div className={styles.details}>
              {/* Categoria (link) */}
              {category && (
                <Link href={`/catalogo/${product.category}`} className={styles.category}>
                  {category.name}
                </Link>
              )}

              <h1 className={styles.name}>{product.name}</h1>

              <p className={styles.description}>{product.longDescription}</p>

              {/* Preço ou "Sob encomenda" */}
              <div className={styles.priceSection}>
                {product.priceFromBRL !== undefined ? (
                  <p className={styles.price}>
                    <span className={styles.priceFrom}>a partir de </span>
                    <span className={styles.priceValue}>{formatBRL(product.priceFromBRL)}</span>
                  </p>
                ) : (
                  <p className={styles.priceOnRequest}>Sob encomenda</p>
                )}
              </div>

              {/* CTA WhatsApp */}
              <div className={styles.cta}>
                <WhatsAppButton
                  variant="inline"
                  message={whatsappMessage}
                  label={ctaLabel}
                />
                <p className={styles.ctaSupport}>
                  Respondemos em até 24h ✦ Feito à mão com carinho
                </p>
              </div>

              {/* Tags */}
              {product.tags.length > 0 && (
                <div className={styles.tags}>
                  {product.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sugestões da mesma categoria */}
          {suggestions.length > 0 && (
            <section className={styles.suggestions}>
              <h2 className={styles.suggestionsTitle}>Você também pode gostar</h2>
              <div className={styles.suggestionsGrid}>
                {suggestions.map((p) => (
                  <ProductCard
                    key={p.id}
                    slug={p.slug}
                    name={p.name}
                    shortDescription={p.shortDescription}
                    image={{ src: p.images[0].url, alt: p.images[0].alt }}
                    priceFromBRL={p.priceFromBRL}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
