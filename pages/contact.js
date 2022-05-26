import styles from '../styles/Contact.module.scss';
import Form from '../components/Form';

export default function Contact() {
  return (
    <section className={styles.container}>
      <h2>Contact</h2>
      <p>Question? Something nice to say? We’d love to hear it.</p>
      <Form />
    </section>
  );
}
