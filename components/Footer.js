// components/Footer.js
import styles from '../styles/Layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Digital Market Group. Todos los derechos reservados.</p>
    </footer>
  );
}