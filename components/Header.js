import Link from 'next/link';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from '../styles/Header.module.scss';

import Hamburger from 'hamburger-react';

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const shouldAddEventHandler = false;

  function close() {
    setOpen(!isOpen);
  }

  let menu;

  if (isOpen) {
    menu = (
      <nav className={styles.mobilenav} onClick={close}>
        <Link toggled={isOpen} toggle={setOpen} href="/photographs">
          Photographs
        </Link>
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
    );
  }

  return (
    <header className={styles.container}>
      <Link href="/">
        <img
          onClick={isOpen ? close : undefined}
          className={styles.logo}
          src="/logo2.png"
          alt="Wassim Serhan Photography"
        />
      </Link>

      <Hamburger toggled={isOpen} toggle={setOpen} />
      {menu}

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
    </header>
  );
}
