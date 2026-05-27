import Image from 'next/image';
import styles from './PortfolioCard.module.css';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: { url: string; alt: string };
  deliveredAt: string;
}

function formatDeliveryDate(isoDate: string): string {
  return new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' })
    .format(new Date(isoDate));
}

export function PortfolioCard({ title, description, image, deliveredAt }: PortfolioCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image.url} alt={image.alt} width={600} height={400} />
      </div>
      <div className={styles.body}>
        <p className={styles.date}>{formatDeliveryDate(deliveredAt)}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
