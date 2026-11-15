import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="hero">
        <h1>Welcome to FreshMart</h1>
        <p>
          FreshMart is your neighbourhood supermarket, now online. We bring fresh
          fruits, vegetables, dairy and bakery items straight to your door.
        </p>
        <Link to="/products" className="btn">Shop Now</Link>
      </section>

      <section className="page">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featured.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;