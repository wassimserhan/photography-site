import Slideshow from '../components/Slideshow';

export default function Photographs({ images }) {
  return <Slideshow images={images} />;
}

export async function getStaticProps() {
  const params = {
    expression: 'folder="Photographs"'
  };
  const paramString = Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET
        ).toString('base64')}`
      }
    }
  ).then(r => r.json());

  const { resources } = results;

  const images = resources.map(resource => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height
    };
  });

  return {
    props: {
      images
    }
  };
}
