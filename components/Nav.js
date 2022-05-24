import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Nav.module.scss';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default function Nav() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <img
          className={styles.logo}
          src="/logo.png"
          alt="Wassim Serhan Photography"
        />
      </Link>

      <nav className={styles.mainnav}>
        <Link href="/photographs">Photographs</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
