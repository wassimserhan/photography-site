import Image from 'next/image';

import styles from '../styles/Slideshow.module.scss';

export default function Hero() {
  return (
    <section className={styles.gallery}>
      <Image
        layout="intrinsic"
        width="3393"
        height="2545"
        src="/images/hero.jpg"
        priority
      />
    </section>
  );
}
