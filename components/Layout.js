import Header from './Header';
import Footer from './Footer';
import layoutStyles from '../styles/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <div className={layoutStyles.container}>
        <Header />
        <main className={layoutStyles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
