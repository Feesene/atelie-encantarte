import type { Metadata } from 'next';
import { PRODUCTS_SEED } from '@atelie-encantarte/shared';
import { ProductCard } from '../../components/ProductCard';
import { Breadcrumb } from '../../components/Breadcrumb';
import { CategoryFilter } from './_components/CategoryFilter';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Catálogo de Produtos',
  description:
    'Explore todos os bordados artesanais do Ateliê Encantarte: roupas personalizadas, quadros decorativos, presentes e peças exclusivas feitas à mão.',
};

export default function CatalogoPage() {
  const availableProducts = PRODUCTS_SEED.filter((p) => p.isAvailable);

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Breadcrumb
          items={[
            { label: 'Início', href: '/' },
            { label: 'Catálogo' },
          ]}
        />

        <header className={styles.header}>
          <h1 className={styles.title}>Catálogo de Produtos</h1>
          <p className={styles.subtitle}>
            Todos os bordados feitos à mão com carinho e dedicação.
          </p>
        </header>

        <CategoryFilter currentSlug={null} />

        {availableProducts.length === 0 ? (
          <p className={styles.empty}>Nenhum produto disponível no momento.</p>
        ) : (
          <div className={styles.grid}>
            {availableProducts.map((product) => (
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
