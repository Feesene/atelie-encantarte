import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Ateliê Encantarte
        </Link>
        <nav className={styles.nav} aria-label="Navegação principal">
          <Link href="/">Início</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/galeria">Galeria</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
