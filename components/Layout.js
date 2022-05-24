import Nav from './Nav';

import styles from '../styles/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
