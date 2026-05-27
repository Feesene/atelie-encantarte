import Link from 'next/link';
import Image from 'next/image';
import { WhatsAppButton } from './WhatsAppButton';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.brandName}>Ateliê Encantarte</h1>
          <p className={styles.subtitle}>
            Bordados artesanais que carregam delicadeza, arte e emoção em cada ponto. Peças únicas,
            feitas à mão para celebrar momentos especiais.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/catalogo" className={styles.ctaPrimary}>
              Ver catálogo
            </Link>
            <WhatsAppButton variant="inline" label="Falar pelo WhatsApp" />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="https://placehold.co/600x750/720c0c/fbebc5?text=Bordado+em+destaque"
            alt="Detalhe de bordado artesanal do Ateliê Encantarte"
            width={600}
            height={750}
            priority
          />
        </div>
      </div>
    </section>
  );
}
