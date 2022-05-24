import Link from 'next/link';
import { useState } from 'react';
import Footer from './Footer';
import { SocialIcon } from 'react-social-icons';
import styles from '../styles/Nav.module.scss';

export default function Nav() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <img
          className={styles.logo}
          src="/logo2.png"
          alt="Wassim Serhan Photography"
        />
      </Link>

      <nav className={styles.mainnav}>
        <Link href="/photographs">Photographs</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <br />
        <SocialIcon
          url="https://instagram.com/wassimserhan"
          target="_blank"
          rel="noopener"
          bgColor="#d1d1d1"
          style={{ height: 20, width: 20 }}
        />
      </nav>

      <Footer />
    </header>
  );
}
