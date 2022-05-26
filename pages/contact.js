import styles from '../styles/Contact.module.scss';
import Form from '../components/Form';

export default function Contact() {
  return (
    <section className={styles.container}>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel,
        fuga libero esse, modi omnis magnam ex atque facere adipisci praesentium
        tenetur rem, iste voluptatum at ipsa cumque labore vitae!
      </p>
      <Form />
    </section>
  );
}
