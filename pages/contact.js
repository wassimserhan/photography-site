import styles from '../styles/Contact.module.scss';
import Form from '../components/Form';

export default function Contact() {
  return (
    <section className={styles.container}>
      <h2>Contact</h2>
      <p className={styles.description}>
        To learn more about Wassim, and inquire about prints, exhibitions and
        shows, please fill out the form below.
      </p>
      <Form />
    </section>
  );
}
