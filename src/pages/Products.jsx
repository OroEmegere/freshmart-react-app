import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="page">
      <h1>Our Products</h1>

      <input
        className="search"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === category ? "filter active" : "filter"}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {filtered.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;