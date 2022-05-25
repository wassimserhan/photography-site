import Link from 'next/link';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';

import Hamburger from 'hamburger-react';

export default function Header() {
  const [isOpen, setOpen] = useState(false);

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
        <Image
          onClick={isOpen ? close : undefined}
          className={styles.logo}
          width="200"
          height="40"
          layout="intrinsic"
          src="/logo2.png"
          alt="Wassim Serhan Photography"
          priority
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
