import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS_SEED, PRODUCT_CATEGORIES } from '@atelie-encantarte/shared';
import type { ProductCategorySlug } from '@atelie-encantarte/shared';
import { ProductCard } from '../../../components/ProductCard';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { CategoryFilter } from '../_components/CategoryFilter';
import styles from './page.module.css';

// ---------------------------------------------------------------------------
// SSG — gera uma rota estática por categoria em build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((c) => ({ categoria: c.slug }));
}

// ---------------------------------------------------------------------------
// Metadata dinâmico por categoria
// ---------------------------------------------------------------------------
export function generateMetadata({
  params,
}: {
  params: { categoria: ProductCategorySlug };
}): Metadata {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === params.categoria);

  if (!category) {
    return { title: 'Categoria não encontrada' };
  }

  return {
    title: `${category.name} Bordados`,
    description: `${category.description} Feitos à mão pelo Ateliê Encantarte.`,
  };
}

// ---------------------------------------------------------------------------
// Componente de estado vazio
// ---------------------------------------------------------------------------
function EmptyCategory({ categoryName }: { categoryName: string }) {
  return (
    <div className={styles.empty}>
      <p className={styles.emptyTitle}>Nenhum produto em {categoryName} no momento.</p>
      <p className={styles.emptyText}>
        Em breve novidades por aqui!
      </p>
      <Link href="/catalogo" className={styles.emptyLink}>
        Ver todos os produtos
      </Link>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Página da categoria
// ---------------------------------------------------------------------------
export default function CategoriaPage({
  params,
}: {
  params: { categoria: ProductCategorySlug };
}) {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === params.categoria);

  // Slug inválido → 404
  if (!category) {
    notFound();
  }

  const products = PRODUCTS_SEED.filter(
    (p) => p.category === params.categoria && p.isAvailable,
  );

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Breadcrumb
          items={[
            { label: 'Início', href: '/' },
            { label: 'Catálogo', href: '/catalogo' },
            { label: category.name },
          ]}
        />

        <header className={styles.header}>
          <h1 className={styles.title}>{category.name}</h1>
          <p className={styles.subtitle}>{category.description}</p>
        </header>

        <CategoryFilter currentSlug={params.categoria} />

        {products.length === 0 ? (
          <EmptyCategory categoryName={category.name} />
        ) : (
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                shortDescription={product.shortDescription}
                image={{
                  src: product.images[0].url,
                  alt: product.images[0].alt,
                }}
                priceFromBRL={product.priceFromBRL}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
