import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="page">
      <h1>Contact Us</h1>
      <div className="contact-layout">
        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>📍 12 Market Road, Lagos, Nigeria (sample address)</p>
          <p>📞 +234 800 000 0000 (sample number)</p>
          <p>✉️ support@freshmart.example (sample email)</p>
          <p>🕘 Mon – Sat: 8am – 8pm</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;