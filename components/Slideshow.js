import { useState } from 'react';

// Import Swiper React components
import Image from 'next/image';

import styles from '../styles/Slideshow.module.scss';

import { Navigation, Keyboard, Thumbs, FreeMode } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

export default function Slideshow({ photos }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className={styles.gallery} style={{ position: 'relative' }}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }}
        modules={[Navigation, Keyboard, Thumbs, FreeMode]}
        spaceBetween={10}
        navigation={true}
        slidesPerView={1}
        keyboard
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                layout="intrinsic"
                width="1024"
                height="683"
                src={photo.image}
                alt="photographs"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        loop={true}
        watchSlidesProgress={true}
        modules={[Navigation, Keyboard, Thumbs, FreeMode]}
        className="mySwiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                layout="intrinsic"
                width="1024"
                height="683"
                src={photo.image}
                alt="photographs"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
