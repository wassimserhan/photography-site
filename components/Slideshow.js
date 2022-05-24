// Import Swiper React components
import Image from 'next/image';

import styles from '../styles/Slideshow.module.scss';

import { Navigation, Keyboard, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  '/images/slide_2.jpg',
  '/images/slide_3.jpg',
  '/images/slide_4.jpg'
];

export default function Slideshow() {
  return (
    <main className={styles.gallery} style={{ position: 'relative' }}>
      <Swiper
        modules={[Navigation, Keyboard, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        keyboard
        autoplay
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {images.map((each, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                layout="responsive"
                width="3393"
                height="2545"
                src={each}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
