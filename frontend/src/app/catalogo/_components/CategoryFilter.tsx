import Link from 'next/link';
import { PRODUCT_CATEGORIES } from '@atelie-encantarte/shared';
import type { ProductCategorySlug } from '@atelie-encantarte/shared';
import styles from './CategoryFilter.module.css';

interface CategoryFilterProps {
  currentSlug?: ProductCategorySlug | null; // null = todos
}

export function CategoryFilter({ currentSlug }: CategoryFilterProps) {
  const isAll = currentSlug == null;

  return (
    <nav className={styles.filter} aria-label="Filtrar por categoria">
      <Link
        href="/catalogo"
        className={`${styles.chip} ${isAll ? styles.active : ''}`}
        aria-current={isAll ? 'page' : undefined}
      >
        Todos
      </Link>

      {PRODUCT_CATEGORIES.map((cat) => {
        const isActive = cat.slug === currentSlug;
        return (
          <Link
            key={cat.slug}
            href={`/catalogo/${cat.slug}`}
            className={`${styles.chip} ${isActive ? styles.active : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {cat.name}
          </Link>
        );
      })}
    </nav>
  );
}
