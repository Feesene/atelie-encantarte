import Image from 'next/image';
import styles from './BrandStory.module.css';

/**
 * Texto draft baseado na entrevista de descoberta.
 * Deve ser revisado pela artesã antes do go-live.
 */
export function BrandStory() {
  return (
    <section className={styles.section} id="historia">
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <Image
            src="/portifolio/bordado-A.jpeg"
            alt="Artesã do Ateliê Encantarte trabalhando em um bordado"
            width={500}
            height={625}
          />
        </div>
        <div className={styles.content}>
          <h2>Nossa história</h2>
          <p>
            O Ateliê Encantarte nasceu do encanto por transformar tecido, linha e tempo em peças
            cheias de afeto. Cada bordado é pensado, desenhado e costurado à mão, no ritmo lento e
            atento que a arte artesanal pede.
          </p>
          <p>
            Acreditamos que um presente bordado carrega mais que pontos: carrega memória, dedicação
            e a sensação de ter sido pensado com cuidado para alguém especial. É por isso que cada
            peça é única — feita para alguém único.
          </p>
          <p>
            Nossas roupas, quadros e presentes personalizados são pequenas obras de arte para
            decorar a vida, celebrar momentos e eternizar histórias.
          </p>
        </div>
      </div>
    </section>
  );
}
