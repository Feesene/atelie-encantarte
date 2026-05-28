import Link from 'next/link';
import { PRODUCT_CATEGORIES, PRODUCTS_SEED } from '@atelie-encantarte/shared';
import { Hero } from '../components/Hero';
import { BrandStory } from '../components/BrandStory';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';
import { WhatsAppButton } from '../components/WhatsAppButton';
import styles from './page.module.css';

const CATEGORY_IMAGES: Record<string, { src: string; alt: string }> = {
  bastidores: {
    src: '/portifolio/bordado-laviniaelivia.jpeg',
    alt: 'Capa da categoria Bastidor Porta Maternidade',
  },
  quadros: {
    src: '/portifolio/quadro-rafaela.jpeg',
    alt: 'Capa da categoria Quadros',
  },
  toalhas: {
    src: '/portifolio/toalha-cecilia.jpeg',
    alt: 'Capa da categoria Toalhas Personalizadas',
  },
};

export default function HomePage() {
  const featured = PRODUCTS_SEED.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <main>
      <Hero />

      <BrandStory />

      <section className={styles.sectionAlt} id="categorias">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <h2>Nossas categorias</h2>
            <p>Explore as criações do ateliê, organizadas para você encontrar a peça perfeita.</p>
          </div>
          <div className={styles.grid}>
            {PRODUCT_CATEGORIES.map((category) => (
              <CategoryCard
                key={category.slug}
                slug={category.slug}
                name={category.name}
                description={category.description}
                image={CATEGORY_IMAGES[category.slug]!}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="destaques">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <h2>Destaques</h2>
            <p>Algumas das peças mais queridas do ateliê, escolhidas a dedo.</p>
          </div>
          <div className={styles.gridProducts}>
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                shortDescription={product.shortDescription}
                priceFromBRL={product.priceFromBRL}
                image={{
                  src: product.images[0].url,
                  alt: product.images[0]?.alt ?? product.name,
                }}
              />
            ))}
          </div>
          <div className={styles.center}>
            <Link href="/catalogo" className={styles.linkButton}>
              Ver todos os produtos
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <h2>Tem um pedido especial em mente?</h2>
        <p>
          Cada bordado é feito com tempo e carinho. Conte-nos sua ideia pelo WhatsApp — adoramos
          transformar histórias em pontos.
        </p>
        <WhatsAppButton
          variant="inline"
          label="Conversar com a artesã"
          message="Olá! Vim pelo site e gostaria de encomendar um bordado personalizado."
        />
      </section>
    </main>
  );
}
