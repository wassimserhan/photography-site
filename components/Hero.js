import Image from 'next/image';

import { buildUrl } from 'cloudinary-build-url';

const url = buildUrl('hero_gpfpmz', {
  cloud: {
    cloudName: 'dghq4cvuh'
  }
  // transformations: {
  //   effect: {
  //     name: 'pixelate',
  //     value: 40
  //   }
  // }
});

import styles from '../styles/Slideshow.module.scss';

export default function Hero() {
  return (
    <section className={styles.gallery}>
      <div className={styles.heroImage}>
        <Image
          src={url}
          alt="Domino Park in Williamsburg"
          width={1000}
          height={750}
          layout="intrinsic"
          // width="6000"
          // height="4000"
          // src="/images/hero.jpg"
          // alt="photographs"
          // priority
        />
      </div>
    </section>
  );
}
