// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          DMG Blog
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Blog</Link>
          {/* ENLACE AÑADIDO A LA BÓVEDA */}
          <a 
            href="https://boveda.dmgcripto.com" // Asegúrate de que esta URL sea correcta
            target="_blank" 
            rel="noopener noreferrer"
          >
            Bóveda
          </a>
          <a 
            href="https://dmgcripto.com/staking"
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaButton}
          >
            Ir a la dApp de Staking
          </a>
        </div>
      </div>
    </nav>
  );
}