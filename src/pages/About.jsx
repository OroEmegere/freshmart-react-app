const values = [
  { title: "Our Mission", text: "To make fresh, affordable groceries easy to buy for every household." },
  { title: "Our Vision", text: "To become the most trusted online supermarket in our community." },
  { title: "Our Values", text: "Freshness, fair prices, honest service and fast delivery." },
];

function InfoCard({ title, text }) {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function About() {
  return (
    <section className="page">
      <h1>About FreshMart</h1>
      <p className="lead">
        FreshMart is an online supermarket that sells fresh fruits, vegetables,
        dairy products, bakery items and drinks. Customers browse our products,
        add what they need to a cart and have it delivered.
      </p>

      <h2>Our Story</h2>
      <p>
        FreshMart started in 2020 as a small neighbourhood grocery shop. As more
        customers asked for home delivery, we built an online store so shopping
        for fresh food could be quick, simple and stress-free.
      </p>

      <div className="info-grid">
        {values.map((v) => (
          <InfoCard key={v.title} title={v.title} text={v.text} />
        ))}
      </div>
    </section>
  );
}

export default About;