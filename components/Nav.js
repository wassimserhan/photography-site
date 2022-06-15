import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import styles from '../styles/Nav.module.scss';

import Hamburger from 'hamburger-react';

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [isOpen]);

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
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image
              onClick={isOpen ? close : undefined}
              width="480"
              height="107"
              layout="intrinsic"
              src="/logo3.png"
              alt="Wassim Serhan Photography"
              priority
            />
          </a>
        </Link>
      </div>

      <Hamburger aria-label="" toggled={isOpen} toggle={setOpen} />
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
