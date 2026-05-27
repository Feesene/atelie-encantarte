import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  image: { src: string; alt: string };
  priceFromBRL?: number;
}

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function ProductCard({ slug, name, shortDescription, image, priceFromBRL }: ProductCardProps) {
  return (
    <Link href={`/produto/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image.src} alt={image.alt} width={400} height={400} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{shortDescription}</p>
        {priceFromBRL !== undefined ? (
          <p className={styles.price}>
            <span className={styles.priceLabel}>a partir de </span>
            {formatBRL(priceFromBRL)}
          </p>
        ) : (
          <p className={styles.price}>
            <span className={styles.priceLabel}>sob encomenda</span>
          </p>
        )}
      </div>
    </Link>
  );
}
