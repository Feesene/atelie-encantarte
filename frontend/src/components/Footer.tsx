import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.column}>
          <h4>Ateliê Encantarte</h4>
          <p>Bordados artesanais únicos, feitos à mão com delicadeza.</p>
        </div>
        <div className={styles.column}>
          <h4>Navegação</h4>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/galeria">Galeria</Link>
          <Link href="/sobre">Sobre nós</Link>
        </div>
        <div className={styles.column}>
          <h4>Encontre-nos</h4>
          <a href="https://instagram.com/atelieencantartebordados" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <Link href="/sobre#contato">Contato</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {year} Ateliê Encantarte — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
