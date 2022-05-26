import Nav from './Nav';
import Footer from './Footer';
import layoutStyles from '../styles/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <div className={layoutStyles.container}>
        <Nav />
        <main className={layoutStyles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
