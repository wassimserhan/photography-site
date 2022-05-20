import { Fade } from 'react-slideshow-image';
import Image from 'next/image';
import styles from '../styles/Slideshow.module.scss';
import { useRef, useEffect } from 'react';

const Slideshow = () => {
  // setup left & right arrow methods
  const slideRef = useRef();
  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  // listen to arrow methods
  useEffect(() => {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowLeft':
          back();
          break;
        case 'ArrowRight':
          next();
          break;
      }
    });
  });

  const images = [
    '/images/slide_2.jpg',
    '/images/slide_3.jpg',
    '/images/slide_4.jpg'
  ];

  const fadeProperties = {
    duration: 5000,
    pauseOnHover: true
  };

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{ display: 'none' }}></div>,
    nextArrow: <div style={{ display: 'none' }}></div>
  };

  return (
    <main className={styles.gallery} style={{ position: 'relative' }}>
      <Fade ref={slideRef} {...fadeProperties} {...properties}>
        {images.map((each, index) => (
          <div
            key={index}
            className={styles.eachFade}
            style={{ display: 'block' }}
          >
            <Image
              layout="responsive"
              width="3393"
              height="2545"
              key={index}
              src={each}
              priority
            />
          </div>
        ))}
      </Fade>
    </main>
  );
};

export default Slideshow;
