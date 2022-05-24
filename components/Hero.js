import Image from 'next/image';

export default function Hero() {
  return (
    <div style={{ display: 'block' }}>
      <Image
        layout="responsive"
        width="6000"
        height="4000"
        src="/images/hero.jpg"
      />
    </div>
  );
}
