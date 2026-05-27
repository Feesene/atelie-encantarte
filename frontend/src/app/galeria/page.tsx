import type { Metadata } from 'next';
import { PORTFOLIO_SEED } from '@atelie-encantarte/shared';
import { PortfolioCard } from '../../components/PortfolioCard';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Galeria | Ateliê Encantarte',
  description:
    'Veja as peças bordadas à mão entregues pelo Ateliê Encantarte — mantas, quadros e presentes personalizados feitos com carinho.',
  openGraph: {
    title: 'Galeria | Ateliê Encantarte',
    description:
      'Veja as peças bordadas à mão entregues pelo Ateliê Encantarte — mantas, quadros e presentes personalizados feitos com carinho.',
    type: 'website',
  },
};

export default function GaleriaPage() {
  return (
    <main>
      {/* ── Cabeçalho ──────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.pretitle}>Nossos trabalhos</span>
          <h1 className={styles.title}>Nossa Galeria</h1>
          <p className={styles.subtitle}>
            Cada peça que passa pelas nossas mãos conta uma história.
            Aqui você vê algumas das encomendas que entregamos com carinho.
          </p>
        </div>
      </section>

      {/* ── Grid masonry ───────────────────────────────── */}
      <section className={styles.gridSection}>
        <div className={styles.inner}>
          <div className={styles.masonryGrid}>
            {PORTFOLIO_SEED.map((item) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                deliveredAt={item.deliveredAt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Gostou do que viu?</h2>
          <p className={styles.ctaText}>
            Cada peça é única e feita sob encomenda. Fale com a gente e
            vamos criar algo especial para você.
          </p>
          <WhatsAppButton
            variant="inline"
            label="Encomendar uma peça assim"
            message="Olá! Vi a galeria do Ateliê Encantarte e gostaria de encomendar uma peça personalizada."
          />
        </div>
      </section>
    </main>
  );
}
