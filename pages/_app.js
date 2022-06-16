import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wassim Serhan Photography</title>
        <meta
          name="description"
          content="Wassim Serhan is a street photographer based in NYC."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="keywords" content="street photography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
