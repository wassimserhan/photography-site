import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <nav className={styles.mainnav}>
        <img
          className={styles.logo}
          src="/logo.png"
          alt="Wassim Serhan Photography"
        />
        <a href="#">Street Photography</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
