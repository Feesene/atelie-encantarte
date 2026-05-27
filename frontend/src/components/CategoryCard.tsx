import Link from 'next/link';
import Image from 'next/image';
import type { ProductCategorySlug } from '@atelie-encantarte/shared';
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  slug: ProductCategorySlug;
  name: string;
  description: string;
  image: { src: string; alt: string };
}

export function CategoryCard({ slug, name, description, image }: CategoryCardProps) {
  return (
    <Link href={`/catalogo/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image.src} alt={image.alt} width={400} height={300} />
      </div>
      <div className={styles.body}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
