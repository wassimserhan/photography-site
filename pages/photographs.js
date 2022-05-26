import Slideshow from '../components/Slideshow';

import { loadImages } from '../lib/load-images';

export default function Photographs({ photos }) {
  return <Slideshow photos={photos} />;
}

export async function getStaticProps() {
  const photos = await loadImages();

  return {
    props: {
      photos
    }
  };
}
